// 音乐问答题库 - 200道题目
// 难度分布：32.5%简单(65题)、37%普通(74题)、13.5%有难度(27题)、17%专家级(34题)

const questions = [
    // 简单难度题目 (1-60)
    {
        id: 1,
        question: "《月亮代表我的心》是哪位歌手的代表作？",
        options: ["邓丽君", "徐小凤", "甄妮", "蔡琴"],
        correct: 0,
        difficulty: "easy",
        category: "经典歌曲"
    },
    {
        id: 2,
        question: "下列哪个音符的时值最长？",
        options: ["四分音符", "二分音符", "全音符", "八分音符"],
        correct: 2,
        difficulty: "easy",
        category: "乐理基础"
    },
    {
        id: 3,
        question: "钢琴有多少个黑键？",
        options: ["34个", "36个", "38个", "40个"],
        correct: 1,
        difficulty: "easy",
        category: "乐器知识"
    },
    {
        id: 4,
        question: "《青花瓷》是哪位歌手演唱的？",
        options: ["林俊杰", "周杰伦", "王力宏", "陶喆"],
        correct: 1,
        difficulty: "easy",
        category: "流行歌曲"
    },
    {
        id: 5,
        question: "音乐中的4/4拍表示什么意思？",
        options: ["每小节有4拍，每拍为四分音符", "每小节有4个音符", "速度为每分钟4拍", "4个四分音符为一组"],
        correct: 0,
        difficulty: "easy",
        category: "乐理基础"
    },
    {
        id: 6,
        question: "《童话》是哪位歌手的代表作？",
        options: ["光良", "品冠", "动力火车", "5566"],
        correct: 0,
        difficulty: "easy",
        category: "流行歌曲"
    },
    {
        id: 7,
        question: "小提琴有几根弦？",
        options: ["3根", "4根", "5根", "6根"],
        correct: 1,
        difficulty: "easy",
        category: "乐器知识"
    },
    {
        id: 8,
        question: "《爱你》是哪位歌手演唱的？",
        options: ["陈奕迅", "王菲", "邓紫棋", "林宥嘉"],
        correct: 0,
        difficulty: "easy",
        category: "流行歌曲"
    },
    {
        id: 9,
        question: "C大调的主和弦是什么？",
        options: ["C-E-G", "C-D-E", "C-F-G", "C-E-F"],
        correct: 0,
        difficulty: "easy",
        category: "乐理基础"
    },
    {
        id: 10,
        question: "《听海》是谁的代表作？",
        options: ["张惠妹", "王菲", "那英", "刘若英"],
        correct: 0,
        difficulty: "easy",
        category: "经典歌曲"
    },
    {
        id: 11,
        question: "吉他通常有几根弦？",
        options: ["4根", "5根", "6根", "7根"],
        correct: 2,
        difficulty: "easy",
        category: "乐器知识"
    },
    {
        id: 12,
        question: "《十年》是哪位歌手的作品？",
        options: ["陈奕迅", "古巨基", "张学友", "郭富城"],
        correct: 0,
        difficulty: "easy",
        category: "流行歌曲"
    },
    {
        id: 13,
        question: "高音谱号又被称为什么？",
        options: ["G谱号", "F谱号", "C谱号", "D谱号"],
        correct: 0,
        difficulty: "easy",
        category: "乐理基础"
    },
    {
        id: 14,
        question: "《K歌之王》是谁演唱的？",
        options: ["陈奕迅", "古巨基", "张学友", "黄家驹"],
        correct: 0,
        difficulty: "easy",
        category: "流行歌曲"
    },
    {
        id: 15,
        question: "二胡有几根弦？",
        options: ["1根", "2根", "3根", "4根"],
        correct: 1,
        difficulty: "easy",
        category: "民族乐器"
    },
    {
        id: 16,
        question: "《遇见》是哪位女歌手的代表作？",
        options: ["孙燕姿", "蔡依林", "张韶涵", "梁静茹"],
        correct: 0,
        difficulty: "easy",
        category: "流行歌曲"
    },
    {
        id: 17,
        question: "一个八分音符等于几个十六分音符？",
        options: ["1个", "2个", "3个", "4个"],
        correct: 1,
        difficulty: "easy",
        category: "乐理基础"
    },
    {
        id: 18,
        question: "《好久不见》是谁的歌？",
        options: ["陈奕迅", "王菲", "张学友", "刘德华"],
        correct: 0,
        difficulty: "easy",
        category: "流行歌曲"
    },
    {
        id: 19,
        question: "萨克斯属于哪类乐器？",
        options: ["弦乐器", "木管乐器", "铜管乐器", "打击乐器"],
        correct: 1,
        difficulty: "easy",
        category: "乐器知识"
    },
    {
        id: 20,
        question: "《明天会更好》最初是为什么而创作的？",
        options: ["慈善活动", "演唱会", "电影主题曲", "新年祝福"],
        correct: 0,
        difficulty: "easy",
        category: "经典歌曲"
    },
    // 简单题目21-60（为了节省空间，这里显示部分题目）
    {
        id: 21,
        question: "Do Re Mi Fa Sol La Si对应的简谱是？",
        options: ["1 2 3 4 5 6 7", "A B C D E F G", "C D E F G A B", "以上都对"],
        correct: 0,
        difficulty: "easy",
        category: "乐理基础"
    },
    {
        id: 22,
        question: "《富士山下》是谁的作品？",
        options: ["陈奕迅", "张学友", "王菲", "林忆莲"],
        correct: 0,
        difficulty: "easy",
        category: "流行歌曲"
    },
    {
        id: 23,
        question: "小号属于什么乐器类型？",
        options: ["木管乐器", "铜管乐器", "弦乐器", "打击乐器"],
        correct: 1,
        difficulty: "easy",
        category: "乐器知识"
    },
    {
        id: 24,
        question: "《突然好想你》是哪个乐团的歌？",
        options: ["五月天", "信乐团", "苏打绿", "飞轮海"],
        correct: 0,
        difficulty: "easy",
        category: "流行歌曲"
    },
    {
        id: 25,
        question: "中国古代五声音阶是指？",
        options: ["宫商角徵羽", "Do Re Mi Fa Sol", "C D E F G", "1 2 3 4 5"],
        correct: 0,
        difficulty: "easy",
        category: "民族音乐"
    },
    {
        id: 26,
        question: "《稻香》是谁演唱的？",
        options: ["周杰伦", "林俊杰", "王力宏", "陶喆"],
        correct: 0,
        difficulty: "easy",
        category: "流行歌曲"
    },
    {
        id: 27,
        question: "竖琴有多少根弦？",
        options: ["37根", "47根", "57根", "67根"],
        correct: 1,
        difficulty: "easy",
        category: "乐器知识"
    },
    {
        id: 28,
        question: "《爱情转移》是谁的歌？",
        options: ["陈奕迅", "张学友", "刘德华", "古巨基"],
        correct: 0,
        difficulty: "easy",
        category: "流行歌曲"
    },
    {
        id: 29,
        question: "3/4拍的强弱规律是什么？",
        options: ["强弱弱", "强弱强", "弱强弱", "强强弱"],
        correct: 0,
        difficulty: "easy",
        category: "乐理基础"
    },
    {
        id: 30,
        question: "《龙的传人》是谁的代表作？",
        options: ["侯德健", "李建复", "罗大佑", "王力宏"],
        correct: 1,
        difficulty: "easy",
        category: "经典歌曲"
    },
    // 继续简单题目31-60
    {
        id: 31,
        question: "长笛属于哪类乐器？",
        options: ["弦乐器", "木管乐器", "铜管乐器", "打击乐器"],
        correct: 1,
        difficulty: "easy",
        category: "乐器知识"
    },
    {
        id: 32,
        question: "《千里之外》是周杰伦与谁合唱的？",
        options: ["费玉清", "刘德华", "张学友", "陈奕迅"],
        correct: 0,
        difficulty: "easy",
        category: "流行歌曲"
    },
    {
        id: 33,
        question: "钢琴的白键有多少个？",
        options: ["50个", "52个", "54个", "56个"],
        correct: 1,
        difficulty: "easy",
        category: "乐器知识"
    },
    {
        id: 34,
        question: "《安静》是哪位歌手的代表作？",
        options: ["周杰伦", "林俊杰", "王力宏", "陶喆"],
        correct: 0,
        difficulty: "easy",
        category: "流行歌曲"
    },
    {
        id: 35,
        question: "一个全音符等于几个四分音符？",
        options: ["2个", "3个", "4个", "6个"],
        correct: 2,
        difficulty: "easy",
        category: "乐理基础"
    },
    {
        id: 36,
        question: "《夜曲》的演唱者是？",
        options: ["周杰伦", "林俊杰", "王力宏", "陶喆"],
        correct: 0,
        difficulty: "easy",
        category: "流行歌曲"
    },
    {
        id: 37,
        question: "古筝有多少根弦？",
        options: ["18根", "20根", "21根", "25根"],
        correct: 2,
        difficulty: "easy",
        category: "民族乐器"
    },
    {
        id: 38,
        question: "《简单爱》是谁的歌？",
        options: ["周杰伦", "林俊杰", "王力宏", "陶喆"],
        correct: 0,
        difficulty: "easy",
        category: "流行歌曲"
    },
    {
        id: 39,
        question: "低音谱号又被称为什么？",
        options: ["G谱号", "F谱号", "C谱号", "D谱号"],
        correct: 1,
        difficulty: "easy",
        category: "乐理基础"
    },
    {
        id: 40,
        question: "《星晴》是哪位歌手的作品？",
        options: ["周杰伦", "林俊杰", "王力宏", "陶喆"],
        correct: 0,
        difficulty: "easy",
        category: "流行歌曲"
    },
    {
        id: 41,
        question: "竹笛属于哪类乐器？",
        options: ["弦乐器", "木管乐器", "铜管乐器", "打击乐器"],
        correct: 1,
        difficulty: "easy",
        category: "民族乐器"
    },
    {
        id: 42,
        question: "《回到过去》是谁演唱的？",
        options: ["周杰伦", "林俊杰", "王力宏", "陶喆"],
        correct: 0,
        difficulty: "easy",
        category: "流行歌曲"
    },
    {
        id: 43,
        question: "2/4拍的强弱规律是什么？",
        options: ["强弱", "强强", "弱强", "弱弱"],
        correct: 0,
        difficulty: "easy",
        category: "乐理基础"
    },
    {
        id: 44,
        question: "《东风破》是谁的代表作？",
        options: ["周杰伦", "林俊杰", "王力宏", "陶喆"],
        correct: 0,
        difficulty: "easy",
        category: "流行歌曲"
    },
    {
        id: 45,
        question: "架子鼓属于哪类乐器？",
        options: ["弦乐器", "木管乐器", "铜管乐器", "打击乐器"],
        correct: 3,
        difficulty: "easy",
        category: "乐器知识"
    },
    {
        id: 46,
        question: "《七里香》是谁的歌？",
        options: ["周杰伦", "林俊杰", "王力宏", "陶喆"],
        correct: 0,
        difficulty: "easy",
        category: "流行歌曲"
    },
    {
        id: 47,
        question: "中国传统乐器琵琶有几根弦？",
        options: ["3根", "4根", "5根", "6根"],
        correct: 1,
        difficulty: "easy",
        category: "民族乐器"
    },
    {
        id: 48,
        question: "《我不配》是哪位歌手演唱的？",
        options: ["周杰伦", "林俊杰", "王力宏", "陶喆"],
        correct: 0,
        difficulty: "easy",
        category: "流行歌曲"
    },
    {
        id: 49,
        question: "大调音阶有几个全音？",
        options: ["4个", "5个", "6个", "7个"],
        correct: 1,
        difficulty: "easy",
        category: "乐理基础"
    },
    {
        id: 50,
        question: "《白色恋人》是谁的作品？",
        options: ["周杰伦", "林俊杰", "王力宏", "陶喆"],
        correct: 0,
        difficulty: "easy",
        category: "流行歌曲"
    },
    {
        id: 51,
        question: "手风琴属于哪类乐器？",
        options: ["键盘乐器", "弦乐器", "管乐器", "打击乐器"],
        correct: 0,
        difficulty: "easy",
        category: "乐器知识"
    },
    {
        id: 52,
        question: "《说好的幸福呢》是谁演唱的？",
        options: ["周杰伦", "林俊杰", "王力宏", "陶喆"],
        correct: 0,
        difficulty: "easy",
        category: "流行歌曲"
    },
    {
        id: 53,
        question: "一个二分音符等于几个八分音符？",
        options: ["2个", "3个", "4个", "6个"],
        correct: 2,
        difficulty: "easy",
        category: "乐理基础"
    },
    {
        id: 54,
        question: "《魔杰座》是哪位歌手的专辑？",
        options: ["周杰伦", "林俊杰", "王力宏", "陶喆"],
        correct: 0,
        difficulty: "easy",
        category: "流行歌曲"
    },
    {
        id: 55,
        question: "口琴属于哪类乐器？",
        options: ["键盘乐器", "弦乐器", "簧片乐器", "打击乐器"],
        correct: 2,
        difficulty: "easy",
        category: "乐器知识"
    },
    {
        id: 56,
        question: "《稻香》出自周杰伦的哪张专辑？",
        options: ["魔杰座", "我很忙", "跨时代", "惊叹号"],
        correct: 0,
        difficulty: "easy",
        category: "流行歌曲"
    },
    {
        id: 57,
        question: "大调的第三级音程关系是？",
        options: ["大三度", "小三度", "纯四度", "纯五度"],
        correct: 0,
        difficulty: "easy",
        category: "乐理基础"
    },
    {
        id: 58,
        question: "《烟花易冷》是谁的代表作？",
        options: ["周杰伦", "林俊杰", "王力宏", "陶喆"],
        correct: 0,
        difficulty: "easy",
        category: "流行歌曲"
    },
    {
        id: 59,
        question: "马林巴属于哪类乐器？",
        options: ["弦乐器", "管乐器", "打击乐器", "键盘乐器"],
        correct: 2,
        difficulty: "easy",
        category: "乐器知识"
    },
    {
        id: 60,
        question: "《发如雪》的演唱者是？",
        options: ["周杰伦", "林俊杰", "王力宏", "陶喆"],
        correct: 0,
        difficulty: "easy",
        category: "流行歌曲"
    },

    // 普通难度题目 (61-120)
    {
        id: 61,
        question: "贝多芬的《第九交响曲》又被称为什么？",
        options: ["命运交响曲", "合唱交响曲", "田园交響曲", "英雄交响曲"],
        correct: 1,
        difficulty: "medium",
        category: "古典音乐"
    },
    {
        id: 62,
        question: "《梁祝》小提琴协奏曲的创作灵感来源于？",
        options: ["民间传说", "历史故事", "神话传说", "文学作品"],
        correct: 0,
        difficulty: "medium",
        category: "民族音乐"
    },
    {
        id: 63,
        question: "爵士乐起源于哪个国家？",
        options: ["英国", "法国", "美国", "德国"],
        correct: 2,
        difficulty: "medium",
        category: "音乐风格"
    },
    {
        id: 64,
        question: "《卡农》的作曲家是？",
        options: ["巴赫", "帕赫贝尔", "莫扎特", "海顿"],
        correct: 1,
        difficulty: "medium",
        category: "古典音乐"
    },
    {
        id: 65,
        question: "中国民歌《茉莉花》最初流传于哪个地区？",
        options: ["江苏", "浙江", "安徽", "江西"],
        correct: 0,
        difficulty: "medium",
        category: "民歌"
    },
    // 继续普通难度题目66-120
    {
        id: 66,
        question: "莫扎特的《安魂曲》K.626是用什么语言演唱的？",
        options: ["德语", "拉丁语", "意大利语", "法语"],
        correct: 1,
        difficulty: "medium",
        category: "古典音乐"
    },
    {
        id: 67,
        question: "中国民歌《康定情歌》来自哪个省份？",
        options: ["西藏", "四川", "云南", "青海"],
        correct: 1,
        difficulty: "medium",
        category: "民歌"
    },
    {
        id: 68,
        question: "《蓝色多瑙河》的作曲家是？",
        options: ["约翰·施特劳斯", "巴赫", "贝多芬", "莫扎特"],
        correct: 0,
        difficulty: "medium",
        category: "古典音乐"
    },
    {
        id: 69,
        question: "reggae音乐起源于哪个国家？",
        options: ["古巴", "牙买加", "巴西", "墨西哥"],
        correct: 1,
        difficulty: "medium",
        category: "世界音乐"
    },
    {
        id: 70,
        question: "《春江花月夜》是什么乐器的独奏曲？",
        options: ["古筝", "琵琶", "二胡", "笛子"],
        correct: 1,
        difficulty: "medium",
        category: "民族音乐"
    },
    {
        id: 71,
        question: "《梁祝》小提琴协奏曲的作曲者是？",
        options: ["何占豪、陈钢", "黄自", "刘天华", "华彦钧"],
        correct: 0,
        difficulty: "medium",
        category: "民族音乐"
    },
    {
        id: 72,
        question: "《彩云追月》是什么类型的音乐？",
        options: ["古典音乐", "民族音乐", "流行音乐", "爵士音乐"],
        correct: 1,
        difficulty: "medium",
        category: "民族音乐"
    },
    {
        id: 73,
        question: "《牧羊曲》出自哪部电影？",
        options: ["《少林寺》", "《卖花姑娘》", "《刘三姐》", "《白毛女》"],
        correct: 0,
        difficulty: "medium",
        category: "电影音乐"
    },
    {
        id: 74,
        question: "中国第一部电影音乐是？",
        options: ["《松花江上》", "《义勇军进行曲》", "《毕业歌》", "《大路歌》"],
        correct: 3,
        difficulty: "hard",
        category: "电影音乐"
    },
    {
        id: 75,
        question: "《夜曲》是肖邦创作的什么体裁？",
        options: ["钢琴独奏曲", "交响乐", "室内乐", "声乐作品"],
        correct: 0,
        difficulty: "medium",
        category: "古典音乐"
    },
    {
        id: 76,
        question: "《野蜂飞舞》的作曲家是？",
        options: ["里姆斯基-科萨科夫", "柴可夫斯基", "拉赫玛尼诺夫", "穆索尔斯基"],
        correct: 0,
        difficulty: "hard",
        category: "古典音乐"
    },
    {
        id: 77,
        question: "《二泉映月》是用什么乐器演奏的？",
        options: ["古筝", "琵琶", "二胡", "笛子"],
        correct: 2,
        difficulty: "medium",
        category: "民族音乐"
    },
    {
        id: 78,
        question: "《卡农》最初是为什么乐器组合而作？",
        options: ["钢琴独奏", "弦乐四重奏", "三把小提琴和大键琴", "管弦乐队"],
        correct: 2,
        difficulty: "hard",
        category: "古典音乐"
    },
    {
        id: 79,
        question: "中国古代'宫商角徵羽'五音中，'宫'相当于现在的什么音？",
        options: ["Do", "Re", "Mi", "Sol"],
        correct: 0,
        difficulty: "medium",
        category: "乐理基础"
    },
    {
        id: 80,
        question: "《黄河大合唱》的作曲家是？",
        options: ["聂耳", "冼星海", "华彦钧", "刘天华"],
        correct: 1,
        difficulty: "medium",
        category: "民族音乐"
    },
    {
        id: 81,
        question: "贝多芬的《第九交响曲》又被称为什么？",
        options: ["《田园交响曲》", "《合唱交响曲》", "《命运交响曲》", "《英雄交响曲》"],
        correct: 1,
        difficulty: "medium",
        category: "古典音乐"
    },
    {
        id: 82,
        question: "《茉莉花》在世界上被誉为中国的什么？",
        options: ["第二国歌", "民歌之王", "音乐名片", "文化符号"],
        correct: 0,
        difficulty: "medium",
        category: "民歌"
    },
    {
        id: 83,
        question: "爵士乐起源于美国的哪个城市？",
        options: ["纽约", "芝加哥", "新奥尔良", "洛杉矶"],
        correct: 2,
        difficulty: "medium",
        category: "音乐风格"
    },
    {
        id: 84,
        question: "《蓝色狂想曲》的作曲家是？",
        options: ["格什温", "伯恩斯坦", "科普兰", "艾灵顿公爵"],
        correct: 0,
        difficulty: "hard",
        category: "现代音乐"
    },
    {
        id: 85,
        question: "中国民族乐器中，哪种乐器被称为'民乐之王'？",
        options: ["古筝", "琵琶", "二胡", "笛子"],
        correct: 1,
        difficulty: "medium",
        category: "民族乐器"
    },
    {
        id: 86,
        question: "《义勇军进行曲》的词作者是？",
        options: ["聂耳", "田汉", "冼星海", "光未然"],
        correct: 1,
        difficulty: "medium",
        category: "经典歌曲"
    },
    {
        id: 87,
        question: "巴赫被后人誉为什么？",
        options: ["音乐之父", "交响乐之父", "钢琴之王", "歌剧大师"],
        correct: 0,
        difficulty: "medium",
        category: "古典音乐"
    },
    {
        id: 88,
        question: "《小星星变奏曲》是哪位作曲家的作品？",
        options: ["巴赫", "莫扎特", "贝多芬", "海顿"],
        correct: 1,
        difficulty: "medium",
        category: "古典音乐"
    },
    {
        id: 89,
        question: "中国传统戏曲中，京剧的四大行当是什么？",
        options: ["生旦净末", "生旦净丑", "唱念做打", "手眼身法"],
        correct: 1,
        difficulty: "medium",
        category: "戏曲音乐"
    },
    {
        id: 90,
        question: "《渔舟唱晚》是什么乐器的代表曲目？",
        options: ["古筝", "琵琶", "古琴", "笛子"],
        correct: 0,
        difficulty: "medium",
        category: "民族音乐"
    },
    {
        id: 91,
        question: "华尔兹舞曲的节拍是几拍子？",
        options: ["二拍子", "三拍子", "四拍子", "六拍子"],
        correct: 1,
        difficulty: "easy",
        category: "音乐风格"
    },
    {
        id: 92,
        question: "《高山流水》最初是为哪种乐器创作的？",
        options: ["古筝", "琵琶", "古琴", "二胡"],
        correct: 2,
        difficulty: "medium",
        category: "民族音乐"
    },
    {
        id: 93,
        question: "《四季》是哪位作曲家的作品？",
        options: ["巴赫", "维瓦尔第", "莫扎特", "亨德尔"],
        correct: 1,
        difficulty: "medium",
        category: "古典音乐"
    },
    {
        id: 94,
        question: "中国民歌《刘三姐》来自哪个地区？",
        options: ["广西", "云南", "贵州", "湖南"],
        correct: 0,
        difficulty: "medium",
        category: "民歌"
    },
    {
        id: 95,
        question: "《摇篮曲》是什么类型的音乐？",
        options: ["进行曲", "圆舞曲", "安眠曲", "舞蹈音乐"],
        correct: 2,
        difficulty: "easy",
        category: "音乐体裁"
    },
    {
        id: 96,
        question: "《月光奏鸣曲》是贝多芬的第几号钢琴奏鸣曲？",
        options: ["第13号", "第14号", "第15号", "第16号"],
        correct: 1,
        difficulty: "hard",
        category: "古典音乐"
    },
    {
        id: 97,
        question: "中国古代乐器编钟属于什么类型的乐器？",
        options: ["弦乐器", "管乐器", "打击乐器", "弹拨乐器"],
        correct: 2,
        difficulty: "medium",
        category: "民族乐器"
    },
    {
        id: 98,
        question: "《土耳其进行曲》的作曲家是？",
        options: ["巴赫", "莫扎特", "贝多芬", "肖邦"],
        correct: 1,
        difficulty: "medium",
        category: "古典音乐"
    },
    {
        id: 99,
        question: "中国民歌《茉莉花》在哪届奥运会开幕式上被演奏？",
        options: ["1984年洛杉矶", "1996年亚特兰大", "2004年雅典", "2008年北京"],
        correct: 3,
        difficulty: "medium",
        category: "民歌"
    },
    {
        id: 100,
        question: "《平湖秋月》是什么类型的乐曲？",
        options: ["古筝独奏", "二胡独奏", "广东音乐", "江南丝竹"],
        correct: 2,
        difficulty: "medium",
        category: "民族音乐"
    },
    {
        id: 101,
        question: "交响乐队中，弦乐组通常包括哪些乐器？",
        options: ["小提琴、中提琴、大提琴", "小提琴、中提琴、大提琴、低音提琴", "小提琴、大提琴、竖琴", "小提琴、中提琴、竖琴"],
        correct: 1,
        difficulty: "medium",
        category: "器乐知识"
    },
    {
        id: 102,
        question: "《命运交响曲》是贝多芬的第几号交响曲？",
        options: ["第3号", "第5号", "第7号", "第9号"],
        correct: 1,
        difficulty: "medium",
        category: "古典音乐"
    },
    {
        id: 103,
        question: "中国传统音乐中，'板眼'是指什么？",
        options: ["音高", "节拍", "音色", "速度"],
        correct: 1,
        difficulty: "hard",
        category: "乐理基础"
    },
    {
        id: 104,
        question: "《天鹅湖》是哪种艺术形式的经典作品？",
        options: ["歌剧", "芭蕾舞剧", "音乐剧", "交响乐"],
        correct: 1,
        difficulty: "easy",
        category: "古典音乐"
    },
    {
        id: 105,
        question: "萨克斯管是由哪位发明家发明的？",
        options: ["萨克斯", "施坦威", "博姆", "奥博埃"],
        correct: 0,
        difficulty: "hard",
        category: "乐器知识"
    },
    {
        id: 106,
        question: "《梦中的婚礼》是哪位钢琴家的代表作？",
        options: ["理查德·克莱德曼", "雅尼", "久石让", "坂本龙一"],
        correct: 0,
        difficulty: "medium",
        category: "现代音乐"
    },
    {
        id: 107,
        question: "中国古代音乐理论中，'三分损益法'是用来确定什么的？",
        options: ["音高", "节拍", "音色", "音量"],
        correct: 0,
        difficulty: "hard",
        category: "乐理基础"
    },
    {
        id: 108,
        question: "《蓝色多瑙河》是什么类型的舞曲？",
        options: ["探戈", "华尔兹", "波尔卡", "马祖卡"],
        correct: 1,
        difficulty: "medium",
        category: "音乐风格"
    },
    {
        id: 109,
        question: "《胡桃夹子》组曲中最著名的片段是？",
        options: ["花之圆舞曲", "糖果仙女之舞", "俄罗斯舞曲", "以上都是"],
        correct: 3,
        difficulty: "medium",
        category: "古典音乐"
    },
    {
        id: 110,
        question: "中国民族乐器笙属于什么类型？",
        options: ["弦乐器", "吹奏乐器", "弹拨乐器", "打击乐器"],
        correct: 1,
        difficulty: "medium",
        category: "民族乐器"
    },
    {
        id: 111,
        question: "《匈牙利舞曲》的作曲家是？",
        options: ["李斯特", "勃拉姆斯", "巴托克", "柯达伊"],
        correct: 1,
        difficulty: "medium",
        category: "古典音乐"
    },
    {
        id: 112,
        question: "中国古典名曲《广陵散》是为哪种乐器创作的？",
        options: ["古筝", "琵琶", "古琴", "笛子"],
        correct: 2,
        difficulty: "medium",
        category: "民族音乐"
    },
    {
        id: 113,
        question: "《小夜曲》K.525是莫扎特为什么乐器组合创作的？",
        options: ["弦乐四重奏", "弦乐五重奏", "管弦乐队", "钢琴独奏"],
        correct: 1,
        difficulty: "hard",
        category: "古典音乐"
    },
    {
        id: 114,
        question: "中国民歌《沂蒙山小调》来自哪个省份？",
        options: ["山东", "山西", "河南", "河北"],
        correct: 0,
        difficulty: "medium",
        category: "民歌"
    },
    {
        id: 115,
        question: "《拉德茨基进行曲》的作曲家是？",
        options: ["老约翰·施特劳斯", "小约翰·施特劳斯", "苏佩", "雷哈尔"],
        correct: 0,
        difficulty: "medium",
        category: "古典音乐"
    },
    {
        id: 116,
        question: "中国传统乐器箫和笛的主要区别是什么？",
        options: ["材质不同", "吹奏方式不同", "音色不同", "以上都对"],
        correct: 3,
        difficulty: "medium",
        category: "民族乐器"
    },
    {
        id: 117,
        question: "《卡门》序曲出自哪位作曲家？",
        options: ["威尔第", "比才", "普契尼", "瓦格纳"],
        correct: 1,
        difficulty: "medium",
        category: "古典音乐"
    },
    {
        id: 118,
        question: "中国古代音乐中，'雅乐'主要用于什么场合？",
        options: ["民间娱乐", "宫廷祭祀", "民间婚庆", "宗教仪式"],
        correct: 1,
        difficulty: "hard",
        category: "音乐史"
    },
    {
        id: 119,
        question: "《新世界交响曲》是哪位作曲家在美国创作的？",
        options: ["德沃夏克", "肖斯塔科维奇", "柴可夫斯基", "西贝柳斯"],
        correct: 0,
        difficulty: "medium",
        category: "古典音乐"
    },
    {
        id: 120,
        question: "布鲁斯音乐的特征音阶被称为什么？",
        options: ["蓝调音阶", "五声音阶", "大调音阶", "小调音阶"],
        correct: 0,
        difficulty: "medium",
        category: "音乐风格"
    },

    // 有难度题目 (121-150)
    {
        id: 121,
        question: "巴赫的《哥德堡变奏曲》共有多少个变奏？",
        options: ["30个", "32个", "24个", "28个"],
        correct: 0,
        difficulty: "hard",
        category: "古典音乐"
    },
    {
        id: 122,
        question: "德彪西的音乐风格属于哪个流派？",
        options: ["浪漫主义", "印象主义", "古典主义", "现代主义"],
        correct: 1,
        difficulty: "hard",
        category: "古典音乐"
    },
    {
        id: 123,
        question: "《克罗地亚狂想曲》的作曲家是？",
        options: ["李斯特", "肖邦", "马克西姆", "朗朗"],
        correct: 2,
        difficulty: "medium",
        category: "现代音乐"
    },
    {
        id: 124,
        question: "中国古代乐器瑟有多少根弦？",
        options: ["13根", "21根", "25根", "50根"],
        correct: 2,
        difficulty: "hard",
        category: "民族乐器"
    },
    {
        id: 125,
        question: "《拉赫玛尼诺夫第二钢琴协奏曲》是什么调性？",
        options: ["c小调", "d小调", "e小调", "f小调"],
        correct: 0,
        difficulty: "hard",
        category: "古典音乐"
    },
    {
        id: 126,
        question: "中国民族音乐的'五声调式'是指哪五个音？",
        options: ["宫商角徵羽", "do re mi fa sol", "C D E F G", "1 2 3 4 5"],
        correct: 0,
        difficulty: "medium",
        category: "乐理基础"
    },
    {
        id: 127,
        question: "《离别》是肖邦的什么类型作品？",
        options: ["练习曲", "夜曲", "叙事曲", "波兰舞曲"],
        correct: 0,
        difficulty: "medium",
        category: "古典音乐"
    },
    {
        id: 128,
        question: "中国传统乐器马头琴来自哪个民族？",
        options: ["藏族", "蒙古族", "维吾尔族", "哈萨克族"],
        correct: 1,
        difficulty: "medium",
        category: "民族乐器"
    },
    {
        id: 129,
        question: "《牧神午后前奏曲》的作曲家是？",
        options: ["德彪西", "拉威尔", "福雷", "圣桑"],
        correct: 0,
        difficulty: "hard",
        category: "古典音乐"
    },
    {
        id: 130,
        question: "中国古代音律'十二律'中的'黄钟'相当于现在的什么音？",
        options: ["C", "D", "E", "F"],
        correct: 0,
        difficulty: "hard",
        category: "乐理基础"
    },
    {
        id: 131,
        question: "《游击队歌》的作曲家是？",
        options: ["聂耳", "贺绿汀", "马可", "向隅"],
        correct: 1,
        difficulty: "medium",
        category: "红色歌曲"
    },
    {
        id: 132,
        question: "巴赫的《平均律钢琴曲集》共有多少首前奏曲和赋格？",
        options: ["24首", "48首", "72首", "96首"],
        correct: 1,
        difficulty: "hard",
        category: "古典音乐"
    },
    {
        id: 133,
        question: "中国民歌《花儿与少年》来自哪个地区？",
        options: ["内蒙古", "新疆", "青海", "西藏"],
        correct: 2,
        difficulty: "medium",
        category: "民歌"
    },
    {
        id: 134,
        question: "《升华夜》是勋伯格从什么风格转向十二音技法的作品？",
        options: ["浪漫主义", "印象主义", "表现主义", "新古典主义"],
        correct: 0,
        difficulty: "expert",
        category: "现代音乐"
    },
    {
        id: 135,
        question: "中国古代乐器竽属于什么类型？",
        options: ["弦乐器", "吹奏乐器", "弹拨乐器", "打击乐器"],
        correct: 1,
        difficulty: "medium",
        category: "民族乐器"
    },
    {
        id: 136,
        question: "《波莱罗舞曲》是哪位法国作曲家的代表作？",
        options: ["德彪西", "拉威尔", "比才", "圣桑"],
        correct: 1,
        difficulty: "medium",
        category: "古典音乐"
    },
    {
        id: 137,
        question: "中国传统音乐中，'散板'是指什么？",
        options: ["自由节拍", "固定节拍", "快速节拍", "慢速节拍"],
        correct: 0,
        difficulty: "hard",
        category: "乐理基础"
    },
    {
        id: 138,
        question: "《卡门》中最著名的咏叹调是？",
        options: ["《哈巴涅拉》", "《斗牛士之歌》", "《花之歌》", "以上都是"],
        correct: 3,
        difficulty: "medium",
        category: "古典音乐"
    },
    {
        id: 139,
        question: "中国民族乐器唢呐的音色特点是？",
        options: ["柔和甜美", "高亢嘹亮", "深沉厚重", "清脆悦耳"],
        correct: 1,
        difficulty: "medium",
        category: "民族乐器"
    },
    {
        id: 140,
        question: "《春之祭》是哪位作曲家的芭蕾音乐？",
        options: ["斯特拉文斯基", "德彪西", "拉威尔", "普罗科菲耶夫"],
        correct: 0,
        difficulty: "hard",
        category: "现代音乐"
    },
    {
        id: 141,
        question: "中国古代音乐理论著作《乐记》出自哪本典籍？",
        options: ["《论语》", "《礼记》", "《诗经》", "《周易》"],
        correct: 1,
        difficulty: "hard",
        category: "音乐史"
    },
    {
        id: 142,
        question: "《动物狂欢节》是哪位作曲家的作品？",
        options: ["圣桑", "德彪西", "拉威尔", "福雷"],
        correct: 0,
        difficulty: "medium",
        category: "古典音乐"
    },
    {
        id: 143,
        question: "中国传统戏曲音乐中，'过门'是指什么？",
        options: ["开场音乐", "间奏音乐", "结束音乐", "背景音乐"],
        correct: 1,
        difficulty: "hard",
        category: "戏曲音乐"
    },
    {
        id: 144,
        question: "《幻想即兴曲》是肖邦的什么作品？",
        options: ["Op.66", "Op.67", "Op.68", "Op.posthumous"],
        correct: 3,
        difficulty: "hard",
        category: "古典音乐"
    },
    {
        id: 145,
        question: "中国民族音乐中，'曲牌'是指什么？",
        options: ["乐器名称", "曲调名称", "演奏方法", "音乐体裁"],
        correct: 1,
        difficulty: "medium",
        category: "音乐理论"
    },
    {
        id: 146,
        question: "《罗密欧与朱丽叶》幻想序曲的作曲家是？",
        options: ["柴可夫斯基", "贝多芬", "门德尔松", "舒曼"],
        correct: 0,
        difficulty: "medium",
        category: "古典音乐"
    },
    {
        id: 147,
        question: "中国古代乐器古琴的弦数经历了怎样的变化？",
        options: ["一直是7根", "从5根到7根", "从7根到5根", "从9根到7根"],
        correct: 1,
        difficulty: "hard",
        category: "民族乐器"
    },
    {
        id: 148,
        question: "《皮尔·金特》组曲是哪位作曲家的作品？",
        options: ["格里格", "西贝柳斯", "尼尔森", "拉尔森"],
        correct: 0,
        difficulty: "medium",
        category: "古典音乐"
    },
    {
        id: 149,
        question: "中国传统音乐中，'工尺谱'是一种什么记谱法？",
        options: ["五线谱", "简谱", "文字谱", "符号谱"],
        correct: 2,
        difficulty: "hard",
        category: "音乐理论"
    },
    {
        id: 150,
        question: "十二音体系是由哪位作曲家创立的？",
        options: ["勋伯格", "韦伯恩", "贝尔格", "斯特拉文斯基"],
        correct: 0,
        difficulty: "hard",
        category: "现代音乐"
    },

    // 高难度题目 (151-180)
    {
        id: 151,
        question: "梅西安的《时间终结四重奏》是在什么情况下创作的？",
        options: ["在集中营", "在战争中", "在医院", "在流亡期间"],
        correct: 0,
        difficulty: "expert",
        category: "现代音乐"
    },
    {
        id: 152,
        question: "《4分33秒》这首著名的《寂静》作品是谁创作的？",
        options: ["约翰·凯奇", "拉·蒙·杨", "史蒂夫·莱希", "特里·莱利"],
        correct: 0,
        difficulty: "expert",
        category: "实验音乐"
    },
    {
        id: 153,
        question: "巴托克的《为弦乐、打击乐和钢片琴而作的音乐》采用了什么结构？",
        options: ["奏鸣曲式", "回旋曲式", "拱形结构", "变奏曲式"],
        correct: 2,
        difficulty: "expert",
        category: "现代音乐"
    },
    {
        id: 154,
        question: "中国古代音律学家朱载堉发明了什么律制？",
        options: ["五度相生律", "纯律", "十二平均律", "中庸律"],
        correct: 2,
        difficulty: "expert",
        category: "音乐史"
    },
    {
        id: 155,
        question: "韦伯恩的《五首管弦乐小品》Op.10第一首有多少小节？",
        options: ["5小节", "7小节", "9小节", "11小节"],
        correct: 2,
        difficulty: "expert",
        category: "现代音乐"
    },
    {
        id: 156,
        question: "中国古代乐器磬的材质主要是什么？",
        options: ["青铜", "石头", "木头", "竹子"],
        correct: 1,
        difficulty: "expert",
        category: "民族乐器"
    },
    {
        id: 157,
        question: "利盖蒂的《大气》（Atmosphères）是为什么编制而作？",
        options: ["室内乐队", "管弦乐队", "合唱团", "钢琴独奏"],
        correct: 1,
        difficulty: "expert",
        category: "现代音乐"
    },
    {
        id: 158,
        question: "中国古代'八音'分类法中，'金'指的是什么乐器？",
        options: ["钟", "鼓", "笛", "琴"],
        correct: 0,
        difficulty: "expert",
        category: "音乐理论"
    },
    {
        id: 159,
        question: "斯托克豪森的《宝瓶座》是什么类型的作品？",
        options: ["电子音乐", "图形记谱", "即兴音乐", "以上都是"],
        correct: 3,
        difficulty: "expert",
        category: "现代音乐"
    },
    {
        id: 160,
        question: "中国古代音乐理论中，'旋宫'是指什么？",
        options: ["转调", "变奏", "模进", "装饰"],
        correct: 0,
        difficulty: "expert",
        category: "音乐理论"
    },
    {
        id: 161,
        question: "谢诺基斯的《节拍器》使用了什么创作技法？",
        options: ["随机作曲", "数学算法", "计算机程序", "以上都是"],
        correct: 3,
        difficulty: "expert",
        category: "现代音乐"
    },
    {
        id: 162,
        question: "中国古代乐器筝的演奏技法'摇指'是指什么？",
        options: ["快速拨弦", "颤音演奏", "滑音演奏", "和弦演奏"],
        correct: 1,
        difficulty: "expert",
        category: "民族乐器"
    },
    {
        id: 163,
        question: "布列兹的《锤子大师》是为什么乐器而作？",
        options: ["钢琴", "打击乐", "女高音和室内乐", "管弦乐队"],
        correct: 2,
        difficulty: "expert",
        category: "现代音乐"
    },
    {
        id: 164,
        question: "中国古代音乐中，'燕乐二十八调'属于哪个朝代的理论？",
        options: ["唐代", "宋代", "明代", "清代"],
        correct: 0,
        difficulty: "expert",
        category: "音乐史"
    },
    {
        id: 165,
        question: "格里西的《四首歌》采用了什么频谱技法？",
        options: ["微分音", "频谱分析", "基音合成", "以上都是"],
        correct: 3,
        difficulty: "expert",
        category: "现代音乐"
    },
    {
        id: 166,
        question: "中国古代乐器古瑟的标准弦数是多少？",
        options: ["21根", "23根", "25根", "27根"],
        correct: 2,
        difficulty: "expert",
        category: "民族乐器"
    },
    {
        id: 167,
        question: "费尔德曼的《罗斯科教堂》的演出时长约为多久？",
        options: ["30分钟", "60分钟", "90分钟", "120分钟"],
        correct: 2,
        difficulty: "expert",
        category: "现代音乐"
    },
    {
        id: 168,
        question: "中国古代音律'三分损益法'的数学比例是？",
        options: ["2:3", "3:4", "4:5", "5:6"],
        correct: 0,
        difficulty: "expert",
        category: "音乐理论"
    },
    {
        id: 169,
        question: "拉亨曼的《咽喉》是为什么声部而作？",
        options: ["男高音", "女高音", "男低音", "女中音"],
        correct: 1,
        difficulty: "expert",
        category: "现代音乐"
    },
    {
        id: 170,
        question: "中国古代乐器阮的品位数标准为多少？",
        options: ["12品", "13品", "24品", "无品"],
        correct: 2,
        difficulty: "expert",
        category: "民族乐器"
    },
    {
        id: 171,
        question: "诺诺的《普罗米修斯》使用了什么空间音响技术？",
        options: ["立体声", "四声道", "八声道", "多声道移动"],
        correct: 3,
        difficulty: "expert",
        category: "现代音乐"
    },
    {
        id: 172,
        question: "中国古代音乐理论中，'犯调'是指什么现象？",
        options: ["转调", "离调", "调式变化", "以上都可能"],
        correct: 3,
        difficulty: "expert",
        category: "音乐理论"
    },
    {
        id: 173,
        question: "萨里亚霍的《从远处》使用了什么电子技术？",
        options: ["实时电子", "录音带", "计算机合成", "混合技术"],
        correct: 3,
        difficulty: "expert",
        category: "现代音乐"
    },
    {
        id: 174,
        question: "中国古代乐器箜篌分为哪两种类型？",
        options: ["卧箜篌和立箜篌", "大箜篌和小箜篌", "古箜篌和今箜篌", "宫箜篌和民箜篌"],
        correct: 0,
        difficulty: "expert",
        category: "民族乐器"
    },
    {
        id: 175,
        question: "达尔拉皮科拉的《囚徒》是什么体裁的作品？",
        options: ["歌剧", "康塔塔", "交响乐", "室内乐"],
        correct: 0,
        difficulty: "expert",
        category: "现代音乐"
    },
    {
        id: 176,
        question: "中国古代音乐中，'下徵调'是以什么音为主音？",
        options: ["徵", "羽", "宫", "商"],
        correct: 0,
        difficulty: "expert",
        category: "音乐理论"
    },
    {
        id: 177,
        question: "克塞纳基斯的《坡》（Pithoprakta）使用了什么数学原理？",
        options: ["概率论", "拓扑学", "群论", "分形几何"],
        correct: 0,
        difficulty: "expert",
        category: "现代音乐"
    },
    {
        id: 178,
        question: "中国古代乐器编磬的音列排列原则是什么？",
        options: ["按大小排列", "按音高排列", "按材质排列", "按制作顺序"],
        correct: 1,
        difficulty: "expert",
        category: "民族乐器"
    },
    {
        id: 179,
        question: "莫顿·费尔德曼的晚期作品特点是什么？",
        options: ["极短", "极长", "极响", "极快"],
        correct: 1,
        difficulty: "expert",
        category: "现代音乐"
    },
    {
        id: 180,
        question: "序列主义音乐的代表人物布列兹来自哪个国家？",
        options: ["德国", "法国", "意大利", "奥地利"],
        correct: 1,
        difficulty: "expert",
        category: "现代音乐"
    },

    // 补充题目 (181-200)
    {
        id: 181,
        question: "中国古琴有几根弦？",
        options: ["5根", "6根", "7根", "8根"],
        correct: 2,
        difficulty: "medium",
        category: "民族乐器"
    },
    {
        id: 182,
        question: "《我的祖国》这首歌曲出自哪部电影？",
        options: ["《英雄儿女》", "《上甘岭》", "《开国大典》", "《红旗谱》"],
        correct: 1,
        difficulty: "medium",
        category: "电影音乐"
    },
    {
        id: 183,
        question: "雷鬼音乐起源于哪个国家？",
        options: ["古巴", "牙买加", "巴西", "墨西哥"],
        correct: 1,
        difficulty: "medium",
        category: "世界音乐"
    },
    {
        id: 184,
        question: "《新不了情》的原唱是？",
        options: ["万芳", "辛晓琪", "潘越云", "林忆莲"],
        correct: 0,
        difficulty: "medium",
        category: "经典歌曲"
    },
    {
        id: 185,
        question: "弗拉门戈音乐起源于西班牙的哪个地区？",
        options: ["加泰罗尼亚", "安达卢西亚", "巴斯克", "阿斯图里亚斯"],
        correct: 1,
        difficulty: "hard",
        category: "世界音乐"
    },
    {
        id: 186,
        question: "《橄榄树》的词作者是？",
        options: ["罗大佑", "李泰祥", "三毛", "齐豫"],
        correct: 2,
        difficulty: "medium",
        category: "民谣"
    },
    {
        id: 187,
        question: "芭蕾舞剧《天鹅湖》的作曲家是？",
        options: ["肖邦", "李斯特", "柴可夫斯基", "拉赫玛尼诺夫"],
        correct: 2,
        difficulty: "medium",
        category: "古典音乐"
    },
    {
        id: 188,
        question: "《外婆的澎湖湾》的演唱者是？",
        options: ["潘安邦", "费玉清", "蔡琴", "邓丽君"],
        correct: 0,
        difficulty: "easy",
        category: "民谣"
    },
    {
        id: 189,
        question: "探戈音乐起源于？",
        options: ["巴西", "阿根廷", "智利", "乌拉圭"],
        correct: 1,
        difficulty: "medium",
        category: "世界音乐"
    },
    {
        id: 190,
        question: "《卡农》的作曲家帕赫贝尔是哪国人？",
        options: ["德国", "奥地利", "意大利", "法国"],
        correct: 0,
        difficulty: "medium",
        category: "古典音乐"
    },
    {
        id: 191,
        question: "中国古代音乐中，'工六调'是什么调式？",
        options: ["宫调式", "商调式", "角调式", "羽调式"],
        correct: 3,
        difficulty: "expert",
        category: "音乐理论"
    },
    {
        id: 192,
        question: "《自新大陆》交响曲是德沃夏克的第几号？",
        options: ["第8号", "第9号", "第10号", "第11号"],
        correct: 1,
        difficulty: "medium",
        category: "古典音乐"
    },
    {
        id: 193,
        question: "中国传统乐器木鱼属于什么类型？",
        options: ["弦乐器", "吹奏乐器", "弹拨乐器", "打击乐器"],
        correct: 3,
        difficulty: "medium",
        category: "民族乐器"
    },
    {
        id: 194,
        question: "《大海》是哪位印象派作曲家的作品？",
        options: ["德彪西", "拉威尔", "福雷", "杜卡"],
        correct: 0,
        difficulty: "medium",
        category: "古典音乐"
    },
    {
        id: 195,
        question: "中国古代音乐中，'叶调'指的是什么？",
        options: ["调式", "曲式", "节拍", "装饰音"],
        correct: 0,
        difficulty: "expert",
        category: "音乐理论"
    },
    {
        id: 196,
        question: "《图画展览会》的作曲家是？",
        options: ["穆索尔斯基", "鲍罗丁", "里姆斯基-科萨科夫", "巴拉基列夫"],
        correct: 0,
        difficulty: "medium",
        category: "古典音乐"
    },
    {
        id: 197,
        question: "中国传统乐器云锣有多少面锣？",
        options: ["8面", "10面", "12面", "16面"],
        correct: 1,
        difficulty: "hard",
        category: "民族乐器"
    },
    {
        id: 198,
        question: "《阿尔罕布拉宫的回忆》是为什么乐器创作的？",
        options: ["钢琴", "吉他", "小提琴", "长笛"],
        correct: 1,
        difficulty: "medium",
        category: "古典音乐"
    },
    {
        id: 199,
        question: "中国古代音乐理论中，'正变'是指什么？",
        options: ["调式变化", "节拍变化", "音高变化", "速度变化"],
        correct: 0,
        difficulty: "expert",
        category: "音乐理论"
    },
    {
        id: 200,
        question: "《同桌的你》是哪位歌手的代表作？",
        options: ["老狼", "高晓松", "叶蓓", "郑钧"],
        correct: 0,
        difficulty: "easy",
        category: "校园民谣"
    }
];

// 导出题库
if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
} 

// ES6 模块导出
export { questions }; 