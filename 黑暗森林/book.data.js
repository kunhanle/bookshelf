// ==== 黑暗森林 The Dark Forest · 中英雙語 metadata（科幻小說 / 地球往事第二部）====
const BOOK = {
  slug: 'darkforest',
  langs: ['zh', 'en'],
  title: { zh: '黑暗森林', en: 'The Dark Forest' },
  author: { zh: '劉慈欣', en: 'Liu Cixin' },
  theme: {
    'bg-primary': '#090d0b', 'bg-secondary': '#0f1512', 'bg-card': '#151d18', 'bg-elevated': '#1c2620',
    'text-primary': '#e2ebe4', 'text-secondary': '#9db0a4', 'text-muted': '#6a7c70',
    'accent': '#4a9b72', 'accent-light': '#71c096', 'accent-glow': 'rgba(74,155,114,0.30)',
    'rose': '#c0566a', 'jade': '#4a9b72', 'blue': '#5b8fd0', 'gold': '#c9a84e',
    'border': 'rgba(74,155,114,0.16)',
    atmosphere: { fall: 16, streak: 4, fallRadius: '0 60% 0 60%' },
    dayMode: { 'bg-primary': '#e7ede9', 'bg-secondary': '#dbe4de', 'bg-card': '#f6faf7', 'bg-elevated': '#eef4f0', 'text-primary': '#1b271f', 'text-secondary': '#3f4f45', 'text-muted': '#6c7c72', 'border': 'rgba(50,110,80,0.22)' }
  },
  cover: {
    seal: '林',
    subtitle: { zh: '地球往事 · 第二部', en: 'Remembrance of Earth’s Past · Book II' },
    desc: { zh: '宇宙是一座黑暗森林，<br>每個文明都是帶槍潛行的獵人。', en: 'The universe is a dark forest;<br>every civilization is an armed hunter, creeping silent.' }
  },
  musicPrompt: { zh: '走進沉默而致命的黑暗森林，<br>是否播放一段背景音樂？', en: 'Step into a silent, lethal dark forest —<br>shall we play some music?' },
  intro: {
    subtitle: { zh: '在閱讀之前，先認識這座沉默而致命的宇宙', en: 'Before you read, meet this silent, lethal universe' },
    author: {
      name: { zh: '劉慈欣', en: 'Liu Cixin' },
      portrait: { zh: '劉', en: 'L' },
      years: { zh: '1963 —　中國科幻作家', en: '1963 —　Chinese science-fiction writer' },
      bio: { zh: '「地球往事」三部曲的第二部。在《三體》裡，葉文潔按下回覆鍵、引來了三體文明；到了《黑暗森林》，劉慈欣正式揭開整個宇宙運行的殘酷法則——透過主角羅輯之口，推導出令無數讀者背脊發涼的「黑暗森林理論」。這是全系列思想的核心，也是科幻史上最著名的宇宙圖景之一。', en: 'The second volume of the Remembrance of Earth’s Past trilogy. In The Three-Body Problem, Ye Wenjie pressed reply and drew Trisolaris to Earth; in The Dark Forest, Liu Cixin unveils the merciless law by which the whole universe runs — through the protagonist Luo Ji he derives the spine-chilling “dark forest theory.” It is the conceptual heart of the whole series, and one of the most famous visions of the cosmos in all science fiction.' }
    },
    cards: [
      { icon: '🌲', title: { zh: '核心設定', en: 'The Core Premise' }, text: { zh: '三體艦隊約四百年後抵達，而三體派出的「智子」能監看人類的一切行為——唯獨讀不到人「腦中的想法」。人類抓住這唯一的破綻，展開了一場全世界對全知之敵的心理博弈。', en: 'The Trisolaran fleet will arrive in about four hundred years, and the “sophons” Trisolaris has sent can watch every human action — all except the thoughts inside a human mind. Humanity seizes this one blind spot and begins a psychological game of the whole world against an all-seeing enemy.' } },
      { icon: '🧠', title: { zh: '面壁計畫', en: 'The Wallfacer Project' }, text: { zh: '既然想法讀不到，人類選出四位「面壁者」，賦予他們龐大的資源，讓他們把真正的戰略只藏在腦中、對全世界保密。而地球三體組織則為每人指派一名「破壁人」，專門識破他的計謀。', en: 'Since thoughts cannot be read, humanity chooses four “Wallfacers,” gives them vast resources, and lets them keep their true strategies hidden in their minds, secret from all the world. The Earth-Trisolaris Organization assigns each a “Wallbreaker” to crack his plan.' } },
      { icon: '🔦', title: { zh: '黑暗森林', en: 'The Dark Forest' }, text: { zh: '玩世不恭的天文學家羅輯，從葉文潔留下的兩條「宇宙社會學公理」出發，推出全書最令人膽寒的結論：宇宙是一座黑暗森林，每個文明都是帶槍的獵人；任何暴露自己位置的，都會被搶先消滅。', en: 'The cynical astronomer Luo Ji, starting from the two axioms of “cosmic sociology” Ye Wenjie left him, derives the book’s most chilling conclusion: the universe is a dark forest, every civilization an armed hunter; any that reveals its location is destroyed first.' } },
      { icon: '🧭', title: { zh: '閱讀建議', en: 'How to Read' }, text: { zh: '先看「人物譜」認清四位面壁者與地球、三體的關係，再對照「時代軸」跟上從面壁計畫到最終威懾的推進，然後逐章閱讀。這一部的重量，在於一個念頭如何逼問整個宇宙。', en: 'Start with the Cast to place the four Wallfacers and their ties to Earth and Trisolaris, read against the Timeline to follow the arc from the Wallfacer Project to the final deterrence, then go chapter by chapter. The weight of this book lies in how one idea interrogates the entire cosmos.' } }
    ],
    guide: [
      { h: { zh: '從面壁者入手', en: 'Start with the Wallfacers' }, p: { zh: '先在「人物譜」認清四位面壁者（泰勒、雷迪亞茲、希恩斯、羅輯）與他們各自的破壁人，是讀懂這場心理博弈的第一步。', en: 'In the Cast, get the four Wallfacers (Tyler, Rey Diaz, Hines, Luo Ji) and their Wallbreakers straight — the first step to following this psychological game.' } },
      { h: { zh: '跟著推進讀', en: 'Follow the arc' }, p: { zh: '打開「時代軸」，把面壁計畫、黑暗森林理論、水滴之戰與最終威懾串起來，先掌握全局。', en: 'Open the Timeline and connect the Wallfacer Project, the dark forest theory, the Droplet’s attack, and the final deterrence — get the whole shape first.' } },
      { h: { zh: '逐章沉浸閱讀', en: 'Read chapter by chapter' }, p: { zh: '在「閱讀」模組逐章讀情節重述，特別留意第六章「黑暗森林」那段令人背脊發涼的推導。用「札記」記下你的震撼。', en: 'In the Reading module, go through the retold plot, especially the spine-chilling derivation in Chapter 6, “The Dark Forest.” Use Notes for what shakes you.' } },
      { h: { zh: '從主題回望全書', en: 'Look back through the themes' }, p: { zh: '讀完後到「主題」模組，從黑暗森林法則、猜疑鏈、生存的道德代價、恐怖平衡等角度，系統性地回看這個故事。', en: 'When you finish, visit the Themes and look back through the dark forest theory, the chain of suspicion, the moral cost of survival, and the balance of terror.' } },
      { h: { zh: '品味金句與自省', en: 'Savor the lines and reflect' }, p: { zh: '在「金句」收藏那些冷冽的句子，在「札記」寫下：若宇宙真的這麼黑，人類還該不該、還能不能，繼續呼喊？', en: 'Collect the cold, cutting lines in Quotes, and write in Notes: if the universe really is this dark, should humanity — could humanity — still cry out?' } }
    ]
  },
  families: [
    { id: 'wallfacer', label: { zh: '面壁者', en: 'The Wallfacers' } },
    { id: 'earth', label: { zh: '地球陣營', en: 'Earth’s Side' } },
    { id: 'trisolaris', label: { zh: '三體文明', en: 'Trisolaris' } }
  ],
  timelineSubtitle: { zh: '從兩條宇宙社會學公理，到一場以毀滅相要挾的和平', en: 'From two axioms of cosmic sociology to a peace held at gunpoint of mutual ruin' },
  graph: {
    title: { zh: '— 面壁者 · 地球 · 三體 —', en: '— Wallfacers · Earth · Trisolaris —' },
    nodes: [
      { id: 'yewenjie',    label: { zh: '葉文潔', en: 'Ye Wenjie' },   x: 120, y: 95,  tier: 'minor', color: '#c0566a' },
      { id: 'zhangbeihai', label: { zh: '章北海', en: 'Zhang Beihai' },x: 130, y: 245, tier: 'major', color: '#c9a84e' },
      { id: 'luoji',       label: { zh: '羅輯', en: 'Luo Ji' },        x: 295, y: 200, tier: 'lead',  color: '#4a9b72' },
      { id: 'zhuangyan',   label: { zh: '莊顏', en: 'Zhuang Yan' },    x: 232, y: 345, tier: 'minor', color: '#c0566a' },
      { id: 'dashi',       label: { zh: '史強（大史）', en: 'Da Shi' }, x: 385, y: 335, tier: 'major', color: '#c9a84e' },
      { id: 'tyler',       label: { zh: '泰勒', en: 'Tyler' },         x: 468, y: 108, tier: 'minor', color: '#9db0a4' },
      { id: 'reydiaz',     label: { zh: '雷迪亞茲', en: 'Rey Diaz' },  x: 560, y: 172, tier: 'minor', color: '#9db0a4' },
      { id: 'hines',       label: { zh: '希恩斯', en: 'Hines' },       x: 620, y: 288, tier: 'minor', color: '#9db0a4' },
      { id: 'keiko',       label: { zh: '山杉惠子', en: 'Keiko' },     x: 690, y: 372, tier: 'tiny',  color: '#6a7c70' },
      { id: 'trisolaris',  label: { zh: '三體文明', en: 'Trisolaris' },x: 700, y: 145, tier: 'major', color: '#c0566a' },
      { id: 'droplet',     label: { zh: '水滴', en: 'The Droplet' },   x: 555, y: 402, tier: 'minor', color: '#71c096' }
    ],
    edges: [
      { from: 'yewenjie', to: 'luoji', kind: 'family' },
      { from: 'luoji', to: 'zhuangyan', kind: 'love' },
      { from: 'luoji', to: 'dashi', kind: 'family' },
      { from: 'luoji', to: 'trisolaris', kind: 'rivalry' },
      { from: 'tyler', to: 'trisolaris', kind: 'rivalry' },
      { from: 'reydiaz', to: 'trisolaris', kind: 'rivalry' },
      { from: 'hines', to: 'trisolaris', kind: 'rivalry' },
      { from: 'hines', to: 'keiko', kind: 'broken' },
      { from: 'zhangbeihai', to: 'trisolaris', kind: 'rivalry' },
      { from: 'trisolaris', to: 'droplet', kind: 'family' },
      { from: 'droplet', to: 'luoji', kind: 'rivalry' }
    ]
  },
  footer: {
    quote: { zh: '「宇宙是一座黑暗森林，每個文明都是帶槍的獵人。」', en: '“The universe is a dark forest; every civilization is an armed hunter.”' },
    tagline: { zh: '黑暗森林 · 沉浸式閱讀 · 地球往事三部曲 第二部', en: 'The Dark Forest · Immersive Reading · Remembrance of Earth’s Past, Book II' }
  }
};

const P1 = { zh: '卷一 · 面壁者', en: 'Part One · The Wallfacers' };
const P2 = { zh: '卷二 · 黑暗森林', en: 'Part Two · The Dark Forest' };
const P3 = { zh: '卷三 · 大低谷與水滴', en: 'Part Three · The Great Ravine and the Droplet' };
const P4 = { zh: '卷四 · 威懾', en: 'Part Four · Deterrence' };

