const genreLibrary = [
  {
    name: "悬疑",
    audience: "偏爱解谜、追索真相与情绪压迫感的都市青年观众",
    marketBase: 78,
    complexityBase: 44,
    keywords: ["真相", "秘密", "失踪", "调查", "案件", "线索", "嫌疑人", "证据", "审讯", "隐瞒"],
    emotions: ["压抑", "不安", "紧张", "怀疑", "惊惧"],
    conflictTypes: ["追查", "误导", "博弈", "揭露", "反转"],
    sellingPoints: ["谜团层层推进", "反转带来的讨论度", "角色动机复杂"],
    risks: ["信息量不足会显得空", "反转动机站不住时容易失真"],
    successKeywords: ["迷雾", "反转", "线索回收", "身份错位"],
    structures: ["案件引爆", "多轮误导", "关键证据揭晓", "终局反转"],
    benchmarkStyle: "冷峻、克制、逐层逼近真相",
    suggestions: ["增强悬念", "强化线索回收", "提升反转动机可信度"]
  },
  {
    name: "科幻",
    audience: "关注世界观设定、科技伦理与视觉奇观的核心类型观众",
    marketBase: 74,
    complexityBase: 72,
    keywords: ["未来", "人工智能", "星际", "时间", "记忆", "实验", "科技", "宇宙", "系统", "克隆"],
    emotions: ["敬畏", "孤独", "未知", "宏大", "异化"],
    conflictTypes: ["技术失控", "文明冲突", "自我认知", "生存抉择"],
    sellingPoints: ["概念钩子强", "世界观延展性高", "视听想象空间大"],
    risks: ["设定堆砌会压过人物", "制作成本容易抬高"],
    successKeywords: ["概念先行", "伦理难题", "视觉奇观", "命运困局"],
    structures: ["设定展示", "规则失衡", "危机升级", "牺牲或突破"],
    benchmarkStyle: "高概念、哲思感、视觉驱动",
    suggestions: ["压实世界规则", "突出科技伦理命题", "控制高成本场景密度"]
  },
  {
    name: "爱情",
    audience: "关注人物关系成长、情感投射与记忆点场面的泛女性与情侣观众",
    marketBase: 72,
    complexityBase: 36,
    keywords: ["相遇", "爱", "告白", "误会", "分离", "重逢", "承诺", "婚礼", "陪伴", "选择"],
    emotions: ["甜蜜", "遗憾", "悸动", "治愈", "心碎"],
    conflictTypes: ["关系误读", "现实阻隔", "成长错位", "承诺考验"],
    sellingPoints: ["情绪代入快", "容易制造金句与名场面", "宣传素材直观"],
    risks: ["剧情套路化时差异度不够", "人物目标过弱时推动力不足"],
    successKeywords: ["心动瞬间", "情绪共鸣", "记忆名场面", "遗憾感"],
    structures: ["相遇建立", "关系升温", "重大阻碍", "决定性选择"],
    benchmarkStyle: "细腻、亲密、强调情绪回响",
    suggestions: ["增加情感记忆点", "强化关系转折理由", "让结局更具情绪余韵"]
  },
  {
    name: "犯罪",
    audience: "偏好社会黑暗面、人物博弈与高压对抗的成熟观众",
    marketBase: 76,
    complexityBase: 56,
    keywords: ["黑帮", "警方", "抢劫", "卧底", "帮派", "毒品", "交易", "追捕", "背叛", "逃亡"],
    emotions: ["压迫", "狠劲", "绝望", "冷酷", "焦灼"],
    conflictTypes: ["猫鼠对抗", "忠诚背叛", "利益争夺", "权力角斗"],
    sellingPoints: ["强冲突", "角色张力大", "适合双雄结构"],
    risks: ["角色动机同质化会显老套", "暴力呈现失衡会削弱受众面"],
    successKeywords: ["双线对冲", "灰度角色", "局中局", "宿命对抗"],
    structures: ["交易启动", "局势反噬", "同盟瓦解", "终极清算"],
    benchmarkStyle: "硬朗、危险、人物关系带电",
    suggestions: ["强化对手戏", "明确利益链条", "增加灰度角色抉择"]
  },
  {
    name: "喜剧",
    audience: "追求轻松观影体验、强节奏包袱与高传播台词的泛大众观众",
    marketBase: 79,
    complexityBase: 34,
    keywords: ["误会", "荒诞", "倒霉", "假扮", "婚礼", "乌龙", "搞笑", "尴尬", "搭档", "翻车"],
    emotions: ["轻快", "解压", "荒诞", "热闹", "温暖"],
    conflictTypes: ["身份错位", "连续误会", "目标偏差", "局面失控"],
    sellingPoints: ["传播门槛低", "适配节假日档期", "名场面易出圈"],
    risks: ["只靠段子会缺故事骨架", "笑点风格过窄影响普适性"],
    successKeywords: ["包袱密度", "人物反差", "节奏快", "温情回收"],
    structures: ["错位开局", "连锁翻车", "情绪回收", "热闹收束"],
    benchmarkStyle: "高能、鲜活、强调反差与节奏",
    suggestions: ["提升包袱密度", "让笑点服务人物", "补足温情回收段落"]
  },
  {
    name: "家庭",
    audience: "适合亲子与多年龄层观众，强调亲情、和解与生活共鸣",
    marketBase: 70,
    complexityBase: 30,
    keywords: ["父亲", "母亲", "孩子", "家庭", "团圆", "代沟", "照顾", "责任", "回家", "亲情"],
    emotions: ["温暖", "愧疚", "牵挂", "治愈", "和解"],
    conflictTypes: ["代际矛盾", "责任分配", "亲情疏离", "价值观冲突"],
    sellingPoints: ["情绪门槛低", "共鸣面广", "适合现实题材融合"],
    risks: ["冲突不够尖锐时容易平", "说教感会削弱观感"],
    successKeywords: ["生活细节", "共鸣", "和解", "成长互见"],
    structures: ["矛盾累积", "家庭事件爆发", "关系重估", "情感和解"],
    benchmarkStyle: "温厚、真实、依赖生活细节打动人",
    suggestions: ["补充家庭关系细节", "提升代际冲突力度", "避免结尾说教化"]
  },
  {
    name: "动作",
    audience: "追求强节奏、任务驱动和体感刺激的院线类型片观众",
    marketBase: 77,
    complexityBase: 68,
    keywords: ["追车", "枪战", "任务", "营救", "打斗", "爆炸", "特工", "刺客", "追击", "护送"],
    emotions: ["热血", "紧绷", "燃", "冲刺", "硬派"],
    conflictTypes: ["任务阻击", "追杀逃亡", "团队协作", "生死倒计时"],
    sellingPoints: ["节奏天然快", "宣传物料清晰", "爽感反馈直接"],
    risks: ["人物层次薄会只剩动作展示", "高成本场面控制难"],
    successKeywords: ["任务倒计时", "高能调度", "英雄时刻", "实战质感"],
    structures: ["任务领取", "阻碍升级", "中段挫败", "终极对决"],
    benchmarkStyle: "高压、直接、身体性强",
    suggestions: ["强化任务倒计时", "提升动作场景辨识度", "给主角增加伤痛代价"]
  },
  {
    name: "成长",
    audience: "关注个体蜕变、青春记忆和人生选择的年轻观众",
    marketBase: 69,
    complexityBase: 32,
    keywords: ["青春", "梦想", "校园", "比赛", "毕业", "迷茫", "朋友", "选择", "成长", "失败"],
    emotions: ["热望", "遗憾", "勇气", "迷惘", "释然"],
    conflictTypes: ["自我怀疑", "关系变化", "理想与现实拉扯", "身份认同"],
    sellingPoints: ["人物弧线清晰", "容易形成代入与口碑", "适合现实题材嫁接"],
    risks: ["缺少强事件时会显散", "情绪表达过满会失真"],
    successKeywords: ["青春残酷", "弧线明确", "群像关系", "阶段选择"],
    structures: ["目标确立", "受挫摇摆", "关系重估", "新的自我认知"],
    benchmarkStyle: "真诚、流动、以人物变化为驱动",
    suggestions: ["明确人物成长节点", "压缩支线分散度", "增加阶段性挫败"]
  },
  {
    name: "现实主义",
    audience: "关注社会议题、时代情绪和真实生活切面的观众",
    marketBase: 73,
    complexityBase: 38,
    keywords: ["工厂", "城市", "底层", "失业", "新闻", "社区", "现实", "制度", "生存", "困境"],
    emotions: ["无力", "坚忍", "克制", "沉痛", "希望"],
    conflictTypes: ["制度压力", "生存困局", "社会关系", "个体抗争"],
    sellingPoints: ["议题性强", "容易形成口碑讨论", "可与多类型嫁接"],
    risks: ["戏剧性不足时节奏偏平", "议题先于人物会显生硬"],
    successKeywords: ["真实切口", "社会观察", "人物命运", "克制表达"],
    structures: ["困境显形", "局面挤压", "选择升级", "余波回荡"],
    benchmarkStyle: "沉着、贴地、依赖细节与现实触感",
    suggestions: ["强化社会切口", "补充真实细节纹理", "让议题回到人物命运"]
  },
  {
    name: "奇幻",
    audience: "喜爱寓言感、想象力与情绪奇观的年轻观众和家庭观众",
    marketBase: 71,
    complexityBase: 61,
    keywords: ["魔法", "神话", "异世界", "诅咒", "传说", "灵魂", "命运", "王国", "妖怪", "守护"],
    emotions: ["神秘", "浪漫", "冒险", "童真", "宿命"],
    conflictTypes: ["命运试炼", "规则代价", "守护与牺牲", "世界失衡"],
    sellingPoints: ["视觉气质鲜明", "寓言感容易形成记忆", "适合全年龄传播"],
    risks: ["设定不稳会削弱信服度", "世界观说明过重会拖慢节奏"],
    successKeywords: ["寓言气质", "命运感", "奇观", "情绪纯度"],
    structures: ["奇境召唤", "试炼展开", "代价显形", "守护完成"],
    benchmarkStyle: "诗性、瑰丽、带命运感与象征意味",
    suggestions: ["明确奇幻规则代价", "强化视觉母题", "让冒险目标更清晰"]
  }
];

