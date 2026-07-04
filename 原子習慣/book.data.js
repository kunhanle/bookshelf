// ==== 原子習慣 Atomic Habits · 中英雙語 metadata（非文學框架）====
const BOOK = {
  slug: 'atomichabits',
  langs: ['zh', 'en'],
  title: { zh: '原子習慣', en: 'Atomic Habits' },
  author: { zh: 'James Clear（詹姆斯‧克利爾）', en: 'James Clear' },
  theme: {
    'bg-primary': '#14171d', 'bg-secondary': '#1a1e26', 'bg-card': '#20252e', 'bg-elevated': '#282e39',
    'text-primary': '#e6ecf2', 'text-secondary': '#a9b4c0', 'text-muted': '#7a8492',
    'accent': '#4f8fc9', 'accent-light': '#7fb0e0', 'accent-glow': 'rgba(79,143,201,0.30)',
    'rose': '#d98a6a', 'jade': '#6bbf9a', 'blue': '#4f8fc9', 'gold': '#d9b45a',
    'border': 'rgba(79,143,201,0.16)',
    atmosphere: { fall: 16, streak: 6, fallRadius: '50%' },
    dayMode: { 'bg-primary': '#eef1f5', 'bg-secondary': '#e3e8ee', 'bg-card': '#fbfcfe', 'bg-elevated': '#f0f3f7', 'text-primary': '#232a33', 'text-secondary': '#48525e', 'text-muted': '#78828e', 'border': 'rgba(79,143,201,0.22)' }
  },
  cover: {
    seal: '習',
    subtitle: { zh: '每天都比昨天好一點', en: 'Get 1% Better Every Day' },
    desc: { zh: '成果不是目標的高度，<br>而是系統與身份日復一日的累積。', en: 'Results are not the height of your goals,<br>but the daily compounding of your systems and identity.' }
  },
  musicPrompt: { zh: '準備好打造更好的自己，<br>是否播放一段背景音樂？', en: 'Ready to build a better you —<br>shall we play some music?' },
  labels: {
    nav: { characters: { zh: '概念譜', en: 'Concepts' }, timeline: { zh: '架構軸', en: 'Framework' } },
    headers: { characters: { zh: '核心概念關係圖', en: 'Map of Core Concepts' }, timeline: { zh: '全書的行動架構', en: 'The Architecture of the Book' } },
    subheads: { characters: { zh: '點擊概念卡或關係圖，看「四大法則」與核心工具如何環環相扣', en: 'Click a concept card or the map to see how the Four Laws and the core tools interlock' }, timeline: { zh: '從一場意外到四大法則：全書的推進與關鍵實證', en: 'From an accident to the Four Laws: the book’s arc and its key evidence' } },
    timelineTypes: { history: { zh: '科學實證', en: 'The Evidence' }, novel: { zh: '全書架構', en: 'The Framework' }, character: { zh: '克利爾的故事', en: 'Clear’s Story' } },
    charDetail: { intro: { zh: '概念說明', en: 'The Idea' }, analysis: { zh: '怎麼運用', en: 'How to Use It' }, related: { zh: '相關概念', en: 'Related Concepts' }, tags: { zh: '關鍵詞', en: 'Keywords' }, empty: '—' },
    legend: { lead: { zh: '核心引擎', en: 'Core Engine' }, major: { zh: '重要概念', en: 'Key Concept' }, minor: { zh: '實踐工具', en: 'Practical Tool' }, edge: { zh: '概念關聯', en: 'Conceptual Link' } }
  },
  intro: {
    subtitle: { zh: '在閱讀之前，先掌握這套「微小改變」的行為系統', en: 'Before you read, grasp the system of tiny changes' },
    author: {
      name: { zh: 'James Clear（詹姆斯‧克利爾）', en: 'James Clear' },
      portrait: { zh: '習', en: 'C' },
      years: { zh: '1986 —　美國作家、習慣養成講者', en: '1986 —　American writer and speaker on habits' },
      bio: { zh: '美國作家與講者，專研習慣、決策與持續進步。高中時一場棒球意外讓他嚴重受傷，日後靠一連串微小而持續的習慣一步步復原、重返賽場並進入大學校隊——這段親身經歷成了《原子習慣》的種子。他以電子報與部落格累積大量讀者，2018 年出版《原子習慣》，把行為科學整理成人人可操作的「四大法則」，成為全球現象級暢銷書。', en: 'An American writer and speaker focused on habits, decision-making, and continuous improvement. A severe baseball injury in high school set him back badly; he rebuilt himself through a chain of tiny, consistent habits, eventually returning to play at the college level — the personal seed of Atomic Habits. Having built a large audience through his newsletter and blog, he published Atomic Habits in 2018, distilling behavioral science into four actionable laws, and it became a global phenomenon.' }
    },
    cards: [
      { icon: '📈', title: { zh: '核心命題', en: 'The Core Idea' }, text: { zh: '你不會升到目標的高度，只會跌到系統的水準。改變不必轟轟烈烈——每天 1% 的微小改進，靠複利，長期會造成巨大的差異。', en: 'You do not rise to the level of your goals; you fall to the level of your systems. Change need not be dramatic — a 1% improvement each day compounds, over time, into a remarkable difference.' } },
      { icon: '🧩', title: { zh: '四大法則', en: 'The Four Laws' }, text: { zh: '所有習慣都跑同一個迴路：提示→渴求→反應→獎賞。想建立好習慣，就讓它①顯而易見②有吸引力③輕而易舉④令人滿足；戒除壞習慣則把四條反過來。', en: 'Every habit runs the same loop: cue → craving → response → reward. To build a good habit, make it (1) obvious, (2) attractive, (3) easy, and (4) satisfying; to break a bad one, invert all four.' } },
      { icon: '🪞', title: { zh: '最深的一層', en: 'The Deepest Layer' }, text: { zh: '最持久的改變是身份的改變。與其追求結果（我想變瘦），不如成為那種人（我是照顧自己的人）。每個行動，都是投給「你想成為的那種人」的一張選票。', en: 'The most lasting change is a change of identity. Rather than chase an outcome (“I want to lose weight”), become the person (“I’m someone who takes care of myself”). Every action is a vote for the type of person you wish to become.' } },
      { icon: '🧭', title: { zh: '閱讀建議', en: 'How to Read' }, text: { zh: '先看「概念譜」抓住 1% 複利、習慣迴路與四大法則，再對照「架構軸」看全書推進，然後逐章讀方法。每章都能立刻挑一件事開始做。', en: 'Start with the Concepts map to grasp 1% compounding, the habit loop, and the Four Laws; read against the Framework timeline for the book’s arc; then work through the methods chapter by chapter. Each chapter offers one thing you can start doing today.' } }
    ],
    guide: [
      { h: { zh: '先抓核心引擎', en: 'Grasp the core engines first' }, p: { zh: '在「概念譜」認清 1% 複利這台總引擎，以及習慣迴路與四大法則。理解它們如何互相咬合，是實踐的地基。', en: 'In the Concepts map, get the master engine (1% compounding), the habit loop, and the Four Laws. Seeing how they mesh is the foundation for putting them to work.' } },
      { h: { zh: '跟著全書架構讀', en: 'Read along the framework' }, p: { zh: '打開「架構軸」，把克利爾的故事、四大法則的推進與關鍵實證並排看，先掌握大地圖再鑽細節。', en: 'Open the Framework timeline and set Clear’s story, the arc of the Four Laws, and the key evidence side by side — get the big map before the details.' } },
      { h: { zh: '逐章拿一件事去做', en: 'Take one action per chapter' }, p: { zh: '在「閱讀」模組逐章讀方法，每章都挑一個能在兩分鐘內開始的小動作。用「札記」記下你要套用的習慣。', en: 'In the Reading module, work through the methods and pick one small action you can start within two minutes. Use Notes to record the habit you’ll apply.' } },
      { h: { zh: '從系統與身份切入', en: 'Think in systems and identity' }, p: { zh: '別只盯著目標。到「主題」模組回看「系統勝過目標、認同導向的改變、一致性勝過完美」，這是本書真正的骨架。', en: 'Don’t just stare at goals. Revisit the Themes — systems over goals, identity-based change, consistency over perfection — which form the book’s true spine.' } },
      { h: { zh: '對照心得與自省', en: 'Compare with the review, then reflect' }, p: { zh: '讀完可看附錄裡站長自己的兩篇心得（署名 翰林書僮），再到「金句」收藏打中你的句子，在「札記」寫下你的第一個實驗。', en: 'Afterward, read the site owner’s own two-part review in the appendix (signed Kun Han Le), collect the lines that hit home in Quotes, and write your first experiment in Notes.' } }
    ]
  },
  families: [
    { id: 'fundamentals', label: { zh: '基礎原理', en: 'Fundamentals' } },
    { id: 'laws', label: { zh: '四大法則', en: 'The Four Laws' } },
    { id: 'tools', label: { zh: '實踐工具', en: 'Practical Tools' } }
  ],
  timelineSubtitle: { zh: '從一場意外，到一套人人可用的習慣系統', en: 'From an accident to a habit system anyone can use' },
  graph: {
    title: { zh: '— 原子習慣 · 核心概念關係圖 —', en: '— Atomic Habits · A Map of Core Concepts —' },
    nodes: [
      { id: 'compounding', label: { zh: '1% 複利', en: '1% Compounding' },       x: 400, y: 240, tier: 'lead',  color: '#4f8fc9' },
      { id: 'habitloop',   label: { zh: '習慣迴路', en: 'The Habit Loop' },       x: 400, y: 100, tier: 'major', color: '#d9b45a' },
      { id: 'identity',    label: { zh: '認同導向習慣', en: 'Identity-Based Habits' }, x: 200, y: 150, tier: 'major', color: '#6bbf9a' },
      { id: 'plateau',     label: { zh: '潛能蓄積的停滯期', en: 'Plateau of Potential' }, x: 108, y: 235, tier: 'minor', color: '#7a8492' },
      { id: 'law1',        label: { zh: '讓提示顯而易見', en: 'Make It Obvious' },   x: 178, y: 360, tier: 'major', color: '#d9b45a' },
      { id: 'law2',        label: { zh: '讓習慣有吸引力', en: 'Make It Attractive' }, x: 355, y: 405, tier: 'major', color: '#d98a6a' },
      { id: 'law3',        label: { zh: '讓行動輕而易舉', en: 'Make It Easy' },       x: 545, y: 398, tier: 'major', color: '#6bbf9a' },
      { id: 'law4',        label: { zh: '讓獎賞令人滿足', en: 'Make It Satisfying' }, x: 668, y: 300, tier: 'major', color: '#4f8fc9' },
      { id: 'stacking',    label: { zh: '習慣堆疊', en: 'Habit Stacking' },         x: 258, y: 288, tier: 'minor', color: '#a9b4c0' },
      { id: 'environment', label: { zh: '環境設計', en: 'Environment Design' },      x: 100, y: 355, tier: 'minor', color: '#a9b4c0' },
      { id: 'twominute',   label: { zh: '兩分鐘法則', en: 'Two-Minute Rule' },       x: 702, y: 402, tier: 'minor', color: '#a9b4c0' },
      { id: 'goldilocks',  label: { zh: '金髮女孩原則', en: 'Goldilocks Rule' },     x: 702, y: 150, tier: 'minor', color: '#a9b4c0' }
    ],
    edges: [
      { from: 'compounding', to: 'identity', kind: 'family' },
      { from: 'compounding', to: 'habitloop', kind: 'family' },
      { from: 'plateau', to: 'compounding', kind: 'love' },
      { from: 'identity', to: 'compounding', kind: 'love' },
      { from: 'habitloop', to: 'law1', kind: 'family' },
      { from: 'habitloop', to: 'law2', kind: 'family' },
      { from: 'habitloop', to: 'law3', kind: 'family' },
      { from: 'habitloop', to: 'law4', kind: 'family' },
      { from: 'law1', to: 'stacking', kind: 'love' },
      { from: 'law1', to: 'environment', kind: 'love' },
      { from: 'law3', to: 'twominute', kind: 'love' },
      { from: 'goldilocks', to: 'compounding', kind: 'love' }
    ]
  },
  footer: {
    quote: { zh: '「你不會升到目標的高度，只會跌到系統的水準。」', en: '“You do not rise to the level of your goals; you fall to the level of your systems.”' },
    tagline: { zh: '原子習慣 · 沉浸式閱讀 · 微小改變，顯著成果', en: 'Atomic Habits · Immersive Reading · Tiny Changes, Remarkable Results' }
  }
};

const S1 = { zh: '基礎 · 為何微小改變帶來巨大差異', en: 'The Fundamentals · Why Tiny Changes Matter' };
const S2 = { zh: '第一法則 · 讓提示顯而易見', en: 'The 1st Law · Make It Obvious' };
const S3 = { zh: '第二法則 · 讓習慣有吸引力', en: 'The 2nd Law · Make It Attractive' };
const S4 = { zh: '第三法則 · 讓行動輕而易舉', en: 'The 3rd Law · Make It Easy' };
const S5 = { zh: '第四法則 · 讓獎賞令人滿足', en: 'The 4th Law · Make It Satisfying' };
const S6 = { zh: '進階戰術 · 從優秀到卓越', en: 'Advanced Tactics · From Good to Great' };
const SA = { zh: '附錄 · 讀者心得', en: 'Appendix · Reader’s Review' };

const CHAPTERS = [
  { id: 1,  group: S1, title: { zh: '原子習慣的驚人力量', en: 'The Surprising Power of Atomic Habits' }, pages: '',
    reflectQ: { zh: '你最近有沒有因為「短期看不到成效」而放棄某個習慣？如果改看方向而非當下的成敗，會不同嗎？', en: 'Have you recently quit a habit because you “saw no results yet”? Would it change things to watch the trajectory rather than today’s score?' } },
  { id: 2,  group: S1, title: { zh: '習慣如何形塑你的身份', en: 'How Your Habits Shape Your Identity' }, pages: '',
    reflectQ: { zh: '把「我想做到X」改寫成「我是會做X的人」。這個身份，你今天投下了哪些選票？', en: 'Rewrite “I want to do X” as “I’m the kind of person who does X.” What votes did you cast for that identity today?' } },
  { id: 3,  group: S1, title: { zh: '建立更好習慣的四個步驟', en: 'How to Build Better Habits in Four Simple Steps' }, pages: '',
    reflectQ: { zh: '挑一個你想戒的壞習慣，試著用「提示→渴求→反應→獎賞」拆解它。哪一格最容易下手破壞？', en: 'Pick a bad habit you want to break and dissect it as cue → craving → response → reward. Which step is easiest to disrupt?' } },
  { id: 4,  group: S2, title: { zh: '看起來不對勁的男人', en: 'The Man Who Didn’t Look Right' }, pages: '',
    reflectQ: { zh: '你有哪些「自動駕駛」的習慣，其實從沒被你意識到？把它們寫下來，就是改變的第一步。', en: 'Which of your habits run on autopilot, never consciously noticed? Writing them down is the first step to change.' } },
  { id: 5,  group: S2, title: { zh: '開始新習慣的最好方法', en: 'The Best Way to Start a New Habit' }, pages: '',
    reflectQ: { zh: '為你想養成的習慣，寫一句「我會在[時間]，於[地點]做[事]」，並把它接在某個既有習慣之後。', en: 'For a habit you want, write “I will [behavior] at [time] in [place],” and stack it after an existing habit.' } },
  { id: 6,  group: S2, title: { zh: '動機被高估，環境往往更重要', en: 'Motivation Is Overrated; Environment Often Matters More' }, pages: '',
    reflectQ: { zh: '看看你的空間：好習慣的提示夠明顯嗎？你能怎麼重新擺放，讓正確的行為變成最顯眼的選項？', en: 'Look at your space: are the cues for good habits obvious enough? How could you rearrange it so the right action is the most visible option?' } },
  { id: 7,  group: S2, title: { zh: '自制力的祕密', en: 'The Secret to Self-Control' }, pages: '',
    reflectQ: { zh: '與其硬扛誘惑，你能移除哪一個誘因，讓自己根本不必動用意志力？', en: 'Instead of resisting temptation, which cue could you remove so you never have to spend willpower at all?' } },
  { id: 8,  group: S3, title: { zh: '如何讓習慣變得無法抗拒', en: 'How to Make a Habit Irresistible' }, pages: '',
    reflectQ: { zh: '把一件「該做的事」和一件「想做的事」配對（誘惑綑綁）。你的組合會是什麼？', en: 'Pair something you need to do with something you want to do (temptation bundling). What would your pairing be?' } },
  { id: 9,  group: S3, title: { zh: '家人與朋友如何形塑你的習慣', en: 'The Role of Family and Friends' }, pages: '',
    reflectQ: { zh: '有沒有一個社群，把你想養成的習慣當成理所當然？加入它，會讓堅持變得多容易？', en: 'Is there a group where the habit you want is simply the norm? How much easier would joining it make persistence?' } },
  { id: 10, group: S3, title: { zh: '如何找出並修正壞習慣的根源', en: 'How to Find and Fix the Causes of Your Bad Habits' }, pages: '',
    reflectQ: { zh: '你某個壞習慣，其實在替你「解決」什麼渴求（減壓？被認可？）？有沒有更好的解法？', en: 'What craving is one of your bad habits secretly “solving” (stress relief? recognition?)? Is there a better solution?' } },
  { id: 11, group: S4, title: { zh: '慢慢走，但絕不後退', en: 'Walk Slowly, but Never Backward' }, pages: '',
    reflectQ: { zh: '你是不是常在「準備」而遲遲不「行動」？今天可以先做哪一次不完美但真實的重複？', en: 'Do you often “prepare” instead of “act”? What one imperfect-but-real repetition could you do today?' } },
  { id: 12, group: S4, title: { zh: '最小努力原則', en: 'The Law of Least Effort' }, pages: '',
    reflectQ: { zh: '你能替某個好習慣減少哪一道摩擦，替某個壞習慣增加哪一道摩擦？', en: 'What friction could you remove from a good habit — and add to a bad one?' } },
  { id: 13, group: S4, title: { zh: '用兩分鐘法則停止拖延', en: 'How to Stop Procrastinating by Using the Two-Minute Rule' }, pages: '',
    reflectQ: { zh: '把你拖延的習慣縮到「兩分鐘就能完成」的版本。那個最小的登場動作是什麼？', en: 'Scale a habit you procrastinate on down to a two-minute version. What is the smallest act of “showing up”?' } },
  { id: 14, group: S4, title: { zh: '讓好習慣無可避免、壞習慣無法執行', en: 'How to Make Good Habits Inevitable and Bad Habits Impossible' }, pages: '',
    reflectQ: { zh: '有什麼「一勞永逸的決定」（自動化、預先設定），能替未來的你把好習慣鎖定、把壞選項擋掉？', en: 'What one-time decision (automation, pre-commitment) could lock in a good habit and shut off a bad option for your future self?' } },
  { id: 15, group: S5, title: { zh: '行為改變的黃金法則', en: 'The Cardinal Rule of Behavior Change' }, pages: '',
    reflectQ: { zh: '好習慣的回報常是延遲的。你能給它加上什麼「當下就有」的小獎賞？', en: 'The payoff of good habits is usually delayed. What small, immediate reward could you attach to yours?' } },
  { id: 16, group: S5, title: { zh: '如何每天堅持好習慣', en: 'How to Stick with Good Habits Every Day' }, pages: '',
    reflectQ: { zh: '「絕不錯過兩次」——如果昨天斷了，你今天要用什麼最小動作立刻回到正軌？', en: '“Never miss twice.” If you broke the chain yesterday, what smallest action gets you back on track today?' } },
  { id: 17, group: S5, title: { zh: '問責夥伴如何改變一切', en: 'How an Accountability Partner Can Change Everything' }, pages: '',
    reflectQ: { zh: '誰可以當你的問責夥伴？如果「不做」會有一個立即、真實的代價，你會更容易堅持嗎？', en: 'Who could be your accountability partner? Would an immediate, real cost for “not doing it” make you more consistent?' } },
  { id: 18, group: S6, title: { zh: '關於天賦的真相', en: 'The Truth About Talent' }, pages: '',
    reflectQ: { zh: '你是不是在一個不利自己的戰場硬拚？哪個領域能讓你的性格與長處變成優勢？', en: 'Are you grinding on a field that doesn’t suit you? Where would your temperament and strengths become an advantage?' } },
  { id: 19, group: S6, title: { zh: '金髮女孩原則：如何持續保持動力', en: 'The Goldilocks Rule: How to Stay Motivated' }, pages: '',
    reflectQ: { zh: '你目前的挑戰，是太難、太易、還是剛好「踮腳搆得到」？當無聊來襲時，你打算怎麼撐過去？', en: 'Is your current challenge too hard, too easy, or just at the edge of your ability? When boredom hits, how will you push through?' } },
  { id: 20, group: S6, title: { zh: '建立好習慣的壞處', en: 'The Downside of Creating Good Habits' }, pages: '',
    reflectQ: { zh: '哪個你已經熟練的習慣，可能已經悄悄變成「夠好就好」的停滯？你要怎麼加入反思與復盤？', en: 'Which mastered habit may have quietly slipped into “good enough” stagnation? How will you add reflection and review?' } },
  { id: 21, group: SA, title: { zh: '把「習慣的科學」變成你的日常', en: 'Turning the Science of Habits into Daily Life' }, pages: '',
    reflectQ: { zh: '用站長的實踐檢查自己：你有沒有一個「單一功能、低干擾」的環境，能讓你想要的習慣自然發生？', en: 'Test yourself against the reviewer’s practice: do you have a single-purpose, low-distraction setup that lets your desired habit happen naturally?' } }
];

