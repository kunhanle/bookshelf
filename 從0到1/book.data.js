// ==== 從0到1 Zero to One · 中英雙語 metadata（非文學框架）====
const BOOK = {
  slug: 'zerotoone',
  langs: ['zh', 'en'],
  title: { zh: '從0到1', en: 'Zero to One' },
  author: { zh: 'Peter Thiel（彼得‧提爾）＆ Blake Masters', en: 'Peter Thiel with Blake Masters' },
  theme: {
    'bg-primary': '#0f0f14', 'bg-secondary': '#16161d', 'bg-card': '#1c1c25', 'bg-elevated': '#24242f',
    'text-primary': '#e9e8f0', 'text-secondary': '#a8a6b8', 'text-muted': '#76748a',
    'accent': '#8b7cf0', 'accent-light': '#a99bf7', 'accent-glow': 'rgba(139,124,240,0.32)',
    'rose': '#e0728f', 'jade': '#5ec2a0', 'blue': '#5f8fd8', 'gold': '#d3b25a',
    'border': 'rgba(139,124,240,0.16)',
    atmosphere: { fall: 14, streak: 4, fallRadius: '50%' },
    dayMode: { 'bg-primary': '#eeecf6', 'bg-secondary': '#e3e0f0', 'bg-card': '#fbfbfe', 'bg-elevated': '#f1eff9', 'text-primary': '#221f33', 'text-secondary': '#454159', 'text-muted': '#75718a', 'border': 'rgba(139,124,240,0.24)' }
  },
  cover: {
    seal: '1',
    subtitle: { zh: '打造未來的祕密', en: 'Notes on Building the Future' },
    desc: { zh: '複製別人，是從 1 到 n；<br>創造新事物，才是從 0 到 1。', en: 'Copying others takes the world from 1 to n;<br>creating the new takes it from 0 to 1.' }
  },
  musicPrompt: { zh: '準備好想像一個嶄新的未來，<br>是否播放一段背景音樂？', en: 'Ready to imagine a brand-new future —<br>shall we play some music?' },
  labels: {
    nav: { characters: { zh: '概念譜', en: 'Concepts' }, timeline: { zh: '論證軸', en: 'The Argument' } },
    headers: { characters: { zh: '核心概念關係圖', en: 'Map of Core Concepts' }, timeline: { zh: '全書的論證推進', en: 'How the Argument Builds' } },
    subheads: { characters: { zh: '點擊概念卡或關係圖，看「壟斷／秘密／冪次法則」如何環環相扣', en: 'Click a concept card or the map to see how monopoly, secrets, and the power law interlock' }, timeline: { zh: '全書的論證推進，與提爾親身實戰的對照', en: 'The book’s argument, set against Thiel’s own practice' } },
    timelineTypes: { history: { zh: '科技與時代', en: 'The Era' }, novel: { zh: '全書論證', en: 'The Argument' }, character: { zh: '提爾的實戰', en: 'Thiel in Practice' } },
    charDetail: { intro: { zh: '概念說明', en: 'The Idea' }, analysis: { zh: '怎麼運用', en: 'How to Use It' }, related: { zh: '相關概念', en: 'Related Concepts' }, tags: { zh: '關鍵詞', en: 'Keywords' }, empty: '—' },
    legend: { lead: { zh: '核心引擎', en: 'Core Engine' }, major: { zh: '重要概念', en: 'Key Concept' }, minor: { zh: '延伸概念', en: 'Extension' }, edge: { zh: '概念關聯', en: 'Conceptual Link' } }
  },
  intro: {
    subtitle: { zh: '在閱讀之前，先掌握這套「創造未來」的逆向思考', en: 'Before you read, grasp this contrarian playbook for building the future' },
    author: {
      name: { zh: 'Peter Thiel（彼得‧提爾）', en: 'Peter Thiel' },
      portrait: { zh: '1', en: '1' },
      years: { zh: '1967 —　創業家、投資人', en: '1967 —　Entrepreneur and investor' },
      bio: { zh: '矽谷最具影響力也最具爭議的思想家之一。共同創辦線上支付公司 PayPal，是 Facebook 的第一位外部投資人，並創立創投基金 Founders Fund 與大數據公司 Palantir。所謂「PayPal 幫」——一群後來各自打造出重量級公司的舊同事——多出自他麾下。《從0到1》(2014) 源於他在史丹佛開的創業課，由學生 Blake Masters 的筆記整理而成，把他對壟斷、秘密與未來的逆向思考，濃縮成一本薄而銳利的創業聖經。', en: 'One of Silicon Valley’s most influential and most controversial thinkers. He co-founded the online-payments company PayPal, was Facebook’s first outside investor, and founded the venture fund Founders Fund and the data company Palantir. The so-called “PayPal Mafia” — a group of former colleagues who each went on to build major companies — largely came from his orbit. Zero to One (2014) grew out of a startup course he taught at Stanford, drawn from student Blake Masters’ notes, distilling his contrarian thinking on monopoly, secrets, and the future into a thin, sharp bible for founders.' }
    },
    cards: [
      { icon: '🚀', title: { zh: '核心命題', en: 'The Core Question' }, text: { zh: '真正的進步不是把既有的東西做更多（從1到n、複製、全球化），而是創造前所未有的新事物（從0到1、垂直創新）。未來，藏在那些還沒有人做過的事情裡。', en: 'Real progress is not doing more of what already exists (1 to n — copying, globalization), but creating what has never existed (0 to 1 — vertical innovation). The future hides in the things no one has done yet.' } },
      { icon: '👑', title: { zh: '最反直覺的一課', en: 'Its Most Counterintuitive Lesson' }, text: { zh: '「競爭是留給輸家的。」完全競爭會把利潤磨到歸零；值得追求的是靠獨特價值贏得的「創新式壟斷」——那才養得起長期的創新與最好的人才。', en: '“Competition is for losers.” Perfect competition grinds profit to zero; what’s worth pursuing is a creative monopoly earned through unique value — the only thing that can fund long-term innovation and the best people.' } },
      { icon: '🔑', title: { zh: '起點是一個秘密', en: 'It Starts with a Secret' }, text: { zh: '每家偉大公司都建立在一個別人還沒看見的「秘密」——一個很少人同意、卻真實的逆向真相之上。提爾的招牌面試題就是：「有什麼重要的真相，是很少人同意你的？」', en: 'Every great company is built on a secret — a contrarian truth that few agree with yet is real. Thiel’s signature interview question is exactly this: “What important truth do very few people agree with you on?”' } },
      { icon: '🧭', title: { zh: '閱讀建議', en: 'How to Read' }, text: { zh: '先看「概念譜」抓住從0到1、壟斷、秘密、冪次法則，再對照「論證軸」看全書如何推進，然後逐章讀論點。這是一本薄書，但每一章都值得停下來想。', en: 'Start with the Concepts map to grasp zero-to-one, monopoly, secrets, and the power law; read against the Argument timeline for how the book builds; then work through the chapters. It is a thin book, but every chapter is worth pausing over.' } }
    ],
    guide: [
      { h: { zh: '先抓核心引擎', en: 'Grasp the core engines first' }, p: { zh: '在「概念譜」認清「從0到1」這台總引擎，以及壟斷、秘密、冪次法則、明確的樂觀如何互相支撐。', en: 'In the Concepts map, get the master engine (zero to one) and how monopoly, secrets, the power law, and definite optimism support one another.' } },
      { h: { zh: '跟著論證推進讀', en: 'Follow the argument' }, p: { zh: '打開「論證軸」，把全書的論點推進與提爾親身的 PayPal／Palantir 實戰並排看，先掌握大結構。', en: 'Open the Argument timeline and set the book’s progression beside Thiel’s own PayPal/Palantir practice — get the big structure first.' } },
      { h: { zh: '逐章拆論點', en: 'Unpack each argument' }, p: { zh: '在「閱讀」模組逐章讀論點重述，留意每章的「核心論點→論證→實例→啟示」。用「札記」記下你想挑戰或套用的地方。', en: 'In the Reading module, work through the retold arguments, watching each chapter’s claim → argument → example → lesson. Use Notes for what you’d challenge or apply.' } },
      { h: { zh: '用「七個問題」檢驗', en: 'Test with the Seven Questions' }, p: { zh: '讀到第十三章的「七個問題」（工程、時機、壟斷、人才、通路、持久、秘密），拿它去檢驗你手邊的任何點子或事業。', en: 'When you reach the Seven Questions in Chapter 13 (engineering, timing, monopoly, people, distribution, durability, secret), use them to test any idea or business you have in hand.' } },
      { h: { zh: '對照心得與自省', en: 'Compare with the review, then reflect' }, p: { zh: '可讀附錄裡站長自己的心得（署名 翰林書僮），再到「金句」收藏打中你的句子，在「札記」寫下你自己的那個「秘密」。', en: 'Read the site owner’s own review in the appendix (signed Kun Han Le), collect the lines that hit home in Quotes, and write down your own “secret” in Notes.' } }
    ]
  },
  families: [
    { id: 'future', label: { zh: '未來與進步', en: 'Future & Progress' } },
    { id: 'monopoly', label: { zh: '壟斷的科學', en: 'The Science of Monopoly' } },
    { id: 'building', label: { zh: '打造公司', en: 'Building the Company' } }
  ],
  timelineSubtitle: { zh: '從一個逆向的問題，到一套創造未來的方法', en: 'From one contrarian question to a method for building the future' },
  graph: {
    title: { zh: '— 從0到1 · 核心概念關係圖 —', en: '— Zero to One · A Map of Core Concepts —' },
    nodes: [
      { id: 'zerotoone',   label: { zh: '從0到1', en: 'Zero to One' },           x: 400, y: 235, tier: 'lead',  color: '#8b7cf0' },
      { id: 'monopoly',    label: { zh: '創新式壟斷', en: 'Creative Monopoly' },   x: 400, y: 100, tier: 'major', color: '#d3b25a' },
      { id: 'competition', label: { zh: '競爭的意識形態', en: 'Ideology of Competition' }, x: 205, y: 135, tier: 'major', color: '#e0728f' },
      { id: 'secret',      label: { zh: '秘密', en: 'Secrets' },                   x: 605, y: 135, tier: 'major', color: '#5ec2a0' },
      { id: 'powerlaw',    label: { zh: '冪次法則', en: 'The Power Law' },         x: 655, y: 258, tier: 'major', color: '#5f8fd8' },
      { id: 'definite',    label: { zh: '明確的樂觀', en: 'Definite Optimism' },   x: 160, y: 270, tier: 'major', color: '#5ec2a0' },
      { id: 'lastmover',   label: { zh: '最後行動者優勢', en: 'Last Mover Advantage' }, x: 520, y: 372, tier: 'minor', color: '#a8a6b8' },
      { id: 'distribution',label: { zh: '銷售與通路', en: 'Distribution' },        x: 360, y: 402, tier: 'minor', color: '#a8a6b8' },
      { id: 'foundation',  label: { zh: '基礎與團隊', en: 'Foundations' },         x: 665, y: 378, tier: 'minor', color: '#a8a6b8' },
      { id: 'sevenq',      label: { zh: '七個問題', en: 'The Seven Questions' },    x: 702, y: 182, tier: 'minor', color: '#a8a6b8' },
      { id: 'complement',  label: { zh: '人＋機器', en: 'Man + Machine' },         x: 108, y: 190, tier: 'minor', color: '#a8a6b8' },
      { id: 'founder',     label: { zh: '創辦人的弔詭', en: 'Founder’s Paradox' }, x: 235, y: 378, tier: 'minor', color: '#a8a6b8' }
    ],
    edges: [
      { from: 'zerotoone', to: 'monopoly', kind: 'family' },
      { from: 'zerotoone', to: 'definite', kind: 'family' },
      { from: 'zerotoone', to: 'complement', kind: 'love' },
      { from: 'zerotoone', to: 'founder', kind: 'family' },
      { from: 'monopoly', to: 'competition', kind: 'rivalry' },
      { from: 'monopoly', to: 'lastmover', kind: 'love' },
      { from: 'monopoly', to: 'secret', kind: 'love' },
      { from: 'monopoly', to: 'distribution', kind: 'love' },
      { from: 'monopoly', to: 'sevenq', kind: 'love' },
      { from: 'secret', to: 'powerlaw', kind: 'love' },
      { from: 'powerlaw', to: 'definite', kind: 'love' },
      { from: 'foundation', to: 'founder', kind: 'love' }
    ]
  },
  footer: {
    quote: { zh: '「競爭是留給輸家的。」', en: '“Competition is for losers.”' },
    tagline: { zh: '從0到1 · 沉浸式閱讀 · 創造新事物，而非複製既有', en: 'Zero to One · Immersive Reading · Create the new, don’t copy the old' }
  }
};

const S1 = { zh: '卷一 · 未來與進步', en: 'Part One · Future & Progress' };
const S2 = { zh: '卷二 · 壟斷的科學', en: 'Part Two · The Science of Monopoly' };
const S3 = { zh: '卷三 · 秘密與組織', en: 'Part Three · Secrets & Organization' };
const S4 = { zh: '卷四 · 科技與創辦人', en: 'Part Four · Technology & the Founder' };
const SA = { zh: '附錄 · 讀者心得', en: 'Appendix · Reader’s Review' };

const CHAPTERS = [
  { id: 1,  group: S1, title: { zh: '未來的挑戰', en: 'The Challenge of the Future' }, pages: '',
    reflectQ: { zh: '「有什麼重要的真相，是很少人同意你的？」——請認真試答這個問題。你的答案，可能就是一個從0到1的起點。', en: '“What important truth do very few people agree with you on?” — try to answer it seriously. Your answer may be the seed of a zero-to-one.' } },
  { id: 2,  group: S1, title: { zh: '像1999年那樣狂歡', en: 'Party Like It’s 1999' }, pages: '',
    reflectQ: { zh: '泡沫之後大家學到的「戒律」，提爾說全錯。你有沒有因為一次失敗，記下了某個其實不該學的教訓？', en: 'The “rules” everyone learned after the bubble, Thiel says, are all wrong. Have you drawn a lesson from a failure that you perhaps shouldn’t have learned?' } },
  { id: 3,  group: S2, title: { zh: '快樂的公司都不一樣', en: 'All Happy Companies Are Different' }, pages: '',
    reflectQ: { zh: '「競爭是留給輸家的。」在你的工作或產業裡，什麼是「靠獨特價值贏得的壟斷」，什麼只是流血的競爭？', en: '“Competition is for losers.” In your work or industry, what is a monopoly won through unique value — and what is just bloody competition?' } },
  { id: 4,  group: S2, title: { zh: '競爭的意識形態', en: 'The Ideology of Competition' }, pages: '',
    reflectQ: { zh: '你有沒有為了「贏過某個對手」，而投入其實不值得的一場仗？有時最好的一步，是離開。', en: 'Have you ever poured yourself into a fight not worth fighting, just to beat a rival? Sometimes the best move is to walk away.' } },
  { id: 5,  group: S2, title: { zh: '最後行動者優勢', en: 'Last Mover Advantage' }, pages: '',
    reflectQ: { zh: '一門好生意的價值，在於遙遠未來的現金流。你手上的事業，十年後還會有人需要嗎？靠什麼守住？', en: 'A good business is worth its cash flows far in the future. Will anyone still need your business in ten years — and what will keep it defended?' } },
  { id: 6,  group: S2, title: { zh: '你不是一張樂透彩券', en: 'You Are Not a Lottery Ticket' }, pages: '',
    reflectQ: { zh: '你把未來當成「可以規劃、動手打造」的東西，還是「碰運氣、等機會」？這個態度差別，決定了你能造出什麼。', en: 'Do you treat the future as something to plan and build, or as luck to wait for? That difference decides what you can create.' } },
  { id: 7,  group: S2, title: { zh: '跟著錢走', en: 'Follow the Money' }, pages: '',
    reflectQ: { zh: '冪次法則說：「選擇做什麼，遠比把事情做好更重要。」你現在最該狠狠專注的，是哪一件事？', en: 'The power law says: what you choose to do matters far more than doing it well. What is the one thing you should now focus on relentlessly?' } },
  { id: 8,  group: S3, title: { zh: '秘密', en: 'Secrets' }, pages: '',
    reflectQ: { zh: '這世界還有很多「秘密」沒被發掘。有沒有一個領域，是大家都覺得「早就沒搞頭了」、但你隱隱覺得還有東西？', en: 'The world still holds undiscovered secrets. Is there a field everyone thinks is “played out,” but where you sense something remains?' } },
  { id: 9,  group: S3, title: { zh: '基礎', en: 'Foundations' }, pages: '',
    reflectQ: { zh: '提爾說：開頭沒打好基礎的新創，後面補不回來。你正在啟動的事，一開始的「人」與「規則」對了嗎？', en: 'Thiel says a startup botched at its foundation can’t be fixed later. In what you’re starting, are the people and rules right from the very beginning?' } },
  { id: 10, group: S3, title: { zh: '幫派的運作', en: 'The Mechanics of Mafia' }, pages: '',
    reflectQ: { zh: '好團隊靠的不是福利，是使命與歸屬。你會為了什麼樣的「使命」，真心加入一個一無所有的團隊？', en: 'Great teams run on mission and belonging, not perks. For what kind of mission would you truly join a team that has nothing yet?' } },
  { id: 11, group: S3, title: { zh: '造出來，他們就會來嗎？', en: 'If You Build It, Will They Come?' }, pages: '',
    reflectQ: { zh: '「光靠卓越的銷售與通路，就能造出壟斷。」你是不是也低估了「怎麼賣」，以為好產品會自己說話？', en: '“Superior sales and distribution alone can create a monopoly.” Do you, too, underrate distribution, assuming a good product speaks for itself?' } },
  { id: 12, group: S4, title: { zh: '人與機器', en: 'Man and Machine' }, pages: '',
    reflectQ: { zh: '與其問「機器會不會取代人」，不如問「機器能怎麼補強人」。你的工作裡，人＋機器的最佳搭配會長什麼樣？', en: 'Rather than “will machines replace people,” ask “how can machines complement people.” In your work, what would the best man-plus-machine pairing look like?' } },
  { id: 13, group: S4, title: { zh: '綠色能源的迷思', en: 'Seeing Green' }, pages: '',
    reflectQ: { zh: '用「七個問題」（工程、時機、壟斷、人才、通路、持久、秘密）檢驗一個你熟悉的事業——它答得出幾題？', en: 'Test a business you know against the Seven Questions (engineering, timing, monopoly, people, distribution, durability, secret) — how many can it answer?' } },
  { id: 14, group: S4, title: { zh: '創辦人的弔詭', en: 'The Founder’s Paradox' }, pages: '',
    reflectQ: { zh: '創辦人往往極端又矛盾。我們是不是太容易先神化、再醜化一個創辦人？那份怪異，有沒有它的功能？', en: 'Founders are often extreme and contradictory. Do we too easily idolize then vilify them? Does their strangeness serve a function?' } },
  { id: 15, group: S4, title: { zh: '停滯或奇點', en: 'Stagnation or Singularity?' }, pages: '',
    reflectQ: { zh: '更好的未來不會自動降臨。在你自己的工作裡，有沒有一件事，你可以親手把它從0做到1？', en: 'A better future won’t arrive on its own. In your own work, is there one thing you could take, with your own hands, from zero to one?' } },
  { id: 16, group: SA, title: { zh: '給想創造未來的人', en: 'For Those Who Want to Build the Future' }, pages: '',
    reflectQ: { zh: '用站長的視角問自己：如果台灣要從「複製」走向「創造」，你所在的位置，能貢獻哪一個從0到1？', en: 'Ask yourself, in the reviewer’s spirit: if a place is to move from copying to creating, what one zero-to-one could you, where you stand, contribute?' } }
];