const suggestionCatalog = {
  strengthenGoal: {
    title: "强化主角目标",
    description: "让观众更早知道主角到底想完成什么，以及不完成会失去什么。",
    rewriteHint: "把主角目标提得更清晰，并让失败代价更具体。"
  },
  escalateConflict: {
    title: "提升冲突升级节奏",
    description: "增加事件层层推进感，让局势不是停留在一个强度上。",
    rewriteHint: "把冲突设计成逐步升级，每一轮都比上一轮更难撤退。"
  },
  emotionalBeat: {
    title: "增加情感记忆点",
    description: "补一到两个能够留下情绪印象的关系场面或抉择场面。",
    rewriteHint: "加入更具情感辨识度的关系节点，让人物选择更打动人。"
  },
  marketGenre: {
    title: "提高商业类型识别度",
    description: "让题材标签更鲜明，方便观众与市场快速识别卖点。",
    rewriteHint: "强调类型片标志性元素，让影片卖点更清楚。"
  },
  reduceCost: {
    title: "控制拍摄成本",
    description: "尽量把重场面集中到少数关键节点，用调度替代堆砌。",
    rewriteHint: "保留核心看点，同时减少过多高成本场景的依赖。"
  },
  suspense: {
    title: "增强反转或悬念",
    description: "让观众始终处于想知道下一步真相或结局的状态。",
    rewriteHint: "埋入悬念线索，并在关键节点释放更强的反转回报。"
  },
  audience: {
    title: "明确受众画像",
    description: "确定是给谁看的，再让情绪与卖点围绕该观众群体集中。",
    rewriteHint: "让故事表达更聚焦于核心受众最在意的情绪和爽点。"
  },
  ending: {
    title: "优化结局完成度",
    description: "让结尾既回应主线，又能留下余味或明确情绪落点。",
    rewriteHint: "把结局写得更完整，让前面埋下的冲突与情绪得到回应。"
  },
  worldRules: {
    title: "明确规则与代价",
    description: "尤其适合科幻和奇幻，让设定不是装饰，而是推动剧情的硬规则。",
    rewriteHint: "明确世界规则及其代价，让设定直接作用于人物选择。"
  },
  villain: {
    title: "增强对手压力",
    description: "给对手或阻力一条更清晰的行动逻辑，主线会更有压迫感。",
    rewriteHint: "让主要阻力更主动、更有策略，持续挤压主角行动空间。"
  },
  relationship: {
    title: "强化人物关系弧线",
    description: "让关系变化成为推动剧情的关键力量，而不只是附属元素。",
    rewriteHint: "把重要关系写出明显变化，让情节推进和关系推进相互牵引。"
  }
};