const CHAPTERS = [
  { id: 1,  group: P1, title: { zh: '宇宙社會學', en: 'Cosmic Sociology' }, pages: '',
    reflectQ: { zh: '「生存是文明的第一需要，而宇宙的物質總量不變。」從這兩條看似無害的公理，你能預感到多殘酷的結論？', en: 'From two seemingly harmless axioms — survival is a civilization’s first need, and cosmic matter is constant — what cruel conclusion can you already sense coming?' } },
  { id: 2,  group: P1, title: { zh: '面壁計畫', en: 'The Wallfacer Project' }, pages: '',
    reflectQ: { zh: '面對一個能看見你一切行動、卻讀不到你想法的敵人，「把計畫藏在腦中」是唯一的武器。你覺得這是智慧，還是孤獨的豪賭？', en: 'Against an enemy that sees your every act but not your thoughts, “hiding the plan in your mind” is the only weapon. Is that wisdom, or a lonely gamble?' } },
  { id: 3,  group: P1, title: { zh: '四位面壁者', en: 'The Four Wallfacers' }, pages: '',
    reflectQ: { zh: '三位面壁者都是叱吒風雲的人物，唯獨羅輯名不見經傳、連自己都不知為何被選。三體人卻最忌憚他——為什麼？', en: 'Three Wallfacers are titans; only Luo Ji is a nobody who doesn’t even know why he was chosen. Yet Trisolaris fears him most — why?' } },
  { id: 4,  group: P1, title: { zh: '羅輯的逃避', en: 'Luo Ji’s Escape' }, pages: '',
    reflectQ: { zh: '羅輯先用面壁者的特權為自己築了一座桃花源。當幸福被當成籌碼奪走，他才被逼著扛起責任。你如何看這種「被逼出來的英雄」？', en: 'Luo Ji first uses a Wallfacer’s privileges to build himself a private paradise. Only when his happiness is taken as leverage is he forced to shoulder his duty. How do you see a hero forced into being one?' } },
  { id: 5,  group: P2, title: { zh: '猜疑鏈與技術爆炸', en: 'The Chain of Suspicion and the Technological Explosion' }, pages: '',
    reflectQ: { zh: '兩個永遠無法確認彼此善惡的文明，注定陷入無解的不信任。這條「猜疑鏈」，在人與人之間是不是也似曾相識？', en: 'Two civilizations that can never confirm each other’s intent are doomed to unresolvable distrust. Does this “chain of suspicion” feel familiar between people, too?' } },
  { id: 6,  group: P2, title: { zh: '黑暗森林', en: 'The Dark Forest' }, pages: '',
    reflectQ: { zh: '如果宇宙真的是一座黑暗森林、暴露就是死亡，那麼第一部裡「不要回答」的警告，就有了最終的答案。你被這個結論說服了嗎？', en: 'If the universe truly is a dark forest where exposure means death, then the “Do not answer” warning of Book One has its final answer. Does this conclusion convince you?' } },
  { id: 7,  group: P2, title: { zh: '咒語', en: 'The Spell' }, pages: '',
    reflectQ: { zh: '羅輯向一顆遙遠的星「念出咒語」、標記它的座標，去驗證黑暗森林是否真實。用一顆星的存亡當實驗，這是勇氣，還是傲慢？', en: 'Luo Ji “casts a spell” on a distant star, marking its coordinates to test whether the dark forest is real. Staking a star’s survival as an experiment — is that courage, or hubris?' } },
  { id: 8,  group: P3, title: { zh: '面壁者的黃昏', en: 'Twilight of the Wallfacers' }, pages: '',
    reflectQ: { zh: '泰勒自盡、雷迪亞茲被唾棄、希恩斯的技術淪為失敗主義的工具——當「拯救人類」的重擔壓在少數幾人肩上，它為何如此容易崩塌？', en: 'Tyler takes his life, Rey Diaz is cast out, Hines’s technology becomes a tool of defeatism — when the burden of saving humanity rests on a few, why does it collapse so easily?' } },
  { id: 9,  group: P3, title: { zh: '章北海', en: 'Zhang Beihai' }, pages: '',
    reflectQ: { zh: '章北海為了物種存續，願意背叛規則甚至同袍。當「大我的存續」與「小我的道德」正面衝突，你會站在哪一邊？', en: 'For the survival of the species, Zhang Beihai will betray rules and even comrades. When the survival of the whole collides with personal morality, which side would you take?' } },
  { id: 10, group: P3, title: { zh: '大低谷', en: 'The Great Ravine' }, pages: '',
    reflectQ: { zh: '人類先在絕望中崩潰、又在復興後過度自信。這種「谷底—巔峰」的擺盪，是不是文明面對巨大威脅時的通病？', en: 'Humanity first collapses in despair, then grows overconfident in its revival. Is this swing from valley to peak a common ailment of civilizations facing a vast threat?' } },
  { id: 11, group: P3, title: { zh: '水滴', en: 'The Droplet' }, pages: '',
    reflectQ: { zh: '近兩千艘戰艦，被一枚小小的水滴在幾小時內幾乎全滅。當技術的代差大到這種程度，「勇氣」與「決心」還剩下多少意義？', en: 'Nearly two thousand warships, all but annihilated in hours by one tiny droplet. When the technological gap is this vast, how much meaning is left in “courage” and “resolve”?' } },
  { id: 12, group: P4, title: { zh: '黑暗戰役', en: 'The Battle of Darkness' }, pages: '',
    reflectQ: { zh: '逃入深空的人類飛船，為了生存竟開始互相獵殺——黑暗森林原來也活在人心裡。極端處境會揭露人性，還是扭曲人性？', en: 'The human ships that fled into deep space begin hunting one another to survive — the dark forest lives in human hearts too. Do extreme situations reveal human nature, or distort it?' } },
  { id: 13, group: P4, title: { zh: '羅輯歸來', en: 'The Return of Luo Ji' }, pages: '',
    reflectQ: { zh: '羅輯甦醒時已是被遺忘的過氣人物，直到他標記的那顆星被摧毀——理論以最血腥的方式被證實。被世界嘲笑的真理，你敢不敢堅持？', en: 'Luo Ji wakes a forgotten has-been — until the star he marked is destroyed, and his theory is proven in the bloodiest way. A truth the world mocks: would you dare hold to it?' } },
  { id: 14, group: P4, title: { zh: '威懾', en: 'Deterrence' }, pages: '',
    reflectQ: { zh: '既然暴露座標就是死亡，羅輯把「暴露三體的座標」變成一個能按下的按鈕。用「一起死」當籌碼——這種威懾，讓你想到人類歷史上的什麼？', en: 'Since exposing coordinates means death, Luo Ji turns “exposing Trisolaris’s coordinates” into a button he can press. Deterrence staked on “dying together” — what in human history does it call to mind?' } },
  { id: 15, group: P4, title: { zh: '手握開關的人', en: 'The Hand on the Switch' }, pages: '',
    reflectQ: { zh: '整個文明的存亡，繫於一個人是否敢按下同歸於盡的開關。把這樣的權力與重擔交給一個人，是明智，還是危險？', en: 'The survival of a whole civilization hangs on whether one person dares press the switch of mutual destruction. Entrusting such power and burden to one person — wise, or dangerous?' } },
  { id: 16, group: P4, title: { zh: '給歲月以文明', en: 'Civilization for the Ages' }, pages: '',
    reflectQ: { zh: '人類靠著隨時能讓兩個文明一起毀滅的威脅換來了和平。這種以宇宙自殺相要挾的生存，究竟是勝利，還是另一種更深的絕望？', en: 'Humanity buys peace with the threat of destroying two civilizations at once. Survival held at the gunpoint of cosmic suicide — is it victory, or a deeper despair?' } }
];

const CHARACTERS = [
  { id: 'luoji', name: { zh: '羅輯', en: 'Luo Ji' }, family: 'wallfacer', role: { zh: '第四位面壁者 · 主角', en: 'The Fourth Wallfacer · Protagonist' }, icon: '🔦', color: '#4a9b72',
    desc: { zh: '玩世不恭、名不見經傳的天文學家兼社會學家，卻被選為第四位面壁者，連他自己都不知為何。他從葉文潔留下的兩條公理出發，推導出全書的核心——黑暗森林法則，並最終用它建立起對三體的威懾。', en: 'A cynical, obscure astronomer and sociologist, inexplicably chosen as the fourth Wallfacer — even he does not know why. Starting from the two axioms Ye Wenjie left him, he derives the book’s core — the dark forest theory — and in the end uses it to build a deterrence against Trisolaris.' },
    analysis: { zh: '羅輯是三部曲裡成長弧最完整的人物：從一個只想享樂、逃避責任的浪子，一步步被逼成扛起全人類命運的「執劍」之人。他的轉變不靠熱血，而靠冷酷的理性——正是那份「事不關己」的疏離，讓他能不帶幻想地直視宇宙最黑暗的真相。他證明：拯救文明的，有時不是英雄的激情，而是一個看透一切者的孤獨與決絕。', en: 'Luo Ji has the most complete arc in the trilogy: from a hedonist bent on pleasure and evading duty, he is forced step by step into the one who holds humanity’s fate. His change comes not from passion but from cold reason — it is precisely his detached “none of my business” distance that lets him stare, without illusion, at the universe’s darkest truth. He proves that what saves a civilization is sometimes not a hero’s ardor, but the loneliness and resolve of one who has seen through everything.' },
    tags: [ { zh: '面壁者', en: 'Wallfacer' }, { zh: '黑暗森林理論', en: 'The dark forest theory' }, { zh: '從浪子到執劍', en: 'From hedonist to sword-holder' } ],
    related: ['yewenjie', 'zhuangyan', 'dashi', 'trisolaris'] },
  { id: 'zhangbeihai', name: { zh: '章北海', en: 'Zhang Beihai' }, family: 'earth', role: { zh: '太空軍軍官 · 逃亡主義者', en: 'Space-Force Officer · A Secret Escapist' }, icon: '🚀', color: '#c9a84e',
    desc: { zh: '外表意志堅定的太空軍軍官，內心卻早已是徹底的「逃亡主義者」。為了推動人類造出能飛向深空的飛船，他不惜暗殺反對者、隱藏真心，再進入冬眠奔向未來。', en: 'A space-force officer of seemingly iron will, who is in truth a thorough “escapist.” To push humanity into building ships that can reach deep space, he does not shrink from assassinating opponents and hiding his heart, then hibernates toward the future.' },
    analysis: { zh: '章北海是全書道德上最複雜、也最令人難忘的角色。他背負著一個不能說的信念：人類終將戰敗，唯有逃亡才是活路。為此他成了「叛徒」，卻是為了物種而叛。當他在黑暗戰役中被人類自己的飛船擊中、留下那句「沒關係的，都一樣的」，道盡了黑暗森林裡一切選擇的悲涼——在生存面前，是非對錯都被壓成了同一種灰。', en: 'Zhang Beihai is the book’s most morally complex and unforgettable figure. He carries an unspeakable conviction: humanity will lose, and only flight is a way to live. For it he becomes a “traitor” — but a traitor for the species. When, in the Battle of Darkness, he is struck by a ship of his own kind and murmurs “it doesn’t matter, they’re all the same,” he captures the desolation of every choice in the dark forest — before survival, right and wrong are pressed into the same shade of grey.' },
    tags: [ { zh: '逃亡主義', en: 'Escapism' }, { zh: '為物種而叛', en: 'A traitor for the species' }, { zh: '都一樣的', en: '“They’re all the same”' } ],
    related: ['trisolaris'] },
  { id: 'zhuangyan', name: { zh: '莊顏', en: 'Zhuang Yan' }, family: 'earth', role: { zh: '羅輯所愛之人', en: 'The One Luo Ji Loves' }, icon: '🌸', color: '#c0566a',
    desc: { zh: '羅輯先在想像中「造」出的完美戀人，後來竟在現實裡尋得。她給了羅輯一段短暫而真實的幸福；而正是這份幸福，被聯合國當成籌碼，逼他扛起面壁者的責任。', en: 'The perfect lover Luo Ji first “creates” in his imagination, then finds, astonishingly, in reality. She gives him a brief, genuine happiness — and it is precisely this happiness that the UN takes as leverage to force him to take up a Wallfacer’s duty.' },
    analysis: { zh: '莊顏在冷酷的宇宙敘事裡，是一抹難得的溫柔。她代表著羅輯（也代表人類）真正想守護的東西——不是抽象的「文明」，而是具體的愛與日常。把她送入冬眠當籌碼，是全書最殘忍的一手：它逼問我們，為了守護所愛，一個人願意背負多重的世界？', en: 'In a cold cosmic narrative, Zhuang Yan is a rare stroke of tenderness. She stands for what Luo Ji — and humanity — truly wishes to protect: not an abstract “civilization,” but concrete love and daily life. Putting her into hibernation as leverage is the book’s cruelest move: it forces the question of how heavy a world a person will carry to protect the one they love.' },
    tags: [ { zh: '溫柔', en: 'Tenderness' }, { zh: '想守護的東西', en: 'What is worth protecting' } ],
    related: ['luoji'] },
  { id: 'dashi', name: { zh: '史強（大史）', en: 'Da Shi' }, family: 'earth', role: { zh: '羅輯的守護者', en: 'Luo Ji’s Guardian' }, icon: '🚬', color: '#c9a84e',
    desc: { zh: '第一部裡那位粗獷務實的警官，在本部繼續守護著羅輯。當羅輯還不明白自己的處境時，是大史一次次替他擋下危險、把他拉回現實。', en: 'The gruff, pragmatic detective of Book One, who continues here as Luo Ji’s protector. While Luo Ji still fails to grasp his situation, it is Da Shi who fends off danger time and again and pulls him back to reality.' },
    analysis: { zh: '大史依舊是那根接地的地線。在滿是宏大理論與宇宙尺度的故事裡，他代表著最樸素的人味與生存智慧——不談哲學，只管把人保住、把日子過下去。他與羅輯的搭配，是「看透宇宙的頭腦」與「守住當下的雙手」的絕配。', en: 'Da Shi remains the wire to solid ground. In a story full of grand theory and cosmic scale, he stands for the plainest human warmth and survival sense — no philosophy, just keep the person alive and the days going. His pairing with Luo Ji is a perfect match of “a mind that sees through the cosmos” and “hands that hold the present.”' },
    tags: [ { zh: '接地氣', en: 'Down to earth' }, { zh: '守護者', en: 'The guardian' } ],
    related: ['luoji'] },
  { id: 'yewenjie', name: { zh: '葉文潔', en: 'Ye Wenjie' }, family: 'earth', role: { zh: '宇宙社會學的播種者', en: 'Who Sowed Cosmic Sociology' }, icon: '🕯️', color: '#c0566a',
    desc: { zh: '第一部引來三體的人。在生命的盡頭，她於女兒墓前向羅輯提起「宇宙社會學」的兩條公理，留下「猜疑鏈」與「技術爆炸」兩個概念便離世——親手埋下了黑暗森林理論的種子。', en: 'The one who drew Trisolaris in Book One. At the end of her life, at her daughter’s grave, she speaks to Luo Ji of the two axioms of “cosmic sociology,” leaving him the ideas of the “chain of suspicion” and the “technological explosion” before she dies — planting, with her own hand, the seed of the dark forest theory.' },
    analysis: { zh: '葉文潔在本部只是驚鴻一瞥，卻是承先啟後的關鍵。是她的絕望引來了敵人，也是她的智慧，最終給了人類反擊的鑰匙。這個安排充滿宿命的反諷：打開潘朵拉盒子的人，也遞出了對抗災難的鑰匙——彷彿在說，同一份對宇宙的洞察，既能毀滅，也能拯救。', en: 'Ye Wenjie appears only in a flash here, yet she is the hinge between the books. Her despair drew the enemy; her wisdom, in the end, hands humanity the key to strike back. The arrangement is full of fated irony: the one who opened Pandora’s box also passes on the key against the disaster — as if to say that a single insight into the cosmos can both destroy and save.' },
    tags: [ { zh: '兩條公理', en: 'The two axioms' }, { zh: '播種者', en: 'The one who sowed' }, { zh: '宿命的反諷', en: 'Fated irony' } ],
    related: ['luoji'] },
  { id: 'tyler', name: { zh: '泰勒', en: 'Frederick Tyler' }, family: 'wallfacer', role: { zh: '第一位面壁者', en: 'The First Wallfacer' }, icon: '🎖️', color: '#9db0a4',
    desc: { zh: '前美國國防部長。他企圖打造一支表面用於防禦、實則另藏殺著的太空軍力。當計謀被破壁人識破，他走向了自盡。', en: 'A former US Secretary of Defense. He seeks to build a space force ostensibly for defense but secretly harboring another edge. When his Wallbreaker cracks the plan, he takes his own life.' },
    analysis: { zh: '泰勒是面壁者困境的第一個註腳：在一個能看穿你一切行動的敵人面前，任何祕密戰略終究難以完全隱藏。他的失敗預示了整個面壁計畫的脆弱——把人類的希望寄託在「一個人能瞞過全宇宙」上，本身就是一場豪賭。', en: 'Tyler is the first footnote to the Wallfacer’s dilemma: before an enemy that sees your every act, any secret strategy is finally hard to fully hide. His failure foreshadows the fragility of the whole project — resting humanity’s hope on “one person outwitting the entire cosmos” is a gamble from the start.' },
    tags: [ { zh: '前國防部長', en: 'Former defense chief' }, { zh: '祕密太空軍', en: 'A secret space force' } ],
    related: ['trisolaris'] },
  { id: 'reydiaz', name: { zh: '雷迪亞茲', en: 'Manuel Rey Diaz' }, family: 'wallfacer', role: { zh: '第二位面壁者', en: 'The Second Wallfacer' }, icon: '☢️', color: '#9db0a4',
    desc: { zh: '前委內瑞拉總統。他想造出巨型氫彈，名為攻擊三體，實為以「毀滅太陽系」相要挾的威懾。人類為之驚駭、將他唾棄；他黯然返鄉，卻死在自己人手裡。', en: 'A former president of Venezuela. He plans giant hydrogen bombs, ostensibly to strike Trisolaris but really as a deterrence that threatens to destroy the solar system itself. Humanity recoils in horror and casts him out; he returns home in disgrace, only to die at the hands of his own people.' },
    analysis: { zh: '雷迪亞茲的悲劇，在於他太早看見了那條後來由羅輯實現的「威懾」之路——用同歸於盡來嚇阻敵人。但人類還沒準備好接受這種以自身為賭注的黑暗邏輯，於是他成了先知，也成了被獻祭的人。時機不對的真理，往往比謬誤更危險。', en: 'Rey Diaz’s tragedy is that he glimpsed too early the road of “deterrence” that Luo Ji would later realize — frightening the enemy with mutual destruction. But humanity was not yet ready to accept this dark logic that stakes itself, so he became both prophet and scapegoat. A truth arriving at the wrong time is often more dangerous than an error.' },
    tags: [ { zh: '前總統', en: 'Former president' }, { zh: '毀滅相要挾', en: 'Threat of self-destruction' }, { zh: '不合時宜的先知', en: 'A prophet out of time' } ],
    related: ['trisolaris'] },
  { id: 'hines', name: { zh: '希恩斯', en: 'Bill Hines' }, family: 'wallfacer', role: { zh: '第三位面壁者', en: 'The Third Wallfacer' }, icon: '🧠', color: '#9db0a4',
    desc: { zh: '腦科學家。他發明了能把一個信念烙進大腦、使人絕對深信不疑的「思想鋼印」。他本想藉此堅定人類必勝的信念，這項技術最終卻淪為散播失敗主義的工具。', en: 'A neuroscientist. He invents the “mental seal,” a device that can brand a single belief into the brain so a person believes it absolutely. He means to fortify humanity’s faith in victory, but the technology ends up a tool for spreading defeatism.' },
    analysis: { zh: '希恩斯的計謀觸及了最危險的疆界：直接改寫人的信念。當一個信念可以被「烙印」成不容置疑的真理，自由意志還剩下什麼？他的失敗提出了一個比外星入侵更深的恐懼——真正能摧毀人類的，也許不是敵人的艦隊，而是人類對自己心智的操縱。', en: 'Hines’s plan touches the most dangerous frontier: rewriting belief itself. When a belief can be “branded” as unquestionable truth, what remains of free will? His failure poses a fear deeper than alien invasion — what can truly destroy humanity may not be the enemy’s fleet, but humanity’s manipulation of its own minds.' },
    tags: [ { zh: '思想鋼印', en: 'The mental seal' }, { zh: '改寫信念', en: 'Rewriting belief' } ],
    related: ['keiko', 'trisolaris'] },
  { id: 'keiko', name: { zh: '山杉惠子', en: 'Keiko Yamasugi' }, family: 'earth', role: { zh: '希恩斯之妻', en: 'Hines’s Wife' }, icon: '🎭', color: '#6a7c70',
    desc: { zh: '腦科學家，希恩斯的妻子與研究夥伴。看似最親密的枕邊人，卻在故事中扮演了牽動希恩斯計謀走向的關鍵角色。', en: 'A neuroscientist, Hines’s wife and research partner. The most intimate of companions, she plays a pivotal role in the fate of his plan.' },
    analysis: { zh: '山杉惠子的存在，把「破壁人」的恐怖推到極致——最了解你的人，可能正是最能破解你的人。在一個連枕邊人都可能是對手的世界裡，猜疑鏈甚至滲進了最親密的關係。這是黑暗森林邏輯在人間的微縮版。', en: 'Keiko pushes the terror of the “Wallbreaker” to its extreme — the one who knows you best may be the one best able to break you. In a world where even the person beside you may be an adversary, the chain of suspicion seeps into the most intimate of bonds. It is the dark forest logic in miniature, played out among humans.' },
    tags: [ { zh: '枕邊的對手', en: 'An adversary in the bed' }, { zh: '最了解者最危險', en: 'The closest is the most dangerous' } ],
    related: ['hines'] },
  { id: 'trisolaris', name: { zh: '三體文明', en: 'Trisolaris' }, family: 'trisolaris', role: { zh: '入侵者', en: 'The Invader' }, icon: '🌗', color: '#c0566a',
    desc: { zh: '四光年外的入侵文明。艦隊仍在途中，卻已用智子鎖死人類科學、監看一切。面對人類的面壁計畫，他們以破壁人一一拆解，並派出「水滴」給人類致命一擊。', en: 'The invading civilization four light-years away. Its fleet is still en route, yet it has locked human science with the sophons and watches all. Against the Wallfacer Project, it dismantles each plan through Wallbreakers, and sends the “Droplet” to deal humanity a mortal blow.' },
    analysis: { zh: '本部裡的三體，展現了壓倒性的技術與冷酷的效率。但劉慈欣沒有讓他們變成純粹的惡魔——他們同樣是黑暗森林裡的獵人，同樣為了生存而不擇手段。人與三體的對抗，本質上不是善惡之爭，而是兩個都想活下去的文明，被同一套殘酷法則逼到你死我活。', en: 'Here Trisolaris shows overwhelming technology and cold efficiency. Yet Liu Cixin does not make them pure demons — they too are hunters in the dark forest, doing whatever it takes to survive. The struggle between humanity and Trisolaris is, at bottom, not a war of good and evil, but two civilizations that both want to live, driven by the same merciless law to a fight to the death.' },
    tags: [ { zh: '壓倒性技術', en: 'Overwhelming technology' }, { zh: '同為獵人', en: 'Also a hunter' } ],
    related: ['droplet', 'luoji'] },
  { id: 'droplet', name: { zh: '水滴', en: 'The Droplet' }, family: 'trisolaris', role: { zh: '三體探測器', en: 'The Trisolaran Probe' }, icon: '💧', color: '#71c096',
    desc: { zh: '三體派往太陽系的探測器，外形是一枚通體鏡面的完美淚滴，由堅不可摧的強互作用力材料構成。它在眾目睽睽之下，用小小的身軀近乎全滅了人類近兩千艘戰艦的聯合艦隊。', en: 'The probe Trisolaris sends to the solar system — a perfect, mirror-surfaced teardrop of indestructible strong-interaction material. Before the eyes of all, its tiny body all but annihilates humanity’s combined fleet of nearly two thousand warships.' },
    analysis: { zh: '水滴是全書最令人戰慄的意象：一個小巧、優美、甚至聖潔的物體，卻是純粹的死亡。它的完美鏡面倒映著人類的自信，也倒映著人類的渺小。透過它，劉慈欣把「技術代差」的恐怖具象化——當差距大到一定程度，戰爭不再是戰爭，而是一場單方面的、冷靜的清除。', en: 'The Droplet is the book’s most chilling image: a small, elegant, almost sacred object that is pure death. Its perfect mirror reflects humanity’s confidence and its smallness alike. Through it, Liu Cixin makes the terror of a technological gap concrete — when the gap grows large enough, war is no longer war, but a one-sided, dispassionate extermination.' },
    tags: [ { zh: '完美的淚滴', en: 'A perfect teardrop' }, { zh: '純粹的死亡', en: 'Pure death' }, { zh: '技術代差', en: 'The technological gap' } ],
    related: ['trisolaris'] }
];

