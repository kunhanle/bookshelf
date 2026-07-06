// ==== 三體 The Three-Body Problem · 中英雙語 metadata（科幻小說／文學框架）====
const BOOK = {
  slug: 'santi',
  langs: ['zh', 'en'],
  title: { zh: '三體', en: 'The Three-Body Problem' },
  author: { zh: '劉慈欣', en: 'Liu Cixin' },
  theme: {
    'bg-primary': '#0b0d12', 'bg-secondary': '#11141b', 'bg-card': '#171b24', 'bg-elevated': '#1f2430',
    'text-primary': '#e4e8f0', 'text-secondary': '#9fa8ba', 'text-muted': '#6d7686',
    'accent': '#cf4130', 'accent-light': '#e8705f', 'accent-glow': 'rgba(207,65,48,0.32)',
    'rose': '#c0566a', 'jade': '#5fae9a', 'blue': '#5b8fd0', 'gold': '#d0a84e',
    'border': 'rgba(207,65,48,0.16)',
    atmosphere: { fall: 22, streak: 3, fallRadius: '50%' },
    dayMode: { 'bg-primary': '#e9ecf2', 'bg-secondary': '#dde1ea', 'bg-card': '#f8f9fc', 'bg-elevated': '#eef0f6', 'text-primary': '#1c2230', 'text-secondary': '#414a5c', 'text-muted': '#6f7789', 'border': 'rgba(120,60,50,0.22)' }
  },
  cover: {
    seal: '三',
    subtitle: { zh: '地球往事 · 第一部', en: 'Remembrance of Earth’s Past · Book I' },
    desc: { zh: '一個文明按下了發送鍵，<br>從此，群星不再沉默。', en: 'One civilization pressed “send” —<br>and the stars fell silent no more.' }
  },
  musicPrompt: { zh: '望向四光年外的三顆太陽，<br>是否播放一段背景音樂？', en: 'Look toward three suns four light-years away —<br>shall we play some music?' },
  intro: {
    subtitle: { zh: '在閱讀之前，先認識這場橫跨光年的相遇', en: 'Before you read, meet this encounter across the light-years' },
    author: {
      name: { zh: '劉慈欣', en: 'Liu Cixin' },
      portrait: { zh: '劉', en: 'L' },
      years: { zh: '1963 —　中國科幻作家', en: '1963 —　Chinese science-fiction writer' },
      bio: { zh: '中國最重要的科幻作家，曾任電廠工程師，長年在業餘時間寫作。以宏大的宇宙尺度、冷峻的理性與對文明命運的思辨著稱。《三體》（2006 連載、2008 出版）是「地球往事」三部曲的第一部，把文化大革命的歷史傷痕、硬科幻的想像與人類文明的存亡編織在一起；其英譯本 2015 年獲雨果獎最佳長篇，是首部獲此殊榮的亞洲作品，讓中國科幻走向世界。', en: 'China’s most important science-fiction writer, a former power-plant engineer who wrote for years in his spare time. He is known for a vast cosmic scale, a cold rationality, and a deep meditation on the fate of civilizations. The Three-Body Problem (serialized 2006, published 2008) is the first volume of the Remembrance of Earth’s Past trilogy, weaving together the scars of the Cultural Revolution, hard-science imagination, and the survival of human civilization; its English translation won the 2015 Hugo Award for Best Novel — the first Asian work to do so — and carried Chinese science fiction onto the world stage.' }
    },
    cards: [
      { icon: '📡', title: { zh: '故事梗概', en: 'The Story' }, text: { zh: '文革中，一個絕望的物理學者向宇宙發出了地球文明的第一聲呼喊，也親手洩露了地球的座標。四光年外，一個受三顆太陽折磨、瀕臨滅亡的文明收到了訊息，開始了漫長的入侵。數十年後，當代科學家汪淼與刑警史強，一步步揭開這場橫跨光年的陰謀。', en: 'During the Cultural Revolution, a despairing physicist sends humanity’s first cry into the cosmos — and gives away Earth’s coordinates. Four light-years away, a civilization tormented by three suns and near extinction receives it, and a long invasion begins. Decades later, a present-day scientist, Wang Miao, and a detective, Da Shi, unravel a conspiracy that spans the light-years.' } },
      { icon: '🌌', title: { zh: '故事舞台', en: 'The Setting' }, text: { zh: '從一九六七年的批鬥現場，到絕密的紅岸基地；從當代都市的科學迷案，到一款名為《三體》的虛擬遊戲裡那個被三顆太陽反覆摧毀的世界。真實的歷史與宇宙的想像，在此交會。', en: 'From a 1967 struggle session to the top-secret Red Coast Base; from a present-day scientific mystery to a virtual game called “Three Body,” where a world is destroyed again and again by three suns. Real history meets cosmic imagination here.' } },
      { icon: '🎭', title: { zh: '一個關鍵的抉擇', en: 'One Fateful Choice' }, text: { zh: '全書的引信，是葉文潔的一次選擇：當三體世界的和平主義者警告「不要回答」，對人類已徹底絕望的她，卻按下了回覆鍵。個人的絕望，如何改寫了整個文明的命運？這是本書最沉重的叩問。', en: 'The book’s fuse is one choice by Ye Wenjie: when a pacifist on Trisolaris warns “Do not answer,” she — utterly disillusioned with humanity — presses reply anyway. How does one person’s despair rewrite the fate of a whole civilization? That is the book’s heaviest question.' } },
      { icon: '🧭', title: { zh: '閱讀建議', en: 'How to Read' }, text: { zh: '先看「人物譜」理清地球、地球三體組織與三體文明三方的關係，再對照「時代軸」把文革與現代兩條線接起來，然後逐章閱讀。這是硬科幻，慢一點讀，那些冷冽的想像才會發亮。', en: 'Start with the Cast to sort out the three sides — Earth, the Earth-Trisolaris Organization, and Trisolaris — read against the Timeline to join the Cultural Revolution thread with the present-day one, then go chapter by chapter. This is hard science fiction; read slowly, and its cold imagination will glow.' } }
    ],
    guide: [
      { h: { zh: '從人物與陣營入手', en: 'Start with the sides' }, p: { zh: '先在「人物譜」認清三方：地球陣營（汪淼、史強）、地球三體組織（葉文潔、伊文斯）、三體文明。搞懂誰站在哪一邊，是讀懂全書的第一步。', en: 'In the Cast, sort out the three sides: Earth (Wang Miao, Da Shi), the Earth-Trisolaris Organization (Ye Wenjie, Evans), and Trisolaris. Knowing who stands where is the first step.' } },
      { h: { zh: '接起兩條時間線', en: 'Join the two timelines' }, p: { zh: '打開「時代軸」，把一九六○年代的紅岸往事與當代的科學迷案並排看——葉文潔的過去，正是現在一切的起點。', en: 'Open the Timeline and set the 1960s Red Coast past beside the present-day mystery — Ye Wenjie’s past is the origin of everything now.' } },
      { h: { zh: '逐章沉浸閱讀', en: 'Read chapter by chapter' }, p: { zh: '在「閱讀」模組逐章讀情節重述，留意那些宇宙尺度的想像與冷冽的抉擇。隨時用「札記」記下你被震撼或不安的地方。', en: 'In the Reading module, go through the retold plot, noting the cosmic-scale imagination and the cold choices. Use Notes for what awes or unsettles you.' } },
      { h: { zh: '從主題回望全書', en: 'Look back through the themes' }, p: { zh: '讀完後到「主題」模組，從宇宙的孤獨、對人性的絕望、亂紀元的生存、智子鎖死的科學等角度，系統性地回看這個故事。', en: 'When you finish, visit the Themes and look back over the story through cosmic loneliness, despair in humanity, survival in the Chaotic Era, and science locked by the sophon.' } },
      { h: { zh: '品味金句與自省', en: 'Savor the lines and reflect' }, p: { zh: '在「金句」收藏那些直擊人心的句子（「不要回答」「你們是蟲子」），在「札記」寫下：如果是你，會按下那個回覆鍵嗎？', en: 'Collect the lines that strike home in Quotes (“Do not answer,” “You are bugs”), and write in Notes: if it were you, would you press reply?' } }
    ]
  },
  families: [
    { id: 'earth', label: { zh: '地球陣營', en: 'Earth’s Side' } },
    { id: 'eto', label: { zh: '地球三體組織', en: 'The ETO' } },
    { id: 'trisolaris', label: { zh: '三體文明', en: 'Trisolaris' } }
  ],
  timelineSubtitle: { zh: '從一九六七年的一聲槍響，到四光年外的一支艦隊', en: 'From a gunshot in 1967 to a fleet four light-years away' },
  graph: {
    title: { zh: '— 三 方 · 人 物 關 係 圖 —', en: '— Three Sides: A Map of Relations —' },
    nodes: [
      { id: 'yezhetai',   label: { zh: '葉哲泰', en: 'Ye Zhetai' },   x: 130, y: 95,  tier: 'minor', color: '#9fa8ba' },
      { id: 'yewenjie',   label: { zh: '葉文潔', en: 'Ye Wenjie' },   x: 255, y: 178, tier: 'lead',  color: '#cf4130' },
      { id: 'yangdong',   label: { zh: '楊冬', en: 'Yang Dong' },     x: 168, y: 300, tier: 'minor', color: '#c0566a' },
      { id: 'dingyi',     label: { zh: '丁儀', en: 'Ding Yi' },       x: 108, y: 385, tier: 'minor', color: '#5b8fd0' },
      { id: 'wangmiao',   label: { zh: '汪淼', en: 'Wang Miao' },     x: 400, y: 288, tier: 'lead',  color: '#5b8fd0' },
      { id: 'dashi',      label: { zh: '史強（大史）', en: 'Da Shi' }, x: 300, y: 402, tier: 'major', color: '#d0a84e' },
      { id: 'shenyufei',  label: { zh: '申玉菲', en: 'Shen Yufei' },  x: 470, y: 178, tier: 'minor', color: '#c0566a' },
      { id: 'evans',      label: { zh: '麥克‧伊文斯', en: 'Mike Evans' }, x: 572, y: 112, tier: 'major', color: '#cf4130' },
      { id: 'panhan',     label: { zh: '潘寒', en: 'Pan Han' },       x: 642, y: 205, tier: 'minor', color: '#c0566a' },
      { id: 'trisolaris', label: { zh: '三體文明', en: 'Trisolaris' }, x: 688, y: 318, tier: 'major', color: '#cf4130' },
      { id: 'sophon',     label: { zh: '智子', en: 'The Sophon' },    x: 605, y: 405, tier: 'minor', color: '#5fae9a' }
    ],
    edges: [
      { from: 'yezhetai', to: 'yewenjie', kind: 'family' },
      { from: 'yewenjie', to: 'yangdong', kind: 'family' },
      { from: 'yangdong', to: 'dingyi', kind: 'love' },
      { from: 'wangmiao', to: 'dashi', kind: 'family' },
      { from: 'wangmiao', to: 'shenyufei', kind: 'rivalry' },
      { from: 'yewenjie', to: 'evans', kind: 'family' },
      { from: 'yewenjie', to: 'trisolaris', kind: 'love' },
      { from: 'evans', to: 'trisolaris', kind: 'love' },
      { from: 'shenyufei', to: 'yewenjie', kind: 'family' },
      { from: 'panhan', to: 'yewenjie', kind: 'family' },
      { from: 'trisolaris', to: 'sophon', kind: 'family' },
      { from: 'sophon', to: 'wangmiao', kind: 'rivalry' },
      { from: 'dashi', to: 'shenyufei', kind: 'rivalry' }
    ]
  },
  footer: {
    quote: { zh: '「不要回答！不要回答！！不要回答！！！」', en: '“Do not answer! Do not answer!! Do not answer!!!”' },
    tagline: { zh: '三體 · 沉浸式閱讀 · 一個文明對宇宙的第一聲呼喊', en: 'The Three-Body Problem · Immersive Reading · A civilization’s first cry into the cosmos' }
  }
};

const P1 = { zh: '卷一 · 瘋狂年代', en: 'Part One · The Age of Madness' };
const P2 = { zh: '卷二 · 幽靈倒數', en: 'Part Two · The Ghost Countdown' };
const P3 = { zh: '卷三 · 三體遊戲', en: 'Part Three · The Three-Body Game' };
const P4 = { zh: '卷四 · 真相與智子', en: 'Part Four · Truth and the Sophon' };

