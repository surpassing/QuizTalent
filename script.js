// 多题库问答游戏主逻辑
import LOCALE from './locale.js';
import GameDataManager from './gameData.js';

class QuizTalentGame {
    constructor() {
        this.maxLevel = 200;
        this.dataManager = new GameDataManager();
        this.gameData = null;
        this.currentLevel = 1;
        this.attempts = 0;
        this.startTime = null;
        this.currentQuestion = null;
        this.currentQuestionId = null;
        
        // 游戏业务逻辑属性
        this.availableCategories = []; // 动态检测的题库列表
        this.isMultiCategory = false; // 是否为多题库模式
        this.categoryQuestions = {}; // 缓存各题库的题目数据
        
        this.init();
    }

    async init() {
        try {
            // 首先检测可用的题库
            await this.detectAvailableCategories();
            
            // 加载游戏数据
            this.gameData = this.dataManager.loadGameData();
            
            // 验证和初始化游戏数据
            this.gameData = this.validateGameData(this.gameData);
            
            // 初始化界面
            this.initializeTextContent();
            this.bindEvents();
            
            // 无论单题库还是多题库模式，都先显示题库选择界面
            this.showScreen('category-select-screen');
        } catch (error) {
            console.error('Game initialization failed:', error);
            this.showError('游戏初始化失败，请刷新页面重试。');
        }
    }

    // 动态检测可用的题库
    async detectAvailableCategories() {
        const knownCategories = ['music', 'poem', 'drum']; // 已知可能的题库
        const availableCategories = [];
        
        // 尝试加载每个题库来检测是否存在
        for (const category of knownCategories) {
            try {
                // 方法1：尝试动态导入
                const questionsModule = await import(`./category/${category}/questions.js`);
                const questions = questionsModule.default || questionsModule.questions;
                if (questions && questions.length > 0) {
                    availableCategories.push(category);
                    this.categoryQuestions[category] = questions;
                    console.log(`✓ Found category: ${category} (${questions.length} questions)`);
                }
            } catch (error) {
                console.log(`✗ Category ${category} not found:`, error.message);
                
                // 方法2：备用检测 - 尝试fetch检查文件是否存在
                try {
                    const response = await fetch(`./category/${category}/questions.js`);
                    if (response.ok) {
                        availableCategories.push(category);
                        console.log(`✓ Found category (via fetch): ${category}`);
                    }
                } catch (fetchError) {
                    console.log(`✗ Category ${category} not accessible via fetch:`, fetchError.message);
                }
            }
        }
        
        // 如果没有检测到任何题库，至少保留一个默认的
        if (availableCategories.length === 0) {
            console.warn('No categories detected, using fallback');
            availableCategories.push('music'); // 默认使用music作为备用
        }
        
        this.availableCategories = availableCategories;
        this.isMultiCategory = availableCategories.length > 1;
        
        console.log(`Detected ${availableCategories.length} categories:`, availableCategories);
        console.log(`Multi-category mode: ${this.isMultiCategory}`);
        
        return availableCategories;
    }

    // 获取题库的题目数据
    async getCategoryQuestions(category) {
        if (this.categoryQuestions[category]) {
            return this.categoryQuestions[category];
        }
        
        try {
            const questionsModule = await import(`./category/${category}/questions.js`);
            const questions = questionsModule.default || questionsModule.questions;
            this.categoryQuestions[category] = questions;
            return questions;
        } catch (error) {
            console.error(`Failed to load questions for category ${category}:`, error);
            return [];
        }
    }

    // 生成题目的唯一ID
    generateQuestionId(category, questionIndex, question) {
        // 使用题目内容的哈希作为ID，确保相同题目有相同ID
        const content = `${category}_${question.question}_${question.options.join('_')}_${question.correct}`;
        return this.simpleHash(content);
    }

