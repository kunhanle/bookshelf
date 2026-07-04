// ============================================================
//  book-to-html ENGINE  —  generic, book-agnostic, bilingual-ready.
//  Copy this file verbatim. All book content lives in book.data.js.
//  Globals it reads: BOOK, CHAPTERS, CHARACTERS, TIMELINE_DATA,
//    THEMES, QUOTES, REFLECTION_QUESTIONS, CHAPTER_CONTENT
//  BILINGUAL: any text field may be a plain string OR an object
//    { zh: "...", en: "..." }. TX() picks the active language. A book
//    with a language toggle sets BOOK.langs = ['zh','en'] (order = default first).
// ============================================================

// ---- state ----
let currentSection = 'cover';
let currentChapter = 0;
let fontSize = 1.05;
let dayMode = false;
let LANG = 'zh';
let userNotes = [], journalEntries = [], completedChapters = [], highlightCount = 0, readingProgress = {};
const K = (s) => (BOOK.slug || 'book') + ':' + s;   // namespaced localStorage keys

// ---- i18n ----
function TX(v) {
  if (v && typeof v === 'object' && !Array.isArray(v) && ('zh' in v || 'en' in v))
    return (v[LANG] != null ? v[LANG] : (v.zh != null ? v.zh : v.en)) || '';
  return v == null ? '' : v;
}
const chLabel = (n) => LANG === 'en' ? ('Ch.' + n) : ('第' + n + '章');
const pageLabel = (p) => LANG === 'en' ? ('p. ' + p) : ('第 ' + p + ' 頁');
function hasEN() { return Array.isArray(BOOK.langs) && BOOK.langs.indexOf('en') >= 0; }

const DEFAULT_UI = {
  nav: { intro: { zh: '導讀', en: 'Guide' }, characters: { zh: '人物譜', en: 'Cast' }, timeline: { zh: '時代軸', en: 'Timeline' }, reader: { zh: '閱讀', en: 'Read' }, themes: { zh: '主題', en: 'Themes' }, quotes: { zh: '金句', en: 'Quotes' }, journal: { zh: '札記', en: 'Notes' } },
  headers: { intro: { zh: '入門導讀', en: 'Reading Guide' }, characters: { zh: '人物譜', en: 'The Cast' }, timeline: { zh: '時代軸', en: 'Timeline' }, themes: { zh: '主題深讀', en: 'Themes' }, quotes: { zh: '金句館', en: 'Quotes' }, journal: { zh: '閱讀札記', en: 'Reading Notes' } },
  subheads: {
    intro: { zh: '在閱讀之前，先了解這本書的來龍去脈', en: 'Get your bearings before you read' },
    characters: { zh: '點擊卡片或關係圖，深入了解每個人物', en: 'Click a card or a node to dig in' },
    timeline: { zh: '在時間的座標上，看故事如何展開', en: 'The story set against its timeline' },
    themes: { zh: '從多個維度深入理解核心命題', en: 'The core ideas, gathered into threads' },
    quotes: { zh: '那些直擊人心的語句，值得反覆品味', en: 'Lines worth returning to' },
    journal: { zh: '記錄你的思考，見證閱讀的成長', en: 'Record your thinking as you read' }
  },
  s: {
    enter: { zh: '進 入 閱 讀', en: 'Start Reading' },
    back: { zh: '← 書架', en: '← Shelf' },
    contents: { zh: '目 錄', en: 'Contents' },
    prev: { zh: '◁ 上一章', en: '◁ Prev' }, next: { zh: '下一章 ▷', en: 'Next ▷' },
    depth: { zh: '深入了解 ▸', en: 'Read more ▸' },
    all: { zh: '全部', en: 'All' },
    reflectBtn: { zh: '💡 思考題', en: '💡 Reflect' }, reflectTitle: { zh: '💡 深度思考題', en: '💡 Reflection' },
    reflectSave: { zh: '儲存思考', en: 'Save' }, reflectPh: { zh: '寫下你的思考...', en: 'Write your reflection...' }, reflectSaved: { zh: '✓ 已儲存', en: '✓ Saved' },
    guideTitle: { zh: '💡 如何深度閱讀', en: '💡 How to read deeply' },
    notesTitle: { zh: '📝 閱讀札記', en: '📝 Reading Notes' }, notePh: { zh: '寫下你對本章的感悟...', en: 'Your thoughts on this chapter...' },
    save: { zh: '儲存', en: 'Save' }, clear: { zh: '清空', en: 'Clear' },
    noNotes: { zh: '尚無閱讀札記，開始記錄吧', en: 'No notes yet — start writing.' },
    mode: { zh: '模式', en: 'Theme' }, modeTip: { zh: '切換日間／夜間', en: 'Day / night' },
    analysisShow: { zh: '展開解析 ▸', en: 'Show analysis ▸' }, analysisHide: { zh: '收起解析 ▴', en: 'Hide analysis ▴' },
    jWrite: { zh: '✍️ 寫一條札記', en: '✍️ Write a note' }, jChap: { zh: '選擇關聯章節', en: 'Select a chapter' },
    jSave: { zh: '儲存札記', en: 'Save note' }, jPh: { zh: '記錄你的想法、疑問或聯想...', en: 'A thought, question, or connection...' },
    jEmpty: { zh: '還沒有札記，去閱讀時寫一條吧', en: 'No notes yet. Write one while reading.' },
    jStatChap: { zh: '已讀章節', en: 'Chapters read' }, jStatNotes: { zh: '札記數量', en: 'Notes' }, jStatEntries: { zh: '思考條目', en: 'Entries' }, jStatHi: { zh: '標註句段', en: 'Highlights' },
    tThought: { zh: '💭 感悟', en: '💭 Thought' }, tQuestion: { zh: '❓ 疑問', en: '❓ Question' }, tConnection: { zh: '🔗 關聯', en: '🔗 Link' },
    optThought: { zh: '💭 感悟思考', en: '💭 Thought' }, optQuestion: { zh: '❓ 疑問探索', en: '❓ Question' }, optConnection: { zh: '🔗 聯想關聯', en: '🔗 Connection' },
    delete: { zh: '刪除', en: 'Delete' },
    musicTitle: { zh: '播放背景音樂', en: 'Background music' }, musicYes: { zh: '是，播放', en: 'Yes, play' }, musicNo: { zh: '否，不需要', en: 'No thanks' }
  }
};
function UI(k) { return TX(DEFAULT_UI.s[k]); }
function progressText() { return LANG === 'en' ? ('Read ' + completedChapters.length + ' / ' + CHAPTERS.length) : ('已讀 ' + completedChapters.length + ' / ' + CHAPTERS.length + ' 章'); }

