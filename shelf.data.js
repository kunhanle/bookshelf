// ============================================================
//  書架清單（Bookshelf manifest）
//  首頁 index.html 會讀這個檔案，自動長出每一本書的卡片與分類頁籤。
//
//  ★ 要新增一本書：把該書資料夾放進 Book/ 底下，然後在下面
//    SHELF.books 陣列「複製一個 { ... } 區塊」填好即可。欄位說明：
//      folder     : 書的資料夾名稱（相對於 Book/；中文沒關係，會自動編碼）
//      title      : 書名（中文或主要顯示名）
//      titleEn    : （選填）英文書名，會顯示為副標小字
//      author     : 作者
//      subtitle   : 一句副標／定位
//      tagline    : （選填）滑鼠移上去時顯示的一句話
//      seal       : 封面印章的單一個字
//      accent     : 主色（hex），卡片會用它當書封色調
//      bg         : 卡片底色（hex，深色）
//      langs      : 語言標籤陣列，如 ['中'] 或 ['中','EN']
//      categories : 分類陣列（可一書多類），每項需對到下方 SHELF.categories
//                   單類也用陣列，如 ['小說']；也相容舊寫法 category: '小說'
//
//  ★ 要新增／調整分類：改下面的 SHELF.categories 陣列（決定頁籤的名稱與順序），
//    再把各本書的 categories 設成對應名稱即可。首頁一定會有一個預設的「All」頁籤。
// ============================================================

const SHELF = {
  title: '我的書架',
  subtitle: '沉浸式閱讀 · Immersive Reading',
  // 分類頁籤（有序）。'All' 由首頁自動加在最前面並預設選中，這裡不用列。
  categories: ['心理探究', '小說', '科普', '回憶錄', '商業'],
  books: [
    {
      folder: '半生緣',
      title: '半生緣',
      titleEn: 'Half a Lifelong Romance',
      author: '張愛玲',
      subtitle: '時光裡的緣與劫',
      tagline: '一個關於時間與錯過的故事',
      seal: '緣',
      accent: '#c79783',
      bg: '#1a1c22',
      langs: ['中', 'EN'],
      categories: ['小說']
    },
    {
      folder: 'thinking-fast-and-slow',
      title: '快思慢想',
      titleEn: 'Thinking, Fast and Slow',
      author: 'Daniel Kahneman',
      subtitle: '兩個系統的心智之旅',
      tagline: '一趟看清自己如何思考的旅程',
      seal: '思',
      accent: '#d0a552',
      bg: '#15161b',
      langs: ['中', 'EN'],
      categories: ['心理探究', '科普']
    },
    {
      folder: '生命中不能承受之輕',
      title: '生命中不能承受之輕',
      titleEn: 'The Unbearable Lightness of Being',
      author: 'Milan Kundera',
      subtitle: '輕與重之間',
      tagline: '一場關於輕與重的沉思',
      seal: '輕',
      accent: '#c2ad7e',
      bg: '#191b20',
      langs: ['中', 'EN'],
      categories: ['小說']
    },
    {
      folder: '人類大歷史',
      title: '人類大歷史',
      titleEn: 'Sapiens: A Brief History of Humankind',
      author: 'Yuval Noah Harari',
      subtitle: '從野獸到扮演上帝',
      tagline: '一部橫跨十萬年的人類簡史',
      seal: '智',
      accent: '#c67b45',
      bg: '#17150f',
      langs: ['中', 'EN'],
      categories: ['科普']
    },
    {
      folder: '活出意義來',
      title: '活出意義來',
      titleEn: "Man's Search for Meaning",
      author: 'Viktor E. Frankl',
      subtitle: '從集中營到意義治療',
      tagline: '選擇態度的自由，是最後也最深的自由',
      seal: '意',
      accent: '#d6a95c',
      bg: '#16171b',
      langs: ['中', 'EN'],
      categories: ['心理探究', '回憶錄']
    },
    {
      folder: '自私的基因',
      title: '自私的基因',
      titleEn: 'The Selfish Gene',
      author: 'Richard Dawkins',
      subtitle: '從基因的視角重看生命',
      tagline: '我們是基因打造的生存機器',
      seal: '基',
      accent: '#4fb89a',
      bg: '#0f1518',
      langs: ['中', 'EN'],
      categories: ['科普']
    },
    {
      folder: '刻意練習',
      title: '刻意練習',
      titleEn: 'Peak: Secrets from the New Science of Expertise',
      author: 'Anders Ericsson & Robert Pool',
      subtitle: '比天賦更關鍵的學習法',
      tagline: '傑出不是天賦，而是練出來的',
      seal: '練',
      accent: '#e0864a',
      bg: '#14161d',
      langs: ['中', 'EN'],
      categories: ['心理探究', '科普']
    },
    {
      folder: '道德動物',
      title: '道德動物',
      titleEn: 'The Moral Animal',
      author: 'Robert Wright',
      subtitle: '我們為何如此？',
      tagline: '演化如何造出一隻懂道德的動物',
      seal: '演',
      accent: '#b07d3c',
      bg: '#171713',
      langs: ['中', 'EN'],
      categories: ['心理探究', '科普']
    },
    {
      folder: '原子習慣',
      title: '原子習慣',
      titleEn: 'Atomic Habits',
      author: 'James Clear',
      subtitle: '每天都比昨天好一點',
      tagline: '微小改變，顯著成果',
      seal: '習',
      accent: '#4f8fc9',
      bg: '#14171d',
      langs: ['中', 'EN'],
      categories: ['心理探究']
    },
    {
      folder: '菊次郎與佐紀',
      title: '菊次郎與佐紀',
      titleEn: 'Kikujiro and Saki',
      author: '北野武',
      subtitle: '笑淚交織的下町家族',
      tagline: '一個下町家庭的笑與淚',
      seal: '菊',
      accent: '#cb6046',
      bg: '#1a1613',
      langs: ['中', 'EN'],
      categories: ['回憶錄']
    },
    {
      folder: '從0到1',
      title: '從0到1',
      titleEn: 'Zero to One',
      author: 'Peter Thiel',
      subtitle: '打造未來的祕密',
      tagline: '創造新事物，而非複製既有',
      seal: '1',
      accent: '#8b7cf0',
      bg: '#0f0f14',
      langs: ['中', 'EN'],
      categories: ['商業']
    }
  ]
};
