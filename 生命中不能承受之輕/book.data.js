// ============================================================
//  生命中不能承受之輕（The Unbearable Lightness of Being）· 沉浸式閱讀資料（中英雙語）
//  作者米蘭·昆德拉 2023 年逝世，仍在著作權保護期內：
//  各部正文為原創之情節與思辨重述（非原著文字）；金句為極短引用附出處與評析。
// ============================================================

const BOOK = {
  slug: 'lightness',
  langs: ['zh', 'en'],
  title: { zh: '生命中不能承受之輕', en: 'The Unbearable Lightness of Being' },
  author: 'Milan Kundera',
  theme: {
    'bg-primary': '#191b20', 'bg-secondary': '#202329', 'bg-card': '#272a31', 'bg-elevated': '#30343d',
    'text-primary': '#e5e2da', 'text-secondary': '#aeaaa0', 'text-muted': '#7e7b72',
    'accent': '#c2ad7e', 'accent-light': '#e0d0a4', 'accent-glow': 'rgba(194,173,126,0.26)',
    'rose': '#b5727a', 'jade': '#7d9488', 'blue': '#6d88a8', 'gold': '#c2ad7e',
    'border': 'rgba(194,173,126,0.16)',
    atmosphere: { fall: 14, streak: 0, fallRadius: '50%' },
    dayMode: { 'bg-primary': '#eeece4', 'bg-secondary': '#e5e2d7', 'bg-card': '#faf8f2', 'bg-elevated': '#f2efe6', 'text-primary': '#2c2a22', 'text-secondary': '#514c40', 'text-muted': '#847c6e', 'border': 'rgba(150,125,80,0.22)' }
  },
  cover: {
    seal: '輕',
    subtitle: { zh: 'The Unbearable Lightness of Being', en: '生 命 中 不 能 承 受 之 輕' },
    desc: {
      zh: '如果生命只有一次，既不能預演，也無法重來，<br>那麼它究竟是輕，還是重？<br>在 1968 年布拉格的坦克陰影下，四個人用愛與背叛，<br>各自回答了這個沒有答案的問題。',
      en: 'If life happens only once — no rehearsal, no second take —<br>is it light, or is it heavy?<br>Under the shadow of the 1968 tanks in Prague, four people answer that unanswerable question, each through love and betrayal.'
    }
  },
  musicPrompt: { zh: '在輕與重之間，緩緩落下——<br>是否播放一段背景音樂？', en: 'Drifting down, between lightness and weight —<br>play some background music?' },
  intro: {
    subtitle: { zh: '在閱讀之前，先了解這部小說的來龍去脈', en: 'Get your bearings before you enter the novel' },
    author: {
      name: { zh: '米蘭·昆德拉　Milan Kundera', en: 'Milan Kundera' }, portrait: '昆',
      years: { zh: '1929 — 2023 · 生於捷克布爾諾，歿於巴黎', en: '1929 — 2023 · born in Brno, died in Paris' },
      bio: {
        zh: '捷克裔法籍小說家。曾親歷布拉格之春與其後的清算，1975 年流亡法國，作品長期在故國遭禁。他的小說融合敘事、哲學思辨與音樂性的結構，反覆叩問存在、記憶、媚俗與遺忘。《生命中不能承受之輕》（1984）是他最著名的作品，以七部樂章式的結構，把一則愛情故事寫成了一場關於「輕與重」的哲學沉思。',
        en: 'A Czech-French novelist. He lived through the Prague Spring and the crackdown that followed, went into exile in France in 1975, and saw his work long banned at home. His novels fuse narrative, philosophical meditation, and a musical structure, probing existence, memory, kitsch, and forgetting. "The Unbearable Lightness of Being" (1984) is his best-known work: in seven movement-like parts, it turns a love story into a meditation on lightness and weight.'
      }
    },
    cards: [
      { icon: '🪶', title: { zh: '一句話核心', en: 'The core, in one line' }, text: { zh: '尼采說時間永劫回歸，一切無限重複，因而沉重無比；但人生其實只有一次（einmal ist keinmal，一次即從未），輕盈得近乎虛無——而這種輕，反而令人不能承受。', en: 'Nietzsche imagined eternal return, in which everything repeats forever and is unbearably heavy. But life happens only once (einmal ist keinmal — once is never), light to the point of nothingness — and it is that lightness we cannot bear.' } },
      { icon: '🎼', title: { zh: '樂章式結構', en: 'A structure like music' }, text: { zh: '全書七部，像一首交響曲的七個樂章：輕與重、靈與肉、誤解的詞、靈與肉、輕與重、偉大的進軍、卡列寧的微笑。主題反覆出現、變奏、交織，而非直線敘事。', en: 'Seven parts, like the seven movements of a symphony: Lightness and Weight, Soul and Body, Words Misunderstood, Soul and Body, Lightness and Weight, The Grand March, Karenin\'s Smile. Themes recur, vary, and interweave rather than run in a straight line.' } },
      { icon: '🏙️', title: { zh: '時代舞台', en: 'The setting' }, text: { zh: '背景是 1968 年蘇聯坦克輾過的布拉格與其後的流亡與清算。政治不是配角，而是壓在每個人身上的「重」——連最私密的愛情也無處可逃。', en: 'Prague under the Soviet tanks of 1968, and the exile and purges that followed. Politics is no backdrop but a weight pressing on everyone — even the most private love has nowhere to hide.' } },
      { icon: '🎯', title: { zh: '閱讀建議', en: 'How to read it' }, text: { zh: '別把它當純愛情小說讀。留意昆德拉如何用托馬斯、特麗莎、薩賓娜、弗蘭茨四個人，各自演繹「輕」與「重」；並注意反覆出現的關鍵詞：媚俗、背叛、非如此不可。', en: 'Do not read it as a mere romance. Watch how Kundera uses Tomas, Tereza, Sabina, and Franz to enact lightness and weight; and track the recurring keywords: kitsch, betrayal, "Es muss sein."' } }
    ],
    guide: [
      { h: { zh: '先分清「輕」與「重」', en: 'Sort the light from the heavy' }, p: { zh: '到「人物譜」看四位主角如何分屬輕重兩極：托馬斯與薩賓娜逐輕，特麗莎與弗蘭茨負重。這條軸線貫穿全書。', en: 'In the Cast, see how the four leads split into two poles: Tomas and Sabina chase lightness, Tereza and Franz bear weight. This axis runs through the whole book.' } },
      { h: { zh: '對照時代軸閱讀', en: 'Read against the timeline' }, p: { zh: '打開「時代軸」，把私人的愛情放回 1968 布拉格之春與蘇聯入侵的歷史，理解政治如何成為壓在愛情上的重量。', en: 'Open the Timeline and set the private love story against the 1968 Prague Spring and Soviet invasion — see how politics becomes a weight on love.' } },
      { h: { zh: '把它當交響曲聽', en: 'Hear it as a symphony' }, p: { zh: '七部不是線性劇情，而是主題的反覆變奏。逐部閱讀時，留意「輕、重、靈、肉、媚俗、背叛」如何一再回返、換一個角度重演。', en: 'The seven parts are not a linear plot but variations on themes. As you read, notice how lightness, weight, soul, body, kitsch, and betrayal keep returning from new angles.' } },
      { h: { zh: '追蹤關鍵詞', en: 'Track the keywords' }, p: { zh: '「非如此不可」（Es muss sein）、「媚俗」（Kitsch）、「背叛」是三把鑰匙。到「主題」模組看它們如何串起整本書的思辨。', en: '"Es muss sein" (it must be), "kitsch," and "betrayal" are three keys. Use the Themes to see how they tie the book\'s ideas together.' } },
      { h: { zh: '在思考題中對話', en: 'Answer back in the prompts' }, p: { zh: '這本書不給答案，只給更好的問題。在「思考題」與「札記」裡，試著回答昆德拉丟給你的：你要選擇輕，還是重？', en: 'The book gives no answers, only better questions. In the Reflection prompts and Notes, try to answer the one Kundera throws at you: will you choose lightness, or weight?' } }
    ]
  },
  timelineSubtitle: { zh: '在時代的洪流中，看一段愛情如何被歷史碾過', en: 'A love story, set against the history that ran it over' },
  families: [ { id: 'light', label: { zh: '輕 · Lightness', en: 'Lightness' } }, { id: 'weight', label: { zh: '重 · Weight', en: 'Weight' } }, { id: 'other', label: { zh: '其他人物', en: 'Others' } } ],
  graph: {
    title: { zh: '— 輕 與 重 之 間 的 四 個 人 —', en: '— Four People Between Lightness and Weight —' },
    nodes: [
      { id: 'tomas', label: { zh: '托馬斯', en: 'Tomas' }, x: 320, y: 150, tier: 'lead', color: '#6d88a8' },
      { id: 'tereza', label: { zh: '特麗莎', en: 'Tereza' }, x: 320, y: 325, tier: 'lead', color: '#b57d86' },
      { id: 'sabina', label: { zh: '薩賓娜', en: 'Sabina' }, x: 140, y: 240, tier: 'major', color: '#c2ad7e' },
      { id: 'franz', label: { zh: '弗蘭茨', en: 'Franz' }, x: 630, y: 235, tier: 'major', color: '#7d9488' },
      { id: 'karenin', label: { zh: '卡列寧', en: 'Karenin' }, x: 435, y: 405, tier: 'minor', color: '#8a9b8f' },
      { id: 'simon', label: { zh: '西蒙', en: 'Simon' }, x: 505, y: 110, tier: 'tiny', color: '#7e7b72' },
      { id: 'marieclaude', label: { zh: '瑪麗-克勞德', en: 'Marie-Claude' }, x: 700, y: 330, tier: 'tiny', color: '#7e7b72' },
      { id: 'engineer', label: { zh: '工程師', en: 'The Engineer' }, x: 165, y: 400, tier: 'tiny', color: '#7e7b72' }
    ],
    edges: [
      { from: 'tomas', to: 'tereza', kind: 'love' },
      { from: 'tomas', to: 'sabina', kind: 'love' },
      { from: 'sabina', to: 'franz', kind: 'love' },
      { from: 'franz', to: 'marieclaude', kind: 'marriage' },
      { from: 'tomas', to: 'simon', kind: 'broken' },
      { from: 'tomas', to: 'karenin', kind: 'family' },
      { from: 'tereza', to: 'karenin', kind: 'family' },
      { from: 'tereza', to: 'engineer', kind: 'broken' },
      { from: 'sabina', to: 'tereza', kind: 'rivalry' }
    ]
  },
  footer: {
    quote: { zh: '「人永遠無法知道自己該要什麼，因為人只能活一次，既不能拿它跟前世相比，也無法在來生修正。」', en: '“We can never know what to want, because, living only once, we can neither compare our life with our previous lives nor amend it in lives to come.”' },
    tagline: { zh: '生命中不能承受之輕 · 沉浸式閱讀 · 一場關於輕與重的沉思', en: 'The Unbearable Lightness of Being · Immersive Reading · a meditation on lightness and weight' }
  }
};

