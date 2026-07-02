// ============================================
// 半生緣 · 沉浸式閱讀
// 資料與互動邏輯
// 註：各章「正文」為情節精華重述（改寫），非原著文字。
// ============================================

// ============================================
// DATA — 章節目錄
// ============================================
const CHAPTERS = [
  { id: 1,  group: "卷一 · 初識", title: "三個人的午飯", pages: "1-16",    reflectQ: "世鈞、叔惠、曼楨三人的性格在第一次同桌吃飯時就已分出輪廓。你從哪些細節看出他們日後命運的不同？" },
  { id: 2,  group: "卷一 · 初識", title: "一隻遺落的手套", pages: "17-30",  reflectQ: "世鈞替曼楨保管手套這個小動作，藏著怎樣的情意？張愛玲為何偏愛用這類細小的物件來寫愛情？" },
  { id: 3,  group: "卷一 · 初識", title: "曼楨的家世", pages: "31-46",     reflectQ: "曼楨坦然說出家裡靠姊姊做舞女供養，世鈞不以為意。這份坦然與體諒，後來為什麼反而成了悲劇的伏筆？" },
  { id: 4,  group: "卷一 · 初識", title: "看一場電影", pages: "47-60",     reflectQ: "叔惠在三人之間像是潤滑劑，也像是另一條情感線的起點。你怎麼看他的角色？" },
  { id: 5,  group: "卷一 · 初識", title: "南京的家", pages: "61-78",       reflectQ: "世鈞回到南京的大宅，門第與規矩立刻浮現。家庭對他而言，是依靠還是枷鎖？" },
  { id: 6,  group: "卷二 · 暗湧", title: "叔惠與翠芝", pages: "79-94",     reflectQ: "叔惠與翠芝彼此傾心，卻誰也不肯先開口。是什麼讓兩個相愛的人主動選擇了錯過？" },
  { id: 7,  group: "卷二 · 暗湧", title: "定情", pages: "95-110",         reflectQ: "這是全書最溫暖的一章。當幸福看起來唾手可得時，你是否已隱隱感到不安？這種「甜蜜的預兆」如何強化了後面的悲劇？" },
  { id: 8,  group: "卷二 · 暗湧", title: "父親的病", pages: "111-128",    reflectQ: "沈嘯桐因曼璐的舞女身世而反對婚事。門第偏見如何借「長輩的關愛」之名行使？世鈞的沉默又該如何評價？" },
  { id: 9,  group: "卷二 · 暗湧", title: "曼璐的婚姻", pages: "129-146",   reflectQ: "曼璐嫁給祝鴻才，是歸宿還是另一座牢籠？她年輕時的犧牲，如何一步步把她推到今天？" },
  { id: 10, group: "卷二 · 暗湧", title: "舊人張豫瑾", pages: "147-164",   reflectQ: "張豫瑾的重現，喚醒了曼璐對青春的留戀，也點燃了她對妹妹的嫉妒。嫉妒是如何在一個受過傷的人心裡長成惡念的？" },
  { id: 11, group: "卷三 · 驚變", title: "姊姊的毒計", pages: "165-182",   reflectQ: "曼璐設計犧牲親妹妹來鞏固自己的婚姻。她究竟是純粹的加害者，還是同樣被吞噬的受害者？" },
  { id: 12, group: "卷三 · 驚變", title: "囚", pages: "183-200",         reflectQ: "曼楨被囚於樓上，呼救無門。在那個年代，一個女子的求救為何如此輕易就被整個家庭與社會吞沒？" },
  { id: 13, group: "卷三 · 驚變", title: "世鈞尋人", pages: "201-218",    reflectQ: "世鈞站在謊言面前選擇了相信最壞的版本，黯然離去。如果他再多追問一句，命運會不會不同？「優柔」在這裡造成了什麼？" },
  { id: 14, group: "卷三 · 驚變", title: "逃", pages: "219-236",         reflectQ: "曼楨逃出虎口，卻把孩子留在了身後。劫後餘生的她，為什麼說「活下去」本身就成了最沉重的事？" },
  { id: 15, group: "卷四 · 蒼涼", title: "各自的婚姻", pages: "237-256",   reflectQ: "世鈞娶了翠芝，兩人都清楚彼此心裡另有其人。這樁「正確」卻不相愛的婚姻，比悲劇更令人難受的地方在哪裡？" },
  { id: 16, group: "卷四 · 蒼涼", title: "為母", pages: "257-276",       reflectQ: "曼楨為了孩子，竟嫁給了她最痛恨的祝鴻才。母愛在這裡是救贖還是另一重囚禁？你能理解她的選擇嗎？" },
  { id: 17, group: "卷四 · 蒼涼", title: "重逢", pages: "277-296",       reflectQ: "十四年後重逢，真相終於說開——原來都是誤會，原來彼此從未變心。知道真相，究竟是釋懷還是更深的殘忍？" },
  { id: 18, group: "卷四 · 蒼涼", title: "回不去了", pages: "297-316",    reflectQ: "「我們回不去了」——回不去的到底是愛情，還是那段年輕、那段時光？這個結尾為什麼比生離死別更蒼涼？" },
];

// ============================================
// DATA — 人物
// ============================================
const CHARACTERS = [
  {
    id: 'manzhen', name: '顧曼楨', family: 'gu', role: '女主角',
    icon: '🌧️', color: '#c79783',
    desc: '上海一家工廠的職員，靠自己的勞動立足，聰慧、清醒而有韌性。與沈世鈞相愛，卻被姊姊的毒計與時代生生拆散。',
    analysis: '曼楨是張愛玲筆下少見的「自立的新女性」——她讀過書、有工作、有主見，本該掌握自己的人生。然而正是這樣一個清醒堅強的女子，最終仍逃不過被姊姊出賣、被命運擺布的結局。她的悲劇不在於軟弱，而在於：在那個年代，一個女人縱有再強的意志，也敵不過家庭、男權與時代合謀織就的網。她最後為了孩子嫁給仇人、又終究離開，是全書最沉痛的一筆。',
    tags: ['自立', '清醒', '堅韌', '被犧牲'], related: ['沈世鈞','顧曼璐','祝鴻才','顧太太']
  },
  {
    id: 'shijun', name: '沈世鈞', family: 'shen', role: '男主角',
    icon: '🌫️', color: '#5f7c9a',
    desc: '南京殷實人家的次子，在上海工廠做事。溫和、老實、深情，卻也優柔寡斷。對曼楨一往情深，卻在關鍵時刻輕信了謊言。',
    analysis: '世鈞是個好人，卻不是個能在命運面前挺身而出的人。他的溫厚與被動是一體兩面：愛得真，卻也退得快。當曼璐用一個謊言把曼楨「嫁掉」時，他選擇了相信最壞的版本，黯然退場。張愛玲藉他寫出一種更普遍的人生遺憾——許多錯過並非因為惡，而是因為猶疑、自尊與那一點點不肯追問到底的怯懦。',
    tags: ['深情', '溫厚', '優柔', '被動'], related: ['顧曼楨','許叔惠','石翠芝','沈嘯桐']
  },
  {
    id: 'manlu', name: '顧曼璐', family: 'gu', role: '曼楨之姊',
    icon: '🥀', color: '#b5727a',
    desc: '為了養活寡母與弟妹，年輕時放棄初戀去當舞女。年老色衰後嫁給投機商人祝鴻才，為固寵竟設計犧牲了親妹妹。',
    analysis: '曼璐是全書最複雜、最令人不忍的人物。她既是加害者——親手把妹妹推入火坑；又是徹底的受害者——她的青春、愛情、尊嚴早已被「養家」二字一寸寸耗盡。當她意識到自己付出一切換來的只是丈夫的厭棄與妹妹的青春對照時，扭曲的妒恨便吞沒了她。她的惡，是被犧牲者反過來去犧牲別人的惡，是這個故事裡最黑也最悲涼的因果。',
    tags: ['犧牲', '舞女', '妒恨', '加害與受害'], related: ['顧曼楨','祝鴻才','張豫瑾','顧太太']
  },
  {
    id: 'shuhui', name: '許叔惠', family: 'shen', role: '世鈞摯友',
    icon: '🍂', color: '#c79783',
    desc: '世鈞的同事兼好友，開朗健談、聰明自尊。出身清寒，與南京大小姐石翠芝互生情愫，卻因門第與自尊雙雙錯過。',
    analysis: '叔惠是世鈞的對照：一樣的好人，卻多了幾分鋒芒與自尊。正是這份「不肯低頭」的自尊，讓他在面對翠芝時選擇了退卻——他無法忍受被當成「高攀」。他與翠芝的錯過，是曼楨世鈞悲劇的副歌：同樣的相愛，同樣的猶疑，同樣敗給了階級與時代。他後來遠走他鄉，也象徵著那一代理想青年的漂泊。',
    tags: ['開朗', '自尊', '清寒', '錯過'], related: ['沈世鈞','石翠芝']
  },
  {
    id: 'cuizhi', name: '石翠芝', family: 'shen', role: '南京大小姐',
    icon: '🌙', color: '#b5727a',
    desc: '南京石家的千金，沈家世交。任性而敏感，與許叔惠暗生情愫卻不得結合，最終嫁給了並不真心相愛的沈世鈞。',
    analysis: '翠芝表面是嬌縱的大小姐，內裡卻有一份不肯將就的剛烈——她為叔惠退過親，卻終究困在門第裡。她與世鈞的婚姻，是兩個「心裡都裝著別人」的人湊成的一對，外人看來門當戶對，內裡卻是一生的將就。她的存在說明：在那張階級與婚姻的網裡，被犧牲的不只是曼楨，連看似贏家的大小姐也同樣是輸家。',
    tags: ['任性', '敏感', '將就', '門第'], related: ['許叔惠','沈世鈞']
  },
  {
    id: 'zhuhongcai', name: '祝鴻才', family: 'gu', role: '曼璐之夫',
    icon: '🐀', color: '#847b74',
    desc: '投機鑽營的市儈商人，好色而薄情。娶曼璐後又覬覦曼楨，在曼璐的縱容下釀成大禍。',
    analysis: '祝鴻才是這個故事裡最接近純粹之惡的人物，卻被張愛玲寫得格外「平庸」——他不是什麼梟雄，只是個自私、好色、見利忘義的小人物。正是這種平庸的惡，最具毀滅性：它不需要什麼宏大的動機，只憑一點貪欲，就能借著家庭與時代的縱容，毀掉一個女子的一生。',
    tags: ['市儈', '好色', '薄情', '平庸之惡'], related: ['顧曼璐','顧曼楨']
  },
  {
    id: 'gumu', name: '顧太太', family: 'gu', role: '曼楨曼璐之母',
    icon: '🕯️', color: '#c2a36b',
    desc: '顧家寡母，依賴長女曼璐的供養度日。性格軟弱，在女兒的災難面前選擇了沉默與退讓。',
    analysis: '顧太太是舊式家庭中典型的軟弱母親。她不是不愛女兒，而是被生計與恐懼壓彎了脊樑——她依附曼璐而活，便沒有勇氣為曼楨出頭。她的沉默，是壓垮曼楨的最後一根稻草。張愛玲藉她寫出一種令人窒息的共謀：悲劇往往不是某一個惡人造成的，而是一圈人各自的軟弱合力而成。',
    tags: ['寡母', '軟弱', '依附', '沉默'], related: ['顧曼璐','顧曼楨']
  },
  {
    id: 'shenxiaotong', name: '沈嘯桐', family: 'shen', role: '世鈞之父',
    icon: '🏮', color: '#c2a36b',
    desc: '南京沈家家長，經營皮貨生意。年輕時識得舞女曼璐，因而以「門風」為由反對世鈞與曼楨的婚事。',
    analysis: '沈嘯桐代表了壓在這對戀人頭上的「門第」之手。諷刺的是，他反對曼楨的理由——出身風塵的姊姊——恰恰源於他自己年輕時的風流。長輩以維護家風之名，行偏見之實，把上一代的私心化作下一代的枷鎖。他的反對，是世鈞與曼楨之間第一道無法撼動的牆。',
    tags: ['家長', '門第', '偏見', '舊式'], related: ['沈世鈞']
  },
  {
    id: 'yujin', name: '張豫瑾', family: 'gu', role: '曼璐舊情人',
    icon: '🩺', color: '#6f8a82',
    desc: '曼璐少女時代的未婚夫，後成為醫生。多年後重回顧家生活圈，無意間成了曼璐妒恨的引信。',
    analysis: '豫瑾是曼璐「另一種人生」的化身——那個若沒有去當舞女、本該屬於她的安穩歸宿。他的重現像一面鏡子，照出曼璐失去的一切，也照出曼楨仍擁有的青春。他本是無辜的旁觀者，卻在不經意間觸發了曼璐心底最深的怨毒。他的角色提醒我們：悲劇的扳機，有時只是一個善意的人在錯誤的時間出現。',
    tags: ['醫生', '舊情', '無辜', '引信'], related: ['顧曼璐','顧太太']
  },
  {
    id: 'shentaitai', name: '沈母', family: 'shen', role: '世鈞之母',
    icon: '🪞', color: '#c2a36b',
    desc: '世鈞的母親，慈愛而傳統，一心希望兒子娶門當戶對的翠芝，是促成世鈞婚事的推手之一。',
    analysis: '沈母的「慈愛」是另一種柔性的壓力。她並無惡意，只是把世俗的安穩當作對兒子最好的安排。正是這種以愛為名的安排，與沈嘯桐的反對裡應外合，一步步把世鈞推向了並不相愛的婚姻。她代表了家庭溫情中隱含的規訓力量。',
    tags: ['慈愛', '傳統', '安排', '推手'], related: ['沈世鈞','石翠芝']
  },
];

