# QuizTalent

## 技术特性

### 题库检测
- 自动检测 `category/` 目录下的可用题库
- 单题库模式：只有一个题库时，直接进入游戏
- 多题库模式：多个题库时，显示题库选择界面

### 题库结构

```
category/
├── music/          # 音乐题库
│   └── questions.js
├── poem/           # 古诗词题库
│   └── questions.js
└── drum/           # 架子鼓题库
    └── questions.js
```

## 开发说明

### 添加新题库
1. 在 `category/` 目录下创建新的题库目录
2. 添加 `questions.js` 文件（参考现有格式）
3. 在 `locale.js` 中添加对应的配置
4. 游戏会自动检测并支持新题库
