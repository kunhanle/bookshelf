// ==== 道德動物 The Moral Animal · 中英雙語 metadata（非文學框架）====
const BOOK = {
  slug: 'moralanimal',
  langs: ['zh', 'en'],
  title: { zh: '道德動物', en: 'The Moral Animal' },
  author: { zh: 'Robert Wright（羅伯‧萊特）', en: 'Robert Wright' },
  theme: {
    'bg-primary': '#171713', 'bg-secondary': '#1e1e18', 'bg-card': '#24241d', 'bg-elevated': '#2c2c23',
    'text-primary': '#e9e2d2', 'text-secondary': '#b7ad98', 'text-muted': '#857c69',
    'accent': '#b07d3c', 'accent-light': '#d8a860', 'accent-glow': 'rgba(176,125,60,0.30)',
    'rose': '#b06a5a', 'jade': '#7f9a6b', 'blue': '#5f86a0', 'gold': '#c8a24b',
    'border': 'rgba(176,125,60,0.16)',
    atmosphere: { fall: 14, streak: 8, fallRadius: '50%' },
    dayMode: { 'bg-primary': '#efe7d6', 'bg-secondary': '#e6ddc9', 'bg-card': '#faf5e9', 'bg-elevated': '#f2ead9', 'text-primary': '#33301f', 'text-secondary': '#564f38', 'text-muted': '#847a5f', 'border': 'rgba(150,120,70,0.24)' }
  },
  cover: {
    seal: '演',
    subtitle: { zh: '我們為何如此？', en: 'Why We Are the Way We Are' },
    desc: { zh: '在天擇的設計圖裡，讀懂愛、道德與自己；<br>然後，試著超越它。', en: 'Read love, morality, and yourself off natural selection’s blueprint —<br>then try to rise above it.' }
  },
  musicPrompt: { zh: '翻開達爾文的筆記本，<br>是否播放一段背景音樂？', en: 'Open Darwin’s notebook —<br>shall we play some music?' },
  // —— 非文學框架：覆寫小說用語 ——
  labels: {
    nav: { characters: { zh: '概念譜', en: 'Concepts' }, timeline: { zh: '思想軸', en: 'Ideas' } },
    headers: { characters: { zh: '核心概念關係圖', en: 'Map of Core Concepts' }, timeline: { zh: '演化思想演進軸', en: 'The Evolution of an Idea' } },
    subheads: { characters: { zh: '點擊概念卡或關係圖，看演化心理學的核心觀念如何環環相扣', en: 'Click a concept card or the map to see how the core ideas of evolutionary psychology interlock' }, timeline: { zh: '達爾文的一生、演化思想的里程碑，與本書的論證推進', en: 'Darwin’s life, the milestones of evolutionary thought, and the arc of this book’s argument' } },
    timelineTypes: { history: { zh: '思想里程碑', en: 'Milestone in Thought' }, novel: { zh: '本書', en: 'This Book' }, character: { zh: '達爾文生平', en: 'Darwin’s Life' } },
    charDetail: { intro: { zh: '概念說明', en: 'The Idea' }, analysis: { zh: '深入解讀', en: 'A Closer Look' }, related: { zh: '相關概念', en: 'Related Concepts' }, tags: { zh: '關鍵詞', en: 'Keywords' }, empty: '—' },
    legend: { lead: { zh: '核心引擎', en: 'Core Engine' }, major: { zh: '重要概念', en: 'Key Concept' }, minor: { zh: '延伸概念', en: 'Extension' }, edge: { zh: '概念關聯', en: 'Conceptual Link' } }
  },
  intro: {
    subtitle: { zh: '在閱讀之前，先認識這套「看穿人性」的思想工具', en: 'Before you read, meet the toolkit for seeing through human nature' },
    author: {
      name: { zh: 'Robert Wright（羅伯‧萊特）', en: 'Robert Wright' },
      portrait: { zh: '演', en: 'W' },
      years: { zh: '1957 —　美國記者、思想作家', en: '1957 —　American journalist and author of ideas' },
      bio: { zh: '美國記者與科普作家，長於把演化生物學、心理學與哲學編織成大眾能讀的思想書。《道德動物》(1994) 是演化心理學最重要的科普經典之一，把親代投資、親屬選擇、互惠利他、自我欺騙等理論，全部套回達爾文本人的一生來檢驗。他後來的《非零和》《我們為何會信教》《令人神往的靜坐開悟》延續同一條追問：科學能否安放人的道德與意義。', en: 'An American journalist and popular-science writer who weaves evolutionary biology, psychology, and philosophy into books a general reader can follow. The Moral Animal (1994) is among the most important popular works on evolutionary psychology, testing theories of parental investment, kin selection, reciprocal altruism, and self-deception against the life of Darwin himself. His later books — Nonzero, The Evolution of God, Why Buddhism Is True — pursue the same question: whether science can make room for human morality and meaning.' }
    },
    cards: [
      { icon: '🧬', title: { zh: '核心命題', en: 'The Core Question' }, text: { zh: '一個「適者生存」的盲目過程，怎麼會造出一隻懂得愛、內疚與道德的動物？本書主張：我們的道德情感本身，就是天擇在祖先環境中設計出來的適應。', en: 'How can a blind process of “survival of the fittest” produce an animal capable of love, guilt, and morality? The book’s answer: our moral sentiments are themselves adaptations, designed by natural selection in the ancestral environment.' } },
      { icon: '🔬', title: { zh: '獨特手法', en: 'Its Method' }, text: { zh: '萊特把冷硬的理論，全部套回達爾文本人——他的婚姻清單、他的內疚、他的延宕與野心——讓抽象的演化邏輯，長在一個活生生的維多利亞紳士身上。', en: 'Wright tests the cold theory against Darwin himself — his marriage list, his guilt, his delay and ambition — so that abstract evolutionary logic takes flesh in a living Victorian gentleman.' } },
      { icon: '🪞', title: { zh: '最不安的洞見', en: 'Its Most Unsettling Insight' }, text: { zh: '「最高明的騙子，連自己都騙了。」我們對自己的動機自我欺騙，好更有說服力地欺騙別人。看穿這一點，是誠實的起點。', en: '“The best deceiver is the one who deceives himself.” We deceive ourselves about our motives in order to deceive others more convincingly. Seeing through this is where honesty begins.' } },
      { icon: '🧭', title: { zh: '閱讀建議', en: 'How to Read' }, text: { zh: '先看「概念譜」抓住幾個核心引擎（天擇、性擇、親代投資、互惠、自我欺騙），再對照「思想軸」的達爾文生平，然後逐章讀論證。最後四章談倫理，是全書的靈魂。', en: 'Start with the Concepts map to grasp a few core engines (selection, sexual selection, parental investment, reciprocity, self-deception), read against Darwin’s life in the Ideas timeline, then work through the chapters. The last four chapters, on ethics, are the soul of the book.' } }
    ],
    guide: [
      { h: { zh: '先抓核心引擎', en: 'Grasp the core engines first' }, p: { zh: '在「概念譜」認清天擇這台總引擎，以及由它衍生的性擇、親代投資、親屬選擇、互惠利他、自我欺騙。理解它們如何互相咬合，是讀懂全書的地基。', en: 'In the Concepts map, get the master engine (natural selection) and what spins off it: sexual selection, parental investment, kin selection, reciprocal altruism, self-deception. Seeing how they mesh is the foundation.' } },
      { h: { zh: '跟著達爾文的一生讀', en: 'Read along Darwin’s life' }, p: { zh: '打開「思想軸」，把演化思想的里程碑與達爾文的婚姻、內疚、延宕並排看——本書最迷人的地方，就是用真人驗證抽象理論。', en: 'Open the Ideas timeline and set the milestones of evolutionary thought beside Darwin’s marriage, guilt, and delay — the book’s charm is testing abstract theory on a real man.' } },
      { h: { zh: '逐章拆論證', en: 'Unpack each argument' }, p: { zh: '在「閱讀」模組逐章讀本書的論點重述，留意每章的「核心論點→論證→實例→啟示」。隨時用「札記」記下你的同意與質疑。', en: 'In the Reading module, work through the retold argument chapter by chapter, watching each chapter’s claim → argument → example → lesson. Use Notes for your agreements and doubts.' } },
      { h: { zh: '別跳過最後四章', en: 'Don’t skip the last four chapters' }, p: { zh: '前面在解釋「我們是怎麼被設計的」，最後四章才回答「那又如何」——從自然主義謬誤到自我超越，這才是《道德動物》真正的重量。', en: 'The earlier chapters explain how we were designed; the last four answer “so what” — from the naturalistic fallacy to self-transcendence. This is where the book’s real weight lies.' } },
      { h: { zh: '對照書評與自省', en: 'Compare with the review, then reflect' }, p: { zh: '讀完可看附錄裡站長自己的書評（署名 翰林書僮），再到「主題」「金句」回看全局，在「札記」寫下屬於你的判斷。', en: 'Afterward, read the site owner’s own review in the appendix (signed Kun Han Le), revisit the Themes and Quotes for the big picture, and write your own verdict in Notes.' } }
    ]
  },
  families: [
    { id: 'design', label: { zh: '設計原理', en: 'The Design' } },
    { id: 'social', label: { zh: '社會情感', en: 'Social Emotions' } },
    { id: 'ethics', label: { zh: '道德與人', en: 'Morals & the Man' } }
  ],
  timelineSubtitle: { zh: '從達爾文的筆記本，到一門解釋人性的科學', en: 'From Darwin’s notebook to a science of human nature' },
  graph: {
    title: { zh: '— 演化心理學 · 核心概念關係圖 —', en: '— Evolutionary Psychology · A Map of Core Concepts —' },
    nodes: [
      { id: 'natsel',        label: { zh: '天擇', en: 'Natural Selection' },       x: 400, y: 240, tier: 'lead',  color: '#b07d3c' },
      { id: 'selfdec',       label: { zh: '自我欺騙', en: 'Self-Deception' },       x: 400, y: 95,  tier: 'major', color: '#b06a5a' },
      { id: 'sexsel',        label: { zh: '性擇', en: 'Sexual Selection' },         x: 220, y: 150, tier: 'major', color: '#c8a24b' },
      { id: 'parinv',        label: { zh: '親代投資', en: 'Parental Investment' },   x: 180, y: 285, tier: 'major', color: '#c8a24b' },
      { id: 'eea',           label: { zh: '祖先環境', en: 'Ancestral Environment' }, x: 108, y: 205, tier: 'tiny',  color: '#857c69' },
      { id: 'monogamy',      label: { zh: '一夫一妻的政治', en: 'Politics of Monogamy' }, x: 245, y: 385, tier: 'minor', color: '#b06a5a' },
      { id: 'status',        label: { zh: '地位', en: 'Social Status' },            x: 405, y: 400, tier: 'minor', color: '#7f9a6b' },
      { id: 'kinsel',        label: { zh: '親屬選擇', en: 'Kin Selection' },         x: 610, y: 140, tier: 'major', color: '#7f9a6b' },
      { id: 'recip',         label: { zh: '互惠利他', en: 'Reciprocal Altruism' },   x: 645, y: 265, tier: 'major', color: '#7f9a6b' },
      { id: 'conscience',    label: { zh: '良知', en: 'Conscience' },               x: 560, y: 380, tier: 'minor', color: '#5f86a0' },
      { id: 'naturalfallacy',label: { zh: '自然主義謬誤', en: 'Naturalistic Fallacy' }, x: 692, y: 200, tier: 'minor', color: '#5f86a0' },
      { id: 'darwin',        label: { zh: '達爾文', en: 'Charles Darwin' },          x: 692, y: 395, tier: 'minor', color: '#c8a24b' }
    ],
    edges: [
      { from: 'eea', to: 'natsel', kind: 'family' },
      { from: 'natsel', to: 'sexsel', kind: 'family' },
      { from: 'natsel', to: 'parinv', kind: 'family' },
      { from: 'natsel', to: 'kinsel', kind: 'family' },
      { from: 'natsel', to: 'recip', kind: 'family' },
      { from: 'natsel', to: 'selfdec', kind: 'family' },
      { from: 'sexsel', to: 'parinv', kind: 'love' },
      { from: 'parinv', to: 'monogamy', kind: 'love' },
      { from: 'kinsel', to: 'conscience', kind: 'love' },
      { from: 'recip', to: 'conscience', kind: 'love' },
      { from: 'recip', to: 'selfdec', kind: 'love' },
      { from: 'status', to: 'selfdec', kind: 'love' },
      { from: 'darwin', to: 'natsel', kind: 'family' },
      { from: 'darwin', to: 'naturalfallacy', kind: 'love' },
      { from: 'naturalfallacy', to: 'natsel', kind: 'rivalry' }
    ]
  },
  footer: {
    quote: { zh: '「了解我們如何被設計，才可能鬆開演化加在身上的枷鎖。」', en: '“Only by understanding how we are designed can we loosen the shackles evolution placed upon us.”' },
    tagline: { zh: '道德動物 · 沉浸式閱讀 · 演化如何造出一隻懂道德的動物', en: 'The Moral Animal · Immersive Reading · How evolution built a moral animal' }
  }
};

const P1 = { zh: '卷一 · 性、浪漫與愛', en: 'Part One · Sex, Romance, and Love' };
const P2 = { zh: '卷二 · 社會的黏著劑', en: 'Part Two · Social Cement' };
const P3 = { zh: '卷三 · 社會的傾軋', en: 'Part Three · Social Strife' };
const P4 = { zh: '卷四 · 這故事的道德教訓', en: 'Part Four · Morals of the Story' };
const PA = { zh: '附錄 · 讀者書評', en: 'Appendix · Reader’s Review' };

const CHAPTERS = [
  { id: 1,  group: P1, title: { zh: '達爾文的成年', en: 'Darwin Comes of Age' }, pages: '',
    reflectQ: { zh: '若連「道德」都能用演化解釋，這會削弱道德的價值，還是讓你更看清它？', en: 'If even morality can be explained by evolution, does that cheapen it — or let you see it more clearly?' } },
  { id: 2,  group: P1, title: { zh: '雄與雌', en: 'Male and Female' }, pages: '',
    reflectQ: { zh: '「投資多的一方挑剔、投資少的一方競爭」——這條跨物種法則，讓你想到人類的什麼？', en: 'The high-investing sex is choosy, the low-investing sex competes. What in human life does this cross-species rule bring to mind?' } },
  { id: 3,  group: P1, title: { zh: '男與女', en: 'Men and Women' }, pages: '',
    reflectQ: { zh: '男女嫉妒的不對稱（怕肉體 vs 怕情感出軌），是天性、文化，還是兩者交織？', en: 'The asymmetry of jealousy — fear of physical vs. emotional infidelity — is it nature, culture, or both entwined?' } },
  { id: 4,  group: P1, title: { zh: '婚姻市場', en: 'The Marriage Market' }, pages: '',
    reflectQ: { zh: '若一夫一妻其實傷底層男性最重、也拘束高魅力女性，我們該如何看待這項制度？', en: 'If monogamy actually hurts low-status men most and constrains high-status women, how should we regard the institution?' } },
  { id: 5,  group: P1, title: { zh: '達爾文的婚姻', en: 'Darwin’s Marriage' }, pages: '',
    reflectQ: { zh: '達爾文把婚姻列成利弊清單。理性計算與真情，在你的重大抉擇裡如何並存？', en: 'Darwin weighed marriage as a list of pros and cons. How do calculation and genuine feeling coexist in your own big decisions?' } },
  { id: 6,  group: P1, title: { zh: '婚姻幸福的達爾文方案', en: 'The Darwin Plan for Marital Bliss' }, pages: '',
    reflectQ: { zh: '若一夫一妻對人類「有點逆天」，那維繫它靠的是壓抑，還是清醒的選擇？', en: 'If monogamy runs somewhat against our nature, is sustaining it a matter of repression — or of clear-eyed choice?' } },
  { id: 7,  group: P2, title: { zh: '家庭', en: 'Families' }, pages: '',
    reflectQ: { zh: '若親子之愛也是「基因在照顧自己的拷貝」，這讓愛變得虛假了嗎？', en: 'If parental love is also “a gene caring for its own copies,” does that make the love any less real?' } },
  { id: 8,  group: P2, title: { zh: '達爾文與野蠻人', en: 'Darwin and the Savages' }, pages: '',
    reflectQ: { zh: '內群／外群的偏見有生物根源。認得出它，能幫我們把道德關懷的圈擴多大？', en: 'In-group/out-group bias has biological roots. Once we recognize it, how far can we widen the circle of moral concern?' } },
  { id: 9,  group: P2, title: { zh: '朋友', en: 'Friends' }, pages: '',
    reflectQ: { zh: '感激、信任、義憤都是演化用來執行「互惠合約」的情緒。這改變你怎麼看友情嗎？', en: 'Gratitude, trust, and moral outrage are emotions evolved to enforce reciprocity. Does that change how you see friendship?' } },
  { id: 10, group: P2, title: { zh: '達爾文的良知', en: 'Darwin’s Conscience' }, pages: '',
    reflectQ: { zh: '良知既是真誠的，也是經營名聲的工具。這兩者對你來說矛盾嗎？', en: 'Conscience is both sincere and a tool for managing reputation. Do those two feel contradictory to you?' } },
  { id: 11, group: P3, title: { zh: '達爾文的延宕', en: 'Darwin’s Delay' }, pages: '',
    reflectQ: { zh: '達爾文壓了近二十年才發表。名聲的算計，如何悄悄左右了「追求真理」？', en: 'Darwin sat on his theory for nearly twenty years. How quietly did reputation shape his pursuit of truth?' } },
  { id: 12, group: P3, title: { zh: '社會地位', en: 'Social Status' }, pages: '',
    reflectQ: { zh: '地位是一台永不停歇的相對跑步機。看穿它的演化根源，能讓你少焦慮一點嗎？', en: 'Status is an endless relative treadmill. Does seeing its evolutionary root make you a little less anxious?' } },
  { id: 13, group: P3, title: { zh: '欺騙與自我欺騙', en: 'Deception and Self-Deception' }, pages: '',
    reflectQ: { zh: '如果你最真誠的自我辯護，正是設計來騙過你自己的——你要如何找回誠實？', en: 'If your most sincere self-justifications are designed to fool you first, how do you get back to honesty?' } },
  { id: 14, group: P3, title: { zh: '達爾文的勝利', en: 'Darwin’s Triumph' }, pages: '',
    reflectQ: { zh: '連高尚的成就都走在策略的軌道上。這讓達爾文變小，還是變得更真實？', en: 'Even noble achievement runs on strategy. Does that diminish Darwin, or make him more real?' } },
  { id: 15, group: P4, title: { zh: '達爾文式的犬儒', en: 'Darwinian (and Freudian) Cynicism' }, pages: '',
    reflectQ: { zh: '「揭穿動機的自私根源」與「陷入犬儒」只有一線之隔。你怎麼守住那條線？', en: 'There is a thin line between unmasking selfish motives and sliding into cynicism. How do you hold that line?' } },
  { id: 16, group: P4, title: { zh: '演化倫理學', en: 'Evolutionary Ethics' }, pages: '',
    reflectQ: { zh: '「自然如此」推不出「應該如此」。哪些天性，你認為我們應該刻意去違反？', en: '“It is natural” does not imply “it ought to be.” Which of our instincts do you think we should deliberately resist?' } },
  { id: 17, group: P4, title: { zh: '歸咎於受害者', en: 'Blaming the Victim' }, pages: '',
    reflectQ: { zh: '若行為都有原因，責任還站得住腳嗎？理解一個惡行，和原諒它，差別在哪？', en: 'If all behavior has causes, does responsibility still stand? What separates understanding a wrong from excusing it?' } },
  { id: 18, group: P4, title: { zh: '達爾文的宗教', en: 'Darwin Gets Religion' }, pages: '',
    reflectQ: { zh: '「看穿自私的設計，是超越它的第一步。」你相信這隻道德動物能變得比天性更好嗎？', en: '“Seeing through our selfish design is the first step to transcending it.” Do you believe this moral animal can become better than nature made it?' } },
  { id: 19, group: PA, title: { zh: '站在達爾文的肩膀上讀人性', en: 'Reading Human Nature on Darwin’s Shoulders' }, pages: '',
    reflectQ: { zh: '用站長的提醒檢查自己：你有沒有把「這是天性」拿來當某個行為的藉口？', en: 'Test yourself against the reviewer’s warning: have you ever used “it’s human nature” as an excuse for some behavior?' } }
];