const sampleStory = "题材倾向：现实主义犯罪悬疑。主角设定：一名因举报上级而被边缘化的女刑警。核心目标：她想找到在棚改区失踪的少年证人，证明自己多年前未能阻止的矿难另有幕后黑手。主要冲突：房地产利益集团、旧案受害者家属与警局内部阻力同时逼近。关键反转：少年其实在主动接近真相，而女刑警最信任的老同事正参与掩盖事故。结局走向：她必须在公开真相与保护幸存家庭之间做出代价巨大的选择，希望突出情绪：压抑、愧疚、决绝。";

const signalRules = [
  { key: "genre", label: "题材明确", patterns: ["题材", "悬疑", "科幻", "爱情", "犯罪", "喜剧", "家庭", "动作", "成长", "现实", "奇幻"] },
  { key: "protagonist", label: "主角清晰", patterns: ["主角", "一名", "一个", "她", "他", "他们", "少年", "少女", "刑警", "父亲", "母亲"] },
  { key: "goal", label: "目标可见", patterns: ["想", "必须", "决定", "试图", "为了", "目标", "寻找", "营救", "证明", "守护"] },
  { key: "conflict", label: "冲突存在", patterns: ["冲突", "阻止", "追捕", "追查", "对抗", "背叛", "危机", "失控", "困境", "威胁"] },
  { key: "twist", label: "转折信号", patterns: ["反转", "却", "然而", "真相", "原来", "突然", "秘密", "其实"] },
  { key: "ending", label: "结局方向", patterns: ["结局", "最终", "最后", "走向", "代价", "牺牲", "和解", "逃离"] }
];

