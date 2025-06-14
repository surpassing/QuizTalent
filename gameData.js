// 游戏数据存档模块 - 只负责数据存储和基本操作
// 
// 数据结构说明：
// gameData = {
//     currentCategory: 'music',           // 当前选中的题库
//     categories: {                       // 各题库的关卡数据
//         'music': {                      // 题库名称
//             currentLevel: 5,            // 当前解锁到第几关
//             totalStars: 12,             // 该题库总获得星数
//             lastPlayTime: 1234567890    // 最后游戏时间
//         },
//         'poem': {
//             currentLevel: 3,
//             totalStars: 8,
//             lastPlayTime: 1234567890
//         }
//     },
//     completedQuestions: {               // 已完成题目记录（基于题目内容哈希ID）
//         'abc123': {                     // 题目ID（由题目内容生成的唯一哈希）
//             category: 'music',          // 所属题库
//             stars: 3,                   // 获得星数（1-3星）
//             attempts: 1,                // 尝试次数
//             completionTime: 5000,       // 完成用时（毫秒）
//             lastCompleted: 1234567890   // 完成时间戳
//         }
//     },
//     gameStartTime: 1234567890,          // 游戏首次启动时间
//     lastPlayTime: 1234567890,           // 最后游戏时间
//     version: '3.0.0'                    // 数据版本号
// }

class GameDataManager {
    constructor() {
        this.storageKey = 'quizTalentGameData';
    }

    // 加载游戏数据
    loadGameData() {
        try {
            const saved = localStorage.getItem(this.storageKey);
            if (saved) {
                const data = JSON.parse(saved);
                return data;
            }
        } catch (error) {
            console.error('Failed to load game data:', error);
        }
        
        // 返回初始化的游戏数据
        return this.createInitialGameData();
    }

    // 创建初始游戏数据结构
    createInitialGameData() {
        return {
            currentCategory: 'music',       // 默认题库
            categories: {},                 // 各题库关卡数据（动态添加）
            completedQuestions: {},         // 已完成题目记录
            gameStartTime: Date.now(),      // 游戏首次启动时间
            lastPlayTime: Date.now(),       // 最后游戏时间
            version: '3.0.0'                // 数据版本号
        };
    }

    // 创建单个题库的关卡数据结构
    createCategoryData() {
        return {
            currentLevel: 1,                // 当前解锁关卡
            totalStars: 0,                  // 总获得星数
            lastPlayTime: Date.now()        // 最后游戏时间
        };
    }

    // 保存游戏数据
    saveGameData(gameData) {
        try {
            gameData.lastPlayTime = Date.now();
            localStorage.setItem(this.storageKey, JSON.stringify(gameData));
            return true;
        } catch (error) {
            console.error('Failed to save game data:', error);
            return false;
        }
    }

    // 重置游戏数据
    resetGameData(category = null) {
        try {
            if (category) {
                // 重置特定题库的关卡数据
                const gameData = this.loadGameData();
                if (gameData.categories[category]) {
                    // 重置该题库的关卡进度
                    gameData.categories[category] = this.createCategoryData();
                    
                    // 清理该题库的所有题目完成记录
                    Object.keys(gameData.completedQuestions).forEach(questionId => {
                        if (gameData.completedQuestions[questionId].category === category) {
                            delete gameData.completedQuestions[questionId];
                        }
                    });
                    
                    this.saveGameData(gameData);
                }
                return gameData;
            } else {
                // 重置所有数据
                localStorage.removeItem(this.storageKey);
                return this.createInitialGameData();
            }
        } catch (error) {
            console.error('Failed to reset game data:', error);
            return null;
        }
    }
}

export default GameDataManager; 