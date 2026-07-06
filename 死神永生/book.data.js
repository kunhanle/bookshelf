// ==== 死神永生 Death's End · 中英雙語 metadata（科幻小說 / 地球往事第三部·完結篇）====
const BOOK = {
  slug: 'deathsend',
  langs: ['zh', 'en'],
  title: { zh: '死神永生', en: "Death's End" },
  author: { zh: '劉慈欣', en: 'Liu Cixin' },
  theme: {
    'bg-primary': '#080a10', 'bg-secondary': '#0e1119', 'bg-card': '#141824', 'bg-elevated': '#1c2130',
    'text-primary': '#e2e6f2', 'text-secondary': '#9aa2ba', 'text-muted': '#676f88',
    'accent': '#5e79c4', 'accent-light': '#8aa0e0', 'accent-glow': 'rgba(94,121,196,0.32)',
    'rose': '#c76a86', 'jade': '#5aae9a', 'blue': '#5e79c4', 'gold': '#c9a84e',
    'border': 'rgba(94,121,196,0.16)',
    atmosphere: { fall: 20, streak: 2, fallRadius: '50%' },
    dayMode: { 'bg-primary': '#e9ebf4', 'bg-secondary': '#dde0ec', 'bg-card': '#f8f9fd', 'bg-elevated': '#eef0f8', 'text-primary': '#1a1e2c', 'text-secondary': '#3e4457', 'text-muted': '#6b7288', 'border': 'rgba(94,121,196,0.22)' }
  },
  cover: {
    seal: '死',
    subtitle: { zh: '地球往事 · 第三部', en: "Remembrance of Earth's Past · Book III" },
    desc: { zh: '死亡是唯一一座<br>永遠亮著的燈塔。', en: 'Death is the one lighthouse<br>that is always lit.' }
  },
  musicPrompt: { zh: '走向宇宙的終局與重生，<br>是否播放一段背景音樂？', en: 'Toward the end of the cosmos, and its rebirth —<br>shall we play some music?' },
  intro: {
    subtitle: { zh: '在閱讀之前，先站到宇宙尺度的終點回望', en: 'Before you read, stand at the cosmos-scale end and look back' },
    author: {
      name: { zh: '劉慈欣', en: 'Liu Cixin' },
      portrait: { zh: '劉', en: 'L' },
      years: { zh: '1963 —　中國科幻作家', en: '1963 —　Chinese science-fiction writer' },
      bio: { zh: '「地球往事」三部曲的完結篇，也是整個系列格局最恢弘、最令人心碎的一部。承接《黑暗森林》的威懾平衡，本書以程心的一生為主線，把故事的尺度從太陽系一路推向整個宇宙的生死——直到最後，連時間與空間本身都成了故事的角色。它是硬科幻想像力的極致，也是一封寫給宇宙的、蒼涼而深情的長信。', en: "The finale of the Remembrance of Earth's Past trilogy, and its grandest and most heartbreaking volume. Taking up the balance of terror from The Dark Forest, it follows the life of Cheng Xin and pushes the scale of the story from the solar system all the way to the life and death of the entire universe — until, at last, time and space themselves become characters. It is hard science fiction's imagination at its utmost, and a desolate, tender letter written to the cosmos." }
    },
    cards: [
      { icon: '🗡️', title: { zh: '執劍人', en: 'The Swordholder' }, text: { zh: '羅輯用黑暗森林威懾換來數十年和平後，人類要選出新的「執劍人」——那個手指按在同歸於盡開關上的人。溫柔的程心當選，而她的慈悲，將把人類推向一段誰也想不到的命運。', en: "After Luo Ji's dark forest deterrence buys decades of peace, humanity must choose a new “Swordholder” — the one whose finger rests on the switch of mutual destruction. The gentle Cheng Xin is chosen, and her compassion will push humanity toward a fate no one foresaw." } },
      { icon: '📖', title: { zh: '雲天明的童話', en: "Yun Tianming's Fairy Tales" }, text: { zh: '大學時默默愛著程心的雲天明，一顆大腦被送往三體艦隊。多年後，他在敵人的監視下，用三個看似天真的童話，把關乎人類存亡的黑暗森林情報，一針一線地藏了進去。', en: "Yun Tianming, who silently loved Cheng Xin in college, has his brain sent to the Trisolaran fleet. Years later, under the enemy's watch, he stitches the dark forest secrets that decide humanity's survival into three seemingly innocent fairy tales." } },
      { icon: '📃', title: { zh: '降維打擊', en: 'The Dimensional Strike' }, text: { zh: '在宇宙的另一端，一個高等文明的清理員「歌者」，隨手向太陽系拋出一片「二向箔」。整個太陽系連同其中的一切，緩緩跌進一幅平面、絕美又死寂的畫裡——這就是宇宙戰爭的終極形態。', en: 'At the far end of the cosmos, a cleaner of a higher civilization, the “Singer,” casually flings a “dual-vector foil” at the solar system. The whole system and everything in it falls slowly into a flat, exquisite, deathly painting — the ultimate form of cosmic war.' } },
      { icon: '🧭', title: { zh: '閱讀建議', en: 'How to Read' }, text: { zh: '先看「人物譜」認清程心、雲天明、維德與三方勢力，再對照「時代軸」跟上從執劍人到宇宙重生的宏大推進，然後逐章閱讀。這一部的尺度會不斷突破你的想像，慢一點讀。', en: "Start with the Cast to place Cheng Xin, Yun Tianming, Wade, and the three sides; read against the Timeline to follow the vast arc from the Swordholder to the cosmos's rebirth; then go chapter by chapter. This book's scale keeps breaking past what you can imagine — read slowly." } }
    ],
    guide: [
      { h: { zh: '從程心的抉擇入手', en: "Start with Cheng Xin's choices" }, p: { zh: '先在「人物譜」認清程心與雲天明、維德的關係。她一次次出於慈悲的抉擇，是全書命運的樞紐。', en: "In the Cast, get Cheng Xin's ties to Yun Tianming and Wade. Her choices, made again and again out of compassion, are the hinge of the whole book's fate." } },
      { h: { zh: '跟著尺度的擴張讀', en: 'Follow the widening scale' }, p: { zh: '打開「時代軸」，看故事如何從執劍人的一個手指，一路推展到整個宇宙的坍縮與重生。', en: "Open the Timeline and watch the story widen from a Swordholder's single finger all the way to the collapse and rebirth of the whole universe." } },
      { h: { zh: '逐章沉浸閱讀', en: 'Read chapter by chapter' }, p: { zh: '在「閱讀」模組逐章讀情節重述，特別留意第十三章「二向箔」那幅絕美又死寂的降維畫面。用「札記」記下你的震撼。', en: 'In the Reading module, go through the retold plot, especially the exquisite, deathly dimensional collapse of Chapter 13, “The Dual-Vector Foil.” Use Notes for what shakes you.' } },
      { h: { zh: '從主題回望全書', en: 'Look back through the themes' }, p: { zh: '讀完後到「主題」模組，從執劍人、慈悲的重量、降維打擊、傲慢與生存等角度，系統性地回看這個宇宙級的故事。', en: 'When you finish, visit the Themes and look back through the Swordholder, the weight of compassion, the dimensional strike, and arrogance and survival.' } },
      { h: { zh: '品味金句與自省', en: 'Savor the lines and reflect' }, p: { zh: '在「金句」收藏那些蒼涼而深刻的句子（「弱小和無知不是生存的障礙，傲慢才是」），在「札記」寫下你對整個三部曲的告別。', en: "Collect the desolate, profound lines in Quotes (“Weakness and ignorance are not barriers to survival, but arrogance is”), and write your farewell to the whole trilogy in Notes." } }
    ]
  },
  families: [
    { id: 'earth', label: { zh: '地球陣營', en: "Earth's Side" } },
    { id: 'trisolaris', label: { zh: '三體文明', en: 'Trisolaris' } },
    { id: 'cosmos', label: { zh: '更高的宇宙', en: 'The Higher Cosmos' } }
  ],
  timelineSubtitle: { zh: '從一個執劍人的手指，到整個宇宙的坍縮與重生', en: "From a Swordholder's finger to the collapse and rebirth of the whole universe" },
  graph: {
    title: { zh: '— 地球 · 三體 · 更高的宇宙 —', en: '— Earth · Trisolaris · the Higher Cosmos —' },
    nodes: [
      { id: 'chengxin',    label: { zh: '程心', en: 'Cheng Xin' },    x: 340, y: 235, tier: 'lead',  color: '#5e79c4' },
      { id: 'yuntianming', label: { zh: '雲天明', en: 'Yun Tianming' },x: 195, y: 140, tier: 'lead',  color: '#c9a84e' },
      { id: 'wade',        label: { zh: '托馬斯‧維德', en: 'Thomas Wade' }, x: 330, y: 400, tier: 'major', color: '#c76a86' },
      { id: 'luoji',       label: { zh: '羅輯', en: 'Luo Ji' },       x: 165, y: 320, tier: 'minor', color: '#5aae9a' },
      { id: 'aa',          label: { zh: '艾AA', en: 'AA' },           x: 465, y: 330, tier: 'minor', color: '#9aa2ba' },
      { id: 'guanyifan',   label: { zh: '關一帆', en: 'Guan Yifan' }, x: 250, y: 392, tier: 'minor', color: '#5aae9a' },
      { id: 'trisolaris',  label: { zh: '三體文明', en: 'Trisolaris' },x: 620, y: 142, tier: 'major', color: '#c76a86' },
      { id: 'zhizi',       label: { zh: '智子', en: 'The Sophon' },   x: 560, y: 268, tier: 'minor', color: '#5aae9a' },
      { id: 'singer',      label: { zh: '歌者', en: 'The Singer' },   x: 702, y: 340, tier: 'minor', color: '#8aa0e0' },
      { id: 'dvfoil',      label: { zh: '二向箔', en: 'The Dual-Vector Foil' }, x: 620, y: 415, tier: 'minor', color: '#8aa0e0' }
    ],
    edges: [
      { from: 'chengxin', to: 'yuntianming', kind: 'love' },
      { from: 'chengxin', to: 'wade', kind: 'broken' },
      { from: 'chengxin', to: 'luoji', kind: 'family' },
      { from: 'chengxin', to: 'aa', kind: 'family' },
      { from: 'chengxin', to: 'guanyifan', kind: 'love' },
      { from: 'yuntianming', to: 'trisolaris', kind: 'family' },
      { from: 'luoji', to: 'trisolaris', kind: 'rivalry' },
      { from: 'trisolaris', to: 'zhizi', kind: 'family' },
      { from: 'zhizi', to: 'chengxin', kind: 'family' },
      { from: 'singer', to: 'dvfoil', kind: 'family' },
      { from: 'dvfoil', to: 'chengxin', kind: 'rivalry' }
    ]
  },
  footer: {
    quote: { zh: '「弱小和無知不是生存的障礙，傲慢才是。」', en: '“Weakness and ignorance are not barriers to survival, but arrogance is.”' },
    tagline: { zh: '死神永生 · 沉浸式閱讀 · 地球往事三部曲 完結篇', en: "Death's End · Immersive Reading · Remembrance of Earth's Past, the Finale" }
  }
};

const P1 = { zh: '卷一 · 執劍人', en: 'Part One · The Swordholder' };
const P2 = { zh: '卷二 · 廣播紀元與童話', en: 'Part Two · The Broadcast Era and the Fairy Tales' };
const P3 = { zh: '卷三 · 掩體紀元與維德', en: 'Part Three · The Bunker Era and Wade' };
const P4 = { zh: '卷四 · 降維與永生', en: 'Part Four · Dimensional Collapse and Eternity' };

