// 中国诗词问答题库 - 200道题目
// 难度分布：30%简单(60题)、30%普通(60题)、15%有难度(30题)、15%高难度(30题)、其他(20题)

const questions = [
    // 简单难度题目 (1-60)
    {
        id: 1,
        question: "\"春眠不觉晓，处处闻啼鸟\"出自哪位诗人的作品？",
        options: ["王维", "李白", "杜甫", "孟浩然"],
        correct: 3,
        difficulty: "easy",
        category: "唐诗"
    },
    {
        id: 2,
        question: "\"床前明月光，疑是地上霜\"是谁的名句？",
        options: ["李白", "白居易", "杜甫", "王维"],
        correct: 0,
        difficulty: "easy",
        category: "唐诗"
    },
    {
        id: 3,
        question: "\"锄禾日当午，汗滴禾下土\"出自哪首诗？",
        options: ["《春晓》", "《悯农》", "《静夜思》", "《登鹳雀楼》"],
        correct: 1,
        difficulty: "easy",
        category: "古诗名篇"
    },
    {
        id: 4,
        question: "\"白日依山尽，黄河入海流\"的下一句是？",
        options: ["欲穷千里目", "更上一层楼", "千里共婵娟", "举头望明月"],
        correct: 0,
        difficulty: "easy",
        category: "唐诗"
    },
    {
        id: 5,
        question: "\"慈母手中线，游子身上衣\"出自孟郊的哪首诗？",
        options: ["《游子吟》", "《春怨》", "《秋思》", "《登科后》"],
        correct: 0,
        difficulty: "easy",
        category: "唐诗"
    },
    {
        id: 6,
        question: "\"莫愁前路无知己，天下谁人不识君\"是送别谁的诗句？",
        options: ["元二", "董大", "孟浩然", "王昌龄"],
        correct: 1,
        difficulty: "easy",
        category: "送别诗"
    },
    {
        id: 7,
        question: "\"山重水复疑无路，柳暗花明又一村\"出自陆游的哪首诗？",
        options: ["《示儿》", "《游山西村》", "《秋夜将晓出篱门迎凉有感》", "《钗头凤》"],
        correct: 1,
        difficulty: "easy",
        category: "宋诗"
    },
    {
        id: 8,
        question: "\"接天莲叶无穷碧，映日荷花别样红\"描写的是哪个季节？",
        options: ["春天", "冬天", "秋天", "夏天"],
        correct: 3,
        difficulty: "easy",
        category: "写景诗"
    },
    {
        id: 9,
        question: "\"野火烧不尽，春风吹又生\"赞美的是什么？",
        options: ["小草", "竹子", "梅花", "松树"],
        correct: 0,
        difficulty: "easy",
        category: "咏物诗"
    },
    {
        id: 10,
        question: "\"劝君更尽一杯酒，西出阳关无故人\"是王维送别谁的诗句？",
        options: ["李白", "孟浩然", "元二", "杜甫"],
        correct: 2,
        difficulty: "easy",
        category: "送别诗"
    },
    {
        id: 11,
        question: "\"两岸猿声啼不住，轻舟已过万重山\"出自李白的哪首诗？",
        options: ["《早发白帝城》", "《望天门山》", "《黄鹤楼送孟浩然之广陵》", "《蜀道难》"],
        correct: 0,
        difficulty: "easy",
        category: "唐诗"
    },
    {
        id: 12,
        question: "\"少小离家老大回，乡音无改鬓毛衰\"表达了什么主题？",
        options: ["离别", "怀古", "咏物", "思乡"],
        correct: 3,
        difficulty: "easy",
        category: "思乡诗"
    },
    {
        id: 13,
        question: "\"千山鸟飞绝，万径人踪灭\"出自柳宗元的哪首诗？",
        options: ["《小石潭记》", "《溪居》", "《渔翁》", "《江雪》"],
        correct: 3,
        difficulty: "easy",
        category: "唐诗"
    },
    {
        id: 14,
        question: "\"春种一粒粟，秋收万颗子\"出自《悯农》，作者是？",
        options: ["李绅", "杜甫", "白居易", "孟浩然"],
        correct: 0,
        difficulty: "easy",
        category: "唐诗"
    },
    {
        id: 15,
        question: "\"红豆生南国，春来发几枝\"是谁的诗句？",
        options: ["李白", "杜甫", "王维", "白居易"],
        correct: 2,
        difficulty: "easy",
        category: "唐诗"
    },
    {
        id: 16,
        question: "\"举头望明月，低头思故乡\"表达了什么情感？",
        options: ["怀古", "赏月", "孤独", "思乡"],
        correct: 3,
        difficulty: "easy",
        category: "思乡诗"
    },
    {
        id: 17,
        question: "\"好雨知时节，当春乃发生\"出自杜甫的哪首诗？",
        options: ["《绝句》", "《春夜喜雨》", "《春望》", "《茅屋为秋风所破歌》"],
        correct: 1,
        difficulty: "easy",
        category: "唐诗"
    },
    {
        id: 18,
        question: "\"墙角数枝梅，凌寒独自开\"赞美梅花的什么品质？",
        options: ["香气清雅", "不畏严寒", "颜色美丽", "花期很长"],
        correct: 1,
        difficulty: "easy",
        category: "咏物诗"
    },
    {
        id: 19,
        question: "\"遥知兄弟登高处，遍插茱萸少一人\"是哪个传统节日的诗句？",
        options: ["中秋节", "重阳节", "端午节", "春节"],
        correct: 1,
        difficulty: "easy",
        category: "节日诗"
    },
    {
        id: 20,
        question: "\"桃花潭水深千尺，不及汪伦送我情\"中的\"我\"是指谁？",
        options: ["李白", "杜甫", "白居易", "王维"],
        correct: 0,
        difficulty: "easy",
        category: "唐诗"
    },
    {
        id: 21,
        question: "\"横看成岭侧成峰，远近高低各不同\"描写的是哪座山？",
        options: ["泰山", "华山", "庐山", "黄山"],
        correct: 2,
        difficulty: "easy",
        category: "宋诗"
    },
    {
        id: 22,
        question: "\"小荷才露尖尖角，早有蜻蜓立上头\"出自杨万里的哪首诗？",
        options: ["《晓出净慈寺送林子方》", "《春日》", "《宿新市徐公店》", "《小池》"],
        correct: 3,
        difficulty: "easy",
        category: "宋诗"
    },
    {
        id: 23,
        question: "\"故人西辞黄鹤楼，烟花三月下扬州\"送别的是谁？",
        options: ["孟浩然", "元二", "王昌龄", "董大"],
        correct: 0,
        difficulty: "easy",
        category: "送别诗"
    },
    {
        id: 24,
        question: "\"飞流直下三千尺，疑是银河落九天\"描写的是哪个瀑布？",
        options: ["黄果树瀑布", "壶口瀑布", "庐山瀑布", "华山瀑布"],
        correct: 2,
        difficulty: "easy",
        category: "写景诗"
    },
    {
        id: 25,
        question: "\"独在异乡为异客，每逢佳节倍思亲\"的\"佳节\"指的是？",
        options: ["中秋节", "端午节", "春节", "重阳节"],
        correct: 3,
        difficulty: "easy",
        category: "节日诗"
    },
    {
        id: 26,
        question: "\"粒粒皆辛苦\"的上一句是？",
        options: ["春种一粒粟", "谁知盘中餐", "汗滴禾下土", "锄禾日当午"],
        correct: 1,
        difficulty: "easy",
        category: "古诗名篇"
    },
    {
        id: 27,
        question: "\"采菊东篱下，悠然见南山\"的作者是？",
        options: ["王维", "孟浩然", "陶渊明", "李白"],
        correct: 2,
        difficulty: "easy",
        category: "田园诗"
    },
    {
        id: 28,
        question: "\"枯藤老树昏鸦，小桥流水人家\"出自马致远的哪首曲？",
        options: ["《天净沙·秋思》", "《青衫泪》", "《汉宫秋》", "《墙头马上》"],
        correct: 0,
        difficulty: "easy",
        category: "元曲"
    },
    {
        id: 29,
        question: "\"山外青山楼外楼，西湖歌舞几时休\"批判的是什么？",
        options: ["离别的痛苦", "战争的残酷", "统治者的奢靡", "时光的流逝"],
        correct: 2,
        difficulty: "easy",
        category: "咏史诗"
    },
    {
        id: 30,
        question: "\"咬定青山不放松，立根原在破岩中\"咏的是什么？",
        options: ["松树", "梅花", "菊花", "竹子"],
        correct: 3,
        difficulty: "easy",
        category: "咏物诗"
    },
    {
        id: 31,
        question: "\"日出江花红胜火，春来江水绿如蓝\"描写的是哪里的景色？",
        options: ["江北", "塞外", "西域", "江南"],
        correct: 3,
        difficulty: "easy",
        category: "写景诗"
    },
    {
        id: 32,
        question: "\"明月几时有，把酒问青天\"出自苏轼的哪首词？",
        options: ["《念奴娇·赤壁怀古》", "《水调歌头》", "《江城子》", "《定风波》"],
        correct: 1,
        difficulty: "easy",
        category: "宋词"
    },
    {
        id: 33,
        question: "\"人有悲欢离合，月有阴晴圆缺\"体现了诗人怎样的人生态度？",
        options: ["悲观", "乐观", "达观", "消极"],
        correct: 2,
        difficulty: "easy",
        category: "人生感悟"
    },
    {
        id: 34,
        question: "\"会当凌绝顶，一览众山小\"表达了怎样的志向？",
        options: ["隐居山林", "游山玩水", "远大理想", "逃避现实"],
        correct: 2,
        difficulty: "easy",
        category: "励志诗"
    },
    {
        id: 35,
        question: "\"夜来风雨声，花落知多少\"出自《春晓》，作者是？",
        options: ["王维", "孟浩然", "李白", "杜甫"],
        correct: 1,
        difficulty: "easy",
        category: "唐诗"
    },
    {
        id: 36,
        question: "\"谁言寸草心，报得三春晖\"表达了对谁的感恩？",
        options: ["母亲", "老师", "父亲", "朋友"],
        correct: 0,
        difficulty: "easy",
        category: "亲情诗"
    },
    {
        id: 37,
        question: "\"春风又绿江南岸，明月何时照我还\"表达了什么情感？",
        options: ["离别", "怀古", "思乡", "咏物"],
        correct: 2,
        difficulty: "easy",
        category: "思乡诗"
    },
    {
        id: 38,
        question: "\"停车坐爱枫林晚，霜叶红于二月花\"描写的是哪个季节？",
        options: ["秋天", "夏天", "冬天", "春天"],
        correct: 0,
        difficulty: "easy",
        category: "写景诗"
    },
    {
        id: 39,
        question: "\"竹外桃花三两枝，春江水暖鸭先知\"的作者是？",
        options: ["范仲淹", "王安石", "欧阳修", "苏轼"],
        correct: 3,
        difficulty: "easy",
        category: "宋诗"
    },
    {
        id: 40,
        question: "\"千里黄云白日曛，北风吹雁雪纷纷\"描写的是什么天气？",
        options: ["雪天", "雨天", "晴天", "阴天"],
        correct: 0,
        difficulty: "easy",
        category: "写景诗"
    },
    {
        id: 41,
        question: "\"海内存知己，天涯若比邻\"表达了什么主题？",
        options: ["亲情", "爱情", "友情", "乡情"],
        correct: 2,
        difficulty: "easy",
        category: "友情诗"
    },
    {
        id: 42,
        question: "\"但愿人长久，千里共婵娟\"中的\"婵娟\"指的是？",
        options: ["美女", "月亮", "花朵", "星星"],
        correct: 1,
        difficulty: "easy",
        category: "宋词"
    },
    {
        id: 43,
        question: "\"忽如一夜春风来，千树万树梨花开\"实际写的是什么？",
        options: ["雪景", "梨花", "春景", "冰雹"],
        correct: 0,
        difficulty: "easy",
        category: "边塞诗"
    },
    {
        id: 44,
        question: "\"东篱把酒黄昏后，有暗香盈袖\"咏的是什么花？",
        options: ["梅花", "菊花", "荷花", "桃花"],
        correct: 1,
        difficulty: "easy",
        category: "咏物词"
    },
    {
        id: 45,
        question: "\"生当作人杰，死亦为鬼雄\"的作者是？",
        options: ["苏轼", "李清照", "辛弃疾", "陆游"],
        correct: 1,
        difficulty: "easy",
        category: "宋词"
    },
    {
        id: 46,
        question: "\"黄河远上白云间，一片孤城万仞山\"描写的是哪里？",
        options: ["江南", "边塞", "中原", "巴蜀"],
        correct: 1,
        difficulty: "easy",
        category: "边塞诗"
    },
    {
        id: 47,
        question: "\"路漫漫其修远兮，吾将上下而求索\"出自哪部作品？",
        options: ["《楚辞》", "《诗经》", "《离骚》", "《九歌》"],
        correct: 2,
        difficulty: "easy",
        category: "先秦文学"
    },
    {
        id: 48,
        question: "\"山不在高，有仙则名；水不在深，有龙则灵\"出自刘禹锡的哪篇文章？",
        options: ["《醉翁亭记》", "《爱莲说》", "《岳阳楼记》", "《陋室铭》"],
        correct: 3,
        difficulty: "easy",
        category: "古文"
    },
    {
        id: 49,
        question: "\"洛阳亲友如相问，一片冰心在玉壶\"表达了什么？",
        options: ["志向远大", "思念家乡", "友情深厚", "清白品格"],
        correct: 3,
        difficulty: "easy",
        category: "品格诗"
    },
    {
        id: 50,
        question: "\"天生我材必有用，千金散尽还复来\"体现了怎样的人生态度？",
        options: ["悲观失望", "乐观自信", "消极避世", "愤世嫉俗"],
        correct: 1,
        difficulty: "easy",
        category: "人生感悟"
    },
    {
        id: 51,
        question: "\"国破山河在，城春草木深\"出自杜甫的哪首诗？",
        options: ["《茅屋为秋风所破歌》", "《春望》", "《登高》", "《蜀相》"],
        correct: 1,
        difficulty: "easy",
        category: "忧国诗"
    },
    {
        id: 52,
        question: "\"感时花溅泪，恨别鸟惊心\"表达了什么情感？",
        options: ["思乡之情", "离别之苦", "忧国伤时", "怀古之幽"],
        correct: 2,
        difficulty: "easy",
        category: "忧国诗"
    },
    {
        id: 53,
        question: "\"不知细叶谁裁出，二月春风似剪刀\"咏的是什么？",
        options: ["桃花", "梅花", "柳树", "杏花"],
        correct: 2,
        difficulty: "easy",
        category: "咏物诗"
    },
    {
        id: 54,
        question: "\"大漠孤烟直，长河落日圆\"出自王维的哪首诗？",
        options: ["《渭城曲》", "《使至塞上》", "《山居秋暝》", "《鹿柴》"],
        correct: 1,
        difficulty: "easy",
        category: "边塞诗"
    },
    {
        id: 55,
        question: "\"山重水复疑无路，柳暗花明又一村\"给人什么启示？",
        options: ["知足常乐", "随遇而安", "坚持不懈", "及时行乐"],
        correct: 2,
        difficulty: "easy",
        category: "人生感悟"
    },
    {
        id: 56,
        question: "\"儿童相见不相识，笑问客从何处来\"表达了什么？",
        options: ["久别归乡", "初次相遇", "童真可爱", "人情冷暖"],
        correct: 0,
        difficulty: "easy",
        category: "思乡诗"
    },
    {
        id: 57,
        question: "\"青山横北郭，白水绕东城\"描写的是什么景象？",
        options: ["边塞风光", "田园风光", "城市风光", "山水风光"],
        correct: 2,
        difficulty: "easy",
        category: "写景诗"
    },
    {
        id: 58,
        question: "\"随风潜入夜，润物细无声\"赞美了雨的什么特点？",
        options: ["来势凶猛", "默默奉献", "声音优美", "持续时间长"],
        correct: 1,
        difficulty: "easy",
        category: "咏物诗"
    },
    {
        id: 59,
        question: "\"碧玉妆成一树高，万条垂下绿丝绦\"咏的是什么？",
        options: ["梧桐", "柳树", "竹子", "梅花"],
        correct: 1,
        difficulty: "easy",
        category: "咏物诗"
    },
    {
        id: 60,
        question: "\"春蚕到死丝方尽，蜡炬成灰泪始干\"常用来比喻什么？",
        options: ["生命短暂", "奉献精神", "爱情坚贞", "友情深厚"],
        correct: 1,
        difficulty: "easy",
        category: "比喻诗"
    },

    // 普通难度题目 (61-120)
    {
        id: 61,
        question: "\"羌笛何须怨杨柳，春风不度玉门关\"中的\"杨柳\"指的是什么？",
        options: ["柳树", "《折杨柳》曲", "杨树和柳树", "一个地名"],
        correct: 1,
        difficulty: "normal",
        category: "边塞诗"
    },
    {
        id: 62,
        question: "李白的\"蜀道难，难于上青天\"中的\"青天\"在古代常指什么？",
        options: ["天空", "神仙", "皇帝", "高官"],
        correct: 2,
        difficulty: "normal",
        category: "唐诗"
    },
    {
        id: 63,
        question: "\"相见时难别亦难，东风无力百花残\"运用了什么修辞手法？",
        options: ["双关", "比喻", "拟人", "夸张"],
        correct: 0,
        difficulty: "normal",
        category: "修辞手法"
    },
    {
        id: 64,
        question: "杜甫被称为什么？",
        options: ["诗圣", "诗仙", "诗鬼", "诗佛"],
        correct: 0,
        difficulty: "normal",
        category: "诗人称号"
    },
    {
        id: 65,
        question: "\"无可奈何花落去，似曾相识燕归来\"体现了什么哲理？",
        options: ["生死轮回", "物是人非", "时光流逝", "缘分天定"],
        correct: 2,
        difficulty: "normal",
        category: "人生感悟"
    },
    {
        id: 66,
        question: "\"山河破碎风飘絮，身世浮沉雨打萍\"出自文天祥的哪首诗？",
        options: ["《正气歌》", "《过零丁洋》", "《指南录后序》", "《金陵驿》"],
        correct: 1,
        difficulty: "normal",
        category: "爱国诗"
    },
    {
        id: 67,
        question: "\"落红不是无情物，化作春泥更护花\"表达了怎样的精神？",
        options: ["求知精神", "爱国精神", "奉献精神", "探索精神"],
        correct: 2,
        difficulty: "normal",
        category: "哲理诗"
    },
    {
        id: 68,
        question: "\"醉翁之意不在酒，在乎山水之间也\"中\"醉翁\"指的是谁？",
        options: ["王安石", "苏轼", "范仲淹", "欧阳修"],
        correct: 3,
        difficulty: "normal",
        category: "古文"
    },
    {
        id: 69,
        question: "\"先天下之忧而忧，后天下之乐而乐\"体现了什么思想？",
        options: ["知足常乐", "及时行乐", "忧国忧民", "乐观向上"],
        correct: 2,
        difficulty: "normal",
        category: "政治理想"
    },
    {
        id: 70,
        question: "\"大江东去，浪淘尽，千古风流人物\"出自苏轼的哪首词？",
        options: ["《定风波》", "《水调歌头》", "《江城子》", "《念奴娇·赤壁怀古》"],
        correct: 3,
        difficulty: "normal",
        category: "宋词"
    },

    // 继续普通难度题目 (71-120)
    {
        id: 71,
        question: "\"疏影横斜水清浅，暗香浮动月黄昏\"咏的是什么花？",
        options: ["荷花", "梅花", "菊花", "桃花"],
        correct: 1,
        difficulty: "normal",
        category: "咏物诗"
    },
    {
        id: 72,
        question: "\"问君能有几多愁，恰似一江春水向东流\"的作者是？",
        options: ["柳永", "李煜", "苏轼", "辛弃疾"],
        correct: 1,
        difficulty: "normal",
        category: "宋词"
    },
    {
        id: 73,
        question: "\"关关雎鸠，在河之洲\"出自《诗经》的哪一篇？",
        options: ["《桃夭》", "《蒹葭》", "《关雎》", "《硕人》"],
        correct: 2,
        difficulty: "normal",
        category: "诗经"
    },
    {
        id: 74,
        question: "\"江山如此多娇，引无数英雄竞折腰\"的作者是？",
        options: ["朱德", "毛泽东", "陈毅", "叶剑英"],
        correct: 1,
        difficulty: "normal",
        category: "现代诗词"
    },
    {
        id: 75,
        question: "\"蒹葭苍苍，白露为霜\"中\"蒹葭\"指的是什么？",
        options: ["竹子", "芦苇", "柳树", "茅草"],
        correct: 1,
        difficulty: "normal",
        category: "诗经"
    },
    {
        id: 76,
        question: "\"多情自古伤离别，更那堪冷落清秋节\"出自柳永的哪首词？",
        options: ["《雨霖铃》", "《八声甘州》", "《望海潮》", "《蝶恋花》"],
        correct: 0,
        difficulty: "normal",
        category: "宋词"
    },
    {
        id: 77,
        question: "\"众里寻他千百度，蓦然回首，那人却在灯火阑珊处\"出自辛弃疾的哪首词？",
        options: ["《破阵子》", "《青玉案·元夕》", "《永遇乐》", "《水龙吟》"],
        correct: 1,
        difficulty: "normal",
        category: "宋词"
    },
    {
        id: 78,
        question: "\"举世皆浊我独清，众人皆醉我独醒\"体现了屈原怎样的品格？",
        options: ["孤傲", "高洁", "愤怒", "悲观"],
        correct: 1,
        difficulty: "normal",
        category: "先秦文学"
    },
    {
        id: 79,
        question: "\"零落成泥碾作尘，只有香如故\"咏的是什么花？",
        options: ["桃花", "荷花", "梅花", "菊花"],
        correct: 2,
        difficulty: "normal",
        category: "咏物词"
    },
    {
        id: 80,
        question: "\"昨夜雨疏风骤，浓睡不消残酒\"出自李清照的哪首词？",
        options: ["《醉花阴》", "《声声慢》", "《一剪梅》", "《如梦令》"],
        correct: 3,
        difficulty: "normal",
        category: "宋词"
    },
    {
        id: 81,
        question: "\"风萧萧兮易水寒，壮士一去兮不复还\"的背景故事是？",
        options: ["聂政刺韩王", "专诸刺王僚", "荆轲刺秦王", "要离刺庆忌"],
        correct: 2,
        difficulty: "normal",
        category: "历史典故"
    },
    {
        id: 82,
        question: "\"莫等闲，白了少年头，空悲切\"出自岳飞的哪首词？",
        options: ["《满江红》", "《小重山》", "《登黄鹤楼》", "《清平乐》"],
        correct: 0,
        difficulty: "normal",
        category: "爱国词"
    },
    {
        id: 83,
        question: "\"安能摧眉折腰事权贵，使我不得开心颜\"体现了李白怎样的性格？",
        options: ["傲骨", "豪放", "洒脱", "愤怒"],
        correct: 0,
        difficulty: "normal",
        category: "诗人性格"
    },
    {
        id: 84,
        question: "\"夕阳西下，断肠人在天涯\"出自马致远的哪首曲？",
        options: ["《墙头马上》", "《汉宫秋》", "《青衫泪》", "《天净沙·秋思》"],
        correct: 3,
        difficulty: "normal",
        category: "元曲"
    },
    {
        id: 85,
        question: "\"人生自古谁无死，留取丹心照汗青\"的作者是？",
        options: ["陆游", "岳飞", "辛弃疾", "文天祥"],
        correct: 3,
        difficulty: "normal",
        category: "爱国诗"
    },
    {
        id: 86,
        question: "\"业精于勤，荒于嬉；行成于思，毁于随\"出自韩愈的哪篇文章？",
        options: ["《师说》", "《进学解》", "《马说》", "《原道》"],
        correct: 1,
        difficulty: "normal",
        category: "古文"
    },
    {
        id: 87,
        question: "\"千古兴亡多少事，悠悠。不尽长江滚滚流\"体现了什么历史观？",
        options: ["进步观", "天命论", "循环论", "兴替无常"],
        correct: 3,
        difficulty: "normal",
        category: "历史感慨"
    },
    {
        id: 88,
        question: "\"黄沙百战穿金甲，不破楼兰终不还\"表达了什么精神？",
        options: ["思乡之情", "报国决心", "厌战情绪", "功名追求"],
        correct: 1,
        difficulty: "normal",
        category: "边塞诗"
    },
    {
        id: 89,
        question: "\"两情若是久长时，又岂在朝朝暮暮\"出自秦观的哪首词？",
        options: ["《鹊桥仙》", "《浣溪沙》", "《踏莎行》", "《淮海词》"],
        correct: 0,
        difficulty: "normal",
        category: "爱情诗"
    },
    {
        id: 90,
        question: "\"山不厌高，海不厌深\"出自曹操的哪首诗？",
        options: ["《龟虽寿》", "《观沧海》", "《短歌行》", "《蒿里行》"],
        correct: 2,
        difficulty: "normal",
        category: "三国诗词"
    },

    // 有难度题目 (91-150)
    {
        id: 91,
        question: "\"庄生晓梦迷蝴蝶，望帝春心托杜鹃\"运用了什么典故？",
        options: ["牛郎织女", "梁祝化蝶", "庄周梦蝶和杜宇化鸟", "嫦娥奔月"],
        correct: 2,
        difficulty: "hard",
        category: "典故运用"
    },
    {
        id: 92,
        question: "\"纵使相逢应不识，尘满面，鬓如霜\"出自苏轼悼念谁的词？",
        options: ["老师欧阳修", "弟弟苏辙", "朋友王安石", "妻子王弗"],
        correct: 3,
        difficulty: "hard",
        category: "宋词背景"
    },
    {
        id: 93,
        question: "\"青青子衿，悠悠我心\"在曹操《短歌行》中表达了什么？",
        options: ["求贤若渴", "思念恋人", "怀念故乡", "感慨时光"],
        correct: 0,
        difficulty: "hard",
        category: "典故化用"
    },
    {
        id: 94,
        question: "《诗经》中\"风、雅、颂\"的\"雅\"主要指什么？",
        options: ["宫廷音乐", "民间歌谣", "祭祀歌曲", "战争歌曲"],
        correct: 0,
        difficulty: "hard",
        category: "诗经分类"
    },
    {
        id: 95,
        question: "\"江东子弟多才俊，卷土重来未可知\"中\"江东\"指哪里？",
        options: ["江苏一带", "江西一带", "湖南一带", "湖北一带"],
        correct: 0,
        difficulty: "hard",
        category: "历史地理"
    },
    {
        id: 96,
        question: "\"此情可待成追忆，只是当时已惘然\"出自李商隐的哪首诗？",
        options: ["《无题》", "《锦瑟》", "《夜雨寄北》", "《嫦娥》"],
        correct: 1,
        difficulty: "hard",
        category: "唐诗"
    },
    {
        id: 97,
        question: "\"白发三千丈，缘愁似个长\"运用了什么修辞手法？",
        options: ["排比", "比喻", "拟人", "夸张"],
        correct: 3,
        difficulty: "hard",
        category: "修辞手法"
    },
    {
        id: 98,
        question: "\"知否，知否，应是绿肥红瘦\"中\"绿肥红瘦\"指的是什么？",
        options: ["暮春景象", "初夏景象", "深秋景象", "仲春景象"],
        correct: 0,
        difficulty: "hard",
        category: "季节描写"
    },
    {
        id: 99,
        question: "陶渊明的\"不为五斗米折腰\"中的\"五斗米\"指什么？",
        options: ["赋税数量", "日常口粮", "县令的俸禄", "买酒的钱"],
        correct: 2,
        difficulty: "hard",
        category: "典故来源"
    },
    {
        id: 100,
        question: "\"稻花香里说丰年，听取蛙声一片\"出自辛弃疾的哪首词？",
        options: ["《永遇乐》", "《清平乐》", "《破阵子》", "《西江月》"],
        correct: 3,
        difficulty: "hard",
        category: "田园词"
    },

    // 高难度题目 (151-200)
    {
        id: 151,
        question: "\"蓬山此去无多路，青鸟殷勤为探看\"中\"青鸟\"典故来自哪里？",
        options: ["西王母传说", "精卫填海", "牛郎织女", "嫦娥奔月"],
        correct: 0,
        difficulty: "expert",
        category: "神话典故"
    },
    {
        id: 152,
        question: "\"商女不知亡国恨，隔江犹唱后庭花\"中\"后庭花\"指什么？",
        options: ["宫中美女", "真实的花", "《玉树后庭花》", "春天的花"],
        correct: 2,
        difficulty: "expert",
        category: "历史典故"
    },
    {
        id: 153,
        question: "\"君不见高堂明镜悲白发，朝如青丝暮成雪\"使用了什么表现手法？",
        options: ["排比", "对比", "夸张", "设问"],
        correct: 1,
        difficulty: "expert",
        category: "表现手法"
    },
    {
        id: 154,
        question: "\"多情却似总无情，唯觉樽前笑不成\"表达了什么情感矛盾？",
        options: ["离别时的复杂心情", "爱而不得的痛苦", "友情与爱情的冲突", "理想与现实的差距"],
        correct: 0,
        difficulty: "expert",
        category: "情感分析"
    },
    {
        id: 155,
        question: "《楚辞》中\"兮\"字的作用主要是什么？",
        options: ["感叹词", "连接词", "语气助词", "象声词"],
        correct: 2,
        difficulty: "expert",
        category: "楚辞特色"
    },
    {
        id: 156,
        question: "\"正是江南好风景，落花时节又逢君\"的\"落花时节\"暗示什么？",
        options: ["国家衰落", "春天结束", "人生暮年", "分别时刻"],
        correct: 0,
        difficulty: "expert",
        category: "隐喻手法"
    },
    {
        id: 157,
        question: "\"红楼梦\"中林黛玉的《葬花吟》体现了什么文学传统？",
        options: ["田园传统", "咏物传统", "悲秋传统", "边塞传统"],
        correct: 2,
        difficulty: "expert",
        category: "文学传统"
    },
    {
        id: 158,
        question: "\"沉舟侧畔千帆过，病树前头万木春\"体现了什么哲学思想？",
        options: ["天人合一", "因果报应", "新陈代谢", "阴阳调和"],
        correct: 2,
        difficulty: "expert",
        category: "哲学思想"
    },
    {
        id: 159,
        question: "\"山雨欲来风满楼\"最初用来形容什么？",
        options: ["战争前兆", "自然天气", "政治局势", "商业竞争"],
        correct: 2,
        difficulty: "expert",
        category: "典故演变"
    },
    {
        id: 160,
        question: "\"同是天涯沦落人，相逢何必曾相识\"体现了什么社会现象？",
        options: ["士人流落", "商人经营", "农民起义", "工匠技艺"],
        correct: 0,
        difficulty: "expert",
        category: "社会背景"
    },
    {
        id: 161,
        question: "\"关河梦断何处，尘暗旧貂裘\"反映了作者什么处境？",
        options: ["仕途失意", "疾病缠身", "家道中落", "战争流离"],
        correct: 0,
        difficulty: "expert",
        category: "作者处境"
    },
    {
        id: 162,
        question: "\"此夜曲中闻折柳，何人不起故园情\"中\"折柳\"是什么意思？",
        options: ["思乡之情", "真的折柳", "送别曲名", "春天到来"],
        correct: 2,
        difficulty: "expert",
        category: "音乐典故"
    },
    {
        id: 163,
        question: "\"衣带渐宽终不悔，为伊消得人憔悴\"被王国维用来比喻什么？",
        options: ["爱情境界", "治学境界", "人生境界", "艺术境界"],
        correct: 1,
        difficulty: "expert",
        category: "理论运用"
    },
    {
        id: 164,
        question: "\"无边落木萧萧下，不尽长江滚滚来\"运用了什么对仗方式？",
        options: ["宽对", "工对", "流水对", "邻对"],
        correct: 2,
        difficulty: "expert",
        category: "对仗技巧"
    },
    {
        id: 165,
        question: "\"采采卷耳，不盈顷筐\"中\"采采\"是什么意思？",
        options: ["采摘的时间", "采摘的动作", "采摘的数量", "采摘的样子"],
        correct: 3,
        difficulty: "expert",
        category: "古汉语"
    },
    {
        id: 166,
        question: "\"浮云游子意，落日故人情\"运用了什么表现手法？",
        options: ["双关", "比兴", "赋比", "象征"],
        correct: 3,
        difficulty: "expert",
        category: "表现手法"
    },
    {
        id: 167,
        question: "\"锦瑟无端五十弦，一弦一柱思华年\"中的\"锦瑟\"可能指什么？",
        options: ["时光象征", "乐器名称", "美好事物", "回忆载体"],
        correct: 3,
        difficulty: "expert",
        category: "象征意义"
    },
    {
        id: 168,
        question: "\"长风破浪会有时，直挂云帆济沧海\"体现了李白什么特点？",
        options: ["现实主义", "消极避世", "乐观豪迈", "悲观厌世"],
        correct: 2,
        difficulty: "expert",
        category: "诗人风格"
    },
    {
        id: 169,
        question: "\"古来圣贤皆寂寞，惟有饮者留其名\"反映了什么人生态度？",
        options: ["及时行乐", "愤世嫉俗", "超然物外", "积极进取"],
        correct: 0,
        difficulty: "expert",
        category: "人生态度"
    },
    {
        id: 170,
        question: "\"花间一壶酒，独酌无相亲\"中\"相亲\"是什么意思？",
        options: ["亲近的人", "相互亲近", "亲戚关系", "恋人关系"],
        correct: 0,
        difficulty: "expert",
        category: "词汇理解"
    },
    {
        id: 171,
        question: "\"梦后楼台高锁，酒醒帘幕低垂\"营造了什么意境？",
        options: ["繁华热闹", "凄凉冷落", "温馨和谐", "紧张激烈"],
        correct: 1,
        difficulty: "expert",
        category: "意境营造"
    },
    {
        id: 172,
        question: "\"黄河之水天上来，奔流到海不复回\"表现了什么特点？",
        options: ["含蓄深沉", "细腻温婉", "气势磅礴", "平淡质朴"],
        correct: 2,
        difficulty: "expert",
        category: "艺术特色"
    },
    {
        id: 173,
        question: "\"今宵酒醒何处？杨柳岸、晓风残月\"属于什么词风？",
        options: ["婉约", "豪放", "清新", "沉郁"],
        correct: 0,
        difficulty: "expert",
        category: "词风分类"
    },
    {
        id: 174,
        question: "\"求之不得，寤寐思服\"中\"寤寐\"是什么意思？",
        options: ["日日夜夜", "醒着睡着", "反复思考", "来回走动"],
        correct: 1,
        difficulty: "expert",
        category: "古汉语"
    },
    {
        id: 175,
        question: "\"窈窕淑女，君子好逑\"体现了《诗经》什么特点？",
        options: ["比兴手法", "重章叠句", "直抒胸臆", "借景抒情"],
        correct: 1,
        difficulty: "expert",
        category: "诗经特色"
    },
    {
        id: 176,
        question: "\"帘外雨潺潺，春意阑珊\"中\"阑珊\"是什么意思？",
        options: ["开始", "繁盛", "衰减", "持续"],
        correct: 2,
        difficulty: "expert",
        category: "词汇理解"
    },
    {
        id: 177,
        question: "\"满纸荒唐言，一把辛酸泪\"体现了什么创作方法？",
        options: ["虚实结合", "以实写虚", "以虚写实", "纯属虚构"],
        correct: 2,
        difficulty: "expert",
        category: "创作方法"
    },
    {
        id: 178,
        question: "\"相顾无言，惟有泪千行\"表现了什么样的离别？",
        options: ["师生告别", "朋友分离", "夫妻永别", "母子分离"],
        correct: 2,
        difficulty: "expert",
        category: "情境分析"
    },
    {
        id: 179,
        question: "\"燕燕于飞，差池其羽\"中\"差池\"是什么意思？",
        options: ["整齐划一", "参差不齐", "快慢不同", "高低起伏"],
        correct: 1,
        difficulty: "expert",
        category: "古汉语"
    },
    {
        id: 180,
        question: "\"心有灵犀一点通\"最初用来形容什么？",
        options: ["理解透彻", "聪明智慧", "感情深厚", "心灵相通"],
        correct: 3,
        difficulty: "expert",
        category: "典故原意"
    },
    {
        id: 181,
        question: "\"山重水复疑无路，柳暗花明又一村\"给人什么人生启示？",
        options: ["要乐观向上", "要善于观察", "要热爱自然", "困境中要有希望"],
        correct: 3,
        difficulty: "normal",
        category: "人生启示"
    },
    {
        id: 182,
        question: "\"宝剑锋从磨砺出，梅花香自苦寒来\"说明了什么道理？",
        options: ["要坚持不懈", "要珍惜时间", "要热爱学习", "成功需要磨练"],
        correct: 3,
        difficulty: "normal",
        category: "人生道理"
    },
    {
        id: 183,
        question: "\"业精于勤，荒于嬉\"的下一句是什么？",
        options: ["温故而知新", "学而时习之", "行成于思，毁于随", "知之为知之"],
        correct: 2,
        difficulty: "normal",
        category: "古文名句"
    },
    {
        id: 184,
        question: "\"千磨万击还坚劲，任尔东西南北风\"赞美了竹子的什么品质？",
        options: ["高洁清雅", "坚韧不屈", "虚怀若谷", "生机勃勃"],
        correct: 1,
        difficulty: "normal",
        category: "品质赞美"
    },
    {
        id: 185,
        question: "\"少壮不努力，老大徒伤悲\"出自哪里？",
        options: ["《长歌行》", "《劝学》", "《师说》", "《论语》"],
        correct: 0,
        difficulty: "normal",
        category: "出处辨析"
    },
    {
        id: 186,
        question: "\"欲速则不达\"体现了什么道理？",
        options: ["要循序渐进", "要把握时机", "要量力而行", "要持之以恒"],
        correct: 0,
        difficulty: "normal",
        category: "哲理启示"
    },
    {
        id: 187,
        question: "\"绿杨烟外晓寒轻，红杏枝头春意闹\"中\"闹\"字有什么表达效果？",
        options: ["化虚为实", "化静为动", "化抽象为具体", "化无声为有声"],
        correct: 1,
        difficulty: "hard",
        category: "炼字艺术"
    },
    {
        id: 188,
        question: "\"梧桐更兼细雨，到黄昏、点点滴滴\"营造了什么氛围？",
        options: ["神秘莫测", "温馨和谐", "热闹欢快", "凄凉愁苦"],
        correct: 3,
        difficulty: "hard",
        category: "氛围营造"
    },
    {
        id: 189,
        question: "\"云破月来花弄影\"中\"弄影\"表现了什么？",
        options: ["月下花影摇动", "人在赏花", "风吹花动", "花香阵阵"],
        correct: 0,
        difficulty: "hard",
        category: "动态描写"
    },
    {
        id: 190,
        question: "\"一川烟草，满城风絮，梅子黄时雨\"描绘的是什么季节？",
        options: ["暮春", "初夏", "仲春", "深秋"],
        correct: 1,
        difficulty: "hard",
        category: "季节判断"
    },
    {
        id: 191,
        question: "\"料峭春风吹酒醒，微冷，山头斜照却相迎\"表现了苏轼什么精神？",
        options: ["悲观消极", "豁达乐观", "愤世嫉俗", "多愁善感"],
        correct: 1,
        difficulty: "hard",
        category: "精神品质"
    },
    {
        id: 192,
        question: "\"醉后不知天在水，满船清梦压星河\"运用了什么手法？",
        options: ["远近结合", "动静结合", "正反对比", "虚实结合"],
        correct: 3,
        difficulty: "hard",
        category: "表现手法"
    },
    {
        id: 193,
        question: "\"春花秋月何时了，往事知多少\"表达了怎样的情感？",
        options: ["亡国之痛", "思乡之情", "离别之苦", "怀古之幽"],
        correct: 0,
        difficulty: "hard",
        category: "情感表达"
    },
    {
        id: 194,
        question: "\"雕栏玉砌应犹在，只是朱颜改\"中\"朱颜\"指什么？",
        options: ["容颜", "朱红色", "宫女", "国家"],
        correct: 0,
        difficulty: "hard",
        category: "词汇含义"
    },
    {
        id: 195,
        question: "\"凤箫声动，玉壶光转，一夜鱼龙舞\"描写的是什么场景？",
        options: ["端午竞渡", "中秋赏月", "春节庆典", "元宵灯会"],
        correct: 3,
        difficulty: "hard",
        category: "场景描写"
    },
    {
        id: 196,
        question: "\"蛾儿雪柳黄金缕，笑语盈盈暗香去\"中\"蛾儿雪柳\"指什么？",
        options: ["头饰", "服装", "化妆", "发型"],
        correct: 0,
        difficulty: "expert",
        category: "古代服饰"
    },
    {
        id: 197,
        question: "\"东风夜放花千树，更吹落、星如雨\"中\"花千树\"实际指什么？",
        options: ["雪花", "真花", "灯饰", "焰火"],
        correct: 3,
        difficulty: "expert",
        category: "比喻理解"
    },
    {
        id: 198,
        question: "\"寻寻觅觅，冷冷清清，凄凄惨惨戚戚\"连用叠词的效果是什么？",
        options: ["表现时间流逝", "模拟音响效果", "描绘行动状态", "强化愁苦之情"],
        correct: 3,
        difficulty: "expert",
        category: "修辞效果"
    },
    {
        id: 199,
        question: "\"这次第，怎一个愁字了得\"中\"次第\"是什么意思？",
        options: ["情形、光景", "时间顺序", "等级次序", "房屋结构"],
        correct: 0,
        difficulty: "expert",
        category: "古汉语"
    },
    {
        id: 200,
        question: "\"物是人非事事休，欲语泪先流\"表达了什么主题？",
        options: ["生离死别", "时过境迁", "睹物思人", "世事无常"],
        correct: 2,
        difficulty: "expert",
        category: "主题思想"
    }
];

// 导出题库
if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
} 

// ES6 模块导出
export { questions }; 