// ---- boot ----
function bootApp() {
  userNotes = JSON.parse(localStorage.getItem(K('notes')) || '[]');
  journalEntries = JSON.parse(localStorage.getItem(K('journal')) || '[]');
  completedChapters = JSON.parse(localStorage.getItem(K('progress')) || '[]');
  highlightCount = parseInt(localStorage.getItem(K('highlights')) || '0');
  readingProgress = JSON.parse(localStorage.getItem(K('reading')) || '{}');
  LANG = localStorage.getItem(K('lang')) || (Array.isArray(BOOK.langs) ? BOOK.langs[0] : 'zh');
  document.documentElement.setAttribute('lang', LANG === 'en' ? 'en' : 'zh-Hant');
  document.title = (TX(BOOK.title) || '沉浸式閱讀') + ' · ' + (LANG === 'en' ? 'Immersive Reading' : '沉浸式閱讀');
  applyTheme(BOOK.theme || {});
  renderShell();
  checkMobile();
}

window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loading-screen').classList.add('hidden');
    generateAtmosphere();
    setTimeout(() => document.getElementById('music-overlay').classList.add('visible'), 600);
  }, 1800);
});

window.addEventListener('scroll', () => {
  const nav = document.getElementById('main-nav');
  if (window.scrollY > 200 || currentSection !== 'cover') nav.classList.add('visible'); else nav.classList.remove('visible');
  const bar = document.getElementById('reading-progress-bar');
  if (currentSection === 'reader') {
    const rc = document.getElementById('reader-content');
    bar.style.width = Math.min(((rc.scrollTop / (rc.scrollHeight - rc.clientHeight)) * 100) || 0, 100) + '%';
    bar.style.display = 'block';
  } else bar.style.display = 'none';
});

// ---- theme ----
function applyTheme(theme) {
  const root = document.documentElement;
  Object.keys(theme).forEach(k => { if (k !== 'atmosphere' && k !== 'dayMode') root.style.setProperty('--' + k, theme[k]); });
}

// ---- language ----
function toggleLang() { LANG = (LANG === 'zh') ? 'en' : 'zh'; applyLang(); }
function updateLangButton() {
  const b = document.getElementById('lang-toggle'); if (!b) return;
  if (Array.isArray(BOOK.langs) && BOOK.langs.length > 1) { b.style.display = ''; b.textContent = (LANG === 'zh') ? 'EN' : '中'; }
  else b.style.display = 'none';
}
function applyLang() {
  localStorage.setItem(K('lang'), LANG);
  document.documentElement.setAttribute('lang', LANG === 'en' ? 'en' : 'zh-Hant');
  document.title = (TX(BOOK.title) || '') + ' · ' + (LANG === 'en' ? 'Immersive Reading' : '沉浸式閱讀');
  const clear = id => { const el = document.getElementById(id); if (el) el.innerHTML = ''; };
  clear('character-cards'); clear('themes-grid'); clear('quotes-container'); clear('chapter-list'); clear('reflect-body'); clear('notes-list'); clear('entry-chapter');
  const tl = document.getElementById('timeline-container'); if (tl) tl.innerHTML = '<div class="timeline-line"></div>';
  renderShell();
  const sec = currentSection;
  if (sec === 'characters') renderCharacters();
  else if (sec === 'timeline') renderTimeline();
  else if (sec === 'reader') renderReader();
  else if (sec === 'themes') renderThemes();
  else if (sec === 'quotes') renderQuotes();
  else if (sec === 'journal') { renderJournal(); populateJournalChapterSelect(); }
}

