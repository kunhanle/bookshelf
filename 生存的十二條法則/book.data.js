// ==== 生存的十二條法則 12 Rules for Life · 中英雙語 metadata（非文學框架）====
const BOOK = {
  slug: 'twelverules',
  langs: ['zh', 'en'],
  title: { zh: '生存的十二條法則', en: '12 Rules for Life' },
  author: { zh: 'Jordan B. Peterson（喬登‧彼得森）', en: 'Jordan B. Peterson' },
  theme: {
    'bg-primary': '#15161a', 'bg-secondary': '#1c1d22', 'bg-card': '#22242a', 'bg-elevated': '#2a2c34',
    'text-primary': '#e8e4da', 'text-secondary': '#b2ada1', 'text-muted': '#7d786e',
    'accent': '#bb8a3e', 'accent-light': '#d7ab5f', 'accent-glow': 'rgba(187,138,62,0.30)',
    'rose': '#b5555a', 'jade': '#6f9a7e', 'blue': '#5f83a8', 'gold': '#c9a24e',
    'border': 'rgba(187,138,62,0.16)',
    atmosphere: { fall: 14, streak: 6, fallRadius: '50%' },
    dayMode: { 'bg-primary': '#eee9dd', 'bg-secondary': '#e4ddcc', 'bg-card': '#faf6ec', 'bg-elevated': '#f1ebda', 'text-primary': '#2a2820', 'text-secondary': '#524d40', 'text-muted': '#847d6c', 'border': 'rgba(150,115,55,0.22)' }
  },
  cover: {
    seal: '序',
    subtitle: { zh: '混亂生活的解藥', en: 'An Antidote to Chaos' },
    desc: { zh: '生命是混亂與苦難，<br>而承擔責任，是唯一的解藥。', en: 'Life is chaos and suffering;<br>to shoulder responsibility is the one antidote.' }
  },
  musicPrompt: { zh: '在混亂與秩序的邊界上站定，<br>是否播放一段背景音樂？', en: 'Stand firm at the border of chaos and order —<br>shall we play some music?' },
  labels: {
    nav: { characters: { zh: '概念譜', en: 'Concepts' }, timeline: { zh: '思想軸', en: 'Ideas' } },
    headers: { characters: { zh: '核心概念關係圖', en: 'Map of Core Concepts' }, timeline: { zh: '全書的思想骨架', en: 'The Backbone of the Book' } },
    subheads: { characters: { zh: '點擊概念卡或關係圖，看秩序、責任、意義與真理如何環環相扣', en: 'Click a concept card or the map to see how order, responsibility, meaning, and truth interlock' }, timeline: { zh: '從秩序與混亂，到十二條法則的思想脈絡', en: 'From order and chaos to the thought behind the twelve rules' } },
    timelineTypes: { history: { zh: '思想源流', en: 'Intellectual Source' }, novel: { zh: '全書骨架', en: 'The Backbone' }, character: { zh: 'Peterson 的路', en: "Peterson's Path" } },
    charDetail: { intro: { zh: '概念說明', en: 'The Idea' }, analysis: { zh: '深入解讀', en: 'A Closer Look' }, related: { zh: '相關概念', en: 'Related Concepts' }, tags: { zh: '關鍵詞', en: 'Keywords' }, empty: '—' },
    legend: { lead: { zh: '核心引擎', en: 'Core Engine' }, major: { zh: '重要概念', en: 'Key Concept' }, minor: { zh: '延伸概念', en: 'Extension' }, edge: { zh: '概念關聯', en: 'Conceptual Link' } }
  },
  intro: {
    subtitle: { zh: '在閱讀之前，先認識這套「在混亂中站穩」的人生哲學', en: 'Before you read, meet this philosophy for standing firm in chaos' },
    author: {
      name: { zh: 'Jordan B. Peterson（喬登‧彼得森）', en: 'Jordan B. Peterson' },
      portrait: { zh: '序', en: 'P' },
      years: { zh: '1962 —　加拿大臨床心理學家', en: '1962 —　Canadian clinical psychologist' },
      bio: { zh: '加拿大臨床心理學家、多倫多大學教授。以嚴謹又充滿人文關懷的方式，把演化生物學、心理學、神話與宗教編織成對「人該如何生活」的思考。學術代表作是艱深的《意義的地圖》(1999)；而讓他成為全球現象的，是這本源自網路問答、後來寫成的《生存的十二條法則》(2018)——用十二條看似樸素的守則，回應一個古老的問題：在充滿苦難與混亂的人生裡，人該如何站直、如何活得有意義。', en: 'A Canadian clinical psychologist and professor at the University of Toronto. With rigor and deep humanity, he weaves evolutionary biology, psychology, myth, and religion into a meditation on how a person should live. His academic work is the dense Maps of Meaning (1999); what made him a global phenomenon is this book, grown from an online answer and later written out — 12 Rules for Life (2018) — which answers, through twelve deceptively plain rules, an ancient question: in a life full of suffering and chaos, how does one stand up straight and live with meaning.' }
    },
    cards: [
      { icon: '☯️', title: { zh: '核心框架', en: 'The Core Frame' }, text: { zh: '人生擺盪在「秩序」（已知、安全、卻可能僵化）與「混亂」（未知、危險、卻藏著可能）之間。最好的人生，走在兩者的邊界上——一腳踩穩已知，一腳伸向未知。這條界線，是全書所有法則的舞台。', en: 'Life sways between order (the known, safe, but liable to rigidity) and chaos (the unknown, dangerous, but full of possibility). The best life is lived on the border of the two — one foot planted in the known, one reaching into the unknown. That border is the stage for every rule in the book.' } },
      { icon: '🏋️', title: { zh: '存有即受苦', en: 'Being Is Suffering' }, text: { zh: 'Peterson 從不假裝人生輕鬆。他坦承存有本質上充滿苦難與哀傷；但他的解藥不是逃避，而是「自願承擔起最沉重的責任」——正是在承擔裡，人才找得到足以對抗苦難的意義。', en: "Peterson never pretends life is easy. He admits that Being is essentially full of suffering and sorrow; but his antidote is not escape — it is to voluntarily take on the heaviest responsibility. It is precisely in that burden that one finds the meaning strong enough to stand against suffering." } },
      { icon: '🗣️', title: { zh: '說真話', en: 'Tell the Truth' }, text: { zh: '全書最反覆的叮嚀之一，是「說真話，至少別說謊」。他認為謊言會讓一個人、一個社會由內部腐爛（他常引索忍尼辛與極權的教訓）；而真話，是你唯一能安穩站立其上的地基。', en: 'One of the book’s most repeated charges is “tell the truth — or at least don’t lie.” He holds that lies rot a person, and a society, from within (he often invokes Solzhenitsyn and the lessons of totalitarianism); truth is the one ground you can stand on securely.' } },
      { icon: '🧭', title: { zh: '閱讀建議', en: 'How to Read' }, text: { zh: '先看「概念譜」抓住秩序/混亂、存有、責任、意義、真理這幾條主線，再對照「思想軸」看全書的骨架，然後逐條讀十二法則。別被「守則」的樸素外表騙了——每一條背後，都是一整套深沉的思考。', en: 'Start with the Concepts map to grasp the main threads — order/chaos, Being, responsibility, meaning, truth — read against the Ideas timeline for the book’s backbone, then work through the twelve rules one by one. Don’t be fooled by the plainness of the “rules”: behind each lies a whole depth of thought.' } }
    ],
    guide: [
      { h: { zh: '先抓核心主線', en: 'Grasp the main threads first' }, p: { zh: '在「概念譜」認清秩序與混亂、存有與受苦、責任、意義、真理這幾條貫穿全書的主線，是讀懂十二法則的地基。', en: 'In the Concepts map, get the threads that run through the whole book — order and chaos, Being and suffering, responsibility, meaning, truth — the foundation for understanding the twelve rules.' } },
      { h: { zh: '跟著思想骨架讀', en: 'Follow the backbone' }, p: { zh: '打開「思想軸」，看 Peterson 如何把演化、心理、神話與宗教編織成一套「在混亂中站穩」的思考，先掌握大結構。', en: 'Open the Ideas timeline and see how Peterson weaves evolution, psychology, myth, and religion into a way of standing firm in chaos — get the big structure first.' } },
      { h: { zh: '逐條讀十二法則', en: 'Read the twelve rules one by one' }, p: { zh: '在「閱讀」模組逐條讀每則法則的論點重述，留意「核心論點→論證→實例→啟示」。用「札記」記下你想在生活裡試行的那一條。', en: 'In the Reading module, work through each rule’s argument, watching claim → argument → example → lesson. Use Notes to record the one rule you want to try in your own life.' } },
      { h: { zh: '別只看守則的表面', en: 'Look past the surface of the rules' }, p: { zh: '「摸摸貓」「站直」聽起來很簡單，但每一條背後都連著存有、受苦與意義的大哉問。到「主題」模組回看，會看見它們其實是同一套思想的不同切面。', en: '“Pet a cat” and “stand up straight” sound simple, but each connects to the great questions of Being, suffering, and meaning. Revisit the Themes and you’ll see they are facets of one body of thought.' } },
      { h: { zh: '對照解讀與自省', en: 'Compare with the review, then reflect' }, p: { zh: '讀完可看附錄裡站長自己的兩篇解讀（署名 翰林書僮），再到「金句」收藏打中你的句子，在「札記」寫下你最需要的那條法則。', en: 'Afterward, read the site owner’s own two-part review in the appendix (signed Kun Han Le), collect the lines that hit home in Quotes, and write down the rule you most need in Notes.' } }
    ]
  },
  families: [
    { id: 'foundation', label: { zh: '秩序與存有', en: 'Order and Being' } },
    { id: 'responsibility', label: { zh: '責任與意義', en: 'Responsibility and Meaning' } },
    { id: 'truth', label: { zh: '真理與言說', en: 'Truth and Speech' } }
  ],
  timelineSubtitle: { zh: '從秩序與混亂的古老兩極，到一套現代的生存法則', en: 'From the ancient poles of order and chaos to a modern set of rules for living' },
  graph: {
    title: { zh: '— 十二法則 · 核心概念關係圖 —', en: '— 12 Rules · A Map of Core Concepts —' },
    nodes: [
      { id: 'order_chaos',   label: { zh: '秩序與混亂', en: 'Order & Chaos' },     x: 400, y: 235, tier: 'lead',  color: '#bb8a3e' },
      { id: 'being',         label: { zh: '存有與受苦', en: 'Being & Suffering' },  x: 400, y: 100, tier: 'major', color: '#b5555a' },
      { id: 'hierarchy',     label: { zh: '支配階序', en: 'Dominance Hierarchy' },  x: 210, y: 150, tier: 'major', color: '#c9a24e' },
      { id: 'myth',          label: { zh: '神話與傳統', en: 'Myth & Tradition' },   x: 108, y: 245, tier: 'minor', color: '#7d786e' },
      { id: 'responsibility',label: { zh: '責任', en: 'Responsibility' },           x: 590, y: 140, tier: 'major', color: '#6f9a7e' },
      { id: 'meaning',       label: { zh: '意義', en: 'Meaning' },                  x: 645, y: 255, tier: 'major', color: '#6f9a7e' },
      { id: 'sacrifice',     label: { zh: '犧牲與延遲滿足', en: 'Sacrifice' },       x: 700, y: 360, tier: 'minor', color: '#b2ada1' },
      { id: 'fragile_good',  label: { zh: '脆弱之美', en: 'The Fragile Good' },     x: 555, y: 378, tier: 'minor', color: '#b2ada1' },
      { id: 'truth',         label: { zh: '說真話', en: 'Truth' },                  x: 400, y: 400, tier: 'major', color: '#5f83a8' },
      { id: 'resentment',    label: { zh: '怨恨與欺瞞', en: 'Resentment & Deceit' },x: 250, y: 388, tier: 'minor', color: '#b5555a' },
      { id: 'discipline',    label: { zh: '管教與社會化', en: 'Discipline' },       x: 150, y: 340, tier: 'minor', color: '#b2ada1' },
      { id: 'precision',     label: { zh: '精確的言說', en: 'Precise Speech' },     x: 690, y: 182, tier: 'minor', color: '#b2ada1' }
    ],
    edges: [
      { from: 'order_chaos', to: 'being', kind: 'family' },
      { from: 'order_chaos', to: 'hierarchy', kind: 'family' },
      { from: 'order_chaos', to: 'myth', kind: 'family' },
      { from: 'being', to: 'responsibility', kind: 'love' },
      { from: 'responsibility', to: 'meaning', kind: 'family' },
      { from: 'meaning', to: 'sacrifice', kind: 'love' },
      { from: 'meaning', to: 'fragile_good', kind: 'love' },
      { from: 'responsibility', to: 'truth', kind: 'love' },
      { from: 'order_chaos', to: 'truth', kind: 'love' },
      { from: 'truth', to: 'resentment', kind: 'rivalry' },
      { from: 'responsibility', to: 'discipline', kind: 'love' },
      { from: 'truth', to: 'precision', kind: 'love' }
    ]
  },
  footer: {
    quote: { zh: '「承擔起最沉重的責任，人才找得到最深的意義。」', en: 'It is in taking on the heaviest responsibility that a person finds the deepest meaning.' },
    tagline: { zh: '生存的十二條法則 · 沉浸式閱讀 · 在混亂中，站直', en: '12 Rules for Life · Immersive Reading · Stand up straight, amid the chaos' }
  }
};

const S1 = { zh: '卷一 · 秩序與自己', en: 'Part One · Order and the Self' };
const S2 = { zh: '卷二 · 家庭與世界', en: 'Part Two · Family and the World' };
const S3 = { zh: '卷三 · 意義與真理', en: 'Part Three · Meaning and Truth' };
const S4 = { zh: '卷四 · 言說與脆弱', en: 'Part Four · Speech and the Fragile' };
const SA = { zh: '附錄 · 讀者解讀', en: "Appendix · Reader's Review" };

const CHAPTERS = [
  { id: 1,  group: S1, title: { zh: '站直，抬頭挺胸', en: 'Stand Up Straight with Your Shoulders Back' }, pages: '',
    reflectQ: { zh: '姿態會回頭改變你的心態與別人對你的態度。今天，你願不願意先從「抬頭挺胸」這個最小的動作，去正視生活的重量？', en: 'Posture feeds back into your mind and how others treat you. Today, will you begin with the smallest act — standing up straight — to face the weight of living?' } },
  { id: 2,  group: S1, title: { zh: '待己如待人', en: 'Treat Yourself Like Someone You Are Responsible for Helping' }, pages: '',
    reflectQ: { zh: '你是不是把別人（甚至寵物）照顧得比自己好？如果要「像照顧你所愛的人那樣照顧自己」，你第一件會替自己做的事是什麼？', en: 'Do you care for others — even a pet — better than yourself? If you cared for yourself like someone you love, what is the first thing you would do for yourself?' } },
  { id: 3,  group: S1, title: { zh: '與真心希望你好的人為友', en: 'Make Friends with People Who Want the Best for You' }, pages: '',
    reflectQ: { zh: '你身邊的人，是拉你向上，還是拖你下沉？遠離後者、不算冷酷——你能誠實盤點自己的圈子嗎？', en: 'Do the people around you pull you up, or drag you down? Leaving the latter is not cruelty — can you take an honest inventory of your circle?' } },
  { id: 4,  group: S1, title: { zh: '跟昨天的自己比，別跟今天的別人比', en: 'Compare Yourself to Who You Were Yesterday, Not to Who Someone Else Is Today' }, pages: '',
    reflectQ: { zh: '跟別人比，你只看見他們的片面。若只跟昨天的自己比、每天好一點，你會替自己設下什麼樣「微小而有意義」的目標？', en: 'Comparing to others, you see only their surface. If you compared only to yesterday’s self, one step better each day, what small-but-meaningful goal would you set?' } },
  { id: 5,  group: S2, title: { zh: '別讓孩子做出令你討厭他們的事', en: 'Do Not Let Your Children Do Anything That Makes You Dislike Them' }, pages: '',
    reflectQ: { zh: 'Peterson 主張少而清楚的管教是愛，不是殘忍——因為你不管，世界會替你狠狠地管。你認同「規則是一種保護」嗎？', en: 'Peterson argues that a few clear rules are love, not cruelty — because what you don’t discipline, the world will, harshly. Do you agree that rules can be a form of protection?' } },
  { id: 6,  group: S2, title: { zh: '批評世界前，先整理好自己的家', en: 'Set Your House in Perfect Order Before You Criticize the World' }, pages: '',
    reflectQ: { zh: '在責怪世界之前，先「停止做那些你明知是錯的事」。有沒有一件你心知肚明、卻一直沒停下的事？', en: 'Before blaming the world, first “stop doing what you know to be wrong.” Is there one thing you know in your heart is wrong, that you have not yet stopped?' } },
  { id: 7,  group: S3, title: { zh: '追求意義，而非權宜', en: 'Pursue What Is Meaningful (Not What Is Expedient)' }, pages: '',
    reflectQ: { zh: '權宜是短視的方便，意義是為更好的未來而犧牲當下。最近，你有沒有為了眼前的方便，放掉了某件更有意義的事？', en: 'Expedience is short-sighted convenience; meaning is sacrificing the present for a better future. Have you lately let go of something meaningful for the sake of what was easy?' } },
  { id: 8,  group: S3, title: { zh: '說真話，至少別說謊', en: "Tell the Truth—Or, at Least, Don't Lie" }, pages: '',
    reflectQ: { zh: '謊言會讓人生「虛弱」。有沒有一個你一直在對自己或別人說的「人生謊言」？說出真話，會讓你站得更穩，還是更痛？', en: 'Lies make a life “weak.” Is there a life-lie you keep telling yourself or others? Would speaking the truth make you stand firmer — or hurt more?' } },
  { id: 9,  group: S3, title: { zh: '假設你正在聽的人，知道某些你不知道的事', en: "Assume That the Person You Are Listening To Might Know Something You Don't" }, pages: '',
    reflectQ: { zh: '真正的對話是「一起思考」而非求勝。下次爭執時，你能不能先完整複述對方的觀點，直到他點頭，再開口？', en: 'True conversation is thinking together, not winning. Next argument, could you first restate the other’s view fully, until they nod, before you speak?' } },
  { id: 10, group: S4, title: { zh: '說話要精確', en: 'Be Precise in Your Speech' }, pages: '',
    reflectQ: { zh: '模糊的問題會長成一團無形的恐懼；精確地說出它，它才變得可對付。有沒有一個你一直不敢「精確講清楚」的問題？', en: 'A vague problem grows into a formless dread; name it precisely and it becomes something you can face. Is there a problem you have avoided stating precisely?' } },
  { id: 11, group: S4, title: { zh: '別打擾玩滑板的孩子', en: 'Do Not Bother Children When They Are Skateboarding' }, pages: '',
    reflectQ: { zh: '冒險與危險是成長的必需，過度保護反而使人變弱。你會不會用「為你好」的名義，剝奪了某人（或自己）變強的機會？', en: 'Risk and danger are necessary to growth; overprotection weakens. Do you ever, in the name of “for your own good,” rob someone — or yourself — of the chance to grow strong?' } },
  { id: 12, group: S4, title: { zh: '在街上遇到貓，就摸摸牠', en: 'Pet a Cat When You Encounter One on the Street' }, pages: '',
    reflectQ: { zh: '當苦難鋪天蓋地，仍要留意生命裡微小的美好。今天，有沒有一個像「街上的貓」那樣、值得你停下來珍惜的小小瞬間？', en: 'When suffering is overwhelming, still notice the small graces of life. Today, was there a moment — like a cat on the street — worth stopping to cherish?' } },
  { id: 13, group: SA, title: { zh: '在混亂中，找到站直的力量', en: 'Finding the Strength to Stand, Amid Chaos' }, pages: '',
    reflectQ: { zh: '用站長的話問自己：這本書最適合「曾受重大傷痛、懷疑生命意義的人」。此刻的你，最需要的是哪一條法則？', en: 'Ask yourself, in the reviewer’s words: this book is best for those who have suffered deeply and doubted life’s meaning. Right now, which rule do you most need?' } }
];