const CHARACTERS = [
  { id: 'natsel', name: { zh: '天擇', en: 'Natural Selection' }, family: 'design', role: { zh: '核心引擎', en: 'The Core Engine' }, icon: '🧬', color: '#b07d3c',
    desc: { zh: '演化的總引擎：能提高「把基因傳下去」機率的性狀，會一代代累積。全書所有心理設計，最終都追溯到這台盲目卻極有效率的機器。', en: 'Evolution’s master engine: traits that raise the odds of passing on one’s genes accumulate generation by generation. Every psychological design in the book traces back to this blind yet ruthlessly efficient machine.' },
    analysis: { zh: '關鍵在於「基因之眼」的視角——天擇不為個體幸福服務，只為基因的複製。這解釋了為什麼我們的許多本能（愛、嫉妒、地位焦慮）明明讓自己痛苦，卻依然存在：它們在祖先環境中提高了繁殖成功率。理解這一點，是全書一切論證的起點，也是後面「看穿人性」的基礎。', en: 'The key is the gene’s-eye view: selection does not serve individual happiness, only genetic replication. This is why so many instincts — love, jealousy, status anxiety — persist even when they make us miserable: in the ancestral environment they raised reproductive success. Grasping this is the starting point for every argument in the book, and the basis for later “seeing through” human nature.' },
    tags: [ { zh: '基因之眼', en: 'Gene’s-eye view' }, { zh: '適應', en: 'Adaptation' }, { zh: '繁殖成功率', en: 'Reproductive success' } ],
    related: ['sexsel', 'parinv', 'kinsel', 'selfdec'] },
  { id: 'sexsel', name: { zh: '性擇', en: 'Sexual Selection' }, family: 'design', role: { zh: '重要概念', en: 'Key Concept' }, icon: '🦚', color: '#c8a24b',
    desc: { zh: '達爾文 1871《人類原始》提出：性狀不只為生存而演化，也為「贏得交配」而演化。孔雀笨重的尾巴就是被雌性偏好推出來的。', en: 'Proposed by Darwin in The Descent of Man (1871): traits evolve not only for survival but to win mates. The peacock’s cumbersome tail was pushed into being by female preference.' },
    analysis: { zh: '性擇解釋了為什麼兩性在外貌、行為、心理上如此不同。當一方（通常雄性）為爭取交配而競爭、演化出誇張的裝飾與冒險傾向，另一方（通常雌性）則演化出精挑細選的品味。人類的求偶心理——男性的炫耀、女性的挑剔——都是這股力量的餘響。', en: 'Sexual selection explains why the sexes differ so much in looks, behavior, and mind. When one sex (usually male) competes for mates and evolves flashy ornaments and risk-taking, the other (usually female) evolves discerning taste. Human courtship psychology — male display, female choosiness — is an echo of this force.' },
    tags: [ { zh: '孔雀尾', en: 'The peacock’s tail' }, { zh: '擇偶偏好', en: 'Mate preference' }, { zh: '兩性差異', en: 'Sex differences' } ],
    related: ['natsel', 'parinv'] },
  { id: 'parinv', name: { zh: '親代投資', en: 'Parental Investment' }, family: 'design', role: { zh: '重要概念', en: 'Key Concept' }, icon: '🥚', color: '#c8a24b',
    desc: { zh: 'Trivers 的理論：投資後代成本較高的一方（哺乳類多為雌性），在擇偶上更挑剔；成本較低的一方則傾向競爭與求量。精子廉價、卵子昂貴，一切從這道不對稱開始。', en: 'Trivers’s theory: the sex that invests more in offspring (usually the female in mammals) is choosier about mates; the one that invests less tends to compete and seek quantity. Sperm are cheap, eggs are costly — everything starts from this asymmetry.' },
    analysis: { zh: '這是全書解釋兩性心理的地基。因為女性最低投資極高（懷孕、哺育），她演化得謹慎、重視對方的資源與承諾；男性最低投資可以極低，故演化出更強的多樣性衝動。但人類男性其實投資不低（會參與養育），所以兩性都挑剔，只是方向不同——這正是後面所有男女議題的根源。', en: 'This is the book’s foundation for the psychology of the sexes. Because a woman’s minimum investment is so high (pregnancy, nursing), she evolved to be cautious, weighing a partner’s resources and commitment; a man’s minimum can be tiny, so he evolved a stronger pull toward variety. Yet human males invest heavily too (they help rear young), so both sexes are choosy — just in different ways, the root of every later question about men and women.' },
    tags: [ { zh: '卵子昂貴', en: 'Costly eggs' }, { zh: '不對稱', en: 'Asymmetry' }, { zh: 'Trivers' } ],
    related: ['natsel', 'sexsel', 'monogamy'] },
  { id: 'eea', name: { zh: '祖先環境', en: 'The Ancestral Environment' }, family: 'design', role: { zh: '延伸概念', en: 'Extension' }, icon: '🏞️', color: '#857c69',
    desc: { zh: '人類心智被設計的那個世界——採集狩獵的小群體，而非現代都會。我們的本能是為那個環境調校的，這造成本能與現代生活的種種錯位。', en: 'The world our minds were designed for — small hunter-gatherer bands, not the modern metropolis. Our instincts are tuned to that setting, which is why they so often misfire in modern life.' },
    analysis: { zh: '書評特別點出這一層：「人類演化出適合的社會型態，與現今差距太大」，正是現代許多問題的根源。渴望甜與脂、對陌生人的戒心、地位比較的焦慮——這些在祖先環境是資產，在今天卻常成負債。理解「錯配」，才不會把演化的預設當成命運。', en: 'The review highlights this layer: the society we evolved for differs vastly from today’s, the root of many modern ills. Cravings for sugar and fat, wariness of strangers, the anxiety of status comparison — assets in the ancestral world, often liabilities now. Grasping this “mismatch” keeps us from mistaking evolution’s defaults for destiny.' },
    tags: [ { zh: '演化錯配', en: 'Evolutionary mismatch' }, { zh: '採集狩獵', en: 'Hunter-gatherer' } ],
    related: ['natsel'] },
  { id: 'monogamy', name: { zh: '一夫一妻的政治', en: 'The Politics of Monogamy' }, family: 'social', role: { zh: '延伸概念', en: 'Extension' }, icon: '💍', color: '#b06a5a',
    desc: { zh: '婚姻制度是在調節被演化裝好的交配衝動。一夫一妻不是單純「對男人有利」，而是一場分配政治：它把女性分配開來，壓低男性競爭。', en: 'Marriage institutions regulate the mating impulses evolution installed. Monogamy is not simply “good for men” — it is a politics of distribution: it spreads women across men and dampens male competition.' },
    analysis: { zh: '書評的分配分析很精準：多偶制下，高魅力男性獲利最大、底層男性受害最重、部分女性可分享高地位男性。強制一夫一妻某種程度是男人之間的協議——讓多數男性都娶得到妻。而現代的離婚再婚像「準多偶」，多半仍對男性有利。制度背後，是演化衝動與社會秩序的角力。', en: 'The review’s distribution analysis is sharp: under polygamy, high-status men gain most, low-status men are hurt worst, and some women can share a high-status man. Imposed monogamy is partly a pact among men — so that most men can find a wife. Modern serial marriage is a kind of “quasi-polygamy,” still tilted toward men. Behind the institution is a tug-of-war between evolved impulse and social order.' },
    tags: [ { zh: '分配政治', en: 'Distribution' }, { zh: '底層男性', en: 'Low-status men' }, { zh: '準多偶', en: 'Quasi-polygamy' } ],
    related: ['parinv', 'status'] },
  { id: 'status', name: { zh: '地位', en: 'Social Status' }, family: 'social', role: { zh: '延伸概念', en: 'Extension' }, icon: '🏔️', color: '#7f9a6b',
    desc: { zh: '對地位的追求攸關適應度——尤其對男性，地位曾直接換來交配機會。於是野心、面子、相對比較，成了一台永不停歇的跑步機。', en: 'The drive for status is fitness-relevant — especially for men, for whom status once translated directly into mating opportunity. Hence ambition, face, and relative comparison became an endless treadmill.' },
    analysis: { zh: '地位遊戲的殘酷在於它是「相對」的：別人升，你就相對降，所以永遠不夠。達爾文表面淡泊，骨子裡對科學地位有極強的在意。看穿地位焦慮的古老根源，不是要人放棄努力，而是讓人不被那種永遠填不滿的比較心綁架。', en: 'The cruelty of the status game is that it is relative: when others rise, you relatively fall, so it is never enough. Darwin seemed detached, yet cared intensely about his scientific standing. Seeing the ancient root of status anxiety is not a call to stop striving, but a way to avoid being enslaved by a comparison that can never be filled.' },
    tags: [ { zh: '相對跑步機', en: 'Relative treadmill' }, { zh: '野心', en: 'Ambition' }, { zh: '面子', en: 'Face' } ],
    related: ['monogamy', 'selfdec'] },
  { id: 'kinsel', name: { zh: '親屬選擇', en: 'Kin Selection' }, family: 'social', role: { zh: '重要概念', en: 'Key Concept' }, icon: '🩸', color: '#7f9a6b',
    desc: { zh: 'Hamilton 1964 的洞見：基因可以透過幫助「帶有相同基因的親屬」來複製自己。這解釋了家庭之愛、手足情，也解釋了為何我們對血親特別慷慨。', en: 'Hamilton’s 1964 insight: a gene can copy itself by helping relatives who carry the same gene. This explains family love and sibling bonds — and why we are especially generous to blood kin.' },
    analysis: { zh: '「內含適應度」把利他的謎題解開了一半：對親屬的犧牲，其實是基因的自利。但同一理論也預言了「親子衝突」（Trivers）——親代與子代只共享一半基因，對「該投資多少」意見不同，於是有斷奶之爭、手足競爭。連最溫暖的家庭之愛，底下都有基因的算術。', en: 'Inclusive fitness solves half the puzzle of altruism: sacrifice for kin is really a gene’s self-interest. But the same theory predicts parent-offspring conflict (Trivers) — parent and child share only half their genes and disagree over how much to invest, producing weaning conflict and sibling rivalry. Even the warmest family love has a genetic arithmetic beneath it.' },
    tags: [ { zh: '內含適應度', en: 'Inclusive fitness' }, { zh: 'Hamilton' }, { zh: '親子衝突', en: 'Parent-offspring conflict' } ],
    related: ['natsel', 'conscience'] },
  { id: 'recip', name: { zh: '互惠利他', en: 'Reciprocal Altruism' }, family: 'social', role: { zh: '重要概念', en: 'Key Concept' }, icon: '🤝', color: '#7f9a6b',
    desc: { zh: 'Trivers 1971：非親屬之間也能演化出合作，只要「以牙還牙」——你幫我、我幫你。友誼，本質上是一場（多半無意識的）策略性互惠。', en: 'Trivers 1971: cooperation can evolve even among non-kin, so long as it is tit-for-tat — you help me, I help you. Friendship is, at bottom, a (largely unconscious) strategic reciprocity.' },
    analysis: { zh: '這條理論最精采的推論，是它「反推出」一整套道德情感：為了讓互惠合約運作，演化必須裝上感激（記得還人情）、喜歡（選對合作對象）、信任、罪惡感（別背叛得太過火）、義憤（懲罰騙子）、公平感。換句話說，我們的良心，是演化用來執行合約的軟體。囚徒困境與非零和賽局，是它的數學骨架。', en: 'Its most striking implication is that it derives an entire suite of moral emotions: to make reciprocity work, evolution had to install gratitude (to repay favors), liking (to pick good partners), trust, guilt (to not cheat too far), moral outrage (to punish cheaters), and a sense of fairness. Our conscience, in short, is software evolved to enforce contracts. The prisoner’s dilemma and non-zero-sum games are its mathematical skeleton.' },
    tags: [ { zh: '以牙還牙', en: 'Tit-for-tat' }, { zh: '囚徒困境', en: "Prisoner's dilemma" }, { zh: '非零和', en: 'Non-zero-sum' } ],
    related: ['natsel', 'conscience', 'selfdec'] },
  { id: 'conscience', name: { zh: '良知', en: 'Conscience' }, family: 'social', role: { zh: '延伸概念', en: 'Extension' }, icon: '⚖️', color: '#5f86a0',
    desc: { zh: '罪惡感、羞恥、義務感——這些「道德情感」不是文明的教養，而是演化用來經營結盟與名聲的裝置，讓我們保持「信用良好」。', en: 'Guilt, shame, a sense of obligation — these “moral sentiments” are not merely civilization’s polish but devices evolved to manage alliances and reputation, keeping us in good standing.' },
    analysis: { zh: '這是本書最違反直覺、也最深刻的一步：良知既是真誠的，又是功能性的。你真的會內疚，但內疚之所以存在，是因為它在祖先環境裡幫你維持了值得合作的名聲。達爾文本人謹小慎微、極重名譽，正是這套系統的生動樣本。承認良知有演化根源，並不會讓良知消失——反而讓我們更懂得珍惜它。', en: 'This is the book’s most counterintuitive and profound step: conscience is at once sincere and functional. You really do feel guilt, but guilt exists because in the ancestral world it preserved a reputation worth cooperating with. Darwin himself — scrupulous, intensely protective of his good name — is a vivid specimen of this system. Admitting conscience has evolutionary roots does not make it vanish; it makes us value it more.' },
    tags: [ { zh: '罪惡感', en: 'Guilt' }, { zh: '名聲', en: 'Reputation' }, { zh: '真誠又功能', en: 'Sincere yet functional' } ],
    related: ['kinsel', 'recip'] },
  { id: 'selfdec', name: { zh: '自我欺騙', en: 'Self-Deception' }, family: 'social', role: { zh: '重要概念', en: 'Key Concept' }, icon: '🪞', color: '#b06a5a',
    desc: { zh: '全書的靈魂概念：最高明的騙子，連自己都騙了。我們對自己的動機自我欺騙，好更有說服力地欺騙別人。心智更像個公關，而非誠實的記錄者。', en: 'The soul of the book: the best deceiver is the one who deceives himself. We deceive ourselves about our motives so as to deceive others more convincingly. The mind is more a press agent than an honest recorder.' },
    analysis: { zh: 'Trivers 的自我欺騙理論指出：如果你真心相信自己的說法，就沒有說謊的破綻，騙術更成功。於是演化把各種「自利偏誤」裝進我們腦裡——我們高估自己的貢獻、把私心包裝成原則、記得對自己有利的版本。這正是「看穿人性」最難、也最重要的一課：最需要被懷疑的謊言，是你對自己說的那些。', en: 'Trivers’s theory of self-deception holds that if you genuinely believe your own story, there is no tell to give the lie away, so the deception succeeds. Evolution therefore installed self-serving biases: we overrate our contributions, dress private interest as principle, and remember the version that flatters us. This is the hardest and most important lesson in seeing through human nature: the lies most in need of doubt are the ones you tell yourself.' },
    tags: [ { zh: '自利偏誤', en: 'Self-serving bias' }, { zh: '心智公關', en: 'The mind as press agent' }, { zh: 'Trivers' } ],
    related: ['natsel', 'recip', 'status'] },
  { id: 'naturalfallacy', name: { zh: '自然主義謬誤', en: 'The Naturalistic Fallacy' }, family: 'ethics', role: { zh: '延伸概念', en: 'Extension' }, icon: '🚧', color: '#5f86a0',
    desc: { zh: '「自然如此」推不出「應該如此」。演化解釋了我們的衝動從何而來，卻從不告訴我們該不該服從它。這是全書倫理學的樞紐。', en: 'What is natural does not imply what ought to be. Evolution explains where our impulses come from, but never tells us whether to obey them. This is the hinge of the book’s ethics.' },
    analysis: { zh: '這是《道德動物》最重要的一道防線：把演化解釋當成道德許可，是邏輯上的謬誤。男性有出軌傾向、人有自私傾向，都是「是」；但這推不出「就該如此」。萊特反過來主張：正因為我們知道天性怎麼設計自己，我們才第一次有能力去「選擇」該違反哪些衝動。理解，是自由的前提。', en: 'This is the book’s most important line of defense: to treat an evolutionary explanation as moral permission is a logical fallacy. That men are prone to stray, that people are prone to selfishness — these are “is.” They do not yield an “ought.” Wright argues the reverse: precisely because we know how nature designed us, we are for the first time able to choose which impulses to resist. Understanding is the precondition of freedom.' },
    tags: [ { zh: '是非應然', en: 'Is vs. ought' }, { zh: '休謨', en: 'Hume' }, { zh: '自由的前提', en: 'Precondition of freedom' } ],
    related: ['natsel', 'darwin'] },
  { id: 'darwin', name: { zh: '達爾文（案例）', en: 'Charles Darwin (the case study)' }, family: 'ethics', role: { zh: '全書的活體案例', en: 'The Book’s Living Case Study' }, icon: '📖', color: '#c8a24b',
    desc: { zh: '一個端正、體面、慈愛的維多利亞紳士。萊特用他的一生——婚姻、內疚、延宕、野心——當作檢驗所有理論的活體樣本：連他的德性，也能用演化解釋嗎？', en: 'A proper, respectable, tender Victorian gentleman. Wright uses his life — marriage, guilt, delay, ambition — as a living specimen to test every theory: can even his virtue be explained by evolution?' },
    analysis: { zh: '選達爾文當貫穿人物是神來之筆：他既是演化論的提出者，本人又是「道德動物」的典範。透過他的結婚利弊清單、對名聲的謹慎、對發表的延宕，抽象的理論全部落地成有血有肉的抉擇。而全書最後的溫柔轉折也落在他身上——這隻被基因設計的動物，最終能不能靠自我認識，活得比天性更好。', en: 'Choosing Darwin as the through-line is a stroke of genius: he is both the author of evolutionary theory and himself a model “moral animal.” Through his marriage list, his caution about reputation, his delay in publishing, abstract theory becomes flesh-and-blood choice. And the book’s final tender turn rests on him too — whether this gene-designed animal can, through self-knowledge, live better than nature made it.' },
    tags: [ { zh: '維多利亞紳士', en: 'Victorian gentleman' }, { zh: '貫穿線', en: 'The through-line' }, { zh: '道德動物典範', en: 'A model moral animal' } ],
    related: ['natsel', 'naturalfallacy'] }
];

const TIMELINE_DATA = [
  { year: { zh: '1809', en: '1809' }, event: { zh: '達爾文出生於英國', en: 'Darwin is born in England' }, novel: { zh: '本書的活體案例登場——一個日後將顛覆人類自我認知、自己卻極其端正的博物學家。', en: 'The book’s living case study enters — a naturalist who will overturn humanity’s self-image, yet is himself utterly respectable.' }, type: 'character' },
  { year: { zh: '1831–1836', en: '1831–1836' }, event: { zh: '小獵犬號環球航行', en: 'The voyage of the Beagle' }, novel: { zh: '五年的觀察為天擇思想埋下種子；達爾文見識了物種的多樣與人群的差異。', en: 'Five years of observation plant the seeds of natural selection; Darwin witnesses the diversity of species and of peoples.' }, type: 'character' },
  { year: { zh: '1838', en: '1838' }, event: { zh: '讀馬爾薩斯，天擇構想成形', en: 'Reading Malthus, the idea of natural selection takes shape' }, novel: { zh: '「生存競爭」的邏輯讓達爾文豁然開朗——這是全書那台總引擎的誕生時刻。', en: 'The logic of the “struggle for existence” gives Darwin his breakthrough — the birth of the book’s master engine.' }, type: 'history' },
  { year: { zh: '1838', en: '1838' }, event: { zh: '達爾文寫下「結婚 vs 不結婚」清單', en: 'Darwin writes his “Marry / Not Marry” list' }, novel: { zh: '一份真實史料：理性精算與對伴侶的渴望並存，第五章用它照見演化的手。', en: 'A real document: cold calculation and a longing for companionship side by side — Chapter 5 reads evolution’s hand in it.' }, type: 'character' },
  { year: { zh: '1839', en: '1839' }, event: { zh: '娶表姊 Emma Wedgwood', en: 'Marries his cousin Emma Wedgwood' }, novel: { zh: '一樁穩定、高投資的婚姻；達爾文選擇了體面而長久的伴侶關係。', en: 'A stable, high-investment marriage; Darwin chooses a respectable and lasting partnership.' }, type: 'character' },
  { year: { zh: '1859', en: '1859' }, event: { zh: '《物種起源》出版', en: 'On the Origin of Species is published' }, novel: { zh: '壓了近二十年才問世（第十一章「延宕」）；天擇正式改寫了生命的故事。', en: 'Published after nearly twenty years of delay (Chapter 11); natural selection formally rewrites the story of life.' }, type: 'history' },
  { year: { zh: '1871', en: '1871' }, event: { zh: '《人類原始》提出性擇', en: 'The Descent of Man introduces sexual selection' }, novel: { zh: '達爾文把演化的目光轉向人類與兩性——孔雀的尾巴、求偶的競爭，本書兩性章節的源頭。', en: 'Darwin turns evolution’s gaze to humans and the sexes — the peacock’s tail, the competition to court, the source of the book’s chapters on men and women.' }, type: 'history' },
  { year: { zh: '1964', en: '1964' }, event: { zh: 'Hamilton 提出親屬選擇', en: 'Hamilton proposes kin selection' }, novel: { zh: '「內含適應度」讓利他之謎有了基因層次的解答，第七章家庭之愛的理論骨架。', en: 'Inclusive fitness gives the puzzle of altruism a gene-level answer — the theoretical skeleton of Chapter 7’s family love.' }, type: 'history' },
  { year: { zh: '1971–1972', en: '1971–1972' }, event: { zh: 'Trivers 提出互惠利他與親代投資', en: 'Trivers proposes reciprocal altruism and parental investment' }, novel: { zh: '兩篇論文奠定了本書大半的理論基礎：友誼、道德情感、兩性差異，全從這裡長出來。', en: 'Two papers lay much of the book’s theoretical foundation: friendship, moral emotions, and sex differences all grow from here.' }, type: 'history' },
  { year: { zh: '1975', en: '1975' }, event: { zh: 'Wilson《社會生物學》引爆論戰', en: 'Wilson’s Sociobiology sparks fierce debate' }, novel: { zh: '把演化用於人類行為在此掀起爭議；本書正是要回應「這會不會淪為決定論與脫罪」的疑慮。', en: 'Applying evolution to human behavior ignites controversy; the book answers the fear that it will collapse into determinism and excuse-making.' }, type: 'history' },
  { year: { zh: '1994', en: '1994' }, event: { zh: '《道德動物》出版', en: 'The Moral Animal is published' }, novel: { zh: '萊特把所有理論套回達爾文一生，寫成這部演化心理學的科普經典——你正在讀的這本書。', en: 'Wright tests all these theories against Darwin’s life, producing this classic of popular evolutionary psychology — the very book you are reading.' }, type: 'novel' }
];

