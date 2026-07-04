// ==== 菊次郎與佐紀 Kikujiro and Saki · 中英雙語 metadata（回憶錄／文學框架）====
const BOOK = {
  slug: 'kikujiro',
  langs: ['zh', 'en'],
  title: { zh: '菊次郎與佐紀', en: 'Kikujiro and Saki' },
  author: { zh: '北野武（ビートたけし）', en: 'Takeshi Kitano (Beat Takeshi)' },
  theme: {
    'bg-primary': '#1a1613', 'bg-secondary': '#211c17', 'bg-card': '#292219', 'bg-elevated': '#31281d',
    'text-primary': '#ece2d2', 'text-secondary': '#c0b09a', 'text-muted': '#8b7c67',
    'accent': '#cb6046', 'accent-light': '#e0865f', 'accent-glow': 'rgba(203,96,70,0.30)',
    'rose': '#c8737a', 'jade': '#8a9b6e', 'blue': '#6f8399', 'gold': '#cba054',
    'border': 'rgba(203,96,70,0.16)',
    atmosphere: { fall: 16, streak: 22, fallRadius: '50%' },
    dayMode: { 'bg-primary': '#f0e7d8', 'bg-secondary': '#e7dcc8', 'bg-card': '#faf4e8', 'bg-elevated': '#f2e9d8', 'text-primary': '#352c22', 'text-secondary': '#5a4d3d', 'text-muted': '#897a66', 'border': 'rgba(150,95,65,0.24)' }
  },
  cover: {
    seal: '菊',
    subtitle: { zh: '笑淚交織的下町家族', en: 'A Shitamachi Family, in Laughter and Tears' },
    desc: { zh: '油漆匠父親，虎媽母親，<br>和一個逃不開血脈的兒子。', en: 'A house-painter father, a tiger mother,<br>and a son who can’t escape his blood.' }
  },
  musicPrompt: { zh: '走進昭和下町的巷弄裡，<br>是否播放一段背景音樂？', en: 'Step into a Shōwa backstreet —<br>shall we play some music?' },
  // 回憶錄：只把「時代軸」的類型標籤改成回憶錄用語，其餘沿用小說預設
  labels: {
    timelineTypes: {
      history: { zh: '時代背景', en: 'The Era' },
      novel: { zh: '書中回憶', en: 'In the Book' },
      character: { zh: '武的人生', en: 'Kitano’s Life' }
    }
  },
  intro: {
    subtitle: { zh: '在閱讀之前，先認識這個笑淚交織的家', en: 'Before you read, meet this family of laughter and tears' },
    author: {
      name: { zh: '北野武（ビートたけし）', en: 'Takeshi Kitano (Beat Takeshi)' },
      portrait: { zh: '武', en: 'K' },
      years: { zh: '1947 —　生於東京足立區', en: '1947 —　Born in Adachi, Tokyo' },
      bio: { zh: '日本國民級的喜劇演員、電影導演與作家，藝名「ビートたけし」。生於戰後東京足立區的貧困家庭，讀過明治大學工學部後中輟，到淺草拜師學藝，靠漫才（相聲）「Two Beat」爆紅，之後又以導演身分揚名國際。《菊次郎與佐紀》(1998) 是他回憶油漆匠父親菊次郎與教育狂母親佐紀的散文集——粗中有情、笑中帶淚，寫盡一個下町家庭的荒謬與溫柔。', en: 'A national-treasure comedian, film director, and writer in Japan, known by the stage name Beat Takeshi. Born into a poor family in postwar Adachi, Tokyo, he dropped out of Meiji University’s engineering department, apprenticed in the Asakusa entertainment district, and rose to fame through the manzai duo Two Beat before earning international acclaim as a director. Kikujiro and Saki (1998) is his collection of essays recalling his house-painter father, Kikujiro, and his education-obsessed mother, Saki — rough yet tender, funny yet aching, capturing all the absurdity and warmth of one downtown family.' }
    },
    cards: [
      { icon: '🪣', title: { zh: '一個下町家庭', en: 'A Downtown Family' }, text: { zh: '舞台是戰後東京足立區梅島的一間狹小長屋。酗酒又膽小的油漆匠父親菊次郎，靠母親的內職與長兄的薪水撐起的家——貧窮是底色，笑鬧是日常。', en: 'The stage is a cramped tenement in Umejima, Adachi, in postwar Tokyo. A drink-sodden, timid house-painter father, Kikujiro; a household held up by the mother’s piecework and the eldest son’s wages — poverty the backdrop, laughter the everyday.' } },
      { icon: '👩‍🏫', title: { zh: '一位虎媽', en: 'A Tiger Mother' }, text: { zh: '母親佐紀深信「唯有讀書能脫貧」，對孩子的教育近乎執念。她刀子嘴、豆腐心，用最兇的話包著最深的護短——全書最鮮活、最令人又怕又愛的身影。', en: 'The mother, Saki, believed that only education could escape poverty, and was obsessive about her children’s schooling. Sharp-tongued and soft-hearted, she wrapped her fiercest protection in her harshest words — the book’s most vivid, most fearsome, most lovable presence.' } },
      { icon: '🎭', title: { zh: '一個逃不開的兒子', en: 'A Son Who Can’t Escape' }, text: { zh: '敘述者北野武，一輩子想逃離父親的荒唐，卻在成名買了保時捷後，發現自己也繼承了那份滑稽的虛榮——這本書的底層，是「血脈逃不開」的自嘲與領悟。', en: 'The narrator, Takeshi, spent his life trying to escape his father’s absurdity — only to find, after fame and a Porsche, that he had inherited the same comic vanity. Beneath the book runs the self-mocking realization that you cannot escape your blood.' } },
      { icon: '🧳', title: { zh: '閱讀建議', en: 'How to Read' }, text: { zh: '先看「人物譜」認清北野一家，再對照「時代軸」感受戰後下町的氛圍，然後逐章讀那些笑淚交織的回憶。別錯過最後一章——全書的溫柔收束都在那裡。', en: 'Start with the Cast to place the Kitano family, read against the Timeline for the mood of postwar downtown Tokyo, then work through the laughter-and-tears memories chapter by chapter. Don’t miss the final chapter — the book’s tender close lives there.' } }
    ],
    guide: [
      { h: { zh: '從人物關係入手', en: 'Start with the family' }, p: { zh: '先瀏覽「人物譜」，認清菊次郎、佐紀、北野武與兄姊之間的關係，是讀懂這些回憶的第一步。', en: 'Browse the Cast first. Placing Kikujiro, Saki, Takeshi, and his siblings is the first step to understanding these memories.' } },
      { h: { zh: '對照時代軸閱讀', en: 'Read against the timeline' }, p: { zh: '打開「時代軸」，感受戰後昭和的下町與貧困，理解這一家人的笑與淚都長在那個時代的土壤裡。', en: 'Open the Timeline for the feel of postwar Shōwa downtown and its poverty — the family’s laughter and tears grow from that soil.' } },
      { h: { zh: '逐章品味回憶', en: 'Savor the memories chapter by chapter' }, p: { zh: '在「閱讀」模組逐章讀那些笑中帶淚的片段，留意北野武粗中有情的口吻。隨時用「札記」記下你想到的自家往事。', en: 'In the Reading module, take in the funny-yet-aching vignettes chapter by chapter, noting Takeshi’s rough-but-tender voice. Use Notes for the memories of your own family it stirs up.' } },
      { h: { zh: '從主題回望全書', en: 'Look back through the themes' }, p: { zh: '讀完後到「主題」模組，從血脈、貧窮、虎母、懦弱的父親、成熟等角度，系統性地回看這個家。', en: 'When you finish, visit the Themes and look back over this family through bloodline, poverty, the tiger mother, the cowardly father, and maturity.' } },
      { h: { zh: '對照心得與自省', en: 'Compare with the review, then reflect' }, p: { zh: '可讀附錄裡站長自己的心得（署名 翰林書僮），再到「金句」收藏打中你的句子，在「札記」寫下你對自己父母的一句話。', en: 'Read the site owner’s own review in the appendix (signed Kun Han Le), collect the lines that hit home in Quotes, and write one sentence about your own parents in Notes.' } }
    ]
  },
  families: [
    { id: 'parents', label: { zh: '父母', en: 'The Parents' } },
    { id: 'children', label: { zh: '子女手足', en: 'The Children' } },
    { id: 'others', label: { zh: '其他', en: 'Others' } }
  ],
  timelineSubtitle: { zh: '從戰後下町的長屋，到一個國民藝人的回望', en: 'From a postwar tenement to a national star looking back' },
  graph: {
    title: { zh: '— 北 野 一 家 人 物 關 係 圖 —', en: '— The Kitano Family: A Map of Relations —' },
    nodes: [
      { id: 'kikujiro',  label: { zh: '菊次郎', en: 'Kikujiro' },  x: 250, y: 140, tier: 'lead',  color: '#cb6046' },
      { id: 'saki',      label: { zh: '佐紀', en: 'Saki' },        x: 550, y: 140, tier: 'lead',  color: '#c8737a' },
      { id: 'takeshi',   label: { zh: '北野武', en: 'Takeshi' },   x: 400, y: 265, tier: 'lead',  color: '#cba054' },
      { id: 'shigekazu', label: { zh: '重一', en: 'Shigekazu' },   x: 165, y: 285, tier: 'major', color: '#8a9b6e' },
      { id: 'masaru',    label: { zh: '北野大', en: 'Masaru' },    x: 300, y: 380, tier: 'minor', color: '#6f8399' },
      { id: 'sister',    label: { zh: '姊姊', en: 'Elder Sister' },x: 500, y: 378, tier: 'minor', color: '#c8737a' },
      { id: 'wife',      label: { zh: '妻子 幹子', en: 'Mikiko (wife)' }, x: 645, y: 285, tier: 'minor', color: '#cba054' }
    ],
    edges: [
      { from: 'kikujiro', to: 'saki', kind: 'marriage' },
      { from: 'kikujiro', to: 'takeshi', kind: 'family' },
      { from: 'saki', to: 'takeshi', kind: 'family' },
      { from: 'saki', to: 'shigekazu', kind: 'family' },
      { from: 'saki', to: 'masaru', kind: 'family' },
      { from: 'saki', to: 'sister', kind: 'family' },
      { from: 'takeshi', to: 'wife', kind: 'marriage' }
    ]
  },
  footer: {
    quote: { zh: '「當你開始覺得父母『好可憐』，就是邁向成熟的第一步。」', en: '“The day you start to find your parents pitiable is the first step toward growing up.”' },
    tagline: { zh: '菊次郎與佐紀 · 沉浸式閱讀 · 一個下町家庭的笑與淚', en: 'Kikujiro and Saki · Immersive Reading · The laughter and tears of one downtown family' }
  }
};

const P1 = { zh: '卷一 · 父親菊次郎', en: 'Part One · Father, Kikujiro' };
const P2 = { zh: '卷二 · 母親佐紀', en: 'Part Two · Mother, Saki' };
const P3 = { zh: '卷三 · 武與成長', en: 'Part Three · Takeshi, Growing Up' };
const PA = { zh: '附錄 · 讀者心得', en: 'Appendix · Reader’s Review' };