const CHARACTERS = [
  { id: 'order_chaos', name: { zh: '秩序與混亂', en: 'Order and Chaos' }, family: 'foundation', role: { zh: '核心引擎', en: 'The Core Engine' }, icon: '☯️', color: '#bb8a3e',
    desc: { zh: '全書的總框架。秩序是已知、安全、可預測的領域，卻可能僵化成暴政；混亂是未知、危險、卻藏著一切可能的領域。人生最好的位置，是站在兩者的邊界上——一腳在已知，一腳伸向未知。', en: 'The master frame of the book. Order is the domain of the known, safe, and predictable — which can harden into tyranny; chaos is the domain of the unknown and dangerous — which holds all possibility. The best place in life is on the border of the two: one foot in the known, one reaching into the unknown.' },
    analysis: { zh: 'Peterson 把這對古老的兩極（呼應道家的陰陽、創世紀的混沌與話語）當成理解一切的鑰匙。太多秩序，人會枯萎、被壓迫；太多混亂，人會崩潰、被淹沒。十二條法則，全都是在教人如何在這條界線上站穩——既不逃進僵死的安全，也不墜入無底的混亂。理解這對框架，是讀懂全書的地基。', en: 'Peterson treats this ancient pair (echoing the yin and yang of Taoism, the chaos and the word of Genesis) as the key to everything. Too much order and a person withers, oppressed; too much chaos and a person breaks, overwhelmed. All twelve rules teach how to stand firm on that line — neither fleeing into dead safety nor falling into a bottomless chaos. Grasping this frame is the foundation for the whole book.' },
    tags: [ { zh: '陰陽', en: 'Yin and yang' }, { zh: '已知與未知', en: 'Known and unknown' }, { zh: '走在邊界上', en: 'Living on the border' } ],
    related: ['being', 'hierarchy', 'truth', 'myth'] },
  { id: 'being', name: { zh: '存有與受苦', en: 'Being and Suffering' }, family: 'foundation', role: { zh: '問題的起點', en: 'Where the Problem Begins' }, icon: '🌊', color: '#b5555a',
    desc: { zh: 'Peterson 從不假裝人生輕鬆。他坦承「存有」（Being）本質上充滿苦難、哀傷與脆弱——這不是悲觀，而是誠實地面對問題的起點。整本書要回答的，就是：既然人生如此艱難，人該如何活下去、甚至活得有意義？', en: "Peterson never pretends life is easy. He admits that Being is essentially full of suffering, sorrow, and fragility — not out of pessimism, but as an honest starting point. The whole book answers one question: since life is this hard, how does one go on living — and even live with meaning?" },
    analysis: { zh: '「存有即受苦」是全書的第一塊骨牌。正因為承認了苦難的真實與普遍，後面所有的法則才不是廉價的雞湯，而是「明知人生會痛，仍選擇如何站直」的嚴肅回答。Peterson 的解藥從不是「別想那麼多就會快樂」，而是「正視苦難，然後承擔起對抗它的責任」。', en: '“Being is suffering” is the first domino of the book. Precisely because it admits the reality and universality of suffering, the rules that follow are not cheap comfort but a serious answer to how one stands up straight knowing life will hurt. Peterson’s antidote is never “think less and be happy,” but “face the suffering, then take on the responsibility of standing against it.”' },
    tags: [ { zh: '存有', en: 'Being' }, { zh: '苦難是真實的', en: 'Suffering is real' }, { zh: '誠實的起點', en: 'An honest starting point' } ],
    related: ['order_chaos', 'responsibility', 'fragile_good'] },
  { id: 'hierarchy', name: { zh: '支配階序', en: 'The Dominance Hierarchy' }, family: 'foundation', role: { zh: '重要概念', en: 'Key Concept' }, icon: '🦞', color: '#c9a24e',
    desc: { zh: '以龍蝦為例：支配階序極其古老——連神經系統簡單的龍蝦都有，而且和人一樣用血清素來運作。戰敗的龍蝦蜷曲退縮，戰勝的挺直昂揚；姿態與地位，會回頭改變牠腦內的化學。', en: 'Take the lobster: dominance hierarchies are extraordinarily ancient — even the simple-nervous-system lobster has one, run, like ours, on serotonin. The defeated lobster curls and shrinks; the victor stands tall; posture and status feed back into its brain chemistry.' },
    analysis: { zh: 'Peterson 用龍蝦說明：階序不是資本主義或父權「發明」出來的，而是刻在生命深處、比樹木還古老的結構。這解釋了為什麼「抬頭挺胸」不只是姿勢——它會透過古老的神經迴路，改變你的自我感受與別人對你的態度。正視這套生物本能，是第一條法則的科學地基。', en: 'With the lobster, Peterson shows that hierarchy was not “invented” by capitalism or patriarchy, but is a structure carved deep into life, older than trees. This is why “standing up straight” is more than a posture — through ancient neural circuits it changes how you feel about yourself and how others treat you. Facing this biological instinct is the scientific ground of the first rule.' },
    tags: [ { zh: '龍蝦', en: 'The lobster' }, { zh: '血清素', en: 'Serotonin' }, { zh: '比樹還古老', en: 'Older than trees' } ],
    related: ['order_chaos'] },
  { id: 'myth', name: { zh: '神話與傳統', en: 'Myth and Tradition' }, family: 'foundation', role: { zh: '延伸概念', en: 'Extension' }, icon: '📜', color: '#7d786e',
    desc: { zh: 'Peterson 認為古老的神話、宗教與故事（創世紀、榮格的原型、杜斯妥也夫斯基與尼采）不是過時的迷信，而是人類累積千萬年的「意義地圖」——用故事把「該如何在混亂中生活」的智慧，代代傳了下來。', en: 'Peterson holds that ancient myth, religion, and story (Genesis, Jung’s archetypes, Dostoevsky and Nietzsche) are not outdated superstition, but humanity’s accumulated “maps of meaning” — stories that carry, from age to age, the wisdom of how to live amid chaos.' },
    analysis: { zh: '這是 Peterson 最具特色、也最受爭議的一步：他把《聖經》故事、神話原型當成「濃縮了無數世代生存經驗的軟體」來讀。對他而言，這些古老的智慧不是要人盲信，而是提醒我們——現代人自以為擺脫了傳統，卻常因此失去了對抗虛無與混亂的地圖。', en: 'This is Peterson’s most distinctive and most contested move: he reads biblical stories and mythic archetypes as “software” that compresses the survival experience of countless generations. For him this ancient wisdom asks not for blind belief, but reminds us that modern people, thinking they have shed tradition, have often lost the very map against nihilism and chaos.' },
    tags: [ { zh: '意義地圖', en: 'Maps of meaning' }, { zh: '榮格', en: 'Jung' }, { zh: '故事即智慧', en: 'Story as wisdom' } ],
    related: ['order_chaos', 'meaning'] },
  { id: 'responsibility', name: { zh: '責任', en: 'Responsibility' }, family: 'responsibility', role: { zh: '核心引擎', en: 'The Core Engine' }, icon: '🦴', color: '#6f9a7e',
    desc: { zh: '全書的解藥核心。面對苦難的人生，Peterson 的答案不是逃避或抱怨，而是「自願承擔起責任」——先是對自己（法則一、二），再擴及家人、朋友與世界。承擔，是把混亂重新拉回秩序的力量。', en: 'The heart of the book’s antidote. Facing a life of suffering, Peterson’s answer is not escape or complaint, but to voluntarily take on responsibility — first for oneself (rules one and two), then for family, friends, and the world. To shoulder responsibility is the force that pulls chaos back toward order.' },
    analysis: { zh: '這是整本書最反潮流、也最有力量的一課。在一個鼓勵人「追求快樂、爭取權利」的時代，Peterson 逆向強調「承擔責任」。他的洞見是：意義從來不是被給予的，而是在你扛起某個重擔的那一刻，自己長出來的。逃避責任或許輕鬆一時，卻會通向空虛與怨恨；承擔責任雖然沉重，卻是人抵抗苦難、活出意義的唯一支點。', en: 'This is the book’s most countercultural and most powerful lesson. In an age that urges people to chase happiness and claim rights, Peterson insists, against the grain, on taking responsibility. His insight: meaning is never given; it grows of itself the moment you take up a burden. Evading responsibility may be easy for a while, but it leads to emptiness and resentment; shouldering it, though heavy, is the one fulcrum on which a person stands against suffering and lives out meaning.' },
    tags: [ { zh: '自願承擔', en: 'Voluntary burden' }, { zh: '意義的來源', en: 'The source of meaning' }, { zh: '逆潮流', en: 'Against the grain' } ],
    related: ['being', 'meaning', 'truth', 'discipline'] },
  { id: 'meaning', name: { zh: '意義', en: 'Meaning' }, family: 'responsibility', role: { zh: '重要概念', en: 'Key Concept' }, icon: '🧭', color: '#6f9a7e',
    desc: { zh: '意義是苦難的解藥，也是全書追尋的終點。Peterson 把它與「權宜」對立：權宜是短視的方便與衝動，意義則是為了更好的未來，甘願犧牲眼前。意義，是一種「在對的時間、對的地點、做對的事」的深層直覺。', en: 'Meaning is the antidote to suffering and the destination the book seeks. Peterson sets it against expedience: expedience is short-sighted convenience and impulse, while meaning is the willingness to sacrifice the present for a better future. Meaning is a deep intuition of being in the right place, at the right time, doing the right thing.' },
    analysis: { zh: '在 Peterson 的體系裡，意義不是「快樂」的同義詞——它常常伴隨著犧牲與吃苦。他認為，人一旦把生活對準了某個真正有意義的目標（承擔責任、說真話、追求良善），即使身處苦難，也能生出足以撐住自己的力量。意義，就長在秩序與混亂的那條邊界上——你既沒有躲進僵死的安全，也沒有墜入無序的深淵。', en: 'In Peterson’s system, meaning is not a synonym for happiness — it often comes with sacrifice and hardship. He holds that once a person aims life at a truly meaningful goal (taking responsibility, telling the truth, pursuing the good), even in the midst of suffering a strength grows that can hold them up. Meaning lives on that border of order and chaos — where you have neither hidden in dead safety nor fallen into a disordered abyss.' },
    tags: [ { zh: '意義 vs 權宜', en: 'Meaning vs. expedience' }, { zh: '不等於快樂', en: 'Not the same as happiness' } ],
    related: ['responsibility', 'sacrifice', 'fragile_good', 'myth'] },
  { id: 'sacrifice', name: { zh: '犧牲與延遲滿足', en: 'Sacrifice and Delayed Gratification' }, family: 'responsibility', role: { zh: '延伸概念', en: 'Extension' }, icon: '🕯️', color: '#b2ada1',
    desc: { zh: '追求意義的具體代價，就是「犧牲當下、換取未來」。Peterson 以「該隱與亞伯」的獻祭為喻：獻祭做得對，換來未來的豐盛；帶著怨恨敷衍，則招來災禍。延遲滿足，是人類文明最古老也最重要的能力。', en: 'The concrete price of pursuing meaning is to sacrifice the present for the future. Peterson uses the sacrifices of Cain and Abel as a figure: sacrifice done rightly brings future abundance; a grudging, resentful one invites disaster. Delayed gratification is one of humanity’s oldest and most important capacities.' },
    analysis: { zh: '透過古老的獻祭故事，Peterson 把一個現代心理學概念（延遲滿足）接回了人類最深的神話記憶。他指出：人之所以能建立文明，正是因為學會了「放棄眼前的一點，去換取未來的更多」。而怎麼犧牲、帶著什麼心態犧牲，決定了你得到的是祝福還是苦果——這正是意義與怨恨的分水嶺。', en: 'Through the ancient story of sacrifice, Peterson connects a modern psychological concept (delayed gratification) back to humanity’s deepest mythic memory. He notes that humanity could build civilization precisely because it learned to give up a little now for more later. And how one sacrifices — and in what spirit — decides whether one reaps blessing or bitter fruit; this is the very watershed between meaning and resentment.' },
    tags: [ { zh: '該隱與亞伯', en: 'Cain and Abel' }, { zh: '延遲滿足', en: 'Delayed gratification' } ],
    related: ['meaning'] },
  { id: 'fragile_good', name: { zh: '脆弱之美', en: 'The Fragile Good' }, family: 'responsibility', role: { zh: '延伸概念', en: 'Extension' }, icon: '🐈', color: '#b2ada1',
    desc: { zh: '全書最溫柔的概念。當苦難鋪天蓋地時（Peterson 以女兒罹患嚴重關節炎為例），要學會留意、珍惜生命裡微小的美好與恩典——像街上偶遇的一隻貓。存有雖然受苦，卻仍有一針一針的光。', en: 'The book’s most tender concept. When suffering is overwhelming (Peterson draws on his daughter’s severe arthritis), one must learn to notice and cherish the small graces of life — like a cat met on the street. Being suffers, yet there are still pinpricks of light.' },
    analysis: { zh: '在講了十一條硬核的、關於責任與真理的法則之後，Peterson 用最後一條把整本書的溫度托了出來。他承認：有時苦難大到你什麼都做不了，這時唯一能做的，是把視野縮到「撐過下一刻」，並在那一刻裡，珍惜一隻貓、一個微笑這樣脆弱而短暫的美好。正是這些微光，讓人在最黑暗的時候，還有繼續走下去的理由。', en: 'After eleven hard-edged rules about responsibility and truth, Peterson lifts the whole book’s warmth with the last. He admits that sometimes suffering is so great you can do nothing; then the only thing to do is to shrink your horizon to surviving the next moment, and in that moment cherish something fragile and fleeting — a cat, a smile. It is these faint lights that give a person, in the darkest times, a reason to keep walking.' },
    tags: [ { zh: '街上的貓', en: 'A cat on the street' }, { zh: '珍惜微小的美好', en: 'Cherish small graces' } ],
    related: ['being', 'meaning'] },
  { id: 'truth', name: { zh: '說真話', en: 'Truth' }, family: 'truth', role: { zh: '重要概念', en: 'Key Concept' }, icon: '🗣️', color: '#5f83a8',
    desc: { zh: '「說真話，至少別說謊。」這是全書最反覆的叮嚀之一。Peterson 認為謊言會讓一個人、乃至一個社會由內部腐爛；而真話，是你唯一能安穩站立其上的地基。說出你真正的意思，你才會發現自己真正的想法。', en: '“Tell the truth — or at least don’t lie.” This is one of the book’s most repeated charges. Peterson holds that lies rot a person, and even a society, from within; truth is the one ground you can stand on securely. Say what you truly mean, and only then will you find out what you truly think.' },
    analysis: { zh: 'Peterson 常引索忍尼辛與極權的教訓：極權國家的暴行，正是建立在無數平凡人一個接一個的謊言與沉默之上。他因此把「說真話」提升到近乎道德根基的高度——每一次小小的說謊，都在替混亂添柴；而每一次說真話，哪怕微不足道，都是在替世界重建一點秩序。這是他對抗虛無與極權最個人、也最有力的武器。', en: 'Peterson often invokes Solzhenitsyn and the lessons of totalitarianism: the atrocities of totalitarian states are built on the lies and silences of countless ordinary people, one after another. He therefore raises “telling the truth” almost to the level of a moral foundation — every small lie feeds the chaos, while every truth told, however slight, rebuilds a little order in the world. It is his most personal and most powerful weapon against nihilism and tyranny.' },
    tags: [ { zh: '別說謊', en: "Don't lie" }, { zh: '人生謊言', en: 'The life-lie' }, { zh: '索忍尼辛', en: 'Solzhenitsyn' } ],
    related: ['responsibility', 'resentment', 'precision', 'order_chaos'] },
  { id: 'resentment', name: { zh: '怨恨與欺瞞', en: 'Resentment and Deceit' }, family: 'truth', role: { zh: '延伸概念', en: 'Extension' }, icon: '🖤', color: '#b5555a',
    desc: { zh: '全書的反面教材。當人拒絕承擔責任、又對自己的處境充滿怨恨時，很容易滑向欺瞞與傲慢——甚至想向「存有」本身復仇。Peterson 警告：這條由怨恨、欺瞞與傲慢鋪成的路，最終通向的是暴行與毀滅。', en: "The book’s cautionary mirror. When a person refuses responsibility and is full of resentment at their lot, they slide easily toward deceit and arrogance — even wishing to take revenge on Being itself. Peterson warns that this road, paved with resentment, deceit, and arrogance, leads in the end to atrocity and ruin." },
    analysis: { zh: '這是「說真話」與「承擔責任」的黑暗對立面。Peterson 指出，校園槍手那類極端的惡，往往不是憑空而來，而是從一連串「拒絕承擔、只顧怨恨、對自己與世界說謊」的選擇裡，一步步長出來的。認清這條下墜的路，正是為了提醒我們：抵抗它的方式並不玄妙——就是好好承擔責任、好好說真話。', en: 'This is the dark opposite of telling the truth and taking responsibility. Peterson notes that the extreme evil of, say, school shooters rarely comes from nowhere; it grows, step by step, out of a chain of choices to refuse responsibility, nurse resentment, and lie to oneself and the world. Recognizing this downward road is precisely to remind us that resisting it is not mysterious — it is to take responsibility, and to tell the truth.' },
    tags: [ { zh: '拒絕承擔', en: 'Refusing responsibility' }, { zh: '通向暴行', en: 'The road to atrocity' } ],
    related: ['truth'] },
  { id: 'discipline', name: { zh: '管教與社會化', en: 'Discipline and Socialization' }, family: 'truth', role: { zh: '延伸概念', en: 'Extension' }, icon: '🧒', color: '#b2ada1',
    desc: { zh: '關於為人父母的法則。Peterson 主張，父母要當孩子「融入現實社會的代理人」——用少而清楚的規則、明確的後果去管教。這不是殘忍，而是愛；因為你若不管，冷酷的世界會替你狠狠地管。', en: 'The rule about parenting. Peterson argues that parents must be their child’s agent for entering real society — disciplining with a few clear rules and definite consequences. This is not cruelty but love; for what you do not discipline, the cold world will, and harshly.' },
    analysis: { zh: '這條法則在崇尚「完全不設限、絕不對孩子說不」的風氣裡顯得逆耳，卻藏著 Peterson 一貫的邏輯：秩序（規則）不是壓迫，而是保護。一個從未被好好管教的孩子，等於被剝奪了學會「與世界相處」的機會，日後要付出更慘痛的代價。真正的殘忍，往往是那種以「愛」為名的放任。', en: 'This rule grates against a fashion that prizes total permissiveness and never saying no, yet it holds Peterson’s consistent logic: order (rules) is not oppression but protection. A child never properly disciplined is robbed of the chance to learn how to get along with the world, and pays a far harsher price later. The real cruelty is often the permissiveness that calls itself love.' },
    tags: [ { zh: '規則是保護', en: 'Rules as protection' }, { zh: '社會化', en: 'Socialization' } ],
    related: ['responsibility'] },
  { id: 'precision', name: { zh: '精確的言說', en: 'Precise Speech' }, family: 'truth', role: { zh: '延伸概念', en: 'Extension' }, icon: '🎯', color: '#b2ada1',
    desc: { zh: '模糊的問題，會在心裡長成一團無形的恐懼與怪物；而精確地命名它、具體地說出它，能讓它縮回成一個「可以被對付」的東西。精確的言說，是從混沌中呼喚出秩序的「話語」。', en: 'A vague problem grows in the mind into a formless dread, a monster; naming it precisely and stating it concretely shrinks it back into something you can face. Precise speech is the “word” that calls order out of chaos.' },
    analysis: { zh: '這條法則把全書「以秩序對抗混亂」的主題，落實到最日常的層次——說話。Peterson 觀察到，關係裡許多累積成災的問題，其實始於人們不願、或不敢把事情「精確地講清楚」，任由模糊的怨懟慢慢發酵。精確，是一種勇氣：它逼你面對真正的問題，也才給了你解決它的第一個支點。', en: 'This rule brings the book’s theme of order against chaos down to the most everyday level — speech. Peterson observes that many relationship problems that swell into disaster begin with people unwilling, or afraid, to state things precisely, letting vague grievances ferment. Precision is a kind of courage: it forces you to face the real problem, and only then gives you the first fulcrum to solve it.' },
    tags: [ { zh: '命名恐懼', en: 'Naming the dread' }, { zh: '從混沌喚出秩序', en: 'Order out of chaos' } ],
    related: ['truth'] }
];