const CHARACTERS = [
  { id: 'compounding', name: { zh: '1% 複利', en: 'The 1% Compounding' }, family: 'fundamentals', role: { zh: '核心引擎', en: 'The Core Engine' }, icon: '📈', color: '#4f8fc9',
    desc: { zh: '習慣是自我提升的複利。每天進步 1%，一年後約強大 37 倍；每天退步 1%，一年後幾近於零。微小改變的威力全在「時間 × 累積」。', en: 'Habits are the compound interest of self-improvement. Get 1% better each day and you end up roughly 37 times better in a year; 1% worse each day and you approach zero. The power of tiny changes lies entirely in time × accumulation.' },
    analysis: { zh: '關鍵是別用單日的成敗評價一個習慣，而要看它把你推往哪個方向。改變在跨過「潛能蓄積的停滯期」之前往往看不出效果，就像冰要升到 0°C 才融化——真正的成果，是耐心熬過那段「看似沒用」的累積期。這也是全書「系統重於目標」的根：你不會升到目標的高度，只會跌到系統的水準。', en: 'The key is to judge a habit not by a single day’s result but by the direction it points you. Change often looks ineffective until it crosses the Plateau of Latent Potential — like ice that only melts once it reaches 0°C. Real results come from patiently outlasting that “useless-looking” stretch. This is the root of the book’s “systems over goals”: you do not rise to the level of your goals; you fall to the level of your systems.' },
    tags: [ { zh: '複利', en: 'Compounding' }, { zh: '系統勝過目標', en: 'Systems over goals' }, { zh: '軌跡', en: 'Trajectory' } ],
    related: ['identity', 'habitloop', 'plateau'] },
  { id: 'habitloop', name: { zh: '習慣迴路', en: 'The Habit Loop' }, family: 'fundamentals', role: { zh: '重要概念', en: 'Key Concept' }, icon: '🔁', color: '#d9b45a',
    desc: { zh: '所有習慣都跑同一個四步迴路：提示（Cue）→ 渴求（Craving）→ 反應（Response）→ 獎賞（Reward）。看懂這個迴路，就握有設計或破解任何習慣的鑰匙。', en: 'Every habit runs the same four-step loop: cue → craving → response → reward. Understand the loop and you hold the key to designing or dismantling any habit.' },
    analysis: { zh: '提示觸發、渴求推動、反應是行為本身、獎賞完成迴路並教大腦「下次再來」。四大法則正是對應這四步：讓提示顯而易見、讓渴求有吸引力、讓反應輕而易舉、讓獎賞令人滿足；戒除壞習慣則把四條全部反過來。任何習慣都能拆進這四格逐一調整。', en: 'The cue triggers, the craving motivates, the response is the behavior itself, and the reward closes the loop and teaches the brain to do it again. The Four Laws map onto these four steps: make the cue obvious, the craving attractive, the response easy, the reward satisfying; to break a bad habit, invert all four. Any habit can be taken apart into these four boxes and adjusted one at a time.' },
    tags: [ { zh: '提示', en: 'Cue' }, { zh: '渴求', en: 'Craving' }, { zh: '反應', en: 'Response' }, { zh: '獎賞', en: 'Reward' } ],
    related: ['law1', 'law2', 'law3', 'law4'] },
  { id: 'identity', name: { zh: '認同導向習慣', en: 'Identity-Based Habits' }, family: 'fundamentals', role: { zh: '重要概念', en: 'Key Concept' }, icon: '🪞', color: '#6bbf9a',
    desc: { zh: '最持久的改變不是結果的改變，而是身份的改變。與其「我想變瘦」（結果），不如「我是照顧自己的人」（身份）。每個行動都是一張選票，投給你想成為的那種人。', en: 'The most lasting change is not a change of outcome but of identity. Rather than “I want to lose weight” (outcome), try “I’m someone who takes care of myself” (identity). Every action is a vote for the type of person you wish to become.' },
    analysis: { zh: '克利爾把改變分三層：結果、過程、身份。從結果切入的動力最淺、最易放棄；從身份切入的最深、最能持久。方法是反過來做：先決定「想成為什麼樣的人」，再用一次次小勝利，累積「我就是這種人」的證據。習慣，就是你相信自己是誰的證據；養成習慣的過程，其實就是成為你自己的過程。', en: 'Clear describes three layers of change: outcomes, processes, and identity. Starting from outcomes gives the shallowest, most quittable motivation; starting from identity gives the deepest and most durable. The method is to work backward: first decide who you wish to become, then let small wins accumulate evidence that “this is who I am.” Your habits are the evidence of your identity; building habits is, in fact, the process of becoming yourself.' },
    tags: [ { zh: '身份', en: 'Identity' }, { zh: '選票', en: 'Votes' }, { zh: '三層改變', en: 'Three layers' } ],
    related: ['compounding', 'habitloop'] },
  { id: 'plateau', name: { zh: '潛能蓄積的停滯期', en: 'The Plateau of Latent Potential' }, family: 'fundamentals', role: { zh: '實踐工具', en: 'A Mental Model' }, icon: '🧊', color: '#7a8492',
    desc: { zh: '努力的成果常常延遲登場：在跨過某個臨界點之前，一切看似毫無進展——這就是「失望之谷」。真正的突破，藏在那段看不見回報的累積裡。', en: 'The fruits of effort are often delayed: before you cross a critical threshold, everything looks like no progress at all — the Valley of Disappointment. The breakthrough hides inside that stretch of unrewarded accumulation.' },
    analysis: { zh: '冰塊從 -6°C 一路加熱，前面毫無變化，直到 0°C 才突然融化。習慣也一樣——早期的努力像是「存進帳戶卻還沒兌現」。很多人正是在突破前的最後一哩放棄。理解這條曲線，能讓你在「看似沒用」時仍守住方向，撐到複利開始顯現。', en: 'Ice warmed from −6°C shows no change at all until, at 0°C, it suddenly melts. Habits behave the same way — early effort is like money deposited but not yet paid out. Many people quit in the final mile before the breakthrough. Understanding this curve helps you hold your direction through the “useless-looking” phase until compounding starts to show.' },
    tags: [ { zh: '失望之谷', en: 'Valley of Disappointment' }, { zh: '臨界點', en: 'Threshold' }, { zh: '耐心', en: 'Patience' } ],
    related: ['compounding'] },
  { id: 'law1', name: { zh: '第一法則：讓提示顯而易見', en: '1st Law: Make It Obvious' }, family: 'laws', role: { zh: '重要概念', en: 'Key Concept' }, icon: '👁️', color: '#d9b45a',
    desc: { zh: '對應迴路的「提示」。要建立好習慣，就讓它的提示無所不在；工具有：習慣計分卡（先覺察）、執行意圖（寫明時間地點）、習慣堆疊、環境設計。戒除壞習慣則反過來——讓提示隱而不見。', en: 'This law addresses the cue. To build a good habit, make its cue impossible to miss; the tools are the habits scorecard (awareness first), implementation intentions (name the time and place), habit stacking, and environment design. To break a bad habit, invert it — make the cue invisible.' },
    analysis: { zh: '改變從覺察開始：看不見的習慣改不了。與其靠「我要更努力」，不如寫下「我會在[時間]，於[地點]做[事]」，並把新習慣接在既有習慣之後（習慣堆疊）。更根本的是設計環境，讓好習慣的提示成為空間裡最明顯的存在。', en: 'Change begins with awareness: a habit you can’t see, you can’t change. Rather than rely on “I’ll try harder,” write “I will [behavior] at [time] in [place],” and stack the new habit after an existing one. More fundamentally, design your environment so the cue for the good habit is the most obvious thing in the room.' },
    tags: [ { zh: '執行意圖', en: 'Implementation intentions' }, { zh: '覺察', en: 'Awareness' }, { zh: '提示', en: 'Cue' } ],
    related: ['habitloop', 'stacking', 'environment'] },
  { id: 'law2', name: { zh: '第二法則：讓習慣有吸引力', en: '2nd Law: Make It Attractive' }, family: 'laws', role: { zh: '重要概念', en: 'Key Concept' }, icon: '🧲', color: '#d98a6a',
    desc: { zh: '對應「渴求」。習慣越有吸引力，越容易做。工具有：誘惑綑綁（把想做的事綁在該做的事之後）、加入「該行為＝常態」的群體。戒除壞習慣則讓它缺乏吸引力——看清它真正的代價。', en: 'This law addresses the craving. The more attractive a habit, the more likely you’ll do it. The tools are temptation bundling (pair something you want with something you need) and joining a culture where the behavior is the norm. To break a bad habit, make it unattractive — see its true cost clearly.' },
    analysis: { zh: '大腦在「期待獎賞」時就釋放多巴胺，是渴求而非獎賞本身驅動行動。所以把必要的習慣和你真心期待的事配對（邊運動邊追劇），能借力使力。而我們會模仿親近的人、多數的人、有力的人——加入一個把好習慣視為理所當然的社群，堅持就順水推舟。', en: 'The brain releases dopamine in anticipation of a reward, so it is the craving, not the reward itself, that drives action. Pairing a necessary habit with something you genuinely look forward to (exercise while watching your show) borrows that pull. And we imitate the close, the many, and the powerful — join a group where the good habit is simply normal, and persistence flows downhill.' },
    tags: [ { zh: '誘惑綑綁', en: 'Temptation bundling' }, { zh: '群體文化', en: 'Culture' }, { zh: '渴求', en: 'Craving' } ],
    related: ['habitloop'] },
  { id: 'law3', name: { zh: '第三法則：讓行動輕而易舉', en: '3rd Law: Make It Easy' }, family: 'laws', role: { zh: '重要概念', en: 'Key Concept' }, icon: '🛝', color: '#6bbf9a',
    desc: { zh: '對應「反應」。人天生走阻力最小的路，所以要替好習慣減少摩擦、替壞習慣增加摩擦。工具有：兩分鐘法則、最小努力原則、承諾機制。習慣靠重複次數養成，不靠完美。', en: 'This law addresses the response. People take the path of least resistance, so reduce friction for good habits and add friction for bad ones. The tools are the Two-Minute Rule, the Law of Least Effort, and commitment devices. Habits form through repetition, not perfection.' },
    analysis: { zh: '重點是降低「開始」的門檻。把新習慣縮到兩分鐘就能完成的版本（讀一頁、穿上跑鞋），先讓自己「登場」，再慢慢擴大。設計環境讓正確的事最省力；用承諾機制（自動化、預先設定）替未來的自己鎖定好行為、擋掉壞選項。真正養成習慣的是重複的「次數」，不是單次的完美。', en: 'The point is to lower the barrier to starting. Scale a new habit down to a two-minute version (read one page, put on your running shoes), let yourself “show up” first, then expand. Design the environment so the right action takes the least effort; use commitment devices (automation, pre-commitment) to lock in good behavior and shut off bad options for your future self. What builds a habit is the number of repetitions, not the perfection of any one.' },
    tags: [ { zh: '兩分鐘法則', en: 'Two-Minute Rule' }, { zh: '摩擦', en: 'Friction' }, { zh: '重複', en: 'Repetition' } ],
    related: ['habitloop', 'twominute'] },
  { id: 'law4', name: { zh: '第四法則：讓獎賞令人滿足', en: '4th Law: Make It Satisfying' }, family: 'laws', role: { zh: '重要概念', en: 'Key Concept' }, icon: '✅', color: '#4f8fc9',
    desc: { zh: '對應「獎賞」。被立即滿足的行為會被重複；沒有回報的會被放棄。工具有：習慣追蹤（把進度視覺化）、絕不錯過兩次、問責夥伴。戒除壞習慣則讓它令人不滿足——加上立即的代價。', en: 'This law addresses the reward. Behavior that is immediately satisfying gets repeated; behavior that goes unrewarded gets abandoned. The tools are habit tracking (make progress visible), never miss twice, and an accountability partner. To break a bad habit, make it unsatisfying — attach an immediate cost.' },
    analysis: { zh: '麻煩在於好習慣的回報常是延遲的，壞習慣的回報卻是即時的。解法是替好習慣加一點「當下的滿足」：習慣追蹤（打勾、不斷鏈）本身就提供即時的成就感。鐵律「絕不錯過兩次」——錯過一次是意外，錯過兩次是新習慣的開始；一致性遠比完美重要。再加上問責夥伴，讓偷懶付出即時的社會代價。', en: 'The catch is that good habits usually pay off late while bad habits pay off now. The fix is to add a bit of immediate satisfaction to the good habit: habit tracking (a checkmark, an unbroken chain) delivers a sense of accomplishment on the spot. The rule “never miss twice” — missing once is an accident, missing twice is the start of a new habit; consistency matters far more than perfection. Add an accountability partner so that slacking carries an immediate social cost.' },
    tags: [ { zh: '習慣追蹤', en: 'Habit tracking' }, { zh: '絕不錯過兩次', en: 'Never miss twice' }, { zh: '即時獎賞', en: 'Immediate reward' } ],
    related: ['habitloop', 'goldilocks'] },
  { id: 'stacking', name: { zh: '習慣堆疊', en: 'Habit Stacking' }, family: 'tools', role: { zh: '實踐工具', en: 'Practical Tool' }, icon: '🧱', color: '#a9b4c0',
    desc: { zh: '把新習慣接在一個既有習慣之後：「做完 X 之後，我就做 Y」。用你已經穩固的舊習慣，當新習慣的提示。', en: 'Attach a new habit right after an existing one: “After I do X, I will do Y.” Use a habit you already do reliably as the cue for the new one.' },
    analysis: { zh: '新習慣最缺的就是一個穩定的提示，而你每天已經在做的事，正是現成、可靠的觸發點。把「刷完牙後，做兩下伏地挺身」「倒完咖啡後，寫下今天最重要的一件事」串起來，一條一條接下去，就能織出一整套自動運行的日常流程。', en: 'What a new habit most lacks is a reliable cue — and the things you already do every day are ready-made, dependable triggers. Chain them: “After I brush my teeth, I’ll do two push-ups,” “After I pour my coffee, I’ll write down the one most important thing for today.” Link them one by one and you weave a whole daily routine that runs on its own.' },
    tags: [ { zh: '既有習慣', en: 'Existing habit' }, { zh: '提示', en: 'Cue' }, { zh: '流程', en: 'Routine' } ],
    related: ['law1'] },
  { id: 'environment', name: { zh: '環境設計', en: 'Environment Design' }, family: 'tools', role: { zh: '實踐工具', en: 'Practical Tool' }, icon: '🏠', color: '#a9b4c0',
    desc: { zh: '環境常比意志力更能決定行為。把好習慣的提示放到最顯眼處、把壞習慣的提示藏起來；一個空間，盡量只給一種用途。', en: 'Environment often decides behavior more than willpower does. Put the cues for good habits in plain sight and hide the cues for bad ones; give each space, as far as possible, a single purpose.' },
    analysis: { zh: '你不是被動機驅動，而是被環境形塑。想多讀書，就把書放在沙發旁、手機留在另一個房間；想少吃零食，就別把零食擺在檯面上。「一個空間、一種用途」能減少習慣之間互相干擾——單一功能的環境，讓想要的行為變成當下最容易、最自然的選項。', en: 'You are shaped less by motivation than by environment. To read more, put the book by the couch and leave the phone in another room; to snack less, keep snacks off the counter. “One space, one use” reduces interference between habits — a single-purpose setting makes the desired behavior the easiest, most natural option in the moment.' },
    tags: [ { zh: '一空間一用途', en: 'One space, one use' }, { zh: '摩擦', en: 'Friction' }, { zh: '提示', en: 'Cue' } ],
    related: ['law1'] },
  { id: 'twominute', name: { zh: '兩分鐘法則', en: 'The Two-Minute Rule' }, family: 'tools', role: { zh: '實踐工具', en: 'Practical Tool' }, icon: '⏱️', color: '#a9b4c0',
    desc: { zh: '把任何新習慣，縮到兩分鐘之內就能完成的版本：「讀一頁」而非「讀一章」，「穿上跑鞋」而非「跑五公里」。先精通「開始」。', en: 'Scale any new habit down to a version you can finish in two minutes: “read one page,” not “read a chapter”; “put on your running shoes,” not “run five miles.” Master the art of showing up first.' },
    analysis: { zh: '習慣的難處往往不在「做完」，而在「開始」。把門檻降到不可能失敗的大小，讓自己每天都能輕鬆登場——一旦習慣扎根、身份確立，再慢慢加量。關鍵是先成為「每天都會出現的人」，表現可以之後再談。', en: 'The hard part of a habit is usually not finishing but starting. Lower the barrier to a size at which failure is impossible, so you can show up easily every day — once the habit takes root and the identity is set, scale up gradually. The key is to first become the person who shows up every day; performance can come later.' },
    tags: [ { zh: '登場', en: 'Show up' }, { zh: '最小版本', en: 'Smallest version' }, { zh: '不拖延', en: 'Beat procrastination' } ],
    related: ['law3'] },
  { id: 'goldilocks', name: { zh: '金髮女孩原則', en: 'The Goldilocks Rule' }, family: 'tools', role: { zh: '實踐工具', en: 'Practical Tool' }, icon: '🎯', color: '#a9b4c0',
    desc: { zh: '人在「剛好略高於當前能力」的難度下，最能維持動機與投入。太難令人挫折，太易令人無聊，甜蜜點在邊緣。', en: 'People stay most motivated and engaged at a difficulty just beyond their current ability. Too hard breeds frustration, too easy breeds boredom; the sweet spot is at the edge.' },
    analysis: { zh: '維持動機的祕訣，是把挑戰調到「踮腳搆得到」的高度，並隨能力提升不斷微調。但更難、也更關鍵的一課是：真正的專業，是在新鮮感退去、無聊來襲時仍能持續。愛上無聊、熬過高原期，正是頂尖與普通的分野。', en: 'The secret to staying motivated is to tune the challenge to a height you can just reach on tiptoe, adjusting it upward as your ability grows. But the harder and more crucial lesson is that true mastery is the ability to keep going once novelty fades and boredom sets in. Learning to love boredom, to outlast the plateau, is precisely what separates the great from the merely good.' },
    tags: [ { zh: '甜蜜點', en: 'Sweet spot' }, { zh: '愛上無聊', en: 'Love boredom' }, { zh: '持續動力', en: 'Staying motivated' } ],
    related: ['compounding', 'law4'] }
];