const TIMELINE_DATA = [
  { year: { zh: '起點', en: 'The Seed' }, event: { zh: '葉文潔留下宇宙社會學公理', en: 'Ye Wenjie leaves the axioms of cosmic sociology' }, novel: { zh: '在女兒墓前，垂暮的葉文潔向羅輯道出兩條公理與「猜疑鏈」「技術爆炸」，埋下黑暗森林理論的種子。', en: 'At her daughter’s grave, the aged Ye Wenjie tells Luo Ji the two axioms and the ideas of the chain of suspicion and the technological explosion — the seed of the dark forest theory.' }, type: 'character' },
  { year: { zh: '對策', en: 'The Countermeasure' }, event: { zh: '面壁計畫啟動', en: 'The Wallfacer Project begins' }, novel: { zh: '智子讀不到人心，人類選出四位面壁者，把戰略藏進腦中；地球三體組織則指派破壁人一一拆解。', en: 'Since sophons cannot read minds, humanity chooses four Wallfacers to hide strategy in thought; the ETO assigns Wallbreakers to crack each one.' }, type: 'novel' },
  { year: { zh: '推導', en: 'The Derivation' }, event: { zh: '羅輯推出黑暗森林法則', en: 'Luo Ji derives the dark forest theory' }, novel: { zh: '從兩條公理與猜疑鏈、技術爆炸出發，羅輯得出：宇宙是黑暗森林，暴露即死亡——第一部「不要回答」的終極解答。', en: 'From the axioms plus suspicion and the tech explosion, Luo Ji concludes: the universe is a dark forest, and exposure means death — the final answer to Book One’s “Do not answer.”' }, type: 'novel' },
  { year: { zh: '實驗', en: 'The Experiment' }, event: { zh: '咒語 · 標記一顆遙遠的星', en: 'The spell: marking a distant star' }, novel: { zh: '羅輯向五十光年外的一顆恆星發送座標，以驗證黑暗森林法則，隨後進入冬眠等待結果。', en: 'Luo Ji broadcasts the coordinates of a star fifty light-years away to test the theory, then hibernates to await the result.' }, type: 'novel' },
  { year: { zh: '崩壞', en: 'The Collapse' }, event: { zh: '大低谷', en: 'The Great Ravine' }, novel: { zh: '絕望讓人類文明一度崩潰、人口銳減；兩百年後又重建為壯盛而過度自信的太空文明。', en: 'Despair once collapses human civilization and slashes its population; two centuries later it rebuilds into a mighty, overconfident space civilization.' }, type: 'novel' },
  { year: { zh: '暗謀', en: 'The Hidden Move' }, event: { zh: '章北海與逃亡主義', en: 'Zhang Beihai and escapism' }, novel: { zh: '章北海為推動深空飛船暗殺反對者、隱藏真心，帶著「人類終將戰敗」的信念奔向未來。', en: 'To push for deep-space ships, Zhang Beihai assassinates opponents and hides his heart, carrying the belief that humanity will lose into the future.' }, type: 'character' },
  { year: { zh: '屠殺', en: 'The Slaughter' }, event: { zh: '水滴全滅聯合艦隊', en: 'The Droplet annihilates the combined fleet' }, novel: { zh: '一枚小小的水滴，在幾小時內近乎全滅人類近兩千艘戰艦的聯合艦隊，人類的自信瞬間粉碎。', en: 'One tiny droplet, in a few hours, all but annihilates humanity’s combined fleet of nearly two thousand ships; human confidence is shattered in an instant.' }, type: 'novel' },
  { year: { zh: '人心的森林', en: 'The Forest Within' }, event: { zh: '黑暗戰役', en: 'The Battle of Darkness' }, novel: { zh: '逃入深空的少數飛船，因資源不足與猜疑鏈，竟為生存而互相獵殺——黑暗森林也活在人心裡。', en: 'The few ships that fled into deep space, short of resources and gripped by suspicion, hunt one another to survive — the dark forest lives in human hearts too.' }, type: 'novel' },
  { year: { zh: '驗證', en: 'The Proof' }, event: { zh: '羅輯歸來 · 咒語應驗', en: 'Luo Ji returns; the spell comes true' }, novel: { zh: '羅輯甦醒，成了被遺忘的過氣人物；直到他標記的那顆星被摧毀，黑暗森林法則以最血腥的方式被證實。', en: 'Luo Ji wakes a forgotten has-been — until the star he marked is destroyed, and the dark forest theory is proven in the bloodiest way.' }, type: 'character' },
  { year: { zh: '對峙', en: 'The Standoff' }, event: { zh: '黑暗森林威懾建立', en: 'The dark forest deterrence is established' }, novel: { zh: '羅輯把「暴露三體座標」變成隨時可按下的按鈕，以同歸於盡相要挾，逼三體停手、談判、分享技術。', en: 'Luo Ji turns “exposing Trisolaris’s coordinates” into a button he can press at any moment, and with the threat of mutual ruin forces Trisolaris to halt, negotiate, and share technology.' }, type: 'novel' },
  { year: { zh: '結局', en: 'The Ending' }, event: { zh: '恐怖平衡下的和平', en: 'Peace under a balance of terror' }, novel: { zh: '人類靠著隨時能讓兩個文明一起毀滅的威脅，換來了脆弱的喘息——一種以宇宙自殺相要挾的生存。', en: 'Humanity buys a fragile reprieve with the threat of destroying both civilizations at once — a survival held at the gunpoint of cosmic suicide.' }, type: 'novel' }
];

const THEMES = [
  { id: 'darkforest', icon: '🌲', title: { zh: '黑暗森林法則', en: 'The Dark Forest Theory' }, subtitle: { zh: '宇宙為何沉默，暴露為何是死亡', en: 'Why the cosmos is silent, and exposure is death' }, color: '#4a9b72',
    intro: { zh: '全書的思想核心，也是整個系列最著名的宇宙圖景。', en: 'The book’s conceptual heart, and the most famous vision of the cosmos in the whole series.' },
    body: { zh: '<p>從兩條公理（生存是第一需要、物質總量不變）出發，加上猜疑鏈與技術爆炸，羅輯推出令人膽寒的結論：宇宙是一座黑暗森林，每個文明都是帶槍潛行的獵人。在這裡，任何暴露自己位置的，都會被其他獵人搶先消滅——因為你無法確認對方是否友善，而技術爆炸讓「放過」成了無法承擔的風險。</p><p>於是所有文明都選擇沉默，並毫不猶豫地清除任何暴露的聲音。這解答了第一部「不要回答」的警告，也把整個宇宙重新定義成一個冰冷的獵場。</p><div class="theme-quote">「暴露自己，就是死亡。」</div>', en: '<p>From two axioms (survival is the first need; total matter is constant), plus suspicion and the technological explosion, Luo Ji derives a spine-chilling conclusion: the universe is a dark forest, every civilization an armed hunter creeping silent. Here, any that reveals its location is destroyed first by other hunters — because you cannot confirm the other is friendly, and the tech explosion makes “sparing” an unbearable risk.</p><p>So every civilization chooses silence, and without hesitation erases any exposed sound. This answers Book One’s “Do not answer,” and redefines the whole cosmos as a cold hunting ground.</p><div class="theme-quote">“To reveal yourself is to die.”</div>' },
    chapters: ['5', '6', '7'] },
  { id: 'suspicion', icon: '🔗', title: { zh: '猜疑鏈', en: 'The Chain of Suspicion' }, subtitle: { zh: '無法確認善惡，就無法信任', en: 'You cannot trust what you cannot verify' }, color: '#5b8fd0',
    intro: { zh: '黑暗森林的第一根支柱，也是人與人之間似曾相識的困境。', en: 'The first pillar of the dark forest — and a dilemma that feels familiar between people, too.' },
    body: { zh: '<p>兩個相隔光年的文明，永遠無法確認對方是善意還是惡意，也無法確認對方如何猜測自己、對方又如何猜測「自己對對方的猜測」……於是不信任層層疊加，形成一條無法化解的猜疑鏈。距離愈遠、延遲愈久，這條鏈就愈牢不可破。</p><p>它最可怕之處，在於它不需要任何一方真的懷有惡意——光是「無法確認善意」，就足以把雙方推向先下手為強。這不只是宇宙的邏輯，也是人類猜忌、軍備競賽、乃至戰爭的古老回聲。</p><div class="theme-quote">「我無法確認你是善意的，這就足夠了。」</div>', en: '<p>Two civilizations light-years apart can never confirm whether the other means good or ill, nor how the other guesses at them, nor how the other guesses at “their guess about the other” … so distrust stacks layer upon layer into an unbreakable chain of suspicion. The greater the distance and delay, the more unbreakable the chain.</p><p>Its horror is that it needs neither side to actually harbor malice — merely being “unable to confirm goodwill” is enough to push both toward striking first. This is not only the logic of the cosmos, but an ancient echo of human suspicion, arms races, and war.</p><div class="theme-quote">“I cannot confirm you mean well — and that is enough.”</div>' },
    chapters: ['5', '12'] },
  { id: 'wallfacer', icon: '🧠', title: { zh: '面壁與破壁', en: 'Wallfacers and Wallbreakers' }, subtitle: { zh: '對抗全知之敵的唯一破綻', en: 'The one blind spot of an all-seeing enemy' }, color: '#c9a84e',
    intro: { zh: '當敵人能看穿你的一切行動，唯一藏得住的，只剩你的念頭。', en: 'When the enemy sees your every act, the only thing you can hide is your thought.' },
    body: { zh: '<p>智子能監看人類的一切行為，卻讀不到人「腦中的想法」。面壁計畫正是抓住這唯一的破綻：讓少數幾人把真正的戰略只藏在腦中，用欺瞞對抗全知。但地球三體組織以「破壁人」回應——最了解你的人，往往正是最能猜破你的人。</p><p>這場心理博弈提出了一個孤獨的命題：把全人類的希望，寄託在「一個人能瞞過全宇宙」之上，本身就是一場豪賭。四位面壁者的成敗，正是對這場豪賭的四種註解。</p><div class="theme-quote">「唯一藏得住的地方，是一個人的心裡。」</div>', en: '<p>The sophons watch every human action but cannot read the thoughts in a mind. The Wallfacer Project seizes this one blind spot: let a few keep their true strategy only in thought, fighting omniscience with deception. But the ETO answers with Wallbreakers — the one who knows you best is often the one who can crack you best.</p><p>This psychological game poses a lonely proposition: to rest all humanity’s hope on “one person outwitting the whole cosmos” is itself a gamble. The fates of the four Wallfacers are four annotations to that gamble.</p><div class="theme-quote">“The only place you can hide is inside a single mind.”</div>' },
    chapters: ['2', '3', '8'] },
  { id: 'cost', icon: '⚖️', title: { zh: '生存的道德代價', en: 'The Moral Cost of Survival' }, subtitle: { zh: '為了活下去，可以走到多遠', en: 'How far can you go, just to survive' }, color: '#c0566a',
    intro: { zh: '章北海、黑暗戰役、威懾——生存的邏輯一次次輾過道德。', en: 'Zhang Beihai, the Battle of Darkness, deterrence — the logic of survival rolls over morality again and again.' },
    body: { zh: '<p>章北海為了物種的存續，願意背叛規則與同袍；逃入深空的飛船為了活命，竟互相獵殺；羅輯為了嚇阻敵人，把「同歸於盡」握在手中。當生存成為第一公理，是非對錯是否還站得住腳？</p><p>劉慈欣沒有給出廉價的答案。他讓我們直視一個殘酷的問題：在黑暗森林裡，「守住道德」與「活下去」常常無法兩全——而每一次選擇，都要付出靈魂的代價。章北海那句「都一樣的」，正是這種代價最沉默的哀鳴。</p><div class="theme-quote">「在生存面前，是非對錯都被壓成同一種灰。」</div>', en: '<p>Zhang Beihai betrays rules and comrades for the survival of the species; the ships fleeing into deep space hunt one another to live; Luo Ji holds “mutual destruction” in his hand to deter the enemy. When survival becomes the first axiom, do right and wrong still stand?</p><p>Liu Cixin offers no cheap answer. He makes us face a cruel question: in the dark forest, “keeping one’s morality” and “staying alive” often cannot both be had — and every choice exacts a price from the soul. Zhang Beihai’s “they’re all the same” is the most silent lament of that price.</p><div class="theme-quote">“Before survival, right and wrong are pressed into the same grey.”</div>' },
    chapters: ['9', '12', '14'] },
  { id: 'terror', icon: '☢️', title: { zh: '恐怖平衡', en: 'A Balance of Terror' }, subtitle: { zh: '以同歸於盡換來的和平', en: 'A peace bought with mutual destruction' }, color: '#71c096',
    intro: { zh: '人類最終的活路，竟是把「一起死」握在手裡。', en: 'Humanity’s final path to survival is to hold “dying together” in its hand.' },
    body: { zh: '<p>威懾的邏輯冷酷而簡單：既然暴露座標就是死亡，那就讓「暴露三體的座標」成為隨時能按下的按鈕，逼對方不敢輕舉妄動。羅輯用「一起死」當籌碼，換來了三體的停手與談判。</p><p>但這份和平，建立在一個隨時可能同歸於盡的平衡之上——它像極了人類自己歷史裡的核威懾。全書最後的蒼涼在於：人類活下來了，卻是靠著隨時能毀滅一切的威脅活下來的。這究竟是勝利，還是另一種更深的絕望？</p><div class="theme-quote">「我可以隨時毀滅你們，也毀滅我們自己。」</div>', en: '<p>The logic of deterrence is cold and simple: since exposing coordinates means death, make “exposing Trisolaris’s coordinates” a button you can press at any moment, so the other dare not move. Luo Ji stakes “dying together” and wins Trisolaris’s halt and negotiation.</p><p>But this peace rests on a balance that could end in mutual ruin at any instant — much like humanity’s own history of nuclear deterrence. The book’s final desolation is this: humanity survives, but only by the threat of destroying everything. Is that victory, or a deeper despair?</p><div class="theme-quote">“I can destroy you at any moment — and destroy us as well.”</div>' },
    chapters: ['14', '15', '16'] }
];