const CHAPTERS = [
  { id: 1,  group: P1, title: { zh: '階梯計畫', en: 'The Staircase Program' }, pages: '',
    reflectQ: { zh: '一個人默默愛你，甚至買下一顆星星送你、把大腦送向星海。這種不求回報的愛，你如何理解它的重量？', en: 'Someone loves you in silence — even buys you a star and sends his brain into the stars. How do you weigh a love that asks nothing in return?' } },
  { id: 2,  group: P1, title: { zh: '威懾紀元', en: 'The Deterrence Era' }, pages: '',
    reflectQ: { zh: '羅輯獨自「執劍」數十年，用恐懼換來和平。人類一邊享受和平，一邊厭惡那個讓自己活在恐懼下的老人。你怎麼看這種矛盾？', en: 'Luo Ji holds the sword alone for decades, trading fear for peace. Humanity enjoys the peace yet resents the old man who makes them live in fear. How do you read this contradiction?' } },
  { id: 3,  group: P1, title: { zh: '執劍人程心', en: 'Cheng Xin, the Swordholder' }, pages: '',
    reflectQ: { zh: '人類厭倦了羅輯的冷酷，選了溫柔而充滿愛的程心當執劍人。挑一個「更善良」的人來按下毀滅開關——這是明智，還是危險的自欺？', en: 'Weary of Luo Ji’s coldness, humanity chooses the gentle, loving Cheng Xin as Swordholder. Choosing a “kinder” person to hold the switch of destruction — wisdom, or a dangerous self-deception?' } },
  { id: 4,  group: P1, title: { zh: '十五分鐘', en: 'Fifteen Minutes' }, pages: '',
    reflectQ: { zh: '在那決定兩個文明生死的十幾分鐘裡，程心下不了手。她的慈悲成了人類的災難。你會責怪她，還是理解她？換作是你，按得下去嗎？', en: "In those fateful minutes that decide two civilizations, Cheng Xin cannot press the button; her compassion becomes humanity's catastrophe. Would you blame her, or understand her — and could you have pressed it?" } },
  { id: 5,  group: P2, title: { zh: '失敗的威懾', en: 'The Failed Deterrence' }, pages: '',
    reflectQ: { zh: '威懾一旦崩潰，人類瞬間從主人跌為囚徒，被驅趕進保留區。當一個文明的尊嚴被一夕奪走，它還剩下什麼？', en: 'The moment deterrence collapses, humanity falls from master to prisoner, herded into a reservation. When a civilization’s dignity is stripped in a night, what remains to it?' } },
  { id: 6,  group: P2, title: { zh: '宇宙廣播', en: 'The Broadcast' }, pages: '',
    reflectQ: { zh: '深空的人類飛船把三體座標廣播出去，讓兩個文明同被標記——以「拉著敵人一起死」換來地球的自由。這樣的解脫，你敢不敢慶祝？', en: "Human ships in deep space broadcast Trisolaris's coordinates, marking both civilizations — buying Earth's freedom by dragging the enemy to death too. Would you dare celebrate such a deliverance?" } },
  { id: 7,  group: P2, title: { zh: '雲天明的童話', en: "Yun Tianming's Fairy Tales" }, pages: '',
    reflectQ: { zh: '雲天明在敵人的監視下，把救命的情報藏進三個童話。當真話不能直說，「說故事」是不是一種最溫柔也最堅韌的反抗？', en: "Under the enemy's watch, Yun Tianming hides life-saving intelligence inside three fairy tales. When truth cannot be spoken plainly, is storytelling the gentlest and most tenacious form of resistance?" } },
  { id: 8,  group: P2, title: { zh: '三條活路', en: 'Three Paths to Survival' }, pages: '',
    reflectQ: { zh: '掩體、黑域、光速飛船——躲起來、變無害、或逃走。若是全人類要在這三條路裡選一條，你會投給哪一條？為什麼？', en: 'Bunker, black domain, lightspeed ship — hide, become harmless, or flee. If all humanity had to choose one of these three, which would you vote for, and why?' } },
  { id: 9,  group: P3, title: { zh: '托馬斯‧維德', en: 'Thomas Wade' }, pages: '',
    reflectQ: { zh: '維德冷酷、只認結果，卻可能是唯一能帶人類逃出生天的人。當「不擇手段」也許才是活路，你願意把命運交到這種人手上嗎？', en: "Wade is cold and cares only for results, yet may be the only one who could carry humanity to safety. When “by any means” may be the only way out, would you place your fate in such hands?" } },
  { id: 10, group: P3, title: { zh: '不擇手段地前進', en: 'Advance at Any Cost' }, pages: '',
    reflectQ: { zh: '為了避免流血，程心再一次叫停了維德——也親手關上了光速逃亡的大門。善良在這裡，究竟救了人，還是害了人？', en: "To avoid bloodshed, Cheng Xin once more stops Wade — and with her own hand shuts the door of lightspeed escape. Here, did kindness save people, or doom them?" } },
  { id: 11, group: P3, title: { zh: '掩體紀元', en: 'The Bunker Era' }, pages: '',
    reflectQ: { zh: '人類躲到巨行星的陰影後，以為找到了安全。這種「躲起來就沒事了」的安全感，是智慧，還是另一種傲慢？', en: 'Humanity hides behind the shadow of the gas giants, believing itself safe. Is this “hide and all is well” sense of safety wisdom — or another form of arrogance?' } },
  { id: 12, group: P4, title: { zh: '歌者', en: 'The Singer' }, pages: '',
    reflectQ: { zh: '對歌者而言，消滅太陽系只是隨手清理，「毀滅你，與你何干」。當殺戮可以如此輕描淡寫、毫無情感，這種宇宙級的冷漠讓你感到什麼？', en: 'To the Singer, wiping out the solar system is a casual clean-up — “destroying you has nothing to do with you.” When killing can be this light and unfeeling, what does such cosmic indifference make you feel?' } },
  { id: 13, group: P4, title: { zh: '二向箔', en: 'The Dual-Vector Foil' }, pages: '',
    reflectQ: { zh: '整個太陽系緩緩跌進一幅絕美又死寂的二維畫裡。當毀滅以如此詩意的方式降臨，「美」與「死亡」竟合而為一——你如何面對這一幕？', en: 'The whole solar system falls slowly into an exquisite, deathly two-dimensional painting. When destruction arrives so poetically, beauty and death become one — how do you face this scene?' } },
  { id: 14, group: P4, title: { zh: '逃向星空', en: 'Flight to the Stars' }, pages: '',
    reflectQ: { zh: '程心在光速的距離之外，眼睜睜看著自己的太陽系被壓成一幅畫。作為唯一的倖存者之一，「活下來」對她而言，是幸運，還是另一種懲罰？', en: 'From beyond the speed of light, Cheng Xin watches her solar system pressed into a painting. As one of the only survivors, is “living on” for her a mercy, or another kind of punishment?' } },
  { id: 15, group: P4, title: { zh: '小宇宙', en: 'The Mini-Universe' }, pages: '',
    reflectQ: { zh: '程心與關一帆躲進雲天明留下的小宇宙，想熬過大宇宙的坍縮、抵達重生的新世界。把整個宇宙的死亡當成一次「等待」——這是希望，還是逃避？', en: "Cheng Xin and Guan Yifan hide in the mini-universe Yun Tianming left, hoping to outlast the great collapse and reach a reborn world. Treating the whole universe's death as a “wait” — is that hope, or escape?" } },
  { id: 16, group: P4, title: { zh: '死神永生', en: "Death's End" }, pages: '',
    reflectQ: { zh: '宇宙因無數文明的戰爭而走向死亡；程心最終選擇歸還小宇宙的質量，把重生的機會還給整個宇宙。在一切終將毀滅的盡頭，這個選擇讓你看見了什麼？', en: "The universe dies from the wars of countless civilizations; Cheng Xin chooses in the end to return the mini-universe's mass, giving the chance of rebirth back to the whole cosmos. At the end where all must perish, what does this choice let you see?" } }
];

const CHARACTERS = [
  { id: 'chengxin', name: { zh: '程心', en: 'Cheng Xin' }, family: 'earth', role: { zh: '第二任執劍人 · 主角', en: 'The Second Swordholder · Protagonist' }, icon: '🕊️', color: '#5e79c4',
    desc: { zh: '航太工程博士，第二任執劍人。她溫柔、充滿愛與責任感，一生數度站在決定人類命運的岔口——而她一次次出於慈悲的選擇，既是人性最美的光，也帶來了最沉重的災難。', en: "An aerospace-engineering PhD and the second Swordholder. Gentle, loving, and full of a sense of duty, she stands several times at the forks that decide humanity's fate — and her choices, made again and again out of compassion, are both the most beautiful light of human nature and the source of its heaviest catastrophes." },
    analysis: { zh: '程心是整個三部曲中最具爭議、也最深刻的主角。她代表著人類最珍貴的東西——愛與慈悲；但劉慈欣殘忍地讓我們看見：在黑暗森林的宇宙裡，慈悲有時就是毀滅。她握著劍卻按不下去、叫停了維德的逃亡飛船，每一次都是善良的選擇，每一次都通向災難。她逼問一個沒有標準答案的問題：當「做一個好人」與「讓文明活下去」正面衝突時，我們究竟該選哪一個？', en: "Cheng Xin is the trilogy's most controversial and most profound protagonist. She embodies what is most precious in humanity — love and compassion; yet Liu Cixin cruelly shows us that in the dark forest universe, compassion is sometimes destruction. She holds the sword but cannot press it, she halts Wade's escape ships — each a choice of kindness, each leading to catastrophe. She forces an unanswerable question: when “being a good person” collides head-on with “letting civilization survive,” which should we choose?" },
    tags: [ { zh: '執劍人', en: 'The Swordholder' }, { zh: '慈悲', en: 'Compassion' }, { zh: '善良與災難', en: 'Kindness and catastrophe' } ],
    related: ['yuntianming', 'wade', 'luoji', 'guanyifan'] },
  { id: 'yuntianming', name: { zh: '雲天明', en: 'Yun Tianming' }, family: 'earth', role: { zh: '為愛送出大腦的人', en: 'The One Who Gave His Brain for Love' }, icon: '⭐', color: '#c9a84e',
    desc: { zh: '程心的大學同學，一個沉默、內向、身患絕症的男子。他默默愛著程心，曾用一筆錢買下一顆遙遠的恆星送給她。在階梯計畫中，他的大腦被送往三體艦隊；多年後，他用三個童話，把救人類的情報悄悄交還給她。', en: "Cheng Xin's college classmate — a silent, inward man dying of illness. He loves her without a word, once buying a distant star to give her. In the Staircase Program, his brain is sent to the Trisolaran fleet; years later, through three fairy tales, he quietly hands back to her the intelligence that could save humanity." },
    analysis: { zh: '雲天明是全書最動人的溫柔。在一個冷酷到極致的宇宙敘事裡，他的存在證明：愛可以跨越光年、跨越物種、甚至跨越生死。他把自己的一切——大腦、智慧、餘生——都獻給了一個或許並不知情的人；而他藏在童話裡的救贖，是黑暗宇宙中一束不肯熄滅的光。他與程心之間那顆遙遠的星，是整個三部曲裡最浪漫、也最蒼涼的意象。', en: "Yun Tianming is the book's most moving tenderness. In a cosmic narrative cold to the extreme, his existence proves that love can cross light-years, species, even life and death. He gives everything — his brain, his mind, what is left of his life — to someone who may never fully know; and the redemption he hides in fairy tales is a light that will not go out in a dark universe. The distant star between him and Cheng Xin is the most romantic, and most desolate, image in the whole trilogy." },
    tags: [ { zh: '一顆星星', en: 'A star' }, { zh: '藏在童話裡的愛', en: 'Love hidden in fairy tales' }, { zh: '跨越生死', en: 'Across life and death' } ],
    related: ['chengxin', 'trisolaris'] },
  { id: 'wade', name: { zh: '托馬斯‧維德', en: 'Thomas Wade' }, family: 'earth', role: { zh: '冷酷的實用主義者', en: 'The Cold Pragmatist' }, icon: '🎯', color: '#c76a86',
    desc: { zh: '前情報機構首腦，冷酷、堅硬、只認結果。他堅信唯有光速飛船才是人類真正的活路，說服程心把公司交給他全力研製。他的座右銘只有一句：前進，前進，不擇手段地前進。', en: "A former intelligence chief — cold, hard, caring only for results. He believes lightspeed ships are humanity's only true way out, and persuades Cheng Xin to hand him her company to pursue them. His motto is a single line: advance, advance, advance at any cost." },
    analysis: { zh: '維德是程心的完美對立面：她是慈悲，他是決絕。他代表著一種令人不安的可能——在黑暗森林裡，也許正是這種「不擇手段」的冷酷，才能真正救人類一命。全書最深的兩難就凝結在他們身上：一個太善良而屢屢誤事，一個夠狠卻可能是唯一的活路。當程心叫停了他，我們看見的不是善對惡的勝利，而是一個文明親手關上了自己逃生門的悲劇。', en: "Wade is Cheng Xin's perfect opposite: she is compassion, he is resolve. He embodies an unsettling possibility — that in the dark forest, it may be exactly this ruthless “by any means” that could truly save humanity. The book's deepest dilemma is crystallized in the two of them: one too kind and forever failing, one hard enough to perhaps be the only way out. When Cheng Xin stops him, what we see is not the triumph of good over evil, but the tragedy of a civilization shutting its own escape door with its own hand." },
    tags: [ { zh: '不擇手段', en: 'By any means' }, { zh: '前進！', en: 'Advance!' }, { zh: '慈悲的反面', en: 'The opposite of compassion' } ],
    related: ['chengxin'] },
  { id: 'luoji', name: { zh: '羅輯', en: 'Luo Ji' }, family: 'earth', role: { zh: '第一任執劍人', en: 'The First Swordholder' }, icon: '🔦', color: '#5aae9a',
    desc: { zh: '第二部的主角，黑暗森林威懾的建立者。在本部，他已是「執劍」數十年、獨自守護人類的老人。當人類要換上新執劍人時，他默默交出了那把懸在兩個文明頭上的劍。', en: "The protagonist of Book Two, who built the dark forest deterrence. Here he is an old man who has held the sword for decades, guarding humanity alone. When humanity chooses a new Swordholder, he silently hands over the blade that hangs above two civilizations." },
    analysis: { zh: '羅輯在本部是一座沉默的橋——連接著威懾的過去與崩潰的未來。他代表了程心所不具備的東西：一種看透宇宙後的冷酷擔當。人類選擇用溫柔的程心取代冷硬的羅輯，正是災難的伏筆。他的存在，成了對「我們究竟需要怎樣的守護者」這個問題最沉默的回答。', en: "Here Luo Ji is a silent bridge, joining the past of deterrence to the future of its collapse. He embodies what Cheng Xin lacks: a cold responsibility born of having seen through the cosmos. That humanity replaces the hard Luo Ji with the gentle Cheng Xin is the seed of catastrophe. His presence becomes the most silent answer to the question of just what kind of guardian we need." },
    tags: [ { zh: '威懾的建立者', en: 'Builder of the deterrence' }, { zh: '交出劍', en: 'Hands over the sword' } ],
    related: ['chengxin', 'trisolaris'] },
  { id: 'aa', name: { zh: '艾AA', en: 'AA' }, family: 'earth', role: { zh: '程心的摯友', en: "Cheng Xin's Close Friend" }, icon: '🌱', color: '#9aa2ba',
    desc: { zh: '聰慧、務實、樂觀的年輕女子，程心一生最忠實的夥伴與朋友。在程心屢屢被沉重的命運壓垮時，是艾AA陪著她、拉著她，一起走過一個又一個時代。', en: "A clever, practical, optimistic young woman, Cheng Xin's most faithful companion and friend through life. When the weight of destiny again and again crushes Cheng Xin, it is AA who stays beside her and pulls her through one era after another." },
    analysis: { zh: '在充滿犧牲與毀滅的故事裡，艾AA是一抹難得的輕盈與人味。她不背負救世的重擔，只是踏踏實實地活著、愛著、陪伴著。正是這種「小人物的溫暖」，讓程心（也讓讀者）在宇宙級的絕望裡，還握得住一點屬於人的東西。', en: "In a story full of sacrifice and destruction, AA is a rare lightness and human warmth. She carries no burden of saving the world; she simply lives, loves, and stays close, solidly. It is this warmth of the ordinary that lets Cheng Xin — and the reader — keep hold of something human amid cosmic-scale despair." },
    tags: [ { zh: '務實樂觀', en: 'Practical and hopeful' }, { zh: '最忠實的陪伴', en: 'The most faithful companion' } ],
    related: ['chengxin'] },
  { id: 'guanyifan', name: { zh: '關一帆', en: 'Guan Yifan' }, family: 'earth', role: { zh: '物理學家', en: 'Physicist' }, icon: '🔭', color: '#5aae9a',
    desc: { zh: '在太陽系毀滅後，程心在遙遠星系遇見的物理學家。他懂得宇宙運行的深層真相，最終與程心一同走向整個宇宙的終局與重生。', en: "A physicist Cheng Xin meets in a distant star system after the solar system's destruction. He understands the deep truths of how the universe works, and in the end walks with Cheng Xin toward the cosmos's end and rebirth." },
    analysis: { zh: '關一帆的出現，把故事的視角從「人類的存亡」拉高到「整個宇宙的命運」。透過他的口，讀者才終於看見全書最大的謎底：宇宙為何走向死亡。他與程心的相伴，是這趟蒼涼旅程盡頭的一點溫柔——在一切終將歸零的宇宙裡，兩個渺小的人，仍選擇一起面對終局。', en: "Guan Yifan's arrival lifts the story's view from “humanity's survival” to “the fate of the whole universe.” Through him the reader at last sees the greatest revelation of the book: why the cosmos is dying. His companionship with Cheng Xin is a stroke of tenderness at the end of this desolate journey — in a universe where all will return to zero, two tiny people still choose to face the end together." },
    tags: [ { zh: '宇宙的真相', en: 'The truth of the cosmos' }, { zh: '同赴終局', en: 'Facing the end together' } ],
    related: ['chengxin'] },
  { id: 'trisolaris', name: { zh: '三體文明', en: 'Trisolaris' }, family: 'trisolaris', role: { zh: '昔日的敵人', en: 'The Former Enemy' }, icon: '🌗', color: '#c76a86',
    desc: { zh: '四光年外的文明。在本部，被宇宙廣播標記後，他們被迫倉皇放棄地球、逃離太陽系，最終同樣消失在黑暗森林的獵殺之下——昔日不可一世的入侵者，也不過是這座森林裡的獵物。', en: "The civilization four light-years away. Here, once marked by the broadcast, they are forced to abandon Earth in haste and flee the solar system, and in the end vanish too beneath the dark forest's hunt — the once-invincible invader is, after all, only prey in this forest." },
    analysis: { zh: '到了第三部，三體文明的命運本身就是一則寓言：連能碾壓人類的它們，在更浩瀚的黑暗森林裡，也只是隨時會被消滅的弱者。這徹底打破了「敵我」的框架——在宇宙這座獵場裡，沒有誰是永遠的獵人，所有文明都同時是獵人與獵物。它們的隕落，是全書「傲慢即死亡」主題最有力的註腳。', en: "By Book Three, the fate of Trisolaris is itself a parable: even they, who could crush humanity, are only the weak in a vaster dark forest, liable to be wiped out at any moment. This shatters the frame of “us versus them” — in the hunting ground of the cosmos, no one is forever the hunter; every civilization is hunter and prey at once. Their fall is the most forceful footnote to the book's theme that arrogance is death." },
    tags: [ { zh: '昔日入侵者', en: 'The former invader' }, { zh: '也是獵物', en: 'Prey as well' } ],
    related: ['zhizi', 'luoji'] },
  { id: 'zhizi', name: { zh: '智子', en: 'The Sophon' }, family: 'trisolaris', role: { zh: '人形的三體使者', en: 'The Humanoid Trisolaran Envoy' }, icon: '🎎', color: '#5aae9a',
    desc: { zh: '三體人透過智子操控的人形機器人，優雅、沉靜、深不可測。在威懾紀元中，她以使者與侍者的姿態出現在人類之間，既是監視，也是一種奇異的陪伴。', en: "A humanoid robot controlled by the Trisolarans through the sophons — elegant, serene, unfathomable. In the Deterrence Era she appears among humans as envoy and attendant, at once surveillance and a strange sort of companionship." },
    analysis: { zh: '從第一部裡封死科學的微觀質子，到第三部裡舉止優雅的人形使者，智子的形象變化本身就是三體與人類關係的縮影——從純粹的冷酷武器，到帶著某種曖昧情感的存在。她提醒我們：即使是敵人派來的監視者，在漫長的共處裡，也可能生出人與人（或人與非人）之間那份難以名狀的牽連。', en: "From the microscopic proton that locked science in Book One to the elegantly mannered humanoid envoy of Book Three, the sophon's changing image is itself a miniature of the relationship between Trisolaris and humanity — from a purely cold weapon to a presence carrying some ambiguous feeling. She reminds us that even a watcher sent by the enemy may, over long coexistence, grow the unnameable ties that arise between one being and another." },
    tags: [ { zh: '人形使者', en: 'Humanoid envoy' }, { zh: '監視與陪伴', en: 'Surveillance and company' } ],
    related: ['trisolaris', 'chengxin'] },
  { id: 'singer', name: { zh: '歌者', en: 'The Singer' }, family: 'cosmos', role: { zh: '宇宙的清理員', en: 'A Cleaner of the Cosmos' }, icon: '🎼', color: '#8aa0e0',
    desc: { zh: '宇宙深處一個高等文明的低階成員，一個隨手「清理」暴露座標之文明的獵人。對他而言，消滅一個太陽系不過是舉手之勞，毫無情感，甚至懶得多看一眼——毀滅你，與你何干。', en: "A low-ranking member of a higher civilization in the depths of the cosmos, a hunter who casually “cleans up” any civilization that reveals its coordinates. To him, wiping out a solar system is a trifle, without feeling, hardly worth a second glance — destroying you has nothing to do with you." },
    analysis: { zh: '歌者是黑暗森林法則最令人膽寒的具現。他不是什麼窮凶極惡的大魔王，只是一個做著日常工作、順手滅世的普通「清理員」。正是這份「平庸的、毫無惡意的冷漠」，把宇宙的殘酷推到了頂點——原來毀滅一個文明，可以不需要仇恨，甚至不需要注意力。透過他，我們看見了黑暗森林最終、也最徹底的模樣。', en: "The Singer is the most chilling embodiment of the dark forest theory. He is no monstrous overlord, just an ordinary “cleaner” doing his daily work and wiping out a world in passing. It is precisely this banal, malice-free indifference that pushes the cruelty of the cosmos to its peak — destroying a civilization, it turns out, requires no hatred, not even attention. Through him we see the dark forest in its final, most thorough form." },
    tags: [ { zh: '隨手滅世', en: 'World-ending in passing' }, { zh: '平庸的冷漠', en: 'Banal indifference' }, { zh: '毀滅你與你何干', en: '“Nothing to do with you”' } ],
    related: ['dvfoil'] },
  { id: 'dvfoil', name: { zh: '二向箔', en: 'The Dual-Vector Foil' }, family: 'cosmos', role: { zh: '降維武器', en: 'The Dimensional Weapon' }, icon: '📃', color: '#8aa0e0',
    desc: { zh: '歌者拋向太陽系的一片小小薄膜。它會讓三維空間朝二維坍縮——整個太陽系連同其中的一切，緩緩跌進一幅平面、絕美又死寂的畫裡。這就是「降維打擊」。', en: "A small, thin film the Singer flings at the solar system. It collapses three-dimensional space into two — the whole solar system and everything in it falls slowly into a flat, exquisite, deathly painting. This is the “dimensional-reduction strike.”" },
    analysis: { zh: '二向箔是全書、甚至整個科幻史上最駭人的武器意象之一：一片輕飄飄的薄膜，卻能把一整個太陽系抹平成一幅二維的畫。它把「技術代差」的恐怖推向了本體論的層次——敵人改變的不是你的生死，而是你所存在的維度本身。當戰爭進行到連空間的維度都能當作武器時，任何抵抗都失去了意義。這是黑暗森林最終的、詩意而絕望的句號。', en: "The dual-vector foil is one of the most terrifying weapon-images in the book, and in all of science fiction: a weightless film that can flatten an entire solar system into a two-dimensional painting. It pushes the terror of a technological gap to the ontological level — the enemy changes not whether you live or die, but the very dimension in which you exist. When war reaches the point where even the dimensions of space are weapons, all resistance loses meaning. This is the dark forest's final, poetic, despairing full stop." },
    tags: [ { zh: '降維打擊', en: 'Dimensional strike' }, { zh: '把宇宙壓成畫', en: 'A universe pressed into a painting' } ],
    related: ['singer'] }
];