const CHAPTERS = [
  { id: 1, group: '', title: { zh: '第一部 · 輕與重', en: 'Part One · Lightness and Weight' }, reflectQ: { zh: '如果人生只有一次、無法重來，你會覺得它因此輕如鴻毛，還是重如泰山？托馬斯為何最終選擇了「重」？', en: 'If life happens only once and cannot be redone, does that make it light as a feather or heavy as a mountain? Why does Tomas end up choosing weight?' } },
  { id: 2, group: '', title: { zh: '第二部 · 靈與肉', en: 'Part Two · Soul and Body' }, reflectQ: { zh: '特麗莎終其一生想證明「身體不等於靈魂」。當愛人把性與愛分開，被愛的一方為何如此痛苦？', en: 'Tereza spends her life trying to prove the body is not the soul. Why does it hurt so much to be loved by someone who separates sex from love?' } },
  { id: 3, group: '', title: { zh: '第三部 · 誤解的詞', en: 'Part Three · Words Misunderstood' }, reflectQ: { zh: '薩賓娜與弗蘭茨用著同樣的字（忠誠、背叛、遊行、音樂），心裡想的卻是相反的意思。相愛的人，真的能理解彼此嗎？', en: 'Sabina and Franz use the same words (fidelity, betrayal, parades, music) yet mean opposite things. Can people in love truly understand each other?' } },
  { id: 4, group: '', title: { zh: '第四部 · 靈與肉', en: 'Part Four · Soul and Body' }, reflectQ: { zh: '特麗莎試著像托馬斯一樣、把肉體與心分開去出軌，結果卻更痛苦。這說明了「輕」是可以學來的嗎？', en: 'Tereza tries to detach body from heart and be unfaithful, as Tomas does — and only suffers more. Can lightness be learned?' } },
  { id: 5, group: '', title: { zh: '第五部 · 輕與重', en: 'Part Five · Lightness and Weight' }, reflectQ: { zh: '托馬斯因一篇拒不收回的文章從外科醫生淪為擦窗工。在極權下，堅持一個「是」與一個「不」，代價為何如此之大？', en: 'Tomas falls from surgeon to window washer over an article he refuses to retract. Under a regime, why does holding to a single yes or no cost so much?' } },
  { id: 6, group: '', title: { zh: '第六部 · 偉大的進軍', en: 'Part Six · The Grand March' }, reflectQ: { zh: '昆德拉說「媚俗是對糞便的絕對否定」。當一種美好到不容質疑的情感被拿來遊行，它為什麼反而危險？', en: 'Kundera says "kitsch is the absolute denial of shit." When a feeling too beautiful to question is marched under a banner, why does it turn dangerous?' } },
  { id: 7, group: '', title: { zh: '第七部 · 卡列寧的微笑', en: 'Part Seven · Karenin\'s Smile' }, reflectQ: { zh: '一條狗的幸福是「圓的」，只重複同樣的日子、不追求前方。為什麼昆德拉說，真正的田園牧歌，人類其實回不去？', en: 'A dog\'s happiness is "round" — it repeats the same days and seeks nothing ahead. Why does Kundera say humans can never return to that idyll?' } }
];

const CHARACTERS = [
  { id: 'tomas', name: { zh: '托馬斯', en: 'Tomas' }, family: 'light', role: { zh: '外科醫生 · 男主角', en: 'Surgeon · protagonist' }, icon: '🩺', color: '#6d88a8',
    desc: { zh: '布拉格的外科名醫，風流成性，把情慾與愛情嚴格分開，奉「輕」為生活哲學。卻在遇見特麗莎後，被一種他不理解的「重」擊中。', en: 'A prominent Prague surgeon and incorrigible womanizer who keeps sex and love strictly apart and takes lightness as his philosophy — until Tereza strikes him with a weight he does not understand.' },
    analysis: { zh: '托馬斯是全書「輕」的化身，也是輕重之爭的戰場。他用「六次偶然」把特麗莎的到來合理化為命運，又用「非如此不可」的沉重，替自己一次次選擇留在她身邊。他放棄外科、淪為擦窗工，看似失去一切，卻在鄉間得到了某種輕盈的自由。他證明了：追逐輕的人，最後往往被重救贖。（第一、五部）', en: 'Tomas embodies lightness, and is the battlefield where lightness and weight fight. He rationalizes Tereza\'s arrival as fate through "six coincidences," then invokes the heavy "Es muss sein" to keep choosing her. Losing his surgery and becoming a window washer, he seems to lose everything, yet finds a strange lightness in the countryside — proof that those who chase lightness are often redeemed by weight. (Parts 1, 5)' },
    tags: [ { zh: '輕', en: 'lightness' }, { zh: '風流', en: 'womanizer' }, { zh: '外科醫生', en: 'surgeon' }, { zh: '非如此不可', en: 'Es muss sein' } ], related: ['tereza', 'sabina', 'simon'] },
  { id: 'tereza', name: { zh: '特麗莎', en: 'Tereza' }, family: 'weight', role: { zh: '攝影師 · 托馬斯之妻', en: 'Photographer · Tomas\'s wife' }, icon: '📷', color: '#b57d86',
    desc: { zh: '出身卑微、被母親羞辱著長大的女子，帶著「靈魂要證明自己不只是肉體」的執念愛上托馬斯。她的愛沉重、忠貞，也充滿嫉妒與噩夢。', en: 'A woman of humble origins, raised under a mother\'s humiliation, who loves Tomas with an obsession to prove that the soul is more than a body. Her love is heavy and faithful — and full of jealousy and nightmares.' },
    analysis: { zh: '特麗莎是「重」的化身，是靈與肉之爭的主角。她無法接受托馬斯把性與愛分開，因為對她而言身體與靈魂不可分割。1968 年她拿相機拍下入侵的坦克，是一生中唯一強大的時刻。她把托馬斯的「輕」感受成背叛與痛苦，卻也是她的重，最終把兩人一起拉回了鄉間的寧靜。（第二、四部）', en: 'Tereza embodies weight and leads the fight between soul and body. She cannot accept Tomas separating sex from love, because for her body and soul are inseparable. Photographing the 1968 tanks is the one strong moment of her life. She feels his lightness as betrayal and pain — yet her weight is also what finally pulls them both back to the quiet of the countryside. (Parts 2, 4)' },
    tags: [ { zh: '重', en: 'weight' }, { zh: '忠貞', en: 'fidelity' }, { zh: '靈與肉', en: 'soul & body' }, { zh: '嫉妒', en: 'jealousy' } ], related: ['tomas', 'sabina', 'karenin'] },
  { id: 'sabina', name: { zh: '薩賓娜', en: 'Sabina' }, family: 'light', role: { zh: '畫家 · 托馬斯的情人', en: 'Painter · Tomas\'s mistress' }, icon: '🎨', color: '#c2ad7e',
    desc: { zh: '才華洋溢的畫家，托馬斯多年的情人與知己。她把「背叛」奉為一生的方向——不斷離開、不斷走向未知，拒絕一切媚俗與重量。', en: 'A gifted painter, Tomas\'s longtime lover and confidante. She makes betrayal the direction of her life — always leaving, always walking into the unknown, refusing all kitsch and all weight.' },
    analysis: { zh: '薩賓娜是「輕」最徹底、也最孤獨的實踐者。對她而言，背叛不是罪，而是掙脫隊伍、走向未知的自由。她一次次背叛：父親、丈夫、祖國、弗蘭茨……直到發現，當一切重量都被背叛殆盡，剩下的只是「不能承受之輕」——無物可背叛的虛空。她是全書對「輕」最深刻的辯證。（第三、六部）', en: 'Sabina is the most thorough — and loneliest — practitioner of lightness. For her betrayal is no sin but the freedom of breaking ranks and walking into the unknown. She betrays her father, her husband, her homeland, Franz — until she finds that once all weight has been betrayed away, what remains is the unbearable lightness of having nothing left to betray. She is the book\'s deepest dialectic of lightness. (Parts 3, 6)' },
    tags: [ { zh: '輕', en: 'lightness' }, { zh: '背叛', en: 'betrayal' }, { zh: '畫家', en: 'painter' }, { zh: '反媚俗', en: 'anti-kitsch' } ], related: ['tomas', 'franz'] },
  { id: 'franz', name: { zh: '弗蘭茨', en: 'Franz' }, family: 'weight', role: { zh: '大學教授 · 薩賓娜的情人', en: 'Professor · Sabina\'s lover' }, icon: '📚', color: '#7d9488',
    desc: { zh: '日內瓦的大學教授，理想主義者，愛薩賓娜愛得沉重而虔誠。他相信「偉大的進軍」，渴望讓生命與某種崇高的意義連結。', en: 'A Geneva professor and idealist who loves Sabina heavily and devoutly. He believes in the Grand March, longing to connect his life to some higher meaning.' },
    analysis: { zh: '弗蘭茨是「重」的另一種形態，也是「媚俗」最悲哀的體現。他把薩賓娜當成一個崇高的象徵去愛，卻從未真正理解她；他嚮往遊行、抗爭、與世界的苦難站在一起，最後死在一場沒有意義的柬埔寨邊境「偉大進軍」的餘波裡。他的死荒謬而諷刺——他為之獻身的崇高，正是昆德拉所批判的媚俗。（第三、六部）', en: 'Franz is another form of weight and the saddest embodiment of kitsch. He loves Sabina as a lofty symbol, never truly understanding her; he yearns for parades, protest, and solidarity with the world\'s suffering, and dies in the absurd aftermath of a "Grand March" to the Cambodian border. His death is absurd and ironic — the loftiness he gives his life to is exactly the kitsch Kundera indicts. (Parts 3, 6)' },
    tags: [ { zh: '重', en: 'weight' }, { zh: '理想主義', en: 'idealism' }, { zh: '媚俗', en: 'kitsch' }, { zh: '偉大的進軍', en: 'the Grand March' } ], related: ['sabina', 'marieclaude'] },
  { id: 'karenin', name: { zh: '卡列寧', en: 'Karenin' }, family: 'other', role: { zh: '托馬斯與特麗莎的狗', en: 'Tomas and Tereza\'s dog' }, icon: '🐕', color: '#8a9b8f',
    desc: { zh: '托馬斯與特麗莎養的母狗（名字取自《安娜·卡列尼娜》）。牠的存在，代表一種不求回報、不問未來的愛。', en: 'The female dog Tomas and Tereza keep (named after Anna Karenina). Her existence stands for a love that asks nothing in return and nothing of the future.' },
    analysis: { zh: '卡列寧是全書最溫柔的角色，也是最深的一則寓言。牠的愛不像人類的愛那樣充滿要求、嫉妒與變動——牠的時間是「圓的」，只安於日復一日的重複，因而牠比任何人都接近幸福。牠的病、死與臨終的「微笑」，構成全書的終章，也道出昆德拉最後的悵惘：人類早已被逐出這種田園牧歌，再也回不去。（第七部）', en: 'Karenin is the tenderest character and the book\'s deepest parable. Her love, unlike human love, is free of demands, jealousy, and change — her time is "round," content with daily repetition, so she is closer to happiness than anyone. Her illness, death, and dying "smile" form the book\'s finale and voice Kundera\'s final wistfulness: humans were long ago cast out of this idyll and can never return. (Part 7)' },
    tags: [ { zh: '無條件的愛', en: 'unconditional love' }, { zh: '田園牧歌', en: 'idyll' }, { zh: '循環時間', en: 'circular time' } ], related: ['tereza', 'tomas'] },
  { id: 'simon', name: { zh: '西蒙', en: 'Simon' }, family: 'other', role: { zh: '托馬斯與前妻之子', en: 'Tomas\'s estranged son' }, icon: '✉️', color: '#7e7b72',
    desc: { zh: '托馬斯與第一任妻子所生、多年疏離的兒子。後來投身異議與宗教，試圖與父親和解。', en: 'Tomas\'s long-estranged son by his first wife, who later turns to dissidence and religion and tries to reconcile with his father.' },
    analysis: { zh: '西蒙的存在，映照出托馬斯「輕」的代價——他為了不被責任綁住，早早切斷了與兒子的聯繫。西蒙後來的虔誠與尋找意義，恰與父親的輕盈形成對照。書末那封通知托馬斯夫婦死訊的信，正是由他寄出。', en: 'Simon reflects the cost of Tomas\'s lightness — to avoid being bound by responsibility, Tomas cut ties with his son early. Simon\'s later piety and search for meaning stand in contrast to his father\'s lightness. It is he who sends the letter announcing the couple\'s deaths at the book\'s end.' },
    tags: [ { zh: '疏離', en: 'estrangement' }, { zh: '尋找意義', en: 'search for meaning' } ], related: ['tomas'] },
  { id: 'marieclaude', name: { zh: '瑪麗-克勞德', en: 'Marie-Claude' }, family: 'other', role: { zh: '弗蘭茨之妻', en: 'Franz\'s wife' }, icon: '💍', color: '#7e7b72',
    desc: { zh: '弗蘭茨的妻子，強勢而世故。弗蘭茨為了薩賓娜向她坦白外遇，反而促成薩賓娜的逃離。', en: 'Franz\'s strong-willed, worldly wife. When Franz confesses his affair to her for Sabina\'s sake, he instead drives Sabina away.' },
    analysis: { zh: '瑪麗-克勞德代表弗蘭茨想掙脫的那個「重」——世俗的婚姻與社會身分。諷刺的是，弗蘭茨鼓起勇氣離開她去追求「純粹的愛」，卻正是這份坦白嚇跑了嚮往輕盈的薩賓娜。', en: 'Marie-Claude represents the weight Franz longs to escape — worldly marriage and social standing. The irony is that his courage to leave her in pursuit of "pure love" is exactly the confession that frightens off the lightness-loving Sabina.' },
    tags: [ { zh: '世故', en: 'worldly' }, { zh: '婚姻', en: 'marriage' } ], related: ['franz'] },
  { id: 'engineer', name: { zh: '工程師', en: 'The Engineer' }, family: 'other', role: { zh: '特麗莎的一夜情對象', en: 'Tereza\'s one-night encounter' }, icon: '🚪', color: '#7e7b72',
    desc: { zh: '特麗莎為了「像托馬斯一樣」把肉體與靈魂分開，而與之發生關係的陌生男子。他的身分曖昧，可能與祕密警察有關。', en: 'The stranger Tereza sleeps with in an attempt to separate body from soul "like Tomas." His identity is ambiguous — he may be linked to the secret police.' },
    analysis: { zh: '工程師是特麗莎唯一一次試圖「學輕」的實驗對象。她想證明自己也能像托馬斯那樣、讓身體與心分離，結果卻是更深的羞辱與恐懼——她發現自己做不到。這場出軌反證了：對特麗莎而言，靈與肉終究無法分割。', en: 'The engineer is the object of Tereza\'s single experiment in "learning lightness." She wants to prove she too can split body from heart like Tomas, but the result is only deeper humiliation and fear — she finds she cannot. The affair proves the opposite: for Tereza, soul and body can never be separated.' },
    tags: [ { zh: '一夜情', en: 'one-night stand' }, { zh: '身分曖昧', en: 'ambiguous identity' } ], related: ['tereza'] }
];