const THEMES = [
  { id: 'designed', icon: '🧬', title: { zh: '被設計，但非注定', en: 'Designed, but Not Doomed' }, subtitle: { zh: '天擇造了我們，卻沒替我們決定該怎麼活', en: 'Selection made us; it did not decide how we must live' }, color: '#b07d3c',
    intro: { zh: '全書的第一塊地基：人性不是白板，而是天擇的作品。', en: 'The book’s first foundation: human nature is no blank slate, but the work of natural selection.' },
    body: { zh: '<p>我們的許多情感與衝動——愛、嫉妒、地位焦慮、對甜食的渴望——都是祖先環境中提高繁殖成功率的適應。它們被設計來服務基因，而不是服務我們的幸福。這是本書一切論證的起點。</p><p>但「被設計」不等於「被注定」。萊特反覆強調：知道天性怎麼運作，正是我們能夠不服從它的前提。看穿設計圖，是奪回選擇權的第一步。</p><div class="theme-quote">「了解我們如何被設計，才可能鬆開演化加在身上的枷鎖。」</div>', en: '<p>Many of our feelings and impulses — love, jealousy, status anxiety, the craving for sweets — are adaptations that raised reproductive success in the ancestral world. They were designed to serve genes, not our happiness. This is the starting point of every argument in the book.</p><p>But designed is not doomed. Wright insists: knowing how our nature works is the very precondition for not obeying it. Seeing the blueprint is the first step to reclaiming choice.</p><div class="theme-quote">“Only by understanding how we are designed can we loosen the shackles evolution placed upon us.”</div>' },
    chapters: ['1', '16', '18'] },
  { id: 'asymmetry', icon: '⚖️', title: { zh: '兩性策略的不對稱', en: 'The Asymmetry of the Sexes' }, subtitle: { zh: '一切從「卵子昂貴、精子廉價」開始', en: 'It all begins with costly eggs and cheap sperm' }, color: '#c8a24b',
    intro: { zh: '男女心理的許多差異，可追溯到一道古老的投資不對稱。', en: 'Many differences in male and female psychology trace to one ancient asymmetry of investment.' },
    body: { zh: '<p>因為女性最低親代投資極高、男性可以極低，兩性演化出不同的最佳策略：女性謹慎、重視資源與承諾；男性有更強的多樣性衝動。但人類男性其實會參與養育，所以兩性都挑剔，只是方向不同。</p><p>由此衍生出雙重標準、嫉妒的不對稱（男性較怕肉體出軌、女性較怕情感出軌）、以及一夫一妻的分配政治。理解這道不對稱，不是要合理化它，而是要看清它、然後決定我們想怎麼辦。</p><div class="theme-quote">「男性一年可繁衍百次，女性至多一次——一切從這道不對稱開始。」</div>', en: '<p>Because a woman’s minimum parental investment is very high and a man’s can be very low, the sexes evolved different optimal strategies: women cautious, weighing resources and commitment; men with a stronger pull toward variety. Yet human males help rear young, so both sexes are choosy — in different directions.</p><p>From this flow the double standard, the asymmetry of jealousy (men fearing physical, women emotional infidelity), and the politics of monogamy. Understanding the asymmetry is not to justify it, but to see it clearly — and then decide what we want to do.</p><div class="theme-quote">“A man can father hundreds of children in a year; a woman, at most one — everything begins with that asymmetry.”</div>' },
    chapters: ['2', '3', '4'] },
  { id: 'selfdeception', icon: '🪞', title: { zh: '自我欺騙的心智', en: 'The Self-Deceiving Mind' }, subtitle: { zh: '最需要懷疑的謊言，是你對自己說的', en: 'The lies most in need of doubt are the ones you tell yourself' }, color: '#b06a5a',
    intro: { zh: '本書的靈魂：我們騙自己，好更有效地騙別人。', en: 'The soul of the book: we deceive ourselves the better to deceive others.' },
    body: { zh: '<p>如果你真心相信自己的說法，就沒有說謊的破綻。於是演化把「自利偏誤」裝進腦裡——我們高估自己的貢獻、把私心包裝成原則、記得對自己有利的版本。良心一邊運作，公關部門也一邊運作。</p><p>這是「看穿人性」最難的一課，因為它把矛頭指向自己。承認心智是個護航的發言人，反而讓我們有機會做一件反常的事：對自己誠實。</p><div class="theme-quote">「最高明的騙術，是連自己都騙了。」</div>', en: '<p>If you genuinely believe your own story, there is no tell to betray the lie. So evolution installed self-serving biases: we overrate our contributions, dress private interest as principle, and remember the flattering version. The conscience runs, and so does the PR department.</p><p>This is the hardest lesson in seeing through human nature, because it turns the blade on oneself. Admitting the mind is a spin doctor gives us a chance at something unnatural: honesty with ourselves.</p><div class="theme-quote">“The cleverest deception is the one that fools you first.”</div>' },
    chapters: ['9', '10', '13'] },
  { id: 'sentiments', icon: '🤝', title: { zh: '道德情感是演化的裝置', en: 'Moral Sentiments as Adaptations' }, subtitle: { zh: '良心，是演化用來執行合約的軟體', en: 'Conscience is software evolved to enforce contracts' }, color: '#7f9a6b',
    intro: { zh: '感激、罪惡感、義憤——都是互惠合作的執行工具。', en: 'Gratitude, guilt, moral outrage — all are tools for enforcing cooperation.' },
    body: { zh: '<p>互惠利他要能運作，就需要一整套情緒來當「合約條款」：感激讓你記得還人情、信任讓你敢先付出、罪惡感讓你別背叛過頭、義憤讓你懲罰騙子、公平感替整個系統定錨。這些不是文明後天的教養，而是天生的配備。</p><p>驚人的是：承認道德情感有自私的演化根源，並不會讓它們變得虛假。你真的會感激、會內疚——這份真實，正是它們能運作的原因。</p><div class="theme-quote">「我們的良心，是演化裝上去執行互惠的軟體——但它依然真誠。」</div>', en: '<p>For reciprocal altruism to work, it needs a suite of emotions as “contract terms”: gratitude to remember favors, trust to dare to give first, guilt to keep from cheating too far, outrage to punish cheaters, fairness to anchor the whole system. These are not civilization’s later polish but native equipment.</p><p>The astonishing part: admitting moral sentiments have selfish evolutionary roots does not make them fake. You really do feel gratitude and guilt — and that reality is precisely why they work.</p><div class="theme-quote">“Our conscience is software evolution installed to enforce reciprocity — and it is sincere all the same.”</div>' },
    chapters: ['7', '8', '9', '10'] },
  { id: 'status', icon: '🏔️', title: { zh: '地位這台跑步機', en: 'The Treadmill of Status' }, subtitle: { zh: '相對的比較，永遠填不滿', en: 'A relative comparison can never be filled' }, color: '#5f86a0',
    intro: { zh: '野心與面子有古老的根，因為地位曾直接換來繁殖機會。', en: 'Ambition and face have ancient roots, because status once bought reproductive opportunity.' },
    body: { zh: '<p>在祖先環境裡，地位（尤其對男性）攸關交配與資源，於是演化裝上了強烈的地位驅力。麻煩在於它是「相對」的：別人升，你就相對降，因此永遠不夠。這是現代人許多焦慮與比較之苦的來源。</p><p>連溫和的達爾文，骨子裡也極在意科學地位，甚至左右了他的發表時機。看穿地位遊戲的演化根源，不是要人躺平，而是讓人不被那台停不下來的跑步機奴役。</p><div class="theme-quote">「地位是相對的，所以它永遠不夠——除非你看穿這場遊戲。」</div>', en: '<p>In the ancestral world, status (especially for men) governed mating and resources, so evolution installed a fierce drive for it. The trouble is that it is relative: when others rise, you relatively fall, so it is never enough — the source of much modern anxiety and the pain of comparison.</p><p>Even gentle Darwin cared intensely about scientific standing, enough to shape when he published. Seeing the evolutionary root of the status game is not a call to give up, but a way to avoid being enslaved by a treadmill that never stops.</p><div class="theme-quote">“Status is relative, so it is never enough — unless you see through the game.”</div>' },
    chapters: ['11', '12', '14'] },
  { id: 'isought', icon: '🧭', title: { zh: '從「是」到「應該」', en: 'From Is to Ought' }, subtitle: { zh: '自然如此，不等於應該如此', en: 'What is natural is not what ought to be' }, color: '#b07d3c',
    intro: { zh: '全書的倫理樞紐，也是它最重要的一道防線。', en: 'The ethical hinge of the book, and its most important line of defense.' },
    body: { zh: '<p>演化能解釋我們的衝動從哪來，卻從不告訴我們該不該服從。把「天性如此」當成「就該如此」，是邏輯上的謬誤，也是把演化拿來脫罪的危險。男性有出軌傾向是「是」，推不出「應該」。</p><p>萊特把這道防線翻轉成希望：正因為我們知道天性怎麼設計自己，我們才第一次有能力去選擇違反哪些衝動。理解不是原諒，而是自由的前提；這隻道德動物，能靠自我認識活得比天性更好。</p><div class="theme-quote">「解釋一個行為的來源，不是原諒它。」</div>', en: '<p>Evolution explains where our impulses come from, but never whether we should obey them. To treat “it is natural” as “it ought to be” is a logical fallacy — and a dangerous way to use evolution as an excuse. That men are prone to stray is an “is”; it yields no “ought.”</p><p>Wright turns this line of defense into hope: precisely because we know how nature designed us, we can for the first time choose which impulses to resist. Understanding is not forgiveness but the precondition of freedom; this moral animal can, through self-knowledge, live better than nature made it.</p><div class="theme-quote">“To explain the origin of a behavior is not to excuse it.”</div>' },
    chapters: ['15', '16', '17', '18'] }
];

const QUOTES = [
  { text: { zh: '最高明的騙術，是連自己都騙了。', en: 'The cleverest deception is the one that fools you first.' }, source: { zh: '第十三章 · 自我欺騙（主旨改寫）', en: 'Chapter 13 · Self-Deception (a distillation)' },
    analysis: { zh: '全書最違反直覺的核心。若你真心相信自己的說法，欺騙就沒有破綻——於是演化讓我們先騙過自己。這句話把矛頭指向讀者：你最堅定的自我辯護，可能正是被設計來騙你的。', en: 'The book’s most counterintuitive core. If you sincerely believe your own story, the deception has no tell — so evolution has us fool ourselves first. The line turns the blade on the reader: your firmest self-justification may be the very thing designed to deceive you.' } },
  { text: { zh: '了解我們如何被設計，才可能鬆開演化加在身上的枷鎖。', en: 'Only by understanding how we are designed can we loosen the shackles evolution placed upon us.' }, source: { zh: '全書主旨（站長書評亦引）', en: 'The book’s thesis (also cited in the site owner’s review)' },
    analysis: { zh: '這是《道德動物》樂觀的一面，也是它與犬儒主義的分界線。看穿設計圖不是為了認命，而是為了第一次擁有選擇權——理解，是自由的前提。', en: 'This is the optimistic face of the book, and its dividing line from cynicism. Seeing the blueprint is not resignation but the first chance at choice — understanding is the precondition of freedom.' } },
  { text: { zh: '自然如此，推不出應該如此。', en: 'What is natural does not imply what ought to be.' }, source: { zh: '第十六章 · 演化倫理學（自然主義謬誤）', en: 'Chapter 16 · Evolutionary Ethics (the naturalistic fallacy)' },
    analysis: { zh: '本書最重要的一道邏輯防線。演化解釋衝動的來源，卻從不替我們背書該服從它。把演化拿來合理化行為，是謬誤，也是脫罪。', en: 'The book’s most important logical safeguard. Evolution explains the source of an impulse but never endorses obeying it. To use evolution to justify behavior is both a fallacy and an alibi.' } },
  { text: { zh: '男性一年可繁衍百次，女性至多一次。', en: 'A man can father hundreds in a year; a woman, at most one.' }, source: { zh: '第二章 · 親代投資（理論提煉）', en: 'Chapter 2 · Parental Investment (a distillation)' },
    analysis: { zh: '兩性心理差異的地基。這道最低投資的不對稱，推導出擇偶的挑剔與競爭、嫉妒的方向、乃至婚姻制度的政治。一句話裡藏著半本書。', en: 'The foundation of sex differences in psychology. This asymmetry of minimum investment yields choosiness and competition in mating, the direction of jealousy, even the politics of marriage. Half the book hides in one line.' } },
  { text: { zh: '一夫一妻傷得最重的，往往是底層的男人。', en: 'The ones monogamy hurts most are often the men at the bottom.' }, source: { zh: '第四章 · 婚姻市場（分配分析）', en: 'Chapter 4 · The Marriage Market (the distribution analysis)' },
    analysis: { zh: '打破「一夫一妻＝壓迫女性」的直覺。書評點得精準：多偶制讓高魅力男性通吃、底層男性娶不到妻；強制單偶其實把女性分配開來——這是一場複雜的分配政治，不是簡單的性別對立。', en: 'It breaks the intuition that monogamy simply oppresses women. The review nails it: polygamy lets high-status men take all and leaves low-status men without wives; imposed monogamy spreads women across men — a complex politics of distribution, not a simple battle of the sexes.' } },
  { text: { zh: '解釋一個行為的來源，不是原諒它。', en: 'To explain the origin of a behavior is not to excuse it.' }, source: { zh: '第十七章 · 歸咎於受害者', en: 'Chapter 17 · Blaming the Victim' },
    analysis: { zh: '對「演化即脫罪」最有力的反駁。理解成因，恰恰給了我們抵抗的槓桿；懂了為什麼，反而更該負責。這是全書倫理立場的濃縮。', en: 'The strongest rebuttal to “evolution as alibi.” Understanding a cause is exactly what gives us leverage to resist; knowing why makes us more, not less, responsible. It distills the book’s ethical stance.' } }
];

const REFLECTION_QUESTIONS = [
  { zh: '若你所有高貴的情感「其實」都是自私基因的策略，你會因此變得犬儒，還是更珍惜它們？', en: 'If all your noble feelings are “really” selfish-gene strategies, does that make you cynical — or make you value them more?' },
  { zh: '你最近一次強烈的道德義憤，背後有沒有一點「維護自身利益或形象」的成分？', en: 'Your last surge of moral outrage — was there a trace of protecting your own interest or image behind it?' },
  { zh: '「男女天生不同」這句話，哪些部分你認為有演化根據，哪些是文化包裝？', en: 'The claim “men and women are naturally different” — which parts do you think are evolutionary, and which are cultural packaging?' },
  { zh: '達爾文用利弊清單決定婚姻。你會用理性計算重大的人生／感情抉擇嗎？這樣算冷血嗎？', en: 'Darwin decided on marriage with a pros-and-cons list. Would you weigh a major life or love decision that way — and is that cold-blooded?' },
  { zh: '如果自我欺騙是設計來騙過你自己的，你有什麼方法能稍微「抓到」自己在自欺？', en: 'If self-deception is designed to fool you first, what method could help you catch yourself in the act?' },
  { zh: '你對「陌生人／外群」的直覺戒心，在今天是保護你，還是限制了你？', en: 'Your gut wariness toward strangers or out-groups — in today’s world, does it protect you or limit you?' },
  { zh: '地位焦慮讓你痛苦時，「知道它是相對跑步機」這個認識，實際上幫得上忙嗎？', en: 'When status anxiety hurts, does knowing it is a relative treadmill actually help — in practice?' },
  { zh: '在什麼情況下，你認為「這是人性／天性」是誠實的解釋，什麼情況下它變成藉口？', en: 'When is “it’s human nature” an honest explanation, and when does it become an excuse?' },
  { zh: '若行為都有基因與環境的原因，我們還能合理地讚美好人、責怪壞人嗎？為什麼？', en: 'If behavior has genetic and environmental causes, can we still justly praise the good and blame the bad? Why?' },
  { zh: '讀完本書，你打算刻意去「違反」哪一項天性？你要用什麼具體方法去做？', en: 'Having read this book, which one instinct do you intend to deliberately resist — and by what concrete method?' }
];


// ==== CHAPTER_CONTENT（論點重述，中英雙語，由子代理擴寫）====
const CHAPTER_CONTENT = {};