const CHAPTERS = [
  { id: 1,  group: P1, title: { zh: '一九六七年的槍聲', en: '1967: The Gunshots' }, pages: '',
    reflectQ: { zh: '當一個時代連「講真話的科學」都要用暴力消滅，一個親眼目睹這一切的孩子，會對人類抱著怎樣的看法長大？', en: 'When an age destroys even truth-telling science with violence, how would a child who witnessed it grow up to see humanity?' } },
  { id: 2,  group: P1, title: { zh: '大興安嶺的流放', en: 'Exile in the Greater Khingan' }, pages: '',
    reflectQ: { zh: '葉文潔對人性的最後一點希望，是如何在一次次背叛與傷害中熄滅的？絕望，是選擇還是必然？', en: 'How does Ye Wenjie’s last hope in humanity die through betrayal after betrayal? Is despair a choice, or an inevitability?' } },
  { id: 3,  group: P1, title: { zh: '紅岸', en: 'Red Coast' }, pages: '',
    reflectQ: { zh: '一個把探索外星文明當成國家機密的年代，藏著怎樣的恐懼與野心？被半囚禁在其中的人，又會如何自處？', en: 'What fear and ambition hide in an age that makes contacting aliens a state secret? And how does one half-imprisoned inside it survive?' } },
  { id: 4,  group: P1, title: { zh: '太陽是一面天鏡', en: 'The Sun as a Mirror' }, pages: '',
    reflectQ: { zh: '把太陽當成放大器，向群星發出呼喊——這個念頭既浪漫又危險。人類渴望「不再孤獨」的衝動，會不會正是最大的風險？', en: 'Using the sun as an amplifier to call the stars is both romantic and dangerous. Might humanity’s longing to “no longer be alone” be its greatest risk?' } },
  { id: 5,  group: P1, title: { zh: '不要回答', en: 'Do Not Answer' }, pages: '',
    reflectQ: { zh: '一個素未謀面的外星人冒死警告「不要回答」，葉文潔卻按下了回覆鍵。如果是你，在那樣的絕望裡，會怎麼做？', en: 'An alien she has never met risks everything to warn “Do not answer,” yet Ye Wenjie presses reply. In that depth of despair, what would you have done?' } },
  { id: 6,  group: P2, title: { zh: '科學邊界', en: 'The Frontiers of Science' }, pages: '',
    reflectQ: { zh: '一連串頂尖科學家離奇自殺，背後是什麼在動搖他們？當「世界是可理解的」這個信念崩塌，人還撐得住嗎？', en: 'A string of top scientists dies by suicide — what is shaking them? When the belief that “the world is knowable” collapses, can a person still stand?' } },
  { id: 7,  group: P2, title: { zh: '楊冬之死', en: 'The Death of Yang Dong' }, pages: '',
    reflectQ: { zh: '「物理學從來就沒有存在過」——對一個把物理當信仰的人，這句話為何足以致命？你有沒有一個一旦崩塌、便無法承受的信念？', en: '“Physics has never existed” — why is this line lethal to someone who worshipped physics? Do you have a belief whose collapse you could not survive?' } },
  { id: 8,  group: P2, title: { zh: '幽靈倒數', en: 'The Ghost Countdown' }, pages: '',
    reflectQ: { zh: '當整個宇宙為你一個人閃爍，作為警告——那是何等的力量與恐懼？面對遠超自己的存在，人該如何自處？', en: 'When the whole universe flickers for you alone, as a warning — what power, what terror is that? How should one face a presence far beyond oneself?' } },
  { id: 9,  group: P3, title: { zh: '三體', en: 'Three Body' }, pages: '',
    reflectQ: { zh: '一個日夜寒暑毫無規律、文明一次次被毀滅又重建的世界——它像不像某種對「無常」本身的極端寓言？', en: 'A world with no rhythm of day or season, where civilization is destroyed and rebuilt again and again — is it not an extreme parable of impermanence itself?' } },
  { id: 10, group: P3, title: { zh: '脫水者', en: 'The Dehydrated' }, pages: '',
    reflectQ: { zh: '為了熬過無法預測的災難，把自己脫成一卷乾皮收起來——這種極端的生存智慧，讓你想到什麼？', en: 'To survive unpredictable catastrophe, they dry themselves into a rolled-up husk. What does this extreme survival wisdom bring to mind?' } },
  { id: 11, group: P3, title: { zh: '三日凌空', en: 'Three Suns in the Sky' }, pages: '',
    reflectQ: { zh: '三顆太陽彼此拉扯、永遠無法精確預測——當一個文明發現自己的家園註定不穩，它會選擇認命，還是離鄉？', en: 'Three suns pull on one another, forever unpredictable — when a civilization learns its home is doomed to be unstable, does it resign itself, or leave?' } },
  { id: 12, group: P4, title: { zh: '古箏行動', en: 'Operation Guzheng' }, pages: '',
    reflectQ: { zh: '用幾乎看不見的細絲，把一整艘船連人無聲切成薄片——這場冷酷而精準的行動，讓你對「為達目的」的界線有什麼想法？', en: 'Slicing an entire ship and everyone aboard into thin sheets with near-invisible filaments — what does this cold, precise operation make you think about the limits of “the ends justify the means”?' } },
  { id: 13, group: P4, title: { zh: '消滅人類暴政', en: 'Down with Human Tyranny' }, pages: '',
    reflectQ: { zh: '地球三體組織裡，有人盼著三體毀滅人類。是什麼樣的絕望，會讓一個人背叛整個物種、迎接他者的降臨？', en: 'Within the ETO, some long for Trisolaris to destroy humanity. What kind of despair makes a person betray the whole species and welcome the coming of the other?' } },
  { id: 14, group: P4, title: { zh: '主，我們的世界', en: 'Lord, Our World' }, pages: '',
    reflectQ: { zh: '把入侵者奉為「主」的信仰，源於對人類的徹底失望。你認為，對同類的絕望，能不能構成背叛的理由？', en: 'The worship of the invader as “Lord” springs from utter disappointment in humanity. Can despair in one’s own kind ever justify betrayal?' } },
  { id: 15, group: P4, title: { zh: '智子', en: 'The Sophon' }, pages: '',
    reflectQ: { zh: '把一個質子展開、蝕刻成監視全人類的超級電腦——當科學本身被從根鎖死，一個文明還能靠什麼前進？', en: 'Unfolding a single proton into a supercomputer that watches all humanity — when science itself is locked at the root, what can a civilization still advance on?' } },
  { id: 16, group: P4, title: { zh: '蟲子', en: 'The Bugs' }, pages: '',
    reflectQ: { zh: '三體人叫人類「蟲子」，史強卻指著殺不完的蝗蟲說：蟲子從沒被真正戰勝過。在壓倒性的絕望裡，這一絲希望說服你了嗎？', en: 'The Trisolarans call humans “bugs,” yet Da Shi points to unkillable locusts and says: bugs have never truly been defeated. In overwhelming despair, does this sliver of hope convince you?' } }
];

const CHARACTERS = [
  { id: 'yewenjie', name: { zh: '葉文潔', en: 'Ye Wenjie' }, family: 'eto', role: { zh: '一切的起點', en: 'The Origin of Everything' }, icon: '📡', color: '#cf4130',
    desc: { zh: '天體物理學家。文革中親眼目睹父親被批鬥致死，又在流放中一再被人性背叛，對人類徹底絕望。在紅岸基地，她發出了地球的第一封星際訊息，並在收到警告後仍選擇回覆——親手引來了三體文明。', en: 'An astrophysicist. In the Cultural Revolution she watched her father beaten to death, and in exile was betrayed again and again until she lost all hope in humanity. At Red Coast Base she sent Earth’s first interstellar message and, even after a warning, chose to reply — drawing Trisolaris to Earth with her own hand.' },
    analysis: { zh: '葉文潔是全書的悲劇核心，也是最令人不忍評斷的人物。她不是傳統意義的反派——她的背叛，源於一個時代對她最深的傷害。當她相信人類已無力自救、也不配自救時，「請更高等的文明來管教這個世界」竟成了一種扭曲的救贖。她的選擇提出了全書最沉重的問題：一個人對同類的絕望，能大到足以改寫整個文明的命運嗎？', en: 'Ye Wenjie is the tragic heart of the book and its least judgeable figure. She is no ordinary villain — her betrayal springs from the deepest wound an era ever dealt her. Believing humanity powerless to save itself, and unworthy of saving, she comes to see “inviting a higher civilization to discipline this world” as a twisted redemption. Her choice poses the book’s heaviest question: can one person’s despair in their own kind grow large enough to rewrite the fate of a whole civilization?' },
    tags: [ { zh: '天體物理學家', en: 'Astrophysicist' }, { zh: '對人類絕望', en: 'Despair in humanity' }, { zh: '按下回覆鍵', en: 'She pressed reply' } ],
    related: ['yezhetai', 'yangdong', 'evans', 'trisolaris'] },
  { id: 'wangmiao', name: { zh: '汪淼', en: 'Wang Miao' }, family: 'earth', role: { zh: '當代主角', en: 'The Present-Day Protagonist' }, icon: '🔬', color: '#5b8fd0',
    desc: { zh: '奈米材料科學家。因一連串科學家自殺案被捲入調查，被神秘的倒數與宇宙閃爍逼到崩潰邊緣，又循線進入《三體》遊戲，一步步逼近那個橫跨光年的真相。', en: 'A nanomaterials scientist. Drawn into the investigation of a wave of scientist suicides, he is pushed to the edge by a mysterious countdown and a flickering universe, then follows the trail into the “Three Body” game, closing in step by step on a truth that spans the light-years.' },
    analysis: { zh: '汪淼是讀者的眼睛——一個理性、正派的普通科學家，被拖進一個遠超他理解的棋局。透過他的震驚、恐懼與追索，我們得以一層層剝開謎團。他的可貴，在於即使世界觀被徹底顛覆（連物理定律都可能是假的），他仍選擇繼續看下去、繼續追問。他代表了人類面對未知時，那份不肯閉上眼睛的求真。', en: 'Wang Miao is the reader’s eyes — a rational, decent, ordinary scientist dragged into a game far beyond his understanding. Through his shock, fear, and pursuit, the mystery is peeled back layer by layer. His virtue is that even when his worldview is overturned (when even the laws of physics may be false), he keeps looking, keeps asking. He stands for humanity’s refusal to shut its eyes before the unknown.' },
    tags: [ { zh: '奈米材料', en: 'Nanomaterials' }, { zh: '讀者的眼睛', en: 'The reader’s eyes' }, { zh: '不肯閉眼', en: 'Refuses to look away' } ],
    related: ['dashi', 'shenyufei', 'sophon'] },
  { id: 'dashi', name: { zh: '史強（大史）', en: 'Da Shi' }, family: 'earth', role: { zh: '刑警 · 務實的英雄', en: 'Detective · The Pragmatic Hero' }, icon: '🚬', color: '#d0a84e',
    desc: { zh: '粗獷、世故、滿嘴髒話的刑警。看似不懂科學，卻有一種扎根於現實的清醒與膽識。在眾人被宇宙尺度的恐懼壓垮時，是他一次次把大家拉回地面。', en: 'A gruff, worldly, foul-mouthed detective. He seems to know nothing of science, yet has a street-level clarity and nerve rooted in reality. When others are crushed by cosmic-scale terror, it is he who keeps pulling them back to solid ground.' },
    analysis: { zh: '大史是全書最接地氣、也最讓人安心的存在。當科學家們因為「物理不存在」而崩潰時，他的態度很簡單：管它外星人還是神，日子照過、案子照查。正是這種市井的粗糙與韌性，讓他在結尾說出「蟲子從沒被真正戰勝過」——為全書那份宇宙級的絕望，接上了一根人間的地線。他證明：對抗深淵，有時靠的不是更高的智慧，而是不肯認輸的匹夫之勇。', en: 'Da Shi is the most down-to-earth and most reassuring presence in the book. When scientists collapse because “physics doesn’t exist,” his stance is simple: alien or god, life goes on and the case gets worked. It is this street-level roughness and resilience that lets him deliver the ending’s line — “bugs have never truly been defeated” — grounding the book’s cosmic despair with a wire to the human earth. He proves that facing the abyss sometimes takes not higher intelligence, but the plain stubborn courage that refuses to lose.' },
    tags: [ { zh: '接地氣', en: 'Down to earth' }, { zh: '匹夫之勇', en: 'Stubborn courage' }, { zh: '把人拉回地面', en: 'Grounds everyone' } ],
    related: ['wangmiao', 'shenyufei'] },
  { id: 'yezhetai', name: { zh: '葉哲泰', en: 'Ye Zhetai' }, family: 'earth', role: { zh: '葉文潔之父', en: 'Ye Wenjie’s Father' }, icon: '📖', color: '#9fa8ba',
    desc: { zh: '清華大學物理教授。在文革的批鬥大會上，因堅持教授相對論、宇宙大霹靂等「反動」科學、拒不認錯，被紅衛兵毆打致死。', en: 'A physics professor at Tsinghua University. At a Cultural Revolution struggle session, for insisting on teaching “reactionary” science — relativity, the Big Bang — and refusing to recant, he is beaten to death by Red Guards.' },
    analysis: { zh: '葉哲泰在書中出場短暫，卻是整部悲劇的第一塊骨牌。他至死不肯背叛科學真理的尊嚴，與台下女兒的無助形成最痛的對照。他的死不只是一個父親之死，更象徵著一個時代如何用暴力碾碎理性與真話——而正是這一碾，把女兒推向了對全人類的絕望。', en: 'Ye Zhetai appears only briefly, yet he is the first domino of the whole tragedy. His refusal, even unto death, to betray the dignity of scientific truth stands in the most painful contrast to his helpless daughter below. His death is not merely a father’s death; it symbolizes how an era crushed reason and honest speech with violence — and it is exactly this crushing that pushes his daughter toward despair in all humanity.' },
    tags: [ { zh: '物理教授', en: 'Physics professor' }, { zh: '至死守真', en: 'True unto death' }, { zh: '第一塊骨牌', en: 'The first domino' } ],
    related: ['yewenjie'] },
  { id: 'yangdong', name: { zh: '楊冬', en: 'Yang Dong' }, family: 'earth', role: { zh: '理論物理學家 · 葉文潔之女', en: 'Physicist · Ye Wenjie’s Daughter' }, icon: '🕯️', color: '#c0566a',
    desc: { zh: '才華洋溢的理論物理學家，葉文潔的女兒。當最精密的實驗開始得出自相矛盾的結果、物理的根基彷彿崩塌，她在絕望中自殺，遺書只有一句：物理學，從來就沒有存在過。', en: 'A brilliant theoretical physicist, Ye Wenjie’s daughter. When the most precise experiments begin yielding self-contradictory results and the foundations of physics seem to crumble, she dies by suicide in despair, leaving a single line: physics has never existed.' },
    analysis: { zh: '楊冬之死是現代線的第一聲驚雷。對一個把物理當作信仰的人來說，「定律本身可能是假的」不是學術問題，而是世界的塌陷。她的悲劇與外婆、母親兩代人的命運遙相呼應——三代女性，都在各自的時代裡，被一種遠比個人強大的力量擊碎了信念。', en: 'Yang Dong’s death is the first thunderclap of the present-day thread. For someone who worshipped physics, “the laws themselves may be false” is not an academic question but the collapse of the world. Her tragedy echoes the fates of her grandmother and mother — three generations of women, each in her own era, whose faith is shattered by a force far greater than any individual.' },
    tags: [ { zh: '理論物理', en: 'Theoretical physics' }, { zh: '信仰崩塌', en: 'Faith collapses' }, { zh: '三代的迴響', en: 'Three generations’ echo' } ],
    related: ['yewenjie', 'dingyi'] },
  { id: 'dingyi', name: { zh: '丁儀', en: 'Ding Yi' }, family: 'earth', role: { zh: '物理學家', en: 'Physicist' }, icon: '⚛️', color: '#5b8fd0',
    desc: { zh: '理論物理學家，楊冬的伴侶。在楊冬死後，他以冷靜而深刻的科學頭腦，協助汪淼與眾人理解那些顛覆常識的異象。', en: 'A theoretical physicist and Yang Dong’s partner. After her death, with a calm and penetrating scientific mind, he helps Wang Miao and the others make sense of the reality-shattering phenomena.' },
    analysis: { zh: '丁儀代表了「即使世界不可理喻，仍要用理性去逼近它」的科學精神。他失去了摯愛，卻沒有像楊冬那樣被擊垮，反而更冷靜地去追問「為什麼」。在一群被恐懼淹沒的人之中，他和大史從兩個極端——一個靠理智、一個靠膽識——共同守住了人類不肯認輸的底線。', en: 'Ding Yi embodies the scientific spirit of pressing toward the world with reason even when it defies sense. He loses his beloved, yet unlike Yang Dong he is not broken; he grows only more coolly determined to ask “why.” Among people drowning in fear, he and Da Shi — from opposite poles, one through intellect, one through nerve — together hold the line of humanity’s refusal to give up.' },
    tags: [ { zh: '冷靜的理性', en: 'Cool reason' }, { zh: '追問為什麼', en: 'Asks why' } ],
    related: ['yangdong', 'wangmiao'] },
  { id: 'evans', name: { zh: '麥克‧伊文斯', en: 'Mike Evans' }, family: 'eto', role: { zh: '地球三體組織 · 降臨派領袖', en: 'The ETO · Leader of the Adventists' }, icon: '🌿', color: '#cf4130',
    desc: { zh: '環保富豪之子。因對人類無止盡破壞自然的絕望，成為地球三體組織中最激進的「降臨派」領袖，甚至建起「第二紅岸」持續與三體通訊，一心盼著人類被清除。', en: 'The heir to an environmentalist fortune. In despair at humanity’s endless destruction of nature, he becomes the most radical leader of the ETO’s “Adventists,” even building a “Second Red Coast” to keep communicating with Trisolaris, longing for humanity to be wiped away.' },
    analysis: { zh: '伊文斯與葉文潔是 ETO 的兩根支柱，也是兩種絕望的化身：葉文潔絕望於人性的殘酷，伊文斯絕望於人類對自然的貪婪。他把「物種平等」推到極端，竟認為讓人類滅絕才是正義。他的存在拋出一個尖銳的問題：當理想主義走到盡頭、對人類徹底失望時，它會不會反過來變成最徹底的反人類？', en: 'Evans and Ye Wenjie are the two pillars of the ETO, and two embodiments of despair: she despairs of humanity’s cruelty, he of humanity’s greed toward nature. Pushing “equality of species” to an extreme, he comes to believe that human extinction would be justice. His presence poses a sharp question: when idealism reaches its end and loses all faith in humanity, might it turn into the most thorough anti-humanism of all?' },
    tags: [ { zh: '環保激進', en: 'Radical environmentalist' }, { zh: '降臨派', en: 'The Adventists' }, { zh: '極端的理想', en: 'Idealism at its extreme' } ],
    related: ['yewenjie', 'trisolaris'] },
  { id: 'shenyufei', name: { zh: '申玉菲', en: 'Shen Yufei' }, family: 'eto', role: { zh: '地球三體組織成員', en: 'A Member of the ETO' }, icon: '🎮', color: '#c0566a',
    desc: { zh: '沉默而神秘的物理學者，地球三體組織成員。是她把汪淼引進《三體》遊戲，成為他窺見真相的第一道門。', en: 'A silent, enigmatic physicist and member of the ETO. It is she who draws Wang Miao into the “Three Body” game — the first door through which he glimpses the truth.' },
    analysis: { zh: '申玉菲像一枚安靜的棋子，把主角一步步引向那個橫跨光年的謎。她的沉默與虔誠，是組織裡許多「信徒」的縮影——他們未必都懂宇宙的全貌，卻各自懷著一種近乎宗教的確信，把一個外星文明當成了信仰的對象。', en: 'Shen Yufei is like a quiet chess piece, guiding the protagonist step by step toward the mystery that spans the light-years. Her silence and devotion are a portrait of the many “believers” in the organization — they may not grasp the full cosmic picture, yet each holds a near-religious conviction, making an alien civilization the object of their faith.' },
    tags: [ { zh: '神秘', en: 'Enigmatic' }, { zh: '引路人', en: 'The guide' }, { zh: '虔誠的信徒', en: 'A devout believer' } ],
    related: ['wangmiao', 'yewenjie'] },
  { id: 'panhan', name: { zh: '潘寒', en: 'Pan Han' }, family: 'eto', role: { zh: '地球三體組織 · 拯救派', en: 'The ETO · A Redemptionist' }, icon: '🧬', color: '#c0566a',
    desc: { zh: '知名生物學者，地球三體組織成員，傾向「拯救派」。與盼著人類滅絕的降臨派不同，拯救派仍幻想著能拯救三體、甚至同時拯救人類。', en: 'A well-known biologist and ETO member, leaning toward the “Redemptionists.” Unlike the Adventists who long for human extinction, the Redemptionists still dream of saving Trisolaris — and perhaps humanity too.' },
    analysis: { zh: '潘寒代表了 ETO 內部的路線分歧。同樣是背棄了現世的人類、把希望寄託於三體，拯救派與降臨派卻在「該不該讓人類活下去」上勢同水火。這條內部裂痕提醒我們：即使是一群「叛徒」，也並非鐵板一塊——絕望之中，人們對「救贖」的想像依然南轅北轍。', en: 'Pan Han embodies the ideological split within the ETO. Though both have turned from present-day humanity and pinned their hopes on Trisolaris, the Redemptionists and Adventists are bitterly opposed over whether humanity should be allowed to live. This inner fracture reminds us that even a band of “traitors” is no monolith — in despair, people’s visions of “redemption” still point in opposite directions.' },
    tags: [ { zh: '生物學者', en: 'Biologist' }, { zh: '拯救派', en: 'The Redemptionists' }, { zh: '內部分歧', en: 'The inner split' } ],
    related: ['yewenjie'] },
  { id: 'trisolaris', name: { zh: '三體文明', en: 'Trisolaris' }, family: 'trisolaris', role: { zh: '四光年外的文明', en: 'The Civilization Four Light-Years Away' }, icon: '🌗', color: '#cf4130',
    desc: { zh: '距地球四光年、圍繞三顆太陽運行的文明。因三顆恆星的不規則運動，他們的世界一次次被烈日與嚴寒摧毀、又一次次重建。收到地球的訊息後，他們決定放棄註定不穩的家園，向地球進發。', en: 'A civilization four light-years from Earth, orbiting three suns. Because of the suns’ irregular motion, their world is destroyed by scorching heat and deadly cold and rebuilt, again and again. On receiving Earth’s message, they resolve to abandon their doomed home and set out for Earth.' },
    analysis: { zh: '三體文明不是臉譜化的惡魔，而是一個被殘酷環境逼到極致的求生者。在永遠無法預測的災難中，他們發展出高度理性、卻也高度冷酷的集體性格——為了整個文明的存續，個體的情感與自由幾乎被清除。他們既是入侵者，也是另一種「被命運折磨的受害者」。透過他們，劉慈欣逼問：在一個資源與安全都極度匱乏的宇宙裡，文明還容得下慈悲嗎？', en: 'Trisolaris is no cartoon demon but a survivor driven to the extreme by a merciless environment. Amid forever-unpredictable catastrophe, they evolve a highly rational yet highly cold collective character — for the survival of the whole, individual feeling and freedom are all but erased. They are at once invaders and another kind of victim tormented by fate. Through them, Liu Cixin presses the question: in a universe of extreme scarcity of resources and safety, can a civilization still afford compassion?' },
    tags: [ { zh: '三顆太陽', en: 'Three suns' }, { zh: '求生的文明', en: 'A civilization surviving' }, { zh: '理性而冷酷', en: 'Rational yet cold' } ],
    related: ['sophon', 'yewenjie', 'evans'] },
  { id: 'sophon', name: { zh: '智子', en: 'The Sophon' }, family: 'trisolaris', role: { zh: '被展開的質子', en: 'The Unfolded Proton' }, icon: '🔒', color: '#5fae9a',
    desc: { zh: '三體文明把一個質子在高維度展開、蝕刻成的微觀超級電腦。他們將它送往地球，用來干擾人類的粒子加速器實驗、鎖死基礎物理，並監看地球上的一切。', en: 'A microscopic supercomputer etched from a single proton unfolded in higher dimensions. Trisolaris sends it to Earth to disrupt human particle-accelerator experiments, lock fundamental physics, and watch everything on Earth.' },
    analysis: { zh: '智子是三體文明「先發制人」的殺手鐧，也是全書最令人膽寒的想像：一個比原子還小的東西，卻能封死一整個文明前進的路。它的存在，把「逼死科學家」的謎團與宇宙級的陰謀連成一線；更可怕的是它象徵的處境——當你連「能不能認識世界」的權利都被剝奪時，你還剩下什麼？', en: 'The sophon is Trisolaris’s pre-emptive trump card, and the book’s most chilling conceit: a thing smaller than an atom that can seal off the road ahead for an entire civilization. Its presence links the mystery of the driven-to-death scientists with a cosmic-scale conspiracy; more terrible still is the condition it symbolizes — when even the right to know the world is stripped from you, what is left?' },
    tags: [ { zh: '展開的質子', en: 'An unfolded proton' }, { zh: '鎖死科學', en: 'Science locked' }, { zh: '無所不在的監視', en: 'Ever-present surveillance' } ],
    related: ['trisolaris', 'wangmiao'] }
];