const TIMELINE_DATA = [
  { year: { zh: '1968 春', en: 'Spring 1968' }, event: { zh: '布拉格之春：捷克的自由化改革', en: 'The Prague Spring: Czechoslovakia\'s liberalization' }, novel: { zh: '托馬斯與特麗莎在改革的短暫暖意中相戀、結婚，養了狗卡列寧。', en: 'Tomas and Tereza fall in love and marry in the brief warmth of reform, and keep the dog Karenin.' }, type: 'history' },
  { year: { zh: '1968 · 八月', en: 'August 1968' }, event: { zh: '蘇聯領導的華約軍隊入侵，坦克開進布拉格', en: 'Soviet-led Warsaw Pact forces invade; tanks roll into Prague' }, novel: { zh: '特麗莎走上街頭，拿相機拍下坦克與士兵——這是她一生中最強大、最無畏的時刻。', en: 'Tereza takes to the streets and photographs the tanks and soldiers — the strongest, most fearless moment of her life.' }, type: 'history' },
  { year: { zh: '入侵之後', en: 'After the invasion' }, event: { zh: '大批知識分子流亡西方', en: 'Intellectuals flee west in large numbers' }, novel: { zh: '托馬斯與特麗莎流亡蘇黎世；薩賓娜也離開，輾轉日內瓦，在那裡遇見弗蘭茨。', en: 'Tomas and Tereza go into exile in Zurich; Sabina leaves too, ending up in Geneva, where she meets Franz.' }, type: 'novel' },
  { year: { zh: '流亡中', en: 'In exile' }, event: { zh: '鄉愁與不適：流亡者的兩難', en: 'Homesickness and unease: the exile\'s dilemma' }, novel: { zh: '特麗莎無法忍受在異鄉當托馬斯情婦們的背景，獨自帶著卡列寧返回已被佔領的布拉格。', en: 'Unable to bear being a backdrop to Tomas\'s mistresses abroad, Tereza takes Karenin and returns alone to occupied Prague.' }, type: 'character' },
  { year: { zh: '返鄉', en: 'The return' }, event: { zh: '「非如此不可」：托馬斯的抉擇', en: '"Es muss sein": Tomas\'s choice' }, novel: { zh: '托馬斯出於一種他無法解釋的沉重之愛，放棄瑞士的安穩，追隨特麗莎回到布拉格。', en: 'Out of a heavy love he cannot explain, Tomas gives up safety in Switzerland and follows Tereza back to Prague.' }, type: 'character' },
  { year: { zh: '正常化清算', en: 'The "normalization" purge' }, event: { zh: '當局清算異議者，要求公開悔過', en: 'The regime purges dissidents and demands public recantation' }, novel: { zh: '托馬斯因一篇把當權者比作伊底帕斯的舊文遭施壓，他拒絕收回，從外科醫生被貶為擦窗工。', en: 'Pressured over an old article comparing the rulers to Oedipus, Tomas refuses to retract it and is demoted from surgeon to window washer.' }, type: 'history' },
  { year: { zh: '擦窗工歲月', en: 'The window-washer years' }, event: { zh: '被剝奪專業的知識分子', en: 'An intellectual stripped of his profession' }, novel: { zh: '托馬斯以擦窗為業，反而更自由地穿梭於情婦之間；他與特麗莎的關係在猜忌中緊繃。', en: 'Working as a window washer, Tomas moves even more freely among his mistresses; his bond with Tereza tightens with suspicion.' }, type: 'novel' },
  { year: { zh: '偉大的進軍', en: 'The Grand March' }, event: { zh: '西方知識分子聲援柬埔寨的邊境遊行', en: 'Western intellectuals\' solidarity march to the Cambodian border' }, novel: { zh: '弗蘭茨滿懷理想加入這場「偉大的進軍」，卻在曼谷街頭死於一場荒謬的意外——媚俗的終點。', en: 'Franz idealistically joins the "Grand March," only to die in an absurd street accident in Bangkok — the terminus of kitsch.' }, type: 'character' },
  { year: { zh: '田園終章', en: 'The pastoral finale' }, event: { zh: '退居鄉間，遠離政治與誘惑', en: 'Retreat to the countryside, away from politics and temptation' }, novel: { zh: '托馬斯與特麗莎移居鄉村農場，在卡列寧之死中迎來寧靜；書中早已預告：兩人終將死於一場車禍。', en: 'Tomas and Tereza move to a rural farm and find peace in Karenin\'s death; the book has already foretold that the two will die in a car crash.' }, type: 'character' }
];