    // 简单哈希函数
    simpleHash(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // 转换为32位整数
        }
        return Math.abs(hash).toString(36);
    }

    // 验证游戏数据完整性
    validateGameData(data) {
        // 检查必要字段
        if (!data.categories || !data.currentCategory) {
            return this.createInitialGameData();
        }

        // 确保有completedQuestions字段
        if (!data.completedQuestions) {
            data.completedQuestions = {};
        }

        // 确保所有可用题库都有数据
        this.availableCategories.forEach(category => {
            if (!data.categories[category]) {
                data.categories[category] = this.createCategoryData();
            }
        });

        // 清理不再可用的题库数据
        Object.keys(data.categories).forEach(category => {
            if (!this.availableCategories.includes(category)) {
                delete data.categories[category];
            }
        });

        // 确保当前题库是有效的
        if (!this.availableCategories.includes(data.currentCategory)) {
            data.currentCategory = this.availableCategories[0] || 'music';
        }

        // 升级旧版本数据
        if (data.version !== '3.0.0') {
            data = this.migrateOldData(data);
        }
        
        return data;
    }

    // 创建单个题库的数据
    createCategoryData() {
        return {
            currentLevel: 1,
            totalStars: 0,
            lastPlayTime: Date.now()
        };
    }

    // 创建初始游戏数据
    createInitialGameData() {
        const gameData = {
            currentCategory: this.availableCategories.length > 0 ? this.availableCategories[0] : 'music',
            categories: {},
            completedQuestions: {}, // 基于题目ID的完成记录
            gameStartTime: Date.now(),
            lastPlayTime: Date.now(),
            version: '3.0.0' // 升级版本号
        };
        
        // 为每个检测到的题库初始化数据
        this.availableCategories.forEach(category => {
            gameData.categories[category] = this.createCategoryData();
        });
        
        return gameData;
    }

    // 迁移旧版本数据
    migrateOldData(data) {
        console.log('Migrating old data format...');
        
        // 如果有旧的levelProgress数据，清理掉（因为现在基于题目ID存储）
        Object.keys(data.categories).forEach(category => {
            if (data.categories[category].levelProgress) {
                delete data.categories[category].levelProgress;
            }
            // 保留currentLevel和totalStars
            if (!data.categories[category].currentLevel) {
                data.categories[category].currentLevel = 1;
            }
            if (!data.categories[category].totalStars) {
                data.categories[category].totalStars = 0;
            }
        });

        data.version = '3.0.0';
        return data;
    }

    // 获取当前题库数据
    getCurrentCategoryData(gameData) {
        return gameData.categories[gameData.currentCategory];
    }

    // 切换题库
    switchCategory(gameData, category) {
        if (this.availableCategories.includes(category)) {
            gameData.currentCategory = category;
            this.dataManager.saveGameData(gameData);
            return true;
        }
        return false;
    }

    // 计算星星数
    calculateStars(attempts) {
        if (attempts === 1) return 3;
        if (attempts === 2) return 2;
        if (attempts === 3) return 1;
        return 0;
    }

    // 计算总星数（基于实际完成的题目）
    async calculateTotalStars(gameData, category) {
        let totalStars = 0;
        
        // 遍历所有已完成的题目，统计该题库的星数
        Object.keys(gameData.completedQuestions).forEach(questionId => {
            const questionRecord = gameData.completedQuestions[questionId];
            if (questionRecord.category === category) {
                totalStars += questionRecord.stars;
            }
        });
        
        return totalStars;
    }

    // 更新关卡进度（基于题目ID）
    async updateLevelProgress(gameData, level, attempts, completionTime = null, questionData = null) {
        const categoryData = this.getCurrentCategoryData(gameData);
        const stars = this.calculateStars(attempts);
        
        // 如果提供了题目数据，记录该题目的完成情况
        if (questionData) {
            const questionId = this.generateQuestionId(gameData.currentCategory, level - 1, questionData);
            
            // 更新题目完成记录
            if (!gameData.completedQuestions[questionId] || gameData.completedQuestions[questionId].stars < stars) {
                gameData.completedQuestions[questionId] = {
                    category: gameData.currentCategory,
                    stars: stars,
                    attempts: attempts,
                    completionTime: completionTime,
                    lastCompleted: Date.now()
                };
            }
        }

        // 解锁下一关
        if (level === categoryData.currentLevel && level < this.maxLevel) {
            categoryData.currentLevel = level + 1;
        }

        // 重新计算总星数
        categoryData.totalStars = await this.calculateTotalStars(gameData, gameData.currentCategory);
        
        return stars;
    }

    // 获取游戏统计信息
    async getGameStats(gameData, category = null) {
        const targetCategory = category || gameData.currentCategory;
        const categoryData = gameData.categories[targetCategory];
        
        // 获取该题库的题目总数
        const questions = await this.getCategoryQuestions(targetCategory);
        const totalQuestions = questions.length;
        
        // 统计已完成的题目数
        let completedQuestions = 0;
        let totalStars = 0;
        
        Object.keys(gameData.completedQuestions).forEach(questionId => {
            const questionRecord = gameData.completedQuestions[questionId];
            if (questionRecord.category === targetCategory) {
                completedQuestions++;
                totalStars += questionRecord.stars;
            }
        });
        
        return {
            completedLevels: categoryData.currentLevel - 1,
            totalLevels: this.maxLevel,
            completedQuestions: completedQuestions,
            totalQuestions: totalQuestions,
            totalStars: totalStars,
            maxStars: totalQuestions * 3, // 基于实际题目数量
            currentLevel: categoryData.currentLevel
        };
    }

    // 获取所有题库的统计信息
    async getAllCategoriesStats(gameData) {
        const stats = {};
        for (const category of this.availableCategories) {
            stats[category] = await this.getGameStats(gameData, category);
        }
        return stats;
    }

    // 获取可用题库列表
    getAvailableCategories() {
        return this.availableCategories;
    }

    // 检查是否为多题库模式
    isMultiCategoryMode() {
        return this.isMultiCategory;
    }

    // 检查题库是否存在
    categoryExists(category) {
        return this.availableCategories.includes(category);
    }

    // 获取随机题目（确保不重复已完成的题目，除非所有题目都完成了）
    async getRandomQuestion(gameData, category) {
        const questions = await this.getCategoryQuestions(category);
        if (!questions || questions.length === 0) {
            return null;
        }

        // 找出未完成的题目
        const uncompletedQuestions = [];
        questions.forEach((question, index) => {
            const questionId = this.generateQuestionId(category, index, question);
            if (!gameData.completedQuestions[questionId]) {
                uncompletedQuestions.push({ question, index, id: questionId });
            }
        });

        // 如果还有未完成的题目，从中随机选择
        if (uncompletedQuestions.length > 0) {
            const randomIndex = Math.floor(Math.random() * uncompletedQuestions.length);
            return uncompletedQuestions[randomIndex];
        }

        // 如果所有题目都完成了，从所有题目中随机选择
        const randomIndex = Math.floor(Math.random() * questions.length);
        const question = questions[randomIndex];
        const questionId = this.generateQuestionId(category, randomIndex, question);
        return { question, index: randomIndex, id: questionId };
    }

    initializeTextContent() {
        // 设置题库选择界面文本
        const categorySelectTitle = document.getElementById('category-select-title');
        if (categorySelectTitle) {
            categorySelectTitle.textContent = LOCALE.UI.CATEGORY_SELECTION.TITLE;
        }
        
        const categorySelectSubtitle = document.getElementById('category-select-subtitle');
        if (categorySelectSubtitle) {
            categorySelectSubtitle.textContent = LOCALE.UI.CATEGORY_SELECTION.SUBTITLE;
        }
        
        // 设置通用按钮文本
        const backToCategoriesBtn = document.getElementById('back-to-categories');
        if (backToCategoriesBtn) {
            backToCategoriesBtn.textContent = LOCALE.COMMON.BACK;
        }
        
        const backToHomeBtn = document.getElementById('back-to-home');
        if (backToHomeBtn) {
            backToHomeBtn.textContent = LOCALE.COMMON.BACK;
        }
        
        const backToHomeFromGameBtn = document.getElementById('back-to-home-from-game');
        if (backToHomeFromGameBtn) {
            backToHomeFromGameBtn.textContent = LOCALE.COMMON.BACK;
        }
        
        const nextLevelBtn = document.getElementById('next-level-btn');
        if (nextLevelBtn) {
            nextLevelBtn.textContent = LOCALE.COMMON.NEXT_LEVEL;
        }
        
        // 设置关卡选择页面标题
        const levelSelectTitle = document.getElementById('level-select-title');
        if (levelSelectTitle) {
            levelSelectTitle.textContent = LOCALE.COMMON.SELECT_LEVEL;
        }
        
        // 设置重置按钮文本
        const resetBtn = document.getElementById('reset-btn');
        if (resetBtn) {
            resetBtn.textContent = LOCALE.COMMON.RESET_GAME;
        }
        
        // 设置重置弹窗文本
        const resetModalTitle = document.getElementById('reset-modal-title');
        if (resetModalTitle) {
            resetModalTitle.textContent = LOCALE.UI.RESET_OPTIONS.TITLE;
        }
        
        const resetAllBtn = document.getElementById('reset-all-btn');
        if (resetAllBtn) {
            resetAllBtn.textContent = LOCALE.UI.RESET_OPTIONS.RESET_ALL;
        }
        
        const resetCurrentBtn = document.getElementById('reset-current-btn');
        if (resetCurrentBtn) {
            resetCurrentBtn.textContent = LOCALE.UI.RESET_OPTIONS.RESET_CURRENT;
        }
        
        const resetCancelBtn = document.getElementById('reset-cancel-btn');
        if (resetCancelBtn) {
            resetCancelBtn.textContent = LOCALE.UI.RESET_OPTIONS.CANCEL;
        }
    }

    bindEvents() {
        // 题库选择相关（仅在多题库模式下有效）
        const backToCategoriesBtn = document.getElementById('back-to-categories');
        if (backToCategoriesBtn) {
            backToCategoriesBtn.addEventListener('click', () => {
                if (this.isMultiCategoryMode()) {
                    this.showScreen('category-select-screen');
                }
            });
        }

        // 导航按钮
        const backToHomeBtn = document.getElementById('back-to-home');
        if (backToHomeBtn) {
            backToHomeBtn.addEventListener('click', () => {
                this.showScreen('home-screen');
            });
        }

        const backToHomeFromGameBtn = document.getElementById('back-to-home-from-game');
        if (backToHomeFromGameBtn) {
            backToHomeFromGameBtn.addEventListener('click', () => {
                this.showScreen('home-screen');
            });
        }

        // 首页按钮
        const continueBtn = document.getElementById('continue-btn');
        if (continueBtn) {
            continueBtn.addEventListener('click', () => {
                const categoryData = this.getCurrentCategoryData(this.gameData);
                this.startLevel(categoryData.currentLevel);
            });
        }

        const levelSelectBtn = document.getElementById('level-select-btn');
        if (levelSelectBtn) {
            levelSelectBtn.addEventListener('click', () => {
                this.showScreen('level-select-screen');
            });
        }

        // 重置按钮
        const resetBtn = document.getElementById('reset-btn');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                this.resetCurrentCategory();
            });
        }

        // 游戏结果按钮
        const nextLevelBtn = document.getElementById('next-level-btn');
        if (nextLevelBtn) {
            nextLevelBtn.addEventListener('click', () => {
                this.nextLevel();
            });
        }

        // 重置弹窗按钮（仅在多题库模式下使用）
        const resetAllBtn = document.getElementById('reset-all-btn');
        if (resetAllBtn) {
            resetAllBtn.addEventListener('click', () => {
                this.resetAllData();
            });
        }

        const resetCurrentBtn = document.getElementById('reset-current-btn');
        if (resetCurrentBtn) {
            resetCurrentBtn.addEventListener('click', () => {
                this.resetCurrentCategory();
            });
        }

        const resetCancelBtn = document.getElementById('reset-cancel-btn');
        if (resetCancelBtn) {
            resetCancelBtn.addEventListener('click', () => {
                this.closeResetModal();
            });
        }

        // 弹窗外部点击关闭（仅重置弹窗可以点击空白关闭）
        const resetModal = document.getElementById('reset-modal');
        if (resetModal) {
            resetModal.addEventListener('click', (e) => {
                if (e.target.id === 'reset-modal') {
                    this.closeResetModal();
                }
            });
        }
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
        
        // 根据题库模式调整界面显示
        this.updateScreenForMode();
        
        // 更新相关UI
        if (screenId === 'level-select-screen') {
            this.createLevelGrid();
        } else if (screenId === 'category-select-screen') {
            this.createCategoriesGrid();
        } else if (screenId === 'home-screen') {
            this.updateHomeScreen();
        }
    }

    // 根据单/多题库模式调整界面显示
    updateScreenForMode() {
        const backToCategoriesBtn = document.getElementById('back-to-categories');
        
        if (backToCategoriesBtn) {
            if (this.isMultiCategoryMode()) {
                // 多题库模式：显示返回题库选择按钮
                backToCategoriesBtn.style.display = 'block';
            } else {
                // 单题库模式：隐藏返回题库选择按钮
                backToCategoriesBtn.style.display = 'none';
            }
        }
    }

    // 创建题库选择网格
    async createCategoriesGrid() {
        const grid = document.getElementById('categories-grid');
        if (!grid) return;
        
        grid.innerHTML = '';

        const availableCategories = this.getAvailableCategories();
        if (availableCategories.length === 0) {
            this.showError('未找到任何可用的题库，请检查category目录下是否有有效的题库文件。');
            return;
        }

        for (const category of availableCategories) {
            const categoryConfig = LOCALE.CATEGORIES[category];
            if (!categoryConfig) continue;

            const stats = await this.getGameStats(this.gameData, category);

            const categoryBtn = document.createElement('button');
            categoryBtn.className = 'category-btn';
            
            categoryBtn.innerHTML = `
                <div class="category-icon">
                    <div class="category-icon-placeholder">${categoryConfig.DISPLAY_NAME.charAt(0)}</div>
                </div>
                <div class="category-info">
                    <h3 class="category-title">${categoryConfig.DISPLAY_NAME}</h3>
                    <p class="category-description">${categoryConfig.DESCRIPTION}</p>
                    <div class="category-stats">
                        <span class="stat">题目: ${stats.completedQuestions}/${stats.totalQuestions}</span>
                        <span class="stat">星数: ${stats.totalStars}/${stats.maxStars}</span>
                    </div>
                </div>
            `;

            categoryBtn.addEventListener('click', () => {
                this.selectCategory(category);
            });

            grid.appendChild(categoryBtn);
        }
    }

    // 选择题库
    selectCategory(category) {
        this.switchCategory(this.gameData, category);
        this.showScreen('home-screen');
    }

    // 更新首页显示
    async updateHomeScreen() {
        const categoryConfig = LOCALE.CATEGORIES[this.gameData.currentCategory];
        if (!categoryConfig) return;

        // 更新页面标题
        document.title = categoryConfig.PAGE_TITLE;
        
        // 更新游戏标题
        const gameTitleElement = document.getElementById('game-title');
        if (gameTitleElement) {
            gameTitleElement.textContent = categoryConfig.GAME_TITLE;
        }

        // 更新统计信息
        const categoryData = this.getCurrentCategoryData(this.gameData);
        const stats = await this.getGameStats(this.gameData);

        // 更新当前关卡显示
        const currentLevelDisplay = document.getElementById('current-level-display');
        if (currentLevelDisplay) {
            currentLevelDisplay.textContent = categoryData.currentLevel;
        }

        // 更新总星数显示
        const totalStarsElement = document.getElementById('total-stars');
        if (totalStarsElement) {
            totalStarsElement.textContent = stats.totalStars;
        }

        // 更新进度条（基于已完成的题目数量）
        const progressFill = document.querySelector('.progress-fill');
        const progressText = document.getElementById('progress-percentage');
        if (progressFill && progressText) {
            const percentage = stats.totalQuestions > 0 ? 
                Math.round((stats.completedQuestions / stats.totalQuestions) * 100) : 0;
            progressFill.style.width = `${percentage}%`;
            progressText.textContent = `${percentage}%`;
        }

        // 更新标签文本
        const currentLevelLabel = document.getElementById('current-level-label');
        if (currentLevelLabel) {
            currentLevelLabel.textContent = LOCALE.COMMON.CURRENT_LEVEL + ':';
        }

        const totalLevelsLabel = document.getElementById('total-levels-label');
        if (totalLevelsLabel) {
            totalLevelsLabel.textContent = LOCALE.COMMON.TOTAL_LEVELS + ':';
        }

        const totalStarsLabel = document.getElementById('total-stars-label');
        if (totalStarsLabel) {
            totalStarsLabel.textContent = LOCALE.COMMON.TOTAL_STARS + ':';
        }

        // 动态设置开始/继续游戏按钮文本
        const continueBtn = document.getElementById('continue-btn');
        if (continueBtn) {
            // 如果当前关卡是1且没有完成任何题目，显示"开始游戏"
            const isFirstTime = categoryData.currentLevel === 1 && stats.completedQuestions === 0;
            continueBtn.textContent = isFirstTime ? LOCALE.COMMON.START_GAME : LOCALE.COMMON.CONTINUE_GAME;
        }
    }

    // 创建关卡选择网格
    async createLevelGrid() {
        const grid = document.getElementById('levels-grid');
        if (!grid) return;
        
        grid.innerHTML = '';
        
        const categoryData = this.getCurrentCategoryData(this.gameData);
        
        for (let level = 1; level <= this.maxLevel; level++) {
            const levelBtn = document.createElement('button');
            levelBtn.className = 'level-btn';
            
            const isUnlocked = level <= categoryData.currentLevel;
            const isCompleted = level < categoryData.currentLevel;
            
            if (isCompleted) {
                levelBtn.classList.add('completed');
            } else if (isUnlocked) {
                levelBtn.classList.add('unlocked');
            } else {
                levelBtn.classList.add('locked');
            }
            
            // 显示关卡星数（这里简化显示，因为现在基于题目而不是关卡）
            const stars = isCompleted ? 3 : (isUnlocked && level === categoryData.currentLevel ? 0 : 0);
            
            levelBtn.innerHTML = `
                <div class="level-number">${level}</div>
                <div class="level-stars">${this.getStarsHTML(stars)}</div>
            `;
            
            if (isUnlocked) {
                levelBtn.addEventListener('click', () => {
                    this.startLevel(level);
                });
            }
            
            grid.appendChild(levelBtn);
        }
    }

    // 获取星星HTML
    getStarsHTML(stars) {
        let html = '';
        for (let i = 0; i < 3; i++) {
            if (i < stars) {
                html += '<span class="star-filled">⭐</span>';
            } else {
                html += '<span class="star-empty">☆</span>';
            }
        }
        return html;
    }

    // 开始关卡
    async startLevel(level) {
        try {
            this.currentLevel = level;
            this.attempts = 0;
            this.startTime = Date.now();
            
            // 使用新的随机题目获取方法
            const questionData = await this.getRandomQuestion(this.gameData, this.gameData.currentCategory);
            
            if (!questionData) {
                throw new Error(`题库 ${this.gameData.currentCategory} 中没有找到题目数据`);
            }
            
            // 调试信息：输出获取到的题目数据
            console.log('获取到的题目数据:', questionData);
            console.log('题目对象:', questionData.question);
            
            this.currentQuestion = questionData.question;
            this.currentQuestionId = questionData.id;
            
            this.showScreen('game-screen');
            this.displayQuestion();
        } catch (error) {
            console.error('Failed to start level:', error);
            this.showError(`加载关卡失败: ${error.message}`);
        }
    }

    // 显示题目
    displayQuestion() {
        const questionContainer = document.querySelector('.question-container');
        const optionsContainer = document.getElementById('options-container');
        const feedbackContainer = document.getElementById('feedback-container');
        
        if (!questionContainer || !optionsContainer) return;
        
        // 更新关卡信息
        const currentLevelElement = document.getElementById('current-level');
        const attemptsElement = document.getElementById('attempts');
        const levelLabelElement = document.getElementById('level-label');
        const attemptsLabelElement = document.getElementById('attempts-label');
        
        if (currentLevelElement) currentLevelElement.textContent = this.currentLevel;
        if (attemptsElement) attemptsElement.textContent = this.attempts;
        if (levelLabelElement) levelLabelElement.textContent = LOCALE.COMMON.LEVEL_LABEL;
        if (attemptsLabelElement) attemptsLabelElement.textContent = LOCALE.COMMON.ATTEMPTS;
        
        // 显示题目
        questionContainer.innerHTML = `
            <div class="question-text">${this.currentQuestion.question}</div>
            <div class="question-meta">
                <span class="category-tag">${LOCALE.CATEGORIES[this.gameData.currentCategory].DISPLAY_NAME}</span>
                <span class="difficulty-label">${LOCALE.COMMON.DIFFICULTY.LABEL}: ${this.getDifficultyText(this.currentQuestion.difficulty)}</span>
            </div>
        `;
        
        // 显示选项
        optionsContainer.innerHTML = '';
        this.currentQuestion.options.forEach((option, index) => {
            const optionBtn = document.createElement('button');
            optionBtn.className = 'option-btn';
            optionBtn.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
            optionBtn.addEventListener('click', () => this.selectOption(index));
            optionsContainer.appendChild(optionBtn);
        });
        
        // 清空反馈容器
        if (feedbackContainer) {
            feedbackContainer.innerHTML = '';
        }
    }

    // 获取难度文本
    getDifficultyText(difficulty) {
        const difficultyMap = {
            'easy': LOCALE.COMMON.DIFFICULTY.EASY,
            'medium': LOCALE.COMMON.DIFFICULTY.MEDIUM,
            'hard': LOCALE.COMMON.DIFFICULTY.HARD,
            'expert': LOCALE.COMMON.DIFFICULTY.EXPERT
        };
        return difficultyMap[difficulty] || difficulty;
    }

    // 选择选项
    selectOption(selectedIndex) {
        this.attempts++;
        
        // 调试信息：输出当前题目数据
        console.log('当前题目数据:', {
            question: this.currentQuestion.question,
            options: this.currentQuestion.options,
            correctAnswer: this.currentQuestion.correct,
            selectedIndex: selectedIndex,
            comparison: selectedIndex === this.currentQuestion.correct
        });
        
        const optionBtns = document.querySelectorAll('.option-btn');
        const feedbackContainer = document.getElementById('feedback-container');
        
        // 禁用所有选项按钮
        optionBtns.forEach(btn => btn.disabled = true);
        
        if (selectedIndex === this.currentQuestion.correct) {
            // 回答正确
            if (optionBtns[selectedIndex]) {
                optionBtns[selectedIndex].classList.add('correct');
            }
            if (feedbackContainer) {
                feedbackContainer.innerHTML = `
                    <div class="feedback-text correct">${LOCALE.COMMON.CORRECT}</div>
                `;
            }
            
            setTimeout(() => {
                this.completeLevel();
            }, 500);
        } else {
            // 回答错误
            if (optionBtns[selectedIndex]) {
                optionBtns[selectedIndex].classList.add('wrong');
            }
            
            if (feedbackContainer) {
                feedbackContainer.innerHTML = `
                    <div class="feedback-text wrong">${LOCALE.COMMON.WRONG}</div>
                    <button class="game-btn secondary" onclick="game.continueAfterWrong()">${LOCALE.COMMON.TRY_AGAIN}</button>
                `;
            }
        }
    }

    // 错误后继续
    continueAfterWrong() {
        const optionBtns = document.querySelectorAll('.option-btn');
        const feedbackContainer = document.getElementById('feedback-container');
        
        // 重新启用选项按钮并清除样式
        optionBtns.forEach(btn => {
            if (btn) {
                btn.disabled = false;
                btn.classList.remove('correct', 'wrong');
            }
        });
        
        // 清空反馈
        if (feedbackContainer) {
            feedbackContainer.innerHTML = '';
        }
    }

    // 完成关卡
    async completeLevel() {
        const completionTime = Date.now() - this.startTime;
        const stars = await this.updateLevelProgress(
            this.gameData, 
            this.currentLevel, 
            this.attempts, 
            completionTime,
            this.currentQuestion
        );
        this.dataManager.saveGameData(this.gameData);
        
        this.showResultModal(stars);
    }

    // 显示结果弹窗
    showResultModal(stars) {
        const modal = document.getElementById('result-modal');
        const starsContainer = document.getElementById('result-stars');
        const resultText = document.getElementById('result-text');
        
        if (starsContainer) {
            starsContainer.innerHTML = this.getStarsHTML(stars);
        }
        if (resultText) {
            resultText.textContent = `恭喜完成第 ${this.currentLevel} 关！`;
        }
        
        if (modal) {
            modal.classList.add('active');
        }
    }

    // 关闭弹窗
    closeModal() {
        const modal = document.getElementById('result-modal');
        if (modal) {
            modal.classList.remove('active');
        }
    }

    // 下一关
    nextLevel() {
        this.closeModal();
        if (this.currentLevel < this.maxLevel) {
            this.startLevel(this.currentLevel + 1);
        } else {
            this.showScreen('home-screen');
        }
    }

    closeResetModal() {
        const modal = document.getElementById('reset-modal');
        if (modal) {
            modal.classList.remove('active');
        }
    }

    resetAllData() {
        if (confirm(LOCALE.UI.RESET_OPTIONS.CONFIRM_ALL)) {
            this.dataManager.resetGameData();
            this.gameData = this.dataManager.loadGameData();
            this.closeResetModal();
            this.showScreen('category-select-screen');
        }
    }

    resetCurrentCategory() {
        const categoryName = LOCALE.CATEGORIES[this.gameData.currentCategory].DISPLAY_NAME;
        if (confirm(`确定要重置 ${categoryName} 的进度吗？`)) {
            this.dataManager.resetGameData(this.gameData.currentCategory);
            this.gameData = this.dataManager.loadGameData();
            this.closeResetModal();
            this.updateHomeScreen();
        }
    }

    showError(message) {
        alert(message);
    }
}

// 创建游戏实例
const game = new QuizTalentGame();

// 导出到全局作用域以便HTML中的onclick使用
window.game = game;

// 防止意外刷新
window.addEventListener('beforeunload', (e) => {
    if (game && game.attempts > 0) {
        e.preventDefault();
        // 现代浏览器会显示标准确认对话框，不需要自定义消息
        return '';
    }
});