// ============================================
// DATA — 時代軸
// ============================================
const TIMELINE_DATA = [
  { year: '1930年代初', event: '上海工商都會的全盛年代', novel: '世鈞、叔惠、曼楨在上海一家工廠同事，三人結為好友，世鈞漸漸愛上曼楨。', type: 'novel' },
  { year: '相戀之初', event: '都市青年的自由戀愛風氣', novel: '曼楨與世鈞相戀。曼楨坦言家中靠姊姊曼璐做舞女供養，世鈞不以為意。', type: 'novel' },
  { year: '南京省親', event: '舊式門第與新式戀愛的拉扯', novel: '世鈞攜叔惠返南京，叔惠與石翠芝暗生情愫；沈家門第森嚴，悲劇的階級背景浮現。', type: 'novel' },
  { year: '父病反對', event: '長輩之命與門第偏見', novel: '沈嘯桐認出曼楨是舞女曼璐之妹，以門風為由反對婚事，世鈞與曼楨之間出現第一道牆。', type: 'character' },
  { year: '曼璐出嫁', event: '舞女年華老去的歸宿焦慮', novel: '曼璐色衰，為求歸宿嫁給市儈祝鴻才，婚姻不睦，為固寵而動了犧牲妹妹的念頭。', type: 'character' },
  { year: '驚變', event: '家庭內部的傾軋與沉默', novel: '曼璐設計，祝鴻才姦污並囚禁曼楨；曼璐謊稱妹妹另嫁，世鈞誤信而黯然離去。', type: 'character' },
  { year: '離散', event: '個人命運被時代與家庭碾過', novel: '曼楨產子後逃出，隱姓埋名獨自求生；世鈞在家人撮合下娶了翠芝，貌合神離。', type: 'novel' },
  { year: '1937 抗戰爆發', event: '七七事變，山河離亂', novel: '戰火使人事更加飄零，眾人各自天涯。叔惠遠走他鄉，曼楨在亂世中為孩子委身祝家。', type: 'history' },
  { year: '為母委身', event: '亂世中女性的卑微與堅忍', novel: '曼璐病死，曼楨為了被留在祝家的孩子，竟嫁給最痛恨的祝鴻才，後祝家敗落終得脫身。', type: 'character' },
  { year: '1945 抗戰勝利', event: '戰爭結束，故人重聚', novel: '勝利後世鈞與曼楨在上海重逢，當年被瞞的真相終於說開——原來都是誤會。', type: 'history' },
  { year: '訣別', event: '時間是最無情的距離', novel: '真相大白卻已太遲。曼楨輕聲說「我們回不去了」；叔惠與翠芝亦在重逢中確認了當年的錯過。', type: 'novel' },
];

// ============================================
// DATA — 主題
// ============================================
const THEMES = [
  {
    id: 'time', icon: '🕰️', title: '時間與錯過', subtitle: '半生緣，一句回不去',
    color: '#c79783',
    intro: '時間是這部小說真正的主角，也是最殘忍的反派。',
    body: '<p>張愛玲在開篇就點明：日子過得真快，對中年以後的人，十年八年不過彈指；可對年輕人，三年五年就是一生一世。《半生緣》寫的正是這種時間的不對等——年輕時揮霍的一點猶疑、一個謊言、一次沉默，到了中年回頭看，已成了無法跨越的半生。</p><p>全書的悲劇不靠生離死別來完成，而靠「時間」一點一點把人磨蝕。等到真相說開，愛情其實還在，可那段年輕、那段時光已經回不去了。這比任何狗血的變心都更令人心碎。</p><div class="theme-quote">「我們再也回不去了。」</div><p>回不去的，從來不只是愛情，更是那個還相信來日方長的自己。</p>',
    chapters: ['7','13','17','18']
  },
  {
    id: 'sister', icon: '🥀', title: '姊妹與犧牲', subtitle: '被犧牲者如何成為加害者',
    color: '#b5727a',
    intro: '曼璐與曼楨這對姊妹，構成全書最痛的一組對照。',
    body: '<p>曼璐年輕時為養家放棄愛情去做舞女，犧牲了自己的一生；曼楨則因為姊姊的犧牲，得以讀書、工作、自由戀愛。然而當曼璐色衰、婚姻岌岌可危時，她對妹妹尚未褪色的青春生出了扭曲的妒恨——最終，這個被犧牲者親手把妹妹也推下了深淵。</p><p>這是全書最黑暗、也最深刻的因果：犧牲並不會自動換來感激或圓滿，被耗盡的人，有時會反過來去耗盡別人。曼璐既是加害者，也是這個吃人結構裡最徹底的受害者。</p><div class="theme-quote">「她為這個家用盡了自己，到頭來，連自己都認不得了。」</div>',
    chapters: ['3','9','10','11']
  },
  {
    id: 'class', icon: '🏮', title: '階級與婚姻', subtitle: '門第這隻看不見的手',
    color: '#c2a36b',
    intro: '壓垮這幾段愛情的，是一張看不見的階級與門第之網。',
    body: '<p>世鈞與曼楨之間，隔著南京沈家的門第與曼璐的舞女出身；叔惠與翠芝之間，隔著清寒與富貴的鴻溝。兩段相愛的人，都不是敗給了第三者，而是敗給了「門不當戶不對」這六個字。</p><p>諷刺的是，最後成婚的世鈞與翠芝，恰恰是兩個「心裡都裝著別人」的人——門第為他們安排了正確的婚姻，卻安排不了愛情。張愛玲冷冷地揭示：在這套秩序裡，連看似贏家的人也是輸家。</p><div class="theme-quote">「門當戶對的婚姻，往往只對得起門戶，對不起人。」</div>',
    chapters: ['5','6','8','15']
  },
  {
    id: 'woman', icon: '🌧️', title: '女性的處境', subtitle: '清醒，卻仍被擺布',
    color: '#6f8a82',
    intro: '《半生緣》裡的女性，是中國舊社會女性命運的群像。',
    body: '<p>曼楨自立清醒、曼璐犧牲沉淪、翠芝任性將就、顧太太軟弱依附——四種女性，四種困境，卻指向同一個真相：在那個年代，無論一個女子多麼聰明堅強，最終仍逃不過被家庭、男權與時代擺布的命運。</p><p>曼楨是最尖銳的例子。她有工作、有主見、有反抗的意志，卻依然被囚禁、被出賣、被迫為母而委身仇人。她的悲劇證明：個人的覺醒，敵不過整個結構的合謀。</p><div class="theme-quote">「她什麼都明白，可明白並不能救她。」</div>',
    chapters: ['11','12','14','16']
  },
  {
    id: 'desolation', icon: '🌫️', title: '都市的蒼涼', subtitle: '繁華底下的一層灰',
    color: '#5f7c9a',
    intro: '舊上海的繁華，在張愛玲筆下總罩著一層蒼涼。',
    body: '<p>工廠、弄堂、舞廳、霓虹與電車——三○年代上海的都市圖景在書裡格外鮮活，卻始終籠著一層暮色般的灰。張愛玲的「蒼涼」不是淒厲的悲，而是繁華散盡後的那種冷與空：熱鬧是別人的，孤獨是自己的。</p><p>人物在這座大都會裡擦肩、相愛、失散，城市照舊川流不息，彷彿從不為誰停留。這種「大時代裡小人物的微不足道」，正是張愛玲式蒼涼的核心。</p><div class="theme-quote">「上海的繁華照舊，只是當年的人，散的散，老的老了。」</div>',
    chapters: ['1','4','5','17']
  },
  {
    id: 'fate', icon: '🌙', title: '緣分與宿命', subtitle: '緣，也是一場劫',
    color: '#c79783',
    intro: '書名「半生緣」，本身就是一句對命運的喟嘆。',
    body: '<p>從《十八春》到《半生緣》，書名的更易意味深長——「緣」字裡，既有相遇的甜，也有錯過的劫。曼楨與世鈞、叔惠與翠芝，都是有緣相識、無緣到老。緣分把人引到一處，宿命又把人推向各方。</p><p>張愛玲並不宣揚消極的宿命論，她寫命運，是為了逼問：在那一個個看似偶然的岔口——一個謊言、一次猶疑、一場戰亂——人到底有沒有別的選擇？答案的曖昧，正是這本書綿長餘味的來源。</p><div class="theme-quote">「半生的緣分，原來只夠用來懷念，不夠用來廝守。」</div>',
    chapters: ['2','7','13','18']
  },
];