const TIMELINE_DATA = [
  { year: { zh: '1999', en: '1999' }, event: { zh: '《意義的地圖》奠定思想根基', en: 'Maps of Meaning lays the intellectual foundation' }, novel: { zh: 'Peterson 花了十餘年寫成艱深的學術著作《意義的地圖》，探討神話、信仰與意義——這本書，是十二法則背後的思想母體。', en: 'Peterson spends over a decade writing the dense academic work Maps of Meaning, on myth, belief, and meaning — the intellectual matrix behind the twelve rules.' }, type: 'character' },
  { year: { zh: '緣起', en: 'The Spark' }, event: { zh: '網路上爆紅的「人生法則」清單', en: 'A list of “rules for life” goes viral online' }, novel: { zh: '他在網路問答上寫下的一串人生守則意外爆紅，成了《生存的十二條法則》的種子。', en: 'A string of life rules he wrote as an online answer unexpectedly goes viral — the seed of 12 Rules for Life.' }, type: 'character' },
  { year: { zh: '骨架 ①', en: 'Backbone ①' }, event: { zh: '秩序與混亂：全書的兩極', en: 'Order and chaos: the two poles' }, novel: { zh: '人生擺盪在已知的秩序與未知的混亂之間，最好的位置是站在兩者的邊界上。這是全書所有法則的舞台。', en: 'Life sways between the known order and the unknown chaos; the best place is on the border. This is the stage for every rule.' }, type: 'novel' },
  { year: { zh: '源流 ①', en: 'Source ①' }, event: { zh: '龍蝦與血清素：階序的古老根源', en: 'Lobsters and serotonin: the ancient root of hierarchy' }, novel: { zh: '支配階序比樹木還古老，連龍蝦都用血清素運作——這給了「抬頭挺胸」一個演化生物學的地基。', en: 'Dominance hierarchies are older than trees, and even lobsters run on serotonin — giving “stand up straight” an evolutionary-biology foundation.' }, type: 'history' },
  { year: { zh: '骨架 ②', en: 'Backbone ②' }, event: { zh: '存有即受苦：問題的起點', en: 'Being is suffering: where the problem begins' }, novel: { zh: 'Peterson 誠實承認人生本質的苦難與脆弱，把它當成一切法則必須回答的起點。', en: 'Peterson honestly admits the essential suffering and fragility of life, making it the starting point every rule must answer.' }, type: 'novel' },
  { year: { zh: '骨架 ③', en: 'Backbone ③' }, event: { zh: '責任與意義：解藥的核心', en: 'Responsibility and meaning: the heart of the antidote' }, novel: { zh: '面對苦難，他的解藥不是逃避，而是自願承擔責任——意義，就長在你扛起重擔的那一刻。', en: 'Facing suffering, his antidote is not escape but voluntary responsibility — meaning grows the moment you take up the burden.' }, type: 'novel' },
  { year: { zh: '骨架 ④', en: 'Backbone ④' }, event: { zh: '說真話：對抗混亂的武器', en: 'Telling the truth: a weapon against chaos' }, novel: { zh: '謊言讓人與社會由內腐爛，真話則是你能站立其上的地基。這是他最個人的道德根基。', en: 'Lies rot person and society from within; truth is the ground you can stand on. It is his most personal moral foundation.' }, type: 'novel' },
  { year: { zh: '源流 ②', en: 'Source ②' }, event: { zh: '犧牲與傳統：古老智慧的地圖', en: 'Sacrifice and tradition: maps of ancient wisdom' }, novel: { zh: '他把該隱與亞伯、創世紀、榮格原型當成「濃縮世代生存經驗」的意義地圖，接回現代的困境。', en: 'He reads Cain and Abel, Genesis, and Jungian archetypes as maps of meaning compressing generations of survival experience, brought back to the modern predicament.' }, type: 'history' },
  { year: { zh: '骨架 ⑤', en: 'Backbone ⑤' }, event: { zh: '怨恨、傲慢與欺瞞：通向暴行的路', en: 'Resentment, arrogance, deceit: the road to atrocity' }, novel: { zh: '拒絕承擔、只顧怨恨、對自己說謊，會一步步通向毀滅——這是全書的反面教材。', en: 'Refusing responsibility, nursing resentment, lying to oneself — these lead, step by step, to ruin. The book’s cautionary mirror.' }, type: 'novel' },
  { year: { zh: '骨架 ⑥', en: 'Backbone ⑥' }, event: { zh: '在脆弱中看見美好', en: 'Seeing the good in the fragile' }, novel: { zh: '最後一條法則托出全書的溫度：即使苦難鋪天蓋地，仍要珍惜像「街上的貓」那樣微小而脆弱的美好。', en: 'The last rule lifts the book’s warmth: even when suffering is overwhelming, still cherish the small, fragile graces — like a cat on the street.' }, type: 'novel' },
  { year: { zh: '2018', en: '2018' }, event: { zh: '《生存的十二條法則》出版', en: '12 Rules for Life is published' }, novel: { zh: '這本融匯哲學、心理與人生智慧的書上市即成為全球現象級暢銷書——你正在讀的這本書。', en: 'This book, fusing philosophy, psychology, and life wisdom, becomes a global phenomenon on release — the very book you are reading.' }, type: 'history' }
];

const THEMES = [
  { id: 'order', icon: '☯️', title: { zh: '在秩序與混亂之間', en: 'Between Order and Chaos' }, subtitle: { zh: '最好的人生，走在兩者的邊界上', en: 'The best life is lived on the border of the two' }, color: '#bb8a3e',
    intro: { zh: '全書的第一塊地基：人生擺盪在已知的秩序與未知的混亂之間。', en: 'The book’s first foundation: life sways between the known order and the unknown chaos.' },
    body: { zh: '<p>秩序是安全、可預測、卻可能僵化成暴政的已知領域；混亂是危險、卻藏著一切可能的未知領域。太多秩序，人會枯萎；太多混亂，人會崩潰。Peterson 說，最好的位置，是站在兩者的邊界上——一腳踩穩已知，一腳伸向未知。</p><p>這對呼應道家陰陽、創世紀混沌的古老框架，是理解十二法則的鑰匙。每一條法則，說到底都是在教人如何在這條界線上站穩，而不墜向任何一端。</p><div class="theme-quote">「一腳踩穩已知，一腳伸向未知——那條界線，就是人生。」</div>', en: '<p>Order is the known domain — safe, predictable, but liable to harden into tyranny; chaos is the unknown domain — dangerous, yet full of all possibility. Too much order and a person withers; too much chaos and a person breaks. Peterson says the best place is on the border of the two: one foot planted in the known, one reaching into the unknown.</p><p>This ancient frame — echoing the yin and yang of Taoism and the chaos of Genesis — is the key to the twelve rules. Every rule, at bottom, teaches how to stand firm on that line without falling to either side.</p><div class=\"theme-quote\">“One foot in the known, one reaching into the unknown — that line is life itself.”</div>' },
    chapters: ['1', '6', '10'] },
  { id: 'responsibility', icon: '🦴', title: { zh: '承擔責任是意義的起點', en: 'Responsibility, the Root of Meaning' }, subtitle: { zh: '意義不是被給予的，是你扛起來的', en: 'Meaning is not given; it is shouldered' }, color: '#6f9a7e',
    intro: { zh: '在一個追求快樂與權利的時代，Peterson 逆向強調「承擔責任」。', en: 'In an age chasing happiness and rights, Peterson insists, against the grain, on taking responsibility.' },
    body: { zh: '<p>面對苦難的人生，他的答案不是逃避或抱怨，而是自願承擔責任——先對自己，再擴及家人、朋友與世界。他最反潮流的洞見是：意義從來不是被給予的，而是在你扛起某個重擔的那一刻，自己長出來的。</p><p>逃避責任或許輕鬆一時，卻通向空虛與怨恨；承擔責任雖然沉重，卻是人抵抗苦難、活出意義的唯一支點。這是全書最有力量的一課。</p><div class="theme-quote">「承擔起最沉重的責任，人才找得到最深的意義。」</div>', en: '<p>Facing a life of suffering, his answer is not escape or complaint but voluntary responsibility — first for oneself, then for family, friends, and the world. His most countercultural insight: meaning is never given; it grows of itself the moment you take up a burden.</p><p>Evading responsibility may be easy for a while, but it leads to emptiness and resentment; shouldering it, though heavy, is the one fulcrum on which a person stands against suffering and lives out meaning. It is the book’s most powerful lesson.</p><div class=\"theme-quote\">“It is in taking on the heaviest responsibility that a person finds the deepest meaning.”</div>' },
    chapters: ['2', '5', '7'] },
  { id: 'being', icon: '🌊', title: { zh: '存有即受苦，如何站直', en: 'Being Is Suffering — Stand Up Straight' }, subtitle: { zh: '不假裝人生輕鬆，才給得出真解藥', en: 'Only by not pretending life is easy can a real antidote be offered' }, color: '#b5555a',
    intro: { zh: 'Peterson 從不粉飾人生的艱難——這份誠實，是他一切建議的起點。', en: 'Peterson never glosses over how hard life is — that honesty is the starting point of all his advice.' },
    body: { zh: '<p>他坦承「存有」本質上充滿苦難、哀傷與脆弱。正因為承認了這份真實，後面所有的法則才不是廉價的雞湯，而是「明知人生會痛、仍選擇如何站直」的嚴肅回答。</p><p>他的解藥從不是「別想那麼多就會快樂」，而是「正視苦難，然後承擔起對抗它的責任」。抬頭挺胸，因此不只是姿勢，而是一個人對整個艱難世界的莊嚴回應。</p><div class="theme-quote">「正視苦難，然後選擇站直——這就是勇氣。」</div>', en: '<p>He admits that Being is essentially full of suffering, sorrow, and fragility. Precisely because it grants this reality, everything that follows is not cheap comfort but a serious answer to how one stands up straight knowing life will hurt.</p><p>His antidote is never “think less and be happy,” but “face the suffering, then take on the responsibility of standing against it.” Standing up straight is therefore not merely a posture but a person’s solemn answer to a whole hard world.</p><div class=\"theme-quote\">“Face the suffering, then choose to stand up straight — that is courage.”</div>' },
    chapters: ['1', '12'] },
  { id: 'truth', icon: '🗣️', title: { zh: '說真話，對抗心中的暴政', en: 'Tell the Truth' }, subtitle: { zh: '每一次說謊，都在替混亂添柴', en: 'Every lie feeds the chaos' }, color: '#5f83a8',
    intro: { zh: '「說真話，至少別說謊」，是全書最反覆、也最沉重的叮嚀。', en: '“Tell the truth — or at least don’t lie” is the book’s most repeated and heaviest charge.' },
    body: { zh: '<p>Peterson 認為謊言會讓一個人、乃至一個社會由內部腐爛。他常引索忍尼辛與極權的教訓：極權的暴行，正是建立在無數平凡人一個接一個的謊言與沉默之上。</p><p>因此他把「說真話」提升到近乎道德根基的高度：每一次小小的說謊都在替混亂添柴，而每一次說真話，哪怕微不足道，都在替世界重建一點秩序。真話，是你唯一能安穩站立其上的地基。</p><div class="theme-quote">「說真話，至少別說謊。」</div>', en: '<p>Peterson holds that lies rot a person, and even a society, from within. He often invokes Solzhenitsyn and the lessons of totalitarianism: the atrocities of totalitarian states are built on the lies and silences of countless ordinary people, one after another.</p><p>So he raises “telling the truth” almost to a moral foundation: every small lie feeds the chaos, while every truth told, however slight, rebuilds a little order in the world. Truth is the one ground you can stand on securely.</p><div class=\"theme-quote\">“Tell the truth — or, at least, don’t lie.”</div>' },
    chapters: ['8', '9', '10'] },
  { id: 'meaning', icon: '🧭', title: { zh: '意義高於權宜', en: 'Meaning over Expedience' }, subtitle: { zh: '為了更好的未來，甘願犧牲當下', en: 'Sacrifice the present for a better future' }, color: '#c9a24e',
    intro: { zh: 'Peterson 把「意義」與「權宜」對立，作為人生方向的分水嶺。', en: 'Peterson sets meaning against expedience as the watershed of life’s direction.' },
    body: { zh: '<p>權宜是短視的方便與衝動、是逃避責任；意義則是為了更好的未來，甘願犧牲眼前。他以「該隱與亞伯」的獻祭為喻：怎麼犧牲、帶著什麼心態，決定了你得到的是祝福還是苦果。</p><p>意義不是快樂的同義詞——它常伴隨犧牲與吃苦。但人一旦把生活對準某個真正有意義的目標，即使身處苦難，也能生出撐住自己的力量。這正是延遲滿足這個古老能力，最深的意義。</p><div class="theme-quote">「追求意義，而非只圖方便。」</div>', en: '<p>Expedience is short-sighted convenience and impulse, an evasion of responsibility; meaning is the willingness to sacrifice the present for a better future. He uses the sacrifices of Cain and Abel as a figure: how you sacrifice, and in what spirit, decides whether you reap blessing or bitter fruit.</p><p>Meaning is not a synonym for happiness — it often comes with sacrifice and hardship. But once a person aims life at a truly meaningful goal, even amid suffering a strength grows that can hold them up. This is the deepest meaning of that ancient capacity, delayed gratification.</p><div class=\"theme-quote\">“Pursue what is meaningful, not what is expedient.”</div>' },
    chapters: ['4', '7'] },
  { id: 'myth', icon: '📜', title: { zh: '古老神話作為生存的地圖', en: 'Ancient Myth as a Map for Living' }, subtitle: { zh: '故事，是濃縮了世代智慧的軟體', en: 'Story is software that compresses generations of wisdom' }, color: '#7d786e',
    intro: { zh: 'Peterson 最具特色的一步：把神話與宗教讀成「意義的地圖」。', en: 'Peterson’s most distinctive move: reading myth and religion as “maps of meaning.”' },
    body: { zh: '<p>他認為古老的神話、宗教與故事（創世紀、榮格的原型、杜斯妥也夫斯基與尼采）不是過時的迷信，而是人類累積千萬年的生存經驗——用故事把「該如何在混亂中生活」的智慧，代代傳了下來。</p><p>對他而言，這些古老智慧不是要人盲信，而是提醒我們：現代人自以為擺脫了傳統，卻常因此弄丟了對抗虛無與混亂的地圖。十二法則，某種意義上，正是他試著替這個時代重新畫出的一張地圖。</p><div class="theme-quote">「我們以為擺脫了古老的故事，卻也弄丟了它們給的地圖。」</div>', en: '<p>He holds that ancient myth, religion, and story (Genesis, Jung’s archetypes, Dostoevsky and Nietzsche) are not outdated superstition but humanity’s accumulated survival experience — stories carrying, age to age, the wisdom of how to live amid chaos.</p><p>For him this ancient wisdom asks not for blind belief, but reminds us: modern people, thinking they have shed tradition, have often lost the very map against nihilism and chaos. The twelve rules are, in a sense, a map he tries to redraw for this age.</p><div class=\"theme-quote\">“We thought we had shed the old stories — and lost the maps they gave us.”</div>' },
    chapters: ['7', '11'] }
];