const TIMELINE_DATA = [
  { year: { zh: '起點', en: 'The Origin' }, event: { zh: '一場毀容般的棒球意外', en: 'A disfiguring baseball accident' }, novel: { zh: '克利爾高中時被球棒重擊臉部、傷勢嚴重，日後靠一連串微小而持續的習慣一步步復原、重返賽場——這成了全書的種子。', en: 'In high school, Clear was struck in the face by a bat and badly hurt; he rebuilt himself through a chain of tiny, consistent habits and returned to play — the seed of the whole book.' }, type: 'character' },
  { year: { zh: '基礎 ①', en: 'Fundamentals ①' }, event: { zh: '1% 法則：微小改變的複利', en: 'The 1% rule: the compounding of tiny changes' }, novel: { zh: '每天 1% 的進步，靠複利長成巨大差異；別看單日成敗，要看方向。系統，重於目標。', en: 'A 1% improvement a day compounds into a remarkable difference; watch the direction, not the daily score. Systems over goals.' }, type: 'novel' },
  { year: { zh: '基礎 ②', en: 'Fundamentals ②' }, event: { zh: '三層改變：結果 → 過程 → 身份', en: 'Three layers: outcomes → processes → identity' }, novel: { zh: '最持久的改變是身份的改變。每個行動，都是投給「你想成為的那種人」的一張選票。', en: 'The most lasting change is a change of identity. Every action is a vote for the type of person you wish to become.' }, type: 'novel' },
  { year: { zh: '基礎 ③', en: 'Fundamentals ③' }, event: { zh: '習慣迴路：提示 → 渴求 → 反應 → 獎賞', en: 'The habit loop: cue → craving → response → reward' }, novel: { zh: '所有習慣都跑同一個四步迴路；四大法則正是對應這四步來設計或破解習慣。', en: 'Every habit runs the same four-step loop; the Four Laws map onto these four steps to design or dismantle any habit.' }, type: 'novel' },
  { year: { zh: '第一法則', en: '1st Law' }, event: { zh: '讓提示顯而易見', en: 'Make It Obvious' }, novel: { zh: '覺察、執行意圖、習慣堆疊、環境設計——先讓好習慣的提示無所不在。', en: 'Awareness, implementation intentions, habit stacking, environment design — first make the cue for a good habit impossible to miss.' }, type: 'novel' },
  { year: { zh: '關鍵實證', en: 'Key Evidence' }, event: { zh: '執行意圖大幅提高執行率', en: 'Implementation intentions sharply raise follow-through' }, novel: { zh: '一項運動習慣的研究顯示：寫下明確的「時間＋地點」計畫，能把執行率從約三成拉高到九成上下。明確，勝過努力。', en: 'A study on exercise found that writing a specific “time + place” plan raised follow-through from around a third to roughly ninety percent. Specificity beats effort.' }, type: 'history' },
  { year: { zh: '第二法則', en: '2nd Law' }, event: { zh: '讓習慣有吸引力', en: 'Make It Attractive' }, novel: { zh: '誘惑綑綁、加入「該行為＝常態」的群體——渴求驅動行動，就替好習慣加上吸引力。', en: 'Temptation bundling and joining a culture where the behavior is normal — since craving drives action, make the good habit attractive.' }, type: 'novel' },
  { year: { zh: '第三法則', en: '3rd Law' }, event: { zh: '讓行動輕而易舉', en: 'Make It Easy' }, novel: { zh: '兩分鐘法則、最小努力原則、承諾機制——降低摩擦，讓好習慣成為當下最容易做的事。', en: 'The Two-Minute Rule, the Law of Least Effort, commitment devices — cut friction so the good habit is the easiest thing to do right now.' }, type: 'novel' },
  { year: { zh: '第四法則', en: '4th Law' }, event: { zh: '讓獎賞令人滿足', en: 'Make It Satisfying' }, novel: { zh: '習慣追蹤、絕不錯過兩次、問責夥伴——被立即滿足的行為才會被重複。', en: 'Habit tracking, never miss twice, an accountability partner — behavior that is immediately satisfying is what gets repeated.' }, type: 'novel' },
  { year: { zh: '進階戰術', en: 'Advanced Tactics' }, event: { zh: '天賦、金髮女孩原則、避免停滯', en: 'Talent, the Goldilocks Rule, avoiding stagnation' }, novel: { zh: '選對戰場讓努力有複利；把挑戰調到「踮腳搆得到」；再用反思與復盤，避免熟練變成停滯。', en: 'Choose the right field so effort compounds; tune the challenge to just beyond your reach; then use reflection and review so mastery doesn’t harden into stagnation.' }, type: 'novel' },
  { year: { zh: '2018', en: '2018' }, event: { zh: '《原子習慣》出版', en: 'Atomic Habits is published' }, novel: { zh: '克利爾把行為科學整理成人人可操作的四大法則，上市即成為全球現象級暢銷書——你正在讀的這本書。', en: 'Clear distills behavioral science into four actionable laws; the book becomes a global phenomenon on release — the very book you are reading.' }, type: 'history' }
];

const THEMES = [
  { id: 'systems', icon: '⚙️', title: { zh: '系統勝過目標', en: 'Systems over Goals' }, subtitle: { zh: '你會跌到系統的水準，而非升到目標的高度', en: 'You fall to your systems, not rise to your goals' }, color: '#4f8fc9',
    intro: { zh: '目標定義方向，但決定你走多遠的，是每天運轉的系統。', en: 'Goals set the direction, but what decides how far you go is the system that runs every day.' },
    body: { zh: '<p>人人都想要好結果，但盯著記分板不會讓你贏球——真正決定表現的是日復一日的訓練與流程。克利爾說：贏家與輸家往往有相同的目標，差別在系統。若你不斷達不到目標，問題多半不在你，而在你建立習慣的體系。</p><p>把注意力從「我想達成什麼」轉到「我每天在運轉什麼樣的流程」，成果會自己追上來。這也是為什麼本書幾乎不談「更想要」，而談「怎麼設計」。</p><div class="theme-quote">「你不會升到目標的高度，只會跌到系統的水準。」</div>', en: '<p>Everyone wants good results, but staring at the scoreboard won’t win the game — what decides performance is the daily training and process. Clear notes that winners and losers often share the same goals; the difference is the system. If you keep falling short, the problem is usually not you but the system you built for your habits.</p><p>Shift attention from “what I want to achieve” to “what process I run every day,” and results catch up on their own. This is why the book talks less about wanting more and more about designing better.</p><div class="theme-quote">“You do not rise to the level of your goals; you fall to the level of your systems.”</div>' },
    chapters: ['1', '3'] },
  { id: 'compound', icon: '📈', title: { zh: '微小改變的複利', en: 'The Compounding of 1%' }, subtitle: { zh: '別小看每天 1%，也別高估一次壯舉', en: 'Never underrate a daily 1%, nor overrate one grand act' }, color: '#6bbf9a',
    intro: { zh: '習慣是自我提升的複利；時間會放大每一個微小的選擇。', en: 'Habits are the compound interest of self-improvement; time magnifies every tiny choice.' },
    body: { zh: '<p>每天進步 1%，一年後約強大 37 倍；每天退步 1%，一年後幾近於零。改變之所以難以察覺，是因為早期的努力都存進了「還沒兌現」的帳戶——直到跨過臨界點（失望之谷）才突然顯現，像冰要到 0°C 才融化。</p><p>這給了我們兩個提醒：其一，別用單日成敗評價一個習慣，要看它把你推往哪個方向；其二，最需要耐心的，正是那段看似毫無回報的累積期。放棄，往往就發生在突破前的最後一哩。</p><div class="theme-quote">「習慣，是自我提升的複利。」</div>', en: '<p>Get 1% better each day and you end up roughly 37 times better in a year; 1% worse and you approach zero. Change is hard to notice because early effort is deposited into an account that hasn’t paid out yet — until you cross the threshold (the Valley of Disappointment) and it suddenly shows, like ice that only melts at 0°C.</p><p>Two reminders follow: first, judge a habit not by a single day but by the direction it points you; second, the stretch that most needs patience is precisely the one that looks unrewarded. Quitting tends to happen in the final mile before the breakthrough.</p><div class="theme-quote">“Habits are the compound interest of self-improvement.”</div>' },
    chapters: ['1', '11'] },
  { id: 'identity', icon: '🪞', title: { zh: '認同導向的改變', en: 'Identity-Based Change' }, subtitle: { zh: '重點不是達成目標，而是成為那樣的人', en: 'The goal is not the outcome, but becoming the person' }, color: '#d9b45a',
    intro: { zh: '最深、最持久的改變，發生在身份的層次。', en: 'The deepest and most lasting change happens at the level of identity.' },
    body: { zh: '<p>改變有三層：結果、過程、身份。多數人從結果切入（我想變瘦、我想戒菸），動力最淺、最容易放棄。克利爾主張反過來做：先決定「想成為什麼樣的人」，再用一次次小勝利，累積「我就是這種人」的證據。</p><p>與其說「我想跑步」，不如成為「我是會運動的人」；每一次出門跑步，都是投給那個身份的一張選票。習慣，就是你相信自己是誰的證據——養成習慣的過程，其實就是成為你自己的過程。</p><div class="theme-quote">「每個行動，都是投給你想成為的那種人的一張選票。」</div>', en: '<p>Change has three layers: outcomes, processes, identity. Most people start from outcomes (“I want to lose weight,” “I want to quit smoking”) — the shallowest, most quittable motivation. Clear argues for the reverse: first decide who you wish to become, then let small wins accumulate evidence that “this is who I am.”</p><p>Rather than “I want to run,” become “I’m someone who exercises”; every run is a vote for that identity. Your habits are the evidence of who you believe you are — building habits is, in fact, the process of becoming yourself.</p><div class="theme-quote">“Every action is a vote for the type of person you wish to become.”</div>' },
    chapters: ['2'] },
  { id: 'fourlaws', icon: '🧩', title: { zh: '行為改變四法則', en: 'The Four Laws of Behavior Change' }, subtitle: { zh: '把任何習慣拆進四格來設計或破解', en: 'Take any habit apart into four boxes' }, color: '#d98a6a',
    intro: { zh: '一套對應習慣迴路的操作系統：顯而易見、有吸引力、輕而易舉、令人滿足。', en: 'An operating system mapped to the habit loop: obvious, attractive, easy, satisfying.' },
    body: { zh: '<p>習慣迴路有四步：提示、渴求、反應、獎賞。四大法則正是逐一對應：①讓提示顯而易見（覺察、執行意圖、環境）②讓習慣有吸引力（誘惑綑綁、群體）③讓行動輕而易舉（兩分鐘法則、減摩擦）④讓獎賞令人滿足（習慣追蹤、絕不錯過兩次）。</p><p>要戒除壞習慣，就把這四條全部反過來：讓提示隱而不見、缺乏吸引力、困難、令人不滿足。這套框架的美，在於它把「我做不到」變成一個可診斷、可調整的工程問題。</p><div class="theme-quote">「讓好習慣顯而易見、有吸引力、輕而易舉、令人滿足。」</div>', en: '<p>The habit loop has four steps: cue, craving, response, reward. The Four Laws map onto each: (1) make it obvious (awareness, implementation intentions, environment), (2) make it attractive (temptation bundling, culture), (3) make it easy (the Two-Minute Rule, less friction), (4) make it satisfying (habit tracking, never miss twice).</p><p>To break a bad habit, invert all four: make it invisible, unattractive, difficult, and unsatisfying. The beauty of the framework is that it turns “I can’t” into a diagnosable, adjustable engineering problem.</p><div class="theme-quote">“Make it obvious, make it attractive, make it easy, make it satisfying.”</div>' },
    chapters: ['3', '5', '8', '13', '15'] },
  { id: 'environment', icon: '🏠', title: { zh: '環境勝過意志力', en: 'Environment over Willpower' }, subtitle: { zh: '有自制力的人，只是很少身處誘惑之中', en: 'Disciplined people rarely put themselves near temptation' }, color: '#6bbf9a',
    intro: { zh: '與其硬扛意志力，不如設計讓你不必動用意志力的環境。', en: 'Rather than muscle through with willpower, design a setting where you don’t need it.' },
    body: { zh: '<p>意志力難以持續，成功案例鳳毛麟角——這正說明「靠意志力」對多數人並不管用。克利爾把焦點轉向環境：把好習慣的提示放到最顯眼處、把壞習慣的誘因藏起來或移走，行為就會順勢改變。</p><p>所謂「自律的人」，多半不是抵抗力量特別強，而是很少把自己放進需要抵抗的場合。用 Kindle 取代會跳出臉書的手機、把零食移出視線——設計空間，讓正確的事變成當下最容易、最自然的選項。</p><div class="theme-quote">「你不需要更多動機，你需要更好的環境。」</div>', en: '<p>Willpower is hard to sustain and its success stories are rare — which is exactly why relying on it fails most people. Clear shifts the focus to environment: put the cues for good habits in plain sight and hide or remove the cues for bad ones, and behavior shifts with the current.</p><p>The so-called disciplined person is usually not one with unusual resistance, but one who rarely enters situations that require resistance. Swap the phone that pops up Facebook for a Kindle; move snacks out of sight — design your space so the right thing is the easiest, most natural option in the moment.</p><div class="theme-quote">“You don’t need more motivation; you need a better environment.”</div>' },
    chapters: ['6', '7', '12'] },
  { id: 'consistency', icon: '🔗', title: { zh: '一致性勝過完美', en: 'Consistency over Perfection' }, subtitle: { zh: '錯過一次是意外，錯過兩次是新習慣的開始', en: 'Miss once, an accident; miss twice, a new habit' }, color: '#4f8fc9',
    intro: { zh: '養成習慣的，不是任何一次的完美，而是持續不斷的重複。', en: 'What builds a habit is not any single perfect day, but relentless repetition.' },
    body: { zh: '<p>習慣靠重複的「次數」養成，不靠時間長短，更不靠一次做到完美。真正決定成敗的，是你能不能在不順的日子仍然回到軌道。克利爾的鐵律很簡單：絕不錯過兩次——錯過一次是意外，錯過兩次就是新習慣（壞的那種）的開始。</p><p>所以斷鏈不可怕，可怕的是斷了就放棄。用習慣追蹤讓「沒有中斷的鏈條」變成即時的獎賞；真的中斷了，就用最小的動作立刻回到正軌。長期的一致，遠比偶爾的爆發更有力量。</p><div class="theme-quote">「錯過一次是意外，錯過兩次是新習慣的開始。」</div>', en: '<p>A habit is built by the number of repetitions, not the length of time, and certainly not by one perfect performance. What really decides success is whether you can return to the track on the bad days. Clear’s rule is simple: never miss twice — missing once is an accident, missing twice is the start of a new (bad) habit.</p><p>So breaking the chain isn’t the danger; quitting once it breaks is. Use habit tracking to turn an unbroken chain into an immediate reward; if you do break it, use the smallest action to get back on track at once. Long-run consistency is far more powerful than occasional bursts.</p><div class="theme-quote">“Missing once is an accident; missing twice is the start of a new habit.”</div>' },
    chapters: ['11', '16'] }
];

const QUOTES = [
  { text: { zh: '你不會升到目標的高度，只會跌到系統的水準。', en: 'You do not rise to the level of your goals; you fall to the level of your systems.' }, source: { zh: '第一章 · 原子習慣的力量', en: 'Chapter 1 · The Power of Atomic Habits' },
    analysis: { zh: '全書最核心的一句。目標人人會定，真正決定結果的是你每天運轉的系統。與其追求更高的目標，不如打造更好的流程。', en: 'The book’s central line. Anyone can set goals; what decides results is the system you run every day. Rather than chase higher goals, build a better process.' } },
  { text: { zh: '習慣，是自我提升的複利。', en: 'Habits are the compound interest of self-improvement.' }, source: { zh: '第一章 · 微小改變的力量', en: 'Chapter 1 · The Power of Tiny Changes' },
    analysis: { zh: '一句話點出全書引擎：每天 1% 的改變本身微不足道，但經過時間的複利，會累積成天差地別的結果。', en: 'One line names the book’s engine: a daily 1% change is trivial in itself, but compounded over time it grows into a night-and-day difference.' } },
  { text: { zh: '每個行動，都是投給「你想成為的那種人」的一張選票。', en: 'Every action is a vote for the type of person you wish to become.' }, source: { zh: '第二章 · 習慣與身份', en: 'Chapter 2 · Habits and Identity' },
    analysis: { zh: '把改變從「結果」拉到「身份」。你不需要一次投對所有票，只需要讓多數選票，投向你想成為的那個人。', en: 'It lifts change from outcome to identity. You don’t need every vote to be right — only for the majority to go to the person you wish to become.' } },
  { text: { zh: '你不需要更多動機，你需要更好的環境。', en: 'You don’t need more motivation; you need a better environment.' }, source: { zh: '第六章 · 環境重於動機（提煉）', en: 'Chapter 6 · Environment over Motivation (a distillation)' },
    analysis: { zh: '意志力難以持久，環境卻能日日運作。與其責備自己不夠自律，不如重新設計空間，讓好行為變成最省力的選項。', en: 'Willpower is hard to sustain, but environment works every day. Instead of blaming yourself for a lack of discipline, redesign your space so the good behavior is the least-effort option.' } },
  { text: { zh: '錯過一次是意外，錯過兩次是新習慣的開始。', en: 'Missing once is an accident; missing twice is the start of a new habit.' }, source: { zh: '第十六章 · 絕不錯過兩次', en: 'Chapter 16 · Never Miss Twice' },
    analysis: { zh: '一致性勝過完美的最實用心法。允許自己偶爾失手，但絕不讓失手連續發生——復原的速度，比從不跌倒更重要。', en: 'The most practical rule for consistency over perfection. Allow yourself the occasional miss, but never let misses run consecutive — how fast you recover matters more than never falling.' } },
  { text: { zh: '先精通「登場」，表現可以之後再談。', en: 'Master the art of showing up first; performance can come later.' }, source: { zh: '第十三章 · 兩分鐘法則（提煉）', en: 'Chapter 13 · The Two-Minute Rule (a distillation)' },
    analysis: { zh: '把習慣縮到兩分鐘的精神：習慣的難處在「開始」而非「做完」。先成為每天都會出現的人，量與質都能慢慢長出來。', en: 'The spirit of scaling a habit to two minutes: the hard part is starting, not finishing. First become the person who shows up every day; both quantity and quality can grow from there.' } }
];

const REFLECTION_QUESTIONS = [
  { zh: '你現在最想養成的一個習慣是什麼？如果用「我是___的人」來描述那個身份，你會怎麼寫？', en: 'What one habit do you most want to build right now? If you described that identity as “I am someone who ___,” how would you fill it in?' },
  { zh: '挑一個你想戒的壞習慣，用「提示→渴求→反應→獎賞」拆解它。你打算先破壞哪一格？', en: 'Take a bad habit you want to break and dissect it as cue → craving → response → reward. Which step will you disrupt first?' },
  { zh: '你的環境正在幫你，還是扯你後腿？有哪一個提示可以移到更顯眼／更隱蔽的地方？', en: 'Is your environment helping you or working against you? Which one cue could you move somewhere more visible — or more hidden?' },
  { zh: '為你想養成的習慣，寫一句具體的執行意圖：「我會在[時間]，於[地點]做[事]。」', en: 'Write a concrete implementation intention for a habit you want: “I will [behavior] at [time] in [place].”' },
  { zh: '若把某個習慣縮到「兩分鐘就能完成」，那個最小的登場動作會是什麼？', en: 'If you scaled a habit down to a two-minute version, what would the smallest act of showing up be?' },
  { zh: '你有沒有在某個「失望之谷」裡放棄過？回頭看，如果再多撐一陣子會怎樣？', en: 'Have you ever quit inside a “Valley of Disappointment”? Looking back, what might have happened if you’d held on a little longer?' },
  { zh: '哪一個社群或關係，會讓你想養成的習慣變成「理所當然」？你能怎麼靠近它？', en: 'Which community or relationship would make your desired habit feel simply normal? How could you get closer to it?' },
  { zh: '你能為某個回報延遲的好習慣，加上什麼「當下就有」的小獎賞？', en: 'What small, immediate reward could you attach to a good habit whose real payoff is delayed?' },
  { zh: '「絕不錯過兩次」——下次你斷了鏈，打算用什麼最小動作立刻回到正軌？', en: '“Never miss twice” — the next time you break the chain, what smallest action will get you back on track at once?' },
  { zh: '讀完這本書，你打算先做哪一個「兩分鐘實驗」？打算追蹤幾天？', en: 'Having read this book, which single “two-minute experiment” will you start first — and for how many days will you track it?' }
];