// ============================================
// DATA — 金句（短句引用 + 評析）
// ============================================
const QUOTES = [
  {
    text: '我們再也回不去了。',
    source: '第十八章 · 重逢之後',
    analysis: '全書的題眼，也是中國現代文學最著名的句子之一。它的殘忍在於：回不去的並不是因為不愛了，而是因為時間已經過去。當愛情仍在、人卻已老，這句平靜的話比任何聲嘶力竭的控訴都更令人心碎。'
  },
  {
    text: '日子過得真快，對於中年以後的人，十年八年都好像是指顧之間的事；可是對於年輕的人，三年五年就可以是一生一世。',
    source: '第一章 · 開篇',
    analysis: '張愛玲用時間的「不對等」為全書定調。年輕時揮霍的猶疑與沉默，看似只是三年五年，回頭卻已是半生。這種對時間的清醒體認，是整部小說蒼涼感的源頭。'
  },
  {
    text: '她為這個家用盡了一切，可這個家，並不曾真正心疼過她。',
    source: '第九章 · 曼璐的婚姻（情節重述）',
    analysis: '寫盡曼璐這個「被犧牲者」的悲哀。她以青春和尊嚴換來全家的溫飽，卻換不來一句真心的體諒。理解了這份委屈，才能理解她日後何以墮入妒恨——這正是張愛玲「因為懂得，所以慈悲」的筆法。'
  },
  {
    text: '門當戶對的婚姻，對得起門戶，卻對不起人。',
    source: '第十五章 · 各自的婚姻（主題提煉）',
    analysis: '世鈞與翠芝的結合，是兩個心裡都裝著別人的人湊成的「正確」婚姻。這句話揭穿了舊式婚姻的荒謬：它用門第的算盤，犧牲了兩個人一生的真心。'
  },
  {
    text: '他知道她是不會變心的，可是他寧願相信她變了心，因為那樣，他就可以心安理得地走開。',
    source: '第十三章 · 世鈞尋人（情節重述）',
    analysis: '一針見血地點出世鈞性格中的怯懦。許多錯過並非源於惡意，而是源於人不肯追問到底的軟弱——相信最壞的版本，反而成了逃避的藉口。'
  },
  {
    text: '上海的繁華照舊，只是當年一同看戲的人，散的散，老的老了。',
    source: '第十七章 · 舊地重逢（情節重述）',
    analysis: '張愛玲式蒼涼的典型句法：以城市的「不變」反襯人事的「全變」。繁華是背景，凋零才是主題；熱鬧愈盛，孤獨愈深。'
  },
];

// ============================================
// DATA — 通用思考題
// ============================================
const REFLECTION_QUESTIONS = [
  '如果世鈞當年再多追問一句，或曼楨的信能順利寄出，這場悲劇是否就能避免？你認為這是「命運」還是「性格」造成的？',
  '曼璐究竟是加害者還是受害者？你能否同時恨她又同情她？',
  '「我們回不去了」回不去的到底是什麼？只是愛情嗎？',
  '在這個故事裡，真正拆散曼楨與世鈞的，是某一個壞人，還是一整套制度與人性的軟弱？',
  '曼楨為了孩子嫁給仇人祝鴻才——這個選擇你能理解嗎？母愛在這裡是救贖還是另一重囚禁？',
  '叔惠與翠芝的錯過，和曼楨與世鈞的悲劇，本質上是同一回事嗎？',
  '張愛玲為何把書名從《十八春》改為《半生緣》？這個改動透露了她怎樣的用意？',
  '世鈞的「溫厚」與「優柔」是一體兩面嗎？一個太好的人，會不會反而傷人最深？',
  '小說裡的女性各有各的困境。你覺得誰的命運最令你不忍？為什麼？',
  '如果這個故事發生在今天，曼楨還會走到同樣的結局嗎？哪些枷鎖已經鬆動，哪些仍然存在？',
  '張愛玲說「因為懂得，所以慈悲」。她對筆下這些「壞人」，懷著怎樣一種理解？',
  '比起轟轟烈烈的生離死別，這種「明明相愛卻錯過半生」的遺憾，為什麼更讓人難以釋懷？',
];

