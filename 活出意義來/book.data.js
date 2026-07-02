// ============================================================
//  活出意義來（Man's Search for Meaning）· 沉浸式閱讀資料（中英雙語）
//  作者 Viktor Frankl 1997 年歿、仍有版權：各節正文為原創精華重述（非原著文字）；金句短引。
//  題材莊重（納粹集中營），以據實、不渲染的筆調處理。文字欄位多為 { zh, en }。
//  非文學框架：人物譜→核心概念、時代軸→弗蘭克生平。附錄為本站主人翰林書僮的親筆書評。
// ============================================================

const BOOK = {
  slug: 'meaning',
  langs: ['zh', 'en'],
  title: { zh: '活出意義來', en: "Man's Search for Meaning" },
  author: 'Viktor E. Frankl',
  theme: {
    'bg-primary': '#16171b', 'bg-secondary': '#1d1f24', 'bg-card': '#24262c', 'bg-elevated': '#2d3038',
    'text-primary': '#e8e3d7', 'text-secondary': '#b0a99b', 'text-muted': '#837c70',
    'accent': '#d6a95c', 'accent-light': '#ecc888', 'accent-glow': 'rgba(214,169,92,0.26)',
    'rose': '#a86b62', 'jade': '#6f8a72', 'blue': '#5f7f96', 'gold': '#d6a95c',
    'border': 'rgba(214,169,92,0.16)',
    atmosphere: { fall: 10, streak: 0, fallRadius: '50%' },
    dayMode: { 'bg-primary': '#f2ece0', 'bg-secondary': '#e9e1d2', 'bg-card': '#fbf7ee', 'bg-elevated': '#f3ecdf', 'text-primary': '#2b271e', 'text-secondary': '#524b3d', 'text-muted': '#867d6c', 'border': 'rgba(150,115,55,0.22)' }
  },
  cover: {
    seal: '意',
    subtitle: { zh: '從集中營到意義治療', en: 'From the Camps to Logotherapy' },
    desc: {
      zh: '一位精神科醫師，被關進了納粹集中營。<br>當一切——財物、姓名、親人、自由——都被剝奪之後，<br>他發現人還剩下最後一樣東西：在任何境遇中，選擇自己態度的自由。<br>這是一部關於苦難、意義，以及如何對生命說「是」的書。',
      en: 'A psychiatrist is imprisoned in the Nazi concentration camps.<br>When everything — possessions, name, loved ones, freedom — has been stripped away, he discovers that one thing remains: the freedom, in any circumstance, to choose one’s own attitude.<br>This is a book about suffering, meaning, and how to say "yes" to life.'
    }
  },
  musicPrompt: { zh: '在沉靜中閱讀這本關於意義的書，<br>是否播放一段背景音樂？', en: 'To read this book on meaning in stillness,<br>play some background music?' },
  intro: {
    subtitle: { zh: '在閱讀之前，先了解這本書的來龍去脈', en: 'Get your bearings before you read' },
    author: { name: { zh: '維克多·弗蘭克　Viktor E. Frankl', en: 'Viktor E. Frankl' }, portrait: '弗',
      years: { zh: '1905 — 1997 · 維也納 · 精神醫學家、意義治療創始人', en: '1905 — 1997 · Vienna · psychiatrist, founder of logotherapy' },
      bio: { zh: '奧地利精神醫學家、神經學家，意義治療（Logotherapy）的創始人。第二次世界大戰期間，身為猶太人的他與家人被關進納粹集中營，父母、兄長與妻子先後罹難，他歷經奧斯威辛等營、奇蹟生還。戰後他僅用九天口述寫成本書，把親身經歷與他的心理學理論結合起來。本書後來成為全球最具影響力的著作之一，感動了數千萬讀者。',
        en: 'An Austrian psychiatrist and neurologist, founder of logotherapy. During the Second World War he and his family, being Jewish, were imprisoned in the Nazi camps; his parents, brother, and wife all perished, while he survived Auschwitz and other camps. After the war he dictated this book in just nine days, fusing his own experience with his psychology. It became one of the most influential books in the world, moving tens of millions of readers.' } },
    cards: [
      { icon: '🕯️', title: { zh: '一句話核心', en: 'The core, in one line' }, text: { zh: '就算苦難不可避免、一切都被剝奪，人仍保有最後、也最根本的自由——選擇自己面對境遇的態度。這，就是意義的所在。', en: 'Even when suffering is unavoidable and all is stripped away, one freedom remains — the last and most fundamental: to choose one’s attitude toward one’s circumstances. That is where meaning lives.' } },
      { icon: '🧭', title: { zh: '全書骨架', en: 'The architecture' }, text: { zh: '兩部＋一篇後記：第一部是集中營的親歷回憶（囚犯心理的三個階段）；第二部是「意義治療」理論；後記〈悲劇性的樂觀〉談如何在痛苦、罪咎與死亡前仍對生命說「是」。', en: 'Two parts plus a postscript: Part One is the camp memoir (the three psychological phases of a prisoner); Part Two lays out "logotherapy"; the postscript, "The Case for a Tragic Optimism," asks how to say "yes" to life in the face of pain, guilt, and death.' } },
      { icon: '💡', title: { zh: '核心主張', en: 'The central claim' }, text: { zh: '人最根本的動力不是追求快樂或權力，而是尋找「意義」。意義可經由三條途徑獲得：創造與工作、體驗與愛，以及——面對不可改變之苦難時所採取的態度。', en: 'The most fundamental human drive is not the pursuit of pleasure or power, but the search for meaning. Meaning can be found on three paths: creative work, experience and love, and — the attitude one takes toward unavoidable suffering.' } },
      { icon: '🎯', title: { zh: '閱讀建議', en: 'How to read it' }, text: { zh: '先看「概念譜」認識意義的意志、三種途徑與態度的自由，再對照「生平軸」理解弗蘭克的經歷。讀第一部時記住：他要談的不是苦難本身，而是人在苦難中如何選擇。', en: 'Start with the Concept map (the will to meaning, the three paths, the freedom of attitude), then use the Timeline for Frankl’s life. Reading Part One, remember: his subject is not suffering itself, but how a person chooses within it.' } }
    ],
    guide: [
      { h: { zh: '先抓住那句核心', en: 'Grasp the one core line' }, p: { zh: '到「概念譜」理解全書的核心：一切都能被剝奪，唯獨「選擇態度的自由」不能。這是理解整本書的鑰匙。', en: 'In the Concept map, get the book’s core: everything can be taken, except the freedom to choose your attitude. That is the key to the whole book.' } },
      { h: { zh: '對照生平軸閱讀', en: 'Read against the timeline' }, p: { zh: '打開「生平軸」，把弗蘭克的一生與集中營經歷放進時間線，你會更懂他為何有資格談苦難與意義。', en: 'Open the Timeline and set Frankl’s life and camp years on it; you will better understand why he has the standing to speak of suffering and meaning.' } },
      { h: { zh: '逐節深入', en: 'Go section by section' }, p: { zh: '第一部像回憶、第二部像講理。前者留意囚犯心理的三階段，後者抓住「意義的意志」「三種途徑」「存在的空虛」。', en: 'Part One reads like memoir, Part Two like argument. In the first, note the three phases of prisoner psychology; in the second, grasp the will to meaning, the three paths, and the existential vacuum.' } },
      { h: { zh: '從主題回看全局', en: 'Zoom out with the themes' }, p: { zh: '讀完到「主題」模組，把散落的洞見收攏成六條主線，看見全書的論證弧線。', en: 'Afterwards, use the Themes to gather the scattered insights into six threads and see the whole arc.' } },
      { h: { zh: '把它用回自己身上', en: 'Turn it on yourself' }, p: { zh: '在「思考題」與「札記」裡，試著問自己：此刻生命正向我要求什麼？我能在不可改變的處境中，選擇怎樣的態度？', en: 'In the Reflection prompts and Notes, ask yourself: what is life asking of me right now? What attitude can I choose in a situation I cannot change?' } }
    ]
  },
  labels: {
    nav: { characters: { zh: '概念譜', en: 'Concepts' }, timeline: { zh: '生平軸', en: 'Timeline' } },
    headers: { characters: { zh: '核心概念', en: 'Core Concepts' }, timeline: { zh: '弗蘭克與本書', en: 'Frankl and the Book' } },
    subheads: { characters: { zh: '點擊概念卡或關係圖，理解意義治療的核心', en: 'Click a concept card or a node to grasp the heart of logotherapy' }, timeline: { zh: '一位精神科醫師走過集中營、寫成一本書', en: 'A psychiatrist walked through the camps and wrote a book' } },
    timelineTypes: { history: { zh: '生平／歷史', en: 'Life / History' }, novel: { zh: '書中對應', en: 'In the book' }, character: { zh: '關鍵時刻', en: 'Turning point' } },
    charDetail: { intro: { zh: '概念說明', en: 'What it is' }, analysis: { zh: '深入解讀', en: 'Deeper reading' }, related: { zh: '相關概念', en: 'Related concepts' }, tags: { zh: '關鍵標籤', en: 'Tags' }, empty: '—' },
    legend: { lead: { zh: '核心', en: 'Core' }, major: { zh: '重要概念', en: 'Key concept' }, minor: { zh: '次要概念', en: 'Secondary' }, edge: { zh: '概念關聯', en: 'Concept link' } }
  },
  families: [ { id: 'core', label: { zh: '核心洞見', en: 'Core Insights' } }, { id: 'sources', label: { zh: '意義的途徑', en: 'Paths to Meaning' } }, { id: 'therapy', label: { zh: '意義治療', en: 'Logotherapy' } } ],
  graph: {
    title: { zh: '— 意 義 · 態 度 · 三 種 途 徑 —', en: '— Meaning · Attitude · Three Paths —' },
    nodes: [
      { id: 'frankl', label: { zh: '弗蘭克', en: 'Frankl' }, x: 160, y: 110, tier: 'lead', color: '#d6a95c' },
      { id: 'attitude', label: { zh: '態度的自由', en: 'Freedom of Attitude' }, x: 410, y: 105, tier: 'lead', color: '#d6a95c' },
      { id: 'willtomeaning', label: { zh: '意義的意志', en: 'Will to Meaning' }, x: 650, y: 120, tier: 'major', color: '#ecc888' },
      { id: 'meaning3', label: { zh: '三種途徑', en: 'Three Paths' }, x: 300, y: 250, tier: 'major', color: '#6f8a72' },
      { id: 'logotherapy', label: { zh: '意義治療', en: 'Logotherapy' }, x: 625, y: 255, tier: 'major', color: '#5f7f96' },
      { id: 'tragicoptimism', label: { zh: '悲劇性的樂觀', en: 'Tragic Optimism' }, x: 140, y: 300, tier: 'major', color: '#d6a95c' },
      { id: 'work', label: { zh: '創造與工作', en: 'Work' }, x: 205, y: 380, tier: 'minor', color: '#6f8a72' },
      { id: 'love', label: { zh: '愛與體驗', en: 'Love' }, x: 320, y: 420, tier: 'minor', color: '#6f8a72' },
      { id: 'suffering', label: { zh: '苦難的態度', en: 'Suffering' }, x: 435, y: 380, tier: 'minor', color: '#6f8a72' },
      { id: 'supermeaning', label: { zh: '超級意義', en: 'Super-Meaning' }, x: 700, y: 195, tier: 'minor', color: '#5f7f96' },
      { id: 'vacuum', label: { zh: '存在的空虛', en: 'Existential Vacuum' }, x: 600, y: 375, tier: 'minor', color: '#5f7f96' },
      { id: 'paradoxical', label: { zh: '矛盾意向法', en: 'Paradoxical Intent' }, x: 715, y: 330, tier: 'minor', color: '#5f7f96' }
    ],
    edges: [
      { from: 'frankl', to: 'attitude', kind: 'family' },
      { from: 'attitude', to: 'meaning3', kind: 'family' },
      { from: 'attitude', to: 'willtomeaning', kind: 'family' },
      { from: 'meaning3', to: 'work', kind: 'family' },
      { from: 'meaning3', to: 'love', kind: 'family' },
      { from: 'meaning3', to: 'suffering', kind: 'family' },
      { from: 'willtomeaning', to: 'logotherapy', kind: 'family' },
      { from: 'logotherapy', to: 'vacuum', kind: 'family' },
      { from: 'logotherapy', to: 'paradoxical', kind: 'family' },
      { from: 'logotherapy', to: 'supermeaning', kind: 'family' },
      { from: 'suffering', to: 'tragicoptimism', kind: 'family' },
      { from: 'attitude', to: 'tragicoptimism', kind: 'love' }
    ]
  },
  footer: { quote: { zh: '「人所擁有的一切都可以被剝奪，唯獨不能剝奪的，是在任何境遇中選擇自身態度的自由。」', en: '“Everything can be taken from a person but one thing: the freedom to choose one’s attitude in any given set of circumstances.”' }, tagline: { zh: '活出意義來 · 沉浸式閱讀 · 一部關於苦難與意義的書', en: "Man's Search for Meaning · Immersive Reading · a book on suffering and meaning" } }
};