const CHARACTERS = [
  { id: 'zerotoone', name: { zh: '從0到1', en: 'Zero to One' }, family: 'future', role: { zh: '核心引擎', en: 'The Core Engine' }, icon: '🚀', color: '#8b7cf0',
    desc: { zh: '全書的總命題。進步有兩種：水平進步（從1到n）是複製既有、把成功方法推廣到全世界（全球化）；垂直進步（從0到1）是創造前所未有的新事物（科技創新）。真正的未來，屬於後者。', en: 'The book’s master proposition. Progress comes in two kinds: horizontal (1 to n) copies what works and spreads it across the world (globalization); vertical (0 to 1) creates what has never existed (technology). The real future belongs to the latter.' },
    analysis: { zh: '這個框架把「創新」講得極其清楚：做別人做過的事，再怎麼努力也只是從1到n；只有做出世界上還沒有的東西，才是從0到1。提爾提醒，複製容易、想像難，所以最有價值的公司往往做的是別人「看不到、也不相信」的事。全書其餘的概念——壟斷、秘密、冪次法則——都是為了回答同一個問題：如何真正地從0到1。', en: 'This frame makes “innovation” crystal clear: doing what others have done, however hard, is only 1 to n; only making what the world lacks is 0 to 1. Thiel notes that copying is easy and imagining is hard, so the most valuable companies often do what others “can’t see and don’t believe.” Every other concept in the book — monopoly, secrets, the power law — serves the same question: how to truly go from zero to one.' },
    tags: [ { zh: '垂直進步', en: 'Vertical progress' }, { zh: '創造新事物', en: 'Creating the new' }, { zh: '科技 vs 全球化', en: 'Technology vs. globalization' } ],
    related: ['monopoly', 'definite', 'founder'] },
  { id: 'monopoly', name: { zh: '創新式壟斷', en: 'Creative Monopoly' }, family: 'monopoly', role: { zh: '重要概念', en: 'Key Concept' }, icon: '👑', color: '#d3b25a',
    desc: { zh: '值得追求的不是打敗對手，而是好到沒有對手。靠獨特價值贏得的「創新式壟斷」——不是靠關係或違法——才有持續的高利潤，才養得起長期創新與最頂尖的人才。', en: 'What’s worth pursuing is not beating rivals but being so good you have none. A creative monopoly earned through unique value — not connections or lawbreaking — is what yields durable profit and can fund long-term innovation and the very best people.' },
    analysis: { zh: '提爾把「壟斷」翻轉成褒義：完全競爭下，價格被壓到成本、利潤歸零，大家忙著求生、沒有餘裕創新；唯有壟斷者才有本錢想長遠、對員工好、對世界好。他有句名言：「快樂的公司各不相同，每家都靠解決一個獨特問題贏得壟斷；失敗的公司都一樣，敗給了競爭。」而且公司都在說謊——壟斷者假裝自己在激烈競爭（怕被盯上），競爭者假裝自己獨一無二。', en: 'Thiel flips “monopoly” into a virtue: under perfect competition, prices fall to cost and profit vanishes; everyone scrambles to survive with no room to innovate. Only a monopolist can afford to think long term, treat employees well, and do good in the world. As he puts it: happy companies are all different — each wins a monopoly by solving a unique problem; failed companies are all alike — they lost to competition. And companies lie: monopolists pretend they face fierce competition (to avoid scrutiny), while the competitive pretend they’re unique.' },
    tags: [ { zh: '獨特價值', en: 'Unique value' }, { zh: '持續利潤', en: 'Durable profit' }, { zh: '別打紅海', en: 'Escape competition' } ],
    related: ['competition', 'secret', 'lastmover'] },
  { id: 'competition', name: { zh: '競爭的意識形態', en: 'The Ideology of Competition' }, family: 'monopoly', role: { zh: '重要概念', en: 'Key Concept' }, icon: '⚔️', color: '#e0728f',
    desc: { zh: '競爭被我們當成美德來崇拜，其實它具破壞性、不是價值的證明。陷進競爭的人會產生幻覺、看見不存在的機會、忙著模仿對手，最後把利潤和自己都磨掉。', en: 'We worship competition as a virtue, but it is destructive and no proof of value. Those trapped in it hallucinate opportunities that aren’t there, busy themselves imitating rivals, and grind away both their profits and themselves.' },
    analysis: { zh: '這是壟斷的反面教材。提爾認為，從學校到職場，我們被訓練成把「競爭」當成理所當然的好事——但激烈競爭往往只是「兩個高度相似的對手，為了微薄的差異流血」。競爭讓人失焦、失去獨立判斷。他的建議很反骨：與其在紅海裡纏鬥，不如問自己「這場仗值得打嗎」，有時最聰明的一步，就是直接離開。', en: 'This is the cautionary mirror of monopoly. Thiel argues that from school to work we are trained to treat competition as self-evidently good — but fierce competition is often just “two near-identical rivals bleeding over a trivial difference.” It blurs focus and erodes independent judgment. His contrarian advice: rather than grapple in a red ocean, ask whether the fight is worth fighting — sometimes the smartest move is simply to leave.' },
    tags: [ { zh: '別為競爭而競爭', en: 'Don’t compete for its own sake' }, { zh: '模仿的陷阱', en: 'The trap of imitation' } ],
    related: ['monopoly'] },
  { id: 'secret', name: { zh: '秘密', en: 'Secrets' }, family: 'monopoly', role: { zh: '重要概念', en: 'Key Concept' }, icon: '🔑', color: '#5ec2a0',
    desc: { zh: '每家偉大公司都建立在一個「秘密」——一個很少人同意、卻真實的逆向真相之上。世界並沒有把秘密用光；問題是多數人已經不再尋找。', en: 'Every great company is built on a secret — a contrarian truth few agree with yet that is real. The world hasn’t run out of secrets; the problem is that most people have stopped looking.' },
    analysis: { zh: '提爾把「秘密」放在全書的核心。他招牌的面試題就是：「有什麼重要的真相，是很少人同意你的？」——因為一個好的答案，往往就是一門好生意的起點。人們停止尋找秘密，是因為漸進主義、風險趨避、自滿，以及「世界很平」的錯覺（以為聰明人早就找光了）。他鼓勵去研究被忽略的領域、去問那些「被禁止或被隱藏」的問題——秘密，就藏在那裡。', en: 'Thiel places secrets at the book’s heart. His signature interview question — “What important truth do very few people agree with you on?” — matters because a good answer is often the start of a good business. People stop hunting for secrets out of incrementalism, risk-aversion, complacency, and the illusion that “the world is flat” (that smart people must have found everything already). He urges studying neglected fields and asking what is forbidden or hidden — that is where secrets hide.' },
    tags: [ { zh: '逆向真相', en: 'Contrarian truth' }, { zh: '逆向問題', en: 'The contrarian question' }, { zh: '別停止尋找', en: 'Keep looking' } ],
    related: ['monopoly', 'powerlaw'] },
  { id: 'powerlaw', name: { zh: '冪次法則', en: 'The Power Law' }, family: 'monopoly', role: { zh: '重要概念', en: 'Key Concept' }, icon: '📈', color: '#5f8fd8',
    desc: { zh: '報酬不是平均分布，而是極度傾斜：極少數的決定、投資、或公司，賺回的價值超過其餘全部的總和。這條規律，同時支配創投與人生。', en: 'Returns are not evenly distributed but wildly skewed: a tiny few of your decisions, investments, or companies return more than all the rest combined. This law governs both venture capital and life.' },
    analysis: { zh: '在創投裡，冪次法則意味著：一支基金的報酬，往往來自一兩家「賺回整支基金」的公司，其餘幾乎歸零——所以創投只能投「有機會成為那少數」的公司。而它的人生版更犀利（站長也特別記下）：「選擇做什麼，遠比把事情做好更重要。」學校教我們把每件事都做好、面面俱到，但冪次法則說——狠狠專注在你最能造成巨大差異的那一件事上。', en: 'In venture capital, the power law means a fund’s returns usually come from one or two companies that “return the whole fund,” while the rest approach zero — so VCs can only invest in companies with a shot at being that few. Its life version is even sharper (the reviewer noted it too): what you choose to do matters far more than doing it well. School teaches us to be well-rounded and do everything competently, but the power law says: focus relentlessly on the one thing where you can make an outsized difference.' },
    tags: [ { zh: '極度傾斜', en: 'Wildly skewed' }, { zh: '選擇 > 執行', en: 'Choice over effort' }, { zh: '狠狠專注', en: 'Relentless focus' } ],
    related: ['secret', 'definite'] },
  { id: 'definite', name: { zh: '明確的樂觀', en: 'Definite Optimism' }, family: 'future', role: { zh: '重要概念', en: 'Key Concept' }, icon: '🗺️', color: '#5ec2a0',
    desc: { zh: '對未來的態度分四象限（明確/不明確 × 樂觀/悲觀）。推動真正進步的，是「明確的樂觀」：相信未來會更好，而且你能規劃、動手把它造出來。', en: 'Attitudes to the future fall into four quadrants (definite/indefinite × optimism/pessimism). What drives real progress is definite optimism: believing the future will be better and that you can plan and build it.' },
    analysis: { zh: '提爾診斷現代西方陷入「不明確的樂觀」——期待明天更好，卻沒有具體計畫，只想在既有的東西上重新洗牌。但偉大的建設（登月、造城、蓋公司）都來自「明確的樂觀」：先有清晰的願景，再一步步實現。他因此反對把成功歸給運氣——「你不是一張樂透彩券」。他有句名言：「新創，是你能擁有明確掌控的最大事業。」', en: 'Thiel diagnoses the modern West as stuck in indefinite optimism — expecting a better tomorrow with no concrete plan, only reshuffling what already exists. But great building (the moon landing, new cities, great companies) comes from definite optimism: a clear vision, then realized step by step. Hence he rejects crediting success to luck — “you are not a lottery ticket.” As he says: a startup is the largest endeavor over which you can have definite mastery.' },
    tags: [ { zh: '規劃勝過運氣', en: 'Planning over luck' }, { zh: '清晰的願景', en: 'A clear vision' }, { zh: '你不是樂透', en: 'Not a lottery ticket' } ],
    related: ['zerotoone', 'powerlaw'] },
  { id: 'lastmover', name: { zh: '最後行動者優勢', en: 'Last Mover Advantage' }, family: 'monopoly', role: { zh: '延伸概念', en: 'Extension' }, icon: '🏁', color: '#a8a6b8',
    desc: { zh: '真正重要的不是「第一個做」，而是「最後一個做出重大突破」，然後享有多年的壟斷利潤。價值來自持久性——能守住未來現金流的生意，才是好生意。', en: 'What matters is not being first, but making the last great development in a market and then enjoying years of monopoly profit. Value comes from durability — a business is good only if it can defend its future cash flows.' },
    analysis: { zh: '提爾列出壟斷得以持久的四個特徵：專屬技術（最好比對手好上10倍）、網路效應（越多人用越好用）、規模經濟、以及品牌。建立的路徑是「先小後大」——先在一個小到能獨佔的利基市場稱王，再往相鄰市場擴張。與其急著當第一個進場的人，不如把「守得住」放在心上。', en: 'Thiel lists four traits that make a monopoly durable: proprietary technology (ideally 10× better than rivals), network effects (more users make it more useful), economies of scale, and brand. The path is “small then large” — first dominate a niche small enough to own, then expand into adjacent markets. Rather than rush to be first in, keep “can it be defended” front of mind.' },
    tags: [ { zh: '持久性', en: 'Durability' }, { zh: '四個特徵', en: 'Four traits' }, { zh: '先小後大', en: 'Small then large' } ],
    related: ['monopoly'] },
  { id: 'distribution', name: { zh: '銷售與通路', en: 'Distribution' }, family: 'building', role: { zh: '延伸概念', en: 'Extension' }, icon: '📣', color: '#a8a6b8',
    desc: { zh: '「光靠卓越的銷售與通路，即使產品沒有差異化，也能造出壟斷。」銷售是隱形的，常被工程師與創業者嚴重低估——好產品不會自己說話。', en: '“Superior sales and distribution by itself can create a monopoly, even with no product differentiation.” Sales is invisible and badly underrated by engineers and founders — a good product does not speak for itself.' },
    analysis: { zh: '提爾反覆強調：東西再好，賣不出去也是零。最厲害的銷售往往看不出是在銷售，所以人們才會低估它。他給了一條硬指標：顧客的終身價值(CLV)必須大於獲取這個顧客的成本(CAC)。銷售有一整條光譜——從一單上億的複雜銷售，到病毒式傳播——每個創業者都得找到適合自己產品的那一段。而最誠實的認知是：其實每個人都在銷售。', en: 'Thiel insists that however good the product, if it doesn’t sell it’s worth zero. The best selling doesn’t look like selling, which is exactly why people underrate it. He gives one hard rule: a customer’s lifetime value (CLV) must exceed the cost to acquire them (CAC). Sales spans a spectrum — from complex deals worth millions to viral spread — and every founder must find the segment that fits their product. The honest realization: everyone is a salesperson.' },
    tags: [ { zh: '隱形的銷售', en: 'Invisible sales' }, { zh: 'CLV > CAC' }, { zh: '人人都在賣', en: 'Everyone sells' } ],
    related: ['monopoly'] },
  { id: 'foundation', name: { zh: '基礎與團隊', en: 'Foundations' }, family: 'building', role: { zh: '延伸概念', en: 'Extension' }, icon: '🧱', color: '#a8a6b8',
    desc: { zh: '「提爾法則」：開頭沒打好基礎的新創，後面無法修補。慎選共同創辦人（關係比履歷重要）、董事會愈小愈好、人要全職且利益一致——少給現金、多用股權綁向未來。', en: 'Thiel’s law: a startup botched at its foundation cannot be fixed later. Choose co-founders carefully (relationships matter more than résumés), keep the board small, keep people full-time and aligned — pay little cash and use equity to bind everyone to the future.' },
    analysis: { zh: '提爾把「開頭」看得極重：共同創辦人之間的關係，就像婚姻，一開始不對，日後會拖垮整家公司。他也把「所有權／經營權／控制權」講清楚，主張董事會控制在三人左右、避免人多嘴雜；並用「現金換股權」的設計，讓每個核心成員都把注意力放在把餅做大、而不是眼前的薪水。基礎打對，後面才有得談。', en: 'Thiel treats the beginning as decisive: the relationship between co-founders is like a marriage — if it starts wrong, it will later drag the whole company down. He clarifies ownership, possession, and control, argues for a board of around three to avoid a crowd of voices, and uses a “less cash, more equity” design so every core member focuses on growing the pie rather than this month’s salary. Get the foundation right, and everything else becomes possible.' },
    tags: [ { zh: '提爾法則', en: 'Thiel’s law' }, { zh: '慎選共同創辦人', en: 'Choose co-founders well' }, { zh: '股權綁未來', en: 'Equity binds the future' } ],
    related: ['founder'] },
  { id: 'sevenq', name: { zh: '七個問題', en: 'The Seven Questions' }, family: 'monopoly', role: { zh: '延伸概念', en: 'Extension' }, icon: '✅', color: '#a8a6b8',
    desc: { zh: '每個事業都必須回答的七道題：工程、時機、壟斷、人才、通路、持久、秘密。答得越齊，成功機率越高；缺太多題，多半會失敗。', en: 'Seven questions every business must answer: engineering, timing, monopoly, people, distribution, durability, secret. The more you can answer, the better your odds; miss too many and you will likely fail.' },
    analysis: { zh: '這是全書最實用的檢查表。七題分別問：技術是否有突破性的10倍好（工程）？現在是不是對的時機（時機）？能不能先占一個小市場（壟斷）？團隊對不對（人才）？賣得出去嗎（通路）？守得住嗎（持久）？有沒有別人沒看見的洞見（秘密）？提爾用特斯拉「七題全過」對照太陽能泡沫公司「多半答不好」，說明差別就在這裡。拿它去檢驗任何點子，會非常清醒。', en: 'This is the book’s most practical checklist. The seven ask: is the technology a breakthrough 10× better (engineering)? Is now the right time (timing)? Can you start by owning a small market (monopoly)? Is the team right (people)? Can you sell it (distribution)? Can you defend it (durability)? Do you have an insight others lack (secret)? Thiel contrasts Tesla, which answered all seven, with the solar-bubble companies that mostly couldn’t. Run any idea through it and you’ll think much more clearly.' },
    tags: [ { zh: '檢查表', en: 'The checklist' }, { zh: 'Tesla vs 太陽能泡沫', en: 'Tesla vs. the solar bubble' } ],
    related: ['monopoly'] },
  { id: 'complement', name: { zh: '人＋機器', en: 'Man + Machine' }, family: 'future', role: { zh: '延伸概念', en: 'Extension' }, icon: '🤖', color: '#a8a6b8',
    desc: { zh: '科技應是人的「互補」而非「替代」。電腦擅長的和人擅長的不同，最好的事業把兩者配對——用機器的計算，放大人的判斷。', en: 'Technology should complement humans, not substitute for them. Computers are good at different things than people; the best businesses pair the two — using machine computation to amplify human judgment.' },
    analysis: { zh: '提爾用這一課回擊「機器要取代人類」的恐慌。他區分兩股力量：全球化是「替代」——大家爭搶同樣的資源、彼此競爭；科技是「互補」——電腦處理海量資料、人做最終判斷，兩者相加創造出單靠任一方都做不到的價值（他自己的 Palantir 正是這種思路）。所以與其問「機器會不會取代我」，不如問「我能怎麼和機器搭配」。', en: 'Thiel uses this to answer the panic that machines will replace humans. He distinguishes two forces: globalization is substitution — everyone competing for the same resources; technology is complementarity — computers crunch vast data while people make the final judgment, and together they create value neither could alone (his own Palantir embodies this). So rather than “will machines replace me,” ask “how can I pair with them.”' },
    tags: [ { zh: '互補而非替代', en: 'Complement, not substitute' }, { zh: '全球化 vs 科技', en: 'Globalization vs. technology' } ],
    related: ['zerotoone'] },
  { id: 'founder', name: { zh: '創辦人的弔詭', en: 'The Founder’s Paradox' }, family: 'building', role: { zh: '延伸概念', en: 'Extension' }, icon: '🎭', color: '#a8a6b8',
    desc: { zh: '創辦人往往是極端又矛盾的人物——既是圈內人也是局外人、既強又弱、被追捧也被醜化。這種鮮明與怪異，不是缺點，反而是他們能帶領公司從0到1的原因。', en: 'Founders are often extreme, paradoxical figures — at once insiders and outsiders, strong and weak, idolized and vilified. This vividness and strangeness is not a flaw but part of why they can lead a company from zero to one.' },
    analysis: { zh: '提爾觀察到，創辦人的特質也服從一種「冪次」——他們常常比一般人更極端，兼具看似矛盾的兩面。社會對他們的態度也在兩極間擺盪：先造神、後毀神。但他提醒，一家公司需要一個敢於與眾不同、能扛起獨特願景的人；與其急著把創辦人拉回「正常」，不如理解那份怪異的功能——正是它，讓創造新事物成為可能。', en: 'Thiel observes that founders’ traits also follow a kind of power law — they are often more extreme than ordinary people, holding seemingly contradictory sides at once. Society swings between poles too: first idolizing, then destroying them. But he cautions that a company needs someone willing to be different and to carry a singular vision; rather than rushing to make a founder “normal,” understand the function of that strangeness — it is precisely what makes creating the new possible.' },
    tags: [ { zh: '極端與矛盾', en: 'Extreme and paradoxical' }, { zh: '別造神也別毀神', en: 'Neither idol nor scapegoat' } ],
    related: ['zerotoone', 'foundation'] }
];