const QUOTES = [
  { text: { zh: '宇宙是一座黑暗森林，每個文明都是帶槍的獵人。', en: 'The universe is a dark forest; every civilization is an armed hunter.' }, source: { zh: '第六章 · 黑暗森林（核心論述）', en: 'Chapter 6 · The Dark Forest (the core idea)' },
    analysis: { zh: '整個系列最著名的一句，也是全書思想的頂點。它把浩瀚宇宙重新定義成一座冷酷的獵場，一句話解釋了「宇宙為何沉默」，也解答了第一部「不要回答」的警告。', en: 'The most famous line in the series and the summit of the book’s thought. It redefines the vast cosmos as a cold hunting ground, explains in one sentence “why the universe is silent,” and answers Book One’s “Do not answer.”' } },
  { text: { zh: '生存是文明的第一需要。', en: 'Survival is the first need of a civilization.' }, source: { zh: '第一章 · 宇宙社會學第一公理', en: 'Chapter 1 · The first axiom of cosmic sociology' },
    analysis: { zh: '看似平淡的一句，卻是整條黑暗森林推論的地基。當生存被置於一切之上，善意、道德、信任便都成了奢侈品——宇宙的殘酷，正是從這條公理開始。', en: 'A plain-sounding line, yet the foundation of the whole dark forest derivation. When survival is placed above all, goodwill, morality, and trust all become luxuries — the cruelty of the cosmos begins from this axiom.' } },
  { text: { zh: '暴露自己的位置，就是暴露死亡。', en: 'To reveal your location is to reveal your death.' }, source: { zh: '第六章 · 黑暗森林（提煉）', en: 'Chapter 6 · The Dark Forest (a distillation)' },
    analysis: { zh: '黑暗森林法則最直接的一句。它把「呼喊」與「死亡」畫上等號，讓第一部裡葉文潔那一聲呼喊的重量，變得無比沉重。', en: 'The most direct statement of the dark forest theory. It equates “calling out” with “death,” making the weight of Ye Wenjie’s single cry in Book One immeasurably heavy.' } },
  { text: { zh: '沒關係的，都一樣的。', en: 'It doesn’t matter; they’re all the same.' }, source: { zh: '第十二章 · 章北海', en: 'Chapter 12 · Zhang Beihai' },
    analysis: { zh: '章北海在黑暗戰役中留下的低語。短短一句，道盡了黑暗森林裡一切選擇的悲涼——當生存壓倒一切，敵我、是非、對錯，最終都被碾成同一種灰。', en: 'Zhang Beihai’s murmur in the Battle of Darkness. In a few words it captures the desolation of every choice in the dark forest — when survival overrides all, friend and foe, right and wrong, are ground into the same grey.' } },
  { text: { zh: '給歲月以文明，而不是給文明以歲月。', en: 'Give civilization to time, not time to civilization.' }, source: { zh: '第十六章 · 全書主旨（系列名句）', en: 'Chapter 16 · The theme (a signature line of the series)' },
    analysis: { zh: '一句話點出人類在存亡之間的選擇：與其苟延殘喘地「多活幾年」，不如讓活著的每一刻都保有文明的尊嚴。它是黑暗中對「該如何活」的溫柔叩問。', en: 'One line names humanity’s choice between survival and dignity: rather than merely “live a few more years” in misery, let every living moment keep the dignity of civilization. It is a tender question, in the dark, about how one ought to live.' } },
  { text: { zh: '我可以隨時毀滅你們，也毀滅我們自己。', en: 'I can destroy you at any moment — and destroy us as well.' }, source: { zh: '第十五章 · 威懾（提煉）', en: 'Chapter 15 · Deterrence (a distillation)' },
    analysis: { zh: '羅輯建立威懾的核心邏輯。人類最終的活路，竟是把「一起死」握在手裡——這份以自身為賭注的決絕，既是智慧的頂點，也是絕望的深淵。', en: 'The core logic by which Luo Ji builds deterrence. Humanity’s final path to survival is to hold “dying together” in its hand — a resolve that stakes the self, at once the summit of wisdom and the depth of despair.' } }
];

const REFLECTION_QUESTIONS = [
  { zh: '你被「黑暗森林法則」說服了嗎？宇宙裡的文明，真的只能是彼此獵殺的獵人，還是有別的可能？', en: 'Does the “dark forest theory” convince you? Must civilizations in the cosmos be hunters that prey on each other — or is another possibility open?' },
  { zh: '「猜疑鏈」說：只要無法確認對方的善意，就足以走向敵對。這在國與國、人與人之間，是不是也一樣成立？', en: 'The “chain of suspicion” says that merely being unable to confirm goodwill is enough to breed hostility. Does the same hold between nations, and between people?' },
  { zh: '面壁計畫把全人類的希望押在少數幾人「能瞞過全宇宙」之上。你認為這是聰明的奇招，還是危險的孤注一擲？', en: 'The Wallfacer Project stakes all humanity’s hope on a few “outwitting the cosmos.” Do you see it as a brilliant stroke, or a dangerous all-in bet?' },
  { zh: '章北海為了物種存續而背叛規則。當「大我的生存」與「小我的道德」衝突，你會怎麼選？', en: 'Zhang Beihai betrays the rules for the species’ survival. When the survival of the whole collides with personal morality, how would you choose?' },
  { zh: '逃入深空的人類飛船，為了活命而互相獵殺。你認為極端處境是揭露了人性，還是扭曲了人性？', en: 'The ships fleeing into deep space hunt one another to live. Do extreme situations reveal human nature, or distort it?' },
  { zh: '水滴以壓倒性的技術代差近乎全滅艦隊。當差距大到這種程度，勇氣與決心還剩下多少意義？', en: 'The Droplet annihilates the fleet through an overwhelming technological gap. When the gap is this vast, how much meaning remains in courage and resolve?' },
  { zh: '羅輯的威懾，靠的是「隨時能同歸於盡」。你怎麼看這種以自我毀滅相要挾換來的和平？', en: 'Luo Ji’s deterrence rests on “being able to die together at any moment.” How do you regard a peace bought with the threat of self-destruction?' },
  { zh: '「給歲月以文明，而不是給文明以歲月。」在生存與尊嚴之間，你會把砝碼放在哪一邊？', en: '“Give civilization to time, not time to civilization.” Between survival and dignity, where would you place the weight?' },
  { zh: '羅輯從一個只想享樂的浪子，變成扛起全人類的人。是什麼樣的力量，能逼出一個人身上他自己都不知道的重量？', en: 'Luo Ji turns from a pleasure-seeking drifter into the one who carries all humanity. What force can draw out of a person a weight they never knew they had?' },
  { zh: '讀完第二部，你對「宇宙是否友善」的看法，比讀第一部時更悲觀，還是找到了一絲不同的希望？', en: 'Having read Book Two, is your view of whether the universe is friendly more pessimistic than after Book One — or have you found a different sliver of hope?' }
];


// ==== CHAPTER_CONTENT（情節重述，中英雙語，子代理擴寫）====
const CHAPTER_CONTENT = {};