const QUOTES = [
  { text: { zh: '站直，抬頭挺胸。', en: 'Stand up straight with your shoulders back.' }, source: { zh: '法則一', en: 'Rule 1' },
    analysis: { zh: '看似只是姿勢，其實是全書的縮影。它透過比樹木還古老的神經迴路，改變你的自我感受與他人對你的態度——更是一個人自願正視生活重量的姿態。', en: 'It looks like mere posture, yet it is the book in miniature. Through neural circuits older than trees, it changes how you feel about yourself and how others treat you — and more, it is the stance of a person willing to face the weight of living.' } },
  { text: { zh: '說真話——至少，別說謊。', en: "Tell the truth—or, at least, don't lie." }, source: { zh: '法則八', en: 'Rule 8' },
    analysis: { zh: '全書最沉重的道德根基。Peterson 認為謊言讓人與社會由內腐爛（他常引極權的教訓）；而真話，是你唯一能安穩站立其上的地基。', en: 'The book’s heaviest moral foundation. Peterson holds that lies rot person and society from within (he often invokes the lessons of totalitarianism); truth is the one ground you can stand on securely.' } },
  { text: { zh: '跟昨天的自己比，別跟今天的別人比。', en: 'Compare yourself to who you were yesterday, not to who someone else is today.' }, source: { zh: '法則四', en: 'Rule 4' },
    analysis: { zh: '跟別人比，你只看見他們的片面，徒然自傷。把尺度換成「昨天的自己」，成長才變得具體、可掌握，也才有了持續向上的道路。', en: 'Comparing to others, you see only their surface and wound yourself for nothing. Change the yardstick to “yesterday’s self,” and growth becomes concrete and within reach — a road you can keep climbing.' } },
  { text: { zh: '批評世界之前，先把自己的家整理好。', en: 'Set your house in perfect order before you criticize the world.' }, source: { zh: '法則六', en: 'Rule 6' },
    analysis: { zh: '在責怪世界、上天或他人之前，先「停止做那些你明知是錯的事」。這不是叫人沉默，而是提醒：改變世界的力量，往往始於誠實面對自己。', en: 'Before blaming the world, God, or others, first “stop doing what you know to be wrong.” This does not counsel silence; it reminds us that the power to change the world often begins with honestly facing oneself.' } },
  { text: { zh: '追求意義，而非只圖方便。', en: 'Pursue what is meaningful, not what is expedient.' }, source: { zh: '法則七', en: 'Rule 7' },
    analysis: { zh: '權宜是短視的方便，意義是為更好的未來而犧牲當下。這句話，是 Peterson 對抗苦難與虛無最核心的處方。', en: 'Expedience is short-sighted convenience; meaning is sacrificing the present for a better future. This line is Peterson’s central prescription against suffering and nihilism.' } },
  { text: { zh: '承擔起最沉重的責任，人才找得到最深的意義。', en: 'It is in taking on the heaviest responsibility that a person finds the deepest meaning.' }, source: { zh: '全書主旨（提煉）', en: 'The theme (a distillation)' },
    analysis: { zh: '整本書十二條法則的共同核心。意義從來不是被給予的，而是在你甘願扛起某個重擔的那一刻，自己長出來的——這是 Peterson 對「人該如何活」最有力的回答。', en: 'The shared core of all twelve rules. Meaning is never given; it grows of itself the moment you willingly take up a burden — Peterson’s most powerful answer to how a person should live.' } }
];

const REFLECTION_QUESTIONS = [
  { zh: '你認同「人生本質上充滿苦難」嗎？承認這一點，會讓你更絕望，還是反而更踏實？', en: 'Do you agree that life is essentially full of suffering? Does admitting it make you more despairing — or, oddly, more grounded?' },
  { zh: '如果要「像照顧你所愛的人那樣照顧自己」，你第一件會替自己做、卻一直拖著沒做的事是什麼？', en: 'If you cared for yourself like someone you love, what is the first thing you’d do for yourself — that you keep putting off?' },
  { zh: '你身邊的人，是拉你向上，還是拖你下沉？誠實盤點之後，你需要做出什麼改變？', en: 'Do the people around you pull you up, or drag you down? After an honest inventory, what change do you need to make?' },
  { zh: '把尺度從「別人」換成「昨天的自己」，你會替自己設下什麼樣微小而有意義的目標？', en: 'Changing the yardstick from “others” to “yesterday’s self,” what small-but-meaningful goal would you set?' },
  { zh: 'Peterson 說「規則是一種保護」。你成長過程中，哪些「限制」後來變成了禮物，哪些又成了枷鎖？', en: 'Peterson says rules are a form of protection. In your upbringing, which limits later became gifts, and which became shackles?' },
  { zh: '「先停止做那些你明知是錯的事。」有沒有一件你心知肚明、卻一直沒停下的事？', en: '“Stop doing what you know to be wrong.” Is there one thing you know in your heart is wrong, that you have not yet stopped?' },
  { zh: '你最近一次為了眼前的方便（權宜），放掉了某件更有意義的事，是什麼？', en: 'When did you last let go of something meaningful for the sake of what was easy — and what was it?' },
  { zh: '有沒有一個你一直在對自己或別人說的「人生謊言」？說出真話，會讓你站得更穩，還是更痛？', en: 'Is there a life-lie you keep telling yourself or others? Would speaking the truth make you stand firmer — or hurt more?' },
  { zh: '下次爭執時，你能不能先完整複述對方的觀點、直到他點頭同意，再開口反駁？', en: 'Next argument, could you first fully restate the other’s view — until they nod — before you reply?' },
  { zh: '在你此刻的人生裡，最需要的是十二法則中的哪一條？你打算怎麼具體地實行它？', en: 'In your life right now, which of the twelve rules do you most need — and how, concretely, will you practise it?' }
];


// ==== CHAPTER_CONTENT（論點重述，中英雙語，子代理擴寫）====
const CHAPTER_CONTENT = {};