const CHAPTERS = [
  { id: 1,  group: P1, title: { zh: '油漆匠的背影', en: 'The Painter’s Back' }, pages: '',
    reflectQ: { zh: '一個「沒出息」的父親，在家裡是什麼樣的存在？你會怎麼看待一個被生活壓得抬不起頭的男人？', en: 'What is a “good-for-nothing” father’s place in a home? How do you regard a man bent low by hard living?' } },
  { id: 2,  group: P1, title: { zh: '酒後的雷聲', en: 'Thunder After the Drink' }, pages: '',
    reflectQ: { zh: '清醒時懦弱、酒後卻粗暴——你如何理解這種被酒精放大的軟弱？', en: 'Timid when sober, violent when drunk — how do you make sense of a weakness that alcohol magnifies?' } },
  { id: 3,  group: P1, title: { zh: '那只金印戒指', en: 'The Gold Signet Ring' }, pages: '',
    reflectQ: { zh: '菊次郎那麼渴望被看重，卻總用最滑稽的方式。你身邊有沒有這種「用力想被肯定」的人？', en: 'Kikujiro so craved to be valued, yet always in the most comic way. Do you know someone who tries that hard to be recognized?' } },
  { id: 4,  group: P1, title: { zh: '大哥婚禮上的醜態', en: 'A Scene at the Wedding' }, pages: '',
    reflectQ: { zh: '在最該體面的場合出盡洋相——這是丟人，還是一種笨拙的、想被看見的渴望？', en: 'Making a fool of himself at the most respectable of occasions — is that shame, or a clumsy longing to be seen?' } },
  { id: 5,  group: P1, title: { zh: '一鍋燉了姊姊的雞', en: 'The Chicken in the Pot' }, pages: '',
    reflectQ: { zh: '貧窮年代的荒謬往往笑中帶淚。你家有沒有這種「當時氣哭、後來笑談」的往事？', en: 'The absurdities of poor times are often funny and sad at once. Does your family have a story that once made you cry and now makes you laugh?' } },
  { id: 6,  group: P1, title: { zh: '懦弱裡的父親', en: 'The Father Behind the Cowardice' }, pages: '',
    reflectQ: { zh: '當你不再只看到父親的荒唐，而看見他的可憐與軟弱，那一刻你對他的感覺變了嗎？', en: 'When you stop seeing only a father’s foolishness and begin to see his pitiable weakness, does your feeling for him change?' } },
  { id: 7,  group: P2, title: { zh: '埋在後院的手套', en: 'The Glove Buried in the Yard' }, pages: '',
    reflectQ: { zh: '母親用「唸書啊，笨蛋」的方式表達期待。你的父母，是用什麼方式表達他們的愛與焦慮？', en: 'The mother expressed her hopes with “Study, you idiot.” How did your parents express their love — and their anxiety?' } },
  { id: 8,  group: P2, title: { zh: '「笨會傳染」', en: 'Stupid Is Contagious' }, pages: '',
    reflectQ: { zh: '佐紀相信教育是脫貧的唯一路。這份近乎執念的期待，對孩子是祝福還是壓力？還是兩者都是？', en: 'Saki believed education was the only way out of poverty. Is such near-obsessive hope a blessing for a child, a burden — or both?' } },
  { id: 9,  group: P2, title: { zh: '刀子嘴，豆腐心', en: 'A Sharp Tongue, a Tender Heart' }, pages: '',
    reflectQ: { zh: '偷偷替兒子付房租、卻絕口不提——這種「不讓你知道的愛」，你在自己父母身上見過嗎？', en: 'Secretly paying a son’s rent and never mentioning it — have you seen this kind of love-you’re-not-meant-to-know in your own parents?' } },
  { id: 10, group: P2, title: { zh: '判他死刑吧', en: 'Sentence Him to Death' }, pages: '',
    reflectQ: { zh: '用最狠的話替兒子擋輿論——你能讀懂這句「判他死刑吧」底下的護短之愛嗎？', en: 'Shielding her son with the harshest possible words — can you read the fierce protective love beneath “Sentence him to death”?' } },
  { id: 11, group: P2, title: { zh: '別讓他太好過', en: 'Don’t Let Him Off So Easy' }, pages: '',
    reflectQ: { zh: '母親勸媳婦別離婚，理由竟是「別讓他太好過」。這裡面有世故、護短，還是一種老派的家庭觀？', en: 'The mother urged her daughter-in-law not to divorce — because “don’t let him off so easy.” Is that worldliness, protectiveness, or an old-fashioned faith in family?' } },
  { id: 12, group: P3, title: { zh: '梅島的長屋', en: 'The Tenement in Umejima' }, pages: '',
    reflectQ: { zh: '一個人「從哪裡來」，會怎麼跟著他一輩子？梅島的長屋在北野武身上留下了什麼？', en: 'How does where you come from follow you for life? What did the Umejima tenement leave in Takeshi?' } },
  { id: 13, group: P3, title: { zh: '跟在保時捷後面的計程車', en: 'The Taxi Behind the Porsche' }, pages: '',
    reflectQ: { zh: '他笑自己「果然繼承了菊次郎的血脈」。你有沒有在某個瞬間，發現自己活成了父母的樣子？', en: 'He laughed that he “really did inherit Kikujiro’s blood.” Have you ever caught yourself, in a flash, becoming your parent?' } },
  { id: 14, group: P3, title: { zh: '覺得父母「好可憐」的那一刻', en: 'The Moment They Seemed Pitiable' }, pages: '',
    reflectQ: { zh: '「覺得父母好可憐，是邁向成熟的第一步。」你有沒有過那樣的一刻？那之後，你變了嗎？', en: '“Finding your parents pitiable is the first step to growing up.” Have you had such a moment? Did it change you?' } },
  { id: 15, group: PA, title: { zh: '逃不開的血脈，與那只行囊', en: 'The Bloodline You Can’t Escape, and That Baggage' }, pages: '',
    reflectQ: { zh: '用站長的話問自己：父母交給你的那只「行囊」裡，哪些是救命的口糧，哪些是你想丟掉的？', en: 'Ask yourself, in the reviewer’s words: in the “baggage” your parents handed you, which is life-saving ration, and which do you want to throw away?' } }
];

const CHARACTERS = [
  { id: 'kikujiro', name: { zh: '菊次郎', en: 'Kikujiro' }, family: 'parents', role: { zh: '父親', en: 'The Father' }, icon: '🪣', color: '#cb6046',
    desc: { zh: '北野武的父親，一名油漆匠。清醒時膽小懦弱、幾乎沒有存在感，一喝了酒卻變得粗俗、施暴；極度渴望被人看重，卻總用最滑稽的方式。', en: 'Takeshi’s father, a house-painter. Timid and near-invisible when sober, he turned coarse and violent once he drank; he craved to be valued, yet always in the most comic way.' },
    analysis: { zh: '菊次郎是全書最矛盾、也最令人心酸的角色。他在妻子眼中是「甲斐性なし」（沒出息），在孩子面前是又怕又無奈的存在。但北野武沒有把他寫成單純的壞父親——透過金戒指、婚禮醜態這些哭笑不得的片段，我們看見一個被貧窮與自卑壓垮、只會用酒精和逞強來討愛的可憐男人。全書的溫柔，正在於作者最終學會用「好可憐」的眼光回望他。', en: 'Kikujiro is the book’s most contradictory and most poignant figure. To his wife he is a “good-for-nothing”; to his children, a source of fear and helpless embarrassment. Yet Takeshi does not write him as simply a bad father — through the gold ring and the wedding scene, those funny-and-painful vignettes, we glimpse a pitiable man crushed by poverty and shame, who could only beg for love through alcohol and bluster. The book’s tenderness lies precisely in the author finally learning to look back on him as “pitiable.”' },
    tags: [ { zh: '油漆匠', en: 'House-painter' }, { zh: '酗酒', en: 'Drinker' }, { zh: '懦弱', en: 'Timid' }, { zh: '渴望認可', en: 'Craves recognition' } ],
    related: ['saki', 'takeshi'] },
  { id: 'saki', name: { zh: '佐紀（さき）', en: 'Saki' }, family: 'parents', role: { zh: '母親', en: 'The Mother' }, icon: '👩‍🏫', color: '#c8737a',
    desc: { zh: '北野武的母親，全書最鮮活的靈魂人物。標準的「虎媽」，深信唯有教育能脫貧，對孩子讀書極嚴；刀子嘴、豆腐心，把最深的護短包在最兇的話裡。', en: 'Takeshi’s mother, the book’s most vivid soul. A textbook tiger mother, she believed only education could escape poverty and was fierce about her children’s schooling; sharp-tongued and soft-hearted, she wrapped her deepest protection in her harshest words.' },
    analysis: { zh: '佐紀撐起了這個貧困的家，也撐起了整本書。她把棒球手套換成參考書、對兒子的朋友說「笨會傳染」、卻又偷偷替搬出去的兒子付房租；兒子出事時她喊「判他死刑吧」替他擋輿論，兒子婚姻危機時她勸媳婦「別讓他太好過」。她從不把愛說出口，愛卻藏在每一句罵裡。她是那個時代千萬個「用嚴厲愛孩子」的母親的縮影。', en: 'Saki held up this poor household — and holds up the whole book. She swapped a baseball glove for study guides, told her son’s friends that “stupidity is contagious,” yet secretly paid the rent of the son who had moved out; when he got into trouble she cried “Sentence him to death” to shield him from the public, and in his marital crisis urged her daughter-in-law “don’t let him off so easy.” She never spoke her love aloud — it hid inside every scolding. She is the portrait of countless mothers of that era who loved their children through severity.' },
    tags: [ { zh: '虎媽', en: 'Tiger mother' }, { zh: '教育至上', en: 'Education first' }, { zh: '刀子嘴豆腐心', en: 'Harsh words, soft heart' }, { zh: '護短', en: 'Fiercely protective' } ],
    related: ['kikujiro', 'takeshi', 'shigekazu'] },
  { id: 'takeshi', name: { zh: '北野武', en: 'Takeshi Kitano' }, family: 'children', role: { zh: '敘述者 · 家中最小的兒子', en: 'The Narrator · Youngest Son' }, icon: '🎭', color: '#cba054',
    desc: { zh: '本書的敘述者，家中最小的孩子，後來成為日本國民級藝人「ビートたけし」。童年愛棒球卻被母親禁止，一輩子想逃離父親的荒唐，最終卻在自己身上認出那條血脈。', en: 'The narrator and youngest child, who became the national star Beat Takeshi. He loved baseball as a boy but was forbidden by his mother; he spent his life trying to escape his father’s absurdity, only to recognize that same blood in himself.' },
    analysis: { zh: '北野武用自嘲的口吻寫自己：成名後買了保時捷，卻叫朋友幫他開、自己坐計程車跟在後面欣賞——那份滑稽的虛榮，正是菊次郎的翻版。他一邊笑著揭穿家人的糗事，一邊在字裡行間流露對父母的體諒。全書真正的主角，其實是「一個逃不開血脈、最終學會理解父母」的兒子。', en: 'Takeshi writes himself with self-mockery: after fame he bought a Porsche, then had a friend drive it while he followed in a taxi to admire his own car — a comic vanity that is Kikujiro all over again. Even as he laughingly exposes his family’s embarrassments, compassion for his parents seeps between the lines. The true protagonist of the book is a son who cannot escape his blood and, in the end, learns to understand his parents.' },
    tags: [ { zh: '敘述者', en: 'The narrator' }, { zh: '自嘲', en: 'Self-mocking' }, { zh: '逃不開血脈', en: 'Can’t escape his blood' } ],
    related: ['kikujiro', 'saki', 'wife'] },
  { id: 'shigekazu', name: { zh: '重一', en: 'Shigekazu' }, family: 'children', role: { zh: '長兄', en: 'The Eldest Son' }, icon: '💼', color: '#8a9b6e',
    desc: { zh: '北野家的長子，一名上班族。在父親不成器、家境貧困的年代，是他的薪水與母親的內職一起撐起了整個家。', en: 'The eldest son of the Kitano family, an office worker. In an era of a feckless father and poverty, it was his wages, together with the mother’s piecework, that held the whole household together.' },
    analysis: { zh: '重一是那種在回憶錄裡話不多、卻是家庭真正支柱的長子。父親靠不住，長兄便早早扛起責任，用一份安穩的薪水替弟妹撐出讀書、長大的空間。他的存在，是這個吵鬧貧窮的家能夠不散的關鍵背景。', en: 'Shigekazu is the kind of eldest son who says little in a memoir yet is the family’s real pillar. With the father unreliable, the eldest brother shouldered responsibility early, his steady wages buying the younger siblings room to study and grow up. His presence is the quiet reason this noisy, poor family did not fall apart.' },
    tags: [ { zh: '長子', en: 'Eldest son' }, { zh: '養家', en: 'Breadwinner' }, { zh: '家庭支柱', en: 'The family’s pillar' } ],
    related: ['saki', 'takeshi'] },
  { id: 'masaru', name: { zh: '北野大', en: 'Masaru' }, family: 'children', role: { zh: '兄長', en: 'An Older Brother' }, icon: '📚', color: '#6f8399',
    desc: { zh: '北野武的兄長，一家人裡走上讀書路的孩子，日後成為學者。他與弟弟武的性情大不相同，是母親「教育脫貧」信念下的另一種結果。', en: 'One of Takeshi’s older brothers, the child in the family who took the scholarly path and later became an academic. Very different in temperament from his younger brother, he is another outcome of the mother’s faith in education as an escape from poverty.' },
    analysis: { zh: '如果說北野武是母親教育理想裡「叛逃」的那一個，北野大就是「成全」的那一個——他順著母親的期待走進學問，成了體面的讀書人。兄弟倆一個進了學界、一個走上舞台，恰好映照出同一位虎母、同一個貧困起點，能長出多麼不同的人生。', en: 'If Takeshi was the “defector” from his mother’s educational ideal, Masaru was the one who fulfilled it — following her hopes into scholarship and becoming a respectable man of learning. One brother entered academia, the other the stage: together they mirror how differently two lives can grow from the same tiger mother and the same poor beginning.' },
    tags: [ { zh: '讀書路', en: 'The scholar’s path' }, { zh: '學者', en: 'Academic' }, { zh: '對照', en: 'The contrast' } ],
    related: ['saki', 'takeshi'] },
  { id: 'sister', name: { zh: '姊姊', en: 'Elder Sister' }, family: 'children', role: { zh: '姊姊', en: 'The Sister' }, icon: '🐔', color: '#c8737a',
    desc: { zh: '北野家的姊姊。書中最令人難忘的片段之一，是她養的一隻寵物雞，某天被喝醉的父親抓去燉成了一鍋菜——荒謬又心酸的貧窮記憶。', en: 'The sister of the Kitano family. One of the book’s most unforgettable moments is her pet chicken, which the drunken father one day cooked into a pot of stew — an absurd and aching memory of poverty.' },
    analysis: { zh: '姊姊在書裡著墨不多，卻因為「那隻雞」成了貧窮年代的一個鮮明註腳。一隻本該是寵物的雞、一個喝醉的父親、一鍋菜——這種笑不出來卻又只能笑的場景，正是北野武筆下下町生活的典型質地。', en: 'The sister gets little space in the book, yet through “that chicken” she becomes a vivid footnote to a time of poverty. A chicken that was meant to be a pet, a drunken father, a pot of stew — this scene you can’t quite laugh at and yet can only laugh at is the very texture of downtown life in Takeshi’s telling.' },
    tags: [ { zh: '那隻雞', en: 'The chicken' }, { zh: '貧窮記憶', en: 'A poverty memory' } ],
    related: ['kikujiro', 'saki'] },
  { id: 'wife', name: { zh: '幹子', en: 'Mikiko' }, family: 'others', role: { zh: '北野武的妻子', en: 'Takeshi’s Wife' }, icon: '💍', color: '#cba054',
    desc: { zh: '北野武的妻子。在書中他鬧出桃色風波、婚姻亮紅燈時登場——而出面「調停」的，竟是那位不肯讓兒子太好過的母親佐紀。', en: 'Takeshi’s wife. She appears in the book when his affair puts the marriage in crisis — and the one who steps in to “mediate” turns out to be Saki, the mother who refused to let her son off so easy.' },
    analysis: { zh: '幹子的戲份不多，卻牽出全書最有味道的一段婆媳互動：面對兒子的桃色問題，母親佐紀打電話勸媳婦別離婚，理由是「別讓他太好過」。透過這位妻子，我們看見佐紀的護短之愛一路延伸到了下一代的家庭裡。', en: 'Mikiko has a small part, yet she draws out one of the book’s tastiest mother-in-law moments: faced with her son’s affair, Saki phones the daughter-in-law to urge her not to divorce, on the grounds of “don’t let him off so easy.” Through this wife we watch Saki’s fierce protective love reach all the way into the next generation’s household.' },
    tags: [ { zh: '婚姻風波', en: 'Marital crisis' }, { zh: '婆媳', en: 'Mother-in-law and wife' } ],
    related: ['takeshi', 'saki'] }
];