const TIMELINE_DATA = [
  { year: { zh: '起手式', en: 'The Opening' }, event: { zh: '逆向問題：很少人同意你的重要真相', en: 'The contrarian question' }, novel: { zh: '全書從一道面試題開始：「有什麼重要的真相，是很少人同意你的？」——好的答案，往往就是一門好生意的起點。', en: 'The book opens with an interview question: “What important truth do very few people agree with you on?” A good answer is often the start of a good business.' }, type: 'novel' },
  { year: { zh: '兩種進步', en: 'Two Kinds of Progress' }, event: { zh: '從0到1 vs 從1到n', en: 'Zero to one vs. one to n' }, novel: { zh: '水平進步是複製既有（全球化），垂直進步是創造新事物（科技）。真正的未來，屬於後者。', en: 'Horizontal progress copies what works (globalization); vertical progress creates the new (technology). The real future belongs to the latter.' }, type: 'novel' },
  { year: { zh: '1999–2000', en: '1999–2000' }, event: { zh: '網路泡沫與它「錯誤的教訓」', en: 'The dot-com bubble and its “wrong lessons”' }, novel: { zh: '泡沫破滅後，創業圈學到四條戒律——提爾說全錯，並逐條給出反向的真相。', en: 'After the crash, the startup world learned four rules — Thiel says all four are wrong, and gives the contrarian truth for each.' }, type: 'history' },
  { year: { zh: '壟斷', en: 'Monopoly' }, event: { zh: '壟斷 vs 完全競爭', en: 'Monopoly vs. perfect competition' }, novel: { zh: '競爭把利潤磨到歸零；靠獨特價值贏得的創新式壟斷，才有本錢做長遠的事。「競爭是留給輸家的。」', en: 'Competition grinds profit to zero; a creative monopoly earned through unique value can afford to think long term. “Competition is for losers.”' }, type: 'novel' },
  { year: { zh: '冪次法則', en: 'The Power Law' }, event: { zh: '極少數決定了全部', en: 'A tiny few decide everything' }, novel: { zh: '報酬極度傾斜：少數決定、公司、投資，賺回其餘全部的總和。選擇做什麼，遠比把事做好重要。', en: 'Returns are wildly skewed: a few decisions, companies, investments return more than all the rest. What you choose matters more than doing it well.' }, type: 'novel' },
  { year: { zh: '明確的樂觀', en: 'Definite Optimism' }, event: { zh: '規劃勝過運氣', en: 'Planning beats luck' }, novel: { zh: '相信未來會更好、而且能親手規劃打造——你不是一張樂透彩券。這是一切建設的心態基礎。', en: 'Believe the future will be better and that you can plan and build it — you are not a lottery ticket. This is the mindset behind all building.' }, type: 'novel' },
  { year: { zh: '1998', en: '1998' }, event: { zh: '提爾共同創辦 PayPal', en: 'Thiel co-founds PayPal' }, novel: { zh: '提爾把「明確的樂觀」化為實戰，投入線上支付這個當時充滿未知的新戰場。', en: 'Thiel turns definite optimism into practice, plunging into the then-uncertain new field of online payments.' }, type: 'character' },
  { year: { zh: '2002', en: '2002' }, event: { zh: 'PayPal 賣給 eBay，「PayPal 幫」誕生', en: 'PayPal is sold to eBay; the “PayPal Mafia” is born' }, novel: { zh: '一群舊同事日後各自打造出重量級公司——文化與人，決定了一家新創能走多遠。', en: 'A group of former colleagues each go on to build major companies — culture and people decide how far a startup can go.' }, type: 'character' },
  { year: { zh: '2004 起', en: 'From 2004' }, event: { zh: 'Facebook 首位外部投資人、Palantir、Founders Fund', en: 'First outside investor in Facebook; Palantir; Founders Fund' }, novel: { zh: '提爾以投資人與創辦人的身分，反覆下注在「別人還沒看見的秘密」上。', en: 'As investor and founder, Thiel repeatedly bets on “secrets others have not yet seen.”' }, type: 'character' },
  { year: { zh: '2012', en: '2012' }, event: { zh: '史丹佛創業課 CS183', en: 'The Stanford startup course, CS183' }, novel: { zh: '提爾開課講創業，學生 Blake Masters 的課堂筆記在網路上瘋傳，成了本書的雛形。', en: 'Thiel teaches a course on startups; student Blake Masters’ class notes go viral online and become the seed of this book.' }, type: 'history' },
  { year: { zh: '2014', en: '2014' }, event: { zh: '《從0到1》出版', en: 'Zero to One is published' }, novel: { zh: '課堂筆記淬煉成一本薄而銳利的創業聖經——你正在讀的這本書。', en: 'The class notes are refined into a thin, sharp bible for founders — the very book you are reading.' }, type: 'history' }
];

const THEMES = [
  { id: 'vertical', icon: '🚀', title: { zh: '從0到1：垂直進步', en: 'Zero to One: Vertical Progress' }, subtitle: { zh: '創造新事物，而非複製既有', en: 'Create the new, don’t copy the old' }, color: '#8b7cf0',
    intro: { zh: '全書的地基：進步有兩種，只有一種通往未來。', en: 'The book’s foundation: there are two kinds of progress, but only one leads to the future.' },
    body: { zh: '<p>水平進步是「從1到n」——把已經成功的東西複製、推廣到世界各地，這就是全球化。垂直進步是「從0到1」——做出世界上還沒有的新事物，這來自科技與創造。前者容易想像，後者難；但只有後者，才真正把人類往前推。</p><p>提爾提醒：最有價值的公司，往往在做別人「看不到、也不相信」的事。與其在別人開好的路上再跑一次，不如去問——有什麼是還沒有人做過的？</p><div class="theme-quote">「複製別人是從1到n，創造新事物才是從0到1。」</div>', en: '<p>Horizontal progress is “1 to n” — copying what already works and spreading it around the world; this is globalization. Vertical progress is “0 to 1” — making what the world lacks, which comes from technology and creation. The former is easy to imagine, the latter hard; but only the latter truly moves humanity forward.</p><p>Thiel reminds us that the most valuable companies often do what others “can’t see and don’t believe.” Rather than run again down a road others have paved, ask: what has no one done yet?</p><div class="theme-quote">“Copying others is 1 to n; creating the new is 0 to 1.”</div>' },
    chapters: ['1', '12', '15'] },
  { id: 'monopoly', icon: '👑', title: { zh: '壟斷，而非競爭', en: 'Monopoly, Not Competition' }, subtitle: { zh: '好到沒有對手，勝過打敗對手', en: 'Being incomparable beats beating rivals' }, color: '#d3b25a',
    intro: { zh: '提爾把「壟斷」翻轉成褒義，把「競爭」看作陷阱。', en: 'Thiel flips “monopoly” into a virtue and treats “competition” as a trap.' },
    body: { zh: '<p>完全競爭下，價格被壓到成本、利潤歸零，每個人都忙著求生、沒有餘裕創新或善待員工。唯有靠獨特價值贏得的「創新式壟斷」，才有本錢想長遠、對世界好。所以他說：值得追求的不是打敗對手，而是好到根本沒有對手。</p><p>而競爭常常是一種幻覺——兩個高度相似的對手，為了微不足道的差異流血廝殺，還以為那是價值。有時最聰明的一步，是問「這場仗值得打嗎」，然後離開。</p><div class="theme-quote">「競爭是留給輸家的。」</div>', en: '<p>Under perfect competition, prices fall to cost and profit vanishes; everyone scrambles to survive with no room to innovate or treat people well. Only a creative monopoly, earned through unique value, can afford to think long term and do good in the world. So he says: what’s worth pursuing is not beating rivals but being so good you have none.</p><p>Competition is often an illusion — two near-identical rivals bleeding over a trivial difference, mistaking it for value. Sometimes the smartest move is to ask “is this fight worth it,” and walk away.</p><div class="theme-quote">“Competition is for losers.”</div>' },
    chapters: ['3', '4', '5'] },
  { id: 'secret', icon: '🔑', title: { zh: '秘密與逆向思考', en: 'Secrets & Contrarian Thinking' }, subtitle: { zh: '偉大的事業，始於一個逆向的真相', en: 'Great businesses begin with a contrarian truth' }, color: '#5ec2a0',
    intro: { zh: '每家偉大公司，都藏著一個別人還沒看見的秘密。', en: 'Every great company hides a secret others have not yet seen.' },
    body: { zh: '<p>提爾的招牌面試題是：「有什麼重要的真相，是很少人同意你的？」——因為一個好的答案，往往就是一門好生意的起點。世界並沒有把秘密用光，是多數人已經不再尋找：因為漸進主義、風險趨避、自滿，以及「聰明人早就找光了」的錯覺。</p><p>他鼓勵去研究被忽略的角落、去問那些「被禁止或被隱藏」的問題。獨立思考、敢於相信與眾不同的真相，是一切創造的前提。</p><div class="theme-quote">「有什麼重要的真相，是很少人同意你的？」</div>', en: '<p>Thiel’s signature interview question is: “What important truth do very few people agree with you on?” — because a good answer is often the start of a good business. The world hasn’t run out of secrets; most people have simply stopped looking, out of incrementalism, risk-aversion, complacency, and the illusion that “smart people found everything already.”</p><p>He urges studying neglected corners and asking what is forbidden or hidden. Thinking for yourself, daring to believe a contrarian truth, is the precondition of all creation.</p><div class="theme-quote">“What important truth do very few people agree with you on?”</div>' },
    chapters: ['6', '8'] },
  { id: 'powerlaw', icon: '📈', title: { zh: '冪次法則', en: 'The Power Law' }, subtitle: { zh: '選擇做什麼，勝過把事情做好', en: 'What you choose beats how well you do it' }, color: '#5f8fd8',
    intro: { zh: '極少數的決定，重要性超過其餘全部的總和。', en: 'A tiny few decisions matter more than all the rest combined.' },
    body: { zh: '<p>報酬不是平均分布，而是極度傾斜：在創投裡，一支基金的回報往往來自一兩家「賺回整支基金」的公司；其餘幾乎歸零。所以創投只能投「有機會成為那少數」的公司。</p><p>它的人生版更犀利——學校教我們把每件事都做好、追求面面俱到，但冪次法則說：真正拉開差距的，是「你選擇把力氣押在哪」。與其平均分散，不如狠狠專注在你最能造成巨大差異的那一件事。</p><div class="theme-quote">「選擇做什麼，遠比把事情做好更重要。」</div>', en: '<p>Returns are not evenly distributed but wildly skewed: in venture capital, a fund’s returns usually come from one or two companies that “return the whole fund,” while the rest approach zero. So VCs can only invest in companies with a shot at being that few.</p><p>Its life version is sharper — school teaches us to be well-rounded and do everything competently, but the power law says: what really opens a gap is where you choose to place your effort. Rather than spread thin, focus relentlessly on the one thing where you can make an outsized difference.</p><div class="theme-quote">“What you choose to do matters far more than doing it well.”</div>' },
    chapters: ['7', '13'] },
  { id: 'definite', icon: '🗺️', title: { zh: '明確的樂觀', en: 'Definite Optimism' }, subtitle: { zh: '你不是一張樂透彩券', en: 'You are not a lottery ticket' }, color: '#5ec2a0',
    intro: { zh: '更好的未來，來自清晰的規劃，而不是碰運氣。', en: 'A better future comes from clear planning, not from luck.' },
    body: { zh: '<p>對未來的態度有四種：明確/不明確 × 樂觀/悲觀。推動真正進步的，是「明確的樂觀」——相信未來會更好，而且你能拿出一份計畫、一步步把它造出來。提爾診斷現代西方陷入「不明確的樂觀」：期待明天更好，卻沒有藍圖，只想在既有的東西上重新洗牌。</p><p>因此他反對把成功歸給運氣。登月、造城、蓋公司，都來自「先有清晰願景、再親手實現」。他有句名言：新創，是你能擁有明確掌控的最大事業。</p><div class="theme-quote">「新創，是你能擁有明確掌控的最大事業。」</div>', en: '<p>There are four attitudes to the future: definite/indefinite × optimism/pessimism. What drives real progress is definite optimism — believing the future will be better and having a plan to build it step by step. Thiel diagnoses the modern West as stuck in indefinite optimism: expecting a better tomorrow with no blueprint, only reshuffling what exists.</p><p>Hence he rejects crediting success to luck. The moon landing, new cities, great companies all come from “a clear vision, then realized by hand.” As he says: a startup is the largest endeavor over which you can have definite mastery.</p><div class="theme-quote">“A startup is the largest endeavor over which you can have definite mastery.”</div>' },
    chapters: ['2', '6'] },
  { id: 'founder', icon: '🏛️', title: { zh: '通路、文化與創辦人', en: 'Distribution, Culture & the Founder' }, subtitle: { zh: '把新事物真正帶到世界上', en: 'Actually bringing the new into the world' }, color: '#a8a6b8',
    intro: { zh: '有了秘密與願景，還得靠人、文化與銷售把它實現。', en: 'A secret and a vision still need people, culture, and sales to become real.' },
    body: { zh: '<p>提爾把「怎麼把公司做出來」講得同樣硬核：開頭的基礎（共同創辦人、董事會、股權）一旦沒打好，後面補不回來；好團隊靠的是使命與歸屬，不是福利；而「怎麼賣」被嚴重低估——光靠卓越的銷售與通路，就能造出壟斷。最後，他為「創辦人」正名：那些極端又矛盾的人，正是能扛起獨特願景、帶公司從0到1的人。</p><p>換句話說，從0到1不只是一個好點子，而是一整套「把新事物帶到世界上」的功夫——從基礎、文化、銷售，到那個敢於與眾不同的人。</p><div class="theme-quote">「光靠卓越的銷售與通路，就能造出壟斷。」</div>', en: '<p>Thiel is just as hard-nosed about how to actually build the company: if the foundation (co-founders, board, equity) starts wrong, it can’t be fixed later; great teams run on mission and belonging, not perks; and “how you sell” is badly underrated — superior sales and distribution alone can create a monopoly. Finally, he vindicates the founder: those extreme, paradoxical people are exactly the ones who can carry a singular vision and take a company from zero to one.</p><p>In other words, zero to one is not just a good idea but a whole craft of bringing the new into the world — from foundation, culture, and sales to the person daring enough to be different.</p><div class="theme-quote">“Superior sales and distribution alone can create a monopoly.”</div>' },
    chapters: ['9', '10', '11', '14'] }
];

