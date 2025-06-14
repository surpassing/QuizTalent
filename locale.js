const LOCALE = {
    // 通用文本
    COMMON: {
        START_GAME: "开始游戏",
        CONTINUE_GAME: "继续游戏",
        SELECT_LEVEL: "选择关卡",
        RESET_GAME: "重置关卡",
        CURRENT_LEVEL: "当前关卡",
        TOTAL_LEVELS: "总关卡",
        TOTAL_STARS: "总星数",
        ATTEMPTS: "尝试次数",
        BACK: "返回",
        LEVEL_LABEL: "关卡",
        CORRECT: "回答正确！",
        WRONG: "回答错误",
        TRY_AGAIN: "重新答题",
        NEXT_LEVEL: "下一关",
        // 星级评价
        STARS: {
            THREE: "⭐⭐⭐",
            TWO: "⭐⭐",
            ONE: "⭐",
            ZERO: "☆☆☆",
            NOT_STARTED: "未玩"
        },
        // 难度描述
        DIFFICULTY: {
            EASY: "简单",
            MEDIUM: "普通", 
            HARD: "困难",
            EXPERT: "专家",
            LABEL: "难度"
        }
    },
    
    // 题库配置
    CATEGORIES: {
        music: {
            PAGE_TITLE: "一站到底：音乐综合",
            GAME_TITLE: "一站到底：音乐综合",
            DISPLAY_NAME: "音乐综合",
            DESCRIPTION: "包含流行音乐、乐理知识等"
        },
        poem: {
            PAGE_TITLE: "一站到底：古诗词",
            GAME_TITLE: "一站到底：古诗词", 
            DISPLAY_NAME: "古诗词",
            DESCRIPTION: "中国古典诗词文化"
        },
        drum: {
            PAGE_TITLE: "一站到底：架子鼓",
            GAME_TITLE: "一站到底：架子鼓",
            DISPLAY_NAME: "架子鼓",
            DESCRIPTION: "架子鼓技巧与知识"
        }
    },
    
    // 界面文本
    UI: {
        RESET_OPTIONS: {
            TITLE: "重置选项",
            RESET_ALL: "重置全部进度",
            RESET_CURRENT: "仅重置当前题库",
            CONFIRM_ALL: "确定要重置所有题库的进度吗？",
            CANCEL: "取消"
        },
        CATEGORY_SELECTION: {
            TITLE: "一站到底",
            SUBTITLE: "请选择你想要挑战的题库"
        }
    }
};

export default LOCALE; 