Object.assign(CHAPTER_CONTENT, {
  1: {
    num: { zh: `第一章`, en: `Chapter One` },
    title: { zh: `宇宙社會學`, en: `Cosmic Sociology` },
    epigraph: {
      zh: `兩條公理，便足以推演出一整座宇宙的沉默。`,
      en: `Two axioms are enough to derive the silence of an entire universe.`
    },
    body: {
      zh: `<p>三體艦隊已在四百年外的深空啟航，朝著這顆藍色行星逼近。人類仰望夜空，卻連敵人的臉都看不見；被稱為智子的微觀存在，滲透進文明的每一道縫隙，把人類的一舉一動盡收眼底。它們能監看人的行為，卻讀不出人腦中盤旋的念頭——這道薄薄的縫隙，成了整個物種僅存的隱私。</p>

<p>就在這樣的陰影下，一位走到生命盡頭的老人，把一顆種子悄然埋進了年輕學者羅輯的心裡。葉文潔站在女兒楊冬的墓前，那墳塋像一句無法收回的話。她對羅輯提起一門她命名為「宇宙社會學」的學問——一種把整個宇宙當成社會來研究的思想實驗。</p>

<div class="section-break">＊ ＊ ＊</div>

<p>她只給了兩條公理，冷硬得像刻在石上的律法。第一：生存，是文明的第一需要。第二：文明不斷增長、擴張，而宇宙中的物質總量卻恆定不變。有限的資源，與無限的欲望，被放進同一個方程式裡。</p>

<p>接著她留下兩個名詞，像兩把還未開刃的刀：「猜疑鏈」與「技術爆炸」。她沒有展開，也不打算展開，彷彿只是把工具擱在門口，剩下的路要別人自己走完。說完這些，她轉身離去，不久便告別了人世。</p>

<p>羅輯當時並不明白這席話的分量。對他而言，那不過是一位陌生老人臨終前的囈語，玄奧而遙遠。他不知道，這兩條公理與兩個詞，正是整個未來的種子——它們將在數十年後生根、抽芽，長成一片籠罩全宇宙的黑暗森林。</p>

<p class="thought-question">🤔 思考：如果生存是文明的第一需要，而資源終究有限，那麼「善意」在星際尺度上，還撐得住嗎？</p>`,
      en: `<p>The Trisolaran fleet had set sail across four centuries of deep space, closing in on this blue planet. Humanity gazed up at the night sky, yet could not even see the face of its enemy. Microscopic entities called sophons had seeped into every crevice of civilization, taking in humanity's every move. They could watch what a person did, but not read the thoughts turning inside a human skull — and that thin gap became the last privacy the species possessed.</p>

<p>It was under this shadow that an old woman, arriving at the end of her life, quietly planted a seed in the mind of a young scholar named Luo Ji. Ye Wenjie stood before the grave of her daughter, Yang Dong — a mound like a sentence that could never be taken back. She spoke to Luo Ji of a discipline she had named cosmic sociology: a thought experiment that treated the whole universe as a society to be studied.</p>

<div class="section-break">◆ ◆ ◆</div>

<p>She offered only two axioms, cold and hard as laws carved into stone. First: survival is the primary need of civilization. Second: civilization continuously grows and expands, yet the total quantity of matter in the universe remains constant. Finite resources and infinite desire, set into the same equation.</p>

<p>Then she left behind two terms, like two knives not yet given an edge: the chain of suspicion, and technological explosion. She did not unfold them, nor did she intend to — as though she were merely setting tools down by the door, and the rest of the road was for someone else to walk. Having said this, she turned and departed, and not long after, took her leave of the world.</p>

<p>Luo Ji did not grasp the weight of those words at the time. To him they were the arcane, distant murmurings of a stranger at the edge of death. He did not know that these two axioms and two terms were the seed of an entire future — that decades later they would take root, sprout, and grow into a dark forest spread across the whole universe.</p>

<p class="thought-question">🤔 Reflect: If survival is civilization's first need, and resources are ultimately finite, can "goodwill" still hold at the scale of the stars?</p>`
    }
  },
  2: {
    num: { zh: `第二章`, en: `Chapter Two` },
    title: { zh: `面壁計畫`, en: `The Wallfacer Project` },
    epigraph: {
      zh: `敵人能看穿一切，唯獨看不穿一顆沉默的心。`,
      en: `The enemy can see through everything — except a mind that stays silent.`
    },
    body: {
      zh: `<p>當智子把人類的世界變成一座沒有牆的房間，任何寫下的計畫、說出的部署、傳遞的命令，都等於直接送到三體人眼前。人類發現，自己已無法擁有任何秘密——除了一樣東西：藏在頭腦裡、從未說出口的想法。</p>

<p>於是，一個近乎瘋狂、卻邏輯自洽的構想被推了出來。既然敵人讀不到人心，那就把整個文明的存亡，賭在幾個人的內心之上。人類將挑選數位「面壁者」，賦予他們近乎無限的資源與權力，讓他們去構思對抗三體的戰略。</p>

<div class="section-break">＊ ＊ ＊</div>

<p>而這戰略的核心規則是：真正的計畫，只能存在於面壁者一個人的腦中。他們對外所做的一切——下的每一道命令、動用的每一份資源、擺出的每一副姿態——都可能是偽裝、誤導與煙幕。整個世界，包括他們的同胞，都無從得知何者為真、何者為餌。用徹底的欺瞞，去對抗一個近乎全知的敵人。</p>

<p>這是把人類最後的隱私，鑄成一件武器。面壁者不必解釋，不必自證，甚至可以被誤解、被憎恨——因為只要他們心中的真意不洩露，敵人就永遠差著那一步。</p>

<p>而敵人並未坐視。地球三體組織為每一位面壁者，指派了一名「破壁人」——一個窮盡一切心力去揣測、拼湊、猜破面壁者真實意圖的對手。這是一場只在人心與人心之間展開的戰爭：一方拚命把秘密藏得更深，另一方拚命把它挖得更淺。牆的兩面，各站著一個人。</p>

<p class="thought-question">🤔 思考：把整個文明的命運，交給幾顆無人能驗證的頭腦——這是最後的智慧，還是最大的賭注？</p>`,
      en: `<p>When the sophons turned humanity's world into a room without walls, any plan written down, any deployment spoken aloud, any order relayed, was as good as delivered straight to Trisolaran eyes. Humanity discovered it could no longer hold any secret at all — save one thing: a thought locked inside a mind, never given voice.</p>

<p>And so a nearly insane, yet internally coherent, idea was put forward. Since the enemy could not read the human heart, then let the survival of the entire civilization be wagered on the interiors of a few people. Humanity would select several Wallfacers, granting them almost limitless resources and power, and set them to devise strategies against Trisolaris.</p>

<div class="section-break">◆ ◆ ◆</div>

<p>The core rule of that strategy was this: the true plan could exist only inside a single Wallfacer's mind. Everything they did outwardly — every order given, every resource spent, every posture struck — might be disguise, misdirection, and smokescreen. The whole world, their own kind included, would have no way to know which was real and which was bait. To fight an almost omniscient enemy with total deception.</p>

<p>This was forging humanity's last privacy into a weapon. A Wallfacer need not explain, need not prove himself, and might even be misunderstood and hated — because so long as the true intent in his mind never leaked, the enemy would forever be one step behind.</p>

<p>The enemy did not sit idle. The Earth-Trisolaris Organization assigned each Wallfacer a Wallbreaker — an adversary who would spend every ounce of ingenuity guessing, piecing together, and cracking open the Wallfacer's real intent. It was a war waged only between mind and mind: one side straining to bury the secret deeper, the other straining to unearth it. On each side of the wall stood a single person.</p>

<p class="thought-question">🤔 Reflect: Entrusting the fate of an entire civilization to a few minds no one can verify — is this the final wisdom, or the greatest gamble?</p>`
    }
  },
  3: {
    num: { zh: `第三章`, en: `Chapter Three` },
    title: { zh: `四位面壁者`, en: `The Four Wallfacers` },
    epigraph: {
      zh: `三個名字如雷貫耳，第四個，連他自己都不明白。`,
      en: `Three names carried thunder; the fourth, not even the man himself understood.`
    },
    body: {
      zh: `<p>聯合國選出了四位面壁者，向全世界公佈了他們的名字。前三位，人們一聽便懂得那份分量。</p>

<p>第一位是泰勒，曾任美國國防部長，一個習於在最高層級調度力量與意志的人。第二位是雷迪亞茲，前委內瑞拉總統，一個以強硬與決絕聞名的政治強人。第三位是希恩斯，一位聲望卓著的腦科學家，他要對抗的敵人，或許正藏在人類自己的意識深處。</p>

<div class="section-break">＊ ＊ ＊</div>

<p>然後是第四位——羅輯。一個玩世不恭、名不見經傳的中國天文學家兼社會學家。他既非政要，也非統帥，在此之前，沒有人會把他和人類的存亡連在一起。當他的名字被念出來時，全世界一片錯愕，包括他自己。</p>

<p>沒有人明白為何選他。他自己更是茫然：他不曾請求，不曾準備，甚至不願接受這份榮耀與詛咒。這彷彿是一道無來由的任命，把一個局外人硬生生推上了棋盤的中央。</p>

<p>然而，正是這無從解釋的選擇，透露出最深的異常。三體人似乎對羅輯懷有一種遠超其他三人的忌憚——他們甚至曾試圖將他暗殺。一個連自己都不知為何入選的人，卻讓那個近乎全知的文明感到威脅。這份恐懼本身，就是一則尚未破解的謎題。</p>

<p class="thought-question">🤔 思考：當全知的敵人對一個「無名之輩」如此恐懼，那份恐懼，是否比任何情報都更值得深究？</p>`,
      en: `<p>The United Nations selected four Wallfacers and announced their names to the world. The first three, people understood at once the weight they carried.</p>

<p>The first was Tyler, a former U.S. Secretary of Defense, a man accustomed to marshaling force and will at the highest levels. The second was Rey Diaz, former president of Venezuela, a political strongman known for his hardness and resolve. The third was Hines, a neuroscientist of great renown — and the enemy he would confront might lie hidden in the very depths of human consciousness.</p>

<div class="section-break">◆ ◆ ◆</div>

<p>Then came the fourth — Luo Ji. A flippant, obscure Chinese astronomer and sociologist. He was neither statesman nor commander; before this, no one would have connected him to the survival of the species. When his name was read aloud, the whole world was stunned — himself most of all.</p>

<p>No one understood why he had been chosen. He himself was even more at a loss: he had not asked for it, had not prepared, and did not even wish to accept this honor and curse. It was as if an inexplicable appointment had shoved an outsider forcibly onto the center of the board.</p>

<p>And yet it was precisely this unaccountable choice that revealed the deepest anomaly. The Trisolarans seemed to hold a dread of Luo Ji far exceeding that of the other three — they had even tried to assassinate him. A man who did not know why he had been chosen was making an almost omniscient civilization feel threatened. That fear itself was a riddle not yet cracked.</p>

<p class="thought-question">🤔 Reflect: When an omniscient enemy fears a "nobody" this deeply, is that fear not worth investigating more than any piece of intelligence?</p>`
    }
  },
  4: {
    num: { zh: `第四章`, en: `Chapter Four` },
    title: { zh: `羅輯的逃避`, en: `Luo Ji's Escape` },
    epigraph: {
      zh: `他先想造一座樂園來逃避使命，卻在樂園裡遇見了逼他回頭的理由。`,
      en: `He built a paradise to flee his mission, and in that paradise found the reason to turn back.`
    },
    body: {
      zh: `<p>面對這份沉重到荒謬的使命，羅輯選擇了逃避。他不去思索如何拯救人類，反而把面壁者近乎無限的特權，當成一件享樂的工具。他為自己打造了一處與世隔絕的世外桃源，過起帝王般安逸的生活。</p>

<p>他甚至做了一件更奇異的事——在孤獨中，他憑空想像出一位完美的戀人。一個只存在於他腦海裡、由渴望與寂寞塑成的幻影。他明知那不真實，卻仍沉溺其中，彷彿那是他為自己修築的最後一道牆。</p>

<div class="section-break">＊ ＊ ＊</div>

<p>而命運給了他近乎不可思議的一擊：他竟在現實中，找到了那個與想像分毫不差的女子——莊顏。虛構走進了現實，幻影有了體溫。他們相守了一段短暫而真實的幸福時光，那是他逃避生涯裡，唯一不像逃避的部分。</p>

<p>在這一切的背後，始終有一個粗獷的身影默默守著他——警官史強，大史。這個看似莽撞的男人一路暗中護衛，替羅輯擋下一次次逼近的危險，是他享樂人生底下那張看不見的網。</p>

<p>但溫柔終究成了枷鎖。當聯合國把莊顏與他們的孩子送入冬眠，作為牽制他的籌碼——把他最珍視的一切封存起來，懸在他頭頂——羅輯的桃源徹底崩塌。他再也無處可逃。為了那兩個沉睡的人，他終於被逼著轉過身，第一次認真地凝視自己肩上的使命。</p>

<p class="thought-question">🤔 思考：一個人要失去什麼，才願意扛起他一直逃避的責任——是威脅逼出了勇氣，還是愛？</p>`,
      en: `<p>Faced with a mission so heavy it bordered on the absurd, Luo Ji chose escape. Rather than pondering how to save humanity, he took the Wallfacer's nearly limitless privileges as an instrument of pleasure. He built himself a secluded paradise cut off from the world, and settled into a life of imperial ease.</p>

<p>He did something stranger still — in his solitude, he conjured out of nothing a perfect lover. A phantom that existed only in his mind, shaped from longing and loneliness. He knew she was not real, yet still gave himself over to her, as though she were the last wall he had built for himself.</p>

<div class="section-break">◆ ◆ ◆</div>

<p>And fate dealt him a nearly unbelievable blow: in the real world, he found the woman who matched his imagining down to the smallest detail — Zhuang Yan. The invented had walked into the actual; the phantom had a warmth of its own. They shared a brief and genuine happiness, the one stretch of his years of fleeing that did not feel like fleeing at all.</p>

<p>Behind all of this, a rough-hewn figure had always been quietly watching over him — the police officer Shi Qiang, Da Shi. This seemingly reckless man had guarded him from the shadows the whole way, turning aside danger after danger as it closed in — the invisible net beneath Luo Ji's life of ease.</p>

<p>But tenderness, in the end, became a shackle. When the United Nations placed Zhuang Yan and their child into hibernation, as leverage to hold him — sealing away everything he treasured most and hanging it over his head — Luo Ji's paradise collapsed utterly. There was nowhere left to run. For the sake of those two sleeping souls, he was at last forced to turn around and, for the first time, gaze in earnest at the mission upon his shoulders.</p>

<p class="thought-question">🤔 Reflect: What must a person lose before they will carry the duty they have long fled — is it threat that draws out courage, or love?</p>`
    }
  }
});