// ============================================
// DATA — 各章正文（情節精華重述，原創改寫）
// ============================================
const CHAPTER_CONTENT = {
  1: { num: '第一章', title: '三個人的午飯', epigraph: '「日子過得真快——對年輕的人，三年五年就可以是一生一世。」', body: `
<p>那是一九三○年代的上海，一座永遠在響著電車鈴與汽笛聲的大都會。沈世鈞與許叔惠在同一家工廠裡做事，兩個年輕人脾性不同，卻成了極好的朋友。世鈞老實寡言，凡事先在心裡盤算三分；叔惠卻是個爽利人，嘴上不饒人，心思也快。</p>
<p>工廠裡還有一位女同事，叫顧曼楨。她不施脂粉，衣著樸素，做起事來卻乾淨俐落。三個年輕人漸漸熟了，常常一道到附近的小館子吃午飯。一張舊木桌，幾樣小菜，他們在油膩的飯香裡說笑、爭辯，把一日裡最鬆快的半個鐘頭留給了彼此。</p>
<div class="section-break">＊ ＊ ＊</div>
<p>世鈞起初並沒太留意這位顧小姐。可是日子久了，他發現曼楨與他見過的那些女子都不一樣——她不嬌氣，不做作，靠自己的雙手吃飯，談起時事與書本也自有一番見識。她笑起來的時候，眼睛裡有一種清亮的東西，像是雨後的天光。</p>
<p>叔惠是個促狹的人，早把世鈞那點不自覺的留心看在眼裡，時常拿話來逗他。世鈞只紅了臉，含混過去，心裡那一點說不清的東西，卻一日深似一日。</p>
<p>他們都還年輕，只當來日方長，當這樣熱熱鬧鬧的午飯會一直吃下去。誰也不曾想到，許多年後再回頭，這幾頓尋常的午飯，竟成了一生裡最明亮、最回不去的時光。</p>
<p class="thought-question">🤔 思考：三個人的性格在第一頓飯裡就已分出輪廓。你從哪些細節，預感到了他們日後不同的命運？</p>
` },
  2: { num: '第二章', title: '一隻遺落的手套', epigraph: '「有些心事，是藏在一件小東西裡，自己也說不出口的。」', body: `
<p>冬天到了，上海的風颳在臉上像刀子。一次吃完飯，曼楨匆匆走了，把一隻手套落在了桌上。世鈞拿起那隻還帶著微溫的舊手套，原想立刻追上去還她，腳下卻莫名遲疑了一下，到底沒追。</p>
<p>那隻手套，他便替她收著。藏在抽屜裡，過幾日拿出來看一看，心裡有一種說不出的甜，又有一點自己也覺得可笑的鄭重。他知道這不過是一隻舊手套，可它彷彿是曼楨留在他身邊的一點什麼。</p>
<div class="section-break">＊ ＊ ＊</div>
<p>後來他到底是還了，卻是挑了個下雪的傍晚，特地送她回家。兩人並肩走在弄堂裡，誰也沒說幾句話，腳步聲在青石板上一下一下地響。世鈞覺得這樣的沉默比什麼都好——好像有許多話，都不必說出口，彼此也都明白了。</p>
<p>張愛玲寫愛情，向來不愛用什麼海誓山盟，偏愛這樣細小的物件、瑣碎的時刻。一隻手套、一段並肩的路、一場無話的雪，便把兩個年輕人之間那層薄薄的、卻怎麼也化不開的情意，寫得明明白白。</p>
<p>世鈞那天回去，在燈下坐了很久。他想，他大約是真的喜歡上這個女子了。</p>
<p class="thought-question">🤔 思考：世鈞替曼楨保管一隻手套這樣的小動作，藏著怎樣的情意？為什麼這類細節，比直白的告白更動人？</p>
` },
  3: { num: '第三章', title: '曼楨的家世', epigraph: '「她說得那樣坦然，倒叫人不知該怎樣心疼她才好。」', body: `
<p>相熟之後，曼楨並不瞞他自己的身世。她家境清寒，父親早逝，上有寡母，下有一串弟妹。一家子的生計，這些年全靠著大姊顧曼璐——曼璐做的是舞女。</p>
<p>說這話的時候，曼楨神色平靜，沒有半分遮掩，也沒有半分自憐。她只是把它當作一樁事實說了出來。世鈞聽著，心裡非但沒有半點輕視，反倒更敬重她幾分——一個在這樣的家裡長大的女子，竟能把自己活得這樣清清白白、有骨氣。</p>
<div class="section-break">＊ ＊ ＊</div>
<p>曼楨對這個姊姊，是又感激又心疼的。她知道曼璐當年是怎樣為了這個家，把自己的青春和體面一寸寸賠了進去。她常說，等她做事多賺些錢，就讓姊姊不必再做那一行，好好嫁個人家。</p>
<p>世鈞被她這份心意打動。他想，曼楨的好，正在於她從不嫌棄自己出身的泥淖，反而要從泥淖裡，把整個家都拔出來。</p>
<p>只是他們都還不知道——曼楨這份對姊姊的體諒與信任，這份「一家人總是向著一家人」的天真，日後竟會成為悲劇最殘忍的伏筆。最親的人，有時恰恰是最防不住的人。</p>
<p class="thought-question">🤔 思考：曼楨坦然說出家世、世鈞毫不介意——這份難得的體諒與信任，後來為何反而成了通往悲劇的那道門？</p>
` },
  4: { num: '第四章', title: '看一場電影', epigraph: '「熱鬧是他們的，可那點熱鬧，後來想起來也是好的。」', body: `
<p>那一段日子是頂快活的。三個人常結伴出去玩——看電影、逛馬路、上小館子。叔惠嘴快，一路插科打諢，把世鈞的木訥和曼楨的矜持都調劑開了。有他在中間，世鈞和曼楨反倒自在，許多不好意思說的話，借著笑鬧，也就近了一層。</p>
<p>有一回三人去看電影，散場出來已是夜裡。霓虹在濕漉漉的馬路上拖出長長的光，電車叮叮噹噹地駛過。曼楨和世鈞走在前頭，叔惠落在後面，識趣地不來打攪。世鈞偷眼看身邊的人，覺得這座喧鬧的大城，這一刻竟是為他一個人靜下來的。</p>
<div class="section-break">＊ ＊ ＊</div>
<p>叔惠是個聰明人，早看出這兩人的情意，樂得成全。可他自己心裡，卻另有一段尚未說出口的事——他是個自尊極重的人，出身又清寒，有些念頭，他連對最好的朋友也不肯吐露。</p>
<p>這一章的笑語愈是溫暖，後面的離散便愈是叫人不忍。張愛玲總是這樣，先把最好的光給你看夠了，再讓你眼睜睜看著它一點點暗下去。</p>
<p>那時他們都只當這樣的好日子是尋常的，是會一直有的。沒有人替這些尋常的快活，多留一張照片、多記一筆。</p>
<p class="thought-question">🤔 思考：叔惠在三人之間像潤滑劑，也像另一條情感線的起點。你怎麼看這個「成全別人、卻說不出自己心事」的人？</p>
` },
  5: { num: '第五章', title: '南京的家', epigraph: '「家是依靠，有時候也是一道牆。」', body: `
<p>年下，世鈞要回南京的老家，便也邀了叔惠同去。沈家在南京是有些根基的人家，開著皮貨店，宅子深、規矩多。一進那座大門，世鈞身上那點在上海養出來的鬆快，便不知不覺收斂了起來——在這裡，他不是工廠裡那個沉默的青年，而是沈家的二少爺。</p>
<p>叔惠頭一回到這樣的人家做客，眼裡看著熱鬧，心裡卻自有一桿秤。富貴是別人的富貴，他清清楚楚地知道自己站在哪裡。</p>
<div class="section-break">＊ ＊ ＊</div>
<p>沈家與南京石家是世交。石家的小姐翠芝，嬌生慣養，性子又任性又敏感，是那種一望便知「大小姐」的人物。長輩們言談間，隱隱有撮合世鈞與翠芝的意思——門當戶對，原是這些人家最看重的四個字。</p>
<p>世鈞心裡只有曼楨，對這些安排自是無意。可他到底是個孝順、又怕事的人，面對長輩的盤算，他不會頂撞，只會沉默。這份沉默，此刻看來無傷大雅，日後卻一寸寸把他推向了不願走的那條路。</p>
<p>南京的這座大宅，門第森嚴，規矩無聲。它不動聲色地提醒著讀者：壓在世鈞與曼楨頭上的，不只是一兩個人的反對，而是一整套看不見、卻無比沉重的東西。</p>
<p class="thought-question">🤔 思考：回到南京的大宅，門第與規矩立刻浮現。對世鈞而言，「家」究竟是依靠，還是一道他不敢撞破的牆？</p>
` },
  6: { num: '第六章', title: '叔惠與翠芝', epigraph: '「兩個都太要強的人，誰也不肯先低那個頭。」', body: `
<p>在南京這些日子，叔惠與石翠芝竟漸漸生出了情愫。翠芝看慣了那些唯唯諾諾的少爺，偏被叔惠的聰明爽利、不卑不亢吸引；叔惠也動了心——可正因為動了心，他反而更加退縮。</p>
<p>叔惠最受不了的，就是被人當成「高攀」。他出身清寒，自尊心又重，一想到自己若與翠芝在一起，旁人會怎樣看、石家會怎樣想，他那份驕傲便先把那點柔情壓了下去。寧可錯過，也不肯被輕看——這是他的剛烈，也是他的怯。</p>
<div class="section-break">＊ ＊ ＊</div>
<p>翠芝那邊，也是個要強的人。她隱隱覺出叔惠的心意，卻也覺出他的退避，便也賭氣似的不肯表露。兩個太要強的人撞在一起，誰都等著對方先開口，結果便是誰也沒開口。</p>
<p>後來翠芝為著別的緣故，退掉了家裡替她議的一門親事。這件事在當時鬧得不小，可她到底沒能等來叔惠的一句話。一段眼看就要開始的情，就這樣硬生生地沒了下文。</p>
<p>叔惠與翠芝的錯過，是曼楨與世鈞悲劇的一段副歌——同樣的相愛，同樣的猶疑，同樣敗給了門第與自尊。張愛玲讓兩條線並行，是要告訴你：在那張網裡，錯過從來不是偶然。</p>
<p class="thought-question">🤔 思考：叔惠與翠芝彼此傾心，卻誰也不肯先開口。是什麼，讓兩個相愛的人主動選擇了錯過？自尊與愛情，為何常常是敵人？</p>
` },
  7: { num: '第七章', title: '定情', epigraph: '「那是他們最好的一段日子，好得叫人不敢相信。」', body: `
<p>從南京回到上海，世鈞與曼楨的感情水到渠成。在一個尋常的日子裡，他們互許了終身。沒有什麼盛大的場面，只是兩個人把心裡藏了許久的話，終於對彼此說明白了——他們要結婚，要在一起，要把往後的日子過成一個家。</p>
<p>那是全書最溫暖、最明亮的一段。曼楨想著，等她和世鈞成了家，就接母親來住，也勸姊姊曼璐早些脫離那一行，尋個安穩的歸宿。她把往後的日子，在心裡一筆一筆地畫好了。</p>
<div class="section-break">＊ ＊ ＊</div>
<p>世鈞也是一樣的歡喜。他知道家裡那一關不好過，可他想，只要兩人一條心，總有辦法。年輕人總是這樣，把「總有辦法」四個字看得比天還大。</p>
<p>可正是這樣的幸福，讀來叫人心驚。張愛玲把這段甜寫得愈足，後面那一刀便剜得愈深。當幸福看起來唾手可得，往往就是命運開始轉身的時候。</p>
<p>他們在這一章裡，是真正快樂過的。後來無論隔了多少年、受了多少難，這一段他們互許終身的日子，到底是真實地存在過——這也成了兩人一生裡，最捨不得、也最回不去的地方。</p>
<p class="thought-question">🤔 思考：這是全書最甜的一章。當幸福看似唾手可得，你是否已隱隱不安？這種「甜蜜的預兆」，如何加倍了後面的悲劇？</p>
` },
  8: { num: '第八章', title: '父親的病', epigraph: '「上一代的私心，常常化作下一代的枷鎖。」', body: `
<p>世鈞的父親沈嘯桐病了，世鈞匆匆趕回南京。在家中,他與父親之間那道由來已久的隔閡，又一次浮了上來。</p>
<p>沈嘯桐年輕時，原是個風流人物，在外頭的場面上，竟認得舞女顧曼璐。當他輾轉知道兒子要娶的，正是這曼璐的妹妹時，他立刻變了臉，以「門風」「家聲」為由，堅決反對這門婚事。</p>
<div class="section-break">＊ ＊ ＊</div>
<p>這裡頭的諷刺，張愛玲寫得不動聲色卻入木三分：沈嘯桐反對曼楨的全部理由——她有一個出身風塵的姊姊——恰恰源於他自己當年的風流。他以維護家風之名，行的卻是掩飾私心、轉嫁偏見之實。上一輩的賬，硬要算到下一輩頭上。</p>
<p>世鈞面對父親的反對，依舊是他那套——不頂撞，不爭辯，只把痛苦悶在心裡。他愛曼楨，可他到底沒有勇氣，當著父親的面把這段感情拚死護住。他的孝順與怯懦，在這一刻成了同一樣東西。</p>
<p>這是橫在兩人之間的第一道牆。牆還沒推倒，更兇險的暗流，已經在曼楨的家裡，悄悄湧起來了。</p>
<p class="thought-question">🤔 思考：沈嘯桐以「門風」反對，理由卻源於他自己的過往。長輩如何借「關愛」之名行偏見之實？世鈞的沉默，又該如何評價？</p>
` },
  9: { num: '第九章', title: '曼璐的婚姻', epigraph: '「她為這個家用盡了一切，這個家卻不曾真心疼過她。」', body: `
<p>鏡頭轉到曼楨的姊姊曼璐身上。曼璐老了——對一個舞女來說，年華老去是最致命的事。她看著鏡子裡漸漸失了光彩的自己，心裡又慌又涼。她急著要替自己尋一個歸宿，趁著還能挑的時候，把後半生託付出去。</p>
<p>她挑中的，是祝鴻才——一個投機鑽營、有幾個臭錢的市儈商人。曼璐並非不知道他的為人，可她已經沒有多少本錢去揀選了。她嫁了過去，想著總算有了個家。</p>
<div class="section-break">＊ ＊ ＊</div>
<p>然而婚後的日子並不如意。祝鴻才好色薄情，發了財便在外頭花天酒地，回到家裡，又嫌曼璐出身低、又老。曼璐用半生青春換來的這個「歸宿」，原來不過是另一座更冷的牢。</p>
<p>更刺心的是,她漸漸發現自己生不出孩子。在那個年代,一個無法生育、又年老色衰的妻子,在丈夫眼裡幾乎一文不值。曼璐感到自己的地位一天天往下沉,而她拚了命也要抓住這個男人——因為這是她最後的依靠了。</p>
<p>讀到這裡，你會明白曼璐的可悲：她為娘家用盡了自己的一生，到頭來，娘家不曾真正心疼她，夫家也不曾真正要她。一個被所有人榨乾的女人，正一步步被逼到絕境。而絕境裡的人，是什麼事都做得出來的。</p>
<p class="thought-question">🤔 思考：曼璐嫁給祝鴻才，是歸宿還是另一座牢籠？她年輕時的犧牲，如何一步步把她推到了今天這步田地？</p>
` },
  10: { num: '第十章', title: '舊人張豫瑾', epigraph: '「他喚醒的不是舊情，是她對自己一生的不甘。」', body: `
<p>就在這時，一個舊人回到了曼璐的世界——張豫瑾。他是曼璐少女時代的未婚夫，那個若不是她去做了舞女、本該與她白頭的人。如今豫瑾成了體面的醫生，因緣際會，又走近了顧家的生活。</p>
<p>豫瑾的出現，像一面鏡子，照出了曼璐失去的一切：那本該屬於她的安穩、體面、被人好好疼著的人生。她看著眼前這個溫文的男人，再想想自己嫁的祝鴻才，心裡那股不甘，幾乎要把她整個人燒穿。</p>
<div class="section-break">＊ ＊ ＊</div>
<p>偏偏這時，曼璐疑心豫瑾屬意的，是年輕鮮活的妹妹曼楨。這個念頭一旦生根，便瘋長成一片毒草。她把對命運的全部怨懟，都錯置到了妹妹身上——憑什麼曼楨可以又年輕、又清白、又有人真心愛著，而她，把一切都賠光了？</p>
<p>豫瑾本是個無辜的旁觀者，他並不知道，自己的出現竟成了點燃一場災難的引信。張愛玲的高明在於：她筆下悲劇的扳機，往往不是什麼大奸大惡，而只是一個善意的人，在錯誤的時間出現在錯誤的地方。</p>
<p>曼璐心裡那條毒蛇，從這一刻起，徹底醒了。她開始盤算一件連她自己都不敢細想的事。</p>
<p class="thought-question">🤔 思考：張豫瑾的重現，喚醒了曼璐對青春的留戀，也點燃了她對妹妹的妒恨。嫉妒，是如何在一個受過傷的人心裡，長成惡念的？</p>
` },
  11: { num: '第十一章', title: '姊姊的毒計', epigraph: '「被犧牲的人，有時會反過來去犧牲別人。」', body: `
<p>曼璐想要一個孩子——確切地說，她想要一個能拴住祝鴻才、鞏固自己地位的孩子。可她自己生不出。一個瘋狂而陰毒的念頭，在她心裡漸漸成了形：讓妹妹曼楨替她「生」這個孩子。</p>
<p>這念頭一旦出口，連她自己都覺得駭人。可是被逼到絕境的人，是會把任何惡念都替自己辯解過去的。她對自己說：當年我為這個家做了那麼多，曼楨享了我的福，如今幫我這一回，又算得了什麼？——她就這樣，把一樁滅絕人倫的事，說成了「應該的」。</p>
<div class="section-break">＊ ＊ ＊</div>
<p>於是她設了局。她藉口自己病重，把曼楨騙到祝家來照看。曼楨念著姊妹情分，毫無防備地來了。當天夜裡，曼璐縱容祝鴻才——這個早就對小姨子起了歹念的男人——闖入了曼楨的房間。</p>
<p>那一夜之後，曼楨被囚禁在了祝家的樓上。她從一個自立清白的女子，瞬間墜入了人間最深的黑暗。而把她推下去的手，不是外人，正是她最信任、最想報答的親姊姊。</p>
<p>這是全書最黑暗的一章。張愛玲讓你看見一個被犧牲者如何變成加害者——曼璐的惡，是從她自己所受的苦裡長出來的。這份因果，比任何單純的壞，都更令人不寒而慄。</p>
<p class="thought-question">🤔 思考：曼璐設計犧牲親妹妹來鞏固婚姻。她究竟是純粹的加害者，還是同樣被這個吃人結構吞噬的受害者？你能同時恨她、又憐她嗎？</p>
` },
  12: { num: '第十二章', title: '囚', epigraph: '「她什麼都明白，可明白並不能救她。」', body: `
<p>曼楨被鎖在祝家樓上的一間屋子裡，與整個世界斷了聯繫。起初她不肯信、不肯認，發瘋似的捶門、嘶喊、抗爭。可這座宅子裡的人，要麼是同謀，要麼是受了曼璐的吩咐，沒有一個肯放她出去。</p>
<p>她想盡辦法要傳一個信出去——給世鈞，給任何能救她的人。她寫的字條被截下，托的人被收買，每一條路都被堵死了。一個清醒、剛強、什麼都看得明白的女子，就這樣眼睜睜看著自己一寸寸沉下去，卻使不上半分力。</p>
<div class="section-break">＊ ＊ ＊</div>
<p>最叫人心寒的，是她母親的態度。顧太太並非不知情，可她軟弱、又依附著曼璐過活，便選擇了沉默和退避。她被支開、被搪塞，也半推半就地讓自己「不知道」。一個母親的沉默，成了壓垮女兒的最後一根稻草。</p>
<p>曼楨後來漸漸明白，這不是哪一個惡人能單獨做成的事——是姊姊的毒、祝鴻才的色、母親的弱、整個家庭的算計，合起來織成了一張網，把她兜頭罩死。在那個年代，一個女子的呼救，竟可以被自己最親的人這樣輕易地吞掉。</p>
<p>她在樓上，數著日子，也數著自己一點點被困死的希望。窗外的上海依舊燈紅酒綠，沒有人知道，這座繁華城裡，有一個女子正被囚在離街市不過幾尺的地方。</p>
<p class="thought-question">🤔 思考：曼楨呼救無門。在那個年代，一個女子的求救，為何能被家庭與社會如此輕易地吞沒？「明白」為什麼救不了她？</p>
` },
  13: { num: '第十三章', title: '世鈞尋人', epigraph: '「他寧願相信她變了心——那樣，他就可以心安理得地走開。」', body: `
<p>另一頭，世鈞發覺曼楨忽然音訊全無，心裡七上八下，四處打聽，終於尋到了祝家。他要見曼楨，要問個明白。</p>
<p>等著他的，是曼璐早已備好的一套謊言。曼璐神色從容地告訴他：曼楨已經另嫁他人了——嫁的正是那位舊相識張豫瑾。為了讓謊言天衣無縫，她甚至退還了當初的信物，把話說得斬釘截鐵。</p>
<div class="section-break">＊ ＊ ＊</div>
<p>世鈞站在那裡，只覺天旋地轉。他何嘗不知道曼楨的為人？他心底分明有個聲音在說：她不會的，她不是這樣的人。可是——人在最痛的時候，往往會選擇相信最壞的版本。因為若曼楨真的變了心，他便可以心安理得地恨她、忘她、走開；可若她沒變心，那這背後的真相，是他不敢去想、也沒有勇氣去掘的。</p>
<p>於是他信了。他帶著滿心的悲憤與屈辱，轉身離去，從此把曼楨從自己的人生裡，硬生生地割了出去。他不知道，就在離他幾尺之遙的樓上，那個他深愛的女子，正被囚著，正在等他。</p>
<p>命運的岔路口，常常只差一句追問。世鈞的優柔，在這一刻釀成了無法挽回的錯。張愛玲冷冷地寫下這一筆——許多人一生的遺憾，並非毀於惡人之手，而是毀於自己那一點不肯追問到底的怯懦。</p>
<p class="thought-question">🤔 思考：世鈞站在謊言前，選擇相信最壞的版本。如果他再多追問一句，命運會不會不同？「優柔」在這裡，造成了怎樣不可挽回的後果？</p>
` },
  14: { num: '第十四章', title: '逃', epigraph: '「劫後餘生，活下去本身就成了最重的事。」', body: `
<p>曼楨終究還是生下了孩子——祝鴻才的兒子。被囚的這段日子，是她一生裡最黑的深淵。可也正是這個孩子的出生，給了她一線逃生的縫隙：生產要住院，她終於得以離開那座囚牢般的宅子。</p>
<p>在醫院裡，她遇上了肯同情她、肯幫她的人。趁著看守鬆懈，曼楨拚著最後一口氣，逃了出去。她終於掙脫了祝家的魔掌——可她的孩子，還留在那座宅子裡。</p>
<div class="section-break">＊ ＊ ＊</div>
<p>逃出來的曼楨，已不是從前那個對未來滿懷憧憬的女子了。她隱姓埋名，獨自在亂世裡求生。世鈞以為她變了心，早已遠去；母親靠不住；姊姊是仇人。她舉目四顧，竟沒有一個可以依靠的人。</p>
<p>她後來說，活下去這件事，本身就成了最沉重的負擔。不是不想死，而是死也需要力氣，也需要一個了斷的理由，而她連這個都沒有了。她只能像一株被連根拔起、又被隨手丟在路邊的草，靠著一點說不清的韌性，硬撐著活下去。</p>
<p>這一章寫盡了亂世女子的孤苦。曼楨的堅強不再是少女時的那種明亮，而是一種被苦難捶打過後、近乎麻木的堅硬。她活了下來，可她的人生，已經被攔腰斬斷了。</p>
<p class="thought-question">🤔 思考：曼楨逃出虎口，卻把孩子留在了身後。劫後餘生的她，為什麼說「活下去」本身就成了最沉重的事？</p>
` },
  15: { num: '第十五章', title: '各自的婚姻', epigraph: '「門當戶對的婚姻，對得起門戶，卻對不起人。」', body: `
<p>世鈞那邊，在家人不停的撮合與自己心灰意冷之下，終於娶了南京石家的小姐翠芝。從門第上看，這是一樁再「正確」不過的婚事——兩家世交，門當戶對，長輩們都稱心如意。</p>
<p>可這樁正確的婚姻，內裡卻是一片荒涼。世鈞心裡始終放不下曼楨；翠芝心裡，也始終惦著那個當年她沒能等到的叔惠。兩個心裡都裝著別人的人，湊成了一對名正言順的夫妻。</p>
<div class="section-break">＊ ＊ ＊</div>
<p>他們之間並沒有什麼劇烈的爭吵，有的只是一種日復一日的、客客氣氣的疏離。同住一個屋簷下，卻像隔著一層怎麼也化不開的霧。這種「貌合神離」的婚姻，比吵鬧的怨偶更叫人難受——因為它連一個可以怪罪的對象都沒有，只能怪命運，怪當初那一點點的猶疑與將就。</p>
<p>而叔惠，早已遠走他鄉。他與翠芝的那段情，也和曼楨世鈞一樣，永遠停在了「差一點」的地方。幾個年輕人，當年那樣鮮活、那樣相愛，如今卻各自被安排進了並不相愛的人生。</p>
<p>張愛玲在這裡揭穿了舊式婚姻最大的荒謬：它用門第的算盤算得精精明明，卻把兩個、四個人一生的真心，全都當作了可以犧牲的零頭。在這套秩序裡，連看似圓滿的「贏家」，其實也都是輸家。</p>
<p class="thought-question">🤔 思考：世鈞娶了翠芝，兩人都清楚彼此心裡另有其人。這樁「正確」卻不相愛的婚姻，比悲劇更令人難受的地方，究竟在哪裡？</p>
` },
  16: { num: '第十六章', title: '為母', epigraph: '「母愛是她最後的救贖，也是她最後的囚牢。」', body: `
<p>歲月又過去了幾年。曼璐到底沒能逃過自己的命——她纏綿病榻，終於死了。這個一生都在犧牲、又一生都在毀人的女子，帶著她的怨與悔，潦草地離開了人世。</p>
<p>曼璐死後，留在祝家的那個孩子——曼楨的親生骨肉——便成了曼楨心上最重的一塊。為了這個孩子，她做了一個旁人難以理解、連她自己都覺得屈辱的決定：她嫁給了祝鴻才，那個毀了她一生、她恨入骨髓的男人。</p>
<div class="section-break">＊ ＊ ＊</div>
<p>她不是不恨。她比誰都恨。可是孩子在祝家，她若要守著孩子，便只有走進這座她曾拚死逃出的牢。母愛在這裡，成了一條最柔軟、也最殘忍的繩索——它一頭是救贖，一頭是囚禁，把曼楨牢牢綁回了原地。</p>
<p>這樁婚姻自然不會有什麼好結果。祝鴻才的本性難移，家道也漸漸敗落。曼楨在這段屈辱的日子裡，把一個母親能忍的都忍盡了。後來，祝家終究是垮了，曼楨也才得以帶著一身的傷痕，從這場噩夢裡真正地脫身。</p>
<p>張愛玲寫女性的犧牲，從不把它寫成崇高的讚歌。曼楨的「為母」，沉痛、卑微，幾乎不近人情，卻又真實得叫人不忍苛責。這就是那個年代，一個母親所能走的、最窄的一條路。</p>
<p class="thought-question">🤔 思考：曼楨為了孩子，竟嫁給了她最痛恨的祝鴻才。母愛在這裡是救贖還是另一重囚禁？你能否理解她這個近乎不近人情的選擇？</p>
` },
  17: { num: '第十七章', title: '重逢', epigraph: '「原來都是誤會，原來彼此從未變心。」', body: `
<p>抗戰勝利了。離亂的歲月過去，飄零的人們陸續回到了上海。就在這座他們當年相愛過的城市裡，世鈞與曼楨，隔了整整十四年，又重逢了。</p>
<p>十四年。當年那個沉默深情的青年，如今已是有家室的中年人；當年那個明亮自立的女子，也早被命運磨去了一身的光彩。他們相對而坐，恍如隔世，一時竟不知從何說起。</p>
<div class="section-break">＊ ＊ ＊</div>
<p>然而話一旦說開，那積壓了十四年的真相，便再也瞞不住了。曼楨把當年的事，一樁樁、一件件，都對世鈞說了——姊姊的毒計、祝家的囚禁、那些她拚命想傳卻傳不出去的信。世鈞這才如夢初醒：原來曼楨從未變心，原來那一切，都是一場被精心編織的謊言。</p>
<p>原來他們彼此，這十四年裡，從來都沒有真正忘記過對方。原來當年只要有一封信寄到、有一句話追問到底，他們本該是廝守一生的人。</p>
<p>知道了真相，並不曾帶來半分釋懷，反而是更深、更鈍的痛。因為這真相只證明了一件事：他們本可以不必如此，是命運與人心的軟弱，白白蹉跎了他們的半生。最殘忍的，從來不是被辜負，而是發現這一切原來都不必發生。</p>
<p class="thought-question">🤔 思考：十四年後真相終於說開——原來都是誤會，原來彼此從未變心。知道真相，究竟是釋懷，還是一種更深的殘忍？</p>
` },
  18: { num: '第十八章', title: '回不去了', epigraph: '「世鈞，我們再也回不去了。」', body: `
<p>千言萬語，到了最後，曼楨只輕輕說了一句：「世鈞，我們回不去了。」</p>
<p>沒有眼淚，沒有控訴，沒有重來的奢望。就是這樣平平靜靜的一句話，卻把兩個人半生的悲歡，都收束在了裡頭。他們之間的愛，其實還在——可是那段年輕、那段時光、那兩個還相信來日方長的人，已經永永遠遠地回不去了。</p>
<div class="section-break">＊ ＊ ＊</div>
<p>回不去的，從來不只是愛情。是十四年的歲月，是各自已成定局的人生，是那個再也喚不回的、年輕的自己。時間是這世上最溫柔、也最無情的距離——它不聲不響，卻能讓近在咫尺的兩個人，永遠隔著一整個半生。</p>
<p>幾乎在同一段時光裡，叔惠也回來了，與翠芝重逢。他們之間，同樣是一段早已錯過的情。兩對人，四顆心，當年都那樣相愛過，最終卻都只落得「半生緣」三個字——有緣相識，無緣到老。</p>
<p>故事在一片蒼涼裡收了尾。沒有人是十惡不赦的壞人，可每個人的一點私心、一點軟弱、一點猶疑，合起來就毀掉了好幾個人的一生。窗外的上海依舊繁華，電車照舊叮噹地駛過，彷彿什麼都不曾發生過。</p>
<p>而那半生的緣分，無論結局多麼蒼涼，到底是真真實實地存在過的。也許這就是張愛玲最後留給我們的一點溫柔——回不去，可那段曾經擁有過的好，誰也奪不走。</p>
<p class="thought-question">🤔 思考：「我們回不去了」——回不去的到底是愛情，還是那段年輕、那段時光？這個結尾，為何比生離死別更蒼涼？</p>
` },
};