// ---- static shell (cover / nav / intro / footer / UI strings) ----
function renderShell() {
  const b = BOOK, lb = b.labels || {};
  document.getElementById('loader-text').textContent = spaced(TX(b.title) || '');
  document.getElementById('nav-brand').textContent = TX(b.title) || '';
  const c = b.cover || {};
  document.getElementById('cover-content').innerHTML = `
    ${c.seal ? `<div class="cover-seal">${TX(c.seal)}</div>` : ''}
    <h1>${TX(b.title) || ''}</h1>
    ${c.subtitle ? `<div class="cover-subtitle">${spaced(TX(c.subtitle))}</div>` : ''}
    <div class="cover-line"></div>
    ${b.author ? `<div class="cover-author">${LANG === 'en' ? ('by ' + TX(b.author)) : (spaced(TX(b.author)) + ' 著')}</div>` : ''}
    ${c.desc ? `<div class="cover-desc">${TX(c.desc)}</div>` : ''}
    <div class="enter-btn"><button onclick="navigateTo('reader')">${UI('enter')}</button></div>`;
  if (b.intro) {
    const isb = document.getElementById('intro-subtitle'); if (isb) isb.textContent = TX(b.intro.subtitle) || TX(DEFAULT_UI.subheads.intro);
    const a = b.intro.author || {};
    document.getElementById('author-box').innerHTML = `
      <div class="author-portrait">${TX(a.portrait) || (TX(b.author) || '')[0] || '書'}</div>
      <div class="author-info"><h3>${TX(a.name) || TX(b.author) || ''}</h3>
      <div class="author-years">${TX(a.years) || ''}</div><p>${TX(a.bio) || ''}</p></div>`;
    document.getElementById('intro-cards').innerHTML = (b.intro.cards || []).map(card => `
      <div class="intro-card"><div class="card-icon">${card.icon || '📖'}</div><h3>${TX(card.title)}</h3><p>${TX(card.text)}</p></div>`).join('');
    const steps = b.intro.guide || [];
    document.getElementById('reading-guide').innerHTML = `<h3>${UI('guideTitle')}</h3><div class="guide-steps">${
      steps.map((s, i) => `<div class="guide-step"><div class="step-num">${i + 1}</div><div class="step-text"><h4>${TX(s.h)}</h4><p>${TX(s.p)}</p></div></div>`).join('')}</div>`;
  }
  const fams = b.families || [];
  document.getElementById('char-filter').innerHTML =
    `<button class="active" onclick="filterCharacters('all',this)">${UI('all')}</button>` +
    fams.map(f => `<button onclick="filterCharacters('${f.id}',this)">${TX(f.label)}</button>`).join('');
  document.getElementById('map-title').textContent = (b.graph && b.graph.title) ? TX(b.graph.title) : '— 人 物 關 係 圖 —';
  document.getElementById('reading-progress-text').textContent = progressText();
  document.getElementById('footer-quote').innerHTML = TX(b.footer && b.footer.quote) || '';
  document.getElementById('footer-tagline').textContent = TX(b.footer && b.footer.tagline) || (TX(b.title) + ' · 沉浸式閱讀');
  const mp = document.getElementById('music-prompt');
  if (b.musicPrompt && mp) mp.innerHTML = TX(b.musicPrompt);
  // nav labels
  document.querySelectorAll('.nav-link').forEach(a => {
    const sec = a.dataset.section;
    const v = (lb.nav && lb.nav[sec] != null) ? lb.nav[sec] : DEFAULT_UI.nav[sec];
    if (v != null) a.textContent = TX(v);
  });
  // section headers + subheads
  ['intro', 'characters', 'timeline', 'themes', 'quotes', 'journal'].forEach(sec => {
    const h = document.querySelector(`#${sec} .section-header h2`);
    if (h) { const v = (lb.headers && lb.headers[sec] != null) ? lb.headers[sec] : DEFAULT_UI.headers[sec]; if (v != null) h.textContent = spaced(TX(v)); }
    const p = document.querySelector(`#${sec} .section-header p`);
    if (p) {
      let sv = (lb.subheads && lb.subheads[sec] != null) ? lb.subheads[sec] : null;
      if (sv == null && sec === 'timeline' && b.timelineSubtitle != null) sv = b.timelineSubtitle;
      if (sv == null) sv = DEFAULT_UI.subheads[sec];
      if (sv != null) p.textContent = TX(sv);
    }
  });
  applyUIStrings();
  updateLangButton();
  renderGraph();
}

function applyUIStrings() {
  const setT = (sel, val) => { const el = document.querySelector(sel); if (el) el.textContent = val; };
  document.querySelectorAll('.nav-back, .cover-back').forEach(e => { e.textContent = UI('back'); });
  setT('#reader-sidebar .sidebar-header h3', spaced(UI('contents')));
  setT('.reader-toolbar .tb-btn[onclick="toggleReflectPanel()"]', UI('reflectBtn'));
  setT('#reflect-panel .reflect-header h3', UI('reflectTitle'));
  setT('#reader-notes-panel .notes-panel-header h3', UI('notesTitle'));
  const np = document.getElementById('note-input'); if (np) np.placeholder = UI('notePh');
  setT('#reader-notes-panel .save-btn', UI('save'));
  setT('#reader-notes-panel .cancel-btn', UI('clear'));
  const mb = document.querySelector('#main-nav .nav-actions button.tooltip');
  if (mb) mb.innerHTML = UI('mode') + `<span class="tooltip-text">${UI('modeTip')}</span>`;
  setT('.journal-entry-form h3', UI('jWrite'));
  setT('.journal-entry-form .submit-btn', UI('jSave'));
  setT('.journal-entry-form .cancel-btn', UI('clear'));
  const et = document.getElementById('entry-text'); if (et) et.placeholder = UI('jPh');
  const eType = document.getElementById('entry-type');
  if (eType && eType.options.length >= 3) { eType.options[0].textContent = UI('optThought'); eType.options[1].textContent = UI('optQuestion'); eType.options[2].textContent = UI('optConnection'); }
  const stat = document.querySelectorAll('.journal-stats .stat-label');
  if (stat.length >= 4) { stat[0].textContent = UI('jStatChap'); stat[1].textContent = UI('jStatNotes'); stat[2].textContent = UI('jStatEntries'); stat[3].textContent = UI('jStatHi'); }
  setT('.music-modal h3', UI('musicTitle'));
  setT('.music-modal .btn-yes', UI('musicYes'));
  const noBtn = document.querySelector('.music-modal .music-btns button:not(.btn-yes)'); if (noBtn) noBtn.textContent = UI('musicNo');
}