Object.assign(CHAPTER_CONTENT, {
  1: {
    num: { zh: `第一章`, en: `Chapter One` },
    title: { zh: `達爾文的成年`, en: `Darwin Comes of Age` },
    epigraph: {
      zh: `一個盲目的過程，竟然孵出了會臉紅、會愧疚、會為陌生人流淚的動物——這本身就是達爾文留給我們最深的謎。`,
      en: `A blind process somehow hatched a creature that blushes, feels guilt, and weeps for strangers—that, in itself, is the deepest riddle Darwin left us.`
    },
    body: {
      zh: `<p><strong>核心論點：</strong>本書開篇就把一個尖銳的悖論攤在桌上——如果生命是靠「適者生存」這種毫不留情的競爭鑄成，那麼「道德」這種東西究竟從哪裡來？為什麼一個由自私機制打磨出來的物種，會發展出愛、良知、義憤與自我犧牲？作者 Robert Wright 說，這正是全書要回答的問題：一隻由天擇（natural selection）造出來的動物，怎麼會同時是一隻道德動物。</p>

<p><strong>論證——新達爾文主義的典範：</strong>要解這個謎，得先接受一個現代的視角。人性不是一塊任由文化書寫的白板；它是在漫長的採集狩獵歲月裡，被天擇一點一點設計出來的。基因是被傳遞的單位，天擇是篩選的手，而「適應」則是被留下來的解決方案。在這個框架下，人的情感不是文明後來加上去的裝飾，而是演化早就裝好的裝置——它們有功能、有來歷、有被保留下來的理由。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>論證——道德情感是演化的機關：</strong>這是全書最反直覺、也最重要的一步。我們習慣把愛、罪惡感、義憤想成是「高於本能」的高貴之物，是我們用來對抗動物性的東西。但 Wright 主張，恰恰相反：這些情感本身就是動物性的一部分，是天擇為了讓我們在群體中生存繁衍而安裝的軟體。愛讓我們願意投資後代與伴侶；罪惡感讓我們維持合作關係；義憤讓我們懲罰背叛者。它們不是文明的花邊，而是演化的引擎零件。</p>

<p><strong>實例——達爾文本人作為活體案例：</strong>全書有一個貫穿始終的巧思：用達爾文本人的一生當標本。達爾文是個端正、體面、拘謹的維多利亞紳士——溫和、謹慎、對名譽極為在意。Wright 不斷回到他的傳記，問一個尷尬的問題：連這樣一位堪稱道德典範的人，他的德性、他的猶豫、他的婚姻選擇、他的良知不安，能不能也用演化的邏輯拆解？把最令人敬重的人放上手術台，正是為了證明這套理論沒有例外的空間。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>應用啟示：</strong>了解「我們是如何被設計出來的」，是理解自己的第一步。這聽起來像除魅，但 Wright 從一開始就埋下希望的伏筆——看穿設計，不是為了讓我們對人性絕望，而是為了給我們一個超越它的支點。你必須先知道天性把你調成什麼樣子，才有可能選擇不完全照它的意思活。</p>

<p class="thought-question">🤔 思考：如果你最珍視的一種美德，其實是演化為了讓你的基因存續而安裝的裝置，這會讓那份美德變得比較不真實嗎，還是只是讓你更懂它為何存在？</p>`,
      en: `<p><strong>Core claim:</strong> The book opens by laying a sharp paradox on the table—if life was forged by something as merciless as "survival of the fittest," then where on earth does <em>morality</em> come from? Why would a species polished by selfish machinery ever develop love, conscience, indignation, and self-sacrifice? This, Robert Wright says, is the question the whole book sets out to answer: how a creature built by natural selection could also be a moral animal.</p>

<p><strong>Argument—the neo-Darwinian paradigm:</strong> To crack the riddle, we first have to adopt a modern lens. Human nature is not a blank slate onto which culture writes freely; it was designed, bit by bit, by natural selection over the long ages of foraging and hunting. Genes are the units that get passed on, selection is the sorting hand, and "adaptations" are the solutions that got kept. In this frame, our emotions are not decorations that civilization added later—they are devices evolution installed long ago, with functions, histories, and reasons for having survived.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>Argument—moral feelings as evolutionary machinery:</strong> This is the most counterintuitive and most important move in the book. We tend to picture love, guilt, and indignation as noble things standing "above instinct," the very tools we use to resist our animal side. Wright argues the reverse: these feelings are themselves part of the animal side, software installed by natural selection to help us survive and reproduce within groups. Love makes us willing to invest in offspring and mates; guilt keeps our cooperative bonds intact; indignation makes us punish betrayers. They are not the lace trim of civilization but working parts of the evolutionary engine.</p>

<p><strong>Illustration—Darwin himself as the living case study:</strong> A single clever device runs through the whole book: Darwin's own life used as the specimen. Darwin was an upright, respectable, buttoned-up Victorian gentleman—mild, careful, exquisitely concerned with his reputation. Wright keeps returning to his biography to ask an awkward question: can even this paragon's virtues, his hesitations, his marriage choice, his uneasy conscience be dissected by evolutionary logic? Putting the most admired of men on the operating table is precisely how you prove the theory allows no exceptions.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>Takeaway:</strong> Understanding "how we were designed" is the first step to understanding ourselves. It sounds like disenchantment, but Wright plants a seed of hope from the very start—seeing through the design is not meant to leave us despairing over human nature, but to give us a foothold from which to transcend it. You must first know how your nature has been tuned before you can choose not to live entirely by its dictates.</p>

<p class="thought-question">🤔 Reflect: If a virtue you cherish most turns out to be a device evolution installed to keep your genes going, does that make the virtue less real—or does it just help you understand why it exists?</p>`
    }
  },
  2: {
    num: { zh: `第二章`, en: `Chapter Two` },
    title: { zh: `雄與雌`, en: `Male and Female` },
    epigraph: {
      zh: `孔雀那條累贅的尾巴不是為了飛，而是為了被看見——生物界最貴的裝飾，往往由挑剔的一方買單。`,
      en: `The peacock's cumbersome tail is not for flying but for being seen—the most expensive ornaments in nature are usually paid for by the choosy sex.`
    },
    body: {
      zh: `<p><strong>核心論點：</strong>要理解人類的兩性，得先跳到人類之外，看整個生物界的一條底層邏輯——親代投資理論（parental investment）。它的起點簡單得近乎冷酷：精子廉價、卵子昂貴。生產一個精子幾乎不花成本，一個雄性可以製造天文數字的精子；而卵子稀少、耗能，之後往往還接著漫長的懷孕與哺育。這條成本上的不對稱，就是兩性行為分岔的源頭。</p>

<p><strong>論證——投資多者挑剔，投資少者競爭：</strong>Trivers 與 Bateman 的洞見是：在繁殖上投資較多的那一方，會變得挑剔；投資較少的那一方，會轉為競爭。道理很直白——對雌性來說，每一次繁殖都是一筆巨大而不可逆的下注（懷胎、哺乳、看護），選錯對象的代價極高，所以天擇讓她慎選。對雄性來說，一次交配的最低成本近乎於零，多找幾個對象幾乎穩賺不賠，於是天擇讓他競爭、讓他求量。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>論證——性擇由此而生：</strong>這正是達爾文在 1871 年《人類的由來》裡提出的性擇（sexual selection）。天擇篩的是「能不能活下去」，性擇篩的是「能不能配得到」。當投資多的一方在挑選，被挑選的一方就得競相演化出討喜的特徵——不管那特徵對生存本身是幫倒忙。挑剔的品味，會反過來雕塑出被挑者的模樣。</p>

<p><strong>實例——孔雀開屏：</strong>最經典的例子就是孔雀的尾巴。那條華麗的尾屏對逃命毫無幫助，甚至是累贅，容易被掠食者盯上。它之所以存在，唯一的理由是雌孔雀偏好它。一代代雌性選擇尾巴更炫的雄性，於是尾巴越演化越誇張——它是一份昂貴到近乎自殘的廣告，內容是：「我健康到連背著這種負擔都活得下來。」昂貴，正是它可信的原因。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>應用啟示：</strong>要注意，這一章談的是跨物種的生物邏輯，完全不帶道德判斷。「挑剔」與「競爭」在這裡不是褒貶，只是不同投資結構下的最優策略。但這條冷靜的生物地基，正是理解人類兩性差異的起點——不先看清這副骨架，後面關於男與女的一切討論都會懸空。</p>

<p class="thought-question">🤔 思考：如果一種性別的挑剔，能雕塑出另一種性別的模樣，那麼今天讓我們覺得「有魅力」的許多特徵，會不會其實是無數代祖先的偏好留下的化石？</p>`,
      en: `<p><strong>Core claim:</strong> To understand the human sexes, we first have to step outside humanity and look at a bedrock logic running through all of biology—parental investment theory. Its starting point is almost coldly simple: sperm is cheap, eggs are expensive. Making a sperm costs next to nothing, and a male can produce astronomical numbers of them; an egg is scarce, energy-hungry, and often followed by long pregnancy and nursing. This asymmetry in cost is the source from which the two sexes' behaviors diverge.</p>

<p><strong>Argument—the heavy investor is choosy, the light investor competes:</strong> The insight of Trivers and Bateman is this: the sex that invests more in reproduction becomes choosy, while the sex that invests less turns competitive. The logic is blunt. For a female, every reproduction is an enormous, irreversible bet (gestation, lactation, care), and choosing the wrong partner is hugely costly, so selection makes her selective. For a male, the minimum cost of a single mating is nearly zero, and a few extra partners is almost pure upside, so selection makes him compete and pursue quantity.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>Argument—this is where sexual selection comes from:</strong> This is exactly the sexual selection Darwin proposed in <em>The Descent of Man</em> in 1871. Natural selection screens for "can you survive"; sexual selection screens for "can you get a mate." When the heavy-investing sex does the choosing, the chosen sex must competitively evolve traits that please—regardless of whether those traits hurt survival itself. A choosy taste, in turn, sculpts the very form of the chosen.</p>

<p><strong>Illustration—the peacock's tail:</strong> The classic example is the peacock's tail. That gorgeous fan does nothing for escape and is even a liability, easy for predators to spot. It exists for one reason only: peahens prefer it. Generation after generation of females chose males with flashier tails, so the tail evolved ever more extravagant—an advertisement so expensive it borders on self-harm, whose message is: "I'm healthy enough to survive even while lugging this handicap." Its very costliness is what makes it credible.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>Takeaway:</strong> Note that this chapter is about a cross-species biological logic, entirely free of moral judgment. "Choosy" and "competitive" here are not praise or blame, just the optimal strategies under different investment structures. But this cool biological foundation is exactly the starting point for understanding differences between the human sexes—without first seeing this skeleton clearly, everything that follows about men and women would hang in midair.</p>

<p class="thought-question">🤔 Reflect: If one sex's choosiness can sculpt the very form of the other, then might many of the traits we find "attractive" today actually be fossils left behind by the preferences of countless ancestral generations?</p>`
    }
  },
  3: {
    num: { zh: `第三章`, en: `Chapter Three` },
    title: { zh: `男與女`, en: `Men and Women` },
    epigraph: {
      zh: `人類男性難得地肯留下來養小孩——正因如此，兩性都在挑，只是各自盯著不同的東西。`,
      en: `Human males are unusually willing to stay and raise the young—and because of that, both sexes are choosy, each with its eye on something different.`
    },
    body: {
      zh: `<p><strong>核心論點：</strong>把上一章的生物邏輯套到人類身上，會遇到一個關鍵轉折：人類的雄性親代投資（MPI）相對其他物種高得多。人類嬰兒無助的時間極長，一個肯留下來提供資源與保護的父親，能大幅提高後代存活率。這意味著人類男性不是純粹的「求量者」——他也有值得投資的資本。結果是：兩性都會挑剔，但挑剔的方向不對稱。</p>

<p><strong>論證——挑選標準的分化：</strong>因為投資結構不同，兩性演化出的偏好也不同。男性傾向看重年輕與生育力的線索，因為在祖先環境裡，這些線索與繁殖潛力相關。女性則傾向看重地位、資源與承諾，因為她投資巨大，需要的是一個願意且有能力長期供養的夥伴。同時，由於一次額外交配對男性的邊際成本極低，男性在傾向上比女性更容易被「多樣性」吸引。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>論證——嫉妒的不對稱：</strong>這套邏輯甚至能預測嫉妒的形狀。對男性而言，最難忍受的往往是伴侶的肉體出軌——因為在演化算盤上，那可能意味著替別的男人養育基因，是投資的徹底錯付。對女性而言，最難忍受的往往是伴侶的情感出軌——因為那威脅的不是基因歸屬，而是資源與承諾的流失。兩種嫉妒盯的是兩種不同的祖先風險。</p>

<p><strong>實例——雙重標準與策略：</strong>由此也能重新理解所謂的「雙重標準」，以及「聖女／蕩婦」這種對女性的評價分裂。Wright 的觀點是：這些現象很大程度上是被演化裝好的策略傾向的產物，而不只是文化任意的發明。男性對伴侶貞潔的高度在意，與前面「怕替別人養基因」的邏輯直接相連。它不是說這些標準公平或應該，而是說它們有一個被天擇塑造的來歷。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>應用啟示：</strong>最關鍵的一句提醒——這些是傾向，不是命令。演化塞給我們的是一組默認設定、一種拉力，不是不可違抗的指令。理解這些傾向的存在與來歷，恰恰是不被它們綁架的前提。你認得出那股拉力來自哪裡，才有辦法決定要不要順著它走。</p>

<p class="thought-question">🤔 思考：當你發現自己某個關於伴侶的直覺反應，可能只是祖先環境留下的預設值，你會選擇相信那個直覺，還是把它當成一個可以重新檢視的提議？</p>`,
      en: `<p><strong>Core claim:</strong> Applying the previous chapter's biology to humans hits a crucial twist: human male parental investment (MPI) is far higher than in most other species. Human infants are helpless for an extraordinarily long time, and a father willing to stay and provide resources and protection sharply raises his offspring's odds of survival. This means human males are not pure "quantity-seekers"—they too have capital worth investing. The result: both sexes are choosy, but their choosiness points in asymmetric directions.</p>

<p><strong>Argument—the split in selection criteria:</strong> Because the investment structures differ, the two sexes evolved different preferences. Men tend to value cues of youth and fertility, because in the ancestral environment those cues correlated with reproductive potential. Women tend to value status, resources, and commitment, because their investment is enormous and what they need is a partner both willing and able to provide over the long term. Meanwhile, since one extra mating carries a very low marginal cost for a man, men are, as a tendency, more readily drawn to "variety" than women.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>Argument—the asymmetry of jealousy:</strong> This logic even predicts the shape of jealousy. For a man, the hardest thing to bear is often a partner's physical infidelity—because on the evolutionary ledger, that could mean raising another man's genes, a total misfire of investment. For a woman, the hardest thing to bear is often a partner's emotional infidelity—because what that threatens is not genetic paternity but the loss of resources and commitment. The two jealousies watch two different ancestral risks.</p>

<p><strong>Illustration—double standards as strategy:</strong> This also lets us rethink the so-called "double standard" and the "madonna/whore" split in how women are judged. Wright's view is that these phenomena are, to a large degree, products of strategic tendencies installed by evolution, not merely arbitrary cultural inventions. Men's intense concern with a partner's chastity connects directly to the earlier logic of "fearing to raise another's genes." This is not to say such standards are fair or right, but that they have a history shaped by natural selection.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>Takeaway:</strong> The most crucial reminder—these are tendencies, not commands. What evolution hands us is a set of default settings, a pull, not an unbreakable order. Understanding that these tendencies exist and where they come from is precisely the precondition for not being hijacked by them. Only when you can recognize where the pull is coming from can you decide whether to follow it.</p>

<p class="thought-question">🤔 Reflect: When you notice that some gut reaction about a partner may just be a default value left by the ancestral environment, will you choose to trust that instinct—or treat it as a proposal you're free to re-examine?</p>`
    }
  },
  4: {
    num: { zh: `第四章`, en: `Chapter Four` },
    title: { zh: `婚姻市場`, en: `The Marriage Market` },
    epigraph: {
      zh: `一夫一妻制的真相，不是誰對誰好，而是一場關於稀缺伴侶如何分配的政治。`,
      en: `The truth about monogamy is not who is being kind to whom, but a politics of how scarce partners get distributed.`
    },
    body: {
      zh: `<p><strong>核心論點：</strong>一夫一妻制常被想成一種對女性的保護、或一種道德進步。Wright 提出一個更冷靜的分析框架：婚姻制度本質上是一場分配政治。與其問一夫一妻「好不好」，不如問它「把稀缺的交配機會如何分配給誰」——這才看得清它真正在調節什麼。</p>

<p><strong>論證——多偶制下的贏家與輸家：</strong>先想像一個容許多偶的社會。表面上這對男性有利，但仔細算分配，結論很反直覺：獲利最大的是少數高地位、高魅力的男性，他們可以壟斷多名伴侶；受害最深的則是底層男性，他們可能完全被排擠、根本娶不到人。至於女性，一部分反而能透過共享一位高地位男性而得到不錯的處境。多偶制真正撕裂的，是男性內部的貧富。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>論證——強制一夫一妻是男人之間的協議：</strong>從這個角度看，強制一夫一妻的效果，其實是把女性「均分」出去、壓低頂層男性的壟斷，讓更多底層男性也能配對。它與其說是對女性的恩惠，不如說是一種男性之間的和平協定——多數男性犧牲「或許能多娶」的渺茫機會，換取「至少能娶到一個」的保障，同時降低了因大量單身男性而起的社會動盪。制度在這裡調節的，是被演化裝好的交配衝動。</p>

<p><strong>實例——現代的連續單偶：</strong>Wright 指出，現代社會流行的離婚再婚，其實構成一種「連續單偶」——一個人一生依序擁有多位配偶。這在效果上像是一種變相的、被時間拉開的多偶制（準多偶）。而且它多半仍對男性有利：一個累積了資源與地位的中年男性，往往比同齡女性更容易再婚、且找到更年輕的伴侶。舊的分配不平等，換了個現代的形式繼續存在。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>應用啟示：</strong>這一章的核心啟示是：婚姻制度不是道德的自然結果，而是社會用來調節演化衝動的裝置。制度可以壓抑、可以重新分配，但它處理的原料——那些交配的驅力——始終是天擇留下的。看懂制度在做什麼，你才不會把某種安排誤當成天經地義或純粹的善意。</p>

<p class="thought-question">🤔 思考：如果你相信的婚姻理想，其實同時是一套資源分配的政治，這會改變你對「什麼制度才公平」的判斷嗎？</p>`,
      en: `<p><strong>Core claim:</strong> Monogamy is often imagined as a protection for women or a moral advance. Wright offers a cooler analytic frame: the institution of marriage is essentially a politics of distribution. Rather than asking whether monogamy is "good," ask how it distributes scarce mating opportunities and to whom—only then can you see what it is really regulating.</p>

<p><strong>Argument—winners and losers under polygyny:</strong> Imagine a society that permits polygyny. On the surface this favors men, but work out the distribution and the conclusion is counterintuitive: the biggest winners are a handful of high-status, high-appeal men who can monopolize multiple partners; the hardest hit are low-status men, who may be shut out entirely and unable to marry at all. As for women, some actually end up reasonably well off by sharing one high-status man. What polygyny really tears open is inequality among men.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>Argument—enforced monogamy as a pact among men:</strong> Seen this way, the effect of enforced monogamy is to spread women out more evenly, curb the monopoly of top-tier men, and let more low-status men find a mate. Rather than a favor to women, it works more like a peace treaty among men—most men give up the slim chance of "maybe marrying several" in exchange for the guarantee of "at least marrying one," while reducing the social unrest that a mass of single men would generate. What the institution regulates here is the mating drive that evolution installed.</p>

<p><strong>Illustration—modern serial monogamy:</strong> Wright points out that the modern prevalence of divorce and remarriage amounts to a kind of "serial monogamy"—one person having several spouses in succession over a lifetime. In effect this resembles a disguised, time-spread form of polygyny (quasi-polygyny). And it still mostly favors men: a middle-aged man who has accumulated resources and status tends to remarry more easily than a woman of the same age, and to a younger partner. The old distributional inequality persists, in a modern guise.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>Takeaway:</strong> The core lesson of this chapter: marriage institutions are not the natural outcome of morality but devices society uses to regulate evolutionary drives. Institutions can suppress and redistribute, but the raw material they handle—those mating drives—is always what natural selection left behind. Only by seeing what an institution actually does can you avoid mistaking some arrangement for the obviously right thing or pure goodwill.</p>

<p class="thought-question">🤔 Reflect: If the marital ideal you believe in is also, at the same time, a politics of resource distribution, would that change how you judge what counts as a "fair" institution?</p>`
    }
  },
  5: {
    num: { zh: `第五章`, en: `Chapter Five` },
    title: { zh: `達爾文的婚姻`, en: `Darwin's Marriage` },
    epigraph: {
      zh: `1838 年，達爾文拿出一張紙，冷靜地把「結婚」的利弊列成兩欄——連最深的溫情，也躲不過一個博物學家的精算。`,
      en: `In 1838, Darwin took out a sheet of paper and coolly listed the pros and cons of marriage in two columns—even the deepest tenderness could not escape a naturalist's calculation.`
    },
    body: {
      zh: `<p><strong>核心論點：</strong>前面幾章鋪好了理論，這一章把它折回達爾文本人身上。1838 年，還是單身的達爾文做了一件後來極為著名的事：他拿出紙筆，把「結婚」與「不結婚」的利弊，像記帳一樣分兩欄列了出來。Wright 用這份真實史料當透鏡，問：一個追求穩定、願意高投資的體面男子，他的婚姻抉擇，能不能照見演化的手？</p>

<p><strong>論證——溫情與精算並存：</strong>這份清單最動人的地方，在於它同時裝著兩種東西。一邊是冷靜的成本效益計算——結婚會不會佔掉做研究的時間、會不會帶來開銷與牽絆；另一邊卻又流露出對陪伴、對家庭溫暖、對「總比一條狗好」那種孤獨恐懼的真實渴望。理性的算盤與情感的重量，在同一張紙上並存。這正呼應了全書的主旨：情感本身也是演化算計的一部分，兩者從來不是對立的。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>論證——一個高投資策略的縮影：</strong>依前面的親代投資邏輯，人類男性是相對高投資的一方，因此也會慎選、也會傾向穩定的長期結合。達爾文的清單，可以讀成這種策略在一個具體人身上的展現：他不是在盤算如何求量，而是在盤算如何建立一個穩固、可長久投資的家庭。這與他謹慎、端正、重秩序的性格完全一致——他要的是安定，不是冒險。</p>

<p><strong>實例——1839 年娶表姊 Emma：</strong>算完帳的達爾文得出「結婚」的結論，並在 1839 年娶了他的表姊 Emma Wedgwood。這樁婚姻穩定而長久，成了他一生工作與情感的港灣。這裡要忠實於史料的精神：達爾文確實留下了這份糾結利弊的清單、也確實走入了一段高投資的婚姻——重點不在清單的每一條細目，而在它所展現的那種「一邊渴望一邊精算」的完整人性。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>應用啟示：</strong>這一章的力量在於它的親密。連達爾文最私密、最個人的人生抉擇——要不要結婚、和誰結婚——都能被同一套演化邏輯照亮。這不是要貶低那份感情，而是要說明：在最柔軟的人生時刻，那隻塑造我們的手也從未缺席。</p>

<p class="thought-question">🤔 思考：如果你也把人生的重大抉擇列成利弊兩欄，你覺得那些「感性」的那一欄，究竟是理性的對立面，還是另一種被演化寫進你身體裡的計算？</p>`,
      en: `<p><strong>Core claim:</strong> Having laid the theoretical groundwork, this chapter folds it back onto Darwin himself. In 1838, the still-single Darwin did something that later became famous: he took paper and pen and listed the pros and cons of "marrying" versus "not marrying" in two columns, like keeping accounts. Wright uses this real historical document as a lens to ask: can the marriage choice of a respectable man who sought stability and was willing to invest heavily reveal the hand of evolution?</p>

<p><strong>Argument—tenderness and calculation side by side:</strong> The most moving thing about the list is that it holds two things at once. On one side, cool cost-benefit reckoning—would marriage eat into research time, bring expense and encumbrance; on the other, a genuine longing for companionship, domestic warmth, and an escape from a loneliness "better than a dog, anyhow." The rational ledger and the weight of feeling coexist on a single sheet. This echoes the book's thesis exactly: emotion itself is part of the evolutionary calculation, and the two were never opposites.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>Argument—a portrait of a high-investment strategy:</strong> By the earlier parental-investment logic, human males are the relatively high-investing sex, and so they too choose carefully and lean toward stable long-term unions. Darwin's list can be read as this strategy playing out in one concrete person: he is not scheming for quantity but for how to build a solid, durably investable family. This is wholly consistent with his cautious, upright, order-loving temperament—he wanted security, not adventure.</p>

<p><strong>Illustration—marrying his cousin Emma in 1839:</strong> Having finished his accounting, Darwin arrived at "marry" and in 1839 wed his cousin Emma Wedgwood. The marriage was stable and lasting, becoming the harbor of his life's work and feeling. Here we stay faithful to the spirit of the record: Darwin did leave behind this tangled pros-and-cons list, and he did enter a high-investment marriage—the point lies not in each line item but in the full humanity it displays, of longing and calculating at the same time.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>Takeaway:</strong> The power of this chapter is its intimacy. Even Darwin's most private, most personal life decision—whether and whom to marry—can be lit up by the same evolutionary logic. This is not to belittle the feeling but to show that in life's tenderest moments, the hand that shaped us has never been absent.</p>

<p class="thought-question">🤔 Reflect: If you too listed a major life decision in two columns of pros and cons, do you think the "emotional" column is really the opposite of reason—or another kind of calculation evolution wrote into your body?</p>`
    }
  },
  6: {
    num: { zh: `第六章`, en: `Chapter Six` },
    title: { zh: `婚姻幸福的達爾文方案`, en: `The Darwin Plan for Marital Bliss` },
    epigraph: {
      zh: `對人類來說，一夫一妻有點逆天——正因為激情會退潮、心會游移，白頭偕老才是一項需要努力的成就，而非天賦。`,
      en: `For humans, monogamy runs a little against nature—precisely because passion ebbs and the heart wanders, growing old together is an achievement to be worked for, not a gift.`
    },
    body: {
      zh: `<p><strong>核心論點：</strong>把前面五章的分析全部收攏，這一章面對一個很實際的問題：既然演化把我們調成這樣，該怎麼維繫一段長久的婚姻？Wright 的診斷有兩個殘酷的前提——激情會隨著依附化學的變化逐漸消退，而男性又天生帶著某種游移的傾向。愛情的化學一開始轟轟烈烈，時間久了卻會沉澱、降溫，這幾乎是被寫進生理的節奏。</p>

<p><strong>論證——一夫一妻對人類有點「逆天」：</strong>把這兩點加起來，結論是：長期忠貞的一夫一妻，對人類這個物種而言其實有些違逆天性。我們不是像某些終生配對的動物那樣，天生就被牢牢黏在一起；我們身上帶著相反方向的拉力。正因為它逆天，所以它不會自動維持——它需要刻意的努力，需要對抗某些自然而然會冒出來的衝動。認清這一點，本身就是務實的第一步：不要天真地以為承諾會自己撐著。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>論證——自我認識就是那件工具：</strong>那麼，努力的支點在哪裡？Wright 給出的核心工具是自我認識。當你認得出一股衝動的來源——知道那份對新鮮感的渴望、那份對配偶的煩膩、那份被他人吸引的心動，很可能只是祖先環境裝好的預設程式在運轉——你就多了一個原本沒有的選項：不必自動服從它。看穿衝動的來歷，是抵抗它的前提。守得住承諾的人，往往不是感覺不到拉力，而是認得出那股拉力是什麼。</p>

<p><strong>實例／應用——知道天性，然後選擇：</strong>這套「達爾文方案」的精神，不是叫人壓抑到麻木，也不是叫人放縱天性、拿演化當出軌的藉口。它走的是中間那條更難的路：先誠實承認那些衝動真實存在、且有古老的來歷，再用這份理解去做出清醒的選擇。你越懂天性怎麼設計你，你就越有本錢決定要不要照它的劇本走。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>應用啟示：</strong>整個 Part One 的落點，就在這句話上——不是要放縱天性，也不是要假裝天性不存在，而是要「知道天性、然後選擇」。愛與承諾之所以珍貴，恰恰因為它們不是白送的；它們是一隻明白自己如何被設計的道德動物，選擇活得比天性造就的它更好的證明。</p>

<p class="thought-question">🤔 思考：如果你知道某一天心會自然地游移、激情會自然地退潮，那麼「選擇留下」這件事，會因此變得比較沉重，還是比較有分量？</p>`,
      en: `<p><strong>Core claim:</strong> Gathering up the analysis of the previous five chapters, this chapter faces a very practical question: given that evolution tuned us this way, how do you sustain a lasting marriage? Wright's diagnosis rests on two harsh premises—passion gradually fades as attachment chemistry shifts, and men carry an innate tendency to wander. The chemistry of love blazes at first but, over time, settles and cools; this rhythm is all but written into our physiology.</p>

<p><strong>Argument—monogamy runs a little against nature for humans:</strong> Put those two points together and the conclusion is that long-term faithful monogamy actually cuts somewhat against the grain for our species. We are not, like some lifelong-pairing animals, naturally glued fast together; we carry pulls in the opposite direction. Precisely because it goes against nature, it will not maintain itself automatically—it requires deliberate effort, a resistance to certain impulses that will inevitably surface. Recognizing this is itself the pragmatic first step: don't naïvely assume commitment will hold itself up.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>Argument—self-knowledge is the tool:</strong> So where is the fulcrum for that effort? The core tool Wright offers is self-knowledge. When you can recognize the source of an impulse—when you know that the craving for novelty, the restlessness with a spouse, the flutter of attraction to someone else is very likely just a default program installed by the ancestral environment running its course—you gain an option you didn't have before: you need not automatically obey it. Seeing through an impulse's origins is the precondition for resisting it. Those who keep their commitments are usually not the ones who feel no pull, but the ones who can recognize what the pull is.</p>

<p><strong>Illustration / application—know your nature, then choose:</strong> The spirit of this "Darwin plan" is neither to suppress oneself into numbness nor to indulge nature and use evolution as an excuse for infidelity. It takes the harder middle road: first honestly admit that these impulses truly exist and have an ancient pedigree, then use that understanding to make a clear-eyed choice. The better you understand how nature designed you, the more standing you have to decide whether to follow its script.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>Takeaway:</strong> The whole of Part One lands on this line—not to indulge nature, nor to pretend nature isn't there, but to "know your nature, then choose." Love and commitment are precious precisely because they are not handed over for free; they are the proof of a moral animal that understands how it was designed, choosing to live better than the nature that made it.</p>

<p class="thought-question">🤔 Reflect: If you know that one day the heart will naturally wander and passion will naturally ebb, does that make the act of "choosing to stay" feel heavier—or does it give it more weight?</p>`
    }
  }
});