Object.assign(CHAPTER_CONTENT, {
  1: {
    num: { zh: `法則一`, en: `Rule One` },
    title: { zh: `站直，抬頭挺胸`, en: `Stand Up Straight with Your Shoulders Back` },
    epigraph: {
      zh: `姿態不只是給世界看的，它先改變了你自己。`,
      en: `Posture is not merely a signal to the world; it first reshapes the one who holds it.`
    },
    body: {
      zh: `<p><strong>核心論點</strong>　人生並非在安穩中展開，而是永遠擺盪在<strong>秩序 order</strong>與<strong>混亂 chaos</strong>之間——秩序是我們已知的、安全卻可能僵化的領域；混亂是未知的、危險卻也充滿可能性的疆界。彼得森認為，最好的人生不是躲進秩序，也不是墜入混亂，而是自願走在兩者的邊界上。而「站直，抬頭挺胸」正是這種姿態的身體化：它是你對整個<strong>存有 Being</strong>說「我願意承擔」的第一個動作。</p>

<p><strong>論證</strong>　為了證明支配的階序有多古老，彼得森把時間拉回到人類出現之前。<strong>龍蝦</strong>與我們在演化樹上分家已逾三億年，牠們的神經系統極其簡單，卻已經懂得為地盤爭鬥、排出高下。更關鍵的是，勝負會反過來改寫牠們體內的化學。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>實例</strong>　戰敗的龍蝦會蜷縮、退卻，體內<strong>血清素 serotonin</strong>下降；戰勝的龍蝦則抬高身軀、伸展四肢，血清素上揚，更願意再度應戰。同一套神經化學迴路，在人類身上依然運作。這意味著：失敗會讓你垮下去，而垮下去又讓你更容易失敗——這是一個會自我強化的向下螺旋。反過來，抬頭挺胸不只是「假裝有自信」，而是真的在對大腦與周遭的人送出訊號：這個生命體站得住、值得被認真對待。</p>

<p><strong>論證</strong>　彼得森再把框架拉高到神話的層次。《<strong>創世紀 Genesis</strong>》裡，世界始於「無形與空虛」，而神以「話語」帶來秩序——說「要有光」，光就出現了。人類承接了這種以言語命名、劃分、整頓混沌的能力。抬頭挺胸，就是願意像那道創世的話語一樣，主動在自己的一隅為存有帶來秩序，而不是被動地任由混亂吞噬。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>應用啟示</strong>　所以這條法則絕不只是儀態禮儀。當你挺直腰桿，你是在自願接受存有的重擔、正視世界的混亂，並宣告你有能力面對它。姿態改變化學，化學改變信心，信心改變別人對待你的方式，而這一切又回過頭來鞏固你的姿態。你不是先變強才站直，而是先站直，才開始變強。</p>

<p class="thought-question">🤔 思考：你今天的姿態，是在對存有說「我承擔」，還是在對它說「我放棄」？</p>`,
      en: `<p><strong>The Core Claim</strong>　Life does not unfold in comfortable stability; it forever oscillates between <strong>order</strong> and <strong>chaos</strong>—order being the known, safe, but potentially rigid ground we stand on, and chaos the unknown, dangerous, yet possibility-rich frontier beyond it. Peterson argues that the best life is lived neither by hiding inside order nor by falling into chaos, but by voluntarily walking the border between them. To stand up straight with your shoulders back is the bodily form of that stance: it is the first gesture by which you tell all of <strong>Being</strong>, "I am willing to bear it."</p>

<p><strong>The Argument</strong>　To show how ancient the hierarchy of dominance really is, Peterson winds the clock back to before humanity existed. The <strong>lobster</strong> split from our branch of the evolutionary tree more than three hundred million years ago. Its nervous system is astonishingly simple, yet it already knows how to fight for territory and to sort itself into ranks. More telling still, the outcome of those fights feeds back and rewrites the animal's own chemistry.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>The Illustration</strong>　A defeated lobster curls up and retreats; its <strong>serotonin</strong> falls. A victorious one stands tall, stretches out, its serotonin rising, and grows readier to fight again. The same neurochemical loop still runs in us. Which means defeat makes you slump, and slumping makes further defeat more likely—a self-reinforcing downward spiral. Conversely, standing tall is not merely "faking confidence." It genuinely signals, to your own brain and to those around you, that this creature holds its ground and deserves to be taken seriously.</p>

<p><strong>The Argument</strong>　Peterson then lifts the frame to the level of myth. In <strong>Genesis</strong>, the world begins as formless and void, and God brings order through the word—He says "let there be light," and light appears. Human beings inherit this capacity to name, to divide, to set the chaos in order through speech. To stand up straight is to be willing, like that creating word, to bring order to your own corner of Being rather than passively letting chaos swallow you.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>The Takeaway</strong>　So this rule is never a matter of mere etiquette. When you straighten your spine, you voluntarily accept the burden of Being, face the chaos of the world squarely, and declare yourself able to meet it. Posture changes chemistry, chemistry changes confidence, confidence changes how others treat you, and all of it circles back to reinforce the posture. You do not grow strong and then stand tall; you stand tall, and only then begin to grow strong.</p>

<p class="thought-question">🤔 Reflect: Is the posture you carry today saying "I will bear it" to Being, or is it saying "I give up"?</p>`
    }
  },

  2: {
    num: { zh: `法則二`, en: `Rule Two` },
    title: { zh: `待己如待人`, en: `Treat Yourself Like Someone You Are Responsible for Helping` },
    epigraph: {
      zh: `你會為所愛的人做的一切，也是你對自己欠下的責任。`,
      en: `Everything you would do for someone you love is also a debt you owe yourself.`
    },
    body: {
      zh: `<p><strong>核心論點</strong>　彼得森從一個古怪卻真實的觀察切入：許多人照顧自己所愛的對象，遠比照顧自己更盡心。這揭露了一種深植於人心的自我輕忽——我們可以對別人慷慨，對自己卻苛刻到近乎殘忍。這條法則要求的，是把那份你願意給別人的關懷，也認真地給自己一份。</p>

<p><strong>論證</strong>　為什麼會這樣？彼得森認為，正因為我們對自己的認識最徹底。別人的缺陷我們看不全，自己的每一個失敗、每一次怯懦、每一個不堪的念頭，卻無所遁形。於是我們容易得出結論：這樣一個滿是瑕疵的存在，不值得被善待。這種自我厭惡，往往披著「我只是有自知之明」的外衣。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>實例</strong>　他舉了一個令人心驚的對比：研究發現，人們替生病的<strong>寵物</strong>領取<strong>處方藥</strong>時，遵醫囑的比例，竟高於他們替自己領藥、按時服藥。也就是說，同一個人，會盡責地照顧一隻狗，卻怠慢了自己的身體。我們把自己排在所有需要照顧的對象之後——彷彿唯獨自己不配。</p>

<p><strong>論證</strong>　彼得森的解方不是廉價的自我肯定，而是把「照顧自己」重新定義為一種<strong>責任 responsibility</strong>。你要照顧的，不只是此刻疲憊的你，而是那個「你可能成為、也理應成為的人」。當你像對待一個你有義務去幫助的人那樣對待自己，你面對的問題就從「我配不配」轉成了「我該如何幫助這個人活出他的潛能」——這是一個完全不同、也遠為健康的提問。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>應用啟示</strong>　自我輕忽並不謙卑，它只是把一個本該被善待的生命棄置一旁。真正的責任，是替自己設想什麼是好的、有益的、能讓你長成更完整的人——然後像替所愛之人爭取那樣，替自己去爭取。這不是自我放縱，而是自我承擔：你有義務，不辜負那個你有能力成為的人。</p>

<p class="thought-question">🤔 思考：如果你所愛的人像你對待自己這樣對待自己，你會不會心疼、甚至勸阻他？</p>`,
      en: `<p><strong>The Core Claim</strong>　Peterson opens with an odd but true observation: many people tend to those they love far more faithfully than they tend to themselves. This exposes a deep-seated self-neglect—we can be generous with others while being harsh, almost cruel, toward ourselves. What this rule asks is that you give yourself a real measure of the same care you so readily give to others.</p>

<p><strong>The Argument</strong>　Why does this happen? Peterson suggests it is precisely because we know ourselves most thoroughly. We never see the whole of another's flaws, but our own failures, cowardices, and unworthy thoughts have nowhere to hide. So we quietly conclude that a being this flawed does not deserve good treatment. This self-loathing often wears the disguise of "I'm simply being honest about myself."</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>The Illustration</strong>　He offers a startling comparison: research finds that when people pick up <strong>prescription medication</strong> for a sick <strong>pet</strong>, they follow the doctor's instructions more reliably than they follow their own prescriptions. The same person who dutifully cares for a dog will neglect their own body. We rank ourselves last among all the things that need caring for—as if we alone were undeserving.</p>

<p><strong>The Argument</strong>　Peterson's remedy is not cheap self-affirmation but a redefinition of self-care as a form of <strong>responsibility</strong>. What you must look after is not only the tired self of this moment, but the person you could become and ought to become. When you treat yourself like someone you are duty-bound to help, the question shifts from "am I worthy?" to "how do I help this person live out their potential?"—a wholly different and far healthier question.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>The Takeaway</strong>　Self-neglect is not humility; it merely abandons a life that deserved to be cared for. True responsibility means working out what is good, beneficial, and growth-giving for yourself—and then fighting for it as you would fight for someone you love. This is not self-indulgence but self-obligation: you owe it to the person you are capable of becoming not to let them down.</p>

<p class="thought-question">🤔 Reflect: If someone you loved treated themselves the way you treat yourself, would it pain you—would you try to stop them?</p>`
    }
  },

  3: {
    num: { zh: `法則三`, en: `Rule Three` },
    title: { zh: `與真心希望你好的人為友`, en: `Make Friends with People Who Want the Best for You` },
    epigraph: {
      zh: `你選擇身邊的人，其實是在選擇你要成為誰。`,
      en: `In choosing the people around you, you are quietly choosing who you will become.`
    },
    body: {
      zh: `<p><strong>核心論點</strong>　人不是在真空裡成長，而是在關係裡被塑造。彼得森主張：你該慎重地選擇會把你往上拉的人，並且有勇氣遠離那些持續把你往下拖的人。這聽起來冷酷，但他要說服你的正是——那絕不冷酷。</p>

<p><strong>論證</strong>　我們常誤以為，對一個把生活搞得一團糟的人不離不棄，是一種美德、一種忠誠。彼得森拆穿了這個假設。若你身邊的人選擇的是自毀、怨恨與沉淪，你的「陪伴」未必能救他，卻很可能把你一起拉進混亂裡。對讓一切都變糟的人保持忠誠，不是善良，而是共犯。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>論證</strong>　更深一層，他區分了兩種不想向上的人：一種是真的想改變、卻暫時跌倒的人，值得你伸手；另一種則是根本不願意變好、甚至會怨恨你變好的人。後者常會有意無意地把往上爬的你拽回原地，因為你的進步照見了他的停滯。分辨這兩者，需要誠實，也需要對自己負責。</p>

<p><strong>實例</strong>　試想一個決心戒掉惡習、重整人生的人。若他回到一群嘲笑他「裝什麼上進」、慫恿他繼續墮落的舊友身邊，那份向上的意志幾乎注定被磨損殆盡。反過來，一群真心盼他好的朋友，會為他的每一步微小進展喝采，也會在他快退回原點時拉住他。環境不是背景，環境會參與塑造結果。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>應用啟示</strong>　因此，選擇好的影響，本身就是一種道德行為，而非自私的算計。與真心希望你好的人為友，意味著你也必須成為那樣的人——一個希望朋友好、也配得上好朋友的人。這是一種雙向的<strong>責任 responsibility</strong>：你為自己選擇一個能向上生長的環境，同時也承諾成為別人往上生長的助力。</p>

<p class="thought-question">🤔 思考：你身邊的關係，是把你拉向你想成為的人，還是拽回你努力想離開的樣子？</p>`,
      en: `<p><strong>The Core Claim</strong>　No one grows in a vacuum; we are shaped within our relationships. Peterson argues that you should deliberately choose people who will pull you upward, and find the courage to move away from those who keep dragging you down. It sounds cold—yet what he sets out to convince you of is precisely that it is not.</p>

<p><strong>The Argument</strong>　We often assume that standing loyally by someone who is wrecking their life is a virtue, a mark of fidelity. Peterson dismantles that assumption. If the person beside you has chosen self-destruction, resentment, and decline, your "companionship" may not save them—but it may well drag you into the chaos with them. Loyalty to someone who makes everything worse is not kindness; it is complicity.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>The Argument</strong>　Deeper still, he distinguishes two kinds of people who resist rising: one truly wants to change but has stumbled for now, and deserves your outstretched hand; the other has no wish to improve, and may even resent you for improving. The latter will, knowingly or not, tug the climbing you back to the ground, because your progress throws their stagnation into relief. Telling these two apart takes honesty—and responsibility toward yourself.</p>

<p><strong>The Illustration</strong>　Picture someone resolved to break a bad habit and rebuild their life. If they return to a circle of old friends who mock them for "pretending to better themselves" and coax them back into ruin, that upward will is all but doomed to be worn away. Conversely, friends who genuinely wish them well will cheer each small step forward and catch them when they are about to slide back. Environment is not mere backdrop; it takes part in shaping the outcome.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>The Takeaway</strong>　So choosing good influences is itself a moral act, not a selfish calculation. To make friends with people who want the best for you means you must become such a person too—one who wants the best for their friends and is worthy of good ones. This is a two-way <strong>responsibility</strong>: you choose an environment in which you can grow upward, and at the same time you commit to being the force that helps others grow upward too.</p>

<p class="thought-question">🤔 Reflect: Do the relationships around you pull you toward who you want to become, or drag you back toward what you are struggling to leave behind?</p>`
    }
  }
});


Object.assign(CHAPTER_CONTENT, {
  4:{
    num:{zh:`法則四`,en:`Rule Four`},
    title:{zh:`跟昨天的自己比，別跟今天的別人比`,en:`Compare Yourself to Who You Were Yesterday, Not to Who Someone Else Is Today`},
    epigraph:{
      zh:`量尺換一把，你便從最後一名，變回自己人生的第一名。`,
      en:`Change the measuring stick, and the person who came in last becomes the front-runner of a life that is only his own.`
    },
    body:{
      zh:`<p><strong>核心論點</strong>　小時候，班上第一名只有一個，量尺是共用的，勝負一目了然。長大以後，這種「唯一量尺」的直覺卻悄悄留了下來，於是我們不斷把自己丟進同一條跑道，跟今天的別人比。問題在於：成年後的世界根本不是一條跑道，而是千百種各自獨立的階序。你在某些階序裡贏，在另一些階序裡輸，而你偏偏只盯著自己輸的那幾條看。這樣的比較既武斷、又傷人，得出的結論幾乎必然是「我不夠好」。</p>
<p><strong>論證：內在批評者的把戲</strong>　每個人心裡都住著一個批評的聲音，它挑剔、記帳、永不滿足。麻煩的是，它比較時作弊：拿別人最亮眼的片面，去比你最灰暗的內裡；用別人在某個領域的巔峰，去量你在所有領域的平均。它看得見別人光鮮的成果，卻看不見對方的掙扎、代價與運氣。這種比較本質上是不公平的抽樣，難怪結果總是讓你抬不起頭。</p>
<div class="section-break">＊ ＊ ＊</div>
<p><strong>實例：把批評者調成夥伴</strong>　那個內在的聲音不必是敵人，它可以轉為夥伴。方法不是消滅它，而是換掉它手上的量尺——把「今天的別人」換成「昨天的自己」。今天的你，比昨天多做了一件對的小事嗎？那張堆了三個月的桌子，清掉一角了嗎？該打的電話，打了嗎？當量尺變成自己的軌跡，比較就從羞辱變成導航：它不再告訴你「你有多差」，而是告訴你「往哪走會更好」。</p>
<p><strong>論證：你瞄準什麼，就看見什麼</strong>　人的知覺不是被動的攝影，而是主動的篩選。你設定了目標，世界才會依那目標重新排列，把相關的線索送到眼前、把無關的雜訊推開。沒有目標的人，看見的是一團無差別的混亂；訂了一個小而具體、對自己有意義的目標，眼睛才會開始替你搜集達成它的路徑。所以，先問自己真正想要什麼——哪怕只是一件微不足道、但確實會讓明天好一點的事。</p>
<div class="section-break">＊ ＊ ＊</div>
<p><strong>應用啟示：每天好一點的複利</strong>　目標要小到你今天就願意動手，又要真實到你明天會感謝自己。一天改善百分之一，看似微不足道，但軌跡向上的人，走的是複利的路；軌跡向下的人，跌的也是複利的坑。你不必贏過任何人，只需要贏過昨天那個還沒開始的自己。日積月累，你會發現當初那個令你自慚形穢的比較，早已變得無關緊要——因為你已經走上了一條只屬於你的路。</p>
<p class="thought-question">🤔 思考：如果把「今天想贏過的對象」從別人換成昨天的自己，你今天願意先做的那一件小事會是什麼？</p>`,
      en:`<p><strong>The core claim.</strong> As children, we shared one measuring stick. There was a single top of the class, and the ranking was plain for all to see. That intuition of one universal scale quietly follows us into adulthood, and so we keep throwing ourselves onto the same track, racing against whoever stands beside us today. But the grown-up world is not a single track. It is hundreds of separate hierarchies, each with its own rules. You win in some, you lose in others, and the trouble is that you tend to stare only at the ones where you lose. Comparison of this kind is arbitrary and cruel, and its verdict is almost always the same: you are not enough.</p>
<p><strong>The argument: the trick of the inner critic.</strong> A critical voice lives inside each of us. It nitpicks, it keeps score, it is never satisfied. Worse, it cheats when it compares. It sets someone else's brightest surface against your own darkest interior. It measures your average across every domain against another person's single peak in one. It sees their polished results but not their struggles, their costs, or their luck. Such comparison is an unfair sample, so no wonder the outcome always leaves you unable to lift your head.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>An illustration: turning the critic into a partner.</strong> That inner voice need not be an enemy. It can become an ally. The way is not to silence it but to change the measuring stick it holds. Swap out "who someone else is today" for "who you were yesterday." Did you do one small right thing more than you did the day before? That desk buried for three months, did you clear one corner of it? The call you kept avoiding, did you make it? When the yardstick becomes your own trajectory, comparison turns from humiliation into navigation. It no longer tells you how bad you are; it tells you which way is better.</p>
<p><strong>The argument: you see what you aim at.</strong> Perception is not passive photography but active filtering. Only once you set a goal does the world rearrange itself around it, pushing the relevant clues toward your eyes and the irrelevant noise away. A person with no aim sees an undifferentiated chaos. Set a small, concrete goal that means something to you, and your eyes begin gathering the paths that lead to it. So ask what you actually want, even if it is one modest thing that will genuinely make tomorrow a little better.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>What follows: the compounding of a little better each day.</strong> The goal should be small enough that you will act today, yet real enough that tomorrow you will thank yourself. One percent better a day sounds like nothing, but a rising trajectory compounds upward, just as a falling one compounds into a pit. You need not beat anyone. You only need to beat yesterday's version of yourself, the one who had not yet begun. Day upon day, you will find that the comparison which once shamed you has quietly ceased to matter, because by then you are walking a road that belongs to no one but you.</p>
<p class="thought-question">🤔 Reflect: If you swapped the person you want to beat today for who you were yesterday, what is the one small thing you would be willing to do first?</p>`
    }
  },
  5:{
    num:{zh:`法則五`,en:`Rule Five`},
    title:{zh:`別讓孩子做出令你討厭他們的事`,en:`Do Not Let Your Children Do Anything That Makes You Dislike Them`},
    epigraph:{
      zh:`不肯替孩子劃下界線的父母，只是把劃界線這件苦差事，外包給了不會手下留情的世界。`,
      en:`A parent who refuses to draw the line has merely outsourced the drawing of it to a world that will not be gentle.`
    },
    body:{
      zh:`<p><strong>核心論點</strong>　父母最重要的角色之一，是當孩子「融入現實社會的代理人」。孩子終究要走進一個充滿他人、規則與後果的世界，而那個世界對不懂分寸的人並不友善。如果父母因為心軟或怕衝突，而遲遲不肯管教，並不代表孩子從此免於管教——只代表這份工作被延後、被外包給了同儕、老師、陌生人，乃至法律。而他們出手時，遠比父母冷酷。</p>
<p><strong>論證：不管教不是仁慈</strong>　有一種流行的理想，認為對孩子「完全不設限」才是尊重與愛。但一個從未被教會界線的孩子，並不會長成自由的天使，反而容易變成一個不討人喜歡、也不被社會接納的人。他不知道哪裡該停，於是不斷踩到別人的痛處；他不明白後果，於是一次次撞上更硬的牆。放任的結果，往往是把孩子推向孤立。真正殘忍的，不是管教，而是眼睜睜看著孩子因為沒人教而被世界排斥。</p>
<div class="section-break">＊ ＊ ＊</div>
<p><strong>實例：少而清楚勝過多而模糊</strong>　好的管教不是規則愈多愈好。規則太多、太細、朝令夕改，孩子根本無所適從，父母也淪為整天說「不」的人。與其如此，不如訂下少數幾條、但清楚而穩定的規則，配上明確且可預期的後果。孩子需要知道的，不是一百件不能做的事，而是幾條真正重要的底線，以及越過底線時會發生什麼。界線一旦清晰，孩子反而安心，因為他終於知道腳下的地在哪裡。</p>
<p><strong>論證：把「討厭」當成誠實的訊號</strong>　法則的措辭刻意而尖銳——別讓孩子做出令你討厭他們的事。父母對孩子的愛毋庸置疑，但愛不等於盲目。當孩子的某個行為讓連最愛他的人都開始感到厭煩、退縮，這往往是一個誠實的早期警訊：這個行為，全世界都會這樣反應，只是別人不會像父母一樣包容。與其把這股不悅壓抑成日積月累的怨懟，不如趁早、溫和而堅定地把界線講清楚。</p>
<div class="section-break">＊ ＊ ＊</div>
<p><strong>應用啟示：管教是愛的一種形式</strong>　為「有限度的管教」辯護，並不是為嚴苛或體罰背書，而是要指出：適度的界線、明確的後果，本身就是愛的展現。父母出手，是為了讓孩子在被世界狠狠修理之前，先在一個安全、有人愛他的地方，學會與人相處的分寸。最好的目標，是養出一個連陌生人都樂於親近的孩子——那不是壓抑天性的結果，而是被好好引導後，天性得以在社會裡自在生長的結果。</p>
<p class="thought-question">🤔 思考：如果孩子的某個行為，讓最愛他的你都開始感到退縮，這是否正是世界即將給他的反應，只是你還有機會先溫柔地告訴他？</p>`,
      en:`<p><strong>The core claim.</strong> One of a parent's most important roles is to serve as the child's agent of socialization into real society. A child must eventually walk into a world full of other people, rules, and consequences, and that world is not kind to those who never learned proportion. If parents, out of tenderness or fear of conflict, keep putting off discipline, that does not spare the child from discipline. It only defers the task and outsources it to peers, teachers, strangers, and finally the law. And when they act, they act far more coldly than a parent ever would.</p>
<p><strong>The argument: refusing to discipline is not kindness.</strong> There is a fashionable ideal that placing no limits at all on a child is the truest form of respect and love. But a child never taught where the boundaries lie does not grow into a free angel. He is far more likely to become someone unlikeable, someone society will not accept. Not knowing where to stop, he keeps stepping on others. Not grasping consequences, he keeps colliding with ever harder walls. The fruit of permissiveness is often isolation. What is truly cruel is not discipline; it is watching a child rejected by the world simply because no one taught him.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>An illustration: few and clear beats many and vague.</strong> Good discipline is not a matter of more rules. Rules that are too many, too fine, and forever changing leave a child with nowhere to stand and reduce a parent to someone who says "no" all day. Far better to set a small number of clear, stable rules, paired with consequences that are plain and predictable. What a child needs is not a hundred forbidden things but a few boundaries that genuinely matter, and a clear picture of what happens when they are crossed. Once the lines are clear, the child is in fact reassured, for at last he knows where the ground beneath his feet lies.</p>
<p><strong>The argument: treat dislike as an honest signal.</strong> The rule is worded deliberately and sharply: do not let your children do anything that makes you dislike them. A parent's love for a child is not in doubt, but love is not the same as blindness. When some behavior begins to make even the person who loves him most feel weary or withdrawn, that is often an honest early warning. The whole world will react this way to that behavior, only others will not extend the parent's patience. Rather than swallowing the irritation until it hardens into resentment, it is better to name the boundary early, gently and firmly.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>What follows: discipline as a form of love.</strong> To defend discipline within limits is not to endorse harshness or cruelty; it is to point out that measured boundaries and clear consequences are themselves an expression of love. A parent acts so that the child may learn the proportions of getting along with others in a safe place where he is loved, before the world does the teaching without mercy. The finest aim is to raise a child whom even strangers are glad to be near, which is not the result of a nature suppressed but of a nature well guided, free at last to grow at ease among other people.</p>
<p class="thought-question">🤔 Reflect: If some behavior of your child begins to make even you, who love him most, want to withdraw, is that not the very reaction the world is about to give him, while you still have the chance to tell him gently first?</p>`
    }
  },
  6:{
    num:{zh:`法則六`,en:`Rule Six`},
    title:{zh:`批評世界前，先整理好自己的家`,en:`Set Your House in Perfect Order Before You Criticize the World`},
    epigraph:{
      zh:`在你舉起拳頭控訴世界之前，先問問：你自己房間裡，還有多少你明知該做卻沒做的事？`,
      en:`Before you raise your fist to accuse the world, ask how many things in your own room you know you ought to do and have left undone.`
    },
    body:{
      zh:`<p><strong>核心論點</strong>　人一旦受苦，最自然的反應就是尋找罪魁禍首——怪世界不公、怪他人惡意、怪上天冷漠。這種控訴有時看似理直氣壯，因為存有本身確實充滿苦難。但這條法則提出一個更難、也更有力的問題：在你把矛頭指向整個世界之前，你是否已經先檢視、修正過自己的生活？你是否停止了那些你自己明明知道是錯的事？先把自己的房間整理好，再去談改造世界。</p>
<p><strong>論證：怨恨是通向暴行的路</strong>　受苦不必然導向智慧，它也可能發酵成怨恨——一種覺得存有本身欠了自己、想向生命本身復仇的心態。這種怨恨若不加節制，會一路滑向對世界的敵意，甚至暴行。校園槍手常常正是這種心態的極端終點：他們留下的文字裡，往往滿是憤世的抱怨與對眾生的憎恨，把自己的痛苦膨脹成向整個存有宣戰的理由。這提醒我們，「向世界復仇」的衝動不是抽象的哲學，而是有真實而恐怖的出口。</p>
<div class="section-break">＊ ＊ ＊</div>
<p><strong>實例：古拉格是無數人砌成的</strong>　索忍尼辛在描寫古拉格時，揭開了一個令人不安的真相：那座吞噬無數生命的暴政機器，並非只由少數惡魔操作，而是由無數平凡人日復一日的小謊言、小怯懦與小默許砌成的。每一次為求自保而說出的違心話、每一次對明顯之惡的沉默，都是往那台機器上添的一塊磚。這說明了個人的不誠實與逃避，如何在集體層面累積成歷史級的災難。世界的敗壞，往往先始於千萬個房間裡的失序。</p>
<p><strong>論證：從自己開始，因為那是你能改的</strong>　把責任攬回到自己身上，並不是要你承擔世界所有的罪，而是承認一個樸素的事實：世界龐大而難以撼動，但你自己的生活，是你唯一真正握有主權的領域。與其耗盡精力去譴責一個你改變不了的世界，不如先誠實面對那些你確實能改、卻一直逃避的事。停止說謊，停止做你明知有害的事，把眼前的失序一件一件收拾好——這是最務實、也最有力量的起點。</p>
<div class="section-break">＊ ＊ ＊</div>
<p><strong>應用啟示：先掃自己的房間</strong>　這條法則並不是要你對世界的不公視而不見，也不是叫你放棄改革的理想。它的意思是次序——當你把自己的家整理到井然有序，你不但更有資格、也更有能力去談改變世界，因為你的批評將來自實踐而非怨恨。一個把自己的房間收拾乾淨的人，聲音會不一樣：那裡面沒有復仇的火，只有一種踏實的、經過驗證的力量。改變世界，或許就從掃好眼前這一小塊地板開始。</p>
<p class="thought-question">🤔 思考：此刻在你自己的「房間」裡，有哪一件你明知該做、卻一直用「都是世界的錯」來拖延的事？</p>`,
      en:`<p><strong>The core claim.</strong> When a person suffers, the most natural reaction is to hunt for a culprit: to blame an unjust world, the malice of others, an indifferent heaven. Such accusation can look justified, for Being itself is indeed shot through with suffering. But this rule poses a harder and more powerful question. Before you turn your weapon on the whole world, have you first examined and set right your own life? Have you stopped doing the things you already know to be wrong? Put your own room in order first, and only then speak of remaking the world.</p>
<p><strong>The argument: resentment is a road to atrocity.</strong> Suffering does not necessarily lead to wisdom. It can ferment into resentment instead, a conviction that Being itself owes you something and a wish to take revenge on life itself. Left unchecked, that resentment slides toward hostility against the world, and even toward atrocity. The school shooter is often the extreme endpoint of this state of mind. The words such people leave behind are frequently full of bitter complaint and hatred of everyone alive, swelling their own pain into a reason to declare war on all of existence. This reminds us that the impulse to take revenge on the world is not abstract philosophy but has real and horrifying outlets.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>An illustration: the Gulag was built by countless hands.</strong> In writing of the Gulag, Solzhenitsyn uncovered a disquieting truth. That machinery of tyranny, which devoured countless lives, was not run only by a few devils. It was mortared together, day after day, by the small lies, small cowardices, and small acquiescences of countless ordinary people. Every word spoken against one's conscience to stay safe, every silence before an obvious evil, was another brick laid onto that machine. This shows how individual dishonesty and evasion accumulate at the collective level into catastrophes of historic scale. The corruption of a world often begins first with disorder in millions of private rooms.</p>
<p><strong>The argument: begin with yourself, because that is what you can change.</strong> To take responsibility back onto yourself is not to shoulder every sin of the world but to admit a plain fact. The world is vast and hard to move, yet your own life is the one domain over which you truly hold sovereignty. Rather than exhausting yourself denouncing a world you cannot change, face honestly the things you genuinely could change and have kept avoiding. Stop lying. Stop doing what you know to be harmful. Clear away the disorder in front of you one piece at a time. This is the most practical and the most powerful place to begin.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>What follows: sweep your own room first.</strong> This rule does not ask you to turn a blind eye to the world's injustice, nor to give up the ideal of reform. It speaks of order and sequence. When you have set your own house in perfect order, you are both more entitled and more able to speak of changing the world, because your criticism will come from practice rather than resentment. A person who has cleaned his own room sounds different. There is no fire of revenge in it, only a grounded strength that has been tested. Changing the world may well begin with sweeping this small patch of floor in front of you.</p>
<p class="thought-question">🤔 Reflect: Right now, in your own "room," which task do you already know you ought to do, yet keep putting off by telling yourself it is all the world's fault?</p>`
    }
  }
});


