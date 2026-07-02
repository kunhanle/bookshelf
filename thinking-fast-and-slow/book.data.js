// ============================================================
//  Thinking, Fast and Slow（快思慢想）· 沉浸式閱讀資料（中英雙語）
//  作者 Daniel Kahneman 2024 年逝世；各章正文為原創論點重述（非原著文字）。
//  文字欄位多為 { zh, en }，由 engine 依語言切換鈕選取。
// ============================================================

const BOOK = {
  slug: 'tfs',
  langs: ['zh', 'en'],
  title: { zh: '快思慢想', en: 'Thinking, Fast and Slow' },
  author: 'Daniel Kahneman',
  theme: {
    'bg-primary': '#15161b', 'bg-secondary': '#1c1e25', 'bg-card': '#23252e', 'bg-elevated': '#2c2f3a',
    'text-primary': '#e9e4d8', 'text-secondary': '#b3aa9c', 'text-muted': '#837b70',
    'accent': '#d0a552', 'accent-light': '#ead08a', 'accent-glow': 'rgba(208,165,82,0.28)',
    'rose': '#cf7d55', 'jade': '#6f9a7f', 'blue': '#5f86b3', 'gold': '#d0a552',
    'border': 'rgba(208,165,82,0.16)',
    atmosphere: { fall: 16, streak: 0, fallRadius: '50%' },
    dayMode: { 'bg-primary': '#f2ede2', 'bg-secondary': '#e9e2d3', 'bg-card': '#fbf8f1', 'bg-elevated': '#f4efe4', 'text-primary': '#2f2a20', 'text-secondary': '#544c3e', 'text-muted': '#867c6c', 'border': 'rgba(150,120,70,0.22)' }
  },
  cover: {
    seal: '思',
    subtitle: { zh: 'Thinking, Fast and Slow', en: '快 思 慢 想' },
    desc: {
      zh: '我們自以為理性，其實大多數時候，<br>是那個又快又自動的「系統一」在替我們思考、判斷、決定。<br>這是一趟看清自己心智如何運作、又如何出錯的旅程。',
      en: 'We think of ourselves as rational, but most of the time it is the fast, automatic “System 1” that does our thinking, judging, and deciding for us.<br>This is a journey into how the mind really works — and how it goes wrong.'
    }
  },
  musicPrompt: {
    zh: '準備好慢下來、動用你的系統二了嗎？<br>是否播放一段背景音樂？',
    en: 'Ready to slow down and engage System 2?<br>Play some background music?'
  },
  intro: {
    subtitle: { zh: '在閱讀之前，先掌握這本書的骨架與核心主張', en: 'Grasp the book’s structure and core claims before you read' },
    author: {
      name: { zh: '丹尼爾·康納曼　Daniel Kahneman', en: 'Daniel Kahneman' }, portrait: 'K',
      years: { zh: '1934 — 2024 · 心理學家 · 2002 年諾貝爾經濟學獎得主', en: '1934 — 2024 · psychologist · 2002 Nobel laureate in Economics' },
      bio: {
        zh: '以色列裔美籍心理學家，行為經濟學的奠基者。他與阿莫斯·特沃斯基（Amos Tversky）長達數十年的合作，揭露了人類判斷與決策中系統性的偏誤，徹底改寫了經濟學對「理性人」的假設。二○○二年，他以展望理論獲頒諾貝爾經濟學獎。《快思慢想》（2011）是他總結一生研究、寫給一般讀者的集大成之作。',
        en: 'An Israeli-American psychologist and a founder of behavioral economics. His decades-long collaboration with Amos Tversky exposed the systematic biases in human judgment and decision-making, overturning economics’ assumption of a rational agent. In 2002 he won the Nobel Prize in Economics for prospect theory. "Thinking, Fast and Slow" (2011) is his lifetime synthesis, written for the general reader.'
      }
    },
    cards: [
      { icon: '⚙️', title: { zh: '一句話核心', en: 'The core, in one line' }, text: { zh: '人有兩套思考系統：又快又直覺的「系統一」，與又慢又費力的「系統二」。我們的許多錯誤，來自系統一的自動反應，而懶惰的系統二又疏於把關。', en: 'We have two systems of thought: a fast, intuitive System 1 and a slow, effortful System 2. Many of our errors come from System 1’s automatic responses, which a lazy System 2 fails to check.' } },
      { icon: '🧭', title: { zh: '全書骨架', en: 'The architecture' }, text: { zh: '五大部：①兩個系統 ②捷思與偏誤 ③過度自信 ④選擇（展望理論）⑤兩個自我。從心智如何運作，一路推進到我們如何判斷、決策、評價一生的幸福。', en: 'Five parts: (1) Two Systems, (2) Heuristics and Biases, (3) Overconfidence, (4) Choices (prospect theory), (5) Two Selves — from how the mind works to how we judge, decide, and evaluate a life’s happiness.' } },
      { icon: '🔬', title: { zh: '為何值得讀', en: 'Why it matters' }, text: { zh: '書中每個主張都建立在數十年的實驗證據上——琳達問題、定錨、迴歸均值、亞洲疾病問題……讀它，就是在拿一面鏡子照自己的思考。', en: 'Every claim rests on decades of experiments — the Linda problem, anchoring, regression to the mean, the Asian disease problem. To read it is to hold a mirror to your own thinking.' } },
      { icon: '🎯', title: { zh: '閱讀建議', en: 'How to read it' }, text: { zh: '先看「概念譜」認識系統一/二與主要偏誤，再對照「思想軸」了解研究脈絡。逐章閱讀時，抓住三件事：這章的論點、它怎麼論證、它舉了什麼實驗。', en: 'Start with the Concept map to meet System 1/2 and the main biases; use the Timeline for context. In each chapter, grab three things: its claim, its argument, and the experiment behind it.' } }
    ],
    guide: [
      { h: { zh: '先建立概念地圖', en: 'Build the concept map first' }, p: { zh: '到「概念譜」認識系統一、系統二與兩個自我，以及定錨、可得性、代表性、損失趨避等關鍵機制——它們會反覆出現。', en: 'In the Concept map, meet System 1, System 2, the two selves, and the key mechanisms — anchoring, availability, representativeness, loss aversion — that recur throughout.' } },
      { h: { zh: '對照思想軸', en: 'Follow the timeline' }, p: { zh: '打開「思想軸」，了解康納曼與特沃斯基的研究如何一步步推進，這本書在整個學術脈絡中的位置。', en: 'Open the Timeline to see how Kahneman and Tversky’s research unfolded, and where this book sits in that arc.' } },
      { h: { zh: '逐章抓三件事', en: 'Grab three things per chapter' }, p: { zh: '每一章都問自己：①它的核心論點是什麼？②它怎麼論證？③它用了哪個實驗或實例？「閱讀」模組已替你把每章拆成這三塊。', en: 'For each chapter ask: (1) the core claim, (2) the argument, (3) the experiment or example. The Reader already splits every chapter into exactly these blocks.' } },
      { h: { zh: '從主題回看全局', en: 'Zoom out with the themes' }, p: { zh: '讀完後到「主題」模組，把散落各章的概念收攏成六條主線，看見全書的論證弧線。', en: 'Afterwards, use the Themes to gather scattered ideas into six threads and see the book’s whole arc.' } },
      { h: { zh: '把它用回自己身上', en: 'Turn it on yourself' }, p: { zh: '在「思考題」與「札記」裡，試著找出你自己生活中的偏誤實例——這本書真正的價值，在於改變你觀察自己的方式。', en: 'In the Reflection prompts and Notes, hunt for your own biases in daily life — the book’s real value is changing how you watch yourself think.' } }
    ]
  },
  labels: {
    nav: { characters: { zh: '概念譜', en: 'Concepts' }, timeline: { zh: '思想軸', en: 'Timeline' } },
    headers: { characters: { zh: '核心概念譜', en: 'Core Concepts' }, timeline: { zh: '思想演進軸', en: 'Intellectual Timeline' } },
    subheads: { characters: { zh: '點擊概念卡或關係圖，看每個心智機制如何運作', en: 'Click a concept card or a node to see how each mechanism works' }, timeline: { zh: '從一場傳奇的學術友誼，到一本書：判斷與決策研究的推進', en: 'From a legendary partnership to a book: the arc of judgment-and-decision research' } },
    timelineTypes: { history: { zh: '研究里程碑', en: 'Research milestone' }, novel: { zh: '書中對應', en: 'In the book' }, character: { zh: '關鍵實驗', en: 'Key experiment' } },
    charDetail: { intro: { zh: '概念說明', en: 'What it is' }, analysis: { zh: '深入解讀', en: 'Deeper reading' }, related: { zh: '相關概念', en: 'Related concepts' }, tags: { zh: '關鍵標籤', en: 'Tags' }, empty: '—' },
    legend: { lead: { zh: '核心系統', en: 'Core system' }, major: { zh: '重要概念', en: 'Key concept' }, minor: { zh: '次要概念', en: 'Secondary' }, edge: { zh: '概念關聯', en: 'Concept link' } }
  },
  families: [ { id: 'sys', label: { zh: '系統與自我', en: 'Systems & Selves' } }, { id: 'bias', label: { zh: '捷思與偏誤', en: 'Heuristics & Biases' } }, { id: 'decision', label: { zh: '決策與展望理論', en: 'Choices & Prospect Theory' } } ],
  graph: {
    title: { zh: '— 系 統 一 、 系 統 二 與 主 要 偏 誤 —', en: '— System 1, System 2, and the Main Biases —' },
    nodes: [
      { id: 'system1', label: { zh: '系統一', en: 'System 1' }, x: 225, y: 150, tier: 'lead', color: '#cf7d55' },
      { id: 'system2', label: { zh: '系統二', en: 'System 2' }, x: 575, y: 150, tier: 'lead', color: '#5f86b3' },
      { id: 'wysiati', label: { zh: 'WYSIATI', en: 'WYSIATI' }, x: 355, y: 220, tier: 'major', color: '#d0a552' },
      { id: 'substitution', label: { zh: '替代作用', en: 'Substitution' }, x: 150, y: 250, tier: 'minor', color: '#cf7d55' },
      { id: 'representativeness', label: { zh: '代表性', en: 'Representativeness' }, x: 255, y: 320, tier: 'major', color: '#cf7d55' },
      { id: 'availability', label: { zh: '可得性', en: 'Availability' }, x: 140, y: 355, tier: 'minor', color: '#cf7d55' },
      { id: 'anchoring', label: { zh: '定錨', en: 'Anchoring' }, x: 330, y: 375, tier: 'minor', color: '#cf7d55' },
      { id: 'regression', label: { zh: '迴歸均值', en: 'Regression' }, x: 445, y: 250, tier: 'minor', color: '#5f86b3' },
      { id: 'prospect', label: { zh: '展望理論', en: 'Prospect Theory' }, x: 605, y: 285, tier: 'major', color: '#d0a552' },
      { id: 'lossaversion', label: { zh: '損失趨避', en: 'Loss Aversion' }, x: 545, y: 380, tier: 'minor', color: '#cf7d55' },
      { id: 'framing', label: { zh: '框架效應', en: 'Framing' }, x: 680, y: 365, tier: 'minor', color: '#5f86b3' },
      { id: 'remembering', label: { zh: '記憶自我', en: 'Remembering Self' }, x: 460, y: 405, tier: 'minor', color: '#b5727a' }
    ],
    edges: [
      { from: 'system1', to: 'system2', kind: 'rivalry' },
      { from: 'system1', to: 'wysiati', kind: 'family' },
      { from: 'system1', to: 'substitution', kind: 'family' },
      { from: 'system1', to: 'representativeness', kind: 'family' },
      { from: 'system1', to: 'availability', kind: 'family' },
      { from: 'system1', to: 'anchoring', kind: 'family' },
      { from: 'system2', to: 'regression', kind: 'family' },
      { from: 'prospect', to: 'lossaversion', kind: 'family' },
      { from: 'prospect', to: 'framing', kind: 'family' },
      { from: 'system2', to: 'prospect', kind: 'love' },
      { from: 'prospect', to: 'remembering', kind: 'love' }
    ]
  },
  footer: {
    quote: { zh: '「我們對顯而易見的事視而不見，也對自己的視而不見渾然不覺。」', en: '“We can be blind to the obvious, and we are also blind to our blindness.”' },
    tagline: { zh: '快思慢想 · 沉浸式閱讀 · 一趟看清自己如何思考的旅程', en: 'Thinking, Fast and Slow · Immersive Reading · a journey into how you think' }
  }
};

const CHAPTERS = [
  { id: 1,  group: { zh: '第一部 · 兩個系統', en: 'Part I · Two Systems' }, title: { zh: '故事的主角：兩個系統', en: 'The Characters of the Story: Two Systems' }, reflectQ: { zh: '系統一與系統二的分工，如何解釋「一邊開車一邊聊天，遇到狀況卻突然安靜」？', en: 'How does the division between System 1 and System 2 explain going quiet mid-conversation when the driving suddenly gets hard?' } },
  { id: 2,  group: { zh: '第一部 · 兩個系統', en: 'Part I · Two Systems' }, title: { zh: '注意力與努力', en: 'Attention and Effort' }, reflectQ: { zh: '為什麼費力的思考會讓瞳孔放大，也讓你對周遭視而不見？', en: 'Why does effortful thinking dilate your pupils — and make you blind to what is right in front of you?' } },
  { id: 3,  group: { zh: '第一部 · 兩個系統', en: 'Part I · Two Systems' }, title: { zh: '懶惰的控制者', en: 'The Lazy Controller' }, reflectQ: { zh: '「自我耗損」意味意志力像肌肉會累——這對你安排一天的重要決策有什麼提醒？', en: 'If willpower depletes like a muscle (ego depletion), when should you schedule your important decisions?' } },
  { id: 4,  group: { zh: '第一部 · 兩個系統', en: 'Part I · Two Systems' }, title: { zh: '聯想機器', en: 'The Associative Machine' }, reflectQ: { zh: '促發效應能在你毫無察覺下改變行為，這件事讓你不安還是好奇？', en: 'Priming can change your behavior without your awareness. Does that unsettle you, or intrigue you?' } },
  { id: 5,  group: { zh: '第一部 · 兩個系統', en: 'Part I · Two Systems' }, title: { zh: '認知放鬆', en: 'Cognitive Ease' }, reflectQ: { zh: '為什麼「讀起來順、看過很多次」的東西，會讓你更容易相信它是真的？', en: 'Why does something that reads smoothly, or that you have seen many times, feel more true?' } },
  { id: 6,  group: { zh: '第一部 · 兩個系統', en: 'Part I · Two Systems' }, title: { zh: '常態、驚訝與因果', en: 'Norms, Surprises, and Causes' }, reflectQ: { zh: '系統一是說故事高手：它如何自動、且過度地替一切編出因果？', en: 'System 1 is a storyteller. How does it automatically — and excessively — impose causes on everything?' } },
  { id: 7,  group: { zh: '第一部 · 兩個系統', en: 'Part I · Two Systems' }, title: { zh: '一部驟下結論的機器', en: 'A Machine for Jumping to Conclusions' }, reflectQ: { zh: 'WYSIATI：資訊不足時，你為何反而更容易編出一個自信的結論？', en: 'WYSIATI: why does having less information often make it easier to reach a confident conclusion?' } },
  { id: 8,  group: { zh: '第一部 · 兩個系統', en: 'Part I · Two Systems' }, title: { zh: '判斷如何發生', en: 'How Judgments Happen' }, reflectQ: { zh: '系統一不請自來地替你算好各種「基本評估」——這對第一印象有何影響？', en: 'System 1 computes “basic assessments” unbidden. What does that do to first impressions?' } },
  { id: 9,  group: { zh: '第一部 · 兩個系統', en: 'Part I · Two Systems' }, title: { zh: '回答一個比較簡單的問題', en: 'Answering an Easier Question' }, reflectQ: { zh: '替代作用：你上一次把難題偷換成一個簡單的問題來答，是什麼時候？', en: 'Substitution: when did you last answer an easy question in place of a hard one — without noticing?' } },
  { id: 10, group: { zh: '第二部 · 捷思與偏誤', en: 'Part II · Heuristics and Biases' }, title: { zh: '小數法則', en: 'The Law of Small Numbers' }, reflectQ: { zh: '為什麼「最安全／最危險」的排名，常常只是小樣本的統計假象？', en: 'Why are “safest / most dangerous” rankings so often just artifacts of small samples?' } },
  { id: 11, group: { zh: '第二部 · 捷思與偏誤', en: 'Part II · Heuristics and Biases' }, title: { zh: '錨點', en: 'Anchors' }, reflectQ: { zh: '一個明顯無關的數字，如何污染你接下來的估價與談判？', en: 'How does an obviously irrelevant number contaminate your later estimates and negotiations?' } },
  { id: 12, group: { zh: '第二部 · 捷思與偏誤', en: 'Part II · Heuristics and Biases' }, title: { zh: '可得性的科學', en: 'The Science of Availability' }, reflectQ: { zh: '你對風險高低的排序，有多少其實是被「最近的新聞」決定的？', en: 'How much of your ranking of risks is really set by whatever was in the recent news?' } },
  { id: 13, group: { zh: '第二部 · 捷思與偏誤', en: 'Part II · Heuristics and Biases' }, title: { zh: '可得性、情緒與風險', en: 'Availability, Emotion, and Risk' }, reflectQ: { zh: '情緒與媒體如何放大罕見風險、淡化真正的殺手？', en: 'How do emotion and media inflate rare risks while playing down the real killers?' } },
  { id: 14, group: { zh: '第二部 · 捷思與偏誤', en: 'Part II · Heuristics and Biases' }, title: { zh: '湯姆 W 的專長', en: "Tom W's Specialty" }, reflectQ: { zh: '代表性 vs 基率：「像不像」，為什麼不等於「是不是」？', en: 'Representativeness vs base rates: why does “how similar” not equal “how likely”?' } },
  { id: 15, group: { zh: '第二部 · 捷思與偏誤', en: 'Part II · Heuristics and Biases' }, title: { zh: '琳達：少即是多', en: 'Linda: Less Is More' }, reflectQ: { zh: '合取謬誤：為什麼「又是 A 又是 B」感覺比「只是 A」更可能？', en: 'The conjunction fallacy: why does “A and B” feel more likely than “A” alone?' } },
  { id: 16, group: { zh: '第二部 · 捷思與偏誤', en: 'Part II · Heuristics and Biases' }, title: { zh: '因果勝過統計', en: 'Causes Trump Statistics' }, reflectQ: { zh: '為什麼我們願意接受「有因果的基率」，卻無視「純統計的基率」？', en: 'Why do we accept “causal” base rates but ignore purely statistical ones?' } },
  { id: 17, group: { zh: '第二部 · 捷思與偏誤', en: 'Part II · Heuristics and Biases' }, title: { zh: '迴歸均值', en: 'Regression to the Mean' }, reflectQ: { zh: '「責罵有效、讚美有害」的錯覺，如何被迴歸均值一舉解釋掉？', en: 'How does regression to the mean explain the illusion that punishment works and praise backfires?' } },
  { id: 18, group: { zh: '第二部 · 捷思與偏誤', en: 'Part II · Heuristics and Biases' }, title: { zh: '馴服直覺預測', en: 'Taming Intuitive Predictions' }, reflectQ: { zh: '如何校正過度極端的直覺預測，把它往平均拉回一些？', en: 'How do you correct an over-extreme intuitive prediction by pulling it back toward the average?' } },
  { id: 19, group: { zh: '第三部 · 過度自信', en: 'Part III · Overconfidence' }, title: { zh: '理解的錯覺', en: 'The Illusion of Understanding' }, reflectQ: { zh: '後見之明如何讓我們誤以為「過去可預測，所以未來也能掌握」？', en: 'How does hindsight fool us into thinking the past was predictable — and the future controllable?' } },
  { id: 20, group: { zh: '第三部 · 過度自信', en: 'Part III · Overconfidence' }, title: { zh: '效度的錯覺', en: 'The Illusion of Validity' }, reflectQ: { zh: '選股專家的績效近乎隨機，為何他們仍對自己深信不疑？', en: 'Stock pickers perform near random — so why do they stay so sure of themselves?' } },
  { id: 21, group: { zh: '第三部 · 過度自信', en: 'Part III · Overconfidence' }, title: { zh: '直覺 vs 公式', en: 'Intuitions vs. Formulas' }, reflectQ: { zh: '為什麼一條簡單的統計公式，常常打敗專家的臨床直覺？', en: 'Why does a simple statistical formula so often beat expert clinical intuition?' } },
  { id: 22, group: { zh: '第三部 · 過度自信', en: 'Part III · Overconfidence' }, title: { zh: '專家的直覺：何時可信？', en: 'Expert Intuition: When Can We Trust It?' }, reflectQ: { zh: '可信的專業直覺需要兩個條件：規律的環境＋長期回饋。你身邊的專家符合嗎？', en: 'Trustworthy expert intuition needs two things: a regular environment and prolonged feedback. Do the experts around you have both?' } },
  { id: 23, group: { zh: '第三部 · 過度自信', en: 'Part III · Overconfidence' }, title: { zh: '外部觀點', en: 'The Outside View' }, reflectQ: { zh: '規劃謬誤：為什麼「參考同類案例」比「埋頭細算」更準？', en: 'The planning fallacy: why does referencing similar cases beat crunching your own details?' } },
  { id: 24, group: { zh: '第三部 · 過度自信', en: 'Part III · Overconfidence' }, title: { zh: '資本主義的引擎', en: 'The Engine of Capitalism' }, reflectQ: { zh: '樂觀偏誤既推動創業與冒險、也製造失敗——你如何拿捏這把雙面刃？', en: 'Optimism bias drives entrepreneurship and risk-taking but also produces failure. How do you wield this double-edged sword?' } },
  { id: 25, group: { zh: '第四部 · 選擇', en: 'Part IV · Choices' }, title: { zh: '柏努利的錯誤', en: "Bernoulli's Errors" }, reflectQ: { zh: '為什麼「只看最終財富」是錯的？該看的是相對於參考點的變化。', en: 'Why is “final wealth only” wrong? What matters is change relative to a reference point.' } },
  { id: 26, group: { zh: '第四部 · 選擇', en: 'Part IV · Choices' }, title: { zh: '展望理論', en: 'Prospect Theory' }, reflectQ: { zh: '參考點、敏感度遞減、損失趨避——這三根支柱如何改寫了決策理論？', en: 'Reference point, diminishing sensitivity, loss aversion — how did these three pillars rewrite decision theory?' } },
  { id: 27, group: { zh: '第四部 · 選擇', en: 'Part IV · Choices' }, title: { zh: '稟賦效應', en: 'The Endowment Effect' }, reflectQ: { zh: '為什麼一樣東西一旦屬於你，你的賣價就遠高於當初願意買的價？', en: 'Why does owning something make your selling price far higher than what you would have paid to buy it?' } },
  { id: 28, group: { zh: '第四部 · 選擇', en: 'Part IV · Choices' }, title: { zh: '壞事', en: 'Bad Events' }, reflectQ: { zh: '負面性與損失趨避：為什麼「壞」比「好」更有力、威脅比機會更搶注意？', en: 'Negativity and loss aversion: why is “bad” stronger than “good,” and why do threats grab attention over opportunities?' } },
  { id: 29, group: { zh: '第四部 · 選擇', en: 'Part IV · Choices' }, title: { zh: '四重模式', en: 'The Fourfold Pattern' }, reflectQ: { zh: '同一個人既買彩券又買保險，如何用「機率 × 得失」一次解釋？', en: 'How does “probability × gains-and-losses” explain, in one stroke, why the same person buys both lottery tickets and insurance?' } },
  { id: 30, group: { zh: '第四部 · 選擇', en: 'Part IV · Choices' }, title: { zh: '罕見事件', en: 'Rare Events' }, reflectQ: { zh: '為什麼我們會同時「高估」又「忽視」罕見事件？', en: 'Why do we both overestimate and neglect rare events at the same time?' } },
  { id: 31, group: { zh: '第四部 · 選擇', en: 'Part IV · Choices' }, title: { zh: '風險政策', en: 'Risk Policies' }, reflectQ: { zh: '為什麼「一筆一筆分開看」會讓你過度趨避風險？寬框架有何好處？', en: 'Why does evaluating decisions one at a time make you over-averse to risk — and what does broad framing buy you?' } },
  { id: 32, group: { zh: '第五部 · 兩個自我', en: 'Part V · Two Selves' }, title: { zh: '記分', en: 'Keeping Score' }, reflectQ: { zh: '心理帳戶與沉沒成本：為什麼你會為了「不認賠」而繼續錯下去？', en: 'Mental accounting and sunk costs: why do you keep going wrong just to avoid booking a loss?' } },
  { id: 33, group: { zh: '第五部 · 兩個自我', en: 'Part V · Two Selves' }, title: { zh: '逆轉', en: 'Reversals' }, reflectQ: { zh: '單獨評估 vs 並列評估：為什麼把選項擺在一起，你的偏好就變了？', en: 'Single vs joint evaluation: why do your preferences flip when the options are placed side by side?' } },
  { id: 34, group: { zh: '第五部 · 兩個自我', en: 'Part V · Two Selves' }, title: { zh: '框架與現實', en: 'Frames and Reality' }, reflectQ: { zh: '「存活率 90%」與「死亡率 10%」，為何讓你做出相反的選擇？', en: 'Why do “90% survival” and “10% mortality” lead you to opposite choices?' } },
  { id: 35, group: { zh: '第五部 · 兩個自我', en: 'Part V · Two Selves' }, title: { zh: '兩個自我', en: 'Two Selves' }, reflectQ: { zh: '經驗自我與記憶自我：我們到底是為「體驗」還是為「回憶」而活？', en: 'Experiencing self vs remembering self: do we live for the experience, or for the memory?' } },
  { id: 36, group: { zh: '第五部 · 兩個自我', en: 'Part V · Two Selves' }, title: { zh: '人生如故事', en: 'Life as a Story' }, reflectQ: { zh: '為什麼「結局」對我們評價一段人生的份量，遠超過它應得的？', en: 'Why does the ending carry far more weight in how we judge a life than it deserves?' } },
  { id: 37, group: { zh: '第五部 · 兩個自我', en: 'Part V · Two Selves' }, title: { zh: '體驗的幸福', en: 'Experienced Well-Being' }, reflectQ: { zh: '用「經驗抽樣」測到的幸福，和你「回想起來的幸福」為何常常不同？', en: 'Why does happiness measured by experience sampling so often differ from the happiness you remember?' } },
  { id: 38, group: { zh: '第五部 · 兩個自我', en: 'Part V · Two Selves' }, title: { zh: '思考人生', en: 'Thinking About Life' }, reflectQ: { zh: '聚焦錯覺：當你正想著某件事，它是不是總顯得比實際更重要？', en: 'The focusing illusion: when you are thinking about something, does it not always seem more important than it is?' } }
];