const CHAPTERS = [
  { id: 1,  group: { zh: '卷一 · 在集中營', en: 'Part One · In the Camp' }, title: { zh: '被送進集中營', en: 'Entering the Camp' }, reflectQ: { zh: '當一個人被剝奪了財物、姓名、乃至親人，只剩「赤裸的存在」，他還剩下什麼？', en: 'When a person is stripped of possessions, name, even loved ones, and only "naked existence" remains, what is left?' } },
  { id: 2,  group: { zh: '卷一 · 在集中營', en: 'Part One · In the Camp' }, title: { zh: '第一階段：收容的震撼', en: 'The First Phase: The Shock of Admission' }, reflectQ: { zh: '面對突如其來、無從理解的殘酷，心智的第一個反應是什麼？「緩刑妄想」為何是一種本能的自我保護？', en: 'Facing sudden, senseless cruelty, what is the mind’s first response? Why is the "delusion of reprieve" an instinctive self-protection?' } },
  { id: 3,  group: { zh: '卷一 · 在集中營', en: 'Part One · In the Camp' }, title: { zh: '第二階段：冷漠與麻木', en: 'The Second Phase: Apathy' }, reflectQ: { zh: '當痛苦無從改變，情感的麻木是一種軟弱，還是一種必要的自我保護？', en: 'When pain cannot be changed, is emotional numbness a weakness, or a necessary self-protection?' } },
  { id: 4,  group: { zh: '卷一 · 在集中營', en: 'Part One · In the Camp' }, title: { zh: '在飢寒中，愛與內在生活', en: 'Amid Hunger and Cold — Love and the Inner Life' }, reflectQ: { zh: '在最極端的匱乏裡，弗蘭克靠著在心中與妻子對話撐了下來。這說明「愛」與「內在生活」有什麼力量？', en: 'In utter deprivation, Frankl held on by conversing with his wife in his mind. What does this reveal about the power of love and the inner life?' } },
  { id: 5,  group: { zh: '卷一 · 在集中營', en: 'Part One · In the Camp' }, title: { zh: '人性最後的自由', en: 'The Last of the Human Freedoms' }, reflectQ: { zh: '有人把最後一塊麵包讓給更虛弱的人。這種在絕境中仍選擇善良的自由，為何是全書的核心？', en: 'Some gave their last piece of bread to the weaker. Why is this freedom — to choose goodness even in the abyss — the heart of the book?' } },
  { id: 6,  group: { zh: '卷一 · 在集中營', en: 'Part One · In the Camp' }, title: { zh: '第三階段：獲釋之後', en: 'The Third Phase: After Liberation' }, reflectQ: { zh: '為什麼「重獲自由」不是故事的圓滿結局，反而可能帶來另一種心理危機？', en: 'Why is "regaining freedom" not the happy ending, but possibly the onset of another psychological crisis?' } },
  { id: 7,  group: { zh: '卷二 · 意義治療', en: 'Part Two · Logotherapy' }, title: { zh: '意義的意志', en: 'The Will to Meaning' }, reflectQ: { zh: '弗蘭克說，人最根本的動力不是追求快樂或權力，而是尋找意義。你認同嗎？意義是「發現」的，還是「發明」的？', en: 'Frankl says our deepest drive is not pleasure or power but the search for meaning. Do you agree? Is meaning discovered, or invented?' } },
  { id: 8,  group: { zh: '卷二 · 意義治療', en: 'Part Two · Logotherapy' }, title: { zh: '存在的空虛', en: 'The Existential Vacuum' }, reflectQ: { zh: '現代人衣食無缺，卻常感空虛、無聊。這種「存在的空虛」，你在自己或身邊人身上見過嗎？', en: 'Modern people lack nothing yet often feel empty and bored. Have you seen this "existential vacuum" in yourself or others?' } },
  { id: 9,  group: { zh: '卷二 · 意義治療', en: 'Part Two · Logotherapy' }, title: { zh: '意義的三種途徑', en: 'The Three Paths to Meaning' }, reflectQ: { zh: '創造、愛、與面對苦難的態度——這三條路裡，此刻的你，主要透過哪一條在尋找意義？', en: 'Work, love, and the attitude toward suffering — through which of these three paths are you mainly finding meaning right now?' } },
  { id: 10, group: { zh: '卷二 · 意義治療', en: 'Part Two · Logotherapy' }, title: { zh: '苦難的意義', en: 'The Meaning of Suffering' }, reflectQ: { zh: '弗蘭克強調「不可避免」的苦難才談得上意義。如何分辨「該承受的苦」與「該去除的苦」？', en: 'Frankl stresses that only unavoidable suffering can carry meaning. How do you tell "suffering to bear" from "suffering to remove"?' } },
  { id: 11, group: { zh: '卷二 · 意義治療', en: 'Part Two · Logotherapy' }, title: { zh: '超級意義與生命的短暫', en: 'Super-Meaning and the Transitoriness of Life' }, reflectQ: { zh: '弗蘭克說「過去」才是最確定的存在——凡曾經活過、愛過的都被永遠保存。這個看法如何改變你對「失去」的感受？', en: 'Frankl says the past is the surest kind of being — all we have lived and loved is stored forever. How does that change how you feel about "loss"?' } },
  { id: 12, group: { zh: '卷二 · 意義治療', en: 'Part Two · Logotherapy' }, title: { zh: '矛盾意向法', en: 'Paradoxical Intention' }, reflectQ: { zh: '越怕失眠越睡不著、越怕出糗越發抖。「刻意去希望自己最怕的事發生」為何反而能打破焦慮的循環？', en: 'The more you fear insomnia the less you sleep. Why does "deliberately wishing for the very thing you fear" break the cycle of anxiety?' } },
  { id: 13, group: { zh: '卷三 · 悲劇性的樂觀', en: 'Part Three · Tragic Optimism' }, title: { zh: '悲劇性的樂觀', en: 'The Case for a Tragic Optimism' }, reflectQ: { zh: '面對痛苦、罪咎與死亡這「悲劇三角」，仍然對生命說「是」——這在你眼中是天真，還是最深的勇氣？', en: 'Saying "yes" to life before the tragic triad of pain, guilt, and death — is that naivety, or the deepest courage?' } },
  { id: 14, group: { zh: '附錄 · 讀者書評', en: 'Appendix · A Reader’s Review' }, title: { zh: '選擇面對苦難的態度，是一個人的終極自由', en: 'Choosing Your Attitude Toward Suffering Is the Ultimate Freedom' }, reflectQ: { zh: '翰林書僮把弗蘭克的洞見用到日常——塞車、下雨、遇到無禮的人。下一次被激怒時，你能不能想起：你仍有選擇態度的自由？', en: 'Kun Han Le applies Frankl to daily life — traffic, rain, rude people. Next time you are provoked, can you remember you still have the freedom to choose your attitude?' } }
];

const CHARACTERS = [
  { id: 'frankl', name: { zh: '維克多·弗蘭克', en: 'Viktor Frankl' }, family: 'core', role: { zh: '作者 · 精神醫學家 · 倖存者', en: 'author · psychiatrist · survivor' }, icon: '🕯️', color: '#d6a95c',
    desc: { zh: '意義治療的創始人。他不是從書齋、而是從奧斯威辛的深淵裡，親身驗證了自己的理論。', en: 'The founder of logotherapy. He tested his theory not from a study but from the abyss of Auschwitz, in his own flesh.' },
    analysis: { zh: '弗蘭克的特別之處，在於他同時是「觀察者」與「受難者」：身為精神科醫師，他在集中營裡冷靜地分析囚犯（包括自己）的心理；身為囚徒，他失去了幾乎所有至親。正因如此，當他說「人可以在苦難中選擇態度」，那不是理論，而是他用生命換來的見證——這也是本書無可取代的重量。', en: 'Frankl is unusual in being at once observer and sufferer: as a psychiatrist he coolly analyzed the minds of prisoners (including himself) in the camps; as a prisoner he lost almost everyone he loved. So when he says a person can choose an attitude within suffering, it is not theory but a witness paid for with his life — and that is the book’s irreplaceable weight.' },
    tags: [ { zh: '意義治療', en: 'logotherapy' }, { zh: '倖存者', en: 'survivor' }, { zh: '見證', en: 'witness' } ], related: ['attitude', 'logotherapy'] },
  { id: 'attitude', name: { zh: '態度的自由', en: 'Freedom of Attitude' }, family: 'core', role: { zh: '本書的核心洞見', en: 'the book’s central insight' }, icon: '🗝️', color: '#d6a95c',
    desc: { zh: '人所擁有的一切都可能被奪走，唯獨不能被剝奪的，是「在任何境遇中，選擇自己態度」的自由。', en: 'Everything one has can be taken away except the freedom to choose one’s attitude in any circumstance.' },
    analysis: { zh: '這是全書的心臟。弗蘭克在集中營裡看見：同樣的絕境，有人淪為只求活命的行屍，有人卻把最後一塊麵包讓給病弱者。環境無法決定一個人成為什麼——在刺激與反應之間，人始終保有選擇的空間。這份「最後的自由」，正是人之所以為人、也是意義得以存在的根基。（卷一）', en: 'This is the book’s heart. In the camps Frankl saw that in the same abyss, some became walking corpses bent only on survival, while others gave their last bread to the sick. Circumstance cannot decide what a person becomes — between stimulus and response there is always room to choose. This "last freedom" is what makes us human, and the ground on which meaning stands. (Part One)' },
    tags: [ { zh: '最後的自由', en: 'the last freedom' }, { zh: '選擇', en: 'choice' }, { zh: '尊嚴', en: 'dignity' } ], related: ['frankl', 'suffering', 'tragicoptimism'] },
  { id: 'willtomeaning', name: { zh: '意義的意志', en: 'The Will to Meaning' }, family: 'core', role: { zh: '人最根本的動力', en: 'the deepest human drive' }, icon: '🧭', color: '#ecc888',
    desc: { zh: '弗蘭克主張：驅動人的根本力量，不是佛洛伊德的「快樂」，也不是阿德勒的「權力」，而是尋找意義。', en: 'Frankl argues the fundamental force driving us is neither Freud’s pleasure nor Adler’s power, but the search for meaning.' },
    analysis: { zh: '這是意義治療與傳統精神分析分道揚鑣之處。人真正需要的不是「無憂無慮」，而是「值得為之努力的目標」。當這股「意義的意志」受挫，人就陷入存在的空虛。而意義不是自己憑空發明的，而是要在世界中被「發現」——是生命向你提問，而不是你向生命索求。（卷二）', en: 'This is where logotherapy parts from classical psychoanalysis. What we truly need is not a carefree life but a goal worth striving for. When this "will to meaning" is frustrated, we fall into the existential vacuum. And meaning is not invented out of nothing but discovered in the world — it is life that questions us, not we who demand of life. (Part Two)' },
    tags: [ { zh: '動力', en: 'drive' }, { zh: '意義', en: 'meaning' }, { zh: '對比佛洛伊德/阿德勒', en: 'vs Freud / Adler' } ], related: ['logotherapy', 'meaning3'] },
  { id: 'meaning3', name: { zh: '意義的三種途徑', en: 'The Three Paths to Meaning' }, family: 'sources', role: { zh: '意義從哪裡來', en: 'where meaning comes from' }, icon: '🌱', color: '#6f8a72',
    desc: { zh: '人可經由三條途徑找到意義：①創造與工作 ②體驗與愛 ③面對不可改變之苦難時所採取的態度。', en: 'Meaning can be found on three paths: (1) creative work, (2) experience and love, and (3) the attitude one takes toward unavoidable suffering.' },
    analysis: { zh: '意義治療最實用的地圖。前兩條途徑相對直覺——做一件有價值的事、去愛與體驗真善美；而第三條最深刻：當命運已無法改變（絕症、喪親、集中營），人依然能透過「怎麼承受」來實現意義。這條途徑把「最壞的處境」也納入了意義的版圖。（卷二）', en: 'Logotherapy’s most practical map. The first two paths are fairly intuitive — do something of value, love and experience the good and beautiful; the third is the most profound: when fate can no longer be changed (terminal illness, bereavement, a camp), a person can still realize meaning through how they bear it. This path brings even the worst circumstances into the territory of meaning. (Part Two)' },
    tags: [ { zh: '創造', en: 'creating' }, { zh: '愛', en: 'love' }, { zh: '苦難的態度', en: 'attitude to suffering' } ], related: ['work', 'love', 'suffering'] },
  { id: 'work', name: { zh: '創造與工作', en: 'Creative Work' }, family: 'sources', role: { zh: '第一條途徑', en: 'the first path' }, icon: '🔨', color: '#6f8a72',
    desc: { zh: '透過「做一件事」、成就一份志業或創作，把某種價值帶進世界，從而獲得意義。', en: 'Finding meaning by doing something — achieving a vocation or a creation that brings some value into the world.' },
    analysis: { zh: '最為人熟知的一條路：意義來自我們給予世界的東西——一份工作、一件作品、一項使命。但弗蘭克提醒，重點不在成就的大小，而在那件事對「這個獨一無二的你、在此刻」所要求的責任。', en: 'The most familiar path: meaning comes from what we give the world — a job, a work, a mission. But Frankl reminds us it is not the size of the achievement that matters, but the responsibility a task asks of this unique you, at this moment.' },
    tags: [ { zh: '志業', en: 'vocation' }, { zh: '創作', en: 'creation' }, { zh: '責任', en: 'responsibility' } ], related: ['meaning3'] },
  { id: 'love', name: { zh: '愛與體驗', en: 'Love and Experience' }, family: 'sources', role: { zh: '第二條途徑', en: 'the second path' }, icon: '🤍', color: '#6f8a72',
    desc: { zh: '透過體驗真善美、以及愛一個人，領受世界給予我們的東西，從而獲得意義。', en: 'Finding meaning by experiencing goodness, truth, and beauty, and by loving another — receiving what the world gives us.' },
    analysis: { zh: '弗蘭克在集中營最黑暗的清晨，靠著在心中凝視妻子的面容而感到幸福——即使當時他並不知道她是否還活著。他由此體悟：愛是人類終極而最高的渴望；愛讓我們看見另一個人「應當成為」的樣子。意義，也能在純然的體驗與愛裡被領受。（卷一、卷二）', en: 'On the darkest morning in the camp, Frankl felt joy by holding his wife’s face in his mind — though he did not then know whether she was still alive. From this he learned that love is the ultimate and highest of human longings; love lets us see what another person can become. Meaning, too, can be received in pure experience and love. (Parts One & Two)' },
    tags: [ { zh: '愛', en: 'love' }, { zh: '體驗', en: 'experience' }, { zh: '真善美', en: 'the good & beautiful' } ], related: ['meaning3'] },
  { id: 'suffering', name: { zh: '苦難的態度', en: 'The Attitude to Suffering' }, family: 'sources', role: { zh: '第三條途徑（最深刻）', en: 'the third path (the deepest)' }, icon: '⛰️', color: '#6f8a72',
    desc: { zh: '當苦難不可避免時，人「如何承受」它，本身就能成為意義的最後泉源。', en: 'When suffering is unavoidable, how one bears it can itself become the last source of meaning.' },
    analysis: { zh: '這是意義治療最動人、也最容易被誤解的一條。弗蘭克說「痛苦一旦找到意義，就不再是痛苦」，但他也再三強調：若苦難是可以避免的，去除它才是明智——他絕非歌頌受苦、更不鼓勵自找苦吃。只有面對真正無法改變的命運，承受的姿態才成為一種成就。（卷二）', en: 'The most moving — and most misread — of the paths. Frankl says suffering ceases to be suffering the moment it finds a meaning, yet he insists again and again: if suffering is avoidable, the wise thing is to remove it. He does not glorify suffering, nor tell anyone to seek it. Only before a fate that truly cannot be changed does the manner of bearing it become an achievement. (Part Two)' },
    tags: [ { zh: '不可避免', en: 'unavoidable' }, { zh: '承受', en: 'bearing' }, { zh: '不歌頌受苦', en: 'not glorifying suffering' } ], related: ['meaning3', 'attitude', 'tragicoptimism'] },
  { id: 'logotherapy', name: { zh: '意義治療', en: 'Logotherapy' }, family: 'therapy', role: { zh: '弗蘭克的心理學派', en: 'Frankl’s school of psychology' }, icon: '🩺', color: '#5f7f96',
    desc: { zh: 'Logotherapy，「第三維也納心理治療學派」。核心是協助人找到生命的意義，作為療癒的力量。', en: 'Logotherapy, the "Third Viennese School of Psychotherapy." Its core is helping people find life’s meaning as a healing force.' },
    analysis: { zh: '相對於佛洛伊德著眼過去的慾望、阿德勒著眼權力，意義治療把目光轉向「未來」與「意義」。它認為許多心理困擾源於意義的失落（存在的空虛），治療的關鍵不是消除症狀，而是幫助人重新看見「生命正向他要求什麼」。矛盾意向法、去反思都是它的具體技術。（卷二）', en: 'Against Freud’s focus on past desire and Adler’s on power, logotherapy turns toward the future and toward meaning. It holds that many disorders arise from a loss of meaning (the existential vacuum); the key to therapy is not removing symptoms but helping a person see again what life is asking of them. Paradoxical intention and dereflection are among its concrete techniques. (Part Two)' },
    tags: [ { zh: '第三維也納學派', en: 'Third Viennese School' }, { zh: '未來導向', en: 'future-oriented' }, { zh: '療癒', en: 'healing' } ], related: ['willtomeaning', 'vacuum', 'paradoxical'] },
  { id: 'vacuum', name: { zh: '存在的空虛', en: 'The Existential Vacuum' }, family: 'therapy', role: { zh: '現代人的處境', en: 'the modern condition' }, icon: '🕳️', color: '#5f7f96',
    desc: { zh: 'existential vacuum。現代人失去了本能與傳統的指引，陷入空虛、無聊與無意義感。', en: 'The existential vacuum: modern people, having lost the guidance of instinct and tradition, fall into emptiness, boredom, and a sense of meaninglessness.' },
    analysis: { zh: '弗蘭克觀察到一種當代流行病：人不再被本能驅使、也不再被傳統告知該做什麼，於是陷入空洞——用從眾（做別人做的）或盲從（做別人要他做的）來填補，甚至以追逐權力、享樂或工作狂來掩蓋。「星期天精神官能症」就是這種空虛在無事可忙時的浮現。（卷二）', en: 'Frankl observed a modern epidemic: no longer driven by instinct or told by tradition what to do, people fall into a void — filling it with conformism (doing what others do) or totalitarian obedience (doing what others want), or masking it with the pursuit of power, pleasure, or workaholism. The "Sunday neurosis" is this emptiness surfacing when there is nothing to keep busy with. (Part Two)' },
    tags: [ { zh: '空虛', en: 'emptiness' }, { zh: '無聊', en: 'boredom' }, { zh: '從眾/盲從', en: 'conformism / obedience' } ], related: ['logotherapy', 'willtomeaning'] },
  { id: 'paradoxical', name: { zh: '矛盾意向法', en: 'Paradoxical Intention' }, family: 'therapy', role: { zh: '意義治療的技術', en: 'a technique of logotherapy' }, icon: '🔁', color: '#5f7f96',
    desc: { zh: 'paradoxical intention。治療焦慮與強迫的技巧：刻意去「希望」自己最害怕的事發生，用幽默打斷惡性循環。', en: 'A technique for anxiety and obsession: deliberately wishing for the very thing you fear, using humour to break the vicious circle.' },
    analysis: { zh: '越怕失眠越睡不著、越怕流汗越冒汗——這是「預期性焦慮」造成的惡性循環。弗蘭克讓病人反過來刻意去「追求」他最怕的結果（如「今天我要流個痛快」），藉由自我抽離與幽默，恐懼便失去了燃料。搭配「去反思」（把過度的自我關注移開），是意義治療對焦慮症出人意表卻有效的解法。（卷二）', en: 'The more you fear insomnia the less you sleep; the more you fear sweating the more you sweat — a vicious circle driven by "anticipatory anxiety." Frankl had patients deliberately pursue the very outcome they feared ("today I’ll sweat buckets"), so that through self-detachment and humour the fear loses its fuel. Paired with "dereflection" (turning excessive self-attention away), it is logotherapy’s surprising yet effective answer to anxiety. (Part Two)' },
    tags: [ { zh: '預期性焦慮', en: 'anticipatory anxiety' }, { zh: '幽默', en: 'humour' }, { zh: '自我抽離', en: 'self-detachment' } ], related: ['logotherapy'] },
  { id: 'supermeaning', name: { zh: '超級意義', en: 'Super-Meaning' }, family: 'therapy', role: { zh: '超越理性的意義', en: 'meaning beyond reason' }, icon: '✴️', color: '#5f7f96',
    desc: { zh: 'super-meaning。人未必能「理解」苦難的終極意義，卻可以「信任」它有一種超越理性的意義。', en: 'Super-meaning: we may not "understand" the ultimate meaning of suffering, yet we can "trust" that it holds a meaning beyond reason.' },
    analysis: { zh: '弗蘭克承認，有些苦難的意義超出了人的理解能力。他不要求你「想通」，而是邀請你「信任」——相信在有限的視野之外，仍有一個更大的意義框架。與此相連的是他對「短暫」的翻轉：真正確定存在的不是尚未到來的未來，而是「過去」——凡是你曾經活過、愛過、承受過的，都已被永遠地安放在過去裡，任誰也奪不走。（卷二）', en: 'Frankl admits that the meaning of some suffering exceeds human comprehension. He does not ask you to "figure it out" but invites you to "trust" — to believe that, beyond our limited horizon, a larger framework of meaning holds. Linked to this is his reversal of "transitoriness": what most surely exists is not the future not yet come, but the past — all you have lived, loved, and endured is stored there forever, and no one can take it away. (Part Two)' },
    tags: [ { zh: '超越理性', en: 'beyond reason' }, { zh: '信任', en: 'trust' }, { zh: '過去即永恆', en: 'the past as permanence' } ], related: ['logotherapy'] },
  { id: 'tragicoptimism', name: { zh: '悲劇性的樂觀', en: 'Tragic Optimism' }, family: 'core', role: { zh: '後記的主旨', en: 'the theme of the postscript' }, icon: '🌅', color: '#d6a95c',
    desc: { zh: '在痛苦、罪咎與死亡這「悲劇三角」之前，依然選擇對生命說「是」。', en: 'Before the "tragic triad" of pain, guilt, and death, still choosing to say "yes" to life.' },
    analysis: { zh: '本書後記〈悲劇性的樂觀〉的核心。它不是無視苦難的盲目正向，而是「明知悲劇仍說是」：把痛苦化為成就與成長，把罪咎化為讓自己變好的契機，把生命的有限化為「趁還來得及、負責去行動」的動力。這是一種帶著眼淚、卻依然向前的樂觀。（卷三）', en: 'The heart of the postscript, "The Case for a Tragic Optimism." It is not blind positivity that ignores suffering, but saying "yes" while fully aware of the tragedy: turning pain into achievement and growth, guilt into an occasion to become better, and life’s finiteness into the impetus to act responsibly while there is still time. It is an optimism that moves forward with tears in its eyes. (Part Three)' },
    tags: [ { zh: '悲劇三角', en: 'the tragic triad' }, { zh: '對生命說是', en: 'saying yes to life' }, { zh: '負責', en: 'responsibility' } ], related: ['attitude', 'suffering'] }
];