function spaced(s) { return (s || '').split('').join(' '); }

// ---- cover atmosphere (configurable) ----
function generateAtmosphere() {
  const field = document.getElementById('atmosphere');
  if (!field) return;
  const atm = (BOOK.theme && BOOK.theme.atmosphere) || {};
  const fallN = atm.fall != null ? atm.fall : 18;
  const streakN = atm.streak != null ? atm.streak : 30;
  const radius = atm.fallRadius || '0 60% 0 60%';
  for (let i = 0; i < fallN; i++) {
    const el = document.createElement('div');
    el.className = 'fall-particle';
    el.style.left = Math.random() * 100 + '%';
    el.style.borderRadius = radius;
    el.style.transform = `scale(${0.6 + Math.random() * 1.1})`;
    el.style.animationDuration = (8 + Math.random() * 9) + 's';
    el.style.animationDelay = (Math.random() * 10) + 's';
    field.appendChild(el);
  }
  for (let i = 0; i < streakN; i++) {
    const el = document.createElement('div');
    el.className = 'streak';
    el.style.left = Math.random() * 100 + '%';
    el.style.height = (50 + Math.random() * 70) + 'px';
    el.style.animationDuration = (1.2 + Math.random() * 1.6) + 's';
    el.style.animationDelay = (Math.random() * 4) + 's';
    field.appendChild(el);
  }
}

// ---- navigation ----
function navigateTo(section) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(a => a.classList.remove('active'));
  const target = document.getElementById(section);
  if (!target) return;
  target.classList.add('active');
  currentSection = section;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.querySelectorAll('.nav-link').forEach(a => { if (a.dataset.section === section) a.classList.add('active'); });
  if (section !== 'cover') document.getElementById('main-nav').classList.add('visible');
  const cb = document.getElementById('cover-back'); if (cb) cb.style.display = (section === 'cover') ? 'inline-block' : 'none';
  if (section === 'characters') renderCharacters();
  if (section === 'timeline') renderTimeline();
  if (section === 'reader') renderReader();
  if (section === 'themes') renderThemes();
  if (section === 'quotes') renderQuotes();
  if (section === 'journal') { renderJournal(); populateJournalChapterSelect(); }
}

// ---- relationship graph (SVG from data) ----
function renderGraph() {
  const svg = document.getElementById('char-svg');
  const g = BOOK.graph;
  if (!svg || !g || !g.nodes) return;
  const edgeStyle = {
    family: { stroke: 'rgba(199,151,131,0.25)', dash: '' },
    love: { stroke: 'rgba(228,182,160,0.6)', dash: '6,4' },
    marriage: { stroke: 'rgba(199,151,131,0.45)', dash: '' },
    broken: { stroke: 'rgba(130,130,130,0.4)', dash: '3,4' },
    rivalry: { stroke: 'rgba(181,114,122,0.5)', dash: '3,4' }
  };
  const tierR = { lead: 40, major: 30, minor: 24, tiny: 20 };
  const byId = {}; g.nodes.forEach(n => byId[n.id] = n);
  const edges = (g.edges || []).map(e => {
    const a = byId[e.from], b = byId[e.to]; if (!a || !b) return '';
    const st = edgeStyle[e.kind] || edgeStyle.family;
    return `<line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" stroke="${st.stroke}" stroke-width="1.5" ${st.dash ? `stroke-dasharray="${st.dash}"` : ''} fill="none"/>`;
  }).join('');
  const nodes = g.nodes.map(n => {
    const r = n.r || tierR[n.tier] || 26;
    const col = n.color || 'var(--accent)';
    const clickable = CHARACTERS.some(c => c.id === n.id);
    return `<g class="char-node" ${clickable ? `onclick="showCharDetail('${n.id}')"` : ''}>
      <circle cx="${n.x}" cy="${n.y}" r="${r}" fill="${col}33" stroke="${col}" stroke-width="${n.tier === 'lead' ? 2.5 : n.tier === 'minor' || n.tier === 'tiny' ? 1.2 : 2}"/>
      <text x="${n.x}" y="${n.y + 4}" text-anchor="middle" fill="#e7e0d6" font-size="${n.tier === 'lead' ? 14 : n.tier === 'tiny' ? 11 : 12}" font-family="serif">${TX(n.label)}</text></g>`;
  }).join('');
  const lg = (BOOK.labels && BOOK.labels.legend) || { lead: { zh: '主角', en: 'Lead' }, major: { zh: '重要角色', en: 'Major' }, minor: { zh: '次要角色', en: 'Minor' }, edge: { zh: '情感／姻緣', en: 'Relationship' } };
  const legend = `<g transform="translate(30,455)">
    <circle cx="10" cy="0" r="8" fill="var(--accent)33" stroke="var(--accent)" stroke-width="1.5"/><text x="25" y="4" fill="#847b74" font-size="11" font-family="sans-serif">${TX(lg.lead)}</text>
    <circle cx="95" cy="0" r="6" fill="var(--rose)33" stroke="var(--rose)" stroke-width="1.5"/><text x="107" y="4" fill="#847b74" font-size="11" font-family="sans-serif">${TX(lg.major)}</text>
    <circle cx="190" cy="0" r="6" fill="var(--jade)33" stroke="var(--jade)" stroke-width="1.5"/><text x="202" y="4" fill="#847b74" font-size="11" font-family="sans-serif">${TX(lg.minor)}</text>
    <line x1="285" y1="0" x2="315" y2="0" stroke="rgba(228,182,160,0.6)" stroke-width="1.5" stroke-dasharray="6,4"/><text x="323" y="4" fill="#847b74" font-size="11" font-family="sans-serif">${TX(lg.edge)}</text></g>`;
  svg.innerHTML = `<g>${edges}</g>${nodes}${legend}`;
}