const CHARACTERS = [
  { id: 'system1', name: { zh: '系統一（快思）', en: 'System 1 (Fast)' }, family: 'sys', role: { zh: '自動、快速、直覺', en: 'Automatic, fast, intuitive' }, icon: '⚡', color: '#cf7d55',
    desc: { zh: '不費力、自動運作的直覺系統，隨時對世界產生印象、感覺與衝動。你無法把它關掉。', en: 'The effortless, automatic system of intuition — constantly generating impressions, feelings, and impulses. You cannot switch it off.' },
    analysis: { zh: '系統一是全書真正的主角。它擅長聯想、辨識模式、快速反應，是我們絕大多數日常判斷的來源；但它也是各種偏誤的源頭——它把「容易想到」當成「真的」，把「連貫的故事」當成「事實」，看到什麼就用什麼下結論。（第 1–9 章）', en: 'System 1 is the book’s real protagonist. It excels at association, pattern-recognition, and fast reaction, and it produces the vast majority of our everyday judgments — but it is also the source of the biases: it treats what comes to mind easily as true, and a coherent story as fact, drawing conclusions from whatever it sees. (Ch. 1–9)' },
    tags: [ { zh: '自動', en: 'automatic' }, { zh: '直覺', en: 'intuitive' }, { zh: '聯想', en: 'associative' }, { zh: '省力', en: 'effortless' } ], related: ['system2', 'wysiati'] },
  { id: 'system2', name: { zh: '系統二（慢想）', en: 'System 2 (Slow)' }, family: 'sys', role: { zh: '費力、緩慢、慎思', en: 'Effortful, slow, deliberate' }, icon: '🧭', color: '#5f86b3',
    desc: { zh: '需要專注與努力才能運作的推理系統，負責自我控制、複雜計算，以及檢查系統一的建議。', en: 'The reasoning system that runs only with attention and effort — responsible for self-control, complex computation, and checking System 1’s suggestions.' },
    analysis: { zh: '系統二自以為是主角，其實多半是配角。它懶惰、容易疲累（自我耗損），常常不加審查就替系統一的直覺背書。真正的理性思考代價高昂，所以我們大部分時候都在「靠系統一過活」。（第 2–3 章）', en: 'System 2 believes it is the star but is mostly a supporting actor. It is lazy and easily fatigued (ego depletion), and often endorses System 1’s intuitions without review. Genuine reasoning is costly, so most of the time we simply live off System 1. (Ch. 2–3)' },
    tags: [ { zh: '慎思', en: 'deliberate' }, { zh: '自控', en: 'self-control' }, { zh: '費力', en: 'effortful' }, { zh: '懶惰', en: 'lazy' } ], related: ['system1'] },
  { id: 'wysiati', name: { zh: 'WYSIATI（你所見即全部）', en: 'WYSIATI (What You See Is All There Is)' }, family: 'sys', role: { zh: '系統一的運作鐵律', en: 'System 1’s governing rule' }, icon: '🔦', color: '#d0a552',
    desc: { zh: 'What You See Is All There Is。系統一只用「眼前現有的資訊」建構故事，完全不理會缺失的資訊。', en: 'System 1 builds a story only from the information at hand, taking no account of what is missing.' },
    analysis: { zh: '這是理解過度自信的鑰匙。我們對手上這點資訊編出一個連貫的故事就滿意了，從不追問「我還缺了什麼」。資訊越少，有時反而越容易編出自信的故事。（第 7 章）', en: 'This is the key to overconfidence. We are satisfied once we spin a coherent story from the little we have, never asking what we are missing. Less information can make a confident story easier, not harder. (Ch. 7)' },
    tags: [ { zh: '資訊忽略', en: 'ignores gaps' }, { zh: '過度自信', en: 'overconfidence' }, { zh: '連貫性', en: 'coherence' } ], related: ['system1', 'overconfidence'] },
  { id: 'experiencing', name: { zh: '經驗自我', en: 'The Experiencing Self' }, family: 'sys', role: { zh: '當下正在體驗的你', en: 'The you that lives each moment' }, icon: '⏱️', color: '#6f9a7f',
    desc: { zh: '活在每一個「當下」、真正在經歷快樂與痛苦的那個你。它的時間以「此刻」為單位。', en: 'The self that lives in each present moment, actually feeling pleasure and pain. Its unit of time is “now.”' },
    analysis: { zh: '經驗自我承受了人生實際的每一分每一秒，卻幾乎沒有發言權——因為做決定的是記憶自我。這兩個自我對「幸福」的答案常常互相矛盾。（第 35、37 章）', en: 'The experiencing self bears every actual minute of life, yet has almost no vote — because the remembering self makes the decisions. The two selves often give contradictory answers about happiness. (Ch. 35, 37)' },
    tags: [ { zh: '當下', en: 'the present' }, { zh: '體驗', en: 'experience' }, { zh: '時長', en: 'duration' } ], related: ['remembering', 'peakend'] },
  { id: 'remembering', name: { zh: '記憶自我', en: 'The Remembering Self' }, family: 'sys', role: { zh: '事後回憶、評價、做決定的你', en: 'The you that remembers, rates, and decides' }, icon: '📸', color: '#b5727a',
    desc: { zh: '事後負責回憶、講述、評價一段經驗，並據此做未來決定的那個你。', en: 'The self that afterward remembers, narrates, and evaluates an experience — and makes future decisions on that basis.' },
    analysis: { zh: '我們以為自己追求「體驗」，其實我們為「回憶」而活。記憶自我用峰終定律評價經驗、又忽略時長，於是我們常為了一個更好的「故事」，犧牲了實際更好的「體驗」。（第 35–36 章）', en: 'We think we pursue experiences, but we live for memories. The remembering self judges by the peak-end rule and neglects duration, so we routinely sacrifice a better experience for a better story. (Ch. 35–36)' },
    tags: [ { zh: '回憶', en: 'memory' }, { zh: '評價', en: 'evaluation' }, { zh: '峰終', en: 'peak-end' }, { zh: '忽略時長', en: 'duration neglect' } ], related: ['experiencing', 'peakend'] },
  { id: 'econshumans', name: { zh: '經濟人 vs 凡人', en: 'Econs vs Humans' }, family: 'sys', role: { zh: '理論假設 vs 真實人類', en: 'Theory’s agent vs real people' }, icon: '🎭', color: '#d0a552',
    desc: { zh: 'Econs（經濟人）完全理性、前後一致；Humans（凡人）受系統一擺布、被框架左右、會後悔。', en: 'Econs are perfectly rational and consistent; Humans are swayed by System 1, moved by framing, and prone to regret.' },
    analysis: { zh: '這是康納曼與傳統經濟學最根本的爭執。政策與制度若假設人是 Econs，就會失準；唯有承認人是 Humans，才談得上用「助推」去幫人做更好的選擇。（第 25、34 章）', en: 'This is Kahneman’s core quarrel with classical economics. Policies that assume people are Econs go astray; only by admitting we are Humans can we “nudge” people toward better choices. (Ch. 25, 34)' },
    tags: [ { zh: '理性假設', en: 'rationality assumption' }, { zh: '行為經濟學', en: 'behavioral economics' }, { zh: '助推', en: 'nudge' } ], related: ['framing', 'prospect'] },
  { id: 'substitution', name: { zh: '替代作用', en: 'Substitution' }, family: 'bias', role: { zh: '以易答代難答', en: 'Answering an easier question' }, icon: '🔀', color: '#cf7d55',
    desc: { zh: '遇到難題（目標問題），系統一偷偷換成一個容易的問題（捷思問題）來回答，自己卻不自覺。', en: 'Facing a hard target question, System 1 quietly swaps in an easy heuristic question and answers that — without noticing the swap.' },
    analysis: { zh: '這是所有捷思的共同機制。「這位候選人會是好總統嗎」被換成「他看起來夠不夠有領袖相」；「我對人生滿意嗎」被換成「我此刻心情如何」。替代讓我們答得又快又有信心，卻答錯了題。（第 9 章）', en: 'This is the common machinery of every heuristic. “Will this candidate be a good president?” becomes “Does he look the part?”; “Am I satisfied with my life?” becomes “What is my mood right now?” Substitution makes us answer fast and confidently — to the wrong question. (Ch. 9)' },
    tags: [ { zh: '捷思核心', en: 'heuristic core' }, { zh: '目標問題', en: 'target question' }, { zh: '捷思問題', en: 'heuristic question' } ], related: ['system1', 'representativeness'] },
  { id: 'anchoring', name: { zh: '定錨效應', en: 'Anchoring' }, family: 'bias', role: { zh: '任意數字污染判斷', en: 'A stray number drags your estimate' }, icon: '⚓', color: '#cf7d55',
    desc: { zh: '先接觸到的數字會像錨一樣，把後續的估計拉向它——即使那個數字明顯無關。', en: 'A number you meet first acts as an anchor, pulling later estimates toward it — even when it is plainly irrelevant.' },
    analysis: { zh: '轉輪盤轉出的隨機數字，都能左右人們對「非洲國家佔聯合國比例」的估計。定錨同時來自系統二的「調整不足」與系統一的「促發」。談判開價、商品定價、募款金額，全都在利用它。（第 11 章）', en: 'A random number from a wheel of fortune shifted people’s estimates of the share of African nations in the UN. Anchoring comes both from System 2’s insufficient adjustment and System 1’s priming. Opening offers, pricing, and fundraising asks all exploit it. (Ch. 11)' },
    tags: [ { zh: '促發', en: 'priming' }, { zh: '調整不足', en: 'insufficient adjustment' }, { zh: '談判', en: 'negotiation' } ], related: ['system1'] },
  { id: 'availability', name: { zh: '可得性捷思', en: 'The Availability Heuristic' }, family: 'bias', role: { zh: '好想到＝常發生', en: 'Easy to recall = common' }, icon: '🌊', color: '#cf7d55',
    desc: { zh: '用「例子有多容易浮現腦海」來判斷一件事的頻率或機率。', en: 'Judging how frequent or likely something is by how easily examples come to mind.' },
    analysis: { zh: '空難、鯊魚攻擊被高估，中風、糖尿病被低估——因為前者上新聞、後者不上。媒體與情緒塑造了「可得性」，於是塑造了我們對整個世界的風險感。（第 12–13 章）', en: 'Plane crashes and shark attacks are overestimated; strokes and diabetes underestimated — because the former make the news and the latter do not. Media and emotion shape availability, and so shape our whole sense of risk. (Ch. 12–13)' },
    tags: [ { zh: '風險認知', en: 'risk perception' }, { zh: '媒體', en: 'media' }, { zh: '情緒', en: 'emotion' } ], related: ['system1'] },
  { id: 'representativeness', name: { zh: '代表性捷思', en: 'Representativeness' }, family: 'bias', role: { zh: '像不像＝是不是', en: 'How similar = how likely' }, icon: '🧩', color: '#cf7d55',
    desc: { zh: '用「像不像某個刻板印象」來判斷機率，卻忽略了基率與統計。', en: 'Judging probability by resemblance to a stereotype, while ignoring base rates and statistics.' },
    analysis: { zh: '「湯姆 W」與「琳達問題」的核心。因為琳達「像」女性主義者，多數人竟認為「琳達是銀行員且是女性主義者」比「琳達是銀行員」更可能——這違反了機率最基本的規則（合取謬誤）。（第 14–15 章）', en: 'The heart of “Tom W” and the Linda problem. Because Linda “resembles” a feminist, most people rate “bank teller and feminist” as more likely than “bank teller” — violating the most basic rule of probability (the conjunction fallacy). (Ch. 14–15)' },
    tags: [ { zh: '基率忽略', en: 'base-rate neglect' }, { zh: '合取謬誤', en: 'conjunction fallacy' }, { zh: '刻板印象', en: 'stereotype' } ], related: ['substitution', 'system1'] },
  { id: 'regression', name: { zh: '迴歸均值', en: 'Regression to the Mean' }, family: 'bias', role: { zh: '極端之後回歸平庸', en: 'Extremes drift back to average' }, icon: '📉', color: '#5f86b3',
    desc: { zh: '極端的表現（極好或極壞）之後，下一次通常會更接近平均——純粹是運氣成分的回歸。', en: 'After an extreme performance (very good or very bad), the next is usually closer to average — purely the regression of the luck component.' },
    analysis: { zh: '教官責罵表現差的飛行員，下次就進步；讚美表現好的，下次就退步——於是他相信責罵有效、讚美有害。其實那只是迴歸均值。這是最反直覺、也最常被系統一用因果故事掩蓋掉的統計事實。（第 17 章）', en: 'An instructor scolds a pilot after a bad run and sees improvement; praises a good run and sees decline — so he concludes punishment works and praise harms. It is only regression to the mean. This is the most counterintuitive statistical fact, and the one System 1 most often buries under a causal story. (Ch. 17)' },
    tags: [ { zh: '統計', en: 'statistics' }, { zh: '反直覺', en: 'counterintuitive' }, { zh: '因果錯覺', en: 'causal illusion' } ], related: ['system2'] },
  { id: 'overconfidence', name: { zh: '過度自信／效度錯覺', en: 'Overconfidence / Illusion of Validity' }, family: 'bias', role: { zh: '對判斷的盲目信心', en: 'Blind faith in one’s judgments' }, icon: '🎯', color: '#d0a552',
    desc: { zh: '對自己判斷的信心，往往遠遠超過那些判斷實際的準確度。', en: 'Confidence in one’s judgments routinely far exceeds their actual accuracy.' },
    analysis: { zh: '選股專家的長期績效與擲骰子無異，卻靠一套連貫的敘事維持專業自信（效度錯覺）。信心來自「故事的連貫」，而不是「證據的品質」——這正是後見之明與規劃謬誤的共同根源。（第 19–20、24 章）', en: 'Stock pickers’ long-run performance is no better than dice, yet they sustain professional confidence with a coherent narrative (the illusion of validity). Confidence flows from the coherence of the story, not the quality of the evidence — the common root of hindsight and the planning fallacy. (Ch. 19–20, 24)' },
    tags: [ { zh: '信心', en: 'confidence' }, { zh: '效度錯覺', en: 'illusion of validity' }, { zh: '後見之明', en: 'hindsight' } ], related: ['wysiati'] },
  { id: 'prospect', name: { zh: '展望理論', en: 'Prospect Theory' }, family: 'decision', role: { zh: '取代期望效用的決策模型', en: 'The model that replaced expected utility' }, icon: '⚖️', color: '#d0a552',
    desc: { zh: '人們評估的是相對於「參考點」的得與失，而非最終財富；面對損失趨向冒險，面對獲利趨向保守。', en: 'People evaluate gains and losses relative to a reference point, not final wealth; they turn risk-seeking for losses and risk-averse for gains.' },
    analysis: { zh: '讓康納曼拿下諾貝爾獎的理論。三大支柱：參考點、敏感度遞減、損失趨避。它修正了柏努利兩百年來的錯誤——效用不該只看財富的絕對水準，而要看相對於起點的「變化」。（第 25–26、29 章）', en: 'The theory that won Kahneman the Nobel. Three pillars: a reference point, diminishing sensitivity, and loss aversion. It corrected Bernoulli’s 200-year-old error — utility should track change from a starting point, not the absolute level of wealth. (Ch. 25–26, 29)' },
    tags: [ { zh: '諾貝爾獎', en: 'Nobel' }, { zh: '參考點', en: 'reference point' }, { zh: '得失', en: 'gains & losses' } ], related: ['lossaversion', 'framing', 'fourfold'] },
  { id: 'lossaversion', name: { zh: '損失趨避', en: 'Loss Aversion' }, family: 'decision', role: { zh: '損失的痛約為獲利之樂的兩倍', en: 'Losses loom about twice as large as gains' }, icon: '🩹', color: '#cf7d55',
    desc: { zh: '失去 100 元的痛，大約要得到 200 元的快樂才能抵銷。損失在心理上比同等的獲利更沉重。', en: 'The pain of losing $100 takes roughly the joy of gaining $200 to offset. Losses weigh more than equivalent gains.' },
    analysis: { zh: '這是展望理論的情感引擎，也解釋了稟賦效應（東西一旦屬於你，賣價就遠高於買價）、維持現狀偏誤，以及談判為何如此艱難——因為雙方都把「讓步」感受成「損失」。（第 27–28 章）', en: 'This is the emotional engine of prospect theory, and it explains the endowment effect (owning something makes its selling price far exceed its buying price), status-quo bias, and why negotiation is so hard — each side feels a concession as a loss. (Ch. 27–28)' },
    tags: [ { zh: '損失', en: 'loss' }, { zh: '稟賦效應', en: 'endowment effect' }, { zh: '現狀偏誤', en: 'status-quo bias' } ], related: ['prospect'] },
  { id: 'framing', name: { zh: '框架效應', en: 'Framing' }, family: 'decision', role: { zh: '換句話說就換了選擇', en: 'Rephrase it and the choice flips' }, icon: '🖼️', color: '#5f86b3',
    desc: { zh: '邏輯上完全相同的資訊，用不同措辭呈現（存活率 90% vs 死亡率 10%），會導致相反的選擇。', en: 'Logically identical information, phrased differently (90% survival vs 10% mortality), produces opposite choices.' },
    analysis: { zh: '「亞洲疾病問題」證明：偏好並不是穩定地長在我們心裡，而是被「問法」當場建構出來的。這動搖了經濟學「偏好一致」的根基，也是器官捐贈預設值能救命的原理。（第 34 章）', en: 'The Asian disease problem shows that preferences are not stable in our minds — they are constructed on the spot by how a question is posed. That shakes the foundation of consistent preferences, and it is why an organ-donation default can save lives. (Ch. 34)' },
    tags: [ { zh: '措辭', en: 'wording' }, { zh: '建構偏好', en: 'constructed preference' }, { zh: '預設值', en: 'defaults' } ], related: ['prospect', 'econshumans'] },
  { id: 'fourfold', name: { zh: '四重模式', en: 'The Fourfold Pattern' }, family: 'decision', role: { zh: '機率 × 得失的四種風險態度', en: 'Four risk attitudes across probability × outcome' }, icon: '🀄', color: '#d0a552',
    desc: { zh: '高機率獲利→怕輸而保守；高機率損失→賭一把而冒險；低機率獲利→買希望（彩券）；低機率損失→買安心（保險）。', en: 'High-probability gains → risk-averse; high-probability losses → risk-seeking; low-probability gains → buying hope (lotteries); low-probability losses → buying peace of mind (insurance).' },
    analysis: { zh: '展望理論最實用的預測表。它一次解釋了為什麼同一個人既買彩券又買保險，也解釋了絕望的一方在訴訟中為何會孤注一擲、而佔上風的一方為何願意接受不划算的和解。（第 29 章）', en: 'Prospect theory’s most practical prediction table. It explains in one stroke why the same person buys lotteries and insurance, why a desperate litigant gambles everything, and why the party with the upper hand accepts an unfavorable settlement. (Ch. 29)' },
    tags: [ { zh: '機率權重', en: 'probability weighting' }, { zh: '彩券', en: 'lotteries' }, { zh: '保險', en: 'insurance' }, { zh: '訴訟', en: 'litigation' } ], related: ['prospect'] },
  { id: 'peakend', name: { zh: '峰終定律', en: 'The Peak-End Rule' }, family: 'sys', role: { zh: '記憶只留下高峰與結尾', en: 'Memory keeps only the peak and the end' }, icon: '🎚️', color: '#b5727a',
    desc: { zh: '我們對一段經驗的整體評價，取決於「最強烈的時刻」與「結尾」，幾乎忽略它持續了多久（忽略時長）。', en: 'Our overall rating of an experience depends on its most intense moment and its end, all but ignoring how long it lasted (duration neglect).' },
    analysis: { zh: '「冷水實驗」中，多受一分鐘罪、但結尾沒那麼冷的那次，反而被記成比較不痛苦。記憶自我的這個偏誤，深刻影響我們如何評價一次假期、一段醫療、甚至一整段人生。（第 35–36 章）', en: 'In the cold-hand experiment, the trial with an extra minute of milder discomfort at the end is remembered as less painful. This bias of the remembering self shapes how we judge a vacation, a medical procedure, even a whole life. (Ch. 35–36)' },
    tags: [ { zh: '高峰', en: 'peak' }, { zh: '結尾', en: 'end' }, { zh: '忽略時長', en: 'duration neglect' } ], related: ['remembering', 'experiencing'] }
];