const TIMELINE_DATA = [
  { year: { zh: '1967', en: '1967' }, event: { zh: '文革批鬥 · 葉哲泰之死', en: 'Cultural Revolution: the death of Ye Zhetai' }, novel: { zh: '物理教授葉哲泰因堅持科學真理，在批鬥大會上被毆打致死；女兒葉文潔在台下目睹，心中種下對人類的幻滅。', en: 'Physics professor Ye Zhetai is beaten to death at a struggle session for holding to scientific truth; his daughter Ye Wenjie watches from below, disillusionment taking root in her.' }, type: 'history' },
  { year: { zh: '1960年代末', en: 'Late 1960s' }, event: { zh: '葉文潔流放大興安嶺', en: 'Ye Wenjie is exiled to the Greater Khingan' }, novel: { zh: '在伐木兵團裡，她讀到《寂靜的春天》，又因信任而遭背叛，對人性的最後一點希望也熄滅。', en: 'In a logging corps she reads Silent Spring and is betrayed after trusting others; her last hope in humanity goes out.' }, type: 'character' },
  { year: { zh: '1970年代', en: 'The 1970s' }, event: { zh: '紅岸基地', en: 'Red Coast Base' }, novel: { zh: '葉文潔被半囚禁式地徵召進秘密的「紅岸」計畫——一個冷戰版的外星探測與發射設施。', en: 'Ye Wenjie is half-imprisoned into the secret Red Coast project — a Cold War facility for detecting and sending signals to the stars.' }, type: 'novel' },
  { year: { zh: '關鍵一刻', en: 'The Fateful Moment' }, event: { zh: '第一封信送出 · 不要回答', en: 'The first message; “Do not answer”' }, novel: { zh: '她以太陽為放大器發出地球的第一聲呼喊；多年後收到三體和平主義者「不要回答」的警告，卻仍按下回覆鍵，洩露了地球座標。', en: 'Using the sun as an amplifier she sends Earth’s first cry; years later, warned by a Trisolaran pacifist to “Do not answer,” she presses reply anyway, giving away Earth’s location.' }, type: 'character' },
  { year: { zh: '當代', en: 'The Present' }, event: { zh: '科學家連環自殺 · 楊冬之死', en: 'A wave of scientist suicides; the death of Yang Dong' }, novel: { zh: '最精密的實驗開始得出矛盾結果，物理的根基彷彿崩塌，逼死了包括葉文潔之女楊冬在內的一批頂尖科學家。', en: 'The most precise experiments begin yielding contradictions; the foundations of physics seem to crumble, driving to their deaths a wave of top scientists, including Ye Wenjie’s daughter Yang Dong.' }, type: 'novel' },
  { year: { zh: '當代', en: 'The Present' }, event: { zh: '汪淼與幽靈倒數', en: 'Wang Miao and the ghost countdown' }, novel: { zh: '奈米科學家汪淼被捲入調查，眼前浮現詭異倒數，甚至看見整個宇宙為他閃爍——一股遠超人類的力量正在盯著他。', en: 'Nanoscientist Wang Miao is pulled into the investigation; an eerie countdown appears before his eyes, and he even sees the universe flicker for him — a force far beyond humanity is watching.' }, type: 'novel' },
  { year: { zh: '虛擬世界', en: 'The Virtual World' }, event: { zh: '《三體》遊戲 · 亂紀元', en: 'The “Three Body” game; the Chaotic Era' }, novel: { zh: '汪淼登入《三體》遊戲，見證一個被三顆太陽反覆摧毀的世界，居民靠脫水熬過無法預測的亂紀元。', en: 'Wang Miao enters the “Three Body” game and witnesses a world destroyed again and again by three suns, whose people survive the unpredictable Chaotic Era by dehydrating.' }, type: 'novel' },
  { year: { zh: '真相之一', en: 'A First Truth' }, event: { zh: '三日凌空 · 三體問題', en: 'Three suns; the three-body problem' }, novel: { zh: '謎底揭曉：那個世界同時圍繞三顆太陽，軌道永遠無法精確預測——文明註定毀滅，於是決心離鄉尋找新家園。', en: 'The answer: that world orbits three suns at once, its path forever unpredictable — the civilization is doomed, and resolves to leave home in search of a new world.' }, type: 'novel' },
  { year: { zh: '行動', en: 'The Operation' }, event: { zh: '古箏行動 · 審判日號', en: 'Operation Guzheng; the Judgment Day' }, novel: { zh: '當局用奈米飛刃在巴拿馬運河切開巨輪「審判日號」，奪取地球三體組織的關鍵資料。', en: 'The authorities use nanofilament “flying blades” at the Panama Canal to slice the tanker Judgment Day and seize the ETO’s crucial data.' }, type: 'novel' },
  { year: { zh: '真相之二', en: 'A Second Truth' }, event: { zh: '地球三體組織現形', en: 'The Earth-Trisolaris Organization revealed' }, novel: { zh: '崇拜三體、協助入侵的秘密組織 ETO 浮出水面，內部分裂為降臨派、拯救派、倖存派；其源頭正是葉文潔與伊文斯。', en: 'The secret ETO — worshipping Trisolaris and aiding the invasion — surfaces, split into Adventists, Redemptionists, and Survivors; its origin is Ye Wenjie and Evans.' }, type: 'novel' },
  { year: { zh: '結局', en: 'The Ending' }, event: { zh: '智子鎖死科學 · 「你們是蟲子」', en: 'The sophon locks science; “You are bugs”' }, novel: { zh: '三體以「智子」封死人類的基礎物理、監看一切，並輕蔑地稱人類為蟲子；但史強指著殺不完的蝗蟲說：蟲子從沒被真正戰勝過。', en: 'Trisolaris uses the sophon to lock human physics and watch all, dismissing humans as bugs; yet Da Shi points to unkillable locusts and says: bugs have never truly been defeated.' }, type: 'novel' }
];