const QUOTES = [
  { text: { zh: '競爭是留給輸家的。', en: 'Competition is for losers.' }, source: { zh: '第三章 · 快樂的公司都不一樣', en: 'Chapter 3 · All Happy Companies Are Different' },
    analysis: { zh: '全書最挑釁、也最核心的一句。完全競爭會把利潤磨到歸零；值得追求的不是打敗對手，而是好到根本沒有對手——那才是創新式壟斷。', en: 'The book’s most provocative and central line. Perfect competition grinds profit to zero; what’s worth pursuing is not beating rivals but being so good you have none — that is a creative monopoly.' } },
  { text: { zh: '有什麼重要的真相，是很少人同意你的？', en: 'What important truth do very few people agree with you on?' }, source: { zh: '第一章 · 提爾的招牌問題', en: 'Chapter 1 · Thiel’s signature question' },
    analysis: { zh: '提爾用來面試、也用來找生意的逆向問題。一個好的答案，往往就是一個「秘密」，也是一門好生意的起點。', en: 'Thiel’s contrarian question, used to interview and to find businesses. A good answer is often a “secret” — and the start of a good business.' } },
  { text: { zh: '下一個比爾蓋茲，不會再做作業系統。', en: 'The next Bill Gates will not build an operating system.' }, source: { zh: '第一章 · 未來的挑戰', en: 'Chapter 1 · The Challenge of the Future' },
    analysis: { zh: '一句話點破「創造」的本質：模仿過去的贏家，只會從1到n；真正的下一個巨人，會做出這個世界還沒有的東西。', en: 'One line captures the essence of creation: imitating past winners only goes 1 to n; the true next giant will build something the world does not yet have.' } },
  { text: { zh: '快樂的公司各不相同，失敗的公司都一樣——敗給了競爭。', en: 'Happy companies are all different; failed companies are all the same — they lost to competition.' }, source: { zh: '第三章 · 快樂的公司都不一樣', en: 'Chapter 3 · All Happy Companies Are Different' },
    analysis: { zh: '把托爾斯泰的名句反過來用。成功之所以各不相同，是因為每家都靠解決一個獨特問題贏得了壟斷；失敗則千篇一律，都困在競爭裡。', en: 'A reversal of Tolstoy’s famous line. Successes differ because each won a monopoly by solving a unique problem; failures are alike, all trapped in competition.' } },
  { text: { zh: '選擇做什麼，遠比把事情做好更重要。', en: 'What you choose to do matters far more than doing it well.' }, source: { zh: '第七章 · 冪次法則（人生版）', en: 'Chapter 7 · The Power Law (applied to life)' },
    analysis: { zh: '冪次法則最實用的一課（站長也特別記下）。學校教我們把每件事都做好，但真正拉開差距的，是你把力氣押在哪一件事上。', en: 'The most practical lesson of the power law (the reviewer noted it too). School teaches us to do everything well, but what really opens a gap is where you place your effort.' } },
  { text: { zh: '新創，是你能擁有明確掌控的最大事業。', en: 'A startup is the largest endeavor over which you can have definite mastery.' }, source: { zh: '第六章 · 你不是一張樂透彩券', en: 'Chapter 6 · You Are Not a Lottery Ticket' },
    analysis: { zh: '「明確的樂觀」的濃縮。未來不是碰運氣等來的，而是規劃、動手造出來的；而新創，正是一個人能親手掌控、把願景變成現實的最大載體。', en: 'A distillation of definite optimism. The future is not waited for by luck but planned and built; and a startup is the largest vehicle through which one person can take hold and turn a vision into reality.' } }
];

const REFLECTION_QUESTIONS = [
  { zh: '認真回答提爾的問題：「有什麼重要的真相，是很少人同意你的？」你的答案是什麼？', en: 'Answer Thiel’s question seriously: “What important truth do very few people agree with you on?” What is your answer?' },
  { zh: '你現在做的事，比較接近「從1到n」（複製、優化既有）還是「從0到1」（創造新事物）？', en: 'Is what you do now closer to “1 to n” (copying, optimizing the existing) or “0 to 1” (creating the new)?' },
  { zh: '「競爭是留給輸家的。」你有沒有困在一場其實不值得的競爭裡？離開會發生什麼？', en: '“Competition is for losers.” Are you stuck in a competition not worth having? What would happen if you left?' },
  { zh: '如果冪次法則是真的，你現在最該狠狠專注、其他都先放下的那一件事，是什麼？', en: 'If the power law is true, what one thing should you now focus on relentlessly, setting the rest aside?' },
  { zh: '你把未來當成「可以規劃打造」的，還是「碰運氣等來」的？這個態度怎麼影響了你的選擇？', en: 'Do you treat the future as something to plan and build, or as luck to wait for? How does that shape your choices?' },
  { zh: '拿「七個問題」（工程、時機、壟斷、人才、通路、持久、秘密）檢驗你手上的一個點子，它答得出幾題？', en: 'Run one of your ideas through the Seven Questions (engineering, timing, monopoly, people, distribution, durability, secret) — how many can it answer?' },
  { zh: '你是不是也低估了「怎麼賣」？如果好產品不會自己說話，你打算怎麼把它送到對的人面前？', en: 'Do you underrate distribution? If a good product won’t speak for itself, how will you get it in front of the right people?' },
  { zh: '與其問「機器會不會取代我」，問「我能怎麼和機器搭配」——你的答案是什麼？', en: 'Rather than “will machines replace me,” ask “how can I pair with machines” — what is your answer?' },
  { zh: '你正在啟動或參與的事，一開始的「人」與「規則」對了嗎？哪裡的基礎需要重打？', en: 'In what you’re starting or part of, are the people and rules right from the beginning? Where does the foundation need rebuilding?' },
  { zh: '在你自己的位置上，有沒有一件事，你可以親手把它從0做到1？第一步是什麼？', en: 'Where you stand, is there one thing you could take, with your own hands, from zero to one? What is the first step?' }
];


// ==== CHAPTER_CONTENT（論點重述，中英雙語，子代理擴寫）====
const CHAPTER_CONTENT = {};

Object.assign(CHAPTER_CONTENT, {
  1: {
    num: { zh: `第一章`, en: `Chapter One` },
    title: { zh: `未來的挑戰`, en: `The Challenge of the Future` },
    epigraph: {
      zh: `真正的未來不是更多的昨天，而是昨天還不存在的東西。`,
      en: `The real future is not more of yesterday, but something yesterday did not contain.`
    },
    body: {
      zh: `<p><strong>核心論點</strong>：Thiel 用一個面試題當作全書的鑰匙——「有什麼重要的真相，是很少人同意你的？」他稱之為<strong>逆向問題（the contrarian question）</strong>。這題看似刁鑽，其實是在測一件事：你有沒有能力看見大多數人還看不見、卻真實存在的東西。因為未來就是由今天還沒人相信的真相構成的。如果你的答案跟眾人一致，那你談的其實不是未來，而是現在的延伸。</p>

<p><strong>論證</strong>：Thiel 把「進步」拆成兩種。一種是<strong>水平進步（horizontal progress）</strong>，也就是「從1到n」——把已經被驗證有效的東西複製、鋪開、規模化。它的典型形態是<strong>全球化（globalization）</strong>：某地已經成功的做法，搬到另一個地方再做一遍。另一種是<strong>垂直進步（vertical progress）</strong>，也就是「從0到1」——做出這世界上從未存在過的新東西。它的典型形態是科技創新。複製一台打字機做出一百台，是水平；把打字機變成文字處理器，是垂直。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>論證延伸</strong>：這兩種進步常被混為一談，代價很大。人們以為「發展」就等於「把先進國家的東西搬過來多做一點」，於是把全部希望押在複製上。但複製再多，也只是讓世界更擁擠，而不是更新。真正稀缺、也真正困難的，是垂直那條軸——因為「從0到1」意味著你要做別人沒做過、甚至別人不相信能做成的事。全球化沒有科技托底，只會是一場對有限資源的瓜分。</p>

<p><strong>實例</strong>：Thiel 有一句提醒——<strong>下一個比爾蓋茲不會再去寫作業系統</strong>。這句話的重量不在於貶低微軟，而在於指出一個陷阱：我們總傾向用上一代的成功去想像下一代的機會，於是所有聰明人都擠向同一條已經被走完的路。但真正的大機會，永遠在「還沒有前例」的地方。模仿上一個贏家，本質上就是承認自己只玩得起水平那條軸。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>應用啟示</strong>：對創業者、投資人、甚至任何想做點不一樣的事的人，這一章的啟示很鋒利——別問「我怎麼把別人做過的做得更好」，先問「有什麼是別人都還沒看見的」。前者頂多讓你成為市場裡的第 n 名；後者才可能讓你成為那個「第 1 個」。願意持有一個少數人才認同的答案，是走向未來的入場券。</p>

<p class="thought-question">🤔 思考：如果現在有人問你那道逆向問題——「有什麼重要的真相，是很少人同意你的？」——你真的答得出一個屬於自己、而不是抄來的答案嗎？</p>`,
      en: `<p><strong>Core Argument</strong>: Thiel opens with an interview question that serves as the key to the whole book: "What important truth do very few people agree with you on?" He calls this <strong>the contrarian question</strong>. It looks like a trick, but it tests one thing: whether you can see something most people cannot yet see, but which is nonetheless true. The future, after all, is made of truths that no one believes today. If your answer matches the crowd's, you are not describing the future at all—only an extension of the present.</p>

<p><strong>The Argument</strong>: Thiel splits progress into two kinds. One is <strong>horizontal progress</strong>—going "from 1 to n"—copying what already works and spreading it out at scale. Its signature form is <strong>globalization</strong>: taking a proven method from one place and running it again somewhere else. The other is <strong>vertical progress</strong>—going "from zero to one"—making something that never existed before. Its signature form is technology. Making a hundred typewriters from one is horizontal; turning the typewriter into a word processor is vertical.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>Extending the Argument</strong>: These two get blurred together, and the cost is high. People assume "development" simply means importing what advanced countries already have and doing a bit more of it, so they stake everything on copying. But no amount of copying renews the world—it only crowds it. What is genuinely scarce, and genuinely hard, lies on the vertical axis, because going from zero to one means doing what no one has done, and often what no one believes can be done. Globalization without new technology underneath is just a scramble over a fixed pile of resources.</p>

<p><strong>An Example</strong>: Thiel offers a warning: <strong>the next Bill Gates will not build an operating system</strong>. The weight of that line is not in belittling Microsoft, but in naming a trap—we keep imagining the next generation's opportunity in the shape of the last one's success, so every clever person crowds onto a road that has already been walked to its end. The truly great opportunities always sit where there is no precedent. Imitating the last winner is, at bottom, an admission that you can only afford to play on the horizontal axis.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>What It Means for You</strong>: For founders, investors, and anyone who wants to do something different, the lesson is sharp: don't ask "how do I do better what others have already done." Ask first "what has no one else yet seen." The former makes you, at best, the nth entrant in a market; only the latter lets you become the one who is first. The willingness to hold an answer few people share is the price of admission to the future.</p>

<p class="thought-question">🤔 Reflect: If someone posed the contrarian question to you right now—"What important truth do very few people agree with you on?"—could you really give an answer that is your own, rather than one you borrowed?</p>`
    }
  },
  2: {
    num: { zh: `第二章`, en: `Chapter Two` },
    title: { zh: `像1999年那樣狂歡`, en: `Party Like It's 1999` },
    epigraph: {
      zh: `一場災難最危險的，往往不是它本身，而是我們從中學到的錯誤教訓。`,
      en: `The most dangerous thing about a disaster is often not the disaster itself, but the wrong lesson we take from it.`
    },
    body: {
      zh: `<p><strong>核心論點</strong>：這一章談網路泡沫，但重點不是泡沫怎麼吹起、怎麼破的，而是它「留下了什麼」。Thiel 認為，泡沫破滅後創業圈普遍記取了幾條看似穩健的教訓——而這幾條，恰恰全都學錯了。真正該學的，往往和大眾記住的相反。</p>

<p><strong>論證</strong>：破滅之後，矽谷把慘痛經驗濃縮成四條「戒律」：一、循序漸進，別想一步登天；二、保持精簡與彈性，別做太大的規劃；三、緊盯對手、在既有市場上把東西做得更好；四、專注做產品，別談行銷。這四條聽起來謹慎、務實、令人安心，於是被奉為守則。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>論證（反轉）</strong>：Thiel 逐條把它們翻過來。第一，與其小步試探，<strong>不如敢於冒大的險</strong>——瑣碎的東西即使成了也沒意義。第二，與其把「沒有計畫」美化成「彈性」，<strong>不如承認一個爛計畫也好過沒計畫</strong>——有方向的錯，勝過隨波逐流。第三，別在別人已經打成一團的市場裡纏鬥——<strong>競爭激烈的市場，利潤會被磨到見骨</strong>。第四，產品再好也需要被賣出去——<strong>銷售和產品同等重要</strong>，工程師常常低估這件事。</p>

<p><strong>實例</strong>：這裡的「實例」其實就是整個時代本身。1999 年的狂熱之所以值得回望，不是因為它荒唐，而是因為那份「相信可以造出全新事物」的膽識，本身沒有錯——錯的是執行的紀律。人們把嬰兒和洗澡水一起倒掉：因為泡沫破了，就連「大膽下注、認真規劃未來」這件對的事，也一起被判了死刑。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>應用啟示</strong>：每一場崩盤都會生出一套「新常識」，而新常識往往是對前一次過度反應的產物。真正該做的，不是無腦服從這些教訓，也不是無腦反對，而是回到第一章那道逆向問題——去分辨哪些是被眾人記住卻其實錯了的東西。當所有人都在同一個方向上小心翼翼時，那個方向本身，可能就是最擁擠、最沒有報酬的地方。</p>

<p class="thought-question">🤔 思考：你手上正奉為圭臬的「經驗教訓」，有多少是自己驗證過的，又有多少只是某一次集體受傷之後留下的疤痕反應？</p>`,
      en: `<p><strong>Core Argument</strong>: This chapter is about the dot-com bubble, but the point is not how it inflated or burst—it is what the bubble left behind. Thiel argues that after the crash, the startup world absorbed a set of seemingly sensible lessons, and that these lessons were, precisely, all wrong. What we should actually learn is usually the opposite of what the crowd remembers.</p>

<p><strong>The Argument</strong>: After the collapse, Silicon Valley boiled its pain down to four "commandments": one, make incremental progress, don't reach too far; two, stay lean and flexible, don't plan too grandly; three, watch your rivals and improve on what already exists; four, focus on the product, don't talk about marketing. All four sound cautious, pragmatic, and reassuring—so they became gospel.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>The Argument, Inverted</strong>: Thiel turns each one over. First, rather than tiptoe forward, <strong>it is better to risk boldness</strong>—trivial things aren't worth much even when they work. Second, rather than dress up "no plan" as "flexibility," <strong>admit that a bad plan beats no plan</strong>—a wrong direction still beats drifting. Third, don't grind it out in a market where everyone is already brawling—<strong>fiercely competitive markets grind profits down to the bone</strong>. Fourth, even a great product has to be sold—<strong>sales matters as much as product</strong>, something engineers routinely underrate.</p>

<p><strong>An Example</strong>: The "example" here is really the era itself. Nineteen ninety-nine is worth revisiting not because it was absurd, but because the nerve behind it—the belief that you could build something entirely new—was not the mistake. The mistake was in the discipline of execution. People threw out the baby with the bathwater: because the bubble popped, even the right thing—betting boldly and planning seriously for the future—was condemned along with it.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>What It Means for You</strong>: Every crash breeds a new "common sense," and that common sense is usually the child of an overreaction to the last one. The right move is neither to obey these lessons blindly nor to reject them blindly, but to return to the contrarian question from Chapter One—to tell apart what the crowd remembers from what is actually true. When everyone is inching carefully in the same direction, that direction itself may be the most crowded and least rewarding place to be.</p>

<p class="thought-question">🤔 Reflect: Of the "lessons learned" you now treat as law, how many have you tested yourself—and how many are just scar tissue left over from one time the crowd got hurt?</p>`
    }
  },
  3: {
    num: { zh: `第三章`, en: `Chapter Three` },
    title: { zh: `快樂的公司都不一樣`, en: `All Happy Companies Are Different` },
    epigraph: {
      zh: `會賺錢的公司各有各的獨門，虧錢的公司卻困在同一道牆裡。`,
      en: `Profitable companies each have their own secret; losing ones are stuck against the same wall.`
    },
    body: {
      zh: `<p><strong>核心論點</strong>：Thiel 把托爾斯泰那句名言反過來用——「快樂的公司各不相同，不快樂的公司都一樣」。一家真正成功的公司，是因為它解決了一個獨特的問題，從而贏得了某種<strong>壟斷（monopoly）</strong>；而失敗的公司幾乎都敗於同一件事：陷入<strong>完全競爭（perfect competition）</strong>，逃不出去。</p>

<p><strong>論證</strong>：在經濟學的理想模型裡，完全競爭意味著任何一家公司都無法定價，長期下來<strong>利潤會被競爭磨到歸零</strong>。你賺到的每一分，都會有人用更低的價格把它搶走。反過來，這裡的壟斷不是靠關係、也不是靠違法排他，而是<strong>創新式壟斷</strong>——因為你做出了別人做不出、或做不到那麼好的東西，所以你能持續獲得遠高於平均的利潤。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>論證延伸</strong>：為什麼壟斷重要？因為只有拿得到超額利潤的公司，才「養得起未來」。完全競爭下的公司整天為了活下去而掙扎，沒有餘裕做長期投資、也留不住最好的人。而創新式壟斷者因為手上有厚利，反而能負擔研發、負擔耐心、負擔對員工好——它的壟斷不是掠奪社會，而常常是它為社會創造了足夠獨特的價值，社會才願意讓它賺這筆錢。</p>

<p><strong>實例</strong>：Thiel 指出一個有趣的普遍現象——<strong>公司都在說謊</strong>，只是往相反方向說。真正的壟斷者會極力假裝自己身處激烈競爭、市場很大很分散，因為它怕被監管盯上、被輿論攻擊；而深陷紅海的競爭者，卻拼命把自己描述成獨一無二、開創了某個「全新的細分市場」，好讓自己看起來與眾不同。於是外人聽到的說法，往往和真相恰好相反。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>應用啟示</strong>：判斷一家公司好不好，別聽它怎麼形容自己的市場，要看它的利潤能不能持久。如果一家公司口口聲聲說自己「與眾不同」卻賺不到錢，多半只是在自我安慰；如果一家公司拼命強調自己「競爭很激烈」卻悶聲賺大錢，那它八成握有某種它不願明說的壟斷。對創業者而言，目標不是擠進一個大市場當個小玩家，而是<strong>在一個你能獨佔的地方，做到別人做不到的事</strong>。</p>

<p class="thought-question">🤔 思考：你正在做的事，究竟是「和很多人拼同一塊餅」，還是「做出一塊只有你能烤的餅」？誠實回答，會很不一樣。</p>`,
      en: `<p><strong>Core Argument</strong>: Thiel inverts Tolstoy's famous line: all happy companies are different, all unhappy ones are alike. A truly successful company succeeds because it solved a unique problem and thereby won some kind of <strong>monopoly</strong>; failed companies nearly all fail at the same thing—they fall into <strong>perfect competition</strong> and cannot escape.</p>

<p><strong>The Argument</strong>: In economics' idealized model, perfect competition means no single firm can set prices, and over time <strong>profits get ground down to zero</strong>. Every cent you earn, someone else undercuts. A monopoly, by contrast—here—rests not on connections or illegal exclusion, but on <strong>creative monopoly</strong>: because you made something others cannot make, or cannot make nearly as well, you keep earning far above the average.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>Extending the Argument</strong>: Why does monopoly matter? Because only a company earning excess profit can <strong>afford the future</strong>. A firm trapped in perfect competition struggles daily just to survive; it has no room for long-term investment and cannot keep its best people. A creative monopolist, sitting on fat margins, can afford research, can afford patience, can afford to treat its people well. Its monopoly is often not extraction from society but the reverse—it created value distinctive enough that society is willing to let it earn that money.</p>

<p><strong>An Example</strong>: Thiel names a curious universal pattern: <strong>companies lie</strong>, but in opposite directions. A real monopolist strains to pretend it is locked in fierce competition within a vast, fragmented market, because it fears regulators and public backlash. A firm drowning in a red ocean, meanwhile, strains to describe itself as one of a kind, the pioneer of some "brand-new niche," so as to look distinctive. So what outsiders hear is usually the reverse of the truth.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>What It Means for You</strong>: To judge a company, don't listen to how it describes its market—look at whether its profits last. A company insisting it is "one of a kind" while making no money is mostly consoling itself; a company loudly stressing how "competitive" its space is while quietly minting cash almost certainly holds a monopoly it would rather not name. For a founder, the goal is not to squeeze into a large market as a small player, but <strong>to do what no one else can do in a place you can own</strong>.</p>

<p class="thought-question">🤔 Reflect: Is what you're doing "fighting many others over the same pie," or "baking a pie only you can bake"? Answer honestly, and the difference is enormous.</p>`
    }
  },
  4: {
    num: { zh: `第四章`, en: `Chapter Four` },
    title: { zh: `競爭的意識形態`, en: `The Ideology of Competition` },
    epigraph: {
      zh: `我們被教會崇拜競爭，卻很少有人問：這場仗，值得打嗎？`,
      en: `We are taught to worship competition, yet few ever ask whether the fight is worth fighting.`
    },
    body: {
      zh: `<p><strong>核心論點</strong>：如果第三章說「壟斷才是好事」，第四章就要處理一個更深的問題——為什麼我們卻對競爭如此著迷？Thiel 的答案是：<strong>競爭已經變成一種意識形態</strong>。它不只是市場的一種狀態，而是一套從小被灌輸、被我們當成美德來崇拜的信念。它有破壞性，卻偽裝成價值的證明。</p>

<p><strong>論證</strong>：我們從教育體制一路被訓練去競爭——考試、排名、錄取、晉升，每一關都在告訴你：贏過旁邊的人就是成功。久而久之，「競爭」本身變成了目的，我們忘了問它到底通往哪裡。Thiel 提醒：<strong>激烈的競爭並不證明某件事有價值，它往往只證明大家都困在同一個地方出不去。</strong></p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>論證延伸</strong>：競爭最陰險的地方，在於它會扭曲你的認知。當你死盯著對手，你會開始<strong>看見其實不存在的機會</strong>，會為了贏一場根本不重要的仗而投入越來越多。你以為自己在追逐價值，其實只是在追逐「打敗某個人」這件事帶來的快感。兩家公司越是勢均力敵地纏鬥，越容易一起把利潤打光、一起走進消耗戰——鬥到最後，戰場上可能根本沒有值得爭的東西。</p>

<p><strong>實例</strong>：Thiel 觀察到，競爭會讓人不由自主地<strong>模仿對手、逐漸失去自己</strong>。你原本想做的是 A，但因為對手做了 B 而且看起來領先，你也跟著去做 B；到最後，你和對手變得越來越像，兩家公司都丟掉了本來能讓自己與眾不同的東西。這正是第三章「失敗的公司都一樣」的另一面——它們之所以一樣，正是因為在互相凝視中被同化了。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>應用啟示</strong>：所以 Thiel 給出一個相當反直覺的建議——<strong>有時候，最好的一步是離開這場仗</strong>。不是每一場競爭都值得應戰；當你發現自己只是在為「贏」而戰、而不是為某個真正獨特的價值而戰時，最聰明的做法可能是抽身，去找一塊沒有人跟你搶的地。拒絕競爭，不是懦弱，而是清醒——它讓你把力氣留給真正屬於你的「從0到1」。</p>

<p class="thought-question">🤔 思考：你此刻拼盡全力要贏的那場競爭，是因為終點真的有你想要的東西，還是只是因為「大家都在爭，所以我不能輸」？</p>`,
      en: `<p><strong>Core Argument</strong>: If Chapter Three says "monopoly is good," Chapter Four tackles a deeper puzzle—why, then, are we so infatuated with competition? Thiel's answer: <strong>competition has become an ideology</strong>. It is not merely a market condition but a set of beliefs drilled into us from childhood and worshipped as a virtue. It is destructive, yet it disguises itself as proof of value.</p>

<p><strong>The Argument</strong>: We are trained to compete all the way through the education system—exams, rankings, admissions, promotions—each gate telling you that beating the person beside you is success. Over time, competition itself becomes the goal, and we forget to ask where it actually leads. Thiel's reminder: <strong>fierce competition does not prove something is valuable; it usually only proves that everyone is trapped in the same place with no way out.</strong></p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>Extending the Argument</strong>: The most insidious thing about competition is how it distorts your perception. Fixated on a rival, you begin to <strong>see opportunities that aren't really there</strong>, pouring more and more into winning a fight that hardly matters. You think you're chasing value, but you're chasing the thrill of beating someone. The more evenly two companies are matched, the more likely they are to grind each other's profits to nothing and slide into a war of attrition—until there may be nothing left on the battlefield worth having.</p>

<p><strong>An Example</strong>: Thiel observes that competition makes people <strong>imitate their rivals and slowly lose themselves</strong>. You set out to do A, but because your rival did B and seems to be ahead, you do B too; in the end you and your rival grow more and more alike, both discarding the very thing that could have set you apart. This is the flip side of Chapter Three's "all failing companies are alike"—they are alike precisely because, staring at each other, they became the same.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>What It Means for You</strong>: So Thiel offers a counterintuitive piece of advice—<strong>sometimes the best move is to walk away from the fight</strong>. Not every competition deserves your engagement; when you catch yourself fighting merely to "win" rather than for something genuinely distinctive, the smartest thing may be to step out and find ground no one is contesting. Refusing to compete is not cowardice but clarity—it frees your energy for the "zero to one" that is truly your own.</p>

<p class="thought-question">🤔 Reflect: The competition you're pouring everything into right now—is it because there's really something you want at the finish line, or just because "everyone's fighting for it, so I can't afford to lose"?</p>`
    }
  }
});