// ---- characters ----
function renderCharacters(filter = 'all') {
  const container = document.getElementById('character-cards');
  if (!container) return;
  const list = filter === 'all' ? CHARACTERS : CHARACTERS.filter(c => c.family === filter);
  container.innerHTML = list.map(c => `
    <div class="char-card" onclick="showCharDetail('${c.id}')">
      <div class="char-header"><div class="char-avatar" style="background:${c.color}22;border:1px solid ${c.color}55">${c.icon || '👤'}</div>
        <div><div class="char-name">${TX(c.name)}</div><div class="char-role">${TX(c.role) || ''}</div></div></div>
      <div class="char-desc">${TX(c.desc) || ''}</div>
      <div class="char-tags">${(c.tags || []).map(t => `<span class="char-tag">${TX(t)}</span>`).join('')}</div>
      <button class="char-depth-btn" onclick="event.stopPropagation();showCharDetail('${c.id}')">${UI('depth')}</button></div>`).join('');
}
function filterCharacters(filter, btn) {
  document.querySelectorAll('.char-filter button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active'); renderCharacters(filter);
}
function resolveRelated(r) {
  return CHARACTERS.find(x => x.id === r || TX(x.name) === r || (x.name && x.name.zh === r) || (x.name && x.name.en === r));
}
function showCharDetail(id) {
  const c = CHARACTERS.find(ch => ch.id === id); if (!c) return;
  const cd = (BOOK.labels && BOOK.labels.charDetail) || { intro: { zh: '人物簡介', en: 'Profile' }, analysis: { zh: '深度解讀', en: 'Analysis' }, related: { zh: '相關人物', en: 'Related' }, tags: { zh: '性格標籤', en: 'Traits' }, empty: { zh: '無直接關聯', en: 'None' } };
  document.getElementById('char-detail-content').innerHTML = `
    <button class="close-btn" onclick="closeCharDetail()">✕</button>
    <h3>${c.icon || ''} ${TX(c.name)}</h3><div class="detail-role">${TX(c.role) || ''}</div>
    <div class="detail-section"><h4>${TX(cd.intro)}</h4><p>${TX(c.desc) || ''}</p></div>
    ${c.analysis ? `<div class="detail-section"><h4>${TX(cd.analysis)}</h4><p>${TX(c.analysis)}</p></div>` : ''}
    <div class="detail-section"><h4>${TX(cd.related)}</h4><p>${(c.related || []).map(r => { const rc = resolveRelated(r); return rc ? `${rc.icon || ''} ${TX(rc.name)}` : TX(r); }).join(' · ') || TX(cd.empty || '無直接關聯')}</p></div>
    <div class="detail-section"><h4>${TX(cd.tags)}</h4><div class="char-tags">${(c.tags || []).map(t => `<span class="char-tag">${TX(t)}</span>`).join('')}</div></div>`;
  document.getElementById('char-detail-panel').classList.add('visible');
}
function closeCharDetail() { document.getElementById('char-detail-panel').classList.remove('visible'); }

// ---- timeline ----
function renderTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container || container.children.length > 2) return;
  const tt = (BOOK.labels && BOOK.labels.timelineTypes) || { history: { zh: '歷史事件', en: 'History' }, novel: { zh: '故事情節', en: 'Story' }, character: { zh: '人物命運', en: 'Character' } };
  container.innerHTML = '<div class="timeline-line"></div>' + TIMELINE_DATA.map(t => `
    <div class="timeline-item"><div class="tl-dot"></div><div class="tl-content">
      <span class="tl-type ${t.type}">${TX(tt[t.type]) || t.type}</span>
      <div class="tl-year">${TX(t.year)}</div><div class="tl-event">${TX(t.event)}</div>
      <div class="tl-novel">📖 ${TX(t.novel)}</div></div></div>`).join('');
  setTimeout(() => {
    const ob = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), { threshold: 0.2 });
    container.querySelectorAll('.timeline-item').forEach(i => ob.observe(i));
  }, 100);
}