Object.assign(CHAPTER_CONTENT, {
  7: {
    num: { zh: `第七章`, en: `Chapter Seven` },
    title: { zh: `家庭`, en: `Families` },
    epigraph: {
      zh: `血緣裡的愛，是基因替自己寫下的家書。`,
      en: `The love within our blood is a letter the genes write to themselves.`
    },
    body: {
      zh: `<p><strong>核心論點：基因之眼看家庭。</strong>為什麼父母願意為孩子挨餓、為什麼手足間既相扶又相爭？漢彌爾頓（W. D. Hamilton）在一九六○年代提出的親屬選擇（kin selection）給了一個冷靜到近乎殘忍的答案：天擇不只計算「一個個體留下幾個後代」，而是計算「一份基因在世界上留下多少拷貝」。這就是內含適應度（inclusive fitness）——你自己的繁殖，加上你幫助的親屬所帶著、和你共享的那些基因份額。從這個角度看，家庭之愛不是文明的裝飾，而是基因照顧自己拷貝的一套精巧裝置。</p>

<p><strong>論證：親疏遠近有一把演算尺。</strong>你和子女、父母各共享約一半的基因，和手足平均也是一半，和堂表親則只剩八分之一。漢彌爾頓的洞見是：一個「利他」的行動只要「受益者得到的好處 × 親緣係數」大於「行動者付出的代價」，帶動這行動的基因就會擴散。這就解釋了一個看似矛盾的事實——最無私的愛，往往流向與我們基因重疊最多的人。愛不是被理性算出來的，而是天擇早已把這把尺，鑄進了我們的情感裡。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>實例：親子之間也有一場拔河。</strong>崔弗斯（Robert Trivers）提醒我們，別把家庭想成利益完全一致的和諧體。父母與孩子只共享一半基因，於是對「該投資多少」的最適解並不相同：對母親而言，把資源在幾個孩子之間平均分配、以便再生下一個，才是划算的；但對眼前這個孩子而言，它希望獨佔更多——因為它和自己的基因百分之百重疊，和未來的弟妹只有一半。斷奶期的哭鬧、手足之間的暗中較勁，其實是這場「親子衝突（parent-offspring conflict）」在日常裡的迴響。</p>

<p><strong>實例：連悲傷都有一條隱形的曲線。</strong>親屬選擇甚至滲進我們最深的哀慟。演化心理學觀察到一個令人不安的規律：對逝者的哀傷深淺，往往與那位親人的「繁殖價值」隱隱相關——一個正值盛年、能延續家族基因的成員，其離去所激起的悲痛，通常比年幼或年邁者更劇烈。這不是我們有意識地算計，而是情感被設計成如此。承認這一點會讓人不適，但它並不貶低哀傷本身的真切。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>應用啟示：自私的根，長不出虛假的花。</strong>把親情追溯到基因的自利，最容易引來一種犬儒的誤讀：「那愛豈不是假的？」不是的。起源不等於本質。基因或許出於「自利」而把愛裝進我們，但被裝進來的那份愛，在我們心裡是徹底真實的——它會讓人流淚、犧牲、記掛一生。理解愛的演化來源，不是要拆穿它，而是要更清醒地珍惜它，也更誠實地面對家庭裡那些連我們自己都難以啟齒的競爭與偏心。</p>

<p class="thought-question">🤔 思考：如果你對親人的愛，一部分是基因在照顧它自己的拷貝——這會讓那份愛少一分珍貴，還是多一分值得驚嘆？</p>`,
      en: `<p><strong>The core claim: the family seen through the gene's eye.</strong> Why will a parent go hungry for a child, and why do siblings both cling to and quarrel with one another? Kin selection, proposed by W. D. Hamilton in the 1960s, offers an answer that is almost coldly elegant. Natural selection does not merely count how many offspring an individual leaves behind; it counts how many copies of a gene make it into the world. This is inclusive fitness—your own reproduction plus the share of your genes carried by the relatives you help. Seen this way, family love is not a decoration added by civilization but a finely built device by which genes look after their own copies.</p>

<p><strong>The argument: there is a hidden slide rule of kinship.</strong> You share about half your genes with a child or a parent, half on average with a full sibling, but only an eighth with a cousin. Hamilton's insight was this: an "altruistic" act will spread the gene behind it whenever the benefit to the recipient, weighted by relatedness, exceeds the cost to the actor. That explains a seeming paradox—the most selfless love tends to flow toward those whose genes overlap most with our own. We do not compute this love; selection long ago cast the rule into our feelings.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>An illustration: even parent and child are in a tug of war.</strong> Robert Trivers warns us not to picture the family as a haven of perfectly shared interests. Parent and offspring share only half their genes, so their ideal answers to "how much to invest" do not match. For a mother, spreading resources across several children so she can bear the next one is the profitable strategy; but the child at hand would rather monopolize more, since it is a hundred percent related to itself and only half related to a future sibling. The tears of weaning, the quiet rivalry between siblings—these are the everyday echoes of parent-offspring conflict.</p>

<p><strong>An illustration: even grief has an invisible curve.</strong> Kin selection reaches into our deepest mourning. Evolutionary psychology has noted an unsettling regularity: the intensity of grief often tracks, faintly, the "reproductive value" of the one who is gone. The loss of a member in the prime of life, capable of carrying the family's genes forward, tends to strike harder than the loss of the very young or the very old. This is not conscious arithmetic; it is a feeling built to behave this way. Admitting it makes us uneasy, yet it does not cheapen the reality of the grief itself.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>The takeaway: a selfish root does not grow a false flower.</strong> Tracing family love back to the gene's self-interest invites a cynical misreading: "then isn't the love a sham?" No. Origin is not essence. The genes may have installed love out of "self-interest," but the love they installed is utterly real within us—it moves us to weep, to sacrifice, to remember for a lifetime. Understanding love's evolutionary source is not meant to expose it, but to let us cherish it more clearly, and to face more honestly the rivalries and favoritisms in our families that we can barely admit even to ourselves.</p>

<p class="thought-question">🤔 Reflect: If part of your love for kin is a gene tending its own copies, does that make the love any less precious—or more astonishing that it exists at all?</p>`
    }
  },

  8: {
    num: { zh: `第八章`, en: `Chapter Eight` },
    title: { zh: `達爾文與野蠻人`, en: `Darwin and the Savages` },
    epigraph: {
      zh: `我們天生會畫一個圈；文明，是學著把圈畫大。`,
      en: `We are born drawing a circle; civilization is learning to draw it wider.`
    },
    body: {
      zh: `<p><strong>核心論點：內外之分，是一種本能。</strong>把「我們」和「他們」分開，把恩情留給圈內、把戒心投向圈外——這種傾向不是後天灌輸的偏見，而是演化留下的舊裝置。在祖先的採集狩獵環境裡，族群之間往往資源相爭、性命相搏，一顆懂得對同族慷慨、對外族警戒的心，比一顆對誰都一視同仁的心更能把基因傳下去。族群中心主義（把自己所屬的群體看得更真、更值得善待）因此深植於人性。</p>

<p><strong>論證：達爾文自己就是這場張力的活標本。</strong>萊特用達爾文本人來演示這道裂縫。這位維多利亞紳士在乘小獵犬號航行時，一方面帶著那個時代對「野蠻人」的居高臨下——他被異文化的樣貌震動、下意識地把他們排在文明的階梯下層；另一方面，他骨子裡又抱著一個激進的信念：全人類同源，都是同一棵生命之樹上的枝條。偏見的本能與「人類一體」的理智，在同一個腦袋裡拉鋸。這不是達爾文一個人的毛病，而是每一顆人腦內建的衝突。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>實例：道德關懷的「圈」是可以伸縮的。</strong>值得慶幸的是，那個把恩情留給圈內的裝置，並沒有把圈的大小鎖死。人類歷史其實可以讀成一部「道德圈擴張史」：關懷的半徑從家族，一步步推及部落、城邦、民族，直到「全人類皆兄弟」這樣曾經不可思議的想法。內群偏好是天性提供的預設值，但這個預設值是可以被理性、被制度、被想像力一次次往外推的。達爾文晚年對奴隸制的深惡痛絕，正是這種擴張在一個人身上的體現。</p>

<p><strong>應用啟示：偏見有生物根，但那不是藉口。</strong>承認排外有演化來源，最危險的誤用是把它當免罪金牌：「我天生如此，所以無可奈何。」萊特的立場恰好相反——正因為我們知道那股「非我族類」的直覺從哪裡冒出來，我們才有機會在它冒出來的當下認出它、質疑它、按住它。看不見的本能最難抵抗；被看清的本能才有被超越的可能。把圈畫大，從來不是天性替我們做的事，而是我們違抗天性、刻意去做的事。</p>

<p class="thought-question">🤔 思考：當你對某個「外群」升起一絲本能的戒備時，你能不能在那一瞬間退一步，問自己：這是判斷，還是那具古老裝置又啟動了？</p>`,
      en: `<p><strong>The core claim: the line between us and them is an instinct.</strong> To separate "us" from "them," to reserve kindness for the inside and suspicion for the outside—this leaning is not a prejudice merely taught, but an old device left by evolution. In the ancestral world of foraging and hunting, groups often competed for resources and even for survival. A mind inclined to be generous to its own and wary of outsiders passed on its genes better than a mind that treated everyone alike. Ethnocentrism—seeing one's own group as more real and more deserving of care—is thus planted deep in human nature.</p>

<p><strong>The argument: Darwin himself is a living specimen of this tension.</strong> Wright uses Darwin to display the fault line. Sailing on the Beagle, this Victorian gentleman carried, on one hand, his era's condescension toward "savages"—he was shaken by the sight of unfamiliar peoples and instinctively placed them low on the ladder of civilization. On the other hand, he held a radical conviction in his bones: that all humankind is one, branches of a single tree of life. The instinct of prejudice and the reason of "one human family" pulled against each other inside one skull. This was not Darwin's private flaw but a conflict built into every human brain.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>An illustration: the moral circle can stretch.</strong> Mercifully, the device that hoards kindness for the in-group did not lock the circle's size in place. Human history can be read as a long expansion of the moral circle: the radius of concern pushed out from the family to the tribe, the city, the nation, until the once unthinkable idea that all human beings are kin. In-group favoritism is the default that nature supplies, but that default can be pushed outward, again and again, by reason, by institutions, by imagination. Darwin's late and fierce revulsion at slavery was this very expansion working itself out in one man.</p>

<p><strong>The takeaway: prejudice has a biological root, but that is no excuse.</strong> To grant that xenophobia has an evolutionary source invites one dangerous misuse: treating it as a pardon—"I was born this way, so nothing can be done." Wright's stance is the opposite. Precisely because we know where that "not my kind" intuition comes from, we get a chance to recognize it as it rises, to question it, to hold it down. An unseen instinct is hardest to resist; only an instinct seen clearly can be transcended. Drawing the circle wider was never something nature did for us—it is something we do against nature, on purpose.</p>

<p class="thought-question">🤔 Reflect: When a flicker of instinctive wariness toward some "out-group" rises in you, can you step back in that instant and ask: is this a judgment, or has the old device switched on again?</p>`
    }
  },

  9: {
    num: { zh: `第九章`, en: `Chapter Nine` },
    title: { zh: `朋友`, en: `Friends` },
    epigraph: {
      zh: `友誼是一份沒有簽字的合約，感激與義憤是它的執法者。`,
      en: `Friendship is an unsigned contract, and gratitude and indignation are its enforcers.`
    },
    body: {
      zh: `<p><strong>核心論點：陌生人之間，也能長出合作。</strong>親屬選擇解釋了我們為何愛親人，卻解釋不了我們為何幫一個毫無血緣的朋友。崔弗斯（Robert Trivers）在一九七一年補上了這塊拼圖：互惠利他（reciprocal altruism）。它的邏輯很樸素——「你今天幫我，我改天幫你」，只要雙方都能長期反覆相遇、都記得誰有借有還，這種以牙還牙式的合作就能穩定存在，讓兩個不共享基因的人也能結成同盟。友誼，本質上是一場（多半在意識底下運行的）策略性互惠。</p>

<p><strong>論證：囚徒困境是它的數學骨架。</strong>這種合作為什麼會被天擇青睞？答案藏在賽局理論裡。在囚徒困境這類非零和賽局中，兩人若都選擇合作，總報酬高於彼此背叛；問題只在於——怎麼防止對方拿了好處就翻臉。演化找到的解不是靠聖人般的無私，而是靠一個簡單策略：先釋出善意，然後看對方怎麼回應——投桃報李、以怨還怨。這種「有條件的合作」，讓善意不至於被佔便宜的人吃乾抹淨。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>實例：情緒，就是這份合約的執行系統。</strong>妙處在於，天擇並沒有讓我們隨身帶著帳本冷冰冰地計算。它裝上了一整套情緒來替我們自動記帳：受了恩，湧起感激，於是想回報；被出賣，燃起義憤，於是想懲罰負心者；虧欠了人，泛起罪惡感，於是主動彌補；遇到公平的對待，生出信任與喜歡。感激、義憤、罪惡感、公平感——這些看似純粹道德的情感，其實是一套精巧的「執約情緒」，讓互惠關係得以維繫而不崩壞。</p>

<p><strong>應用啟示：是工具，但不因此虛假。</strong>知道友情背後有一套互惠的算計，會讓人一時發涼：難道我的喜歡與感激，都只是基因為了維持交換而裝的機關？但這裡要重申那條貫穿全書的原則——功能不否定真誠。這些情緒確實是演化用來執行「合約」的工具，然而當你真心為朋友高興、真心因辜負對方而愧疚時，那份感受一點也不虛假。理解它的機制，反而能讓我們做一個更清醒、更懂得回報、也更不易被人利用的朋友。</p>

<p class="thought-question">🤔 思考：當你對一個朋友心懷感激時，那份暖意究竟是「純粹的善」，還是一台古老的互惠引擎在運轉——你分得清嗎，又需要分清嗎？</p>`,
      en: `<p><strong>The core claim: cooperation can grow even between strangers.</strong> Kin selection explains why we love our relatives, but not why we would help a friend who shares none of our blood. Robert Trivers supplied that missing piece in 1971: reciprocal altruism. Its logic is plain—"you help me today, I help you another day." As long as two people meet repeatedly over the long run and each remembers who paid back and who did not, this tit-for-tat cooperation can stay stable, allowing two people who share no genes to become allies. Friendship is, at bottom, a strategic reciprocity that mostly runs beneath awareness.</p>

<p><strong>The argument: the prisoner's dilemma is its mathematical skeleton.</strong> Why would selection favor such cooperation? The answer hides in game theory. In non-zero-sum games like the prisoner's dilemma, two people who both cooperate earn a higher total payoff than two who both betray; the only problem is how to keep the other side from taking the benefit and then turning on you. The solution evolution found relies not on saintly selflessness but on a simple strategy: extend goodwill first, then respond in kind—reward cooperation, punish betrayal. This conditional cooperation keeps goodwill from being stripped bare by cheats.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>An illustration: emotions are the contract's enforcement system.</strong> The elegant part is that selection did not have us carry a cold ledger to tally favors. It installed a whole suite of emotions to keep the books automatically. Receive a kindness, and gratitude wells up, so we want to repay; be betrayed, and indignation flares, so we want to punish the faithless; fall into debt to someone, and guilt stirs, so we move to make amends; meet fair treatment, and trust and liking grow. Gratitude, indignation, guilt, a sense of fairness—these feelings that seem purely moral are in fact a finely tuned set of contract-enforcing emotions that keep reciprocity from collapsing.</p>

<p><strong>The takeaway: a tool, yet not thereby false.</strong> Learning that friendship rests on a reciprocal calculation can chill for a moment: is my liking, my gratitude, only machinery the genes installed to sustain exchange? But here we must restate the principle running through the whole book—function does not cancel sincerity. These emotions are indeed the tools evolution uses to enforce the "contract," yet when you are genuinely glad for a friend, genuinely ashamed at having let them down, that feeling is not the least bit false. Understanding its mechanism can, in fact, make us clearer-eyed friends—more ready to reciprocate, and harder to exploit.</p>

<p class="thought-question">🤔 Reflect: When you feel grateful to a friend, is that warmth "pure goodness," or an ancient engine of reciprocity turning over—can you tell the two apart, and do you even need to?</p>`
    }
  },

  10: {
    num: { zh: `第十章`, en: `Chapter Ten` },
    title: { zh: `達爾文的良知`, en: `Darwin's Conscience` },
    epigraph: {
      zh: `良知是一台聲譽的守夜人，它替我們看管一樣看不見卻要命的東西——信用。`,
      en: `Conscience is a night-watchman of reputation, guarding something invisible yet vital—our credit.`
    },
    body: {
      zh: `<p><strong>核心論點：良知，是一種適應。</strong>我們習慣把良知看成人性中最崇高、最不沾功利的部分。但演化心理學給了它一個務實得多的來歷：良知是天擇為了經營結盟與名聲而裝上的裝置。在一個必須靠反覆合作才能活下去的社會裡，一個人最珍貴的資產之一，就是「可靠」的名聲。良知——那個在你想佔便宜、想背信時發出警報的內在聲音——正是用來保護這份名聲、讓你維持「信用良好」的守門人。</p>

<p><strong>論證：罪惡感與羞恥是聲譽的煞車。</strong>順著上一章互惠利他的邏輯往下走，就能看清良知的機制。罪惡感讓你在虧欠別人時渾身不自在，逼你去補償，以免關係破裂；羞恥則在你的失格被他人看見時襲來，逼你收斂，以免名聲掃地。這兩種痛苦的情緒，其實是天擇裝在人身上的「聲譽煞車」——它們讓短期的自私變得不划算，從而在長期裡把我們維持成一個值得合作的夥伴。良知之所以會痛，正是為了讓我們別做出日後會後悔、會賠上信用的事。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>實例：達爾文本人，就是一個謹慎的聲譽經營者。</strong>萊特再一次把鏡頭轉回達爾文。這位以誠實與溫和著稱的博物學家，其內心其實佈滿了對名譽的細膩經營與時時泛起的內疚。他審慎、克制、極在意自己在同儕與後世眼中的形象——這並不是虛偽，而恰恰印證了良知的雙重身份：它既是真誠的道德感受，又同時默默履行著「維護聲譽」的功能。達爾文的謹小慎微，不是德性的瑕疵，而是德性運作方式的實況。</p>

<p><strong>應用啟示：真誠與功能，可以並存。</strong>本章要化解的，是一種一元對立的錯覺：良知「要嘛是純粹的道德」，「要嘛只是自利的算計」——彷彿只能二選一。萊特的答案是：兩者同時成立。良知既是真誠的，也是有功能的；它一邊讓你真心不忍傷害他人，一邊也悄悄替你守著那份看不見的信用。看穿它的功能，並不會讓你變成犬儒；反而，明白良知在替你把關什麼，你才更能主動地、清醒地選擇去做一個問心無愧的人。</p>

<p class="thought-question">🤔 思考：如果良知同時是「真誠的不忍」與「聲譽的煞車」——那麼下一次它在你心裡發出警報時，你會更信任它，還是更想看清它到底在守護什麼？</p>`,
      en: `<p><strong>The core claim: conscience is an adaptation.</strong> We are used to seeing conscience as the loftiest, least self-serving part of our nature. But evolutionary psychology gives it a far more practical origin: conscience is a device installed by selection to manage alliances and reputation. In a society where survival depends on repeated cooperation, one of a person's most precious assets is a reputation for being reliable. Conscience—that inner voice that sounds an alarm when you are tempted to cheat or to break faith—is exactly the gatekeeper that protects this reputation and keeps your credit in good standing.</p>

<p><strong>The argument: guilt and shame are the brakes on reputation.</strong> Follow the logic of reciprocal altruism from the last chapter and the machinery of conscience comes clear. Guilt makes you uneasy in your own skin when you owe someone, pressing you to make amends before the relationship breaks. Shame strikes when your lapse is seen by others, pressing you to rein yourself in before your name is ruined. These two painful emotions are reputation-brakes that selection built into us—they make short-term selfishness a bad bargain and thus keep us, over the long run, into partners worth cooperating with. Conscience hurts precisely so that we will not do the things we would later regret and pay for in lost credit.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>An illustration: Darwin himself was a careful manager of reputation.</strong> Wright turns the lens back to Darwin once more. This naturalist, famed for his honesty and gentleness, in fact carried within him a fine-grained management of his name and a conscience that stirred often. He was cautious, restrained, keenly mindful of how he would appear to his peers and to posterity—not out of hypocrisy, but in a way that confirms conscience's double identity: it is at once a sincere moral feeling and a quiet fulfiller of the function of guarding reputation. Darwin's carefulness was not a blemish on his virtue but a live picture of how virtue actually works.</p>

<p><strong>The takeaway: sincerity and function can coexist.</strong> What this chapter dissolves is a false either-or: that conscience must be "either pure morality" or "merely self-interested calculation," as if one had to choose. Wright's answer is that both hold at once. Conscience is sincere and it is functional; it makes you truly reluctant to harm others while quietly guarding that invisible credit on your behalf. Seeing through to its function does not turn you cynical; on the contrary, once you grasp what conscience is keeping watch over, you can choose more actively, and more clear-headedly, to be a person at peace with themselves.</p>

<p class="thought-question">🤔 Reflect: If conscience is at once a "sincere reluctance to harm" and a "brake on reputation"—then the next time it sounds an alarm within you, will you trust it more, or want to see more clearly what it is really guarding?</p>`
    }
  }
});