Object.assign(CHAPTER_CONTENT, {
  5:{
    num:{zh:`第五章`,en:`Chapter Five`},
    title:{zh:`最後行動者優勢`,en:`Last Mover Advantage`},
    epigraph:{
      zh:`第一個衝進場的人不一定贏；真正贏的，是最後一個還站在場上、而且沒人擠得進來的人。`,
      en:`Being first to arrive doesn't win the race. Winning belongs to whoever is last to make a real breakthrough — and then holds the field alone.`
    },
    body:{
      zh:`<p><strong>核心論點</strong>一家公司今天值多少錢，不取決於它現在賺多少，而取決於它在遙遠的未來能持續產生多少現金流。價值的本質是「持久性」。一時的爆紅、一季的暴利，如果撐不過幾年就被競爭者抹平，那它其實一文不值。真正偉大的企業，是那種你可以合理相信它十年、二十年後依然屹立、依然賺錢的企業。所以問題不是「你現在成長多快」，而是「你憑什麼能長久地獨佔下去」。</p>

<p><strong>論證：壟斷的四個特徵</strong>能長久獨佔的公司，通常同時具備四種護城河。第一是<strong>專屬技術（proprietary technology）</strong>：你的核心技術不能只是「比較好」，而要好上十倍，好到對手難以模仿或追趕。差個百分之二十，市場感覺不出差別；好上一個數量級，才會形成真正的門檻。第二是<strong>網路效應（network effects）</strong>：使用的人愈多，對每個人就愈有用，這讓後進者很難撬動既有的用戶群。第三是<strong>規模經濟（economies of scale）</strong>：業務愈大、單位成本愈低，軟體與平台型事業尤其明顯。第四是<strong>品牌（brand）</strong>：品牌本身就是一種難以複製的獨佔，但它必須建立在真實的產品實力之上，光靠包裝撐不起來。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>實例：從小市場開始</strong>矛盾的是，要建立這樣的壟斷，起手式反而是「把市場做小」。與其一開始就衝進一片人人爭食的大紅海，不如先鎖定一個小到別人看不上、但你能徹底獨佔的利基市場。在那個小池塘裡先當上唯一的大魚，站穩腳跟、賺到現金、累積口碑，再一圈一圈地向外擴張到相鄰的市場。許多後來的巨頭，都是先在一個窄小的角落做到近乎百分之百的市占，才逐步長成龐然大物。先求獨佔，再求規模，順序不能顛倒。</p>

<p><strong>應用啟示：當最後行動者</strong>這就是「最後行動者優勢（last mover advantage）」的意義。我們常以為先發者（first mover）占盡便宜，但先發只是手段、不是目的——第一個進場若守不住，很快就被後來者收割。真正該追求的，是成為某個市場裡「最後一個做出重大突破的人」，之後很多年沒有人能再超越你。與其急著搶第一，不如想清楚：這局結束時，誰會是還站在場上、獨自收租的那一個？把眼光放到終局，才是建立持久價值的關鍵。</p>

<p class="thought-question">🤔 思考：如果把時間快轉十年，你正在做的事情裡，有哪一塊是「十年後別人依然搶不走」的？如果一塊也想不到，也許現在該重新設計的，不是產品，而是護城河。</p>`,
      en:`<p><strong>The core claim</strong> What a company is worth today has little to do with what it earns today, and everything to do with how much cash it can keep generating far into the future. Value is really about durability. A viral spike or one blowout quarter means nothing if competitors erase it within a few years. A truly great business is one you can reasonably expect to still be standing — and still profitable — a decade or two from now. So the real question isn't "how fast are you growing right now," but "what lets you hold a monopoly for the long haul?"</p>

<p><strong>The argument: four traits of monopoly</strong> Companies that stay dominant usually share four moats. First, <strong>proprietary technology</strong>: your core tech can't merely be "a bit better" — it should be ten times better, good enough that rivals can't easily copy or catch up. A twenty-percent edge is invisible to customers; an order-of-magnitude edge becomes a real barrier. Second, <strong>network effects</strong>: the more people use it, the more useful it becomes to everyone, making the incumbent user base hard to pry loose. Third, <strong>economies of scale</strong>: the bigger you get, the lower your unit costs — especially for software and platforms. Fourth, <strong>brand</strong>: a brand is itself a kind of monopoly, but it must rest on genuine product strength; packaging alone can't carry it.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>An example: start small</strong> Paradoxically, building this kind of monopoly begins by making the market small. Rather than charging into a vast, crowded ocean everyone is fighting over, lock down a niche so small others overlook it but that you can own completely. Be the only big fish in that little pond first — get established, generate cash, build a reputation — and then expand outward, ring by ring, into adjacent markets. Many later giants first captured near-total share of a narrow corner before growing into something enormous. Own it first, then scale; the order cannot be reversed.</p>

<p><strong>The takeaway: be the last mover</strong> This is the meaning of <strong>last mover advantage</strong>. We assume the first mover holds all the cards, but being first is a tactic, not a goal — arrive first and fail to hold your ground, and later entrants simply harvest what you built. What you should really want is to be the last company to make a major breakthrough in a given market, after which no one can surpass you for years. Instead of rushing to be first, ask: when this game is over, who is left standing on the field, collecting rent alone? Thinking to the endgame is the key to lasting value.</p>

<p class="thought-question">🤔 Reflect: Fast-forward ten years — is there any part of what you're doing that others still couldn't take from you? If you can't name one, maybe what needs redesigning isn't the product, but the moat.</p>`
    }
  },
  6:{
    num:{zh:`第六章`,en:`Chapter Six`},
    title:{zh:`你不是一張樂透彩券`,en:`You Are Not a Lottery Ticket`},
    epigraph:{
      zh:`把成功歸給運氣，是最溫柔的放棄。真正推動世界的人，都相信未來可以被規劃、被親手造出來。`,
      en:`Crediting success to luck is the gentlest way to give up. The people who move the world believe the future can be planned — and built by hand.`
    },
    body:{
      zh:`<p><strong>核心論點</strong>成功到底是靠運氣，還是靠實力？這個問題困擾了無數人，但爭論本身可能問錯了。與其把成功當成一張中不中全憑機率的樂透彩券，不如追問：你對未來抱持什麼樣的態度？一個人、乃至一個社會，若真心相信「未來可以被設計、被掌控」，行動方式會截然不同於那些兩手一攤、等著運氣降臨的人。新創其實是你這輩子能擁有「明確掌控」的最大一件事——它不是抽獎，是設計。</p>

<p><strong>論證：對未來的四種態度</strong>可以用兩條軸線把人對未來的態度切成四個象限。一條軸是「明確 vs 不明確」——你對未來有沒有具體的規劃；另一條軸是「樂觀 vs 悲觀」——你覺得未來會更好還是更壞。<strong>明確的悲觀</strong>者相信未來會變糟，於是拚命儲蓄、防守。<strong>不明確的悲觀</strong>者覺得會變糟卻又無計可施，只能得過且過。<strong>不明確的樂觀</strong>者期待未來更好，卻沒有任何藍圖，只是模糊地相信「東西會自己變好」。而<strong>明確的樂觀（definite optimism）</strong>者不只相信未來更好，還相信那個更好的未來需要靠自己動手規劃、動手建造。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>實例：是誰在推動進步</strong>真正把人類往前推的，向來是那群明確的樂觀主義者。他們心裡先有一張清晰的藍圖，然後傾盡全力把它變成現實——無論是宏偉的工程、跨時代的產品，還是一整個新產業。相對地，現代西方社會在許多方面陷入了「不明確的樂觀」：人們依然期待明天會更好，卻愈來愈少人真正提筆畫下具體的長遠計畫，只寄望於分散押注、隨機應變、讓好結果自己浮現。缺了那張藍圖，樂觀就退化成一種被動的等待。</p>

<p><strong>應用啟示：拒絕把命運交給機率</strong>如果你相信成功純屬運氣，那最理性的做法就是什麼都不必認真規劃，反正結果不由你決定。但這正是最危險的自我設限。把人生和事業當成可以設計的工程，你才會去問「我想要什麼樣的未來、要怎麼一步步造出它」，也才可能真的把它造出來。你不是一張被動等待開獎的樂透彩券——你是那個可以動手寫下未來、並為之負責的人。與其祈求好運，不如給自己一個足夠明確、值得全力以赴的計畫。</p>

<p class="thought-question">🤔 思考：對於你最在乎的那件事，你手上有的是一張「明確的藍圖」，還是一句「船到橋頭自然直」？如果只有後者，你其實正把自己當成一張樂透彩券。</p>`,
      en:`<p><strong>The core claim</strong> Is success a matter of luck or skill? The question has tormented countless people, but the debate itself may be misframed. Rather than treating success as a lottery ticket that wins or loses by pure chance, ask instead: what attitude do you hold toward the future? A person — or a whole society — that genuinely believes the future can be designed and controlled will act completely differently from those who throw up their hands and wait for fortune to strike. A startup is in fact the largest thing over which you can have <em>definite control</em> in your life — it's not a raffle, it's a design.</p>

<p><strong>The argument: four attitudes toward the future</strong> You can slice people's attitudes toward the future into four quadrants along two axes. One axis is definite vs. indefinite — whether you hold a concrete plan for the future; the other is optimistic vs. pessimistic — whether you think things will get better or worse. The <strong>definite pessimist</strong> believes the future will be worse and hoards and defends accordingly. The <strong>indefinite pessimist</strong> feels it will be worse but sees no remedy, and just muddles through. The <strong>indefinite optimist</strong> expects a better future but holds no blueprint, only a vague faith that "things will improve on their own." The <strong>definite optimist</strong> not only believes the future will be better but believes that better future must be planned and built by his own hands.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>An example: who actually drives progress</strong> Those who truly push humanity forward have always been the definite optimists. They start with a clear blueprint in mind, then pour everything into turning it into reality — whether a grand engineering feat, a landmark product, or an entire new industry. By contrast, modern Western society has in many ways slid into indefinite optimism: people still expect a better tomorrow, yet fewer and fewer actually sit down to draw a concrete long-range plan, hoping instead to diversify their bets, stay flexible, and let good outcomes surface on their own. Without the blueprint, optimism decays into passive waiting.</p>

<p><strong>The takeaway: refuse to hand your fate to chance</strong> If you believe success is pure luck, the rational move is to plan nothing seriously — the outcome isn't yours to decide anyway. But this is the most dangerous kind of self-limitation. Treat your life and your work as engineering that can be designed, and you'll start asking "what future do I want, and how do I build it step by step" — and only then can you actually build it. You are not a passive lottery ticket waiting for the draw — you are the one who can write the future by hand and own the result. Rather than praying for luck, give yourself a plan definite enough to be worth your whole effort.</p>

<p class="thought-question">🤔 Reflect: For the thing you care about most, do you hold a definite blueprint, or just a shrug of "it'll work out somehow"? If it's only the latter, you're quietly treating yourself as a lottery ticket.</p>`
    }
  },
  7:{
    num:{zh:`第七章`,en:`Chapter Seven`},
    title:{zh:`跟著錢走`,en:`Follow the Money`},
    epigraph:{
      zh:`世界並不公平地分配回報。少數幾件事情吞下絕大多數的成果，剩下的幾乎歸零——認清這一點，你才知道該把力氣押在哪裡。`,
      en:`The world hands out rewards unevenly. A handful of things swallow almost all the returns, and the rest amount to nearly nothing — grasp this, and you'll know where to place your weight.`
    },
    body:{
      zh:`<p><strong>核心論點</strong>創業投資的世界裡藏著一條殘酷而清晰的規律：<strong>冪次法則（the power law）</strong>。報酬不是平均分布、也不是常態的鐘形曲線，而是極端傾斜——極少數的投資會賺回遠超過其他所有投資加總的錢，而絕大多數的標的則接近血本無歸。這條法則不只支配創投基金，也悄悄支配著我們每個人的人生選擇。看懂它，你就會重新思考「該把時間和資源押在哪裡」。</p>

<p><strong>論證：報酬的極端傾斜</strong>一般人直覺以為，投資組合裡的成敗會像丟骰子一樣攤平——有的賺、有的賠，平均下來還過得去。但真實世界並非如此。在一支創投基金裡，往往是單一一家表現最好的公司，就賺回了整支基金、甚至超過其餘所有投資的總和；排名第二的貢獻已經明顯縮水，其餘的則普遍平庸或歸零。這意味著創投的邏輯不能是「廣撒網、各投一點」，而必須是：只投那些「一旦成功、就有機會單獨賺回整支基金」的公司。若一家公司連這個潛力都沒有，就根本不該投。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>實例：不能平均下注</strong>正因為結果如此極端，把資金平均分散到一大堆「還可以」的案子上，反而是最糟的策略——你會被一堆不上不下的平庸標的稀釋掉那幾個真正驚人的贏家。聰明的做法是集中：找出少數你真正相信、量級足夠大的機會，重重地押上去。撒胡椒面式的分散看似安全，實則違背了冪次法則的本質，注定拿不到那條長尾最尖端的巨大回報。</p>

<p><strong>應用啟示：選擇比努力更重要</strong>把冪次法則搬到人生上，結論同樣鋒利：<strong>「選擇做什麼」遠比「把事情做好」重要。</strong>如果你選錯了戰場，再怎麼勤奮也只是在一個回報趨近於零的領域裡精進。與其追求十八般武藝樣樣通、把時間平均攤給每一件事，不如狠下心來，找出那一件你最能做到卓越、而且世界最需要的事，然後全力投入。人生不必面面俱到；真正拉開差距的，往往是那一兩個重押且押對的選擇。</p>

<p class="thought-question">🤔 思考：你現在的時間，是平均地撒在一堆「都做一點」的事情上，還是重重地押在那一件你最可能做到頂尖的事情上？冪次法則不會獎勵面面俱到的人。</p>`,
      en:`<p><strong>The core claim</strong> Hidden in the world of venture investing is a rule that is both brutal and clear: <strong>the power law</strong>. Returns are not evenly spread, nor do they follow a normal bell curve — they are extremely skewed. A tiny handful of investments earn back more than all the others combined, while the vast majority come close to a total loss. This law governs not only venture funds but quietly governs the choices in each of our lives. See it clearly, and you'll rethink where to place your time and resources.</p>

<p><strong>The argument: returns are extremely skewed</strong> People intuitively assume the wins and losses in a portfolio average out like dice rolls — some gain, some lose, and it comes out fine in the middle. The real world doesn't work that way. Within a venture fund, it is often the single best-performing company that earns back the entire fund — sometimes more than all the other investments put together; the second-best contributes noticeably less, and the rest are mostly mediocre or worthless. This means venture logic can't be "cast a wide net and put a little into each." It must be: invest only in companies that, if they succeed, could return the whole fund on their own. If a company lacks even that potential, it shouldn't be funded at all.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>An example: you can't bet evenly</strong> Precisely because outcomes are so extreme, spreading money evenly across a big pile of "decent" deals is the worst strategy — a crowd of middling, going-nowhere bets will dilute away the few truly staggering winners. The smart move is to concentrate: identify the small number of opportunities you genuinely believe in and that are large enough in magnitude, and bet on them heavily. Sprinkling your bets thin looks safe but violates the very nature of the power law, and is doomed to miss the enormous payoff at the far tip of the tail.</p>

<p><strong>The takeaway: choice matters more than effort</strong> Carry the power law over to life, and the conclusion is just as sharp: <strong>choosing what to do matters far more than doing it well.</strong> If you pick the wrong battlefield, all your diligence only sharpens you in a field whose returns approach zero. Rather than mastering a bit of everything and splitting your time evenly across all of it, steel yourself to find the one thing you can do superbly and the world most needs — then throw yourself into it. Life doesn't require being well-rounded; what really opens up a gap is usually the one or two heavy bets you place, and place right.</p>

<p class="thought-question">🤔 Reflect: Is your time now sprinkled evenly across a pile of "do a little of everything," or bet heavily on the one thing you're most likely to be world-class at? The power law does not reward the well-rounded.</p>`
    }
  },
  8:{
    num:{zh:`第八章`,en:`Chapter Eight`},
    title:{zh:`秘密`,en:`Secrets`},
    epigraph:{
      zh:`每一家偉大的公司，都建立在一個別人還沒看見的真相之上。世界並沒有把秘密發完——只是大多數人已經懶得再找。`,
      en:`Every great company is built on a truth others haven't yet seen. The world hasn't run out of secrets — most people have simply stopped looking.`
    },
    body:{
      zh:`<p><strong>核心論點</strong>每一家偉大的公司，背後都藏著一個<strong>秘密（secrets）</strong>——一個關於世界、且與眾人共識相左的重要真相，一個別人還沒看見、或不肯相信的洞見。偉大的事業不是把眾所皆知的事再做一遍，而是先發現一件別人都不知道的事，再把它變成獨佔的生意。所以創業的起點，其實是一道知識上的難題：你掌握了什麼別人還不知道的秘密？</p>

<p><strong>論證：世界仍有秘密</strong>有人會說，容易的發現早被前人摘光了，剩下的不是眾所周知的常識，就是人類永遠無法企及的謎團——中間那層「還沒被發現、但找得到的秘密」已經不存在。這種想法是錯的。秘密大致分兩類：關於<strong>自然</strong>的秘密（宇宙、物理、生命如何運作），以及關於<strong>人</strong>的秘密（人們對自己、對彼此不願承認或沒意識到的事）。這兩座礦脈都遠未被挖盡。真正稀缺的，從來不是秘密本身，而是願意動身去找的人。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>實例：為什麼人們不再尋找</strong>如果世界仍藏著這麼多秘密，為什麼大多數人不再去找？原因有四。其一是<strong>漸進主義</strong>：從小被教導按部就班、一步步累積，不鼓勵去追問那些跳躍式的大哉問。其二是<strong>風險趨避</strong>：尋找秘密可能一無所獲、還會被嘲笑，於是人們寧可待在安全的已知裡。其三是<strong>自滿</strong>：既得利益者已經過得很好，沒有動機去翻找可能顛覆現狀的新真相。其四是所謂「<strong>世界很平</strong>」的錯覺——以為地球上到處都是聰明人，任何值得發現的東西早該被別人找到了，於是自己也就不必費心。</p>

<p><strong>應用啟示：該去哪裡找秘密</strong>找秘密是有方法的。與其擠進人人都盯著的熱門領域，不如刻意走向那些被忽視、被冷落、沒人願意認真研究的角落——那裡最可能藏著尚未被說破的真相。更犀利的一招，是去問那些讓人不太舒服的問題：<strong>有什麼是被禁止談論的？有什麼是被隱藏、被視為理所當然而沒人再質疑的？</strong>凡是眾人不假思索就接受、或刻意迴避的地方，往往正是秘密潛伏之處。找到它，你就握住了打造一家偉大公司的鑰匙。</p>

<p class="thought-question">🤔 思考：在你所在的領域裡，有沒有一件「大家都這樣做、卻沒人說得清為什麼」的事？那句沒人追問的「為什麼」，也許就是一個還沒被人撿走的秘密。</p>`,
      en:`<p><strong>The core claim</strong> Behind every great company hides a <strong>secret</strong> — an important truth about the world that runs against the consensus, an insight others haven't yet seen or refuse to believe. A great business doesn't repeat what everyone already knows; it first discovers something no one else knows, then turns it into a monopoly. So the starting point of building a company is really an intellectual puzzle: what secret do you hold that others don't yet?</p>

<p><strong>The argument: the world still has secrets</strong> Some will say the easy discoveries were long ago picked clean, and what remains is either common knowledge or mysteries humanity can never reach — that the middle layer of "undiscovered but findable secrets" no longer exists. This is wrong. Secrets fall roughly into two kinds: secrets of <strong>nature</strong> (how the universe, physics, and life work) and secrets about <strong>people</strong> (things people won't admit, or don't realize, about themselves and one another). Both veins are far from mined out. What's truly scarce has never been secrets themselves, but people willing to go looking for them.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>An example: why people stop looking</strong> If the world still holds so many secrets, why do most people stop searching? Four reasons. First, <strong>incrementalism</strong>: we're taught from childhood to advance step by step, accumulating little by little, and are not encouraged to chase the big leap-of-faith questions. Second, <strong>risk aversion</strong>: hunting for a secret might yield nothing and invite ridicule, so people prefer to stay in the safety of the known. Third, <strong>complacency</strong>: those already comfortable have no incentive to dig for a new truth that might upend the status quo. Fourth, the illusion that the <strong>world is flat</strong> — the assumption that smart people are everywhere, so anything worth finding must already have been found by someone else, and therefore isn't worth your bother.</p>

<p><strong>The takeaway: where to look for secrets</strong> Searching for secrets has a method. Rather than crowding into the hot fields everyone is watching, deliberately walk toward the corners that are overlooked, neglected, and that no one bothers to study seriously — that's where unspoken truths most likely hide. A sharper move is to ask the questions that make people uncomfortable: <strong>What is forbidden to talk about? What is hidden, or taken so for granted that no one questions it anymore?</strong> Wherever people accept something without thinking, or pointedly avoid it, a secret is often lurking. Find it, and you hold the key to building a great company.</p>

<p class="thought-question">🤔 Reflect: In your own field, is there something "everyone does this way, yet no one can quite say why"? That unasked "why" may be a secret no one has picked up yet.</p>`
    }
  }
});