const TIMELINE_DATA = [
  { year: { zh: '危機初年', en: 'The Early Crisis' }, event: { zh: '階梯計畫 · 一顆大腦飛向星海', en: 'The Staircase Program: a brain flung toward the stars' }, novel: { zh: '程心提出階梯計畫，把身患絕症、默默愛著她的雲天明的大腦，送往三體艦隊。', en: "Cheng Xin proposes the Staircase Program, sending toward the Trisolaran fleet the brain of Yun Tianming — dying, and silently in love with her." }, type: 'novel' },
  { year: { zh: '威懾紀元', en: 'The Deterrence Era' }, event: { zh: '羅輯獨自執劍數十年', en: 'Luo Ji holds the sword alone for decades' }, novel: { zh: '羅輯以黑暗森林威懾為籌碼，換來人類與三體之間一段脆弱而繁榮的和平。', en: 'With the dark forest deterrence as his stake, Luo Ji buys a fragile, prosperous peace between humanity and Trisolaris.' }, type: 'character' },
  { year: { zh: '交接', en: 'The Handover' }, event: { zh: '執劍人程心', en: 'Cheng Xin becomes Swordholder' }, novel: { zh: '厭倦了冷酷威懾的人類，選了溫柔的程心接過那把懸在兩個文明頭上的劍。', en: 'Weary of cold deterrence, humanity chooses the gentle Cheng Xin to take up the sword hanging over two civilizations.' }, type: 'character' },
  { year: { zh: '崩潰', en: 'The Collapse' }, event: { zh: '十五分鐘 · 威懾失敗', en: 'Fifteen minutes; deterrence fails' }, novel: { zh: '三體趁機發動攻擊，程心因慈悲無法按下同歸於盡的開關，威懾在十幾分鐘內崩潰。', en: 'Trisolaris strikes; unable, out of compassion, to press the switch of mutual destruction, Cheng Xin watches deterrence collapse in minutes.' }, type: 'novel' },
  { year: { zh: '淪陷', en: 'The Fall' }, event: { zh: '三體占領 · 澳洲保留區', en: 'Trisolaris occupies Earth; the Australia reservation' }, novel: { zh: '威懾一失，三體立即控制地球，準備把全人類圈禁到澳洲，人類跌入屈辱的深淵。', en: 'Deterrence gone, Trisolaris seizes Earth and prepares to herd all humanity into Australia; humanity falls into the abyss of humiliation.' }, type: 'novel' },
  { year: { zh: '反轉', en: 'The Reversal' }, event: { zh: '宇宙廣播 · 三體逃離', en: 'The broadcast; Trisolaris flees' }, novel: { zh: '深空的人類飛船廣播了三體座標，兩個文明同被標記；三體只得倉皇放棄地球、逃離太陽系。', en: "Human ships in deep space broadcast Trisolaris's coordinates, marking both civilizations; Trisolaris must abandon Earth in haste and flee the solar system." }, type: 'novel' },
  { year: { zh: '密語', en: 'The Cipher' }, event: { zh: '雲天明的三個童話', en: "Yun Tianming's three fairy tales" }, novel: { zh: '雲天明在三體監視下，用三個童話把黑暗森林的救命情報悄悄交還給程心與人類。', en: "Under Trisolaran watch, Yun Tianming uses three fairy tales to quietly hand the dark forest's life-saving intelligence back to Cheng Xin and humanity." }, type: 'character' },
  { year: { zh: '抉擇', en: 'The Choices' }, event: { zh: '三條活路與維德的光速飛船', en: "Three paths, and Wade's lightspeed ships" }, novel: { zh: '人類從童話讀出掩體、黑域、光速飛船三條活路；維德全力研製光速飛船，卻被程心叫停。', en: "From the tales humanity reads three paths — bunker, black domain, lightspeed ships; Wade pursues lightspeed ships with all his force, but Cheng Xin stops him." }, type: 'novel' },
  { year: { zh: '掩體紀元', en: 'The Bunker Era' }, event: { zh: '躲到巨行星的陰影後', en: 'Hiding behind the shadow of the gas giants' }, novel: { zh: '人類把希望寄託在掩體計畫，遷居巨行星背陰面，在虛假的安全感中度日。', en: 'Humanity pins its hope on the Bunker Project, moving behind the gas giants and living on in a false sense of safety.' }, type: 'novel' },
  { year: { zh: '終末', en: 'The End Times' }, event: { zh: '歌者的二向箔 · 太陽系降維', en: "The Singer's foil; the solar system falls to two dimensions" }, novel: { zh: '宇宙深處的清理員歌者，隨手拋來一片二向箔，整個太陽系緩緩跌進一幅絕美又死寂的二維畫裡。', en: 'The Singer, a cleaner in the depths of the cosmos, casually flings a dual-vector foil; the whole solar system falls slowly into an exquisite, deathly two-dimensional painting.' }, type: 'novel' },
  { year: { zh: '永生', en: 'Eternity' }, event: { zh: '小宇宙 · 宇宙的坍縮與重生', en: 'The mini-universe; the collapse and rebirth of the cosmos' }, novel: { zh: '程心與關一帆躲進小宇宙；最終她選擇歸還質量，把重生的機會還給整個走向死亡的宇宙。', en: 'Cheng Xin and Guan Yifan hide in a mini-universe; in the end she chooses to return its mass, giving the chance of rebirth back to the whole dying cosmos.' }, type: 'novel' }
];