// ==== CHAPTER_CONTENT（論點重述，中英雙語，子代理擴寫）====
const CHAPTER_CONTENT = {};

Object.assign(CHAPTER_CONTENT, {
  1: {
    num: { zh: `第一章`, en: `Chapter One` },
    title: { zh: `原子習慣的驚人力量`, en: `The Surprising Power of Atomic Habits` },
    epigraph: {
      zh: `你今天做的每一件小事，都在悄悄替未來的你投票。`,
      en: `Every small thing you do today is quietly casting a vote for who you'll become.`
    },
    body: {
      zh: `<p><strong>核心觀念</strong>　我們天生渴望大動作：戲劇性的轉變、一夜的翻身、看得見的突破。但真正改變人生的，往往是小到讓人忽視的行為。所謂「原子習慣」（atomic habits），就是這些微不足道、卻能不斷疊加的日常慣例——它們像原子一樣渺小，卻是構成整個系統的基本單位。改變不必轟轟烈烈，只需要每天好上那麼一點點。</p>

<p><strong>原理</strong>　關鍵字是複利（compounding）。假設你每天進步 1%，一年之後，你大約會變成原來的 37 倍；反過來，若每天退步 1%，一年之後幾乎歸零。差別看似只有毫釐，時間卻會把它放大成天壤之別。習慣之於自我成長，就像利息之於本金——單看一天毫無感覺，累積起來卻改寫結局。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>原理</strong>　複利有個殘忍的特性：回報總是遲到。前期你努力、卻看不到成果，彷彿一切都白費，這段時期可以稱作「失望之谷」——潛能正在地底默默蓄積，表面卻風平浪靜。就像一塊冰，從攝氏零下一度慢慢升溫，到零下一度、零度，看起來毫無變化，直到跨過那關鍵一度，才突然融化。許多人正是在爆發的前一刻放棄，因為他們誤以為停滯就是失敗。</p>

<p><strong>實例</strong>　作者克利爾自己的故事很能說明這一點。高中時，他的臉被一支飛出的球棒重重擊中，傷勢嚴重。復原之路漫長而看不見盡頭，他靠的不是某個奇蹟時刻，而是日復一日微小而持續的習慣：規律作息、逐步訓練、一點一滴把自己重建起來。多年後，這些看不起眼的累積，把他一路送進大學球隊。他不是靠一次爆發翻身，而是靠軌跡的方向。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>怎麼做</strong>　這裡有個常被誤解的真相：你不會升到目標的高度，你只會跌到系統的水準。目標（goals）是你想抵達的結果，系統（systems）則是你每天實際在跑的流程。兩個人可以有一模一樣的目標，最後結局卻天差地遠——差別不在他們想要什麼，而在他們每天做什麼。與其緊盯終點線，不如把心思放在打造一套會自動帶你前進的系統。</p>

<p><strong>反思</strong>　所以，別再用單日的成敗評判自己。今天的一次偷懶不會毀掉你，今天的一次自律也不會拯救你——重點永遠是方向，而不是某一天的落點。把眼光從「我今天達標了嗎」移開，改問「我正朝著哪個方向漂移」。當你相信微小改變的複利，耐心就不再是勉強，而是一種信心。</p>

<p class="thought-question">🤔 思考：如果把你此刻的日常習慣延伸整整十年，它們會把你帶到哪裡？那是你想去的地方嗎？</p>`,
      en: `<p><strong>Core idea</strong>　We're wired to crave big moves: dramatic transformations, overnight turnarounds, visible breakthroughs. Yet what actually reshapes a life is usually so small we overlook it. "Atomic habits" are exactly these tiny, easily dismissed routines that keep stacking on top of one another—as small as atoms, yet the basic building blocks of an entire system. Change doesn't have to be spectacular. It only has to be a little better, today.</p>

<p><strong>The principle</strong>　The keyword is compounding. Suppose you get just 1% better every day; after a year you end up roughly 37 times better than where you started. Reverse it—decline 1% a day—and after a year you're down to almost nothing. The daily difference looks trivial, but time magnifies it into a gulf. Habits are to self-improvement what interest is to capital: invisible on any single day, decisive over the long run.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>The principle</strong>　Compounding has a cruel feature: the payoff always arrives late. Early on you put in the work and see nothing, as if it were all wasted. Call this stretch the "valley of disappointment"—your potential is quietly accumulating underground while the surface stays calm. Picture an ice cube warming from minus one degree, to zero, with no visible change—until it crosses that final degree and suddenly melts. Many people quit in the moment just before the breakthrough, mistaking a plateau for failure.</p>

<p><strong>In practice</strong>　Clear's own story captures this. In high school, a bat flew loose and struck him hard in the face, leaving him seriously injured. His recovery was long and open-ended, and it hinged not on some miracle moment but on small, consistent habits repeated day after day: steady routines, gradual training, rebuilding himself piece by piece. Years later, that unglamorous accumulation carried him onto a college baseball team. He didn't get there through one dramatic surge, but through the direction of his trajectory.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>How to do it</strong>　Here's a truth people often miss: you don't rise to the level of your goals, you fall to the level of your systems. Goals are the results you want to reach; systems are the processes you actually run every day. Two people can share the exact same goal and still end up worlds apart—the difference isn't what they want, it's what they do daily. Rather than fixating on the finish line, invest in building a system that carries you forward almost automatically.</p>

<p><strong>Reflection</strong>　So stop judging yourself by a single day's win or loss. One slip today won't ruin you, and one burst of discipline today won't save you—what matters is the direction, not where you happen to land on any given day. Shift your attention from "did I hit the target today?" to "which way am I drifting?" Once you trust the compounding of small changes, patience stops feeling like a chore and becomes a kind of confidence.</p>

<p class="thought-question">🤔 Reflect: If you extended your current daily habits out a full ten years, where would they take you? Is that where you want to go?</p>`
    }
  },

  2: {
    num: { zh: `第二章`, en: `Chapter Two` },
    title: { zh: `習慣如何形塑你的身份`, en: `How Your Habits Shape Your Identity` },
    epigraph: {
      zh: `你不是為了達成目標而改變，你是為了成為某種人而改變。`,
      en: `You don't change to hit a goal; you change to become a certain kind of person.`
    },
    body: {
      zh: `<p><strong>核心觀念</strong>　多數人想改變時，第一個念頭是改變「結果」：想瘦十公斤、想戒菸、想存到一筆錢。但這類改變往往撐不久。原因在於，最深、最持久的改變不是結果的改變，而是身份（identity）的改變。當你改的是「你相信自己是誰」，行為才會從裡到外自然跟上。</p>

<p><strong>原理</strong>　改變可以分成三層，像同心圓一樣。最外層是結果——你想得到什麼；中間是過程——你做些什麼；最核心的是身份——你相信自己是什麼樣的人。大多數人從最外層開始，由結果往內推；但真正有效的方向，是從最裡層的身份開始，由內往外長。前者是「我想要這個結果，所以逼自己做」，後者是「我是這種人，所以自然而然這麼做」。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>實例</strong>　想像兩個人被遞上一根菸。第一個說：「不用了，謝謝，我正在戒菸。」第二個說：「不用了，謝謝，我不抽菸。」表面上都是拒絕，底層卻完全不同。第一個人仍把自己當成一個「正在對抗菸癮的抽菸者」，戒菸是一場永無止境的意志力拔河；第二個人已經把「不抽菸」寫進了自我認同，拒絕對他來說毫不費力，因為那本來就不是他這種人會做的事。</p>

<p><strong>原理</strong>　為什麼身份這麼有力？因為你的每一個行動，都是投給「你想成為的那種人」的一張選票。做一次運動，不會馬上讓你變健康，但它投了一票給「我是個會運動的人」。寫一頁字，不會讓你立刻成為作家，但它投了一票給「我是個會寫作的人」。習慣，就是你相信自己是誰的證據——你累積越多這樣的小勝利，這個身份就越真實、越牢固。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>怎麼做</strong>　所以，改變的順序要倒過來。別先問「我想達成什麼」，先問「我想成為什麼樣的人」。決定了那個身份，再反過來想：這種人平常會做哪些小事？然後從最小的行動開始，讓每一次執行都成為一張選票，一點一滴替新身份累積證據。你不需要一次投出壓倒性的多數，你只需要贏得多數。連身份帶不動的目標，終究會鬆手。</p>

<p><strong>反思</strong>　這也解釋了為什麼光靠意志力硬撐的改變總是脆弱：當你心裡還不認為「那就是我」，每一次行動都在跟自己的自我認同拔河，遲早會累。反過來，一旦行為和身份同一陣線，習慣就不再是強迫，而是自我表達。你不是在勉強做一件事，你只是在做「像你的事」。</p>

<p class="thought-question">🤔 思考：你想成為什麼樣的人？今天有哪一個小小的行動，能替那個身份投下一票？</p>`,
      en: `<p><strong>Core idea</strong>　When most people want to change, their first instinct is to change an outcome: lose ten kilos, quit smoking, save up a certain sum. But changes like these rarely last. The reason is that the deepest, most durable change isn't a change in results—it's a change in identity. When you shift what you believe about who you are, behavior follows from the inside out.</p>

<p><strong>The principle</strong>　Change happens on three layers, like concentric circles. The outermost is outcomes—what you get. The middle is process—what you do. The innermost is identity—who you believe you are. Most people start from the outside and push inward from results; but the direction that actually works starts at the core, at identity, and grows outward. The first is "I want this result, so I force myself to act." The second is "I'm this kind of person, so of course I do this."</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>In practice</strong>　Picture two people offered a cigarette. The first says, "No thanks, I'm trying to quit." The second says, "No thanks, I'm not a smoker." Both refuse, but the foundations differ completely. The first still sees himself as a smoker wrestling with the habit—quitting is an endless tug-of-war of willpower. The second has written "non-smoker" into his very identity, so refusing costs him nothing; it simply isn't something a person like him would do.</p>

<p><strong>The principle</strong>　Why is identity so powerful? Because every action you take is a vote for the type of person you wish to become. One workout won't make you fit overnight, but it casts a vote for "I'm someone who exercises." Writing one page won't make you an author, but it votes for "I'm someone who writes." Habits are the evidence of who you believe you are—and the more of these small wins you stack up, the more real and solid that identity becomes.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>How to do it</strong>　So reverse the order. Don't start by asking "what do I want to achieve?" Start by asking "who do I want to become?" Once you've settled on that identity, work backward: what small things does this kind of person do? Then begin with the smallest possible action, letting each repetition serve as a vote that gathers evidence for the new self. You don't need an overwhelming majority all at once—you just need to win the majority over time. A goal your identity won't support will eventually slip from your grip.</p>

<p><strong>Reflection</strong>　This is also why willpower-only change stays fragile: while you still don't believe "that's just me," every action pulls against your self-image, and sooner or later you tire. Flip it, and once behavior and identity are on the same side, the habit stops being coercion and becomes self-expression. You're not forcing yourself to do something—you're simply doing what's "like you."</p>

<p class="thought-question">🤔 Reflect: Who do you want to become? What one small action today could cast a vote for that identity?</p>`
    }
  },

  3: {
    num: { zh: `第三章`, en: `Chapter Three` },
    title: { zh: `建立更好習慣的四個步驟`, en: `How to Build Better Habits in Four Simple Steps` },
    epigraph: {
      zh: `每一個習慣，都能被拆解、也能被重新組裝。`,
      en: `Every habit can be taken apart—and put back together on purpose.`
    },
    body: {
      zh: `<p><strong>核心觀念</strong>　習慣看似神秘，其實有一套可拆解的結構。任何習慣，無論好壞，都遵循同一條「習慣迴路」（habit loop），由四個階段串成：提示（cue）→ 渴求（craving）→ 反應（response）→ 獎賞（reward）。理解這四步，你就握有了設計新習慣、拆解舊習慣的通用藍圖。</p>

<p><strong>原理</strong>　先看這四步各自的角色。<strong>提示</strong>是觸發大腦的訊號，告訴你獎賞就在附近——它啟動整個迴路。<strong>渴求</strong>是背後的驅動力，你渴望的其實不是行為本身，而是它帶來的那個狀態的改變。<strong>反應</strong>是你實際做出的行為或想法，也就是習慣本身。<strong>獎賞</strong>是這個行為帶來的滿足，它一方面讓你當下爽快，一方面教會大腦「這值得記住、下次再來」。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>實例</strong>　舉個日常的例子。手機在桌上亮了一下（提示），你心裡浮起「不知道誰傳了什麼」的搔癢感（渴求），於是你拿起手機滑開（反應），看到訊息、得到一點新鮮刺激（獎賞）。這個迴路一旦跑順了，就會自動化——下次手機一亮，你的手幾乎不經思考就伸過去了。好習慣壞習慣，走的都是同一條路。</p>

<p><strong>原理</strong>　從這四階段，克利爾導出了「行為改變四法則」（the Four Laws）。想<strong>建立</strong>一個好習慣，就順著迴路各下一手：第一，讓提示<strong>顯而易見</strong>；第二，讓習慣<strong>有吸引力</strong>；第三，讓行動<strong>輕而易舉</strong>；第四，讓獎賞<strong>令人滿足</strong>。這四條分別對應提示、渴求、反應、獎賞，把每一階段都調到有利於好習慣的方向。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>怎麼做</strong>　想<strong>戒除</strong>一個壞習慣呢？把四法則整組反過來就行：讓提示<strong>隱而不見</strong>、讓習慣<strong>缺乏吸引力</strong>、讓行動<strong>困難重重</strong>、讓獎賞<strong>令人不滿</strong>。要留住的習慣，就把四個環節都變順、變甜；要甩掉的習慣，就把四個環節都變卡、變苦。當你卡在某個習慣改不動時，可以逐一檢查：是哪一格出了問題？</p>

<p><strong>反思</strong>　這套框架最實用的地方，在於它把「我為什麼老是做不到／老是戒不掉」從一團模糊的意志力問題，變成一張可以逐格檢查的清單。習慣不是靠更用力，而是靠設計。與其責怪自己不夠自律，不如問：這個迴路的哪一環，正在把我推向錯的方向？</p>

<p class="thought-question">🤔 思考：挑一個你想改掉的壞習慣，試著找出它的提示、渴求、反應、獎賞——第一個能動手的是哪一格？</p>`,
      en: `<p><strong>Core idea</strong>　Habits seem mysterious, but they have a structure you can take apart. Every habit, good or bad, runs through the same "habit loop," a chain of four stages: cue → craving → response → reward. Understand these four steps and you hold a universal blueprint for designing new habits and dismantling old ones.</p>

<p><strong>The principle</strong>　Look at what each step does. The <strong>cue</strong> is the signal that tells your brain a reward is near—it kicks off the whole loop. The <strong>craving</strong> is the driving force behind it; what you actually want isn't the behavior itself but the change in state it delivers. The <strong>response</strong> is the actual action or thought you perform—the habit itself. The <strong>reward</strong> is the satisfaction the behavior brings, which both feels good in the moment and teaches your brain, "this is worth remembering—do it again."</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>In practice</strong>　Take an everyday example. Your phone lights up on the desk (cue); an itch of "I wonder who sent something" rises in your mind (craving); so you pick it up and swipe (response); you see the message and get a small hit of novelty (reward). Once this loop runs smoothly it becomes automatic—next time the screen glows, your hand reaches over almost without thought. Good habits and bad habits travel the very same path.</p>

<p><strong>The principle</strong>　From these four stages, Clear derives the Four Laws of behavior change. To <strong>build</strong> a good habit, work with each part of the loop: first, make the cue <strong>obvious</strong>; second, make the habit <strong>attractive</strong>; third, make the action <strong>easy</strong>; fourth, make the reward <strong>satisfying</strong>. These four map onto cue, craving, response, and reward—tuning every stage in favor of the good habit.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>How to do it</strong>　And to <strong>break</strong> a bad habit? Simply invert the whole set: make the cue <strong>invisible</strong>, the habit <strong>unattractive</strong>, the action <strong>difficult</strong>, and the reward <strong>unsatisfying</strong>. For a habit you want to keep, smooth and sweeten all four links; for one you want to shed, jam and sour all four. When you're stuck on a habit that won't budge, run through them one by one: which stage is the problem?</p>

<p><strong>Reflection</strong>　The most useful thing about this framework is that it turns "why do I keep failing / keep relapsing?" from a vague willpower problem into a checklist you can inspect stage by stage. Habits aren't built by trying harder—they're built by design. Instead of blaming yourself for lacking discipline, ask: which link in this loop is pushing me the wrong way?</p>

<p class="thought-question">🤔 Reflect: Pick a bad habit you want to change and try to name its cue, craving, response, and reward—which stage could you act on first?</p>`
    }
  },

  4: {
    num: { zh: `第四章`, en: `Chapter Four` },
    title: { zh: `看起來不對勁的男人`, en: `The Man Who Didn't Look Right` },
    epigraph: {
      zh: `看不見的習慣，永遠改不了。`,
      en: `A habit you can't see is a habit you can't change.`
    },
    body: {
      zh: `<p><strong>核心觀念</strong>　建立更好習慣的第一法則，是讓提示顯而易見；但在此之前，還有一個更根本的前提——覺察。你不可能改變一個你根本沒注意到的行為。許多習慣之所以難改，不是因為你意志薄弱，而是因為它們早已沉入自動駕駛，你甚至沒發現自己正在做。</p>

<p><strong>原理</strong>　習慣的可怕之處，正在於它的高效與隱形。一件事重複久了，大腦就會把它交給潛意識處理，好把有限的注意力省下來。這讓生活變得省力，卻也讓許多行為變成不假思索的反射：一坐下就開電視、一焦慮就滑手機、一無聊就吃零食。它們流暢到你察覺不到，也正因為察覺不到，你連想改都無從下手。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>實例</strong>　書名的靈感來自一個關於「敏銳覺察」的概念：有些訓練有素的人，能在旁人毫無所覺時，憑一種說不上來的直覺，感到「這個人看起來不太對勁」。多年的經驗，讓他們把大量細節內化成一種近乎自動的判斷。這說明覺察是可以被鍛鍊的——但反過來，若我們對自己的行為毫無覺察，同一套自動化就會在暗處運作，把我們拖著走而不自知。</p>

<p><strong>怎麼做</strong>　要打破這種盲目，第一步是把無意識的行為攤到意識層面。一個簡單好用的工具是「習慣計分卡」：花一段時間，誠實列出你一天當中大大小小、反覆出現的行為——從起床、通勤、用餐到睡前，全部寫下來。清單本身不評價，只是讓你先看見。看見，就是改變的起點。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>怎麼做</strong>　列完之後，替每個習慣標上一個記號：對你長遠有益的標「好」，有害的標「壞」，不好不壞的標「中性」。判斷的標準不是道德，而是方向——這個行為，正把我推向我想成為的那種人，還是推離？光是這個貼標籤的動作，就會逼你把平時滑過去的行為重新放到聚光燈下端詳一遍。</p>

<p><strong>反思</strong>　覺察不會自動帶來改變，但沒有覺察，改變根本無從發生。很多人急著找方法、找技巧，卻跳過了最前面這一步：先誠實地看清自己現在到底在做什麼。當你能把一個自動化的行為說出口、指認它、命名它，它就不再全然掌控你——你重新拿回了選擇的餘地。</p>

<p class="thought-question">🤔 思考：今天有哪一個你「根本沒意識到自己在做」的習慣？如果替它貼標籤，它是好、是壞，還是中性？</p>`,
      en: `<p><strong>Core idea</strong>　The first of the Four Laws for building better habits is to make the cue obvious—but before that comes an even more basic prerequisite: awareness. You can't change a behavior you never noticed. Many habits are hard to change not because you're weak-willed, but because they've long since slipped into autopilot, and you don't even realize you're doing them.</p>

<p><strong>The principle</strong>　The unsettling thing about habits is precisely their efficiency and invisibility. Repeat something long enough and the brain hands it off to the subconscious, sparing your limited attention. This makes life easier, but it also turns many behaviors into unthinking reflexes: sit down and switch on the TV, feel anxious and reach for the phone, get bored and grab a snack. They're so smooth you don't notice them—and because you don't notice, you have nowhere to even begin changing them.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>In practice</strong>　The title takes its cue from the idea of finely tuned awareness: some highly trained people can sense, on an intuition they can't quite articulate, that "this person doesn't look right" while everyone around them notices nothing. Years of experience let them internalize countless small details into a near-automatic judgment. This shows awareness can be trained—but the reverse is also true: if we have no awareness of our own behavior, that same automation runs in the shadows, dragging us along without our knowing.</p>

<p><strong>How to do it</strong>　To break this blindness, the first step is to bring unconscious behavior up into conscious view. A simple, effective tool is the "Habits Scorecard": take some time and honestly list the behaviors, large and small, that recur through your day—from waking, commuting, and eating to winding down at night, write them all out. The list doesn't judge; it just lets you see. Seeing is where change begins.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>How to do it</strong>　Once the list is done, mark each habit: label the ones good for you in the long run "good," the harmful ones "bad," and the rest "neutral." The test isn't morality but direction—is this behavior pushing me toward the person I want to become, or away from it? The simple act of labeling forces you to pull behaviors you normally glide past back under the spotlight for a proper look.</p>

<p><strong>Reflection</strong>　Awareness doesn't automatically bring change, but without awareness change can't happen at all. Many people rush to find methods and techniques while skipping this very first step: honestly seeing what they're actually doing right now. Once you can voice an automatic behavior, point to it, and name it, it no longer fully controls you—you've reclaimed a margin of choice.</p>

<p class="thought-question">🤔 Reflect: What's one habit today that you "don't even realize you're doing"? If you labeled it, would it be good, bad, or neutral?</p>`
    }
  }
});