const TIMELINE_DATA = [
  { year: { zh: '1947', en: '1947' }, event: { zh: '北野武生於東京足立區', en: 'Takeshi Kitano is born in Adachi, Tokyo' }, novel: { zh: '本書的敘述者、家中最小的孩子登場——日後那個把全家寫進書裡的兒子。', en: 'The book’s narrator and youngest child arrives — the son who will one day write the whole family into a book.' }, type: 'character' },
  { year: { zh: '戰後', en: 'Postwar' }, event: { zh: '足立區梅島的長屋歲月', en: 'Tenement years in Umejima, Adachi' }, novel: { zh: '一家人擠在狹小的木造長屋裡，貧窮是底色。戰後下町的氣味，是全書所有笑與淚的舞台。', en: 'The family crowds into a cramped wooden tenement, poverty the backdrop. The smell of postwar downtown Tokyo is the stage for all the book’s laughter and tears.' }, type: 'history' },
  { year: { zh: '家計', en: 'The Household' }, event: { zh: '油漆匠父親與內職母親', en: 'A painter father and a piecework mother' }, novel: { zh: '菊次郎的油漆手藝時有時無，家計主要靠母親的內職與長兄重一的薪水撐著。', en: 'Kikujiro’s painting work comes and goes; the household runs mainly on the mother’s piecework and the eldest son Shigekazu’s wages.' }, type: 'novel' },
  { year: { zh: '教育熱', en: 'Education Fever' }, event: { zh: '手套變參考書', en: 'A glove becomes a stack of study guides' }, novel: { zh: '母親佐紀把兒子埋在後院的棒球手套換成參考書，附上「唸書啊，笨蛋」的字條——這個家，讀書永遠優先於玩樂。', en: 'Saki swaps the baseball glove her son buried in the yard for study guides, with a note: “Study, you idiot.” In this house, books always came before play.' }, type: 'novel' },
  { year: { zh: '少年武', en: 'Young Takeshi' }, event: { zh: '被禁止的棒球', en: 'The forbidden baseball' }, novel: { zh: '愛棒球的少年，在母親「教育脫貧」的執念下，只能把球和手套讓位給參考書。', en: 'A boy who loved baseball had to yield ball and glove to study guides, under his mother’s obsession with education as escape.' }, type: 'novel' },
  { year: { zh: '青年', en: 'Youth' }, event: { zh: '明治大學中輟', en: 'Dropping out of Meiji University' }, novel: { zh: '北野武考進明治大學工學部，卻中途離開，走上一條母親未曾預想的路。', en: 'Takeshi entered the engineering department of Meiji University but left partway through, onto a path his mother never imagined.' }, type: 'character' },
  { year: { zh: '淺草修業', en: 'Asakusa' }, event: { zh: '走上漫才之路', en: 'The road to manzai comedy' }, novel: { zh: '他到淺草的娛樂圈拜師學藝，磨出一身本事，與搭檔組成漫才組合「Two Beat」。', en: 'He apprenticed in the Asakusa entertainment world, honed his craft, and formed the manzai duo Two Beat with a partner.' }, type: 'character' },
  { year: { zh: '1980年代', en: 'The 1980s' }, event: { zh: 'ビートたけし成為國民藝人', en: 'Beat Takeshi becomes a national star' }, novel: { zh: '那個被禁止打棒球的窮孩子，成了紅遍日本的喜劇天王——母親的嚴厲，終究長成了另一種果實。', en: 'The poor boy once forbidden to play baseball becomes a comedy superstar across Japan — his mother’s severity bearing, in the end, a different kind of fruit.' }, type: 'character' },
  { year: { zh: '1986', en: '1986' }, event: { zh: '風波、被捕與「判他死刑吧」', en: 'Scandal, arrest, and “Sentence him to death”' }, novel: { zh: '北野武捲入事件、遭到逮捕，輿論譁然；母親佐紀對外喊出「判他死刑吧」，用最狠的話替兒子擋下眾怒。', en: 'Takeshi is caught up in an incident and arrested amid public uproar; his mother Saki cries out “Sentence him to death,” shielding her son from the public fury with the harshest words she could find.' }, type: 'history' },
  { year: { zh: '成名之後', en: 'After Fame' }, event: { zh: '保時捷與跟在後面的計程車', en: 'A Porsche and the taxi behind it' }, novel: { zh: '成了有錢名人的北野武買下保時捷，卻叫朋友幫他開、自己坐計程車跟在後面欣賞——他認出，自己終究繼承了菊次郎的血脈。', en: 'Now a wealthy celebrity, Takeshi buys a Porsche — then has a friend drive it while he follows in a taxi to admire it. He recognizes that he has, after all, inherited Kikujiro’s blood.' }, type: 'novel' },
  { year: { zh: '1998', en: '1998' }, event: { zh: '《菊次郎與佐紀》出版', en: 'Kikujiro and Saki is published' }, novel: { zh: '北野武把父母與那個下町家庭寫成散文集，笑淚交織——你正在讀的這本書。', en: 'Takeshi turns his parents and that downtown family into a collection of essays, laughter woven with tears — the very book you are reading.' }, type: 'history' }
];

const THEMES = [
  { id: 'bloodline', icon: '🩸', title: { zh: '逃不開的血脈', en: 'The Bloodline You Can’t Escape' }, subtitle: { zh: '想逃離父母，卻活成了他們', en: 'You flee your parents, and become them' }, color: '#cb6046',
    intro: { zh: '全書最深的一條伏線：我們從出身就深受父母影響，欲逃卻血脈相連。', en: 'The book’s deepest thread: from birth we are shaped by our parents, and try to flee a blood we cannot cut.' },
    body: { zh: '<p>北野武一輩子想擺脫父親菊次郎的荒唐——那個酗酒、逞強、渴望被看重的滑稽男人。可是當他成了有錢的名人，買下保時捷卻叫朋友幫他開、自己坐計程車跟在後面欣賞時，他終於認了：這份可笑的虛榮，分明就是菊次郎。</p><p>這正是全書最令人莞爾也最無奈的洞察：父母的樣子，早就順著血脈住進了我們身體裡。你越想逃，越在某個瞬間撞見他們的影子。</p><div class="theme-quote">「我果然還是繼承了菊次郎的血脈。」</div>', en: '<p>Takeshi spent his life trying to shed his father Kikujiro’s absurdity — that drinking, blustering, recognition-hungry, comic man. Yet when he became a wealthy celebrity and bought a Porsche, only to have a friend drive it while he followed in a taxi to admire it, he finally admitted: this ridiculous vanity was Kikujiro through and through.</p><p>This is the book’s most rueful and knowing insight: our parents’ likeness moved into our bodies along the bloodline long ago. The harder you flee, the more surely, in some sudden moment, you run into their shadow.</p><div class="theme-quote">“I really did inherit Kikujiro’s blood after all.”</div>' },
    chapters: ['1', '13', '14'] },
  { id: 'poverty', icon: '🍚', title: { zh: '貧窮裡的笑聲', en: 'Laughter in Poverty' }, subtitle: { zh: '越是艱難的日子，越要笑著過', en: 'The harder the days, the more you laugh through them' }, color: '#cba054',
    intro: { zh: '這是一本寫貧窮的書，卻幾乎每一頁都在笑。', en: 'This is a book about poverty, yet it laughs on nearly every page.' },
    body: { zh: '<p>金印戒指被郵差拿去蓋章、姊姊的寵物雞被醉爸燉成一鍋菜、婚禮上脫衣跳舞的父親——這些片段當下也許讓人氣哭，回頭卻全成了笑談。北野武寫下町的窮，不靠悲情，而靠一種「笑中帶淚」的庶民韌性。</p><p>貧窮是這個家的底色，笑鬧卻是它的日常。正因為日子難，那些荒謬的小事才顯得格外珍貴——笑，是這一家人對抗艱難最本能的方式。</p><div class="theme-quote">「當時氣得要哭，如今卻成了最好笑的回憶。」</div>', en: '<p>A gold signet ring used by the postman as a stamp; the sister’s pet chicken stewed into a pot by a drunken father; a father stripping to dance at a wedding — moments that may have made you cry with anger at the time, yet all became stories to laugh over later. Takeshi writes downtown poverty not through pathos but through a common-folk resilience that laughs with tears in its eyes.</p><p>Poverty is the family’s backdrop; laughter is its everyday. Precisely because the days were hard, those absurd little episodes feel all the more precious — laughter was the family’s most instinctive way of fighting the hardship.</p><div class="theme-quote">“Once it made us want to cry; now it’s the funniest memory we have.”</div>' },
    chapters: ['3', '4', '5', '12'] },
  { id: 'tigermom', icon: '👩‍🏫', title: { zh: '虎母的愛', en: 'A Tiger Mother’s Love' }, subtitle: { zh: '最兇的話，包著最深的心', en: 'The harshest words wrap the deepest heart' }, color: '#c8737a',
    intro: { zh: '佐紀相信只有讀書能脫貧，於是把愛全藏進了嚴厲裡。', en: 'Saki believed only education could escape poverty, so she hid all her love inside severity.' },
    body: { zh: '<p>她把兒子的棒球手套換成參考書、對他的朋友說「笨會傳染」、逼他去補習——嚴厲得近乎不近人情。可就是這位母親，會偷偷替搬出去的兒子付房租、在兒子出事時喊「判他死刑吧」替他擋輿論。她從不把愛說出口，愛卻藏在每一句罵裡。</p><p>這是那個時代千萬個母親的縮影：她們沒有能力給孩子富裕，只能拚了命把「讀書」塞進孩子手裡，當作唯一能給的行囊。刀子嘴，豆腐心——罵得越兇，往往疼得越深。</p><div class="theme-quote">「唸書啊，笨蛋！」</div>', en: '<p>She swapped her son’s baseball glove for study guides, told his friends that “stupidity is contagious,” and pushed him into cram school — severe almost to the point of coldness. Yet it was this same mother who secretly paid the rent of the son who had moved out, and who cried “Sentence him to death” to shield him when he got into trouble. She never spoke her love aloud — it hid inside every scolding.</p><p>She is the portrait of countless mothers of that era: unable to give their children wealth, they crammed “study” into their children’s hands with all their might, as the one piece of baggage they had to give. A sharp tongue over a tender heart — the fiercer the scolding, often, the deeper the ache.</p><div class="theme-quote">“Study, you idiot!”</div>' },
    chapters: ['7', '8', '9', '10'] },
  { id: 'father', icon: '🍶', title: { zh: '懦弱的父親', en: 'The Cowardly Father' }, subtitle: { zh: '在酒瓶背後，藏著一個可憐的人', en: 'Behind the bottle hides a pitiable man' }, color: '#6f8399',
    intro: { zh: '菊次郎是個失敗的父親，卻是個令人不忍苛責的人。', en: 'Kikujiro is a failed father, yet a man too pitiable to condemn.' },
    body: { zh: '<p>他清醒時膽小得幾乎沒有存在感，一喝酒卻變得粗暴；他買金戒指、在婚禮上出洋相，笨拙地想成為被看見的人。這樣一個父親，怎麼看都不及格。</p><p>但北野武沒有把他寫成單純的壞人。透過那些哭笑不得的片段，我們看見的是一個被貧窮與自卑壓垮、只會用酒精和逞強來討愛的男人。全書的溫柔，正在於作者最終學會用「好可憐」的眼光，而不是「好可恨」的眼光，去回望他。</p><div class="theme-quote">「他不是壞，他只是又窮又怕，還來不及學會怎麼當爸爸。」</div>', en: '<p>Sober, he was so timid as to be nearly invisible; drinking, he turned violent; he bought a gold ring and made a fool of himself at a wedding, clumsily trying to become someone seen. By any measure, such a father falls short.</p><p>But Takeshi does not write him as simply a bad man. Through those funny-and-painful vignettes, what we see is a man crushed by poverty and shame, who could only beg for love through alcohol and bluster. The book’s tenderness lies precisely in the author finally learning to look back on him with pity rather than hatred.</p><div class="theme-quote">“He wasn’t bad — only poor and afraid, and never given time to learn how to be a father.”</div>' },
    chapters: ['1', '2', '6'] },
  { id: 'maturity', icon: '🌱', title: { zh: '成熟＝懂得父母的可憐', en: 'Maturity Is Seeing Your Parents’ Pain' }, subtitle: { zh: '能體諒父母，精神才真正獨立', en: 'You are truly independent only when you can pity them' }, color: '#8a9b6e',
    intro: { zh: '全書的思想核心，也是最溫柔的一句話。', en: 'The heart of the book, and its most tender line.' },
    body: { zh: '<p>北野武說：一個人是不是長大成熟，看他怎麼看待父母——當你面對他們，開始覺得他們「好可憐」「很不容易」時，就是邁向成熟的第一步。這句話，把整本看似雜記的回憶，收束成一則關於長大的寓言。</p><p>父母的影響像一只沉重的行囊，裡面既有救命的口糧，也有得用一生去丟棄的垃圾。我們焦急地想逃離，卻始終在他們的庇護裡；直到有一天能體諒他們的苦，精神上的獨立才真正到來。</p><div class="theme-quote">「當你開始覺得父母『好可憐』，就是邁向成熟的第一步。」</div>', en: '<p>Takeshi says: whether a person has grown up is measured by how they regard their parents — the day you face them and begin to find them “pitiable,” to feel how hard it was for them, is the first step toward maturity. This line gathers a book of seemingly scattered memories into a single parable about growing up.</p><p>A parent’s influence is like heavy baggage, holding both life-saving rations and garbage you will spend a lifetime discarding. We flee it anxiously, yet remain always under its shelter; only when we can, at last, feel their hardship does true independence of spirit arrive.</p><div class="theme-quote">“The day you start to find your parents pitiable is the first step toward growing up.”</div>' },
    chapters: ['6', '14'] },
  { id: 'kitano', icon: '🎭', title: { zh: '北野武的荒謬與溫柔', en: 'Kitano’s Absurd Tenderness' }, subtitle: { zh: '骨子裡的悲觀，才貼近生活的荒謬', en: 'A pessimist at heart, closest to life’s absurdity' }, color: '#cba054',
    intro: { zh: '笑鬧的表面下，是一個悲觀者對生活的溫柔逼視。', en: 'Beneath the comedy lies a pessimist’s tender, unflinching gaze at life.' },
    body: { zh: '<p>北野武是個坦率又矛盾的人：他用最促狹的口吻揭穿家人的糗事，卻在字裡行間漏出對父母的體諒。他骨子裡其實悲觀，也正因為悲觀，反而更貼近生活本身的荒謬——那種笑著笑著就想哭、哭著哭著又忍不住笑的質地。</p><p>這本看似只是「生活瑣事」的書，之所以一點都不枯燥，正是因為說故事的人自己就是個有趣、坦率、又矛盾的人。他把一整個下町家庭的笑與淚，寫成了一則關於「我們如何被父母造就、又如何學會理解他們」的溫柔寓言。</p><div class="theme-quote">「正因為看透了生活的荒謬，才更要笑著把它過完。」</div>', en: '<p>Takeshi is a man both frank and contradictory: he exposes his family’s embarrassments in the most mischievous voice, yet lets compassion for his parents leak between the lines. He is, at bottom, a pessimist — and it is precisely his pessimism that brings him closest to life’s own absurdity, that texture of laughing until you want to cry and crying until you can’t help laughing.</p><p>This book of seeming “everyday trifles” is never dull, precisely because its storyteller is himself an interesting, frank, contradictory man. He turns one downtown family’s laughter and tears into a tender parable about how we are made by our parents — and how we learn, at last, to understand them.</p><div class="theme-quote">“Because he saw through life’s absurdity, all the more he chose to laugh his way through it.”</div>' },
    chapters: ['13', '14'] }
];