Object.assign(CHAPTER_CONTENT, {
  11:{
    num:{zh:`第十一章`,en:`Chapter Eleven`},
    title:{zh:`達爾文的延宕`,en:`Darwin’s Delay`},
    epigraph:{
      zh:`真理若嚇不倒你，聲名的計算會。`,
      en:`If the truth does not frighten you, the arithmetic of reputation will.`
    },
    body:{
      zh:`<p><strong>一個沉睡了二十年的理論</strong>年輕的達爾文早在一八三○年代末，就在筆記本裡把天擇的骨架大致想通了。然而《物種起源》直到一八五九年才問世。整整二十年，這個足以撼動整個維多利亞世界觀的想法，被作者親手鎖在抽屜裡。他不是懶，也不是還沒想清楚——他繼續累積證據、寫信、養鴿子、解剖藤壺，把理論打磨得無懈可擊。真正被壓住的，不是思考，而是「公開」這個動作本身。</p>

<p><strong>他在怕什麼</strong>達爾文很清楚，發表天擇等於當眾拆掉神創論的地基。這在當時不只是學術爭議，而是對信仰、對社會秩序、對他自己所屬的體面階層的冒犯。他把這種說法私下比喻成「像在承認一樁謀殺」。一個溫和、講究名譽、極度在意他人評價的紳士，光是想像自己被貼上異端與危險份子的標籤，就足以讓他一再拖延。他的延宕，本質上是一場漫長的<strong>名聲</strong>風險評估。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>謹慎，也是一種策略</strong>但延宕未必全是恐懼。從演化的角度看，一個社會動物在丟出爆炸性主張前反覆盤算，是相當理性的自我保護。達爾文一邊拖延，一邊布局：他寫信給少數信得過的朋友試探反應、悄悄建立盟友、囤積足以碾壓對手的證據。等到他終於出手，他要的不是一場苦戰，而是一場有備而來、勝券在握的登場。溫和博物學家的表象底下，是一位精於算計的社會策略家。</p>

<p><strong>被逼出來的關鍵時刻</strong>真正打破僵局的，是一封來自遙遠東方的信。一八五八年，Wallace 寄來一篇論文，內容幾乎就是達爾文壓了二十年的想法。優先權——也就是「誰先想到」這份榮譽——眼看要拱手讓人。恰恰是這個關乎名聲的威脅，而非任何新的真理，逼著達爾文終於動起來。延宕之所以結束，不是因為他忽然不怕了，而是因為不出手的代價，第一次高過了出手的代價。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>誠實也走在算計的軌道上</strong>我們喜歡把科學想成純粹的求真：只要證據夠了，真理自然出口。達爾文的故事卻提醒我們，真理的釋放時機，常常由社會計算來決定。什麼時候說、對誰說、怎麼包裝才不至於身敗名裂——這些都不是邏輯問題，而是<strong>地位</strong>與名聲的問題。這無損於他理論的偉大，卻讓我們看見：即便是人類最誠實的事業，也是在一副社會性的大腦裡運作的。</p>

<p><strong>看穿自己的延宕</strong>每個人心裡都有一個被鎖住的抽屜——那句沒說出口的真話、那個怕被笑而不敢提的想法。我們往往以為自己是在「等時機成熟」，其實是在替名聲買保險。達爾文的偉大，不在於他沒有這種算計，而在於他終究把抽屜打開了。認得出延宕背後那台不停運轉的名聲計算機，或許就是我們敢於稍微早一點打開抽屜的開始。</p>

<p class="thought-question">🤔 思考：你有沒有一個「達爾文的抽屜」——一件因為怕別人怎麼看而遲遲不做、不說的事？你告訴自己的理由，是「還沒準備好」，還是「還不敢」？</p>`,
      en:`<p><strong>A theory left to sleep for twenty years</strong>By the late 1830s the young Darwin had already worked out the skeleton of natural selection in his notebooks. Yet On the Origin of Species did not appear until 1859. For two full decades, an idea powerful enough to overturn the entire Victorian worldview sat locked in its author’s drawer. He was not lazy, nor still confused. He kept gathering evidence, writing letters, breeding pigeons, dissecting barnacles, polishing the theory until it was airtight. What he held back was not the thinking. It was the act of going public itself.</p>

<p><strong>What he was afraid of</strong>Darwin understood perfectly well that publishing natural selection meant dismantling, in public, the foundations of divine creation. In his day this was no mere academic quarrel. It was an affront to faith, to social order, and to the respectable class he belonged to. He privately likened the confession to admitting a murder. For a mild, honor-conscious gentleman who cared intensely about the opinion of others, merely imagining himself branded a heretic and a danger was enough to make him delay, again and again. His delay was, at bottom, a long exercise in <strong>reputation</strong> risk assessment.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>Caution as strategy</strong>But the delay was not all fear. Seen through an evolutionary lens, a social animal weighing its move carefully before making an explosive claim is behaving with perfectly rational self-protection. While Darwin stalled, he also positioned himself. He wrote to a handful of trusted friends to test their reactions, quietly built alliances, and stockpiled evidence heavy enough to crush any opponent. When he finally acted, he wanted not a hard fight but a well-prepared entrance with victory already in hand. Beneath the gentle naturalist stood a shrewd social strategist.</p>

<p><strong>The moment he was forced into</strong>What finally broke the deadlock was a letter from the far side of the world. In 1858 Wallace sent him an essay containing, almost exactly, the idea Darwin had guarded for twenty years. Priority — the honor of having thought of it first — was about to slip away. It was precisely this threat to reputation, and not any new truth, that jolted Darwin into motion. The delay ended not because he had suddenly stopped being afraid, but because for the first time the cost of silence exceeded the cost of speaking.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>Even honesty travels on a calculated track</strong>We like to imagine science as pure truth-seeking: once the evidence is sufficient, truth simply comes out. Darwin’s story reminds us that the timing of truth’s release is often decided by social calculation. When to speak, to whom, and how to frame it so as not to be ruined — these are not questions of logic but of <strong>status</strong> and reputation. This takes nothing from the greatness of his theory, but it lets us see that even humanity’s most honest enterprise runs inside a deeply social brain.</p>

<p><strong>Seeing through your own delay</strong>Everyone carries a locked drawer — the true thing left unsaid, the idea one is too afraid of ridicule to raise. We usually tell ourselves we are waiting for the right moment, when in fact we are buying insurance on our reputation. Darwin’s greatness lies not in being free of this calculation, but in finally opening the drawer. Recognizing the reputation-machine humming behind our hesitation may be the very thing that lets us open the drawer a little sooner.</p>

<p class="thought-question">🤔 Reflect: Do you have a “Darwin’s drawer” — something you keep from doing or saying because you fear how others will see it? Is your reason really “I’m not ready yet,” or is it “I don’t dare yet”?</p>`
    }
  },

  12:{
    num:{zh:`第十二章`,en:`Chapter Twelve`},
    title:{zh:`社會地位`,en:`Social Status`},
    epigraph:{
      zh:`階梯沒有頂端，只有下一階。`,
      en:`The ladder has no top, only a next rung.`
    },
    body:{
      zh:`<p><strong>對地位的飢渴不是虛榮</strong>我們常把在意面子、爭排名、渴望被看重當成一種可笑的虛榮，是該修掉的毛病。但從演化的角度看，對<strong>地位</strong>的追求並不膚淺——它攸關生存與繁衍。在祖先的群體裡，地位高的個體能拿到更多食物、更好的盟友、更多保護；對男性而言，地位還直接換算成交配機會。愛計較高低的那些人，把更多基因留給了後代；不在乎的人，血脈稀薄。我們都是前者的子孫。</p>

<p><strong>一台永不停歇的跑步機</strong>地位的殘酷之處，在於它是相對的。你過得好不好，大腦不是用絕對值衡量，而是拿你跟身邊的人比。於是無論爬到多高，都有下一階；無論擁有多少，只要旁邊有人更多，滿足感就漏光。這台跑步機永遠不停：達成了目標，短暫的喜悅很快被新的比較沖淡，胃口重新歸零。這不是你不知足，而是你的情緒系統本來就被設計成不會知足——知足的祖先，早早退出了競爭。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>心情是地位的儀表板</strong>演化心理學給了一個有力的猜想：我們的情緒起伏，很大一部分是內在的地位儀表板。被讚美、被升遷、被眾人注視時的那股飄然，是大腦在說「你的地位上升了，繼續」；被輕視、被冷落、當眾出糗時那股想鑽地洞的羞恥，是大腦在說「你掉下去了，快修補」。連我們對自己的整體感受——自信或自卑——都可以讀作一種長期的地位估值。情緒不是隨機的天氣，而是一套追蹤社會排名的精密系統。</p>

<p><strong>安靜的野心也是野心</strong>達爾文不是那種張牙舞爪爭地位的人。他深居簡出、體弱多病、彬彬有禮，看起來與權力的角鬥場相隔千里。但別被表象騙了。他對科學聲望有著安靜而熾烈的渴望：在意優先權、在意同儕的評價、在意自己在博物學史上的位置。他的野心沒有消失，只是換上了紳士的外衣，改走學術的階梯。地位驅力的形式千變萬化，溫文儒雅只是其中一種偽裝。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>看穿它，才不被它奴役</strong>認清地位驅力的古老根源，不是要我們放棄一切追求、假裝超脫。那既做不到，也沒必要。真正有用的，是看穿那股焦慮的來歷：當你為了一則貼文的按讚數坐立難安、為了同學會上誰混得更好而失眠，你其實是被一台在採集狩獵時代就裝好的儀表板牽著走。看穿它，你就多了一點選擇的餘地——決定哪些排名值得在乎，哪些不過是跑步機在空轉。</p>

<p><strong>把地位換一個賽道</strong>你無法拔掉地位驅力，但你能挑它奔向何方。同樣一股想被看重、想出人頭地的能量，可以耗在跟鄰居比車比房的零和攀比裡，也可以投進讓你真正在乎的技藝、志業與關係中。達爾文把它導向了理解自然的偉大工程。看穿這股驅力不會讓你變得冷漠，反而讓你有機會替它選一條更值得的跑道。</p>

<p class="thought-question">🤔 思考：上一次讓你真正開心或真正難堪的事，背後是不是都藏著一次「地位的升降」？如果那台儀表板讓你自己來調校，你會想讓它去追什麼？</p>`,
      en:`<p><strong>The hunger for status is not vanity</strong>We tend to treat caring about face, chasing rank, and craving recognition as a laughable vanity, a flaw to be trimmed away. But through an evolutionary lens, the pursuit of <strong>status</strong> is anything but shallow — it bears directly on survival and reproduction. In ancestral groups, high-status individuals secured more food, better allies, more protection; for men, status converted directly into mating opportunity. Those who cared about rank left more genes behind; those who didn’t, thinned out. We are all descendants of the former.</p>

<p><strong>A treadmill that never stops</strong>The cruelty of status is that it is relative. Your brain does not gauge how well you are doing in absolute terms, but by comparing you to the people around you. So however high you climb, there is a next rung; however much you own, the moment someone nearby owns more, the satisfaction drains away. The treadmill never stops: reach a goal, and the brief joy is soon diluted by a fresh comparison, the appetite reset to zero. This is not a failure to be content. Your emotional system was built never to be content — the contented ancestors dropped out of the race early.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>Mood as a status dashboard</strong>Evolutionary psychology offers a powerful conjecture: much of our emotional rise and fall is an internal status gauge. The lift you feel when praised, promoted, or watched by many is the brain saying, “your status is rising, keep going.” The urge to sink into the floor when you are slighted, ignored, or publicly humiliated is the brain saying, “you’ve dropped, repair it.” Even our overall sense of ourselves — confidence or its lack — can be read as a long-run status appraisal. Emotion is not random weather but a fine instrument tracking social rank.</p>

<p><strong>Quiet ambition is still ambition</strong>Darwin was not the type who fought for status with bared teeth. He lived in seclusion, sickly and courteous, seemingly a thousand miles from any arena of power. But do not be fooled by the surface. He harbored a quiet, burning hunger for scientific standing: he cared about priority, about the judgment of his peers, about his place in the history of natural science. His ambition had not vanished; it had merely put on a gentleman’s coat and taken the academic ladder instead. The status drive comes in endless forms, and refinement is only one of its disguises.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>See it, and it no longer enslaves you</strong>Recognizing the ancient roots of the status drive is not a call to abandon all striving and feign detachment. That is neither possible nor necessary. What is useful is to see through the pedigree of the anxiety: when you cannot sit still over the like-count on a post, or lie awake over who at the reunion has done better, you are being steered by a dashboard installed back in the age of hunting and gathering. Seeing it grants you a little room to choose — which rankings deserve your care, and which are just the treadmill spinning in place.</p>

<p><strong>Point the drive down a different track</strong>You cannot unplug the status drive, but you can choose where it runs. The same energy that wants to be valued and to rise above others can be spent on zero-sum contests over the neighbor’s car and house, or poured into the craft, calling, and relationships you truly care about. Darwin channeled his into the grand project of understanding nature. Seeing through the drive will not make you cold; it gives you the chance to pick a track more worth running on.</p>

<p class="thought-question">🤔 Reflect: The last thing that genuinely delighted or genuinely mortified you — was there a rise or fall in status hidden behind it? If that dashboard were yours to recalibrate, what would you set it to chase?</p>`
    }
  },

  13:{
    num:{zh:`第十三章`,en:`Chapter Thirteen`},
    title:{zh:`欺騙與自我欺騙`,en:`Deception and Self-Deception`},
    epigraph:{
      zh:`最好騙過別人的方法，是先騙過自己。`,
      en:`The surest way to fool others is to fool yourself first.`
    },
    body:{
      zh:`<p><strong>大腦裡的公關部門</strong>我們習慣把心智想成一位追求真相的科學家，冷靜地蒐集事實、推出結論。但更貼近事實的比喻，也許是一位<strong>公關</strong>發言人。它的工作不是找出真相，而是替「我」這個品牌護航——把你的行為說成合情合理，把你的動機描繪得光明磊落，隨時準備向內心的聽眾與外部的世界，發布一份對你最有利的新聞稿。這位發言人未必知道全部的內情；它只需要把稿子講得漂亮、講得連自己都信。</p>

<p><strong>自利偏誤的日常運作</strong>這套系統最常見的產物，就是<strong>自利偏誤</strong>。事情順利，是我的能力與努力；事情搞砸，是運氣不好、隊友拖累、時機不對。爭吵時，我們幾乎自動地記得對方的每一次過分，卻淡忘自己的每一次挑釁。開車的人覺得自己技術在平均之上，捐款的人記得自己的慷慨勝過小氣。這些偏誤不是零星的邏輯失誤，而是一整套朝著同一個方向傾斜的系統——始終傾向把「我」放在對的一邊。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>Trivers 的驚人翻轉</strong>問題來了：如果這些偏誤只是為了自我感覺良好，何必動用如此精巧的機制？Trivers 的自我欺騙理論給了一個更深的答案。既然人是社會動物、時時要說服別人相信「我是對的、我值得信任」，那麼一個把真相藏在意識之外的騙子，會比一個心知肚明的騙子更有說服力。心懷鬼胎的人會臉紅、會眼神閃爍、會露出微表情；但如果你真心相信自己的版本，這些破綻就消失了。<strong>最高明的騙子，連自己都一起騙了。</strong></p>

<p><strong>自我欺騙是天擇的巧思</strong>於是，自我欺騙不是心智的故障，而是一項適應。天擇之所以把真相從我們的意識裡藏起來，正是為了讓我們更能取信於人。你的信念之所以真誠，恰恰是因為真誠最好用——真情流露的辯白，比演出來的辯白更能打動聽眾。這是一個令人不安的結論：我們的坦率有時是設計出來的坦率，我們最深的自信，可能建立在一份被大腦悄悄修飾過的自傳之上。人愛自欺，其實是自然選擇的巧思。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>連達爾文也不例外</strong>這套機制不放過任何人，包括那位謙謙君子。達爾文對自己的評價、對優先權的在意、對他人動機的解讀，一樣會被這台護航機器悄悄調校。他的謙遜可能有幾分是真、幾分是策略，而關鍵在於——他自己未必分得清。這不是要抹黑他，而是要說明：自我欺騙不是壞人的專利，它是標準配備，安裝在每一顆正常的人腦裡，愈是道德感強的人，愈需要一份漂亮的內心新聞稿。</p>

<p><strong>誠實的起點</strong>如果連自己都在騙自己，還談什麼誠實？弔詭的是，認清這一點，正是誠實的起點。你無法拆掉那位發言人，但你可以學會不全信它的稿子。下次當你確信自己完全佔理、對方純屬無理取鬧時，那份過於乾淨俐落的確信，本身就是一個值得懷疑的信號。真正的自我認識，不是相信自己看見了真相，而是時刻記得：我這顆大腦，天生就是站在我這邊的。</p>

<p class="thought-question">🤔 思考：回想最近一次你堅信「錯的是對方」的爭執——如果你的大腦本來就會替你寫一份偏心的新聞稿，那對方的版本裡，會不會也藏著一點你沒讓自己看見的真相？</p>`,
      en:`<p><strong>The public-relations department in your head</strong>We habitually picture the mind as a truth-seeking scientist, calmly gathering facts and drawing conclusions. A closer analogy may be a <strong>public-relations</strong> spokesperson. Its job is not to find the truth but to defend the brand called “me” — to cast your behavior as reasonable, to paint your motives as pure, forever ready to issue, to an inner audience and an outer world, the press release most favorable to you. This spokesperson need not know the whole story; it need only deliver the script beautifully, so convincingly that it believes it too.</p>

<p><strong>The self-serving bias at work</strong>The most common product of this system is the <strong>self-serving bias</strong>. When things go well, it was my skill and effort; when they go wrong, it was bad luck, a teammate’s failure, poor timing. In a quarrel we almost automatically remember every excess of the other side while forgetting every provocation of our own. Drivers rate themselves above average; donors recall their generosity more vividly than their stinginess. These biases are not scattered slips of logic but a whole system tilted in one direction — always inclined to place “me” on the right side.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>Trivers’s startling reversal</strong>Here is the puzzle: if these biases merely make us feel good, why build so elaborate a mechanism? Trivers’s theory of self-deception offers a deeper answer. Since humans are social animals, forever needing to convince others that “I am right, I am trustworthy,” a deceiver who hides the truth from his own awareness will be more persuasive than one who knows he is lying. The person with a guilty secret blushes, glances away, leaks a micro-expression; but if you genuinely believe your own version, those tells vanish. <strong>The most accomplished liar has fooled himself along with everyone else.</strong></p>

<p><strong>Self-deception as nature’s clever trick</strong>Self-deception, then, is not a malfunction of the mind but an adaptation. Natural selection tucked the truth out of our awareness precisely to make us more believable to others. Your convictions are sincere exactly because sincerity works best — a heartfelt defense sways an audience more than a performed one. It is an unsettling conclusion: our candor is sometimes engineered candor, and our deepest self-confidence may rest on an autobiography quietly edited by the brain. Our love of self-deception is one of natural selection’s cleverest tricks.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>Not even Darwin is exempt</strong>This machinery spares no one, including that gentle gentleman. Darwin’s estimate of himself, his concern over priority, his reading of others’ motives — all were quietly tuned by the same defending machine. His modesty may have been part genuine, part strategic, and the crucial point is that he himself may not have been able to tell them apart. This is not to smear him but to make the point: self-deception is not the preserve of bad people. It is standard equipment, installed in every normal human brain, and the stronger one’s moral sense, the more one needs a flattering inner press release.</p>

<p><strong>The starting point of honesty</strong>If even we deceive ourselves, what is left to say about honesty? The paradox is that recognizing this is precisely where honesty begins. You cannot dismantle the spokesperson, but you can learn not to believe its script wholesale. Next time you are certain you are entirely in the right and the other party is simply being unreasonable, that too-clean, too-tidy certainty is itself a signal worth doubting. Real self-knowledge is not believing you have seen the truth, but remembering, always, that this brain of mine was born to take my side.</p>

<p class="thought-question">🤔 Reflect: Recall a recent quarrel where you were sure the other person was in the wrong. If your brain is built to write you a biased press release, might their version hold a piece of truth you never let yourself see?</p>`
    }
  },

  14:{
    num:{zh:`第十四章`,en:`Chapter Fourteen`},
    title:{zh:`達爾文的勝利`,en:`Darwin’s Triumph`},
    epigraph:{
      zh:`他贏得的不只是真理，還有說出真理的權柄。`,
      en:`He won not merely the truth, but the authority to tell it.`
    },
    body:{
      zh:`<p><strong>幾乎失之交臂的優先權</strong>達爾文的勝利，差一點就不屬於他。一八五八年 Wallace 那封信，等於把二十年的沉默逼到了牆角：兩個人各自獨立想出了天擇，而後來者的論文已經寫好、寄到。若照純粹的先來後到，優先權大可歸給搶先發表的一方。這是一場關於功勞歸屬的危機，也是全書所有<strong>地位</strong>與名聲主題的最高潮——理論的偉大，此刻要在人情與體面的戰場上見真章。</p>

<p><strong>一場體面的處理</strong>達爾文和他的盟友想出的辦法，是讓兩人的成果同時發表，把 Wallace 的論文與達爾文早年的摘要並列宣讀。這個安排既保住了達爾文的優先權，又給了 Wallace 應有的位置，避免了一場難看的爭功。它不是冷血的算計，也不是純然的無私，而是介於兩者之間的那種東西：一位深諳分寸的紳士，在維護自身利益的同時，把場面處理得漂亮、體面、令各方都能接受。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>大體良性的地位操作</strong>我們可以坦白地說：達爾文在經營自己的<strong>名聲</strong>。他在意誰先想到、在意如何被後世記得、在意維多利亞紳士科學家這個形象的完整。但把這稱為操作，並不等於指控他偽善。這是一種大體良性的地位經營——他沒有踩著別人往上爬，沒有竊取他人的功勞，反而在關鍵時刻對 Wallace 相當厚道。名聲的遊戲人人都在玩，差別只在於玩得漂不漂亮、乾不乾淨。達爾文玩得相當高明。</p>

<p><strong>形象與實質的合流</strong>達爾文最終的封聖，靠的不只是理論本身，也靠他數十年如一日經營出來的可信形象：溫和、謹慎、證據至上、從不逞口舌之快。正因為傳訊者如此可敬，那則驚世駭俗的訊息才更容易被接受。在他身上，實質的偉大與形象的經營並沒有互相拆台，反而合流：一個真正誠實的人，恰好也懂得如何讓誠實顯得可信。這正是最高明的名聲策略——它不必造假，因為底子是真的。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>高尚的成就也走在策略軌道上</strong>達爾文的故事給出一個看似矛盾、實則和解的結論：即便是人類最高尚的成就，也走在策略的軌道上。承認這一點，並不會貶低那份成就。愛可以既是基因的自利、又是真心；良知可以既有功能、又真誠；而偉大的科學勝利，可以既是真理的凱旋、又是一場經營得當的名聲遊戲。這些不是非此即彼的選擇，而是同一件事的兩面。</p>

<p><strong>看穿，然後選擇</strong>看清演化如何在達爾文——以及在我們每個人——身上安裝了地位驅力、名聲算計與自我欺騙，最終的意義不是犬儒，而是自由。當你認得出自己行為背後那台社會性的引擎，你就多了一分不被它全然支配的餘地。達爾文的最終勝利，或許不只在於他寫出了《物種起源》，更在於他示範了：一隻被天擇造出來的<strong>道德</strong>動物，如何在看穿自身設計之後，仍然把一件真正誠實而偉大的事，做成了。</p>

<p class="thought-question">🤔 思考：如果你最珍視的某項成就，背後同時藏著一點對名聲的經營，這會讓那份成就變得比較不值得嗎——還是只是讓它變得比較誠實？</p>`,
      en:`<p><strong>A priority nearly lost</strong>Darwin’s triumph came within a hair of not being his. Wallace’s 1858 letter drove twenty years of silence into a corner: two men had independently arrived at natural selection, and the latecomer’s paper was already written and delivered. By pure first-come-first-served, priority might well have gone to whoever published first. This was a crisis over the assignment of credit, and the climax of every <strong>status</strong> and reputation theme in the book — the greatness of the theory now had to prove itself on the battlefield of human feeling and propriety.</p>

<p><strong>A gracefully handled affair</strong>The solution Darwin and his allies devised was to have both men’s work presented at once, reading Wallace’s paper alongside Darwin’s earlier sketch. The arrangement preserved Darwin’s priority while giving Wallace his rightful place, sparing everyone an ugly contest over credit. It was neither cold calculation nor pure selflessness, but something in between: a gentleman with a fine sense of proportion, defending his own interest while handling the scene beautifully, decently, in a way all parties could accept.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>A largely benign management of status</strong>We can say it plainly: Darwin was managing his own <strong>reputation</strong>. He cared who thought of it first, how posterity would remember him, and the integrity of the image of the Victorian gentleman-scientist. But to call this management is not to accuse him of hypocrisy. It was a largely benign cultivation of status — he did not climb over others, did not steal their credit, and was in fact quite generous to Wallace at the decisive moment. Everyone plays the reputation game; the difference lies only in how gracefully and cleanly it is played. Darwin played it very well.</p>

<p><strong>Where image and substance converge</strong>Darwin’s eventual near-sainthood rested not on the theory alone but on the credible image he had cultivated for decades: mild, careful, evidence-first, never scoring cheap rhetorical points. Precisely because the messenger was so respectable, the scandalous message became easier to accept. In him, real greatness and the management of image did not undermine each other but converged: a genuinely honest man happened also to understand how to make honesty look credible. This is the highest reputation strategy of all — it need not fake anything, because the foundation is true.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>Even noble achievement travels a strategic track</strong>Darwin’s story yields a conclusion that seems contradictory but is in fact a reconciliation: even humanity’s noblest achievements travel along a strategic track. Admitting this does not diminish the achievement. Love can be both genetic self-interest and heartfelt; conscience can be both functional and sincere; and a great scientific victory can be both a triumph of truth and a well-managed reputation game. These are not either-or choices but two faces of one thing.</p>

<p><strong>See through it, then choose</strong>To see how evolution installed, in Darwin and in each of us, the status drive, the reputation arithmetic, and self-deception is, in the end, not a cause for cynicism but for freedom. When you can recognize the social engine behind your own behavior, you gain a measure of room not to be wholly ruled by it. Darwin’s final triumph lies perhaps not only in having written the Origin, but in showing that a <strong>moral</strong> animal, built by natural selection, can — after seeing through its own design — still bring off something genuinely honest and genuinely great.</p>

<p class="thought-question">🤔 Reflect: If some achievement you most treasure also holds a trace of reputation-management behind it, does that make it less worthy — or only more honest?</p>`
    }
  }
});