Object.assign(CHAPTER_CONTENT, {
  5:{
    num:{zh:`第五章`,en:`Chapter Five`},
    title:{zh:`開始新習慣的最好方法`,en:`The Best Way to Start a New Habit`},
    epigraph:{
      zh:`與其對自己喊「我要更努力」，不如先寫下：什麼時候、在哪裡、做什麼。`,
      en:`Instead of shouting "try harder" at yourself, first write down when, where, and what.`
    },
    body:{
      zh:`<p><strong>核心觀念</strong>克利爾提醒我們，大多數人以為改變的關鍵是動機或決心，但真正拉開差距的，往往是一個被明確定義的計畫。含糊的「我要多運動」「我要多讀書」之所以失敗，不是因為你不夠想，而是因為你從未告訴自己這件事要在何時何地發生。當一個意圖沒有落點，它就永遠停留在「總有一天」。</p>

<p><strong>原理：執行意圖</strong>這裡的關鍵工具叫「執行意圖」（implementation intention）。它的句型很簡單：「我會在【某個時間】，於【某個地點】，做【某個行為】。」把時間與地點寫死，等於為未來的自己預先埋好一個觸發點。到了那個時刻、那個場景，行動的提示就會自動浮現，你不必臨場再和自己討價還價。研究顯示，光是要人事先把明確計畫寫下來，執行率就會大幅提高——這不是靠更多意志力，而是靠更少的模糊。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>原理：習慣堆疊</strong>另一個更省力的做法是「習慣堆疊」（habit stacking）：把想建立的新習慣，接在一個你每天必然會做的舊習慣之後。句型是「做完 X 之後，我就做 Y」。既有的習慣本身就是一個穩固的提示，你不需要憑空製造一個新的觸發點，而是搭上一班已經在跑的列車。刷完牙之後做一下伸展、倒完咖啡之後寫下今天的三件事——舊習慣的結束，成了新習慣的起點。</p>

<p><strong>實例</strong>克利爾用「狄德羅效應」帶出這種連鎖的力量：一個新東西會牽動下一個，行為像骨牌一樣一環扣一環。既然連鎖反應本就是人性，那不如刻意設計對自己有利的那條鎖鏈，讓每個既有動作都自然帶出下一個好習慣。</p>

<p><strong>怎麼做</strong>先挑一個你每天百分之百會做的動作當「錨」，再把新習慣接在它後面，並且把時間地點講到具體得幾乎沒有模糊空間。不要寫「我要冥想」，要寫「早上倒完第一杯咖啡後，我會在廚房的椅子上坐著呼吸一分鐘」。當提示變得如此明確，執行就不再依賴當天的心情。</p>

<p class="thought-question">🤔 思考：你有哪個「每天必做」的動作，可以拿來當作新習慣的錨？</p>`,
      en:`<p><strong>The Core Idea</strong> Clear reminds us that most people assume the key to change is motivation or willpower, but what actually separates success from failure is usually a clearly defined plan. Vague goals like "exercise more" or "read more" fail not because you don't want them enough, but because you never told yourself when and where they would happen. An intention with no landing spot stays stuck at "someday."</p>

<p><strong>The Principle: Implementation Intentions</strong> The key tool here is the implementation intention. The formula is simple: "I will do [BEHAVIOR] at [TIME] in [LOCATION]." Locking down the time and place plants a trigger for your future self. When that moment and setting arrive, the cue for action surfaces on its own, and you no longer have to negotiate with yourself in the heat of the moment. Research shows that simply asking people to write out a concrete plan sharply raises the rate at which they follow through—not through more willpower, but through less ambiguity.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>The Principle: Habit Stacking</strong> An even easier approach is habit stacking: attaching a new habit you want to build onto an old one you already do every single day. The formula is "After I do X, I will do Y." An existing habit is already a solid cue, so instead of conjuring a new trigger out of thin air, you climb aboard a train that is already moving. Stretch after you brush your teeth, jot down three priorities after you pour your coffee—the end of the old habit becomes the start of the new one.</p>

<p><strong>The Example</strong> Clear uses the Diderot effect to introduce the power of this chaining: one new thing pulls the next one along, and behaviors fall like a row of dominoes. Since chain reactions are simply part of human nature, you may as well deliberately design the chain that works in your favor, letting each existing action naturally usher in the next good habit.</p>

<p><strong>How to Do It</strong> First pick something you do with one hundred percent certainty every day to serve as your "anchor," then attach the new habit right after it, describing the time and place so specifically that there is almost no room for vagueness. Don't write "I will meditate"; write "After I pour my first cup of coffee in the morning, I will sit in the kitchen chair and breathe for one minute." When the cue is this precise, following through no longer depends on how you feel that day.</p>

<p class="thought-question">🤔 Reflect: Which "I do this every day" action could you use as the anchor for a new habit?</p>`
    }
  },

  6:{
    num:{zh:`第六章`,en:`Chapter Six`},
    title:{zh:`動機被高估，環境往往更重要`,en:`Motivation Is Overrated, Environment Often Matters More`},
    epigraph:{
      zh:`你不是靠意志力活著的，你是活在一個不斷對你發出提示的環境裡。`,
      en:`You don't live by willpower; you live inside an environment that never stops cueing you.`
    },
    body:{
      zh:`<p><strong>核心觀念</strong>我們習慣把行為歸因於個人特質——他很自律、我意志力薄弱。但克利爾指出，環境常常比動機更能決定我們做什麼。同一個人，換到不同的空間，行為會截然不同。與其苦苦逼自己更有毅力，不如先看看：你身邊的環境，正在對你發出哪些提示？</p>

<p><strong>原理</strong>人的行為很大程度上是被情境觸發的，而不是被內在的渴望驅動。你會拿起手邊的東西、走上眼前最順的那條路、做視野裡最明顯的那件事。這意味著：情境本身就是一種提示（environment design 的核心）。如果好習慣的提示藏在抽屜深處，而壞習慣的提示就攤在沙發前，那再強的動機也會慢慢被地心引力磨光。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>實例</strong>把想多喝水的杯子放在桌上最顯眼的位置，把想讀的書擺在枕頭旁，把吉他從櫃子裡拿出來掛在客廳牆上——這些看似瑣碎的擺放，其實是在重新設計你每天會看見的提示。相對地，如果健身包永遠塞在衣櫃最底層，你「想運動」的念頭就得先跨過一道不必要的障礙。行為往往流向最明顯的選項。</p>

<p><strong>怎麼做</strong>與其增強動機，不如重新佈置空間，讓好習慣的提示成為環境中最明顯的存在。讓你想做的事「看得見、拿得到」，讓提示無所不在。你也可以為特定行為指定特定空間——這張桌子只用來工作、這張椅子只用來閱讀——讓場景與行為一對一綁定，一走進去，身體就知道該做什麼。</p>

<p><strong>反思</strong>當你發現自己一再重複某個不想要的行為，先別急著責怪自己的意志力。回頭看看那個空間：是不是它一直在替壞習慣遞出提示？改造環境，往往比改造自己更省力，也更持久。</p>

<p class="thought-question">🤔 思考：如果外星人只看你家的擺設，他會猜你「最想養成」的是什麼習慣？那和你真正想要的一致嗎？</p>`,
      en:`<p><strong>The Core Idea</strong> We tend to explain behavior through personal traits—he's disciplined, I have weak willpower. But Clear points out that environment often decides what we do more than motivation does. The same person, placed in a different space, behaves in completely different ways. Rather than straining to force more grit out of yourself, first take a look: what cues is the environment around you sending?</p>

<p><strong>The Principle</strong> Human behavior is largely triggered by context rather than driven by inner desire. You reach for whatever is at hand, take the path of least resistance in front of you, and do whatever is most visible in your line of sight. This means context itself is a cue—the heart of environment design. If the cue for a good habit is buried deep in a drawer while the cue for a bad one sits right in front of the couch, then even the strongest motivation gradually gets worn down by gravity.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>The Example</strong> Put the water glass you want to drink from in the most visible spot on your desk, set the book you mean to read next to your pillow, take the guitar out of the closet and hang it on the living room wall—these seemingly trivial placements are really a redesign of the cues you see every day. Conversely, if your gym bag is forever stuffed at the bottom of the wardrobe, the thought of "wanting to exercise" has to clear an unnecessary obstacle first. Behavior tends to flow toward the most obvious option.</p>

<p><strong>How to Do It</strong> Instead of trying to boost motivation, rearrange your space so the cues for good habits become the most obvious things in the environment. Make what you want to do visible and within reach; let the cue be everywhere. You can also assign specific spaces to specific behaviors—this desk is only for work, this chair is only for reading—so that setting and behavior are bound one to one, and the moment you step in, your body knows what to do.</p>

<p><strong>Reflection</strong> When you catch yourself repeating some unwanted behavior again and again, don't rush to blame your willpower. Look back at the space: has it been handing out cues for the bad habit all along? Reshaping the environment is often less effortful, and more durable, than reshaping yourself.</p>

<p class="thought-question">🤔 Reflect: If an alien judged you only by the layout of your home, which habit would it guess you "most want" to build? Does that match what you actually want?</p>`
    }
  },

  7:{
    num:{zh:`第七章`,en:`Chapter Seven`},
    title:{zh:`自制力的祕密`,en:`The Secret to Self-Control`},
    epigraph:{
      zh:`所謂自律，多半不是抵抗力更強，而是根本不站到誘惑面前。`,
      en:`So-called self-discipline is rarely about resisting harder; it's about never standing in front of temptation.`
    },
    body:{
      zh:`<p><strong>核心觀念</strong>我們常以為「有自制力的人」擁有某種超凡的意志力，能在誘惑面前咬牙硬撐。克利爾卻給出一個反直覺的結論：那些看起來很自律的人，多半只是很少讓自己置身於誘惑之中。他們不是更會抵抗，而是更少需要抵抗。</p>

<p><strong>原理</strong>第一法則「讓提示顯而易見」若要用來戒除壞習慣，就得反過來——讓提示隱而不見。壞習慣被觸發，通常是因為提示一直在你眼前晃：手機亮著、零食擺在桌上、那個 App 就在主畫面第一格。與其培養鋼鐵般的意志去對抗每一次閃現的渴求（craving），不如直接把提示從視野中移除，讓那個渴求根本不被點燃。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>原理</strong>意志力像肌肉，會疲勞。整天靠「忍住」來維持行為，遲早會有一刻撐不住。真正可靠的策略，不是把賭注押在你意志力最強的那一刻，而是重新安排環境，讓你根本不需要動用意志力。自律不是抵抗力量特別強，而是刻意減少需要抵抗的場合。</p>

<p><strong>實例</strong>想少滑手機，就把手機留在另一個房間，而不是放在手邊還要求自己別碰；想戒掉睡前吃零食，就別把零食買回家囤著。當誘因不在現場，那個「要不要」的內心拉鋸就消失了。你省下來的，正是那些會被一次次消耗掉的意志力。</p>

<p><strong>怎麼做</strong>盤點一下你最想戒的壞習慣，找出它的提示到底是什麼，然後動手把那個提示藏起來、搬走、或關掉。與其對抗誘惑，不如讓誘惑從你的視野裡消失。你要對付的不是那個渴求，而是餵養渴求的那個提示。</p>

<p class="thought-question">🤔 思考：你最近一次「忍住」的誘惑，是不是其實可以靠「讓它從眼前消失」而根本不用忍？</p>`,
      en:`<p><strong>The Core Idea</strong> We often assume that "people with self-control" possess some extraordinary willpower that lets them grit their teeth in the face of temptation. Clear offers a counterintuitive conclusion instead: people who look highly disciplined mostly just rarely put themselves in the path of temptation. They aren't better at resisting; they simply have less to resist.</p>

<p><strong>The Principle</strong> If the First Law—make it obvious—is to be used for breaking a bad habit, it must be inverted: make it invisible. Bad habits get triggered usually because the cue keeps dangling in front of you: the phone lit up, the snacks on the table, that app sitting in the first slot of your home screen. Rather than cultivating an iron will to fight every flickering craving, simply remove the cue from view so the craving never gets sparked in the first place.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>The Principle</strong> Willpower is like a muscle; it tires. Sustaining behavior all day by "holding back" will, sooner or later, hit a moment where you can't hold on. The truly reliable strategy is not to bet everything on the instant your willpower is strongest, but to rearrange the environment so you don't need to draw on willpower at all. Discipline isn't unusually strong resistance; it's deliberately reducing the occasions that call for resistance.</p>

<p><strong>The Example</strong> To scroll your phone less, leave it in another room rather than keeping it within reach and ordering yourself not to touch it; to quit late-night snacking, don't buy and stockpile the snacks at home. When the trigger isn't present, the inner tug-of-war over "should I or shouldn't I" disappears. What you save is exactly the willpower that would otherwise be drained bit by bit.</p>

<p><strong>How to Do It</strong> Take stock of the bad habit you most want to break, figure out what its cue actually is, and then hide it, move it, or switch it off. Instead of fighting temptation, make temptation vanish from your sight. What you have to deal with isn't the craving—it's the cue that feeds the craving.</p>

<p class="thought-question">🤔 Reflect: The last temptation you "held back" from—could you have simply made it disappear from view so there was nothing to hold back from at all?</p>`
    }
  },

  8:{
    num:{zh:`第八章`,en:`Chapter Eight`},
    title:{zh:`如何讓習慣變得無法抗拒`,en:`How to Make a Habit Irresistible`},
    epigraph:{
      zh:`大腦不是在得到獎賞時才興奮，而是在期待獎賞時就已經動了。`,
      en:`The brain doesn't light up when it gets the reward; it fires the moment it anticipates one.`
    },
    body:{
      zh:`<p><strong>核心觀念</strong>第二法則說：讓習慣有吸引力。一件事越有吸引力，我們就越可能去做。壞習慣之所以難戒，正因為它們天生誘人；而好習慣常常缺的，就是那一點「讓人期待」的味道。克利爾的策略，是主動為好習慣裹上一層吸引力。</p>

<p><strong>原理</strong>這裡的關鍵是理解渴求（craving）從何而來。大腦裡的多巴胺，並不是在你真正嚐到獎賞的那一刻才大量釋放，而是在你「預期」會得到獎賞時就先湧上來。換句話說，驅動行動的不是獎賞本身，而是對獎賞的期待。這就是為什麼期待有時比實現更誘人——是渴求，而非滿足，把我們推向行動。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>原理：誘惑綑綁</strong>既然是「期待」在驅動我們，就可以利用它。誘惑綑綁（temptation bundling）的做法，是把一件你「該做但提不起勁」的事，綁在一件你「真心想做、充滿期待」的事之後或之中。當兩者被綁在一起，你對後者的渴求，就會外溢到前者身上，讓原本乏味的習慣沾上一層吸引力。</p>

<p><strong>實例</strong>克利爾舉的經典例子是：只在踩健身車的時候才看 Netflix。想追劇的渴求，成了踩單車的動力；健身這件事於是不再是苦差，而變成一段你會期待的時光。你把「想要」的能量，借給了「需要」的習慣。</p>

<p><strong>怎麼做</strong>列出兩份清單：一份是你真心期待、忍不住想做的事，一份是你知道該做卻總拖延的事。然後試著把它們配對——「只有在做 A 的時候，我才允許自己做 B」。讓那份對 B 的期待，替 A 這個必要習慣點火。把該做的，綁在你迫不及待想做的旁邊。</p>

<p class="thought-question">🤔 思考：有哪件你「戒不掉的享受」，可以拿來當作某個「你一直做不起來的好習慣」的搭檔？</p>`,
      en:`<p><strong>The Core Idea</strong> The Second Law says: make it attractive. The more appealing something is, the more likely we are to do it. Bad habits are hard to quit precisely because they are inherently enticing; what good habits usually lack is that little flavor of anticipation. Clear's strategy is to actively wrap a good habit in a layer of appeal.</p>

<p><strong>The Principle</strong> The key here is understanding where craving comes from. Dopamine in the brain isn't released in a flood at the moment you actually taste the reward, but surges beforehand, the instant you "expect" to receive it. In other words, what drives action is not the reward itself but the anticipation of the reward. This is why anticipation can be more enticing than fulfillment—it is craving, not satisfaction, that pushes us toward action.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>The Principle: Temptation Bundling</strong> Since it is "anticipation" that drives us, we can put it to use. Temptation bundling means tying something you "should do but can't get excited about" to something you "genuinely want to do and look forward to," either after it or alongside it. When the two are bound together, your craving for the latter spills over onto the former, lending an otherwise dull habit a coat of appeal.</p>

<p><strong>The Example</strong> Clear's classic example is this: only watch Netflix while you're pedaling the exercise bike. The craving to binge a show becomes the fuel for cycling; exercise stops being a chore and turns into a stretch of time you actually look forward to. You lend the energy of "want" to the habit of "need."</p>

<p><strong>How to Do It</strong> Make two lists: one of the things you genuinely look forward to and can't resist doing, another of the things you know you should do but keep putting off. Then try to pair them—"I only let myself do B while I'm doing A." Let that anticipation for B ignite A, the necessary habit. Bundle what you should do right next to what you can't wait to do.</p>

<p class="thought-question">🤔 Reflect: Which "indulgence you can't quit" could you pair up with a "good habit you've never managed to get going"?</p>`
    }
  }
});