const TIMELINE_DATA = [
  { year: '1969', event: { zh: '康納曼與特沃斯基在希伯來大學相遇', en: 'Kahneman meets Tversky at the Hebrew University' }, novel: { zh: '兩位性格與思路迥異的心理學家展開傳奇合作——這是全書所有洞見的思想源頭。', en: 'Two very different psychologists begin a legendary collaboration — the source of every insight in this book.' }, type: 'history' },
  { year: '1971', event: { zh: '「小數法則」：連統計學家都誤判小樣本', en: '“The Law of Small Numbers”: even statisticians misjudge small samples' }, novel: { zh: '對應第 10 章。他們發現，即使是專業研究者，也高估了小樣本的穩定性。', en: 'Maps to Ch. 10. They found that even trained researchers overrate the reliability of small samples.' }, type: 'character' },
  { year: '1974', event: { zh: '《Science》發表〈不確定下的判斷：捷思與偏誤〉', en: 'Science publishes “Judgment under Uncertainty: Heuristics and Biases”' }, novel: { zh: '對應第二部。三大捷思（代表性、可得性、定錨）就此問世，行為經濟學奠基。', en: 'Maps to Part II. The three heuristics — representativeness, availability, anchoring — arrive, founding behavioral economics.' }, type: 'history' },
  { year: '1979', event: { zh: '《Econometrica》發表〈展望理論〉', en: 'Econometrica publishes “Prospect Theory”' }, novel: { zh: '對應第四部。史上被引用最多的經濟學論文之一，正式挑戰「理性人」假設。', en: 'Maps to Part IV. One of the most cited economics papers ever, it formally challenges the rational-agent assumption.' }, type: 'history' },
  { year: '1984', event: { zh: '框架效應與「亞洲疾病問題」', en: 'Framing and the “Asian disease problem”' }, novel: { zh: '對應第 34 章。證明同一件事換個說法，就能翻轉人的選擇。', en: 'Maps to Ch. 34. It shows that rephrasing the same facts can flip a person’s choice.' }, type: 'character' },
  { year: '1996', event: { zh: '阿莫斯·特沃斯基逝世', en: 'Amos Tversky dies' }, novel: { zh: '長達二十餘年的合作終止。本書處處是對這位摯友與夥伴的致意。', en: 'A partnership of more than twenty years ends. The book is, throughout, a tribute to this friend and collaborator.' }, type: 'history' },
  { year: '2002', event: { zh: '康納曼獲諾貝爾經濟學獎', en: 'Kahneman wins the Nobel Prize in Economics' }, novel: { zh: '以展望理論獲獎（諾獎不追授，已故的特沃斯基無法共享此榮譽）。', en: 'Awarded for prospect theory (the Nobel is not given posthumously, so Tversky could not share it).' }, type: 'history' },
  { year: '2011', event: { zh: '《快思慢想》出版', en: '“Thinking, Fast and Slow” is published' }, novel: { zh: '康納曼總結一生研究，寫給一般讀者的集大成之作——也就是你正在讀的這本書。', en: 'Kahneman’s lifetime synthesis for the general reader — the very book you are reading.' }, type: 'history' },
  { year: '2024', event: { zh: '康納曼逝世，享耆壽 90', en: 'Kahneman dies at 90' }, novel: { zh: '一位改變了我們理解「人如何思考」的巨人謝幕。', en: 'A giant who changed how we understand human thinking takes his leave.' }, type: 'history' }
];

const THEMES = [
  { id: 'twosys', icon: '⚙️', title: { zh: '兩個系統', en: 'Two Systems' }, subtitle: { zh: '快思與慢想的分工與衝突', en: 'The division and clash of fast and slow' }, color: '#d0a552',
    intro: { zh: '全書的地基：心智由兩套系統協作，也彼此拉扯。', en: 'The book’s foundation: the mind is two systems that cooperate — and pull against each other.' },
    body: { zh: '<p>系統一又快又自動，負責我們九成以上的日常判斷；系統二又慢又費力，負責推理與自我控制。問題在於：系統二很懶，常常不加審查就替系統一的直覺背書。於是我們自以為在「理性思考」，其實多半只是在替直覺找理由。</p><p>認識這兩個系統，是理解後面所有偏誤的前提——因為幾乎每一個偏誤，都是「系統一自動生成、系統二疏於把關」的產物。</p><div class="theme-quote">「系統一無法關機。你看到一個字，就無法不去讀它。」</div>', en: '<p>System 1 is fast and automatic and produces over ninety percent of our daily judgments; System 2 is slow and effortful, handling reasoning and self-control. The trouble is that System 2 is lazy and often endorses System 1’s intuitions unchecked. So we believe we are reasoning when we are mostly rationalizing.</p><p>Understanding the two systems is the prerequisite for everything that follows — because nearly every bias is a product of System 1 generating and System 2 failing to check.</p><div class="theme-quote">“System 1 cannot be turned off. You see a word, and you cannot not read it.”</div>' },
    chapters: ['1', '2', '3', '4', '7'] },
  { id: 'heuristics', icon: '🧩', title: { zh: '捷思與偏誤', en: 'Heuristics and Biases' }, subtitle: { zh: '走捷徑的代價', en: 'The price of shortcuts' }, color: '#cf7d55',
    intro: { zh: '面對難題，系統一改答一個簡單的問題——省事，卻系統性地出錯。', en: 'Facing a hard question, System 1 answers an easy one — convenient, but systematically wrong.' },
    body: { zh: '<p>代表性、可得性、定錨，是三大捷思。它們平時很好用，卻在特定情境下讓我們可預測地犯錯：忽略基率（湯姆 W）、違反機率規則（琳達）、被隨機數字牽著走（定錨）、把運氣當實力（迴歸均值）。</p><p>康納曼的重點不是「人很笨」，而是「人的錯誤有規律」——正因為有規律，才可以被研究、被預測、被防範。</p><div class="theme-quote">「這些偏誤不是隨機的失誤，而是系統一運作方式的必然產物。」</div>', en: '<p>Representativeness, availability, and anchoring are the three great heuristics. Usually handy, in specific settings they make us err predictably: ignoring base rates (Tom W), breaking the rules of probability (Linda), being led by random numbers (anchoring), mistaking luck for skill (regression).</p><p>Kahneman’s point is not that people are stupid, but that our errors are lawful — and being lawful, they can be studied, predicted, and guarded against.</p><div class="theme-quote">“These biases are not random slips; they are the necessary products of how System 1 works.”</div>' },
    chapters: ['10', '11', '12', '14', '15', '17'] },
  { id: 'overconf', icon: '🔦', title: { zh: 'WYSIATI 與過度自信', en: 'WYSIATI and Overconfidence' }, subtitle: { zh: '我們對自己的無知一無所知', en: 'We are ignorant of our own ignorance' }, color: '#d0a552',
    intro: { zh: '系統一只用眼前資訊編故事，於是我們對判斷的信心遠超過它該有的準確度。', en: 'System 1 builds stories from what is in view, so our confidence far outruns our accuracy.' },
    body: { zh: '<p>WYSIATI（你所見即全部）讓我們對片面資訊編出連貫的故事，還深信不疑。後見之明讓過去顯得可預測，於是我們高估了對未來的掌握；效度錯覺讓專家（如選股者）在績效近乎隨機時仍充滿自信。</p><p>解方是謙遜與紀律：用公式取代直覺、用外部觀點取代埋頭細算、用事前驗屍（premortem）逼自己想像失敗。</p><div class="theme-quote">「信心是一種感覺，反映的是資訊的連貫性，而非它的正確性。」</div>', en: '<p>WYSIATI lets us spin coherent, confident stories from partial information. Hindsight makes the past look predictable, so we overrate our grip on the future; the illusion of validity keeps experts (like stock pickers) confident even when performance is near random.</p><p>The remedy is humility and discipline: formulas over intuition, the outside view over head-down calculation, and the premortem to force yourself to imagine failure.</p><div class="theme-quote">“Confidence is a feeling; it reflects the coherence of the information, not its correctness.”</div>' },
    chapters: ['19', '20', '21', '22', '23', '24'] },
  { id: 'choices', icon: '⚖️', title: { zh: '展望理論與損失趨避', en: 'Prospect Theory and Loss Aversion' }, subtitle: { zh: '我們如何面對得與失', en: 'How we face gains and losses' }, color: '#cf7d55',
    intro: { zh: '康納曼的諾獎理論：人算的是相對參考點的得失，且怕輸更甚於愛贏。', en: 'Kahneman’s Nobel theory: people reckon gains and losses against a reference point, and fear losing more than they love winning.' },
    body: { zh: '<p>柏努利以來的經濟學假設人看「最終財富」，展望理論指出人其實看「相對於參考點的變化」。加上損失趨避（輸的痛約為贏的樂的兩倍），就能解釋稟賦效應、四重模式（同時買彩券和保險）、框架效應等一連串「不理性」行為。</p><p>這一部把心理學正式帶進了經濟學，也把「人是 Econs」的假設，換成了「人是會後悔、會被框架左右的 Humans」。</p><div class="theme-quote">「損失總是比獲利更龐大。」</div>', en: '<p>Economics since Bernoulli assumed people look at final wealth; prospect theory shows they look at change relative to a reference point. Add loss aversion (losing hurts about twice as much as winning feels good) and you can explain the endowment effect, the fourfold pattern (buying lotteries and insurance at once), framing, and a whole run of “irrational” behavior.</p><p>This part brought psychology formally into economics, replacing “people are Econs” with “people are Humans — who regret, and who are swayed by framing.”</p><div class="theme-quote">“Losses loom larger than gains.”</div>' },
    chapters: ['25', '26', '27', '28', '29', '34'] },
  { id: 'twoselves', icon: '🎞️', title: { zh: '兩個自我', en: 'Two Selves' }, subtitle: { zh: '為體驗而活，還是為回憶而活？', en: 'Do we live for experience, or for memory?' }, color: '#b5727a',
    intro: { zh: '經驗自我承受每一刻，記憶自我卻主宰所有決定——而它偏心得厲害。', en: 'The experiencing self bears every moment, but the remembering self makes every decision — and it is deeply biased.' },
    body: { zh: '<p>記憶自我用峰終定律評價經驗、又忽略時長，於是「多痛一分鐘、但結尾較緩」的經驗，反而被記成比較不痛苦。我們常為了一個更好的「故事」，犧牲實際更好的「體驗」。</p><p>這也改寫了「幸福」的定義：你問的是哪個自我？經驗抽樣測到的當下幸福，和回想起來的滿意度，答案往往南轅北轍。</p><div class="theme-quote">「我們對經驗的記憶，並不忠於經驗本身。」</div>', en: '<p>The remembering self judges by the peak-end rule and neglects duration, so an experience with an extra minute of pain but a gentler ending is remembered as less painful. We routinely trade a truly better experience for a better story.</p><p>This also rewrites “happiness”: which self are you asking? Present happiness measured by experience sampling and remembered life-satisfaction often point in opposite directions.</p><div class="theme-quote">“Our memory of an experience is not faithful to the experience itself.”</div>' },
    chapters: ['35', '36', '37', '38'] },
  { id: 'humans', icon: '🎭', title: { zh: '凡人不是經濟人', en: 'Humans Are Not Econs' }, subtitle: { zh: '本書最大的一場典範之爭', en: 'The book’s central paradigm fight' }, color: '#5f86b3',
    intro: { zh: '貫穿全書的元命題：真實的人，不是經濟學假設的那個理性主體。', en: 'The meta-thesis running through the book: real people are not the rational agent economics assumes.' },
    body: { zh: '<p>Econs 前後一致、不受框架影響、只認最終結果；Humans 卻會被措辭翻轉選擇、被損失趨避綁住、為沉沒成本凹單。康納曼並不因此嘲笑人性，而是主張：既然人是 Humans，制度與政策就該據此設計。</p><p>這正是「自由家長制」與「助推」的理論根基——用更聰明的預設值與框架，幫凡人做出對自己更好的選擇，同時保留選擇的自由。</p><div class="theme-quote">「理解人的侷限，不是為了看輕人，而是為了更好地幫助人。」</div>', en: '<p>Econs are consistent, immune to framing, and care only about final outcomes; Humans have their choices flipped by wording, are bound by loss aversion, and throw good money after bad for sunk costs. Kahneman does not mock human nature — he argues that since we are Humans, institutions and policy should be designed accordingly.</p><p>This is the basis of “libertarian paternalism” and the nudge: smarter defaults and frames that help Humans choose better for themselves while preserving freedom of choice.</p><div class="theme-quote">“Understanding human limits is not about belittling people, but about helping them better.”</div>' },
    chapters: ['25', '33', '34', '38'] }
];

const QUOTES = [
  { text: { zh: '我們對顯而易見的事視而不見，也對自己的視而不見渾然不覺。', en: 'We can be blind to the obvious, and we are also blind to our blindness.' }, source: { zh: '導論', en: 'Introduction' },
    analysis: { zh: '全書的精神綱領。它點出了本書最不安的洞見：我們的盲點不只在於會犯錯，更在於我們對自己正在犯錯這件事毫無自覺——這正是系統一運作的特徵。', en: 'The book’s guiding spirit. It names its most unsettling insight: our blind spot is not only that we err, but that we are unaware we are erring — the signature of System 1.' } },
  { text: { zh: '直覺捷思的本質是：面對難題，我們常常改去回答一個比較簡單的問題，而且渾然不覺自己換了題。', en: 'This is the essence of intuitive heuristics: when faced with a difficult question, we often answer an easier one instead, usually without noticing the substitution.' }, source: { zh: '第 9 章', en: 'Chapter 9' },
    analysis: { zh: '一句話講清「替代作用」——所有捷思的共同機制。看穿它，你就能在自己「答得又快又有把握」時，警覺地反問：我是不是偷換了問題？', en: 'One sentence that captures substitution — the machinery behind every heuristic. See it, and when you answer fast and sure you can ask: did I quietly swap the question?' } },
  { text: { zh: '過去被解釋得越是輕鬆，就越掩蓋了一個事實：未來其實無法預測。', en: 'The idea that the future is unpredictable is undermined every day by the ease with which the past is explained.' }, source: { zh: '第 19 章', en: 'Chapter 19' },
    analysis: { zh: '後見之明偏誤的核心。事後我們總能替已發生的事編出完美的因果故事，這種「原來如此」的順暢感，讓我們誤以為自己本來就能預見——於是一再高估對未來的掌握。', en: 'The heart of hindsight bias. We can always craft a tidy causal story for what has happened, and that fluent “of course” fools us into thinking we could have foreseen it — so we keep overrating our command of the future.' } },
  { text: { zh: '人對自己直覺的信心，並不能保證那些直覺的準確。', en: 'The confidence people have in their intuitions is not a reliable guide to their validity.' }, source: { zh: '第 22 章', en: 'Chapter 22' },
    analysis: { zh: '區分「真專業直覺」與「效度錯覺」的判準。可信的直覺需要兩個條件：環境有足夠規律、以及長期而清楚的回饋。缺了這兩者，再強的信心也只是幻覺。', en: 'The test that separates genuine expertise from the illusion of validity. Trustworthy intuition needs two conditions: a sufficiently regular environment and prolonged, clear feedback. Without both, even strong confidence is illusion.' } },
  { text: { zh: '損失總是比獲利更龐大。', en: 'Losses loom larger than gains.' }, source: { zh: '第 28 章', en: 'Chapter 28' },
    analysis: { zh: '損失趨避的一句話總結。輸掉 100 元的痛，約需贏得 200 元才能抵銷。這條不對稱，是稟賦效應、現狀偏誤、乃至許多談判僵局背後共同的心理引擎。', en: 'Loss aversion in one line. The sting of losing $100 takes about $200 of winning to cancel. That asymmetry is the shared engine behind the endowment effect, status-quo bias, and many a negotiation deadlock.' } },
  { text: { zh: '當你正想著人生裡的某件事時，沒有任何一件事像它看起來那麼重要。', en: 'Nothing in life is as important as you think it is while you are thinking about it.' }, source: { zh: '第 38 章（聚焦錯覺）', en: 'Chapter 38 (the focusing illusion)' },
    analysis: { zh: '「聚焦錯覺」的名言。一旦你把注意力放到某件事（收入、天氣、一次購買）上，它在你評估幸福時的份量就被誇大了。理解這點，是對抗行銷、也對抗自我焦慮的一劑清醒藥。', en: 'The famous line on the focusing illusion. Once you attend to something — income, weather, a purchase — its weight in your sense of well-being is exaggerated. Grasping this is an antidote to marketing and to your own anxiety.' } },
  { text: { zh: '讓人相信一句假話最可靠的方法，就是不斷重複——因為熟悉很難和真相區分開來。', en: 'A reliable way to make people believe in falsehoods is frequent repetition, because familiarity is not easily distinguished from truth.' }, source: { zh: '第 5 章（認知放鬆）', en: 'Chapter 5 (cognitive ease)' },
    analysis: { zh: '「認知放鬆」的黑暗面。凡是讀起來順、看過很多次的訊息，都會讓系統一產生「熟悉感」，而熟悉感又被誤讀為「真實」。這是宣傳、廣告與假訊息共用的心理槓桿。', en: 'The dark side of cognitive ease. Anything that reads smoothly or has been seen often breeds familiarity in System 1 — and familiarity is misread as truth. This is the lever shared by propaganda, advertising, and misinformation.' } }
];

const REFLECTION_QUESTIONS = [
  { zh: '你最近一次「明明很有把握、結果卻判斷錯」的經驗，是系統一的哪個偏誤在作祟？', en: 'The last time you were sure but wrong — which System 1 bias was at work?' },
  { zh: '想一個你以為是因果、其實可能只是「迴歸均值」的例子（如「換了教練，戰績就變好」）。', en: 'Name something you took as cause-and-effect that may be only regression to the mean (e.g., “new coach, better results”).' },
  { zh: '你會同時買保險又買彩券嗎？用「四重模式」解釋你自己的風險態度。', en: 'Do you buy both insurance and lottery tickets? Use the fourfold pattern to explain your own risk attitudes.' },
  { zh: '回想一次旅行：你記得的，是整段體驗的每一刻，還是幾個高峰與結尾？（峰終定律）', en: 'Recall a trip: do you remember every moment, or just a few peaks and the ending? (peak-end rule)' },
  { zh: '有哪個決定，你其實是被「問法／框架」影響，而不是被實質內容影響的？', en: 'Which decision of yours was driven by the framing, not the substance?' },
  { zh: '你身邊的某位專家，他的自信有沒有可能只是「效度錯覺」？你如何分辨真專業與假直覺？', en: 'Could an expert you know be running on the illusion of validity? How would you tell real expertise from false intuition?' },
  { zh: 'WYSIATI：上次你下判斷時，忽略了哪些「你根本沒看到」的資訊？', en: 'WYSIATI: last time you judged, what information — that you never saw — did you ignore?' },
  { zh: '損失趨避如何讓你抱著賠錢的股票不放、或不敢換一份其實更好的工作？', en: 'How does loss aversion keep you holding a losing stock, or afraid to switch to a better job?' },
  { zh: '如果坦白承認自己是「凡人」而非「經濟人」，你會替自己設計哪些「助推」？', en: 'If you admit you are a Human, not an Econ, what nudges would you design for yourself?' },
  { zh: '系統二很懶：你有哪些時刻，其實只是在替系統一的直覺找理由、幫它背書？', en: 'System 2 is lazy: when are you merely rationalizing System 1’s intuitions?' }
];

const CHAPTER_CONTENT = {};