const QUOTES = [
  { text: { zh: '當你開始覺得父母「好可憐」，就是邁向成熟的第一步。', en: 'The day you start to find your parents pitiable is the first step toward growing up.' }, source: { zh: '第十四章 · 成熟的定義（北野武）', en: 'Chapter 14 · On Maturity (Takeshi)' },
    analysis: { zh: '全書的題眼。成熟不是不再需要父母，而是終於能站在他們的處境裡，看見他們的不容易與可憐——那一刻，我們才真正長大。', en: 'The eye of the whole book. Maturity is not ceasing to need your parents, but finally being able to stand in their circumstances and see how hard it was for them — in that moment, we truly grow up.' } },
  { text: { zh: '小武很笨，笨會傳染。', en: 'Little Take is dim — and stupidity is contagious.' }, source: { zh: '第八章 · 母親佐紀對兒子的朋友說', en: 'Chapter 8 · Saki, to her son’s friends' },
    analysis: { zh: '佐紀式的「激將」與嚴厲。話說得刻薄，底下卻是她對兒子前途近乎執念的焦慮——在她眼裡，讀書是這個窮家唯一的出路。', en: 'Saki’s brand of harsh provocation. The words are cutting, but beneath them is her near-obsessive anxiety for her son’s future — in her eyes, study was this poor family’s only way out.' } },
  { text: { zh: '判他死刑吧！', en: 'Sentence him to death!' }, source: { zh: '第十章 · 佐紀替被捕的兒子擋輿論', en: 'Chapter 10 · Saki, shielding her arrested son' },
    analysis: { zh: '護短之愛最激烈的一種表達。她不是真要兒子死，而是用最狠的姿態替他把眾人的怒火壓下去——佐紀的愛，總是包在最兇的話裡。', en: 'The fiercest possible expression of protective love. She did not truly want her son dead — she took the harshest stance to press down the public’s fury on his behalf. Saki’s love always came wrapped in her cruelest words.' } },
  { text: { zh: '別讓他太好過了。', en: 'Don’t let him off so easy.' }, source: { zh: '第十一章 · 佐紀勸媳婦別離婚', en: 'Chapter 11 · Saki, urging her daughter-in-law not to divorce' },
    analysis: { zh: '面對兒子的桃色問題，母親勸媳婦留下——用的卻是「別讓他太好過」的理由。世故、護短，還有一份老派的「家該撐下去」的信念，全在這一句裡。', en: 'Faced with her son’s affair, the mother urges the wife to stay — on the grounds of “don’t let him off so easy.” Worldliness, protectiveness, and an old-fashioned faith that a family should hold together all live in that one line.' } },
  { text: { zh: '我果然還是繼承了菊次郎的血脈。', en: 'I really did inherit Kikujiro’s blood after all.' }, source: { zh: '第十三章 · 保時捷之後的自嘲（北野武）', en: 'Chapter 13 · After the Porsche (Takeshi)' },
    analysis: { zh: '一輩子想逃離父親的荒唐，卻在自己滑稽的虛榮裡撞見了他。這句自嘲，是全書「血脈逃不開」主題最會心的一擊。', en: 'A lifetime spent fleeing his father’s absurdity, only to meet him again in his own comic vanity. This self-mockery is the most knowing strike of the book’s theme that you cannot escape your blood.' } },
  { text: { zh: '父母給的行囊裡，有救命的口糧，也有得用一生丟棄的垃圾。', en: 'The baggage your parents give holds both life-saving rations and garbage you spend a lifetime throwing away.' }, source: { zh: '第十四章 · 全書主旨（提煉）', en: 'Chapter 14 · The Book’s Theme (a distillation)' },
    analysis: { zh: '對「父母影響」最精準的比喻。我們無從選擇父母裝進行囊的東西，卻可以決定一路上要留下什麼、丟掉什麼——那正是長大的功課。', en: 'The most precise metaphor for a parent’s influence. We cannot choose what our parents pack into the baggage, but we can decide, along the way, what to keep and what to discard — and that is the work of growing up.' } }
];

const REFLECTION_QUESTIONS = [
  { zh: '如果要用一件小事來形容你的父親或母親，你會選哪一件？它為什麼留在你心裡？', en: 'If you had to capture your father or mother in one small incident, which would you choose — and why has it stayed with you?' },
  { zh: '你有沒有在某個瞬間，發現自己不知不覺活成了父母的樣子？那感覺是慌張、好笑，還是釋然？', en: 'Have you ever caught yourself, unawares, becoming your parent? Did it feel like panic, comedy, or relief?' },
  { zh: '佐紀把愛藏在最兇的話裡。你的家人有沒有這種「不直說」的愛？你當時讀懂了嗎？', en: 'Saki hid her love in her harshest words. Does your family have this kind of unspoken love — and did you read it at the time?' },
  { zh: '「覺得父母好可憐」是北野武對成熟的定義。你認同嗎？你有過那樣的一刻嗎？', en: 'Takeshi defines maturity as “finding your parents pitiable.” Do you agree? Have you had such a moment?' },
  { zh: '菊次郎用喝酒和逞強來討愛。你身邊有沒有人，也在用某種笨拙的方式渴望被看見？', en: 'Kikujiro begged for love through drink and bluster. Do you know someone who, in some clumsy way, is also longing to be seen?' },
  { zh: '貧窮的往事，為什麼往往在多年後變成最好笑、最溫暖的回憶？', en: 'Why do memories of poverty so often turn, years later, into the funniest and warmest ones?' },
  { zh: '母親「教育至上」的執念，在你的成長裡有沒有類似的版本？它是祝福、壓力，還是兩者都是？', en: 'Was there a version of the mother’s “education above all” in your own upbringing? Was it a blessing, a burden, or both?' },
  { zh: '如果父母的影響是一只行囊，你想留下裡面的哪一樣，又想丟掉哪一樣？', en: 'If a parent’s influence is a piece of baggage, which item in it would you keep, and which would you throw away?' },
  { zh: '北野武用幽默包裝了對父母的複雜感情。你會用什麼方式，書寫或訴說你自己的家？', en: 'Takeshi wrapped complex feelings for his parents in humor. In what way would you write or tell the story of your own family?' },
  { zh: '讀完這本書，你最想對（或代替）你的父母說的一句話是什麼？', en: 'Having read this book, what one sentence would you most want to say to — or on behalf of — your parents?' }
];


// ==== CHAPTER_CONTENT（回憶重述，中英雙語，子代理擴寫）====
const CHAPTER_CONTENT = {};