Object.assign(CHAPTER_CONTENT, {
  9:{
    num:{zh:`第九章`,en:`Chapter Nine`},
    title:{zh:`基礎`,en:`Foundations`},
    epigraph:{
      zh:`地基歪了，樓再高也是危樓；開頭沒打好的公司，後面補不回來。`,
      en:`A crooked foundation dooms the tower above it; a company that starts wrong can never quite be fixed.`
    },
    body:{
      zh:`<p><strong>第一步就決定了結局</strong>提爾有一條近乎鐵律的觀察：一家新創在最初幾個決定裡犯下的錯，日後幾乎無法修補。你可以在營運中途換供應商、改產品、調策略，但公司誕生時所奠下的那些根本結構——由誰共同創辦、股權怎麼切、控制權歸誰——一旦定型，就像混凝土一樣硬化了。開頭時看似不痛不癢的隨手安排，往往在幾年後變成拖垮整間公司的裂縫。</p>
<p><strong>共同創辦人：這是一樁婚姻</strong>挑共同創辦人（co-founder）不像挑員工，更像結婚。履歷漂亮、技能互補當然重要，但真正致命的是彼此的關係與默契。兩個素未謀面、只因為都很聰明就湊在一起創業的人，遲早會在壓力下爆炸。你該問的不是「他能力夠不夠強」，而是「當公司快撐不下去、大家都在氣頭上時，我還信得過這個人嗎」。創辦團隊的裂痕，是最常見也最難救的死因。</p>
<div class="section-break">＊ ＊ ＊</div>
<p><strong>把三種權力分清楚</strong>公司內部有三種東西常被混為一談，其實必須拆開來看：所有權（ownership，誰在法律上持有公司）、經營權（possession，誰每天實際在管事）、控制權（control，誰能在董事會上拍板）。創辦人、投資人與員工各自握有不同比例的這三樣，若一開始沒講清楚誰對什麼負責，等到利益衝突浮上檯面，模糊地帶就會變成內戰的戰場。</p>
<p><strong>董事會愈小愈好</strong>提爾主張董事會（board）人數要少，三人是理想值，最多別超過五人。人一多，開會就變成各說各話的表演，沒人真正扛責、也很難達成有魄力的決定。小董事會逼每個成員都得認真投入、彼此坦誠，反而更容易做出困難但正確的判斷。這是把「效率」看得比「代表性」更重的刻意選擇。</p>
<div class="section-break">＊ ＊ ＊</div>
<p><strong>要嘛全職上車，要嘛別上車</strong>核心的人必須全職投入、把身家綁在同一條船上。兼職顧問、掛名的遠端夥伴，聽起來彈性，實際上心不在此，關鍵時刻使不上力。利益一致，人才會為長期成敗真正拚命。</p>
<p><strong>少發現金，多給股權</strong>提爾偏好用股權（equity）而非高薪來綁住人。現金獎勵讓人只顧眼前這個月的收入，股權則把每個人的財富牢牢綁在公司的遙遠未來上——你要大家都盯著幾年後那座尚未建成的高樓，而不是明天的午餐錢。基礎打好了，公司才有資格談後面的一切。</p>
<p class="thought-question">🤔 思考：如果你正要和人合夥，哪一個「開頭的隨手安排」，最可能在三年後變成你補不回來的裂縫？</p>`,
      en:`<p><strong>The first move decides the ending</strong>Thiel offers what he treats almost as a law: the mistakes a startup makes in its very first decisions can almost never be repaired later. You can swap suppliers, pivot the product, or rethink strategy mid-flight, but the structural choices made at a company's birth—who co-founds it, how equity is split, who holds control—harden like poured concrete. The casual arrangements that feel harmless on day one often reappear years later as the cracks that bring the whole building down.</p>
<p><strong>Co-founders: this is a marriage</strong>Choosing a co-founder is less like hiring an employee and more like choosing a spouse. Impressive résumés and complementary skills matter, but what proves fatal is the relationship itself. Two people who barely know each other and team up simply because they are both smart will eventually detonate under pressure. The question is not "is this person capable" but "when the company is about to collapse and everyone is furious, will I still trust this person?" A rift in the founding team is the most common and least curable cause of death.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>Keep three kinds of power distinct</strong>Three things inside a company are constantly confused but must be pried apart: ownership (who legally holds the company), possession (who actually runs it day to day), and control (who can decide matters on the board). Founders, investors, and employees each hold different shares of these three. If no one spells out early who is responsible for what, the gray areas become the battlefield the moment interests collide.</p>
<p><strong>Smaller boards are better</strong>Thiel argues that a board should be small—three is ideal, and rarely more than five. A crowded board turns meetings into a theater of competing voices where no one truly owns the outcome and bold decisions become nearly impossible. A small board forces every member to engage seriously and speak honestly, which paradoxically makes hard but correct judgments easier. It is a deliberate choice to prize effectiveness over representation.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>On the bus full-time, or off it entirely</strong>The core people must be full-time and have their livelihoods tied to the same ship. Part-time advisors and remote partners-in-name-only sound flexible but are not really in it, and they fail you at the decisive moment. When incentives are aligned, people fight for the long-term outcome as if it were their own.</p>
<p><strong>Less cash, more equity</strong>Thiel prefers binding people with equity rather than large salaries. Cash rewards make people fixate on this month's paycheck; equity chains everyone's wealth to the company's distant future—you want the whole team staring at a tower not yet built, not at tomorrow's lunch money. Only once the foundation is sound does the company earn the right to worry about everything that comes after.</p>
<p class="thought-question">🤔 Reflect: If you were about to partner with someone, which "casual arrangement at the start" is most likely to become a crack you cannot repair three years from now?</p>`
    }
  },
  10:{
    num:{zh:`第十章`,en:`Chapter Ten`},
    title:{zh:`幫派的運作`,en:`The Mechanics of Mafia`},
    epigraph:{
      zh:`最好的團隊不像公司，比較像一群為同一件事著魔的人結成的部落。`,
      en:`The best teams feel less like a company and more like a tribe of people obsessed with the same thing.`
    },
    body:{
      zh:`<p><strong>「幫派」不是玩笑話</strong>提爾用「PayPal 幫」來形容早期一起打拚的那群人——後來他們各自散出去，又創辦或撐起了矽谷一整串知名公司。這個綽號聽起來誇張，卻精準地抓到一件事：真正強悍的新創，內部凝聚力像幫派、像部落，成員彼此之間有一種外人進不來的緊密感。他們不只是同事，而是一群為了同一個使命綁在一起的人。</p>
<p><strong>公司文化不是裝出來的</strong>很多人以為公司文化（company culture）就是免費零食、桌上足球、酷炫的辦公室。提爾說這完全搞錯了。文化不是你「有」什麼福利，而是你「是」什麼樣的一群人。福利誰都學得來，但那種為共同目標而生的認同感與歸屬感，是砸錢買不到的。真正的文化，是這群人本身。</p>
<div class="section-break">＊ ＊ ＊</div>
<p><strong>招募：找會為使命發光的人</strong>招人時，最該篩的不是技能清單，而是這個人會不會真心為你們的使命興奮。提爾建議創辦人問自己：憑什麼第20號員工要放棄大公司的優渥待遇，跑來加入你這間沒沒無聞的小公司？如果你答不出一個獨一無二的理由，那你招到的人也留不住。你要的是會為這件事發光的人，不是來領薪水的人。</p>
<p><strong>講清楚為什麼是你們</strong>好的招募說詞不是「我們福利很好、成長很快」——這種話每家公司都會講。真正打動人的，是說清楚為什麼你們正在做的事別人做不了、為什麼此時此刻只有這支團隊能做成。當一個人相信這個使命獨一無二，他才會把自己整個人投進來。</p>
<div class="section-break">＊ ＊ ＊</div>
<p><strong>緊密，而非分散</strong>提爾偏好讓團隊在物理與情感上都靠得很近。大家做著彼此相關的事、坐在一起、為同一件事日夜攪在一塊，關係自然變得緊密。這種緊密不是管理技巧，而是讓一群人願意在最難的時候不離不棄的根本黏著劑。</p>
<p><strong>重點是意義，不是福利</strong>說到底，能把一支團隊變成「幫派」的，從來不是撞球桌或免費午餐，而是意義與歸屬——一種「我們在一起做一件別人做不到的大事」的信念。人為錢而來，也為錢而走；為意義而來的人，才會在公司最黑暗的時刻還站在原地。</p>
<p class="thought-question">🤔 思考：你現在所在的團隊，把成員綁在一起的到底是福利，還是一件你們都相信、別人做不到的事？</p>`,
      en:`<p><strong>"Mafia" is not a joke</strong>Thiel uses "the PayPal Mafia" to describe the group who fought in the trenches together in the early days—people who later scattered and went on to found or carry a whole string of famous Silicon Valley companies. The nickname sounds like hyperbole, but it captures something exact: a genuinely fierce startup has an internal cohesion that resembles a mafia or a tribe, a closeness among members that outsiders cannot penetrate. They are not merely colleagues but people bound together by a single mission.</p>
<p><strong>Company culture is not something you fake</strong>Many people think company culture is free snacks, a foosball table, and a cool office. Thiel says this misses the point entirely. Culture is not what perks you have; it is what kind of people you are. Anyone can copy the perks, but the identity and belonging that grow around a shared purpose cannot be bought with money. The real culture is the people themselves.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>Recruiting: find people who light up for the mission</strong>When hiring, the thing to screen for is not a checklist of skills but whether the person is genuinely excited by your mission. Thiel suggests founders ask themselves: why would employee number twenty give up a comfortable package at a big company to join your obscure little startup? If you cannot name a unique reason, you cannot keep the people you hire. You want people who light up for the work, not people who show up for a paycheck.</p>
<p><strong>Spell out why it has to be you</strong>A good recruiting pitch is not "we have great perks and we're growing fast"—every company says that. What actually moves someone is spelling out why what you are doing cannot be done by anyone else, and why only this team, at this moment, can pull it off. When a person believes the mission is unique, they throw their whole self into it.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>Tight, not scattered</strong>Thiel prefers to keep teams close, both physically and emotionally. When people work on interlocking problems, sit together, and tangle over the same thing day and night, the bonds form naturally. This closeness is not a management trick; it is the fundamental glue that makes a group willing to stick together through the hardest stretches.</p>
<p><strong>Meaning, not perks</strong>In the end, what turns a team into a "mafia" is never the pool table or the free lunch, but meaning and belonging—the conviction that "together we are doing something big that no one else can do." People who come for money leave for money; only people who come for meaning are still standing when the company hits its darkest hour.</p>
<p class="thought-question">🤔 Reflect: On the team you're on now, what actually binds the members together—the perks, or something you all believe in that no one else can do?</p>`
    }
  },
  11:{
    num:{zh:`第十一章`,en:`Chapter Eleven`},
    title:{zh:`造出來，他們就會來嗎？`,en:`If You Build It, Will They Come?`},
    epigraph:{
      zh:`偉大的產品不會自己走到顧客面前；有人得把它送過去，而那個人常被工程師看不起。`,
      en:`A great product does not walk itself to the customer; someone has to carry it there—and engineers tend to look down on that someone.`
    },
    body:{
      zh:`<p><strong>「做出來就有人買」是個危險的神話</strong>工程師出身的創業者常抱著一種浪漫的信念：只要產品夠好，市場自然會來找我，銷售是多此一舉。提爾直言這是致命誤解。歷史上不乏產品優異卻默默死去的公司，因為沒人把它賣出去、送到對的人手上。產品會不會被看見，跟它有多好，是兩件事。</p>
<p><strong>銷售與通路本身就能造出壟斷</strong>提爾提出一個違反工程師直覺的主張：就算你的產品和對手沒什麼差異，光靠出色的銷售與通路（distribution/sales），也足以打造出壟斷地位。反過來說，再好的東西如果沒有一條把它送到顧客手上的路，就等於不存在。通路不是產品的附庸，它本身就是戰場。</p>
<div class="section-break">＊ ＊ ＊</div>
<p><strong>一道非過不可的數學題</strong>銷售能不能成立，最終是一道冷冰冰的算術：顧客終身價值（CLV）必須大於獲客成本（CAC）。你從一個顧客身上一輩子賺到的錢，要比你花在把他找來的成本更高，這門生意才活得下去。很多看似風光的公司，就是死在這道式子的錯誤一邊——賣力拉客，卻在每個客人身上淨賠錢。</p>
<p><strong>銷售是一道光譜，不是一種方法</strong>提爾把銷售攤成一整道光譜：從單價極高、要長期經營關係的複雜銷售，到業務員一對一登門的個人銷售，再到面向大眾的行銷廣告，最後到幾乎不花力氣就自我複製的病毒式傳播。關鍵在於，你的獲客成本落在哪，就決定你該用光譜上的哪一段——把便宜產品硬塞給高成本的業務團隊去賣，注定虧本。</p>
<div class="section-break">＊ ＊ ＊</div>
<p><strong>最糟的是那片「死亡地帶」</strong>光譜的兩端都有清楚的打法，最危險的是中間——產品單價不高不低，貴到無法純靠病毒傳播，又便宜到養不起專職業務去登門。這片沒人愛的死亡地帶，埋葬了無數自以為只要產品好就沒問題的公司。</p>
<p><strong>其實每個人都在銷售</strong>提爾最後點破：銷售不是業務部門的專利，而是無所不在卻被刻意隱形的技能。創辦人向投資人賣願景、向人才賣使命、向媒體賣故事，工程師以為自己「不搞銷售」，其實時時刻刻都在賣。真正厲害的銷售，正是好到讓你察覺不到它的存在。</p>
<p class="thought-question">🤔 思考：你手上正在做的事，CLV 真的大於 CAC 嗎——還是你只是很努力地在每個顧客身上賠錢？</p>`,
      en:`<p><strong>"Build it and they will come" is a dangerous myth</strong>Founders with an engineering background often carry a romantic belief: if the product is good enough, the market will find me on its own, and selling is superfluous. Thiel calls this a fatal misconception. History is littered with companies whose products were excellent yet died in silence, because no one sold them or carried them to the right people. Whether a product gets seen and how good it is are two entirely separate things.</p>
<p><strong>Distribution and sales alone can create a monopoly</strong>Thiel makes a claim that runs against every engineer's instinct: even if your product is barely differentiated from a rival's, superb distribution and sales alone can build a monopoly. Conversely, the finest thing in the world, without a path to carry it into customers' hands, might as well not exist. Distribution is not a servant of the product; it is a battlefield in its own right.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>A math problem you cannot skip</strong>Whether sales work comes down, in the end, to cold arithmetic: customer lifetime value (CLV) must exceed customer acquisition cost (CAC). The money you make from a customer over their whole life has to beat what you spend to find them, or the business cannot survive. Many glamorous-looking companies die on the wrong side of this equation—hustling to win customers while quietly losing money on every one.</p>
<p><strong>Sales is a spectrum, not a single method</strong>Thiel spreads selling across a whole spectrum: from complex sales, with sky-high price tags and relationships nurtured over years, to personal selling, where a rep shows up one-on-one, to marketing and advertising aimed at the masses, and finally to viral distribution, which replicates itself at almost no effort. The point is that your acquisition cost dictates which stretch of the spectrum you belong on—forcing a cheap product onto an expensive field-sales team is doomed to lose money.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>The deadly middle</strong>Both ends of the spectrum have clear playbooks; the real danger is the middle—a product priced neither high nor low, too expensive to spread purely by word of mouth, yet too cheap to support a dedicated salesperson knocking on doors. This unloved dead zone has buried countless companies that assumed a good product was all they needed.</p>
<p><strong>Everyone is actually selling</strong>Thiel's closing insight: selling is not the private domain of a sales department but a skill that is everywhere and deliberately made invisible. Founders sell a vision to investors, a mission to talent, a story to the press. Engineers who believe they "don't do sales" are in fact selling every minute. The best selling is precisely the kind so good you never notice it happening.</p>
<p class="thought-question">🤔 Reflect: For the thing you're building right now, does CLV truly exceed CAC—or are you just working very hard to lose money on every customer?</p>`
    }
  },
  12:{
    num:{zh:`第十二章`,en:`Chapter Twelve`},
    title:{zh:`人與機器`,en:`Man and Machine`},
    epigraph:{
      zh:`該問的不是「電腦能取代什麼人」，而是「人配上電腦，能做成什麼人和電腦各自都做不到的事」。`,
      en:`The question is not "what can computers replace people at," but "what can people paired with computers achieve that neither could alone."`
    },
    body:{
      zh:`<p><strong>互補，不是替代</strong>談到科技，最普遍的恐懼是機器會搶走人的工作、最終取代人類。提爾把這個框架整個翻過來：科技的正確角色是人的互補（complement），而非替代（substitute）。電腦最擅長的，恰恰是人最不擅長的——大規模、無疲勞地處理海量資料；而人擅長的判斷、意圖、脈絡理解，正是電腦最笨拙的地方。兩者是拼圖的兩塊，不是搶同一個位子。</p>
<p><strong>電腦是強化人的工具</strong>與其問「這台機器能不能取代這個人」，提爾要我們問「這台機器能把這個人變得多強」。好的科技像是給人裝上放大器：讓醫生看到自己漏掉的病灶、讓分析師從雜訊裡撈出訊號。機器不是來把人請出場，而是來把人的長處放大到前所未有的程度。</p>
<div class="section-break">＊ ＊ ＊</div>
<p><strong>最強的組合是人＋機器</strong>提爾主張，最好的事業往往建立在「人＋機器」的配對上：讓電腦負責它擅長的大規模資料運算，把可疑的線索標記出來，再交給人的判斷去做最後的裁決。純靠機器會漏掉需要脈絡與常識的東西，純靠人則跟不上資料的規模。把兩者接起來，才能達到任何一方單獨都到不了的境界。</p>
<p><strong>全球化是替代，科技是互補</strong>提爾在這裡拉出一條深刻的對比。全球化的本質是替代與資源競爭——更多的人做更多一樣的事，搶奪同一批有限的資源。科技的本質則是互補——創造出過去不存在的新能力，把餅做大而非搶餅。這也呼應了全書的主軸：真正的進步來自做新東西（0到1），而不是把舊東西複製更多份（1到n）。</p>
<div class="section-break">＊ ＊ ＊</div>
<p><strong>別把電腦想成人的對手</strong>把電腦擬人化、當成會跟人搶飯碗的對手，其實是想像力的貧乏。電腦沒有意圖、沒有慾望，它不「想要」任何東西——它是史上最強的工具，等著被有意圖的人拿去用。把它當敵人，你就浪費了一個能讓你變強十倍的夥伴。</p>
<p><strong>未來是人與機器一起</strong>提爾對未來的下注很明確：不是機器取代人的世界，而是人與機器並肩、各展所長的世界。誰能設計出讓兩者最漂亮互補的配對，誰就握有下一個時代最深的護城河。恐懼取代的人在防守，善用互補的人在建造未來。</p>
<p class="thought-question">🤔 思考：你怕電腦取代你的那件事，換個角度想——如果讓電腦替你做掉它，你被釋放出來的判斷力，能拿去做什麼它永遠做不到的事？</p>`,
      en:`<p><strong>Complement, not substitute</strong>When technology comes up, the most common fear is that machines will take people's jobs and ultimately replace humans. Thiel flips the frame entirely: technology's proper role is to complement people, not to substitute for them. What computers do best is exactly what people do worst—processing vast oceans of data at scale, tirelessly. And the judgment, intent, and grasp of context that people are good at are precisely where computers are clumsiest. The two are two pieces of a puzzle, not rivals for one seat.</p>
<p><strong>Computers are tools that amplify people</strong>Rather than asking "can this machine replace this person," Thiel wants us to ask "how much stronger can this machine make this person." Good technology is like bolting an amplifier onto a human: it lets a doctor see the lesion they would have missed, lets an analyst pull a signal out of the noise. The machine is not there to usher the person off the stage but to magnify their strengths to an unprecedented degree.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>The strongest combination is man plus machine</strong>Thiel argues that the best businesses are often built on a pairing of man and machine: let the computer do the large-scale data crunching it excels at, flag the suspicious leads, and hand them to human judgment for the final ruling. Machines alone miss what needs context and common sense; humans alone cannot keep pace with the scale of the data. Only by joining the two do you reach a level neither could reach on its own.</p>
<p><strong>Globalization substitutes; technology complements</strong>Here Thiel draws a profound contrast. Globalization is, at heart, substitution and competition over resources—more people doing more of the same thing, fighting over the same finite pool. Technology, at heart, is complement—creating new capabilities that did not exist before, growing the pie rather than fighting over it. This echoes the book's spine: real progress comes from making new things (zero to one), not from copying old things more times (one to n).</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>Stop imagining the computer as your opponent</strong>Personifying the computer as a rival that will grab your dinner is a failure of imagination. A computer has no intent and no desire; it does not "want" anything—it is the most powerful tool ever built, waiting to be picked up by a person who does have intent. Treat it as an enemy and you squander a partner that could make you ten times stronger.</p>
<p><strong>The future is people and machines together</strong>Thiel's bet on the future is explicit: not a world where machines replace people, but one where people and machines stand side by side, each doing what it does best. Whoever can design the pairing where the two complement each other most beautifully will hold the deepest moat of the coming era. Those who fear replacement are playing defense; those who master complement are building the future.</p>
<p class="thought-question">🤔 Reflect: The thing you fear a computer replacing you at—turn it around: if you let the computer take it off your hands, what could the judgment you're freed up to use go do that the computer never could?</p>`
    }
  }
});