Object.assign(CHAPTER_CONTENT, {
  1: { num: '第 1 章', title: '故事的主角：兩個系統', epigraph: '「系統一又快又自動；系統二又慢又費力。這是本書的兩位主角。」', body: `
<p><strong>核心論點：</strong>我們的心智運作可分為兩套系統。系統一自動、快速、不費力地運作，隨時產生印象與直覺；系統二則負責需要專注的費力運算與自我控制。日常生活由系統一主導，系統二只在必要時才被召喚。</p>
<p><strong>論證：</strong>康納曼用「快／慢」為兩者命名，並非說腦中真有兩個實體，而是一組好用的虛構角色，方便我們談論心智的兩種模式。系統一的能力是與生俱來或熟練習得的（辨認表情、閃避來車、2+2）；系統二則對應那些「需要你停下來想」的活動。</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>關鍵實驗／實例：</strong>看到一張憤怒的臉，你「瞬間」就知道她生氣了、甚至猜到她接下來要說什麼——這是系統一。但要算「17 × 24」，你必須停下、皺眉、調動記憶，過程費力且會排擠其他注意力——這是系統二。著名的繆勒-萊爾錯覺（兩條等長線段因箭頭方向而顯得不等長）則證明：即使系統二「知道」它們等長，系統一仍固執地看成不等長。</p>
<p><strong>應用與啟示：</strong>認清這個分工，是全書的起點。你「一邊開車一邊聊天，遇到超車險況卻突然噤聲」，正是系統二被緊急調去處理路況、無暇分心說話的瞬間。理解偏誤，就是理解系統一何時會替系統二擅自做主。</p>
<p class="thought-question">🤔 反思：你今天有哪些行為是純粹系統一（自動完成、事後才意識到）？又有哪些迫使你動用了系統二？</p>` },

  2: { num: '第 2 章', title: '注意力與努力', epigraph: '「心智努力是有代價的，而系統二很吝嗇。」', body: `
<p><strong>核心論點：</strong>系統二的運作需要消耗注意力這種有限資源；努力思考是真實的生理負擔，且注意力一旦被佔滿，我們對其他事物就會視而不見。</p>
<p><strong>論證：</strong>康納曼早年研究「努力」的生理指標，發現心智負荷會反映在瞳孔上——想得越用力，瞳孔放得越大，簡直像一個可以外部觀測的「腦力儀表」。系統二的容量有限，因此我們天生傾向省力。</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>關鍵實驗／實例：</strong>「加一」作業（聽到一串數字，每個都加 1 後複誦）會讓受試者瞳孔急劇放大，任務越難放得越大，一旦放棄就立刻縮回。而在著名的「看不見的大猩猩」實驗中，受試者專注計算傳球次數時，竟有一半的人完全沒看見畫面中走過的大猩猩——注意力被佔滿，就會對顯而易見之物盲目。</p>
<p><strong>應用與啟示：</strong>「專注」與「盲目」是一體兩面。當你全神貫注於某事，你不只是沒空看別的，而是真的「看不見」別的。這解釋了為何邊開車邊講電話如此危險：不是手忙，是「腦」的注意力被抽走了。</p>
<p class="thought-question">🤔 反思：你有沒有過「明明就在眼前卻完全沒注意到」的經驗？當時你的注意力被什麼佔滿了？</p>` },

  3: { num: '第 3 章', title: '懶惰的控制者', epigraph: '「系統二是個懶惰的把關者，常常直接放行系統一的建議。」', body: `
<p><strong>核心論點：</strong>系統二天生懶惰，會盡量少花力氣；而自我控制與認知努力共用同一池有限資源，用掉了就會「自我耗損」，讓人更容易衝動、更容易向直覺投降。</p>
<p><strong>論證：</strong>維持專注與抗拒誘惑都要動用系統二。當這個系統忙碌或疲累，把關就會鬆懈——它會直接背書系統一送上來的直覺答案，而不去查核。</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>關鍵實驗／實例：</strong>經典的「球棒與球」題：球棒和球共 1.1 美元，球棒比球貴 1 美元，問球多少錢？幾乎人人脫口而出「10 美分」——這是系統一的直覺，卻是錯的（正解 5 美分）。連名校學生多數也答錯，因為系統二懶得驗算。「自我耗損」研究則顯示，先忍住不吃餅乾（耗費自制力）的人，隨後在難題上更快放棄。書中也引述「假釋法官在飢餓時核准率驟降」的觀察，說明疲累的系統二如何讓判斷退回省力的預設。</p>
<p><strong>應用與啟示：</strong>把重要決策留給系統二狀態好的時候（吃飽、休息夠、不趕時間）。當你又累又餓又趕，你其實是在讓系統一替你做決定。</p>
<p class="thought-question">🤔 反思：「球棒與球」你第一反應是幾美分？你有沒有在疲累時做過事後後悔的衝動決定？</p>` },

  4: { num: '第 4 章', title: '聯想機器', epigraph: '「系統一是一部不停運轉的聯想機器。」', body: `
<p><strong>核心論點：</strong>系統一以聯想的方式運作：一個念頭會自動、無意識地牽動一連串相關的念頭、情緒與生理反應。這使我們極易被「促發」——先前接觸的事物，會在我們不知情下影響後續的想法與行為。</p>
<p><strong>論證：</strong>聯想活化是連鎖且自動的。看到「香蕉」和「嘔吐」兩個詞，你會瞬間在兩者間建立起因果與嫌惡，甚至短暫地不想吃香蕉——你沒有選擇要不要這麼想。</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>關鍵實驗／實例：</strong>「佛羅里達效應」：受試者若先讀到與「年老」有關的字詞（如皺紋、健忘），走出實驗室時步伐竟明顯變慢——他們完全否認自己受了影響。其他促發研究還包括：想到金錢會讓人更獨立、也更自私；讓人回想不道德行為後，他們更想買清潔用品（「馬克白夫人效應」）。</p>
<p><strong>應用與啟示：</strong>促發之所以令人不安，正因為它繞過了意識。這意味著環境（廣告、用字、擺設、他人）能在我們毫無所覺時形塑我們。認識它，至少讓我們對「自己為何這麼想」多一分警覺。</p>
<p class="thought-question">🤔 反思：促發效應能在你無察覺下改變行為，這件事讓你更不安，還是更好奇？你能想到被環境「促發」的例子嗎？</p>` },

  5: { num: '第 5 章', title: '認知放鬆', epigraph: '「凡是容易的，就讓人覺得熟悉、真實、良善、不費力。」', body: `
<p><strong>核心論點：</strong>當訊息「處理起來輕鬆」（認知放鬆）時，系統一會產生一種舒服的感覺，並把這感覺誤讀為「熟悉」「真實」「良善」。反之，費力（認知緊張）會讓人起疑、也讓系統二更警覺。</p>
<p><strong>論證：</strong>大腦把「流暢感」當成一個線索。凡是清晰、押韻、重複、看過的東西都更流暢，於是更容易被相信——即便流暢與真假其實毫無關係。</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>關鍵實驗／實例：</strong>「單純曝光效應」：一個字（甚至無意義的音節）只要被反覆看到，人們就對它產生好感。字體印得清楚、對比高的陳述，比模糊的更容易被判為真。押韻的格言（如「禍福相倚」式的對仗句）比不押韻但同義的句子，被認為更有道理。連股票代號好唸的公司，上市初期表現都略好。</p>
<p><strong>應用與啟示：</strong>這是宣傳、廣告與假訊息共用的槓桿：只要不斷重複，熟悉感就會被誤當成真實。想抵抗它，就在「讀起來很順、很有道理」時，刻意停下來問一句：這是真的，還是只是很順？</p>
<p class="thought-question">🤔 反思：你有沒有因為「聽多了、看順了」就相信某件事，事後才發現根本沒查證過？</p>` },

  6: { num: '第 6 章', title: '常態、驚訝與因果', epigraph: '「系統一維護著一幅『正常世界』的模型，並自動替一切尋找原因。」', body: `
<p><strong>核心論點：</strong>系統一不斷根據經驗建立「什麼是正常」的模型，並對偏離常態的事感到驚訝；同時，它是個強迫性的因果偵探——會替任何事件自動編派原因與意圖，即使那只是巧合。</p>
<p><strong>論證：</strong>我們天生用「因果」而非「統計」來理解世界。系統一擅長講因果故事、辨識意圖，卻對隨機、機率、統計極不敏感。</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>關鍵實驗／實例：</strong>經典的海德-齊美爾動畫：人們看著幾個幾何圖形移動，卻自動看出「大三角形在欺負小三角形」的完整劇情，賦予無生命的形狀以動機。這證明我們的因果與意圖知覺是自動、不由自主的。系統一先看到因果，統計思維要靠系統二費力才學得會。</p>
<p><strong>應用與啟示：</strong>很多「看出規律、看出陰謀、看出意義」的時刻，其實只是系統一的因果衝動在替隨機事件強加故事。面對世界，我們需要提醒自己：有些事真的只是巧合。</p>
<p class="thought-question">🤔 反思：你最近一次替某件巧合「腦補」出因果或動機，是什麼情況？後來證實那因果存在嗎？</p>` },

  7: { num: '第 7 章', title: '一部驟下結論的機器', epigraph: '「你所見即全部（WYSIATI）。」', body: `
<p><strong>核心論點：</strong>系統一急於下結論：它只用手上現有的資訊建構一個連貫的故事，完全不理會「還缺了什麼」。這條運作鐵律叫 WYSIATI——你所見即全部。連貫性帶來信心，而信心與資訊是否充分無關。</p>
<p><strong>論證：</strong>系統一追求的是故事的「連貫」，不是資訊的「完整」。只要現有線索能拼成一個說得通的故事，它就滿意了，並抑制對缺失資訊的懷疑。</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>關鍵實驗／實例：</strong>「月暈效應」：先聽到「聰明、勤奮」再聽到「衝動、善妒」的人（艾倫），被評價得比形容詞順序相反的人（班）更正面——同樣的特質，只因先入為主的第一印象就被賦予不同色彩。另一實驗中，只聽單方說詞的陪審員，反而比聽了雙方的更有信心——資訊越片面，故事越容易連貫，人越自信。這正是 WYSIATI 的體現。</p>
<p><strong>應用與啟示：</strong>當你對某事「特別有把握」時，要警覺：那份把握可能正來自你「只看到片面」。刻意追問「我還缺哪些資訊？反方會怎麼說？」是對抗過度自信的起點。</p>
<p class="thought-question">🤔 反思：你上一次憑第一印象就對某人下了定論，後來被推翻了嗎？當時你忽略了哪些資訊？</p>` },

  8: { num: '第 8 章', title: '判斷如何發生', epigraph: '「系統一持續、不請自來地替我們做各種評估。」', body: `
<p><strong>核心論點：</strong>系統一無時無刻不在對周遭進行「基本評估」（安全嗎？友善嗎？強勢嗎？），即使我們沒被問到。它還能把一個維度的強度，自動「翻譯」到另一個毫不相干的維度上。</p>
<p><strong>論證：</strong>這種持續的背景評估，是直覺判斷的原料。系統一像一把「心智散彈槍」，你只想瞄準一個問題，它卻同時算出一堆相關與不相關的答案，難以只算你要的那一個。</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>關鍵實驗／實例：</strong>「強度匹配」：人們能毫不遲疑地回答「如果某罪行是一種顏色，會是什麼顏色？」或「這位教授的才華如果換算成身高，是幾公分？」——系統一輕易地在犯罪嚴重度與顏色、才華與身高之間搭起對應。研究也顯示，僅憑臉孔零點幾秒的「強勢感」印象，就能相當程度預測選舉結果，因為選民不自覺地把「看起來能幹」當成了投票依據。</p>
<p><strong>應用與啟示：</strong>第一印象與「憑感覺」的判斷，其實是這些自動評估的產物。它們快而有用，但也讓不相干的線索（長相、聲音）悄悄污染了重要判斷。</p>
<p class="thought-question">🤔 反思：你有沒有因為某人「看起來就很可靠／很能幹」而給了他過高的信任？那印象根據的是什麼？</p>` },

  9: { num: '第 9 章', title: '回答一個比較簡單的問題', epigraph: '「面對難題，我們常改答一個簡單的問題，卻不自知。」', body: `
<p><strong>核心論點：</strong>當系統一遇到難以回答的「目標問題」，它會自動找一個相關但容易的「捷思問題」來回答，再把答案套用回原題——這就是「替代作用」，是幾乎所有捷思與偏誤的共同機制。</p>
<p><strong>論證：</strong>替代發生得又快又順，我們通常察覺不到自己換了題。這也解釋了為何我們常對困難問題「答得又快又有信心」——因為我們其實答的是另一題。</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>關鍵實驗／實例：</strong>難題「你對人生有多滿意？」常被替換成易題「我此刻心情如何？」。經典實驗：先問學生「你上個月約會幾次？」再問「你對人生整體有多滿意？」，兩題的相關性極高——約會頻率這個「當下最鮮明的感受」被拿來代答了人生大哉問。「情感捷思」也是一例：我們對一項科技的風險與效益判斷，往往取決於「我喜不喜歡它」這個更簡單的感受。</p>
<p><strong>應用與啟示：</strong>看穿替代作用，是這本書最實用的一課。當你「秒答」一個本該很難的問題時，停下來問自己：我剛剛回答的，真的是被問的那一題嗎？還是一個比較好答的替身？</p>
<p class="thought-question">🤔 反思：回想一個你「其實很難、卻答得很快」的判斷。你當時是不是偷偷換成了一個簡單的問題？</p>` }
});

Object.assign(CHAPTER_CONTENT, {
  10: { num: '第 10 章', title: '小數法則', epigraph: '「我們對隨機性缺乏直覺，總在雜訊中看見訊號。」', body: `
<p><strong>核心論點：</strong>人們（連專業研究者也不例外）誤以為小樣本和大樣本一樣可靠，於是把「小樣本的極端波動」當成有意義的規律。這是一種對隨機性的系統性誤解。</p>
<p><strong>論證：</strong>統計上，小樣本本來就更容易出現極端結果。但系統一是因果偵探、不是統計學家，看到極端數字就急著找原因，而不會想到「這只是樣本太小」。</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>關鍵實驗／實例：</strong>經典的「腎癌地圖」：發生率最低的郡，多半是人口稀少的鄉村小郡——人們立刻編出「鄉村生活健康」的故事。但發生率最高的郡，同樣多是鄉村小郡。真相是：小樣本的比率必然上下擺盪得更劇烈，與鄉村無關。書中也提到，某基金會曾大力資助「小型學校」，因為成績最好的學校多是小校——卻忽略了成績最差的學校也多是小校，同樣是小樣本效應作祟。</p>
<p><strong>應用與啟示：</strong>看到驚人的排名或比率時，先問一句「樣本多大？」。很多「驚人發現」與「最佳／最差榜」，不過是小數法則製造的統計幻覺。</p>
<p class="thought-question">🤔 反思：你最近看過哪個「排行榜」或「驚人數據」，可能其實只是小樣本的隨機波動？</p>` },

  11: { num: '第 11 章', title: '錨點', epigraph: '「一個任意的數字，就能把你的估計拉過去。」', body: `
<p><strong>核心論點：</strong>當人們要估計一個未知數量時，先接觸到的任意數字（錨點）會強烈影響最終答案，即使那數字明顯與問題無關。這種偏誤穩定、強大，且我們對它幾乎無法免疫。</p>
<p><strong>論證：</strong>定錨有兩種機制：系統二從錨點出發「調整」，卻總是調整不足；系統一則被錨點「促發」，自動去搜尋與之相符的證據。兩者合力把答案拉向錨點。</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>關鍵實驗／實例：</strong>康納曼與特沃斯基讓受試者先轉一個灌了鉛、只會停在 10 或 65 的輪盤，再問「非洲國家佔聯合國會員的比例是多少？」。轉到 65 的人平均猜 45%，轉到 10 的人平均只猜 25%——一個他們明知隨機的數字，硬是污染了估計。房仲實驗中，即使是專家，其估價也會被「屋主開價」這個錨點左右，儘管他們堅稱自己不受影響。</p>
<p><strong>應用與啟示：</strong>定錨無所不在：標價、談判開價、「原價 X 特價 Y」、募款選項。對策是意識到錨點的存在，並刻意從相反方向重新思考一個屬於你自己的數字，而不是從對方給的錨點去「調整」。</p>
<p class="thought-question">🤔 反思：你上一次議價或消費，對方是不是先丟出了一個「錨」？它把你的心理價位拉走了多少？</p>` },

  12: { num: '第 12 章', title: '可得性的科學', epigraph: '「越容易想到的，就越覺得常發生。」', body: `
<p><strong>核心論點：</strong>「可得性捷思」是用「例子有多容易浮現腦海」來估計一件事的頻率或機率。容易想起的（生動的、近期的、有情緒的）被高估，不易想起的被低估。</p>
<p><strong>論證：</strong>這又是一次替代作用：難題「這類事件實際多常發生？」被換成易題「我能多輕鬆地想起它的例子？」。而「想起來的難易」本身，也會被許多與真實頻率無關的因素影響。</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>關鍵實驗／實例：</strong>夫妻各自估計「自己對家事的貢獻比例」，兩人加起來常超過 100%——因為每個人都更容易想起「自己做過的」事。施瓦茨的巧妙實驗：要人「舉出 6 個自己果斷的例子」後，他們覺得自己很果斷；但要人「舉出 12 個」時，因為想到後面越來越吃力，他們反而覺得自己不果斷了——判斷依據的不是例子的數量，而是「回想時的流暢感」。</p>
<p><strong>應用與啟示：</strong>你對世界的風險排序，很大程度上是被「什麼容易被你想起」決定的，而那又被媒體與個人經歷左右。要更準地判斷頻率，得刻意去查資料，而不是憑「腦中浮現的例子」。</p>
<p class="thought-question">🤔 反思：你最近特別擔心的某個風險，是真的機率高，還是只是最近「常被你想起」（上了新聞、身邊發生）？</p>` },

  13: { num: '第 13 章', title: '可得性、情緒與風險', epigraph: '「情緒決定了我們看見哪些風險、又如何看待它們。」', body: `
<p><strong>核心論點：</strong>對風險的感受被情緒與可得性主宰，而非統計。生動、恐怖、上得了新聞的罕見風險被過度放大，安靜、日常、真正致命的風險反被低估，還可能被媒體與輿論放大成「可得性瀑布」。</p>
<p><strong>論證：</strong>「情感捷思」讓我們用好惡代替利弊分析；「可得性瀑布」則是一個事件經媒體反覆報導、引發公眾情緒、再促使更多報導的自我強化循環，使一個小風險被炒成全民恐慌。</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>關鍵實驗／實例：</strong>人們害怕空難勝過車禍、害怕恐怖攻擊勝過中風，儘管後者的實際致死率高出許多——因為前者更生動、更上新聞。書中提到心理學家斯洛維奇與法學家桑思坦對此的爭論：專家用機率算風險，大眾用情緒感受風險，兩者常嚴重背離。「分母忽略」也在此出現：「1 萬人中會死 1286 人」聽起來比「死亡率 24.14%」更嚇人，儘管前者的比例更低。</p>
<p><strong>應用與啟示：</strong>公共政策若一味迎合被情緒放大的恐懼，會把資源錯配到低風險上。作為個人，理解「我的恐懼有多少來自新聞畫面」，能幫我們把注意力放回真正該擔心的事。</p>
<p class="thought-question">🤔 反思：有哪個你其實不太擔心的日常風險（如飲食、久坐），數據上遠比你害怕的那個更危險？</p>` },

  14: { num: '第 14 章', title: '湯姆 W 的專長', epigraph: '「像不像某個類型，不等於有多可能屬於它。」', body: `
<p><strong>核心論點：</strong>「代表性捷思」讓我們用「某人某事像不像某個刻板印象」來判斷機率，卻忽略了更重要的「基率」（該類別在母體中本來就有多常見）。</p>
<p><strong>論證：</strong>判斷機率的正解需要結合描述證據與基率，但系統一只被「相似度」牽著走。相似度與機率是兩回事，混為一談就會系統性出錯。</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>關鍵實驗／實例：</strong>「湯姆 W」實驗：給一段把湯姆描述成內向、愛整潔、喜歡科幻的人格側寫，請學生猜他讀哪個研究所。多數人因為他「像」電腦科學／工程科系的宅男，就把這些冷門小系排到最前面——完全無視這些科系的學生總數本來就遠少於教育、人文等大系（基率）。他們用「像不像」取代了「有多可能」。</p>
<p><strong>應用與啟示：</strong>遇到「這個人／這件事屬於哪一類」的判斷，先問「這一類本來就有多常見？」（基率），再看描述有多吻合。忽略基率，是招聘、選才、下診斷時最常犯的錯。</p>
<p class="thought-question">🤔 反思：你有沒有因為某人「很像某種類型的人」，就高估了他屬於那個（其實很罕見的）類別的可能？</p>` },

  15: { num: '第 15 章', title: '琳達：少即是多', epigraph: '「一個更詳細、更像樣的故事，感覺卻更可能——這違反了邏輯。」', body: `
<p><strong>核心論點：</strong>代表性捷思會導致「合取謬誤」：人們認為「A 且 B」比「單獨的 A」更可能發生，只因前者是個更連貫、更有畫面的故事。但邏輯上，一個更具體的合取條件，機率永遠不可能高於它的其中一項。</p>
<p><strong>論證：</strong>增加細節會讓故事更「像真的」、更符合刻板印象（代表性上升），卻同時讓它在機率上更不可能（條件更嚴苛）。系統一被前者迷惑，忽略了後者。</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>關鍵實驗／實例：</strong>史上最有名的「琳達問題」：琳達單身、直言、關心社會正義。問哪個更可能——「琳達是銀行員」還是「琳達是銀行員且是活躍的女性主義者」？高達八、九成的人選了後者，即使邏輯上「銀行員」必然涵蓋「銀行員且是女性主義者」。因為後者更符合對琳達的想像，感覺就更對——「少即是多」的認知錯覺。</p>
<p><strong>應用與啟示：</strong>越是「聽起來合情合理、細節豐富」的預測或情境，往往越不可能成真。分析師與規劃者尤其要警惕：多加一個「而且……」的條件，會讓故事更動聽，卻讓它更不可能發生。</p>
<p class="thought-question">🤔 反思：你有沒有覺得某個「情節很完整」的預言比「籠統」的預言更可信？想想它其實是不是更難成真。</p>` },

  16: { num: '第 16 章', title: '因果勝過統計', epigraph: '「能編進因果故事的統計，我們才會採用。」', body: `
<p><strong>核心論點：</strong>人們會忽略「純統計的基率」，卻願意採用「能被賦予因果意義的基率」。同樣一個數字，只要能編進一個因果故事，就會被系統一接受並用於判斷。</p>
<p><strong>論證：</strong>系統一以因果理解世界。冷冰冰的統計基率無法引發因果聯想，於是被晾在一旁；一旦基率被包裝成「某群人就是有某種傾向」，它立刻變得鮮活可用。</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>關鍵實驗／實例：</strong>經典的「計程車問題」：某城 85% 計程車是綠色、15% 是藍色。一起肇事逃逸中，目擊者指認是藍色車（其可靠度 80%）。多數人幾乎只憑目擊者證詞判斷，忽略了「藍車本來就少」的基率。但若把同一組數字改述為「綠色車隊肇事率高達 85%」（賦予因果意味），人們就會把它納入判斷了——同樣的統計，因果化之後才被「看見」。</p>
<p><strong>應用與啟示：</strong>這解釋了為何刻板印象（「某某群人就是……」）如此頑固：它把統計包裝成因果，讓人不自覺地過度套用；也解釋了為何純數據的風險警示常被無視——除非替它配上一個因果故事。</p>
<p class="thought-question">🤔 反思：有哪個「統計事實」你一直沒放在心上，直到有人替它講了一個因果故事，你才突然當真？</p>` },

  17: { num: '第 17 章', title: '迴歸均值', epigraph: '「極端之後，往往只是回到平均——與獎懲無關。」', body: `
<p><strong>核心論點：</strong>當表現含有運氣成分時，一次極端的結果（極好或極壞）之後，下一次通常會更接近平均，這叫「迴歸均值」。它是純粹的統計現象，但系統一總硬要替它安上一個因果原因。</p>
<p><strong>論證：</strong>凡是相關性不完美的兩件事之間，都存在迴歸。表現＝技術＋運氣；運氣不會延續，所以極端表現後的下一次自然回落或回升——不需要任何「原因」。</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>關鍵實驗／實例：</strong>康納曼替以色列空軍教官上課時，一位教官反駁：「我讚美飛得好的學員，他們下次就退步；我痛罵飛得差的，他們下次就進步。所以懲罰有效、獎勵有害！」康納曼當場指出：這純粹是迴歸均值——特別好的一次之後本就會回落，特別差的一次之後本就會回升，與獎懲毫無關係。教官被運氣的迴歸騙成了「懲罰有效」的信徒。「運動畫報魔咒」（登上封面後表現下滑）也是同一回事。</p>
<p><strong>應用與啟示：</strong>迴歸均值是最反直覺、也最常被誤讀成因果的統計事實。看到「谷底反彈」「盛極而衰」時，先問：這是真有原因，還是只是運氣在回歸？誤判它，會讓我們相信一堆無效的「療法」與「管理術」。</p>
<p class="thought-question">🤔 反思：你相信過哪個「做了 X 就變好／變差」的說法，其實可能只是迴歸均值？（如某偏方、某管理手段）</p>` },

  18: { num: '第 18 章', title: '馴服直覺預測', epigraph: '「好的預測，要敢於保守、往平均靠。」', body: `
<p><strong>核心論點：</strong>直覺預測往往過度極端、過度自信，因為它直接把「證據給人的印象強度」當成了預測值，卻忽略了證據的可靠度有限。校正之道，是有紀律地讓預測「向平均迴歸」。</p>
<p><strong>論證：</strong>當證據與結果的相關性不完美時，理性的預測就不該和證據一樣極端，而要按可靠度打折、往基率（平均值）拉回。系統一不會自動這麼做，這是系統二的工作。</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>關鍵實驗／實例：</strong>「茱莉」問題：茱莉四歲就能流利閱讀，請預測她大學的 GPA。多數人直接把「閱讀早」的驚豔印象，換算成一個很高的 GPA——但幼年閱讀能力與大學成績的相關其實很弱，如此極端的預測並不合理。康納曼提出校正步驟：先從基率（平均 GPA）出發，再依證據的實際相關度，只做「有節制的」調整。</p>
<p><strong>應用與啟示：</strong>對招聘、投資、選才的預測都適用：越是被單一亮眼證據打動時，越要提醒自己往平均拉回。極端的預測感覺很「有洞見」，但通常錯得更離譜。當然，過度保守也有代價——關鍵是讓極端程度「配得上」證據的可靠度。</p>
<p class="thought-question">🤔 反思：你有沒有因為某人某個「亮眼的單點」（一次面試、一項成績）就對他做出過高的預測？</p>` }
});