const scoreNotes = {
  genreMatch: "当前文本与内置素材库的题材关键词契合程度。",
  marketAcceptance: "从可识别性、受众接受门槛与完成度估算当前市场友好度。",
  emotionalTension: "根据冲突词、情绪词和事件压力推测故事的情绪拉力。",
  commercialPotential: "综合类型识别、卖点清晰度与观众传播面得出的商业化倾向。",
  productionComplexity: "从场面规模、设定复杂度和题材属性推测制作难度。",
  differentiation: "从题材混搭、概念稀缺度和人物处境特殊性估算差异度。"
};

const dom = {
  workspace: document.getElementById("workspace"),
  panelInput: document.getElementById("panel-input"),
  panelAnalysis: document.getElementById("panel-analysis"),
  panelOutput: document.getElementById("panel-output"),
  dividerLeft: document.getElementById("divider-left"),
  dividerRight: document.getElementById("divider-right"),
  storyInput: document.getElementById("story-input"),
  charCount: document.getElementById("char-count"),
  signalSummary: document.getElementById("signal-summary"),
  signalList: document.getElementById("signal-list"),
  analyzeButton: document.getElementById("analyze-button"),
  clearInput: document.getElementById("clear-input"),
  loadExample: document.getElementById("load-example"),
  promptBank: document.getElementById("prompt-bank"),
  statusGenre: document.getElementById("status-genre"),
  statusCompleteness: document.getElementById("status-completeness"),
  statusSuggestions: document.getElementById("status-suggestions"),
  analysisBadge: document.getElementById("analysis-badge"),
  genreMatchPill: document.getElementById("genre-match-pill"),
  marketFeedback: document.getElementById("market-feedback"),
  scoreGrid: document.getElementById("score-grid"),
  libraryGrid: document.getElementById("library-grid"),
  suggestionList: document.getElementById("suggestion-list"),
  suggestionCountPill: document.getElementById("suggestion-count-pill"),
  selectRecommended: document.getElementById("select-recommended"),
  clearSelection: document.getElementById("clear-selection"),
  generateButton: document.getElementById("generate-button"),
  coreStory: document.getElementById("core-story"),
  targetAudience: document.getElementById("target-audience"),
  storyHighlights: document.getElementById("story-highlights"),
  rewrittenStory: document.getElementById("rewritten-story")
};

let currentAnalysis = null;
let selectedSuggestionIds = new Set();
let inputDebounce = null;
const panelMinimums = {
  left: 300,
  middle: 320,
  right: 360
};

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function countHits(text, patterns) {
  return patterns.reduce((sum, pattern) => sum + (text.includes(pattern) ? 1 : 0), 0);
}

function normalizeText(text) {
  return text.replace(/\s+/g, "").trim();
}

function summarizeInputSignals(text) {
  const normalized = normalizeText(text);
  const signals = signalRules.map((rule) => ({
    ...rule,
    active: countHits(normalized, rule.patterns) > 0
  }));
  const activeCount = signals.filter((signal) => signal.active).length;
  const completeness = Math.round((activeCount / signals.length) * 100);

  return { signals, activeCount, completeness };
}

function getPrimaryGenres(text) {
  const normalized = normalizeText(text);
  const matches = genreLibrary.map((genre) => {
    const keywordHits = countHits(normalized, genre.keywords);
    const emotionHits = countHits(normalized, genre.emotions);
    const conflictHits = countHits(normalized, genre.conflictTypes);
    const total = keywordHits * 3 + emotionHits * 2 + conflictHits * 2;

    return {
      genre,
      keywordHits,
      emotionHits,
      conflictHits,
      total
    };
  });

  return matches.sort((a, b) => b.total - a.total);
}

function buildScores(text, completeness, rankedGenres) {
  const normalized = normalizeText(text);
  const primary = rankedGenres[0];
  const secondary = rankedGenres[1];
  const lengthBoost = clamp(Math.floor(normalized.length / 20), 0, 15);
  const conflictTerms = countHits(normalized, [
    "危机", "追查", "追捕", "追杀", "失控", "背叛", "揭露", "冲突", "代价", "倒计时", "营救", "对抗"
  ]);
  const emotionTerms = countHits(normalized, [
    "愧疚", "压抑", "决绝", "热血", "甜蜜", "遗憾", "痛苦", "希望", "孤独", "惊惧", "崩溃", "治愈"
  ]);
  const costTerms = countHits(normalized, [
    "宇宙", "星际", "爆炸", "战争", "末日", "王国", "魔法", "大场面", "追车", "枪战", "灾难"
  ]);
  const uniquenessTerms = countHits(normalized, [
    "矿难", "棚改区", "记忆", "平行", "克隆", "诅咒", "卧底", "家族秘密", "算法", "身份", "旧城"
  ]);

  const genreMatch = clamp(38 + primary.total * 5 + (secondary.total > 0 ? 8 : 0), 25, 95);
  const marketAcceptance = clamp(
    Math.round(primary.genre.marketBase * 0.72 + completeness * 0.2 + genreMatch * 0.08),
    35,
    94
  );
  const emotionalTension = clamp(34 + conflictTerms * 8 + emotionTerms * 5 + Math.floor(completeness / 8), 22, 96);
  const commercialPotential = clamp(
    Math.round(marketAcceptance * 0.48 + genreMatch * 0.24 + emotionalTension * 0.2 + lengthBoost),
    28,
    95
  );
  const productionComplexity = clamp(
    Math.round(primary.genre.complexityBase + costTerms * 7 + secondary.genre.complexityBase * 0.08),
    18,
    96
  );
  const differentiation = clamp(
    30 + uniquenessTerms * 7 + (secondary.total > 0 ? 10 : 0) + Math.floor(primary.total * 1.6),
    20,
    94
  );

  return {
    genreMatch,
    marketAcceptance,
    emotionalTension,
    commercialPotential,
    productionComplexity,
    differentiation
  };
}