Object.assign(CHAPTER_CONTENT, {
  5:{
    num:{zh:`第五章`,en:`Chapter Five`},
    title:{zh:`猜疑鏈與技術爆炸`,en:`The Chain of Suspicion and the Technological Explosion`},
    epigraph:{
      zh:`光年是一道無法逾越的門檻——在它之外，善意與惡意都失去了意義。`,
      en:`A light-year is a threshold no one can cross — beyond it, goodwill and malice both lose their meaning.`
    },
    body:{
      zh:`<p>羅輯終於不再逃避。他坐了下來，把葉文潔臨終前留給他的那幾句話，像解一道古老的方程式般，逐項展開。宇宙社會學的兩條公理擺在那裡：生存是文明的第一需要；文明不斷增長擴張，而宇宙中的物質總量卻恆定不變。它們看似樸素，卻像兩塊冰冷的基石，等著上面建起某種他還不敢想像的東西。</p>

<p>他先想通了第一個機制——猜疑鏈。兩個相隔遙遠的文明，彼此之間橫亙著以光年計的距離。信號要走上幾年、幾十年才能抵達，任何一問一答之間都隔著漫長的沉默。在這樣的延遲裡，你永遠無法確認：對方究竟是善意還是惡意？就算對方此刻釋出善意，你也無法確認它下一刻不會改變；更糟的是，你無法確認對方「如何看待你」，也無法確認對方「是否知道你如何看待它」。</p>

<p>於是不信任開始層層疊加。我不確定你，你也不確定我；我不確定你是否確定我，你也不確定我是否確定你——這條鏈可以無限延伸下去，永遠找不到一個可以停下來握手言和的節點。在星球內部，人類靠著同種、同源、面對面的溝通勉強壓住了這條鏈；可一旦跨越光年，所有這些緩衝統統失效。猜疑鏈，在宇宙的尺度上，是無解的。</p>

<div class="section-break">＊ ＊ ＊</div>

<p>接著是第二個機制，更令人不安——技術爆炸。羅輯回望人類自己的歷史：從學會用火到飛出大氣層，不過短短數千年，而其中真正突飛猛進的爆發，只集中在最後幾百年。文明的技術進步不是平緩的斜坡，而是可能在某個瞬間陡然直立的懸崖。</p>

<p>這意味著什麼？意味著一個此刻還遠遠落後的文明，可能在極短的時間內爆發式追趕，甚至一舉超越那個曾經俯視它的先進文明。「現在弱小」絕不等於「永遠安全」。任何一個被你發現的、哪怕還躲在搖籃裡的文明，都可能在你眨眼的工夫變成足以毀滅你的對手。在漫長的宇宙時間裡，沒有誰能承擔「放它一馬」的賭注。</p>

<p>羅輯感到一陣寒意順著脊背爬升。猜疑鏈讓文明之間無法信任，技術爆炸讓文明之間無法容忍。這兩塊齒輪一旦咬合，會轉出一個怎樣的結論？他還沒有把最後那一步推到底，但他已經隱約看見，黑暗深處有什麼東西正在成形，冷得像宇宙背景的溫度。</p>

<p class="thought-question">🤔 思考：如果你永遠無法確認一個陌生人是善是惡，也永遠無法確認他將來會不會強大到毀滅你——那麼「先假設善意」還是一種理性的選擇嗎？</p>`,
      en:`<p>Luo Ji finally stopped running. He sat down and, like unfolding an ancient equation, took apart the few sentences Ye Wenjie had left him at the end of her life. The two axioms of cosmic sociology lay before him: survival is the first need of any civilization; and civilization continuously grows and expands, while the total matter in the universe stays constant. They seemed plain enough — yet they were like two cold cornerstones, waiting for something he did not yet dare to imagine to be built upon them.</p>

<p>He worked out the first mechanism first — the chain of suspicion. Between two distant civilizations lies a gulf measured in light-years. A signal takes years, decades, to arrive; between every question and answer stretches a long silence. Within that delay, you can never be certain: is the other side benevolent or hostile? Even if it extends goodwill now, you cannot be sure it will not change in the next instant. Worse still, you cannot be sure how it sees you, nor whether it knows how you see it.</p>

<p>So mistrust stacks up, layer upon layer. I am unsure of you, and you of me; I am unsure whether you are sure of me, and you unsure whether I am sure of you — this chain can extend without end, never finding a node where the two sides can stop and shake hands. Within a single world, humans just barely hold the chain down through shared origins and face-to-face contact. But cross a light-year, and every one of those buffers fails. The chain of suspicion, at cosmic scale, has no solution.</p>

<div class="section-break">◆ ◆ ◆</div>

<p>Then came the second mechanism, more disturbing still — the technological explosion. Luo Ji looked back over humanity's own history: from learning to use fire to flying beyond the atmosphere took only a few thousand years, and the truly explosive leap was compressed into the final few centuries. A civilization's technological progress is not a gentle slope but a cliff that may suddenly rise vertical at some single moment.</p>

<p>What did this mean? It meant that a civilization far behind you now could, in a very short span, surge forward and even leap past the advanced civilization that once looked down on it. "Weak now" is by no means "safe forever." Any civilization you happen to discover — even one still lying in its cradle — could, in the blink of an eye, become an adversary capable of destroying you. Across the long time of the cosmos, no one can afford the gamble of letting it live.</p>

<p>A chill crept up Luo Ji's spine. The chain of suspicion makes trust between civilizations impossible; the technological explosion makes tolerance between them impossible. Once these two gears meshed, what conclusion would they grind out? He had not yet pushed the final step all the way down, but he could already dimly see something taking shape in the dark — cold as the temperature of the cosmic background.</p>

<p class="thought-question">🤔 Reflect: If you can never confirm whether a stranger is good or evil, and never confirm whether he might one day grow strong enough to destroy you — is "assume goodwill first" still a rational choice?</p>`
    }
  },
  6:{
    num:{zh:`第六章`,en:`Chapter Six`},
    title:{zh:`黑暗森林`,en:`The Dark Forest`},
    epigraph:{
      zh:`宇宙是一座黑暗森林，每個文明都是帶槍潛行的獵人。`,
      en:`The universe is a dark forest; every civilization is a hunter stalking through it with a loaded gun.`
    },
    body:{
      zh:`<p>那一步，羅輯終於邁了出去。他把兩條公理與兩個機制放在一起——生存是第一需要、物質總量恆定；猜疑鏈無法化解、技術爆炸無法預測——然後讓它們自行推演。得出的結論不是一句話，而是一幅圖景，一幅足以讓任何仰望星空的人再也無法安眠的圖景。</p>

<p>宇宙，是一座黑暗森林。</p>

<p>每一個文明，都是一個在森林裡潛行的獵人，像幽靈般小心翼翼地撥開擋路的樹枝。他必須小心，因為林中到處都是和他一樣潛行的獵人。如果他發現了別的生命——不管是另一個獵人、還是天使或魔鬼、還是嬌嫩的嬰兒、蹣跚的老人、或是一位仙女般的少女——他能做的只有一件事：開槍，把對方消滅。</p>

<div class="section-break">＊ ＊ ＊</div>

<p>為什麼必須如此決絕？因為在這座森林裡，別人就是永恆的威脅。任何暴露自己存在的文明都將很快被消滅。猜疑鏈讓你無法確認對方是否友善——你賭不起；技術爆炸讓你無法確認對方會不會在你轉身之後就爆發式超越你，回過頭來獵殺你——你更賭不起。所以最理性、最安全的選擇，就是在對方察覺你之前，先把暴露的那個聲音永久抹去。</p>

<p>於是森林裡的每一個獵人都學會了兩件事：第一，讓自己絕對地沉默，永遠不要暴露座標；第二，一旦聽見任何暴露的聲音，便毫不猶豫、毫不留情地開槍。這不是出於仇恨，也不是出於邪惡，而是這座森林裡唯一能活下去的邏輯。慈悲在這裡是致命的奢侈品。</p>

<p>羅輯渾身冰冷地意識到，這就是那個一直懸在心頭的謎底。第一部裡，那個來自三體世界的聲音為什麼要冒死警告地球「不要回答」？因為回答就等於在黑暗森林中喊出自己的座標，等於引來獵殺。人類曾以為宇宙沉默是因為空曠，其實正相反——宇宙的沉默，是因為它太過擁擠，擁擠到每一個文明都必須屏住呼吸。這，就是黑暗森林法則。</p>

<p class="thought-question">🤔 思考：如果沉默是唯一的生存之道，那麼人類向星空發出的每一次友善呼喊、每一張鍍金唱片，究竟是文明的浪漫，還是最危險的天真？</p>`,
      en:`<p>That final step, Luo Ji at last took. He laid the two axioms and the two mechanisms side by side — survival is the first need, total matter is constant; the chain of suspicion cannot be resolved, the technological explosion cannot be predicted — and let them work themselves out. What emerged was not a sentence but a picture, one that could rob anyone who ever looked up at the stars of sleep forever.</p>

<p>The universe is a dark forest.</p>

<p>Every civilization is a hunter stalking through the forest, ghostlike, gently parting the branches in his way. He must move with care, because the woods are full of hunters just like him. If he finds another life — whether another hunter, or an angel or a devil, a tender infant, a tottering old man, or a fairy-like young girl — the only thing he can do is one thing: open fire and wipe it out.</p>

<div class="section-break">◆ ◆ ◆</div>

<p>Why must he be so absolute? Because in this forest, others are a permanent threat. Any civilization that reveals its existence will soon be destroyed. The chain of suspicion means you cannot confirm whether the other is friendly — a bet you cannot afford. The technological explosion means you cannot confirm whether, the moment you turn your back, it will erupt past you and turn to hunt you — a bet you can afford even less. So the most rational, safest choice is to erase that exposed voice forever, before the other side even senses you.</p>

<p>And so every hunter in the forest learns two things: first, keep yourself absolutely silent, never reveal your coordinates; second, the instant you hear any exposed voice, fire without hesitation and without mercy. This springs not from hatred, nor from evil, but from the only logic that survives in this forest. Compassion here is a fatal luxury.</p>

<p>Cold to the bone, Luo Ji realized this was the answer that had hung over him all along. In the first part, why had that voice from the Trisolaran world risked death to warn Earth: "Do not answer"? Because to answer is to shout your coordinates into the dark forest — to summon the kill. Humanity had thought the cosmos was silent because it was empty. In truth it was the opposite: the silence of the universe comes from its being too crowded — so crowded that every civilization must hold its breath. This is the dark forest theory.</p>

<p class="thought-question">🤔 Reflect: If silence is the only path to survival, then every friendly cry humanity has sent to the stars, every gilded record — is it the romance of civilization, or the most dangerous naivety of all?</p>`
    }
  },
  7:{
    num:{zh:`第七章`,en:`Chapter Seven`},
    title:{zh:`咒語`,en:`The Spell`},
    epigraph:{
      zh:`他對整個宇宙念出一句咒語，然後躺下，去等兩百年後的回音。`,
      en:`He spoke a spell to the whole universe, then lay down to wait two hundred years for its echo.`
    },
    body:{
      zh:`<p>推出黑暗森林法則之後，羅輯面臨一個科學家最本能的衝動：驗證。這樣一條足以決定文明命運的法則，不能只停留在推演之中——它必須被實驗證明，哪怕這個實驗的代價與時間跨度，都遠遠超出一個人的一生。</p>

<p>他選定了一顆恆星，一顆位於五十光年之外、對地球無關痛癢的星。然後，他動用面壁者的資源，向宇宙深處發送出一段訊息——訊息的內容，正是那顆恆星的座標。這不是求救，不是問候，而是一次冷靜到近乎殘忍的標記：他要把那顆星，明明白白地指給黑暗森林裡潛伏的獵人看。</p>

<div class="section-break">＊ ＊ ＊</div>

<p>這像是對著整座森林念出一句咒語。羅輯把那顆遙遠的恆星，當成了一根插在宇宙裡的探針、一個獻祭般的實驗品。如果黑暗森林法則是真的，那麼這句「咒語」發出之後，總會有某個獵人循聲而來，扣下扳機，把那顆被標記的星連同它可能擁有的一切，一併抹去。</p>

<p>而如果法則是假的，那顆星將安然無恙地繼續燃燒，什麼也不會發生。無論哪種結果，都將是對整個宇宙社會學最終的、無可辯駁的裁決。</p>

<p>做完這件驚世駭俗的事，羅輯做了一個平靜的決定：他要親眼看見結果。可訊息以光速走完五十光年、獵人再回應、毀滅的信號再走回地球，這一來一回是以百年計的漫長等待。於是他選擇進入冬眠，把自己的意識封存起來，像一顆埋進時間裡的種子，去等待兩百年後那個或許會、或許不會到來的答案。</p>

<p>他躺進冬眠艙時，是這世上唯一一個知道那句咒語含義的人。整個人類，還在為別的面壁者的成敗喧嚷，沒有人意識到：真正的底牌，剛剛被一個看似玩世不恭的人，悄悄押上了宇宙的賭桌。</p>

<p class="thought-question">🤔 思考：把一顆遙遠恆星當成實驗品送上可能的毀滅，只為驗證一條法則——這究竟是科學的極致理性，還是一種我們尚無詞彙形容的傲慢？</p>`,
      en:`<p>Having derived the dark forest theory, Luo Ji faced a scientist's most instinctive urge: to verify. A law weighty enough to decide the fate of civilizations could not remain mere deduction — it had to be proven by experiment, even if the cost and the span of that experiment reached far beyond a single human life.</p>

<p>He chose a star: one fifty light-years away, of no consequence to Earth. Then, drawing on the resources of a Wallfacer, he sent a message into the depths of the universe — and the content of that message was the coordinates of that very star. It was not a distress call, not a greeting, but a marking cold to the point of cruelty: he meant to point that star out, plainly and unmistakably, to the hunters lurking in the dark forest.</p>

<div class="section-break">◆ ◆ ◆</div>

<p>It was like speaking a spell to the entire forest. Luo Ji had made that distant star a probe driven into the cosmos, a sacrificial specimen. If the dark forest theory was true, then after this spell went out, some hunter would sooner or later follow the sound, pull the trigger, and erase the marked star along with everything it might hold.</p>

<p>And if the theory was false, the star would go on burning, untouched, and nothing would happen. Either outcome would be the final, unanswerable verdict on the whole of cosmic sociology.</p>

<p>Having done this world-shaking thing, Luo Ji made a calm decision: he would see the result with his own eyes. But for the message to cross fifty light-years at light speed, for a hunter to respond, and for the signal of destruction to travel back to Earth — that round trip was a wait measured in centuries. So he chose to enter hibernation, sealing away his consciousness like a seed buried in time, to await an answer that might, or might not, arrive two hundred years later.</p>

<p>As he lay down in the hibernation chamber, he was the only person alive who knew what that spell meant. All of humanity was still clamoring over the successes and failures of the other Wallfacers; no one realized that the true trump card had just been quietly staked on the cosmic gaming table by a man who seemed nothing more than a cynic.</p>

<p class="thought-question">🤔 Reflect: To send a distant star toward possible destruction as an experiment, merely to verify a law — is this the pinnacle of scientific rationality, or an arrogance for which we have no word yet?</p>`
    }
  },
  8:{
    num:{zh:`第八章`,en:`Chapter Eight`},
    title:{zh:`面壁者的黃昏`,en:`Twilight of the Wallfacers`},
    epigraph:{
      zh:`用欺瞞對抗全知，終究要面對一個問題：連自己人也被騙了，該怎麼收場？`,
      en:`To fight the all-seeing with deception, one must finally answer: when even your own people are deceived, how does it end?`
    },
    body:{
      zh:`<p>當羅輯悄然沉入冬眠、把賭注押向兩百年後的時候，另外三位面壁者的宏圖，卻正一個接一個走向黃昏。面壁計畫的悖論在此刻顯露無遺：既然真正的戰略只能藏在一個人腦中、對全世界保密，那麼當這計謀被破壁人猜破、或被自己人誤解時，這位面壁者將孤立無援地面對整個文明的審判。</p>

<p>前美國國防部長泰勒的計謀，是打造一支太空軍——表面上是常規防禦力量，實則暗藏著另有玄機的殺著。然而他精心編織的偽裝終究被識破，計畫敗露。走投無路的泰勒，選擇了自盡，成為第一位倒下的面壁者。</p>

<div class="section-break">＊ ＊ ＊</div>

<p>前委內瑞拉總統雷迪亞茲的方案更為駭人。他傾力打造巨型氫彈，對外宣稱是要用來攻擊三體艦隊；可他真正的殺著，是以「炸毀水星、進而毀滅整個太陽系」相要挾的威懾——用同歸於盡來逼退敵人。當這個計謀的真相被揭穿，全人類為之驚駭、為之唾棄：他要拿地球上所有人的性命當籌碼。眾叛親離的雷迪亞茲黯然返回故鄉，卻在那裡被自己的同胞所殺。</p>

<p>腦科學家希恩斯的路徑，走向了人心最深處。他發明出一種能把一個信念直接烙進大腦、讓人對它絕對深信不疑、再也無法懷疑的技術——思想鋼印。這本該是為人類注入必勝信念的利器，最終卻被扭曲、被用來悄悄散播失敗主義，讓被烙印的人從骨子裡相信：人類必敗。他的計謀，同樣走向了它的反面。</p>

<p>三位面壁者，三種截然不同的路徑，卻殊途同歸地走進了各自的黃昏。到頭來，這個用「一個人的祕密」對抗「全知的敵人」的宏大計畫，幾乎全盤瓦解。人類寄予厚望的四道防線，此刻只剩下最後一道——而那一道，正沉睡在冬眠艙裡，握著一句沒有人知道的咒語。</p>

<p class="thought-question">🤔 思考：把文明的存亡託付給少數幾個人的祕密，是一種孤注一擲的智慧，還是一開始就注定崩塌的豪賭？當救世主必須欺騙所有人，他還救得了世界嗎？</p>`,
      en:`<p>As Luo Ji quietly sank into hibernation, staking his bet on the world two hundred years hence, the grand designs of the other three Wallfacers were, one after another, moving toward their twilight. The paradox of the Wallfacer Project now stood fully exposed: since the true strategy could be hidden only in one man's mind and kept secret from all the world, then once that scheme was guessed by a Wallbreaker or misread by his own people, the Wallfacer would face the judgment of an entire civilization utterly alone.</p>

<p>The scheme of Frederick Tyler, former U.S. Secretary of Defense, was to build a space force — on the surface a conventional line of defense, but secretly carrying a hidden killing stroke. Yet the disguise he had so carefully woven was at last seen through, and his plan collapsed. Cornered, with nowhere left to turn, Tyler chose to take his own life — the first Wallfacer to fall.</p>

<div class="section-break">◆ ◆ ◆</div>

<p>The plan of Rey Diaz, former president of Venezuela, was more terrifying still. He poured his resources into building a colossal hydrogen bomb, claiming it was meant to strike the Trisolaran fleet; but his true stroke was a deterrent that threatened to detonate Mercury and thereby destroy the whole solar system — driving back the enemy through mutual annihilation. When the truth of this scheme was uncovered, all humanity recoiled in horror and revulsion: he would wager the lives of everyone on Earth as his chips. Abandoned by all, Rey Diaz returned in disgrace to his homeland — where he was killed by his own countrymen.</p>

<p>The path of the brain scientist Bill Hines led into the deepest recesses of the human mind. He invented a technology that could brand a single belief directly into the brain, making a person believe it with absolute certainty, beyond all possibility of doubt — the mental seal. It should have been a weapon to instill in humanity the conviction of victory; instead it was twisted, and used to quietly spread defeatism, making those it branded believe in their very bones that humanity was doomed to lose. His scheme, too, turned into its own opposite.</p>

<p>Three Wallfacers, three utterly different paths — yet each arrived, by its own road, at its own twilight. In the end, this grand plan of fighting an all-seeing enemy with "one person's secret" had all but wholly unraveled. Of the four lines of defense in which humanity had placed its hopes, only one now remained — and that one lay asleep in a hibernation chamber, holding a spell no one knew.</p>

<p class="thought-question">🤔 Reflect: To entrust a civilization's survival to the secrets of a handful of individuals — is it a wisdom of all-or-nothing daring, or a gamble doomed from the start to collapse? When the savior must deceive everyone, can he still save the world?</p>`
    }
  }
});