Object.assign(CHAPTER_CONTENT, {
  1: {
    num: { zh: `第一章`, en: `Chapter One` },
    title: { zh: `油漆匠的背影`, en: `The Painter's Back` },
    epigraph: {
      zh: `一個在自己家裡都站不到中央的男人，我叫他父親。`,
      en: `A man who never quite stood at the centre of his own home — him I called Father.`
    },
    body: {
      zh: `<p>戰後的東京足立區梅島，一排木造的長屋擠在一起，我們家就縮在其中一格。日子窮，窮到理所當然，窮到沒人特別去談它。而我的父親菊次郎，就是在這樣的背景裡，一個靠油漆手藝討生活的匠人。</p>
<p>說他是一家之主，其實有點勉強。真正把這個家撐起來的，是母親沒日沒夜的內職，還有大哥重一每個月領回來的薪水。父親的油漆活兒能賺多少、又進了誰的口袋，好像從來不是家裡運轉的關鍵。</p>
<div class="section-break">＊ ＊ ＊</div>
<p>在母親眼裡，他是個「甲斐性なし」——沒出息的丈夫。這四個字她大概沒少在心裡念過。一個大男人，扛不起一個家，這件事在那個年代，是要被人拿在嘴邊掂量的。</p>
<p>可我記得的，反而是他那個背影。埋著頭刷油漆的背，在家裡不太出聲的背。他在這個家的位置，其實是邊緣的、淡淡的，像牆角一層刷得不太均勻的漆——你說它不在吧，它明明在；你說它多重要吧，好像少了它，日子也照樣過。</p>
<p>那時候我還小，不懂得這叫什麼。長大以後回頭看，才明白那是一個男人站在自己家門口，卻怎麼也走不進正中央的樣子。</p>
<p class="thought-question">🤔 思考：一個在家裡沒什麼存在感的父親，究竟是他辜負了這個家，還是這個家太重、而他太輕？</p>`,
      en: `<p>In the Umejima quarter of Adachi, in the Tokyo that came after the war, a row of wooden tenements stood crammed shoulder to shoulder, and our family was folded into one of its narrow slots. We were poor — poor as a matter of course, so poor that nobody thought it worth mentioning. And it was against this backdrop that my father, Kikujiro, made his living as a painter, a man who earned his bread with a brush.</p>
<p>To call him the head of the household would be stretching things. What actually kept the family upright was my mother's piecework, done at all hours, and the wages my eldest brother Shigekazu brought home each month. However much my father's painting brought in, and wherever it went, it never seemed to be the thing the house turned on.</p>
<div class="section-break">◆ ◆ ◆</div>
<p>In my mother's eyes he was a "kaishō-nashi" — a good-for-nothing husband. She must have turned those words over in her mind more than once. A grown man who couldn't carry his own family: in that era, that was the sort of thing the neighbours weighed on their tongues.</p>
<p>Yet what I remember is his back. The back bent low over the paint, the back that said so little in the house. His place in our home was off to the side, faint — like an unevenly brushed coat of paint in a corner. Say it isn't there, and there it plainly is; say it matters, and somehow the days would have rolled on without it just the same.</p>
<p>I was too small then to have a name for it. Only looking back, years later, did I understand: this was a man standing in his own doorway, never quite able to walk into the middle of the room.</p>
<p class="thought-question">🤔 Reflect: When a father leaves so little trace at home, has he failed the family — or is the family simply too heavy, and he too light?</p>`
    }
  },
  2: {
    num: { zh: `第二章`, en: `Chapter Two` },
    title: { zh: `酒後的雷聲`, en: `Thunder After the Drink` },
    epigraph: {
      zh: `清醒時他縮得比誰都小，酒一下肚，他忽然大得可怕。`,
      en: `Sober he shrank smaller than anyone; a drink in him, and he swelled up terrifying.`
    },
    body: {
      zh: `<p>清醒的父親，是個膽小的人。膽小到近乎懦弱。在外頭低著頭，在家裡也沒什麼氣勢，好像時時刻刻都怕得罪誰。你很難把「兇」這個字，安在那樣的一個人身上。</p>
<p>可是酒不一樣。酒一下肚，他就換了個人。原本縮著的那個男人不見了，跑出來一個粗聲粗氣、目中無人的傢伙。話變得難聽，脾氣說翻就翻，甚至會對母親動起手來。</p>
<div class="section-break">＊ ＊ ＊</div>
<p>於是我們家的氣氛，是跟著他的酒瓶起起落落的。他沒喝，家裡是一種樣子；他喝了，又是另一種樣子。孩子們學會了聽聲音、看臉色，學會了在雷聲響起之前，先躲到牆的另一邊去。</p>
<p>那是一種又怕又無奈的感覺。怕，是真的怕；無奈，是因為你知道明天他酒醒了，又會變回那個縮著肩膀、不敢大聲說話的父親。你甚至沒辦法好好地恨他——恨誰呢？恨那個懦弱的他，還是恨那個酒後的他？</p>
<p>「清醒時懦弱，酒後粗暴」——這兩個矛盾，就這樣裝在同一個人身上，裝在我父親身上。我不想把它說得多可怕，也不想美化它。它就是我們家的天氣，陰晴不定，看酒瓶的臉色。</p>
<p class="thought-question">🤔 思考：一個人在酒裡放出來的兇，會不會其實是他清醒時吞下去的、那些不敢說的委屈？</p>`,
      en: `<p>Sober, my father was a timid man. Timid to the point of cowardice. Head down out in the world, and no great presence at home either, forever afraid of giving offence to someone. It was hard to pin the word "fierce" on a man like that.</p>
<p>But drink was another matter. A drink in him and he became someone else. The shrunken man vanished, and out came a loud, coarse, contemptuous fellow. His words turned ugly, his temper flipped in an instant, and he would even raise his hand against my mother.</p>
<div class="section-break">◆ ◆ ◆</div>
<p>So the mood of our house rose and fell with his bottle. Sober, the house was one thing; with a drink in him, quite another. We children learned to read the sounds and the faces, learned to slip round to the other side of the wall before the thunder broke.</p>
<p>It was a feeling of fear tangled up with helplessness. The fear was real. The helplessness came from knowing that tomorrow, sobered up, he would shrink back into the father who hunched his shoulders and dared not raise his voice. You couldn't even hate him properly — hate whom? The timid one, or the one who came out of the drink?</p>
<p>Cowardly when sober, brutal after the drink — these two contradictions were packed into one man, into my father. I don't want to make it sound more dreadful than it was, nor to prettify it. It was simply our household weather: unsettled, forever watching the face of the bottle.</p>
<p class="thought-question">🤔 Reflect: The cruelty a man lets loose when he drinks — could it be the very grievance he swallowed, sober, and never dared to speak?</p>`
    }
  },
  3: {
    num: { zh: `第三章`, en: `Chapter Three` },
    title: { zh: `那只金印戒指`, en: `The Gold Signet Ring` },
    epigraph: {
      zh: `他一輩子最想要的，不過是被人當一回事。`,
      en: `All he ever really wanted was to be taken seriously, just once.`
    },
    body: {
      zh: `<p>父親有個毛病：手頭一有點錢，就忍不住去買些沒什麼用的東西，然後自個兒得意半天。窮歸窮，這種小小的虛榮，他倒是從來沒省過。</p>
<p>其中有一樣，是一只金色的印章戒指。就是那種戒面上刻著印記、可以拿來蓋章的戒指。他買來自己戴，戴上之後，那份得意勁兒，簡直像戴上了什麼了不起的勳章。</p>
<div class="section-break">＊ ＊ ＊</div>
<p>結果有一天，郵差上門送件，要人蓋章簽收。你猜怎麼著——那郵差竟然順手拿起了父親那只寶貝戒指，往紙上一按，當成收件的印章給用了。</p>
<p>父親當場就火了。那可是他捧在手心、拿來抬高自己身價的寶貝啊，怎麼能被人當成隨手一蓋的圖章？他氣得不行，可你越看越覺得又好氣又好笑。</p>
<p>這件哭笑不得的小事，其實把父親整個人給照亮了。他那麼渴望被看重、被當成一個「有分量」的人；偏偏他抓來充場面的那點體面，在別人眼裡輕飄飄的，隨手就能拿去蓋張收據。他的自尊，就這樣被一枚郵件戳章給戳破了。</p>
<p class="thought-question">🤔 思考：當一個人拚命想抬高自己，卻總在最得意的地方被輕輕戳破——你會笑他，還是心疼他？</p>`,
      en: `<p>My father had a weakness: the moment he had a little money in his pocket, he couldn't resist buying some useless thing and then preening over it for ages. Poor as we were, that small vanity was one expense he never spared.</p>
<p>One such thing was a gold signet ring — the kind with a seal carved into its face, the sort you could stamp with. He bought it to wear himself, and once it was on his finger, the pride of it was as if he'd pinned on some magnificent medal.</p>
<div class="section-break">◆ ◆ ◆</div>
<p>Then one day the postman came to the door with a delivery, needing a stamp to sign for it. And what do you think happened — the postman simply reached for my father's precious ring, pressed it onto the paper, and used it as the receipt stamp.</p>
<p>My father blew up on the spot. This was the treasure he cradled in his palm, the thing he wore to lift his own standing — how dare anyone treat it as a stamp to be pressed down without a thought? He was furious, and the more you looked, the more it was both maddening and comic.</p>
<p>That little scene, funny and sad at once, lit up the whole of my father. He longed so badly to be valued, to be taken for a man of "weight"; and yet the scrap of dignity he'd grabbed to keep up appearances was, in other people's eyes, so weightless that it could be snatched up to stamp a receipt. His pride, punctured by a postman's mark.</p>
<p class="thought-question">🤔 Reflect: When a man strains so hard to lift himself up, only to be quietly punctured at his proudest moment — do you laugh at him, or ache for him?</p>`
    }
  },
  4: {
    num: { zh: `第四章`, en: `Chapter Four` },
    title: { zh: `大哥婚禮上的醜態`, en: `A Scene at the Wedding` },
    epigraph: {
      zh: `他想當全場的主角，用的卻是全場最不堪的方式。`,
      en: `He wanted to be the star of the room, by the most graceless means the room had ever seen.`
    },
    body: {
      zh: `<p>大哥重一結婚那天，是我們家難得的體面日子。長子成家，該是全家人挺起胸膛、好好露臉的時刻。可偏偏，這種需要體面的場合，正是父親最容易出事的場合。</p>
<p>他又喝多了。酒一上頭，那個縮著的父親再度消失，換上來的是個口無遮攔的傢伙。他當著眾人的面，開始品頭論足地批評起新娘來，把喜氣洋洋的場子，一句一句地往尷尬裡推。</p>
<div class="section-break">＊ ＊ ＊</div>
<p>光是這樣還不夠。他索性把衣服給脫了，就在婚禮上手舞足蹈地跳起舞來。滿堂賓客的臉色，你可以想像。那場面，丟人丟到讓人恨不得找個地縫鑽進去。</p>
<p>可是奇怪，事後我回想，除了難堪，心裡竟還有一點酸。因為我隱隱看懂了：他不是存心要砸大哥的場子，他只是——太想成為那個被眾人看見的人了。</p>
<p>脫衣服、跳舞、大放厥詞，那是他笨拙到極點的方式，想在滿屋子的目光裡搶下一點屬於自己的位置。一個平日在家裡都站不到中央的男人，選在兒子的婚禮上，用最不堪的姿態，喊了一聲「看看我」。</p>
<p class="thought-question">🤔 思考：一個人越是渴望被看見，越可能用最讓人尷尬的方式現身——那份難堪的底下，是不是藏著一種沒被滿足的孤單？</p>`,
      en: `<p>The day my eldest brother Shigekazu married was a rare respectable day for our family. The firstborn starting a household of his own — it should have been the moment for the whole family to straighten their backs and show their best face. But of course, the very occasions that called for dignity were the ones on which my father was most likely to come undone.</p>
<p>He drank too much again. Once the drink went to his head, the shrunken father vanished once more, replaced by a man with no filter at all. In front of everyone, he began appraising and criticising the bride, nudging the joyful gathering, remark by remark, toward mortification.</p>
<div class="section-break">◆ ◆ ◆</div>
<p>And that wasn't enough. He went ahead and took off his clothes, and there at the wedding he flung himself into a dance. You can imagine the faces of the assembled guests. It was the kind of disgrace that makes you wish the floor would open and swallow you.</p>
<p>Yet, strangely, when I think back on it, beneath the shame there is also a small ache. Because I dimly came to see it: he wasn't out to wreck my brother's day. He simply — wanted so badly to be the one everyone was looking at.</p>
<p>Stripping off, dancing, running his mouth — that was his utterly clumsy way of seizing, out of a room full of eyes, some small place of his own. A man who couldn't stand at the centre of his own home on an ordinary day chose his son's wedding to cry out, in the most graceless posture, "Look at me."</p>
<p class="thought-question">🤔 Reflect: The more a person craves to be seen, the more they may show up in the most cringe-inducing way — and beneath that shame, might there hide a loneliness that was never met?</p>`
    }
  },
  5: {
    num: { zh: `第五章`, en: `Chapter Five` },
    title: { zh: `一鍋燉了姊姊的雞`, en: `The Chicken in the Pot` },
    epigraph: {
      zh: `窮日子裡的荒唐，往往是眼淚穿了件好笑的外衣。`,
      en: `In poor times, the absurd is often just tears wearing a funny coat.`
    },
    body: {
      zh: `<p>家裡窮，能養個什麼小東西當寶貝，本身就是件奢侈的事。可我姊姊偏偏養了一隻雞，當成寵物疼著。那隻雞在我們那樣的家裡，算是難得的一點溫柔了。</p>
<p>你大概已經猜到接下來會發生什麼。某天，喝醉了的父親，不知哪根筋不對，竟然把那隻雞抓了過來——不是拿去玩，也不是拿去賣——而是三兩下把牠給燉成了一鍋菜。</p>
<div class="section-break">＊ ＊ ＊</div>
<p>姊姊的寵物，就這樣變成了餐桌上的一鍋燉雞。荒謬吧？可這就是那個貧窮年代裡，會真實發生的事。一隻本該被疼愛的雞，在一個喝醉的父親手裡，成了填肚子的食物。</p>
<p>這一幕，你要說它可笑，它是真可笑；你要說它心酸，它也是真心酸。笑,是因為這實在太荒唐；酸，是因為荒唐的背後，是一個窮到連一隻寵物都留不住的家。</p>
<p>這就是我後來一直說的那種「笑中帶淚」。在那樣的日子裡，眼淚和笑聲從來不是分開的兩件事，它們總是黏在一起，一鍋燉著，分不清哪是哪。</p>
<p class="thought-question">🤔 思考：當一件事既讓你想笑又讓你想哭，也許正說明它離真實的生活最近——你上一次這樣笑著笑著就酸了，是什麼時候？</p>`,
      en: `<p>When a family is poor, keeping some little creature to dote on is itself a luxury. Yet my sister, of all things, kept a chicken, cherishing it as a pet. In a household like ours, that chicken was a rare scrap of tenderness.</p>
<p>You can probably already guess what came next. One day, my drunken father, for reasons known to no one, seized that chicken — not to play with it, not to sell it — but, in a few quick motions, stewed it into a pot of dinner.</p>
<div class="section-break">◆ ◆ ◆</div>
<p>My sister's pet, turned just like that into a pot of chicken stew on the table. Absurd, isn't it? But this was the sort of thing that really happened in that era of poverty. A chicken that should have been loved became, in the hands of a drunken father, food to fill our bellies.</p>
<p>Call it comic, and it truly is comic; call it heartbreaking, and it truly is heartbreaking. The laughter comes because it is all so preposterous; the ache comes because behind the absurdity stands a family too poor to hold on to even one pet.</p>
<p>This is the "laughter with tears in it" I have gone on about ever since. In days like those, tears and laughter were never two separate things. They always clung together, stewed in one pot, and you couldn't tell which was which.</p>
<p class="thought-question">🤔 Reflect: When something makes you want to laugh and cry at once, perhaps that is the sign it sits closest to real life — when did you last laugh until it ached?</p>`
    }
  }
});