const TIMELINE_DATA = [
  { year: '1905', event: { zh: '弗蘭克生於維也納', en: 'Frankl is born in Vienna' }, novel: { zh: '在佛洛伊德與阿德勒的時代成長，日後卻走出屬於自己的「第三學派」。', en: 'He grows up in the age of Freud and Adler, but goes on to found his own "third school."' }, type: 'history' },
  { year: '1920s–30s', event: { zh: '受精神醫學訓練，意義治療雛形成形', en: 'Trains in psychiatry; logotherapy takes shape' }, novel: { zh: '曾與佛洛伊德、阿德勒往來，後因理念不同而分道，開始發展以「意義」為核心的心理學。', en: 'After exchanges with Freud and Adler he parts ways over ideas, and begins developing a psychology centred on meaning.' }, type: 'history' },
  { year: '1942', event: { zh: '全家被捕，送入特雷津集中營', en: 'The family is arrested and sent to Theresienstadt' }, novel: { zh: '對應卷一。身為猶太人的弗蘭克與父母、妻子一同被捕，噩夢開始。', en: 'Maps to Part One. As Jews, Frankl and his parents and wife are arrested together; the nightmare begins.' }, type: 'character' },
  { year: '1944', event: { zh: '轉送奧斯威辛，再至達考附屬營', en: 'Transported to Auschwitz, then to a Dachau sub-camp' }, novel: { zh: '對應卷一。他在此親歷篩選、勞役與死亡，也在其中觀察囚犯心理的三個階段。', en: 'Maps to Part One. Here he lives through selection, forced labour, and death — and observes the three psychological phases of prisoners.' }, type: 'character' },
  { year: '1945', event: { zh: '集中營獲救', en: 'Liberated from the camps' }, novel: { zh: '對應卷一末。重獲自由後，他才逐一得知父母、兄長與妻子皆已罹難。', en: 'Maps to the end of Part One. Only after regaining freedom does he learn, one by one, that his parents, brother, and wife have all perished.' }, type: 'character' },
  { year: '1946', event: { zh: '九天口述寫成本書', en: 'Dictates the book in nine days' }, novel: { zh: '德文原名意為「…而我仍對生命說是」。他把親身經歷與意義治療理論合為一書。', en: 'Its German title means "…and yet I say yes to life." He fuses his own experience with the theory of logotherapy.' }, type: 'history' },
  { year: '1959 / 1962', event: { zh: '英譯本《Man\'s Search for Meaning》出版', en: 'The English edition "Man’s Search for Meaning" appears' }, novel: { zh: '對應全書。此書成為二十世紀最具影響力的著作之一，感動數千萬讀者。', en: 'Maps to the whole book. It becomes one of the most influential works of the twentieth century, moving tens of millions.' }, type: 'history' },
  { year: '1984', event: { zh: '增補後記〈悲劇性的樂觀〉', en: 'The postscript "The Case for a Tragic Optimism" is added' }, novel: { zh: '對應卷三。晚年他補上這篇，回答「如何在痛苦、罪咎、死亡前仍說是」。', en: 'Maps to Part Three. In later years he adds this piece, answering how to say "yes" before pain, guilt, and death.' }, type: 'history' },
  { year: '1997', event: { zh: '弗蘭克逝世，享壽 92', en: 'Frankl dies at 92' }, novel: { zh: '一位用生命驗證了自己理論的人，走完了充滿意義的一生。', en: 'A man who tested his theory with his own life completes a life full of meaning.' }, type: 'history' }
];