function buildFeedback(primary, secondary, scores, completeness) {
  const marketTone =
    scores.marketAcceptance >= 80 ? "有比较清晰的市场进入点" :
    scores.marketAcceptance >= 65 ? "具备一定类型可读性，但仍需要更鲜明卖点" :
    "当前市场识别度偏弱，建议先收紧类型表达";

  const emotionTone =
    scores.emotionalTension >= 78 ? "情绪拉力比较足" :
    scores.emotionalTension >= 60 ? "已经有基础冲突，但升级节奏还可以再压紧" :
    "目前冲突张力偏松，需要增加更明确的阻力和代价";

  const differentiationTone =
    scores.differentiation >= 76 ? "具备一定差异化讨论空间" :
    "差异化更多依赖执行层面的细节与结构设计";

  return `当前文本更接近${primary.genre.name}${secondary.total > 0 ? ` + ${secondary.genre.name}` : ""}的混合方向，信息完整度约为${completeness}%。从规则判断看，这个故事${marketTone}；${emotionTone}；${differentiationTone}。如果继续打磨，优先把${primary.genre.name}类型卖点与主角代价绑定，会更容易形成稳定的市场位置。`;
}

function buildSuggestionSet(primary, scores) {
  const suggestions = [];

  if (scores.genreMatch < 70) {
    suggestions.push({ id: "marketGenre", recommended: true });
  }
  if (scores.marketAcceptance < 72) {
    suggestions.push({ id: "audience", recommended: true });
  }
  if (scores.emotionalTension < 72) {
    suggestions.push({ id: "escalateConflict", recommended: true });
    suggestions.push({ id: "villain", recommended: false });
  }
  if (scores.differentiation < 68) {
    suggestions.push({ id: "suspense", recommended: true });
  }
  if (scores.productionComplexity > 72) {
    suggestions.push({ id: "reduceCost", recommended: false });
  }

  suggestions.push({ id: "strengthenGoal", recommended: true });
  suggestions.push({ id: "ending", recommended: false });
  suggestions.push({ id: "emotionalBeat", recommended: primary.genre.name === "爱情" || primary.genre.name === "家庭" || primary.genre.name === "成长" });
  suggestions.push({ id: "relationship", recommended: primary.genre.name === "爱情" || primary.genre.name === "家庭" || primary.genre.name === "犯罪" });

  if (primary.genre.name === "科幻" || primary.genre.name === "奇幻") {
    suggestions.push({ id: "worldRules", recommended: true });
  }

  primary.genre.suggestions.forEach((label) => {
    if (label.includes("悬念") || label.includes("反转")) {
      suggestions.push({ id: "suspense", recommended: true });
    }
    if (label.includes("目标")) {
      suggestions.push({ id: "strengthenGoal", recommended: true });
    }
    if (label.includes("关系")) {
      suggestions.push({ id: "relationship", recommended: false });
    }
    if (label.includes("成本")) {
      suggestions.push({ id: "reduceCost", recommended: false });
    }
    if (label.includes("规则")) {
      suggestions.push({ id: "worldRules", recommended: true });
    }
    if (label.includes("情感")) {
      suggestions.push({ id: "emotionalBeat", recommended: true });
    }
  });

  const deduped = [];
  const seen = new Map();
  suggestions.forEach((item) => {
    if (!suggestionCatalog[item.id]) {
      return;
    }
    const existing = seen.get(item.id);
    if (existing) {
      existing.recommended = existing.recommended || item.recommended;
      return;
    }
    const merged = { ...suggestionCatalog[item.id], id: item.id, recommended: Boolean(item.recommended) };
    seen.set(item.id, merged);
    deduped.push(merged);
  });

  return deduped.slice(0, 8);
}

function analyzeStory(text) {
  const normalized = normalizeText(text);
  const signalInfo = summarizeInputSignals(normalized);
  const rankedGenres = getPrimaryGenres(normalized);
  const primary = rankedGenres[0].total > 0 ? rankedGenres[0] : { ...rankedGenres[0], total: 0, genre: genreLibrary[0] };
  const secondary = rankedGenres[1] || rankedGenres[0];
  const scores = buildScores(normalized, signalInfo.completeness, rankedGenres);
  const feedback = buildFeedback(primary, secondary, scores, signalInfo.completeness);
  const suggestions = buildSuggestionSet(primary, scores);

  return {
    text,
    normalized,
    signalInfo,
    rankedGenres,
    primary,
    secondary,
    scores,
    feedback,
    suggestions
  };
}