const THEMES = [
  { id: 'swordholder', icon: '🗡️', title: { zh: '執劍人', en: 'The Swordholder' }, subtitle: { zh: '一個人的手指，兩個文明的生死', en: "One finger, two civilizations' fate" }, color: '#5e79c4',
    intro: { zh: '把一整個文明的存亡，交到一個人的手指上——這是勇敢，還是瘋狂？', en: "To place the survival of a whole civilization on one person's finger — is that courage, or madness?" },
    body: { zh: '<p>黑暗森林威懾的邏輯，需要一個「隨時敢按下同歸於盡開關」的人來執行。羅輯冷酷地守了數十年；而當人類選了溫柔的程心，威懾便在她按不下去的一瞬間崩潰。</p><p>執劍人這個設定，把「威懾」的殘酷本質赤裸裸地攤開：它要求守護者不能有一絲軟弱，否則整套平衡就會瓦解。人類想要一個既溫柔又能毀滅世界的守護者——這份自相矛盾的期待，本身就是一場注定的悲劇。</p><div class="theme-quote">「執劍人的一念之間，是兩個文明的生與死。」</div>', en: "<p>The logic of the dark forest deterrence needs someone who will, at any moment, dare to press the switch of mutual destruction. Luo Ji holds it coldly for decades; and when humanity chooses the gentle Cheng Xin, the deterrence collapses the instant she cannot press.</p><p>The Swordholder lays bare the cruel essence of deterrence: it demands a guardian without a trace of weakness, or the whole balance falls apart. Humanity wants a guardian both gentle and able to destroy the world — and this self-contradicting wish is itself a foreordained tragedy.</p><div class=\"theme-quote\">“In a Swordholder's single thought lies the life and death of two civilizations.”</div>" },
    chapters: ['2', '3', '4'] },
  { id: 'compassion', icon: '🕊️', title: { zh: '慈悲的重量', en: 'The Weight of Compassion' }, subtitle: { zh: '當「做好人」與「活下去」衝突', en: "When being good collides with staying alive" }, color: '#c76a86',
    intro: { zh: '程心一次次選擇了善良，也一次次通向災難。', en: 'Cheng Xin chooses kindness again and again — and again and again it leads to catastrophe.' },
    body: { zh: '<p>程心代表人類最珍貴的東西：愛與慈悲。但劉慈欣殘忍地讓我們看見，在黑暗森林的宇宙裡，慈悲有時就是毀滅。她按不下威懾的開關、叫停了維德的逃亡飛船，每一次都是善良的選擇，每一次都通向更深的災難。</p><p>這是全書最尖銳、也最沒有標準答案的叩問：當「做一個好人」與「讓文明活下去」正面衝突，我們該選哪一個？劉慈欣沒有審判程心——他只是把這個沉重的兩難，原封不動地交到每一個讀者手裡。</p><div class="theme-quote">「她的慈悲，是人性最美的光，也是人類最沉重的災難。」</div>', en: "<p>Cheng Xin embodies what is most precious in humanity: love and compassion. But Liu Cixin cruelly shows that in the dark forest universe, compassion is sometimes destruction. She cannot press the deterrence switch, she halts Wade's escape ships — each a choice of kindness, each leading to a deeper catastrophe.</p><p>This is the book's sharpest and most unanswerable question: when being a good person collides head-on with letting civilization survive, which do we choose? Liu Cixin does not judge Cheng Xin — he simply hands this heavy dilemma, untouched, to every reader.</p><div class=\"theme-quote\">“Her compassion is the most beautiful light of human nature, and humanity's heaviest catastrophe.”</div>" },
    chapters: ['4', '10'] },
  { id: 'fairytale', icon: '📖', title: { zh: '藏在童話裡的愛', en: 'Love Hidden in Fairy Tales' }, subtitle: { zh: '跨越光年、物種與生死的深情', en: 'A love across light-years, species, and death' }, color: '#c9a84e',
    intro: { zh: '雲天明的存在證明：在最冷酷的宇宙裡，愛依然可能。', en: "Yun Tianming's existence proves that even in the coldest universe, love is still possible." },
    body: { zh: '<p>在一個冷到極致的宇宙敘事裡，雲天明是最動人的溫柔。他默默愛著程心，用一筆錢替她買下一顆遙遠的星，又把自己的大腦、餘生與智慧，全都獻給了一個或許並不知情的人。</p><p>當真話不能直說，他把救人類的情報，一針一線縫進三個童話裡交還給她。這份藏在故事中的愛與救贖，是黑暗宇宙裡一束不肯熄滅的光——它告訴我們，再殘酷的法則，也計算不盡人心裡那一點溫柔的重量。</p><div class="theme-quote">「我把那顆星星，送給你了。」</div>', en: "<p>In a cosmic narrative cold to the extreme, Yun Tianming is the most moving tenderness. He loves Cheng Xin in silence, buys her a distant star, and gives his brain, his remaining life, and his mind to someone who may never fully know.</p><p>When truth cannot be spoken plainly, he stitches the intelligence that could save humanity into three fairy tales and hands it back to her. This love and redemption hidden in stories is a light that will not go out in a dark universe — it tells us that no law, however cruel, can fully reckon the weight of one tenderness in a human heart.</p><div class=\"theme-quote\">“That star — I gave it to you.”</div>" },
    chapters: ['1', '7'] },
  { id: 'dimension', icon: '📃', title: { zh: '降維打擊', en: 'The Dimensional Strike' }, subtitle: { zh: '把整個宇宙壓成一幅畫', en: 'Pressing a whole world into a painting' }, color: '#8aa0e0',
    intro: { zh: '宇宙戰爭的終極形態，是改變你存在的維度本身。', en: 'The ultimate form of cosmic war is to change the very dimension in which you exist.' },
    body: { zh: '<p>歌者向太陽系拋出一片輕飄飄的二向箔，整個太陽系連同其中的一切，緩緩跌進一幅平面、絕美又死寂的畫裡。這是全書最駭人也最詩意的意象：毀滅不再是爆炸與火焰，而是「美」與「死亡」合而為一。</p><p>降維打擊把技術代差的恐怖推向了本體論的層次——敵人改變的不是你的生死，而是你所存在的維度本身。而對施放者歌者來說，這一切不過是隨手清理，「毀滅你，與你何干」。宇宙的殘酷，在這份平庸的冷漠裡達到了頂點。</p><div class="theme-quote">「毀滅你，與你何干。」</div>', en: "<p>The Singer flings a weightless dual-vector foil at the solar system, and the whole system and everything in it falls slowly into a flat, exquisite, deathly painting. It is the book's most terrifying and most poetic image: destruction is no longer explosion and fire, but beauty and death made one.</p><p>The dimensional strike pushes the terror of a technological gap to the ontological level — the enemy changes not whether you live or die, but the very dimension in which you exist. And to the Singer who casts it, all this is mere clean-up: destroying you has nothing to do with you. The cruelty of the cosmos reaches its peak in this banal indifference.</p><div class=\"theme-quote\">“Destroying you has nothing to do with you.”</div>" },
    chapters: ['12', '13'] },
  { id: 'arrogance', icon: '⚖️', title: { zh: '傲慢，才是生存的障礙', en: 'Arrogance, the Real Barrier' }, subtitle: { zh: '弱小和無知都不致命，自大才致命', en: 'Not weakness nor ignorance, but pride is fatal' }, color: '#5aae9a',
    intro: { zh: '整個三部曲的血淚教訓，凝結成一句話。', en: 'The hard-won lesson of the whole trilogy, distilled into one line.' },
    body: { zh: '<p>人類一次次的災難，往往不是因為弱小或無知，而是因為傲慢：以為自己已能擊敗三體（第二部的艦隊全滅）、以為躲到巨行星背後就安全（掩體紀元的自欺）、以為可以既溫柔又守得住威懾。每一次自大，都要用整個文明來償還。</p><p>連不可一世的三體，最終也在更浩瀚的黑暗森林裡如螻蟻般被抹去。這徹底打破了「敵我」的框架——在宇宙這座獵場裡，沒有誰是永遠的強者。全書最沉痛的智慧，就是這句話：真正殺死你的，往往不是你的弱點，而是你不肯承認自己弱小的傲慢。</p><div class="theme-quote">「弱小和無知不是生存的障礙，傲慢才是。」</div>', en: "<p>Humanity's catastrophes come, again and again, not from weakness or ignorance but from arrogance: believing it could already defeat Trisolaris (the fleet's annihilation in Book Two), believing that hiding behind the gas giants meant safety (the self-deception of the Bunker Era), believing it could be both gentle and hold the deterrence. Each act of pride is repaid with a whole civilization.</p><p>Even the once-invincible Trisolaris is, in the end, erased like an ant in a vaster dark forest. This shatters the frame of “us versus them” — in the hunting ground of the cosmos, no one is forever strong. The book's most sorrowful wisdom is this line: what truly kills you is often not your weakness, but the arrogance that will not admit you are weak.</p><div class=\"theme-quote\">“Weakness and ignorance are not barriers to survival, but arrogance is.”</div>" },
    chapters: ['11', '16'] },
  { id: 'deathsend', icon: '♾️', title: { zh: '死神永生：終局與重生', en: "Death's End: End and Rebirth" }, subtitle: { zh: '在一切終將毀滅的盡頭', en: 'At the end where all must perish' }, color: '#5e79c4',
    intro: { zh: '故事的尺度最終擴張到整個宇宙的生與死。', en: "The story's scale widens, at last, to the life and death of the whole universe." },
    body: { zh: '<p>全系列的終極揭露令人屏息：整個宇宙正在死去——因為無數文明的降維戰爭，宇宙的維度與光速被一次次降低，而大量物質被鎖進了無數個小宇宙裡，讓大宇宙再也無法完成坍縮與重生。</p><p>在這樣的盡頭，程心做了她一生最後、也最溫柔的一個選擇：歸還小宇宙的質量，放棄自己的避難所，把重生的機會還給整個宇宙。死神確實永生——但在她這個渺小的抉擇裡，重生也一樣。全書以宇宙尺度的悲憫與希望收尾：即使一切終將歸零，仍有人願意為了那個看不見的、重生的新宇宙，交出自己僅有的一切。</p><div class="theme-quote">「死亡是唯一一座永遠亮著的燈塔——但燈塔之後，也許還有新的黎明。」</div>', en: "<p>The trilogy's final revelation is breathtaking: the whole universe is dying — because the dimensional wars of countless civilizations have lowered its dimensions and its speed of light again and again, and vast amounts of matter have been locked away in countless mini-universes, so that the great universe can no longer complete its collapse and rebirth.</p><p>At such an end, Cheng Xin makes the last and most tender choice of her life: to return the mini-universe's mass, giving up her own refuge and handing the chance of rebirth back to the whole cosmos. Death is indeed eternal — but in her tiny choice, so too is rebirth. The book closes with a compassion and hope on the scale of the universe: even where all must return to zero, someone still chooses to give up all they have for an unseen, reborn cosmos.</p><div class=\"theme-quote\">“Death is the one lighthouse always lit — but beyond the lighthouse, perhaps, a new dawn.”</div>" },
    chapters: ['15', '16'] }
];

const QUOTES = [
  { text: { zh: '弱小和無知不是生存的障礙，傲慢才是。', en: 'Weakness and ignorance are not barriers to survival, but arrogance is.' }, source: { zh: '第十六章 · 全書主旨（系列名句）', en: 'Chapter 16 · The theme (a signature line of the series)' },
    analysis: { zh: '整個三部曲的血淚教訓，也是全書最著名的一句。人類（乃至三體）一次次的毀滅，往往不是敗於弱小或無知，而是敗於「以為自己夠強、夠安全」的傲慢。', en: "The hard-won lesson of the whole trilogy, and the book's most famous line. The destruction of humanity — and of Trisolaris — comes, again and again, not from weakness or ignorance, but from the arrogance of believing oneself strong enough, safe enough." } },
  { text: { zh: '前進！前進！！不擇手段地前進！！！', en: 'Advance! Advance!! Advance at any cost!!!' }, source: { zh: '第十章 · 托馬斯‧維德', en: 'Chapter 10 · Thomas Wade' },
    analysis: { zh: '維德的座右銘，也是程心慈悲的完美對立面。它拋出全書最深的兩難：在黑暗森林裡，或許正是這種冷酷的決絕，才是文明真正的活路。', en: "Wade's motto, and the perfect opposite of Cheng Xin's compassion. It poses the book's deepest dilemma: in the dark forest, it may be exactly this cold resolve that is a civilization's true way to live." } },
  { text: { zh: '毀滅你，與你何干。', en: 'Destroying you has nothing to do with you.' }, source: { zh: '第十二章 · 歌者', en: 'Chapter 12 · The Singer' },
    analysis: { zh: '歌者滅世時的態度。消滅一個文明，對他而言只是隨手清理，不需要仇恨、甚至不需要注意力。這份平庸的冷漠，把黑暗森林的殘酷推到了極致。', en: "The Singer's attitude as he ends a world. To wipe out a civilization is, for him, a mere clean-up — needing no hatred, not even attention. This banal indifference pushes the cruelty of the dark forest to its extreme." } },
  { text: { zh: '死亡是唯一一座永遠亮著的燈塔。', en: 'Death is the one lighthouse that is always lit.' }, source: { zh: '全書意象（系列名句）', en: 'An image of the book (a signature line of the series)' },
    analysis: { zh: '無論你朝哪個方向航行，最終都會轉向它指引的方向。這句話道盡了全書對「死亡」的凝視——但在程心的抉擇裡，燈塔之後，也許還有重生。', en: "No matter which way you sail, in the end you turn toward where it points. The line captures the book's gaze upon death — yet in Cheng Xin's choice, beyond the lighthouse there may still be rebirth." } },
  { text: { zh: '我把那顆星星，送給你了。', en: 'That star — I gave it to you.' }, source: { zh: '第一章 · 雲天明（情節重述）', en: 'Chapter 1 · Yun Tianming (retold)' },
    analysis: { zh: '雲天明用一筆錢替程心買下一顆遙遠的恆星。在一個冷到極致的宇宙裡，這份不求回報的深情，是黑暗中最溫柔、也最蒼涼的一束光。', en: "With his money Yun Tianming buys Cheng Xin a distant star. In a universe cold to the extreme, this love that asks nothing in return is the most tender, and most desolate, light in the dark." } },
  { text: { zh: '執劍人的一念之間，是兩個文明的生與死。', en: "In a Swordholder's single thought lies the life and death of two civilizations." }, source: { zh: '第四章 · 執劍人（提煉）', en: 'Chapter 4 · The Swordholder (a distillation)' },
    analysis: { zh: '威懾的全部重量，壓在一個人是否敢按下開關的一念之間。把文明的存亡交給一個人的意志，是這套殘酷平衡最脆弱、也最深刻的地方。', en: "The whole weight of deterrence rests on whether one person dares, in a single thought, to press the switch. Entrusting a civilization's survival to one will is the most fragile — and most profound — point of this cruel balance." } }
];

const REFLECTION_QUESTIONS = [
  { zh: '在那決定兩個文明生死的十幾分鐘裡，程心下不了手。換作是你，按得下那個同歸於盡的開關嗎？', en: 'In those fateful minutes deciding two civilizations, Cheng Xin cannot press. Could you have pressed the switch of mutual destruction?' },
  { zh: '人類選擇用溫柔的程心取代冷酷的羅輯當執劍人。你認為，我們究竟需要一個怎樣的「守護者」？', en: 'Humanity replaces the cold Luo Ji with the gentle Cheng Xin as Swordholder. What kind of guardian do you think we actually need?' },
  { zh: '程心一次次出於善良的選擇，卻一次次帶來災難。「做一個好人」與「讓文明活下去」衝突時，你會選哪一個？', en: "Cheng Xin's kind choices bring catastrophe again and again. When “being a good person” collides with “letting civilization survive,” which would you choose?" },
  { zh: '維德「不擇手段地前進」，卻可能是唯一能救人類的人。你願意把命運交到這種冷酷的人手上嗎？', en: 'Wade advances “at any cost,” yet may be the only one who could save humanity. Would you place your fate in such cold hands?' },
  { zh: '雲天明把救命的情報藏進童話。當真話不能直說，「說故事」對你而言，是不是也曾是一種反抗或自保？', en: 'Yun Tianming hides life-saving truth in fairy tales. When truth cannot be spoken plainly, has storytelling ever been, for you, a form of resistance or self-protection?' },
  { zh: '歌者滅世時毫無情感，「毀滅你，與你何干」。這種平庸的、毫無惡意的冷漠，為什麼比仇恨更令人恐懼？', en: 'The Singer ends worlds without feeling — “destroying you has nothing to do with you.” Why is such banal, malice-free indifference more terrifying than hatred?' },
  { zh: '二向箔把太陽系壓成一幅絕美又死寂的畫。當「美」與「毀滅」合而為一，你會如何面對這樣的終結？', en: 'The foil presses the solar system into an exquisite, deathly painting. When beauty and destruction become one, how would you face such an ending?' },
  { zh: '「弱小和無知不是生存的障礙，傲慢才是。」回顧全系列，人類的每一次災難，是不是都能在「傲慢」裡找到影子？', en: '“Weakness and ignorance are not barriers to survival, but arrogance is.” Looking back over the series, can every human catastrophe be traced to a shadow of arrogance?' },
  { zh: '程心最終歸還小宇宙的質量，把重生的機會還給整個宇宙。在一切終將毀滅的盡頭，這個選擇讓你看見了什麼？', en: "Cheng Xin returns the mini-universe's mass, giving the chance of rebirth back to the cosmos. At the end where all must perish, what does this choice let you see?" },
  { zh: '讀完整個三部曲，「宇宙是否友善」這個問題，最終在你心裡留下的是絕望，還是一種更遼闊的悲憫與希望？', en: 'Having finished the whole trilogy, does the question of whether the universe is friendly leave you, in the end, with despair — or with a vaster compassion and hope?' }
];


// ==== CHAPTER_CONTENT（情節重述，中英雙語，子代理擴寫）====
const CHAPTER_CONTENT = {};