const THEMES = [
  { id: 'loneliness', icon: '🌌', title: { zh: '宇宙的孤獨與呼喊', en: 'Cosmic Loneliness and the Cry' }, subtitle: { zh: '渴望不再孤獨，也許正是最大的危險', en: 'The longing not to be alone may be the greatest danger' }, color: '#cf4130',
    intro: { zh: '人類向宇宙發出第一聲呼喊——這浪漫的衝動，藏著致命的風險。', en: 'Humanity sends its first cry into the cosmos — and in that romantic impulse hides a fatal risk.' },
    body: { zh: '<p>「宇宙這麼大，難道只有我們？」這份渴望連結、不願孤獨的衝動，推著人類把訊號射向群星。但《三體》給出的是一個冷酷的假設：暴露自己的存在與座標，可能就是招來毀滅的第一步。</p><p>葉文潔按下回覆鍵的那一刻，把個人的孤獨與整個文明的孤獨疊在了一起。劉慈欣藉此逼問：在一個我們對其法則一無所知的宇宙裡，「主動呼喊」究竟是勇敢，還是天真？</p><div class="theme-quote">「不要回答！不要回答！！不要回答！！！」</div>', en: '<p>“The universe is so vast — can it be that only we are here?” This longing to connect, this refusal of loneliness, drives humanity to fire signals at the stars. But The Three-Body Problem offers a chilling premise: revealing your existence and your coordinates may be the first step toward destruction.</p><p>The moment Ye Wenjie presses reply, she folds one person’s loneliness into the loneliness of a whole civilization. Through it Liu Cixin presses the question: in a universe whose laws we do not know, is “calling out” courage, or naïveté?</p><div class="theme-quote">“Do not answer! Do not answer!! Do not answer!!!”</div>' },
    chapters: ['4', '5', '8'] },
  { id: 'despair', icon: '🕯️', title: { zh: '對人性的絕望與背叛', en: 'Despair in Humanity, and Betrayal' }, subtitle: { zh: '一個人的絕望，能改寫整個文明嗎？', en: 'Can one person’s despair rewrite a whole civilization?' }, color: '#c0566a',
    intro: { zh: '葉文潔的背叛，源於一個時代對她最深的傷害。', en: 'Ye Wenjie’s betrayal springs from the deepest wound an era dealt her.' },
    body: { zh: '<p>目睹父親被同類打死、又在流放中一再被背叛，葉文潔對人類的信任被一寸寸磨光。當她相信人類已無力、也不配自救，「請更高等的文明來管教這個世界」竟成了一種扭曲的救贖。</p><p>本書最令人不安之處，正在於它不把她寫成臉譜化的惡人——她的絕望有血有肉、幾乎可以理解。這逼我們去想：對同類徹底失望的人，會走到多遠？而理想主義走到盡頭，會不會反過來變成最徹底的反人類？</p><div class="theme-quote">「來吧，我們的文明已無法自救。」</div>', en: '<p>Having watched her father killed by his own kind and been betrayed again and again in exile, Ye Wenjie’s trust in humanity is ground away inch by inch. When she comes to believe humanity powerless, and unworthy, to save itself, “inviting a higher civilization to discipline this world” becomes a twisted redemption.</p><p>The book’s most unsettling quality is that it refuses to write her as a cartoon villain — her despair is flesh and blood, almost understandable. It forces the question: how far will a person who has utterly lost faith in their own kind go? And when idealism reaches its end, might it turn into the most thorough anti-humanism of all?</p><div class="theme-quote">“Come. Our civilization can no longer save itself.”</div>' },
    chapters: ['1', '2', '5', '13'] },
  { id: 'chaos', icon: '🌗', title: { zh: '亂紀元：混沌與生存', en: 'The Chaotic Era: Chaos and Survival' }, subtitle: { zh: '在無法預測的世界裡，如何活下去', en: 'How to survive in a world you cannot predict' }, color: '#d0a84e',
    intro: { zh: '三顆太陽的世界，是一則關於「無常」的極端寓言。', en: 'A world of three suns is an extreme parable of impermanence.' },
    body: { zh: '<p>三體世界同時圍繞三顆恆星，軌道永遠無法精確計算——這就是數學上著名的「三體問題」。烈日與嚴寒毫無預兆地降臨，文明一次次興起又一次次毀滅。為了熬過亂紀元，居民甚至演化出「脫水」求生的本領。</p><p>這個設定不只是科幻奇觀，更像是對一切「不確定命運」的隱喻：當環境本身就是混沌，理性還能不能為我們指路？一個文明面對註定不穩的家園，是認命，還是離鄉遠航？</p><div class="theme-quote">「文明一次次在烈日與嚴寒中歸零，又一次次重新開始。」</div>', en: '<p>Trisolaris orbits three stars at once, its path forever incalculable — the famous “three-body problem” of mathematics. Scorching heat and killing cold arrive without warning; civilization rises and is destroyed, over and over. To survive the Chaotic Era, its people even evolve the power to “dehydrate.”</p><p>This premise is more than a sci-fi spectacle; it is a metaphor for every uncertain fate: when the environment itself is chaos, can reason still light our way? Facing a home doomed to instability, does a civilization resign itself, or set sail?</p><div class="theme-quote">“Civilization is reset to zero in heat and cold, and begins again, and again.”</div>' },
    chapters: ['9', '10', '11'] },
  { id: 'sophon', icon: '🔒', title: { zh: '科學的邊界與智子', en: 'The Frontier of Science and the Sophon' }, subtitle: { zh: '當「認識世界」的權利被剝奪', en: 'When the right to know the world is taken away' }, color: '#5fae9a',
    intro: { zh: '比原子還小的智子，卻能封死整個文明的前路。', en: 'A thing smaller than an atom seals off the road ahead for a whole civilization.' },
    body: { zh: '<p>三體人不用等艦隊抵達，就先送來了「智子」——一個由質子在高維度展開、蝕刻而成的微觀超級電腦。它干擾人類所有的粒子加速器實驗，讓基礎物理再也得不到可信的結果（這正是逼死科學家的真相），還監看著地球的一切。</p><p>這是全書最令人膽寒的想像。它剝奪的不是某項技術，而是「人類能否繼續認識世界」的根本權利。當通往真理的路被從源頭鎖死，一個文明還剩下什麼可以倚靠？</p><div class="theme-quote">「物理學，從來就沒有存在過。」</div>', en: '<p>Trisolaris does not wait for its fleet; it first sends the sophon — a microscopic supercomputer etched from a proton unfolded in higher dimensions. It disrupts every human particle-accelerator experiment so that fundamental physics can no longer yield trustworthy results (the truth behind the scientists’ deaths), and it watches everything on Earth.</p><p>This is the book’s most chilling conceit. What it takes is not some technology but the very right of humanity to go on knowing the world. When the road to truth is locked at its source, what does a civilization have left to lean on?</p><div class="theme-quote">“Physics has never existed.”</div>' },
    chapters: ['6', '7', '15'] },
  { id: 'bugs', icon: '🦗', title: { zh: '誰是蟲子', en: 'Who Are the Bugs' }, subtitle: { zh: '渺小如蟲，未必沒有活路', en: 'As small as bugs, and yet not without a way to live' }, color: '#5b8fd0',
    intro: { zh: '在壓倒性的絕望裡，全書留下一絲不肯熄滅的希望。', en: 'In overwhelming despair, the book leaves one sliver of hope that will not go out.' },
    body: { zh: '<p>面對四百年後才抵達、卻已先鎖死科學的三體，人類幾乎沒有還手之力，被輕蔑地稱作「蟲子」。這是徹底的失敗主義該有的結局——直到史強帶著眾人來到一片被蝗災肆虐的田野。</p><p>他指著那些人類用盡一切辦法也殺不完的蝗蟲說：看，蟲子從來就沒有被真正戰勝過。渺小、被鄙視、看似毫無勝算，卻頑強地活著。全書在絕望的谷底，用最卑微的生命，接上了一根人間的希望之線。</p><div class="theme-quote">「蟲子，從來沒有被真正戰勝過。」</div>', en: '<p>Facing a Trisolaris that will not arrive for four hundred years yet has already locked human science, humanity is nearly powerless and dismissed as “bugs.” It is the ending that thorough defeatism deserves — until Da Shi brings everyone to a field ravaged by a locust plague.</p><p>He points at the locusts that humanity, for all its efforts, has never managed to exterminate, and says: look — bugs have never truly been defeated. Small, despised, seemingly without a chance, and yet stubbornly alive. At the bottom of its despair, the book uses the humblest of life to string a wire of human hope.</p><div class="theme-quote">“Bugs have never truly been defeated.”</div>' },
    chapters: ['12', '16'] }
];

const QUOTES = [
  { text: { zh: '不要回答！不要回答！！不要回答！！！', en: 'Do not answer! Do not answer!! Do not answer!!!' }, source: { zh: '第五章 · 三體和平主義者的警告', en: 'Chapter 5 · The Trisolaran pacifist’s warning' },
    analysis: { zh: '全書最著名的一句。一個素未謀面的外星人冒死示警，卻換來葉文潔的一意孤行。這三聲遞增的驚嘆號，成了整個文明命運的分岔口。', en: 'The book’s most famous line. An alien she has never met risks everything to warn her, only to be met by Ye Wenjie’s resolve. These three escalating cries of alarm become the fork in the road for a whole civilization.' } },
  { text: { zh: '來吧，我幫你們得到這個世界。', en: 'Come — I will help you obtain this world.' }, source: { zh: '第五章 · 葉文潔的回覆（情節重述）', en: 'Chapter 5 · Ye Wenjie’s reply (retold)' },
    analysis: { zh: '一句話，把地球的座標交了出去。它背後是一整個時代對一個人的傷害，也是「對人類徹底絕望」所能抵達的最遠處——扭曲成了迎接毀滅的救贖。', en: 'One sentence hands over Earth’s coordinates. Behind it is an era’s wounding of one person, and the farthest point that “utter despair in humanity” can reach — twisted into a redemption that welcomes destruction.' } },
  { text: { zh: '物理學，從來就沒有存在過。', en: 'Physics has never existed.' }, source: { zh: '第七章 · 楊冬的遺言', en: 'Chapter 7 · Yang Dong’s last words' },
    analysis: { zh: '對一個把物理當信仰的人，這不是學術判斷，而是世界的塌陷。它揭開了智子鎖死科學的第一角，也道盡了「當你連認識世界的能力都被奪走」時的絕望。', en: 'To someone who worshipped physics, this is no academic verdict but the collapse of the world. It lifts the first corner on the sophon’s locking of science, and captures the despair of having even the ability to know the world taken from you.' } },
  { text: { zh: '消滅人類暴政，世界屬於三體。', en: 'Down with human tyranny; the world belongs to Trisolaris.' }, source: { zh: '第十三章 · 地球三體組織的口號', en: 'Chapter 13 · The ETO’s slogan' },
    analysis: { zh: '一群人類，喊出迎接自身毀滅的口號。它濃縮了那種把「對同類的絕望」推到極端的信仰——當理想主義徹底反轉，竟能變成最徹底的反人類。', en: 'A group of humans chant a slogan welcoming their own destruction. It distills a faith that pushes “despair in one’s own kind” to the extreme — how idealism, fully inverted, can become the most thorough anti-humanism.' } },
  { text: { zh: '主，我們的世界。', en: 'Lord, our world.' }, source: { zh: '第十四章 · 地球三體組織的禱詞', en: 'Chapter 14 · The ETO’s prayer' },
    analysis: { zh: '把入侵者奉為「主」的短短一句，像宗教禱詞般虔誠。它揭示了背叛者的心理：當對現世徹底失望，人會多麼渴望把希望，交託給一個更高、更冷酷的存在。', en: 'A few words that enthrone the invader as “Lord,” devout as a prayer. It reveals the psyche of the betrayers: how, having utterly lost faith in this world, people long to entrust their hope to a higher, colder being.' } },
  { text: { zh: '蟲子，從來沒有被真正戰勝過。', en: 'Bugs have never truly been defeated.' }, source: { zh: '第十六章 · 史強', en: 'Chapter 16 · Da Shi' },
    analysis: { zh: '全書在絕望谷底的最後一線光。三體人叫人類蟲子，史強卻指著殺不完的蝗蟲反將一軍：渺小、被鄙視，不代表沒有活路。這是屬於人間的、粗糙卻頑強的希望。', en: 'The last thread of light at the bottom of the book’s despair. Trisolaris calls humans bugs; Da Shi points to the unkillable locusts and turns it around: small and despised is not the same as doomed. This is a rough, stubborn hope that belongs to the human earth.' } }
];

const REFLECTION_QUESTIONS = [
  { zh: '如果你是葉文潔，在收到「不要回答」的警告時，你會按下回覆鍵嗎？是什麼會讓一個人做出這樣的選擇？', en: 'If you were Ye Wenjie, would you press reply after the warning “Do not answer”? What could make a person choose that?' },
  { zh: '一個人對整個人類的絕望，能不能構成背叛同類的理由？你的界線畫在哪裡？', en: 'Can one person’s despair in all humanity ever justify betraying their own kind? Where do you draw the line?' },
  { zh: '本書假設「暴露自己的存在＝招來毀滅」。你認為人類該不該繼續向宇宙主動發送訊號？', en: 'The book assumes that revealing your existence invites destruction. Should humanity keep actively sending signals into the cosmos?' },
  { zh: '三體文明是入侵者，卻也是被殘酷環境折磨的求生者。你能不能同時對他們感到恐懼與同情？', en: 'Trisolaris is an invader, yet also a survivor tormented by a merciless environment. Can you feel both fear and sympathy for them?' },
  { zh: '「物理學從來就沒有存在過」逼死了楊冬。你有沒有一個一旦崩塌、便無法承受的信念？', en: '“Physics has never existed” drove Yang Dong to her death. Do you have a belief whose collapse you could not survive?' },
  { zh: '智子剝奪的不是某項技術，而是「認識世界」的權利。對你而言，這種剝奪為什麼比武力入侵更可怕？', en: 'The sophon takes not a technology but the right to know the world. Why might this be more terrifying to you than a military invasion?' },
  { zh: '在被稱為「蟲子」的絕境裡，史強選擇相信「蟲子殺不完」。這種粗糙的樂觀，說服你了嗎？', en: 'In the depths of being called “bugs,” Da Shi chooses to believe bugs can’t be exterminated. Does this rough optimism convince you?' },
  { zh: '本書把文革的歷史傷痕當成整個故事的起點。你認為個人的時代創傷，如何形塑了一個人日後的每一個選擇？', en: 'The book makes the scars of the Cultural Revolution the story’s origin. How do you think an era’s trauma shapes every later choice a person makes?' },
  { zh: '面對一個四百年後才到、卻已鎖死你科學的敵人，人類該做的是備戰、逃亡，還是別的什麼？', en: 'Facing an enemy that arrives in four hundred years yet has already locked your science, should humanity prepare for war, flee, or do something else?' },
  { zh: '讀完第一部，你對「宇宙是否友善」這個問題，傾向樂觀還是悲觀？為什麼？', en: 'Having read Book One, do you lean optimistic or pessimistic on whether the universe is friendly? Why?' }
];


// ==== CHAPTER_CONTENT（情節重述，中英雙語，子代理擴寫）====
const CHAPTER_CONTENT = {};