const THEMES = [
  { id: 'attitude', icon: '🗝️', title: { zh: '態度的最後自由', en: 'The Last Freedom of Attitude' }, subtitle: { zh: '一切都能被剝奪，除了這個', en: 'everything can be taken but this' }, color: '#d6a95c',
    intro: { zh: '全書的心臟：環境無法決定你成為什麼，因為你永遠保有選擇態度的自由。', en: 'The book’s heart: circumstance cannot decide what you become, because you always keep the freedom to choose your attitude.' },
    body: { zh: '<p>在集中營，弗蘭克看見同樣的絕境裡，有人淪為只求活命的行屍，也有人把最後一塊麵包讓給更虛弱的同伴。決定一個人成為哪一種的，不是環境，而是他在刺激與反應之間所做的選擇。</p><p>這份「人性最後的自由」，是任何暴力都奪不走的。它也是意義得以存在的根基——正因為人能選擇，苦難才可能被賦予意義。</p><div class="theme-quote">「人所擁有的一切都可以被剝奪，唯獨不能剝奪選擇態度的自由。」</div>', en: '<p>In the camps Frankl saw that in the same abyss, some became walking corpses bent only on survival, while others gave their last bread to a weaker comrade. What decides which a person becomes is not the circumstance but the choice made between stimulus and response.</p><p>This "last of the human freedoms" is one no violence can seize. It is also the ground on which meaning stands — precisely because a person can choose, suffering can be given meaning.</p><div class="theme-quote">“Everything can be taken from a person but one thing: the freedom to choose one’s attitude.”</div>' },
    chapters: ['5', '3', '13'] },
  { id: 'willtomeaning', icon: '🧭', title: { zh: '意義的意志', en: 'The Will to Meaning' }, subtitle: { zh: '人真正需要的是什麼', en: 'what a person really needs' }, color: '#ecc888',
    intro: { zh: '驅動人的根本力量，不是快樂或權力，而是尋找意義。', en: 'The force that drives us is not pleasure or power, but the search for meaning.' },
    body: { zh: '<p>弗蘭克與佛洛伊德（快樂）、阿德勒（權力）分道揚鑣，提出人最根本的動力是「意義的意志」。人真正需要的，不是一個沒有煩惱的狀態，而是一個值得為之奮鬥的目標。</p><p>意義不是自己憑空發明的，而是要在具體的處境中被「發現」——關鍵的翻轉在於：不是我們向生命要求意義，而是生命向我們提問，等我們用行動回答。</p><div class="theme-quote">「生命的意義，不在於你向它要求什麼，而在於它向你要求什麼。」</div>', en: '<p>Parting from Freud (pleasure) and Adler (power), Frankl proposes that our most fundamental drive is the "will to meaning." What we truly need is not a state free of troubles but a goal worth striving for.</p><p>Meaning is not invented out of nothing but discovered in concrete situations — the key reversal being: it is not we who demand meaning of life, but life that questions us, awaiting our answer in action.</p><div class="theme-quote">“The meaning of life lies not in what you ask of it, but in what it asks of you.”</div>' },
    chapters: ['7', '8'] },
  { id: 'threeways', icon: '🌱', title: { zh: '意義的三種途徑', en: 'The Three Paths to Meaning' }, subtitle: { zh: '創造 · 愛 · 苦難的態度', en: 'work · love · the attitude to suffering' }, color: '#6f8a72',
    intro: { zh: '意義從三個地方來：你給世界的、你從世界領受的、以及你面對命運的姿態。', en: 'Meaning comes from three places: what you give the world, what you receive from it, and how you face your fate.' },
    body: { zh: '<p>第一條是創造與工作——做一件有價值的事；第二條是體驗與愛——領受真善美、去愛一個人；第三條、也最深刻的一條，是當苦難無法改變時，你選擇「如何承受」它。</p><p>正是第三條途徑，讓「最壞的處境」也能有意義。但弗蘭克再三提醒：只有不可避免的苦難才談得上意義，能避免的苦就該去避免——他絕不歌頌受苦。</p><div class="theme-quote">「痛苦一旦找到意義，就不再是痛苦。」</div>', en: '<p>The first is creative work — doing something of value; the second is experience and love — receiving the good and beautiful, loving another; the third and deepest is, when suffering cannot be changed, choosing how you bear it.</p><p>It is this third path that lets even the worst circumstance hold meaning. But Frankl insists: only unavoidable suffering can carry meaning; avoidable suffering should be removed — he never glorifies it.</p><div class="theme-quote">“Suffering ceases to be suffering the moment it finds a meaning.”</div>' },
    chapters: ['9', '4', '10'] },
  { id: 'suffering', icon: '⛰️', title: { zh: '苦難的意義', en: 'The Meaning of Suffering' }, subtitle: { zh: '如何承受不可承受之事', en: 'how to bear the unbearable' }, color: '#a86b62',
    intro: { zh: '苦難本身沒有意義；意義在於你選擇用什麼姿態去承受它。', en: 'Suffering itself has no meaning; meaning lies in the manner you choose to bear it.' },
    body: { zh: '<p>弗蘭克不美化苦難。他要說的是：當命運已無法改變（絕症、喪親、囚禁），人依然能透過承受的態度，把悲劇轉化為一種內在的成就——這是連死亡都奪不走的自由。</p><p>他引尼采：「參透為何而活的人，幾乎能承受任何如何。」在集中營裡，那些心中還懷著「未完成之事」或「等待之人」的囚犯，活下來的機會明顯更大。</p><div class="theme-quote">「參透『為何』而活的人，幾乎能承受任何『如何』。」</div>', en: '<p>Frankl does not prettify suffering. His point is: when fate can no longer be changed (terminal illness, bereavement, imprisonment), a person can still, through the attitude of bearing it, turn tragedy into an inner achievement — a freedom that not even death can seize.</p><p>He quotes Nietzsche: "He who has a why to live can bear almost any how." In the camps, prisoners who still held an unfinished task or a person waiting for them had a markedly better chance of survival.</p><div class="theme-quote">“He who has a why to live can bear almost any how.”</div>' },
    chapters: ['10', '5', '4'] },
  { id: 'vacuum', icon: '🕳️', title: { zh: '存在的空虛', en: 'The Existential Vacuum' }, subtitle: { zh: '現代人的無意義病', en: 'the meaninglessness of modern life' }, color: '#5f7f96',
    intro: { zh: '衣食無缺卻感到空洞——這是當代最流行、也最少被說破的困境。', en: 'To lack nothing yet feel hollow — the most common, least-named predicament of our age.' },
    body: { zh: '<p>現代人不再被本能驅使、也不再被傳統告知該做什麼，於是常陷入一種空虛與無聊。人們用從眾（做大家做的事）、盲從（做別人要他做的事），或用工作狂、享樂、追逐權力來掩蓋這份空洞。</p><p>弗蘭克稱之為「存在的空虛」，並認為它是當代許多憂鬱、成癮與心理困擾的根源。解方不是更多的刺激，而是重新找到「值得為之負責」的意義。</p><div class="theme-quote">「無事可做的星期天，最容易讓空虛浮上心頭。」</div>', en: '<p>No longer driven by instinct or told by tradition what to do, modern people often fall into an emptiness and boredom. They mask it with conformism (doing what everyone does), obedience (doing what others want), or with workaholism, pleasure, and the pursuit of power.</p><p>Frankl calls this the "existential vacuum" and sees it as the root of much modern depression, addiction, and distress. The remedy is not more stimulation but finding again a meaning worth being responsible to.</p><div class="theme-quote">“It is on a Sunday with nothing to do that the emptiness most easily surfaces.”</div>' },
    chapters: ['8', '12'] },
  { id: 'tragicoptimism', icon: '🌅', title: { zh: '悲劇性的樂觀', en: 'Tragic Optimism' }, subtitle: { zh: '明知悲劇，仍對生命說是', en: 'saying yes to life, knowing the tragedy' }, color: '#d6a95c',
    intro: { zh: '面對痛苦、罪咎與死亡的「悲劇三角」，仍然選擇說「是」。', en: 'Before the "tragic triad" of pain, guilt, and death, still choosing to say "yes."' },
    body: { zh: '<p>這不是無視苦難的盲目正向，而是一種帶著眼淚的樂觀：把痛苦化為成就與成長，把罪咎化為讓自己變好的契機，把生命的有限化為「趁還來得及、負責去行動」的動力。</p><p>弗蘭克用一生證明——即使在最深的黑暗裡，人依然可以對生命點頭。這，就是全書留給我們最後的火光。</p><div class="theme-quote">「即使面對痛苦、罪咎與死亡，依然對生命說『是』。」</div>', en: '<p>This is not blind positivity that ignores suffering, but an optimism with tears in its eyes: turning pain into achievement and growth, guilt into an occasion to become better, and life’s finiteness into the impetus to act responsibly while there is still time.</p><p>Frankl proved with his life that even in the deepest darkness a person can still nod "yes" to life. This is the last light the book leaves us.</p><div class="theme-quote">“To say yes to life in spite of pain, guilt, and death.”</div>' },
    chapters: ['13', '11', '6'] }
];

const QUOTES = [
  { text: { zh: '人所擁有的一切都可以被剝奪，唯一不能被奪走的，是在任何境遇中選擇自身態度的自由。', en: 'Everything can be taken from a person but one thing: the last of the human freedoms — to choose one’s attitude in any given set of circumstances.' }, source: { zh: '第一部 · 集中營經歷（本書核心）', en: 'Part One · the camp memoir (the book’s core)' },
    analysis: { zh: '全書的心臟，也是弗蘭克用生命換來的見證。它把「自由」重新定義：真正的自由不是能挑晚餐或工作，而是在最不自由的處境裡，仍能選擇以怎樣的姿態去面對。這句話讓本書遠遠超越了一本集中營回憶錄。', en: 'The book’s heart, and a witness Frankl paid for with his life. It redefines freedom: true freedom is not choosing your dinner or job, but choosing the stance you take even in the least free of circumstances. This line lifts the book far beyond a camp memoir.' } },
  { text: { zh: '參透「為何」而活的人，幾乎能承受任何「如何」。', en: 'He who has a why to live can bear almost any how.' }, source: { zh: '弗蘭克引尼采', en: 'Nietzsche, quoted by Frankl' },
    analysis: { zh: '弗蘭克反覆引用的尼采名言，是意義治療的一句濃縮：有了活下去的理由（why），人就能忍受幾乎任何艱難的處境（how）。在集中營裡，心中懷著未竟之事或等待之人的囚犯，存活率明顯更高。', en: 'The Nietzsche line Frankl cites again and again, a distillation of logotherapy: with a reason to live (a why), a person can endure almost any hardship (a how). In the camps, prisoners holding an unfinished task or a waiting loved one survived at markedly higher rates.' } },
  { text: { zh: '痛苦一旦找到意義，就不再是痛苦。', en: 'Suffering ceases to be suffering at the moment it finds a meaning.' }, source: { zh: '第二部 · 意義治療', en: 'Part Two · logotherapy' },
    analysis: { zh: '這句話常被誤讀為歌頌受苦，其實不然。弗蘭克說的是：面對「不可避免」的苦難時，找到承受它的意義，能改變苦難對我們的作用。能避免的苦，他主張就該去避免——這是理解本書極重要的分寸。', en: 'Often misread as glorifying suffering — it is not. Frankl means: when facing unavoidable suffering, finding a meaning in bearing it changes what the suffering does to us. Avoidable suffering, he holds, should be removed — a crucial distinction for reading the book.' } },
  { text: { zh: '愛，是人類終極而最高的渴望。', en: 'The salvation of man is through love and in love.' }, source: { zh: '第一部 · 集中營經歷', en: 'Part One · the camp memoir' },
    analysis: { zh: '弗蘭克在集中營最黑暗的清晨，靠著在心中凝視妻子的面容而感到幸福——即使不知她是否還活著。他由此領悟：即使肉身被囚、被剝奪一切，人仍能透過愛，在精神上抵達一個無法被摧毀的境地。', en: 'On the darkest morning in the camp, Frankl felt joy by holding his wife’s face in his mind — though he did not know whether she still lived. From this he learned that even when the body is imprisoned and stripped of everything, a person can, through love, reach a place in the spirit that cannot be destroyed.' } },
  { text: { zh: '生命的意義，不在於我們向生命要求什麼，而在於生命向我們要求什麼。', en: 'It did not matter what we expected from life, but what life expected from us.' }, source: { zh: '第二部 · 意義治療', en: 'Part Two · logotherapy' },
    analysis: { zh: '意義治療最關鍵的一次「翻轉」。與其問「人生有什麼意義給我？」，不如反過來意識到：是生命在向你提問——它在每個具體的處境裡，要求你用行動、以獨一無二的方式去回答。', en: 'Logotherapy’s crucial reversal. Rather than asking "what meaning does life give me?", realize the opposite: it is life that questions you — asking, in each concrete situation, for your answer in action, in your own unrepeatable way.' } },
  { text: { zh: '不要以成功為目標——你越是瞄準它、把它當標的，就越會錯過它。', en: 'Don’t aim at success — the more you aim at it and make it a target, the more you are going to miss it.' }, source: { zh: '作者序', en: 'the author’s preface' },
    analysis: { zh: '弗蘭克說，成功與幸福都不能「追求」，只能「隨之而來」——它們是投身於比自己更大的意義之後的副產品。刻意盯著成功，反而會失去它；這與他整套「意義先於快樂」的哲學一脈相承。', en: 'Frankl says success and happiness cannot be pursued; they can only ensue — by-products of devotion to a meaning greater than oneself. Fixate on success and you lose it; this is of a piece with his whole philosophy of "meaning before pleasure."' } },
  { text: { zh: '即使面對痛苦、罪咎與死亡，依然對生命說「是」。', en: 'To say yes to life in spite of everything — even pain, guilt, and death.' }, source: { zh: '後記 · 悲劇性的樂觀', en: 'the postscript · a tragic optimism' },
    analysis: { zh: '本書德文原名就是「…而我仍對生命說是」。這句話是「悲劇性的樂觀」的精髓：不是否認人生的悲劇三角，而是明知其存在，仍選擇肯定生命、負責行動。這是一種比盲目正向更深、也更難的勇氣。', en: 'The book’s German title is literally "…and yet to say yes to life." This line is the essence of "tragic optimism": not denying life’s tragic triad, but, knowing it fully, still choosing to affirm life and act responsibly. It is a courage deeper — and harder — than blind positivity.' } }
];

const REFLECTION_QUESTIONS = [
  { zh: '弗蘭克說，人最後的自由是「選擇態度」。你最近一次在無法改變的處境裡，還是選擇了自己的回應，是什麼時候？', en: 'Frankl says the last freedom is choosing your attitude. When did you last, in a situation you could not change, still choose your own response?' },
  { zh: '你認為生命的意義是「發現」的，還是「發明」的？如果是生命在向你提問，此刻它在問你什麼？', en: 'Do you think life’s meaning is discovered or invented? If life is questioning you, what is it asking right now?' },
  { zh: '創造、愛、面對苦難的態度——這三條意義的途徑，哪一條是你目前最主要的支撐？哪一條你最少用到？', en: 'Work, love, the attitude to suffering — which of the three paths to meaning most sustains you now? Which do you use least?' },
  { zh: '你身上或身邊，有沒有「存在的空虛」的影子——用忙碌、享樂或從眾，來掩蓋一種說不出的空？', en: 'Do you see a shadow of the "existential vacuum" in yourself or others — busyness, pleasure, or conformity masking an unspeakable emptiness?' },
  { zh: '弗蘭克強調只有「不可避免」的苦難才談得上意義。你如何分辨「該承受的苦」與「其實該去改變、去離開的苦」？', en: 'Frankl stresses only unavoidable suffering carries meaning. How do you tell "suffering to bear" from suffering you should actually change or leave?' },
  { zh: '「痛苦一旦找到意義，就不再是痛苦。」你曾經歷過一段苦，事後回看反而成了你最重要的養分嗎？', en: '"Suffering ceases to be suffering once it finds a meaning." Has a hardship you lived through become, in hindsight, one of your most important nourishments?' },
  { zh: '如果「過去」才是最確定、無人能奪走的存在，這個看法會怎樣改變你面對「失去」與「變老」的心情？', en: 'If the past is the surest being, one no one can take, how does that change how you face loss and growing old?' },
  { zh: '想一件你目前很焦慮、越怕越糟的事（失眠、上台發抖…）。「矛盾意向法」會怎麼建議你反其道而行？', en: 'Think of something you are anxious about, where fear makes it worse (insomnia, stage fright). How would "paradoxical intention" have you act against the grain?' },
  { zh: '弗蘭克說成功不能追求、只能隨之而來。你有沒有因為「太想要」某個結果，反而把它推遠了？', en: 'Frankl says success cannot be pursued, only ensue. Have you ever pushed a result away by wanting it too much?' },
  { zh: '在痛苦、罪咎與死亡面前仍對生命說「是」——對你而言，此刻要對生命說「是」，最難的是哪一部分？', en: 'To say "yes" to life before pain, guilt, and death — for you, what is the hardest part of saying "yes" right now?' }
];