Object.assign(CHAPTER_CONTENT, {
  1: {
    num: { zh: `第一章`, en: `Chapter One` },
    title: { zh: `階梯計畫`, en: `The Staircase Program` },
    epigraph: {
      zh: `當一整個人送不出去，人類決定送出一顆能思考的心。`,
      en: `When a whole person could not be sent, humanity chose to send a single thinking mind.`
    },
    body: {
      zh: `<p>危機的最初歲月裡，星空對地球而言不再是浪漫，而是一支正在逼近的艦隊。人類明白，抵抗需要眼睛，需要有人親臨敵陣、成為文明之間的觸點。年輕的航太工程博士程心，在絕望中提出了一個近乎瘋狂的構想——階梯計畫：用一連串核彈接力引爆，像踩著一級級台階，把一名間諜加速送往三體艦隊。</p>
      <p>然而現實冷酷得可怕。以人類的技術，根本無法把一個完整的人送到那樣的速度與距離。反覆計算之後，能夠送出去的，只剩下一樣東西——一顆大腦。一顆從活人身上取出、獨自飛越漫漫深空的大腦。</p>
      <div class="section-break">＊ ＊ ＊</div>
      <p>被選中的人，是程心的大學同學雲天明。他身患絕症，來日無多。而程心並不知道的是，這個沉默的男子，曾在許多年裡默默地愛著她。他從不曾說出口，只在無人知曉的角落，用一筆錢買下了一顆遙遠的恆星，把它當作禮物送給她——一整顆屬於她的星。</p>
      <p>如今，他把僅剩的自己也交了出去。人們取下他的大腦，將它封入那艘小小的探測器，讓核彈的火焰把它一級一級推向黑暗。他的身體留在了地球，他的意識飛向了敵人的方向。</p>
      <div class="section-break">＊ ＊ ＊</div>
      <p>那顆孤獨的大腦，就這樣墜入了星海。它承載的，不只是一個垂死者最後的一點光，更是人類伸向深空的一根最纖細、最絕望的觸鬚。沒有人能斷定它的結局，甚至沒有人能確定它是否還會被三體艦隊捕獲。它只是飛著，飛向那片沒有溫度也沒有回音的無盡黑暗。</p>
      <p>而程心，這個親手推動了計畫的女子，將在往後漫長的年月裡，一次次想起那個為她買下一顆星的人。她還不知道，這條飛向深空的細線，有一天會以她想像不到的方式，重新回到人類的命運之中。</p>
      <p class="thought-question">🤔 思考：當一個文明只能送出一顆大腦，它送出去的究竟是希望，還是一個人最後的孤獨？</p>`,
      en: `<p>In the earliest years of the crisis, the stars were no longer romance to Earth but an approaching fleet. Humanity understood that resistance needed eyes — someone to stand within the enemy's ranks and become a point of contact between civilizations. Cheng Xin, a young doctor of aerospace engineering, put forward an almost mad idea born of desperation: the Staircase Program. A chain of nuclear detonations, firing one after another like steps on a staircase, would accelerate a single spy toward the Trisolaran fleet.</p>
      <p>But reality was terrifyingly cold. With human technology, it was simply impossible to send a whole person to such a speed across such a distance. After endless calculation, only one thing could be sent — a brain. A brain removed from a living body, sailing alone through the deep.</p>
      <div class="section-break">◆ ◆ ◆</div>
      <p>The one chosen was Yun Tianming, a classmate of Cheng Xin's from university. He was terminally ill, with little time left. And what Cheng Xin did not know was that this silent man had, for many years, quietly loved her. He never spoke of it. He only, in a corner no one saw, spent his money to buy a distant star and gave it to her as a gift — an entire star that was hers alone.</p>
      <p>Now he gave away the last of himself as well. They took his brain and sealed it into that small probe, and the fire of nuclear bombs pushed it, step by step, into the dark. His body remained on Earth; his consciousness flew toward the enemy.</p>
      <div class="section-break">◆ ◆ ◆</div>
      <p>That lonely brain fell into the sea of stars. What it carried was not only the last faint light of a dying man, but the thinnest, most desperate tendril humanity had ever reached into the deep. No one could say how it would end; no one could even be certain it would ever be captured by the Trisolaran fleet. It simply flew, on into the endless dark that held neither warmth nor echo.</p>
      <p>And Cheng Xin, the woman whose own hands had set the program in motion, would in the long years to come think again and again of the man who had bought her a star. She did not yet know that this fine thread flung into the deep would one day return to the fate of humanity in a way she could never have imagined.</p>
      <p class="thought-question">🤔 Reflect: When a civilization can send only a single brain, is what it sends out hope — or the final loneliness of one human being?</p>`
    }
  },
  2: {
    num: { zh: `第二章`, en: `Chapter Two` },
    title: { zh: `威懾紀元`, en: `The Deterrence Era` },
    epigraph: {
      zh: `和平掛在一個老人的手指上，而人類漸漸厭倦了仰望那根手指。`,
      en: `Peace hung upon one old man's finger, and humanity slowly wearied of looking up at it.`
    },
    body: {
      zh: `<p>威懾紀元，是一段建立在恐懼之上的和平。它的根基，是一個孤獨的老人——羅輯。他握著黑暗森林威懾這把利劍：只要他願意，隨時可以向整個宇宙廣播三體世界的座標，讓潛伏在黑暗森林中的獵手撲向敵人，也同時撲向自己。這是同歸於盡的威脅，是把兩個文明綁在一根引線上的死亡開關。</p>
      <p>正是靠著這份恐怖的對稱，羅輯獨自「執劍」數十年。三體不敢動手，因為它們知道，只要地球被逼到絕境，這位執劍人隨時可能按下按鈕，讓兩個世界一同暴露在死神的視線裡。</p>
      <div class="section-break">＊ ＊ ＊</div>
      <p>在這脆弱的平衡之下，人類迎來了一段前所未有的繁榮。三體開始分享它們的技術，冰封的科技樹重新解凍，文明以驚人的速度向前奔跑。城市重建，星空重新變得可以仰望，人們甚至開始相信，末日不過是一場遙遠而模糊的噩夢。</p>
      <p>然而，繁榮的表層之下，一種厭倦正在悄悄滋長。人類享受著和平，卻越來越不願承認——這份和平，是被一個冷酷老人的手指托住的。他們活在他的陰影裡，活在隨時可能同歸於盡的恐懼裡，而這種被恐懼豢養的安穩，讓越來越多人感到屈辱。</p>
      <div class="section-break">＊ ＊ ＊</div>
      <p>羅輯漸漸老去。他成了一個象徵，一尊被供奉又被畏懼的雕像。人們一面依賴他，一面害怕他，一面又暗暗渴望擺脫他所代表的那種鐵石心腸的邏輯。這是一個矛盾的時代：越是安全，人就越是想遺忘那把懸在頭頂的劍是怎麼掛上去的。</p>
      <p>沒有人願意永遠活在一個孤獨老人的手指之下。於是，一個念頭在文明深處慢慢成形——是時候，選出一位新的執劍人了。而人類想要的那個人，將與羅輯截然不同。</p>
      <p class="thought-question">🤔 思考：由恐懼換來的和平，究竟是文明的勝利，還是它遲早要付出代價的自我欺騙？</p>`,
      en: `<p>The Deterrence Era was a peace built upon fear. Its foundation was a single lonely man — Luo Ji. He held the blade of the dark forest deterrence: at any moment, should he choose, he could broadcast the coordinates of the Trisolaran world to the whole universe, drawing the hunters lurking in the dark forest upon the enemy — and upon himself as well. It was a threat of mutual annihilation, a dead man's switch binding two civilizations to a single fuse.</p>
      <p>It was on this terrible symmetry that Luo Ji held the sword alone for decades. Trisolaris dared not move, for it knew that if Earth were driven to the edge, the Swordholder might press the button at any instant, exposing both worlds to the gaze of death.</p>
      <div class="section-break">◆ ◆ ◆</div>
      <p>Beneath this fragile balance, humanity entered a prosperity it had never known. Trisolaris began to share its technology; the frozen tree of science thawed, and civilization raced forward at a startling pace. Cities were rebuilt, the night sky became something one could gaze upon again, and people even began to believe that doomsday was only a distant, blurred nightmare.</p>
      <p>Yet beneath the surface of that prosperity, a weariness was quietly growing. Humanity enjoyed its peace, yet grew ever less willing to admit that this peace was held aloft by the finger of a cold old man. They lived in his shadow, in the fear of mutual destruction that could come at any moment — and this security, fed on fear, made more and more of them feel humiliated.</p>
      <div class="section-break">◆ ◆ ◆</div>
      <p>Luo Ji grew old. He became a symbol, an idol both worshipped and dreaded. People relied on him and feared him and, in secret, longed to be free of the iron-hearted logic he embodied. It was an age of contradiction: the safer people felt, the more they wished to forget how the sword above their heads had ever come to hang there.</p>
      <p>No one wished to live forever beneath a lonely old man's finger. And so, deep within the civilization, a thought slowly took shape — it was time to choose a new Swordholder. And the one humanity would want would be nothing at all like Luo Ji.</p>
      <p class="thought-question">🤔 Reflect: Is a peace bought with fear a triumph of civilization — or a self-deception whose price will one day come due?</p>`
    }
  },
  3: {
    num: { zh: `第三章`, en: `Chapter Three` },
    title: { zh: `執劍人程心`, en: `Cheng Xin, the Swordholder` },
    epigraph: {
      zh: `人類想要一雙溫柔的手，來握住那把冰冷的劍。`,
      en: `Humanity wanted gentle hands to grasp the cold, cold sword.`
    },
    body: {
      zh: `<p>羅輯終究老了。那把懸了數十年的劍，需要交到新的手中。人類要選出第二任執劍人，而這一次的選擇，映照出的是一整個時代的心。</p>
      <p>厭倦了羅輯那種鐵石般的冷酷，厭倦了被恐懼統治的漫長歲月，人們渴望一個截然不同的守劍人——一個溫柔的、充滿愛的、能讓他們相信人性依然美好的人。他們不想再仰望一尊令人畏懼的雕像，他們想要一個能被信任、被親近、被愛的象徵。</p>
      <div class="section-break">＊ ＊ ＊</div>
      <p>於是，程心當選了。這個曾經提出階梯計畫、把摯友的大腦送往深空的女子，如今站到了兩個文明生死存亡的最前沿。她身上有著人類最看重的東西：慈悲、責任、對生命近乎本能的珍惜。正因如此，人們選擇了她。</p>
      <p>她從羅輯手中，接過了那個小小的、卻能決定兩個世界命運的開關。那一刻，蒼老的執劍人與年輕的執劍人相對而立——一個是被恐懼磨成鋼鐵的過去，一個是被愛與溫柔充滿的未來。羅輯什麼也沒有多說，只是把責任放進了她的手裡。</p>
      <div class="section-break">＊ ＊ ＊</div>
      <p>那個開關的分量，遠比它的重量沉重無數倍。它意味著：在最危急的一瞬，握著它的人必須有勇氣按下去，讓自己的文明與敵人一同墜入毀滅。威懾能否成立，從來不取決於劍有多鋒利，而取決於握劍的人，敢不敢真的揮下這一劍。</p>
      <p>而程心，這個被全人類的愛所選中的女子，正是因為她的溫柔而被信任。可也正是這份溫柔，將在不久之後，被放到宇宙最殘酷的天平上，接受一場她無論如何都不願面對的考驗。</p>
      <p class="thought-question">🤔 思考：一個握著毀滅開關的人，究竟該由最有愛的人來當，還是由最能狠下心的人來當？</p>`,
      en: `<p>Luo Ji had grown old at last. The sword that had hung for decades had to pass into new hands. Humanity would choose its second Swordholder, and this time the choice reflected the heart of an entire age.</p>
      <p>Weary of Luo Ji's stone-hard cruelty, weary of the long years ruled by fear, people longed for a wholly different keeper of the sword — someone gentle, someone full of love, someone who could make them believe that human nature was still beautiful. They no longer wished to look up at a dreaded idol; they wanted a symbol that could be trusted, drawn close, loved.</p>
      <div class="section-break">◆ ◆ ◆</div>
      <p>And so Cheng Xin was chosen. The woman who had once proposed the Staircase Program, who had sent the brain of her dearest friend into the deep, now stood at the very front line of two civilizations' survival. She carried what humanity treasured most: mercy, responsibility, an almost instinctive reverence for life. It was for exactly this that they chose her.</p>
      <p>From Luo Ji's hands she received that small switch — small, yet able to decide the fate of two worlds. In that moment the aged Swordholder and the young one stood face to face: one a past forged into iron by fear, the other a future filled with love and gentleness. Luo Ji said little more; he simply placed the burden into her hands.</p>
      <div class="section-break">◆ ◆ ◆</div>
      <p>The weight of that switch was countless times heavier than its mass. It meant this: that in the most desperate instant, the one who held it must have the courage to press it, to send their own civilization plunging into destruction alongside the enemy. Whether the deterrence held had never depended on how sharp the sword was, but on whether the one who held it dared truly to bring it down.</p>
      <p>And Cheng Xin, the woman chosen by all of humanity's love, was trusted precisely because of her gentleness. Yet it was this same gentleness that would soon be laid upon the cruelest scale in the universe, to face a test she would never, under any circumstances, wish to meet.</p>
      <p class="thought-question">🤔 Reflect: The one who holds the switch of annihilation — should it be the person with the most love, or the person most able to harden their heart?</p>`
    }
  },
  4: {
    num: { zh: `第四章`, en: `Chapter Four` },
    title: { zh: `十五分鐘`, en: `Fifteen Minutes` },
    epigraph: {
      zh: `她的慈悲用了一生去修煉，而毀滅只需要幾分鐘。`,
      en: `Her mercy took a lifetime to cultivate; destruction needed only minutes.`
    },
    body: {
      zh: `<p>交接的儀式剛剛落幕，新舊執劍人的更替甚至還沒有被世界完全消化。而在遙遠的另一端，三體早已冷冷地看著這一切。它們讀懂了人類的選擇，也讀懂了程心——這個被愛與慈悲充滿的女子，絕不會是一個敢於同歸於盡的執劍人。</p>
      <p>它們判斷：機會來了。就在程心接手之後不久，三體毫不遲疑地發動了攻擊，直撲那套維繫著整個威懾平衡的廣播系統。它們要在人類反應過來之前，斬斷那根懸著死劍的引線。</p>
      <div class="section-break">＊ ＊ ＊</div>
      <p>警報響起的那一刻，一切都壓到了程心一個人的身上。只要她按下手中的開關，向宇宙廣播出去，三體世界的座標便會暴露在黑暗森林之中——而地球，也將一同暴露。這是最後的、也是唯一的反擊：與敵人同歸於盡。留給她做決定的，只有短短十幾分鐘。</p>
      <p>時間一秒一秒地流走。她握著那個開關，那個她曾在無數人的注視下鄭重接過的開關。整個人類文明的存續，此刻全都凝縮進她的一根手指、一個念頭之間。</p>
      <div class="section-break">＊ ＊ ＊</div>
      <p>然而她按不下去。</p>
      <p>不是因為怯懦，而是因為慈悲。在那決定命運的一瞬，她的眼前不是抽象的座標與數據，而是無數活生生的生命——包括敵人的、也包括自己文明的。她一生都在珍惜生命，如今卻被要求親手把兩個世界一同推入死亡。那是她無論如何都做不到的事。她的手指停在那裡，遲遲沒有落下。</p>
      <p>就這樣，短短十幾分鐘，威懾崩潰了。三體摧毀了廣播系統，那把懸在兩個文明頭頂數十年的劍，隨著她一次沒能揮下的猶豫，轟然墜地。她那用一生修煉出來的溫柔，在這一刻，成了整個人類的災難。愛沒有錯，慈悲也沒有錯——錯的，或許只是宇宙本身，容不下這樣的溫柔。</p>
      <p class="thought-question">🤔 思考：如果按下按鈕就要毀滅兩個世界，一個不忍按下的人，究竟是失敗者，還是全人類最後的良心？</p>`,
      en: `<p>The ceremony of the handover had only just ended; the world had not even fully absorbed the change of Swordholders. And far away, on the other side, Trisolaris had been watching all of it, coldly. It had read humanity's choice, and it had read Cheng Xin — this woman filled with love and mercy would never be a Swordholder capable of mutual annihilation.</p>
      <p>Its judgment: the moment had come. Not long after Cheng Xin took up the burden, Trisolaris struck without hesitation, driving straight at the broadcast system that held the entire balance of deterrence together. It meant to sever the fuse of the hanging sword before humanity could react.</p>
      <div class="section-break">◆ ◆ ◆</div>
      <p>The instant the alarm sounded, everything came crashing down onto Cheng Xin alone. She had only to press the switch in her hand and broadcast to the universe, and the coordinates of the Trisolaran world would be exposed within the dark forest — and Earth exposed along with it. It was the last and only counterstrike: to perish together with the enemy. To make the decision, she had only some fifteen minutes.</p>
      <p>Time drained away, second by second. She held the switch — the same switch she had so solemnly received before the eyes of countless people. The survival of the whole of human civilization now compressed itself into a single finger, a single thought of hers.</p>
      <div class="section-break">◆ ◆ ◆</div>
      <p>But she could not press it.</p>
      <p>Not from cowardice, but from mercy. In that fate-deciding instant, before her eyes were not abstract coordinates and data, but countless living beings — those of the enemy, and those of her own civilization too. She had spent her whole life cherishing life, and now she was asked to push two worlds into death with her own hand. It was the one thing she could never do. Her finger hovered there, and would not fall.</p>
      <p>And so, in some fifteen minutes, the deterrence collapsed. Trisolaris destroyed the broadcast system, and the sword that had hung above two civilizations for decades crashed down along with her one hesitation, the swing she could not bring herself to make. The gentleness she had cultivated across a lifetime became, in that moment, the catastrophe of all humanity. Love was not wrong, and mercy was not wrong — what was wrong, perhaps, was only the universe itself, which had no room for such tenderness.</p>
      <p class="thought-question">🤔 Reflect: If pressing the button means destroying two worlds, is the one who cannot bring herself to press it a failure — or the last conscience of all humankind?</p>`
    }
  }
});