const THEMES = [
  { id: 'lightweight', icon: '🪶', title: { zh: '輕與重', en: 'Lightness and Weight' }, subtitle: { zh: '一次即從未（einmal ist keinmal）', en: 'Once is never (einmal ist keinmal)' }, color: '#c2ad7e',
    intro: { zh: '全書的母題：既然生命只有一次、無法重來，它究竟是輕，還是重？', en: 'The book\'s master theme: if life happens only once and cannot be redone, is it light or heavy?' },
    body: { zh: '<p>昆德拉以尼采的「永劫回歸」開場：若一切將無限重複，每個選擇都重如泰山。但現實恰恰相反——人生只發生一次，不能預演也無法修正（「一次即從未」），於是輕盈得近乎不存在。這種無可依憑的輕，才是「不能承受」的。</p><p>四個人各自站隊：托馬斯與薩賓娜逐輕，特麗莎與弗蘭茨負重。而弔詭的是，追逐輕的托馬斯，最終被特麗莎的「重」所救贖與安頓。輕與重孰優孰劣？昆德拉不給答案，只讓你在他們的命運裡自己掂量。</p><div class="theme-quote">「最沉重的負擔壓得我們崩塌，卻也讓我們的生命最貼近大地、最真實。」</div>', en: '<p>Kundera opens with Nietzsche\'s eternal return: if everything repeats forever, every choice is heavy as a mountain. Reality is the opposite — life happens once, with no rehearsal and no revision ("once is never"), and so is light almost to the point of not existing. It is this ungrounded lightness that cannot be borne.</p><p>The four take sides: Tomas and Sabina chase lightness, Tereza and Franz bear weight. The paradox is that Tomas, the chaser of lightness, is finally redeemed and settled by Tereza\'s weight. Which is better, light or heavy? Kundera gives no answer; he lets you weigh it in their fates.</p><div class="theme-quote">“The heaviest of burdens crushes us — yet it also brings our lives closest to the earth, and most real.”</div>' },
    chapters: ['1', '5'] },
  { id: 'soulbody', icon: '🫀', title: { zh: '靈與肉', en: 'Soul and Body' }, subtitle: { zh: '身體是我，還是只是我的容器？', en: 'Am I my body, or just its tenant?' }, color: '#b57d86',
    intro: { zh: '特麗莎一生的戰爭：證明靈魂不等於那具會被慾望與羞辱佔據的身體。', en: 'Tereza\'s lifelong war: to prove the soul is not the body that desire and humiliation lay claim to.' },
    body: { zh: '<p>托馬斯能把性與愛乾淨地切開——身體是身體，愛情是愛情。但特麗莎做不到：對她而言，若身體被別人擁有，靈魂就一同被玷污。她的噩夢、她的嫉妒、她那面照著自己身體想尋找靈魂的鏡子，都是這場靈肉之爭的戰場。</p><p>她甚至試著「學托馬斯」，與陌生的工程師發生關係，想證明自己也能讓靈肉分離——結果只換來更深的羞辱。這反證了：有些人天生無法把自己拆成兩半。</p><div class="theme-quote">「她久久望著鏡中的身體，想從裡面看見自己的靈魂。」</div>', en: '<p>Tomas can cleanly split sex from love — the body is the body, love is love. Tereza cannot: for her, if the body is possessed by another, the soul is defiled with it. Her nightmares, her jealousy, the mirror in which she studies her body searching for her soul — all are battlegrounds of this war between soul and body.</p><p>She even tries to "be like Tomas," sleeping with the stranger engineer to prove she too can separate soul from body — and reaps only deeper humiliation. It proves the reverse: some people simply cannot split themselves in two.</p><div class="theme-quote">“She gazed a long time at the body in the mirror, trying to see her soul inside it.”</div>' },
    chapters: ['2', '4'] },
  { id: 'kitsch', icon: '🚩', title: { zh: '媚俗（Kitsch）', en: 'Kitsch' }, subtitle: { zh: '對糞便的絕對否定', en: 'The absolute denial of shit' }, color: '#7d9488',
    intro: { zh: '全書最鋒利的一把刀：媚俗，是把世界美化成不容質疑、不許有「不對勁」存在的謊言。', en: 'The book\'s sharpest blade: kitsch is the lie that beautifies the world into something unquestionable, forbidding anything to be "off."' },
    body: { zh: '<p>昆德拉替「媚俗」下了驚世的定義：媚俗是對人類存在中一切不可接受之物（象徵性地說，就是糞便）的絕對否定。它要求世界看起來美好、感動、崇高，容不下懷疑與例外。</p><p>「偉大的進軍」——那場聲援的遊行——就是政治媚俗的極致：人們為一種美好到不容質疑的情感而集結，而弗蘭茨正死於這種崇高的荒謬。媚俗的可怕，在於它讓所有人流著同樣的淚、拒絕思考。薩賓娜一生逃離的，正是這個。</p><div class="theme-quote">「媚俗，是對糞便的絕對否定。」</div>', en: '<p>Kundera gives kitsch a startling definition: kitsch is the absolute denial of everything unacceptable in human existence (symbolically, of shit). It demands that the world look beautiful, moving, and lofty, with no room for doubt or exception.</p><p>The "Grand March" — that march of solidarity — is political kitsch at its peak: people gather around a feeling too beautiful to question, and Franz dies in the absurdity of that loftiness. The horror of kitsch is that it makes everyone weep the same tears and refuse to think. This is exactly what Sabina spends her life fleeing.</p><div class="theme-quote">“Kitsch is the absolute denial of shit.”</div>' },
    chapters: ['6'] },
  { id: 'betrayal', icon: '🚪', title: { zh: '背叛', en: 'Betrayal' }, subtitle: { zh: '脫離隊伍，走向未知', en: 'Breaking ranks, into the unknown' }, color: '#c2ad7e',
    intro: { zh: '薩賓娜的人生方向：背叛不是墮落，而是掙脫重量、奔向自由的唯一姿態。', en: 'Sabina\'s direction in life: betrayal is not a fall but the one gesture of shaking off weight and running toward freedom.' },
    body: { zh: '<p>對薩賓娜而言，背叛是一種美德——是離開被安排好的隊伍，走進未知。她背叛父親的保守、丈夫、祖國的口號、以及深愛她的弗蘭茨。每一次背叛都讓她更輕。</p><p>但昆德拉冷冷地揭示背叛的盡頭：當你把所有能背叛的東西都背叛完了，就再沒有什麼可以離開、可以反抗——剩下的只是徹底的空。這就是「不能承受之輕」最赤裸的樣子。自由到無物可依，竟成了另一種折磨。</p><div class="theme-quote">「背叛，就是脫離自己的隊伍，走進未知。」</div>', en: '<p>For Sabina, betrayal is a virtue — leaving the ranks arranged for you and walking into the unknown. She betrays her father\'s conservatism, her husband, her homeland\'s slogans, and the Franz who loves her. Each betrayal makes her lighter.</p><p>But Kundera coldly reveals betrayal\'s end: once you have betrayed everything there is to betray, nothing is left to leave or resist — only a total emptiness. This is the nakedest face of the unbearable lightness. Freedom so complete that nothing anchors you becomes its own torment.</p><div class="theme-quote">“Betrayal means breaking ranks and going off into the unknown.”</div>' },
    chapters: ['3', '6'] },
  { id: 'esmusssein', icon: '🎼', title: { zh: '非如此不可 · 偶然與命運', en: 'Es Muss Sein · Chance and Fate' }, subtitle: { zh: 'Es muss sein！', en: 'Es muss sein!' }, color: '#6d88a8',
    intro: { zh: '一連串偶然，如何被我們讀成命運？一個沉重的「必須」，又如何是自己選的？', en: 'How does a string of coincidences get read as fate? And how is a heavy "must" something we choose?' },
    body: { zh: '<p>托馬斯用貝多芬的動機「非如此不可（Es muss sein）」替自己的抉擇定音。他細數把特麗莎帶到他面前的「六次偶然」，把純屬機率的相遇，讀成非發生不可的命運——因為唯有如此，這份沉重才顯得值得。</p><p>昆德拉藉此追問：我們生命中那些「不得不」，究竟是命運的必然，還是我們為了替偶然賦予意義，而事後編派的沉重？愛，或許正是我們甘願把一場偶然，當成一生的必須。</p><div class="theme-quote">「非如此不可？——非如此不可！」</div>', en: '<p>Tomas sets his choices to Beethoven\'s motif "Es muss sein" (it must be). He counts the "six coincidences" that brought Tereza to him and reads a purely chance meeting as a fate that had to happen — because only then does the weight seem worth it.</p><p>Kundera asks: are the "have-tos" of our lives the necessity of fate, or a weight we assign after the fact to give chance a meaning? Love, perhaps, is precisely our willingness to take one coincidence and treat it as the necessity of a lifetime.</p><div class="theme-quote">“Es muss sein? — Es muss sein!”</div>' },
    chapters: ['1', '5'] },
  { id: 'idyll', icon: '🐕', title: { zh: '卡列寧的微笑', en: 'Karenin\'s Smile' }, subtitle: { zh: '田園牧歌與循環的時間', en: 'The idyll and circular time' }, color: '#7d9488',
    intro: { zh: '一條狗的幸福是「圓的」。而人類，早已被逐出這種不問前方的伊甸園。', en: 'A dog\'s happiness is "round." Humans were long ago expelled from that Eden that never asks what lies ahead.' },
    body: { zh: '<p>卡列寧的愛裡沒有嫉妒、沒有要求、沒有對未來的焦慮。牠的時間是圓的——安於每天重複同樣的散步、同樣的早餐，因而牠比書中任何人都接近幸福。這是昆德拉眼中真正的「田園牧歌」。</p><p>但人類活在直線的時間裡，永遠追逐前方、永遠不滿足，早已被逐出這座伊甸園。卡列寧的病、死與臨終那抹彷彿微笑的表情，成為全書溫柔而悵惘的終章：我們懂得了什麼是牧歌，卻正因為懂得，而永遠回不去。</p><div class="theme-quote">「人類的時間不是循環轉動，而是像箭一樣直直飛去——這正是幸福與人無緣的原因。」</div>', en: '<p>Karenin\'s love has no jealousy, no demands, no anxiety about the future. Her time is round — content with the same walk and the same breakfast each day — so she is closer to happiness than anyone in the book. This is what Kundera sees as the true idyll.</p><p>But humans live in linear time, forever chasing what lies ahead, forever unsatisfied, long since expelled from this Eden. Karenin\'s illness, death, and the smile-like look on her dying face form the book\'s tender, wistful finale: we have understood what the idyll is, and it is precisely because we understand that we can never return.</p><div class="theme-quote">“Human time does not turn in a circle; it runs ahead in a straight line — which is why we cannot be happy.”</div>' },
    chapters: ['7'] }
];