// ============================================
// STATE
// ============================================
let currentSection = 'cover';
let currentChapter = 0;
let fontSize = 1.05;
let userNotes = JSON.parse(localStorage.getItem('bsyNotes') || '[]');
let journalEntries = JSON.parse(localStorage.getItem('bsyJournal') || '[]');
let completedChapters = JSON.parse(localStorage.getItem('bsyProgress') || '[]');
let highlightCount = parseInt(localStorage.getItem('bsyHighlights') || '0');
let readingProgress = JSON.parse(localStorage.getItem('bsyReadingProgress') || '{}');
let dayMode = false;

// ============================================
// INITIALIZATION
// ============================================
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loading-screen').classList.add('hidden');
    generateAtmosphere();
    setTimeout(() => {
      document.getElementById('music-overlay').classList.add('visible');
    }, 600);
  }, 1800);
});

window.addEventListener('scroll', () => {
  const nav = document.getElementById('main-nav');
  if (window.scrollY > 200 || currentSection !== 'cover') {
    nav.classList.add('visible');
  } else {
    nav.classList.remove('visible');
  }
  const progressBar = document.getElementById('reading-progress-bar');
  if (currentSection === 'reader') {
    const rc = document.getElementById('reader-content');
    const progress = (rc.scrollTop / (rc.scrollHeight - rc.clientHeight)) * 100;
    progressBar.style.width = Math.min(progress || 0, 100) + '%';
    progressBar.style.display = 'block';
  } else {
    progressBar.style.display = 'none';
  }
});