Object.assign(CHAPTER_CONTENT, {
  19: { num: '第 19 章', title: '理解的錯覺', epigraph: '「事後看來，一切都顯得早已註定。」', body: `
<p><strong>核心論點：</strong>我們用連貫的因果故事來理解過去，這帶來一種「我早就懂了」的理解錯覺。後見之明偏誤讓已發生的事顯得理所當然、可預測，於是我們嚴重高估了自己（及他人）預測未來的能力。</p>
<p><strong>論證：</strong>好故事需要簡單、具體、把成敗歸於才能與意圖而非運氣。這種「敘事謬誤」讓我們替混亂的過去強加秩序，並在事後修改記憶，忘了自己當初其實一無所知。</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>關鍵實驗／實例：</strong>後見之明實驗顯示，事件揭曉後，人們會「記錯」自己事前的預測，以為自己早就料到（「我就知道會這樣」）。書中以商業暢銷書為例：那些歌頌成功企業的敘事，多半誇大了領導人的作用、淡化了運氣，因而它們「揭示的成功祕訣」，其預測力其實低得可憐——因為成功與失敗的公司，運氣的落差往往比能力還大。</p>
<p><strong>應用與啟示：</strong>對「事後諸葛」保持警覺：能把過去解釋得頭頭是道，並不代表你當初能預見，更不代表你能預見未來。這也提醒我們評價決策時，要看「當時的決策品質」，而非只看「事後的結果」（避免結果偏誤）。</p>
<p class="thought-question">🤔 反思：有哪件事發生後你說「我早就知道」？誠實想想，事前你真的預測到了嗎？</p>` },

  20: { num: '第 20 章', title: '效度的錯覺', epigraph: '「主觀的信心，不是準確度的指標。」', body: `
<p><strong>核心論點：</strong>人們對自己判斷的信心，主要來自「故事的連貫」與「所在專業的文化」，而非判斷實際的準確度。當一整個行業都建立在一項其實無效的技能上時，「效度錯覺」能集體維持不墜。</p>
<p><strong>論證：</strong>信心是一種感覺（源自 WYSIATI 與認知放鬆），與真實效度可以完全脫鉤。同儕都同樣自信、制度又持續獎勵這份自信時，錯覺就更難被戳破。</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>關鍵實驗／實例：</strong>康納曼年輕時在以色列軍中用「無領袖團體任務」評估軍官潛能，看得「一清二楚」、信心十足，但追蹤結果顯示其預測力近乎於零——他稱之為「效度錯覺」，且明知無效，隔天照樣充滿信心地評下一批。他也分析某財富管理公司：把八年間顧問的年度績效排名兩兩相比，相關係數幾近於零，等於績效全靠運氣；然而公司照發鉅額獎金給「表現好」的顧問，整個產業都活在選股技能的錯覺裡。</p>
<p><strong>應用與啟示：</strong>別把一個人（或你自己）的「信心」當成「準確」的證據。要評估判斷是否可信，該看客觀的追蹤紀錄與命中率，而不是他說得多篤定、故事講得多漂亮。</p>
<p class="thought-question">🤔 反思：你信任的某個「專家判斷」，有沒有經得起客觀追蹤紀錄的檢驗？還是主要靠他的自信與話術？</p>` },

  21: { num: '第 21 章', title: '直覺 vs 公式', epigraph: '「簡單的公式，常常打敗專家的直覺。」', body: `
<p><strong>核心論點：</strong>在許多領域，一條簡單的統計公式（或演算法）預測的準確度，穩定地勝過受過訓練的專家直覺。原因是專家會被無關資訊干擾、前後不一致，而公式一致、不情緒化。</p>
<p><strong>論證：</strong>專家的劣勢有二：一是常「想太多」、被個案的表面特徵帶偏；二是同一位專家對同一份資料，不同時間會給出不同判斷（缺乏一致性）。公式沒有這些毛病。</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>關鍵實驗／實例：</strong>心理學家米爾（Paul Meehl）綜合大量研究，發現簡單統計模型幾乎總是打平或勝過臨床專家的判斷。經典案例：新生兒的「阿普伽（Apgar）評分」用五項簡單指標打分，比資深醫師的整體直覺更能可靠判斷嬰兒狀況；經濟學家阿申費爾特用「降雨量與溫度」的簡單方程式預測波爾多葡萄酒未來價格，準得讓品酒專家不快。道斯還證明，連隨便給定權重的「不當線性模型」都常勝過專家。</p>
<p><strong>應用與啟示：</strong>在資料穩定、可量化的重複性判斷（招聘、核貸、風險評估）中，別排斥用檢核表與公式。它們不迷人，卻更公平、更一致、也更準。人的角色，是設計與監督這些規則，而非在每個個案上逞直覺。</p>
<p class="thought-question">🤔 反思：你的工作或生活中，有哪類反覆出現的判斷，其實可以交給一張簡單的檢核表或評分表？</p>` },

  22: { num: '第 22 章', title: '專家的直覺：何時可信？', epigraph: '「直覺不過是識別——問題在於環境讓不讓你學會。」', body: `
<p><strong>核心論點：</strong>專家直覺並非全是幻覺，但它只在特定條件下才可信：一是環境要有足夠的「規律性」可供學習，二是學習者要能透過長期練習獲得「清楚而及時的回饋」。兩個條件缺一，直覺就不可靠。</p>
<p><strong>論證：</strong>直覺的本質，其實是系統一對熟悉線索的「快速辨識」。若環境本身就充滿隨機（如股市、長期政治預測），再多經驗也學不出有效直覺；唯有規律＋回饋，辨識才練得準。</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>關鍵實驗／實例：</strong>這一章是康納曼與「自然決策」學派的克萊恩（Gary Klein）多年爭論後的共識。克萊恩記錄了資深消防隊長「莫名感到不對勁、下令撤離，隨即地板塌陷」的真實直覺——那是在規律環境中千錘百鍊出的辨識。西洋棋大師一眼看穿棋局也是如此。反例則是選股者與長期政治預測家：環境太隨機、回饋太遲太糊，他們的「直覺」多半是效度錯覺。</p>
<p><strong>應用與啟示：</strong>評估任何人的直覺（包括你自己）前，先問兩個問題：這個領域夠規律嗎？他得到過足夠、及時的回饋嗎？消防、麻醉、下棋 → 可信；預測股市、猜長期政局 → 存疑。</p>
<p class="thought-question">🤔 反思：你自己最「有把握」的某項直覺，來自的環境夠規律嗎？你得到過清楚的回饋來磨練它嗎？</p>` },

  23: { num: '第 23 章', title: '外部觀點', epigraph: '「別只顧著算自己的計畫，去看看別人同類的計畫下場如何。」', body: `
<p><strong>核心論點：</strong>面對一項計畫，我們慣用「內部觀點」——聚焦於眼前這個案子的細節去推估；但更準的是「外部觀點」——把它當成「同類案例中的一個」，參考類似計畫的實際統計結果。忽略外部觀點，正是「規劃謬誤」的根源。</p>
<p><strong>論證：</strong>內部觀點天生樂觀：它只看得到手上的計畫（WYSIATI），自動忽略各種可能出錯、卻無法預先列舉的意外。外部觀點用「參考類別」的真實成敗率，把這些被忽略的風險一次補回來。</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>關鍵實驗／實例：</strong>康納曼親身經歷：他帶一個團隊編寫教科書，內部估計約兩年完成；但當他請團隊中的課程專家回想「同類團隊」的紀錄，對方坦承類似計畫多半要七到十年、且約四成根本半途而廢——結果他們果然花了八年。這就是規劃謬誤。管理學者弗萊夫伯格也發現，大型公共工程幾乎系統性地低估工期與成本，唯有用「參考類別預測」才能校正。</p>
<p><strong>應用與啟示：</strong>做任何預算與時程規劃時，別只埋頭算細節，去問「別人做同樣的事，實際花了多久、成功率多少？」。用外部的真實統計錨定你的預估，是對抗過度樂觀最有效的一招。</p>
<p class="thought-question">🤔 反思：你手上有沒有一個計畫，你一直用「內部觀點」在估？同類的事，別人實際的成敗與耗時如何？</p>` },

  24: { num: '第 24 章', title: '資本主義的引擎', epigraph: '「樂觀既是進步的動力，也是失敗的源頭。」', body: `
<p><strong>核心論點：</strong>樂觀偏誤是一把雙面刃：它推動創業、發明、冒險與經濟活力（「資本主義的引擎」），但也導致人們高估自己、低估風險與競爭，造成大量可預見的失敗。</p>
<p><strong>論證：</strong>樂觀者傾向把成功歸於自己的能力、把風險當成別人的事。「競爭忽略」讓創業者只看自己的優勢，忘了對手也在努力；「掌控錯覺」讓人以為運氣能被自己駕馭。</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>關鍵實驗／實例：</strong>調查顯示，多數新創業者明知「同業存活率很低」，卻堅信自己這一家會成功——這是樂觀與競爭忽略的合體。康納曼也分析大企業財務長對股市的短期預測，發現其準確度趨近於零，他們卻依舊充滿信心。對治之道，他推崇克萊恩提出的「事前驗屍」（premortem）：在拍板前，讓團隊想像「一年後這計畫慘敗了，請寫下失敗的原因」——這給了平時被樂觀氣氛壓抑的疑慮一個發聲的正當管道。</p>
<p><strong>應用與啟示：</strong>我們需要樂觀者去冒險，但也需要制度性的懷疑來校準。個人與團隊在重大決策前，不妨強迫自己做一次「事前驗屍」，把 WYSIATI 忽略掉的失敗劇本，主動請回桌上。</p>
<p class="thought-question">🤔 反思：你目前最看好的一個計畫，若請你現在就寫下「它一年後失敗的三個原因」，你會寫什麼？</p>` }
});

Object.assign(CHAPTER_CONTENT, {
  25: { num: '第 25 章', title: '柏努利的錯誤', epigraph: '「該看的不是你有多少財富，而是它相對於起點變了多少。」', body: `
<p><strong>核心論點：</strong>傳統的期望效用理論（源自柏努利）假設人們以「最終財富的效用」來評估選擇。康納曼指出這是根本性的錯誤：人真正在意的，是相對於某個「參考點」的得與失，而非財富的絕對水準。</p>
<p><strong>論證：</strong>柏努利用「財富的邊際效用遞減」成功解釋了風險趨避，卻遺漏了「參考點」這個關鍵變數。忽略它，就無法解釋人在「同樣的最終財富下」為何感受天差地別。</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>關鍵實驗／實例：</strong>康納曼舉例：今天傑克與吉兒都各有 500 萬。但傑克昨天有 100 萬（今天大賺），吉兒昨天有 900 萬（今天慘賠）。柏努利的理論說他們此刻「一樣快樂」（財富相同），但這顯然荒謬——傑克欣喜若狂，吉兒沮喪不已。差別全在「參考點」。這個柏努利理論存活了近三百年都沒被正視的漏洞，正是展望理論的起點。</p>
<p><strong>應用與啟示：</strong>理解「人以變化、而非狀態來衡量幸福」，能解釋許多現象：加薪帶來的快樂會消退（參考點上移）、同樣的財富有人滿足有人痛苦。評估自己的處境時，不妨察覺你正拿它跟哪個「參考點」比較。</p>
<p class="thought-question">🤔 反思：你對現況的滿意或不滿，是拿它跟哪個「參考點」比出來的？換個參考點，感受會不會完全不同？</p>` },

  26: { num: '第 26 章', title: '展望理論', epigraph: '「參考點、敏感度遞減、損失趨避——決策的三根新支柱。」', body: `
<p><strong>核心論點：</strong>展望理論以三個心理特性描述人如何評估風險選擇：①以「參考點」衡量得失而非絕對水準；②對得失的「敏感度遞減」（從 100 到 200 的感受，強過從 1100 到 1200）；③「損失趨避」（失去的痛大於等量獲得的樂）。這三者合起來，比期望效用更準確地描述真實的人。</p>
<p><strong>論證：</strong>由這三支柱可推出「反射效應」：面對獲利，人趨向保守（怕失去到手的）；面對損失，人反而趨向冒險（不甘認賠、寧賭一把翻本）。價值函數因此呈 S 形，且損失側更陡。</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>關鍵實驗／實例：</strong>典型題組：選項 A「穩拿 900 元」vs 選項 B「90% 機率拿 1000 元」，多數人選穩拿的 A（獲利時保守）。但把它翻成損失：「穩賠 900 元」vs「90% 機率賠 1000 元」，多數人卻選去賭那個 B（損失時冒險），寧可冒著賠更多的風險也要搏一個「不賠」的機會。同一個人，因為問題落在獲利側或損失側，風險態度完全相反。</p>
<p><strong>應用與啟示：</strong>這解釋了投資人為何「賺一點就跑、賠了卻死抱」（處分效應），也解釋了人在絕境中為何會孤注一擲。認得出自己正站在「損失側」，能幫你避免為了逃避認賠而做出更冒險的蠢事。</p>
<p class="thought-question">🤔 反思：你有沒有為了「不甘心認賠」，反而做出比原本更冒險的決定（凹單、加碼攤平）？</p>` },

  27: { num: '第 27 章', title: '稟賦效應', epigraph: '「一樣東西一旦屬於你，它在你心裡就變貴了。」', body: `
<p><strong>核心論點：</strong>「稟賦效應」指人們一旦擁有某物，對它的評價就會提高——賣掉它所要求的價格，往往遠高於當初願意購入的價格。這是損失趨避在「擁有」情境下的直接後果。</p>
<p><strong>論證：</strong>放棄自己擁有的東西，被大腦編碼為一種「損失」；而損失的痛大於獲得的樂。因此賣方（在放棄＝損失）與買方（在取得＝獲利）對同一物品的心理估價，會出現一道穩定的落差，違反了標準經濟學「買賣價應相等」的假設。</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>關鍵實驗／實例：</strong>經典的「馬克杯實驗」（克內奇與塞勒等人）：隨機發給一半學生馬克杯，讓他們與沒杯子的同學交易。理論上該有一半的杯子易手，實際成交量卻遠低於此——因為拿到杯子的人開出的賣價（約 7 美元），是想買的人願付價（約 3 美元）的兩倍多。杯子明明是隨機發的，「擁有」本身就讓它在主人心中翻了倍。</p>
<p><strong>應用與啟示：</strong>稟賦效應解釋了為何人難以割捨舊物、為何「免費試用期」如此有效（一旦擁有就捨不得退）、為何談判中雙方都覺得自己「讓步較多」。值得注意的是，對「用來交易的商品」（如商人手上的貨、鈔票）就不會有此效應——它只作用於「為使用而持有」之物。</p>
<p class="thought-question">🤔 反思：你有沒有捨不得賣、卻其實用不到的東西？如果它不是你的，你會願意用現在的開價去買它嗎？</p>` },

  28: { num: '第 28 章', title: '壞事', epigraph: '「壞比好更強大。」', body: `
<p><strong>核心論點：</strong>大腦對「壞」的反應快於、也強於對「好」的反應（負面性主導）。損失趨避是這條普遍原則在決策上的展現：威脅比機會更搶注意，壞消息比好消息更有份量。</p>
<p><strong>論證：</strong>從演化角度看，對威脅反應更快的個體活得更久，於是我們天生對負面訊號更敏感。這也讓「參考點」成為一道心理防線——跌破它就是損失，會激起強烈的抗拒。</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>關鍵實驗／實例：</strong>研究顯示，壞情緒、壞回饋、壞消息的衝擊，都比同等強度的好事更大、更持久；一段關係要穩定，好的互動得遠多於壞的。書中引用對職業高爾夫球選手的分析（波普與施韋策）：職業選手在推「保帕（避免掉一桿＝避免損失）」的球時，明顯比推「博小鳥（多賺一桿＝獲利）」的同距離球更專注、成功率更高——連頂尖高手都受損失趨避驅動。談判之所以難，也因為雙方都把「讓步」感受成損失。</p>
<p><strong>應用與啟示：</strong>理解「壞比好強」，能解釋為何負評、負面新聞、批評特別刺痛，也提醒我們：在關係與管理中，得刻意用更多的正面，去抵銷少數負面的重量。</p>
<p class="thought-question">🤔 反思：回想今天，是一件小壞事、還是一件小好事，更久地佔據了你的心思？這說明了什麼？</p>` },

  29: { num: '第 29 章', title: '四重模式', epigraph: '「同一個人，為什麼既買彩券又買保險？」', body: `
<p><strong>核心論點：</strong>把「得 vs 失」與「高機率 vs 低機率」交叉，展望理論預測出四種風險態度（四重模式）。加入「機率權重」（人們高估微小機率、低估中高機率）後，這張表能一次解釋許多看似矛盾的行為。</p>
<p><strong>論證：</strong>「確定性效應」讓人願為「從 95% 到 100%」付出過高代價；「可能性效應」讓人為「從 0% 到 5%」的一線希望付出過高代價。兩者使我們在四個象限展現截然不同的風險偏好。</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>關鍵實驗／實例：</strong>四象限：①高機率獲利（95% 會贏）→ 怕到手的飛了，趨向保守、接受不划算的和解；②高機率損失（95% 會輸）→ 不甘認賠，孤注一擲；③低機率獲利（5% 中大獎）→ 買「希望」，於是買彩券；④低機率損失（0.1% 出大事）→ 買「安心」，於是買保險。這解釋了為何同一個人既買彩券（賭低機率獲利）又買保險（防低機率損失）——兩者都是為了那被高估的微小機率付溢價。訴訟中，勝算高的原告常因怕輸掉一切而接受偏低和解，勝算低的被告卻可能拒和、放手一搏。</p>
<p><strong>應用與啟示：</strong>認出自己落在哪個象限，能幫你看穿「情緒溢價」：你是在為一線希望多付錢（彩券、樂透式投資），還是為一份安心多付錢（過度保險）？也解釋了絕望方為何難纏——因為他在象限②，什麼都敢賭。</p>
<p class="thought-question">🤔 反思：你買過最「不理性」的彩券或保險是什麼？用四重模式看，你其實是在為哪一種被高估的機率付錢？</p>` },

  30: { num: '第 30 章', title: '罕見事件', epigraph: '「我們同時高估、又忽視罕見事件。」', body: `
<p><strong>核心論點：</strong>人對罕見事件的反應充滿矛盾：當它被生動地描述、或被明確標示出來時，我們會過度高估、過度反應；但在許多情境下，我們又完全忽視它。決定我們反應的，不是機率本身，而是它有多「鮮明」。</p>
<p><strong>論證：</strong>「機率權重」使微小機率被系統性高估；「分母忽略」則讓我們只被鮮明的分子（會發生的可怕畫面）吸引，而無視龐大的分母（幾乎不會發生）。表述方式因此能翻轉我們對同一機率的感受。</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>關鍵實驗／實例：</strong>「分母忽略」實驗：一個裝有「1 顆紅球、9 顆白球（10% 中獎）」的甕，與一個裝有「8 顆紅球、92 顆白球（8% 中獎）」的甕，不少人竟寧選中獎率較低的後者——因為「8 顆紅球」的畫面比「1 顆」更誘人、更鮮明，蓋過了實際比例。恐怖攻擊的例子亦然：客觀機率極低，但因畫面鮮明、情緒強烈，人們的恐懼與行為改變遠超過其真實風險。</p>
<p><strong>應用與啟示：</strong>罕見風險與機會（樂透、空難、罕見副作用）之所以左右我們，關鍵在「它被描述得多鮮明」。要更理性，就把「鮮明的畫面」翻回「冷靜的比例」，並警覺別人正如何用生動的描述來操縱你的機率感。</p>
<p class="thought-question">🤔 反思：有沒有一個機率極低的風險，因為被描述得太生動，讓你做出了不成比例的擔憂或花費？</p>` },

  31: { num: '第 31 章', title: '風險政策', epigraph: '「像交易員一樣思考：把每一筆決策放進更大的組合裡看。」', body: `
<p><strong>核心論點：</strong>把每個風險決策「一次一件、分開看」（窄框架），會放大損失趨避、導致整體上過度保守且前後不一。若採「寬框架」——把眾多決策當成一個組合來看——往往能做出更理性、期望值更高的選擇。</p>
<p><strong>論證：</strong>單看一筆賭注，損失趨避讓人拒絕許多其實划算的機會；但把許多筆獨立的、期望值為正的賭注「打包」起來，虧損的整體風險會被大幅稀釋，接受它們才是理性的。</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>關鍵實驗／實例：</strong>經濟學家薩繆爾森曾提議與同事打賭：擲硬幣，贏得 200 元或輸掉 100 元。同事拒絕單次下注，卻說「如果讓我玩 100 次，我就賭」。這正說明：單一次看，損失趨避讓人卻步；但重複多次的「組合」把風險攤平，正期望值就顯得明智了。康納曼因此建議：對於會反覆面對的同類小風險，訂一套「風險政策」統一執行，而不要每次都重新讓情緒動搖。</p>
<p><strong>應用與啟示：</strong>投資、保險、日常小賭注都適用：別一筆一筆地被損失趨避綁架，而要退一步用「組合／長期」的寬框架來決定。預先訂好「風險政策」（如「這類期望值為正的機會我一律接受」），能讓你免於每次都被當下的恐懼左右。</p>
<p class="thought-question">🤔 反思：你有沒有因為「單獨看這一筆會虧」而拒絕過一整類其實長期划算的機會（如某些投資、保險選擇）？</p>` },

  32: { num: '第 32 章', title: '記分', epigraph: '「為了不承認賠了，我們常常賠得更多。」', body: `
<p><strong>核心論點：</strong>我們在心裡替各種事情「記分」，把生活分成一個個「心理帳戶」。這套記分系統雖有助於自我管理，卻也催生了沉沒成本謬誤、處分效應與後悔驅動的種種非理性——我們常為了讓某個帳戶「結算得好看」，而做出實質上更糟的選擇。</p>
<p><strong>論證：</strong>「關掉一個虧損的帳戶」等於正式承認損失，會帶來後悔與痛苦；為了逃避這份痛，人們寧可投入更多、繼續錯下去。損失趨避與後悔情緒，是心理帳戶背後的引擎。</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>關鍵實驗／實例：</strong>「沉沒成本」：買了昂貴的球賽門票，卻遇上暴風雪，許多人仍勉強冒險開車去看——只因不去就「浪費了票錢」，儘管票錢早已付出、與現在該不該冒險無關。「處分效應」：投資人傾向賣掉賺錢的股票（好結算一個賺錢帳戶）、卻死抱賠錢的股票（不願結算一個虧損帳戶），即使理性上該做相反的事。這些都是為了帳面好看而犧牲實質利益。</p>
<p><strong>應用與啟示：</strong>做決定時，只問「從現在起，怎麼做最好？」，別讓「已經投入多少」綁架你（沉沒成本不該左右未來決策）。察覺自己正在「為了不認賠而繼續投入」，是止損的第一步。</p>
<p class="thought-question">🤔 反思：你有沒有為了「不浪費已投入的（時間、金錢、感情）」，而繼續耗在一件早該放手的事上？</p>` },

  33: { num: '第 33 章', title: '逆轉', epigraph: '「把選項擺在一起，你的偏好就變了。」', body: `
<p><strong>核心論點：</strong>同一個人對同樣的選項，在「單獨評估」與「並列評估」下，偏好會發生逆轉。因為單獨看時我們只能靠情緒與可得的印象（系統一），並列看時系統二才被喚醒、去比較那些原本被忽略的維度。</p>
<p><strong>論證：</strong>單獨評估依賴「這感覺如何」的強度匹配，容易被鮮明但次要的特徵主導；並列評估則讓被忽略的關鍵維度浮現，於是判斷標準整個改變——這證明偏好不是穩定的，而是隨脈絡建構的。</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>關鍵實驗／實例：</strong>「海豚 vs 農場工人」捐款研究：單獨問時，人們願為「拯救瀕危海豚」捐的錢，比為「替農場工人做皮膚癌篩檢」還多（海豚可愛、情緒強）；但把兩者並列，多數人立刻覺得「人命優先」，捐款意願逆轉。法律上也有類似現象：陪審團在只看一個案子時給出的賠償金，與把多個案子並排比較時給出的，可能嚴重不一致。</p>
<p><strong>應用與啟示：</strong>這對制度設計影響深遠：孤立地做決定容易被情緒與表象牽著走，刻意「並排比較」能喚醒理性、暴露被忽略的維度。買東西、評選、給獎懲時，把選項擺在一起看，往往能做出更一致、更公平的判斷。</p>
<p class="thought-question">🤔 反思：你有沒有「單看很心動、一比較就冷靜」的購買或選擇經驗？並排比較改變了你看重的東西嗎？</p>` },

  34: { num: '第 34 章', title: '框架與現實', epigraph: '「換一種說法，就換了一個選擇。」', body: `
<p><strong>核心論點：</strong>邏輯上完全等價的資訊，只要用不同的方式「框架」（措辭、以得或以失呈現），就會導致人們做出不同、甚至相反的選擇。這證明我們的偏好並非穩定地存在於心中，而是被問法當場建構出來的。</p>
<p><strong>論證：</strong>系統一對「損失」與「獲利」的措辭有截然不同的情緒反應（損失趨避）。因此「存活」框架與「死亡」框架、「折扣」與「加價」框架，會活化不同的感受，進而翻轉決定——即使兩者說的是同一件事。</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>關鍵實驗／實例：</strong>經典的「亞洲疾病問題」：面對一場預計奪走 600 人性命的疫病，方案以「能救活 200 人」（獲利框架）呈現時，多數人選這個穩健方案；但把同一方案改述為「會有 400 人死亡」（損失框架）時，多數人卻轉而選擇那個孤注一擲的方案——選擇被措辭整個翻轉。醫療決策也一樣：告訴病人手術「存活率 90%」比「死亡率 10%」更能讓人接受。最有力的實例是器官捐贈：預設「不同意就要主動勾選退出」的國家，同意率接近 100%；預設「同意才主動勾選加入」的國家，同意率卻低得多——一個預設值的框架，攸關無數性命。</p>
<p><strong>應用與啟示：</strong>框架效應戳破了「理性人有穩定偏好」的假設，也賦予「預設值」與「措辭」巨大的力量。這正是「助推」的原理：善用框架與預設，可以在不剝奪自由的前提下，幫人做出對自己更好的選擇——但同樣的力量也可能被用來操縱你。</p>
<p class="thought-question">🤔 反思：你最近一次被「說法」而非「實質」影響了選擇（如折扣話術、存活率 vs 死亡率），是什麼情況？</p>` }
});