Object.assign(CHAPTER_CONTENT, {
  9:{
    num:{zh:`第九章`,en:`Chapter Nine`},
    title:{zh:`家人與朋友如何形塑你的習慣`,en:`The Role of Family and Friends in Shaping Your Habits`},
    epigraph:{zh:`你不是靠意志力對抗環境，而是活成了你身邊人的樣子。`,en:`You don't fight your surroundings with willpower; you slowly become the people around you.`},
    body:{
      zh:`<p><strong>核心觀念</strong>我們很少憑空選擇自己的習慣。多數行為其實是模仿來的，而模仿的對象可以歸成三類：親近的人、多數的人，以及有力的人。這三種人像三股暗流，日復一日推著我們往某個方向走，而我們往往渾然不覺自己正被拉著走。</p>

<p><strong>原理</strong>人是群居動物，歸屬感（belonging）是深植的需求。當某個行為能讓我們被群體接納，這個行為就自帶吸引力——它不只解決眼前的事，更替我們換來「我屬於這裡」的安全感。於是好習慣或壞習慣，都能藉著渴求（craving）被接納而生根。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>實例</strong>想像你想開始固定運動。如果你獨自在家硬撐，靠的是意志力；但如果你加入一個「大家都在跑、週末一起約跑是理所當然」的社群，你會發現自己幾乎不需要掙扎就跟著跑了。因為在那個群體裡，運動不是特例，而是常態——不做，反而顯得奇怪。</p>

<p><strong>怎麼做</strong>與其單靠決心，不如刻意加入一個「你想要的行為＝常態」的群體或文化（tribe / culture）。挑一個社群，讓你渴望養成的習慣在那裡是每個人的預設值。當你想成為的樣子，正好是你身邊人早已活出的樣子，習慣就從逆水行舟變成順水推舟。</p>

<p><strong>反思</strong>歸屬感會把個人的習慣悄悄轉譯成集體的認同：一開始你為了合群而做，最後你因為「我就是這種人」而做。這是最強的黏著劑，也是最需要慎選圈子的理由——因為你終將靠向多數。</p>

<p class="thought-question">🤔 思考：你目前最想養成的習慣，在你花最多時間相處的那群人裡，是常態還是異類？</p>`,
      en:`<p><strong>The Core Idea</strong>We rarely choose our habits out of thin air. Most of what we do is imitated, and the people we imitate fall into three groups: the close, the many, and the powerful. These three currents nudge us in a direction day after day, usually while we have no idea we're being pulled at all.</p>

<p><strong>The Principle</strong>Humans are social creatures, and belonging is a need wired deep into us. When a behavior earns us acceptance in a group, that behavior becomes attractive in its own right—it doesn't just solve the task in front of us, it buys us the safety of "I belong here." So good habits and bad ones alike can take root through the craving to be accepted.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>An Example</strong>Suppose you want to start exercising regularly. Alone at home, you're running on willpower. But join a tribe where everyone runs, where a weekend group run is simply what people do, and you'll find yourself training with almost no struggle. In that group, exercise isn't the exception—it's the norm, and skipping it is what would feel strange.</p>

<p><strong>How to Do It</strong>Instead of leaning on resolve, deliberately join a tribe or culture where the behavior you want is already normal. Pick a group in which your desired habit is everyone's default setting. When the person you want to become is exactly who the people around you already are, the habit shifts from swimming upstream to floating downstream.</p>

<p><strong>A Reflection</strong>Belonging quietly translates a personal habit into a collective identity: at first you do it to fit in, and eventually you do it because "this is just who I am." That's the strongest glue there is—and the very reason to choose your circle with care, because in the end you will drift toward the many.</p>

<p class="thought-question">🤔 Reflect: The habit you most want to build right now—among the people you spend the most time with, is it the norm or the exception?</p>`
    }
  },
  10:{
    num:{zh:`第十章`,en:`Chapter Ten`},
    title:{zh:`如何找出並修正壞習慣的根源`,en:`How to Find and Fix the Causes of Your Bad Habits`},
    epigraph:{zh:`每個壞習慣底下，都躲著一個它自以為在照顧的渴求。`,en:`Beneath every bad habit hides a craving it believes it is taking care of.`},
    body:{
      zh:`<p><strong>核心觀念</strong>沒有一個壞習慣是無緣無故存在的。每個習慣底下，都有一個它正在試圖「解決」的渴求（craving）。當你只想硬掐掉表面的行為，卻不理會底下那股渴求，習慣就會用別的形式再冒出來。</p>

<p><strong>原理</strong>我們渴望的其實從來不是那個習慣本身，而是它承諾帶來的狀態改變——被愛、被認可、被安撫、減壓。壞習慣，往往只是對這些深層渴求的一種笨拙而昂貴的解法。它確實暫時止住了痛，只是代價藏在後頭。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>實例</strong>一個人焦慮時就滑手機。表面看是「手機成癮」，但底下的渴求可能是想擺脫不確定、想被人回應、想暫時抽離壓力。手機沒有製造這個渴求，它只是恰好被抓來當成最順手的止痛藥而已。</p>

<p><strong>怎麼做</strong>這是第二法則的反轉——讓壞習慣變得缺乏吸引力。方法是重新框定它：不要只盯著它給你的那一點甜頭，而是把它真正的代價看清楚、講明白。當你在心裡把「這個習慣在幫我」改寫成「這個習慣在偷走我要的東西」，渴求就會鬆動。接著，替底下那個真正的渴求，找一個更好、更健康的解法去頂替。</p>

<p><strong>反思</strong>修正壞習慣的關鍵，不是更用力地對抗行為，而是往下挖一層，看清它到底在替你服務什麼。找到那個渴求，你才有辦法給它一個不必付出昂貴代價的出口。</p>

<p class="thought-question">🤔 思考：你最想戒掉的那個習慣，它其實是在替你止住哪一種更深的渴求？</p>`,
      en:`<p><strong>The Core Idea</strong>No bad habit exists for no reason. Beneath each one lies a craving it is trying to "solve." When you try to strangle the surface behavior while ignoring the craving underneath, the habit simply resurfaces in another form.</p>

<p><strong>The Principle</strong>What we crave was never the habit itself, but the change of state it promises—to be loved, approved of, soothed, relieved of stress. A bad habit is usually just a clumsy and expensive solution to one of these deeper cravings. It really does dull the ache for a moment; it just hides the cost for later.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>An Example</strong>Someone feels anxious and reaches for the phone. On the surface it looks like "phone addiction," but the craving underneath might be a wish to escape uncertainty, to be responded to, to step away from pressure for a while. The phone didn't create that craving—it just happened to be the most convenient painkiller within reach.</p>

<p><strong>How to Do It</strong>This is the inversion of the second law—make the bad habit unattractive. The way to do it is to reframe it: don't fixate on the small hit of pleasure it gives you, but see and name its true cost clearly. When you rewrite "this habit is helping me" into "this habit is stealing what I actually want," the craving loosens its grip. Then find a better, healthier solution to serve the real craving underneath.</p>

<p><strong>A Reflection</strong>The key to fixing a bad habit isn't fighting the behavior harder—it's digging one layer down to see what it's really serving. Once you find the craving, you can finally give it an outlet that doesn't demand such a heavy price.</p>

<p class="thought-question">🤔 Reflect: The habit you most want to quit—which deeper craving is it actually soothing on your behalf?</p>`
    }
  },
  11:{
    num:{zh:`第十一章`,en:`Chapter Eleven`},
    title:{zh:`慢慢走，但絕不後退`,en:`Walk Slowly, but Never Backward`},
    epigraph:{zh:`習慣不是靠一次完美建立的，而是靠一次又一次的登場。`,en:`Habits aren't built by one perfect attempt, but by showing up again and again.`},
    body:{
      zh:`<p><strong>核心觀念</strong>習慣的養成，靠的是重複（repetition）的次數，而不是投入時間的長短，更不是某一次做到多完美。你不需要一鳴驚人，你需要的是持續地、一步一步地往前，哪怕走得很慢，只要不後退。</p>

<p><strong>原理</strong>反覆練習會讓行為逐漸自動化。每重複一次，這個行為在大腦裡就被刻得更深一點，直到它不再需要你費力思考。真正把習慣刻進去的，是「做了幾次」，而不是「花了幾天」在準備或空想。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>實例</strong>有個攝影工作坊把學生分成兩組：一組只憑一張最完美的照片評分（品質組），另一組則憑交件的數量評分（數量組）。結果最好的作品幾乎都出自數量組——他們一張接一張地拍，在大量實作中不斷試錯、修正，反而磨出了真本事；而只顧著空想「怎樣才完美」的那組，作品反而平庸。</p>

<p><strong>怎麼做</strong>別再等「準備好」的那一天，因為它多半不會來。把重心從「規劃」移到「開始」：先做出第一次，再做出第一百次。行動永遠勝過空想，重複的次數會替你把品質慢慢堆上去。與其追求一次完美的登場，不如追求次次都到場。</p>

<p><strong>反思</strong>進步不是直線，也不需要每天都精彩。允許自己走得慢，但守住一條底線——絕不後退，絕不因為做得不夠好就乾脆不做。只要方向對，慢，也會抵達。</p>

<p class="thought-question">🤔 思考：有沒有一件事，你其實一直在「準備」，卻遲遲沒有真正開始重複去做？</p>`,
      en:`<p><strong>The Core Idea</strong>Habits are formed by the number of repetitions, not by the length of time you put in, and certainly not by how perfect any single attempt was. You don't need a spectacular debut—you need to keep moving forward, one step at a time, however slowly, as long as you never go backward.</p>

<p><strong>The Principle</strong>Repeated practice gradually makes a behavior automatic. Each repetition carves it a little deeper into the brain, until it no longer needs your effortful thought. What truly etches a habit in is how many times you've done it—not how many days you've spent preparing or daydreaming.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>An Example</strong>A photography workshop split students into two groups: one was graded on a single most perfect photo (the quality group), the other on the sheer quantity of shots submitted (the quantity group). The best work came almost entirely from the quantity group—shooting one frame after another, they kept testing and correcting through volume, and it was that practice that sharpened real skill. The group that only theorized about perfection produced mediocre work.</p>

<p><strong>How to Do It</strong>Stop waiting for the day you feel "ready"—it mostly never arrives. Shift your weight from planning to starting: get the first rep done, then the hundredth. Action always beats theorizing, and the count of repetitions will stack up the quality for you over time. Rather than chasing one perfect appearance, chase showing up every single time.</p>

<p><strong>A Reflection</strong>Progress isn't a straight line, and it doesn't have to be brilliant every day. Give yourself permission to walk slowly, but hold one line—never backward, and never quit just because it isn't good enough yet. As long as the direction is right, even slow will get you there.</p>

<p class="thought-question">🤔 Reflect: Is there something you've been "getting ready" for, without ever actually beginning to repeat it?</p>`
    }
  },
  12:{
    num:{zh:`第十二章`,en:`Chapter Twelve`},
    title:{zh:`最小努力原則`,en:`The Law of Least Effort`},
    epigraph:{zh:`人不是走該走的路，而是走最省力的路——那就把好習慣鋪成最省力的那條。`,en:`People don't take the right path, they take the easiest one—so pave your good habits as that easiest path.`},
    body:{
      zh:`<p><strong>核心觀念</strong>人天生會走阻力最小的那條路，這就是最小努力原則（the Law of Least Effort）。既然如此，養成好習慣的關鍵，就不是逼自己更用力，而是把好習慣所需的努力降到最低，讓它自然而然地發生。</p>

<p><strong>原理</strong>每個行為之間都存在著摩擦（friction）——啟動它要花的力氣。摩擦越大，我們越傾向放棄；摩擦越小，行為越容易被觸發。與其對抗人性中「怕麻煩」的傾向，不如順著它來設計：讓好行為變成當下最省力的選項，讓壞行為變成最費力的選項。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>實例</strong>想像兩個人都打算明早去健身房。一個人前一晚就把運動服、鞋子、水壺全準備好放在門口；另一個人什麼都沒準備，早上還得翻箱倒櫃找裝備。前者為好習慣移除了摩擦，後者則在自己與好習慣之間堆滿了障礙。哪一個更可能真的去，一目瞭然。</p>

<p><strong>怎麼做</strong>兩個方向並行：對好習慣，減少摩擦——提前把提示（cue）與工具備妥，讓正確的事幾乎不必準備就能開始；對壞習慣，增加摩擦——刻意在自己與它之間多設幾道關卡，讓偷懶或放縱變得麻煩。你要做的，是設計環境，讓「做對的事」成為此刻最容易做的那件事。</p>

<p><strong>反思</strong>我們常誤以為缺的是動機，其實缺的往往是一個夠省力的環境。真正持久的自律，多半不是咬牙硬撐出來的，而是被聰明設計出來的——把路鋪平，人自然會走上去。</p>

<p class="thought-question">🤔 思考：你想養成的那個好習慣，此刻要開始它，橫在你面前的最大一道摩擦是什麼？能不能今晚就把它移走？</p>`,
      en:`<p><strong>The Core Idea</strong>Humans naturally take the path of least resistance—this is the Law of Least Effort. Given that, the key to building a good habit isn't forcing yourself to try harder, but lowering the effort a good habit demands to the point where it happens almost on its own.</p>

<p><strong>The Principle</strong>Between every behavior lies friction—the effort it takes to get started. The greater the friction, the more we tend to give up; the smaller it is, the more easily the behavior fires. Rather than fighting our built-in aversion to hassle, design with it: make the good behavior the least effortful option in the moment, and the bad one the most effortful.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>An Example</strong>Picture two people who both plan to hit the gym in the morning. One lays out their workout clothes, shoes, and water bottle by the door the night before; the other prepares nothing and has to dig through drawers for their gear at dawn. The first removed friction for a good habit; the second piled obstacles between themselves and it. Which one is more likely to actually go is obvious.</p>

<p><strong>How to Do It</strong>Work in two directions at once: for good habits, reduce friction—set out the cue and the tools in advance so the right thing can begin with almost no preparation; for bad habits, increase friction—deliberately place a few extra hurdles between yourself and them, so slacking or indulging becomes a chore. Your job is to design the environment so that doing the right thing is the easiest thing to do right now.</p>

<p><strong>A Reflection</strong>We often assume what we lack is motivation, when what we really lack is an environment low enough in effort. Lasting self-discipline is rarely gritted out—it's cleverly engineered. Pave the path, and people will naturally walk it.</p>

<p class="thought-question">🤔 Reflect: The good habit you want to build—what's the single biggest friction standing between you and starting it right now? Could you remove it tonight?</p>`
    }
  }
});