// ============================================
// NAVIGATION
// ============================================
function navigateTo(section) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(a => a.classList.remove('active'));
  const target = document.getElementById(section);
  if (target) {
    target.classList.add('active');
    currentSection = section;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.querySelectorAll('.nav-link').forEach(a => {
      if (a.dataset.section === section) a.classList.add('active');
    });
    if (section !== 'cover') document.getElementById('main-nav').classList.add('visible');
    const cb = document.getElementById('cover-back'); if (cb) cb.style.display = (section === 'cover') ? 'inline-block' : 'none';
    if (section === 'characters') renderCharacters();
    if (section === 'timeline') renderTimeline();
    if (section === 'reader') renderReader();
    if (section === 'themes') renderThemes();
    if (section === 'quotes') renderQuotes();
    if (section === 'journal') { renderJournal(); populateJournalChapterSelect(); }
  }
}

// ============================================
// COVER ATMOSPHERE — 落葉 + 細雨
// ============================================
function generateAtmosphere() {
  const field = document.getElementById('atmosphere');
  if (!field) return;
  // Falling wutong leaves
  for (let i = 0; i < 18; i++) {
    const leaf = document.createElement('div');
    leaf.className = 'leaf';
    leaf.style.left = Math.random() * 100 + '%';
    const scale = 0.6 + Math.random() * 1.1;
    leaf.style.transform = `scale(${scale})`;
    leaf.style.animationDuration = (8 + Math.random() * 9) + 's';
    leaf.style.animationDelay = (Math.random() * 10) + 's';
    field.appendChild(leaf);
  }
  // Thin rain streaks
  for (let i = 0; i < 30; i++) {
    const rain = document.createElement('div');
    rain.className = 'rain';
    rain.style.left = Math.random() * 100 + '%';
    rain.style.height = (50 + Math.random() * 70) + 'px';
    rain.style.animationDuration = (1.2 + Math.random() * 1.6) + 's';
    rain.style.animationDelay = (Math.random() * 4) + 's';
    field.appendChild(rain);
  }
}