Object.assign(CHAPTER_CONTENT, {
  6:{
    num:{zh:`第六章`,en:`Chapter Six`},
    title:{zh:`懦弱裡的父親`,en:`The Father Behind the Cowardice`},
    epigraph:{
      zh:`酒瓶背後，站著一個一輩子沒學會怎麼被愛的人。`,
      en:`Behind the bottle stood a man who never learned how to be loved.`
    },
    body:{
      zh:`<p>菊次郎清醒的時候，是家裡最沒有份量的一個人。他不太說話，走路貼著牆邊，像怕自己佔了誰的位置。可一旦喝了酒，那個縮著的男人就換了一副骨頭，嗓門大了，脾氣也硬了，連拳頭都跟著出來了。同一個人，早上是隻縮頭的貓，晚上是隻虛張聲勢的老虎——我小時候看不懂，只覺得又怕又煩。</p>`+
`<p>他買過一只金色的印章戒指，戴在手上自鳴得意，結果被郵差順手拿去蓋了收件章，氣得他跳腳。他在大哥的婚禮上喝多了，當眾嫌新娘、脫了衣服跳舞，把全場弄得下不了台。他甚至趁醉把姊姊當寶貝養的雞抓來燉成一鍋。這些事，當年我只覺得丟臉、荒唐、好氣又好笑。</p>`+
`<div class="section-break">＊ ＊ ＊</div>`+
`<p>可是人長大以後，看同一件事的角度會慢慢挪動。我後來才明白，那些逞強、那些沒用的排場、那些非要當場中央焦點不可的醜態，全是同一件事的變形——他太想被人看重了，卻笨得只會用最難堪的方式討這份看重。</p>`+
`<p>在母親眼裡，他是個「沒出息」的丈夫；在孩子眼裡，他是個「靠不住」的父親。這些評語都沒錯。可躲在這些評語底下的，是一個一輩子沒學會怎麼好好表達、也沒被好好愛過的男人。他不是不想當個像樣的父親，他是不知道該怎麼當。</p>`+
`<p>如今回頭看那個貼著牆走路的背影，我心裡浮上來的，不再是丟臉或怨氣，而是兩個字：可憐。不是瞧不起的那種可憐，是心疼的那種——原來那個一喝酒就要吼人的男人，只是一個好害怕、好孤單的人罷了。卷一寫到這裡，我想我終於能替年少的自己，把對父親的帳一筆一筆算清，然後輕輕地放下。</p>`+
`<p class="thought-question">🤔 思考：當你開始覺得曾經讓你難堪的長輩「其實好可憐」，那一刻改變的，究竟是他，還是你？</p>`
      ,
      en:`<p>Sober, my father was the man who counted for the least in our house. He barely spoke, he walked close to the wall as if afraid of taking up someone else's space. But the moment drink got into him, that shrunken man swapped his bones for another set — his voice swelled, his temper hardened, and his fists came out too. The same person: a cat with its head tucked in by morning, a bluffing tiger by night. As a boy I couldn't read it. I only found him frightening and tiresome.</p>`+
`<p>He once bought a gold signet ring and wore it, thoroughly pleased with himself, until the postman casually used it to stamp a delivery and sent him hopping mad. At my eldest brother's wedding he drank too much, criticized the bride in front of everyone, stripped off his shirt and danced, leaving the whole room with nowhere to look. He even, drunk, grabbed the chicken my sister kept as a pet and stewed it in a pot. At the time these things only struck me as shameful, absurd, maddening and ridiculous all at once.</p>`+
`<div class="section-break">◆ ◆ ◆</div>`+
`<p>But as a person grows up, the angle from which he sees the same events slowly shifts. Only later did I understand that all the swagger, all the pointless showing-off, all those humiliating attempts to be the center of the room were variations on a single thing — he wanted so badly to be thought well of, yet was too clumsy to beg for it any way but the most excruciating.</p>`+
`<p>In my mother's eyes he was a good-for-nothing husband; in his children's eyes he was a father you couldn't lean on. None of those verdicts were wrong. But hiding underneath them was a man who had never learned how to say what he felt, and had never been properly loved himself. It wasn't that he didn't want to be a decent father. He simply didn't know how.</p>`+
`<p>Now, looking back at that figure hugging the wall as he walked, what rises in me is no longer shame or resentment but a single word: pity. Not the contemptuous kind — the aching kind. It turned out the man who bellowed the instant he drank was only a frightened, lonely person after all. As Book One closes here, I think I can finally settle the account I kept against my father as a boy, item by item, and then gently set it down.</p>`+
`<p class="thought-question">🤔 Reflect: When you begin to feel that an elder who once humiliated you is "actually rather pitiable," what changes in that moment — him, or you?</p>`
    }
  },
  7:{
    num:{zh:`第七章`,en:`Chapter Seven`},
    title:{zh:`埋在後院的手套`,en:`The Glove Buried in the Yard`},
    epigraph:{
      zh:`在我家，連泥土底下都藏著一句：唸書。`,
      en:`In our house, even the dirt underground whispered: study.`
    },
    body:{
      zh:`<p>我小時候瘋棒球。那個年代的窮孩子沒什麼玩具，一只棒球手套就是全副身家。我把它當寶貝，怕被搶、怕被沒收，居然想出一個天才的主意——把手套埋進後院的泥土裡，像海盜藏寶一樣，只有我一個人知道它的座標。</p>`+
`<p>過了些日子，我興沖沖地跑去挖寶。手指一碰到硬硬的東西，心裡正得意，扒開泥土一看——手套不見了，坑裡躺著的是一疊參考書。上頭還壓著母親的字條，六個字，力透紙背：「唸書啊，笨蛋！」</p>`+
`<div class="section-break">＊ ＊ ＊</div>`+
`<p>我到現在都想不通，她是怎麼發現的。一個母親，為了逼兒子讀書，願意親自跑到後院，把兒子偷埋的手套挖出來，再一本一本把參考書填回那個坑、蓋好土——這已經不是嚴厲，這是某種近乎執拗的決心。她連我最後一塊玩樂的自留地都要犁平。</p>`+
`<p>那張字條的口氣兇得好笑，可字裡行間沒有半點惡意，全是焦急。在佐紀的字典裡，玩，永遠排在讀書後面；手套，永遠贏不了參考書。她信的道理很簡單也很硬：在這樣的家，唯一能把孩子拉出貧窮的繩子，就是唸書。</p>`+
`<p>當下我當然是欲哭無淚。可幾十年後回想，那個埋著手套、卻被人偷偷換成參考書的坑，簡直是我們家教育至上的一座小紀念碑。她沒有跟我講什麼大道理，她只是用一把鏟子，把她對這個家的全部期望，狠狠地埋進了後院的土裡。</p>`+
`<p class="thought-question">🤔 思考：如果你的珍藏被換成了「為你好」的東西，多年以後，你會記得那份失落，還是那份用心？</p>`
      ,
      en:`<p>As a boy I was mad about baseball. Poor kids of that era had few toys; a single baseball glove was your entire fortune. I treasured mine, terrified it would be stolen or confiscated, and hit upon what I thought was a stroke of genius — I buried the glove in the yard, like a pirate hiding treasure, its coordinates known to me alone.</p>`+
`<p>Some days later I dashed out, thrilled, to dig up my hoard. My fingers hit something hard and my heart swelled with triumph — then I brushed the soil away and the glove was gone. Lying in the hole was a stack of study guides. On top, pinned down, was a note from my mother, six characters pressed so hard they nearly tore the paper: "Study, you idiot!"</p>`+
`<div class="section-break">◆ ◆ ◆</div>`+
`<p>To this day I cannot work out how she found it. A mother, to force her son to study, willing to go out to the yard herself, dig up the glove he had secretly buried, then fill that same hole with study guides one by one and pat the earth back down — this is not mere strictness, it is a kind of near-obstinate resolve. She flattened even the last little plot of play I had staked out for myself.</p>`+
`<p>The tone of that note was fierce enough to be funny, yet between its lines there was not a trace of malice — only urgency. In Saki's dictionary, play always ranked below study; a glove could never beat a study guide. The principle she believed in was simple and unbending: in a house like ours, the only rope that could haul a child out of poverty was learning.</p>`+
`<p>At the time, of course, I was too crushed even to cry. But decades on, that hole — where a buried glove had been quietly swapped for study guides — strikes me as a little monument to how our family put education above all else. She preached me no grand lesson. She simply took a shovel and buried every last hope she had for this household deep in the soil of the backyard.</p>`+
`<p class="thought-question">🤔 Reflect: If your treasure were swapped for something meant "for your own good," which would you remember years later — the loss, or the care behind it?</p>`
    }
  },
  8:{
    num:{zh:`第八章`,en:`Chapter Eight`},
    title:{zh:`「笨會傳染」`,en:`Stupid Is Contagious`},
    epigraph:{
      zh:`她能對著我的朋友嫌我笨，卻連省下一頓飯也要湊出補習費。`,
      en:`She would call me stupid to my own friends — then skip a meal to scrape together the cram-school fee.`
    },
    body:{
      zh:`<p>母親佐紀有一個從不動搖的信念：只有教育，才能把孩子從窮裡撈出來。這信念硬得像鐵，也讓她變成一個外人看了會倒抽一口氣的嚴母。家裡明明拮据，她卻省吃儉用，硬是要把我送去補習班——飯桌上少一道菜，換課本上多一頁字，她算得清清楚楚。</p>`+
`<p>她的嚴，還嚴出了名句。有一次，她竟然當著我朋友的面說：「小武這孩子很笨，你們別跟他玩太近，笨會傳染的。」——沒錯，她說「笨會傳染」。我當場恨不得找個地縫鑽進去。哪有母親這樣講自己兒子的？</p>`+
`<div class="section-break">＊ ＊ ＊</div>`+
`<p>可後來我慢慢咂摸出這句狠話底下的味道。她不是真覺得我笨到會傳染，她是急。急到覺得光靠自己盯還不夠，連我身邊的環境、我交的朋友、我玩掉的每一分鐘，她都想管、都想扳回讀書這條正軌上來。那句「笨會傳染」，與其說是嫌棄，不如說是一個母親近乎執念的焦慮，脫口而出時走了樣。</p>`+
`<p>她的刀子嘴是真的，逢人就數落兒子的不是，一點面子都不給。可她省下來的每一塊補習費也是真的。前一秒她能把我貶到塵埃裡，後一秒她能為了我的學費把自己的日子過得更緊。這兩件事在她身上一點都不矛盾——因為它們的源頭是同一個東西：她怕我這輩子重蹈這個家的窮。</p>`+
`<p>那時候的我只聽見難堪，聽不見焦急。要等到自己也嚐過人生的重量，才聽得懂：「笨會傳染」這五個字，其實是她用最不中聽的嗓門，喊出來的最放不下的牽掛。</p>`+
`<p class="thought-question">🤔 思考：有些愛，為什麼偏偏要包在最難聽的話裡才說得出口？</p>`
      ,
      en:`<p>My mother Saki held one belief that never wavered: only education could haul a child out of poverty. That belief was hard as iron, and it turned her into the kind of stern mother who could make an onlooker gasp. Money was tight, yet she scrimped and saved to send me to cram school no matter what — one fewer dish on the table in exchange for one more page in a textbook, and she kept the accounts to the last coin.</p>`+
`<p>Her strictness even produced a famous line. Once, in front of my friends, she actually said: "This boy Takeshi is stupid — don't play too close to him, stupidity is contagious." Yes, she said stupidity is contagious. On the spot I wished the ground would open and swallow me. What kind of mother talks about her own son that way?</p>`+
`<div class="section-break">◆ ◆ ◆</div>`+
`<p>But over the years I came to taste what lay beneath that harsh line. She didn't really think I was stupid enough to infect anyone; she was anxious. So anxious that watching me herself wasn't enough — she wanted to manage my surroundings, my friends, every minute I frittered away on play, and drag it all back onto the straight track of study. "Stupidity is contagious," more than scorn, was a mother's near-obsessive dread, blurting out sideways.</p>`+
`<p>Her sharp tongue was real; she would run her son down to anyone within earshot, sparing me not a shred of face. But every coin of cram-school money she saved was real too. One second she could grind me into the dust, the next she could pinch her own life tighter for my tuition. In her the two never contradicted each other — because they sprang from the same source: her terror that I would inherit this household's poverty for life.</p>`+
`<p>Back then all I heard was the humiliation, never the urgency. Only after I had felt the weight of a life of my own could I finally make out the meaning: those words, "stupidity is contagious," were the tenderest worry she could not put down, hollered out in the least pleasant voice she owned.</p>`+
`<p class="thought-question">🤔 Reflect: Why is it that some kinds of love can only be spoken when wrapped in the ugliest words?</p>`
    }
  },
  9:{
    num:{zh:`第九章`,en:`Chapter Nine`},
    title:{zh:`刀子嘴，豆腐心`,en:`A Sharp Tongue, a Tender Heart`},
    epigraph:{
      zh:`她從不肯讓我知道，她在我背後默默替我撐傘。`,
      en:`She never let me know she was quietly holding an umbrella over me from behind.`
    },
    body:{
      zh:`<p>佐紀這個人，嘴上從不饒人。跟她鬥嘴，你永遠佔不到便宜；她也從不把「我愛你」這種軟話掛在嘴邊。可她骨子裡護犢子護得很兇——只是那份兇，永遠躲在你看不見的地方。</p>`+
`<p>我上大學那陣子，一心想搬出去自己住，急著離開那個管東管西的家。她表面上沒攔我，也沒多說什麼，冷冷淡淡地由著我走。我那時候還暗自得意，以為終於掙脫了。</p>`+
`<div class="section-break">＊ ＊ ＊</div>`+
`<p>後來我才知道，她在背地裡做了什麼。她偷偷替我把房租付了，還特地去找房東打招呼，跟人家說：「這孩子恐怕交不起房租，麻煩你多擔待。」——她算準了我這個窮學生撐不住，就搶在我摔跤之前，先在地上鋪好了墊子，還叮囑我一句都別讓我知道。</p>`+
`<p>你看，這就是我母親。當面，她一句軟話都捨不得給你，彷彿巴不得你自生自滅；背後，她卻把你的難處一件一件都盤算過了，默默替你補好。她怕的不是你知道她狠，她怕的是你知道她心軟。</p>`+
`<p>刀子嘴，豆腐心——這六個字放在別人身上是句俗話，放在佐紀身上是句實話。她這一輩子，就是把最柔軟的那顆心，藏在一張最不肯服輸的嘴後面。而我這個做兒子的，往往要等到很久以後，才後知後覺地摸到那顆豆腐心的溫度。</p>`+
`<p class="thought-question">🤔 思考：你身邊有沒有一個人，總在你不知道的地方替你收拾好了殘局，卻從不肯讓你道謝？</p>`
      ,
      en:`<p>Saki never gave an inch with her mouth. Trade barbs with her and you'd never come out ahead; nor did she ever let soft words like "I love you" pass her lips. Yet deep down she guarded her young ferociously — only that ferocity always hid somewhere you couldn't see.</p>`+
`<p>Around the time I started university, all I wanted was to move out and live on my own, desperate to escape that house where everything was policed. On the surface she didn't stop me, didn't say much, just coolly let me go. Back then I was secretly pleased with myself, thinking I had finally broken free.</p>`+
`<div class="section-break">◆ ◆ ◆</div>`+
`<p>Only later did I learn what she had done behind my back. She quietly paid my rent, and made a point of going to see the landlord to say: "This boy probably can't cover the rent — please bear with him." She had reckoned that a broke student like me wouldn't manage, and so, before I could fall, she laid a cushion on the floor ahead of time — and instructed the landlord not to breathe a word of it to me.</p>`+
`<p>That, you see, was my mother. To your face she wouldn't spare you a single soft word, as if she'd sooner leave you to sink or swim; behind your back she had weighed every one of your difficulties and quietly patched them up. What she feared was not that you'd learn how harsh she was — it was that you'd learn how soft her heart really was.</p>`+
`<p>A sharp tongue and a tofu-soft heart — for most people the phrase is a mere saying; on Saki it was the plain truth. Her whole life, she kept the softest of hearts tucked behind the mouth that would never admit defeat. And I, her son, would usually only grope my way to the warmth of that tender heart long, long afterward.</p>`+
`<p class="thought-question">🤔 Reflect: Is there someone in your life who has always cleaned up the mess for you where you couldn't see — and never let you thank them?</p>`
    }
  },
  10:{
    num:{zh:`第十章`,en:`Chapter Ten`},
    title:{zh:`判他死刑吧`,en:`Sentence Him to Death`},
    epigraph:{
      zh:`她用最兇的一句話，替我擋下了全世界的怒火。`,
      en:`With her fiercest sentence, she shielded me from the fury of the whole world.`
    },
    body:{
      zh:`<p>我成名以後，有一回捲進了風波，被逮捕，鬧得沸沸揚揚，輿論一面倒地罵。那種時候，一個當紅的名人成了眾矢之的，全國都在等著看他家人怎麼收場。記者當然也堵上了我母親。</p>`+
`<p>換作別的母親，大概會哭著求情，會替兒子辯白，會說「他不是那種人」。佐紀不。她對著外界，冷冷地丟出一句：「判他死刑吧！」——判他死刑。這是一個母親，對著全世界，替自己的親生兒子說出來的話。</p>`+
`<div class="section-break">＊ ＊ ＊</div>`+
`<p>頭一回聽到，誰都要愣住。哪有母親盼兒子死的？可我太懂她了。她根本不是真要我死。她是看準了，這場火，你越替他辯、越替他哭，外頭的人就燒得越旺；倒不如她自己先站出來，把最重的話說盡、把姿態擺到最狠——狠到連當母親的都這麼講了，旁人還能再說什麼？</p>`+
`<p>她這一句「判他死刑吧」，等於一巴掌把整場沸騰的怒火給拍熄了。她用自我了斷式的狠話，替我在風暴中心撐開了一小塊喘息的地方。這哪裡是咒兒子，這分明是拿自己的臉、自己的名聲，去給兒子擋刀。</p>`+
`<p>我母親的愛，從來都是這副樣子——不會軟軟地擁抱你，只會兇兇地護著你。她把最深的疼惜，包在最激烈的話裡遞出來，你得剝開好幾層扎手的殼，才摸得到裡頭那顆滾燙的心。「判他死刑吧」，是我這輩子聽過，最兇、也最溫柔的一句護短。</p>`+
`<p class="thought-question">🤔 思考：當全世界都在指責你，一個願意「用最狠的話替你擋下所有人」的人，算不算是站在你這邊？</p>`
      ,
      en:`<p>After I became famous, I was once caught up in a scandal, arrested, the whole thing blown sky-high, public opinion piling on with one voice. At such a moment, a popular celebrity becomes everyone's target, and the whole country waits to see how his family will handle it. The reporters, naturally, cornered my mother too.</p>`+
`<p>Another mother might have wept and pleaded, might have defended her son, might have said "he isn't that kind of person." Not Saki. To the outside world she flung out one cold line: "Sentence him to death!" Sentence him to death. That was what a mother said to the whole world about her own flesh and blood.</p>`+
`<div class="section-break">◆ ◆ ◆</div>`+
`<p>Hearing it for the first time, anyone would freeze. What mother wishes death on her son? But I understood her too well. She had no wish for me to die at all. She had judged it precisely: the more you defend him, the more you weep for him, the hotter the crowd outside will burn. Better that she step out first, say the harshest thing there was to say, strike the fiercest pose possible — so fierce that when even the mother talks like that, what is left for anyone else to add?</p>`+
`<p>That one line, "sentence him to death," was like a slap that snuffed out the whole boiling blaze. With a self-immolating piece of harshness she pried open a small breathing space for me at the storm's center. That was no cursing of her son — that was using her own face, her own name, to take the blow meant for him.</p>`+
`<p>My mother's love was always cut from this cloth — it would never hold you softly, only guard you fiercely. She handed over her deepest tenderness wrapped in her most violent words, and you had to peel back several prickly layers before you could touch the scalding heart inside. "Sentence him to death" is the fiercest — and the most tender — piece of shielding I have heard in my whole life.</p>`+
`<p class="thought-question">🤔 Reflect: When the whole world is condemning you, does someone willing to "take on everyone with the cruelest words" count as being on your side?</p>`
    }
  }
});