const QUOTES = [
  { text: { zh: '人只能活一次，既不能拿它跟前世相比，也無法在來生加以修正。', en: 'We live only once; we can neither compare our life with our previous lives nor amend it in lives to come.' }, source: { zh: '第一部 · 輕與重', en: 'Part One · Lightness and Weight' },
    analysis: { zh: '全書的哲學起點，即「一次即從未（einmal ist keinmal）」。正因為生命無法重來、無從比較對錯，每個選擇都失去了可供對照的重量——這種無可依憑，正是「輕之不能承受」的根源。', en: 'The book\'s philosophical starting point: "einmal ist keinmal" (once is never). Because life cannot be redone or compared, every choice loses any weight to measure it against — and this groundlessness is the source of the unbearable lightness.' } },
  { text: { zh: '最沉重的負擔壓垮我們，卻也讓生命最貼近大地、最真實。', en: 'The heaviest of burdens crushes us, yet it also makes life the most real and the closest to the earth.' }, source: { zh: '第一部 · 輕與重', en: 'Part One · Lightness and Weight' },
    analysis: { zh: '昆德拉替「重」翻案的一句話。負擔（愛、責任、承諾）雖然沉重，卻把飄浮的生命錨定在真實的大地上。托馬斯最終選擇了特麗莎的重，正是選擇了這份「貼近大地」的真實。', en: 'Kundera\'s line in defense of weight. Burdens — love, duty, commitment — are heavy, yet they anchor a floating life to the solid earth. Tomas choosing Tereza\'s weight is choosing this "close to the earth" reality.' } },
  { text: { zh: '跟一個女人做愛，和跟一個女人共眠，是兩種截然不同、甚至對立的感情。', en: 'Making love with a woman and sleeping with a woman are two separate passions, not merely different but opposite.' }, source: { zh: '托馬斯（第一部）', en: 'Tomas (Part One)' },
    analysis: { zh: '托馬斯輕重哲學的關鍵。他能與無數女人做愛（輕、可分割的情慾），卻只願與特麗莎共眠（重、不可分割的愛）。這道區分，正是特麗莎一生無法接受、也無法理解的痛。', en: 'The crux of Tomas\'s philosophy of light and heavy. He can make love with countless women (light, divisible desire) but will sleep only beside Tereza (heavy, indivisible love). This distinction is the pain Tereza can neither accept nor understand her whole life.' } },
  { text: { zh: '媚俗，是對糞便的絕對否定。', en: 'Kitsch is the absolute denial of shit.' }, source: { zh: '第六部 · 偉大的進軍', en: 'Part Six · The Grand March' },
    analysis: { zh: '全書最著名、也最鋒利的定義。媚俗要求世界只呈現美好、崇高、令人感動的一面，徹底否認一切不堪與例外。它的政治形態就是「偉大的進軍」——讓眾人流著同樣的淚、失去獨立思考的能力。', en: 'The book\'s most famous and sharpest definition. Kitsch demands that the world show only its beautiful, lofty, moving side, denying all that is unseemly or exceptional. Its political form is the "Grand March" — making the crowd weep the same tears and lose the capacity to think for themselves.' } },
  { text: { zh: '背叛，就是脫離自己的隊伍，走進未知。', en: 'Betrayal means breaking ranks and going off into the unknown.' }, source: { zh: '薩賓娜（第三部）', en: 'Sabina (Part Three)' },
    analysis: { zh: '薩賓娜的人生信條。她把一般人視為墮落的「背叛」，重新定義成掙脫束縛、奔向自由的姿態。然而昆德拉也點出其盡頭：背叛到無物可背叛時，剩下的只是徹底的空虛。', en: 'Sabina\'s creed. She redefines betrayal — what others see as a fall — as the gesture of shaking off bonds and running toward freedom. Yet Kundera points to its end: betray until there is nothing left to betray, and all that remains is total emptiness.' } },
  { text: { zh: '非如此不可？——非如此不可！', en: 'Es muss sein? — Es muss sein!' }, source: { zh: '托馬斯，借自貝多芬（第五部）', en: 'Tomas, after Beethoven (Part Five)' },
    analysis: { zh: '源自貝多芬弦樂四重奏的動機「Es muss sein!」。托馬斯用它替自己一次次沉重的抉擇定音，把偶然讀成命運的必然。這句話濃縮了全書對「必然 vs 偶然」的辯證。', en: 'From the motif "Es muss sein!" in Beethoven\'s late quartet. Tomas uses it to set his heavy choices to music, reading coincidence as the necessity of fate. The line distills the book\'s dialectic of necessity versus chance.' } },
  { text: { zh: '人類的時間不是循環，而是一支筆直飛去的箭——這正是幸福與人無緣的原因。', en: 'Human time does not turn in a circle but runs ahead in a straight line — which is why we cannot be happy.' }, source: { zh: '第七部 · 卡列寧的微笑', en: 'Part Seven · Karenin\'s Smile' },
    analysis: { zh: '全書終章的悵惘。動物活在圓形、重複的時間裡，因而能安於當下、接近幸福；人類活在直線、不斷追逐前方的時間裡，永不滿足，於是被逐出了田園牧歌。', en: 'The wistfulness of the finale. Animals live in round, repeating time and so can rest in the present, close to happiness; humans live in straight, forward-chasing time, never satisfied, and are thus cast out of the idyll.' } }
];

const REFLECTION_QUESTIONS = [
  { zh: '如果人生只有一次、無法重來也無從比較，你會覺得它因此「輕如鴻毛」還是「重如泰山」？你要選擇輕，還是重？', en: 'If life happens only once, with no redo and nothing to compare it to, does that make it "light as a feather" or "heavy as a mountain"? Which do you choose?' },
  { zh: '托馬斯能把性與愛乾淨地分開，特麗莎卻做不到。你認為靈與肉可以分割嗎？', en: 'Tomas can cleanly separate sex from love; Tereza cannot. Do you think soul and body can be divided?' },
  { zh: '薩賓娜說背叛是走向自由。當她把一切都背叛殆盡，卻墜入更深的空虛——這說明「絕對的自由」有什麼危險？', en: 'Sabina says betrayal is a move toward freedom — yet betraying everything drops her into deeper emptiness. What does that reveal about the danger of absolute freedom?' },
  { zh: '昆德拉說「媚俗是對糞便的絕對否定」。你能在今天的政治、廣告、社群媒體上，找到「媚俗」的例子嗎？', en: 'Kundera says "kitsch is the absolute denial of shit." Can you find kitsch in today\'s politics, advertising, or social media?' },
  { zh: '弗蘭茨為一個他其實不理解的崇高理想而死。為某種「偉大」獻身，什麼時候是勇敢，什麼時候只是媚俗？', en: 'Franz dies for a lofty ideal he does not really understand. When is giving your life to "greatness" courage, and when is it mere kitsch?' },
  { zh: '托馬斯用「六次偶然」把特麗莎的到來讀成命運。你生命中有沒有把某個偶然，事後當成了「非如此不可」？', en: 'Tomas reads Tereza\'s arrival as fate via "six coincidences." Have you ever turned a coincidence into an "it had to be" after the fact?' },
  { zh: '特麗莎為了「學會輕」而出軌，結果更痛苦。有些人格特質（如專情、認真）真的能被刻意改掉嗎？', en: 'Tereza is unfaithful to "learn lightness" and only suffers more. Can traits like devotion or earnestness really be changed by will?' },
  { zh: '在極權下，托馬斯只因拒絕收回一篇文章就失去一切。你會為了一個「不」，付出多大的代價？', en: 'Under the regime, Tomas loses everything just for refusing to retract an article. How high a price would you pay for a single "no"?' },
  { zh: '卡列寧的幸福是「圓的」——不問前方、只重複日常。人類為什麼反而做不到這種簡單的幸福？', en: 'Karenin\'s happiness is "round" — no looking ahead, just daily repetition. Why can humans not manage that simple happiness?' },
  { zh: '讀完全書，你認為托馬斯最後在鄉間得到的，是失敗，還是某種救贖？', en: 'By the end, do you see what Tomas finds in the countryside as a defeat, or as a kind of redemption?' }
];

const CHAPTER_CONTENT = {};