const CHAPTER_CONTENT = {};
Object.assign(CHAPTER_CONTENT, {
  1: {
    num: '第 1 節',
    title: '被送進集中營',
    epigraph: '「當一切都被拿走，人才看清自己還剩下什麼。」',
    body: `<p>火車在夜裡走了許多天，車廂裡擠滿了人，沒有人確切知道終點在哪裡。當列車終於停下、門被拉開，月台上的燈光、鐵絲網與遠方的煙囪，一起把一種難以言說的預感壓進每個人心裡。弗蘭克後來以精神科醫師的冷靜回顧這段抵達奧斯威辛的時刻，他關心的不是恐怖本身，而是人在那一瞬間內心發生了什麼。</p>
    <p>下車之後，是一連串迅速而冷酷的分流。一個看似隨意的手勢，就決定了誰往這邊、誰往那邊，而多數人並不知道那個手勢意味著生與死的岔路。財物被沒收，證件被收走，連隨身珍藏的手稿都保不住。人們被剃去毛髮、換上囚衣，最後只剩下一個刺在皮膚上的號碼。</p>
    <div class="section-break">＊ ＊ ＊</div>
    <p>從那一刻起，一個有名字、有職業、有過去的人，被化約成一串數字。弗蘭克描述那種奇異的體悟：他發現自己除了這副仍在呼吸的身體之外，幾乎一無所有——沒有名字，沒有身分，沒有任何可以證明「我曾經是誰」的東西。這是一種赤裸的存在，被剝到只剩最底層。</p>
    <p>然而正是在這個被清空的起點上，一個問題悄悄浮現：當外在的一切都能被奪走，那麼還有沒有什麼是別人拿不走的？弗蘭克沒有立刻回答，他把這個問題留給接下來漫長的每一天去驗證。這一節記錄的，只是墜落的開始。</p>
    <p class="thought-question">🤔 思考：如果有一天，別人能拿走你的頭銜、財產與名字，你認為自己身上還會剩下什麼是真正屬於你的？</p>`
  },
  2: {
    num: '第 2 節',
    title: '第一階段：收容的震撼',
    epigraph: '「人會用一個念頭，替自己爭取活下去的一點空間。」',
    body: `<p>弗蘭克把囚犯的心理反應分成幾個階段，剛被收容時的震撼是第一階段。人剛踏進這個世界，理智還來不及理解眼前的荒謬，情緒卻已經被巨大的衝擊淹沒。眼前發生的一切都超出了正常經驗所能解釋的範圍，於是心靈本能地啟動了各種防衛。</p>
    <p>其中一種他觀察得最仔細的，是他稱之為近似「緩刑妄想」的心理。面對死刑的犯人，在最後一刻常會出現一種錯覺，以為自己也許會在千鈞一髮間獲救；新來的囚犯同樣如此，人們拚命抓住種種微小的理由，說服自己情況也許沒那麼壞、自己也許是例外。這不是愚蠢，而是心靈在極端處境下自我保護的方式。</p>
    <div class="section-break">＊ ＊ ＊</div>
    <p>震撼還帶來另一種奇特的反應：黑色的幽默，以及一種近乎好奇的旁觀。人們會對眼前的荒謬發出苦笑，彷彿在看一齣與自己無關的戲。弗蘭克說，這種好奇某種程度上讓心靈得以暫時抽離，不至於當場被恐懼擊垮。</p>
    <p>他也記錄了那個著名的念頭：在最初的絕望裡，有人甚至想到觸碰通電的鐵絲網來了結一切。但更多人選擇了另一種姿態——先看看接下來會發生什麼，把最後的判斷再往後推一步。震撼期的心理，正是在崩潰邊緣不斷替自己爭取喘息的過程。</p>
    <p class="thought-question">🤔 思考：當你面對難以承受的壞消息時，心裡最先冒出來的往往是哪一種自我保護的念頭？它幫了你，還是騙了你？</p>`
  },
  3: {
    num: '第 3 節',
    title: '第二階段：冷漠與麻木',
    epigraph: '「情感先死去，是為了讓人還能活下去。」',
    body: `<p>震撼過後，隨之而來的是第二階段：冷漠。弗蘭克發現，經過最初幾天或幾週的煎熬，囚犯的內心開始進入一種情感逐漸熄滅的狀態。那些起初讓人夜不能寐、痛徹心扉的景象，慢慢變得不再激起任何波瀾。</p>
    <p>他以精神科醫師的眼光解釋，這種麻木並不是冷血，而是一層必要的保護殼。當痛苦超過心靈所能負荷，情感便自動退場，好讓人把僅存的力氣集中在最原始的任務上——多討到一口食物、避開一頓毆打、撐過又一天的勞役。凡是與生存無關的感受，都被暫時關掉了。</p>
    <div class="section-break">＊ ＊ ＊</div>
    <p>於是人變得像行屍一般。飢餓、寒冷、疲憊與睡眠不足，把一切慾望與情緒磨平，只剩下對生存的鈍重執念。弗蘭克描述囚犯如何對周遭的殘酷習以為常，眼看著同伴倒下卻已無力也無心去感受悲傷，因為心早已學會了不去感受。</p>
    <p>但他同時提醒，這層麻木雖然殘酷，卻是一種真實而合理的心理機制。它讓人在非人的環境裡勉強維持著清醒與功能。理解這一點，並不是為冷漠辯護，而是為了看清：人在極限處境下的反應，往往有其深層的心理道理，值得以理解而非審判的眼光去看待。</p>
    <p class="thought-question">🤔 思考：當生活的壓力大到某個程度，你是否也曾發現自己「感覺不到了」？那種麻木，究竟是在保護你，還是在悄悄帶走你？</p>`
  },
  4: {
    num: '第 4 節',
    title: '在飢寒中，愛與內在生活',
    epigraph: '「愛，是人類終極而最高的渴望。」',
    body: `<p>令人意外的是，在最貧乏、最麻木的環境裡，弗蘭克卻發現囚犯的內在生活反而可能變得更深刻。當外在世界被剝奪到近乎虛無，一些原本被日常遮蔽的內在世界，反而浮現出來，變得格外清晰而重要。</p>
    <p>他記下一個清晨：天還沒亮，隊伍在刺骨的寒風中被驅趕著行軍，腳下是結冰的泥地，身旁的人不斷跌倒。就在這樣的時刻，他的思緒卻飄向了妻子。他在心裡與她對話，凝視著記憶中她的面容，那份想像的存在竟帶給他真實的溫暖與力量。</p>
    <div class="section-break">＊ ＊ ＊</div>
    <p>正是在這樣的體驗中，弗蘭克領悟到一件事：人所能追求的最高目標，其實是透過愛而抵達的。他說，愛是人類終極而最高的渴望。即使所愛的人是否還活著都無從得知，愛本身也絲毫不減其意義——因為愛所指向的，是那個人的精神本質，而那是死亡也無法真正抹去的。</p>
    <p>他還觀察到，有些囚犯在飢寒交迫中，仍會被一抹夕陽、一片山巒的輪廓所打動，短暫地忘記處境。內在的精神生活，成了對抗外在剝奪的最後堡壘。一個人只要還能在心中保有所愛之人、保有對美的感受，他就還沒有被徹底擊敗。</p>
    <p class="thought-question">🤔 思考：在你最艱難、最匱乏的時刻，是什麼樣的人或念頭，曾經在你心裡替你撐住一口氣？</p>`
  },
  5: {
    num: '第 5 節',
    title: '人性最後的自由',
    epigraph: '「參透為何，才能迎接任何。」',
    body: `<p>這一節是全書的核心。弗蘭克在集中營裡得出一個結論，日後成為他整套思想的基石：人可以被奪走幾乎所有的東西——財產、健康、家人、甚至身體的自由——但有一樣東西永遠奪不走，那就是在任何處境中，選擇自己態度的自由。</p>
    <p>他說，同樣的苦難降臨在不同的人身上，有人變得暴戾、自私、只求自保，也有人反而愈發沉靜、慷慨、有尊嚴。這證明外在環境並不能完全決定一個人成為什麼樣的人；在刺激與反應之間，始終保留著一道人可以自主選擇的空間。</p>
    <div class="section-break">＊ ＊ ＊</div>
    <p>他親眼見過那樣的人：明明自己也餓得發昏，卻把最後一小塊麵包遞給更虛弱的難友；在營房裡走過，說幾句安慰的話，把僅有的一點溫柔留給別人。這樣的人也許為數不多，但只要有這樣一個人存在，就足以說明人性的高度究竟能達到哪裡。這，正是人之所以為人的地方。</p>
    <p>弗蘭克借用尼采的一句話來概括支撐人活下去的力量：「參透為何，才能迎接任何。」一個心裡清楚自己「為什麼」要活的人，往往能承受幾乎任何「怎麼樣」的苦難。當一個人找到了受苦的意義，苦難本身就不再只是純粹的折磨，而成了他必須完成的、屬於他自己的任務。</p>
    <p class="thought-question">🤔 思考：在你無法改變的處境裡，你還保有選擇「以什麼態度去面對它」的自由——你打算怎麼用這份自由？</p>`
  },
  6: {
    num: '第 6 節',
    title: '第三階段：獲釋之後',
    epigraph: '「自由來得太突然，心靈一時還學不會相信它。」',
    body: `<p>第三階段，是解放之後的心理狀態。弗蘭克坦白地說，當自由終於到來，它並沒有帶來人們想像中那種立刻爆發的狂喜。相反地，許多囚犯站在敞開的營門前，反而感到一種奇異的空茫，彷彿一切都不太真實。</p>
    <p>他把這種狀態稱為一種心理上的「去人格化」：人們機械地走出去，看著眼前的草地與天空，理智知道自己自由了，情感卻遲遲跟不上。長期被壓到極限的心靈，一時之間竟喪失了感受快樂的能力，需要重新、緩慢地學習如何去體會歡愉。</p>
    <div class="section-break">＊ ＊ ＊</div>
    <p>更值得警惕的，是解放帶來的兩種心理危機。其一是怨憤：有些人在重獲自由後，覺得自己受了這麼多苦，理當可以理直氣壯地把痛苦施加回這個世界，於是變得粗暴而蠻橫。弗蘭克提醒，經歷過苦難並不自動使人高尚，苦難如何塑造一個人，仍取決於他自己的選擇。</p>
    <p>其二是幻滅：許多倖存者回到家鄉，才發現等待他們的人早已不在，或是曾支撐他們活下去的那個世界已然改變。他們懷抱多年的盼望落了空，還得面對旁人無法真正理解他們經歷的孤獨。獲釋，因此不是苦難的終點，而是另一段艱難的、學習重新活著、重新感受的漫長旅程。</p>
    <p class="thought-question">🤔 思考：當你終於熬過一段漫長的煎熬，你要如何避免讓那段苦難把你變成一個更冷硬、更怨懟的人，而是讓它沉澱成更深的溫柔？</p>`
  }
});
Object.assign(CHAPTER_CONTENT, {
  7: {
    num: '第 7 節',
    title: '意義的意志',
    epigraph: '「人真正需要的不是無憂無慮的狀態，而是一個值得為之奮鬥的目標。」',
    body: `<p><strong>核心論點：</strong>驅動人活下去的最根本力量，既不是追求快樂，也不是追求權力，而是尋找生命意義的渴望。弗蘭克稱之為「意義的意志」——它是人存在的第一動力，不能被化約成別的東西。</p><p><strong>論證：</strong>弗蘭克在此與兩位維也納前輩劃清界線。佛洛伊德把人的動機歸結為對快樂的追逐，阿德勒歸結為對權力（優越感）的追逐；弗蘭克認為兩者都倒果為因。快樂不是我們直接追求的目標，而是「意義被實現」之後自然浮現的副產品——你愈是把快樂當成標靶去瞄準，它愈是躲開你。更關鍵的是，意義並非人主觀捏造出來安慰自己的東西，而是等在世界某處、需要被人「發現」的。人被生命所「詢問」，人的任務是用行動去回答，而不是替自己編一套說詞。這種指向外部、指向某件事或某個人的特性，弗蘭克稱為人的「自我超越」：唯有走出自己、投入自身以外的目標，人才真正成為自己。</p><div class="section-break">◆ ◆ ◆</div><p><strong>實例：</strong>設想一位剛退休的醫師，物質無虞、閒暇充裕，理應快樂，卻陷入莫名的低落。他不缺享受，缺的是一件值得付出的事。當他開始義務指導年輕醫師、把畢生經驗傳下去，低落感便消退了——不是因為他去「追快樂」，而是因為他重新找到了需要他去回應的召喚，快樂只是隨之而來。</p><p><strong>啟示：</strong>當你感到空洞時，別急著問「怎樣才能更快樂」，而要問「此刻有什麼事、什麼人，正需要我去完成、去承擔」。把焦點從自身的感受，轉向自身之外值得投入的對象，意義與滿足往往會不請自來。</p><p class="thought-question">🤔 思考：你現在的生活裡，有沒有一件「就算辛苦也甘願」的事？如果一時想不起來，這本身透露了什麼？</p>`
  },
  8: {
    num: '第 8 節',
    title: '存在的空虛',
    epigraph: '「當人不再被本能驅使、也不再被傳統告知該做什麼時，他有時竟連自己想做什麼都不知道了。」',
    body: `<p><strong>核心論點：</strong>現代人普遍陷入一種「存在的空虛」——一種內在的空洞、無聊與無所適從。當意義的意志得不到滿足，這份空虛便成為當代許多心理困擾的溫床。</p><p><strong>論證：</strong>弗蘭克指出，人類在演化中付出了雙重代價。其一，早已失去了動物那種由本能直接指揮行動的確定性——本能不再替我們決定該做什麼。其二，到了現代，過去由傳統、宗教與習俗提供的價值指引也大幅崩解——傳統不再替我們決定該做什麼。於是人被留在一個真空裡：既沒有本能可依循，也沒有傳統可倚靠，甚至連自己真正想要什麼都說不清。這份空虛最典型地顯露在無聊之中，弗蘭克稱之為「星期天精神官能症」——當一週的忙碌停下來、生活的內在貧乏無所遁形時，那股襲來的沉悶與失落。人為了填補這個真空，往往走向兩條歧路：一是「從眾」，別人做什麼我就做什麼；二是「盲從」，別人要我做什麼我就做什麼。此外，人也常用權力的追逐（尤其是金錢）或享樂的追逐（乃至性慾的過度補償）來塞住這個洞——但填進去的愈多，洞反而顯得愈深。</p><div class="section-break">◆ ◆ ◆</div><p><strong>實例：</strong>一個人平日靠加班、應酬與滑手機把時間排得密不透風，看似充實。可一到長假第一天，喧囂驟然退去，他卻莫名煩躁，只好又去找飯局、找購物、找刺激來填滿。他真正逃避的，不是無事可做，而是那份一旦安靜下來就浮現的、「不知道自己為何而活」的空虛。</p><p><strong>啟示：</strong>無聊與空虛不必然是病，它更像是一個信號，提醒你：意義的位置目前是空的。用消費、忙碌或隨大流去掩蓋這個信號，只會讓它日後以更大的聲量回來。與其急著填滿，不如先誠實承認那份空虛，再去尋找真正屬於你的答案。</p><p class="thought-question">🤔 思考：當你獨處、什麼都不做的時候，湧上來的是安寧，還是想立刻抓點什麼來填的焦躁？</p>`
  },
  9: {
    num: '第 9 節',
    title: '意義的三種途徑',
    epigraph: '「當我們再也無法改變處境時，挑戰便落到我們自己身上——改變自己。」',
    body: `<p><strong>核心論點：</strong>生命的意義並非高不可攀的抽象概念，而是可以在具體生活中透過三條途徑去發現與實現：創造、體驗，以及在無法逃避的苦難面前所選擇的態度。</p><p><strong>論證：</strong>弗蘭克把通往意義的路徑歸納為三種。第一是「創造與工作的價值」——透過去做一件事、成就一份事業、給世界留下某種貢獻，我們把意義付諸行動。第二是「體驗與愛的價值」——透過體驗真、善、美，透過投入自然與文化，尤其是透過去愛一個人、在對方身上看見那獨一無二的可能性，我們從世界「接收」到意義。第三，也是弗蘭克最看重的，是「態度的價值」——當一個人陷入無法改變的困境、面對無可迴避的苦難時，他仍然握有最後的自由：選擇以何種姿態去承受它。前兩條路是主動的付出與接受，第三條路則是在被剝奪一切之後，依然能證明人之為人的高度。正因為苦難本身無從逃避，一個人如何背負它，反而成了他所能給出的、最深刻的成就。弗蘭克特別提醒：這不是要人去追求受苦——若苦難可以避免，去除它才是有意義的；態度的價值只在苦難「不可避免」時才登場。</p><div class="section-break">◆ ◆ ◆</div><p><strong>實例：</strong>弗蘭克提到一位年邁的醫師，在深愛的妻子過世後陷入無法自拔的哀慟。弗蘭克沒有安慰他，只反問：假如先走的是你、活下來的是她，情況會如何？醫師答：她會痛苦萬分。弗蘭克於是說：如今她免去了這份痛苦，而代價，是由你來承受這份思念。喪妻的事實無法改變，但這位醫師對它的看法變了——他的痛苦從此有了意義：那是他替所愛之人擔下的一份苦。他不再是命運的受害者，而成了守護者。</p><p><strong>啟示：</strong>當生活順遂時，用創造與愛去累積意義；當風暴來襲、無力回天時，別忘了你還握有最後一項不可被奪走的自由——決定自己以何種姿態去面對。能改變的，盡力去改變；不能改變的，就在承擔它的方式裡，活出尊嚴。</p><p class="thought-question">🤔 思考：回顧你曾走過的某段最艱難的日子，你當時「選擇的態度」，是否也悄悄改變了那段經歷對你的意義？</p>`
  }
});
Object.assign(CHAPTER_CONTENT, {
  10: {
    num: '第 10 節',
    title: '苦難的意義',
    epigraph: '「痛苦一旦找到了意義，就不再是痛苦。」',
    body: `<p><strong>核心論點：</strong>當一個人被迫面對無法改變、無法逃避的苦難時，他仍然保有最後一項自由——選擇以何種態度去承受它。這種承受本身，就能成為意義的最終泉源。人無法決定命運是否降臨，卻能決定自己在命運面前站成什麼姿態。</p><p><strong>論證：</strong>弗蘭克指出，生命的意義不只來自我們創造了什麼、體驗了什麼，也來自我們如何面對無可迴避的困境。當一個人再也無法改變處境——例如身患絕症、或痛失至親——他被推到了一個轉折點：此時要問的，不再是能從生命裡得到什麼，而是生命正透過這份苦難向他要求什麼樣的回應。有尊嚴地承受，把苦難轉化為一種內在的成就，是任何外力都奪不走的。然而弗蘭克謹慎地劃出界線：這絕不是歌頌受苦，也不是鼓勵人自找苦吃。若苦難是可以避免的，那麼消除苦難的根源才是明智之舉；刻意去承受本可去除的痛苦，不是英勇，而是自虐。唯有當苦難確實無可迴避時，賦予它意義才成為必要。</p><div class="section-break">◆ ◆ ◆</div><p><strong>實例：</strong>弗蘭克曾接待一位年長的醫生，他因妻子過世而陷入無法排解的哀傷。弗蘭克沒有安慰他，而是反問：倘若先走的是他，讓妻子獨自承受喪偶之痛，情況會如何？老醫生答，那對妻子將是極大的折磨。弗蘭克於是說：如今這份痛苦由你承擔，正是你替她免除了這份煎熬——代價是你必須活下去、並且悼念她。老醫生沉默地握了握他的手，安然離去。痛苦沒有減少一分，但一旦被賦予了犧牲的意義，就變得可以承擔。</p><p><strong>啟示：</strong>我們無法選擇是否遭遇苦難，卻能選擇賦予它什麼意義。這不是要人美化痛苦，而是提醒：即使在最無能為力的處境中，人依然握有一項不可剝奪的自由。能改變的，就去改變；不能改變的，就以尊嚴承受它。</p><p class="thought-question">🤔 思考：在你經歷過的困境中，哪些是當時可以改變卻沒去改變的，哪些是真正無可迴避、只能選擇如何面對的？兩者的界線，你分得清嗎？</p>`
  },
  11: {
    num: '第 11 節',
    title: '超級意義與生命的短暫',
    epigraph: '「凡是曾經存在過的，就永遠不會被抹去。」',
    body: `<p><strong>核心論點：</strong>人未必能以理性完全理解苦難的終極意義，但仍可以「相信」它承載著一種超越理智的意義——弗蘭克稱之為「超級意義」（super-meaning）。與此相應，他提出一個常被誤解的觀點：真正最確定、最不可動搖的存在，其實是「過去」。</p><p><strong>論證：</strong>弗蘭克坦承，人的理智有其邊界。我們往往看不透一場苦難究竟為何而來、指向何方，就像一隻被獸醫扎針的動物，無法理解那份痛楚背後的善意。人在整體意義之網中的位置，也可能超出理性所能掌握。面對這種限制，弗蘭克主張的不是理解，而是信任——相信在我們有限的視野之外，存在一種更高的意義秩序，即使此刻無法證明。至於生命的短暫與無常，他反轉了一般人的悲觀：人們哀嘆時光流逝、萬事成空，卻忽略了一個事實——凡是我們曾經活過、愛過、受過苦、完成過的，都已被安放進「過去」這座無人能闖入的倉庫裡。未來尚未確定，現在轉瞬即逝，唯有過去是永遠被保存、無法被奪走的真實存在。</p><div class="section-break">◆ ◆ ◆</div><p><strong>實例：</strong>弗蘭克用一個比喻描摹兩種人生態度。悲觀者像是每天撕下月曆、看著日子越來越薄而心生恐懼；而懂得珍惜的人，則把撕下的每一頁仔細記下背面的日記，再收進抽屜——他知道那些日子並未消失，而是被穩妥地收藏起來，連同其中的充實、愛與奮鬥，都成了不可磨滅的一部分。逝去的並非空無，而是圓滿。</p><p><strong>啟示：</strong>面對無法參透的苦難，未必要求全懂，而是可以選擇信任其中或許有超乎理智的意義；面對生命的有限，不必只看見失去，也可以看見成就的累積。你活過的每一刻，都已永久刻進存在之中，這正是無常裡最深的安穩。</p><p class="thought-question">🤔 思考：如果「過去」才是你最確定的財富，那麼你此刻正在把什麼樣的內容，存進那個無人能奪走的倉庫裡？</p>`
  },
  12: {
    num: '第 12 節',
    title: '矛盾意向法',
    epigraph: '「越是拼命想要，越是求之不得。」',
    body: `<p><strong>核心論點：</strong>面對焦慮與強迫的惡性循環，弗蘭克提出兩項具體技巧：一是「矛盾意向法」（paradoxical intention）——刻意去希望自己最害怕的事情發生；二是「去反思」（dereflection）——把過度集中於自身的注意力移開。兩者的共同關鍵，是打斷「越怕越糟、越糟越怕」的自我強化迴圈。</p><p><strong>論證：</strong>許多神經性的困擾，並非源於問題本身，而是源於對問題的恐懼與過度關注。一個怕失眠的人，越是努力入睡就越清醒；一個怕臉紅的人，越是提防臉紅就越發燒。這種「預期性焦慮」會製造出它所害怕的結果，形成閉環。矛盾意向法的巧妙之處，在於它反其道而行：讓患者刻意去「盼望」那件最恐懼的事發生——用一種帶著幽默、自我調侃的心態去面對。當人能夠對自己的症狀開玩笑、拉開一段距離時，恐懼賴以運轉的張力就被抽掉了。這正是運用了人所獨有的「自我抽離」能力。至於去反思，則針對另一類過度自我觀察的困擾——把眼光從自己身上移開，轉向外在的人事與任務，症狀往往在被忽視中自行消退。</p><div class="section-break">◆ ◆ ◆</div><p><strong>實例：</strong>弗蘭克提到一位長年為多汗症所苦的患者，每逢預期會冒汗的場合，光是那份恐懼就足以讓他汗如雨下。弗蘭克教他，下次感到快要出汗時，就故意對自己說：剛才只流了一公升，這次我要讓大家看看什麼叫流他個十公升！這位患者原本被恐懼追逐了多年，僅僅一週，就從惡性循環中解脫出來。他用誇張的自嘲，把恐懼變成了笑話。</p><p><strong>啟示：</strong>越是死命抓取，越容易滑落；越是刻意迴避，越被緊緊纏住。有時候解方不在正面硬拚，而在於敢於自嘲、拉開距離，甚至反過來擁抱自己所懼怕的。幽默與自我抽離，是人對抗神經枷鎖時，一件被低估卻極為有力的武器。</p><p class="thought-question">🤔 思考：你是否有某種越努力克服、反而越揮之不去的困擾？若試著用開玩笑的態度去「歡迎」它，會發生什麼？</p>`
  },
  13: {
    num: '第 13 節',
    title: '悲劇性的樂觀',
    epigraph: '「在一切之後，依然對生命說是。」',
    body: `<p><strong>核心論點：</strong>人生無可避免地包含痛苦、罪咎與死亡——弗蘭克稱之為「悲劇三角」。所謂「悲劇性的樂觀」，並非無視這三者的天真樂觀，而是明知它們無可迴避，卻仍然能對生命說出一聲肯定的「是」。這是全書的收束之處，也是意義治療最終極的立場。</p><p><strong>論證：</strong>樂觀不能被命令，快樂也無法被強求；它們只能作為一個人找到意義後，自然湧現的結果。弗蘭克主張，即使身處悲劇三角之中，人仍握有把困境轉化為成就的潛能：第一，把痛苦轉化為一項成就與人格的淬鍊——當苦難無可迴避時，承受的姿態本身即是意義；第二，把罪咎轉化為向善的改變——承認過錯不是為了自我懲罰，而是為了讓自己變得更好；第三，把生命的短暫與有限，轉化為此刻負責行動的動力——正因為時間有限、機會不再重來，每一個當下的抉擇才如此鄭重。真正的樂觀，不是相信一切都會變好，而是在看清一切殘酷之後，仍願意主動地、負責地活下去。</p><div class="section-break">◆ ◆ ◆</div><p><strong>實例：</strong>弗蘭克觀察到，人在絕境中最需要的不是廉價的安慰，而是一個值得為之負責的理由。他晚年常引用尼采的話：懂得為何而活的人，幾乎能忍受任何一種生活。集中營中活下來的，往往不是體格最強的，而是心中還牽掛著某件未竟之事、某個等待重逢之人的人。是那個尚未完成的意義，把他們從深淵裡拉了上來。全書從深淵中的親歷寫起，最終落在這一點：意義不在遠處等人發現，而是在每一個當下、每一份苦難、每一次抉擇裡，等人親手賦予。</p><p><strong>啟示：</strong>對生命說「是」，從來不是因為生命輕鬆美好，而是因為即使它殘酷而有限，人依然能在其中找到值得承擔的意義。痛苦、罪咎、死亡奪不走人最後的自由——選擇態度、選擇改變、選擇負責的自由。這，正是弗蘭克留給世界最堅定的一句回答。</p><p class="thought-question">🤔 思考：如果你必須在看清痛苦、罪咎與死亡都無可迴避之後，仍然找出一個對生命說「是」的理由，那個理由會是什麼？</p>`
  }
});
Object.assign(CHAPTER_CONTENT, {
  14: { num: '附錄 · 讀者書評', title: '選擇面對苦難的態度，是一個人的終極自由', epigraph: '「真正的自由，不是能挑晚餐或工作，而是能選擇用什麼態度面對困境。」　—— 翰林書僮', body: `
<p><em>這一篇是本站主人翰林書僮的親筆書評（原載於個人部落格，2020）。以下依原文精華重述，保留他的觀點與現代對照。</em></p>
<p>弗蘭克是一位奧地利的猶太裔精神科醫師。這本書分兩部分：前半是他在納粹集中營的半自傳式經歷，後半則發展出他的心理學體系——意義治療法。這本書與其他集中營回憶錄最不同的地方，在於弗蘭克受過精神醫學訓練，因此他能深入剖析囚犯的心理狀態與轉變，冷靜觀察包括自己在內的人，如何回應這座人間地獄。</p>
<div class="section-break">＊ ＊ ＊</div>
<p><strong>集中營裡的兩個心理階段。</strong>其一是「震撼」：一入營，囚犯被剝奪所有財物與身分，淪為一個號碼，警衛把他們當成次於人的存在，任意施加毫無道理的懲罰。其二是「冷漠」：這是一種自我保護機制——當環境殘酷到無法承受、又無從改變，囚犯乾脆讓自己情感麻木，變得像「行屍走肉」。</p>
<p><strong>人性最後的自由。</strong>儘管所有苦難都無可避免、所有悲傷都已註定、所有反抗都屬徒勞，人依然保有一種自由：<strong>選擇自己面對這一切的態度</strong>。這才是真正的自由——不是能挑選晚餐或工作，而是能有尊嚴地回應苦難。弗蘭克親眼看見：有些瘦得只剩骨架的囚犯，仍把麵包分給生病的同伴；有些人不斷鼓勵獄友別放棄希望。正是這些人，展現了人與動物的差別——能超越本能反應，選擇自己的回應。</p>
<div class="section-break">＊ ＊ ＊</div>
<p><strong>通往意義的三條途徑。</strong>依照意義治療，人可以透過三種方式找到生命的意義：①創造與工作；②體驗美、愛與各種生命經驗；③<strong>承受不可避免的苦難</strong>。當面對無法逃避的痛——摯愛的離世、失業、背叛——人反而得到一個機會，透過自己選擇的回應，去實現個人的價值與意義。</p>
<p><strong>他的現代對照。</strong>翰林書僮特別提醒：不必等到集中營那樣的極端，光是日常裡的小挫折——突然下起的雨、無禮的駕駛、擁擠的車廂——都在考驗我們的理性。我們的回應，定義了我們是誰。當我們選擇從容與體諒、而非本能的憤怒，我們就超越了生物性的設定，達到了真正的自由。<strong>他的心得：</strong>弗蘭克要說的，不是苦難本身有多偉大，而是——在任何處境裡，你都還握有選擇態度的那一分自由，而那一分，決定了你這個人。</p>
<p class="thought-question">🤔 思考：下一次你被激怒、被打斷、被命運為難的時候，能不能想起這一分自由——在刺激與反應之間，你仍然可以選擇要成為怎樣的人？</p>
`
  }
});