Object.assign(CHAPTER_CONTENT, {
  15:{
    num:{zh:`第十五章`,en:`Chapter Fifteen`},
    title:{zh:`達爾文式的犬儒`,en:`Darwinian (and Freudian) Cynicism`},
    epigraph:{
      zh:`揭穿一份高貴情感的自私根源，並不等於把它判了死刑。`,
      en:`To expose the selfish roots of a noble feeling is not to pronounce its death sentence.`
    },
    body:{
      zh:`<p><strong>一個令人不安的結論</strong>讀到這裡，你也許已經感到一陣寒意。如果愛只是基因在照顧自己的拷貝，如果良知只是名聲的管理員，如果連我們最無私的義憤都藏著策略性的算計——那麼，人性裡還剩下什麼是「真」的？似乎達爾文的手術刀劃過每一種美德，底下都露出同一塊自私的肌肉。這種幻滅感有個名字：犬儒（cynicism）。它是演化心理學最容易招來的誤讀。</p>

<p><strong>達爾文與佛洛伊德的家族相似</strong>Wright 指出，這種「揭穿式」的思路，達爾文與 Freud 是同一個家族。Freud 說我們的體面舉止底下潛伏著壓抑的慾望；演化心理學說我們的道德情感底下潛伏著繁殖的利益。兩者都在做同一件事：把表面的高尚翻過來，指出背面的驅力。這種翻轉有巨大的解釋力，也有巨大的腐蝕力——一旦上癮，你會開始懷疑一切善意，把每個擁抱都讀成算計。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>犬儒的邏輯錯在哪</strong>但這裡藏著一個關鍵的推理錯誤。「某種情感是為了 X 目的而演化出來的」，不等於「這種情感其實就是 X」。母親愛孩子的<em>演化原因</em>是基因傳遞，但這不代表母愛<em>就是</em>基因的自私——母親當下體驗到的、為孩子擋在身前的那份愛，是真實的、發自肺腑的、如假包換的。演化是愛的<em>來源</em>，不是愛的<em>本質</em>的替代品。把來源當成本質，是犬儒最大的邏輯滑坡。</p>

<p><strong>近因與遠因的分野</strong>生物學早就區分兩種「為什麼」：遠因（演化上為何有這個機制）與近因（此刻大腦裡實際發生了什麼）。你分享食物給朋友，遠因也許是祖先環境裡的互惠划算；但近因是你此刻真的喜歡他、真的想讓他開心。這兩個「為什麼」都對，而且不衝突。犬儒的錯，是硬把遠因塞進近因的位置，宣稱「你其實只是想回報」——彷彿那份喜歡是假的。它不是假的。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>除魅不等於貶值</strong>知道彩虹是光的折射，彩虹不會因此變得不美。知道愛有演化的機制，愛也不會因此變得不值得。Wright 的警告很清楚：<strong>解釋一件事的起源，從來不是在對它下道德判決。</strong>把「這是自私基因設計的」讀成「所以這一文不值」，是偷渡了一個根本沒被證明的前提。演化學說負責描述世界如何運作，它沒有、也無權替我們決定什麼值得珍惜。</p>

<p><strong>犬儒本身也是一種姿態</strong>更諷刺的是，犬儒往往不是清醒，而是一種偷懶的優越感——用「看穿一切」來免除自己付出真心的責任。真正的清醒不是把善意全部消解掉，而是看清善意的來源後，依然選擇去善良。下一章要問的正是：既然天性如此，我們該拿它怎麼辦？</p>

<p class="thought-question">🤔 思考：當你發現自己某個善舉背後藏著私心，你會因此否定那個善舉，還是能同時承認「私心是真的、善意也是真的」？</p>`,
      en:`<p><strong>An unsettling conclusion</strong>By now you may feel a chill. If love is just genes tending their own copies, if conscience is just a manager of reputation, if even our most selfless indignation hides a strategic calculation—then what in human nature is left that is "real"? Darwin's scalpel seems to cut through every virtue and expose the same slab of selfish muscle beneath. This disillusionment has a name: cynicism. It is the reading that evolutionary psychology invites most easily.</p>

<p><strong>The family resemblance to Freud</strong>Wright notes that this "unmasking" style of thought puts Darwin and Freud in the same family. Freud said repressed desire lurks beneath our respectable conduct; evolutionary psychology says reproductive interest lurks beneath our moral feelings. Both flip the noble surface over to reveal the drive on its underside. That inversion has enormous explanatory power—and enormous corrosive power. Once you are hooked, you begin to doubt all goodwill, reading every embrace as calculation.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>Where the cynic's logic fails</strong>But a key error hides here. "A feeling evolved for purpose X" does not mean "this feeling is really just X." The <em>evolutionary reason</em> a mother loves her child is gene transmission—but that does not make maternal love <em>itself</em> a selfish gene. The love she feels as she throws her body in front of her child is genuine, heartfelt, the real thing. Evolution is the <em>source</em> of love, not a substitute for its <em>nature</em>. Mistaking the source for the essence is the cynic's great slippery slope.</p>

<p><strong>Proximate versus ultimate</strong>Biology long ago split "why" into two: ultimate causes (why the mechanism evolved) and proximate causes (what is actually happening in the brain right now). You share food with a friend; the ultimate cause may be that reciprocity paid off in the ancestral world—but the proximate cause is that you genuinely like him and want to make him happy. Both "whys" are true and they do not conflict. The cynic's error is to shove the ultimate cause into the proximate slot and declare "you only want repayment," as if the liking were fake. It is not fake.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>Disenchantment is not devaluation</strong>Knowing a rainbow is refracted light does not make the rainbow less beautiful. Knowing love has an evolutionary mechanism does not make love less worthwhile. Wright's warning is plain: <strong>to explain the origin of a thing is never to pass moral judgment on it.</strong> Reading "this was designed by selfish genes" as "therefore it is worthless" smuggles in a premise no one has proven. Evolution describes how the world works; it neither does nor may decide for us what deserves to be cherished.</p>

<p><strong>Cynicism is also a posture</strong>More ironic still: cynicism is often not clarity but a lazy sense of superiority—using "seeing through everything" to excuse oneself from the burden of sincerity. Real clarity is not dissolving all goodwill but, having seen where goodwill comes from, choosing to be good anyway. Which sets up the next question: given that our nature is what it is, what should we do about it?</p>

<p class="thought-question">🤔 Reflect: When you catch a selfish motive behind one of your own kind acts, do you cancel the act—or can you hold both truths at once, that the selfishness is real and the kindness is real too?</p>`
    }
  },

  16:{
    num:{zh:`第十六章`,en:`Chapter Sixteen`},
    title:{zh:`演化倫理學`,en:`Evolutionary Ethics`},
    epigraph:{
      zh:`大自然做出來的，從來不等於你該點頭認可的。`,
      en:`What nature has made is never the same as what you ought to endorse.`
    },
    body:{
      zh:`<p><strong>「是」與「應該」之間的鴻溝</strong>上一章擋掉了犬儒，這一章要面對一個更古老的陷阱：從「事情是這樣」直接跳到「事情就該這樣」。哲學家把這道違規動作叫做<strong>自然主義謬誤（naturalistic fallacy）</strong>。演化告訴我們男性有游移的傾向、部落有排外的本能、地位有殘酷的競爭——但「這是天性」這句話，本身推不出「所以這是對的」。天擇不是道德權威，它只是一個沒有目標、不在乎痛苦的盲目過程。</p>

<p><strong>大自然是個糟糕的道德老師</strong>只要看看天擇實際「認可」什麼，就知道不能拿它當倫理範本。它認可殺嬰、認可欺騙、認可強者對弱者的碾壓，只要這些行為能提高基因的傳遞。若「自然的就是好的」，我們得為一長串殘忍背書。所以恰恰相反：演化把某種衝動裝進我們心裡這件事，不是它正當的理由，往往正是我們該對它提高警覺的理由。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>自我認識作為道德工具</strong>那麼演化心理學對倫理學到底有沒有用？Wright 的答案是：有，但不是當作道德的<em>來源</em>，而是當作道德的<em>地圖</em>。當你知道自己被裝了哪些按鈕——知道你會不自覺地偏袒自己人、會替自己的私利編造漂亮理由、會對陌生人的苦難自動調低關注——你才有機會在按鈕被按下的那一刻，認出它、然後選擇不順從。道德的一大半，其實就是<strong>有節制地抵抗天性</strong>。</p>

<p><strong>一種被除魅後仍站得住的效益主義</strong>Wright 傾向一種有節制的效益主義（utilitarianism）：把每個人的苦樂放上同一架天平，而不是讓演化預設的偏袒替我們決定誰的痛苦算數。這正是要對抗天性的地方——天性讓我們對親人、對同類、對有用的人格外在乎，對圈外人的痛苦則自動打折。要把道德圈往外推，靠的不是順著感覺，而是刻意校正那份被演化偏斜過的感覺。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>道德情感被解釋了，卻沒被廢除</strong>有人擔心：一旦知道罪惡感、公平感、義憤都是演化裝置，它們會不會就失效了？不會。知道恐懼是杏仁核的產物，你面對懸崖照樣會怕。道德情感即使被除魅，依然是我們僅有的、把人綁在一起的黏著劑。差別只在於：現在你多了一個選項——可以問「這份義憤是正義，還是只是被冒犯的自尊在偽裝？」而這個提問的能力，本身就是一種道德進步。</p>

<p><strong>知道枷鎖，才能鬆開枷鎖</strong>這一章的核心可以濃縮成一句：<strong>知道天性如何設計你，正是你能夠違反它的前提。</strong>一個不知道自己被偏見驅動的人，只能任偏見擺布；一個看清了驅動來源的人，才握住了抵抗的槓桿。演化沒有給我們道德，但理解演化，可以讓我們更清醒地去做道德的選擇。</p>

<p class="thought-question">🤔 思考：你心裡有沒有某個「我就是這樣的人」的衝動，其實只是天性的預設值——如果你看穿了它的來源，你會選擇繼續順從它，還是校正它？</p>`,
      en:`<p><strong>The gulf between "is" and "ought"</strong>The last chapter fended off cynicism; this one faces an older trap: leaping straight from "things are this way" to "things ought to be this way." Philosophers call that illegal move the <strong>naturalistic fallacy</strong>. Evolution tells us men tend to roam, tribes tend to exclude, status is competed for ruthlessly—but "it is natural" cannot by itself yield "therefore it is right." Natural selection is no moral authority; it is a blind process with no goal and no concern for suffering.</p>

<p><strong>Nature is a terrible moral teacher</strong>Just look at what selection actually "endorses" and you see why it cannot serve as an ethical model. It endorses infanticide, deception, the strong crushing the weak—whenever those raise the odds of gene transmission. If "natural equals good," we would have to sign off on a long list of cruelties. So the reverse holds: that evolution installed an impulse in us is not a reason to trust it, and is often precisely a reason to watch it warily.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>Self-knowledge as a moral tool</strong>Is evolutionary psychology useful to ethics at all, then? Wright's answer: yes—not as the <em>source</em> of morality, but as its <em>map</em>. Once you know which buttons you were built with—that you unconsciously favor your own, that you invent handsome reasons for your self-interest, that you automatically dial down concern for a stranger's suffering—you get a chance, the moment a button is pressed, to recognize it and choose not to obey. A large part of morality just <em>is</em> the disciplined resistance of nature.</p>

<p><strong>A utilitarianism that survives disenchantment</strong>Wright leans toward a tempered utilitarianism: putting everyone's pleasure and pain on the same scale, rather than letting evolution's built-in favoritism decide whose suffering counts. That is exactly where nature must be fought—nature makes us care intensely for kin, for our own kind, for the useful, and quietly discounts the pain of outsiders. Widening the moral circle comes not from following our feelings but from deliberately correcting the feelings evolution has skewed.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>Moral feelings explained, not abolished</strong>Some worry: once we know guilt, fairness, and indignation are evolutionary devices, will they simply stop working? They will not. Knowing fear is a product of the amygdala, you will still feel afraid at a cliff's edge. Disenchanted or not, moral feelings remain the only glue we have for binding people together. The one difference is that you now have an extra option—you can ask, "Is this indignation justice, or just wounded pride in disguise?" And the very capacity to ask that is itself a moral advance.</p>

<p><strong>Know the chains to loosen them</strong>The heart of this chapter compresses into a sentence: <strong>knowing how nature designed you is the precondition for defying it.</strong> A person unaware that prejudice drives him is at prejudice's mercy; a person who has seen the source of the drive holds the lever of resistance. Evolution did not give us morality—but understanding evolution can let us make moral choices with our eyes open.</p>

<p class="thought-question">🤔 Reflect: Is there an impulse you file under "that's just who I am" that is really only nature's default setting—and if you saw through its origin, would you keep obeying it, or correct it?</p>`
    }
  },

  17:{
    num:{zh:`第十七章`,en:`Chapter Seventeen`},
    title:{zh:`歸咎於受害者`,en:`Blaming the Victim`},
    epigraph:{
      zh:`懂了為什麼，不是脫罪的門票，而是加重的責任。`,
      en:`Understanding why is not a ticket to acquittal—it is a heavier duty.`
    },
    body:{
      zh:`<p><strong>決定論的陰影</strong>如果每一個行為都有原因——基因加上環境，一路回推到大爆炸——那還有誰真的「該負責」？這是演化解釋帶來最尖銳的道德焦慮。一旦你能說「他出軌是因為雄性演化出了游移的傾向」，聽起來就像替他準備好了免罪金牌：他也是身不由己，是天性逼的。這種論調，Wright 一點都不買帳。</p>

<p><strong>解釋不是原諒</strong>把一個行為的成因攤開來，跟宣告這個行為無罪，是兩回事。地震有完整的物理成因，我們不會因此說地震「沒錯」；同理，一個男人出軌有演化與心理的成因，這些成因並不把「你不該傷害你的伴侶」這條道德判斷取消掉。演化解釋回答的是「為什麼會這樣」，它從來沒回答、也無權回答「所以這樣可以」。把前者當成後者，就是拿科學當藉口。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>相容論：責任不需要「無因的自由」</strong>Wright 站的是一種務實的<strong>相容論（compatibilism）</strong>立場：就算行為在某種意義上被因果決定，責任的概念依然完好、依然有用。為什麼？因為讚美與譴責本身，就是塑造行為的環境因子。當你譴責一個出軌者，你不是在對一個「本可以自由選擇卻選錯」的靈魂算帳——你是在向所有大腦（包括他的、也包括旁觀者的）輸入一個訊號，調整他們未來的行為機率。責任是社會用來調控行為的工具，它的正當性不依賴形上學的自由意志。</p>

<p><strong>問責恰恰是抵抗天性的機制</strong>這裡有個漂亮的反轉：正因為行為受因果影響，問責才有意義。如果譴責完全改變不了任何人的行為，那譴責才真的白費。事實剛好相反——罪惡感、羞恥、名聲的損失，都是演化裝在我們心裡、用來讓我們對社會回饋敏感的機制。所以當社會說「你要為此負責」，這句話能真正咬進一個人的行為系統裡。理解成因，不是拆掉問責，而是告訴我們問責為什麼有效。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>別把演化解釋當成男人的擋箭牌</strong>Wright 特別點名一個常見的誤用：男性拿「我天生就是要播種」來替出軌、拋家、逃避承諾開脫。這是把描述偷換成許可。是的，演化讓男性傾向多樣性；但同一套演化也給了男性良知、愛與長期依附的能力。天性給了你衝動，也給了你抵抗衝動的裝置——選哪一個，責任在你。用「天性如此」來卸責，等於只認領對自己方便的那一半人性。</p>

<p><strong>理解給了我們槓桿</strong>這一章的教訓正好跟犬儒相反：越懂行為的成因，越沒有理由推卸，反而越有能力改變。<strong>解釋不是原諒；懂了為什麼，才更該負責。</strong>因為理解成因，等於拿到了抵抗它的地圖——而拿到地圖卻仍走向懸崖的人，責任只會更重。</p>

<p class="thought-question">🤔 思考：下一次你想用「我就是這種人／這是人性」來替一個行為開脫時，問問自己——你是在誠實地描述衝動，還是在偷偷替它要一張許可證？</p>`,
      en:`<p><strong>The shadow of determinism</strong>If every action has a cause—genes plus environment, traced all the way back to the Big Bang—who is truly "to blame"? This is the sharpest moral anxiety evolutionary explanation brings. Once you can say "he cheated because males evolved a tendency to roam," it sounds like a get-out-of-jail card is ready for him: he couldn't help it, nature made him do it. Wright does not buy this for a second.</p>

<p><strong>To explain is not to excuse</strong>Laying out the causes of an act and declaring the act innocent are two different things. An earthquake has a complete physical account of its causes; we do not therefore say the earthquake was "right." Likewise, a man's affair has evolutionary and psychological causes, and those causes do not cancel the moral judgment "you should not have hurt your partner." Evolutionary explanation answers "why did this happen"; it never answers, and has no standing to answer, "therefore it is permitted." To treat the first as the second is to use science as an alibi.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>Compatibilism: responsibility needs no "uncaused freedom"</strong>Wright takes a pragmatic <strong>compatibilist</strong> stance: even if behavior is in some sense causally determined, the concept of responsibility remains intact and useful. Why? Because praise and blame are themselves environmental factors that shape behavior. When you condemn a cheater, you are not settling accounts with a soul that "could have chosen freely and chose wrong"—you are feeding a signal into every brain (his, and the onlookers') that adjusts the future probability of their conduct. Responsibility is society's tool for regulating behavior, and its legitimacy does not hinge on metaphysical free will.</p>

<p><strong>Accountability is itself a mechanism for resisting nature</strong>Here is the elegant reversal: it is precisely because behavior is causally influenced that holding people accountable makes sense. If blame changed no one's behavior at all, then blame really would be wasted. The truth is the opposite—guilt, shame, and loss of reputation are mechanisms evolution installed to make us sensitive to social feedback. So when society says "you are responsible for this," the words can actually bite into a person's behavioral system. Understanding causes does not dismantle accountability; it tells us why accountability works.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>Don't turn evolution into a man's shield</strong>Wright singles out a common misuse: men invoking "I was built to spread my seed" to excuse affairs, abandonment, and dodged commitment. This swaps description for permission. Yes, evolution inclined males toward variety; but the same evolution gave males conscience, love, and the capacity for long-term attachment. Nature handed you the impulse and the device for resisting it—which one you follow is your responsibility. Shirking blame with "it's just my nature" claims only the half of human nature that happens to be convenient.</p>

<p><strong>Understanding gives us leverage</strong>This chapter's lesson runs exactly counter to cynicism: the more you understand the causes of behavior, the less excuse you have—and the more power you have to change it. <strong>To explain is not to excuse; understanding why makes you more responsible, not less.</strong> Because grasping the cause is holding the map for resisting it—and someone who has the map yet still walks toward the cliff bears the heavier blame.</p>

<p class="thought-question">🤔 Reflect: Next time you reach for "that's just who I am / it's human nature" to excuse an act, ask yourself—are you honestly describing an impulse, or quietly requesting a permit for it?</p>`
    }
  },

  18:{
    num:{zh:`第十八章`,en:`Chapter Eighteen`},
    title:{zh:`達爾文的宗教`,en:`Darwin Gets Religion`},
    epigraph:{
      zh:`看穿自私的設計，是超越它的第一步。`,
      en:`Seeing through the selfish design is the first step to rising above it.`
    },
    body:{
      zh:`<p><strong>達爾文晚年的信仰</strong>全書用達爾文的一生貫穿，也在他生命的黃昏處收束。年輕時受過神學訓練、原本準備當牧師的達爾文，晚年慢慢滑向<strong>不可知論（agnosticism）</strong>。他沒有高調地反叛上帝，而是溫和地承認：這些終極問題，人的心智恐怕給不出確定的答案。這份不張揚的謙卑，正好是這隻「道德動物」留給我們的姿態——不假裝知道自己不知道的，卻也不因此放棄過一種正派的生活。</p>

<p><strong>當信仰的地基被抽走之後</strong>達爾文自己就示範了一個現代人的處境：如果道德不再由神來保證，如果良知只是演化裝進來的機制，人還能靠什麼站著做個好人？這正是全書最後要接住的問題。Wright 的答案不是回到宗教，也不是墜入虛無，而是一種<strong>世俗的道德修煉</strong>——把倫理生活當成一件需要清醒、需要練習、需要一輩子用功的事。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>自我認識是這場修煉的核心</strong>這場修煉的功夫，全書其實已經教了：認得出自己何時在自欺、何時在偏袒、何時把私利包裝成原則。演化把我們設計成精明的自利者，還貼心地不讓我們自己察覺——所以看清這套設計，本身就是最難也最關鍵的一步。<strong>了解我們如何被設計，才可能克服演化加在我們身上的枷鎖。</strong>一個看不見枷鎖的人永遠戴著它；一個看見枷鎖的人，才第一次有機會鬆手。</p>

<p><strong>慈悲可以因理解而擴大</strong>這份理解帶來一個溫柔的副產品：慈悲。當你明白別人的自私、虛榮、防衛，跟你自己的一樣，都是同一套古老程式跑出來的——不是他們特別壞，而是我們都被同一雙手設計過——你會比較難再站在道德高地上鄙視誰。理解人性的普遍機制，會把苛責軟化成同情。除魅的終點，不是冷漠，反而可以是更寬的體諒。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>比天性造就的自己更道德</strong>於是全書走到它最重要、也最帶希望的轉折：這隻被自私基因設計出來的動物，並不注定被設計困住。因為它偏偏演化出了一樣別的東西——反思自己的能力。它能回頭審視造它的那個過程，能看穿自己的動機，能在衝動與選擇之間插進一道縫隙。就在這道縫隙裡，自由誕生了。<strong>這隻道德動物，可以靠自我認識，變得比天性造就的它更道德。</strong></p>

<p><strong>帶著希望的結尾</strong>這不是要我們背叛人性，而是邀請我們認領人性裡更好的那一半——那份同樣真實的愛、良知與擴張道德圈的能力。演化給了我們自私的引擎，也給了我們看穿引擎的眼睛。用這雙眼睛，我們可以選擇不做被設計好的那個自己，而做一個更寬厚、更清醒、更慈悲的人。這，就是《道德動物》最後留下的、帶著光的答案。</p>

<p class="thought-question">🤔 思考：如果你已經看穿了自己被設計的方式，你願意用這份自我認識，去做一個比天性造就的你「更好一點」的人嗎——哪怕那需要一輩子的練習？</p>`,
      en:`<p><strong>Darwin's late faith</strong>The book runs through Darwin's whole life, and it closes in the dusk of that life. Trained in theology and once bound for the ministry, the aging Darwin drifted gradually toward <strong>agnosticism</strong>. He did not rebel loudly against God; he mildly conceded that these ultimate questions may lie beyond the reach of the human mind to answer with certainty. That unshowy humility is exactly the posture this "moral animal" leaves us—not pretending to know what we do not, yet not, on that account, giving up on living a decent life.</p>

<p><strong>After the foundation is pulled away</strong>Darwin himself models the modern predicament: if morality is no longer guaranteed by God, if conscience is merely a mechanism evolution installed, what can a person still stand on to be good? This is the question the whole book must finally catch. Wright's answer is neither a return to religion nor a plunge into nihilism, but a kind of <strong>secular moral practice</strong>—treating the ethical life as something that demands clarity, demands rehearsal, demands a lifetime of effort.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>Self-knowledge is the core of the practice</strong>The discipline this practice requires the book has already taught: recognizing when you are deceiving yourself, when you are playing favorites, when you dress self-interest as principle. Evolution designed us to be shrewd self-servers—and thoughtfully arranged for us not to notice—so seeing through the design is itself the hardest and most crucial step. <strong>Understanding how we were designed is what makes it possible to overcome the chains evolution laid on us.</strong> A person who cannot see the chains wears them forever; a person who sees them has, for the first time, a chance to let go.</p>

<p><strong>Compassion can widen through understanding</strong>This understanding brings a gentle by-product: compassion. When you grasp that other people's selfishness, vanity, and defensiveness are, like your own, output from the same ancient program—not that they are especially bad, but that we were all shaped by the same hand—it becomes harder to stand on high moral ground and despise anyone. Understanding the universal machinery of human nature softens judgment into sympathy. The end of disenchantment need not be coldness; it can be a wider forbearance.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>More moral than nature made it</strong>So the book arrives at its most important and most hopeful turn: this animal built by selfish genes is not doomed to stay trapped by the design. Because it happened to evolve one further thing—the capacity to reflect on itself. It can look back at the process that made it, see through its own motives, and slip a gap between impulse and choice. In that gap, freedom is born. <strong>This moral animal can, through self-knowledge, become more moral than nature made it.</strong></p>

<p><strong>A hopeful ending</strong>This is not a call to betray human nature but an invitation to claim its better half—the equally real love, conscience, and capacity to widen the moral circle. Evolution gave us a selfish engine and also the eyes to see through the engine. With those eyes, we can choose not to be the self we were designed to be, and instead be someone more generous, more clear-sighted, more compassionate. That is the answer, edged with light, that <em>The Moral Animal</em> finally leaves us.</p>

<p class="thought-question">🤔 Reflect: If you have seen through the way you were designed, are you willing to use that self-knowledge to be someone a little "better" than nature made you—even if it takes a lifetime of practice?</p>`
    }
  }
});