Object.assign(CHAPTER_CONTENT, {
  5:{
    num:{zh:`第五章`,en:`Chapter Five`},
    title:{zh:`失敗的威懾`,en:`The Failed Deterrence`},
    epigraph:{
      zh:`慈悲按不下按鈕，於是文明跌進深淵。`,
      en:`Mercy could not press the button, and so a civilization fell into the abyss.`
    },
    body:{
      zh:`<p>威懾崩潰只用了短短十幾分鐘。當程心那隻溫柔的手始終沒能落在開關上，兩個世界之間那道以恐懼撐起的平衡，便無聲地瓦解了。她的慈悲曾是人類選她的理由，如今卻成了整個文明最深的災難。</p>
<p>三體幾乎在同一瞬間收緊了對地球的控制。那些曾被威懾壓制的力量重新張開，冷酷、迅速、不容抗辯。人類第一次真切地明白：所謂的和平，原來只是一根手指下的暫緩，而那根手指，剛剛垂了下去。</p>
<div class="section-break">＊ ＊ ＊</div>
<p>入侵者開始執行他們的計畫——把全人類驅趕、圈禁到澳大利亞保留區去。一整個物種，被當作待處置的牲群，被規劃著遷往一塊被劃定的土地。那不是屠殺，卻比屠殺更令人絕望，因為它宣告了人類作為主人的時代徹底結束。</p>
<p>屈辱像潮水一樣漫過每一座城市。人們收拾起僅能帶走的東西，離開世代居住的家園，走向一個陌生而擁擠的圈禁之地。文明的尊嚴，在遷徙的隊列裡一寸寸剝落。</p>
<p>而這一切的源頭，被歸咎於那個下不了手的執劍人。程心背負著全人類的怨恨與自己的懊悔，站在她親手釀成的廢墟前。她救不了任何人，甚至救不了自己免於這無邊的自責。人類文明，就在這片絕望裡沉了下去。</p>
<p class="thought-question">🤔 思考：當一個人的善良足以毀掉整個文明，我們該讚美這份善良，還是該詛咒把它放上開關的那雙手？</p>`,
      en:`<p>The deterrence collapsed in a mere quarter of an hour. When Cheng Xin's gentle hand never came down upon the switch, the balance that fear alone had held aloft between two worlds simply dissolved. Her mercy had been the reason humanity chose her; now that same mercy became the deepest catastrophe her civilization would ever know.</p>
<p>Almost in the same instant, Trisolaris tightened its grip on Earth. The powers that the deterrence had held at bay unfolded again—cold, swift, and beyond appeal. For the first time humankind understood, truly, that its peace had never been more than a reprieve beneath a single finger, and that finger had just fallen.</p>
<div class="section-break">◆ ◆ ◆</div>
<p>The invaders began to carry out their plan—to herd all of humanity into the Australia reservation and pen them there. An entire species, treated like livestock awaiting disposal, was to be relocated onto a marked patch of land. It was not a massacre, yet it was more despairing than one, for it announced that humanity's age as master of its own world had ended completely.</p>
<p>Humiliation washed over every city like a rising tide. People gathered what little they could carry, left the homes of countless generations, and set out toward a strange and crowded place of confinement. In the marching columns, the dignity of a civilization peeled away inch by inch.</p>
<p>And the source of it all was laid at the feet of the Swordholder who could not act. Cheng Xin bore both humanity's resentment and her own remorse, standing before the ruin her own hand had made. She could save no one—not even herself from the boundlessness of her guilt. And so human civilization sank down into that despair.</p>
<p class="thought-question">🤔 Reflect: When one person's kindness is enough to destroy a civilization, should we praise that kindness—or curse the hands that set it upon the switch?</p>`
    }
  },
  6:{
    num:{zh:`第六章`,en:`Chapter Six`},
    title:{zh:`宇宙廣播`,en:`The Broadcast`},
    epigraph:{
      zh:`拯救降臨得毫無溫情——它以與敵人同死的方式，還給人類自由。`,
      en:`Salvation came without tenderness—it bought back humanity's freedom by dying together with the enemy.`
    },
    body:{
      zh:`<p>轉機並不來自地球，而來自遙遠、冰冷的深空。當年逃離太陽系的兩艘人類飛船——萬有引力號與藍色空間號，在絕境的盡頭做出了一個震動全宇宙的決定。</p>
<p>它們向整個宇宙廣播了三體世界的座標。這是那則沉默已久的宇宙廣播、那道黑暗森林廣播——一旦發出，便再也無法收回。刹那間，三體與地球的位置，同時被釘在了黑暗森林那份無形的獵殺名單上。</p>
<div class="section-break">＊ ＊ ＊</div>
<p>對三體人而言，這是最致命的一擊。他們苦心經營、志在必得的太陽系，忽然成了一個被全宇宙標記的死亡座標。留下來，就是與地球一同等待那不知何時、卻必然降臨的清算。</p>
<p>於是三體只能倉皇放棄。他們捨下即將到手的地球，捨下那個他們垂涎已久的家園，匆匆逃離太陽系。曾經不可一世的征服者，如今被同一則廣播趕成了逃亡者。</p>
<p>地球就這樣換回了自由——用一種近乎同歸於盡的方式。人類沒有戰勝任何人，只是與敵人一起被判了死刑，卻在死刑的陰影裡，重新握回了自己星球的主權。這自由裡沒有喜悅，只有一種蒼涼的、劫後餘生的清醒。</p>
<p class="thought-question">🤔 思考：如果自由的代價是與整個世界一起被標記為獵物，你還會覺得那是一場勝利嗎？</p>`,
      en:`<p>The turning point came not from Earth, but from the remote and frozen deep. The two human ships that had fled the solar system years before—Gravity and Blue Space—made, at the very edge of desperation, a decision that shook the whole universe.</p>
<p>They broadcast the coordinates of the Trisolaran world to the entire cosmos. This was the long-silent transmission, the dark forest broadcast—and once sent, it could never be recalled. In an instant, the locations of both Trisolaris and Earth were pinned at once to that invisible kill-list of the dark forest.</p>
<div class="section-break">◆ ◆ ◆</div>
<p>For the Trisolarans, it was the deadliest of blows. The solar system they had labored and schemed to possess had suddenly become a coordinate of death, marked out before all the universe. To remain was to wait, alongside Earth, for a reckoning whose hour was unknown yet whose certainty was not.</p>
<p>And so Trisolaris had no choice but to abandon it all in haste. They gave up the Earth that was nearly in their grasp, gave up the home they had so long coveted, and fled the solar system. The once-invincible conquerors were driven, by the very same broadcast, into becoming fugitives.</p>
<p>Thus did Earth win back its freedom—by a means close to mutual destruction. Humanity had defeated no one; it had merely been sentenced to death together with its enemy, and yet, in the shadow of that sentence, it reclaimed sovereignty over its own world. There was no joy in this freedom, only a desolate, bleak clarity, the lucidity of those who have survived their own catastrophe.</p>
<p class="thought-question">🤔 Reflect: If the price of freedom is to be marked as prey along with the whole world, would you still call it a victory?</p>`
    }
  },
  7:{
    num:{zh:`第七章`,en:`Chapter Seven`},
    title:{zh:`雲天明的童話`,en:`Yun Tianming's Fairy Tales`},
    epigraph:{
      zh:`他把整個文明的生路，藏進三個天真的故事裡。`,
      en:`He hid the survival of an entire civilization inside three innocent tales.`
    },
    body:{
      zh:`<p>被那則廣播標記之後，宇宙的天平悄然改變了。三體終於同意讓一個人與程心會面——那個人，是雲天明。當年他的大腦被送往深空，如今卻活著，活在三體人嚴密的監視之下。</p>
<p>隔著監聽與審查，雲天明無法對程心說出任何一句真話。凡是關乎人類存亡的情報，只要直言，便會被立即扼殺。於是他選擇了一條最迂迴、也最需要信任的路——他講故事。</p>
<div class="section-break">＊ ＊ ＊</div>
<p>他講了三個童話：《王國的新畫師》《饕餮海》《深水王子》。它們聽起來天真、離奇，像是說給孩子的睡前故事，充滿了王國、大海與王子的意象，看不出半點與宇宙戰爭有關的痕跡。</p>
<p>可就在這些天真的表象之下，藏著關乎黑暗森林的、足以決定人類命運的情報。雲天明把它們一層層編織進情節裡，讓監視者看不出破綻，卻等著程心與人類去一點點破解、還原。</p>
<p>這是一個曾默默愛過她的人，用盡最後的智慧，隔著生死與監視，遞給她的禮物。他無法為人類指路，只能把地圖折成童話，塞進她手裡，然後相信她會讀懂。愛與情報，就這樣被縫進了同一組故事。</p>
<p class="thought-question">🤔 思考：當真話會招來死亡，人還能用什麼方式，把最重要的東西安全地交到對方手中？</p>`,
      en:`<p>After that broadcast, the balance of the universe shifted in silence. At last Trisolaris consented to let one person meet with Cheng Xin—and that person was Yun Tianming. His brain had once been sent into the deep; now he lived, and lived beneath the close surveillance of the Trisolarans.</p>
<p>Through the listening and the censorship, Yun Tianming could not speak a single true word to Cheng Xin. Any intelligence bearing on humanity's survival, if spoken plainly, would be strangled at once. So he chose the most roundabout path, the one that asked for the greatest trust—he told stories.</p>
<div class="section-break">◆ ◆ ◆</div>
<p>He told three fairy tales: "The New Royal Painter," "The Devourer's Sea," and "The Deepwater Prince." They sounded innocent and strange, like tales told to a child before sleep, full of kingdoms and seas and princes, with not the faintest trace of any cosmic war about them.</p>
<p>Yet beneath that innocent surface lay intelligence concerning the dark forest—intelligence enough to decide the fate of humankind. Yun Tianming wove it layer upon layer into the plots, leaving the watchers nothing to seize upon, while waiting for Cheng Xin and her people to unravel and restore it, piece by piece.</p>
<p>This was the gift of a man who had once loved her in silence, given with the last of his wisdom, across the gulfs of death and surveillance. He could not point the way for humanity outright; he could only fold the map into fairy tales, press it into her hands, and trust that she would come to read it. Love and intelligence were thus sewn into the same set of stories.</p>
<p class="thought-question">🤔 Reflect: When truth invites death, by what means can a person still place what matters most, safely, into another's hands?</p>`
    }
  },
  8:{
    num:{zh:`第八章`,en:`Chapter Eight`},
    title:{zh:`三條活路`,en:`Three Paths to Survival`},
    epigraph:{
      zh:`童話破譯之後，人類看見了三扇門，每一扇後面都站著代價。`,
      en:`Once the tales were deciphered, humanity saw three doors—and behind each one stood a price.`
    },
    body:{
      zh:`<p>破譯童話花了漫長的時間。人類一遍遍咀嚼那三個看似天真的故事，把王國、大海與王子的意象反覆拆解、比對，終於從中讀出了雲天明真正想說的東西——三條可能的生路。</p>
<p>第一條是掩體計畫。躲到木星那樣的巨行星背後，讓行星龐大的身軀替人類擋下那可能到來的降維打擊。這是一條藏身之路，把希望寄託在陰影裡。</p>
<div class="section-break">＊ ＊ ＊</div>
<p>第二條是黑域。把整個太陽系的光速降下來，讓文明再也無法向外擴張——以此向宇宙宣告：我是無害的，不必費心來消滅我。這是一條自我囚禁之路，用永遠的靜止換取被忽視的安全。</p>
<p>第三條是曲率驅動的光速飛船。乾脆造出能以光速航行的船，載著人類離開這片被標記的太陽系，逃向更遠的星空。這是一條逃亡之路，把希望寄託在未知的遠方。</p>
<p>三條路，各自通向不同的未來，也各自標好了不同的代價：藏身要接受渺小，囚禁要放棄擴張，逃亡要捨下家園。人類站在這三扇門前，第一次為自己的存亡，握住了選擇的權利——儘管每一種選擇，都沉重得幾乎讓人不敢伸手。</p>
<p class="thought-question">🤔 思考：藏身、自囚、逃亡——若這是全人類僅有的三條活路，你會把整個文明押在哪一條上？</p>`,
      en:`<p>Deciphering the tales took a long, long time. Again and again humanity chewed over those three seemingly innocent stories, taking apart and cross-checking the images of kingdom and sea and prince, until at last they read out what Yun Tianming had truly meant to say—three possible paths to survival.</p>
<p>The first was the Bunker Project. To hide behind a giant planet like Jupiter, and let the planet's vast body shield humanity from a dimensional-reduction strike, should one come. It was a path of concealment, one that placed its hope in the shadows.</p>
<div class="section-break">◆ ◆ ◆</div>
<p>The second was the black domain. To lower the speed of light throughout the entire solar system, so that the civilization could never again reach outward—and by this to declare to the universe: I am harmless, spare yourself the trouble of destroying me. It was a path of self-imprisonment, trading eternal stillness for the safety of being overlooked.</p>
<p>The third was the curvature drive, the lightspeed ship. To simply build vessels that could travel at the speed of light, and carry humanity out of this marked solar system, fleeing toward more distant stars. It was a path of flight, one that placed its hope in an unknown far away.</p>
<p>Three paths, each leading toward a different future, and each marked with a different price: to hide was to accept smallness, to imprison oneself was to renounce expansion, to flee was to abandon home. Standing before these three doors, humanity, for the first time, held in its hands the right to choose its own survival—though every choice was so heavy that one could scarcely dare to reach out.</p>
<p class="thought-question">🤔 Reflect: To hide, to cage oneself, or to flee—if these were humanity's only three paths, on which would you stake an entire civilization?</p>`
    }
  }
});