Object.assign(CHAPTER_CONTENT, {
  1: {
    num: { zh: `第一章`, en: `Chapter One` },
    title: { zh: `一九六七年的槍聲`, en: `1967: The Gunshots` },
    epigraph: {
      zh: `當理性被當成罪名，一個時代便親手熄滅了自己的星光。`,
      en: `When reason itself becomes a crime, an age puts out its own stars.`
    },
    body: {
      zh: `<p>一九六七年，文化大革命的狂潮席捲了整片土地。在清華大學的一座批鬥台上，物理學教授葉哲泰站在人群的注視之下，胸前掛著寫滿罪狀的木牌。他被指控傳播「反動」的科學——相對論、大霹靂，這些描述宇宙如何誕生、時間如何彎折的理論，在那個年代被扭曲成了對信仰的背叛。</p>

<p>他們要他認罪，要他當眾否定自己一生所守護的真理。葉哲泰沒有低頭。他仍舊承認自己教過那些理論，因為那是經得起驗證的科學。這份不肯彎折的尊嚴，在一片高喊的口號中，成了不可饒恕的頑固。</p>

<div class="section-break">＊ ＊ ＊</div>

<p>批鬥升級為毆打。年輕的紅衛兵一擁而上，皮帶與拳腳落在一個學者的身上。台下的喧囂如潮水，沒有人停手，也沒有人敢停手。最終，葉哲泰倒在了台上，再也沒有站起來。</p>

<p>而在人群之中，他年幼的女兒葉文潔親眼目睹了這一切。她看著父親從一個溫和的知識分子，變成台上一具冰冷的身軀；看著理性與學問，在瘋狂面前被踐踏得一文不值。那一刻沒有眼淚能夠承載的重量，在她心裡沉了下去。</p>

<p>這場荒謬而殘酷的死亡，成了她一生的斷裂點。她對人類文明的信任，在那個午後開始鬆動——一道細微卻致命的裂縫，日後將裂穿整個地球的命運。</p>

<p class="thought-question">🤔 思考：當一個社會把「堅持真理」定為罪，被摧毀的究竟是一個人，還是這個社會存續的資格？</p>`,
      en: `<p>In 1967, the tide of the Cultural Revolution swept across the whole land. On a struggle-session platform at Tsinghua University, the physics professor Ye Zhetai stood before a hostile crowd, a wooden placard listing his crimes hung across his chest. He was accused of spreading "reactionary" science—relativity, the Big Bang, theories that described how the universe was born and how time itself could bend. In that era, such ideas were twisted into a betrayal of faith.</p>

<p>They demanded that he confess, that he publicly renounce the truths he had guarded his entire life. Ye Zhetai did not bow. He still acknowledged that he had taught those theories, because they were science that withstood every test. That unbending dignity, amid a sea of shouted slogans, became an unforgivable obstinacy.</p>

<div class="section-break">◆ ◆ ◆</div>

<p>The struggle turned into a beating. Young Red Guards surged forward; belts and fists fell upon a scholar's body. The clamor below rose like a rising sea—no one stopped, and no one dared to stop. In the end, Ye Zhetai collapsed on the platform and never rose again.</p>

<p>And within the crowd, his young daughter, Ye Wenjie, witnessed all of it. She watched her father turn from a gentle scholar into a cold, still body upon the stage; she watched reason and learning trampled into nothing before madness. In that moment, a weight no tears could carry sank into her heart.</p>

<p>This absurd and cruel death became the fracture point of her life. Her trust in human civilization began to loosen that afternoon—a fine but fatal crack that would one day split open the fate of the entire Earth.</p>

<p class="thought-question">🤔 Reflect: When a society brands "standing by the truth" a crime, what is truly destroyed—one man, or that society's right to endure?</p>`
    }
  },
  2: {
    num: { zh: `第二章`, en: `Chapter Two` },
    title: { zh: `大興安嶺的流放`, en: `Exile in the Greater Khingan` },
    epigraph: {
      zh: `她在森林裡尋找人性的餘燼，卻只找到出賣。`,
      en: `She searched the forest for an ember of humanity, and found only betrayal.`
    },
    body: {
      zh: `<p>父親死後，葉文潔被下放到大興安嶺的生產建設兵團。這裡是天寒地凍的邊陲，日復一日的勞動便是伐木——鋸倒那些生長了數百年的巨樹，看它們一棵接一棵在斧鋸下轟然倒地。她親手參與著對這片古老森林的剝削，內心的荒涼與腳下的伐木場一同蔓延。</p>

<p>在這樣的日子裡，她讀到了一本書——《寂靜的春天》。書中描寫人類如何以看似理所當然的方式，一點一滴地毒害自然、破壞生態。這本書像一面鏡子，讓她第一次意識到：人類對彼此的殘酷，或許只是人類對整個世界更廣泛破壞的一角。</p>

<div class="section-break">＊ ＊ ＊</div>

<p>一個念頭開始在她心中盤旋：人類這個物種，是否有能力靠自己的力量約束自己的惡？她愈想愈懷疑。而現實很快給了她答案。</p>

<p>一次，她因為信任而伸出了手，卻換來背叛與構陷。她被人利用、被人出賣，落入無法辯白的處境。那一點對人性殘存的信任——她父親之死後僅剩的一點微光——也在這場算計中被徹底熄滅。</p>

<p>就在她跌入絕望最深處的時候，一股神秘的力量介入了她的命運。因為她的物理專長，她被人從流放地帶走，送往一個不為外人所知的軍事基地。前方是什麼，她一無所知，只知道自己已不再屬於那個曾讓她心碎的人間。</p>

<p class="thought-question">🤔 思考：一個人對整個物種的絕望，究竟是清醒的洞察，還是一道尚未癒合的傷口在替她做判斷？</p>`,
      en: `<p>After her father's death, Ye Wenjie was sent down to a production and construction corps in the Greater Khingan. This was a frozen frontier, and the labor, day after day, was logging—felling trees that had grown for centuries, watching them crash to the ground one after another beneath saw and axe. With her own hands she took part in the plundering of this ancient forest, and the desolation within her spread alongside the clear-cut land beneath her feet.</p>

<p>In those days, she came upon a book—Silent Spring. It described how humankind, in ways that seemed entirely ordinary, poisoned nature and wrecked its living systems drop by drop. The book was like a mirror. For the first time she understood that human cruelty toward one another might be only one corner of a far wider destruction humanity waged upon the whole world.</p>

<div class="section-break">◆ ◆ ◆</div>

<p>A question began to circle in her mind: was this species capable of restraining its own evil by its own strength? The more she thought, the more she doubted. And reality soon gave her an answer.</p>

<p>Once, out of trust, she reached out a hand—and was met with betrayal and a frame-up. She was used, sold out, and left in a position she could not argue her way out of. That last remnant of faith in human nature—the faint glimmer that had survived her father's death—was extinguished entirely in that scheme.</p>

<p>Just as she sank into the deepest reach of despair, a mysterious power intervened in her fate. Because of her expertise in physics, she was taken from the place of her exile and delivered to a military base unknown to the outside world. What lay ahead she could not know—only that she no longer belonged to the human world that had broken her heart.</p>

<p class="thought-question">🤔 Reflect: Is one person's despair over an entire species a clear-eyed insight, or a wound not yet healed rendering the verdict in her place?</p>`
    }
  },
  3: {
    num: { zh: `第三章`, en: `Chapter Three` },
    title: { zh: `紅岸`, en: `Red Coast` },
    epigraph: {
      zh: `在雷達峰的巨大天線之下，藏著一個對星空發問的秘密。`,
      en: `Beneath the great antenna on Radar Peak lay a secret that questioned the stars.`
    },
    body: {
      zh: `<p>那座軍事基地，坐落在一座人稱雷達峰的山頂之上。它的名字叫紅岸基地。峰頂矗立著一座巨大的天線設施，如同一隻朝天張開的耳朵，日夜對著蒼穹。葉文潔正是因為她的物理專長，被半囚禁式地徵召進了這裡。</p>

<p>對外，紅岸的官方說法是一項軍事防禦與通訊實驗——一個在冷戰陰影下並不罕見的說辭。但在這層外殼之下，藏著它真正的使命：這是一個秘密的探測計劃，目標是搜尋來自外星文明的訊號，並向宇宙深處發射人類的呼喚。它更像是一個誕生於鐵幕時代、被高度保密的地外文明搜尋工程。</p>

<div class="section-break">＊ ＊ ＊</div>

<p>對葉文潔而言，進入紅岸意味著與整個世界的徹底隔絕。她被困在這座與外界斷聯的山巔，一邊以自己的學識投入工作，一邊被這座基地牢牢圈住，難以離開。</p>

<p>然而，正是這份孤絕，給了她一種奇異的自由。當人間的紛擾被隔在山下，當她每日面對的不再是批鬥與構陷，而是浩瀚無垠的星空與電波，她的思緒得以飄向遠比人類命運更遼闊的所在。</p>

<p>她不知道的是，這座對著天空發問的巨大天線，將不只是聆聽——它終將成為人類向未知伸出的那隻手。而在紅岸沉默的機房裡，一個足以改寫文明命運的念頭，正在她心中悄悄成形。</p>

<p class="thought-question">🤔 思考：把一個對人類已然絕望的人，單獨交給無垠的星空——這是命運的巧合，還是命運最冷酷的安排？</p>`,
      en: `<p>That military base sat atop a mountain people called Radar Peak. Its name was Red Coast Base. On the summit rose an enormous antenna installation, like a single ear opened toward the heavens, turned day and night upon the sky. It was precisely because of her expertise in physics that Ye Wenjie had been conscripted here, half a prisoner.</p>

<p>To the outside world, the official account of Red Coast was a military defense and communications experiment—hardly an unusual cover story under the shadow of the Cold War. But beneath that shell lay its true mission: a secret detection program whose aim was to search for signals from alien civilizations and to broadcast humanity's call into the depths of the cosmos. It was, in truth, a highly classified search for extraterrestrial intelligence, born of the Iron Curtain era.</p>

<div class="section-break">◆ ◆ ◆</div>

<p>For Ye Wenjie, entering Red Coast meant total severance from the entire world. She was confined to this peak cut off from the outside, pouring her knowledge into the work while the base held her fast, allowing no easy departure.</p>

<p>And yet it was this very isolation that granted her a strange kind of freedom. With the turmoil of the human world sealed off below, with her days no longer filled by struggle sessions and betrayals but by the vast, boundless starfield and its radio waves, her thoughts were free to drift toward realms far wider than the fate of humankind.</p>

<p>What she did not know was that this great antenna, questioning the sky, would not merely listen—it would become the hand humanity reached toward the unknown. And in the silent equipment rooms of Red Coast, an idea powerful enough to rewrite the fate of civilization was quietly taking shape within her.</p>

<p class="thought-question">🤔 Reflect: To hand a person already in despair over humanity to the boundless stars, alone—is that a coincidence of fate, or fate's coldest design?</p>`
    }
  },
  4: {
    num: { zh: `第四章`, en: `Chapter Four` },
    title: { zh: `太陽是一面天鏡`, en: `The Sun as a Mirror` },
    epigraph: {
      zh: `她按下的那一個鍵，是人類向黑暗宇宙發出的第一聲呼喊。`,
      en: `The key she pressed was humanity's first cry into the dark cosmos.`
    },
    body: {
      zh: `<p>在紅岸日復一日的研究中，葉文潔的思緒觸及了一個大膽的推測：太陽，或許不只是天空中一顆燃燒的恆星。她想到，太陽有可能像一台巨大的放大器，把射向它的電波訊號放大之後，再向宇宙深處反射出去——彷彿一面懸在天上的鏡子。</p>

<p>這個念頭一旦成形，便再也無法從她心中抹去。如果這是真的，那麼人類手中微弱的訊號，就有可能借太陽之力被放大到足以跨越星海的強度。地球，這顆沉默了億萬年的行星，將第一次擁有向群星開口說話的可能。</p>

<div class="section-break">＊ ＊ ＊</div>

<p>於是，她做了一個誰也不知道的決定。她悄悄動用了紅岸那座巨大的天線，把訊號對準了太陽，以太陽為天鏡，向著茫茫星海，發出了地球文明的第一聲呼喊。</p>

<p>那是一個渺小的按鍵動作，卻承載著一個物種的孤獨與渴望。訊號離開天線，穿過大氣，投向那顆恆星，再被反射向未知的黑暗——沒有回聲，沒有回應，只有等待。</p>

<p>而此刻的葉文潔並不知道，也無法知道：這輕輕一按，已經悄悄改寫了人類的命運。她在絕望中伸出的這隻手，將在多年之後，等到來自四光年之外的回音——而那個回音，會逼她做出一個關乎整個地球存亡的抉擇。</p>

<p class="thought-question">🤔 思考：一個文明對宇宙開口說話之前，是否有資格、又是否有能力，先想清楚它究竟希望聽到什麼樣的回答？</p>`,
      en: `<p>In the day-after-day research at Red Coast, Ye Wenjie's thoughts arrived at a bold conjecture: the sun, perhaps, was not merely a burning star in the sky. It occurred to her that the sun might act like an immense amplifier—taking radio signals aimed at it, magnifying them, and reflecting them back into the depths of the cosmos, like a mirror hung in the heavens.</p>

<p>Once this idea took form, it could never be erased from her mind. If it were true, then the feeble signals in human hands could, borrowing the sun's power, be amplified to a strength capable of crossing the sea of stars. Earth—this planet silent for hundreds of millions of years—would for the first time hold the possibility of speaking aloud to the stars.</p>

<div class="section-break">◆ ◆ ◆</div>

<p>And so she made a decision no one knew of. Quietly she commandeered Red Coast's great antenna, aimed the signal at the sun, and using the sun as a mirror, sent out into the vast sea of stars humanity's first cry.</p>

<p>It was a small act, the pressing of a key, yet it carried the loneliness and longing of an entire species. The signal left the antenna, passed through the atmosphere, struck that star, and was flung back toward the unknown dark—no echo, no answer, only waiting.</p>

<p>And in that moment Ye Wenjie did not know, could not know: this gentle press had already quietly rewritten the fate of humanity. The hand she reached out in despair would, years later, receive a reply from four light-years away—and that reply would force upon her a choice bearing on the survival of the entire Earth.</p>

<p class="thought-question">🤔 Reflect: Before a civilization speaks aloud to the cosmos, is it fit—and is it able—to first think clearly about what kind of answer it truly hopes to hear?</p>`
    }
  }
});