// ==== 附錄：站長書評 ====
Object.assign(CHAPTER_CONTENT, {
  19: {
    num: { zh: '附錄 · 讀者書評', en: 'Appendix · Reader’s Review' },
    title: { zh: '站在達爾文的肩膀上讀人性', en: 'Reading Human Nature on Darwin’s Shoulders' },
    epigraph: { zh: '「人類演化出適合的社會型態，與現今差距太大——這正是現代許多問題的根源。」　— 翰林書僮', en: '“The society we evolved to fit is worlds away from the one we live in — the root of many modern ills.”　— Kun Han Le' },
    body: {
      zh: `
<p><em>這一章是本站站長翰林書僮（Kun Han Le）自己於 2019 年寫下的讀後書評，以下為忠實摘要，保留他的重點與提醒。</em></p>
<p>站長把《道德動物》定位為「能改變你對人性看法」的演化心理學經典。他最欣賞的，是萊特用一個第一人稱的思想實驗帶讀者入門——<strong>「假如你是上帝，要設計一個物種」</strong>，你會怎麼安排牠的慾望與情感？從這個視角，愛情、婚姻、家庭、道德的種種安排，忽然都有了冷靜的解釋。</p>
<div class="section-break">＊ ＊ ＊</div>
<p><strong>他抓出的幾條主線。</strong>其一是<strong>卵子的珍貴與兩性差異</strong>：男性一年可繁衍數百次、女性最多一次，這道不對稱造就了男性傾向主動與隨便、女性傾向矜持與選擇。其二是<strong>承諾與自我欺騙</strong>——他特別記下那句「最高明的騙術是連自己都騙了」：演化讓相戀的雙方都深信彼此的承諾，即使激情其實會迅速消退。</p>
<p>其三是他覆述得最清楚的<strong>一夫一妻制的複雜性</strong>：它並非單純對男性有利，而是——高魅力男性獲利最大、高魅力女性利益受損、普通女性略得好處、底層男性受傷最重。其四是<strong>出軌容忍度的不對稱</strong>：男性更難忍受肉體出軌（怕替別人養基因），女性更難忍受精神出軌（怕失去資源承諾）。</p>
<div class="section-break">＊ ＊ ＊</div>
<p><strong>他最看重的那句話。</strong>站長反覆強調全書的樂觀底色：<strong>唯有真正理解人類如何被設計，我們才有可能克服演化加在身上的枷鎖。</strong>他也點出書中一個關鍵的現代性診斷——「人類演化出適合的社會型態，與現今差距太大」，這種<strong>錯配</strong>正是許多當代問題的根源。至於「人總愛自欺欺人」，他讀出的不是犬儒，而是「這其實是自然選擇設計我們的一種巧思」。</p>
<p><strong>他的提醒。</strong>他老實說這本書「難讀」，卻能提供對人性最深一層的認識；而理解不是為了脫罪，是為了克服劣根性。這正呼應了全書第十七章的立場：解釋一個行為，從來不是原諒它。</p>
<p class="thought-question">🤔 思考：用站長的提醒檢查自己——你有沒有把「這是天性」拿來當某個行為的藉口？如果理解天性的目的是「克服」而不是「投降」，那你最想先克服哪一項？</p>
`,
      en: `
<p><em>This chapter is the site owner Kun Han Le’s own review of the book, written in 2019. What follows is a faithful condensation, keeping his points and warnings.</em></p>
<p>Kun Han Le frames The Moral Animal as a classic of evolutionary psychology that “can change how you see human nature.” What he most admires is the first-person thought experiment Wright uses to draw the reader in — <strong>“suppose you were God, designing a species”</strong>: how would you arrange its desires and emotions? From that vantage, the whole architecture of love, marriage, family, and morality suddenly has a cool explanation.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>The threads he pulls out.</strong> First, <strong>the costliness of eggs and the difference between the sexes</strong>: a man can father hundreds of children in a year, a woman at most one; this asymmetry makes men lean toward the assertive and the indiscriminate, women toward the reserved and the selective. Second, <strong>commitment and self-deception</strong> — he especially noted the line that “the cleverest deception is the one that fools you first”: evolution has both lovers sincerely believe each other’s promises, even though passion, in fact, fades fast.</p>
<p>Third, the point he restates most clearly — <strong>the complexity of monogamy</strong>: it is not simply good for men, but rather — high-status men gain most, high-status women lose out, ordinary women gain a little, and low-status men are hurt worst. Fourth, <strong>the asymmetry of tolerance for infidelity</strong>: men find physical betrayal harder to bear (fearing they will raise another’s genes), women find emotional betrayal harder (fearing the loss of committed resources).</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>The line he prized most.</strong> He returns again and again to the book’s optimistic undertone: <strong>only by truly understanding how we are designed can we hope to overcome the shackles evolution placed upon us.</strong> He also flags a key diagnosis of modernity — “the society we evolved to fit is worlds away from the one we live in” — and it is this <strong>mismatch</strong> that lies at the root of many contemporary ills. As for “people love to deceive themselves,” what he read there was not cynicism but that “this is one of natural selection’s clever tricks in designing us.”</p>
<p><strong>His warning.</strong> He admits the book is “hard going,” yet says it offers the deepest layer of insight into human nature; and that understanding is not for excusing ourselves, but for overcoming our baser tendencies. This echoes exactly the stance of Chapter 17: to explain a behavior is never to excuse it.</p>
<p class="thought-question">🤔 Reflect: Test yourself against his warning — have you ever used “it’s human nature” as an excuse for some behavior? If the point of understanding our nature is to overcome it rather than surrender to it, which instinct would you most want to overcome first?</p>
`
    }
  }
});