function renderSignals(signalInfo) {
  dom.signalList.innerHTML = signalInfo.signals
    .map(
      (signal) => `
        <div class="signal-item ${signal.active ? "active" : ""}">
          <span class="signal-dot"></span>
          <span>${signal.label}</span>
        </div>
      `
    )
    .join("");

  dom.signalSummary.textContent =
    signalInfo.activeCount >= 5
      ? "信息维度较完整，可以进入评估和改写"
      : signalInfo.activeCount >= 3
      ? "基础信息已具备，建议继续补充反转或结局"
      : "当前文本信息偏少，建议先补充主角、目标和冲突";
}

function renderScores(scores) {
  const entries = [
    ["genreMatch", "题材匹配度"],
    ["marketAcceptance", "市场接受度"],
    ["emotionalTension", "情绪张力"],
    ["commercialPotential", "商业化潜力"],
    ["productionComplexity", "制作复杂度"],
    ["differentiation", "差异化程度"]
  ];

  dom.scoreGrid.innerHTML = entries
    .map(([key, label]) => {
      const value = Math.round(scores[key]);
      return `
        <article class="score-card">
          <div class="score-top">
            <span class="score-title">${label}</span>
            <strong class="score-value">${value}</strong>
          </div>
          <div class="score-bar" aria-hidden="true">
            <div class="score-fill" style="width: ${value}%"></div>
          </div>
          <p class="score-note">${scoreNotes[key]}</p>
        </article>
      `;
    })
    .join("");
}

function renderLibrary(rankedGenres) {
  const activeGenres = new Set(rankedGenres.slice(0, 3).map((item) => item.genre.name));
  dom.libraryGrid.innerHTML = genreLibrary
    .map((genre) => `
      <article class="library-item ${activeGenres.has(genre.name) ? "active" : ""}">
        <div class="library-head">
          <h4>${genre.name}</h4>
          <span class="library-tag">${genre.audience.slice(0, 8)}...</span>
        </div>
        <p><strong>核心受众：</strong>${genre.audience}</p>
        <p><strong>常见卖点：</strong>${genre.sellingPoints.join("、")}</p>
        <p><strong>市场风险：</strong>${genre.risks.join("、")}</p>
        <p><strong>成功关键词：</strong>${genre.successKeywords.join("、")}</p>
        <p><strong>常见结构：</strong>${genre.structures.join(" / ")}</p>
        <p><strong>对标风格：</strong>${genre.benchmarkStyle}</p>
      </article>
    `)
    .join("");
}

function renderSuggestions(suggestions) {
  dom.suggestionList.innerHTML = suggestions
    .map((suggestion) => `
      <label class="suggestion-card ${suggestion.recommended ? "recommended" : ""}">
        <input
          type="checkbox"
          data-suggestion-id="${suggestion.id}"
          ${selectedSuggestionIds.has(suggestion.id) ? "checked" : ""}
        />
        <span class="suggestion-title">
          ${suggestion.title}
          ${suggestion.recommended ? '<span class="recommend-badge">推荐</span>' : ""}
        </span>
        <p>${suggestion.description}</p>
      </label>
    `)
    .join("");

  dom.suggestionCountPill.textContent = `${suggestions.length} 条可选`;
  updateSelectedStatus();
}

function updateInputMeta(text) {
  const normalized = normalizeText(text);
  const signalInfo = summarizeInputSignals(normalized);
  dom.charCount.textContent = `${normalized.length} 字`;
  dom.statusCompleteness.textContent = `${signalInfo.completeness}%`;
  renderSignals(signalInfo);
}

function updateSelectedStatus() {
  dom.statusSuggestions.textContent = `${selectedSuggestionIds.size} 条`;
}

function extractFocusText(text) {
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (!cleaned) {
    return "";
  }
  return cleaned.length > 120 ? `${cleaned.slice(0, 120)}……` : cleaned;
}