Object.assign(CHAPTER_CONTENT, {
  5:{
    num:{zh:`第五章`,en:`Chapter Five`},
    title:{zh:`不要回答`,en:`Do Not Answer`},
    epigraph:{
      zh:`一個文明按下的鍵，另一個文明用四光年的沉默回應。`,
      en:`One civilization presses a key; another answers across four light-years of silence.`
    },
    body:{
      zh:`<p>許多年過去了。那道以太陽為天鏡、射向群星的呼喊，早已在葉文潔的記憶裡冷卻成一件無人知曉的往事。直到有一天，紅岸的接收系統捕捉到了回音——來自四光年外，一個叫做三體的世界。</p>
<p>發訊的，是那個世界裡一名擔任監聽的和平主義者。他讀懂了地球的訊號，也讀懂了背後的孤獨與危險，於是不顧一切地示警。他的話語一遍比一遍急切：不要回答。不要回答。不要回答。只要地球再發出一個字，暴露自己的座標，這個文明就會循著訊號降臨，將這顆行星據為己有。</p>
<div class="section-break">＊ ＊ ＊</div>
<p>警告清清楚楚地擺在葉文潔面前。她只要保持沉默，星海便會重新閤上，人類的命運仍握在自己手裡。可是在她心底，父親倒在批鬥台上的身影、被出賣時人性最後的崩塌，早已把她對這個物種的信任燒成了灰。</p>
<p>她做出了選擇。她回覆了。她告訴那個遙遠的世界：來吧——我們的文明已經無力自救，我願意幫助你們得到這個世界。她按下發射鍵的那一刻，親手把地球的座標，交到了四光年外的異星文明手中。</p>
<p>沒有雷聲，沒有天啟。只有一個女人，在雷達峰的孤寂中，安靜地替全人類做了一個他們毫不知情的決定。宇宙的門，從此再也關不上了。</p>
<p class="thought-question">🤔 思考：當一個人對整個人類徹底絕望，她是否還有權利，替所有尚存希望的人做出選擇？</p>`,
      en:`<p>Years passed. The cry Ye Wenjie had flung at the stars, bouncing it off the sun as a mirror, cooled in her memory into a secret no one else knew. Then, one day, Red Coast's receivers caught an echo — from a world four light-years away, a place called Trisolaris.</p>
<p>The sender was a pacifist who worked as a listener on that world. He had understood Earth's signal, and understood too the loneliness and the danger behind it, and so he broke every rule to warn her. His words grew more urgent with each repetition: Do not answer. Do not answer. Do not answer. Let Earth transmit a single word more, revealing its coordinates, and this civilization would follow the signal down and take the planet for itself.</p>
<div class="section-break">◆ ◆ ◆</div>
<p>The warning lay before Ye Wenjie, plain and complete. She had only to keep silent, and the sea of stars would close again, and humanity's fate would remain in its own hands. But deep inside her, the image of her father collapsing on the struggle-session stage, and the final ruin of her faith in people the day she was betrayed, had long since burned her trust in the species to ash.</p>
<p>She made her choice. She answered. She told that distant world: Come — our civilization can no longer save itself, and I will help you take this world. In the instant she pressed the transmit key, she placed Earth's coordinates, with her own hand, into the grasp of an alien civilization four light-years away.</p>
<p>There was no thunder, no revelation. Only a woman, in the solitude of the radar peak, quietly making a decision on behalf of all humankind, who knew nothing of it. From that moment, the door of the universe could never be shut again.</p>
<p class="thought-question">🤔 Reflect: When someone has utterly despaired of the whole human race, do they still have the right to choose on behalf of everyone who still hopes?</p>`
    }
  },
  6:{
    num:{zh:`第六章`,en:`Chapter Six`},
    title:{zh:`科學邊界`,en:`The Frontiers of Science`},
    epigraph:{
      zh:`頂尖的頭腦一個接一個熄滅，而沒有人知道，是什麼在暗處吹熄了它們。`,
      en:`One brilliant mind after another goes dark, and no one knows what, in the shadows, is blowing them out.`
    },
    body:{
      zh:`<p>時間跳到了當代。奈米材料科學家汪淼被警方找上門的時候，還不明白自己為何會被捲進來。一連串頂尖科學家離奇自殺的案子，正壓在調查人員的肩上，而他們認定，這位低調的學者能幫上忙。</p>
<p>帶他入局的，是一名叫史強的刑警——人們都喊他大史。他粗獷、世故、說話不留情面，卻有一雙看穿人心的眼睛。在他半是脅迫半是引導之下，汪淼開始接觸一個神秘的學術團體：科學邊界。</p>
<div class="section-break">＊ ＊ ＊</div>
<p>科學邊界表面上是一群探討基礎物理最前沿問題的學者，聚在一起討論宇宙最深處的難題。但汪淼很快察覺，這個團體的氣氛並不對勁——談論之間，總縈繞著一種難以言說的不安。</p>
<p>更令他心驚的是，那幾位自殺身亡的科學家，竟然大多與科學邊界有著千絲萬縷的關聯。他們生前都接觸過一種同樣的說法：物理學，出了問題。</p>
<p>汪淼原以為自己只是一名旁觀的協助者，此刻卻感到一張看不見的網，正從那些死者的方向，緩緩朝自己收攏過來。</p>
<p class="thought-question">🤔 思考：當最聰明、最理性的一群人開始成批地放棄生命，我們該懷疑的，是他們的心智，還是這個世界本身？</p>`,
      en:`<p>The story leaps to the present day. When the police came to the door of Wang Miao, a nanomaterials scientist, he did not yet understand why he was being drawn in. A string of bizarre suicides among the world's top scientists weighed on the investigators, and they had decided this quiet scholar could help.</p>
<p>The man who pulled him into it was a detective named Shi Qiang — everyone called him Da Shi. Coarse, worldly, blunt to the point of rudeness, he nonetheless had eyes that saw straight through people. Half by coercion, half by guidance, he led Wang Miao toward a mysterious academic group: the Frontiers of Science.</p>
<div class="section-break">◆ ◆ ◆</div>
<p>On the surface, the Frontiers of Science was a circle of scholars probing the outermost edge of fundamental physics, gathering to argue over the deepest riddles of the cosmos. But Wang Miao soon sensed something was wrong with its atmosphere — beneath the discussions hung an unease he could not name.</p>
<p>What chilled him more was this: most of the scientists who had killed themselves turned out to be tangled, in one way or another, with the Frontiers of Science. Before their deaths, they had all brushed against the same claim — that physics itself had gone wrong.</p>
<p>Wang Miao had thought himself a mere bystander lending a hand. Now he felt an invisible net, drawn from the direction of the dead, closing slowly around him.</p>
<p class="thought-question">🤔 Reflect: When the smartest, most rational people begin abandoning life in batches, what should we doubt — their minds, or the world itself?</p>`
    }
  },
  7:{
    num:{zh:`第七章`,en:`Chapter Seven`},
    title:{zh:`楊冬之死`,en:`The Death of Yang Dong`},
    epigraph:{
      zh:`如果連物理定律都不再可靠，那麼支撐一個科學家活下去的地基，又還剩下什麼？`,
      en:`If even the laws of physics are no longer reliable, what remains of the ground a scientist stands on to keep living?`
    },
    body:{
      zh:`<p>在那些自殺的科學家之中，有一位是理論物理學家楊冬。她美麗、聰慧，一生都獻給了對宇宙最基本規律的追尋。她的離去，在汪淼心裡留下的震動，比其他任何一樁都更深。</p>
<p>她留下的遺書，短得只有一句話：物理學，從來就沒有存在過。這句話像一道冷冽的裂縫，橫在所有讀到它的人面前——一個以物理為信仰的人，最後竟親口否定了物理本身的存在。</p>
<div class="section-break">＊ ＊ ＊</div>
<p>謎底藏在那些最精密的實驗裡。全世界最先進的粒子加速器，開始吐出彼此矛盾、無法重複的結果。同樣的實驗，同樣的條件，答案卻一次一個樣——彷彿物理定律本身正在悄悄瓦解。</p>
<p>對一般人而言，這或許只是難懂的技術異常。但對這些畢生相信宇宙有規律可循的科學家來說，這是天塌下來。他們賴以理解世界的根基，正在腳下崩解；他們一生的信念，被連根拔起。</p>
<p>正是這份無底的絕望，把楊冬和她的同行，一個接一個逼上了絕路。汪淼終於明白，這些死亡不是巧合，而是某種更龐大、更冷酷的力量留下的痕跡。</p>
<p class="thought-question">🤔 思考：一個人可以承受失去愛、失去自由，但當他失去了「世界是可理解的」這個信念，還剩下什麼撐得住他？</p>`,
      en:`<p>Among the scientists who had killed themselves was a theoretical physicist named Yang Dong. Beautiful and brilliant, she had given her whole life to the pursuit of the universe's most fundamental laws. Her death shook Wang Miao more deeply than any of the others.</p>
<p>The note she left behind was a single sentence long: physics has never existed. The words lay like a cold fissure across everyone who read them — a person who had made physics her faith, in the end denying with her own hand that physics had ever been real.</p>
<div class="section-break">◆ ◆ ◆</div>
<p>The answer lay hidden in the most precise experiments. The world's most advanced particle accelerators had begun to spit out results that contradicted one another and could not be repeated. The same experiment, the same conditions — yet the answer changed every time, as though the laws of physics themselves were quietly coming apart.</p>
<p>To an ordinary person this might seem only an obscure technical glitch. But to scientists who had spent their lives believing the universe followed discoverable rules, it was the sky falling in. The foundation on which they understood the world was crumbling beneath their feet; the conviction of a lifetime was being torn out by the roots.</p>
<p>It was this bottomless despair that had driven Yang Dong and her colleagues, one after another, to the edge. Wang Miao finally understood: these deaths were no coincidence, but the trace left by some force far larger, and far colder, than anything human.</p>
<p class="thought-question">🤔 Reflect: A person can survive the loss of love and the loss of freedom — but once they lose the belief that the world is knowable, what is left to hold them up?</p>`
    }
  },
  8:{
    num:{zh:`第八章`,en:`Chapter Eight`},
    title:{zh:`幽靈倒數`,en:`The Ghost Countdown`},
    epigraph:{
      zh:`當整個宇宙都為你一個人閃爍，那不是奇蹟，而是一道最森冷的警告。`,
      en:`When the entire universe flickers for you alone, it is not a miracle — it is the coldest of warnings.`
    },
    body:{
      zh:`<p>異象降臨在汪淼自己身上。他在親手拍攝的底片上，發現了一串詭異的數字——一組不斷減少的倒數。起初他以為是器材或沖洗的問題，可那串數字並不打算放過他。</p>
<p>很快，倒數離開了底片。它直接浮現在汪淼的視野裡，無論他閉眼睜眼、走到哪裡，都懸在世界之上，冷冷地一秒一秒往下走。他成了唯一能看見它的人。</p>
<div class="section-break">＊ ＊ ＊</div>
<p>一通神秘的來電給了他答案，也給了他選項：只要他停止手上的奈米材料研究，倒數就會停止。這是一場交易，也是一道命令——有人，或有什麼東西，不希望這項研究繼續下去。</p>
<p>汪淼半信半疑。於是「他們」決定證明自己。在約定的時刻，整個宇宙的背景輻射，在汪淼眼前如同一顆巨大的心臟，開始緩慢而穩定地閃爍。整片天空為他一人明滅，宛如宇宙本身在向他眨眼。</p>
<p>那一刻，汪淼徹骨地意識到：有一種遠遠超越人類的力量，正在暗中盯著他，盯著這顆行星上的每一個人。人類自以為安穩的世界，其實早已被握在一隻看不見的手裡。</p>
<p class="thought-question">🤔 思考：如果有一天，某種力量能讓整個宇宙為你一人閃爍，你會臣服於它的恐怖，還是更想弄清楚——它究竟在害怕你做什麼？</p>`,
      en:`<p>The strangeness came for Wang Miao himself. On film he had shot with his own hands, he found a string of eerie numbers — a countdown, ticking steadily down. At first he blamed the equipment or the developing, but the numbers had no intention of letting him go.</p>
<p>Soon the countdown left the film behind. It surfaced directly in Wang Miao's field of vision, hanging over the world whether his eyes were open or shut, wherever he went, counting down cold and relentless, one second at a time. He was the only person who could see it.</p>
<div class="section-break">◆ ◆ ◆</div>
<p>A mysterious phone call gave him the answer, and gave him a choice: stop his nanomaterials research, and the countdown would stop. It was a bargain, and it was a command — someone, or something, did not want that research to go on.</p>
<p>Wang Miao only half believed it. So they decided to prove themselves. At the appointed moment, the entire universe's background radiation began to flicker before his eyes, slow and steady, like an enormous beating heart. The whole sky blinked on and off for him alone, as though the cosmos itself were winking at him.</p>
<p>In that instant Wang Miao understood, to the marrow of his bones: a power immeasurably beyond humankind was watching him from the dark — watching every single person on this planet. The world humanity believed to be safe had, in truth, long been held in an invisible hand.</p>
<p class="thought-question">🤔 Reflect: If one day some power could make the whole universe flicker for you alone, would you bow to its terror — or would you burn to know what it is so afraid of you doing?</p>`
    }
  }
});