Object.assign(CHAPTER_CONTENT, {
  7:{
    num:{zh:`法則七`,en:`Rule Seven`},
    title:{zh:`追求意義，而非權宜`,en:`Pursue What Is Meaningful (Not What Is Expedient)`},
    epigraph:{
      zh:`權宜是把帳單推給明天的自己；意義是替明天的自己先付清。`,
      en:`Expedience passes the bill to your future self; meaning pays it in advance.`
    },
    body:{
      zh:`<p><strong>兩條路口</strong>人生每一刻都站在一個岔路上：一條叫權宜（expedience），一條叫意義（meaning）。權宜是短視的——它只問「此刻怎樣最省事、最不痛、最快爽」；它衝動、閃躲，把責任往後踢。意義走的是相反方向：它願意為了一個更好的未來，捨棄眼前唾手可得的東西。這兩者的差別，幾乎就是成熟與不成熟的差別。</p>

<p><strong>人類最早學會的把戲：犧牲</strong>我們的祖先不知在多少個世代裡，隱約摸索出一個驚人的道理——現在放棄一點，未來會拿回更多。這就是犧牲（sacrifice）的本質，也是延遲滿足（delayed gratification）的原型。把一部分收成留作種子而不是全吃掉，把一頭最肥的牲口獻上而不是自己享用——這些看似「損失」的舉動，其實是在跟未來、跟現實本身談一筆交易：我今天示好，你明天回報。文明就是建立在無數這樣的克制之上。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>該隱與亞伯：獻祭為什麼會被拒絕</strong>最古老的故事之一，講的正是這件事。兩兄弟都向上天獻祭（sacrifice）：一個獻得心甘情願、拿出最好的；另一個心不甘情不願、隨便應付。結果一個被悅納，一個被冷落。這故事殘酷的地方在於——它承認一個我們不願面對的事實：付出本身不保證回報，草率的付出更是如此。而被拒絕的那一個，沒有回頭檢討自己的獻祭，反而把怨恨轉向被悅納的兄弟。人在犧牲失靈時，最容易走的那條歧路，就是怨恨與報復。</p>

<p><strong>權宜是慢性的自我背叛</strong>選擇權宜，短期看永遠划算：說個小謊比較快，逃避比較輕鬆，敷衍比較省力。問題是這些「省下來」的，沒有一樣真的消失，它們只是延期，而且利滾利。一個人若總是挑最省事的走，久了會發現自己站在一堆逃避堆成的廢墟上，既不信任自己，也拿不出任何可以立足的東西。權宜不是聰明，它是拿未來的自己去貼現。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>意義是苦難的解藥</strong>那麼，面對存有本質的受苦，我們憑什麼撐下去？不是靠追求快樂——快樂太脆弱，一陣風就吹散了。真正撐得住的是意義。而意義並非天上掉下來的靈感，它來自一個很樸素的動作：承擔責任。你扛起某樣值得扛的重擔，把它扛好，意義就從那裡長出來。它是一種深層的直覺，告訴你此刻站對了位置——在秩序與混亂的邊界上，在對的時間、對的地點，做著對的事。</p>

<p><strong>把生命當成一場長期的獻祭</strong>所以這條法則要求的，其實是一種姿態的轉換：別再問「怎樣對現在的我最方便」，改問「怎樣對未來、對周遭、對這個世界最有意義」。前者讓你越活越窄，後者讓你越活越站得住。追求意義，就是自願背起責任，並且相信——認真獻上的，終究不會白費。</p>

<p class="thought-question">🤔 思考：回想最近一次你「挑了省事的那條路」。省下的力氣，後來是真的省下了，還是只是換個時間、加了利息還回來？</p>`,
      en:`<p><strong>The Fork in Every Moment</strong>Every moment sets you at a crossroads: one road is expedience, the other is meaning. Expedience is short-sighted—it asks only what is easiest, least painful, and most immediately pleasant right now. It is impulsive, evasive, forever kicking responsibility down the road. Meaning walks the other way: it gives up something within easy reach for the sake of a better future. The gap between the two is very nearly the gap between maturity and its absence.</p>

<p><strong>The First Trick Humanity Learned: Sacrifice</strong>Over uncountable generations, our ancestors dimly worked out an astonishing idea—give up a little now, and the future gives back more. That is the essence of sacrifice, and the seed of delayed gratification. Keep part of the harvest as seed rather than eating it all; offer up the finest animal rather than consuming it yourself. These apparent losses are really a bargain struck with the future, and with reality itself: I show good faith today, and you reward it tomorrow. Civilization rests on countless acts of exactly this restraint.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>Cain and Abel: Why an Offering Gets Refused</strong>One of the oldest stories is about precisely this. Two brothers each make a sacrifice: one gives willingly, offering his best; the other gives grudgingly, going through the motions. One offering is accepted, the other passed over. The cruelty of the tale lies in a truth we would rather not face—giving does not guarantee reward, and careless giving least of all. And the brother who is refused does not go back to examine his own offering; instead he turns his resentment on the brother who was favored. When sacrifice fails, the easiest path a person can take is resentment and revenge.</p>

<p><strong>Expedience Is Slow Self-Betrayal</strong>Choosing expedience always looks like a bargain in the short term: a small lie is quicker, avoidance is lighter, going through the motions costs less. The trouble is that none of what you "save" actually disappears—it is merely deferred, and it compounds. A person who always takes the easiest route eventually finds himself standing on a rubble-heap of evasions, trusting neither himself nor able to produce anything solid to stand on. Expedience is not cleverness; it is discounting your future self.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>Meaning Is the Antidote to Suffering</strong>So how do we bear up under the suffering woven into Being itself? Not by chasing pleasure—pleasure is too fragile, scattered by the first gust of wind. What actually holds is meaning. And meaning is not an inspiration dropped from the sky; it grows from a very plain act: taking on responsibility. You shoulder a burden worth shouldering, carry it well, and meaning grows out of that. It is a deep intuition that you are, at this instant, standing in the right place—on the border of order and chaos, doing the right thing at the right time.</p>

<p><strong>Treat Your Life as a Long Sacrifice</strong>What this rule asks for, then, is really a change of posture: stop asking what is most convenient for the present you, and start asking what is most meaningful for the future, for those around you, for the world. The first question narrows your life; the second makes you someone who can stand his ground. To pursue what is meaningful is to voluntarily take up responsibility—and to trust that what is offered in earnest is never, in the end, offered in vain.</p>

<p class="thought-question">🤔 Reflect: Recall the last time you took the easy road. Was the effort you saved actually saved—or merely postponed, and paid back later with interest?</p>`
    }
  },
  8:{
    num:{zh:`法則八`,en:`Rule Eight`},
    title:{zh:`說真話，至少別說謊`,en:`Tell the Truth—Or, at Least, Don't Lie`},
    epigraph:{
      zh:`真話是你唯一能站上去而不塌陷的地面。`,
      en:`The truth is the only ground that will not give way beneath your feet.`
    },
    body:{
      zh:`<p><strong>謊言的重量</strong>謊言看起來很小、很輕、很划算——一句話就能繞過麻煩、討人歡心、暫時脫身。但謊言有個惡毒的性質：它不會單獨存在。為了圓一個謊，你得再說第二個，再扭曲一點現實，再對自己解釋一次「這樣沒關係」。它在你腳下悄悄挖空，直到有一天你發現，自己站的那塊地已經不是實地了。</p>

<p><strong>人生謊言</strong>最危險的謊，不是騙別人，而是騙自己——那種讓你賴著不動的「人生謊言」（the life-lie）。它可能是「我這樣就好」「都是別人的錯」「反正努力也沒用」。人生謊言的可怕，在於它讓你活得虛弱：你把現實裁剪成自己想要的形狀，於是現實回敬你的，就是一次比一次更硬的碰撞。你越是不肯看，它撞得越重。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>謊言如何腐蝕一個國家</strong>索忍尼辛（Solzhenitsyn）從古拉格的深處看清了一件事：龐大的極權暴政，並不是幾個惡魔憑空造出來的，而是由千千萬萬個普通人日常的小謊、附和與沉默一磚一瓦砌成的。每個人都說一句自己不信的話、每個人都對明明看見的惡假裝沒看見——這些微不足道的怯懦累加起來，就成了吞沒整個民族的機器。納粹德國也是如此：它不是靠某一個人的邪惡運轉，而是靠無數個人放棄了說真話。</p>

<p><strong>極權建立在個人的謊言上</strong>這是這條法則最沉重的一課：謊言不只腐蝕靈魂，它腐蝕國家。當一個社會裡，人人都覺得「我這一句小謊無關緊要」，這些小謊就會匯成一股足以碾碎真相與人命的洪流。反過來說，這也意味著抵抗的起點小得驚人——它就在每一個「我拒絕說我不相信的話」的瞬間。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>真話是可以站立其上的地基</strong>那為什麼要說真話（tell the truth）？因為只有真話造得出你能真正踩上去的地面。用謊言堆起來的人生，看起來也許光鮮，但它是空心的，一遇到真正的重壓就崩。而由真話一句句鋪成的人生，即使樸素、即使不討喜，卻是實的——你可以在上面站著，也可以在上面重建。當混亂襲來，你需要的不是漂亮的說詞，而是一塊不會塌的地。</p>

<p><strong>說出真意，你才會發現自己真正的想法</strong>還有一個常被忽略的好處：說真話不只是報告你已經知道的事，它其實是一種發現的方法。當你逼自己說出真正的意思、而不是方便的說法，你往往會在說出口的當下，第一次看清自己真正在想什麼、真正要的是什麼。謊言讓你和自己失聯；真話則把你一點一點帶回自己。哪怕做不到句句是真話，至少——別說謊。因為每一次小小的真話，都是在替混亂帶來一分秩序。</p>

<p class="thought-question">🤔 思考：你此刻正靠著哪一個「人生謊言」撐著不動？如果拆掉它，你會被迫去面對、也去做的那件事是什麼？</p>`,
      en:`<p><strong>The Weight of a Lie</strong>A lie looks small, light, and profitable—one sentence to sidestep trouble, win approval, wriggle free for now. But a lie has a vicious property: it never stays alone. To keep one going, you must tell a second, bend reality a little more, and once again explain to yourself that "it's fine." It quietly hollows out the ground beneath you, until one day you notice that what you are standing on is no longer solid earth.</p>

<p><strong>The Life-Lie</strong>The most dangerous lie is not the one told to others but the one told to yourself—the life-lie that lets you stay stuck. It might be "I'm fine as I am," or "it's everyone else's fault," or "trying is pointless anyway." The horror of the life-lie is that it makes you live weak: you cut reality down to the shape you want, and reality answers with collisions that grow harder each time. The more you refuse to look, the harder it hits.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>How Lies Corrode a Nation</strong>From the depths of the Gulag, Solzhenitsyn saw one thing clearly: a vast totalitarian tyranny is not conjured up by a handful of demons, but built brick by brick from the everyday small lies, the going-along, and the silence of millions of ordinary people. Each person says one thing he does not believe; each pretends not to see an evil plainly in front of him—and these trivial cowardices, added together, become the machine that swallows a whole people. Nazi Germany was the same: it ran not on one man's wickedness but on countless individuals giving up on telling the truth.</p>

<p><strong>Tyranny Is Built on Personal Lies</strong>This is the heaviest lesson of the rule: a lie corrodes not only the soul but the state. When everyone in a society decides "my one small lie doesn't matter," those small lies pool into a flood strong enough to crush both truth and human lives. Turned around, this also means the starting point of resistance is astonishingly small—it lies in every single moment when someone says, "I refuse to say what I do not believe."</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>The Truth Is Ground You Can Stand On</strong>So why tell the truth? Because only the truth builds ground you can actually stand upon. A life piled up from lies may look polished, but it is hollow, and it collapses under the first real weight. A life laid down truth by truth may be plain and unflattering, yet it is solid—you can stand on it, and you can rebuild on it. When chaos arrives, what you need is not a clever phrase but a patch of earth that will not give way.</p>

<p><strong>Speak Your Meaning, and Discover What You Think</strong>There is a further benefit often overlooked: telling the truth is not merely reporting what you already know—it is a method of discovery. When you force yourself to say what you actually mean instead of what is convenient, you often see clearly, for the first time in the very act of speaking, what you truly think and truly want. Lies cut you off from yourself; the truth carries you back to yourself, piece by piece. And even if you cannot make every sentence true, at the very least—do not lie. For each small truth brings one measure of order to the chaos.</p>

<p class="thought-question">🤔 Reflect: Which life-lie are you leaning on right now to stay still? If you dismantled it, what is the thing you would then be forced to face—and to do?</p>`
    }
  },
  9:{
    num:{zh:`法則九`,en:`Rule Nine`},
    title:{zh:`假設你正在聽的人，知道某些你不知道的事`,en:`Assume That the Person You Are Listening To Might Know Something You Don't`},
    epigraph:{
      zh:`對話不是為了贏，而是為了兩個人一起變得更聰明。`,
      en:`A conversation is not to be won, but to make two people wiser together.`
    },
    body:{
      zh:`<p><strong>大多數對話都不是對話</strong>我們以為自己在交談，其實多半只是在輪流等對方停下來，好把早就準備好的台詞塞進去。這種「對話」的目的是說服、是壓過、是求勝——對方一開口，我們腦子裡忙的不是理解，而是反駁。真正的對話是另一回事：它的目的是一起思考，是兩個人合力把某個彼此都還沒看清的問題想明白。</p>

<p><strong>假設對方知道你不知道的事</strong>這條法則的門檻，就藏在一個謙卑的假設裡：你眼前這個人，很可能握有某片你沒有的拼圖。哪怕你懂得比他多、地位比他高、經驗比他豐富，他仍然站在一個你永遠站不到的位置上——他自己的人生裡。願意抱著這個假設去聽，你才可能真的學到東西；否則你聽見的，永遠只是自己既有想法的回音。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>傾聽是智慧的來源</strong>智慧不是從說話裡長出來的，是從傾聽（listening）裡長出來的。當你說話，你頂多在整理已知；當你認真聽，你才有機會撞見未知。這也是為什麼真正有智慧的人，往往話不多卻很會問——他們知道，別人腦中那些跟自己不同的東西，正是自己成長唯一的養分。把對方當成情報來源，而不是待征服的對手。</p>

<p><strong>羅傑斯式的傾聽</strong>心理學家羅傑斯（Rogers）留下一個簡單卻極難的技巧：在一場重要的、容易失控的對話裡，規定自己在回應之前，先把對方剛剛說的觀點，用自己的話完整複述一遍——而且要複述到對方點頭說「對，我就是這個意思」為止，你才有資格接著講。這條規矩看似繁瑣，卻能瞬間拆掉一場爭吵的引信。</p>

<div class="section-break">＊ ＊ ＊</div>

<p><strong>複述為什麼這麼有效</strong>因為它逼你做兩件難事。第一，你必須真的聽懂，否則複述不出來——這一步就過濾掉了大半的誤會。第二，當你被要求用自己的話把對方的立場說清楚，你常會發現對方的觀點沒你想的那麼蠢，甚至你自己原本的立場開始鬆動。爭吵之所以升溫，多半是因為雙方都在攻擊一個對方根本沒說過的稻草人；而複述，會把稻草人一個個拆掉。</p>

<p><strong>把對話當成共同探索未知</strong>所以真正的對話，是兩個人並肩面對一個都還沒有答案的問題，而不是隔著桌子比劃輸贏。當你放下「我要證明我對」，改成「我們一起看看這裡面到底藏著什麼」，對話就從角力變成了探勘。你可能因此改變主意——而在一場好對話裡，改變主意不是輸，那正是你來的目的。</p>

<p class="thought-question">🤔 思考：回想上一次你和人「談不攏」。如果當時你被規定，必須先把對方的話複述到他點頭才能反駁，那場對話會不會走向完全不同的結局？</p>`,
      en:`<p><strong>Most Conversations Aren't Conversations</strong>We think we are talking, but usually we are just taking turns waiting for the other person to stop so we can insert lines we prepared long ago. The aim of that kind of "conversation" is to persuade, to overpower, to win—the moment the other person speaks, our mind is busy not with understanding but with rebuttal. A real conversation is something else: its aim is to think together, two people jointly working out a problem neither has yet seen clearly.</p>

<p><strong>Assume the Other Person Knows What You Don't</strong>The threshold of this rule hides inside a humble assumption: the person in front of you very likely holds a piece of the puzzle you lack. Even if you know more, rank higher, or have more experience, he still stands in a place you can never occupy—inside his own life. Only by listening with this assumption can you actually learn something; otherwise all you hear is the echo of the ideas you already had.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>Listening Is the Source of Wisdom</strong>Wisdom does not grow out of speaking; it grows out of listening. When you talk, at best you rearrange what you already know; when you truly listen, you get the chance to bump into what you don't. This is why genuinely wise people often say little but ask well—they know that the things in another person's mind that differ from their own are the only nourishment for their growth. Treat the other person as a source of intelligence, not an opponent to be conquered.</p>

<p><strong>Listening the Rogerian Way</strong>The psychologist Rogers left behind a technique that is simple yet extremely hard: in an important, easily derailed conversation, require yourself, before responding, to restate the other person's point fully in your own words—and to keep restating until they nod and say, "Yes, that's exactly what I meant." Only then have you earned the right to go on. The rule looks tedious, but it can defuse an argument in an instant.</p>

<div class="section-break">◆ ◆ ◆</div>

<p><strong>Why Restating Works So Well</strong>Because it forces you to do two hard things. First, you must actually understand, or you cannot restate it at all—and that step alone filters out most misunderstandings. Second, when you are made to put the other person's position clearly in your own words, you often find their view is not as foolish as you thought, and even your own original stance begins to loosen. Arguments heat up largely because both sides are attacking a straw man the other never actually built; restating dismantles those straw men one by one.</p>

<p><strong>Treat Conversation as a Joint Exploration of the Unknown</strong>So a real conversation is two people standing shoulder to shoulder before a question neither has answered yet—not sparring across a table for points. When you set down "I have to prove I'm right" and take up "let's look together at what's actually hidden in here," the conversation turns from a contest into an expedition. You may end up changing your mind—and in a good conversation, changing your mind is not a defeat; it is exactly what you came for.</p>

<p class="thought-question">🤔 Reflect: Recall the last time you and someone "couldn't agree." If you had been required to restate their point until they nodded before replying, would that conversation have ended somewhere entirely different?</p>`
    }
  }
});