Object.assign(CHAPTER_CONTENT, {
  9:{
    num:{zh:`第九章`,en:`Chapter Nine`},
    title:{zh:`托馬斯‧維德`,en:`Thomas Wade`},
    epigraph:{
      zh:`溫柔換得屈辱，鐵石才能穿越深空。`,
      en:`Tenderness buys only humiliation; only iron crosses the deep.`
    },
    body:{
      zh:`<p>當三條可能的活路攤在人類面前，一個早已被時代冷藏的人重新走進了程心的視野——托馬斯‧維德。他不是那種會為誰的眼淚停下腳步的人。在他眼裡，仁慈是奢侈品，是活著的人才玩得起的遊戲；而人類此刻連活著都成了問題。</p>
      <p>維德只認一件事：結果。三條路裡，他看不上躲在巨行星陰影後的掩體，也不信把太陽系裹進黑域的自囚。他認定，唯一能讓人類真正逃出這片黑暗森林的，是曲率驅動的光速飛船——造出能以光速奔逃的船，把文明的火種帶離這座隨時會被踩滅的太陽系。</p>
      <div class="section-break">＊ ＊ ＊</div>
      <p>他來找程心，是為了要回一樣東西：她親手創立的星環公司。他要用這家公司、用它背後的資源與技術，全力去啃那道近乎不可能的難題。他要程心把手鬆開，把方向交給一個不會心軟的人。</p>
      <p>程心看著他，像看著自己性格的反面。她的一生被慈悲牽引，而維德的一生被目標驅動。他把自己的信條擺在她面前，冷硬得像深空裡的一塊金屬——前進，前進，用一切能用的手段前進，哪怕代價是血，哪怕沾滿了不該沾的東西。對他而言，停下就是死，猶豫就是死，只有不擇手段地向前，才有活著的可能。</p>
      <p>程心終於把星環公司交給了他。她隱約知道，自己交出去的不只是一家公司，而是一個她永遠無法認同、卻又不得不倚仗的意志。人類的最後一線逃亡的希望，就這樣落進了一雙從不顫抖的手裡。</p>
      <p class="thought-question">🤔 思考：當溫柔已被證明會招來災難，我們是否終究得把命運交給一個自己並不喜歡的人？</p>`,
      en:`<p>With three possible roads to survival laid before humankind, a man the age had long shelved stepped back into Cheng Xin's view — Thomas Wade. He was not the sort to halt for anyone's tears. In his eyes mercy was a luxury, a game only the living could afford; and humanity, just then, could no longer be sure it was among the living.</p>
      <p>Wade recognized one thing only: results. Of the three paths, he disdained hiding behind the shadow of the gas giants, and he had no faith in sealing the solar system inside a black domain like a prisoner walling himself in. He was certain that the one road that could truly carry humankind out of this dark forest was the curvature drive — a lightspeed ship, a vessel that could flee at the speed of light and bear the ember of civilization away from a solar system that could be stamped out at any moment.</p>
      <div class="section-break">◆ ◆ ◆</div>
      <p>He came to Cheng Xin to take something back: the Halo Group, the company she had founded with her own hands. He meant to use that company, its resources and its science, to gnaw at a problem that bordered on the impossible. He wanted her to loosen her grip, to hand the helm to a man who would never soften.</p>
      <p>She looked at him as if looking at the opposite of her own nature. Her life had been steered by compassion; his had been driven by purpose. He set his creed before her, cold and hard as a bar of metal adrift in the void — advance, advance, advance by any means, though the cost be blood, though the hands come away stained with what should never have been touched. For him, to stop was to die, to hesitate was to die, and only the unscrupulous will to press forward held any chance of life.</p>
      <p>In the end she gave him the Halo Group. She sensed, dimly, that what she surrendered was not merely a company but a will she could never approve of and yet could not do without. Humankind's last thread of hope for flight had fallen into a pair of hands that never trembled.</p>
      <p class="thought-question">🤔 Reflect: When tenderness has been proven to invite catastrophe, must we in the end hand our fate to someone we do not even like?</p>`
    }
  },
  10:{
    num:{zh:`第十章`,en:`Chapter Ten`},
    title:{zh:`不擇手段地前進`,en:`Advance at Any Cost`},
    epigraph:{
      zh:`一扇門在猶豫中關上，關門的手，是最溫柔的那雙。`,
      en:`A door closes in a moment of hesitation — and the hand that shuts it is the gentlest of all.`
    },
    body:{
      zh:`<p>維德接手後，星環公司像一台不知疲倦的機器，全速朝著光速飛船的方向碾去。曲率驅動的研究，觸碰到了世界不允許被觸碰的禁區——因為那意味著少數人可能拋下所有人先逃走，意味著特權、分裂與失控。人類文明對這條逃生通道，懷著深深的恐懼。</p>
      <p>禁令與抗命撞在一起，火花很快變成了實實在在的武力對峙。維德不退。對他來說，攔在前面的一切都只是待清除的障礙，哪怕流血，哪怕與整個世界為敵。他要的只是把船造出來，其餘皆可犧牲。</p>
      <div class="section-break">＊ ＊ ＊</div>
      <p>於是，選擇又一次落回程心手裡。她可以放手，讓維德以他慣有的方式流著血向前，也許真能為人類撞開一條逃向星海的縫；她也可以收回控制權，讓對峙平息，讓無辜者不必為這條路付出性命。</p>
      <p>她再一次選擇了不流血。她的慈悲又一次佔了上風——她叫停了維德，叫停了那台朝著自由狂奔的機器。光速飛船的研究就此被判為非法，戛然中止。人類，用自己的手，關上了那扇通向逃亡的門。</p>
      <p>維德沒有咆哮，只是那句一生的信條，在這一刻顯得格外像一則被辜負的預言——不擇手段地前進，可當握著權柄的手不肯不擇手段，前進便成了空話。程心救下了眼前的人，卻可能放棄了未來所有的人。這一次的溫柔，將在很久以後，以整個太陽系的重量，回到她身上。</p>
      <p class="thought-question">🤔 思考：救下眼前看得見的血，與賭上未來看不見的萬千生命——這道題，真的有正確答案嗎？</p>`,
      en:`<p>Once Wade took over, the Halo Group ran like a tireless machine, grinding at full speed toward the lightspeed ship. The curvature-drive research reached into a zone the world forbade anyone to touch — because it meant a favored few might flee first and abandon everyone else, meant privilege, schism, a slipping of all control. Toward this escape route, human civilization harbored a deep and instinctive dread.</p>
      <p>Prohibition and defiance collided, and the sparks soon hardened into an armed standoff. Wade would not yield. To him, everything barring the way was merely an obstacle to be cleared — though it cost blood, though it set him against the whole world. He wanted only to build the ship; all else could be sacrificed.</p>
      <div class="section-break">◆ ◆ ◆</div>
      <p>And so the choice fell back, once more, into Cheng Xin's hands. She could let go, let Wade press forward bleeding in his customary way, and perhaps truly batter open a crack toward the sea of stars for humankind; or she could take back control, let the standoff subside, spare the innocent from paying with their lives for this road.</p>
      <p>Again she chose no blood. Her compassion prevailed once more — she halted Wade, halted the machine racing toward freedom. The lightspeed-ship research was declared illegal and cut short in an instant. Humankind, with its own hands, closed the door that led to escape.</p>
      <p>Wade did not rage. Only his lifelong creed, in that moment, sounded strangely like a betrayed prophecy — advance at any cost; yet when the hand that holds the power refuses the cost, advance becomes an empty word. Cheng Xin saved the people before her eyes, and may have forsaken all the people of the future. This tenderness would return to her, long afterward, bearing the full weight of a solar system.</p>
      <p class="thought-question">🤔 Reflect: To save the blood you can see now, or to gamble on the countless unseen lives of the future — does this question truly have a right answer?</p>`
    }
  },
  11:{
    num:{zh:`第十一章`,en:`Chapter Eleven`},
    title:{zh:`掩體紀元`,en:`The Bunker Era`},
    epigraph:{
      zh:`把身體藏進巨人的影子裡，卻忘了影子本身也在星光下。`,
      en:`They hid in the giant's shadow, forgetting the shadow, too, stood beneath the stars.`
    },
    body:{
      zh:`<p>逃亡的門既已關上，人類把全部的希望，押在了唯一還被允許的活路上——掩體計畫。既然造不成船，那就躲。躲到那些不會說話的龐然大物身後，用行星的軀體，替脆弱的文明擋下宇宙那致命的一擊。</p>
      <p>於是一場浩大的遷徙展開。城市與人口，被一座座搬向木星等巨行星的背陰面，安放在那些氣態巨獸的陰影裡。人類仰望著頭頂那顆佔滿半邊天的行星，心裡生出一種久違的踏實——彷彿只要躲在這樣一個龐然大物身後，任何來自深空的災難，都會先撞在它身上，而不是自己身上。</p>
      <div class="section-break">＊ ＊ ＊</div>
      <p>掩體紀元，就這樣在一種虛假的安全感裡緩緩鋪展。人類重新建起了家園，重新過起了有秩序、有希望的日子。巨行星的陰影成了心理上的堡壘，人們相信自己終於找到了一個藏身之所，一個能讓文明喘息、繁衍、延續下去的角落。</p>
      <p>可宇宙從不曾許諾任何藏身之所是安全的。人類算計著行星的軀體能擋下什麼，卻從未真正弄懂，那些高懸在黑暗森林裡的目光，手中握著的究竟是何等的東西。他們為一場自己想像中的攻擊，築起了一座恰到好處的堡壘；而真正將要降臨的，是一種他們的想像力根本觸及不到的毀滅。</p>
      <p>陰影之下，燈火通明，一切看似安穩。人類就在這份自以為周全的安全裡，度過了掩體紀元漫長而寧靜的時光，渾然不覺頭頂的星空，早已在別處，替他們寫好了結局。</p>
      <p class="thought-question">🤔 思考：我們為想像中的危險精心設防，可真正毀掉我們的，往往是那種我們連想都想不到的東西——這樣的安全感，究竟保護了誰？</p>`,
      en:`<p>The door to flight having closed, humankind staked all its hope on the one road still permitted — the Bunker Project. If no ship could be built, then hide. Hide behind those speechless colossi, and use the bodies of planets to shield a fragile civilization from the killing blow of the cosmos.</p>
      <p>So a vast migration began. Cities and populations were moved, one by one, to the far side of Jupiter and the other gas giants, settled into the shadows of those gaseous beasts. Humankind gazed up at a planet that filled half the sky, and felt a long-lost sense of solidity — as if, so long as one crouched behind so immense a thing, any disaster out of the deep would strike it first, and not oneself.</p>
      <div class="section-break">◆ ◆ ◆</div>
      <p>The Bunker Era unfurled, slowly, inside a false sense of safety. Humankind rebuilt its homes, resumed a life of order and hope. The shadow of the gas giants became a psychological fortress, and people believed they had at last found a place to hide — a corner where civilization could catch its breath, multiply, and endure.</p>
      <p>But the universe had never promised that any hiding place was safe. Humankind reckoned what a planet's body could block, yet never truly grasped what those eyes hanging high in the dark forest held in their hands. They raised a perfectly fitted fortress against an attack of their own imagining; while what was truly coming was an annihilation their imagination could not even reach.</p>
      <p>Beneath the shadow the lights burned bright, and all seemed secure. And so, wrapped in a safety they believed complete, humankind passed the long and tranquil years of the Bunker Era — never sensing that the starry sky overhead had already, somewhere far off, written their ending for them.</p>
      <p class="thought-question">🤔 Reflect: We fortify meticulously against the dangers we can picture, yet what truly destroys us is so often the thing we could never conceive — whom, then, does such a sense of safety actually protect?</p>`
    }
  },
  12:{
    num:{zh:`第十二章`,en:`Chapter Twelve`},
    title:{zh:`歌者`,en:`The Singer`},
    epigraph:{
      zh:`在星海的另一岸，抹去一個世界，不比拂去衣上的一粒塵更費心。`,
      en:`On the far shore of the star-sea, erasing a world costs less thought than brushing a speck from one's sleeve.`
    },
    body:{
      zh:`<p>在宇宙的另一端，遠得無法用人類的尺度去丈量的地方，有一個存在，隨手注意到了一件小事：某個角落，有一顆恆星系的座標，暴露了出來。這個存在，是那片星海裡一名尋常的清理員——歌者。</p>
      <p>對歌者而言，這樣的暴露太稀鬆平常了。宇宙這座黑暗森林裡，時時有幼小的文明不慎點亮自己，把位置洩露給所有藏在暗處的獵手。清理它們，是日常，是勞作，是一件甚至不值得多想一秒的事。他不恨這些文明，不好奇它們，也不憐憫它們——消滅一個低等文明，在他那裡，只是舉手之勞，就像順手熄滅一盞礙眼的燈，動作裡沒有半分情感，也沒有半分猶豫。</p>
      <div class="section-break">＊ ＊ ＊</div>
      <p>他本可以像對付無數同類那樣，向那片星系投出一枚光粒，用一次微不足道的撞擊了結一切。可歌者多看了一眼。他察覺到，那個小文明似乎有某種盤算——一種他一眼便看穿的、可笑而徒勞的自保之計。它們把自己藏進了行星的背後，以為那樣就能躲過打擊。歌者認出了這種東西：一個盲點，一個以為自己找到了破綻的、天真的盲點。</p>
      <p>正因為看穿了這個盲點，歌者改變了主意。光粒對付這樣的躲藏還不夠徹底。他要用一件更乾淨、更不留餘地的武器，一件能連同它們的藏身之所一起、把整個維度都抹平的東西。這個決定，做得平靜、隨意，像是在兩件同樣廉價的工具之間，順手挑了更順手的那一件。</p>
      <p>而在星系的這一端，被判了死刑的人類，對此一無所知。沒有宣戰，沒有仇恨，沒有一句解釋。毀滅他們的，與他們做過什麼、想過什麼、愛過什麼，全然無關。一個文明的終結，在宇宙的尺度上，輕得連一聲嘆息都不配擁有——毀滅你，與你何干。</p>
      <p class="thought-question">🤔 思考：當毀滅來自純然的冷漠，而非仇恨——沒有敵意可以化解，沒有理由可以申辯，那份宇宙級的無關緊要，才是最深的恐怖嗎？</p>`,
      en:`<p>At the other end of the universe, in a place too far to measure by any human scale, there was a being who idly noticed a small thing: in some corner, the coordinates of a star system had been exposed. This being was an ordinary cleanser of that star-sea — the Singer.</p>
      <p>To the Singer, such an exposure was utterly commonplace. In this dark forest of a cosmos, small civilizations were forever lighting themselves up by accident, leaking their positions to every hunter crouched in the dark. Clearing them away was routine, labor, a thing not even worth a second's thought. He did not hate these civilizations, was not curious about them, did not pity them — to wipe out a lesser civilization was, to him, the work of a moment, like snuffing out a lamp that happened to be in the way, a motion holding not a trace of feeling, nor a trace of hesitation.</p>
      <div class="section-break">◆ ◆ ◆</div>
      <p>He might have done as he had to countless of their kind, casting a photoid at that system, ending everything with one trivial impact. But the Singer looked a moment longer. He perceived that this small civilization seemed to be scheming something — a laughable, futile little plan for self-preservation that he saw through at a glance. They had hidden themselves behind their planets, believing that would let them dodge the blow. The Singer recognized this thing: a blind spot, a naive blind spot in a people who thought they had found a loophole.</p>
      <p>And precisely because he saw through this blind spot, the Singer changed his mind. A photoid was not thorough enough against such hiding. He would use a cleaner weapon, one that left no remainder — a thing that would flatten the whole dimension along with their hiding place. The decision was made calmly, casually, as if reaching between two equally cheap tools and picking, without a thought, the handier one.</p>
      <p>And at this end of the star system, the condemned of humankind knew nothing of it. No declaration of war, no hatred, not a single word of explanation. What was about to destroy them had nothing to do with anything they had done, thought, or loved. The end of a civilization, on the scale of the cosmos, weighed so little it did not even merit a sigh — I destroy you, and it is no concern of yours.</p>
      <p class="thought-question">🤔 Reflect: When destruction comes from pure indifference rather than hatred — with no enmity to defuse and no reason to plead against — is that cosmic irrelevance the deepest terror of all?</p>`
    }
  }
});