function buildOutputPayload(analysis, selectedIds) {
  const selected = selectedIds.length
    ? selectedIds.map((id) => suggestionCatalog[id])
    : analysis.suggestions.filter((item) => item.recommended).map((item) => suggestionCatalog[item.id]);
  const primaryGenre = analysis.primary.genre;
  const focusText = extractFocusText(analysis.text);
  const highlightPool = [
    `${primaryGenre.name}类型卖点更集中，重点突出${primaryGenre.sellingPoints.slice(0, 2).join("与")}`,
    `${primaryGenre.benchmarkStyle}的风格方向更明确`,
    `${selected.slice(0, 3).map((item) => item.title).join("、")}会被落实到关键情节节点`,
    `面向${primaryGenre.audience}的情绪和传播点更清晰`
  ].filter(Boolean);

  const selectedHints = selected.map((item) => item.rewriteHint);
  const complexitySentence =
    analysis.scores.productionComplexity > 72
      ? "在保留关键高潮的前提下，会尽量把高成本场面压缩到少数决定性节点。"
      : "制作规模可围绕核心场景展开，让资源投入集中服务关键戏。";
  const suspenseSentence = selectedIds.includes("suspense")
    ? "故事中会更早埋下悬念线索，并在中后段回收形成反转。"
    : "";
  const emotionalSentence = selectedIds.includes("emotionalBeat") || selectedIds.includes("relationship")
    ? "人物关系将被放到更前排的位置，让观众不仅追事件，也追情感变化。"
    : "";
  const rulesSentence = selectedIds.includes("worldRules")
    ? "设定规则和代价会直接介入人物抉择，避免世界观只停留在说明层面。"
    : "";

  const coreStory = `${primaryGenre.name}向故事，核心是主角在 ${primaryGenre.structures[0]} 到 ${primaryGenre.structures[3]} 的推进中，被迫直面更高代价的选择。`;
  const targetAudience = `更适合${primaryGenre.audience}。如果以当前方向推进，宣发重点可以放在${primaryGenre.successKeywords.slice(0, 3).join("、")}这些标签上。`;
  const rewrittenStory = `${focusText} 重新整理后，它将被塑造成一部更具${primaryGenre.name}辨识度的作品：主角的目标会更早被点明，阻碍会沿着“${primaryGenre.structures.join(" -> ")}”的节奏逐步升级，核心看点集中在${primaryGenre.sellingPoints.join("、")}。${selectedHints.join("")}${suspenseSentence}${emotionalSentence}${rulesSentence}${complexitySentence}最终，新版剧情会把人物命运、类型卖点与市场可读性拉到同一条线上，让故事既更容易被理解，也更容易留下记忆点。`;

  return {
    coreStory,
    targetAudience,
    highlights: highlightPool,
    rewrittenStory
  };
}

function renderOutput(payload) {
  dom.coreStory.textContent = payload.coreStory;
  dom.targetAudience.textContent = payload.targetAudience;
  dom.storyHighlights.innerHTML = payload.highlights.map((item) => `<li>${item}</li>`).join("");
  dom.rewrittenStory.textContent = payload.rewrittenStory;
}

function applyAnalysis(analysis) {
  currentAnalysis = analysis;
  dom.statusGenre.textContent = analysis.primary.genre.name;
  dom.analysisBadge.textContent = `${analysis.primary.genre.name}主导`;
  dom.genreMatchPill.textContent = `${analysis.primary.genre.name}${analysis.secondary.total > 0 ? ` / ${analysis.secondary.genre.name}` : ""}`;
  dom.marketFeedback.textContent = analysis.feedback;
  renderScores(analysis.scores);
  renderLibrary(analysis.rankedGenres);

  const nextSelected = new Set();
  analysis.suggestions.forEach((suggestion) => {
    if (selectedSuggestionIds.has(suggestion.id) || suggestion.recommended) {
      nextSelected.add(suggestion.id);
    }
  });
  selectedSuggestionIds = nextSelected;

  renderSuggestions(analysis.suggestions);
  renderOutput(buildOutputPayload(analysis, Array.from(selectedSuggestionIds)));
}

function resetOutputState() {
  dom.coreStory.textContent = "完成分析后，这里会生成浓缩版核心故事概括。";
  dom.targetAudience.textContent = "系统会结合匹配题材与商业化潜力，给出更适合的观众画像。";
  dom.storyHighlights.innerHTML = "<li>建议列表生成后，这里会汇总升级后的卖点。</li>";
  dom.rewrittenStory.textContent = "勾选建议并点击“生成新版剧情”后，这里会输出一段融合原始剧情、类型优势与优化方向的新文本。";
}

function runAnalysis() {
  const text = dom.storyInput.value.trim();
  if (!text) {
    currentAnalysis = null;
    updateInputMeta("");
    dom.statusGenre.textContent = "待分析";
    dom.analysisBadge.textContent = "规则驱动评估";
    dom.genreMatchPill.textContent = "等待输入";
    dom.marketFeedback.textContent = "请输入剧情文本后再进行评估。";
    dom.scoreGrid.innerHTML = "";
    selectedSuggestionIds = new Set();
    renderSuggestions([]);
    renderLibrary(genreLibrary.map((genre) => ({ genre, total: 0 })));
    resetOutputState();
    return;
  }

  const analysis = analyzeStory(text);
  updateInputMeta(text);
  applyAnalysis(analysis);
}

function bindSuggestions() {
  dom.suggestionList.addEventListener("change", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) {
      return;
    }

    const suggestionId = target.dataset.suggestionId;
    if (!suggestionId) {
      return;
    }

    if (target.checked) {
      selectedSuggestionIds.add(suggestionId);
    } else {
      selectedSuggestionIds.delete(suggestionId);
    }

    updateSelectedStatus();
  });
}

