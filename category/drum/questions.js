// 架子鼓问答题库 - 200道题目
// 难度分布：30%简单(60题)、30%普通(60题)、15%有难度(30题)、15%高难度(30题)、其他(20题)

const questions = [
    // 简单难度题目 (1-60)
    {
        id: 1,
        question: "架子鼓通常由几个主要组件组成？",
        options: ["军鼓、低音鼓、嗵鼓", "只有军鼓和低音鼓", "军鼓、低音鼓、踩镲", "军鼓、低音鼓、嗵鼓、踩镲"],
        correct: 3,
        difficulty: "easy",
        category: "基础知识"
    },
    {
        id: 2,
        question: "架子鼓中的Hi-Hat是什么？",
        options: ["踩镲", "军鼓", "低音鼓", "嗵鼓"],
        correct: 0,
        difficulty: "easy",
        category: "基础知识"
    },
    {
        id: 3,
        question: "《Hotel California》这首歌的鼓手是谁？",
        options: ["Randy Meisner", "Joe Walsh", "Glenn Frey", "Don Henley"],
        correct: 3,
        difficulty: "easy",
        category: "经典歌曲"
    },
    {
        id: 4,
        question: "标准架子鼓套装中，低音鼓通常用什么演奏？",
        options: ["鼓棒", "脚踏板", "手", "刷子"],
        correct: 1,
        difficulty: "easy",
        category: "基础知识"
    },
    {
        id: 5,
        question: "4/4拍中，每小节有几拍？",
        options: ["3拍", "5拍", "4拍", "6拍"],
        correct: 2,
        difficulty: "easy",
        category: "节拍乐理"
    },
    {
        id: 6,
        question: "《We Will Rock You》的演唱者是哪个乐队？",
        options: ["The Rolling Stones", "Led Zeppelin", "The Beatles", "Queen"],
        correct: 3,
        difficulty: "easy",
        category: "摇滚经典"
    },
    {
        id: 7,
        question: "军鼓通常安装在架子鼓的什么位置？",
        options: ["左边", "中间", "右边", "后面"],
        correct: 1,
        difficulty: "easy",
        category: "基础知识"
    },
    {
        id: 8,
        question: "什么是BPM？",
        options: ["鼓棒类型", "每分钟节拍数", "鼓皮材质", "鼓的尺寸"],
        correct: 1,
        difficulty: "easy",
        category: "节拍乐理"
    },
    {
        id: 9,
        question: "《Another Brick in the Wall》是哪个乐队的作品？",
        options: ["Led Zeppelin", "Deep Purple", "Pink Floyd", "Black Sabbath"],
        correct: 2,
        difficulty: "easy",
        category: "摇滚经典"
    },
    {
        id: 10,
        question: "标准鼓棒的材质通常是什么？",
        options: ["碳纤维", "金属", "塑料", "木头"],
        correct: 3,
        difficulty: "easy",
        category: "器械知识"
    },
    {
        id: 11,
        question: "踩镲通常由几片镲片组成？",
        options: ["1片", "3片", "2片", "4片"],
        correct: 2,
        difficulty: "easy",
        category: "基础知识"
    },
    {
        id: 12,
        question: "《Beat It》是谁的代表作？",
        options: ["Michael Jackson", "Prince", "Madonna", "Whitney Houston"],
        correct: 0,
        difficulty: "easy",
        category: "流行音乐"
    },
    {
        id: 13,
        question: "什么是Ride镲？",
        options: ["军鼓", "低音鼓", "嗵鼓", "用于保持节奏的大镲片"],
        correct: 3,
        difficulty: "easy",
        category: "基础知识"
    },
    {
        id: 14,
        question: "《Come As You Are》是哪个乐队的歌？",
        options: ["Pearl Jam", "Nirvana", "Alice in Chains", "Soundgarden"],
        correct: 1,
        difficulty: "easy",
        category: "摇滚经典"
    },
    {
        id: 15,
        question: "3/4拍的强弱规律是什么？",
        options: ["强强弱", "强弱弱", "弱强弱", "强弱强"],
        correct: 1,
        difficulty: "easy",
        category: "节拍乐理"
    },
    {
        id: 16,
        question: "哪位鼓手被称为'鼓神'？",
        options: ["John Bonham", "Buddy Rich", "Neil Peart", "Keith Moon"],
        correct: 1,
        difficulty: "easy",
        category: "著名鼓手"
    },
    {
        id: 17,
        question: "《Bohemian Rhapsody》是哪个乐队的作品？",
        options: ["Led Zeppelin", "Queen", "The Beatles", "The Who"],
        correct: 1,
        difficulty: "easy",
        category: "摇滚经典"
    },
    {
        id: 18,
        question: "鼓皮分为哪两种主要类型？",
        options: ["打击面和共鸣面", "厚皮和薄皮", "白皮和黑皮", "大皮和小皮"],
        correct: 0,
        difficulty: "easy",
        category: "器械知识"
    },
    {
        id: 19,
        question: "《Sweet Child O' Mine》是哪个乐队的歌？",
        options: ["Bon Jovi", "Aerosmith", "Guns N' Roses", "Def Leppard"],
        correct: 2,
        difficulty: "easy",
        category: "摇滚经典"
    },
    {
        id: 20,
        question: "什么是Ghost Note？",
        options: ["隐藏的音符", "错误的音符", "丢失的音符", "轻击产生的微弱音符"],
        correct: 3,
        difficulty: "easy",
        category: "演奏技巧"
    },
    {
        id: 21,
        question: "《Billie Jean》的鼓手是谁？",
        options: ["Steve Gadd", "Jeff Porcaro", "Vinnie Colaiuta", "Dennis Chambers"],
        correct: 1,
        difficulty: "easy",
        category: "流行音乐"
    },
    {
        id: 22,
        question: "低音鼓也被称为什么？",
        options: ["Snare Drum", "Tom Drum", "Kick Drum", "Floor Tom"],
        correct: 2,
        difficulty: "easy",
        category: "基础知识"
    },
    {
        id: 23,
        question: "《Smoke on the Water》是哪个乐队的歌？",
        options: ["Led Zeppelin", "Deep Purple", "Black Sabbath", "Rainbow"],
        correct: 1,
        difficulty: "easy",
        category: "摇滚经典"
    },
    {
        id: 24,
        question: "标准架子鼓有几个嗵鼓？",
        options: ["4个", "3个", "2个", "5个"],
        correct: 2,
        difficulty: "easy",
        category: "基础知识"
    },
    {
        id: 25,
        question: "《My Generation》是哪个乐队的代表作？",
        options: ["The Kinks", "The Who", "The Animals", "The Yardbirds"],
        correct: 1,
        difficulty: "easy",
        category: "摇滚经典"
    },
    {
        id: 26,
        question: "什么是Fill？",
        options: ["主节奏", "尾奏", "前奏", "过门段落"],
        correct: 3,
        difficulty: "easy",
        category: "演奏技巧"
    },
    {
        id: 27,
        question: "《Stairway to Heaven》是哪个乐队的作品？",
        options: ["Pink Floyd", "Led Zeppelin", "The Beatles", "The Rolling Stones"],
        correct: 1,
        difficulty: "easy",
        category: "摇滚经典"
    },
    {
        id: 28,
        question: "镲片的主要材质是什么？",
        options: ["钢", "铁", "铝", "铜合金"],
        correct: 3,
        difficulty: "easy",
        category: "器械知识"
    },
    {
        id: 29,
        question: "《Don't Stop Believin'》是哪个乐队的歌？",
        options: ["Foreigner", "Journey", "Boston", "Kansas"],
        correct: 1,
        difficulty: "easy",
        category: "摇滚经典"
    },
    {
        id: 30,
        question: "2/4拍中，每小节有几拍？",
        options: ["3拍", "4拍", "2拍", "6拍"],
        correct: 2,
        difficulty: "easy",
        category: "节拍乐理"
    },
    
    // 继续简单题目 (31-60)
    {
        id: 31,
        question: "《In the Air Tonight》的著名鼓声段落出现在歌曲的哪个部分？",
        options: ["开头", "中间部分", "结尾", "副歌"],
        correct: 1,
        difficulty: "easy",
        category: "经典歌曲"
    },
    {
        id: 32,
        question: "什么是Paradiddle？",
        options: ["鼓的品牌", "演奏风格", "鼓皮类型", "基础鼓棒练习"],
        correct: 3,
        difficulty: "easy",
        category: "演奏技巧"
    },
    {
        id: 33,
        question: "《Eye of the Tiger》是哪部电影的主题歌？",
        options: ["洛奇4", "洛奇2", "洛奇3", "洛奇5"],
        correct: 2,
        difficulty: "easy",
        category: "电影音乐"
    },
    {
        id: 34,
        question: "Floor Tom是什么？",
        options: ["踩镲", "军鼓", "Ride镲", "落地嗵鼓"],
        correct: 3,
        difficulty: "easy",
        category: "基础知识"
    },
    {
        id: 35,
        question: "《We Are the Champions》是哪个乐队的歌？",
        options: ["Journey", "Survivor", "Foreigner", "Queen"],
        correct: 3,
        difficulty: "easy",
        category: "摇滚经典"
    },
    {
        id: 36,
        question: "什么是Crash镲？",
        options: ["踩镲", "用于强调的镲片", "保持节奏的镲片", "小镲片"],
        correct: 1,
        difficulty: "easy",
        category: "基础知识"
    },
    {
        id: 37,
        question: "《Living on a Prayer》是哪个乐队的歌？",
        options: ["Whitesnake", "Def Leppard", "Europe", "Bon Jovi"],
        correct: 3,
        difficulty: "easy",
        category: "摇滚经典"
    },
    {
        id: 38,
        question: "什么是单击滚奏？",
        options: ["连续快速击打", "单次击打", "交替击打", "轻柔击打"],
        correct: 0,
        difficulty: "easy",
        category: "演奏技巧"
    },
    {
        id: 39,
        question: "《Tom Sawyer》是哪个乐队的歌？",
        options: ["Genesis", "Yes", "Rush", "King Crimson"],
        correct: 2,
        difficulty: "easy",
        category: "摇滚经典"
    },
    {
        id: 40,
        question: "标准鼓棒的长度通常是多少？",
        options: ["20英寸左右", "12英寸左右", "16英寸左右", "24英寸左右"],
        correct: 2,
        difficulty: "easy",
        category: "器械知识"
    },
    {
        id: 41,
        question: "《Livin' After Midnight》是哪个乐队的歌？",
        options: ["Motorhead", "Iron Maiden", "Black Sabbath", "Judas Priest"],
        correct: 3,
        difficulty: "easy",
        category: "重金属"
    },
    {
        id: 42,
        question: "什么是Cross Stick？",
        options: ["双手击打", "用鼓棒侧面击打", "反手击打", "交叉击打"],
        correct: 1,
        difficulty: "easy",
        category: "演奏技巧"
    },
    {
        id: 43,
        question: "《Born to Run》是谁的代表作？",
        options: ["Tom Petty", "Bob Dylan", "Neil Young", "Bruce Springsteen"],
        correct: 3,
        difficulty: "easy",
        category: "摇滚经典"
    },
    {
        id: 44,
        question: "什么是Splash镲？",
        options: ["主奏镲", "大型镲片", "踩镲", "小型效果镲"],
        correct: 3,
        difficulty: "easy",
        category: "基础知识"
    },
    {
        id: 45,
        question: "《Jump》是哪个乐队的歌？",
        options: ["Van Halen", "Def Leppard", "Whitesnake", "Ratt"],
        correct: 0,
        difficulty: "easy",
        category: "摇滚经典"
    },
    {
        id: 46,
        question: "什么是Snare off？",
        options: ["军鼓调音", "军鼓独奏", "关闭军鼓响弦", "军鼓强击"],
        correct: 2,
        difficulty: "easy",
        category: "演奏技巧"
    },
    {
        id: 47,
        question: "《Thunderstruck》是哪个乐队的歌？",
        options: ["Judas Priest", "AC/DC", "Iron Maiden", "Metallica"],
        correct: 1,
        difficulty: "easy",
        category: "重金属"
    },
    {
        id: 48,
        question: "架子鼓的英文是什么？",
        options: ["以上都对", "Drum Kit", "Drum Set", "Drums"],
        correct: 0,
        difficulty: "easy",
        category: "基础知识"
    },
    {
        id: 49,
        question: "《Dancing Queen》是哪个组合的歌？",
        options: ["Eagles", "Bee Gees", "Fleetwood Mac", "ABBA"],
        correct: 3,
        difficulty: "easy",
        category: "流行音乐"
    },
    {
        id: 50,
        question: "什么是Buzz Roll？",
        options: ["交替滚奏", "单击滚奏", "蜂鸣滚奏", "重击滚奏"],
        correct: 2,
        difficulty: "easy",
        category: "演奏技巧"
    },
    {
        id: 51,
        question: "《More Than a Feeling》是哪个乐队的歌？",
        options: ["Kansas", "Foreigner", "Journey", "Boston"],
        correct: 3,
        difficulty: "easy",
        category: "摇滚经典"
    },
    {
        id: 52,
        question: "什么是China镲？",
        options: ["小型镲片", "中国制造的镲", "中国镲，音色特殊", "装饰镲片"],
        correct: 2,
        difficulty: "easy",
        category: "基础知识"
    },
    {
        id: 53,
        question: "《Free Bird》是哪个乐队的代表作？",
        options: ["The Allman Brothers", "Credence Clearwater Revival", "ZZ Top", "Lynyrd Skynyrd"],
        correct: 3,
        difficulty: "easy",
        category: "摇滚经典"
    },
    {
        id: 54,
        question: "什么是Rim Shot？",
        options: ["同时击打鼓面和鼓圈", "只击打鼓圈", "只击打鼓面", "击打鼓边"],
        correct: 0,
        difficulty: "easy",
        category: "演奏技巧"
    },
    {
        id: 55,
        question: "《Black》是哪个乐队的歌？",
        options: ["Pearl Jam", "Nirvana", "Soundgarden", "Alice in Chains"],
        correct: 0,
        difficulty: "easy",
        category: "另类摇滚"
    },
    {
        id: 56,
        question: "鼓棒的头部形状对音色有什么影响？",
        options: ["影响音色的明亮度", "不影响音色", "只影响音量", "只影响耐用性"],
        correct: 0,
        difficulty: "easy",
        category: "器械知识"
    },
    {
        id: 57,
        question: "《Sweet Dreams》是谁的歌？",
        options: ["The Cure", "Duran Duran", "Depeche Mode", "Eurythmics"],
        correct: 3,
        difficulty: "easy",
        category: "新浪潮"
    },
    {
        id: 58,
        question: "什么是Double Bass？",
        options: ["双踩低音鼓", "两个低音鼓", "低音鼓技巧", "低音鼓配件"],
        correct: 0,
        difficulty: "easy",
        category: "演奏技巧"
    },
    {
        id: 59,
        question: "《Crazy Train》是谁的歌？",
        options: ["Black Sabbath", "Dio", "Ozzy Osbourne", "Rainbow"],
        correct: 2,
        difficulty: "easy",
        category: "重金属"
    },
    {
        id: 60,
        question: "什么是Polyrhythm？",
        options: ["快速节奏", "单一节奏", "多重节奏", "慢速节奏"],
        correct: 2,
        difficulty: "easy",
        category: "节拍乐理"
    },

    // 普通难度题目 (61-120)
    {
        id: 61,
        question: "Led Zeppelin的鼓手John Bonham在《When the Levee Breaks》中使用了什么特殊录音技术？",
        options: ["回声室录音", "楼梯间录音", "户外录音", "水下录音"],
        correct: 1,
        difficulty: "medium",
        category: "录音技术"
    },
    {
        id: 62,
        question: "什么是Linear Drumming？",
        options: ["直线排列的鼓", "线性打击，不同部位不同时击打", "线性节奏", "线性音色"],
        correct: 1,
        difficulty: "medium",
        category: "演奏技巧"
    },
    {
        id: 63,
        question: "《Take Five》这首爵士经典是几拍子？",
        options: ["5/4拍", "4/4拍", "3/4拍", "6/8拍"],
        correct: 0,
        difficulty: "medium",
        category: "爵士乐"
    },
    {
        id: 64,
        question: "Neil Peart是哪个乐队的鼓手？",
        options: ["King Crimson", "Yes", "Genesis", "Rush"],
        correct: 3,
        difficulty: "medium",
        category: "著名鼓手"
    },
    {
        id: 65,
        question: "什么是Blast Beat？",
        options: ["重击技巧", "爆炸音效", "极速交替击打技巧", "滚奏技巧"],
        correct: 2,
        difficulty: "medium",
        category: "极端金属"
    },
    {
        id: 66,
        question: "《Rosanna》的鼓手Jeff Porcaro创造了什么著名的Groove？",
        options: ["Latin groove", "Linear groove", "Ghost note groove", "Half-time shuffle"],
        correct: 3,
        difficulty: "medium",
        category: "演奏技巧"
    },
    {
        id: 67,
        question: "什么是Ostinato？",
        options: ["意大利鼓手", "重复的节奏模式", "鼓的品牌", "演奏风格"],
        correct: 1,
        difficulty: "medium",
        category: "音乐理论"
    },
    {
        id: 68,
        question: "Dave Grohl在加入Foo Fighters之前是哪个乐队的鼓手？",
        options: ["Pearl Jam", "Nirvana", "Soundgarden", "Alice in Chains"],
        correct: 1,
        difficulty: "medium",
        category: "著名鼓手"
    },
    {
        id: 69,
        question: "什么是Displaced Backbeat？",
        options: ["强化反拍", "双重反拍", "弱化反拍", "错位反拍"],
        correct: 3,
        difficulty: "medium",
        category: "演奏技巧"
    },
    {
        id: 70,
        question: "《In the Pocket》这个术语在鼓手中指什么？",
        options: ["鼓棒收纳", "节拍感极佳", "演奏姿势", "音色控制"],
        correct: 1,
        difficulty: "medium",
        category: "音乐术语"
    },
    {
        id: 71,
        question: "什么是Chops？",
        options: ["鼓棒类型", "演奏风格", "技术能力", "音响效果"],
        correct: 2,
        difficulty: "medium",
        category: "音乐术语"
    },
    {
        id: 72,
        question: "Keith Moon是哪个乐队的鼓手？",
        options: ["The Kinks", "The Who", "The Rolling Stones", "The Beatles"],
        correct: 1,
        difficulty: "medium",
        category: "著名鼓手"
    },
    {
        id: 73,
        question: "什么是Metric Modulation？",
        options: ["拍速转换", "音量调节", "音色变化", "节拍器使用"],
        correct: 0,
        difficulty: "medium",
        category: "音乐理论"
    },
    {
        id: 74,
        question: "《Money》(Pink Floyd)是什么拍子？",
        options: ["4/4拍", "7/4拍", "6/8拍", "5/4拍"],
        correct: 1,
        difficulty: "medium",
        category: "复杂节拍"
    },
    {
        id: 75,
        question: "什么是Jungle音乐的特征？",
        options: ["慢速节奏", "摇摆节奏", "拉丁节奏", "快速断拍鼓点"],
        correct: 3,
        difficulty: "medium",
        category: "电子音乐"
    },
    {
        id: 76,
        question: "Steve Gadd以什么演奏技巧闻名？",
        options: ["速度和力量", "爵士即兴", "复杂填充", "Ghost notes和groove"],
        correct: 3,
        difficulty: "medium",
        category: "著名鼓手"
    },
    {
        id: 77,
        question: "什么是Clave？",
        options: ["古巴乐器", "拉丁音乐的基础节奏型", "节拍器", "演奏技巧"],
        correct: 1,
        difficulty: "medium",
        category: "世界音乐"
    },
    {
        id: 78,
        question: "《Moby Dick》是Led Zeppelin哪位成员的鼓独奏？",
        options: ["Jimmy Page", "John Bonham", "Robert Plant", "John Paul Jones"],
        correct: 1,
        difficulty: "medium",
        category: "经典独奏"
    },
    {
        id: 79,
        question: "什么是Samba的基本节奏特征？",
        options: ["2/4拍，重音在弱拍", "4/4拍，重音在强拍", "3/4拍圆舞曲", "6/8拍复合节拍"],
        correct: 0,
        difficulty: "medium",
        category: "世界音乐"
    },
    {
        id: 80,
        question: "Vinnie Colaiuta以什么风格著称？",
        options: ["乡村音乐", "重金属", "朋克摇滚", "融合爵士和funk"],
        correct: 3,
        difficulty: "medium",
        category: "著名鼓手"
    },
    {
        id: 81,
        question: "什么是Pocket playing？",
        options: ["稳定节拍感", "快速技巧", "大音量演奏", "复杂节奏"],
        correct: 0,
        difficulty: "medium",
        category: "演奏概念"
    },
    {
        id: 82,
        question: "《Schism》(Tool)的特殊之处是什么？",
        options: ["单一节拍", "极快速度", "静音演奏", "9/8, 6/8, 7/8等变拍子"],
        correct: 3,
        difficulty: "medium",
        category: "前卫金属"
    },
    {
        id: 83,
        question: "什么是Displacement？",
        options: ["节奏错位", "音量变化", "速度变化", "音色变化"],
        correct: 0,
        difficulty: "medium",
        category: "演奏技巧"
    },
    {
        id: 84,
        question: "Dennis Chambers以什么风格闻名？",
        options: ["爵士", "Funk和R&B", "摇滚", "拉丁"],
        correct: 1,
        difficulty: "medium",
        category: "著名鼓手"
    },
    {
        id: 85,
        question: "什么是Odd Time Signature？",
        options: ["复合拍子", "偶数拍子", "奇数拍子", "单纯拍子"],
        correct: 2,
        difficulty: "medium",
        category: "音乐理论"
    },
    {
        id: 86,
        question: "《YYZ》(Rush)是什么拍子？",
        options: ["6/8拍", "4/4拍", "7/8拍", "5/4拍"],
        correct: 2,
        difficulty: "medium",
        category: "复杂节拍"
    },
    {
        id: 87,
        question: "什么是Shuffle？",
        options: ["拉丁节奏", "快速节奏", "慢速节奏", "三连音感觉的节奏"],
        correct: 3,
        difficulty: "medium",
        category: "演奏风格"
    },
    {
        id: 88,
        question: "Mike Portnoy是哪个乐队的前鼓手？",
        options: ["Queensryche", "Dream Theater", "Fates Warning", "Symphony X"],
        correct: 1,
        difficulty: "medium",
        category: "著名鼓手"
    },
    {
        id: 89,
        question: "什么是Afro-Cuban节奏？",
        options: ["非洲和古巴节奏融合", "纯非洲节奏", "纯古巴节奏", "欧洲古典节奏"],
        correct: 0,
        difficulty: "medium",
        category: "世界音乐"
    },
    {
        id: 90,
        question: "《Tom Sawyer》中Neil Peart使用了什么电子鼓技术？",
        options: ["Roland电子鼓", "Simmons电子鼓", "Yamaha电子鼓", "Alesis电子鼓"],
        correct: 1,
        difficulty: "medium",
        category: "电子鼓"
    },
    {
        id: 91,
        question: "什么是Cross-sticking？",
        options: ["两只手交叉", "鼓棒交叉演奏技巧", "鼓棒侧击", "双鼓棒技巧"],
        correct: 1,
        difficulty: "medium",
        category: "演奏技巧"
    },
    {
        id: 92,
        question: "Danny Carey是哪个乐队的鼓手？",
        options: ["Puscifer", "A Perfect Circle", "Tool", "Ashes Divide"],
        correct: 2,
        difficulty: "medium",
        category: "著名鼓手"
    },
    {
        id: 93,
        question: "什么是Bossa Nova的节奏特点？",
        options: ["轻柔的巴西节奏", "激烈的摇滚节奏", "复杂的爵士节奏", "简单的流行节奏"],
        correct: 0,
        difficulty: "medium",
        category: "世界音乐"
    },
    {
        id: 94,
        question: "《Superstition》(Stevie Wonder)的鼓手是谁？",
        options: ["Steve Gadd", "Vinnie Colaiuta", "Jeff Porcaro", "Bernard Purdie"],
        correct: 0,
        difficulty: "medium",
        category: "Funk音乐"
    },
    {
        id: 95,
        question: "什么是Brushes？",
        options: ["鼓槌", "鼓棒", "鼓刷", "鼓击"],
        correct: 2,
        difficulty: "medium",
        category: "器械知识"
    },
    {
        id: 96,
        question: "《The Dance of Eternity》(Dream Theater)的特点是什么？",
        options: ["没有节拍", "单一拍号", "只有4/4拍", "108次拍号变化"],
        correct: 3,
        difficulty: "medium",
        category: "前卫金属"
    },
    {
        id: 97,
        question: "什么是Mozambique？",
        options: ["桑巴的一种变体", "非洲鼓", "古巴节奏", "巴西乐器"],
        correct: 0,
        difficulty: "medium",
        category: "世界音乐"
    },
    {
        id: 98,
        question: "Matt Cameron先后是哪两个著名乐队的鼓手？",
        options: ["Jane's Addiction和Red Hot Chili Peppers", "Nirvana和Foo Fighters", "Alice in Chains和Stone Temple Pilots", "Soundgarden和Pearl Jam"],
        correct: 3,
        difficulty: "medium",
        category: "著名鼓手"
    },
    {
        id: 99,
        question: "什么是Paradiddle-diddle？",
        options: ["RLRL LRLR的练习模式", "RLRR LRLL的练习模式", "RRLL RRLL的练习模式", "RLLL LRRR的练习模式"],
        correct: 1,
        difficulty: "medium",
        category: "演奏技巧"
    },
    {
        id: 100,
        question: "《Roundabout》(Yes)的鼓手是谁？",
        options: ["Carl Palmer", "Phil Collins", "Alan White", "Bill Bruford"],
        correct: 0,
        difficulty: "medium",
        category: "前卫摇滚"
    },
    {
        id: 101,
        question: "什么是Drag？",
        options: ["滚奏", "装饰音，双击后单击", "重击", "轻击"],
        correct: 0,
        difficulty: "medium",
        category: "演奏技巧"
    },
    {
        id: 102,
        question: "Chad Smith是哪个乐队的鼓手？",
        options: ["Red Hot Chili Peppers", "Foo Fighters", "Jane's Addiction", "Pearl Jam"],
        correct: 2,
        difficulty: "medium",
        category: "著名鼓手"
    },
    {
        id: 103,
        question: "什么是Reggae的基本特征？",
        options: ["重音在1和3拍", "重音在2和4拍的后半拍", "重音在每拍", "没有重音"],
        correct: 1,
        difficulty: "medium",
        category: "世界音乐"
    },
    {
        id: 104,
        question: "《Limelight》(Rush)使用了什么拍子？",
        options: ["6/8拍", "4/4拍", "7/8拍", "5/4拍"],
        correct: 0,
        difficulty: "medium",
        category: "复杂节拍"
    },
    {
        id: 105,
        question: "什么是Flam？",
        options: ["滚奏", "单手击打", "交替击打", "装饰音，双手几乎同时击打"],
        correct: 0,
        difficulty: "medium",
        category: "演奏技巧"
    },
    {
        id: 106,
        question: "Lars Ulrich是哪个乐队的鼓手？",
        options: ["Metallica", "Megadeth", "Slayer", "Anthrax"],
        correct: 2,
        difficulty: "medium",
        category: "重金属"
    },
    {
        id: 107,
        question: "什么是Son Clave？",
        options: ["3-2或2-3的古巴节奏型", "墨西哥节奏", "阿根廷节奏", "巴西节奏"],
        correct: 3,
        difficulty: "medium",
        category: "世界音乐"
    },
    {
        id: 108,
        question: "《Pneuma》(Tool)主要使用什么拍子？",
        options: ["混合拍子", "6/8拍", "3/4拍", "4/4拍"],
        correct: 1,
        difficulty: "medium",
        category: "前卫金属"
    },
    {
        id: 109,
        question: "什么是Single Stroke Roll？",
        options: ["交替单击滚奏", "三击滚奏", "双击滚奏", "单手滚奏"],
        correct: 3,
        difficulty: "medium",
        category: "演奏技巧"
    },
    {
        id: 110,
        question: "Stewart Copeland是哪个乐队的鼓手？",
        options: ["The Police", "The Clash", "The Cars", "Devo"],
        correct: 1,
        difficulty: "medium",
        category: "新浪潮"
    },
    {
        id: 111,
        question: "什么是Mambo？",
        options: ["墨西哥舞曲", "阿根廷舞曲", "巴西舞曲", "古巴舞曲节奏"],
        correct: 3,
        difficulty: "medium",
        category: "世界音乐"
    },
    {
        id: 112,
        question: "《Freewill》(Rush)的复杂性体现在哪里？",
        options: ["只有快速演奏", "多种拍号混合", "只有大音量", "简单重复"],
        correct: 1,
        difficulty: "medium",
        category: "前卫摇滚"
    },
    {
        id: 113,
        question: "什么是Ruff？",
        options: ["装饰音，双击后单击", "三击", "单击", "四击"],
        correct: 1,
        difficulty: "medium",
        category: "演奏技巧"
    },
    {
        id: 114,
        question: "Travis Barker是哪个乐队的鼓手？",
        options: ["Blink-182", "The Offspring", "Green Day", "Sum 41"],
        correct: 3,
        difficulty: "medium",
        category: "朋克摇滚"
    },
    {
        id: 115,
        question: "什么是Tumbao？",
        options: ["古巴贝斯和鼓的组合节奏", "单纯的鼓节奏", "钢琴节奏", "吉他节奏"],
        correct: 3,
        difficulty: "medium",
        category: "世界音乐"
    },
    {
        id: 116,
        question: "《Freaky Styley》专辑中Red Hot Chili Peppers的鼓手是谁？",
        options: ["Cliff Martinez", "D.H. Peligro", "Jack Irons", "Chad Smith"],
        correct: 3,
        difficulty: "medium",
        category: "另类摇滚"
    },
    {
        id: 117,
        question: "什么是Double Stroke Roll？",
        options: ["四击滚奏", "单击滚奏", "三击滚奏", "双击滚奏"],
        correct: 3,
        difficulty: "medium",
        category: "演奏技巧"
    },
    {
        id: 118,
        question: "Roger Taylor是哪个乐队的鼓手？",
        options: ["Deep Purple", "Led Zeppelin", "The Who", "Queen"],
        correct: 3,
        difficulty: "medium",
        category: "摇滚经典"
    },
    {
        id: 119,
        question: "什么是Cha-cha-cha？",
        options: ["古巴舞曲节奏", "美国爵士", "巴西桑巴", "阿根廷探戈"],
        correct: 1,
        difficulty: "medium",
        category: "世界音乐"
    },
    {
        id: 120,
        question: "《2112》(Rush)的史诗性体现在什么方面？",
        options: ["20分钟组曲，多个拍号", "只有一个拍号", "很短的歌曲", "没有鼓"],
        correct: 0,
        difficulty: "medium",
        category: "前卫摇滚"
    },

    // 有难度题目 (121-150)
    {
        id: 121,
        question: "Gavin Harrison在Porcupine Tree中经常使用什么复杂技巧？",
        options: ["Polyrhythmic patterns", "只用脚", "只用单手", "不用镲片"],
        correct: 1,
        difficulty: "hard",
        category: "前卫摇滚"
    },
    {
        id: 122,
        question: "《Black Page》(Frank Zappa)的复杂度在于什么？",
        options: ["没有变化", "只有简单节拍", "很慢的速度", "极其复杂的节拍和音符密度"],
        correct: 0,
        difficulty: "hard",
        category: "实验音乐"
    },
    {
        id: 123,
        question: "Thomas Haake(Meshuggah)以什么技巧著称？",
        options: ["Djent节奏和复杂拍号", "简单4/4拍", "只用踩镲", "慢速演奏"],
        correct: 0,
        difficulty: "hard",
        category: "前卫金属"
    },
    {
        id: 124,
        question: "什么是Hemiola？",
        options: ["4对4的节奏", "2对2的节奏", "3对2的节奏关系", "只有单一节奏"],
        correct: 0,
        difficulty: "hard",
        category: "音乐理论"
    },
    {
        id: 125,
        question: "Virgil Donati以什么风格闻名？",
        options: ["简单摇滚", "技术性融合爵士", "乡村音乐", "流行音乐"],
        correct: 1,
        difficulty: "hard",
        category: "著名鼓手"
    },
    {
        id: 126,
        question: "《The Dance of Eternity》中有多少次拍号变化？",
        options: ["108次", "50次", "5次", "20次"],
        correct: 3,
        difficulty: "hard",
        category: "前卫金属"
    },
    {
        id: 127,
        question: "什么是Metric Displacement？",
        options: ["节拍重心的移动", "速度的变化", "音量的变化", "音色的变化"],
        correct: 2,
        difficulty: "hard",
        category: "音乐理论"
    },
    {
        id: 128,
        question: "Marco Minnemann以什么技巧著称？",
        options: ["只用脚演奏", "单手演奏", "Multi-limb independence", "不用手演奏"],
        correct: 0,
        difficulty: "hard",
        category: "著名鼓手"
    },
    {
        id: 129,
        question: "《Fracture》(King Crimson)的挑战性在于什么？",
        options: ["很慢的节奏", "只有4/4拍", "复合节拍和不规则分组", "没有鼓"],
        correct: 2,
        difficulty: "hard",
        category: "前卫摇滚"
    },
    {
        id: 130,
        question: "什么是Quintuplet？",
        options: ["五连音", "六连音", "四连音", "三连音"],
        correct: 1,
        difficulty: "hard",
        category: "音乐理论"
    },
    {
        id: 131,
        question: "Jojo Mayer在《Nerve》项目中探索了什么？",
        options: ["Drum'n'Bass的现场演奏", "古典音乐", "乡村音乐", "流行音乐"],
        correct: 3,
        difficulty: "hard",
        category: "电子音乐"
    },
    {
        id: 132,
        question: "《Larks' Tongues in Aspic》(King Crimson)使用了什么拍子？",
        options: ["没有拍子", "只有4/4拍", "只有3/4拍", "多种不规则拍子"],
        correct: 0,
        difficulty: "hard",
        category: "前卫摇滚"
    },
    {
        id: 133,
        question: "什么是Cross-rhythm？",
        options: ["交叉节奏", "快速节奏", "慢速节奏", "单一节奏"],
        correct: 3,
        difficulty: "hard",
        category: "音乐理论"
    },
    {
        id: 134,
        question: "Benny Greb以什么教学方法著称？",
        options: ["Language of Drumming", "传统军鼓教学", "爵士教学", "摇滚教学"],
        correct: 3,
        difficulty: "hard",
        category: "著名鼓手"
    },
    {
        id: 135,
        question: "《Bleed》(Meshuggah)的复杂性在于什么？",
        options: ["没有变化", "只有简单节拍", "很慢的速度", "23/16拍与4/4拍的叠加"],
        correct: 3,
        difficulty: "hard",
        category: "前卫金属"
    },
    {
        id: 136,
        question: "什么是Polymetric？",
        options: ["节拍倒转", "单一节拍", "节拍停止", "多重节拍同时进行"],
        correct: 0,
        difficulty: "hard",
        category: "音乐理论"
    },
    {
        id: 137,
        question: "Dennis Chambers在《Tower of Power》中展现了什么风格？",
        options: ["乡村音乐", "重金属", "古典音乐", "深度Funk pocket"],
        correct: 3,
        difficulty: "hard",
        category: "Funk音乐"
    },
    {
        id: 138,
        question: "《Close to the Edge》(Yes)的鼓手是谁？",
        options: ["Carl Palmer", "Phil Collins", "Alan White", "Bill Bruford"],
        correct: 0,
        difficulty: "hard",
        category: "前卫摇滚"
    },
    {
        id: 139,
        question: "什么是Nested Tuplets？",
        options: ["嵌套连音", "没有连音", "单一音符", "简单连音"],
        correct: 3,
        difficulty: "hard",
        category: "音乐理论"
    },
    {
        id: 140,
        question: "Gerald Cleaver在爵士乐中探索了什么？",
        options: ["Free jazz和多重脉冲", "传统爵士", "流行音乐", "摇滚音乐"],
        correct: 2,
        difficulty: "hard",
        category: "爵士乐"
    },
    {
        id: 141,
        question: "《The Sound of Perseverance》(Death)的鼓手是谁？",
        options: ["Richard Christy", "Sean Reinert", "Gene Hoglan", "Paul Mazurkiewicz"],
        correct: 1,
        difficulty: "hard",
        category: "极端金属"
    },
    {
        id: 142,
        question: "什么是Elvin Jones的特色技巧？",
        options: ["多重脉冲和复杂踩镲", "简单节拍", "只用军鼓", "不用踩镲"],
        correct: 3,
        difficulty: "hard",
        category: "爵士传奇"
    },
    {
        id: 143,
        question: "《One》(Metallica)中Lars Ulrich使用了什么特殊技巧？",
        options: ["单踩演奏", "Machine gun式双踩", "不用脚", "只用手"],
        correct: 1,
        difficulty: "hard",
        category: "重金属"
    },
    {
        id: 144,
        question: "什么是Phasing？",
        options: ["相位差异", "音量变化", "速度变化", "音色变化"],
        correct: 2,
        difficulty: "hard",
        category: "音乐理论"
    },
    {
        id: 145,
        question: "Brian Chippendale(Lightning Bolt)的特色是什么？",
        options: ["站立演奏和极端音量", "坐着演奏", "安静演奏", "传统演奏"],
        correct: 0,
        difficulty: "hard",
        category: "实验音乐"
    },
    {
        id: 146,
        question: "《Epitaph》(King Crimson)使用了什么拍子？",
        options: ["多变拍子", "4/4拍", "3/4拍", "2/4拍"],
        correct: 2,
        difficulty: "hard",
        category: "前卫摇滚"
    },
    {
        id: 147,
        question: "什么是Implied Pulse？",
        options: ["暗示性脉冲", "没有脉冲", "明显脉冲", "倒转脉冲"],
        correct: 1,
        difficulty: "hard",
        category: "音乐理论"
    },
    {
        id: 148,
        question: "Zach Hill(Death Grips)的演奏特点是什么？",
        options: ["安静演奏", "温和演奏", "传统演奏", "极端侵略性和复杂性"],
        correct: 0,
        difficulty: "hard",
        category: "实验音乐"
    },
    {
        id: 149,
        question: "《Discipline》(King Crimson)探索了什么概念？",
        options: ["没有概念", "简单和弦", "传统节拍", "Guitar craft和复杂节拍"],
        correct: 0,
        difficulty: "hard",
        category: "前卫摇滚"
    },
    {
        id: 150,
        question: "什么是Additive Rhythm？",
        options: ["加法节奏", "减法节奏", "乘法节奏", "除法节奏"],
        correct: 3,
        difficulty: "hard",
        category: "音乐理论"
    },

    // 高难度题目 (151-180)
    {
        id: 151,
        question: "Ikue Mori在实验音乐中使用了什么设备？",
        options: ["Drum machines和采样器", "只有原声鼓", "只有镲片", "没有乐器"],
        correct: 2,
        difficulty: "expert",
        category: "实验音乐"
    },
    {
        id: 152,
        question: "《Gorguts - Obscura》的鼓手Stephane Provencher使用了什么技巧？",
        options: ["非传统节拍和不规则重音", "传统节拍", "简单重复", "没有技巧"],
        correct: 3,
        difficulty: "expert",
        category: "极端金属"
    },
    {
        id: 153,
        question: "什么是John Zorn's Naked City项目的特点？",
        options: ["极端风格混合", "单一风格", "流行音乐", "传统爵士"],
        correct: 3,
        difficulty: "expert",
        category: "先锋音乐"
    },
    {
        id: 154,
        question: "Susie Ibarra在什么领域有所创新？",
        options: ["世界音乐融合和即兴", "传统摇滚", "乡村音乐", "流行音乐"],
        correct: 3,
        difficulty: "expert",
        category: "实验音乐"
    },
    {
        id: 155,
        question: "《Magma - Mekanik Destruktiw Kommandoh》使用了什么语言？",
        options: ["Kobaian语", "法语", "英语", "德语"],
        correct: 0,
        difficulty: "expert",
        category: "前卫摇滚"
    },
    {
        id: 156,
        question: "Chris Corsano以什么演奏方式著称？",
        options: ["古典演奏", "传统节拍", "流行演奏", "极端自由即兴"],
        correct: 0,
        difficulty: "expert",
        category: "自由即兴"
    },
    {
        id: 157,
        question: "《Ornette Coleman - Free Jazz》的鼓手是谁？",
        options: ["Ed Blackwell和Billy Higgins", "Art Blakey", "Max Roach", "Buddy Rich"],
        correct: 3,
        difficulty: "expert",
        category: "自由爵士"
    },
    {
        id: 158,
        question: "Tatsuya Yoshida(Ruins)的特色是什么？",
        options: ["传统演奏", "复杂变化", "极简主义和重复结构", "安静演奏"],
        correct: 0,
        difficulty: "expert",
        category: "日本实验"
    },
    {
        id: 159,
        question: "什么是Conduction？",
        options: ["没有指挥", "传统指挥", "Butch Morris的指挥即兴系统", "录音技术"],
        correct: 0,
        difficulty: "expert",
        category: "即兴音乐"
    },
    {
        id: 160,
        question: "Tim Daisy在Chicago场景中代表什么？",
        options: ["降音和扩展技巧", "传统爵士", "流行音乐", "摇滚音乐"],
        correct: 3,
        difficulty: "expert",
        category: "实验爵士"
    },
    {
        id: 161,
        question: "《Henry Cow - Unrest》的音乐特点是什么？",
        options: ["英国Canterbury场景", "美国南方摇滚", "意大利前卫", "德国电子"],
        correct: 2,
        difficulty: "expert",
        category: "Canterbury音乐"
    },
    {
        id: 162,
        question: "Paal Nilssen-Love在什么领域活跃？",
        options: ["流行音乐", "传统爵士", "斯堪的纳维亚自由爵士", "古典音乐"],
        correct: 0,
        difficulty: "expert",
        category: "北欧爵士"
    },
    {
        id: 163,
        question: "《Univers Zero - Heresie》属于什么运动？",
        options: ["Rock in Opposition", "Canterbury Scene", "Post-rock", "Krautrock"],
        correct: 2,
        difficulty: "expert",
        category: "前卫摇滚"
    },
    {
        id: 164,
        question: "Han Bennink的演奏特色是什么？",
        options: ["没有特色", "传统技巧", "电子设备", "物件和扩展技巧"],
        correct: 3,
        difficulty: "expert",
        category: "自由即兴"
    },
    {
        id: 165,
        question: "《Ruins - Burning Stone》的复杂性体现在哪里？",
        options: ["数学摇滚和Zeuhl影响", "没有复杂性", "传统节拍", "简单重复"],
        correct: 1,
        difficulty: "expert",
        category: "数学摇滚"
    },
    {
        id: 166,
        question: "什么是Misha Mengelberg Trio的特点？",
        options: ["解构主义爵士", "传统爵士", "古典音乐", "流行音乐"],
        correct: 3,
        difficulty: "expert",
        category: "欧洲爵士"
    },
    {
        id: 167,
        question: "Ches Smith在什么方面有所创新？",
        options: ["传统与现代的融合", "只有传统", "没有创新", "只有现代"],
        correct: 2,
        difficulty: "expert",
        category: "现代爵士"
    },
    {
        id: 168,
        question: "《Mahavishnu Orchestra - Birds of Fire》的鼓手是谁？",
        options: ["Billy Cobham", "Dennis Chambers", "Vinnie Colaiuta", "Steve Gadd"],
        correct: 0,
        difficulty: "expert",
        category: "融合爵士"
    },
    {
        id: 169,
        question: "什么是AMM的音乐理念？",
        options: ["古典结构", "传统和声", "流行旋律", "非惯用声音探索"],
        correct: 0,
        difficulty: "expert",
        category: "实验音乐"
    },
    {
        id: 170,
        question: "Tyshawn Sorey在什么领域跨界？",
        options: ["乡村和布鲁斯", "流行和摇滚", "爵士和古典作曲", "电子和舞曲"],
        correct: 0,
        difficulty: "expert",
        category: "跨界音乐"
    },
    {
        id: 171,
        question: "《Gong - You》的特点是什么？",
        options: ["迷幻和宇宙主题", "传统摇滚", "流行音乐", "古典音乐"],
        correct: 3,
        difficulty: "expert",
        category: "迷幻摇滚"
    },
    {
        id: 172,
        question: "什么是Pierre Favre的贡献？",
        options: ["欧洲自由鼓乐", "美国爵士", "拉丁音乐", "亚洲音乐"],
        correct: 0,
        difficulty: "expert",
        category: "欧洲爵士"
    },
    {
        id: 173,
        question: "《Nurse With Wound - Homotopy to Marie》的特点是什么？",
        options: ["工业和环境音乐", "古典音乐", "流行音乐", "传统摇滚"],
        correct: 3,
        difficulty: "expert",
        category: "工业音乐"
    },
    {
        id: 174,
        question: "什么是Günter Baby Sommer的特色？",
        options: ["东德自由爵士", "西德摇滚", "英国朋克", "美国布鲁斯"],
        correct: 3,
        difficulty: "expert",
        category: "欧洲爵士"
    },
    {
        id: 175,
        question: "《The Shaggs - Philosophy of the World》为什么著名？",
        options: ["反音乐和原始主义", "商业成功", "技术精湛", "主流认可"],
        correct: 2,
        difficulty: "expert",
        category: "奇异音乐"
    },
    {
        id: 176,
        question: "什么是Koichi Makigami的特色？",
        options: ["声音艺术和实验", "西方古典", "传统日本音乐", "流行音乐"],
        correct: 1,
        difficulty: "expert",
        category: "日本实验"
    },
    {
        id: 177,
        question: "《Cecil Taylor Unit - Unit Structures》的特点是什么？",
        options: ["传统爵士", "能量音乐和集体即兴", "流行音乐", "古典音乐"],
        correct: 1,
        difficulty: "expert",
        category: "自由爵士"
    },
    {
        id: 178,
        question: "什么是Ictus Ensemble的特色？",
        options: ["传统古典", "当代古典音乐", "流行音乐", "民族音乐"],
        correct: 0,
        difficulty: "expert",
        category: "当代古典"
    },
    {
        id: 179,
        question: "《Merzbow - Pulse Demon》代表什么流派？",
        options: ["极端噪音音乐", "流行音乐", "古典音乐", "民族音乐"],
        correct: 3,
        difficulty: "expert",
        category: "噪音音乐"
    },
    {
        id: 180,
        question: "什么是Hamid Drake的贡献？",
        options: ["世界音乐和自由爵士融合", "传统美国音乐", "欧洲古典", "亚洲传统"],
        correct: 3,
        difficulty: "expert",
        category: "世界爵士"
    },

    // 补充题目 (181-200)
    {
        id: 181,
        question: "什么是Ghost Note在Funk中的作用？",
        options: ["增加音量", "创造律动感", "装饰作用", "没有作用"],
        correct: 1,
        difficulty: "medium",
        category: "Funk音乐"
    },
    {
        id: 182,
        question: "《Immigrant Song》(Led Zeppelin)的特色鼓声是什么？",
        options: ["Bonham的重击", "轻柔演奏", "没有鼓", "电子鼓"],
        correct: 2,
        difficulty: "medium",
        category: "摇滚经典"
    },
    {
        id: 183,
        question: "什么是Blast Beat的起源？",
        options: ["古典音乐", "爵士乐", "Hardcore Punk", "民族音乐"],
        correct: 0,
        difficulty: "medium",
        category: "极端金属"
    },
    {
        id: 184,
        question: "Art Blakey的Jazz Messengers培养了多少著名音乐家？",
        options: ["十几名", "几十名", "数百名", "几名"],
        correct: 0,
        difficulty: "medium",
        category: "爵士传奇"
    },
    {
        id: 185,
        question: "什么是Chops Builder？",
        options: ["音乐风格", "鼓的品牌", "演奏风格", "技术练习"],
        correct: 3,
        difficulty: "easy",
        category: "练习方法"
    },
    {
        id: 186,
        question: "《Ticks and Leeches》(Tool)使用了什么拍子？",
        options: ["4/4拍", "7/8和9/8拍", "3/4拍", "2/4拍"],
        correct: 0,
        difficulty: "hard",
        category: "前卫金属"
    },
    {
        id: 187,
        question: "什么是tabla在世界音乐中的地位？",
        options: ["西方乐器", "装饰乐器", "印度古典音乐核心", "现代发明"],
        correct: 0,
        difficulty: "medium",
        category: "世界音乐"
    },
    {
        id: 188,
        question: "《Anesthesia》(Metallica)是什么类型的段落？",
        options: ["贝斯独奏", "鼓独奏", "吉他独奏", "人声独奏"],
        correct: 1,
        difficulty: "easy",
        category: "重金属"
    },
    {
        id: 189,
        question: "什么是Swing feel？",
        options: ["直拍感觉", "三连音的感觉", "拉丁感觉", "摇滚感觉"],
        correct: 0,
        difficulty: "medium",
        category: "爵士乐"
    },
    {
        id: 190,
        question: "Ringo Starr在Beatles中的贡献是什么？",
        options: ["简洁有效的节奏", "高速演奏", "大音量", "复杂技巧"],
        correct: 1,
        difficulty: "easy",
        category: "摇滚经典"
    },
    {
        id: 191,
        question: "什么是Moeller Technique？",
        options: ["鼓棒技巧", "音色技巧", "脚法技巧", "踩镲技巧"],
        correct: 3,
        difficulty: "medium",
        category: "演奏技巧"
    },
    {
        id: 192,
        question: "《Duality》(Slipknot)的鼓手是谁？",
        options: ["Jay Weinberg", "Joey Jordison", "Chris Fehn", "Craig Jones"],
        correct: 0,
        difficulty: "medium",
        category: "新金属"
    },
    {
        id: 193,
        question: "什么是Cajon？",
        options: ["军鼓", "箱鼓", "嗵鼓", "镲片"],
        correct: 0,
        difficulty: "easy",
        category: "世界乐器"
    },
    {
        id: 194,
        question: "《46 & 2》(Tool)的特殊节拍是什么？",
        options: ["7/8拍", "4/4拍", "3/4拍", "6/8拍"],
        correct: 1,
        difficulty: "medium",
        category: "前卫金属"
    },
    {
        id: 195,
        question: "什么是Brazilian Groove？",
        options: ["巴西节奏感", "美国节奏", "欧洲节奏", "亚洲节奏"],
        correct: 2,
        difficulty: "medium",
        category: "世界音乐"
    },
    {
        id: 196,
        question: "Max Roach的贡献是什么？",
        options: ["现代爵士鼓语言", "摇滚节奏", "电子音乐", "古典音乐"],
        correct: 1,
        difficulty: "medium",
        category: "爵士传奇"
    },
    {
        id: 197,
        question: "什么是Odd Meter？",
        options: ["2/4拍", "4/4拍", "3/4拍", "不规则拍子"],
        correct: 3,
        difficulty: "medium",
        category: "音乐理论"
    },
    {
        id: 198,
        question: "《Hysteria》(Muse)的特色是什么？",
        options: ["简单节拍", "复杂的贝斯线和鼓点", "没有贝斯", "没有鼓"],
        correct: 0,
        difficulty: "medium",
        category: "另类摇滚"
    },
    {
        id: 199,
        question: "什么是Linear Playing？",
        options: ["四肢同时演奏", "四肢不同时演奏", "只用双手", "只用双脚"],
        correct: 0,
        difficulty: "hard",
        category: "演奏技巧"
    },
    {
        id: 200,
        question: "Ginger Baker在Cream中的风格是什么？",
        options: ["爵士摇滚", "传统摇滚", "非洲节奏影响的摇滚", "布鲁斯摇滚"],
        correct: 2,
        difficulty: "medium",
        category: "摇滚经典"
    }
];

// 导出题库
if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
}

// ES6 模块导出
export { questions }; 