// ---- English section bodies (parallel store, merged below) ----
const CHAPTER_CONTENT_EN = {};

Object.assign(CHAPTER_CONTENT_EN, {
  1: {
    num: 'Section 1',
    title: 'Entering the Camp',
    epigraph: '“Only when everything is taken away does a person see what remains.”',
    body: `<p>The train had rolled through the darkness for many days, its cars packed with people, none of whom knew exactly where they were going. When it finally halted and the doors were dragged open, the lights along the platform, the barbed wire, and the distant chimneys pressed an unspeakable foreboding into every heart. Frankl looked back on his arrival at Auschwitz with a psychiatrist's composure. What concerned him was not the horror itself, but what happened inside a person in that moment.</p>
    <p>After stepping down came a swift and pitiless sorting. A gesture that seemed almost casual decided who went this way and who went that, and most had no idea that the flick of a hand marked the fork between life and death. Belongings were confiscated, papers taken away, even a treasured manuscript could not be kept. People were shaved, dressed in prison rags, and left at last with only a number branded into the skin.</p>
    <div class="section-break">＊ ＊ ＊</div>
    <p>From that moment on, a person with a name, a profession, and a past was reduced to a string of digits. Frankl described the strange realization that dawned on him: apart from this body that still drew breath, he possessed almost nothing at all -- no name, no identity, nothing that could testify to who he had once been. It was a naked existence, stripped down to its lowest layer.</p>
    <p>And yet it was precisely at this emptied-out starting point that a quiet question began to surface. If everything on the outside could be taken, was there anything at all that no one could seize? Frankl did not answer at once. He left the question for the long days ahead to test. This section records only the beginning of the fall.</p>
    <p class="thought-question">🤔 Reflect: If one day others could strip away your title, your property, and your name, what do you think would remain that is truly your own?</p>`
  },
  2: {
    num: 'Section 2',
    title: 'The First Phase: The Shock of Admission',
    epigraph: '“A person will use a single thought to win a small space in which to go on living.”',
    body: `<p>Frankl divided the prisoner's psychological reactions into several phases, and the shock of admission was the first. Newly delivered into this world, the mind had no time to make sense of the absurdity before it, while the emotions were already swamped by an enormous blow. Everything unfolding lay beyond what ordinary experience could explain, and so the psyche instinctively raised its defenses.</p>
    <p>One reaction he observed most closely was what he likened to a kind of delusion of reprieve. A condemned man, in his final moments, will often be seized by the illusion that he might yet be saved at the last instant. Newcomers to the camp were no different. People clutched at every small reason to persuade themselves that things might not be so bad, that they themselves might be the exception. This was not foolishness but the mind's way of protecting itself under extreme conditions.</p>
    <div class="section-break">＊ ＊ ＊</div>
    <p>The shock brought another curious response as well: a dark humor, and an almost detached curiosity. People would give a bitter laugh at the absurdity before them, as though watching a play that had nothing to do with themselves. Frankl noted that this curiosity, in a sense, let the mind step back for a while so that it would not be struck down on the spot by fear.</p>
    <p>He also recorded that well-known thought: in the earliest despair, some even considered touching the electrified wire to end it all. But more chose a different posture -- to wait and see what came next, to push the final judgment back one more step. The psychology of the shock phase was exactly this ceaseless effort, at the edge of collapse, to buy oneself a little more breathing room.</p>
    <p class="thought-question">🤔 Reflect: When you face unbearable bad news, which self-protecting thought tends to arise first? Did it help you, or did it deceive you?</p>`
  },
  3: {
    num: 'Section 3',
    title: 'The Second Phase: Apathy',
    epigraph: '“Feeling dies first, so that a person may still go on living.”',
    body: `<p>Once the shock had passed, a second phase followed: apathy. Frankl found that after the ordeal of the first days or weeks, the prisoner's inner life began to enter a state in which feeling gradually went out. The sights that at first had kept a person awake at night and pierced him to the core slowly ceased to stir any reaction at all.</p>
    <p>With a psychiatrist's eye he explained that this numbness was not cold-heartedness but a necessary protective shell. When suffering exceeds what the mind can bear, feeling withdraws of its own accord, so that a person may concentrate what strength remains on the most primitive tasks -- begging one more mouthful of food, dodging a beating, surviving another day of labor. Whatever had nothing to do with survival was, for the time, switched off.</p>
    <div class="section-break">＊ ＊ ＊</div>
    <p>And so a person came to resemble a walking corpse. Hunger, cold, exhaustion, and lack of sleep ground down every desire and emotion, leaving only a dull, heavy fixation on staying alive. Frankl described how prisoners grew accustomed to the cruelty around them, watching a comrade collapse yet lacking both the strength and the will to feel grief, for the heart had long since learned not to feel.</p>
    <p>Yet he also cautioned that this numbness, cruel as it was, was a genuine and reasonable psychological mechanism. It allowed a person to maintain a bare measure of clarity and function in an inhuman environment. To understand this is not to defend apathy, but to see clearly that human reactions under extreme conditions often carry a deeper psychological logic, deserving to be met with understanding rather than judgment.</p>
    <p class="thought-question">🤔 Reflect: When the pressure of life grows past a certain point, have you too found that you simply "stopped feeling"? Was that numbness protecting you, or quietly carrying you away?</p>`
  },
  4: {
    num: 'Section 4',
    title: 'Amid Hunger and Cold -- Love and the Inner Life',
    epigraph: '“Love is the ultimate and the highest longing of a human being.”',
    body: `<p>Surprisingly, it was in the most impoverished and most numbed of surroundings that Frankl found the prisoner's inner life could in fact grow deeper. When the outer world had been stripped to near nothingness, certain inner realms that everyday life usually keeps hidden rose to the surface instead, becoming unusually clear and important.</p>
    <p>He recorded one early morning: it was still dark, and the column was being driven forward through a bitter wind, over ground frozen into mud, with men beside him stumbling and falling. And in exactly such a moment his thoughts drifted to his wife. In his mind he spoke with her, gazing at her face as memory held it, and that imagined presence brought him a warmth and strength that felt entirely real.</p>
    <div class="section-break">＊ ＊ ＊</div>
    <p>It was through such an experience that Frankl grasped something: the highest goal a person can reach for is in truth attained through love. Love, he said, is the ultimate and the highest longing of a human being. Even when there is no way of knowing whether the beloved is still alive, love loses none of its meaning -- because what love points toward is the spiritual essence of that person, and that is something not even death can truly erase.</p>
    <p>He observed, too, that some prisoners, worn down by hunger and cold, could still be moved by a stroke of sunset or the outline of a mountain ridge, forgetting their circumstances for a moment. The inner spiritual life became the last stronghold against outer deprivation. So long as a person could still keep the one he loved within his heart, and still hold a sense of beauty, he had not yet been utterly defeated.</p>
    <p class="thought-question">🤔 Reflect: In your hardest, most barren moments, what person or thought once held a breath of life open for you inside?</p>`
  },
  5: {
    num: 'Section 5',
    title: 'The Last of the Human Freedoms',
    epigraph: '“He who has a why to live can bear almost any how.”',
    body: `<p>This section is the heart of the book. In the camp Frankl arrived at a conclusion that would later become the cornerstone of his whole way of thinking: a person can be robbed of almost everything -- property, health, family, even bodily freedom -- but one thing can never be taken, and that is the freedom, in any circumstance, to choose one's own attitude.</p>
    <p>He observed that when the same suffering fell upon different people, some grew violent, selfish, bent only on self-preservation, while others became all the more calm, generous, and dignified. This proved that outer circumstances cannot fully determine what kind of person one becomes. Between stimulus and response there always remains a space in which a person may freely choose.</p>
    <div class="section-break">＊ ＊ ＊</div>
    <p>He saw such people with his own eyes: men who, though faint with hunger themselves, would hand their last scrap of bread to a weaker fellow prisoner; who walked through the barracks offering a few words of comfort, giving away the little tenderness they had left. Such people were perhaps few, but the existence of even one was enough to show just how high the human spirit can reach. This, precisely, is what makes a human being human.</p>
    <p>Frankl borrowed a line from Nietzsche to sum up the force that keeps a person alive: "He who has a why to live can bear almost any how." A person who knows clearly why he must live can endure almost any manner of suffering. Once a person finds meaning in his suffering, the suffering ceases to be mere torment and becomes a task he must complete -- one that belongs to him alone.</p>
    <p class="thought-question">🤔 Reflect: In a circumstance you cannot change, you still keep the freedom to choose the attitude with which you meet it -- how do you intend to use that freedom?</p>`
  },
  6: {
    num: 'Section 6',
    title: 'The Third Phase: After Liberation',
    epigraph: '“Freedom came too suddenly, and for a while the mind could not yet learn to believe in it.”',
    body: `<p>The third phase is the state of mind that follows release. Frankl admitted frankly that when freedom finally arrived, it did not bring the burst of ecstasy people had imagined. On the contrary, many prisoners, standing before the open gate, felt instead a strange blankness, as though nothing were quite real.</p>
    <p>He called this state a kind of psychological depersonalization: people walked out mechanically, looked at the grass and the sky before them, knew with their minds that they were free, yet their feelings lagged far behind. A mind long crushed to its limit had, for a time, lost the very capacity to feel joy, and had to learn slowly, all over again, how to experience gladness.</p>
    <div class="section-break">＊ ＊ ＊</div>
    <p>More worthy of caution were the two psychological crises that liberation could bring. The first was bitterness: some, having regained their freedom, felt that after all they had suffered they were now entitled to inflict pain back upon the world, and so they grew coarse and overbearing. Frankl cautioned that having passed through suffering does not automatically make a person noble; how suffering shapes a person still depends on his own choices.</p>
    <p>The second was disillusionment: many survivors returned home only to discover that those who were to have waited for them were long gone, or that the world which had sustained their will to live had already changed. The hope they had cradled for years came to nothing, and they had to face as well the loneliness of others who could never truly understand what they had endured. Release, then, was not the end of suffering, but the start of another long and difficult journey -- of learning to live again, to feel again.</p>
    <p class="thought-question">🤔 Reflect: When you have finally come through a long ordeal, how will you keep that suffering from turning you into a harder, more resentful person, and let it settle instead into a deeper tenderness?</p>`
  }
});
Object.assign(CHAPTER_CONTENT_EN, {
  7: {
    num: 'Section 7',
    title: 'The Will to Meaning',
    epigraph: '“What a human being truly needs is not a life free of tension, but a goal worth striving for.”',
    body: `<p><strong>Core claim:</strong> The most fundamental force that keeps a person going is neither the pursuit of pleasure nor the pursuit of power, but the longing to find meaning in life. Frankl calls this the will to meaning, and he regards it as the primary motive of human existence, one that cannot be reduced to anything else.</p><p><strong>The argument:</strong> Here Frankl draws a line between himself and two Viennese predecessors. Freud traced human motivation back to the pursuit of pleasure, and Adler traced it back to the pursuit of power, or the drive for superiority. Frankl considers both to have mistaken an effect for a cause. Pleasure is not something we aim at directly; it is a by-product that arises naturally once meaning has been fulfilled, and the harder you take aim at happiness as a target, the more it slips away from you. More importantly, meaning is not something a person invents to console himself. It waits somewhere out in the world and asks to be discovered. Life questions us, and our task is to answer through action rather than to compose a comforting story for ourselves. This quality of pointing outward, toward some cause or some person, is what Frankl calls self-transcendence: only by stepping out of himself and devoting himself to a goal beyond himself does a person truly become who he is.</p><div class="section-break">◆ ◆ ◆</div><p><strong>Example:</strong> Imagine a physician who has just retired. He wants for nothing materially and has ample leisure, so by all accounts he should be content, yet he sinks into an inexplicable low mood. He lacks no comfort; what he lacks is something worth giving himself to. When he begins mentoring younger doctors without pay, passing on the experience of a lifetime, the heaviness lifts, not because he chased after happiness, but because he found again a calling that needed his response, and contentment simply followed.</p><p><strong>Takeaway:</strong> When you feel hollow, do not rush to ask how you might become happier. Ask instead what task, or which person, needs you right now to act or to bear responsibility. Turn your focus away from your own feelings and toward something outside yourself that deserves your commitment, and meaning and satisfaction will often arrive uninvited.</p><p class="thought-question">🤔 Reflect: Is there something in your life right now that you would gladly do even though it is hard? If nothing comes to mind, what might that itself be telling you?</p>`
  },
  8: {
    num: 'Section 8',
    title: 'The Existential Vacuum',
    epigraph: '“When a human being is no longer driven by instinct, and no longer told by tradition what he ought to do, he sometimes does not even know what he wants to do.”',
    body: `<p><strong>Core claim:</strong> Modern people commonly fall into what Frankl calls the existential vacuum, an inner emptiness, boredom, and sense of being adrift. When the will to meaning goes unsatisfied, this vacuum becomes the breeding ground for many of the psychological troubles of our age.</p><p><strong>The argument:</strong> Frankl points out that humanity has paid a double price in the course of its evolution. First, we long ago lost the certainty animals have of being directed by instinct, so instinct no longer decides for us what to do. Second, in modern times the guidance once supplied by tradition, religion, and custom has largely collapsed, so tradition no longer decides for us what to do either. Human beings are thus left in a vacuum, with no instinct to follow and no tradition to lean on, unable even to say clearly what they truly want. This emptiness reveals itself most typically in boredom, which Frankl labels the Sunday neurosis: when a week of busyness comes to a halt and the inner poverty of life has nowhere to hide, a wave of dullness and loss sets in. To fill the vacuum, people tend to take one of two wrong turns: conformism, doing what everyone else does, or submission, doing what others tell them to do. Beyond that, people often try to plug the hole with the pursuit of power, especially money, or the pursuit of pleasure, including a compensatory excess of sexuality. Yet the more they pour in, the deeper the hole seems to grow.</p><div class="section-break">◆ ◆ ◆</div><p><strong>Example:</strong> A person packs his days airtight with overtime, social obligations, and endless scrolling, and it all looks full enough. But on the first day of a long holiday, when the noise suddenly falls away, he grows inexplicably restless and can only go hunting for another dinner, another shopping trip, another stimulation to fill the time. What he is really fleeing is not having nothing to do, but the vacuum that surfaces the moment things go quiet, the sense of not knowing what he is living for.</p><p><strong>Takeaway:</strong> Boredom and emptiness are not necessarily an illness; they are more like a signal reminding you that the place where meaning belongs is currently vacant. Covering that signal with consumption, busyness, or going along with the crowd only guarantees it will return later, and louder. Rather than rushing to fill the void, it is better first to admit it honestly, and then to seek the answer that truly belongs to you.</p><p class="thought-question">🤔 Reflect: When you are alone and doing nothing at all, what rises up in you, a sense of peace, or a restless urge to grab hold of something to fill the silence?</p>`
  },
  9: {
    num: 'Section 9',
    title: 'The Three Paths to Meaning',
    epigraph: '“When we can no longer change our situation, the challenge shifts to ourselves, to changing who we are.”',
    body: `<p><strong>Core claim:</strong> The meaning of life is not some lofty abstraction beyond reach. It can be discovered and realized within concrete living, along three paths: creative work, experience, and the attitude one chooses in the face of unavoidable suffering.</p><p><strong>The argument:</strong> Frankl gathers the routes to meaning into three kinds. The first is the value of creative work: by doing something, accomplishing a piece of work, or leaving some contribution to the world, we put meaning into action. The second is the value of experiencing and love: by experiencing truth, goodness, and beauty, by giving ourselves to nature and culture, and above all by loving another person and seeing in that person a unique and irreplaceable possibility, we receive meaning from the world. The third, and the one Frankl values most, is the value of attitude: when a person is trapped in a situation he cannot change and faces suffering he cannot escape, he still holds a final freedom, the freedom to choose in what spirit he will bear it. The first two paths are active giving and receiving; the third is the way a person can still prove the height of what it means to be human even after everything has been stripped away. Precisely because the suffering itself cannot be avoided, how a person carries it becomes the deepest achievement he is able to offer. Frankl adds an important caution: this is not a call to seek out suffering. If suffering can be avoided, removing it is the meaningful thing to do; the value of attitude comes into play only when the suffering is genuinely unavoidable.</p><div class="section-break">◆ ◆ ◆</div><p><strong>Example:</strong> Frankl tells of an elderly physician who had fallen into inconsolable grief after the death of his beloved wife. Frankl offered no consolation, but asked instead: suppose you had died first and she had been the one left behind, what would that have been like? The doctor answered that she would have suffered terribly. So Frankl said: she has now been spared that suffering, and the price of sparing her is that you must bear this grief. The fact of losing his wife could not be changed, but the physician's way of seeing it changed, and from then on his suffering carried meaning. It was a burden he had taken on in place of the one he loved. He was no longer a victim of fate but its guardian.</p><p><strong>Takeaway:</strong> When life goes smoothly, build up meaning through creative work and love; when the storm arrives and nothing can be done, do not forget that you still hold one last freedom that cannot be taken from you, the freedom to decide in what spirit you will face it. Change what can be changed; and in what cannot be changed, live with dignity through the way you choose to bear it.</p><p class="thought-question">🤔 Reflect: Looking back on one of the hardest stretches you have lived through, did the attitude you chose at the time quietly change what that experience came to mean for you?</p>`
  }
});
Object.assign(CHAPTER_CONTENT_EN, {
  10: {
    num: 'Section 10',
    title: 'The Meaning of Suffering',
    epigraph: '“Once suffering finds a meaning, it ceases to be mere suffering.”',
    body: `<p><strong>Core claim:</strong> When a person is forced to face suffering that cannot be changed and cannot be escaped, one freedom always remains: the freedom to choose the attitude with which to bear it. That very act of bearing can become an ultimate source of meaning. We cannot decide whether fate falls upon us, but we can decide how we stand before it.</p><p><strong>The argument:</strong> Frankl points out that the meaning of life comes not only from what we create or experience, but also from how we meet an unavoidable predicament. When a person can no longer alter the situation -- a terminal illness, the loss of someone irreplaceable -- he is pushed to a turning point. The question is no longer what he can still get from life, but what life is asking of him through this suffering. To bear it with dignity, to turn it into an inner achievement, is something no external force can strip away. Yet Frankl draws the line carefully: this is in no way a glorification of suffering, nor an encouragement to seek pain. If suffering can be avoided, then removing its cause is the wise course; to endure a pain one could have removed is not heroism but self-torment. Only when suffering is truly unavoidable does giving it meaning become necessary.</p><div class="section-break">◆ ◆ ◆</div><p><strong>Example:</strong> Frankl once saw an elderly doctor who had fallen into an inconsolable grief after his wife died. Frankl offered no comfort; instead he asked what would have happened if the doctor had died first, leaving his wife to survive him alone. The old man replied that it would have been a terrible ordeal for her. Frankl then said: now that this pain is borne by you, you have spared her that ordeal -- and the price is that you must go on living, and mourn her. The doctor silently shook his hand and left in peace. The pain was not lessened by a single degree, but once it carried the meaning of a sacrifice, it became bearable.</p><p><strong>Takeaway:</strong> We cannot choose whether suffering comes, but we can choose what meaning to give it. This is not about beautifying pain; it is a reminder that even in the most helpless situation a person still holds one freedom that cannot be taken. What can be changed, change; what cannot be changed, bear with dignity.</p><p class="thought-question">🤔 Reflect: In the hardships you have lived through, which could have been changed but were not, and which were truly unavoidable, leaving you only the choice of how to face them? Can you tell the two apart?</p>`
  },
  11: {
    num: 'Section 11',
    title: 'Super-Meaning and the Transitoriness of Life',
    epigraph: '“Whatever has once been can never be undone.”',
    body: `<p><strong>Core claim:</strong> A person may never grasp with reason the ultimate meaning of suffering, yet he can still trust that it carries a meaning beyond the reach of the intellect -- what Frankl calls super-meaning. Alongside this he offers a claim that is often misunderstood: the most certain and unshakable mode of being is, in fact, the past.</p><p><strong>The argument:</strong> Frankl admits that human reason has its limits. We often cannot see why a given suffering came or where it points, much as an animal on the vet's table cannot understand the kindness behind the needle that hurts it. Our own place within the whole web of meaning may likewise lie beyond what reason can hold. Facing this limit, Frankl calls not for understanding but for trust -- a trust that beyond our narrow view there is a higher order of meaning, even if it cannot be proven now. As for the brevity and impermanence of life, he reverses the usual pessimism. People lament that time slips away and that all things come to nothing, yet they overlook one fact: everything we have lived, loved, suffered, and accomplished has already been placed into the storehouse of the past, which no one can break into. The future is not yet decided, the present passes in an instant; only the past is forever preserved, a reality that cannot be taken away.</p><div class="section-break">◆ ◆ ◆</div><p><strong>Example:</strong> Frankl uses an image to sketch two attitudes toward life. The pessimist is like someone who tears a page off the calendar each day and grows afraid as the pile thins. The one who knows how to cherish life carefully notes his diary on the back of each torn page before filing it away -- he knows those days have not vanished but are safely kept, and that all their fullness, love, and struggle have become an indelible part of what is. What is gone is not emptiness but completion.</p><p><strong>Takeaway:</strong> Facing suffering we cannot fully fathom, we need not demand to understand it all; we can choose to trust that it may hold a meaning beyond reason. Facing the limits of life, we need not see only loss; we can also see the accumulation of what we have achieved. Every moment you have lived is already carved permanently into being -- and this is the deepest steadiness within all impermanence.</p><p class="thought-question">🤔 Reflect: If the past is your most certain wealth, then what kind of content are you storing, right now, into that storehouse no one can take from you?</p>`
  },
  12: {
    num: 'Section 12',
    title: 'Paradoxical Intention',
    epigraph: '“The harder you strive for it, the more it eludes you.”',
    body: `<p><strong>Core claim:</strong> Against the vicious circles of anxiety and compulsion, Frankl offers two concrete techniques: paradoxical intention -- deliberately wishing for the very thing one fears most -- and dereflection -- turning attention away from an excessive focus on oneself. Both share one key aim: to break the self-reinforcing loop of "the more you fear it, the worse it gets; the worse it gets, the more you fear it."</p><p><strong>The argument:</strong> Many neurotic troubles arise not from the problem itself but from the fear of it and the excessive attention paid to it. A person afraid of sleeplessness grows more awake the harder he tries to sleep; a person afraid of blushing burns redder the more he guards against it. This anticipatory anxiety manufactures the very outcome it dreads, closing a loop. The cleverness of paradoxical intention lies in doing the opposite: the patient is asked to deliberately wish for the feared thing to happen -- meeting it with humor and self-mockery. When a person can joke about his own symptom and open a gap of distance from it, the tension on which the fear runs is drained away. This draws on a capacity unique to human beings: the power of self-detachment. Dereflection, meanwhile, addresses another class of trouble rooted in excessive self-observation -- by turning the gaze away from oneself and toward outer people and tasks, the symptom often fades once it is no longer watched.</p><div class="section-break">◆ ◆ ◆</div><p><strong>Example:</strong> Frankl tells of a patient long tormented by excessive sweating, for whom the mere dread of an occasion where he expected to sweat was enough to make him drip. Frankl taught him that the next time he felt the sweat coming on, he should say to himself: I only sweated a liter before -- this time let me show everyone what ten liters looks like! The patient, hunted by fear for years, was freed from the vicious circle in just one week. With exaggerated self-mockery, he turned his fear into a joke.</p><p><strong>Takeaway:</strong> The harder you grasp, the more easily it slips; the more deliberately you avoid, the more tightly it clings. Sometimes the cure lies not in a head-on fight but in daring to mock yourself, to open a distance, even to embrace the very thing you fear. Humor and self-detachment are an underrated yet powerful weapon in a person's struggle against neurotic chains.</p><p class="thought-question">🤔 Reflect: Is there some trouble that clings to you all the more the harder you try to overcome it? What might happen if you tried to "welcome" it with a joking attitude?</p>`
  },
  13: {
    num: 'Section 13',
    title: 'The Case for a Tragic Optimism',
    epigraph: '“To say yes to life in spite of everything.”',
    body: `<p><strong>Core claim:</strong> Life inescapably contains pain, guilt, and death -- what Frankl calls the tragic triad. A tragic optimism is not a naive cheerfulness that ignores these three; it is the ability to say a firm "yes" to life even while knowing they cannot be escaped. This is where the book comes to rest, and the ultimate stance of logotherapy.</p><p><strong>The argument:</strong> Optimism cannot be commanded, and happiness cannot be forced; they can only arise on their own once a person has found meaning. Frankl holds that even within the tragic triad a person still keeps the potential to turn hardship into achievement. First, one can turn suffering into an achievement and a tempering of character -- when suffering is unavoidable, the very posture of bearing it is meaning. Second, one can turn guilt into a change for the better -- to admit a fault is not for the sake of self-punishment but to become a better person. Third, one can turn the brevity and finitude of life into an incentive for responsible action now -- precisely because time is limited and the chance will not come again, each present choice carries such weight. True optimism is not the belief that everything will turn out fine; it is the willingness, after seeing all the cruelty clearly, to go on living actively and responsibly.</p><div class="section-break">◆ ◆ ◆</div><p><strong>Example:</strong> Frankl observed that what a person needs most in extremity is not cheap comfort but a reason worth being responsible for. In his later years he often quoted Nietzsche: he who has a why to live can bear almost any how. Those who survived the camps were often not the physically strongest, but those who still held in their hearts some unfinished task, some person waiting to be reunited with them. It was that unfulfilled meaning that pulled them back from the abyss. The book begins with a firsthand descent into that abyss and finally lands here: meaning does not wait in the distance to be discovered; it waits, in every present moment, every suffering, every choice, to be given by one's own hand.</p><p><strong>Takeaway:</strong> To say "yes" to life has never been because life is easy or beautiful, but because even when it is cruel and finite, a person can still find within it a meaning worth bearing. Pain, guilt, and death cannot take a person's last freedom -- the freedom to choose an attitude, to choose to change, to choose to be responsible. This is the steadiest answer Frankl leaves to the world.</p><p class="thought-question">🤔 Reflect: If you had to find, even after clearly seeing that pain, guilt, and death are all unavoidable, one reason to still say "yes" to life -- what would that reason be?</p>`
  }
});
Object.assign(CHAPTER_CONTENT_EN, {
  14: { num: 'Appendix · Reader’s Review', title: 'Choosing Your Attitude Toward Suffering Is the Ultimate Freedom', epigraph: '“Real freedom is not choosing your dinner or your job, but choosing the attitude with which you face hardship.”　— Kun Han Le', body: `
<p><em>This is the site owner Kun Han Le’s own review of Frankl’s book (first published on his personal blog, 2020). What follows is a faithful condensation, keeping his points and his modern parallels.</em></p>
<p>Frankl was an Austrian Jewish psychiatrist. The book comes in two parts: the first half is a semi-autobiographical account of his time in the Nazi concentration camps; the second develops his psychological system, logotherapy. What sets this book apart from other camp memoirs is that Frankl’s psychiatric training let him analyze, with striking depth, the mental states and transformations of the prisoners — coolly observing how the inmates, and he himself, responded to that hell on earth.</p>
<div class="section-break">＊ ＊ ＊</div>
<p><strong>Two psychological stages in the camp.</strong> The first is "shock": on arrival, prisoners were stripped of all possessions and identity, reduced to a number; guards treated them as sub-human and handed out arbitrary, senseless punishments. The second is "apathy" — a self-protective mechanism: when conditions became unbearable and unchangeable, prisoners numbed their feelings and became like "walking corpses."</p>
<p><strong>The last of the human freedoms.</strong> Though all the suffering was unavoidable, all sorrow preordained, and all resistance futile, one freedom remained: <strong>to choose one’s attitude in facing it all</strong>. That is real freedom — not the ability to pick a dinner or a career, but the capacity to meet hardship with dignity. Frankl saw prisoners, thin as skeletons, still share their bread with the sick; others kept urging fellow inmates not to give up hope. These people showed what distinguishes humans from animals — the power to rise above instinctive reaction and choose one’s response.</p>
<div class="section-break">＊ ＊ ＊</div>
<p><strong>Three paths to meaning.</strong> According to logotherapy, a person can find meaning in three ways: (1) creating and working; (2) experiencing beauty, love, and life; and (3) <strong>bearing unavoidable suffering</strong>. When facing inescapable pain — the death of a loved one, job loss, betrayal — a person is given an opportunity to realize their own value and meaning through the response they choose.</p>
<p><strong>His modern parallel.</strong> Kun Han Le adds: you needn’t go to an extreme like a camp. Even everyday frustrations — a sudden downpour, a rude driver, a packed train — test our reason. Our response defines who we are. When we choose composure and compassion over instinctive anger, we transcend our biological programming and reach a genuine freedom. <strong>His takeaway:</strong> Frankl’s point is not that suffering is somehow great, but that in any circumstance you still hold that sliver of freedom — the freedom to choose your attitude — and that sliver decides who you are.</p>
<p class="thought-question">🤔 Reflect: Next time you are provoked, interrupted, or wronged by fate, can you remember this freedom — that between stimulus and response, you can still choose the kind of person you want to be?</p>
`
  }
});

// ---- fold English section bodies into CHAPTER_CONTENT as { zh, en } ----
Object.keys(CHAPTER_CONTENT).forEach(function (k) {
  var z = CHAPTER_CONTENT[k] || {}, e = CHAPTER_CONTENT_EN[k] || {};
  CHAPTER_CONTENT[k] = {
    num:      { zh: z.num || '',      en: e.num || z.num || '' },
    title:    { zh: z.title || '',    en: e.title || z.title || '' },
    epigraph: { zh: z.epigraph || '', en: e.epigraph || z.epigraph || '' },
    body:     { zh: z.body || '',     en: e.body || z.body || '' }
  };
});