function bindPromptInsert() {
  dom.promptBank.addEventListener("click", (event) => {
    const button = event.target.closest("[data-insert]");
    if (!(button instanceof HTMLElement)) {
      return;
    }
    const insertion = button.dataset.insert || "";
    const current = dom.storyInput.value.trim();
    const separator = current ? " " : "";
    dom.storyInput.value = `${current}${separator}${insertion}`;
    dom.storyInput.focus();
    dom.storyInput.setSelectionRange(dom.storyInput.value.length, dom.storyInput.value.length);
    updateInputMeta(dom.storyInput.value);
  });
}

function bindInputEvents() {
  dom.storyInput.addEventListener("input", () => {
    updateInputMeta(dom.storyInput.value);
    window.clearTimeout(inputDebounce);
    inputDebounce = window.setTimeout(() => {
      if (dom.storyInput.value.trim().length > 20) {
        runAnalysis();
      }
    }, 360);
  });

  dom.analyzeButton.addEventListener("click", runAnalysis);

  dom.clearInput.addEventListener("click", () => {
    dom.storyInput.value = "";
    selectedSuggestionIds = new Set();
    runAnalysis();
  });

  dom.loadExample.addEventListener("click", () => {
    dom.storyInput.value = sampleStory;
    runAnalysis();
  });

  dom.selectRecommended.addEventListener("click", () => {
    if (!currentAnalysis) {
      return;
    }
    selectedSuggestionIds = new Set(currentAnalysis.suggestions.filter((item) => item.recommended).map((item) => item.id));
    renderSuggestions(currentAnalysis.suggestions);
    renderOutput(buildOutputPayload(currentAnalysis, Array.from(selectedSuggestionIds)));
  });

  dom.clearSelection.addEventListener("click", () => {
    if (!currentAnalysis) {
      return;
    }
    selectedSuggestionIds = new Set();
    renderSuggestions(currentAnalysis.suggestions);
    renderOutput(buildOutputPayload(currentAnalysis, []));
  });

  dom.generateButton.addEventListener("click", () => {
    if (!currentAnalysis) {
      runAnalysis();
      return;
    }
    renderOutput(buildOutputPayload(currentAnalysis, Array.from(selectedSuggestionIds)));
  });
}

function bindScrollControls() {
  document.querySelectorAll(".scroll-controls").forEach((control) => {
    control.addEventListener("click", (event) => {
      const button = event.target.closest("[data-direction]");
      if (!(button instanceof HTMLButtonElement)) {
        return;
      }

      const targetId = control.dataset.scrollTarget;
      if (!targetId) {
        return;
      }

      const target = document.getElementById(targetId);
      if (!target) {
        return;
      }

      const direction = button.dataset.direction === "up" ? -1 : 1;
      target.scrollBy({
        top: direction * 220,
        behavior: "smooth"
      });
    });
  });
}

function bindDividers() {
  const attachDrag = (divider, mode) => {
    divider.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      divider.setPointerCapture(event.pointerId);
      const startX = event.clientX;
      const workspaceRect = dom.workspace.getBoundingClientRect();
      const startLeft = dom.panelInput.getBoundingClientRect().width;
      const startMiddle = dom.panelAnalysis.getBoundingClientRect().width;
      const dividerTotal = dom.dividerLeft.getBoundingClientRect().width + dom.dividerRight.getBoundingClientRect().width + 16;

      const handleMove = (moveEvent) => {
        const delta = moveEvent.clientX - startX;
        const totalWidth = workspaceRect.width - dividerTotal;

        if (mode === "left") {
          const maxLeft = Math.max(panelMinimums.left, totalWidth - startMiddle - panelMinimums.right);
          const nextLeft = clamp(startLeft + delta, panelMinimums.left, maxLeft);
          dom.panelInput.style.flexBasis = `${nextLeft}px`;
        }

        if (mode === "right") {
          const leftWidth = dom.panelInput.getBoundingClientRect().width;
          const maxMiddle = Math.max(panelMinimums.middle, totalWidth - leftWidth - panelMinimums.right);
          const nextMiddle = clamp(startMiddle + delta, panelMinimums.middle, maxMiddle);
          dom.panelAnalysis.style.flexBasis = `${nextMiddle}px`;
        }
      };

      const handleUp = () => {
        divider.releasePointerCapture(event.pointerId);
        window.removeEventListener("pointermove", handleMove);
        window.removeEventListener("pointerup", handleUp);
      };

      window.addEventListener("pointermove", handleMove);
      window.addEventListener("pointerup", handleUp);
    });
  };

  attachDrag(dom.dividerLeft, "left");
  attachDrag(dom.dividerRight, "right");
}

function init() {
  renderLibrary(genreLibrary.map((genre) => ({ genre, total: 0 })));
  updateInputMeta("");
  renderSuggestions([]);
  bindSuggestions();
  bindPromptInsert();
  bindInputEvents();
  bindScrollControls();
  bindDividers();

  dom.storyInput.value = sampleStory;
  runAnalysis();
}

init();