// ============================================
// CHARACTERS
// ============================================
function renderCharacters(filter = 'all') {
  const container = document.getElementById('character-cards');
  if (!container) return;
  const filtered = filter === 'all' ? CHARACTERS : CHARACTERS.filter(c => c.family === filter);
  container.innerHTML = filtered.map(c => `
    <div class="char-card" data-id="${c.id}" onclick="showCharDetail('${c.id}')">
      <div class="char-header">
        <div class="char-avatar" style="background:${c.color}22;border:1px solid ${c.color}55">${c.icon}</div>
        <div>
          <div class="char-name">${c.name}</div>
          <div class="char-role">${c.role}</div>
        </div>
      </div>
      <div class="char-desc">${c.desc}</div>
      <div class="char-tags">${c.tags.map(t => `<span class="char-tag">${t}</span>`).join('')}</div>
      <button class="char-depth-btn" onclick="event.stopPropagation();showCharDetail('${c.id}')">深入了解 ▸</button>
    </div>
  `).join('');
}

function filterCharacters(filter, btn) {
  document.querySelectorAll('.char-filter button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderCharacters(filter);
}

function showCharDetail(id) {
  const c = CHARACTERS.find(ch => ch.id === id);
  if (!c) return;
  const panel = document.getElementById('char-detail-panel');
  const content = document.getElementById('char-detail-content');
  content.innerHTML = `
    <button class="close-btn" onclick="closeCharDetail()">✕</button>
    <h3>${c.icon} ${c.name}</h3>
    <div class="detail-role">${c.role}</div>
    <div class="detail-section"><h4>人物簡介</h4><p>${c.desc}</p></div>
    <div class="detail-section"><h4>深度解讀</h4><p>${c.analysis || '（待補充）'}</p></div>
    <div class="detail-section"><h4>相關人物</h4><p>${c.related.map(r => {
        const rc = CHARACTERS.find(ch => ch.name === r);
        return rc ? `${rc.icon} ${r}` : r;
      }).join(' · ') || '無直接關聯'}</p></div>
    <div class="detail-section"><h4>性格標籤</h4><div class="char-tags">${c.tags.map(t => `<span class="char-tag">${t}</span>`).join('')}</div></div>
  `;
  panel.classList.add('visible');
}

function closeCharDetail() {
  document.getElementById('char-detail-panel').classList.remove('visible');
}

// ============================================
// TIMELINE
// ============================================
function renderTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container || container.children.length > 2) return;
  const items = TIMELINE_DATA.map(t => `
    <div class="timeline-item">
      <div class="tl-dot"></div>
      <div class="tl-content">
        <span class="tl-type ${t.type}">${t.type === 'history' ? '歷史事件' : t.type === 'novel' ? '小說情節' : '人物命運'}</span>
        <div class="tl-year">${t.year}</div>
        <div class="tl-event">${t.event}</div>
        <div class="tl-novel">📖 小說：${t.novel}</div>
      </div>
    </div>
  `).join('');
  container.innerHTML = '<div class="timeline-line"></div>' + items;
  setTimeout(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.2 });
    container.querySelectorAll('.timeline-item').forEach(item => observer.observe(item));
  }, 100);
}

// ============================================
// READER
// ============================================
function renderReader() {
  if (!document.getElementById('chapter-list').children.length) {
    const list = document.getElementById('chapter-list');
    let currentGroup = '';
    CHAPTERS.forEach(ch => {
      if (ch.group !== currentGroup) {
        currentGroup = ch.group;
        const groupDiv = document.createElement('div');
        groupDiv.className = 'chapter-group-title';
        groupDiv.textContent = currentGroup;
        list.appendChild(groupDiv);
      }
      const item = document.createElement('div');
      item.className = 'chapter-item' + (completedChapters.includes(ch.id) ? ' completed' : '') + (currentChapter + 1 === ch.id ? ' active' : '');
      item.id = `ch-item-${ch.id}`;
      item.onclick = () => loadChapter(ch.id);
      item.innerHTML = `
        <div class="ch-num">${completedChapters.includes(ch.id) ? '✓' : ch.id}</div>
        <div class="ch-info">
          <div class="ch-title">${ch.title}</div>
          <div class="ch-pages">第 ${ch.pages} 頁</div>
        </div>
      `;
      list.appendChild(item);
    });
  }
  loadChapter(currentChapter > 0 ? currentChapter : 1);
  updateReadingProgress();
}