Object.assign(CHAPTER_CONTENT, {
  13:{
    num:{zh:`第十三章`,en:`Chapter Thirteen`},
    title:{zh:`用兩分鐘法則停止拖延`,en:`How to Stop Procrastinating by Using the Two-Minute Rule`},
    epigraph:{zh:`你不必一次跑完全程，你只需要先綁好鞋帶。`,en:`You don't have to run the whole route today. You just have to lace up your shoes.`},
    body:{
      zh:`<p><strong>核心觀念</strong>拖延的根源，往往不是懶，而是「起頭」這一步在心裡被放得太大。當一個習慣在腦中被想像成一件龐大、耗時、需要意志力硬撐的工程時，我們就會本能地推遲它。兩分鐘法則（the Two-Minute Rule）反其道而行：把任何新習慣縮小到「兩分鐘之內就能完成」的版本，讓開始這件事變得幾乎不需要決心。</p>

<p><strong>原理</strong>幾乎每一個你想養成的習慣，都可以被縮小成一個入口動作。「每晚讀書」縮成「讀一頁」；「跑五公里」縮成「穿上跑鞋」；「寫一篇報告」縮成「打開檔案寫一句」。這些迷你版本聽起來小到可笑，但那正是重點——它們小到不可能失敗。習慣要先能反覆發生，才談得上發揮效果，而讓它反覆發生的第一步，是讓「開始」變得毫無阻力。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>實例</strong>想想「讀一頁」和「讀一章」的差別。當你告訴自己要讀一整章，你會在心裡盤算需要多少時間、夠不夠專注，於是乾脆改天再說。但「讀一頁」小到你找不到藉口拒絕。而人性的巧妙在於：一旦你已經穿好跑鞋站在門口，繼續往前跑反而比停下來更自然；一旦翻開那一頁，往往就順勢讀了好幾頁。你精通的不是「跑五公里」，而是「登場」這個動作本身。</p>

<p><strong>怎麼做</strong>為你想建立的每個習慣，設計一個兩分鐘的入口儀式，並且刻意在一段時間裡「只做這兩分鐘」。重點不是限制自己，而是先讓習慣扎根、成為身份的一部分——先成為「每天會出現的人」，再談表現。當你能穩定地登場，再自然地把它擴大。關鍵永遠是先掌握「開始」，而不是追求一開始就完美。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>反思</strong>拖延不是靠更大的決心來對抗的，而是靠更小的門檻來繞過的。當一件事小到你無法拒絕，抗拒的理由也就消失了。你不需要在今天完成一切，你只需要讓自己反覆地站上起點。</p>

<p class="thought-question">🤔 思考：你正在拖延的那件事，它的「兩分鐘版本」會是什麼？光是先做那兩分鐘，會有多難？</p>`,
      en:`<p><strong>The core idea</strong> Procrastination usually isn't laziness — it's that the act of starting has swollen too large in your mind. When a habit is imagined as a heavy, time-consuming feat that demands willpower, you instinctively push it off. the Two-Minute Rule flips this: shrink any new habit down to a version you can finish in two minutes, so that starting barely requires any resolve at all.</p>

<p><strong>The principle</strong> Almost every habit you want can be scaled down to an entry action. "Read every night" becomes "read one page." "Run five kilometers" becomes "put on my running shoes." "Write the report" becomes "open the file and write one line." These miniature versions sound almost absurdly small — and that is exactly the point. They're small enough that failure is impossible. A habit has to happen repeatedly before it can do anything, and the first step to making it repeat is making starting frictionless.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>An example</strong> Consider the difference between "read one page" and "read one chapter." Told to read a whole chapter, you start calculating how much time it'll take, whether you're focused enough — and then decide to do it another day. But "read one page" is too small to refuse. And here's the quiet trick of human nature: once your shoes are on and you're at the door, running feels more natural than stopping; once the page is open, you often drift into reading several. What you're mastering isn't "run five kilometers" — it's the act of showing up.</p>

<p><strong>How to do it</strong> Design a two-minute entry ritual for each habit you want, and for a while, deliberately do only those two minutes. The point isn't to restrict yourself; it's to let the habit take root and become part of your identity — to first become the kind of person who shows up, before you worry about performance. Once you show up reliably, expanding is the easy part. The goal is always to master starting, not to be perfect from the start.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>A reflection</strong> Procrastination isn't defeated by summoning more resolve; it's sidestepped by lowering the threshold. When something is small enough that you can't say no, the reasons to resist evaporate. You don't have to finish everything today — you just have to keep bringing yourself back to the starting line.</p>

<p class="thought-question">🤔 Reflect: For the thing you're putting off, what would its two-minute version be? How hard would it really be to just do those two minutes?</p>`
    }
  },
  14:{
    num:{zh:`第十四章`,en:`Chapter Fourteen`},
    title:{zh:`讓好習慣無可避免、壞習慣無法執行`,en:`How to Make Good Habits Inevitable and Bad Habits Impossible`},
    epigraph:{zh:`現在替未來的自己把好門，那個人就不必再靠意志力。`,en:`Lock the door for your future self now, and that self won't have to rely on willpower.`},
    body:{
      zh:`<p><strong>核心觀念</strong>意志力是有限、會波動的資源，把每一次選擇都交給當下的自己去硬撐，遲早會失守。更聰明的做法，是趁現在頭腦清醒、動機充足時，做出一個一次性的決定，用它鎖住未來的行為。這種安排就叫承諾機制（commitment device）：讓好習慣變得幾乎無可避免，讓壞習慣變得難以甚至無法執行。</p>

<p><strong>原理</strong>承諾機制的巧妙在於「時間差」——你在「當下的你」還理智、還有決心時做決定，來約束「未來的你」在誘惑面前的行為。當未來的那一刻真正到來，選擇早已被你事先鎖定，你不必再重新掙扎一次。你不是在對抗誘惑的當下贏過它，而是提前把戰場設計成對自己有利。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>實例</strong>想要少吃零食，就不要把零食買回家——當它根本不在櫃子裡，「不吃」就成了預設結果，而不是一場每晚重演的意志力拉鋸。想要準時儲蓄，就把每月自動轉帳設定好，讓存錢在你還沒感覺到之前就發生。這些安排的共通點，是把「該做的事」自動化、把「不該做的事」變得麻煩或根本不可能。一旦選項被事先設定，行為就順著結構走，而不是靠你臨場撐住。</p>

<p><strong>怎麼做</strong>盤點你反覆失守的那些時刻，然後問：我能不能用一個「一勞永逸的決定」把這個缺口堵上？自動化好行為（自動轉帳、預先訂閱、事先備好工具），為壞行為增加摩擦（把手機留在另一個房間、取消訂閱、拔掉插頭）。你的目標，是讓未來的自己在最軟弱的那一刻，也只能做出你今天替他選好的正確選擇。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>反思</strong>真正持久的自律，很少來自「當下更用力」，而多半來自「事先更聰明」。與其指望未來的自己每一次都做對，不如現在就替他把環境和選項設計好。最好的決定，是那種只要做一次，就能替你自動運作很久的決定。</p>

<p class="thought-question">🤔 思考：有哪一個你反覆栽在同一處的行為，可以靠一個「現在做一次、未來就不必再抗爭」的安排來解決？</p>`,
      en:`<p><strong>The core idea</strong> Willpower is a finite, fluctuating resource. Hand every choice to your in-the-moment self to muscle through, and sooner or later the line breaks. The smarter move is to make a single decision now — while you're clear-headed and motivated — that locks in your future behavior. Such an arrangement is a commitment device: it makes good habits nearly inevitable and bad habits difficult, even impossible, to carry out.</p>

<p><strong>The principle</strong> The elegance of a commitment device lies in the time gap. You decide while the present you is still rational and resolved, in order to bind the future you against temptation. When that future moment arrives, the choice has already been locked in — you don't have to win the struggle all over again. You're not beating temptation in the heat of the moment; you're rigging the battlefield in your favor ahead of time.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>An example</strong> Want to snack less? Don't bring the snacks home — when they simply aren't in the cupboard, "not eating them" becomes the default outcome rather than a nightly tug-of-war with willpower. Want to save reliably? Set up an automatic monthly transfer so saving happens before you even feel it. What these arrangements share is that they automate what you should do and make what you shouldn't do inconvenient or outright impossible. Once the options are set in advance, behavior follows the structure instead of depending on you holding the line in the moment.</p>

<p><strong>How to do it</strong> Take inventory of the moments where you repeatedly slip, then ask: can I plug this gap with a one-time, once-and-for-all decision? Automate the good behaviors (auto-transfers, standing subscriptions, tools laid out in advance) and add friction to the bad ones (leave the phone in another room, cancel the subscription, unplug the device). Your aim is that even at your weakest future moment, the only choice available is the right one you picked out for yourself today.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>A reflection</strong> Durable self-discipline rarely comes from "trying harder in the moment" — it usually comes from "being smarter in advance." Rather than betting on your future self to get it right every time, design the environment and the options for that self now. The best decision is the kind you make once and that then keeps working on your behalf for a long time.</p>

<p class="thought-question">🤔 Reflect: Which recurring stumble of yours could be solved by an arrangement you set up once now, so your future self never has to fight it again?</p>`
    }
  },
  15:{
    num:{zh:`第十五章`,en:`Chapter Fifteen`},
    title:{zh:`行為改變的黃金法則`,en:`The Cardinal Rule of Behavior Change`},
    epigraph:{zh:`會被重複的，是那些當下就讓人覺得值得的行為。`,en:`What gets repeated is whatever felt worth it right now.`},
    body:{
      zh:`<p><strong>核心觀念</strong>行為改變有一條黃金法則：能立即帶來滿足的行為會被重複，得不到即時回報的行為會被放棄。我們的大腦天生偏好當下的獎賞，遠勝於遙遠的未來——這是刻在演化裡的傾向。理解這一點，就理解了為什麼好習慣這麼難堅持，而壞習慣這麼容易上癮。</p>

<p><strong>原理</strong>問題出在時間錯位。好習慣的真正回報幾乎都是延遲的：今天運動，體態要幾個月後才變；今天存錢，安穩要多年後才顯現。而壞習慣的回報卻是即時的：一口甜點、一根菸、一次滑手機，當下就爽。當「好習慣的代價是現在、獎賞是未來」，而「壞習慣的獎賞是現在、代價是未來」，天平自然倒向壞的一邊。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>實例</strong>經濟學家巴斯夏（Bastiat）曾用果實作比喻：習慣的第一顆果實往往決定了它的走向——第一口越甜的，後面越苦；第一口越苦的，後面越甜。壞習慣的第一顆果實甜美誘人，但吃到後面盡是苦澀；好習慣的第一顆果實苦澀難嚥，回甘卻在漫長之後。我們之所以一再選錯，是因為我們總是先嚐到那第一顆。</p>

<p><strong>怎麼做</strong>既然大腦要當下的回報，那就給好習慣加上一點即時的滿足。在完成一個你想堅持卻沒有立即回報的習慣後，緊接著給自己一個小小的、無害的獎賞——而這個獎賞必須和你想成為的那種人一致，不能反過來抵消習慣本身（例如運動後別用垃圾食物慶祝）。你要做的，是把延遲的好處，設法讓它在當下也能被感覺到一點點。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>反思</strong>我們不是被理性統治的生物，而是被「當下的感覺」牽引的生物。與其責怪自己不夠自律，不如承認人性、順勢設計：讓正確的事在此刻就帶來一點甜味。當好習慣開始讓你「現在」就感覺良好，堅持它就不再是一場對抗天性的苦戰。</p>

<p class="thought-question">🤔 思考：對於一個你想堅持卻總是半途而廢的好習慣，你能為它加上什麼樣「當下就有感、又不會反噬」的小獎賞？</p>`,
      en:`<p><strong>The core idea</strong> Behavior change has a cardinal rule: what is immediately rewarding gets repeated, and what goes unrewarded gets abandoned. Our brains are wired to prize a reward now far above one in the distant future — an evolutionary bias baked deep in. Grasp this, and you grasp why good habits are so hard to keep and bad ones so easy to fall into.</p>

<p><strong>The principle</strong> The trouble is a timing mismatch. The real payoff of a good habit is almost always delayed: exercise today, and your body changes months later; save today, and security shows up years out. But a bad habit pays instantly — a bite of dessert, a cigarette, a scroll through the phone all feel good right now. When a good habit costs you in the present and rewards you in the future, while a bad habit rewards you in the present and costs you in the future, the scales naturally tip toward the bad.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>An example</strong> The economist Bastiat offered an image about fruit: the first fruit of a habit often sets its direction — the sweeter that first taste, the more bitter what follows; the more bitter that first taste, the sweeter the eventual return. A bad habit's first fruit is tempting and sweet, but bitterness fills the rest; a good habit's first fruit is hard to swallow, and its sweetness comes only much later. We keep choosing wrong because we always taste that first fruit first.</p>

<p><strong>How to do it</strong> Since the brain wants a reward now, give your good habits a dose of immediate satisfaction. Right after completing a habit that you want to stick with but that offers no instant payoff, hand yourself a small, harmless reward — one that stays consistent with the person you want to become and doesn't quietly undo the habit itself (don't celebrate a workout with junk food). The task is to make the delayed benefit felt, at least a little, in the present.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>A reflection</strong> We aren't creatures ruled by reason so much as creatures pulled by how the moment feels. Rather than scolding yourself for lacking discipline, accept human nature and design with it: make the right thing carry a touch of sweetness right now. Once a good habit starts making you feel good in the present, keeping it stops being a grinding war against your own instincts.</p>

<p class="thought-question">🤔 Reflect: For a good habit you keep quitting halfway, what small reward could you attach that's felt right now yet won't backfire on the habit itself?</p>`
    }
  },
  16:{
    num:{zh:`第十六章`,en:`Chapter Sixteen`},
    title:{zh:`如何每天堅持好習慣`,en:`How to Stick with Good Habits Every Day`},
    epigraph:{zh:`錯過一次是意外，錯過兩次是新習慣的開始。`,en:`Missing once is an accident; missing twice is the start of a new habit.`},
    body:{
      zh:`<p><strong>核心觀念</strong>要每天堅持一個習慣，最有力的工具之一，是把進度看得見。習慣追蹤（habit tracking）——在日曆上打勾、每完成一次就把一枚迴紋針從一個罐子挪到另一個罐子——把抽象的努力變成一條看得見的軌跡，讓「我確實在做」這件事本身，成為一種當下就能感受到的獎賞。</p>

<p><strong>原理</strong>習慣追蹤之所以有效，是因為它同時滿足了行為改變的幾個關鍵：它是提示（那條連續的鏈條提醒你別中斷），它有吸引力（看著鏈條延長讓人上癮），也帶來即時獎賞（每一個勾都是一次小小的成就感證據）。它把延遲回報的好習慣，配上了一個當下就能兌現的滿足——你不必等結果，追蹤本身就給了你回報。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>實例</strong>當一條連續打勾的鏈條在眼前愈拉愈長，你會本能地不想親手把它剪斷。這條「不中斷的鏈條」變成了一個你想守護的東西，維持它的動力，往往比一開始建立習慣的動力更強。視覺化的進度，把一件內在、無形的事，變成了一個你捨不得破壞的外在成果。</p>

<p><strong>怎麼做</strong>選一個核心習慣開始追蹤，方法愈簡單愈好，讓記錄本身不成為另一個負擔。但真正的關鍵在於那條鐵律：絕不錯過兩次（never miss twice）。人生總會有意外，錯過一次不是問題——真正毀掉習慣的，從來不是那一次中斷，而是「既然斷了，乾脆放棄」的第二次、第三次。所以規則很簡單：可以錯過一次，但絕不連續錯過兩次，斷了就立刻回到正軌。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>反思</strong>你不需要做到完美，你需要的是一致性（consistency）。一次失誤動搖不了什麼，真正決定成敗的，是你在失誤之後多快回來。冠軍和其他人的差別，不在於他們從不跌倒，而在於他們跌倒後不讓第二次跟著發生。追蹤它、守住鏈條；真的斷了，明天就接回來。</p>

<p class="thought-question">🤔 思考：上一次你因為錯過一次就乾脆整個放棄的習慣是什麼？如果當時你守住了「絕不錯過兩次」，現在會有什麼不同？</p>`,
      en:`<p><strong>The core idea</strong> One of the most powerful tools for sticking with a habit every day is making your progress visible. habit tracking — a checkmark on the calendar, moving a paperclip from one jar to another with each rep — turns abstract effort into a visible trail, so that the simple fact of "I actually did it" becomes a reward you can feel right now.</p>

<p><strong>The principle</strong> Habit tracking works because it satisfies several keys of behavior change at once: it's a cue (the unbroken chain reminds you not to skip), it's attractive (watching the chain grow is addictive), and it delivers an immediate reward (each mark is a small piece of proof of accomplishment). It pairs a good habit's delayed payoff with a satisfaction you can cash in now — you don't have to wait for the outcome; the tracking itself rewards you.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>An example</strong> When a chain of consecutive checkmarks stretches longer and longer before your eyes, you instinctively don't want to be the one who snaps it. That "unbroken chain" becomes something you want to protect, and the drive to maintain it is often stronger than the drive that built the habit in the first place. Visualized progress turns something inner and intangible into an external result you can't bring yourself to spoil.</p>

<p><strong>How to do it</strong> Pick one core habit to track, and keep the method as simple as possible so the recording never becomes another burden. But the real key is the iron rule: never miss twice. Life throws curveballs, and missing once is fine — what actually destroys a habit is never the single lapse, but the second and third "well, I've already broken it, might as well give up." So the rule is simple: you may miss once, but never miss twice in a row; if you break, get back on track immediately.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>A reflection</strong> You don't need to be perfect; you need consistency. A single slip shakes nothing — what decides success is how fast you come back after it. What separates champions from everyone else isn't that they never fall, but that they don't let a second fall follow the first. Track it, guard the chain; and if it truly breaks, reconnect it tomorrow.</p>

<p class="thought-question">🤔 Reflect: What's a habit you once abandoned entirely just because you missed once? If you'd held to "never miss twice," how would things be different now?</p>`
    }
  }
});