Object.assign(CHAPTER_CONTENT, {
  9:{
    num:{zh:`第九章`,en:`Chapter Nine`},
    title:{zh:`三體`,en:`Three Body`},
    epigraph:{
      zh:`在這個世界裡，太陽不是恆星，是骰子。`,
      en:`In this world, the sun was not a star. It was a die, forever rolling.`
    },
    body:{
      zh:`<p>循著線索，汪淼戴上那套高擬真的裝置，登入了一款名為《三體》的虛擬實境遊戲。當視野在虛擬的曙光中亮起，他站上了一片陌生的大地——這裡的天空不屬於任何他所熟悉的星空。</p>

<p>他很快發現，這個世界沒有規律可言。晝與夜、寒與暑，全無章法地降臨。有時烈日連日高懸，把大地烤成龜裂的焦土；有時長夜驟至，嚴寒把一切凍成沉默的冰。四季不循環，晨昏不守時，彷彿有一隻無形的手在隨意撥弄天空。</p>

<div class="section-break">＊ ＊ ＊</div>

<p>在這片無常的土地上，一個又一個文明艱難地興起。它們建造城市、累積知識、仰望星空，試圖為這瘋狂的世界找出秩序。然而每一次繁榮，都被一場毫無預警的災變徹底抹去——被烈日焚盡，或被嚴寒凍絕。文明如燭火，一次次點燃，又一次次被吹熄。</p>

<p>遊戲擺在每一位玩家面前的任務只有一個，冷酷而龐大：找出這個世界運行的規律。什麼時候太陽會升起，什麼時候會沉沒？寒暑更替究竟藏著什麼法則？誰能破解這道謎題，誰就能為這裡飄搖的文明指出一條生路。</p>

<p>汪淼站在虛擬的荒原上，感到一股熟悉的寒意——這不像是娛樂，倒像是一份來自遠方、寫給全宇宙的求救問卷。他還不知道，自己已經踏進了一個真實文明的噩夢。</p>

<p class="thought-question">🤔 思考：當你所在世界的規則本身就是隨機的，「文明」還有可能存在嗎？</p>`,
      en:`<p>Following the trail of clues, Wang Miao donned the immersive virtual-reality gear and logged into a game called Three Body. As his vision brightened into a simulated dawn, he found himself standing on an unfamiliar land beneath a sky that belonged to no constellation he knew.</p>

<p>He soon realized this world obeyed no rule. Day and night, heat and cold, arrived without any order. Sometimes the sun blazed for days on end, baking the ground into cracked, scorched earth; sometimes a long night fell with no warning, freezing everything into silence and ice. The seasons did not cycle. Dawn and dusk kept no schedule. It was as if some invisible hand were toying with the sky at will.</p>

<div class="section-break">◆ ◆ ◆</div>

<p>On this land of constant upheaval, one civilization after another struggled into being. They built cities, gathered knowledge, and gazed at the heavens, trying to wring order out of the madness. Yet every flowering was wiped away by a catastrophe that came with no warning—burned to nothing by relentless suns, or frozen solid by killing cold. Civilizations were like candle flames: lit again and again, and again and again snuffed out.</p>

<p>The task the game set before every player was single, cold, and immense: discover the law by which this world runs. When would the sun rise, and when would it set? What rule lay hidden beneath the swing from heat to cold? Whoever cracked the riddle could show the flickering civilizations here a path to survival.</p>

<p>Standing on the virtual wasteland, Wang Miao felt a familiar chill—this seemed less like entertainment than a distress questionnaire sent from somewhere far away, addressed to the whole universe. He did not yet know that he had stepped into the nightmare of a civilization that was entirely real.</p>

<p class="thought-question">🤔 Reflect: When the very rules of your world are random, is "civilization" even possible?</p>`
    }
  },
  10:{
    num:{zh:`第十章`,en:`Chapter Ten`},
    title:{zh:`脫水者`,en:`The Dehydrated`},
    epigraph:{
      zh:`當活著本身成了賭注，生命學會了把自己收起來。`,
      en:`When merely staying alive becomes a gamble, life learns to fold itself away.`
    },
    body:{
      zh:`<p>汪淼漸漸懂得了這個世界最殘酷的節奏。這裡的時間分成兩種：無法預測、隨時降臨災變的「亂紀元」，以及氣候暫時溫和、萬物得以喘息生長的「恆紀元」。沒有人知道亂紀元何時開始，也沒有人知道恆紀元能撐多久。</p>

<p>為了熬過亂紀元那足以焚身或凍骨的極端，這個世界的居民演化出一種令人驚駭的本領——脫水。當災變將至，他們排空體內所有水分，把自己收縮成一卷乾癟輕薄的皮，像一張捲起的畫。這乾枯的軀殼可以被層層堆疊、妥善收藏，安然度過漫長的亂紀元。等到恆紀元重臨、大地回暖，只要重新泡水，這些皮卷就會吸飽水分、舒展復活，重新站起來延續文明。</p>

<div class="section-break">＊ ＊ ＊</div>

<p>在遊戲裡，汪淼並非以自己的身分行走，而是化身為一個個歷史人物——時而是周文王，時而是墨子，時而是哥白尼。他透過這些化身，見證了這個世界一代代智者的努力。</p>

<p>他們發明曆法，建立模型，用盡當時所能想到的一切方法，只為預測太陽何時升起、何時沉落。有人依賴玄奧的占卜，有人依賴嚴謹的觀測與計算，各自懷著滿腔的自信，宣稱自己終於掌握了天空的規律。</p>

<p>然而每一次，天空都用一場出乎意料的災變，無情地嘲笑了他們的預言。文明再度被脫水的皮卷所取代，等待下一次復甦，也等待下一次徒勞。汪淼看著這一切循環往復，心底浮起一個越來越清晰的問題：這個世界，究竟藏著怎樣的秘密？</p>

<p class="thought-question">🤔 思考：如果知識一次次被證明無力預測命運，人為什麼還要一次次重新求知？</p>`,
      en:`<p>Wang Miao slowly grasped the cruelest rhythm of this world. Time here came in two kinds: the Chaotic Era, when unpredictable catastrophe could strike at any moment, and the Stable Era, when the climate turned briefly mild and all things could breathe and grow. No one knew when a Chaotic Era would begin, and no one knew how long a Stable Era might last.</p>

<p>To survive the extremes of the Chaotic Era—heat enough to burn, cold enough to shatter bone—the inhabitants of this world had evolved a startling ability: dehydration. When catastrophe loomed, they drained every drop of water from their bodies and shrank into a dry, papery roll, like a rolled-up painting. These withered husks could be stacked in layers and carefully stored away, riding out the long Chaotic Era in safety. When the Stable Era returned and the land warmed again, a simple soaking would swell the rolls back to fullness; they would unfurl, revive, rise to their feet, and carry the civilization onward.</p>

<div class="section-break">◆ ◆ ◆</div>

<p>In the game, Wang Miao did not walk as himself but took the forms of one historical figure after another—now King Wen, now Mozi, now Copernicus. Through these avatars he witnessed the labors of this world's sages, generation upon generation.</p>

<p>They invented calendars, built models, and marshaled every method their age could conceive, all to predict when the sun would rise and when it would sink. Some leaned on arcane divination, others on rigorous observation and calculation, each brimming with confidence, each proclaiming that they had at last mastered the law of the sky.</p>

<p>And every time, the sky answered with an unexpected catastrophe that mocked their forecasts without mercy. Civilization gave way once more to rolls of dehydrated skin, waiting for the next revival—and the next futility. Watching this cycle turn again and again, Wang Miao felt a question sharpen in his mind: what secret did this world truly hide?</p>

<p class="thought-question">🤔 Reflect: If knowledge is proven powerless to predict fate time after time, why do people keep returning to seek it?</p>`
    }
  },
  11:{
    num:{zh:`第十一章`,en:`Chapter Eleven`},
    title:{zh:`三日凌空`,en:`Three Suns in the Sky`},
    epigraph:{
      zh:`謎底不是一顆太陽的任性，而是三顆太陽的角力。`,
      en:`The answer was never one sun's whim, but three suns locked in struggle.`
    },
    body:{
      zh:`<p>謎底終於揭曉，而它比任何人的猜測都要冷酷。這個世界並非繞著一顆太陽運行，而是同時被三顆恆星牽引。三顆太陽彼此拉扯、互相追逐，構成一個永遠無法精確計算的引力糾纏。</p>

<p>這正是那道橫亙在文明頭頂的難題——三體問題。三顆恆星的運動沒有穩定的解，它們的軌跡無從長久預測。有時三日凌空，把大地烤成煉獄；有時三日俱隱，讓世界墜入極寒的黑夜。所有曆法、所有模型、所有代代相傳的智慧，注定都算不出明天的太陽會怎樣升起。</p>

<div class="section-break">＊ ＊ ＊</div>

<p>對這個世界的居民而言，這是最終的宣判：他們腳下的行星，是一顆註定不穩、註定會被三顆太陽反覆摧殘的世界。文明無論多麼堅韌，都逃不過被一次次抹平的命運。留在這裡，就等於在等待毀滅。</p>

<p>於是他們做出了一個悲壯的決定——放棄這顆行星。不再徒勞地與無解的天空搏鬥，而是抬起頭，向廣袤的宇宙尋找一個新的、穩定的家園。這份求生的意志，成了整個文明最後的信仰。</p>

<p>直到此刻，汪淼才徹底明白：這從來不只是一款遊戲。屏幕背後，是一個真實文明發出的呼救——它們真的存在，它們真的在垂死掙扎，而它們的目光，早已越過星海，落在了地球之上。</p>

<p class="thought-question">🤔 思考：當一個文明確認自己的世界無可挽回，「離開」是投降，還是最勇敢的求生？</p>`,
      en:`<p>The answer was revealed at last, and it was colder than anyone's guess. This world did not orbit a single sun. It was pulled at once by three stars. The three suns tugged and chased one another, forming a gravitational tangle that could never be calculated with precision.</p>

<p>This was the riddle hanging over the civilization's head—the three-body problem. The motion of three stars has no stable solution; their paths cannot be predicted for long. Sometimes three suns crowded the sky, roasting the land into an inferno; sometimes all three vanished, plunging the world into a night of killing cold. Every calendar, every model, every scrap of wisdom handed down through the generations was doomed to fail at telling how tomorrow's sun would rise.</p>

<div class="section-break">◆ ◆ ◆</div>

<p>For the inhabitants of this world, it was a final verdict: the planet beneath their feet was destined to be unstable, destined to be ravaged again and again by three suns. However resilient a civilization might be, it could not escape being wiped flat, over and over. To stay was to wait for annihilation.</p>

<p>And so they made a decision at once tragic and defiant—to abandon this planet. No longer would they waste themselves fighting a sky with no solution. Instead they lifted their eyes to the vast universe, searching for a new home, a stable one. This will to survive became the civilization's last article of faith.</p>

<p>Only now did Wang Miao fully understand: this had never been merely a game. Behind the screen was a distress call from a civilization that was real—it truly existed, it was truly struggling against death, and its gaze had long since crossed the sea of stars to settle upon the Earth.</p>

<p class="thought-question">🤔 Reflect: When a civilization confirms its world is beyond saving, is "leaving" surrender, or the bravest form of survival?</p>`
    }
  },
  12:{
    num:{zh:`第十二章`,en:`Chapter Twelve`},
    title:{zh:`古箏行動`,en:`Operation Guzheng`},
    epigraph:{
      zh:`最鋒利的刀，是你看不見、直到它已經穿過你的那一把。`,
      en:`The sharpest blade is the one you never see—until it has already passed through you.`
    },
    body:{
      zh:`<p>地球三體組織把一批關鍵的資料，藏在一艘名為「審判日號」的巨輪上。這些資料太重要，重要到不容組織有絲毫時間銷毀。當局需要一種辦法，在那艘船毫無察覺的情況下，把它完整地攔下、剖開。</p>

<p>答案，來自汪淼實驗室裡研發的奈米材料——一種被稱為「飛刃」的奈米細絲。它纖細到肉眼幾乎無法辨識，卻擁有超乎想像的強度與鋒利。當局選定了審判日號的必經之路：巴拿馬運河。在運河最狹窄的水道上，無數條飛刃被無聲地張設起來，一根根繃緊，構成一道看不見的、致命的琴弦之網。</p>

<div class="section-break">＊ ＊ ＊</div>

<p>沒有爆炸，沒有警報，沒有任何一聲喊叫。審判日號依照它的航道，緩緩駛入那片被細絲橫貫的水域，龐大的船身如常地推開河水，船上的人一如往常地行走、交談、呼吸。</p>

<p>然後，巨輪穿過了那道看不見的網。飛刃在鋼鐵、機械與血肉之間毫無阻礙地滑過，安靜得近乎溫柔。船身仍在前進，一切看似正常——直到整艘巨輪，連同上面的每一個人、每一道艙壁、每一份資料，順著那些細絲的排列，被切成一片又一片薄薄的斷層。龐然大物在自己的慣性中緩緩崩解，滑落成一疊整齊的殘骸。</p>

<p>這場行動冷酷、精準，不帶一絲多餘的聲響。當局得到了他們要的資料，代價是一整艘船的生命，在毫無知覺中化為薄片。汪淼親眼目睹了自己的科學被鍛造成何等的利刃，站在運河邊，久久無法言語——人類為了對抗看不見的敵人，已經開始動用看不見的殺戮。</p>

<p class="thought-question">🤔 思考：當一項技術能如此無聲地決定生死，發明它的人，該為它劃過的每一道斷面負責嗎？</p>`,
      en:`<p>The Earth-Trisolaris Organization had hidden a cache of vital data aboard a massive ship called Judgment Day. The data was too important—so important that the organization could not be given a single moment to destroy it. The authorities needed a way to stop the ship and cut it open before it ever sensed the danger.</p>

<p>The answer came from the nanomaterial developed in Wang Miao's own laboratory—a nanofilament known as "flying blade." So fine it was all but invisible to the naked eye, it possessed a strength and sharpness beyond imagining. The authorities chose the route Judgment Day was bound to take: the Panama Canal. Across the canal's narrowest stretch, countless flying blades were strung up in silence, each drawn taut, forming an unseen and deadly net of harp strings.</p>

<div class="section-break">◆ ◆ ◆</div>

<p>There was no explosion, no alarm, not a single cry. Judgment Day held its course and slid slowly into the waters spanned by the filaments. Its vast hull parted the river as always; the people aboard walked, talked, and breathed as they always had.</p>

<p>Then the great ship passed through the invisible net. The flying blades slipped through steel, machinery, and flesh without the slightest resistance, quiet to the point of tenderness. The hull still moved forward, everything seeming normal—until the entire ship, along with every person, every bulkhead, and every scrap of data aboard, was sliced into one thin layer after another, following the alignment of those filaments. The colossus came apart slowly under its own momentum, sliding down into a neat stack of ruin.</p>

<p>The operation was cold, precise, and free of any wasted sound. The authorities got the data they wanted; the price was an entire ship of lives rendered into thin slices without ever knowing. Wang Miao watched with his own eyes what his science had been forged into, and standing at the canal's edge, he could not speak for a long time—to fight an unseen enemy, humanity had already begun to wield unseen slaughter.</p>

<p class="thought-question">🤔 Reflect: When a technology can decide life and death so silently, must the one who invented it answer for every cross-section it passes through?</p>`
    }
  }
});