// ---- reader ----
function renderReader() {
  if (!document.getElementById('chapter-list').children.length) {
    const list = document.getElementById('chapter-list'); let grp = '';
    CHAPTERS.forEach(ch => {
      const gp = TX(ch.group);
      if (gp && gp !== grp) { grp = gp; const d = document.createElement('div'); d.className = 'chapter-group-title'; d.textContent = gp; list.appendChild(d); }
      const item = document.createElement('div');
      item.className = 'chapter-item' + (completedChapters.includes(ch.id) ? ' completed' : '') + (currentChapter + 1 === ch.id ? ' active' : '');
      item.id = `ch-item-${ch.id}`; item.onclick = () => loadChapter(ch.id);
      item.innerHTML = `<div class="ch-num">${completedChapters.includes(ch.id) ? '✓' : ch.id}</div>
        <div class="ch-info"><div class="ch-title">${TX(ch.title)}</div>${ch.pages ? `<div class="ch-pages">${pageLabel(ch.pages)}</div>` : ''}</div>`;
      list.appendChild(item);
    });
  }
  loadChapter(currentChapter > 0 ? currentChapter : 1);
  updateReadingProgress();
}
function loadChapter(num) {
  currentChapter = num;
  const ch = CHAPTERS[num - 1];
  const content = CHAPTER_CONTENT[num] || { num: '', title: ch.title, epigraph: '', body: '<p>…</p>' };
  document.getElementById('reader-page').innerHTML = `
    <div class="chapter-title-block"><div class="chapter-num">${TX(content.num) || ''}</div>
      <h1 class="chapter-title">${TX(content.title) || TX(ch.title)}</h1>
      ${content.epigraph ? `<div class="chapter-epigraph">${TX(content.epigraph)}</div>` : ''}</div>
    <div class="chapter-body" id="chapter-body" style="font-size:${fontSize}rem">${TX(content.body)}</div>
    <div class="reader-nav">
      <button onclick="loadChapter(${num > 1 ? num - 1 : 1})" ${num <= 1 ? 'disabled' : ''}>${UI('prev')}</button>
      <span class="nav-indicator">${num} / ${CHAPTERS.length}</span>
      <button onclick="loadChapter(${num < CHAPTERS.length ? num + 1 : CHAPTERS.length})" ${num >= CHAPTERS.length ? 'disabled' : ''}>${UI('next')}</button></div>`;
  document.querySelectorAll('.chapter-item').forEach(i => i.classList.remove('active'));
  const active = document.getElementById(`ch-item-${num}`); if (active) active.classList.add('active');
  if (!completedChapters.includes(num)) {
    completedChapters.push(num); localStorage.setItem(K('progress'), JSON.stringify(completedChapters));
    if (active) { active.classList.add('completed'); active.querySelector('.ch-num').textContent = '✓'; }
    updateReadingProgress();
  }
  readingProgress[num] = true; localStorage.setItem(K('reading'), JSON.stringify(readingProgress));
  renderReflectionQuestions(ch.reflectQ);
  document.getElementById('reader-content').scrollTop = 0;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function updateReadingProgress() {
  const el = document.getElementById('reading-progress-text');
  if (el) el.textContent = progressText();
  updateJournalStats();
}

// ---- highlight & annotation ----
function highlightText(cls) {
  const sel = window.getSelection();
  if (!sel.rangeCount || sel.isCollapsed) { alert(LANG === 'en' ? 'Select some text first, then pick a highlight colour.' : '請先選取要高亮的文字，再點高亮按鈕。'); return; }
  const span = document.createElement('span'); span.className = 'highlight-' + cls;
  try { sel.getRangeAt(0).surroundContents(span); highlightCount++; localStorage.setItem(K('highlights'), String(highlightCount)); updateJournalStats(); sel.removeAllRanges(); }
  catch (e) { alert(LANG === 'en' ? 'Please select a single continuous span of text.' : '請選取一段「連續」的文字再高亮。'); }
}
function annotateSelection() {
  const text = window.getSelection().toString(); if (!text) { alert(LANG === 'en' ? 'Select text to annotate first.' : '請先選取要批註的文字'); return; }
  const note = prompt(LANG === 'en' ? 'Your note:' : '請輸入批註內容：');
  if (note) {
    const span = document.createElement('span'); span.className = 'highlight-yellow'; span.title = (LANG === 'en' ? 'Note: ' : '批註: ') + note;
    try { window.getSelection().getRangeAt(0).surroundContents(span); } catch (e) {}
    userNotes.push({ chapter: currentChapter, text: text.substring(0, 100), note, time: new Date().toLocaleString() });
    localStorage.setItem(K('notes'), JSON.stringify(userNotes)); updateJournalStats();
  }
  document.getElementById('annotation-popup').classList.remove('visible');
}
function bookmarkSelection() {
  const text = window.getSelection().toString(); if (!text) return;
  userNotes.push({ chapter: currentChapter, text: text.substring(0, 100), note: '★', time: new Date().toLocaleString(), bookmarked: true });
  localStorage.setItem(K('notes'), JSON.stringify(userNotes)); updateJournalStats();
  document.getElementById('annotation-popup').classList.remove('visible');
}
document.addEventListener('mouseup', (e) => {
  if (currentSection !== 'reader') return;
  const popup = document.getElementById('annotation-popup'), sel = window.getSelection(), body = document.getElementById('chapter-body');
  if (sel && !sel.isCollapsed && body && body.contains(sel.anchorNode)) {
    popup.style.left = (e.pageX - 40) + 'px'; popup.style.top = (e.pageY - 50) + 'px'; popup.classList.add('visible');
  } else if (!popup.contains(e.target)) popup.classList.remove('visible');
});

// ---- font ----
function changeFontSize(dir) {
  fontSize = dir === 0 ? 1.05 : Math.max(0.85, Math.min(1.5, fontSize + dir * 0.1));
  const body = document.getElementById('chapter-body'); if (body) body.style.fontSize = fontSize + 'rem';
}

// ---- notes panel ----
function toggleNotesPanel() { document.getElementById('reader-notes-panel').classList.toggle('visible'); renderNotesList(); }
function saveNote() {
  const input = document.getElementById('note-input'), text = input.value.trim(); if (!text) return;
  userNotes.push({ chapter: currentChapter || 1, text: text.substring(0, 200), note: '', time: new Date().toLocaleString() });
  localStorage.setItem(K('notes'), JSON.stringify(userNotes)); input.value = ''; renderNotesList(); updateJournalStats();
}
function renderNotesList() {
  const list = document.getElementById('notes-list');
  const notes = userNotes.filter(n => n.note === '').sort((a, b) => b.time.localeCompare(a.time));
  list.innerHTML = notes.length === 0 ? `<p style="color:var(--text-muted);text-align:center;padding:2rem;font-size:.85rem;">${UI('noNotes')}</p>`
    : notes.slice(0, 50).map(n => `<div class="note-item"><div class="note-chapter">${chLabel(n.chapter)} · ${TX(CHAPTERS[n.chapter - 1] && CHAPTERS[n.chapter - 1].title)}</div><div class="note-text">${n.text}</div><div class="note-time">${n.time}</div></div>`).join('');
}

// ---- reflection ----
function toggleReflectPanel() {
  const p = document.getElementById('reflect-panel'); p.classList.toggle('visible');
  if (p.classList.contains('visible') && !document.getElementById('reflect-body').children.length) renderReflectionQuestions(CHAPTERS[currentChapter - 1] && CHAPTERS[currentChapter - 1].reflectQ);
}
function renderReflectionQuestions(chapterQ) {
  const body = document.getElementById('reflect-body'); if (!body) return;
  const qs = [chapterQ, ...REFLECTION_QUESTIONS].filter(Boolean).slice(0, 6);
  const seen = new Set(); const uniq = [];
  qs.forEach(q => { const t = TX(q); if (t && !seen.has(t)) { seen.add(t); uniq.push(t); } });
  body.innerHTML = uniq.slice(0, 5).map((q, i) => `<div class="reflect-question"><div class="rq-q">${i + 1}. ${q}</div>
    <textarea class="rq-a" id="rq-${i}" placeholder="${UI('reflectPh')}"></textarea>
    <button class="rq-save" onclick="saveReflection(${i})">${UI('reflectSave')}</button>
    <div class="rq-saved" id="rq-saved-${i}" style="display:none">${UI('reflectSaved')}</div></div>`).join('');
}
function saveReflection(i) {
  const text = document.getElementById(`rq-${i}`).value.trim(); if (!text) return;
  userNotes.push({ chapter: currentChapter || 1, text: text.substring(0, 300), note: '💡', time: new Date().toLocaleString() });
  localStorage.setItem(K('notes'), JSON.stringify(userNotes));
  const s = document.getElementById(`rq-saved-${i}`); if (s) { s.style.display = 'block'; setTimeout(() => s.style.display = 'none', 2000); }
  updateJournalStats();
}

// ---- themes ----
function renderThemes() {
  const grid = document.getElementById('themes-grid'); if (!grid || grid.children.length) return;
  grid.innerHTML = THEMES.map(t => `<div class="theme-card" onclick="this.classList.toggle('expanded')">
    <div class="theme-header"><div class="theme-icon" style="background:${t.color}22;border:1px solid ${t.color}44">${t.icon || '📖'}</div>
      <div class="theme-title-group"><h3>${TX(t.title)}</h3><p>${TX(t.subtitle) || ''}</p></div></div>
    <div class="theme-body"><p>${TX(t.intro) || ''}</p>${TX(t.body) || ''}
      <div class="theme-chapters">${(t.chapters || []).map(c => `<span>${chLabel(c)}</span>`).join('')}</div></div></div>`).join('');
}

// ---- quotes ----
function toggleQuoteAnalysis(btn) {
  const a = btn.nextElementSibling; a.classList.toggle('visible');
  btn.textContent = a.classList.contains('visible') ? UI('analysisHide') : UI('analysisShow');
}
function renderQuotes() {
  const c = document.getElementById('quotes-container'); if (!c || c.children.length) return;
  const openMark = LANG === 'en' ? '“' : '「';
  c.innerHTML = QUOTES.map(q => `<div class="quote-card"><div class="quote-mark">${openMark}</div>
    <div class="quote-text">${TX(q.text)}</div><div class="quote-source">—— ${TX(q.source) || ''}</div>
    <button class="show-analysis-btn" onclick="toggleQuoteAnalysis(this)">${UI('analysisShow')}</button>
    <div class="quote-analysis">${TX(q.analysis) || ''}</div></div>`).join('');
}

// ---- journal ----
function typeLabel(t) { return t === 'thought' ? UI('tThought') : t === 'question' ? UI('tQuestion') : UI('tConnection'); }
function renderJournal() {
  const c = document.getElementById('journal-entries'); if (!c) return;
  const entries = [...journalEntries].reverse();
  c.innerHTML = entries.length === 0 ? `<p style="color:var(--text-muted);text-align:center;padding:3rem;font-size:.9rem;">${UI('jEmpty')}</p>`
    : entries.map((e, i) => `<div class="journal-entry"><div class="entry-header">
        <span class="entry-chapter">${chLabel(e.chapter)} · ${TX(CHAPTERS[e.chapter - 1] && CHAPTERS[e.chapter - 1].title)}</span><span class="entry-date">${e.time}</span></div>
        <span class="entry-type ${e.type}">${typeLabel(e.type)}</span>
        <div class="entry-text">${e.text}</div>
        <button class="entry-delete" onclick="deleteJournalEntry(${journalEntries.length - 1 - i})">${UI('delete')}</button></div>`).join('');
  updateJournalStats();
}
function saveJournalEntry() {
  const text = document.getElementById('entry-text').value.trim();
  const chapter = parseInt(document.getElementById('entry-chapter').value);
  const type = document.getElementById('entry-type').value;
  if (!text) { alert(LANG === 'en' ? 'Write something first.' : '請先寫點什麼'); return; }
  journalEntries.push({ chapter: chapter || 1, type, text, time: new Date().toLocaleString() });
  localStorage.setItem(K('journal'), JSON.stringify(journalEntries));
  document.getElementById('entry-text').value = ''; renderJournal();
}
function deleteJournalEntry(i) { journalEntries.splice(i, 1); localStorage.setItem(K('journal'), JSON.stringify(journalEntries)); renderJournal(); }
function populateJournalChapterSelect() {
  const sel = document.getElementById('entry-chapter'); if (!sel) return;
  if (sel.children.length > 1) return;
  sel.innerHTML = `<option value="">${UI('jChap')}</option>` + CHAPTERS.map(ch => `<option value="${ch.id}">${chLabel(ch.id)} · ${TX(ch.title)}</option>`).join('');
}
function updateJournalStats() {
  const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
  set('stat-chapters', completedChapters.length);
  set('stat-notes', userNotes.filter(n => n.note === '' || n.note === '★').length);
  set('stat-entries', journalEntries.length);
  set('stat-highlights', highlightCount);
}

// ---- day / night ----
function toggleDayMode() {
  dayMode = !dayMode;
  if (dayMode) applyTheme((BOOK.theme && BOOK.theme.dayMode) || {
    'bg-primary': '#efe9e0', 'bg-secondary': '#e7e0d4', 'bg-card': '#fbf7f0', 'bg-elevated': '#f3ede2',
    'text-primary': '#3a3027', 'text-secondary': '#5c4f43', 'text-muted': '#8a7d70', 'border': 'rgba(160,120,90,0.22)'
  });
  else applyTheme(BOOK.theme || {});
}

// ---- mobile ----
function toggleMobileSidebar() {
  const sb = document.getElementById('reader-sidebar');
  if (sb.style.display === 'block') { sb.style.display = 'none'; }
  else { Object.assign(sb.style, { display: 'block', position: 'fixed', zIndex: '800', top: '56px', left: '0', bottom: '0' }); setTimeout(() => document.addEventListener('click', closeMobileSidebar), 0); }
}
function closeMobileSidebar(e) {
  const sb = document.getElementById('reader-sidebar');
  if (!sb.contains(e.target) && e.target.id !== 'mobile-sidebar-btn') { sb.style.display = 'none'; document.removeEventListener('click', closeMobileSidebar); }
}
function checkMobile() {
  const btn = document.getElementById('mobile-sidebar-btn'); if (!btn) return;
  btn.style.display = window.innerWidth <= 768 ? 'inline-block' : 'none';
}
window.addEventListener('resize', checkMobile);

// ---- keyboard ----
document.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  if (currentSection === 'reader') {
    if (e.key === 'ArrowLeft' && currentChapter > 1) loadChapter(currentChapter - 1);
    if (e.key === 'ArrowRight' && currentChapter < CHAPTERS.length) loadChapter(currentChapter + 1);
  }
  if (e.key === 'Escape') closeCharDetail();
});

// ---- music ----
function ensureAudioReady(a) { if (a && (a.error || a.networkState === 3 || a.readyState === 0)) { try { a.load(); } catch (e) {} } }
function playMusic() {
  const a = document.getElementById('bg-music'); ensureAudioReady(a); a.volume = 0.3; a.play().catch(() => {});
  document.getElementById('music-overlay').classList.remove('visible');
  const b = document.getElementById('music-control'); b.classList.add('visible'); b.textContent = '⏸';
}
function noMusic() {
  document.getElementById('music-overlay').classList.remove('visible');
  const b = document.getElementById('music-control'); b.classList.add('visible'); b.textContent = '▶';
}
function toggleMusic() {
  const a = document.getElementById('bg-music'), b = document.getElementById('music-control');
  if (a.paused) { ensureAudioReady(a); a.play().catch(() => {}); b.textContent = '⏸'; } else { a.pause(); b.textContent = '▶'; }
}