Object.assign(CHAPTER_CONTENT, {
  13:{
    num:{zh:`第十三章`,en:`Chapter Thirteen`},
    title:{zh:`綠色能源的迷思`,en:`Seeing Green`},
    epigraph:{
      zh:`一整個產業同時失敗，通常不是運氣不好，而是它們一起答錯了同一組問題。`,
      en:`When a whole industry fails at once, it is rarely bad luck—usually they all flunked the same set of questions.`
    },
    body:{
      zh:`<p><strong>一場集體豪賭的崩塌</strong>二○○○年代末，清潔科技（cleantech）被吹捧成下一個大浪潮。太陽能、風力、電池、生質燃料——投資人、政府補貼與創業者一窩蜂湧入，仿佛只要掛上「綠色」兩個字就必然勝出。結果幾乎是集體覆滅：大量新創燒光資金、宣告破產，投資人血本無歸。這不是幾家公司運氣不好，而是整個產業犯了同一個錯——他們沉醉於一個宏大而模糊的社會使命，卻沒有回答任何一個能讓「事業」成立的硬問題。</p>

      <p><strong>每個事業都必須回答的七個問題</strong>Thiel 認為，任何想成功的公司，都必須誠實面對這七個問題（<strong>the seven questions</strong>）：一、<strong>工程問題</strong>——你的技術是不是真的突破，好上十倍，而不是只好一點點？二、<strong>時機問題</strong>——現在是不是切入這個領域的對的時刻？三、<strong>壟斷問題</strong>——你有沒有先從一個小市場拿下大份額？四、<strong>人才問題</strong>——你有對的團隊嗎？五、<strong>通路問題</strong>——你不只做得出產品，還賣得出去、送得到顧客手上嗎？六、<strong>持久問題</strong>——十年、二十年後，你還守得住這個市場地位嗎？七、<strong>秘密問題</strong>——你有沒有看見別人都沒看見的獨特洞見？</p>

      <div class="section-break">＊ ＊ ＊</div>

      <p><strong>七題全過的範例：特斯拉</strong>Thiel 用 Tesla（特斯拉）當作正面教材：這是少數七題都答得漂亮的公司。工程上，它的電動車與電池整合是真突破；時機上，它抓準了政府補貼與消費者情緒的轉折點；壟斷上，它先鎖定高價電動跑車這個小眾市場再逐步向下擴張；人才上，Elon Musk（伊隆·馬斯克）帶著一支既懂工程又懂商業的團隊；通路上，它自建體驗店與直營銷售，繞過傳統經銷；持久上，它靠品牌與充電網路築起護城河；秘密上，它看見了「電動車可以先當成有錢人想要的奢侈品，而不是苦哈哈的環保犧牲品」這個逆向真相。</p>

      <p><strong>一題都答不好的太陽能泡沫</strong>對照之下，大多數太陽能泡沫裡的公司，幾乎每一題都答不好。他們的技術往往只比對手好一點點（工程不及格）；一窩蜂殺進紅海（時機與壟斷不及格）；團隊由西裝筆挺的推銷者而非真正的建造者組成（人才不及格）；以為只要東西夠綠就會有人買（通路不及格）；面對中國低價產能毫無抵抗力（持久不及格）；也說不出任何別人沒看見的秘密（秘密不及格）。他們把「產業會成長」誤當成「我這家公司會賺錢」——但一個成長的市場，正是最多對手湧入、利潤被殺穿的地方。</p>

      <div class="section-break">＊ ＊ ＊</div>

      <p><strong>使命感不能取代硬問題</strong>清潔科技泡沫最深的教訓是：偉大的使命救不了一個答錯基本問題的事業。「拯救地球」是個令人熱血的口號，但它不能替你回答技術有沒有突破、市場守不守得住。反過來說，越是動人的使命，越容易讓人放鬆對這七題的檢查——因為大家都以為「這麼重要的事怎麼可能不成功」。真正的綠色事業，不是把「綠色」當口號，而是先把自己當成一門必須通過七題的生意。</p>

      <p class="thought-question">🤔 思考：拿你手上正在做、或最想投入的一件事，逐一誠實回答這七個問題——你會在第幾題卡住？</p>`,
      en:`<p><strong>The collapse of a collective bet</strong>In the late 2000s, cleantech was hyped as the next great wave. Solar, wind, batteries, biofuels—investors, government subsidies, and founders all rushed in, as if slapping the word "green" on a company guaranteed victory. The result was near-total wipeout: countless startups burned through their cash, filed for bankruptcy, and left investors with nothing. This wasn't a few unlucky firms; the whole industry made the same mistake. They got drunk on a grand, fuzzy social mission and never answered a single one of the hard questions that make a <em>business</em> real.</p>

      <p><strong>The seven questions every business must answer</strong>Thiel argues that any company hoping to succeed must honestly confront these <strong>seven questions</strong>: One, the <strong>engineering question</strong>—is your technology a real breakthrough, ten times better, not just marginally better? Two, the <strong>timing question</strong>—is now the right moment to start this? Three, the <strong>monopoly question</strong>—are you starting with a big share of a small market? Four, the <strong>people question</strong>—do you have the right team? Five, the <strong>distribution question</strong>—can you not only build the product but actually sell and deliver it? Six, the <strong>durability question</strong>—will you still hold your position ten, twenty years from now? Seven, the <strong>secret question</strong>—have you seen a unique opportunity that others don't?</p>

      <div class="section-break">◆ ◆ ◆</div>

      <p><strong>The one that passed all seven: Tesla</strong>Thiel holds up Tesla as the model: one of the rare companies that answered all seven well. On engineering, its integration of electric drivetrain and batteries was a genuine breakthrough. On timing, it caught the turning point in subsidies and consumer mood. On monopoly, it locked down the small niche of high-end electric sports cars first, then worked its way down. On people, Elon Musk led a team that understood both engineering and business. On distribution, it built its own showrooms and direct sales, bypassing traditional dealers. On durability, its brand and charging network formed a moat. On secrets, it saw the contrarian truth that an electric car could first be sold as a luxury the rich <em>want</em>, not a grim eco-sacrifice.</p>

      <p><strong>The solar bubble that flunked every one</strong>By contrast, most companies in the solar bubble flunked nearly every question. Their tech was usually only slightly better than rivals' (engineering: fail). They piled into a red ocean (timing and monopoly: fail). Their teams were slick salesmen rather than real builders (people: fail). They assumed anything green enough would sell itself (distribution: fail). They had no defense against cheap Chinese capacity (durability: fail). And they could name no secret that others had missed (secret: fail). They mistook "the industry will grow" for "my company will make money"—but a growing market is exactly where the most rivals pour in and profits get competed away.</p>

      <div class="section-break">◆ ◆ ◆</div>

      <p><strong>A mission can't replace the hard questions</strong>The deepest lesson of the cleantech bubble: a great mission can't save a business that answers the basic questions wrong. "Save the planet" is a stirring slogan, but it won't answer for you whether your tech is a breakthrough or your market defensible. Worse, the more moving the mission, the easier it is to relax your scrutiny of these seven questions—because everyone assumes something this important simply couldn't fail. A real green business doesn't treat "green" as a slogan; it treats itself first as an enterprise that must pass all seven.</p>

      <p class="thought-question">🤔 Reflect: Take the one thing you're building now—or most want to pour yourself into—and answer these seven questions honestly, one by one. Which question is the first to trip you up?</p>`
    }
  },
  14:{
    num:{zh:`第十四章`,en:`Chapter Fourteen`},
    title:{zh:`創辦人的弔詭`,en:`The Founder's Paradox`},
    epigraph:{
      zh:`最能推動改變的人，往往是那些從一開始就顯得格格不入的人。`,
      en:`The people most able to drive change are often the ones who never quite fit in from the start.`
    },
    body:{
      zh:`<p><strong>創辦人為何總是「怪人」</strong>翻開偉大公司的歷史，你會發現創辦人（<strong>founder</strong>）幾乎都是極端、矛盾、難以歸類的人物。他們常常同時佔據看似對立的兩端：既是圈內人，也是局外人；既異常強悍，又出奇脆弱；既被眾人追捧，又被輿論醜化。這些鮮明到近乎怪異的特質，不是缺陷，而正是他們能帶著一群人從無到有造出新事物的能量來源。一個溫吞、四平八穩、樣樣都在平均值的人，很難撕開現實的縫，做出從0到1的事。</p>

      <p><strong>矛盾的兩端可以集於一身</strong>創辦人往往同時是天生的內部人（含著金湯匙、天賦異稟）又是被放逐的外部人（怪咖、被排擠、走偏門）。這種矛盾不是隨機噪音，而是有功能的：正因為他既懂遊戲規則、又不甘於被規則束縛，他才會去做別人不敢做的選擇。他可能在某個維度上強到不可思議，卻在另一個維度上脆弱得可笑；他可能一半是名人、一半是被醜化的箭靶。這些看似衝突的面向，其實是同一種極端性格的不同投影。</p>

      <div class="section-break">＊ ＊ ＊</div>

      <p><strong>創辦人的特質不服從常態分布</strong>Thiel 指出一個關鍵：創辦人的特質不服從常態分布，它是一種冪次（<strong>power law</strong>）。普通人的性格大多擠在鐘形曲線的中段，而創辦人被甩到極端的尾巴上——他們的怪異被放大、被神話、也被眾人有意無意地強化。社會會把某些人推向「超凡」或「妖魔」的極端位置，而創辦人往往樂於扮演這個被放大的角色，因為那份鮮明本身就是一種號召力：它讓人願意追隨、願意相信一個尚未存在的未來。</p>

      <p><strong>被追捧與被妖魔化，其實同源</strong>正因為創辦人被放到聚光燈下，社會對他們的態度也走向兩個極端：一會兒把他們捧成天神般的救世主，一會兒又把他們踩成貪婪冷血的惡棍。這兩種反應看似相反，其實出自同一個機制——我們需要把「不平凡」投射到具體的人身上。危險在於：過度神化，會讓創辦人相信自己無所不能而失控；過度妖魔化，則會讓社會失去願意冒險去造新東西的人。兩種極端都是誤讀。</p>

      <div class="section-break">＊ ＊ ＊</div>

      <p><strong>社會需要創辦人，也需要清醒地看待他們</strong>Thiel 的結論是：社會離不開創辦人，因為只有這種極端、敢於下注、能把一群人凝聚在一個尚不存在的願景之下的人，才能推動從0到1的突破。但我們該做的，不是把他們當偶像膜拜，也不是把他們當怪物討伐，而是清醒地認識到——那份個人的鮮明與怪異，是有功能的稀缺品。與此同時，創辦人自己也要記得：真正的價值來自他所建造的事業，而不是自己被放大的神話。別把光環當成本事。</p>

      <p class="thought-question">🤔 思考：你身邊那個「格格不入」的人，你是急著把他捧上神壇、還是急著把他拉下來——有沒有第三種看法？</p>`,
      en:`<p><strong>Why founders are always "odd"</strong>Open the history of any great company and you'll find that the <strong>founder</strong> is almost always an extreme, contradictory, hard-to-classify figure. They often occupy seemingly opposite poles at once: insider and outsider, unusually strong and strangely fragile, celebrated and vilified. These traits, vivid to the point of strangeness, aren't defects—they're the very source of energy that lets someone rally a group and build something from nothing. A mild, well-rounded person who sits at the average on every axis rarely tears open a gap in reality to do the zero-to-one thing.</p>

      <p><strong>Opposite extremes in one person</strong>Founders are often both natural insiders (born privileged, exceptionally gifted) and exiled outsiders (weirdos, pushed to the margins, taking the odd path). This contradiction isn't random noise; it's functional. Precisely because a founder both understands the rules of the game and refuses to be bound by them, he makes choices others don't dare make. He may be unbelievably strong on one dimension yet laughably fragile on another; half celebrity, half scapegoat. These clashing facets are just different projections of the same extreme character.</p>

      <div class="section-break">◆ ◆ ◆</div>

      <p><strong>Founders don't fit a normal distribution</strong>Thiel points to something crucial: a founder's traits don't obey a normal distribution—they follow a <strong>power law</strong>. Ordinary people's personalities cluster in the middle of the bell curve, while founders are flung out onto the extreme tails. Their strangeness gets amplified, mythologized, and—half-consciously—reinforced by everyone around them. Society pushes certain people toward the "superhuman" or "demonic" extreme, and founders often relish playing this amplified role, because that vividness is itself a form of pull: it makes people willing to follow, willing to believe in a future that doesn't yet exist.</p>

      <p><strong>Celebrated and demonized share one root</strong>Because founders stand in the spotlight, society's attitude toward them swings to two extremes: one moment hailing them as godlike saviors, the next stamping them as greedy, cold-blooded villains. These reactions look opposite but spring from the same mechanism—our need to project the "extraordinary" onto a specific person. The danger cuts both ways: over-deify a founder and he starts believing he's omnipotent and loses control; over-demonize founders and society loses the very people willing to risk building new things. Both extremes are misreadings.</p>

      <div class="section-break">◆ ◆ ◆</div>

      <p><strong>Society needs founders—and needs to see them clearly</strong>Thiel's conclusion: society can't do without founders, because only such extreme people—willing to bet, able to gather a group beneath a vision that doesn't yet exist—can drive zero-to-one breakthroughs. But our task is neither to worship them as idols nor to hunt them as monsters, but to recognize soberly that their personal vividness and strangeness is a functional, scarce commodity. At the same time, founders themselves must remember: the real value comes from the enterprise they build, not from their own amplified myth. Don't mistake the halo for the ability.</p>

      <p class="thought-question">🤔 Reflect: That "misfit" in your life—are you rushing to put them on a pedestal, or rushing to tear them down? Is there a third way to see them?</p>`
    }
  },
  15:{
    num:{zh:`結語`,en:`Conclusion`},
    title:{zh:`停滯或奇點`,en:`Stagnation or Singularity?`},
    epigraph:{
      zh:`更好的未來不會自己走來；它只在有人動手去造的地方出現。`,
      en:`A better future doesn't arrive on its own; it appears only where someone builds it by hand.`
    },
    body:{
      zh:`<p><strong>人類文明的四種可能未來</strong>在全書的最後，Thiel 把眼光拉到最遠處：人類文明的長期未來，大致有四種樣貌。第一種是「反覆崩潰」——文明起起落落、盛極而衰、再重來。第二種是「停滯高原」（<strong>停滯</strong>）——我們爬到某個技術與生活水準的平台後就卡住，長期原地踏步。第三種是「滅絕」——某場全球性的災難把一切歸零。第四種是「起飛」——靠著加速的科技突破，人類進入一個遠比今天更好的階段。這四條路，決定於我們今天怎麼選擇、怎麼行動。</p>

      <p><strong>別把希望寄託在自動降臨的奇點</strong>很多人把第四種未來想像成「奇點」（<strong>singularity</strong>）——科技會自己指數式加速，某一天突然把我們帶進烏托邦，彷彿只要坐著等，未來就會自動變好。Thiel 對這種被動的樂觀提出警告：奇點不是一台會自己啟動的自動販賣機。如果沒有一個又一個具體的人、在一件又一件具體的事上做出突破，所謂的加速根本不會發生。把未來外包給「歷史的趨勢」或「科技的必然」，正是通往停滯的最快方式。</p>

      <div class="section-break">＊ ＊ ＊</div>

      <p><strong>停滯不是安全，而是慢性的危險</strong>值得警惕的是：停滯（<strong>停滯</strong>）看起來最安全，其實暗藏最深的風險。一個停止創新的世界，資源會越來越緊、競爭會越來越血腥、人們會為了固定大小的餅互相廝殺。今天我們享有的富足，是過去一代代人「從0到1」累積下來的紅利；如果我們這一代停下來，只滿足於把舊東西複製到全世界（從1到n），那麼我們留給後代的，將是一個沒有新東西、只剩零和爭奪的世界。停滯不是靜止的太平，而是緩慢的下墜。</p>

      <p><strong>通往更好未來的唯一路：親手從0到1</strong>Thiel 給出的答案清楚而樸素：通往更好未來的唯一路，不是等待奇點，而是每個人在自己的工作裡，找出一件別人還沒做過的新事物，親手把它從0做到1。這不是少數天才的專利，而是每個認真對待自己領域的人都能參與的行動。你不需要拯救全世界，你只需要在你最懂、最在意的那個角落，創造出一樣前所未有的東西。無數個這樣的「從0到1」疊加起來，才是文明真正的起飛。</p>

      <div class="section-break">＊ ＊ ＊</div>

      <p><strong>我們的任務</strong>整本書收束於此：我們的任務，是找出獨一無二的方式，去創造新的東西。這既是對創業者的召喚，也是對每一個讀者的提醒——不要順從地滑進「不明確的樂觀」，等別人、等趨勢、等奇點替你把未來造好。真正的進步永遠是垂直的、明確的、由具體的人動手完成的。停滯或奇點，不是命運替我們決定的選擇題，而是我們今天每一次「要不要去做那件還沒人做過的事」的累加結果。</p>

      <p class="thought-question">🤔 思考：如果更好的未來只在「有人動手」的地方出現，那麼在你的領域裡，那件「還沒有人做、而你能做」的事是什麼？</p>`,
      en:`<p><strong>Four possible futures for civilization</strong>At the very end of the book, Thiel pulls his gaze to the farthest horizon: humanity's long-term future takes roughly four shapes. First, recurrent collapse—civilization rises and falls, peaks and crashes, and starts over. Second, a plateau of <strong>stagnation</strong>—we climb to some level of technology and living standards and then get stuck, marching in place for the long haul. Third, extinction—some global catastrophe zeroes everything out. Fourth, takeoff—accelerating breakthroughs carry humanity into a stage far better than today. Which of these four roads we walk is decided by how we choose and act now.</p>

      <p><strong>Don't pin your hopes on a singularity that arrives on its own</strong>Many imagine the fourth future as a <strong>singularity</strong>—technology accelerating exponentially on its own, one day suddenly delivering us into utopia, as if the future gets better automatically while we sit and wait. Thiel warns against this passive optimism: the singularity is not a vending machine that switches itself on. Without one concrete person after another making a breakthrough on one concrete thing after another, no such acceleration happens at all. Outsourcing the future to "the trend of history" or "the inevitability of technology" is the fastest road to stagnation.</p>

      <div class="section-break">◆ ◆ ◆</div>

      <p><strong>Stagnation isn't safety—it's a slow danger</strong>Here's the warning: <strong>stagnation</strong> looks safest but hides the deepest risk. A world that stops innovating grows tighter on resources, bloodier in competition, and pits people against each other over a fixed-size pie. The abundance we enjoy today is a dividend accumulated by generation after generation going from zero to one. If our generation stops—content merely to copy old things across the globe (one to n)—then what we bequeath to our descendants is a world with nothing new, left only with zero-sum scrabbling. Stagnation isn't a peaceful standstill; it's a slow descent.</p>

      <p><strong>The only road to a better future: build from zero to one, by hand</strong>Thiel's answer is clear and plain: the only road to a better future is not to wait for a singularity, but for each person, in their own work, to find one new thing no one has done before and build it from zero to one, by hand. This is not the privilege of a few geniuses; it's an action open to anyone who takes their own field seriously. You don't need to save the whole world—you only need to create something unprecedented in the corner you know best and care about most. Countless such zero-to-ones, stacked together, are what real civilizational takeoff is made of.</p>

      <div class="section-break">◆ ◆ ◆</div>

      <p><strong>Our task</strong>The whole book comes to rest here: our task is to find singular ways to create new things. This is both a summons to founders and a reminder to every reader—do not slide obediently into "indefinite optimism," waiting on others, on trends, on a singularity to build the future for you. Real progress is always vertical, definite, and completed by the hands of concrete people. Stagnation or singularity is not a multiple-choice question fate decides for us; it is the accumulated sum of every one of today's decisions about whether to go do the thing no one has done yet.</p>

      <p class="thought-question">🤔 Reflect: If a better future appears only where someone builds it, then in your field, what is the thing "no one has done yet, that you could do"?</p>`
    }
  }
});