Object.assign(CHAPTER_CONTENT, {
  10:{
    num:{zh:`法則十`,en:`Rule Ten`},
    title:{zh:`說話要精確`,en:`Be Precise in Your Speech`},
    epigraph:{
      zh:`沒有被說出口的問題,不會消失;它只會在黑暗裡愈長愈大。`,
      en:`A problem you refuse to name does not vanish—it grows larger in the dark.`
    },
    body:{
      zh:`<p><strong>核心論點</strong>當你不去精確地說出困擾你的事,那件事並不會因此不見。它只是失去了輪廓,退回到一片模糊之中——而模糊正是恐懼的溫床。彼得森的主張很簡單也很違反直覺:唯有把混沌命名、把問題具體地說清楚,你才有辦法對付它。含糊的痛苦是一頭無形的怪物;精確的言說,則是把牠從陰影裡召喚出來、逼牠現出可被面對的形狀。</p>
<p><strong>論證:模糊如何餵養怪物</strong>我們的世界之所以能運作,靠的是我們對事物做了無數簡化。你把眼前這團金屬、玻璃與塑膠喚作「車」,不必去想引擎裡上千個零件;車能開,你就不必細看它的內部。但當車拋錨、當關係出狀況、當人生某處崩壞時,那層方便的簡化就破了:突然間,問題不再有清楚的邊界,它向四面八方滲漏,把「這一件事出錯了」暈染成「一切都錯了、我這個人也錯了」。不去命名,問題就會膨脹到吞下整個世界。</p>
<div class="section-break">＊ ＊ ＊</div>
<p><strong>實例:婚姻裡不被說出口的那件事</strong>彼得森常談到親密關係裡的沉默。有一件小事讓你不快——某句話、某個被忽略的期待——你選擇不說,告訴自己「算了,別小題大作」。但它沒有消失,它沉到水面下,和下一件、再下一件沒說出口的事堆疊在一起。等到某天終於爆發,你面對的已不是一個能處理的問題,而是三年份的怨恨壓縮成的災難。逃避精確,不是溫柔,而是把小麻煩養成大災禍。</p>
<p><strong>論證:命名即是創造秩序</strong>在彼得森的秩序與混沌框架裡,精確的言說有近乎神聖的分量。混沌是尚未成形的可能,秩序是被說出、被界定的世界。當你鼓起勇氣把「我到底怕什麼、氣什麼、想要什麼」講清楚,你就是在用話語從混沌裡劃出一塊可以站立的土地。這不是修辭技巧,而是人把自己的處境從無形拉回有形、從被淹沒拉回可掌控的根本動作。</p>
<div class="section-break">＊ ＊ ＊</div>
<p><strong>應用啟示</strong>精確是需要勇氣的,因為模糊很安全——只要不把問題說死,你就不必真正面對它,也不必承擔說清楚之後可能引來的衝突或改變。但那份安全是假的。請對自己、對你在乎的人,練習把事情說到具體:不是「我心情不好」,而是「今天這件事讓我覺得不被尊重」;不是「我的人生一團糟」,而是「我在這一格、這一步卡住了」。當問題被縮小到可命名的尺寸,它也就縮小到可對付的尺寸。</p>
<p class="thought-question">🤔 思考:此刻有沒有一件你一直「懶得說清楚」的事,正在你心裡悄悄長大?如果逼自己用一句具體的話講出來,它會是什麼?</p>`,
      en:`<p><strong>The core claim</strong>When you refuse to say precisely what is troubling you, the trouble does not go away. It simply loses its edges and dissolves back into a fog—and fog is where fear breeds. Peterson's argument is simple and counterintuitive: only by naming the chaos, by stating the problem in concrete terms, do you gain any power over it. Vague pain is a shapeless monster; precise speech is what summons it out of the shadows and forces it to take on a form you can finally face.</p>
<p><strong>The argument: how vagueness feeds the monster</strong>Our world works because we simplify it endlessly. You call that assembly of metal, glass, and plastic a "car" and never think about the thousand parts under the hood; as long as it drives, you needn't look inside. But when the car breaks down, when a relationship falters, when some corner of life collapses, that convenient simplification shatters. Suddenly the problem has no clear boundary. It bleeds in every direction, smearing "this one thing went wrong" into "everything is wrong, and so am I." Left unnamed, a problem swells until it swallows the whole world.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>An example: the thing left unsaid in a marriage</strong>Peterson often speaks of the silences inside intimate relationships. Some small thing bothers you—a remark, a neglected expectation—and you decide not to mention it, telling yourself, "Let it go, don't make a fuss." But it does not disappear. It sinks below the surface and stacks up with the next unsaid thing, and the next. When it finally erupts one day, you are no longer facing a manageable problem but a disaster—three years of resentment compressed into a single blow. Avoiding precision is not tenderness; it is raising a small nuisance into a great catastrophe.</p>
<p><strong>The argument: to name is to create order</strong>Within Peterson's framework of order and chaos, precise speech carries an almost sacred weight. Chaos is unformed possibility; order is the world once it has been spoken and defined. When you find the courage to state clearly what you actually fear, resent, or want, you are using words to carve out of chaos a patch of ground you can stand on. This is not a rhetorical trick. It is the fundamental act by which a person pulls their situation back from the formless into the formed, from the overwhelming into the manageable.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>What it asks of you</strong>Precision takes courage, because vagueness feels safe—as long as you never pin the problem down, you never have to confront it, or bear the conflict and change that clarity might invite. But that safety is false. Practice, for yourself and for those you love, saying things concretely: not "I'm in a bad mood," but "what happened today made me feel disrespected"; not "my life is a mess," but "I am stuck at this particular step." When a problem is shrunk to a nameable size, it is also shrunk to a size you can handle.</p>
<p class="thought-question">🤔 Reflect: Is there something you keep "not bothering to spell out" that is quietly growing inside you right now? If you forced yourself to name it in one concrete sentence, what would it be?</p>`
    }
  },
  11:{
    num:{zh:`法則十一`,en:`Rule Eleven`},
    title:{zh:`別打擾玩滑板的孩子`,en:`Do Not Bother Children When They Are Skateboarding`},
    epigraph:{
      zh:`把所有危險都抽走的那雙手,往往也抽走了孩子變強的機會。`,
      en:`The hand that removes every danger often removes the child's chance to grow strong.`
    },
    body:{
      zh:`<p><strong>核心論點</strong>彼得森看見一群孩子在校園的階梯與扶手上玩滑板,不斷挑戰跌倒的邊緣,而學校卻裝上防滑釘想禁絕這件事。他的結論反直覺卻堅定:冒險與危險不是要從童年剔除的雜質,而是成長的必需養分。過度保護不會讓孩子更安全,只會讓他們更脆弱;真正在替他們著想,是讓他們有機會在自願承擔的風險裡把自己磨得堅強。</p>
<p><strong>論證:能力來自邊界上的試探</strong>孩子在扶手上滑行,是在測試自己的極限——這一次能不能再快一點、再險一點。正是在這種「差一點就摔」的邊緣練習裡,身體學會了平衡,心智學會了判斷,人格學會了「我能夠面對可怕的事並活下來」。若你把所有邊界都用軟墊包起來,孩子確實不會擦傷,但他也永遠學不到自己究竟能承受多少。堅強不是被保護出來的,是在可控的危險裡一次次長出來的。</p>
<div class="section-break">＊ ＊ ＊</div>
<p><strong>論證:過度保護背後的陰暗動機</strong>彼得森在這裡下了一個更尖銳的判斷。那股「一定要把一切都變安全」的衝動,表面上是慈悲,底下卻常藏著別的東西:對能力與卓越的怨恨,以及想要控制的欲望。當一種聲音一律把大膽、競爭、冒險說成有毒,把每個想飛得更高的人都往下拉平,它保護的其實不是弱者,而是自己面對強者時的不安。他警告這是一種鄙視能力、近乎反人類的意識形態——打著保護的旗號,行削弱之實。</p>
<p><strong>實例:男孩尤其需要真實的挑戰</strong>彼得森特別談到男孩。男孩透過打鬧、競爭、承擔風險來確認自己的力量與位置;若成長環境把這些出口全部封死,強迫他們變得溫馴無害,那股能量並不會消失,只會在別處以更糟的形式冒出來,或讓他們變得消沉、失去方向。給孩子(以及年輕人)真實而有分寸的挑戰,不是放任,而是信任他們有能力長成能扛事的大人。</p>
<div class="section-break">＊ ＊ ＊</div>
<p><strong>應用啟示</strong>這條法則的分寸,在於區分「保護」與「削弱」。真正的關愛,是在孩子跌倒時扶他站起來、教他下次怎麼滑得更穩,而不是從一開始就沒收滑板。放到自己身上也一樣:別總是選最安全、最不會失敗的那條路——那條路也最不會讓你成長。允許自己站到能力的邊界上,承擔那份會讓你變強的危險。</p>
<p class="thought-question">🤔 思考:回想你人生中真正讓你變強的時刻,是那些被小心保護的日子,還是那些你冒了險、差點摔下去卻撐住了的時刻?</p>`,
      en:`<p><strong>The core claim</strong>Peterson watches children skateboard down campus steps and handrails, forever courting the edge of a fall—while the school bolts on skate-stoppers to forbid it. His conclusion is counterintuitive but firm: risk and danger are not impurities to be scrubbed from childhood but essential nutrients for growth. Overprotection does not make children safer; it makes them more fragile. To truly have their interests at heart is to let them grow strong through risks they take on voluntarily.</p>
<p><strong>The argument: competence is forged at the edge</strong>When a child rides a handrail, they are testing their own limits—can I go a little faster this time, a little closer to the edge? It is precisely in this "almost fell" practice that the body learns balance, the mind learns judgment, and the character learns "I can face something frightening and survive." Pad every boundary and the child will indeed never scrape a knee—but they will also never learn how much they can bear. Strength is not something you are protected into; it grows, again and again, out of controlled danger.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>The argument: the dark motive behind overprotection</strong>Here Peterson delivers a sharper verdict. The impulse to make everything safe looks like compassion, but underneath it often hides something else: resentment of competence and excellence, and a hunger for control. When a voice brands all boldness, competition, and risk as toxic, and drags down everyone who wants to fly higher, what it protects is not the weak but its own unease before the strong. He warns that this is a creed contemptuous of ability—nearly anti-human—working under the banner of protection to accomplish the work of weakening.</p>
<p><strong>An example: boys especially need real challenge</strong>Peterson speaks in particular of boys. Boys confirm their strength and their standing through roughhousing, competition, and risk-taking; seal off all these outlets and force them into harmless docility, and the energy does not vanish—it surfaces elsewhere in worse forms, or curdles into listlessness and drift. To give children and young people real, measured challenge is not negligence; it is trusting them to grow into adults who can shoulder weight.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>What it asks of you</strong>The whole art of this rule lies in telling protection apart from diminishment. Real love catches the child when they fall and teaches them to ride steadier next time—it does not confiscate the skateboard at the outset. The same holds for you: do not always take the safest, most failure-proof road, because that road is also the one least likely to grow you. Allow yourself to stand at the edge of your competence and shoulder the danger that will make you stronger.</p>
<p class="thought-question">🤔 Reflect: Think back to the moments that truly made you stronger. Were they the carefully protected days—or the times you took a risk, nearly fell, and held on?</p>`
    }
  },
  12:{
    num:{zh:`法則十二`,en:`Rule Twelve`},
    title:{zh:`在街上遇到貓,就摸摸牠`,en:`Pet a Cat When You Encounter One on the Street`},
    epigraph:{
      zh:`存有本就沉重;正因如此,那些微小的美好才更該被停下來珍惜。`,
      en:`Being is heavy by nature; that is the very reason the smallest good deserves a pause.`
    },
    body:{
      zh:`<p><strong>核心論點</strong>全書行至此處,彼得森不再談如何站得更直、如何整頓世界,而是輕輕問一個更艱難的問題:當苦難鋪天蓋地而來,人該如何活下去?他的答案,溫柔到近乎微不足道——在街上遇到一隻貓,就停下來摸摸牠。存有的底色確實是受苦,但正因如此,那些散落在日子裡、微小到容易被忽略的美好與恩典,才更值得被留意、被珍惜。</p>
<p><strong>論證:承認受苦,而不否認光</strong>彼得森不粉飾生命。他直白地承認:存有本質上充滿限制、脆弱與痛苦,這不是意外,而是生命的結構。但承認苦難的普遍,並不等於認定一切皆黑。恰恰相反——正因為黑暗是真的,一針一針透進來的光才更真、更珍貴。對脆弱之美的悲憫,不是逃避現實的甜言蜜語,而是在看清現實之後,依然選擇彎下腰去撫摸那一點溫暖。</p>
<div class="section-break">＊ ＊ ＊</div>
<p><strong>實例:女兒Mikhaila與那些難熬的日子</strong>彼得森在這一章寫到女兒Mikhaila很小的時候就罹患嚴重的幼年型關節炎,身體被病痛長年折磨。他寫得節制、有尊嚴,沒有煽情,只是誠實地讓人看見:一個父親眼睜睜看著孩子受苦,卻無法把痛從她身上拿走,是什麼滋味。正是在這樣的處境裡,他學到,當苦難大到無法一次扛起時,唯一能做的,是把視野縮小——不去想那看不到盡頭的未來,只去想「撐過眼前這一刻」。</p>
<p><strong>論證:把尺度縮到撐過下一刻</strong>當人生的重量大到讓人窒息,遠方的問題會壓垮你。彼得森給的解法不是宏大的答案,而是把時間切碎:不必想通整個人生,只需要問「接下來這十五分鐘,我能不能好好過?」把地平線拉近到能承受的距離,苦難就從一片壓頂的黑,變回一段可以一步一步走過的路。而正是在這被縮小的尺度裡,一隻貓、一杯溫熱的咖啡、一句善意,才顯出它們真正的重量。</p>
<div class="section-break">＊ ＊ ＊</div>
<p><strong>應用啟示:全書最溫柔的收束</strong>從龍蝦挺直的脊背,到街角一隻不期而遇的貓,彼得森把整本書收束在最柔軟的地方。前面十一條法則要你承擔重擔、說真話、整頓混亂;而最後這一條輕聲提醒你:在承擔的路上,別忘了為那些微小的美好停下腳步。當一隻貓願意讓你摸牠幾秒,那是存有在受苦的洪流裡,遞給你的一個小小、真實、免費的恩典。接住它。它不能抹去苦難,但它足以讓你在苦難裡,再多走一步。</p>
<p class="thought-question">🤔 思考:在你最近一段難熬的日子裡,有沒有哪個微小到你差點錯過的瞬間,其實悄悄扶了你一把?如果重新來過,你會停下來,好好接住它嗎?</p>`,
      en:`<p><strong>The core claim</strong>By the book's end, Peterson stops speaking of how to stand straighter or set the world in order and asks, softly, a harder question: when suffering comes crashing down, how does one go on living? His answer is tender to the point of seeming trivial—when you meet a cat on the street, stop and pet it. The ground note of Being is indeed suffering; but that is the very reason the small goods and graces scattered through our days, easy to overlook, deserve all the more to be noticed and cherished.</p>
<p><strong>The argument: admit the suffering without denying the light</strong>Peterson does not sugarcoat life. He states it plainly: Being is, by its nature, full of limitation, fragility, and pain—not by accident, but as its very structure. Yet to admit that suffering is universal is not to conclude that all is dark. Quite the opposite: precisely because the darkness is real, the light that seeps through, thread by thread, is realer and more precious still. Compassion for the fragile good is not an escapist sweetness; it is choosing, after seeing reality clearly, to bend down anyway and touch that small warmth.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>An example: his daughter Mikhaila and the hard days</strong>In this chapter Peterson writes of his daughter Mikhaila, who as a small child developed a severe form of juvenile arthritis, her body worn down by pain for years. He writes with restraint and dignity, without melodrama, only letting us honestly see what it is to be a father watching his child suffer and be unable to lift the pain from her. It was in such a place that he learned: when suffering grows too large to carry all at once, the only thing to do is to shrink the horizon—not to think of the endless future, but only of getting through this one moment.</p>
<p><strong>The argument: narrow the scale to surviving the next moment</strong>When the weight of life grows suffocating, the problems of the far distance will crush you. Peterson's remedy is not a grand answer but a cutting-up of time: you needn't reason out your whole life, only ask, "Can I get through the next fifteen minutes well?" Pull the horizon in to a bearable distance, and suffering turns from an overwhelming blackness back into a road you can walk one step at a time. And it is within this narrowed scale that a cat, a warm cup of coffee, a kind word reveal their true weight.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>What it asks of you: the book's gentlest close</strong>From the lobster's straightened spine to a cat met by chance on a corner, Peterson lands the whole book in its softest place. The first eleven rules ask you to shoulder the load, tell the truth, set chaos in order; this last one whispers a reminder—on the road of shouldering, do not forget to stop for the small goods. When a cat lets you pet it for a few seconds, that is Being handing you, amid the flood of suffering, a small, real, free grace. Catch it. It cannot erase the suffering, but it is enough to let you take one more step within it.</p>
<p class="thought-question">🤔 Reflect: In a recent stretch of hard days, was there some moment so small you almost missed it that quietly steadied you? If you could live it again, would you stop and truly catch it?</p>`
    }
  }
});