Object.assign(CHAPTER_CONTENT, {
  1: { num: '第一部', title: '輕與重', epigraph: '「非如此不可？——非如此不可！」', body: `
<p>小說沒有從人物開始，而是從一個念頭開始。昆德拉搬出尼采的「永劫回歸」：假如我們的一生會一模一樣地無限重演，那每個動作都將重如千鈞。但事實恰恰相反——人生只發生一次，不能預演，也無法修正。他用德文說：einmal ist keinmal，一次即等於從未。於是生命輕盈得近乎虛無，而這種無可依憑的輕，才是真正「不能承受」的。</p>
<p>在這層哲學的薄霧裡，托馬斯登場了。他是布拉格的外科醫生，離過婚，把女人分成一個個獨立的、可以輕鬆進出的房間。他信奉「輕」：情慾可以與愛情徹底切開，做愛是一回事，愛一個人、想與她共眠，是完全不同、甚至對立的另一回事。</p>
<div class="section-break">＊ ＊ ＊</div>
<p>然後特麗莎來了。她來自一個小鎮，是餐廳的女侍，因為一連串的偶然——托馬斯剛好被派去那間醫院、剛好坐在某張桌子、收音機剛好播著某段音樂——闖進了他的生活。托馬斯後來細數，把她帶到他面前的，是「六次偶然」。</p>
<p>但托馬斯不甘心讓這份感情只是偶然。當特麗莎帶著一只沉重的行李箱、發著高燒出現在布拉格，他心裡浮起一個念頭：她像個被放在籃子裡、順流而下、漂到他岸邊的孩子。他收留了她。一個把女人當成輕盈房間的男人，第一次感到了「重」——一種他無法解釋、卻無法拒絕的沉重之愛。</p>
<p>這一部就在輕與重的拉鋸中展開：托馬斯繼續他的風流（包括與畫家薩賓娜的長期情誼），特麗莎則睡在他身邊，作著關於背叛的噩夢。昆德拉不斷抽離出來提問——托馬斯該選擇輕（自由、無牽掛），還是重（愛、責任、把生命錨定在一個人身上）？他把貝多芬的動機「非如此不可」放進托馬斯心裡，讓這個逐輕的人，一步步走向了「重」。</p>
<p class="thought-question">🤔 思考：托馬斯用「六次偶然」把特麗莎的到來讀成命運。你認為這是真的命運，還是他為了讓「重」顯得值得，而替偶然編派的意義？</p>` },

  2: { num: '第二部', title: '靈與肉', epigraph: '「她久久望著鏡中的身體，想從裡面看見自己的靈魂。」', body: `
<p>鏡頭轉到特麗莎身上，時間倒回她的童年。她的母親曾是美人，卻在一連串失敗的婚姻後自暴自棄，把身體的醜陋與粗鄙當成武器，逼女兒也承認「人不過是一具會排泄、會老去的肉體，靈魂只是幻覺」。特麗莎的一生，就是要反抗這個判決——她要證明，自己不只是肉體，她有一個獨一無二的靈魂。</p>
<p>正因如此，她愛上托馬斯的方式是全心全意、不容分割的。對她而言，若身體被別人擁有，靈魂便一同被玷污。所以托馬斯那套「性與愛可以分開」的哲學，對她是最深的酷刑。她愛他，卻夜夜夢見他把她推向死亡、夢見一群赤裸的女人繞著泳池行進——那是她嫉妒與恐懼的化身。</p>
<div class="section-break">＊ ＊ ＊</div>
<p>特麗莎唯一的武器是相機。攝影讓她從「被觀看的肉體」變成「觀看世界的靈魂」。</p>
<p>1968 年八月，蘇聯的坦克開進布拉格。街頭一片混亂與恐懼，特麗莎卻在此時爆發出一生中唯一一次的無畏——她端著相機衝上街，拍下坦克、拍下士兵、拍下抵抗的人群。那幾天，她不再是那個蜷縮在嫉妒噩夢裡的女子，而是一個有力量、有意義的人。政治的「重」，短暫地治好了她私人的痛。</p>
<p>然而坦克終究輾平了一切。當自由的窗口關上，特麗莎又回到那個問題：在一個把她的照片沒收、把她的丈夫繼續往別的女人身邊推的世界裡，她那想證明靈魂存在的努力，還有意義嗎？她凝視鏡中的身體，依舊找不到答案。</p>
<p class="thought-question">🤔 思考：特麗莎在坦克入侵的那幾天最強大、最忘我。為什麼有時候，一個巨大的「公共苦難」，反而能暫時治癒一個人私密的痛？</p>` },

  3: { num: '第三部', title: '誤解的詞', epigraph: '「他們用同樣的字，心裡想的卻是相反的東西。」', body: `
<p>這一部把舞台交給薩賓娜與弗蘭茨——托馬斯的情人，與愛上她的日內瓦教授。昆德拉用一個奇特而精巧的形式來寫他們：〈誤解的詞小辭典〉。他挑出幾個他們共用的詞——女人、忠誠與背叛、音樂、光明與黑暗、遊行、墓園——一一指出：同一個字，在兩人心裡是完全相反、甚至對立的意思。</p>
<p>「遊行」對弗蘭茨是青春、團結與崇高，是他一生嚮往卻不敢投身的偉大；對經歷過共產黨強制遊行的薩賓娜，那卻是最令人作嘔的媚俗與暴力。「忠誠」對弗蘭茨是美德；對薩賓娜，「背叛」才是美德——是掙脫隊伍、走向未知的自由。他們深愛彼此，卻在每一個關鍵詞上南轅北轍。</p>
<div class="section-break">＊ ＊ ＊</div>
<p>弗蘭茨是個沉重的理想主義者。他把薩賓娜當成一個崇高的象徵去愛，愛得虔誠而盲目——他從沒真正看見那個具體、複雜、只想逃的薩賓娜。為了配得上這份「純粹的愛」，他鼓起勇氣向妻子瑪麗-克勞德坦白外遇，準備光明正大地與薩賓娜在一起。</p>
<p>他以為這是獻給薩賓娜的大禮。結果卻相反：一想到要被人「正式地擁有」、被安放進一段公開而沉重的關係，嚮往輕盈的薩賓娜嚇壞了。她什麼也沒說，收拾行囊，又一次背叛、又一次消失，走進了下一段未知。</p>
<p>昆德拉藉這一部拋出一個殘酷的問題：語言真能傳遞理解嗎？兩個相愛的人，是不是註定各自活在自己那本「誤解的詞小辭典」裡，用同樣的字，錯過彼此的一生？</p>
<p class="thought-question">🤔 思考：薩賓娜與弗蘭茨深愛彼此，卻在「忠誠」「背叛」「遊行」這些詞上想的完全相反。相愛的人，真的能理解對方嗎？還是我們永遠只是愛著自己的想像？</p>` },

  4: { num: '第四部', title: '靈與肉', epigraph: '「她想證明自己也能把身體和靈魂分開——結果只換來更深的羞辱。」', body: `
<p>回到特麗莎。她隨托馬斯流亡蘇黎世，卻無法忍受在異鄉當一個「背景」——看著丈夫繼續在情婦之間來去，而自己在陌生的城市裡無依無靠。於是她做了一個沉重的決定：獨自帶著狗卡列寧，離開托馬斯，回到已被蘇聯佔領的布拉格。她寧願回到不自由的祖國，也不願在自由的異鄉忍受不被完整地愛。</p>
<p>而托馬斯，那個一生逐輕的男人，在她走後感到一種奇異的空。幾天後，他也放棄了瑞士安穩的一切，追著她回到那座被佔領的城市。他對自己說出了那句貝多芬的話：非如此不可。他選擇了重。</p>
<div class="section-break">＊ ＊ ＊</div>
<p>回到布拉格後，特麗莎仍被同一個問題折磨：托馬斯能把肉體與愛分開，為什麼我不能？如果我也能像他那樣，把一次性愛當成無關靈魂的小事，我是不是就不會這麼痛了？</p>
<p>於是她做了一場實驗。她在酒吧遇見一個陌生的工程師，跟他回了家，試著像托馬斯那樣，讓身體與心分離、去經驗一次「輕」的性。但整件事只帶給她更深的羞辱與恐懼——她在對方身上感到的不是自由，而是自我的背叛；事後她甚至懷疑那男人可能與祕密警察有關，是個圈套。</p>
<p>這場實驗徹底失敗了，卻也給了特麗莎一個答案：靈與肉，對她而言就是無法分割。她學不會輕。她不是托馬斯，也永遠成不了薩賓娜。她只能用自己那沉重的方式去愛——而這，既是她的痛，也是她的尊嚴。</p>
<p class="thought-question">🤔 思考：特麗莎努力想「學會輕」，卻失敗了。一個人天生的性格（專情、認真、無法分割愛與慾），真的可以靠意志去改變嗎？</p>` },

  5: { num: '第五部', title: '輕與重', epigraph: '「他寧可去擦玻璃，也不肯在悔過書上簽名。」', body: `
<p>這一部回到托馬斯，寫他如何在極權的擠壓下，一步步失去一切，卻也一步步變得輕盈。多年前，他曾寫過一篇短文，把那些聲稱「不知道自己在做壞事」的當權者，比作神話裡在不知情下弒父娶母、事後刺瞎雙眼以示負責的伊底帕斯——言下之意：不知情，不能免除罪責。</p>
<p>正常化時期，當局翻出這篇舊文，施壓要他寫一份聲明收回。只要簽個字，他就能保住外科醫生的職位與體面。但托馬斯拒絕了。他不願為了苟安，去做一件違背自己的事。代價是：他被逐出醫院，從一名受人尊敬的外科醫生，淪為在布拉格街頭爬上爬下的擦窗工。</p>
<div class="section-break">＊ ＊ ＊</div>
<p>弔詭的是，失去專業身分的托馬斯，反而得到了一種奇異的輕鬆。擦窗工的工作讓他自由地穿梭於城市，也自由地穿梭於一個個情婦的公寓——他的風流甚至因此更加暢行無阻。「非如此不可」的沉重使命感（外科醫生的天職）沒有了，剩下的是「別無所謂」的輕。</p>
<p>但這份輕的底下，是特麗莎日益加深的痛苦。她清楚知道他不曾停止，猜忌像慢性病一樣侵蝕著她。托馬斯也在這期間與久違的兒子西蒙短暫重逢，卻發現彼此已是陌路——那是他早年為了不被責任綁住、親手切斷的一段親情，如今再也接不回來。</p>
<p>昆德拉讓托馬斯在輕與重之間反覆掂量：他為了一個「不」失去了事業（重的堅持），卻在失去後獲得了自由（輕）；他一生逐輕，卻始終被特麗莎的重牽引著、放不下。到最後，是為了她，他願意再一次放下一切，往更輕、也更安靜的地方去。</p>
<p class="thought-question">🤔 思考：托馬斯只因拒絕在一份聲明上簽字，就失去了整個事業。在極權底下，堅持一個小小的「不」，為什麼代價如此巨大？你會怎麼選？</p>` },

  6: { num: '第六部', title: '偉大的進軍', epigraph: '「媚俗，是對糞便的絕對否定。」', body: `
<p>這一部幾乎是一篇鑲嵌在小說裡的哲學論文，主題只有一個：媚俗（Kitsch）。昆德拉替它下了一個驚世駭俗的定義——媚俗，是對人類存在中一切不可接受之物（他直白地用「糞便」為象徵）的絕對否定。媚俗要求世界只呈現美好、乾淨、令人感動的一面，容不下懷疑、例外與不堪。</p>
<p>媚俗最危險的形態是政治媚俗。它讓成千上萬的人為同一個崇高畫面（孩子在草地上奔跑、群眾團結前進）流下同樣的淚，並且以「誰能不被這感動？」的名義，取消一切獨立思考。無論左派右派、共產或民主，只要動用這種「不容質疑的美好」，就都在媚俗。這正是薩賓娜一生拚命逃離的東西。</p>
<div class="section-break">＊ ＊ ＊</div>
<p>而弗蘭茨，那個沉重的理想主義者，正是媚俗最悲哀的獻祭品。他一生渴望讓自己的生命與某種「偉大」連結，於是報名參加了一場聲援柬埔寨的國際遊行——一群西方知識分子與明星，浩浩蕩蕩開往邊境，舉著旗幟、對著空無一人的國界喊話。這就是「偉大的進軍」：一場自我感動的、華麗而空洞的表演。</p>
<p>昆德拉冷冷地拆穿這場盛事的荒謬：它拯救不了任何人，只滿足了參與者「我站在正義這一邊」的崇高感。而弗蘭茨，就在這場媚俗的餘波裡，於曼谷的街頭遭遇搶劫、荒謬地死去。他為之獻身的「偉大」，到頭來與他的死一樣，毫無意義。</p>
<p>與此同時，薩賓娜漂到了美國，繼續著她越來越輕、也越來越空的人生。她發現，當一切可背叛的重量都被背叛殆盡，自由並沒有帶來解脫，只剩下無物可依的、真正「不能承受之輕」。</p>
<p class="thought-question">🤔 思考：昆德拉說，連「為苦難落淚、為正義遊行」都可能是媚俗。你認同嗎？一種美好的情感，什麼時候變成了危險的媚俗？</p>` },

  7: { num: '第七部', title: '卡列寧的微笑', epigraph: '「牠的時間不是直線，而是一個溫柔的圓。」', body: `
<p>全書以最安靜、最溫柔的一部作結。托馬斯與特麗莎離開了布拉格，遷居鄉間的集體農場。這裡沒有情婦、沒有政治的傾軋、沒有城市裡無盡的誘惑與猜忌。生活簡化成田地、牲口、酒館與彼此。多年來緊繃的關係，終於在這片土地上鬆弛下來——托馬斯老了，也終於只屬於特麗莎一個人了。</p>
<p>而這一部真正的主角，是那條老狗卡列寧。牠得了癌症，一天天衰弱下去。昆德拉藉著特麗莎對卡列寧的愛，寫出了全書最深的一則沉思：人與狗之間的愛，或許比人與人之間的愛更純粹。因為卡列寧的愛裡沒有嫉妒、沒有要求、沒有對未來的算計——牠只是安於每天同樣的散步、同樣的早餐、同樣的一塊麵包。</p>
<div class="section-break">＊ ＊ ＊</div>
<p>昆德拉說，這是因為卡列寧活在「圓形的時間」裡。動物的幸福是圓的：牠不追逐前方，只重複當下，於是牠比任何人都接近伊甸園、接近真正的田園牧歌。而人類活在「直線的時間」裡，像一支永遠射向前方的箭，永不滿足、永遠焦慮——這正是幸福與人無緣的原因。我們早已被逐出那座只知重複、不問未來的樂園。</p>
<p>卡列寧臨終前，嘴角彷彿浮起一抹微笑。那微笑成了全書的題眼：它是對簡單、無條件、不求回報之愛的最後禮讚，也是對人類再也回不去那種幸福的悵惘。</p>
<p>而在小說更早的地方，昆德拉早已平靜地預告了托馬斯與特麗莎的結局：他們將死於一場鄉間的車禍。沒有轟轟烈烈，只是輕輕地、一起地，從這個沉重的世界上消失。那是他們的悲劇，卻也像是一種解脫——兩個曾在輕與重之間掙扎了一生的人，最終在彼此身邊，落進了最後的、真正的輕。</p>
<p class="thought-question">🤔 思考：卡列寧的幸福是「圓的」——只重複日常、不問前方。為什麼活在「直線時間」、永遠追逐前方的人類，反而做不到這種簡單的幸福？你願意用一些「前進」，去換這種圓形的安寧嗎？</p>` }
});