Object.assign(CHAPTER_CONTENT, {
  17:{
    num:{zh:`第十七章`,en:`Chapter Seventeen`},
    title:{zh:`問責夥伴如何改變一切`,en:`How an Accountability Partner Can Change Everything`},
    epigraph:{zh:`當有人看著，你偷懶的成本就從「未來」搬到了「現在」。`,en:`When someone is watching, the cost of slacking moves from the future into the present moment.`},
    body:{
      zh:`<p><strong>核心觀念</strong>行為改變四法則的最後一條是「讓獎賞令人滿足」；要戒除壞習慣，就把它反過來——讓「不做該做的事」立刻付出代價。壞習慣之所以難改，是因為它的懲罰通常遲到：抽菸的代價在幾十年後、拖延的代價在期限前一晚才爆發。當代價來得太慢，當下的你根本感受不到。問責夥伴（accountability partner）與習慣契約（habit contract）的作用，就是把那份延遲的代價提前，讓它變得即時而真實。</p>
      <p><strong>原理</strong>人是社會性動物，我們非常在意別人怎麼看自己。一件事若只有自己知道，很容易放自己一馬；但一旦有人在旁邊盯著，偷懶就會帶來立即的社會成本——尷尬、失信、被人看穿。這股「不想在別人面前漏氣」的壓力，往往比抽象的健康或財務後果更能約束當下的行為。換句話說，被看著本身就是一種即時的獎懲機制。</p>
      <div class="section-break">＊ ＊ ＊</div>
      <p><strong>實例</strong>設想你想戒掉工作時間滑手機的毛病。如果只是心裡默默決定，很容易一分神又拿起手機。但若你請同事幫忙盯著，約定「他每看到你上班時間刷社群，你就請他喝一杯咖啡」，情況就不同了——現在每一次分心都有一個看得見的人、一筆看得見的帳。偷懶不再是無聲無息，而是當場要面對一個知情的旁觀者。</p>
      <p><strong>怎麼做</strong>兩個工具。其一，找一位問責夥伴：把你的計畫公開告訴一個你在乎其看法的人，並約好定期回報進度。光是「知道待會要跟他交代」，就足以在關鍵時刻拉住你。其二，簽一份習慣契約：白紙黑字寫下你要養成的行為、違約的具體代價，以及見證人是誰。把懲罰講清楚、把見證人請進來，未來的你就很難含糊帶過。讓「沒做到」變得公開、具體、當場有感。</p>
      <div class="section-break">＊ ＊ ＊</div>
      <p><strong>反思</strong>意志力像肌肉，會累會斷；但社會壓力是一套外掛的即時回饋系統，不靠你當下有沒有力氣。與其一個人在暗處跟惰性拉鋸，不如把光打開、把人請進來，讓惰性無處躲藏。你不需要更強的自制力，你需要的是一雙盯著你的眼睛。</p>
      <p class="thought-question">🤔 思考：你最想改掉的那個習慣，如果從今天起有一個人會定期問你進度，你的行為會有什麼不同？那個人可以是誰？</p>`,
      en:`<p><strong>Core Idea</strong>The last of the four laws of behavior change is to make the reward satisfying; to break a bad habit, you invert it—make failing to do the right thing cost you something right away. Bad habits are hard to break because their punishment is usually late: the price of smoking arrives decades later, the price of procrastination the night before the deadline. When consequences come too slowly, the present-you simply doesn't feel them. An accountability partner and a habit contract exist to pull that delayed cost forward, making it immediate and real.</p>
      <p><strong>The Principle</strong>Humans are social animals, deeply invested in how others see us. When something is known only to us, it's easy to let ourselves off the hook; but the moment someone is watching, slacking carries an immediate social cost—awkwardness, broken trust, being seen through. The pressure of "I don't want to look bad in front of them" often restrains present behavior far more than abstract health or financial outcomes ever could. Being watched is itself a form of instant consequence.</p>
      <div class="section-break">◆ ◆ ◆</div>
      <p><strong>In Practice</strong>Suppose you want to stop checking your phone during work hours. Decided silently in your own head, the resolve dissolves the moment your attention drifts. But ask a colleague to watch you, and agree that "every time he catches you scrolling on the clock, you buy him a coffee," and everything changes—now each lapse has a visible witness and a visible tab. Slacking is no longer soundless; you have to face a knowing observer on the spot.</p>
      <p><strong>How to Do It</strong>Two tools. First, find an accountability partner: tell someone whose opinion you value about your plan, and arrange to report your progress regularly. Simply knowing you'll have to account for yourself later is often enough to hold you back at the critical moment. Second, sign a habit contract: put in writing the behavior you're committing to, the concrete penalty for failing, and who the witnesses are. Spell out the punishment, bring the witnesses in, and the future-you can't wriggle away. Make "not doing it" public, concrete, and felt in the moment.</p>
      <div class="section-break">◆ ◆ ◆</div>
      <p><strong>Reflection</strong>Willpower is like a muscle; it tires and snaps. Social pressure, by contrast, is an external system of instant feedback that doesn't depend on how much strength you have right now. Rather than wrestle your inertia alone in the dark, turn on the lights and bring people in, so the inertia has nowhere to hide. You don't need stronger self-control—you need a pair of eyes on you.</p>
      <p class="thought-question">🤔 Reflect: For the habit you most want to change, how would your behavior differ if, starting today, one person checked in on your progress regularly? Who could that person be?</p>`
    }
  },
  18:{
    num:{zh:`第十八章`,en:`Chapter Eighteen`},
    title:{zh:`關於天賦的真相`,en:`The Truth About Talent`},
    epigraph:{zh:`基因不會替你決定結局，但它會替你挑選最容易贏的那場比賽。`,en:`Your genes don't decide your fate, but they do pick the game you're most likely to win.`},
    body:{
      zh:`<p><strong>核心觀念</strong>天賦（talent）在成功裡確實有份量，但它的作用常被誤解。基因不會直接決定你能成為什麼，它決定的是「你在哪個領域比較容易占上風」。換句話說，天賦不是保證你贏的門票，而是幫你挑選一個努力能發揮複利的戰場。選對場子，同樣的付出會回收得更多；選錯場子，再拚也事倍功半。</p>
      <p><strong>原理</strong>每個人的性格、體質與傾向各不相同，這些差異決定了不同活動對你來說是「順」還是「逆」。當一件事契合你的天生特質，你會更容易進入狀態、更少感到痛苦、也更願意反覆去做——而習慣的養成正是靠反覆。於是天賦真正的紅利不在於一開始跑得多快，而在於它讓「持續」變得可能。能長久堅持的人，最後往往贏過一時衝很快的人。</p>
      <div class="section-break">＊ ＊ ＊</div>
      <p><strong>實例</strong>兩個人都想在運動上出頭，一個身材高大、一個身形靈巧。硬要他們比同一項目，其中一人注定吃虧、容易受挫、很快放棄。但若高大者去打需要身高的項目、靈巧者去做需要爆發與協調的項目，兩人都能在各自的舞台上樂在其中、越練越好。同樣的努力，因為選對了與自己相配的遊戲，回報天差地別。</p>
      <p><strong>怎麼做</strong>三步。第一，觀察哪些事對你來說「別人覺得累、你卻覺得還好」，那通常就是你的優勢區。第二，把你的習慣盡量建立在這些契合天賦與性格的領域，讓堅持變得自然而非煎熬。第三，如果現有的遊戲對你不利，就換一個規則對你有利的遊戲——甚至自己創造一個新的利基，讓自己成為那個場域裡最合適的人。重點不是硬闖不利的戰場，而是聰明地挑選戰場。</p>
      <div class="section-break">＊ ＊ ＊</div>
      <p><strong>反思</strong>「努力就會成功」只說對了一半：努力必須用在對的地方才有複利。認清天賦不是為了給懶惰找藉口，而是為了把有限的心力，投到那個最能回本的方向。與其在不利的賽道上苦撐著證明什麼，不如誠實地找到那個讓你既享受又擅長的遊戲。</p>
      <p class="thought-question">🤔 思考：有哪件事是別人做起來覺得吃力、你做起來卻相對輕鬆甚至樂在其中的？你目前的習慣，有多少建立在這樣的優勢區上？</p>`,
      en:`<p><strong>Core Idea</strong>Talent genuinely matters for success, but its role is often misunderstood. Genes don't directly determine what you can become; they determine the arena in which you're more likely to have the upper hand. In other words, talent isn't a guaranteed ticket to winning—it's a way of choosing a battlefield where effort can compound. Pick the right game and the same work pays back more; pick the wrong one and no amount of grinding gets you far.</p>
      <p><strong>The Principle</strong>Everyone's temperament, physiology, and inclinations differ, and these differences decide which activities run "with the grain" for you and which run against it. When something fits your natural traits, you slip into flow more easily, feel less pain, and are more willing to do it again and again—and habits are built precisely on repetition. So the real dividend of talent isn't how fast you start; it's that it makes persistence possible. Those who can keep going tend, in the end, to beat those who merely sprint for a while.</p>
      <div class="section-break">◆ ◆ ◆</div>
      <p><strong>In Practice</strong>Two people both want to excel in sport, one tall and powerful, the other quick and nimble. Force them into the same event and one is doomed to struggle, grow discouraged, and quit early. But let the tall one play a game that rewards height and the nimble one a game that rewards explosiveness and coordination, and both can enjoy their own stage and steadily improve. The same effort yields wildly different returns, simply because each chose a game matched to who they are.</p>
      <p><strong>How to Do It</strong>Three steps. First, notice the things that others find draining but you find manageable—that's usually your zone of advantage. Second, build your habits, wherever possible, in these domains that fit your talent and temperament, so persistence feels natural rather than like torture. Third, if the existing game is stacked against you, switch to one whose rules favor you—or even carve out a new niche where you become the best-suited person in the field. The point isn't to storm an unfavorable battlefield, but to choose your battlefield wisely.</p>
      <div class="section-break">◆ ◆ ◆</div>
      <p><strong>Reflection</strong>"Work hard and you'll succeed" is only half true: effort compounds only when aimed at the right target. Recognizing your talents isn't an excuse for laziness—it's a way to invest your limited energy where it pays back most. Rather than toiling on an unfavorable track to prove something, honestly find the game where you're both engaged and skilled.</p>
      <p class="thought-question">🤔 Reflect: What is something others find effortful that comes relatively easily—or even enjoyably—to you? How much of your current set of habits is built on that zone of advantage?</p>`
    }
  },
  19:{
    num:{zh:`第十九章`,en:`Chapter Nineteen`},
    title:{zh:`金髮女孩原則：如何持續保持動力`,en:`The Goldilocks Rule: How to Stay Motivated`},
    epigraph:{zh:`太難讓人放棄，太易讓人厭倦；動力活在剛好搆得到的邊緣。`,en:`Too hard and you quit, too easy and you're bored; motivation lives at the edge you can just barely reach.`},
    body:{
      zh:`<p><strong>核心觀念</strong>人最能維持動力的，是難度「剛好略高於當前能力」的任務——這就是金髮女孩原則（the Goldilocks Rule）。太難，會讓人不斷失敗而挫折放棄；太簡單，會讓人覺得無趣而懶得再做。動機的甜蜜點落在兩者之間那道細細的邊緣：有一點吃力，但踮起腳仍搆得到。</p>
      <p><strong>原理</strong>大腦喜歡「可管理的挑戰」。當任務難度與能力相稱、又略微領先，我們會感到自己正在進步，這份進步感本身就是最好的燃料。一旦難度失衡——不是被打趴就是被無聊淹沒——動力就會流失。維持長期投入的關鍵，就是不斷把難度調校在這條進步的邊緣上。</p>
      <div class="section-break">＊ ＊ ＊</div>
      <p><strong>實例</strong>想像跟人比賽某項技能。對手若遠強於你，你屢戰屢敗，很快就不想玩了；對手若遠弱於你，你贏得毫無懸念，也很快覺得沒意思。唯有對手實力跟你在伯仲之間、你需要拿出真本事才勉強取勝時，你會最投入、最想一場接一場地打下去。學習任何技藝也一樣：合適的難度讓人上癮，失衡的難度讓人離場。</p>
      <p><strong>怎麼做</strong>兩件事。第一，主動管理難度：當習慣變得太輕鬆，就把標準往上加一點；當它挫敗到讓你想逃，就先把它拆小、退回搆得到的版本。讓自己永遠處在「稍微吃力」的區間。第二，也是更難的一件——熬過無聊。就算難度校準得再好，任何習慣練久了都會遇到不再新鮮、只剩重複的平原期。真正頂尖與泛泛之輩的分野，往往不在誰更有天分，而在誰能在興奮退去、只剩無聊時依然照做。愛上無聊，才走得遠。</p>
      <div class="section-break">＊ ＊ ＊</div>
      <p><strong>反思</strong>我們常以為半途而廢是因為缺乏毅力，其實很多時候是因為難度沒調好——不是太打擊、就是太無聊。把挑戰調到踮腳搆得到的高度，能讓你更容易「開始並持續」；但決定你能走多遠的，是無聊來襲那一刻，你還願不願意坐下來重複昨天做過的事。</p>
      <p class="thought-question">🤔 思考：你正在做的某個習慣，此刻是太難、太易、還是剛好？如果它已經進入無聊的平原期，你打算用什麼方式讓自己繼續留在場上？</p>`,
      en:`<p><strong>Core Idea</strong>We stay motivated best by tasks whose difficulty is "just slightly above our current ability"—this is the Goldilocks Rule. Too hard, and repeated failure breeds frustration and we quit; too easy, and boredom makes us stop bothering. Motivation's sweet spot sits on the thin edge between the two: a little demanding, but reachable if you stretch.</p>
      <p><strong>The Principle</strong>The brain loves a manageable challenge. When a task's difficulty matches our ability and edges just ahead of it, we feel ourselves making progress—and that sense of progress is the best fuel there is. Once difficulty falls out of balance—either crushing us or drowning us in tedium—motivation drains away. The key to sustained engagement is continually calibrating difficulty to this edge of progress.</p>
      <div class="section-break">◆ ◆ ◆</div>
      <p><strong>In Practice</strong>Imagine competing at some skill. If your opponent far outclasses you, you lose again and again and soon don't want to play; if your opponent is far weaker, you win without suspense and quickly lose interest. Only when the opponent is your near-equal—when you have to bring your real ability just to scrape a win—are you most absorbed, most eager to play match after match. Learning any craft is the same: the right difficulty is addictive; unbalanced difficulty drives you off.</p>
      <p><strong>How to Do It</strong>Two things. First, actively manage difficulty: when a habit gets too easy, raise the bar a notch; when it's discouraging enough to make you want to flee, break it down and retreat to a reachable version. Keep yourself perpetually in the "slightly demanding" zone. Second, and harder—endure the boredom. However well you calibrate difficulty, any habit practiced long enough hits a plateau where novelty is gone and only repetition remains. The line between the truly elite and the merely ordinary often lies not in who has more talent, but in who keeps showing up once the excitement fades and only boredom is left. Fall in love with boredom, and you'll go far.</p>
      <div class="section-break">◆ ◆ ◆</div>
      <p><strong>Reflection</strong>We often assume we quit for lack of grit, when frequently it's because the difficulty was miscalibrated—either too crushing or too dull. Tuning the challenge to a height you can just reach makes it easier to start and persist; but how far you go is decided in the moment boredom strikes, by whether you're still willing to sit down and repeat what you did yesterday.</p>
      <p class="thought-question">🤔 Reflect: Is a habit you're working on right now too hard, too easy, or just right? If it has entered the boredom plateau, how do you plan to keep yourself in the game?</p>`
    }
  },
  20:{
    num:{zh:`第二十章`,en:`Chapter Twenty`},
    title:{zh:`建立好習慣的壞處`,en:`The Downside of Creating Good Habits`},
    epigraph:{zh:`習慣讓你不必再思考——這是它最大的禮物，也是它最大的陷阱。`,en:`A habit frees you from thinking—that is its greatest gift, and its greatest trap.`},
    body:{
      zh:`<p><strong>核心觀念</strong>習慣的最大好處是自動化：不必再耗費心力，行為就自己發生。但這份自動化是雙面刃——當一切變得毫不費力，人也很容易停止進步、開始對小錯視而不見。習慣把你送到某個水準，卻也可能讓你就此卡在那裡，滿足於「夠好就好」。</p>
      <p><strong>原理</strong>一旦動作變成本能，大腦就不再細看細節。剛學一項技能時你會全神貫注、逐一修正；等它成了習慣，你進入巡航模式，注意力鬆開，微小的偏差便悄悄累積而不自覺。這正是為什麼許多人練了很久卻不再變強——不是不夠勤，而是熟練讓他們停止覺察。自動化解放了心力，也麻痺了警覺。</p>
      <div class="section-break">＊ ＊ ＊</div>
      <p><strong>實例</strong>想想任何做了很多年、早已熟極而流的工作。一開始你戰戰兢兢、不斷打磨；幾年後動作行雲流水，卻也可能好幾年沒真正變厲害過——同樣的方式重複了千百遍，錯誤被習慣掩蓋，進步也隨之停擺。輕鬆，成了停滯的溫床。</p>
      <p><strong>怎麼做</strong>解方是把習慣與刻意練習（deliberate practice）結合。習慣負責把基本功變成毫不費力的地基，讓你有餘裕去攻更難的部分；刻意練習則負責在那個地基上，持續挑戰略高於當前的能力，並靠反思與復盤（reflection and review）維持覺察。具體做法：定期停下來檢視——哪裡做得好、哪裡出了偏差、下一步要調什麼。用這樣的回顧，把「熟練」重新變回「進步」，避免自動化悄悄滑成停滯。真正的精進，是把習慣當地基，再永不停歇地微調上層。</p>
      <div class="section-break">＊ ＊ ＊</div>
      <p><strong>反思</strong>回到全書的起點：每天1%的微小改進，在時間的複利下會累積成巨大的差距；而每一個微小行動，都是投給「你想成為的那種人」的一張選票，一點一滴堆疊起你的身份。持久的成果，從來不是靠某次爆發或一時的意志力，而是靠持續的微小改進、加上身份的積累——習慣搭好地基，反思與復盤守住方向，兩者相加，你才會在歲月的另一頭，成為一個連自己都驚訝的人。</p>
      <p class="thought-question">🤔 思考：你有哪個「已經很熟」的習慣，其實好久沒進步了？如果每週留十分鐘做一次反思與復盤，你會想先檢視哪裡？</p>`,
      en:`<p><strong>Core Idea</strong>The great benefit of a habit is automaticity: the behavior happens on its own, without draining your mind. But that automaticity is a double-edged sword—when everything becomes effortless, it's easy to stop improving and to grow blind to small errors. A habit carries you to a certain level, then may leave you stuck there, content with "good enough."</p>
      <p><strong>The Principle</strong>Once an action becomes instinct, the brain stops examining the details. When you first learn a skill you concentrate fully and correct yourself step by step; once it's a habit you slip into cruise control, your attention loosens, and tiny deviations quietly accumulate unnoticed. This is exactly why many people practice for years yet stop getting better—not from lack of diligence, but because mastery made them stop noticing. Automaticity frees the mind and numbs the vigilance.</p>
      <div class="section-break">◆ ◆ ◆</div>
      <p><strong>In Practice</strong>Think of any job you've done for years and can now do in your sleep. At first you were careful, endlessly refining; a few years on your movements flow effortlessly—yet you may not have truly improved in a long while. The same approach, repeated a thousand times, lets errors hide behind the habit and progress grind to a halt. Ease becomes the breeding ground for stagnation.</p>
      <p><strong>How to Do It</strong>The remedy is to pair habits with deliberate practice. Habits turn the fundamentals into an effortless foundation, freeing you to tackle the harder parts; deliberate practice then keeps challenging you, on that foundation, at a level just above your current ability, staying alert through reflection and review. Concretely: stop periodically to take stock—what went well, where things drifted, what to adjust next. Use that review to turn "mastery" back into "progress," so automaticity doesn't quietly slide into stagnation. True excellence means treating the habit as a base, then tuning the layers above it without ever stopping.</p>
      <div class="section-break">◆ ◆ ◆</div>
      <p><strong>Reflection</strong>Return to where the book began: a mere 1% improvement each day, compounded over time, accumulates into an enormous difference; and every small action is a vote cast for the kind of person you wish to become, stacking up your identity bit by bit. Lasting results never come from a single burst or a moment of willpower—they come from continuous small improvements plus the accumulation of identity. Habits lay the foundation, reflection and review guard the direction, and together they let you emerge, on the far side of the years, as someone even you are surprised to have become.</p>
      <p class="thought-question">🤔 Reflect: Which "already mastered" habit of yours hasn't actually improved in a long time? If you set aside ten minutes each week for reflection and review, where would you look first?</p>`
    }
  }
});


// ==== 附錄：站長兩篇心得 ====
Object.assign(CHAPTER_CONTENT, {
  21: {
    num: { zh: '附錄 · 讀者心得', en: 'Appendix · Reader’s Review' },
    title: { zh: '把「習慣的科學」變成你的日常', en: 'Turning the Science of Habits into Daily Life' },
    epigraph: { zh: '「問題的根源不是你這個人，而是你建立習慣的體系。」　— 翰林書僮', en: '“The root of the problem isn’t you; it’s the system you built for your habits.”　— Kun Han Le' },
    body: {
      zh: `
<p><em>這一章整合本站站長翰林書僮（Kun Han Le）於 2019 年寫下的兩篇讀後心得（上、下），以下為忠實摘要，保留他的重點與親身實踐。</em></p>
<p>站長對這本書的評價很直接：比起其他談習慣的書，《原子習慣》勝在<strong>方法具體、實例夠多、真的能操作</strong>——不是停在理論，而是「確確實實幫每個人過上更好的生活」。他甚至說，比起哲學或歷史類的書，這種能直接改善生活品質的書，最值得推薦給還沒有閱讀習慣的一般人。</p>
<div class="section-break">＊ ＊ ＊</div>
<p><strong>上篇：複利、系統與身份。</strong>他抓出全書的地基——<strong>每天進步 1%，一年約 37 倍；退步 1%，趨近於零</strong>；習慣是「自我提升的複利」。接著是他最看重的一組對照：<strong>體系重於目標</strong>（別盯記分板，要練訓練與策略），以及<strong>改變的三層次</strong>：結果 → 過程 → 身份。他特別強調身份這一層：與其說「我想變瘦」，不如成為「我是重視健康管理的人」；<strong>你越以某個身份為傲，越有動力維持相關習慣</strong>。他記下的一句話很傳神：問題的根源不是你，而是你建立習慣的體系。</p>
<p><strong>下篇：四步迴路與四大法則的實作。</strong>他把習慣拆成<strong>提示→渴求→反應→獎賞</strong>，再逐一對應四法則的做法：法則一用<strong>執行意圖</strong>（「我將在某時某地做某事」，他引用研究：把運動執行率從約三成拉到九成）與<strong>習慣疊加</strong>；法則二用<strong>喜好綁定</strong>（邊踩健身車邊看 Netflix）與<strong>加入對的群體</strong>；法則三用<strong>兩分鐘規則</strong>（「讀一頁」而非「讀一章」）與<strong>環境設計</strong>（一個空間、一種用途）；法則四用<strong>具象化的進度追蹤</strong>（迴紋針、彈珠）與<strong>即時獎賞</strong>。他也提醒那條鐵律：<strong>絕不錯過兩次</strong>——完美不如一致。</p>
<div class="section-break">＊ ＊ ＊</div>
<p><strong>他的親身實驗。</strong>站長分享了一個很有說服力的例子：他原本用手機上的閱讀 App 看書，總被臉書打斷；後來改用<strong>只有單一功能的 Kindle</strong>，反而能專注讀完——這正是「環境勝過意志力」的活證明。他也記下 Bastiat 的洞察：<strong>「習慣的第一顆果實越甜，之後的果實就越苦」</strong>，點破現代人被即時獎賞綁架的陷阱。</p>
<p><strong>他的結論。</strong>改變習慣的核心，在於善用大腦的預測與獎賞迴路：<strong>精心設計環境、寫下明確計畫、找到對的社群、把進度視覺化</strong>。關鍵從來不是完美執行，而是<strong>持續與一致</strong>。而這一切要真的發生，得先像他說的——把矛頭從「怪自己意志力不夠」，轉向「重新設計你建立習慣的系統」。</p>
<p class="thought-question">🤔 思考：用站長的親身實驗檢查自己——你有沒有一個像 Kindle 那樣「單一功能、低干擾」的環境，能讓你想要的習慣自然發生？如果沒有，你今天可以先移除哪一個干擾源？</p>
`,
      en: `
<p><em>This chapter combines the site owner Kun Han Le’s two-part review, written in 2019. What follows is a faithful condensation, keeping his points and his own practice.</em></p>
<p>His verdict is blunt: compared with other habit books, Atomic Habits wins on being <strong>concrete, richly exemplified, and genuinely actionable</strong> — it doesn’t stop at theory but really “helps everyone live a better life.” He goes so far as to say that, more than books on philosophy or history, a book that directly improves quality of life is the one most worth recommending to ordinary people who haven’t yet built a reading habit.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>Part one: compounding, systems, and identity.</strong> He pulls out the book’s foundation — <strong>1% better each day is about 37× in a year; 1% worse approaches zero</strong>; habits are “the compound interest of self-improvement.” Then the pairing he prizes most: <strong>systems over goals</strong> (don’t stare at the scoreboard; train the process and strategy), and the <strong>three layers of change</strong>: outcomes → processes → identity. He stresses the identity layer: rather than “I want to lose weight,” become “I’m someone who manages my health”; <strong>the prouder you are of an identity, the more motivated you are to keep the matching habits</strong>. A line he noted captures it: the root of the problem isn’t you, but the system you built for your habits.</p>
<p><strong>Part two: the four-step loop and the Four Laws in practice.</strong> He breaks a habit into <strong>cue → craving → response → reward</strong>, then maps the Four Laws onto it: Law 1 with <strong>implementation intentions</strong> (“I will [do X] at [time] in [place]” — he cites a study raising exercise follow-through from about a third to around ninety percent) and <strong>habit stacking</strong>; Law 2 with <strong>temptation bundling</strong> (pedal the exercise bike while watching Netflix) and <strong>joining the right group</strong>; Law 3 with the <strong>Two-Minute Rule</strong> (“read one page,” not “read a chapter”) and <strong>environment design</strong> (one space, one use); Law 4 with <strong>visual progress tracking</strong> (paper clips, marbles) and <strong>immediate rewards</strong>. He also flags the iron rule: <strong>never miss twice</strong> — consistency beats perfection.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>His own experiment.</strong> He shares a persuasive example: he used to read on a phone app but was constantly interrupted by Facebook; switching to a <strong>single-purpose Kindle</strong>, he could finally focus and finish — living proof of “environment over willpower.” He also noted Bastiat’s insight: <strong>“the sweeter the first fruit of a habit, the more bitter the later ones”</strong> — naming the trap of being hijacked by immediate rewards.</p>
<p><strong>His conclusion.</strong> The core of changing habits is to work with the brain’s prediction-and-reward loop: <strong>design the environment carefully, write down a clear plan, find the right community, and make progress visible</strong>. The key is never perfect execution but <strong>persistence and consistency</strong>. And for any of it to actually happen, you must first do as he says — turn the blame away from “I lack willpower” and toward “redesign the system you built for your habits.”</p>
<p class="thought-question">🤔 Reflect: Test yourself against his experiment — do you have a single-purpose, low-distraction setup, like his Kindle, that lets your desired habit happen naturally? If not, which one source of distraction could you remove today?</p>
`
    }
  }
});