Object.assign(CHAPTER_CONTENT, {
  35: { num: '第 35 章', title: '兩個自我', epigraph: '「經驗自我承受人生，記憶自我卻主宰決定。」', body: `
<p><strong>核心論點：</strong>我們身上有兩個自我：「經驗自我」活在每一個當下、真正感受著快樂與痛苦；「記憶自我」則事後負責回憶、評價，並據此做決定。兩者對同一段經驗的評價常常衝突，而做決定的權力，掌握在偏心的記憶自我手上。</p>
<p><strong>論證：</strong>記憶自我不是忠實的記錄者。它評價一段經驗時，幾乎只看「最強烈的一刻（峰）」與「結尾（終）」，而幾乎完全忽略經驗持續了多久（忽略時長）。於是「記得的痛苦」與「實際承受的痛苦總量」可以嚴重脫節。</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>關鍵實驗／實例：</strong>經典的「冷水手」實驗：受試者經歷兩次不適——短版：把手浸在很冷的水中 60 秒；長版：同樣 60 秒後，再多浸 30 秒，但水溫悄悄調得沒那麼冷。長版客觀上多受了 30 秒的罪，但因為「結尾比較不痛」，當被問「若要重來一次選哪個」時，多數人竟選了受罪更久的長版。記憶自我為了一個較好的「結尾」，寧願讓經驗自我多痛一會兒。</p>
<p><strong>應用與啟示：</strong>這揭露了一個令人不安的真相：我們為「回憶」做決定，而非為「體驗」。理解峰終定律與忽略時長，能解釋我們為何常做出對「當下的自己」不利的選擇，也逼我們反問：一段經驗的價值，到底該由誰來評判？</p>
<p class="thought-question">🤔 反思：若一段假期很美好但結尾掃興，你會記成「糟糕的假期」嗎？這對「記憶自我說了算」說明了什麼？</p>` },

  36: { num: '第 36 章', title: '人生如故事', epigraph: '「我們在乎的不是經驗本身，而是它的故事——尤其是結局。」', body: `
<p><strong>核心論點：</strong>記憶自我用「講故事」的方式理解人生，而故事最看重的是「高峰」與「結局」。這使得「結尾」對我們如何評價一段經驗、甚至一整段人生，擁有不成比例的份量；時間的長短反而幾乎不重要。</p>
<p><strong>論證：</strong>由峰終定律與忽略時長推得：一段經驗多出來的平淡時光，幾乎不改變我們對它的整體評價；但改變結尾，就能改變整個故事的意義。人生被當成一個「故事」來評分，而非一段「體驗」來加總。</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>關鍵實驗／實例：</strong>大腸鏡檢查研究（雷德梅爾與康納曼）：把不適的結尾拖長、但以較輕微的不適收場的病人，事後把整場檢查記成「沒那麼痛苦」，儘管他們客觀上承受的疼痛總量更多。另一個「珍的一生」思想實驗：受試者評價一個「非常幸福、然後驟逝」的人生，與「同樣幸福、但多活了幾年『還算不錯但平淡』的日子」的人生——多數人竟給後者較低的評價。多出來的好年頭反而拉低了整體評分（「少即是多」再現），因為它稀釋了故事漂亮的結尾。</p>
<p><strong>應用與啟示：</strong>這解釋了我們為何如此在意「善終」「圓滿的結局」，也提醒我們：對「一生」的評價，其實深受敘事偏誤影響。若太執著於故事的結尾，我們可能會忽略了構成人生實質的、那些日復一日的當下體驗。</p>
<p class="thought-question">🤔 反思：你評價自己過去某段經歷（一段感情、一份工作）時，是不是主要被它的「結局」決定了整體印象？</p>` },

  37: { num: '第 37 章', title: '體驗的幸福', epigraph: '「你想測量哪一種幸福？答案會很不一樣。」', body: `
<p><strong>核心論點：</strong>「幸福」不是單一的東西。用「當下體驗」測量的幸福（經驗自我），和用「回想起來對人生的滿意度」測量的幸福（記憶自我），是兩個不同的量，答案常常南轅北轍。混為一談，會讓我們追錯了目標。</p>
<p><strong>論證：</strong>要測經驗自我的幸福，得捕捉「一個個當下的感受」，而非事後籠統的回憶。康納曼發展了方法來逼近它，結果顯示：主宰日常情緒的，往往是那些容易被「人生滿意度」問卷忽略的瑣碎因素。</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>關鍵實驗／實例：</strong>「日重現法」（DRM）請人回顧前一天，逐段重歷各項活動與當時的感受，藉此估算「經驗自我」花了多少時間在正/負面情緒中（並發展出衡量痛苦時間比例的「U 指數」）。發現包括：通勤是日常中情緒最差的活動之一；與朋友相處、親密關係則名列前茅。關於收入，研究指出情緒性的日常幸福會隨收入上升、但在達到某個水準後趨於平緩——錢能減少貧窮帶來的痛苦，卻買不到成比例增加的當下快樂；收入對「人生滿意度」的影響則持續得多。</p>
<p><strong>應用與啟示：</strong>想提升「經驗自我」的幸福，與其追逐會被記憶自我看重的宏大成就，不如認真經營那些佔據你日常時間、卻常被低估的小事：減少痛苦的通勤、增加與所愛之人相處的時光。你想改善的，到底是「體驗」還是「回憶」？</p>
<p class="thought-question">🤔 反思：你花最多時間做的日常活動裡，哪些其實讓你當下並不快樂？有沒有可能調整它們？</p>` },

  38: { num: '第 38 章', title: '思考人生', epigraph: '「當你正想著某件事，它就顯得比實際更重要。」', body: `
<p><strong>核心論點：</strong>我們對「人生滿意度」的回答，同樣受系統一的捷思與偏誤左右，尤其是「聚焦錯覺」——一旦把注意力放到某件事上，它在我們評估幸福時的份量，就會被大大誇大。我們以為會帶來長久幸福的改變，效果往往遠不如預期。</p>
<p><strong>論證：</strong>評價人生是個難題，於是系統一又用替代作用：把「我這輩子過得如何」換成「此刻浮現心頭的那件事讓我感覺如何」。凡是當下被聚焦的事（收入、氣候、一次購買），其重要性都被高估；而我們也會「適應」新處境，快感隨參考點上移而消退。</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>關鍵實驗／實例：</strong>康納曼的名言：「當你正想著人生裡的某件事時，沒有任何一件事像它看起來那麼重要。」研究顯示，一般人以為「搬去陽光普照的加州會更幸福」，但實際比較加州與中西部居民的整體幸福感，差異微乎其微——因為只有在「被問到氣候」的當下，天氣才顯得重要，日常生活裡人們根本不會一直想著天氣（聚焦錯覺）。新婚、加薪、買車帶來的快樂，也多半會隨適應而回歸原點。</p>
<p><strong>應用與啟示：</strong>這是全書的收束，也是最實用的一劑清醒藥：對抗行銷、也對抗自己的焦慮。當你確信「只要得到 X，人生就會幸福」時，提醒自己——那多半是聚焦錯覺。真正的幸福，藏在你如何度過那些「沒有特別在想什麼」的日常時光裡。</p>
<p class="thought-question">🤔 反思：你現在深信「只要達成／得到它，就會快樂很多」的那件事，是不是聚焦錯覺？得到後你真的會一直那麼快樂嗎？</p>` }
});


// ---- English chapter bodies (parallel store, merged below) ----
const CHAPTER_CONTENT_EN = {};