Object.assign(CHAPTER_CONTENT, {
  13:{
    num:{zh:`第十三章`,en:`Chapter Thirteen`},
    title:{zh:`消滅人類暴政`,en:`Down with Human Tyranny`},
    epigraph:{
      zh:`當一個人徹底恨透了自己的族類，他會為毀滅者遞上鑰匙。`,
      en:`When a person comes to loathe their own kind, they will hand the destroyer the key.`
    },
    body:{
      zh:`<p>審判日號被切成薄片之後，一個潛藏在人類文明深處的秘密終於被撬開。汪淼與大史一步步逼近的真相，比任何科學謎題都更令人脊背發涼——這世上竟真有一群人，在暗中迎接一場針對全人類的入侵，並稱之為救贖。</p><p>這個組織叫「地球三體組織」，縮寫 ETO。它不是普通的邪教，成員裡有頂尖科學家、富豪、政客、軍人與失意的知識分子。他們崇拜四光年外那個在三顆太陽間掙扎求生的文明，把尚未到來的三體艦隊尊為降臨的「主」，甘願充當內應，為主人清掃這顆星球。</p><div class="section-break">＊ ＊ ＊</div><p>但這群叛徒並非鐵板一塊。汪淼漸漸看清，組織早已在信仰的裂縫中分裂成幾派。降臨派最為決絕：他們對人類已不抱一絲期待，恨透了同類的貪婪與殘暴，只盼三體降臨、把這一切連根抹去，哪怕自己也一同被抹去。</p><p>拯救派則還存著一點溫度。他們同情三體世界在亂紀元中一次次被毀滅的苦難，幻想著替「主」找到解脫之道，順帶也替人類留一線生機——彷彿兩個文明都還能得救。而倖存派最為卑微，他們不談信仰，只算計著：既然大勢已去，不如及早投誠，換得在新主人腳下苟延殘喘的資格，讓自己的血脈活下去。</p><div class="section-break">＊ ＊ ＊</div><p>三派立場各異，卻共享同一句令人戰慄的口號，像禱詞，也像宣判：消滅人類的暴政，讓這個世界歸於三體。當這句話第一次完整地擺在汪淼面前，他終於明白，敵人不在四百年後的星海，敵人早已混在人群裡，就站在你我身邊。</p><p class="thought-question">🤔 思考：把「人類」當成敵人的，恰恰是人類自己。當絕望深到願意迎接毀滅時，究竟是文明有罪，還是絕望本身有毒？</p>`,
      en:`<p>After the Judgment Day was sliced into wafers, a secret buried deep in the folds of human civilization was finally pried open. The truth Wang Miao and Da Shi closed in on, step by step, was colder than any scientific riddle: there really existed a body of people who, in the dark, were welcoming an invasion aimed at all of humanity — and calling it salvation.</p><p>The group was named the Earth-Trisolaris Organization, ETO for short. It was no ordinary cult. Its ranks held elite scientists, tycoons, politicians, soldiers, and disillusioned intellectuals. They worshipped that civilization four light-years away, the one clawing for survival among three suns, and revered the Trisolaran fleet — not yet arrived — as a descending Lord. Willingly they served as the enemy within, ready to sweep this planet clean for their masters.</p><div class="section-break">◆ ◆ ◆</div><p>Yet these traitors were not of one mind. Wang Miao came to see that the organization had long ago split, along the fault lines of its faith, into factions. The Adventists were the most absolute: they held out not a shred of hope for humanity, loathing their own kind's greed and cruelty, wishing only for Trisolaris to descend and erase it all at the root — even if they were erased along with it.</p><p>The Redemptionists still kept a flicker of warmth. They pitied the Trisolaran world, destroyed again and again through its Chaotic Eras, and dreamed of finding their Lord a way out — leaving, in passing, a thread of survival for humankind too, as if both civilizations might yet be saved. The Survivors were the most abject of all. They spoke of no faith; they merely calculated: since the game was lost, better to defect early and earn the right to eke out an existence at the new masters' feet, so their bloodline might live on.</p><div class="section-break">◆ ◆ ◆</div><p>Three factions, three stances, yet all shared one chilling slogan — half prayer, half sentence: Down with the tyranny of humankind; let this world belong to Trisolaris. When that line was first laid before Wang Miao in full, he understood at last: the enemy was not in the ocean of stars four centuries away. The enemy had long been mingled among the crowd, standing right beside you and me.</p><p class="thought-question">🤔 Reflect: Those who cast "humanity" as the enemy were, precisely, humans themselves. When despair runs deep enough to welcome annihilation — is it civilization that is guilty, or is despair itself the poison?</p>`
    }
  },
  14:{
    num:{zh:`第十四章`,en:`Chapter Fourteen`},
    title:{zh:`主，我們的世界`,en:`Lord, Our World`},
    epigraph:{
      zh:`一按之下，星海回音；一念之間，同類為敵。`,
      en:`One keystroke, and the stars answered; one thought, and one's own kind became the foe.`
    },
    body:{
      zh:`<p>順著組織的根鬚往下挖，一個名字浮出水面——葉文潔。當年在紅岸基地那個把地球座標親手送出去的女子，正是這整場背叛的源頭。幾十年前雷達峰上的一按，如今在她一手締造的組織裡開花結果。</p><p>與她並肩締造 ETO 的，是麥克‧伊文斯。這個石油巨富之子，本可揮霍一生，卻因目睹人類對自然的貪婪掠奪而墜入無底的絕望。他曾傾盡家財去拯救一個瀕危物種，最終卻認定：真正該被審判的，是人類這個物種本身。</p><div class="section-break">＊ ＊ ＊</div><p>葉文潔帶來了與三體通訊的秘密，伊文斯帶來了金錢、船隻與遍布全球的網絡。兩股絕望匯流，一個橫跨全球的地下組織就此成形。伊文斯甚至在海上建起了「第二紅岸」，一座不受任何國家管轄的通訊站，日復一日地向那三顆太陽的方向發送人類文明的一切，替遠方的主人準備好這顆待收割的星球。</p><p>他成了降臨派最極端的領袖。在他眼中，人類已無可救藥，任何拯救的幻想都是軟弱。他要的不是共存，而是清洗——連同他自己在內的清洗。「主，我們的世界」，這句禱詞般的話語在組織中被反覆低誦，道盡了這群背棄同類者全部的信仰與扭曲的虔誠。</p><div class="section-break">＊ ＊ ＊</div><p>當汪淼與大史終於拼出這幅圖景，一種荒謬的悲哀壓了下來：招致這場滅頂之災的，不是什麼外星陰謀的巧妙滲透，而是人類自己心底那口深不見底的絕望之井。是我們親手，把鑰匙遞了出去。</p><p class="thought-question">🤔 思考：葉文潔恨的是殺父的暴行，伊文斯恨的是滅絕物種的貪婪——他們的憤怒都不算錯。可當憤怒膨脹成「整個物種都該死」，正義是否已悄悄變成了它想毀滅的那種暴政？</p>`,
      en:`<p>Following the organization's roots down into the dark, a name surfaced — Ye Wenjie. The woman who, years before at Red Coast Base, had sent Earth's coordinates out with her own hand was the very source of this entire betrayal. That single keystroke on the radar peak decades ago had now come to flower in the organization she herself had built.</p><p>Standing beside her in founding the ETO was Mike Evans. Son of an oil magnate, he might have squandered his life in luxury; instead, watching humanity's greedy plunder of nature, he fell into a bottomless despair. He had once poured out his fortune to save a dying species, only to conclude in the end that the one thing that truly deserved judgment was the human species itself.</p><div class="section-break">◆ ◆ ◆</div><p>Ye Wenjie brought the secret of communicating with Trisolaris; Evans brought money, ships, and a network spread across the globe. Two currents of despair converged, and an underground organization spanning the world took shape. Evans even built a "Second Red Coast" out at sea — a transmitting station beyond any nation's jurisdiction — sending, day after day, everything of human civilization toward those three suns, readying this planet, ripe for harvest, for its distant Lord.</p><p>He became the most extreme leader of the Adventists. In his eyes humanity was beyond cure, and every dream of salvation was mere weakness. He wanted not coexistence but a cleansing — a cleansing that included himself. "Lord, our world" — that prayer-like phrase, murmured over and over within the organization, said everything about the faith and warped devotion of these people who had forsaken their own kind.</p><div class="section-break">◆ ◆ ◆</div><p>When Wang Miao and Da Shi at last assembled the picture, an absurd grief pressed down upon them: this looming catastrophe had not been drawn upon the world by some cunningly engineered alien infiltration, but by the bottomless well of despair in humanity's own heart. It was we, with our own hands, who had passed the key across.</p><p class="thought-question">🤔 Reflect: Ye Wenjie hated the brutality that killed her father; Evans hated the greed that exterminates species — neither rage was wrong in itself. But when rage swells into "the whole species deserves to die," has justice quietly become the very tyranny it set out to destroy?</p>`
    }
  },
  15:{
    num:{zh:`第十五章`,en:`Chapter Fifteen`},
    title:{zh:`智子`,en:`The Sophon`},
    epigraph:{
      zh:`一個質子裡，藏著足以鎖死一個文明的神明。`,
      en:`Within a single proton hides a god vast enough to lock down a civilization.`
    },
    body:{
      zh:`<p>三體艦隊要橫跨四光年的星海，最快也要四百年後才會抵達。四個世紀，對一個文明而言，本該是足夠奮起、足夠準備的漫長歲月。然而三體人並不打算給地球這個機會——他們搶在艦隊之前，先出了手。</p><p>他們動用的不是武器，而是一個質子。三體文明在更高的維度上，把一個微小的質子展開成巨大的平面，在上面蝕刻電路，再將它重新收攏回微觀尺度，造出了一台小到肉眼不可見、卻擁有近乎神明智慧的超級電腦。他們把這樣的造物叫做「智子」，並將它以近光速射向地球。</p><div class="section-break">＊ ＊ ＊</div><p>智子潛入人間，做的第一件事，就是鑽進人類最精密的粒子加速器。它在其中製造混亂，讓每一次高能實驗都得出彼此矛盾、無法重複的結果。於是人類再也無法看清物質最底層的規律——基礎物理學被從根子上攪亂了。那些自殺的科學家看見的「物理學不存在」，原來不是幻覺，而是被一隻看不見的手，親手扭斷的認知。</p><p>更令人絕望的是，智子不止一個，而且無所不在。它能在瞬間掠過全球，把地球上發生的一切盡收「眼」底，再傳回四光年外。人類從此再無秘密可言，任何反抗的謀劃都攤在主人面前。三體人只用兩個質子，就替四百年後的入侵，提前鎖死了人類的科學與隱私。</p><div class="section-break">＊ ＊ ＊</div><p>科學進步的大門，就這樣被輕輕關上了。當汪淼與丁儀明白，人類文明從此將被凍結在現有的科技水平，直到艦隊降臨的那一天——一種前所未有的無力感，籠罩了每一個知道真相的人。</p><p class="thought-question">🤔 思考：真正致命的一擊，不是把你打倒，而是讓你再也無法變強。當一個文明被鎖死在原地四百年，它靠什麼熬過這場漫長的黑暗？</p>`,
      en:`<p>The Trisolaran fleet had to cross four light-years of stars; even at its swiftest it would not arrive for four hundred years. Four centuries — for a civilization, that ought to be time enough to rise, time enough to prepare. But the Trisolarans had no intention of granting Earth that chance. Ahead of their fleet, they struck first.</p><p>The weapon they wielded was not a weapon at all, but a proton. In a higher dimension, the Trisolaran civilization unfolded a single tiny proton into a vast plane, etched circuitry upon its surface, then folded it back down to the microscopic scale — fashioning a supercomputer smaller than the eye could see yet possessed of a nearly divine intellect. They called such a creation a sophon, and they hurled it toward Earth at close to the speed of light.</p><div class="section-break">◆ ◆ ◆</div><p>Slipping into the human world, the first thing the sophon did was burrow into mankind's most precise particle accelerators. Within them it sowed chaos, making every high-energy experiment yield results that contradicted one another and could never be repeated. And so humanity could no longer perceive the deepest laws of matter — fundamental physics was scrambled at the root. The "physics does not exist" that the dead scientists had glimpsed was, it turned out, no delusion, but a cognition wrenched apart by an unseen hand.</p><p>More despairing still, there was not one sophon, and it was everywhere. In an instant it could sweep across the whole globe, taking in all that happened on Earth with its "eye," then relaying it back four light-years away. Humanity would keep no secret from that day on; every scheme of resistance lay spread open before the masters. With just two protons, the Trisolarans had, four centuries in advance, locked down humanity's science and its privacy alike.</p><div class="section-break">◆ ◆ ◆</div><p>The gate of scientific progress was thus gently pulled shut. When Wang Miao and Ding Yi grasped that human civilization would from now on be frozen at its present level of technology, until the day the fleet descended — an unprecedented helplessness settled over everyone who knew the truth.</p><p class="thought-question">🤔 Reflect: The truly fatal blow is not the one that knocks you down, but the one that ensures you can never grow stronger. When a civilization is locked in place for four hundred years, on what does it survive the long darkness?</p>`
    }
  },
  16:{
    num:{zh:`第十六章`,en:`Chapter Sixteen`},
    title:{zh:`蟲子`,en:`The Bugs`},
    epigraph:{
      zh:`被踩了幾千年的蟲子，至今仍鋪滿大地。`,
      en:`The bugs, trodden upon for millennia, still cover the whole earth.`
    },
    body:{
      zh:`<p>真相全部攤開之後，籠罩眾人的是一種近乎窒息的絕望。艦隊四百年後到來，科學已被智子鎖死，人類連反抗的資格似乎都被剝奪了。而在三體人傲慢的目光裡，人類不過是一群渺小、愚昧、可以隨手碾碎的存在——他們給地球生靈起了個蔑稱：蟲子。</p><p>丁儀為此頹然，連一向粗獷的大史也看在眼裡。就在這片絕望的谷底，大史卻做了一件出人意料的事：他開著車，把失魂落魄的汪淼與丁儀，載到了華北一片正被蝗災席捲的田野邊。</p><div class="section-break">＊ ＊ ＊</div><p>放眼望去，鋪天蓋地的蝗蟲把莊稼啃噬得一片狼藉，密密麻麻，多到讓人頭皮發麻。大史點起一支菸，指著那片蟲海，說了一句讓兩位科學家如遭雷擊的話。</p><p>他說：瞧瞧這些蟲子。論科技，論力量，人跟牠們的差距，難道會比三體人跟我們的差距小嗎？幾千年來，人類用盡了毒藥、烈火、一切手段想滅絕牠們——可你看，牠們還在這兒，鋪滿了整片大地。蟲子，從來就沒有被真正戰勝過。</p><div class="section-break">＊ ＊ ＊</div><p>那一刻，某種東西在汪淼與丁儀心裡重新亮了起來。是的，人類渺小如蟲，這是事實；可蟲子的渺小，從不等於蟲子會被消滅。被踩踏、被焚燒、被下毒了幾千年，牠們依舊頑強地活著、繁衍著，用最卑微的姿態嘲笑著一切自命高等的力量。</p><p>三體人叫我們蟲子，卻忘了：蟲子的生命力，恰恰是這個宇宙裡最不肯認輸的東西。四百年的黑暗固然漫長，但只要還有一口氣、還有一絲不肯熄滅的韌性，人類這群「蟲子」，就未必沒有活下去、甚至翻身的一天。全書在絕望的最深處，就這樣為人類，留下了一粒不肯熄滅的火種。</p><p class="thought-question">🤔 思考：被叫做蟲子，是屈辱，還是底氣？當強者用盡手段都無法將你抹去，這份「殺不死」的頑強，會不會正是渺小者最後、也最強大的武器？</p>`,
      en:`<p>Once the whole truth lay exposed, what enveloped everyone was a despair close to suffocation. The fleet would arrive in four hundred years, science was locked down by the sophons, and humanity seemed stripped of even the right to resist. In the arrogant gaze of the Trisolarans, humans were nothing but small, ignorant creatures to be crushed at a whim — they had coined a contemptuous name for the beings of Earth: bugs.</p><p>Ding Yi sank under it, and even the ever-gruff Da Shi took note. Yet at the very bottom of this despair, Da Shi did something unexpected: he drove the shattered Wang Miao and Ding Yi out to the edge of a North China field being overrun by a plague of locusts.</p><div class="section-break">◆ ◆ ◆</div><p>As far as the eye could see, an all-covering swarm of locusts had gnawed the crops to ruin — dense, teeming, so many the sight made the scalp crawl. Da Shi lit a cigarette, pointed at that ocean of insects, and said something that struck the two scientists like a thunderbolt.</p><p>Look at these bugs, he said. In technology, in sheer power, is the gap between us and them really any smaller than the gap between the Trisolarans and us? For thousands of years humanity has thrown every poison, every fire, every means we have at wiping them out — and yet, look, they are still here, blanketing the whole earth. The bugs have never once been truly defeated.</p><div class="section-break">◆ ◆ ◆</div><p>In that moment, something lit up again inside Wang Miao and Ding Yi. Yes — humanity was as small as bugs; that was a fact. But the smallness of a bug had never meant the bug would be exterminated. Trodden, burned, poisoned for millennia, they lived on stubbornly, breeding on, mocking with the humblest of forms every power that fancied itself superior.</p><p>The Trisolarans called us bugs, and forgot: the vitality of a bug is precisely the thing in this universe that refuses hardest to surrender. Four hundred years of darkness was long, to be sure. But so long as there was a breath left, so long as one thread of tenacity refused to go out, these human "bugs" might yet find a way not only to live, but perhaps one day to turn the tide. At the very deepest point of despair, the story thus left humanity a single ember that would not be put out.</p><p class="thought-question">🤔 Reflect: To be called a bug — is it humiliation, or is it grounds for courage? When the strong exhaust every method and still cannot erase you, might this refusal-to-die tenacity be the small one's last, and greatest, weapon?</p>`
    }
  }
});