Object.assign(CHAPTER_CONTENT, {
  11:{
    num:{zh:`第十一章`,en:`Chapter Eleven`},
    title:{zh:`別讓他太好過`,en:`Don't Let Him Off So Easy`},
    epigraph:{
      zh:`她要媳婦留下來，不是心軟，是不肯讓兒子輕鬆脫身。`,
      en:`She begged her daughter-in-law to stay, not out of softness, but so her son wouldn't get off easy.`
    },
    body:{
      zh:`<p>成了名之後，我把日子過得比誰都亂。桃色的事鬧上了檯面，家裡的婚姻也跟著亮起紅燈，眼看就要散了。這種時候，多數做母親的大概會來勸勸兒子，替他說幾句好話，或者乾脆罵他一頓。佐紀都沒有。她拿起電話，打給的不是我，是我太太。</p>

<p>她勸媳婦：千萬別離婚。理由呢，不是什麼「他其實是愛你的」那種好聽話。她的說法很佐紀——「妳要是就這麼放他走，不是太便宜他了嗎？」意思是，這個男人闖了禍，怎麼能讓他輕輕鬆鬆抽身、換一場清爽的自由？留下來，才有人替她盯著他，讓他一輩子欠著這筆帳。</p>

<div class="section-break">＊ ＊ ＊</div>

<p>我在電話這頭聽人轉述，一時竟不知道該哭還是該笑。這裡頭有母親的世故——她太懂男人那點想逃的心思了；也有她的護短——外人看是護媳婦，骨子裡還是不捨得自己兒子把一個家給敗光了。最深的一層，是那個年代女人的老派信念：一個家，無論多破，都該撐著、不能倒。</p>

<p>她這輩子沒讀過幾本書，卻把人情世故看得比誰都透。她知道，讓一個男人痛痛快快地被原諒，等於什麼也沒教會他。要罰，就得罰得綿長，罰得他日日抬頭見得到。所謂「別讓他太好過」，說穿了，是她替我留下的一根拴繩——怕我這匹脫韁的馬，跑著跑著就把自己給跑丟了。</p>

<p class="thought-question">🤔 思考：母親那句「別讓他太好過」，你聽出來的是刻薄，還是一種笨拙到極點的疼愛？</p>`,
      en:`<p>After I made my name, I lived messier than anyone. A scandal spilled into the open, my marriage went red-alert, and it looked ready to fall apart. At a moment like that, most mothers would come plead with their son, put in a few kind words, or just chew him out. Saki did none of it. She picked up the phone — and the person she called wasn't me, it was my wife.</p>

<p>She begged her daughter-in-law: whatever you do, don't divorce him. And her reason wasn't some tender line like "he really does love you." It was pure Saki. "If you just let him walk away like that, wouldn't he be getting off far too easy?" Meaning: this man had made a mess, so how could he be allowed to slip out cleanly and trade it all for a nice fresh freedom? Stay, and someone would keep watch over him — someone to make him owe that debt for the rest of his life.</p>

<div class="section-break">◆ ◆ ◆</div>

<p>Hearing it relayed to me from the other end of the line, I honestly didn't know whether to cry or laugh. In it there was a mother's worldliness — she understood a man's little urge to run better than anyone. And there was her instinct to shield her own — outsiders saw her protecting her daughter-in-law, but underneath she simply couldn't bear to watch her son wreck a whole household. The deepest layer was the old-fashioned creed of women of her era: a home, however broken, must be held up and never allowed to collapse.</p>

<p>She'd barely read a book in her life, yet she read people more clearly than anyone. She knew that letting a man be forgiven too pleasantly was the same as teaching him nothing. If there was to be a punishment, it had to be a long one — long enough that he met it every single day. "Don't let him off so easy," stripped bare, was a tether she was leaving on my behalf — afraid that this runaway horse of a son, galloping on and on, would one day lose himself entirely.</p>

<p class="thought-question">🤔 Reflect: In your mother's line "don't let him off so easy," do you hear cruelty — or a love so clumsy it barely knows how to show itself?</p>`
    }
  },
  12:{
    num:{zh:`第十二章`,en:`Chapter Twelve`},
    title:{zh:`梅島的長屋`,en:`The Tenement in Umejima`},
    epigraph:{
      zh:`那間長屋窄得容不下一張像樣的桌子，卻裝得下一整個吵吵鬧鬧的家。`,
      en:`The tenement was too narrow for a decent table, yet somehow it held one whole, clamorous family.`
    },
    body:{
      zh:`<p>把鏡頭往回拉，拉到一切的起點——足立區的梅島，一間狹窄的木造長屋。那就是我長大的舞台。房子小到什麼程度？一家人擠在裡頭，睡覺得算好位置，吃飯得挨著彼此的胳膊肘。貧窮是這個家的底色，從牆板到地板，從飯桌到棉被，樣樣都寫著這兩個字。</p>

<p>日子怎麼過下去的？靠母親沒日沒夜的內職，一雙手停不下來；也靠大哥重一那份上班族的薪水，一個月一個月地撐著這個家的屋頂。父親菊次郎那點油漆的收入，時有時無，還常常先進了酒館。真正把這個家扛在肩上的，是母親和大哥。</p>

<div class="section-break">＊ ＊ ＊</div>

<p>可你要是以為這樣的家整天愁眉苦臉，那就錯了。長屋窄，聲音卻大。兄姊各有各的脾氣，湊在一塊兒永遠有得吵、有得笑。誰又搶了誰的東西，誰又惹哭了誰，誰在角落偷偷唸書、誰在門口大呼小叫——那間小屋子從早到晚沒安靜過。貧窮把我們塞得那麼近，近到連喘氣都聽得見彼此。</p>

<p>後來我走過很多地方，住過比那長屋大上幾十倍的房子，卻再沒住過那麼熱鬧的家。我漸漸明白，這本回憶錄裡所有的笑聲和眼淚，全是從梅島那間擠得不能再擠的長屋裡長出來的。要說我是從哪裡來的——就是從那裡。窮得叮噹響，卻吵得暖烘烘。</p>

<p class="thought-question">🤔 思考：把你養大的那個「家」，若用一個聲音來記住它，會是什麼聲音？</p>`,
      en:`<p>Let me pull the camera back — all the way to where everything began: Umejima, in Adachi, a narrow wooden tenement. That was the stage I grew up on. How small was it? A whole family crammed inside, where sleeping meant claiming a good spot and eating meant knocking elbows with the person beside you. Poverty was the base coat of that house — from the wall boards to the floor, from the dinner table to the quilts, every surface spelled out those two words.</p>

<p>How did we get by? On my mother's piecework, day and night, her hands never still; and on my eldest brother Shigekazu's salaryman wages, month after month holding up the roof over that home. Whatever Kikujiro earned from his paint jobs came and went, and often went to the tavern first. The ones who truly carried the household on their shoulders were my mother and my eldest brother.</p>

<div class="section-break">◆ ◆ ◆</div>

<p>But if you imagine such a home wore a long face all day, you'd be wrong. The tenement was narrow, but the noise was loud. My brothers and sister each had their own temper, and thrown together there was always something to quarrel over and something to laugh at. Someone grabbed someone's things, someone made someone cry, someone was studying in a corner while someone else hollered by the door — that little house was never quiet from morning to night. Poverty packed us so close that we could hear each other breathe.</p>

<p>Later I traveled to many places and lived in houses dozens of times bigger than that tenement, yet I never again lived in a home that lively. Slowly I came to understand that every laugh and every tear in this memoir grew straight out of that cramped-beyond-cramping tenement in Umejima. If you ask where I came from — it was there. Poor enough to rattle, yet loud enough to keep you warm.</p>

<p class="thought-question">🤔 Reflect: If you had to remember the home that raised you by a single sound, what sound would it be?</p>`
    }
  },
  13:{
    num:{zh:`第十三章`,en:`Chapter Thirteen`},
    title:{zh:`跟在保時捷後面的計程車`,en:`The Taxi Behind the Porsche`},
    epigraph:{
      zh:`我買了跑車，卻坐在計程車裡，只為了看看自己開跑車有多神氣。`,
      en:`I bought a sports car, then rode in a taxi behind it — just to see how splendid I looked driving it.`
    },
    body:{
      zh:`<p>後來我發達了。有了名氣，也有了錢，做的頭一件蠢事，就是買了一台保時捷。閃亮亮的跑車，停在那兒，光看就讓人得意。我心想，這下可威風了，我北野武也開得起這種車了。</p>

<p>可開著開著，我發現一個要命的問題：坐在駕駛座上，我根本看不到自己開跑車的帥樣。車是我在開沒錯，可那副「有錢名人開保時捷」的神氣模樣，全世界都看得到，就我自己看不到。這台車最風光的一面，偏偏對車主是隱形的。</p>

<div class="section-break">＊ ＊ ＊</div>

<p>於是我想出一個絕妙的辦法。我叫朋友替我開那台保時捷，自己則坐上一輛計程車，遠遠跟在後頭。就這樣，我坐在計程車裡，眼睛盯著前面那台閃亮的跑車，心滿意足地欣賞著——你看看，那是我的保時捷，開得多神氣啊。</p>

<p>做完這件事，我忽然愣住了。這不就是我爸嗎？那個買一只金印戒指自鳴得意、什麼沒用的東西都要買來充場面的菊次郎。我坐在計程車裡跟著自己的跑車跑，跟他當年戴著戒指到處給人看，根本是同一副德性。我笑著搖頭：我果然繼承了菊次郎的血脈。那點滑稽的虛榮，逃是逃不掉了。</p>

<p class="thought-question">🤔 思考：你身上有沒有一個曾經最想擺脫、如今卻認得出來是「他們給的」的小習慣？</p>`,
      en:`<p>Later I made it. I had fame, I had money, and the first foolish thing I did was buy a Porsche. A gleaming sports car — just parked there, the sight of it made me smug. Look at me, I thought, Takeshi can afford a car like this now.</p>

<p>But as I drove it around, I hit a fatal problem: sitting in the driver's seat, I couldn't actually see how splendid I looked driving a sports car. I was the one driving, sure — but that dashing picture of "rich celebrity in his Porsche" was visible to the whole world and to no one less than me. The car's most glorious side was, of all people, invisible to its owner.</p>

<div class="section-break">◆ ◆ ◆</div>

<p>So I hit on a brilliant solution. I had a friend drive the Porsche for me, and I climbed into a taxi and followed at a distance behind. And there I sat in the back of the cab, eyes fixed on that gleaming sports car up ahead, contentedly admiring it — look at that, that's my Porsche, and doesn't it cut a fine figure.</p>

<p>When it was done, I suddenly froze. Wasn't this exactly my father? Kikujiro, the man who bought a gold signet ring and preened over it, who had to buy every useless thing just to make a show. Me riding in a taxi chasing my own sports car, and him back then wearing that ring around for everyone to see — it was the very same sorry stripe. I laughed and shook my head: I really did inherit Kikujiro's blood. That little streak of ridiculous vanity — there was no escaping it after all.</p>

<p class="thought-question">🤔 Reflect: Is there some small habit in you that you once most wanted to shed, but now recognize as something they handed down?</p>`
    }
  },
  14:{
    num:{zh:`第十四章`,en:`Chapter Fourteen`},
    title:{zh:`覺得父母「好可憐」的那一刻`,en:`The Moment They Seemed Pitiable`},
    epigraph:{
      zh:`你急著逃離他們，卻始終走在他們的屋簷下——直到能替他們心疼，才算真的長大。`,
      en:`You rush to flee them, yet you never leave their eaves — until you can ache on their behalf, you haven't truly grown up.`
    },
    body:{
      zh:`<p>寫到這裡，這本書也該收了。回頭看菊次郎和佐紀，看那間梅島的長屋，看酒瓶、參考書、金戒指、燉了姊姊的雞的那口鍋，我心裡浮起一句話：一個人是不是長大了，其實看他怎麼看待自己的父母。</p>

<p>年少的時候，我們看父母，看到的多半是他們的缺點——父親的懦弱、母親的兇、家裡的窮。我們嫌他們、怕他們、急著離開他們。可是有一天，當你望著父母，心裡第一次冒出「他們好可憐」「他們真是不容易」的念頭時——那一刻，你就邁出了成熟的第一步。</p>

<div class="section-break">＊ ＊ ＊</div>

<p>父母給我們的影響，像一只沉甸甸的行囊，一輩子背在身上。裡頭裝著救過我們命的口糧——那些教養、那些愛、那些讓我們站得住的東西；可同一個袋子裡，也塞著一些得用一生去清、去丟的垃圾——那些傷、那些壞習慣、那些我們發誓不要卻還是學了去的東西。你沒法只留口糧、不要垃圾，因為它們是一起裝進來的。</p>

<p>年輕時我拚了命想逃出這個家、逃離這對父母，跑得越遠越好。跑了大半輩子才明白，我其實從沒真正離開過他們的屋簷——他們的窮、他們的愛、他們的滑稽，一路都罩著我。真正的獨立，不是身體搬出了那間長屋，而是有一天，你終於能體諒他們的苦，能替他們心疼。到了那一天，人在精神上，才算真的長大成人。</p>

<p>菊次郎和佐紀都已經不在了。可每次我做出什麼傻事，坐在計程車裡追自己的跑車的時候，我都覺得他們還在——笑我，也護著我。他們好可憐，也好可愛。而我，終於學會了這麼看他們。</p>

<p class="thought-question">🤔 思考：你有沒有過那樣一個瞬間——忽然覺得父母「好可憐」？那一刻之後，你和他們的關係，變得不一樣了嗎？</p>`,
      en:`<p>Writing this far, the book should draw to a close. Looking back at Kikujiro and Saki, at that tenement in Umejima, at the bottles and the workbooks and the gold ring and the pot that stewed my sister's chicken, one line rises up in me: whether a person has grown up really comes down to how they regard their own parents.</p>

<p>When we're young, we look at our parents and mostly see their flaws — a father's cowardice, a mother's fierceness, the poverty of the house. We resent them, we fear them, we're desperate to get away. But one day, when you look at your parents and for the first time the thought surfaces — "how pitiable they are," "how hard it was for them" — in that moment, you've taken your first step toward growing up.</p>

<div class="section-break">◆ ◆ ◆</div>

<p>The influence our parents leave us is like a heavy pack we carry on our backs all our lives. Inside are the rations that once saved us — the upbringing, the love, the things that let us stand on our own two feet. But packed into the very same bag is some garbage we'll spend a lifetime clearing out and throwing away — the wounds, the bad habits, the things we swore we'd never take on yet learned all the same. You can't keep only the rations and refuse the garbage, because they were packed in together.</p>

<p>In my youth I fought with everything to escape that home, to flee that pair of parents, the farther the better. It took me most of a lifetime to see that I'd never actually left their eaves at all — their poverty, their love, their absurdity had sheltered me the whole way. True independence isn't your body moving out of that tenement; it's the day you can finally understand their hardship, the day you can ache on their behalf. On that day, in spirit, a person has finally grown up.</p>

<p>Kikujiro and Saki are both gone now. But every time I do something foolish — sitting in a taxi chasing my own sports car — I feel they're still here, laughing at me and shielding me all at once. How pitiable they were, and how dear. And I, at last, have learned to see them this way.</p>

<p class="thought-question">🤔 Reflect: Have you ever had that one moment — when your parents suddenly seemed pitiable to you? After that moment, did your relationship with them become something different?</p>`
    }
  }
});