function loadChapter(num) {
  currentChapter = num;
  const ch = CHAPTERS[num - 1];
  const content = CHAPTER_CONTENT[num];
  const page = document.getElementById('reader-page');
  page.innerHTML = `
    <div class="chapter-title-block">
      <div class="chapter-num">${content.num}</div>
      <h1 class="chapter-title">${content.title}</h1>
      <div class="chapter-epigraph">${content.epigraph}</div>
    </div>
    <div class="chapter-body" id="chapter-body" style="font-size:${fontSize}rem">${content.body}</div>
    <div class="reader-nav">
      <button onclick="loadChapter(${num > 1 ? num - 1 : 1})" ${num <= 1 ? 'disabled' : ''}>◁ 上一章</button>
      <span class="nav-indicator">${num} / ${CHAPTERS.length}</span>
      <button onclick="loadChapter(${num < CHAPTERS.length ? num + 1 : CHAPTERS.length})" ${num >= CHAPTERS.length ? 'disabled' : ''}>下一章 ▷</button>
    </div>
  `;
  document.querySelectorAll('.chapter-item').forEach(i => i.classList.remove('active'));
  const activeItem = document.getElementById(`ch-item-${num}`);
  if (activeItem) activeItem.classList.add('active');
  if (!completedChapters.includes(num)) {
    completedChapters.push(num);
    localStorage.setItem('bsyProgress', JSON.stringify(completedChapters));
    if (activeItem) { activeItem.classList.add('completed'); activeItem.querySelector('.ch-num').textContent = '✓'; }
    updateReadingProgress();
  }
  readingProgress[num] = true;
  localStorage.setItem('bsyReadingProgress', JSON.stringify(readingProgress));
  renderReflectionQuestions(ch.reflectQ);
  document.getElementById('reader-content').scrollTop = 0;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateReadingProgress() {
  const el = document.getElementById('reading-progress-text');
  if (el) el.textContent = `已讀 ${completedChapters.length} / ${CHAPTERS.length} 章`;
  updateJournalStats();
}

// ============================================
// HIGHLIGHT & ANNOTATION
// ============================================
function highlightText(colorClass) {
  const selection = window.getSelection();
  if (!selection.rangeCount || selection.isCollapsed) {
    alert('請先選取要高亮的文字，再點高亮按鈕。');
    return;
  }
  const range = selection.getRangeAt(0);
  const span = document.createElement('span');
  span.className = `highlight-${colorClass}`;
  span.dataset.highlightId = Date.now();
  try {
    range.surroundContents(span);
    highlightCount++;
    localStorage.setItem('bsyHighlights', highlightCount.toString());
    updateJournalStats();
    selection.removeAllRanges();
  } catch (e) {
    alert('請選取一段「連續」的文字再高亮。');
  }
}

function annotateSelection() {
  const text = window.getSelection().toString();
  if (!text) { alert('請先選取要批註的文字'); return; }
  const note = prompt('請輸入批註內容：');
  if (note) {
    const span = document.createElement('span');
    span.className = 'highlight-yellow';
    span.title = `批註: ${note}`;
    try { window.getSelection().getRangeAt(0).surroundContents(span); } catch (e) {}
    userNotes.push({ chapter: currentChapter, text: text.substring(0, 100), note, time: new Date().toLocaleString() });
    localStorage.setItem('bsyNotes', JSON.stringify(userNotes));
    updateJournalStats();
  }
  document.getElementById('annotation-popup').classList.remove('visible');
}

function bookmarkSelection() {
  const text = window.getSelection().toString();
  if (!text) return;
  userNotes.push({ chapter: currentChapter, text: text.substring(0, 100), note: '★ 收藏', time: new Date().toLocaleString(), bookmarked: true });
  localStorage.setItem('bsyNotes', JSON.stringify(userNotes));
  updateJournalStats();
  document.getElementById('annotation-popup').classList.remove('visible');
}

// Show annotation popup on text selection within reader
document.addEventListener('mouseup', (e) => {
  if (currentSection !== 'reader') return;
  const popup = document.getElementById('annotation-popup');
  const sel = window.getSelection();
  const body = document.getElementById('chapter-body');
  if (sel && !sel.isCollapsed && body && body.contains(sel.anchorNode)) {
    popup.style.left = (e.pageX - 40) + 'px';
    popup.style.top = (e.pageY - 50) + 'px';
    popup.classList.add('visible');
  } else if (!popup.contains(e.target)) {
    popup.classList.remove('visible');
  }
});

// ============================================
// FONT SIZE
// ============================================
function changeFontSize(dir) {
  if (dir === 0) fontSize = 1.05;
  else fontSize = Math.max(0.85, Math.min(1.5, fontSize + dir * 0.1));
  const body = document.getElementById('chapter-body');
  if (body) body.style.fontSize = fontSize + 'rem';
}

// ============================================
// NOTES
// ============================================
function toggleNotesPanel() {
  document.getElementById('reader-notes-panel').classList.toggle('visible');
  renderNotesList();
}

function saveNote() {
  const input = document.getElementById('note-input');
  const text = input.value.trim();
  if (!text) return;
  userNotes.push({ chapter: currentChapter || 1, text: text.substring(0, 200), note: '', time: new Date().toLocaleString() });
  localStorage.setItem('bsyNotes', JSON.stringify(userNotes));
  input.value = '';
  renderNotesList();
  updateJournalStats();
}

function renderNotesList() {
  const list = document.getElementById('notes-list');
  const notes = userNotes.filter(n => n.note === '').sort((a, b) => b.time.localeCompare(a.time));
  list.innerHTML = notes.length === 0
    ? '<p style="color:var(--text-muted);text-align:center;padding:2rem;font-size:0.85rem;">尚無閱讀札記，開始記錄吧</p>'
    : notes.slice(0, 50).map(n => `
      <div class="note-item">
        <div class="note-chapter">第${n.chapter}章 · ${CHAPTERS[n.chapter - 1]?.title || ''}</div>
        <div class="note-text">${n.text}</div>
        <div class="note-time">${n.time}</div>
      </div>
    `).join('');
}

// ============================================
// REFLECTION QUESTIONS
// ============================================
function toggleReflectPanel() {
  const panel = document.getElementById('reflect-panel');
  panel.classList.toggle('visible');
  if (panel.classList.contains('visible') && !document.getElementById('reflect-body').children.length) {
    renderReflectionQuestions(CHAPTERS[currentChapter - 1]?.reflectQ || '');
  }
}

function renderReflectionQuestions(chapterQ) {
  const body = document.getElementById('reflect-body');
  if (!body) return;
  const questions = [chapterQ, ...REFLECTION_QUESTIONS.filter(q => q !== chapterQ).slice(0, 4)].filter(Boolean).slice(0, 5);
  body.innerHTML = questions.map((q, i) => `
    <div class="reflect-question">
      <div class="rq-q">${i + 1}. ${q}</div>
      <textarea class="rq-a" id="rq-${i}" placeholder="寫下你的思考..."></textarea>
      <button class="rq-save" onclick="saveReflection(${i})">儲存思考</button>
      <div class="rq-saved" id="rq-saved-${i}" style="display:none">✓ 已儲存</div>
    </div>
  `).join('');
}

function saveReflection(index) {
  const text = document.getElementById(`rq-${index}`).value.trim();
  if (!text) return;
  userNotes.push({ chapter: currentChapter || 1, text: text.substring(0, 300), note: '💡 思考題回答', time: new Date().toLocaleString() });
  localStorage.setItem('bsyNotes', JSON.stringify(userNotes));
  const saved = document.getElementById(`rq-saved-${index}`);
  if (saved) { saved.style.display = 'block'; setTimeout(() => saved.style.display = 'none', 2000); }
  updateJournalStats();
}

// ============================================
// THEMES
// ============================================
function renderThemes() {
  const grid = document.getElementById('themes-grid');
  if (!grid || grid.children.length) return;
  grid.innerHTML = THEMES.map(t => `
    <div class="theme-card" onclick="this.classList.toggle('expanded')">
      <div class="theme-header">
        <div class="theme-icon" style="background:${t.color}22;border:1px solid ${t.color}44">${t.icon}</div>
        <div class="theme-title-group"><h3>${t.title}</h3><p>${t.subtitle}</p></div>
      </div>
      <div class="theme-body">
        <p>${t.intro}</p>
        ${t.body}
        <div class="theme-chapters">${t.chapters.map(c => `<span>第${c}章</span>`).join('')}</div>
      </div>
    </div>
  `).join('');
}

// ============================================
// QUOTES
// ============================================
function renderQuotes() {
  const container = document.getElementById('quotes-container');
  if (!container || container.children.length) return;
  container.innerHTML = QUOTES.map(q => `
    <div class="quote-card">
      <div class="quote-mark">「</div>
      <div class="quote-text">${q.text}</div>
      <div class="quote-source">—— ${q.source}</div>
      <button class="show-analysis-btn" onclick="this.nextElementSibling.classList.toggle('visible');this.textContent=this.textContent==='收起解析 ▴'?'展開解析 ▸':'收起解析 ▴'">展開解析 ▸</button>
      <div class="quote-analysis">${q.analysis}</div>
    </div>
  `).join('');
}

// ============================================
// JOURNAL
// ============================================
function renderJournal() {
  const c = document.getElementById('journal-entries');
  if (!c) return;
  const entries = [...journalEntries].reverse();
  c.innerHTML = entries.length === 0
    ? '<p style="color:var(--text-muted);text-align:center;padding:3rem;font-size:0.9rem;">還沒有札記，去閱讀時寫一條吧</p>'
    : entries.map((e, i) => `
      <div class="journal-entry">
        <div class="entry-header">
          <span class="entry-chapter">第${e.chapter}章 · ${CHAPTERS[e.chapter - 1]?.title || ''}</span>
          <span class="entry-date">${e.time}</span>
        </div>
        <span class="entry-type ${e.type}">${e.type === 'thought' ? '💭 感悟' : e.type === 'question' ? '❓ 疑問' : '🔗 關聯'}</span>
        <div class="entry-text">${e.text}</div>
        <button class="entry-delete" onclick="deleteJournalEntry(${journalEntries.length - 1 - i})">刪除</button>
      </div>
    `).join('');
  updateJournalStats();
}

function saveJournalEntry() {
  const text = document.getElementById('entry-text').value.trim();
  const chapter = parseInt(document.getElementById('entry-chapter').value);
  const type = document.getElementById('entry-type').value;
  if (!text) { alert('請先寫點什麼'); return; }
  journalEntries.push({ chapter: chapter || 1, type, text, time: new Date().toLocaleString() });
  localStorage.setItem('bsyJournal', JSON.stringify(journalEntries));
  document.getElementById('entry-text').value = '';
  renderJournal();
}

function deleteJournalEntry(index) {
  journalEntries.splice(index, 1);
  localStorage.setItem('bsyJournal', JSON.stringify(journalEntries));
  renderJournal();
}

function populateJournalChapterSelect() {
  const select = document.getElementById('entry-chapter');
  if (!select || select.children.length > 1) return;
  CHAPTERS.forEach(ch => {
    const opt = document.createElement('option');
    opt.value = ch.id; opt.textContent = `第${ch.id}章 · ${ch.title}`;
    select.appendChild(opt);
  });
}

function updateJournalStats() {
  const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
  set('stat-chapters', completedChapters.length);
  set('stat-notes', userNotes.filter(n => !n.note.includes('💡')).length);
  set('stat-entries', journalEntries.length);
  set('stat-highlights', highlightCount);
}

// ============================================
// DAY / NIGHT MODE
// ============================================
function toggleDarkMode() {
  dayMode = !dayMode;
  const root = document.documentElement;
  if (dayMode) {
    // 日間 · 舊照片米紙
    root.style.setProperty('--bg-primary', '#efe9e0');
    root.style.setProperty('--bg-secondary', '#e7e0d4');
    root.style.setProperty('--bg-card', '#fbf7f0');
    root.style.setProperty('--bg-elevated', '#f3ede2');
    root.style.setProperty('--text-primary', '#3a3027');
    root.style.setProperty('--text-secondary', '#5c4f43');
    root.style.setProperty('--text-muted', '#8a7d70');
    root.style.setProperty('--border', 'rgba(160,120,90,0.22)');
  } else {
    root.style.setProperty('--bg-primary', '#1a1c22');
    root.style.setProperty('--bg-secondary', '#21232b');
    root.style.setProperty('--bg-card', '#282a33');
    root.style.setProperty('--bg-elevated', '#31333e');
    root.style.setProperty('--text-primary', '#e7e0d6');
    root.style.setProperty('--text-secondary', '#b6aaa0');
    root.style.setProperty('--text-muted', '#847b74');
    root.style.setProperty('--border', 'rgba(199,151,131,0.16)');
  }
}

// ============================================
// MOBILE
// ============================================
function toggleMobileSidebar() {
  const sidebar = document.getElementById('reader-sidebar');
  if (sidebar.style.display === 'block') {
    sidebar.style.display = 'none';
  } else {
    sidebar.style.display = 'block';
    sidebar.style.position = 'fixed';
    sidebar.style.zIndex = '800';
    sidebar.style.top = '56px';
    sidebar.style.left = '0';
    sidebar.style.bottom = '0';
    setTimeout(() => document.addEventListener('click', closeMobileSidebar), 0);
  }
}

function closeMobileSidebar(e) {
  const sidebar = document.getElementById('reader-sidebar');
  if (!sidebar.contains(e.target) && e.target.id !== 'mobile-sidebar-btn') {
    sidebar.style.display = 'none';
    document.removeEventListener('click', closeMobileSidebar);
  }
}

function checkMobile() {
  const btn = document.getElementById('mobile-sidebar-btn');
  if (btn && window.innerWidth <= 768) btn.style.display = 'inline-block';
  else if (btn) btn.style.display = 'none';
}
window.addEventListener('resize', checkMobile);

// ============================================
// KEYBOARD SHORTCUTS
// ============================================
document.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  if (currentSection === 'reader') {
    if (e.key === 'ArrowLeft' && currentChapter > 1) loadChapter(currentChapter - 1);
    if (e.key === 'ArrowRight' && currentChapter < CHAPTERS.length) loadChapter(currentChapter + 1);
  }
  if (e.key === 'Escape') closeCharDetail();
});

// ============================================
// BACKGROUND MUSIC
// ============================================
function playMusic() {
  const audio = document.getElementById('bg-music');
  audio.volume = 0.3;
  audio.play().catch(() => {});
  document.getElementById('music-overlay').classList.remove('visible');
  const btn = document.getElementById('music-control');
  btn.classList.add('visible');
  btn.textContent = '⏸';
}

function noMusic() {
  document.getElementById('music-overlay').classList.remove('visible');
  document.getElementById('music-control').classList.add('visible');
  document.getElementById('music-control').textContent = '▶';
}

function toggleMusic() {
  const audio = document.getElementById('bg-music');
  const btn = document.getElementById('music-control');
  if (audio.paused) { audio.play().catch(() => {}); btn.textContent = '⏸'; }
  else { audio.pause(); btn.textContent = '▶'; }
}

// ============================================
// INIT
// ============================================
checkMobile();