Object.assign(CHAPTER_CONTENT_EN, {
  1: { num: 'Chapter 1', title: 'The Characters of the Story: Two Systems', epigraph: '“System 1 is fast and automatic; System 2 is slow and effortful. These are the two protagonists of the book.”', body: `
<p><strong>Core claim:</strong> Our mental life can be described in terms of two systems. System 1 runs automatically, quickly, and with little effort, continuously producing impressions and intuitions. System 2 handles the effortful computation and self-control that demand focused attention. Everyday life is governed by System 1; System 2 is summoned only when needed.</p>
<p><strong>The argument:</strong> Kahneman labels them fast and slow not because the brain literally houses two agents, but as a convenient pair of fictional characters that let us talk about two modes of the mind. System 1's skills are either innate or learned to fluency (reading a face, dodging a car, 2+2), while System 2 corresponds to the activities that make you stop and think.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>Key experiment / example:</strong> See an angry face and you know instantly that she is furious, and can even guess what she is about to say. That is System 1. But to compute 17 x 24 you must stop, frown, and marshal your memory. The process is effortful and crowds out other attention. That is System 2. The famous Muller-Lyer illusion, where two equal line segments look unequal because of the arrowheads, shows that even when System 2 knows the lines are equal, System 1 stubbornly keeps seeing them as different.</p>
<p><strong>Takeaway:</strong> Recognizing this division of labor is the starting point of the whole book. When you fall silent while chatting and driving because a car cuts in front of you, that is the instant System 2 is yanked away to handle the road and has no capacity left for conversation. To understand bias is to understand when System 1 quietly decides things on System 2's behalf.</p>
<p class="thought-question">🤔 Reflect: Which of your actions today were pure System 1 (done automatically, noticed only afterward), and which forced you to engage System 2?</p>` },

  2: { num: 'Chapter 2', title: 'Attention and Effort', epigraph: '“Mental effort has a cost, and System 2 is stingy about paying it.”', body: `
<p><strong>Core claim:</strong> System 2 draws on attention, a limited resource. Effortful thinking is a real physiological burden, and once attention is fully occupied, we become blind to other things in plain sight.</p>
<p><strong>The argument:</strong> Kahneman's early research on effort found that mental load shows up in the pupils: the harder you think, the wider they dilate, almost like an externally observable meter of mental exertion. Because System 2's capacity is limited, we are built to conserve effort.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>Key experiment / example:</strong> In the Add-1 task, where you hear a string of digits and must repeat them each raised by one, subjects' pupils dilate sharply, wider as the task gets harder, and snap back the moment they give up. And in the famous invisible-gorilla experiment, subjects counting basketball passes so intently that fully half of them failed to notice a person in a gorilla suit stroll across the screen. Fill up attention and you go blind to the obvious.</p>
<p><strong>Takeaway:</strong> Focus and blindness are two sides of one coin. When you concentrate hard on something, you are not merely too busy to see other things, you genuinely cannot see them. This is why phoning while driving is so dangerous: it is not your hands that are occupied, it is your mind's attention that has been drained away.</p>
<p class="thought-question">🤔 Reflect: Have you ever completely failed to notice something right in front of you? What had claimed your attention at the time?</p>` },

  3: { num: 'Chapter 3', title: 'The Lazy Controller', epigraph: "“System 2 is a lazy gatekeeper that often simply waves System 1's suggestions through.”", body: `
<p><strong>Core claim:</strong> System 2 is inherently lazy and spends as little effort as it can. Self-control and cognitive effort draw on the same limited pool of resources, so depleting one (ego depletion) leaves us more impulsive and quicker to surrender to intuition.</p>
<p><strong>The argument:</strong> Sustaining focus and resisting temptation both call on System 2. When that system is busy or tired, its policing slackens, and it simply endorses the intuitive answer System 1 hands it rather than checking the work.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>Key experiment / example:</strong> The classic bat-and-ball problem: a bat and ball cost 1.10 dollars together, the bat costs 1 dollar more than the ball, so how much is the ball? Almost everyone blurts out 10 cents. That is System 1's intuition, and it is wrong (the answer is 5 cents). Even most students at elite universities get it wrong because System 2 can't be bothered to verify. Ego-depletion studies show that people who first resist eating cookies (spending self-control) give up sooner on a later hard puzzle. The book also cites the observation that parole judges approve far fewer requests when hungry, illustrating how a tired System 2 lets judgment fall back on the effort-saving default.</p>
<p><strong>Takeaway:</strong> Save important decisions for when System 2 is in good shape (fed, rested, not rushed). When you are tired, hungry, and pressed for time, you are effectively letting System 1 decide for you.</p>
<p class="thought-question">🤔 Reflect: What was your first answer to the bat-and-ball problem? Have you ever made an impulsive decision while exhausted that you later regretted?</p>` },

  4: { num: 'Chapter 4', title: 'The Associative Machine', epigraph: '“System 1 is a tirelessly running associative machine.”', body: `
<p><strong>Core claim:</strong> System 1 works by association: one idea automatically and unconsciously triggers a cascade of related ideas, emotions, and bodily reactions. This leaves us highly susceptible to priming, where something we encountered earlier shapes our later thoughts and behavior without our knowing.</p>
<p><strong>The argument:</strong> Associative activation is a chained, automatic process. Read the words banana and vomit and you instantly forge a causal, aversive link between them, even briefly losing your appetite for bananas. You never chose to think that way.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>Key experiment / example:</strong> The Florida effect: subjects who first read words associated with old age (wrinkle, forgetful) walked noticeably more slowly as they left the lab, and flatly denied being influenced. Other priming studies: thinking about money makes people more independent but also more selfish; and after recalling their own immoral acts, people are more drawn to buy cleaning products (the Lady Macbeth effect).</p>
<p><strong>Takeaway:</strong> Priming unsettles us precisely because it bypasses awareness. It means the environment (advertising, wording, decor, other people) can shape us without our noticing. Recognizing this at least makes us a bit more alert to why we think the way we do.</p>
<p class="thought-question">🤔 Reflect: That priming can alter your behavior without your awareness, does it make you more uneasy or more curious? Can you think of a time the environment primed you?</p>` },

  5: { num: 'Chapter 5', title: 'Cognitive Ease', epigraph: '“Whatever is easy feels familiar, true, good, and effortless.”', body: `
<p><strong>Core claim:</strong> When information is easy to process (cognitive ease), System 1 produces a pleasant feeling and misreads that feeling as familiar, true, and good. Effortful processing (cognitive strain), by contrast, makes us suspicious and puts System 2 on alert.</p>
<p><strong>The argument:</strong> The brain treats fluency as a cue. Anything clear, rhyming, repeated, or previously seen feels more fluent and is therefore easier to believe, even though fluency has nothing to do with truth.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>Key experiment / example:</strong> The mere-exposure effect: simply seeing a word (even a meaningless syllable) over and over makes people like it. A statement printed in sharp, high-contrast type is judged truer than the same statement in blurry print. Rhyming aphorisms are rated as more insightful than non-rhyming paraphrases of the same idea. Even companies with easy-to-pronounce ticker symbols perform slightly better right after listing.</p>
<p><strong>Takeaway:</strong> This is the lever shared by propaganda, advertising, and misinformation: repeat something often enough and familiarity gets mistaken for truth. To resist it, deliberately pause when something reads smoothly and sounds sensible, and ask: is this actually true, or does it just flow nicely?</p>
<p class="thought-question">🤔 Reflect: Have you ever believed something just because you had heard or seen it so often, only to realize later you never actually checked it?</p>` },

  6: { num: 'Chapter 6', title: 'Norms, Surprises, and Causes', epigraph: '“System 1 maintains a model of a normal world and automatically hunts for causes in everything.”', body: `
<p><strong>Core claim:</strong> System 1 constantly builds a model of what is normal from experience and is surprised by departures from it. At the same time it is a compulsive causal detective, automatically assigning causes and intentions to any event, even a mere coincidence.</p>
<p><strong>The argument:</strong> We are built to understand the world through causes rather than statistics. System 1 excels at spinning causal stories and reading intentions, but is remarkably insensitive to randomness, probability, and statistics.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>Key experiment / example:</strong> The classic Heider-Simmel animation: watching a few geometric shapes move around, people spontaneously see a full drama in which a big triangle bullies a small one, imputing motives to lifeless shapes. This shows that our perception of cause and intention is automatic and involuntary. System 1 sees causes first; statistical thinking has to be learned laboriously by System 2.</p>
<p><strong>Takeaway:</strong> Many moments of seeing a pattern, a conspiracy, or a meaning are really just System 1's causal impulse imposing a story on random events. Facing the world, we must remind ourselves that some things truly are just coincidence.</p>
<p class="thought-question">🤔 Reflect: When did you last read a cause or a motive into a coincidence? Did that cause turn out to be real?</p>` },

  7: { num: 'Chapter 7', title: 'A Machine for Jumping to Conclusions', epigraph: '“What you see is all there is (WYSIATI).”', body: `
<p><strong>Core claim:</strong> System 1 rushes to conclusions: it builds a coherent story out of only the information at hand and ignores what is missing. This governing rule is WYSIATI, what you see is all there is. Coherence breeds confidence, and confidence has nothing to do with whether the information is sufficient.</p>
<p><strong>The argument:</strong> What System 1 seeks is a coherent story, not complete information. As long as the available clues fit into something that hangs together, it is satisfied and suppresses any doubt about what might be missing.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>Key experiment / example:</strong> The halo effect: a person described first as intelligent and industrious and then as impulsive and envious (Alan) is judged more favorably than someone (Ben) given the same traits in reverse order. Identical qualities take on a different color merely because of the first impression. In another study, jurors who heard only one side of a case were more confident than those who heard both, since the more one-sided the information, the more coherent the story and the more confident the person. This is WYSIATI in action.</p>
<p><strong>Takeaway:</strong> When you feel especially certain about something, be wary: that certainty may come precisely from having seen only one side. Deliberately asking what information am I missing, and how would the other side put it, is the starting point for fighting overconfidence.</p>
<p class="thought-question">🤔 Reflect: When did you last size someone up from a first impression that was later overturned? What information had you ignored at the time?</p>` },

  8: { num: 'Chapter 8', title: 'How Judgments Happen', epigraph: '“System 1 continuously and uninvited performs all kinds of assessments for us.”', body: `
<p><strong>Core claim:</strong> System 1 is always making basic assessments of its surroundings (is it safe, friendly, dominant?) even when nobody asked. It can also automatically translate the intensity of one dimension onto another that is entirely unrelated.</p>
<p><strong>The argument:</strong> This continuous background assessment is the raw material of intuitive judgment. System 1 is like a mental shotgun: you aim at a single question, but it computes a spray of related and unrelated answers at once, and it is hard to make it compute only the one you want.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>Key experiment / example:</strong> Intensity matching: people answer without hesitation questions like if a crime were a color, what color would it be, or if this professor's brilliance were converted into height, how many centimeters would it be. System 1 easily maps severity of crime onto color, and talent onto height. Research also shows that a fraction-of-a-second impression of competence from a face predicts election outcomes to a striking degree, because voters unconsciously treat looking capable as a basis for their vote.</p>
<p><strong>Takeaway:</strong> First impressions and gut-feel judgments are products of these automatic assessments. They are fast and useful, but they also let irrelevant cues (looks, voice) quietly contaminate important judgments.</p>
<p class="thought-question">🤔 Reflect: Have you ever placed too much trust in someone simply because they looked reliable or capable? What was that impression actually based on?</p>` }
});
Object.assign(CHAPTER_CONTENT_EN, {
  9: { num: 'Chapter 9', title: 'Answering an Easier Question', epigraph: '“Faced with a hard question, we often answer an easier one instead, without noticing.”', body: `
<p><strong>Core claim:</strong> When System 1 meets a hard 'target question' it cannot readily answer, it automatically finds a related but easier 'heuristic question' to answer, then applies that answer back to the original. This is substitution, and it is the common machinery behind almost every heuristic and bias.</p>
<p><strong>The argument:</strong> Substitution happens fast and seamlessly, so we usually never notice we swapped the question. This also explains why we so often answer hard questions quickly and confidently: we are actually answering a different, easier one.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>Key experiment / example:</strong> The hard question 'How satisfied are you with your life?' is often replaced by the easy one 'What is my mood right now?' In a classic study, students were first asked 'How many dates did you have last month?' and then 'How happy are you with your life overall?' The two answers correlated strongly: the most vivid current feeling, dating frequency, stood in for the grand question about life. The affect heuristic is another case: our judgment of a technology's risks and benefits often hinges on the simpler feeling 'Do I like it or not?'</p>
<p><strong>Takeaway:</strong> Seeing through substitution is one of the most useful lessons in the book. When you fire off an instant answer to a question that should be hard, pause and ask: was that really the question I was asked, or a more convenient stand-in?</p>
<p class="thought-question">🤔 Reflect: Recall a judgment you made very quickly that was actually quite hard. Did you quietly swap it for an easier question?</p>` },

  10: { num: 'Chapter 10', title: 'The Law of Small Numbers', epigraph: '“We have no intuition for randomness, so we keep seeing signal in the noise.”', body: `
<p><strong>Core claim:</strong> People, professional researchers included, wrongly assume small samples are as reliable as large ones, so they treat the wild swings of small samples as meaningful patterns. This is a systematic misunderstanding of randomness, the law of small numbers.</p>
<p><strong>The argument:</strong> Statistically, small samples are simply more prone to extreme results. But System 1 is a causal detective, not a statistician: it sees an extreme number and rushes to find a reason, never stopping to think 'the sample is just too small.'</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>Key experiment / example:</strong> The classic kidney-cancer map: the counties with the lowest incidence turn out to be mostly small, sparsely populated rural ones, and people instantly invent a story about 'the healthy rural life.' But the counties with the highest incidence are also mostly small rural ones. The truth is that rates in small samples must swing more wildly, and it has nothing to do with country living. The book also notes a foundation that poured money into small schools because the top-performing schools were mostly small, ignoring that the worst-performing schools were mostly small too, another small-sample effect at work.</p>
<p><strong>Takeaway:</strong> When you see a startling ranking or rate, first ask 'How big was the sample?' Many 'amazing findings' and 'best/worst' lists are just statistical illusions manufactured by the law of small numbers.</p>
<p class="thought-question">🤔 Reflect: What recent 'ranking' or 'shocking statistic' have you seen that might really be nothing but the random noise of a small sample?</p>` },

  11: { num: 'Chapter 11', title: 'Anchors', epigraph: '“One arbitrary number is enough to drag your estimate toward it.”', body: `
<p><strong>Core claim:</strong> When people estimate an unknown quantity, an arbitrary number they encounter first (the anchor) strongly pulls the final answer toward it, even when that number is plainly irrelevant to the question. Anchoring is stable, powerful, and something we are almost unable to resist.</p>
<p><strong>The argument:</strong> Anchoring works through two mechanisms. System 2 'adjusts' away from the anchor but always adjusts too little; System 1 is 'primed' by the anchor and automatically searches for evidence consistent with it. Together they drag the answer toward the anchor.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>Key experiment / example:</strong> Kahneman and Tversky had subjects spin a rigged wheel that stopped only on 10 or 65, then asked 'What percentage of UN members are African nations?' Those who landed on 65 guessed 45% on average; those who landed on 10 guessed only 25%, a number they knew was random yet that still contaminated their estimate. In a real-estate study, even expert agents let the listing price anchor their valuations, all while insisting they were immune.</p>
<p><strong>Takeaway:</strong> Anchors are everywhere: price tags, opening bids in negotiation, 'was X, now Y,' preset donation buttons. The defense is to notice the anchor and deliberately reason toward your own number from the opposite direction, rather than 'adjusting' from the number the other side handed you.</p>
<p class="thought-question">🤔 Reflect: The last time you haggled or shopped, did the other side throw out an 'anchor' first? How far did it drag your mental price?</p>` },

  12: { num: 'Chapter 12', title: 'The Science of Availability', epigraph: '“The easier something comes to mind, the more common we think it is.”', body: `
<p><strong>Core claim:</strong> The availability heuristic estimates the frequency or probability of something by 'how easily examples come to mind.' Things that are easy to recall (vivid, recent, emotional) get overestimated; things that are hard to recall get underestimated.</p>
<p><strong>The argument:</strong> This is substitution again: the hard question 'How often does this kind of event actually happen?' gets swapped for the easy one 'How easily can I recall an example of it?' And the very ease of recall is itself shaped by many factors that have nothing to do with true frequency.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>Key experiment / example:</strong> When spouses each estimate their own share of the housework, the two figures often add up to more than 100%, because each person more easily recalls the chores they did. Schwarz's clever experiment: after people listed 6 examples of their own assertiveness, they felt assertive; but when asked to list 12, they felt less assertive, because the later examples came so haltingly. The judgment rested not on the number of examples but on the fluency of recall.</p>
<p><strong>Takeaway:</strong> Your ranking of the world's risks is largely determined by what comes to mind easily, which in turn is shaped by media and personal experience. To judge frequency more accurately, you have to deliberately look up the data instead of trusting the examples that pop into your head.</p>
<p class="thought-question">🤔 Reflect: A risk you have been especially worried about lately, is its probability truly high, or has it just been coming to mind often (in the news, or happening near you)?</p>` },

  13: { num: 'Chapter 13', title: 'Availability, Emotion, and Risk', epigraph: '“Emotion decides which risks we see, and how we see them.”', body: `
<p><strong>Core claim:</strong> Our sense of risk is ruled by emotion and availability, not by statistics. Vivid, frightening, newsworthy rare risks get blown out of proportion, while quiet, everyday, genuinely lethal risks get underweighted, and the media and public opinion can amplify the former into an availability cascade.</p>
<p><strong>The argument:</strong> The affect heuristic lets us substitute like-and-dislike for a cost-benefit analysis; the availability cascade is a self-reinforcing loop in which an event gets repeatedly reported, stirs public emotion, and prompts still more reporting, so that a small risk is whipped up into nationwide panic.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>Key experiment / example:</strong> People fear plane crashes more than car crashes, and terrorism more than stroke, even though the latter kill far more, because the former are more vivid and more newsworthy. The book recounts the debate between psychologist Slovic and legal scholar Sunstein: experts compute risk by probability, the public feels risk by emotion, and the two often diverge sharply. Denominator neglect appears here too: '1,286 deaths per 10,000 people' sounds scarier than 'a 24.14% death rate,' even though the former is the lower proportion.</p>
<p><strong>Takeaway:</strong> Public policy that simply caters to emotionally amplified fears misallocates resources toward low risks. As individuals, understanding 'how much of my fear comes from news images' helps us return attention to what actually deserves worry.</p>
<p class="thought-question">🤔 Reflect: Is there an everyday risk you barely worry about (diet, sitting too long) that the data say is far more dangerous than the thing you fear?</p>` },

  14: { num: 'Chapter 14', title: 'Tom W\'s Specialty', epigraph: '“How much something resembles a type is not how likely it is to belong to it.”', body: `
<p><strong>Core claim:</strong> The representativeness heuristic makes us judge probability by 'how much someone or something resembles a stereotype,' while ignoring the far more important base rate (how common that category is in the population to begin with).</p>
<p><strong>The argument:</strong> Judging probability correctly requires combining the descriptive evidence with the base rate, but System 1 is led entirely by similarity. Similarity and probability are two different things, and conflating them produces systematic error.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>Key experiment / example:</strong> In the 'Tom W' study, students were given a personality sketch describing Tom as introverted, tidy, and fond of science fiction, then asked to guess which graduate field he was in. Most, because he 'resembled' the nerdy computer-science or engineering type, ranked those small, uncommon fields first, ignoring that those programs enroll far fewer students than large fields like education and the humanities (the base rate). They substituted 'how much he resembles' for 'how likely he is.'</p>
<p><strong>Takeaway:</strong> When judging 'which category this person or thing belongs to,' first ask 'How common is this category anyway?' (the base rate), then see how well the description fits. Neglecting the base rate is the most common error in hiring, selection, and diagnosis.</p>
<p class="thought-question">🤔 Reflect: Have you ever overestimated that someone belonged to a (actually rare) category just because they 'looked the type'?</p>` },

  15: { num: 'Chapter 15', title: 'Linda: Less Is More', epigraph: '“A more detailed, more plausible story feels more likely, which defies logic.”', body: `
<p><strong>Core claim:</strong> The representativeness heuristic leads to the conjunction fallacy: people judge 'A and B' more likely than 'A alone,' simply because the former is a more coherent, more vivid story. But logically, a more specific conjunction can never be more probable than one of its parts.</p>
<p><strong>The argument:</strong> Adding detail makes a story feel more real and fit the stereotype better (representativeness rises), while at the same time making it less probable (the conditions grow stricter). System 1 is seduced by the former and ignores the latter.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>Key experiment / example:</strong> The most famous case is the Linda problem: Linda is single, outspoken, and concerned with social justice. Which is more probable, that 'Linda is a bank teller' or that 'Linda is a bank teller and an active feminist'? Some 85 to 90 percent of people chose the latter, even though logically 'bank teller' must include 'bank teller and feminist.' The latter fit their image of Linda better, so it simply felt more right, the 'less is more' cognitive illusion.</p>
<p><strong>Takeaway:</strong> The more a forecast or scenario 'sounds reasonable and richly detailed,' the less likely it usually is to come true. Analysts and planners especially should beware: every extra 'and...' condition makes the story more compelling but less probable.</p>
<p class="thought-question">🤔 Reflect: Have you ever found a 'fully fleshed-out' prediction more credible than a 'vague' one? Consider whether it is actually harder to come true.</p>` },

  16: { num: 'Chapter 16', title: 'Causes Trump Statistics', epigraph: '“We only adopt statistics we can weave into a causal story.”', body: `
<p><strong>Core claim:</strong> People ignore purely statistical base rates but readily adopt base rates that can be given causal meaning. The very same number, once it fits a causal story, gets accepted by System 1 and used in judgment.</p>
<p><strong>The argument:</strong> System 1 understands the world through causes. A cold statistical base rate triggers no causal association, so it gets left aside; but once a base rate is packaged as 'a certain group of people simply tends to behave this way,' it instantly becomes vivid and usable.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>Key experiment / example:</strong> The classic cab problem: in a city 85% of cabs are green and 15% are blue. In a hit-and-run, a witness identifies the cab as blue (with 80% reliability). Most people judge almost entirely from the witness testimony, ignoring the base rate that blue cabs are rare to begin with. But if the same numbers are recast as 'the Green fleet has a hit-and-run rate of 85%' (given causal meaning), people fold it into their judgment, the same statistic only 'seen' once it becomes causal.</p>
<p><strong>Takeaway:</strong> This explains why stereotypes ('those people just are...') are so stubborn: they package statistics as causes, leading people to overapply them unconsciously. It also explains why purely numerical risk warnings are so often ignored, unless paired with a causal story.</p>
<p class="thought-question">🤔 Reflect: Is there a 'statistical fact' you never took to heart until someone told you a causal story about it, and suddenly you believed it?</p>` }
});
Object.assign(CHAPTER_CONTENT_EN, {
  17: { num: 'Chapter 17', title: 'Regression to the Mean', epigraph: '“After an extreme, we usually just drift back toward average -- rewards and punishments have nothing to do with it.”', body: `
<p><strong>Core claim:</strong> When performance contains an element of luck, an extreme result (very good or very bad) is usually followed by one closer to the average. This is regression to the mean -- a pure statistical phenomenon -- yet System 1 insists on assigning it a causal story.</p>
<p><strong>The argument:</strong> Wherever two things are imperfectly correlated, regression appears. Performance equals skill plus luck; luck does not persist, so an extreme showing is naturally followed by a fall back or a rise up -- no cause required.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>Key experiment / example:</strong> While teaching flight instructors in the Israeli Air Force, Kahneman heard one object: "When I praise a cadet who flew well, he does worse next time; when I scream at one who flew badly, he improves. So punishment works and reward backfires." Kahneman pointed out on the spot that this was pure regression to the mean -- an unusually good flight is naturally followed by a worse one, and an unusually bad flight by a better one, entirely independent of praise or blame. The regression of luck had turned the instructor into a believer in the power of punishment. The "Sports Illustrated jinx" (a slump after appearing on the cover) is the very same thing.</p>
<p><strong>Takeaway:</strong> Regression to the mean is the most counterintuitive statistical fact, and the one most often misread as causation. Whenever you see a "bounce off the bottom" or a "fall from the peak," ask first: is there a real cause here, or is luck simply regressing? Misjudging it makes us believe in a pile of ineffective "cures" and "management techniques."</p>
<p class="thought-question">🤔 Reflect: Which "do X and things got better or worse" claim have you believed that might really have been just regression to the mean -- some folk remedy, some management move?</p>` },

  18: { num: 'Chapter 18', title: 'Taming Intuitive Predictions', epigraph: '“A good prediction dares to be conservative and lean toward the average.”', body: `
<p><strong>Core claim:</strong> Intuitive predictions tend to be too extreme and too confident, because they translate the sheer vividness of the evidence directly into a prediction while ignoring that the evidence has limited reliability. The corrective is to make predictions regress toward the mean in a disciplined way.</p>
<p><strong>The argument:</strong> When evidence and outcome are imperfectly correlated, a rational prediction should not be as extreme as the evidence. It should be discounted according to reliability and pulled back toward the base rate (the average). System 1 will not do this automatically -- it is the work of System 2.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>Key experiment / example:</strong> The "Julie" problem: Julie read fluently at age four -- predict her college GPA. Most people convert the striking impression of "early reader" straight into a very high GPA. But early reading ability correlates only weakly with college grades, so such an extreme prediction is unwarranted. Kahneman offers a corrective procedure: start from the base rate (the average GPA), then make only a moderate adjustment scaled to the actual correlation of the evidence.</p>
<p><strong>Takeaway:</strong> This applies to predictions in hiring, investing, and selection: the more you are dazzled by a single impressive data point, the more you should remind yourself to pull back toward the average. Extreme predictions feel "insightful," but they are usually more wrong. Of course, being too conservative has a cost too -- the key is to let the extremity of the prediction match the reliability of the evidence.</p>
<p class="thought-question">🤔 Reflect: Have you ever formed an overly high prediction about someone from a single "impressive point" -- one interview, one grade?</p>` },

  19: { num: 'Chapter 19', title: 'The Illusion of Understanding', epigraph: '“In hindsight, everything looks as if it had been destined all along.”', body: `
<p><strong>Core claim:</strong> We make sense of the past with coherent causal stories, and this produces an illusion of understanding -- a feeling of "I understood it all along." Hindsight bias makes what already happened look inevitable and predictable, so we badly overestimate our ability (and others') to predict the future.</p>
<p><strong>The argument:</strong> A good story is simple, concrete, and credits success or failure to talent and intention rather than luck. This narrative fallacy leads us to impose order on a messy past and to revise our memories afterward, forgetting how little we actually knew at the time.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>Key experiment / example:</strong> Hindsight-bias experiments show that once an event is revealed, people "misremember" their earlier forecasts and believe they had seen it coming ("I knew it all along"). The book uses business bestsellers as an example: narratives celebrating successful companies mostly exaggerate the leader's role and downplay luck, so the "secrets of success" they claim to reveal have pitifully low predictive power -- because the gap in luck between successful and failing companies is often larger than the gap in ability.</p>
<p><strong>Takeaway:</strong> Stay wary of the armchair quarterback: being able to explain the past coherently does not mean you could have foreseen it, still less that you can foresee the future. It also reminds us to judge decisions by the quality of the decision at the time, not just by the outcome afterward (avoiding outcome bias).</p>
<p class="thought-question">🤔 Reflect: Is there something that, after it happened, you said "I knew it all along" about? Honestly -- did you actually predict it beforehand?</p>` },

  20: { num: 'Chapter 20', title: 'The Illusion of Validity', epigraph: '“Subjective confidence is not a measure of accuracy.”', body: `
<p><strong>Core claim:</strong> People's confidence in their own judgments comes mainly from the coherence of the story and the culture of their profession, not from the actual accuracy of those judgments. When an entire industry is built on a skill that does not really work, the illusion of validity can be sustained collectively.</p>
<p><strong>The argument:</strong> Confidence is a feeling (arising from WYSIATI and cognitive ease) and can be fully decoupled from real validity. When peers are all equally confident and the institution keeps rewarding that confidence, the illusion becomes even harder to puncture.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>Key experiment / example:</strong> As a young man in the Israeli army, Kahneman used a "leaderless group task" to assess officer potential, saw each candidate "clearly," and felt highly confident -- yet follow-up showed his predictive power was near zero. He called this the illusion of validity, and though he knew it did not work, the next day he confidently rated the next batch just the same. He also analyzed a wealth-management firm: comparing advisers' year-to-year performance rankings across eight years pairwise, the correlation was essentially zero, meaning performance was all luck. Yet the firm kept handing huge bonuses to "top-performing" advisers, the whole industry living inside an illusion of stock-picking skill.</p>
<p><strong>Takeaway:</strong> Do not treat a person's (or your own) confidence as evidence of accuracy. To judge whether a judgment is trustworthy, look at the objective track record and hit rate -- not how firmly it is stated or how elegant the story is.</p>
<p class="thought-question">🤔 Reflect: Does some "expert judgment" you trust survive the test of an objective track record -- or does it rest mainly on the expert's confidence and delivery?</p>` },

  21: { num: 'Chapter 21', title: 'Intuitions vs. Formulas', epigraph: '“A simple formula often beats the expert\'s intuition.”', body: `
<p><strong>Core claim:</strong> In many domains, a simple statistical formula (or algorithm) predicts more accurately, and more reliably, than trained expert intuition. The reason is that experts are thrown off by irrelevant information and are inconsistent, while a formula is consistent and unemotional.</p>
<p><strong>The argument:</strong> Experts suffer two handicaps: first, they tend to overthink and get led astray by surface features of the individual case; second, the same expert, given the same data at different times, produces different judgments (a lack of consistency). Formulas have neither flaw.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>Key experiment / example:</strong> Psychologist Paul Meehl synthesized a large body of research and found that simple statistical models almost always tied or beat clinical expert judgment (clinical vs statistical prediction). A classic case: the newborn Apgar score rates five simple indicators and judges an infant's condition more reliably than a senior physician's overall intuition; economist Orley Ashenfelter used a simple equation of rainfall and temperature to predict the future price of Bordeaux wines, accurately enough to annoy the tasting experts. Robyn Dawes further showed that even "improper linear models" with arbitrarily assigned weights often beat the experts.</p>
<p><strong>Takeaway:</strong> For repetitive judgments with stable, quantifiable data (hiring, loan approval, risk assessment), do not resist checklists and formulas. They are unglamorous but fairer, more consistent, and more accurate. The human role is to design and oversee the rules, not to flex intuition on every individual case.</p>
<p class="thought-question">🤔 Reflect: In your work or life, which kind of recurring judgment could actually be handed to a simple checklist or scoring sheet?</p>` },

  22: { num: 'Chapter 22', title: 'Expert Intuition: When Can We Trust It?', epigraph: '“Intuition is nothing more than recognition -- the question is whether the environment lets you learn it.”', body: `
<p><strong>Core claim:</strong> Expert intuition is not all illusion, but it is trustworthy only under specific conditions: first, the environment must be regular enough to be learnable; second, the learner must obtain clear and timely feedback through prolonged practice. Miss either condition and the intuition is unreliable.</p>
<p><strong>The argument:</strong> Intuition is really System 1's rapid recognition of familiar cues. If the environment is inherently random (like the stock market or long-range political forecasting), no amount of experience yields valid intuition; only regularity plus feedback trains recognition to be accurate.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>Key experiment / example:</strong> This chapter is the consensus Kahneman reached after years of debate with Gary Klein of the naturalistic-decision school. Klein documented a veteran fire commander who "inexplicably felt something was wrong, ordered a retreat, and the floor collapsed moments later" -- genuine intuition forged in a regular environment. A chess master reading a position at a glance is the same. The counterexamples are stock pickers and long-range political forecasters: the environment is too random and the feedback too delayed and blurred, so their "intuition" is mostly an illusion of validity.</p>
<p><strong>Takeaway:</strong> Before trusting anyone's intuition (including your own), ask two questions: is this domain regular enough, and did the person get enough timely feedback? Firefighting, anesthesiology, chess -> trustworthy; predicting the stock market or the long-term political scene -> doubtful.</p>
<p class="thought-question">🤔 Reflect: The intuition you feel most confident about -- did it come from a regular enough environment, and did you get clear feedback to sharpen it?</p>` },

  23: { num: 'Chapter 23', title: 'The Outside View', epigraph: '“Don\'t just crunch the details of your own plan -- go look at how similar plans turned out for others.”', body: `
<p><strong>Core claim:</strong> Facing a plan, we habitually take the inside view -- focusing on the specifics of this particular case to make an estimate. But the more accurate approach is the outside view -- treating it as "one of a class of similar cases" and consulting the actual statistics of how such plans turned out. Ignoring the outside view is the very root of the planning fallacy.</p>
<p><strong>The argument:</strong> The inside view is inherently optimistic: it sees only the plan in hand (WYSIATI) and automatically ignores the many ways things could go wrong that cannot be listed in advance. The outside view uses the real success-and-failure rates of a reference class to restore all those neglected risks at once.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>Key experiment / example:</strong> Kahneman's own experience: he led a team writing a textbook, and their inside estimate was about two years. But when he asked the team's curriculum expert to recall the record of similar teams, the expert admitted that comparable projects mostly took seven to ten years and about forty percent were abandoned midway -- and sure enough, they took eight years. That is the planning fallacy. Management scholar Bent Flyvbjerg likewise found that large public works systematically underestimate schedule and cost, and only reference-class forecasting can correct for it.</p>
<p><strong>Takeaway:</strong> When making any budget or schedule, do not just bury yourself in the details; ask "how long did it actually take others doing the same thing, and what was their success rate?" Anchoring your estimate on real outside statistics is the single most effective move against excessive optimism.</p>
<p class="thought-question">🤔 Reflect: Do you have a plan you keep estimating with the inside view? For similar undertakings, how did others actually fare, and how long did it take them?</p>` },

  24: { num: 'Chapter 24', title: 'The Engine of Capitalism', epigraph: '“Optimism is both the engine of progress and a source of failure.”', body: `
<p><strong>Core claim:</strong> Optimism bias is a double-edged sword: it drives entrepreneurship, invention, risk-taking, and economic vitality (the engine of capitalism), but it also leads people to overrate themselves and underrate risk and competition, producing a great deal of foreseeable failure.</p>
<p><strong>The argument:</strong> Optimists tend to credit success to their own ability and treat risk as someone else's problem. Competition neglect makes entrepreneurs see only their own strengths and forget that rivals are trying too; the illusion of control makes people believe luck can be tamed by their own hand.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>Key experiment / example:</strong> Surveys show that most new entrepreneurs know full well that survival rates in their industry are low, yet firmly believe their own venture will succeed -- optimism and competition neglect fused together. Kahneman also analyzed corporate CFOs' short-term stock-market forecasts and found their accuracy approached zero, yet they remained full of confidence. As a remedy, he champions Gary Klein's premortem: before a decision is finalized, have the team imagine that "a year from now this plan has failed disastrously -- write down the reasons for the failure." This gives the doubts normally suppressed by an optimistic mood a legitimate channel to speak.</p>
<p><strong>Takeaway:</strong> We need optimists to take risks, but we also need institutional skepticism to calibrate. Before a major decision, individuals and teams do well to force themselves through a premortem, actively inviting back to the table the failure scenarios that WYSIATI leaves out.</p>
<p class="thought-question">🤔 Reflect: For the plan you are most bullish on right now, if you had to write down "three reasons it will have failed a year from now," what would you write?</p>` }
});
Object.assign(CHAPTER_CONTENT_EN, {
  25: { num: 'Chapter 25', title: 'Bernoulli\'s Errors', epigraph: '“What matters is not how much wealth you have, but how much it has changed relative to your starting point.”', body: `
<p><strong>Core claim:</strong> Traditional expected utility theory, descending from Bernoulli, assumes people evaluate choices by the utility of their final state of wealth. Kahneman identifies this as a foundational error: what people actually care about is gains and losses relative to a reference point, not the absolute level of wealth.</p>
<p><strong>The argument:</strong> Bernoulli used the diminishing marginal utility of wealth to explain risk aversion, but he left out the crucial variable, the reference point. Ignore it, and you cannot explain why people at the very same final wealth can feel radically different.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>Key experiment / example:</strong> Kahneman offers a simple case. Today both Jack and Jill have 5 million. But yesterday Jack had 1 million (a huge gain today) and Jill had 9 million (a brutal loss today). Bernoulli's theory says they are equally happy right now because their wealth is identical, which is plainly absurd: Jack is elated and Jill is despondent. The entire difference lies in the reference point. This gap, which survived nearly three centuries without being taken seriously, is the starting point of prospect theory.</p>
<p><strong>Takeaway:</strong> Recognizing that people measure well-being by change rather than by state explains a great deal: the joy of a raise fades as the reference point resets, and the same wealth leaves one person content and another in pain. When judging your own situation, notice which reference point you are comparing it against.</p>
<p class="thought-question">🤔 Reflect: Your satisfaction or dissatisfaction with your current situation is measured against which reference point? If you swapped that reference point, would the feeling flip entirely?</p>` },

  26: { num: 'Chapter 26', title: 'Prospect Theory', epigraph: '“Reference point, diminishing sensitivity, loss aversion, the three new pillars of decision.”', body: `
<p><strong>Core claim:</strong> Prospect theory describes how people evaluate risky choices through three psychological features: (1) outcomes are judged as gains and losses relative to a reference point, not as absolute states; (2) diminishing sensitivity, so the difference between 100 and 200 feels larger than the difference between 1100 and 1200; and (3) loss aversion, in which the pain of a loss outweighs the pleasure of an equal gain. Together these describe real people more accurately than expected utility.</p>
<p><strong>The argument:</strong> From these three pillars follows the reflection effect: facing gains, people turn conservative, afraid to lose what is in hand; facing losses, people turn to risk-seeking, unwilling to accept a sure loss and willing to gamble for recovery. The value function is therefore S-shaped and steeper on the loss side.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>Key experiment / example:</strong> A classic pair: option A, a sure gain of 900, versus option B, a 90 percent chance to win 1000. Most people take the sure A (conservative when facing gains). Now mirror it into losses: a sure loss of 900 versus a 90 percent chance to lose 1000. Now most people choose to gamble on B (risk-seeking when facing losses), accepting the risk of losing even more in exchange for a chance to lose nothing. The same person shows opposite risk attitudes depending on whether the problem sits on the gain side or the loss side.</p>
<p><strong>Takeaway:</strong> This explains why investors sell winners too soon and cling to losers (the disposition effect), and why people in desperate straits will bet everything. Recognizing that you are standing on the loss side helps you avoid taking foolish, riskier bets just to avoid admitting a loss.</p>
<p class="thought-question">🤔 Reflect: Have you ever made a riskier decision than you originally would have, simply because you could not bear to admit a loss (holding a losing position, averaging down)?</p>` },

  27: { num: 'Chapter 27', title: 'The Endowment Effect', epigraph: '“Once a thing is yours, it becomes more valuable in your mind.”', body: `
<p><strong>Core claim:</strong> The endowment effect is the tendency to value something more highly once you own it: the price you demand to sell it is often far above the price you would have paid to buy it. This is a direct consequence of loss aversion in the context of ownership.</p>
<p><strong>The argument:</strong> Giving up something you own is coded by the brain as a loss, and the pain of a loss outweighs the pleasure of a gain. So a seller (giving up, a loss) and a buyer (acquiring, a gain) place stably different mental valuations on the same object, violating the standard economic assumption that buying and selling prices should coincide.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>Key experiment / example:</strong> The classic mug experiment (Knetsch, Thaler, and colleagues): mugs are randomly handed to half the students, who can then trade with classmates who received none. In theory about half the mugs should change hands, but actual trading volume is far lower, because those who got a mug demand a selling price (around 7 dollars) more than double what buyers are willing to pay (around 3 dollars). The mugs were assigned at random, yet ownership alone roughly doubled the item's value in the owner's mind.</p>
<p><strong>Takeaway:</strong> The endowment effect explains why people struggle to part with old possessions, why free trial periods work so well (once you own it you hate to give it back), and why negotiators on both sides feel they conceded more. Notably, the effect does not apply to goods held for exchange (a merchant's inventory, banknotes); it operates only on things held for use.</p>
<p class="thought-question">🤔 Reflect: Is there something you cannot bring yourself to sell but never actually use? If it were not yours, would you pay your own asking price to buy it?</p>` },

  28: { num: 'Chapter 28', title: 'Bad Events', epigraph: '“Bad is stronger than good.”', body: `
<p><strong>Core claim:</strong> The brain responds to bad faster and more strongly than to good (negativity dominance). Loss aversion is the expression of this general principle in the domain of decisions: threats grab attention more than opportunities, and bad news carries more weight than good news.</p>
<p><strong>The argument:</strong> From an evolutionary view, individuals who reacted faster to threats survived longer, so we are innately more sensitive to negative signals. This also makes the reference point a psychological line of defense: falling below it counts as a loss and provokes intense resistance.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>Key experiment / example:</strong> Research shows that the impact of bad moods, bad feedback, and bad news is larger and more lasting than that of equally strong good events; for a relationship to stay stable, good interactions must far outnumber bad ones. The book cites an analysis of professional golfers (Pope and Schweitzer): pros putting to save par (avoiding dropping a stroke, avoiding a loss) are visibly more focused and more successful than on equal-distance putts for a birdie (gaining a stroke, a gain). Even elite players are driven by loss aversion. Negotiation is hard for the same reason: both sides feel their concessions as losses.</p>
<p><strong>Takeaway:</strong> Understanding that bad is stronger than good explains why negative reviews, bad news, and criticism sting so sharply, and reminds us that in relationships and management we must deliberately supply more positives to offset the weight of a few negatives.</p>
<p class="thought-question">🤔 Reflect: Thinking back on today, did a small bad event or a small good event occupy your mind longer? What does that reveal?</p>` },

  29: { num: 'Chapter 29', title: 'The Fourfold Pattern', epigraph: '“Why does the same person buy both lottery tickets and insurance?”', body: `
<p><strong>Core claim:</strong> Crossing gains versus losses with high versus low probability, prospect theory predicts four distinct risk attitudes, the fourfold pattern. Adding probability weighting (people overweight tiny probabilities and underweight moderate-to-high ones), this table explains many seemingly contradictory behaviors at once.</p>
<p><strong>The argument:</strong> The certainty effect makes people overpay to move from 95 percent to 100 percent; the possibility effect makes people overpay for the sliver of hope in moving from 0 percent to 5 percent. Together they produce sharply different risk preferences across the four quadrants.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>Key experiment / example:</strong> The four quadrants: (1) high-probability gain (95 percent to win) means fear of losing what is nearly won, so people turn conservative and accept unfavorable settlements; (2) high-probability loss (95 percent to lose) means refusal to accept the loss, so people gamble on a last chance; (3) low-probability gain (5 percent for a jackpot) means buying hope, so people buy lottery tickets; (4) low-probability loss (0.1 percent of disaster) means buying peace of mind, so people buy insurance. This is why the same person buys both lottery tickets (betting on a low-probability gain) and insurance (guarding against a low-probability loss): both pay a premium for that overweighted tiny probability. In litigation, plaintiffs with strong cases often accept low settlements for fear of losing everything, while defendants with weak cases may refuse to settle and roll the dice.</p>
<p><strong>Takeaway:</strong> Recognizing which quadrant you are in helps you see through the emotional premium: are you overpaying for a sliver of hope (lottery tickets, lottery-style bets) or for peace of mind (over-insuring)? It also explains why a desperate opponent is so dangerous: sitting in quadrant two, they will bet on anything.</p>
<p class="thought-question">🤔 Reflect: What is the most irrational lottery ticket or insurance policy you ever bought? Seen through the fourfold pattern, which kind of overweighted probability were you really paying for?</p>` },

  30: { num: 'Chapter 30', title: 'Rare Events', epigraph: '“We both overestimate and neglect rare events.”', body: `
<p><strong>Core claim:</strong> People react to rare events in contradictory ways: when an event is vividly described or explicitly labeled, we overestimate it and overreact; but in many situations we ignore it entirely. What governs our reaction is not the probability itself but how vivid it is.</p>
<p><strong>The argument:</strong> Probability weighting systematically overweights tiny probabilities, while denominator neglect draws us to the vivid numerator (the frightening image of what could happen) while blind to the huge denominator (that it almost never happens). The way something is framed can therefore flip our feeling about the very same probability.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>Key experiment / example:</strong> A denominator-neglect experiment: an urn with 1 red and 9 white marbles (10 percent to win) versus an urn with 8 red and 92 white marbles (8 percent to win). Many people actually prefer the second urn with the lower win rate, because the image of 8 red marbles is more tempting and vivid than 1, overriding the actual ratio. Terrorism works the same way: the objective probability is minuscule, but because the imagery is vivid and the emotion intense, people's fear and behavior change far out of proportion to the real risk.</p>
<p><strong>Takeaway:</strong> Rare risks and opportunities (lotteries, plane crashes, rare side effects) sway us mainly through how vividly they are described. To be more rational, translate the vivid image back into a cool ratio, and stay alert to how others use vivid descriptions to manipulate your sense of probability.</p>
<p class="thought-question">🤔 Reflect: Is there a very low-probability risk that, because it was described so vividly, led you to worry or spend out of all proportion?</p>` },

  31: { num: 'Chapter 31', title: 'Risk Policies', epigraph: '“Think like a trader: put every decision into the context of a larger portfolio.”', body: `
<p><strong>Core claim:</strong> Viewing each risky decision one at a time and in isolation (narrow framing) amplifies loss aversion, making you overly conservative and inconsistent overall. Adopting broad framing, treating many decisions as a single portfolio, often leads to more rational, higher-expected-value choices.</p>
<p><strong>The argument:</strong> Looking at a single bet, loss aversion makes people reject many opportunities that are actually favorable; but bundling many independent, positive-expected-value bets together dilutes the overall risk of loss dramatically, so accepting them is the rational move.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>Key experiment / example:</strong> The economist Samuelson once offered a colleague a bet: a coin flip to win 200 or lose 100. The colleague refused a single play but said, "If you let me play it 100 times, I will bet." This is exactly the point: seen once, loss aversion holds you back; but repeated many times, the portfolio averages out the risk, and the positive expected value becomes clearly wise. Kahneman therefore advises: for the same kind of small risk you will face repeatedly, set a risk policy and apply it uniformly, rather than letting emotion sway you afresh each time.</p>
<p><strong>Takeaway:</strong> This applies to investing, insurance, and everyday small bets: do not let loss aversion hijack you one decision at a time; step back and decide within a broad, portfolio-and-long-run frame. Fixing a risk policy in advance (such as "I always accept opportunities of this positive-expected-value kind") frees you from being ruled by the fear of the moment each time.</p>
<p class="thought-question">🤔 Reflect: Have you ever rejected a whole class of opportunities that pay off in the long run (certain investments or insurance choices) simply because any single one, viewed alone, could lose?</p>` }
});
Object.assign(CHAPTER_CONTENT_EN, {
  32: { num: 'Chapter 32', title: 'Keeping Score', epigraph: '“To avoid admitting a loss, we often end up losing much more.”', body: `
<p><strong>Core claim:</strong> We keep score in our minds, sorting life into separate mental accounts. This bookkeeping helps with self-management, but it also breeds the sunk-cost fallacy, the disposition effect, and a host of regret-driven irrationalities. Again and again we make substantively worse choices just to let some account close on a flattering number.</p>
<p><strong>The argument:</strong> Closing a losing account means formally admitting a loss, which brings regret and pain. To dodge that pain, people pour in still more and keep compounding the mistake. Loss aversion and anticipated regret are the engines humming beneath every mental account.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>Key experiment / example:</strong> The sunk-cost fallacy: having paid a lot for a basketball ticket, many people will still brave a blizzard to drive to the game, only because staying home would mean the ticket money was wasted, even though that money is already gone and has nothing to do with whether the drive is worth the risk now. The disposition effect: investors tend to sell winning stocks to book a profitable account while clinging to losing stocks to avoid closing a losing one, even when the rational move is the reverse. Both sacrifice real welfare for a prettier scorecard.</p>
<p><strong>Takeaway:</strong> When you decide, ask only, "From here on, what is best?" Do not let how much you have already sunk hijack you; past costs should never steer future choices. Noticing that you are throwing good money after bad, purely to avoid admitting the loss, is the first step to cutting it.</p>
<p class="thought-question">🤔 Reflect: Have you stayed stuck in something you should have quit, just so the time, money, or emotion already spent would not feel wasted?</p>` },

  33: { num: 'Chapter 33', title: 'Reversals', epigraph: '“Put the options side by side, and your preference flips.”', body: `
<p><strong>Core claim:</strong> The same person, judging the same options, can reverse preferences between single evaluation and joint evaluation. Judged alone, we rely on the emotion and impressions at hand (System 1); judged side by side, System 2 wakes up and compares the dimensions we had been ignoring. This is the preference reversal.</p>
<p><strong>The argument:</strong> Single evaluation leans on an intensity match of "how does this feel," easily dominated by a vivid but secondary feature. Joint evaluation surfaces the neglected but decisive dimension, so the whole standard of judgment shifts. That proves preferences are not stable but constructed by context.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>Key experiment / example:</strong> The dolphins-versus-farmworkers donation study: asked separately, people would give more to "save endangered dolphins" than to "fund skin-cancer screening for farmworkers" (dolphins are cute, the emotion is strong); but placed side by side, most people immediately feel that human lives come first, and the willingness to give reverses. Courts show the same pattern: the damages a jury awards when it sees one case in isolation can be wildly inconsistent with what it awards when several cases are lined up for comparison.</p>
<p><strong>Takeaway:</strong> The lesson for institutional design runs deep: deciding in isolation lets emotion and surface features lead you around, while deliberately comparing options side by side wakes reason and exposes the ignored dimensions. When buying, judging, or setting rewards and penalties, laying the choices side by side tends to yield more consistent and fairer judgments.</p>
<p class="thought-question">🤔 Reflect: Have you ever been smitten by something in isolation, then cooled off the moment you compared it? Did the comparison change what you valued?</p>` },

  34: { num: 'Chapter 34', title: 'Frames and Reality', epigraph: '“Change the wording, and you change the choice.”', body: `
<p><strong>Core claim:</strong> Logically equivalent information, merely framed differently (the wording, or whether it is cast as a gain or a loss), leads people to different and even opposite choices. This proves our preferences do not sit stably in the mind but are constructed on the spot by how the question is posed.</p>
<p><strong>The argument:</strong> System 1 reacts with sharply different emotion to loss wording versus gain wording (loss aversion). So a "survival" frame and a "death" frame, or a "discount" and a "surcharge" frame, activate different feelings and flip the decision, even when both describe the very same thing.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>Key experiment / example:</strong> The classic Asian disease problem: facing an epidemic expected to kill 600 people, when a plan is framed as "saving 200 lives" (gain frame), most people choose that safe option; but restate the identical plan as "400 people will die" (loss frame), and most switch to the gambling option. The choice flips entirely with the wording. Medical decisions are the same: telling patients a surgery has "90% survival" is more acceptable than "10% mortality." The most consequential case is organ donation: in countries where the default is opt-out (you must actively check a box to decline), consent runs near 100%; where the default is opt-in (you must actively check a box to join), consent is far lower. A single default frame decides countless lives.</p>
<p><strong>Takeaway:</strong> Framing punctures the assumption that rational agents hold stable preferences, and it hands enormous power to defaults and wording. This is exactly the logic of nudging: used well, framing and defaults can help people choose better for themselves without removing their freedom, but the same power can also be turned to manipulate you.</p>
<p class="thought-question">🤔 Reflect: When were you last swayed by the wording rather than the substance (a discount pitch, survival rate versus mortality rate)? What was the situation?</p>` },

  35: { num: 'Chapter 35', title: 'Two Selves', epigraph: '“The experiencing self lives through life, but the remembering self runs the decisions.”', body: `
<p><strong>Core claim:</strong> We carry two selves. The experiencing self lives in each present moment and actually feels the pleasure and pain; the remembering self does the recalling and rating afterward, and then makes the decisions. Their verdicts on the same episode often clash, and the power to decide rests with the biased remembering self.</p>
<p><strong>The argument:</strong> The remembering self is no faithful recorder. When it rates an episode, it looks almost only at the most intense moment (the peak) and the ending (the end), while almost entirely ignoring how long the episode lasted (duration neglect). So "remembered pain" and the "total pain actually endured" can diverge badly, following the peak-end rule.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>Key experiment / example:</strong> The classic cold-hand experiment: subjects go through two spells of discomfort. Short version: keep a hand in painfully cold water for 60 seconds. Long version: the same 60 seconds, then 30 more seconds while the water is quietly warmed to be a bit less cold. The long version objectively adds 30 seconds of suffering, yet because "the ending is less painful," when asked "which would you repeat," most people choose the longer, more painful version. For a better ending, the remembering self is willing to make the experiencing self hurt a while longer.</p>
<p><strong>Takeaway:</strong> This exposes an unsettling truth: we decide for the memory, not for the experience. Understanding the peak-end rule and duration neglect explains why we so often choose against our present self, and it forces the question: who should judge the value of an experience?</p>
<p class="thought-question">🤔 Reflect: If a wonderful vacation ends on a sour note, would you file it as "a bad vacation"? What does that say about the remembering self running the show?</p>` },

  36: { num: 'Chapter 36', title: 'Life as a Story', epigraph: '“We care not about the experience itself but about its story, above all its ending.”', body: `
<p><strong>Core claim:</strong> The remembering self makes sense of life by telling a story, and stories care most about the peak and the ending. That gives the ending disproportionate weight in how we rate an experience, and even a whole life, while sheer length barely counts.</p>
<p><strong>The argument:</strong> It follows from the peak-end rule and duration neglect: extra stretches of ordinary time barely move our overall rating of an episode, but changing the ending changes the meaning of the whole story. A life is scored as a story, not summed as an experience.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>Key experiment / example:</strong> The colonoscopy study (Redelmeier and Kahneman): patients whose discomfort was drawn out but ended on a milder note later recalled the whole procedure as "less painful," even though they objectively endured more total pain. Another thought experiment, "Jen's life": subjects rate a life that was "very happy, then ended abruptly" against one that was "equally happy, but with a few extra years that were decent yet bland." Most people rate the second lower. The extra good years actually drag the overall score down (a "less is more" reversal), because they dilute the story's beautiful ending.</p>
<p><strong>Takeaway:</strong> This explains why we care so much about a good death and a satisfying ending, and it warns us that our verdict on a whole life is deeply shaped by narrative bias. Fixate too much on the ending of the story and we may overlook the day-to-day present moments that are the real substance of a life.</p>
<p class="thought-question">🤔 Reflect: When you rate a past episode of your life (a relationship, a job), is your overall impression mostly decided by how it ended?</p>` },

  37: { num: 'Chapter 37', title: 'Experienced Well-Being', epigraph: '“Which kind of happiness do you want to measure? The answers differ sharply.”', body: `
<p><strong>Core claim:</strong> "Happiness" is not one thing. Happiness measured as present experience (the experiencing self) and happiness measured as remembered satisfaction with life (the remembering self) are two different quantities, and the answers often point in opposite directions. Conflating them makes us chase the wrong target.</p>
<p><strong>The argument:</strong> To measure the experiencing self's happiness you must capture moment-by-moment feelings, not a vague retrospective summary. Kahneman built methods to approximate it, and the results show that everyday mood is governed largely by mundane factors that life-satisfaction questionnaires tend to ignore.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>Key experiment / example:</strong> The Day Reconstruction Method (DRM) asks people to relive the previous day segment by segment, re-experiencing each activity and how they felt, so as to estimate how much time the experiencing self spent in positive versus negative states (yielding the U-index, the proportion of time spent in an unpleasant state). Findings include: commuting is among the worst activities of the day for mood, while time with friends and intimacy rank near the top. On income, research finds that emotional day-to-day happiness rises with income but levels off above a certain threshold. Money relieves the pain of poverty but cannot buy proportionally more present pleasure, whereas income keeps affecting "life satisfaction" much longer.</p>
<p><strong>Takeaway:</strong> To lift the experiencing self's happiness, rather than chasing the grand achievements the remembering self prizes, seriously tend the small things that fill your daily hours yet are routinely undervalued: cut the painful commute, add time with the people you love. What are you really trying to improve, the experience or the memory?</p>
<p class="thought-question">🤔 Reflect: Among the daily activities you spend the most time on, which actually leave you unhappy in the moment? Could you adjust them?</p>` },

  38: { num: 'Chapter 38', title: 'Thinking About Life', epigraph: '“Nothing in life is as important as you think it is while you are thinking about it.”', body: `
<p><strong>Core claim:</strong> Our answers about "life satisfaction" are also steered by System 1's heuristics and biases, above all the focusing illusion: the moment we put attention on something, its weight in our appraisal of happiness is vastly exaggerated. The changes we expect to bring lasting happiness usually do far less than we imagined.</p>
<p><strong>The argument:</strong> Rating a life is a hard question, so System 1 substitutes again: it swaps "how has my life gone" for "how does the thing on my mind right now make me feel." Whatever is being focused on (income, climate, a purchase) has its importance overstated, and we also adapt to new circumstances, so the thrill fades as the reference point drifts upward.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>Key experiment / example:</strong> Kahneman's famous line: "Nothing in life is as important as you think it is while you are thinking about it." Research shows people assume that "moving to sunny California would make them happier," yet comparing the overall well-being of Californians and Midwesterners reveals barely any difference, because the weather only seems to matter in the moment you are asked about climate; in daily life people simply do not think about the weather all the time (the focusing illusion). The pleasure of a new marriage, a raise, or a new car likewise mostly returns to baseline as adaptation sets in.</p>
<p><strong>Takeaway:</strong> This is the book's closing note and its most practical dose of clarity, a defense against marketing and against your own anxiety. When you are sure that "if only I get X, life will be happy," remind yourself that this is most likely the focusing illusion. Real happiness hides in how you spend the ordinary stretches of time when you are not thinking about anything in particular.</p>
<p class="thought-question">🤔 Reflect: The thing you are now convinced will make you much happier once you achieve or obtain it, is it a focusing illusion? Once you have it, will you really stay that happy?</p>` }
});

// ---- fold English chapter bodies into CHAPTER_CONTENT as { zh, en } ----
Object.keys(CHAPTER_CONTENT).forEach(function (k) {
  var z = CHAPTER_CONTENT[k] || {}, e = CHAPTER_CONTENT_EN[k] || {};
  CHAPTER_CONTENT[k] = {
    num:      { zh: z.num || '',      en: e.num || z.num || '' },
    title:    { zh: z.title || '',    en: e.title || z.title || '' },
    epigraph: { zh: z.epigraph || '', en: e.epigraph || z.epigraph || '' },
    body:     { zh: z.body || '',     en: e.body || z.body || '' }
  };
});