// ==== 附錄：站長兩篇解讀 ====
Object.assign(CHAPTER_CONTENT, {
  13: {
    num: { zh: '附錄 · 讀者解讀', en: "Appendix · Reader's Review" },
    title: { zh: '在混亂中，找到站直的力量', en: 'Finding the Strength to Stand, Amid Chaos' },
    epigraph: { zh: '「不管生活變得有多糟，這總是你的責任，而你要盡全力去把它變好。」　— 翰林書僮（引書中開篇之意）', en: '“However bad life gets, it is still yours to answer for — and yours to do your utmost to make better.”　— Kun Han Le (echoing the book’s opening)' },
    body: {
      zh: `
<p><em>這一章整合本站站長翰林書僮（Kun Han Le）於 2018 年寫下的兩篇讀後解讀（上、下），以下為忠實摘要，保留他的重點與體會。</em></p>
<p>站長對 Peterson 這個人印象深刻：一位<strong>溫文儒雅、辯才無礙</strong>的臨床心理學家。他特別欣賞 Peterson「<strong>能把非常複雜的概念，用清晰的邏輯與詞彙解釋給大眾聽</strong>」的本事，並直言這本書「非常值得一讀」。</p>
<div class="section-break">＊ ＊ ＊</div>
<p><strong>上篇：前六條法則。</strong>他逐條記下自己的體會——<strong>抬頭挺胸</strong>（以龍蝦說明姿態如何回頭影響心理與他人觀感）；<strong>待己如待人</strong>（人常自我輕忽，該像對待所愛之人般對待自己）；<strong>慎選朋友</strong>（遠離拉你下沉的人，不是冷酷，而是傳達「這種行為不被容忍」）；<strong>跟昨天的自己比</strong>（跟別人比既無意義又傷人，因為你只看見別人的片面）；<strong>教孩子社會化</strong>（他批評過度放任的教養，父母應是孩子融入現實的代理人，並順帶談到台灣家長常過度限制孩子）；<strong>先整理好自己再批評世界</strong>（把抱怨與詛咒，轉化為有意義的行動，先停止做那些你明知是錯的事）。他也記下 Peterson 的觀察：校園喋血案的兇手，往往滿是憤世忌俗的怨恨。</p>
<p><strong>下篇：後六條法則。</strong><strong>追求意義而非享樂</strong>（需要犧牲當下換取未來，關鍵是那種「在對的時間、對的地點做對的事」的直覺）；<strong>說真話、別說謊</strong>（他引納粹時期德國人的例子，說明逐步的妥協與沉默如何釀成悲劇）；<strong>假設對方知道你不知道的事</strong>（真正的對話重點是傾聽，甚至要先總結對方觀點、待對方同意才繼續）；<strong>精確使用語言</strong>（關係的問題要坦白精確地說出，別指望時間解決）；<strong>別打擾玩滑板的孩子</strong>（冒險是人性深處的特質，是「男孩轉大人」的重要過程）；<strong>遇到小貓摸摸牠</strong>（留意生活中的美好；他引 Peterson 女兒患關節炎的經歷，說明苦難中反而更能體會生命的珍貴）。</p>
<div class="section-break">＊ ＊ ＊</div>
<p><strong>他讀到的核心。</strong>站長點出全書的兩根支柱：其一是<strong>混亂與秩序的平衡</strong>——真正有價值的生活介於兩者之間，呼應了道家陰陽；一切成長，都來自「把未知探索、轉化成已知」的過程。其二是<strong>真理與責任</strong>——反覆強調說真話的必要，因為這能讓人從「虛弱」的人生裡獲得自由。他也記下開篇那句關於個人責任的話：不管生活有多糟，這總是你的責任，而你要盡全力去把它變好。</p>
<p><strong>他的體悟與結論。</strong>站長最深的個人體會是：<strong>脆弱正是生命的本質，也正是這些痛苦與缺陷，讓我們察覺自己有多愛一個人。</strong>他「非常推薦」這本書，並認為它<strong>特別適合那些曾經遭受重大傷痛、懷疑生命意義的人</strong>——全書融匯哲學、心理學與人生智慧，核心訊息是：透過追求意義、說真話、精確溝通與留意美好，在混亂中找到秩序與力量。</p>
<p class="thought-question">🤔 思考：用站長的話問自己——這本書「最適合曾受重大傷痛、懷疑生命意義的人」。此刻的你，最需要的是十二條法則中的哪一條？你打算怎麼在生活裡實行它？</p>
`,
      en: `
<p><em>This chapter combines the site owner Kun Han Le’s two-part review of the book, written in 2018. What follows is a faithful condensation, keeping his points and reflections.</em></p>
<p>He is struck by Peterson the man: a <strong>gracious, formidably articulate</strong> clinical psychologist. He especially admires Peterson’s gift for <strong>explaining very complex ideas to a general audience with clear logic and language</strong>, and says plainly that the book is “well worth reading.”</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>Part one: the first six rules.</strong> He notes his takeaways one by one — <strong>stand up straight</strong> (the lobster shows how posture feeds back into mind and into how others see you); <strong>treat yourself like someone you care for</strong> (people neglect themselves and should tend to themselves as they would a loved one); <strong>choose friends carefully</strong> (leaving those who drag you down is not cruelty but a signal that “this won’t be tolerated”); <strong>compare to yesterday’s self</strong> (comparing to others is both pointless and wounding, since you see only their surface); <strong>socialize your children</strong> (he criticizes overly permissive parenting — parents should be the child’s agent into real society — and adds that Taiwanese parents often over-restrict); <strong>set your own house in order before criticizing the world</strong> (turn complaint and cursing into meaningful action; first stop doing what you know to be wrong). He also records Peterson’s observation that school shooters are often full of cynical resentment.</p>
<p><strong>Part two: the last six rules.</strong> <strong>Pursue meaning, not mere pleasure</strong> (sacrifice the present for the future; the key is the intuition of doing the right thing at the right time and place); <strong>tell the truth, don’t lie</strong> (he cites Germans under the Nazis to show how gradual compromise and silence breed tragedy); <strong>assume the other knows something you don’t</strong> (real conversation is about listening — even summarizing the other’s view until they agree before you go on); <strong>use language precisely</strong> (state problems in a relationship frankly and precisely; don’t expect time to solve them); <strong>don’t bother children skateboarding</strong> (risk is deep in human nature, an important part of a boy becoming a man); <strong>pet a cat when you meet one</strong> (notice the good in daily life; he draws on Peterson’s daughter’s arthritis to show how suffering can deepen our sense of life’s preciousness).</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>The core he read.</strong> He names the book’s two pillars: first, <strong>the balance of chaos and order</strong> — a truly valuable life lies between the two, echoing Taoist yin and yang; all growth comes from exploring the unknown and turning it into the known. Second, <strong>truth and responsibility</strong> — the repeated insistence on telling the truth, because it frees a person from a “weak” life. He also records the opening line about personal responsibility: however bad life gets, it is still yours to answer for, and yours to do your utmost to make better.</p>
<p><strong>His reflection and conclusion.</strong> His deepest personal takeaway: <strong>fragility is the very essence of life, and it is exactly these pains and flaws that let us realize how much we love someone.</strong> He “highly recommends” the book, and thinks it is <strong>especially suited to those who have suffered deeply and come to doubt life’s meaning</strong> — a work that fuses philosophy, psychology, and life wisdom, whose core message is that, by pursuing meaning, telling the truth, communicating precisely, and noticing the good, one can find order and strength amid chaos.</p>
<p class="thought-question">🤔 Reflect: Ask yourself, in his words — the book is “best for those who have suffered deeply and doubted life’s meaning.” Right now, which of the twelve rules do you most need, and how will you practise it in your own life?</p>
`
    }
  }
});