// ==== 附錄：站長心得 ====
Object.assign(CHAPTER_CONTENT, {
  15: {
    num: { zh: '附錄 · 讀者心得', en: 'Appendix · Reader’s Review' },
    title: { zh: '逃不開的血脈，與那只行囊', en: 'The Bloodline You Can’t Escape, and That Baggage' },
    epigraph: { zh: '「焦急想逃離，卻始終在他們的庇護裡——直到能體諒父母的苦，精神獨立才真正到來。」　— 翰林書僮', en: '“You long to flee, yet remain under their shelter — only when you can feel your parents’ hardship does independence of spirit truly arrive.”　— Kun Han Le' },
    body: {
      zh: `
<p><em>這一章整理本站站長翰林書僮（Kun Han Le）於 2021 年寫下的讀後心得，以下為忠實摘要，保留他的重點與體會。</em></p>
<p>站長說，這本書「幾乎全是生活瑣事，讀起來卻一點也不枯燥，反而處處是歡樂與趣味」。他認為關鍵在說故事的人——北野武本身就是個坦率又矛盾的有趣人物，於是那些下町往事，寫來笑淚交織、格外好看。</p>
<div class="section-break">＊ ＊ ＊</div>
<p><strong>他讀到的深層命題。</strong>站長沒有停在趣味上，他點出全書真正的內核：<strong>我們從出身就深受父母影響，想逃離，卻血脈相連。</strong>他借了一個很動人的比喻——父母的影響像一只人生的行囊，裡面<strong>既有救命的口糧，也有得用一生去丟棄的垃圾</strong>。你無從選擇裡面裝了什麼，只能一路上慢慢決定要留下什麼、丟掉什麼。</p>
<p><strong>他最被打動的一句。</strong>他特別記下北野武對「成熟」的定義：<strong>一個人是不是長大，看他怎麼看待父母；當你開始覺得他們「好可憐」「很不容易」，就是邁向成熟的第一步。</strong>站長由此生出自己的體會：親子關係的本質，是「焦急想逃離、卻始終受庇護，直到能真正獨立、體諒父母苦心時，精神上的獨立才真正來臨」。</p>
<div class="section-break">＊ ＊ ＊</div>
<p><strong>他對北野武的觀察。</strong>站長認為，北野武骨子裡其實是個悲觀的人——但也正因為悲觀，他反而更貼近生活本身的荒謬。那種「看透了卻還是笑著過」的態度，讓這本看似雜記的小書，藏著意外的重量。</p>
<p><strong>他的結論。</strong>《菊次郎與佐紀》表面上只是一個窮家庭的笑鬧回憶，實則在談血脈傳承與代際影響這個誰都逃不掉的課題。站長把它讀成了一面鏡子——照見北野武的父母，也照見我們自己與父母之間，那份又想逃、又割不斷的牽連。</p>
<p class="thought-question">🤔 思考：用站長的問題問自己——父母交給你的那只行囊裡，哪些是你想一生帶著的口糧，哪些是你正努力放下的重量？</p>
`,
      en: `
<p><em>This chapter draws together the site owner Kun Han Le’s review, written in 2021. What follows is a faithful condensation, keeping his points and his reflections.</em></p>
<p>He says the book is “almost entirely everyday trifles, yet never dull to read — full of joy and fun on every page.” The key, he argues, is the storyteller: Takeshi himself is a frank, contradictory, interesting man, so those downtown memories come out woven of laughter and tears, and remarkably good to read.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>The deeper theme he found.</strong> He does not stop at the fun; he names the book’s true core: <strong>from birth we are deeply shaped by our parents, and though we long to flee, we are bound by blood.</strong> He borrows a moving metaphor — a parent’s influence is like a piece of life’s baggage, holding <strong>both life-saving rations and garbage you spend a lifetime discarding</strong>. You cannot choose what was packed inside; you can only decide, along the way, what to keep and what to throw out.</p>
<p><strong>The line that moved him most.</strong> He especially noted Takeshi’s definition of maturity: <strong>whether a person has grown up is measured by how they regard their parents; the day you begin to find them “pitiable,” to feel how hard it was for them, is the first step toward maturity.</strong> From this he drew his own reflection: the essence of the parent-child bond is that you anxiously long to flee yet remain sheltered, and only when you can truly stand alone and feel your parents’ pains does independence of spirit finally arrive.</p>
<div class="section-break">◆ ◆ ◆</div>
<p><strong>His read on Takeshi.</strong> He sees Takeshi as, at heart, a pessimist — but it is precisely that pessimism that brings him closer to life’s own absurdity. That stance of “seeing through it all and still laughing your way through” gives this slight, scattered-seeming book an unexpected weight.</p>
<p><strong>His conclusion.</strong> On the surface Kikujiro and Saki is just a poor family’s comic reminiscence; underneath, it is about the inescapable subject of bloodline and generational influence. He reads it as a mirror — reflecting Takeshi’s parents, and reflecting too the tie between ourselves and our own parents, the one we want to flee and yet cannot cut.</p>
<p class="thought-question">🤔 Reflect: Ask yourself, in his words — in the baggage your parents handed you, which are the rations you want to carry for life, and which is the weight you are working to set down?</p>
`
    }
  }
});