Object.assign(CHAPTER_CONTENT, {
  9:{
    num:{zh:`第九章`,en:`Chapter Nine`},
    title:{zh:`章北海`,en:`Zhang Beihai`},
    epigraph:{
      zh:`最堅定的臉孔背後，藏著最危險的信念。`,
      en:`Behind the most resolute face hides the most dangerous conviction.`
    },
    body:{
      zh:`<p>章北海是中國太空軍的軍官，一個所有人都認定意志堅定、忠誠可靠的人。他站得筆直，說話簡潔，眼神裡看不到一絲動搖。然而在那副無懈可擊的外表底下，藏著一個他從不對任何人吐露的秘密——他早已是一名逃亡主義者。他不相信人類能夠正面戰勝三體，他相信的，是讓文明的火種飛向深空、活下去。</p>

<p>那個時代，人類的技術路線爭執不下。有人主張把資源押在別的方向，而章北海堅信，唯一能承載人類逃離太陽系的，是無工質核融合飛船——能真正飛向深空的船。可是反對這條路線的，是幾位位高權重的軍方要員，他們擋在未來的門口。</p>

<div class="section-break">＊ ＊ ＊</div>

<p>於是章北海做了一件冷酷到令人不寒而慄的事。他用隕石材料製成的子彈——一種難以追查來源的武器——暗殺了那幾位反對者。沒有人立刻懷疑到他，因為沒有人會懷疑章北海。他把自己的靈魂押上了賭桌：為了物種的存續，他願意背叛規則，背叛同袍，背叛那個所有人都以為他所堅守的一切。</p>

<p>完成這一切後，他加入了「支援未來」計畫，讓自己沉入冬眠，靜靜地飄向那個他相信終將到來的時刻。他要用兩百年的睡眠，去等一個機會——一個能讓他親手把人類送進黑暗的機會。他背負著沉重的秘密睡去，而智子，讀不到他心裡真正的想法。</p>

<p class="thought-question">🤔 思考：當一個人確信自己是對的，而規則、同袍、道德全都擋在他與「物種存續」之間，他該停下，還是該扣下扳機？章北海選擇了後者——那究竟是叛徒，還是先知？</p>`,
      en:`<p>Zhang Beihai was an officer of China's Space Force, a man everyone judged to be iron-willed, loyal, and beyond reproach. He stood ramrod straight, spoke in clipped sentences, and betrayed not a flicker of doubt in his eyes. Yet beneath that flawless surface lay a secret he confided to no one — he had long since become an escapist. He did not believe humanity could beat Trisolaris head-on. What he believed in was launching the seed of civilization into the deep and keeping it alive.</p>

<p>In that era, humanity was locked in a dispute over which technological path to take. Some argued for pouring resources elsewhere, but Zhang Beihai was convinced that the only vessel capable of carrying humanity out of the solar system was the fusion-drive starship — a ship that could truly reach the deep dark. Standing in the doorway of that future, however, were several powerful military figures who opposed the path.</p>

<div class="section-break">◆ ◆ ◆</div>

<p>So Zhang Beihai did something so cold it chilled the blood. Using bullets forged from meteorite material — a weapon whose origin was nearly impossible to trace — he assassinated those who stood in the way. No one suspected him at once, because no one would ever suspect Zhang Beihai. He laid his own soul on the gambling table: for the survival of the species, he was willing to betray the rules, betray his comrades, betray everything they all believed he stood for.</p>

<p>Once it was done, he joined the "Support the Future" program and let himself sink into hibernation, drifting quietly toward the moment he was certain would come. He would spend two centuries asleep, waiting for one chance — a chance to deliver humanity into the dark with his own hands. He fell asleep carrying his heavy secret, and the sophons could not read the true thoughts within his mind.</p>

<p class="thought-question">🤔 Reflect: When a person is certain he is right, and the rules, his comrades, and morality itself all stand between him and "the survival of the species," should he stop, or pull the trigger? Zhang Beihai chose the latter — was that a traitor, or a prophet?</p>`
    }
  },
  10:{
    num:{zh:`第十章`,en:`Chapter Ten`},
    title:{zh:`大低谷`,en:`The Great Ravine`},
    epigraph:{
      zh:`文明先墜入深淵，才學會如何攀爬。`,
      en:`A civilization must first fall into the abyss before it learns to climb.`
    },
    body:{
      zh:`<p>絕望像瘟疫一樣蔓延。智子鎖死了人類的基礎科學，把通往更高文明的門牢牢焊死；而寄託了全部希望的艦隊，又一次次在演練與探索中挫敗。當一個文明看不到未來，它會從內部開始崩塌。</p>

<p>經濟瓦解了。維持龐大太空軍備與末日備戰的重擔，壓垮了整個世界的生產與秩序。饑荒與動盪隨之而來，人口銳減，數以十億計的生命在這場漫長的黑暗中消失。歷史後來給這段時期起了一個沉重的名字——大低谷。</p>

<div class="section-break">＊ ＊ ＊</div>

<p>然而人類沒有死絕。在谷底的最深處，某種東西重新開始生長。文明咬著牙，一寸一寸地爬了回來。當兩百年的光陰流過，甦醒的世界已然脫胎換骨——一個高度發達、資源豐沛的太空文明重新崛起，星艦如林，實力遠勝當年。</p>

<p>更關鍵的是，技術的突飛猛進讓這個新世界信心爆棚。他們回望大低谷，把它當作一段被超越的噩夢；他們仰望星空，普遍相信自己終於擁有了正面擊敗三體的力量。整個文明都沉浸在一種近乎狂喜的樂觀之中——他們以為，苦難已經結束了。</p>

<p class="thought-question">🤔 思考：從谷底爬起的人，最容易把「活了下來」誤讀成「已經贏了」。人類挺過了大低谷，卻也因此養出了致命的驕傲——劫後餘生的信心，究竟是重生，還是下一場災難的序曲？</p>`,
      en:`<p>Despair spread like a plague. The sophons had locked down humanity's fundamental science, welding shut the door to any higher civilization; and the fleet, upon which all hope had been placed, failed again and again in its drills and its ventures. When a civilization can no longer see a future, it begins to collapse from within.</p>

<p>The economy disintegrated. The crushing burden of sustaining a vast space arsenal and preparing for doomsday broke the production and order of the entire world. Famine and upheaval followed; the population plummeted, and lives numbering in the billions vanished into that long darkness. History would later give this era a heavy name — the Great Ravine.</p>

<div class="section-break">◆ ◆ ◆</div>

<p>Yet humanity was not wiped out. At the very bottom of the ravine, something began to grow again. Gritting its teeth, civilization clawed its way back, inch by inch. When two centuries had passed, the world that awoke was utterly transformed — a highly developed, resource-rich space civilization rose once more, its starships like a forest, its power far surpassing anything from before.</p>

<p>More crucially, the explosive leap in technology filled this new world with overwhelming confidence. They looked back on the Great Ravine as a nightmare they had transcended; they gazed up at the stars and widely believed they had at last acquired the power to defeat Trisolaris head-on. The whole civilization was steeped in an almost euphoric optimism — they thought the suffering was over.</p>

<p class="thought-question">🤔 Reflect: Those who climb up from the bottom most easily mistake "having survived" for "having won." Humanity endured the Great Ravine, but in doing so bred a fatal pride — was that hard-won confidence a rebirth, or the overture to the next catastrophe?</p>`
    }
  },
  11:{
    num:{zh:`第十一章`,en:`Chapter Eleven`},
    title:{zh:`水滴`,en:`The Droplet`},
    epigraph:{
      zh:`一滴淚，就抹去了一整個時代的自負。`,
      en:`A single teardrop wiped away the arrogance of an entire age.`
    },
    body:{
      zh:`<p>三體沒有派來千軍萬馬，只派來一枚探測器。它的外形像一滴凝固的淚——通體光滑，鏡面般映著星空，沒有一絲接縫，沒有一處可供攻擊的破綻。人類叫它「水滴」。它由強互作用力材料構成，那是一種人類科學連想像都無法企及的物質，堅不可摧，完美得近乎不真實。</p>

<p>而志得意滿的人類，決定用一場盛大的儀式來迎接它。近兩千艘戰艦——傾整個太空文明之力打造的聯合艦隊——排成壯麗的陣列，在太空中列隊「歡迎」這個小小的來訪者。它們閃著金屬的光澤，滿載著人類劫後重生的驕傲，準備近距離地觀察、研究這枚探測器，把它當作一件即將被解剖的戰利品。</p>

<div class="section-break">＊ ＊ ＊</div>

<p>然後，在無數雙眼睛的注視下，水滴動了。</p>

<p>它驟然加速，那個小小的、不可摧毀的身軀化作一道流光，撞向最近的戰艦。它沒有爆炸，沒有武器，它本身就是武器——它用純粹的動能與絕對堅硬的軀體，直接貫穿了戰艦的船體，從一頭穿到另一頭，讓那艘龐然大物在無聲中崩解。然後它轉向，撞向下一艘，再下一艘。它在艦隊中穿行，像一根燒紅的針穿過一排排紙偶，冷酷、精準、不知疲倦。一艘接一艘的戰艦被貫穿、被撞毀，殘骸的火光在漆黑的太空中連成一片。</p>

<p>幾個小時。近兩千艘戰艦，人類文明兩百年重建的全部驕傲與武力，被一枚小小的水滴幾乎全數殲滅。沒有勢均力敵的交戰，沒有悲壯的抵抗，只有一場單方面的、徹底的屠殺。當一切結束，太空重歸死寂，那滴淚依舊光潔如新，映著滿天冷漠的星辰。人類的自負，在那幾個小時裡，被碾成了齏粉。</p>

<p class="thought-question">🤔 思考：兩千艘戰艦敗給一枚探測器，敗的不是武力，而是想像力——人類根本無法設想一個文明能領先到這種程度。當差距大到某個門檻，戰爭便不再是戰爭，而是碾壓。你能接受「有些對手，根本不在同一個維度」這件事嗎？</p>`,
      en:`<p>Trisolaris did not send an armada. It sent a single probe. Its shape was like a frozen teardrop — utterly smooth all over, its mirror surface reflecting the stars, without a single seam, without a single flaw to strike at. Humanity called it the Droplet. It was made of strong-interaction material, a substance human science could not even imagine, indestructible, so perfect it seemed unreal.</p>

<p>And humanity, flush with self-satisfaction, decided to greet it with a grand ceremony. Nearly two thousand warships — the combined fleet, forged from the full might of the entire space civilization — arranged themselves in a magnificent formation, lining up across space to "welcome" the tiny visitor. They gleamed with metallic light, laden with the pride of a humanity reborn from catastrophe, ready to observe and study this probe at close range, to treat it as a trophy about to be dissected.</p>

<div class="section-break">◆ ◆ ◆</div>

<p>Then, beneath the gaze of countless eyes, the Droplet moved.</p>

<p>It accelerated in an instant, that tiny, indestructible body becoming a streak of light as it slammed into the nearest warship. It did not explode; it carried no weapon; it was the weapon — with pure kinetic energy and an absolutely rigid body, it bored straight through the ship's hull, in one end and out the other, letting that colossal vessel disintegrate in silence. Then it turned, struck the next, and the next. It threaded through the fleet like a red-hot needle passing through rows of paper dolls — cold, precise, tireless. Ship after ship was pierced and shattered, the fires of the wreckage merging into a single sheet of light against the black of space.</p>

<p>A few hours. Nearly two thousand warships — the entire pride and armed might of two centuries of human reconstruction — were almost wholly annihilated by one small droplet. There was no evenly matched battle, no tragic resistance, only a one-sided, total massacre. When it was over and space fell dead-silent once more, the teardrop remained as spotless as before, mirroring a sky of indifferent stars. Humanity's arrogance, in those few hours, was ground into dust.</p>

<p class="thought-question">🤔 Reflect: Two thousand warships lost to a single probe — what was defeated was not firepower but imagination. Humanity simply could not conceive of a civilization advanced to such a degree. When the gap crosses a certain threshold, war ceases to be war and becomes annihilation. Can you accept that some adversaries are simply not in the same dimension?</p>`
    }
  },
  12:{
    num:{zh:`第十二章`,en:`Chapter Twelve`},
    title:{zh:`黑暗戰役`,en:`The Battle of Darkness`},
    epigraph:{
      zh:`黑暗森林，原來也活在人類自己的心裡。`,
      en:`The dark forest, it turned out, lived in the hearts of humans too.`
    },
    body:{
      zh:`<p>當水滴屠戮聯合艦隊時，只有極少數飛船逃出了太陽系。其中有章北海奪走的自然選擇號，有藍色空間號——它們拋下故鄉，義無反顧地航向漫長的深空。倖存下來的它們，本該是文明最後的火種，帶著人類的希望駛向未知。</p>

<p>可是深空無情。很快，一個殘酷的算術擺在它們面前：資源不足以支撐所有船活著抵達目的地。這些人、這些船，彼此本是同胞、是戰友、是命運共同體——但當生存成為零和的博弈，一切都變了。</p>

<div class="section-break">＊ ＊ ＊</div>

<p>飛船之間相隔數十萬公里，通訊有著長長的延遲。誰也無法確認別的船此刻在想什麼、下一步會做什麼、是否已經對自己動了殺機。那條在宇宙尺度上冷酷運轉的猜疑鏈，此刻在人類自己之間悄然啟動——每一艘船都必須假設，別的船可能會先下手。</p>

<p>於是最黑暗的一幕上演了。為了活下去，飛船之間開始互相攻擊，掠奪彼此的資源與人員。同族相殘，昔日的戰友在深空的寂靜裡向彼此開火。這就是「黑暗戰役」。人類終於用最慘烈的方式明白了羅輯早已推演出的真相：黑暗森林並不只在遙遠的星際之間，它也活在人類自己的心裡。只要把人放進那個生存壓倒一切的處境，森林的法則，一樣會在他們之間生長出來。</p>

<p class="thought-question">🤔 思考：我們總以為猜疑鏈是外星文明才有的殘酷邏輯。可當資源不夠、距離夠遠、無法確認彼此善惡時，人類自己也會毫不猶豫地扣下扳機。黑暗森林法則究竟是宇宙的規律，還是所有智慧生命共通的宿命？</p>`,
      en:`<p>As the Droplet slaughtered the combined fleet, only a very few ships escaped the solar system. Among them was Natural Selection, which Zhang Beihai had seized, and Blue Space — they cast off their homeland and sailed without hesitation into the long deep dark. Having survived, they were meant to be the last spark of civilization, carrying humanity's hope toward the unknown.</p>

<p>But deep space is merciless. Soon a cruel arithmetic lay before them: the resources were not enough to keep all the ships alive to their destination. These people, these ships, had been countrymen to one another, comrades-in-arms, a single community of fate — but when survival became a zero-sum game, everything changed.</p>

<div class="section-break">◆ ◆ ◆</div>

<p>The ships were separated by hundreds of thousands of kilometers, and communication carried a long delay. No one could be certain what another ship was thinking at that moment, what it would do next, whether it had already turned murderous intent upon them. That chain of suspicion, which ran so coldly on the cosmic scale, now stirred quietly among humans themselves — every ship had to assume that another might strike first.</p>

<p>And so the darkest scene of all played out. To stay alive, the ships began to attack one another, plundering each other's resources and personnel. Kin turned on kin; former comrades opened fire on one another in the silence of the deep. This was the Battle of Darkness. Humanity finally understood, in the most brutal way possible, the truth Luo Ji had long since deduced: the dark forest does not exist only between distant stars — it lives in the hearts of humans too. Place people in a situation where survival overrides all else, and the law of the forest will grow up among them all the same.</p>

<p class="thought-question">🤔 Reflect: We like to think the chain of suspicion is a cruelty exclusive to alien civilizations. Yet when resources run short, distances grow vast, and neither side can confirm the other's good or ill intent, humans too will pull the trigger without hesitation. Is the dark forest theory a law of the universe, or the shared fate of all intelligent life?</p>`
    }
  }
});