// ---- English part bodies (parallel store, merged below) ----
const CHAPTER_CONTENT_EN = {};

Object.assign(CHAPTER_CONTENT_EN, {
  1: { num: 'Part One', title: 'Lightness and Weight', epigraph: '“Must it be? It must be!”', body: `
<p>The novel does not open with a person; it opens with an idea. Kundera summons Nietzsche's eternal return: if our lives were to repeat, identically, forever, then every gesture would carry unbearable weight. But the truth is the reverse. A life happens only once. It cannot be rehearsed and it cannot be corrected. In German he puts it this way: einmal ist keinmal, once is never. And so existence turns out to be light, nearly weightless, and it is precisely this lightness, with nothing beneath it to hold onto, that proves impossible to bear.</p>
<p>Out of this philosophical haze Tomas steps forward. He is a surgeon in Prague, divorced, a man who has sorted women into a set of separate, self-contained rooms that he can enter and leave without cost. He believes in lightness: desire can be cleanly severed from love. To sleep with a woman is one thing; to love her, to want to sleep beside her, is something entirely different, even opposed.</p>
<div class="section-break">＊ ＊ ＊</div>
<p>Then Tereza arrives. She comes from a small town, a waitress in a restaurant, and through a chain of accidents, that Tomas happened to be sent to that particular hospital, happened to sit at a particular table, that the radio happened to be playing a particular piece of music, she stumbles into his life. Later Tomas counts them up: it took six accidents to carry her to him.</p>
<p>But Tomas cannot bear to let this feeling remain mere chance. When Tereza turns up in Prague with a heavy suitcase and a high fever, a thought rises in him: she is like a child set adrift in a bulrush basket, floated downstream to the bank where he stands. He takes her in. A man who had treated women as weightless rooms feels, for the first time, weight, a love he cannot explain and cannot refuse.</p>
<p>The whole of this part unfolds in the tug of war between the light and the heavy. Tomas continues his affairs, among them a long, easy intimacy with the painter Sabina, while Tereza sleeps at his side and dreams her dreams of betrayal. Again and again Kundera pulls back to ask the question directly. Should Tomas choose lightness, freedom, an existence unburdened, or weight, love, responsibility, a life anchored to a single person? He places Beethoven's motif, es muss sein, it must be, inside Tomas's heart, and lets this man who chased after lightness walk, step by step, toward weight.</p>
<p class="thought-question">🤔 Think: Tomas reads Tereza's arrival as fate through six accidents. Was it really fate, or did he assign meaning to chance so that the weight he took on would feel worth carrying?</p>` },

  2: { num: 'Part Two', title: 'Soul and Body', epigraph: '“She stood long before the mirror, searching her body for her soul.”', body: `
<p>The lens turns to Tereza, and time winds back to her childhood. Her mother had once been a beauty, but after a string of failed marriages she surrendered to spite, wielding the coarseness and ugliness of the body as a weapon, and forcing her daughter to concede that a human being is nothing but flesh that excretes and ages, that the soul is only an illusion. Tereza's entire life is a rebellion against that verdict. She means to prove that she is not merely a body, that she possesses a soul that is hers alone.</p>
<p>This is why she loves Tomas with a love that is whole and refuses to be divided. For her, if the body is possessed by another, the soul is defiled along with it. So Tomas's doctrine, that sex and love can be kept apart, is for her the cruelest of torments. She loves him, and yet night after night she dreams that he drives her toward death, dreams of naked women marching in a circle around a pool, images that give shape to her jealousy and her fear.</p>
<div class="section-break">＊ ＊ ＊</div>
<p>Tereza's one weapon is her camera. Photography lets her cross over from being a body that is looked at to being a soul that looks at the world.</p>
<p>In August of 1968, Soviet tanks roll into Prague. The streets fill with chaos and dread, and yet this is the moment Tereza blazes with the only fearlessness of her life. Camera in hand, she rushes into the streets and photographs the tanks, the soldiers, the crowds who resist. For those few days she is no longer the woman curled inside her jealous nightmares but a person with strength and purpose. The weight of history briefly cures her private pain.</p>
<p>But the tanks flatten everything in the end. When the window of freedom closes, Tereza returns to the same question. In a world that confiscates her photographs and keeps pushing her husband toward other women, does her striving to prove that the soul exists still mean anything? She gazes at the body in the mirror and still finds no answer.</p>
<p class="thought-question">🤔 Think: Tereza is at her strongest and most self-forgetting during the days of the invasion. Why is it that sometimes a vast public suffering can, for a time, heal a person's most private pain?</p>` },

  3: { num: 'Part Three', title: 'Words Misunderstood', epigraph: '“They used the same words, and meant the opposite by them.”', body: `
<p>This part hands the stage to Sabina and Franz, Tomas's lover and the Geneva professor who has fallen for her. Kundera writes them in a strange and elegant form: a little dictionary of misunderstood words. He picks out a handful of terms they share, woman, fidelity and betrayal, music, light and darkness, the parade, the cemetery, and shows one by one how the same word carries meanings in their two hearts that are wholly opposed.</p>
<p>The parade, for Franz, is youth, solidarity, and the sublime, the greatness he yearned for all his life yet never dared to join. For Sabina, who lived through the compulsory marches of the Communist years, it is the most nauseating of kitsch and violence. Fidelity, for Franz, is a virtue; for Sabina, betrayal is the virtue, the freedom of breaking from the ranks and walking into the unknown. They love each other deeply, and on every word that matters they are worlds apart.</p>
<div class="section-break">＊ ＊ ＊</div>
<p>Franz is a heavy idealist. He loves Sabina as a lofty symbol, devoutly and blindly, and never truly sees the concrete, complicated woman who only wants to escape. To make himself worthy of this pure love, he gathers his courage and confesses the affair to his wife, Marie-Claude, ready to be with Sabina openly and honestly.</p>
<p>He imagines this a gift laid at Sabina's feet. The result is the opposite. At the very thought of being formally possessed, of being installed in a public, weighty relationship, Sabina, who longs only for lightness, is terrified. She says nothing. She packs her bags, betrays and vanishes once again, and walks off into the next unknown.</p>
<p>Through this part Kundera throws out a cruel question. Can language really carry understanding? Are two people who love each other doomed to live inside their own separate dictionaries of misunderstood words, using the same terms and missing each other for a lifetime?</p>
<p class="thought-question">🤔 Think: Sabina and Franz love each other, yet on words like fidelity, betrayal, and the parade they mean exactly opposite things. Can people who love each other truly understand one another, or are we forever only loving our own imagining?</p>` }
});
Object.assign(CHAPTER_CONTENT_EN, {
  4: { num: 'Part Four', title: 'Soul and Body', epigraph: '“She tried to prove that she too could split body from soul — and won only a deeper humiliation.”', body: `
<p>We return to Tereza. She had followed Tomas into exile in Zurich, but she could not bear to live there as mere scenery — watching her husband drift among his mistresses while she stood friendless and unmoored in a foreign city. So she made a heavy choice. Taking only the dog, Karenin, she left Tomas and went back to Prague, back to a homeland already sealed under Soviet occupation. She would rather return to an unfree country than endure, in a free one, the ache of not being wholly loved.</p>
<p>And Tomas, the man who had spent his whole life chasing lightness, felt a strange emptiness once she was gone. Within days he abandoned the safety and comfort Switzerland offered and followed her back into the occupied city. He said to himself the words of Beethoven: Es muss sein, it must be. He had chosen weight.</p>
<div class="section-break">＊ ＊ ＊</div>
<p>Back in Prague, Tereza was tormented by the same old question. Tomas could sever the body from love, so why couldn't she? If she too could treat a single act of sex as a small thing, unconnected to the soul, would she not finally stop hurting?</p>
<p>So she made an experiment. In a bar she met a stranger, an engineer, and went home with him, trying to do as Tomas did — to let body and heart come apart, to taste, just once, the lightness of sex. But the whole affair brought her only a deeper humiliation and dread. What she felt on that man's body was not freedom but a betrayal of herself; afterward she even suspected he might be connected to the secret police, that the encounter had been a trap laid for her.</p>
<p>The experiment failed utterly, yet it gave Tereza an answer. Soul and body, for her, simply could not be pried apart. She could not learn lightness. She was not Tomas, and she would never become Sabina. She could love only in her own heavy way — and that was at once her wound and her dignity.</p>
<p class="thought-question">🤔 Think: Tereza strained to learn lightness and could not. Can a person's inborn nature — devotion, seriousness, the refusal to split love from desire — really be changed by an act of will?</p>` },

  5: { num: 'Part Five', title: 'Lightness and Weight', epigraph: '“He would sooner wash windows than sign his name to a recantation.”', body: `
<p>This part returns to Tomas, tracing how, under the pressure of a totalitarian state, he loses everything one step at a time — and, one step at a time, grows lighter. Years earlier he had written a short article comparing those rulers who claimed they had not known they were doing wrong to Oedipus, who in the old myth killed his father and married his mother in ignorance, then blinded himself to take responsibility. His meaning was plain: not knowing does not absolve you of guilt.</p>
<p>During the years of so-called normalization, the authorities dug up this old Oedipus article and pressed him to write a statement retracting it. A single signature would have preserved his post as a surgeon and his standing along with it. But Tomas refused. He would not, for the sake of a quiet life, do a thing that betrayed himself. The price was steep: he was expelled from the hospital, and a respected surgeon became a window washer, hauling himself up and down the facades of Prague.</p>
<div class="section-break">＊ ＊ ＊</div>
<p>The paradox was that, stripped of his professional identity, Tomas came into a strange ease. The work of a window washer let him move freely through the city — and freely through the apartments of one mistress after another; his womanizing, if anything, ran more smoothly than before. The heavy sense of vocation, the Es muss sein of the surgeon's calling, was gone, and what remained was the lightness of it makes no difference.</p>
<p>But beneath that lightness lay Tereza's steadily deepening pain. She knew he had never stopped, and suspicion gnawed at her like a chronic illness. In this same period Tomas had a brief reunion with Simon, his long-estranged son, only to discover that they had become strangers to each other — a bond he had cut with his own hands in his younger years, so as not to be tied down by responsibility, and one that could no longer be rejoined.</p>
<p>Kundera lets Tomas weigh lightness against weight over and over. For a single no he lost his whole career — the persistence of weight — yet in losing it he gained freedom, which is lightness. He had chased lightness all his life, and yet he was forever drawn along, unable to let go, by Tereza's weight. In the end it was for her sake that he grew willing, once more, to set everything down and move toward a place lighter and more quiet still.</p>
<p class="thought-question">🤔 Think: Tomas lost an entire career merely for refusing to sign a statement. Under a totalitarian regime, why does holding to one small no cost so much? How would you choose?</p>` }
});
Object.assign(CHAPTER_CONTENT_EN, {
  6: { num: 'Part Six', title: 'The Grand March', epigraph: '“Kitsch is the absolute denial of shit.”', body: `
<p>This part reads almost like a philosophical essay set inside the novel, and it turns on a single word: kitsch. Kundera gives it a scandalous definition. Kitsch is the absolute denial of everything in human existence that is unacceptable, and he names that unacceptable thing plainly as shit. Kitsch demands a world scrubbed clean, a world that shows only the beautiful, the touching, the tidy, a world with no room for doubt, for the exception, for the ugly.</p>
<p>The most dangerous form of kitsch is political kitsch. It makes thousands of people weep over the same sentimental image, children running across a lawn, crowds marching forward in unison, and then, in the name of who could fail to be moved by this, it abolishes independent thought. Left or right, communist or democratic, the moment a movement reaches for this unquestionable beauty, it has entered the realm of kitsch. This is precisely the thing Sabina has spent her whole life fleeing.</p>
<div class="section-break">＊ ＊ ＊</div>
<p>And Franz, the heavy idealist, is kitsch's saddest offering. All his life he longed to bind his existence to something great, so he joins an international march in support of Cambodia. A caravan of Western intellectuals and celebrities rolls grandly toward the border, banners raised, shouting across an empty frontier at no one. This is the Grand March: a magnificent, hollow performance of feeling, staged for the marchers themselves.</p>
<p>Kundera coolly exposes the absurdity of the spectacle. It rescues nobody. It only satisfies each participant's craving to feel that I stand on the side of justice. And Franz, in the aftermath of this kitsch, dies absurdly, mugged on a street in Bangkok. The greatness he gave himself to proves, in the end, as meaningless as his death.</p>
<p>Meanwhile Sabina drifts to America and goes on living her life, ever lighter and ever emptier. She discovers that once every weight worth betraying has been betrayed, freedom brings no release at all, only the truly unbearable lightness of having nothing left to lean against.</p>
<p class="thought-question">🤔 Think: Kundera claims that even weeping over suffering and marching for justice can be kitsch. Do you agree? At what point does a beautiful feeling curdle into something dangerous?</p>` },

  7: { num: 'Part Seven', title: "Karenin's Smile", epigraph: '“Its time did not run in a line, but turned in a gentle circle.”', body: `
<p>The book closes with its quietest and most tender part. Tomas and Tereza have left Prague for a collective farm in the countryside. Here there are no mistresses, no political knives in the back, no endless urban temptations and suspicions. Life is pared down to fields, animals, the village tavern, and each other. The tension of years finally loosens on this patch of earth. Tomas has grown old, and at last he belongs to Tereza alone.</p>
<p>But the true protagonist of this part is the old dog, Karenin. He has cancer, and grows weaker by the day. Through Tereza's love for Karenin, Kundera writes the deepest meditation in the whole book: that the love between a person and a dog may be purer than the love between two people. For there is no jealousy in Karenin's love, no demand, no calculation about the future. He is simply content with the same walk each day, the same breakfast, the same piece of bread.</p>
<div class="section-break">＊ ＊ ＊</div>
<p>This, Kundera says, is because Karenin lives inside circular time. An animal's happiness is round: it does not chase what lies ahead, it only repeats the present moment, and so it stands closer to Eden and to the true idyll than any human being. We, by contrast, live in linear time, like an arrow forever loosed toward the future, never satisfied, forever anxious. That is why happiness eludes us. We were long ago cast out of that paradise where nothing was asked of tomorrow and each day was simply lived again.</p>
<p>Near his end, a faint smile seems to gather at the corner of Karenin's mouth. That smile becomes the emblem of the book: a last tribute to simple, unconditional, unrewarded love, and a wistful acknowledgment that human beings can never return to such happiness.</p>
<p>Much earlier in the novel, Kundera has already told us, calmly, how Tomas and Tereza will end: they will die in a country road accident. Nothing grand, only a light, shared vanishing from this heavy world. It is their tragedy, and yet it reads like a deliverance. Two people who struggled all their lives between lightness and weight fall, at last, side by side, into the final and truest lightness.</p>
<p class="thought-question">🤔 Think: Karenin's happiness is round, only the repeated day, never the road ahead. Why is it that human beings, living in linear time and forever chasing what lies before them, cannot manage this simple happiness? Would you trade some of your forward motion for that circular peace?</p>` }
});

// ---- fold English part bodies into CHAPTER_CONTENT as { zh, en } ----
Object.keys(CHAPTER_CONTENT).forEach(function (k) {
  var z = CHAPTER_CONTENT[k] || {}, e = CHAPTER_CONTENT_EN[k] || {};
  CHAPTER_CONTENT[k] = {
    num:      { zh: z.num || '',      en: e.num || z.num || '' },
    title:    { zh: z.title || '',    en: e.title || z.title || '' },
    epigraph: { zh: z.epigraph || '', en: e.epigraph || z.epigraph || '' },
    body:     { zh: z.body || '',     en: e.body || z.body || '' }
  };
});