// ==== 附錄：站長心得 ====
Object.assign(CHAPTER_CONTENT, {
  16: {
    num: { zh: '附錄 · 讀者心得', en: 'Appendix · Reader’s Review' },
    title: { zh: '給想創造未來的人', en: 'For Those Who Want to Build the Future' },
    epigraph: { zh: '「選擇做什麼，遠比把事情做好更重要。」　— 翰林書僮', en: '“What you choose to do matters far more than doing it well.”　— Kun Han Le' },
    body: {
      zh: `
<p><em>這一章整理本站站長翰林書僮（Kun Han Le）於 2018 年寫下的讀後心得，以下為忠實摘要，保留他的重點與觀察。</em></p>
<p>站長把《從0到1》視為一部必讀經典，還引用 Nassim Taleb 的評語強調它「該看三遍才能真正讀懂」。他有一個更在地的觀察：台灣人對商業的思考往往不夠深入、偏向代工與複製，而這本書提供的正是那種缺乏的<strong>哲學層次的商業思考</strong>。</p>
<div class="section-break">＊ ＊ ＊</div>
<p><strong>他抓出的幾條主線。</strong>其一是<strong>水平 vs 垂直進步</strong>：水平進步（從1到100）是複製已成功的方法、導向全球化；垂直進步（從0到1）才是靠科技開創新事物，是人類真正的希望。其二是<strong>創新式壟斷</strong>：「只有壟斷的商業才會有持續性的高利潤」，也才吸引得到頂尖人才，而競爭反而讓利潤消失。</p>
<p>其三是他印象最深的<strong>冪次法則</strong>：「人生的某幾個決定，遠比其他決定的總和更重要。」他特別點出，教育系統錯誤地教我們「把事情做好就行」，但真正關鍵的是——<strong>選擇做什麼，遠比把事情做好重要</strong>。其四是<strong>銷售的隱形性</strong>：最好的銷售看不見，所以人們低估它；而正確做法是先鎖定一個特定族群、在裡面做到壟斷，再往外擴。他也記下書中用<strong>太陽能泡沫的失敗與特斯拉的成功</strong>，來說明「七個成功條件」的對照。</p>
<div class="section-break">＊ ＊ ＊</div>
<p><strong>他最看重的起點。</strong>站長認為全書最具代表性的，是那道開篇的面試題：<strong>「有什麼是你跟大部分人看法不同、但你覺得很重要的事實？」</strong>這句話濃縮了提爾最強調的——<strong>獨特的秘密與逆向思考</strong>。能誠實回答它，才有從0到1的可能。</p>
<p><strong>他的結論。</strong>站長的推薦語很直接：<strong>「大部分關心台灣未來的人，都應該再三仔細閱讀這本書。」</strong>他相信，對一個習慣了複製與代工的環境來說，這本薄書提供的「創造新事物」的思維，正是產業升級最缺、也最需要的一課。</p>
<p class="thought-question">🤔 思考：用站長最在意的那道題問自己——有什麼是你跟大多數人看法不同、但你深信重要的事實？如果它是真的，你能用它從0做到1嗎？</p>
`,
      en: `
<p><em>This chapter draws together the site owner Kun Han Le’s review, written in 2018. What follows is a faithful condensation, keeping his points and observations.</em></p>
<p>He treats Zero to One as an essential classic, citing Nassim Taleb’s remark that it “should be read three times to truly grasp.” He adds a more local observation: business thinking in Taiwan often runs shallow, tilted toward contract-manufacturing and copying, and what this book offers is exactly the missing thing — <strong>business thinking at a philosophical level</strong>.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>The threads he pulls out.</strong> First, <strong>horizontal vs. vertical progress</strong>: horizontal (1 to 100) copies what already works and leads to globalization; vertical (0 to 1) creates the new through technology, and is humanity’s real hope. Second, <strong>creative monopoly</strong>: “only a monopoly business earns durable, high profit,” and only it attracts top talent, while competition makes profit disappear.</p>
<p>Third, the one that struck him most — the <strong>power law</strong>: “a few of life’s decisions matter more than all the others combined.” He notes that the education system wrongly teaches us to “just do things well,” when what truly matters is that <strong>what you choose to do matters far more than doing it well</strong>. Fourth, <strong>the invisibility of sales</strong>: the best selling is unseen, so people underrate it; the right move is to first dominate a specific niche, then expand outward. He also noted the book’s contrast of <strong>the solar-bubble failures with Tesla’s success</strong> to illustrate the “seven conditions for success.”</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>The starting point he prized.</strong> For him, the book’s most representative moment is its opening interview question: <strong>“What is something you believe to be true and important that most people disagree with?”</strong> The line distills what Thiel stresses most — <strong>a unique secret and contrarian thinking</strong>. Only by answering it honestly does a zero-to-one become possible.</p>
<p><strong>His conclusion.</strong> His recommendation is blunt: <strong>“Anyone who cares about the future should read this book, carefully, again and again.”</strong> He believes that for an environment used to copying and contract work, the “create the new” mindset this thin book offers is exactly the lesson industrial upgrading most lacks and most needs.</p>
<p class="thought-question">🤔 Reflect: Ask yourself his favorite question — what is something you believe true and important that most people disagree with? If it is true, could you use it to go from zero to one?</p>
`
    }
  }
});