Object.assign(CHAPTER_CONTENT, {
  13:{
    num:{zh:`第十三章`,en:`Chapter Thirteen`},
    title:{zh:`羅輯歸來`,en:`The Return of Luo Ji`},
    epigraph:{
      zh:`被遺忘的人醒來時，星空為他作證。`,
      en:`When the forgotten man woke, the stars stood as his witness.`
    },
    body:{
      zh:`<p>兩百年的冬眠像一場沒有夢的黑夜。羅輯睜開眼睛的時候，世界已經不再需要他。面壁計畫早成了歷史教科書裡的一段荒唐插曲，面壁者這個詞，如今只在人們談起舊時代的愚蠢與恐慌時被提起。他不再是被寄予厚望的救世者，只是一個從過去漂流而來的多餘的人——被遺忘，甚至被嘲笑。</p>`+
        `<p>新的時代對他很寬容，也很冷淡。人們客氣地供養著他，像供養一件無用的古董。他曾經肩負的使命，在那場水滴帶來的慘敗之後，顯得既天真又可笑。沒有人相信一個玩世不恭的舊天文學家，能為這個瀕臨滅亡的物種留下什麼。連他自己，也幾乎要接受這樣的判決。</p>`+
        `<div class="section-break">＊ ＊ ＊</div>`+
        `<p>然而就在這時，天文台傳來一個消息，讓所有輕慢他的人瞬間失語。多年以前，羅輯曾向五十光年外的一顆恆星，發送過那顆星的座標——那句對著整個宇宙念出的「咒語」。如今，觀測者親眼看見：那顆恆星，被某種來自宇宙深處的攻擊摧毀了。</p>`+
        `<p>光穿越了半個世紀，把一場謀殺的證據送到人類眼前。一個微不足道的標記，換來了一次乾淨利落的清除。黑暗森林法則不再是一個瘋子在紙上推演的假說，它以一顆真實恆星的死亡，向全人類展示了自己冰冷的真容。</p>`+
        `<p>羅輯的推論是對的。他曾經半信半疑地念出的那句咒語，如今應驗了。這個被時代拋在身後的人，忽然成了唯一看透宇宙真相的人。而他心裡清楚，這份被證實的正確，並不是榮耀，而是一副沉重到令人窒息的擔子——因為他知道，同樣的命運，隨時可以落到地球頭上。</p>`,
      en:`<p>Two centuries of hibernation had passed like a night without dreams. When Luo Ji opened his eyes, the world no longer needed him. The Wallfacer Project had become a strange footnote in the history books, and the word Wallfacer was now spoken only when people recalled the folly and panic of an older age. He was no longer the savior on whom hopes had rested. He was merely a redundant man drifting up out of the past — forgotten, and even mocked.</p>`+
        `<p>The new era treated him with tolerance and indifference in equal measure. People kept him, politely, the way one keeps a useless antique. The mission he had once carried seemed, after the massacre the Droplet had brought, both naive and absurd. No one believed that a cynical old astronomer could leave anything of value to a species on the edge of extinction. And he himself had very nearly come to accept the verdict.</p>`+
        `<div class="section-break">◆ ◆ ◆</div>`+
        `<p>Then the observatory sent word that struck every scornful tongue silent. Years before, Luo Ji had transmitted toward a star fifty light-years away the coordinates of that very star — the spell he had chanted out into the whole of the universe. Now the watchers saw it with their own instruments: that star had been destroyed by some attack out of the cosmic deep.</p>`+
        `<p>Light had crossed half a century to lay the evidence of a murder before human eyes. One trivial marking, answered by a single clean act of extermination. The dark forest theory was no longer a madman's hypothesis scrawled on paper. In the death of a real star, it had shown mankind its cold, true face.</p>`+
        `<p>Luo Ji had been right. The spell he had once half-believed as he uttered it had now come true. The man the age had left behind was suddenly the only one who had seen through to the truth of the universe. And he understood, in his heart, that this vindicated correctness was no glory but a burden heavy enough to suffocate — because he knew the same fate could fall upon Earth at any moment.</p>`
    }
  },
  14:{
    num:{zh:`第十四章`,en:`Chapter Fourteen`},
    title:{zh:`威懾`,en:`Deterrence`},
    epigraph:{
      zh:`當死亡成為可以按下的按鈕，它便成了活著的籌碼。`,
      en:`When death becomes a button one can press, it becomes the price of staying alive.`
    },
    body:{
      zh:`<p>羅輯把黑暗森林的邏輯，從對外的恐懼，翻轉成手中唯一的武器。既然在這座森林裡，暴露座標就等於被判死刑，那麼「暴露三體的座標」本身，就可以變成一把架在敵人咽喉上的刀。他要做的，不是躲藏，而是讓對方明白：他隨時能拉響那個讓所有人都聽見的警報。</p>`+
        `<p>他設計了一套系統，把它的鑰匙握在自己一個人手裡。一旦啟動，這套系統就會把三體世界的座標，向整個宇宙廣播出去。而三體與太陽系在星圖上如此靠近，暴露了三體，也就等於暴露了地球。這不是一把只能射向敵人的槍，而是一枚會把兩個文明一起炸碎的引信。</p>`+
        `<div class="section-break">＊ ＊ ＊</div>`+
        `<p>這是以「同歸於盡」為籌碼的終極威懾。它的可怕之處，正在於它的絕望：它不承諾勝利，只承諾一起死亡。羅輯要對三體說的是——你們可以消滅我們，但你們消滅我們的那一刻，也就是你們替自己念出咒語的那一刻。整片黑暗森林裡潛行的獵人，會同時聽見兩個文明的位置。</p>`+
        `<p>沒有人喜歡這樣的武器。它不光榮，不英勇，甚至不像是活人該做的選擇。它把一個物種的存續，押在了「我願意和你一起下地獄」這句賭咒之上。但在水滴碾碎了艦隊、在恆星之死驗證了法則之後，人類已經沒有別的牌可打。羅輯手中這枚同歸於盡的引信，是絕境裡唯一能讓敵人猶豫的東西。</p>`+
        `<p>威懾的本質，是讓對方相信你真的敢按下去。而這，需要一個人——一個願意獨自站到那個位置上、讓全宇宙相信他不是在虛張聲勢的人。</p>`,
      en:`<p>Luo Ji turned the logic of the dark forest inside out, converting an outward dread into the one weapon in his hand. If in this forest exposing your coordinates was a death sentence, then the act of exposing Trisolaris's coordinates could itself become a blade laid against the enemy's throat. What he meant to do was not to hide, but to make the other side understand: he could, at any moment, sound the alarm that everyone would hear.</p>`+
        `<p>He built a system and kept its key in his hand alone. Once triggered, it would broadcast the coordinates of the Trisolaran world across the entire universe. And because Trisolaris and the solar system lay so close together on the star charts, to expose Trisolaris was to expose Earth as well. This was no gun that could fire only at the enemy, but a fuse that would blow two civilizations apart together.</p>`+
        `<div class="section-break">◆ ◆ ◆</div>`+
        `<p>This was the ultimate deterrence, staked on mutual destruction. Its horror lay precisely in its despair: it promised no victory, only a shared death. What Luo Ji meant to say to Trisolaris was this — you may destroy us, but the instant you do, you will be chanting the spell over your own world. Every hunter creeping through the dark forest would hear the positions of two civilizations at once.</p>`+
        `<p>No one loved a weapon like this. It was not glorious, not heroic, hardly the choice of the living at all. It wagered the survival of a species on the oath: I am willing to go down to hell together with you. But after the Droplet had crushed the fleet, and the death of a star had confirmed the law, mankind had no other card to play. The fuse of mutual destruction in Luo Ji's hand was the only thing in this dead end that could make the enemy hesitate.</p>`+
        `<p>The essence of deterrence is to make the other side believe you truly dare to press it. And that required a person — one willing to stand alone at that place, and make the whole universe believe he was not bluffing.</p>`
    }
  },
  15:{
    num:{zh:`第十五章`,en:`Chapter Fifteen`},
    title:{zh:`手握開關的人`,en:`The Hand on the Switch`},
    epigraph:{
      zh:`一個人的手指，成了兩個世界的天平。`,
      en:`One man's finger became the scale on which two worlds were weighed.`
    },
    body:{
      zh:`<p>羅輯獨自走向那個握著開關的位置。沒有大軍，沒有艦隊，沒有喧嘩的群眾——只有一個從舊時代醒來的人，和他掌心裡那個能讓兩個文明一起墜入深淵的按鈕。他面對著水滴，面對著遙遠的三體，把最後的底牌攤在桌上。</p>`+
        `<p>他的話很簡單：如果你們不停手，我就按下去，讓我們一起在黑暗森林裡被獵殺。這不是談判的姿態，而是一個把自己也綁上刑台的人所發出的最後通牒。他把自己的生命、把整個地球的存亡，都押進了這句威脅裡——正因為他連自己都不打算留退路，這威脅才顯得如此可信。</p>`+
        `<div class="section-break">＊ ＊ ＊</div>`+
        `<p>三體無法承擔這個風險。對一個把生存奉為第一需要的文明而言，「一起死」是最不可接受的結局。於是那支所向披靡的艦隊，第一次停下了腳步，調轉方向。曾經不可一世的入侵者，開始坐到談判桌前，甚至開始向人類分享自己的技術——那些被智子鎖死了兩個世紀的科學之門，竟因為一個人的手指而鬆動。</p>`+
        `<p>人類贏得了喘息，但這勝利的形狀，卻讓所有人心底發寒。和平不是建立在力量之上，而是建立在一個隨時可能同歸於盡的平衡之上。羅輯不再是那個逃避使命的浪蕩子，也不是被嘲笑的過氣面壁者，他成了整個物種懸在深淵之上的那根繩索——而繩索的另一端，是他自己緊握不放的手。</p>`+
        `<p>他必須讓那隻手一直握著開關，日復一日，年復一年。因為只要他的意志有一絲鬆懈，只要對方確信他不敢按下去，這脆弱的平衡就會在一瞬間崩塌。手握開關的人，從此再也無法真正放下這個開關。</p>`,
      en:`<p>Luo Ji walked alone toward the place where the switch was held. No army, no fleet, no clamoring crowd — only a man woken from an older age, and the button in his palm that could send two civilizations plunging into the abyss together. He faced the Droplet, he faced distant Trisolaris, and he laid his final card on the table.</p>`+
        `<p>His words were simple: if you do not stop, I will press it, and let us be hunted down together in the dark forest. This was no negotiating posture but an ultimatum from a man who had bound himself to the scaffold as well. He staked his own life, and the survival of the whole Earth, upon that threat — and precisely because he had left himself no way out, the threat rang true.</p>`+
        `<div class="section-break">◆ ◆ ◆</div>`+
        `<p>Trisolaris could not bear the risk. For a civilization that held survival to be its first need, mutual destruction was the least acceptable end of all. And so that all-conquering fleet halted for the first time and turned aside. The invaders who had once been beyond arrogance now sat down at the negotiating table, and even began to share their technology with mankind — the doors of science the sophons had locked for two centuries loosened, because of one man's finger.</p>`+
        `<p>Humanity won its breathing space, but the shape of that victory left a chill in every heart. This peace rested not upon strength but upon a balance that could tip into mutual destruction at any moment. Luo Ji was no longer the wastrel who fled his mission, nor the mocked and faded Wallfacer. He had become the rope from which the whole species hung above the abyss — and at the other end of that rope was his own unyielding grip.</p>`+
        `<p>He had to keep that hand on the switch, day after day, year after year. For if his will slackened by a hair, if the other side ever grew certain he would not dare to press it, this fragile balance would collapse in an instant. The man with his hand on the switch could never truly let it go again.</p>`
    }
  },
  16:{
    num:{zh:`第十六章`,en:`Chapter Sixteen`},
    title:{zh:`給歲月以文明`,en:`Civilization for the Ages`},
    epigraph:{
      zh:`我們沒有為文明爭來歲月，只是為歲月留住了一點文明。`,
      en:`We did not win years for civilization; we only kept a little civilization for the years.`
    },
    body:{
      zh:`<p>威懾成功了。艦隊掉頭，入侵止步，人類終於從滅絕的懸崖邊退回了半步。可是當塵埃落定，人們發現自己站立的地方，並不是勝利的高地，而是一根繃緊的鋼索。生存被贖回來了，代價是從此活在宇宙級的恐怖平衡之下——用隨時能讓兩個文明一起毀滅的威脅，換取每一個平凡的明天。</p>`+
        `<p>這是一種奇異的和平。它不像和平，更像兩把互相抵住咽喉的刀之間，那一小段勉強維持的靜止。三體不敢動，是因為地球握著同歸於盡的引信；地球得以喘息，是因為它願意在必要時親手拉響那場毀滅。文明的尊嚴、物種的未來，全都押在了「我敢和你一起死」這句賭咒上。</p>`+
        `<div class="section-break">＊ ＊ ＊</div>`+
        `<p>人類曾經以為，戰勝敵人意味著擊潰它、超越它、把它掃出星空。可最後保住這個物種的，不是更強的艦隊，不是更快的飛船，而是一個人願意握住開關的決心，和整個文明願意把自己也一起賭上的絕望。他們沒能為文明爭取到浩瀚的歲月，只是在一段隨時可能終結的時光裡，勉強替文明留下了一線呼吸。</p>`+
        `<p>給歲月以文明，而不是給文明以歲月——這句話在這一刻有了它最蒼涼的注腳。人類要的，本是讓文明在漫長的歲月裡從容生長；而他們得到的，卻是把文明的命運，交給一根隨時可能斷裂的弦。他們活著，卻是靠著把「一起去死」高高舉在頭頂。</p>`+
        `<p>於是所有的故事，都收束在一個無法迴避的叩問之前：把文明的尊嚴賭上、以整個宇宙的自殺相要挾而換來的生存，究竟是一場勝利，還是另一種更深的絕望？沒有人能回答。黑暗森林依舊沉默，星空依舊冰冷，而人類就在這樣的沉默與冰冷之間，握著那個誰也不敢放下的開關，繼續活了下去。</p>`,
      en:`<p>The deterrence succeeded. The fleet turned back, the invasion stopped, and mankind at last stepped half a pace back from the cliff's edge of extinction. Yet when the dust settled, people found that the ground they stood on was not the high place of victory but a taut steel wire. Survival had been ransomed, and the price was to live forever after beneath a cosmic-scale balance of terror — trading the threat that could destroy two civilizations together for every ordinary tomorrow.</p>`+
        `<p>It was a strange peace. It resembled peace less than it resembled the small, forced stillness between two blades each pressed to the other's throat. Trisolaris dared not move because Earth held the fuse of mutual destruction; Earth could breathe because it was willing, if it must, to set off that ruin with its own hand. The dignity of civilization and the future of a species were all wagered on the oath: I dare to die together with you.</p>`+
        `<div class="section-break">◆ ◆ ◆</div>`+
        `<p>Mankind had once believed that to defeat an enemy meant to crush it, to surpass it, to sweep it from the stars. But what preserved the species in the end was not a stronger fleet nor a swifter ship, but one man's resolve to keep his hand on the switch, and a whole civilization's despair in its willingness to stake itself as well. They had not won for civilization any vast expanse of years; they had merely, within a span of time that could end at any moment, barely kept for civilization a single thread of breath.</p>`+
        `<p>Civilization for the ages, not the ages for civilization — in this moment the words found their most desolate footnote. What mankind had wanted was to let civilization grow at ease across the long reach of time; what they received instead was to place the fate of civilization upon a string that might snap at any instant. They lived, but only by holding "let us die together" raised high above their heads.</p>`+
        `<p>And so all the stories drew to their close before one unavoidable question: this survival, bought by wagering the dignity of civilization and threatening the suicide of an entire universe — was it a victory, or another and deeper despair? No one could answer. The dark forest kept its silence still, the stars stayed cold, and between that silence and that cold, mankind went on living, its hand on the switch that no one dared to let go.</p>`
    }
  }
});