Object.assign(CHAPTER_CONTENT, {
  13:{
    num:{zh:`第十三章`,en:`Chapter Thirteen`},
    title:{zh:`二向箔`,en:`The Dual-Vector Foil`},
    epigraph:{
      zh:`最徹底的毀滅，不是烈焰，而是把你收進一幅安靜的畫裡。`,
      en:`The most complete annihilation is not fire, but being folded into a silent painting.`
    },
    body:{
      zh:`<p>歌者伸出的，不過是一片薄得幾乎不存在的東西。它小如一枚紙片，卻攜帶著改寫空間本身的規則。它被拋向太陽系，不帶恨意，也不帶任何重量，像一個過路的清理者隨手丟下的一顆種子。</p>
<p>它落定之後，三維的空間開始朝二維坍縮。這是傳說中的降維打擊——不是把物體炸開，而是抽走了它們賴以存在的一個維度。從坍縮的邊緣望去，一切都被緩緩地、不可抗拒地攤平，像水墨在宣紙上無聲地暈染開來。</p>
<div class="section-break">＊ ＊ ＊</div>
<p>行星一顆接一顆跌入那張越攤越大的平面。它們沒有爆炸，沒有哀鳴，只是把自己所有的厚度、所有的立體、所有藏在深處的秘密，全部鋪展成一幅精細到極致的圖案。山脈成了線條，海洋成了色塊，億萬年的地質與生命史，被壓縮進一層沒有厚度的絢麗裡。</p>
<p>太陽最後跌了進去。它把光與熱一併交出，化作畫布上一團燦爛而冰冷的金黃。整個太陽系——連同它的軌道、它的塵埃、它承載過的一切文明記憶——變成了一幅絕美的畫。美得令人窒息，也死寂得令人心碎。</p>
<p>沒有硝煙，沒有廝殺。文明的終結，竟以近乎詩意的方式降臨。這幅畫將永遠懸掛在宇宙的某個角落，無人再能走進其中，也無人再能從中走出。</p>
<p class="thought-question">🤔 思考：當毀滅來得如此優雅、如此不帶惡意時，它是否比暴力更令人絕望？</p>`,
      en:`<p>What the Singer released was little more than a sliver so thin it barely existed. Small as a scrap of paper, it carried within it the power to rewrite the rules of space itself. It drifted toward the solar system without malice and without weight — a seed casually dropped by a passing custodian of the cosmos.</p>
<p>Once it settled, three-dimensional space began to collapse into two. This was the fabled dimensional-reduction strike — not an explosion, but the theft of a dimension on which all things depended to exist. From the collapsing edge, everything was slowly, irresistibly flattened, like ink bleeding soundlessly across rice paper.</p>
<div class="section-break">◆ ◆ ◆</div>
<p>One by one the planets tumbled into that ever-widening plane. They did not burst, did not wail; they simply spread out their every thickness, their every depth, their every hidden secret, into an image of exquisite, unbearable detail. Mountains became lines. Oceans became fields of color. Billions of years of geology and life were pressed into a single dazzling layer with no thickness at all.</p>
<p>The Sun fell in last. It surrendered its light and heat together, dissolving into a brilliant, frigid patch of gold upon the canvas. The whole solar system — its orbits, its dust, every memory of civilization it had ever cradled — became a painting of terrible beauty. So beautiful it stopped the breath; so lifeless it broke the heart.</p>
<p>No smoke, no slaughter. The end of a civilization arrived in a manner almost like poetry. This painting would hang forever in some corner of the universe, and none could ever step into it again, nor step back out.</p>
<p class="thought-question">🤔 Reflect: When destruction comes so elegantly, so free of malice, is it not more despairing than any violence?</p>`
    }
  },
  14:{
    num:{zh:`第十四章`,en:`Chapter Fourteen`},
    title:{zh:`逃向星空`,en:`Flight to the Stars`},
    epigraph:{
      zh:`她在光的距離之外，回望自己整個世界被壓成一幅畫。`,
      en:`Beyond the reach of light, she looked back as her entire world was pressed into a painting.`
    },
    body:{
      zh:`<p>降維降臨的那一刻，程心與摯友艾AA登上了星環號——人類手中唯一一艘曲率光速飛船。這艘船本不該存在：它是那些被叫停、被判為非法的夢想，僥倖留下的最後一線火種。此刻，它成了兩個人衝出死亡陰影的唯一憑藉。</p>
<p>星環號以曲率驅動撕開空間，向著深空狂奔。她們的目的地，是雲天明多年前送給程心的那顆遙遠恆星，DX3906。那是一份沉默而深情的禮物——當年一個身患絕症的男子，用盡積蓄，只為在浩瀚宇宙裡替她標下一點光。</p>
<div class="section-break">＊ ＊ ＊</div>
<p>逃離之後，她們在安全的距離外停下，回望來處。那是無法承受的一幕：她們親眼看著自己的太陽系，連同故鄉、連同所有未及逃離的人，被緩緩壓進那幅冰冷絢爛的平面。她們的整個世界，就這樣成了一幅畫。</p>
<p>沒有聲音能穿越那段距離。沒有告別，沒有挽留。程心只能沉默地看著，看著人類文明最後的厚度被抽走，看著億萬人與億萬年的故事，凝固成她永遠讀不完、也永遠回不去的一頁。</p>
<p>飛船繼續前行，終於抵達那顆屬於她的恆星。在那裡，在雲天明的禮物之光下，她們遇見了物理學家關一帆——另一個從毀滅中倖存的漂流者。星空之下，倖存者與倖存者相認，人類最後的幾點餘燼，短暫地聚在了一起。</p>
<p class="thought-question">🤔 思考：當整個世界在你身後化為一幅畫，活下來究竟是幸運，還是最沉重的懲罰？</p>`,
      en:`<p>In the moment dimensional collapse arrived, Cheng Xin and her dear friend AA boarded the Halo — the one curvature lightspeed ship left to humankind. By rights this ship should not have existed: it was the last spark salvaged from dreams that had been halted and outlawed. Now it became the only means by which two people might race out from under the shadow of death.</p>
<p>The Halo tore open space with its curvature drive and fled into the deep. Their destination was a distant star Yun Tianming had given Cheng Xin years before — DX3906. It was a silent, tender gift: once, a man dying of illness had spent all he had simply to claim for her a single point of light in the vastness.</p>
<div class="section-break">◆ ◆ ◆</div>
<p>Having escaped, they halted at a safe distance and looked back. It was an unbearable sight: they watched with their own eyes as their solar system — with their home, with everyone who had not fled in time — was slowly pressed into that cold and dazzling plane. Their entire world became a painting.</p>
<p>No sound could cross that distance. No farewell, no plea. Cheng Xin could only watch in silence as the last thickness of human civilization was drawn away, as the stories of billions of people and billions of years froze into a single page she could never finish reading and never return to.</p>
<p>The ship pressed onward and at last reached the star that was hers. There, beneath the light of Yun Tianming's gift, they met the physicist Guan Yifan — another drifter who had survived the ruin. Under the stars, survivor recognized survivor, and the last few embers of humanity gathered briefly together.</p>
<p class="thought-question">🤔 Reflect: When the whole world turns to a painting behind you, is surviving a stroke of luck — or the heaviest punishment of all?</p>`
    }
  },
  15:{
    num:{zh:`第十五章`,en:`Chapter Fifteen`},
    title:{zh:`小宇宙`,en:`The Mini-Universe`},
    epigraph:{
      zh:`他們造了一個口袋，想在整個宇宙死去時躲在裡面。`,
      en:`They built a pocket, hoping to hide inside it while the whole universe died.`
    },
    body:{
      zh:`<p>在星空的盡頭，程心與關一帆最終走進了雲天明留給他們的最後一份饋贈——編號647的小宇宙。這是一個由三體世界製造的口袋世界，一個獨立於大宇宙之外、自成一體的微小空間。在這裡，時間與空間都聽從另一套規則。</p>
<p>647號小宇宙容納著他們微薄的家當，也容納著他們微薄的希望。它像一葉封閉的方舟，漂浮在大宇宙的邊緣之外，不受降維的侵擾，不受黑暗森林的獵殺。在這一方小小的安寧裡，倖存者終於可以喘息。</p>
<div class="section-break">＊ ＊ ＊</div>
<p>他們的計畫近乎瘋狂，卻也是唯一的一線生機：躲在這個小宇宙裡，讓整個大宇宙在外面走完它的命運。他們要熬過那場終極的大坍縮——當所有星系、所有物質、所有時間都向著一點回落、崩塌、歸零。</p>
<p>然後，在坍縮的盡頭，一個重生的新宇宙將從灰燼中誕生。他們打算等到那一刻，等到舊宇宙死盡、新宇宙初開，再從647號走出去，成為新世界最初的訪客。這是一個以整個宇宙的死亡為背景的、渺小而執拗的等待。</p>
<p>小宇宙的門在他們身後關上。外面，是無邊的黑暗與緩慢的終結；裡面，是一點燈火、幾個倖存者，和一個關於重生的、幾乎不敢說出口的夢。</p>
<p class="thought-question">🤔 思考：若要熬過整個宇宙的死亡才能等到新生，你願意付出多深的孤獨去守候那一線希望？</p>`,
      en:`<p>At the far end of the stars, Cheng Xin and Guan Yifan at last entered the final gift Yun Tianming had left them — the mini-universe designated No. 647. It was a pocket world made by the Trisolaran civilization, a tiny space complete in itself and set apart from the great universe. Here, time and space obeyed another set of rules.</p>
<p>Mini-universe No. 647 held their meager possessions and their meager hope. Like a sealed ark, it floated beyond the edge of the great universe, untouched by dimensional collapse, unhunted by the dark forest. In this small measure of peace, the survivors could at last draw breath.</p>
<div class="section-break">◆ ◆ ◆</div>
<p>Their plan bordered on madness, yet it was their one thread of life: to hide within this mini-universe and let the whole great universe run out its fate beyond the walls. They meant to outlast the ultimate ending — the great collapse, when every galaxy, all matter, all of time would fall back toward a single point, crumble, and return to nothing.</p>
<p>And then, at the far side of that collapse, a reborn new universe would rise from the ashes. They intended to wait for that moment — for the old universe to die out and the new one to open — and only then step forth from No. 647 to become the first visitors of a new world. It was a tiny, stubborn vigil set against the backdrop of the death of everything.</p>
<p>The door of the mini-universe closed behind them. Outside lay boundless darkness and a slow ending; inside were a single flame, a handful of survivors, and a dream of rebirth almost too fragile to speak aloud.</p>
<p class="thought-question">🤔 Reflect: If you must outlast the death of the entire universe to reach its rebirth, how deep a loneliness would you pay to keep that one thread of hope?</p>`
    }
  },
  16:{
    num:{zh:`第十六章`,en:`Chapter Sixteen`},
    title:{zh:`死神永生`,en:`Death's End`},
    epigraph:{
      zh:`把質量還回去，讓宇宙有機會再一次誕生。`,
      en:`Return the mass, so the universe might have the chance to be born once more.`
    },
    body:{
      zh:`<p>然而在小宇宙的寧靜裡，一個更大的真相緩緩浮現。整個大宇宙正在死去——不是自然的老去，而是被無數文明的降維戰爭一刀刀削薄。維度被一次次降低，光速被一次次拉下，宇宙早已不是最初那個豐盈、飽滿、生機勃勃的模樣。</p>
<p>更致命的是：大量的物質，被一個個文明鎖進了像647這樣的小宇宙裡，藏起來、私藏起來，當作各自的避難所。宇宙因此缺失了太多質量，再也無法完成那場終極的大坍縮。沒有坍縮，就沒有重生——宇宙將永遠地、緩慢地、無可挽回地走向冷寂。</p>
<div class="section-break">＊ ＊ ＊</div>
<p>於是一則呼籲穿越了所有的小宇宙，向所有躲藏的倖存者傳來：請歸還你們藏起的質量，讓大宇宙湊足重量，好讓它能夠坍縮，好讓它能夠重新誕生。這是一個懇求，而非命令——每一個口袋世界的持有者，都握著整個宇宙命運的一小份。</p>
<p>程心站在了最後的抉擇前。歸還647的質量，意味著放棄他們親手守護的避難所，放棄那個熬到新宇宙的夢，把自己重新交還給不確定與危險。可是若人人都私藏，宇宙便再無重生之日。她想起了那句被歲月磨亮的話——弱小與無知從來不是生存的障礙，真正的障礙，是傲慢；是自以為可以獨占一片天地、獨活於萬物之死的那份傲慢。</p>
<p>她選擇了歸還。她把647的質量交還給大宇宙，親手關上了自己最後的退路，只留下一小點紀念，讓一個微小的世界得以延續。這是一個渺小者對整個宇宙的悲憫，也是一次以放棄換取新生的、近乎神性的溫柔。</p>
<p>死神永生——因為降維與坍縮，毀滅將永遠伴隨著存在。然而在毀滅的盡頭，重生也許同樣永生。當足夠多的手鬆開了各自的私藏，大宇宙終將湊齊重量，向那一點回落，在崩塌的最深處，孕育出一個嶄新的、重生的宇宙。傲慢者藏起質量，讓萬物同歸冷寂；謙卑者交還質量，讓萬物得以再次誕生。程心的悲憫，成了留給下一個宇宙的第一縷微光。</p>
<p class="thought-question">🤔 思考：若交還你僅有的避難所，才能給整個宇宙一次重生的機會，你放得下那份「獨活」的傲慢嗎？</p>`,
      en:`<p>Yet within the quiet of the mini-universe, a greater truth slowly surfaced. The great universe was dying — not aging naturally, but pared thin, cut by cut, by the dimensional wars of countless civilizations. Dimensions had been lowered again and again, the speed of light dragged down again and again; the cosmos was no longer the rich, full, teeming thing it had been at the first.</p>
<p>Worse still: vast amounts of matter had been locked away by one civilization after another into mini-universes like No. 647 — hidden, hoarded, kept as private refuges. So much mass had gone missing that the universe could no longer complete its ultimate great collapse. And without collapse, there could be no rebirth — the universe would drift forever, slowly, irretrievably, toward cold silence.</p>
<div class="section-break">◆ ◆ ◆</div>
<p>And so a plea passed through all the mini-universes, reaching every hidden survivor: return the mass you have taken, so the great universe may recover its weight, so it may collapse, so it may be born anew. It was an entreaty, not a command — each holder of a pocket world held one small share of the fate of everything.</p>
<p>Cheng Xin stood before the final choice. To return the mass of No. 647 meant giving up the refuge they had guarded with their own hands, abandoning the dream of outlasting all things into a new universe, surrendering herself once more to uncertainty and danger. But if all hoarded, the universe would never be reborn. She remembered the line the years had polished bright — that weakness and ignorance were never the barriers to survival; the true barrier was arrogance, the arrogance of believing one may seize a corner of creation and live on alone amid the death of all.</p>
<p>She chose to return it. She gave the mass of No. 647 back to the great universe, closing with her own hands her last way out, keeping only a small token so that one tiny world might endure. It was a small being's compassion toward the whole of the cosmos, and a near-divine tenderness that traded surrender for the chance of new life.</p>
<p>Death's end — for through dimensional collapse and the great collapse, destruction will forever walk beside existence. And yet at the far side of destruction, rebirth too may be undying. When enough hands loosen their hoarded shares, the great universe will at last regain its weight, fall back toward that single point, and in the deepest heart of its collapse conceive a new and reborn universe. The arrogant hide their mass and let all things sink into cold silence; the humble return it and let all things be born again. Cheng Xin's compassion became the first faint light left to the universe yet to come.</p>
<p class="thought-question">🤔 Reflect: If returning your only refuge were the price of giving the whole universe one chance at rebirth, could you set down the arrogance of living on alone?</p>`
    }
  }
});

