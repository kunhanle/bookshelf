// ============================================================
//  書架清單（Bookshelf manifest）
//  首頁 index.html 會讀這個檔案，自動長出每一本書的卡片。
//
//  ★ 要新增一本書：把該書資料夾放進 Book/ 底下，然後在下面
//    SHELF.books 陣列「複製一個 { ... } 區塊」填好即可。欄位說明：
//      folder   : 書的資料夾名稱（相對於 Book/；中文沒關係，會自動編碼）
//      title    : 書名（中文或主要顯示名）
//      titleEn  : （選填）英文書名，會顯示為副標小字
//      author   : 作者
//      subtitle : 一句副標／定位
//      tagline  : （選填）滑鼠移上去時顯示的一句話
//      seal     : 封面印章的單一個字
//      accent   : 主色（hex），卡片會用它當書封色調
//      bg       : 卡片底色（hex，深色）
//      langs    : 語言標籤陣列，如 ['中'] 或 ['中','EN']
// ============================================================

const SHELF = {
  title: '我的書架',
  subtitle: '沉浸式閱讀 · Immersive Reading',
  books: [
    {
      folder: '半生緣',
      title: '半生緣',
      author: '張愛玲',
      subtitle: '時光裡的緣與劫',
      tagline: '一個關於時間與錯過的故事',
      seal: '緣',
      accent: '#c79783',
      bg: '#1a1c22',
      langs: ['中']
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
      langs: ['中', 'EN']
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
      langs: ['中', 'EN']
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
      langs: ['中', 'EN']
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
      langs: ['中', 'EN']
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
      langs: ['中', 'EN']
    }
  ]
};
