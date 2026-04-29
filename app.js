/* ============================================================
   مسار التحرر v5.0 — ZUHD Essence
   Optimized JS — app.js
   
   Architecture:
   ├── StorageManager   — Hybrid RAM + IndexedDB + File export
   ├── ImageManager     — Thumbnail generation (200×200 JPEG 70%)
   ├── StateManager     — In-memory state with auto-save
   ├── MapRenderer      — 4K canvas export (3840×2160)
   ├── UIController     — Theme, Lang, Navigation
   └── App              — Bootstrap & coordination
   ============================================================ */
'use strict';

/* ============================================================
   TRANSLATIONS (i18n)
============================================================ */
const TRANSLATIONS = {
  ar: {
    nav_group_start: 'البداية والوعي',
    nav_group_action: 'التغيير والعمل',
    nav_group_sustain: 'الاستمرار والانتصار',
    nav_1: 'البداية والالتزام',
    nav_2: 'التشخيص الصادق',
    nav_3: 'علم الدوبامين',
    nav_4: 'خطة الاستبدال',
    nav_5: 'المتتبع اليومي',
    nav_6: 'تحصين البيئة',
    nav_7: 'صفحة الإنقاذ',
    nav_8: 'شبكة الـ٣٠ يوم',
    nav_9: 'التقرير والخريطة',
    progress_label: 'تقدمك في المسار',
    badge_1: 'مسار علمي + إسلامي مدمج · ٣٠ يوماً',
    hero_title: 'مسار التحرر',
    hero_tagline: 'من الوعي إلى التغيير — خطوة بخطوة',
    card_time: '٣-٥ دقائق',
    card_daily: 'يومياً',
    card_30: '٣٠ يوماً',
    card_cycle: 'دورة كاملة',
    card_science: 'علم نفس + سنّة',
    card_save: 'حفظ تلقائي',
    card_points: 'نظام نقاط وشارات',
    btn_start: 'ابدأ رحلتك الآن ←',
    btn_diagnose: 'ابدأ التشخيص ←',
    why_title: 'لماذا مسار التحرر؟',
    compare_bad: '❌ المنتجات التقليدية',
    compare_good: '✅ مسار التحرر',
    step: 'الخطوة',
    prev: 'السابق',
    footer_tagline: 'الدوبامين الإسلامي — من الوعي إلى التغيير',
    footer_science: '🧠 مبني على علم النفس السلوكي',
    footer_islam: '📖 وفق المنهج الإسلامي',
    footer_copy: 'جميع الحقوق محفوظة © ZUHD Essence 2025',
    photo_label: 'صورتك الشخصية (تظهر في خريطتك الشخصية)',
    photo_hint: 'انقر لرفع صورة (حتى 4K)',
    p2_title: 'التشخيص',
    p2_title2: 'الصادق',
    p2_desc: 'أجب بصدق — هذه ليست محاكمة، بل خريطة تساعدك على فهم نفسك',
    p2_next: 'علم الدوبامين',
    identity_title: 'هويتك في هذا المسار',
    identity_sub: 'اجعل هذا الالتزام شخصياً',
    name_label: 'اسمك أو الاسم الذي تريد أن تُعرف به في مسارك',
    reason_label: 'سبب واحد حقيقي يدفعك لتغيير هذا السلوك',
    triggers_title: 'خريطة المحفزات',
    triggers_sub: 'متى وأين وكيف تبدأ الرغبة؟',
    when_label: 'متى تكون الرغبة أقوى؟',
    where_label: 'أين تكون الرغبة أقوى؟',
    warning_label: 'أول علامة تحذيرية تشعر بها قبل الانتكاسة',
    intensity_label: 'مستوى شدة السلوك (١ = خفيف، ١٠ = شديد جداً)',
    cost_title: 'الثمن الحقيقي',
    cost_q: '"ما الثمن الحقيقي الذي يكلّفك هذا السلوك روحياً، نفسياً، اجتماعياً؟"',
    spiritual: 'الأثر الروحي',
    mental: 'الأثر النفسي',
    social: 'الأثر الاجتماعي',
    theme_dark: '🌑 داكن',
    theme_light: '☀️ فاتح',
    theme_ocean: '🌊 أزرق',
    theme_forest: '🌿 أخضر',
    lang_ar: 'عربي',
    lang_en: 'EN',
    controls_theme: 'الثيم',
    controls_lang: 'اللغة',
    storage_choose: 'اختر مجلد حفظ البيانات',
    storage_hint: 'يُنصح باختيار مجلد خارج النظام مثل D:/AppStorage',
    storage_import: '📥 استيراد البيانات',
    storage_open: '📂 فتح مجلد التخزين',
    storage_export: '💾 تصدير الجلسة',
    storage_saved: '✅ تم الحفظ التلقائي',
    storage_loaded: '📂 تم تحميل البيانات',
  },
  en: {
    nav_group_start: 'Awareness & Beginning',
    nav_group_action: 'Change & Action',
    nav_group_sustain: 'Continuity & Victory',
    nav_1: 'Start & Commitment',
    nav_2: 'Honest Diagnosis',
    nav_3: 'Dopamine Science',
    nav_4: 'Replacement Plan',
    nav_5: 'Daily Tracker',
    nav_6: 'Fortify Environment',
    nav_7: 'Rescue Page',
    nav_8: '30-Day Grid',
    nav_9: 'Report & Map',
    progress_label: 'Your Progress',
    badge_1: 'Science + Islamic Method · 30 Days',
    hero_title: 'Liberation Path',
    hero_tagline: 'From Awareness to Change — Step by Step',
    card_time: '3-5 min',
    card_daily: 'daily',
    card_30: '30 days',
    card_cycle: 'full cycle',
    card_science: 'Psychology + Sunnah',
    card_save: 'Auto-save',
    card_points: 'Points & Badges',
    btn_start: 'Start Your Journey →',
    btn_diagnose: 'Begin Diagnosis →',
    why_title: 'Why Liberation Path?',
    compare_bad: '❌ Traditional Products',
    compare_good: '✅ Liberation Path',
    step: 'Step',
    prev: 'Previous',
    footer_tagline: 'Islamic Dopamine — From Awareness to Change',
    footer_science: '🧠 Built on Behavioral Psychology',
    footer_islam: '📖 Based on Islamic Method',
    footer_copy: 'All rights reserved © ZUHD Essence 2025',
    photo_label: 'Your Profile Photo (shown on your personal map)',
    photo_hint: 'Click to upload (up to 4K)',
    p2_title: 'Honest',
    p2_title2: 'Diagnosis',
    p2_desc: 'Answer honestly — this is not a trial, it is a map to help you understand yourself',
    p2_next: 'Dopamine Science',
    identity_title: 'Your Identity in This Path',
    identity_sub: 'Make this commitment personal',
    name_label: 'Your name or what you want to be known as in your journey',
    reason_label: 'One real reason that drives you to change this behavior',
    triggers_title: 'Trigger Map',
    triggers_sub: 'When, where and how does the urge begin?',
    when_label: 'When is the urge strongest?',
    where_label: 'Where is the urge strongest?',
    warning_label: 'First warning sign you notice before a relapse',
    intensity_label: 'Behavior intensity level (1 = mild, 10 = very severe)',
    cost_title: 'The Real Cost',
    cost_q: '"What is the real cost of this behavior — spiritually, psychologically, socially?"',
    spiritual: 'Spiritual Impact',
    mental: 'Psychological Impact',
    social: 'Social Impact',
    theme_dark: '🌑 Dark',
    theme_light: '☀️ Light',
    theme_ocean: '🌊 Ocean',
    theme_forest: '🌿 Forest',
    lang_ar: 'عربي',
    lang_en: 'EN',
    controls_theme: 'Theme',
    controls_lang: 'Lang',
    storage_choose: 'Choose data save folder',
    storage_hint: 'Recommended: a folder outside system directories, e.g. D:/AppStorage',
    storage_import: '📥 Import Data',
    storage_open: '📂 Open Storage Folder',
    storage_export: '💾 Export Session',
    storage_saved: '✅ Auto-saved',
    storage_loaded: '📂 Data loaded',
  }
};

/* ============================================================
   STORAGE MANAGER
   Hybrid: RAM (primary) → IndexedDB (persistence) → File (export/import)
============================================================ */
const StorageManager = (() => {
  const DB_NAME    = 'masar-v5-db';
  const DB_VERSION = 1;
  const STORE_STATE  = 'state';
  const STORE_PHOTOS = 'photos';

  let _db = null;

  async function openDB() {
    if (_db) return _db;
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = e => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(STORE_STATE))  db.createObjectStore(STORE_STATE);
        if (!db.objectStoreNames.contains(STORE_PHOTOS)) db.createObjectStore(STORE_PHOTOS);
      };
      req.onsuccess  = e => { _db = e.target.result; resolve(_db); };
      req.onerror    = e => reject(e.target.error);
    });
  }

  async function idbSet(storeName, key, value) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx  = db.transaction(storeName, 'readwrite');
      const req = tx.objectStore(storeName).put(value, key);
      req.onsuccess = () => resolve();
      req.onerror   = e => reject(e.target.error);
    });
  }

  async function idbGet(storeName, key) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx  = db.transaction(storeName, 'readonly');
      const req = tx.objectStore(storeName).get(key);
      req.onsuccess = e => resolve(e.target.result);
      req.onerror   = e => reject(e.target.error);
    });
  }

  /** Persist state to IndexedDB (non-blocking) */
  async function saveState(stateObj) {
    // Strip large blobs — photos stored separately
    const lean = { ...stateObj, userPhoto: null };
    await idbSet(STORE_STATE, 'main', lean);
  }

  /** Load state from IndexedDB */
  async function loadState(defaultState) {
    try {
      const saved = await idbGet(STORE_STATE, 'main');
      if (saved) return { ...defaultState, ...saved };
    } catch (e) {
      console.warn('[StorageManager] loadState failed:', e);
    }
    // Fallback: try legacy localStorage
    try {
      const legacy = localStorage.getItem('masar-v4-state');
      if (legacy) {
        const parsed = JSON.parse(legacy);
        // Migrate: remove large base64 photo from state
        delete parsed.userPhoto;
        return { ...defaultState, ...parsed };
      }
    } catch (_) {}
    return { ...defaultState };
  }

  /** Save thumbnail (blob) to IndexedDB photos store */
  async function savePhoto(blob) {
    await idbSet(STORE_PHOTOS, 'profile', blob);
  }

  /** Load thumbnail blob from IndexedDB */
  async function loadPhoto() {
    return idbGet(STORE_PHOTOS, 'profile');
  }

  /** Export full session to a JSON file download */
  function exportSession(stateObj) {
    const payload = JSON.stringify({ version: 5, exportedAt: Date.now(), state: stateObj });
    const blob = new Blob([payload], { type: 'application/json' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = `masar-session-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  /** Import session from a JSON file chosen by the user */
  function importSession(onSuccess) {
    const input   = document.createElement('input');
    input.type    = 'file';
    input.accept  = '.json';
    input.onchange = async e => {
      const file = e.target.files[0];
      if (!file) return;
      try {
        const text   = await file.text();
        const parsed = JSON.parse(text);
        const data   = parsed.state || parsed; // support both formats
        onSuccess(data);
      } catch (err) {
        console.error('[StorageManager] importSession parse error:', err);
      }
    };
    input.click();
  }

  return { saveState, loadState, savePhoto, loadPhoto, exportSession, importSession };
})();

/* ============================================================
   IMAGE MANAGER
   Creates 200×200 JPEG 70% thumbnail — never stores original
============================================================ */
const ImageManager = (() => {
  const THUMB_SIZE    = 200;
  const THUMB_QUALITY = 0.70;

  /**
   * Accepts a File object.
   * Returns: { objectUrl: string, blob: Blob }
   * objectUrl is a temporary blob URL for preview — revoke when done.
   */
  function createThumbnail(file) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const src = URL.createObjectURL(file);

      img.onload = () => {
        URL.revokeObjectURL(src); // Free original file memory immediately

        const canvas  = document.createElement('canvas');
        canvas.width  = THUMB_SIZE;
        canvas.height = THUMB_SIZE;
        const ctx     = canvas.getContext('2d');

        // Cover-fit: crop to square from center
        const size    = Math.min(img.width, img.height);
        const sx      = (img.width  - size) / 2;
        const sy      = (img.height - size) / 2;
        ctx.drawImage(img, sx, sy, size, size, 0, 0, THUMB_SIZE, THUMB_SIZE);

        canvas.toBlob(blob => {
          if (!blob) { reject(new Error('toBlob failed')); return; }
          const objectUrl = URL.createObjectURL(blob);
          resolve({ objectUrl, blob });
        }, 'image/jpeg', THUMB_QUALITY);
      };

      img.onerror = () => { URL.revokeObjectURL(src); reject(new Error('Image load failed')); };
      img.src     = src;
    });
  }

  return { createThumbnail };
})();

/* ============================================================
   STATE MANAGER
   In-memory state, dirty-tracking, auto-save every 10s
============================================================ */
const StateManager = (() => {
  const DEFAULT_STATE = {
    currentPage: 1,
    completedPages: [],
    weeklyScore: 0,
    totalPoints: 0,
    level: 1,
    xp: 0,
    thirtyDays: new Array(30).fill(false),
    trackerData: {},
    userName: '',
    userReason: '',
    keyword: '',
    timeTriggers: [],
    placeTriggers: [],
    warnSign: '',
    intensity: 5,
    theme: 'dark',
    lang: 'ar',
    unlockedBadges: [],
    achievementShown: [],
    mapZoom: 1,
    mapPanX: 0,
    mapPanY: 0,
  };

  let _state      = { ...DEFAULT_STATE };
  let _dirty      = false;
  let _saveTimer  = null;
  let _thumbUrl   = null; // In-memory only blob URL for profile photo

  /** Internal: mark state as needing save */
  function _markDirty() {
    _dirty = true;
  }

  /** Flush to IndexedDB if dirty */
  async function flush() {
    if (!_dirty) return;
    _dirty = false;
    await StorageManager.saveState(_state);
  }

  /** Start auto-save loop every 10 seconds */
  function startAutoSave() {
    _saveTimer = setInterval(() => {
      flush().then(() => {
        if (_dirty === false) {
          // Only toast if a save actually happened
        }
      });
    }, 10_000);

    // Save on page hide (tab close / navigation)
    window.addEventListener('pagehide', () => flush());
    window.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') flush();
    });
  }

  /** Load state from IndexedDB on startup */
  async function init() {
    _state = await StorageManager.loadState(DEFAULT_STATE);

    // Load thumbnail from IndexedDB
    const photoBlob = await StorageManager.loadPhoto();
    if (photoBlob) {
      _thumbUrl = URL.createObjectURL(photoBlob);
    }

    startAutoSave();
    return _state;
  }

  /** Get a shallow copy of state (read-only pattern) */
  function get() { return _state; }

  /** Update state fields and mark dirty */
  function set(updates) {
    Object.assign(_state, updates);
    _markDirty();
  }

  /** Direct mutation + dirty mark (for arrays/objects modified in-place) */
  function touch() { _markDirty(); }

  /** Replace entire state (used by import) */
  function replace(newState) {
    _state = { ...DEFAULT_STATE, ...newState };
    _dirty = true;
    return flush();
  }

  function getThumbnailUrl()               { return _thumbUrl; }
  function setThumbnailUrl(url)            { _thumbUrl = url; }

  function exportSession() {
    StorageManager.exportSession(_state);
  }

  function importSession(onDone) {
    StorageManager.importSession(async data => {
      await replace(data);
      onDone();
    });
  }

  return { init, get, set, touch, flush, getThumbnailUrl, setThumbnailUrl, exportSession, importSession };
})();

/* ============================================================
   Convenience alias — keeps existing call-sites working
============================================================ */
function saveState()          { StateManager.touch(); StateManager.flush(); }
function getState()           { return StateManager.get(); }

/* shorthand used throughout */
let state; // will be set after StateManager.init() resolves

/* ============================================================
   PHOTO UPLOAD  (no base64 in state/localStorage)
============================================================ */
async function handlePhotoUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  try {
    showToast(state.lang === 'ar' ? '⏳ جارٍ معالجة الصورة…' : '⏳ Processing image…');

    const { objectUrl, blob } = await ImageManager.createThumbnail(file);

    // Revoke previous URL to free memory
    const prev = StateManager.getThumbnailUrl();
    if (prev) URL.revokeObjectURL(prev);

    StateManager.setThumbnailUrl(objectUrl);

    // Persist thumbnail blob to IndexedDB
    await StorageManager.savePhoto(blob);

    renderPhotoPreview(objectUrl);
    showToast('📷 ' + (state.lang === 'ar' ? 'تم رفع الصورة بنجاح!' : 'Photo uploaded!'));
  } catch (err) {
    console.error('[handlePhotoUpload]', err);
    showToast(state.lang === 'ar' ? '⚠️ فشل رفع الصورة' : '⚠️ Upload failed');
  }
}

function renderPhotoPreview(url) {
  const preview = document.getElementById('photo-preview');
  if (!preview || !url) return;
  const hint = state.lang === 'ar' ? 'انقر للتغيير' : 'Click to change';
  preview.innerHTML = `<img src="${url}" alt="photo" class="photo-uploaded" loading="lazy"><div class="photo-hint" style="font-size:0.68rem;">${hint}</div>`;
}

/* ============================================================
   SYNC INPUTS  (debounced to avoid excess writes)
============================================================ */
const FIELD_MAP = {
  'user-name':    'userName',
  'user-reason':  'userReason',
  'keyword':      'keyword',
  'warning-sign': 'warnSign',
};

let _syncDebounce = null;
function syncInputsToState() {
  clearTimeout(_syncDebounce);
  _syncDebounce = setTimeout(() => {
    const updates = {};
    Object.entries(FIELD_MAP).forEach(([id, key]) => {
      const el = document.getElementById(id);
      if (el) updates[key] = el.value;
    });
    const slider = document.getElementById('intensity-slider');
    if (slider) updates.intensity = parseInt(slider.value);
    StateManager.set(updates);
  }, 300);
}

function restoreInputsFromState() {
  Object.entries(FIELD_MAP).forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el && state[key]) el.value = state[key];
  });
  const slider = document.getElementById('intensity-slider');
  if (slider) {
    slider.value = state.intensity || 5;
    updateSlider(slider);
  }
  const dateEl = document.getElementById('commitment-date');
  if (dateEl) dateEl.value = new Date().toISOString().split('T')[0];

  // Restore photo from in-memory blob URL
  const thumbUrl = StateManager.getThumbnailUrl();
  if (thumbUrl) renderPhotoPreview(thumbUrl);
}

/* ============================================================
   SLIDER
============================================================ */
function updateSlider(el) {
  const val = document.getElementById('slider-val');
  if (val) val.textContent = el.value;
  StateManager.set({ intensity: parseInt(el.value) });
}

/* ============================================================
   MULTILINGUAL (i18n)
============================================================ */
function setLang(lang) {
  if (!TRANSLATIONS[lang]) lang = 'ar';
  const isRTL = lang === 'ar';

  StateManager.set({ lang });
  state = StateManager.get();

  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');

  document.querySelectorAll('.ctrl-lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  const t = TRANSLATIONS[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  const themeLabel = document.getElementById('ctrl-theme-label');
  const langLabel  = document.getElementById('ctrl-lang-label');
  if (themeLabel) themeLabel.textContent = t.controls_theme || (isRTL ? 'الثيم' : 'Theme');
  if (langLabel)  langLabel.textContent  = t.controls_lang  || (isRTL ? 'اللغة' : 'Lang');

  StateManager.flush();
}

function initLang() { setLang(state.lang || 'ar'); }

/* ============================================================
   NAVIGATION
============================================================ */
const PAGE_GROUP_MAP = { 1:'navgroup-1', 2:'navgroup-1', 3:'navgroup-1', 4:'navgroup-2', 5:'navgroup-2', 6:'navgroup-2', 7:'navgroup-3', 8:'navgroup-3', 9:'navgroup-3' };

function initNavGroups() {
  document.getElementById('navgroup-1')?.classList.add('open');
}

function toggleNavGroup(groupId) {
  const group  = document.getElementById(groupId);
  if (!group) return;
  const isOpen = group.classList.contains('open');
  document.querySelectorAll('.nav-group').forEach(g => g.classList.remove('open'));
  if (!isOpen) group.classList.add('open');
}

function showPage(num) {
  // Hide all, show target
  document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
  document.getElementById('page-' + num)?.classList.add('active');

  // Nav active state
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', (link.getAttribute('onclick') || '').includes(`showPage(${num})`));
  });

  autoOpenNavGroup(num);

  const s = StateManager.get();
  if (!s.completedPages.includes(num)) {
    s.completedPages.push(num);
    addXP(10);
  }

  markNavCheck(num);
  StateManager.set({ currentPage: num });
  state = StateManager.get();

  updateProgress();
  checkAchievements(`page_${num}`);
  checkBadges();

  document.getElementById('sidebar')?.classList.remove('open');
  document.getElementById('overlay')?.classList.remove('visible');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  StateManager.flush();
}

function autoOpenNavGroup(pageNum) {
  const groupId = PAGE_GROUP_MAP[pageNum];
  if (!groupId) return;
  document.querySelectorAll('.nav-group').forEach(g => g.classList.remove('open'));
  document.getElementById(groupId)?.classList.add('open');
}

function markNavCheck(pageNum) {
  document.getElementById(`nc-${pageNum}`)?.classList.add('done');
}

function updateProgress() {
  const visited = new Set(state.completedPages).size;
  const pct     = Math.round((visited / 9) * 100);
  const fill    = document.getElementById('progress-fill');
  const pctEl   = document.getElementById('progress-pct');
  if (fill)  fill.style.width   = pct + '%';
  if (pctEl) pctEl.textContent  = pct + (state.lang === 'ar' ? '٪' : '%');
}

function toggleSidebar() {
  document.getElementById('sidebar')?.classList.toggle('open');
  document.getElementById('overlay')?.classList.toggle('visible');
}

/* ============================================================
   THEME SYSTEM
============================================================ */
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  StateManager.set({ theme });
  state = StateManager.get();
  document.querySelectorAll('.ctrl-theme-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.theme === theme);
  });
  StateManager.flush();
}

function initTheme() { setTheme(state.theme || 'dark'); }

/* ============================================================
   GAMIFICATION — LEVELS & BADGES
============================================================ */
const LEVELS = [
  { min: 0,   name: { ar: 'مبتدئ',   en: 'Beginner'  }, icon: '🌱' },
  { min: 50,  name: { ar: 'مدرك',    en: 'Aware'     }, icon: '👁' },
  { min: 150, name: { ar: 'مجاهد',   en: 'Striver'   }, icon: '⚔️' },
  { min: 300, name: { ar: 'ثابت',    en: 'Steadfast' }, icon: '🏔' },
  { min: 500, name: { ar: 'محرر',    en: 'Liberated' }, icon: '🦅' },
  { min: 800, name: { ar: 'قائد',    en: 'Leader'    }, icon: '🌟' },
];

const getLevelName = lvl => lvl.name[state.lang] || lvl.name.ar;

const BADGES_CONFIG = [
  { id: 'first_step',   icon: '🚀', name: { ar: 'الخطوة الأولى',   en: 'First Step'    }, desc: { ar: 'بدأت رحلتك',      en: 'Started your journey' }, condition: () => state.completedPages.length >= 1 },
  { id: 'explorer',     icon: '🗺', name: { ar: 'المستكشف',        en: 'Explorer'      }, desc: { ar: 'زرت ٥ صفحات',     en: 'Visited 5 pages'      }, condition: () => new Set(state.completedPages).size >= 5 },
  { id: 'week_warrior', icon: '🔥', name: { ar: 'محارب الأسبوع',   en: 'Week Warrior'  }, desc: { ar: '٧ أيام متتالية',  en: '7 days streak'        }, condition: () => getStreak() >= 7 },
  { id: 'half_way',     icon: '⭐', name: { ar: 'منتصف الطريق',    en: 'Halfway'       }, desc: { ar: '١٥ يوم مكتمل',   en: '15 days done'         }, condition: () => state.thirtyDays.filter(Boolean).length >= 15 },
  { id: 'champion',     icon: '🏆', name: { ar: 'البطل',           en: 'Champion'      }, desc: { ar: '٣٠ يوم مكتمل!',  en: '30 days done!'        }, condition: () => state.thirtyDays.filter(Boolean).length >= 30 },
  { id: 'habit_master', icon: '💎', name: { ar: 'سيد العادة',      en: 'Habit Master'  }, desc: { ar: '٤٠+ نقطة أسبوعية', en: '40+ weekly points'  }, condition: () => Object.values(state.trackerData).filter(Boolean).length >= 40 },
];

const ACHIEVEMENTS = [
  { id: 'welcome',   trigger: 'page_1', title: '🌙 أهلاً بك!',        desc: 'رحلتك بدأت الآن'       },
  { id: 'diagnosis', trigger: 'page_2', title: '🔍 الشجاعة الأولى',   desc: 'واجهت نفسك بصدق'       },
  { id: 'science',   trigger: 'page_3', title: '🧠 العقل العارف',     desc: 'فهمت الآلية'            },
  { id: 'plan',      trigger: 'page_4', title: '🗝 عندك مفتاح',       desc: 'وضعت خطة الاستبدال'    },
  { id: 'tracker',   trigger: 'page_5', title: '📊 المتتبع',          desc: 'بدأت القياس'            },
  { id: 'fortress',  trigger: 'page_6', title: '🛡 المحصّن',          desc: 'حصّنت بيئتك'           },
  { id: 'rescue',    trigger: 'page_7', title: '⚓ المنقذ',           desc: 'عندك بروتوكول إنقاذ'   },
  { id: 'grid',      trigger: 'page_8', title: '🗓 حارس الأيام',      desc: 'بدأت شبكة الـ٣٠ يوم'  },
  { id: 'map',       trigger: 'page_9', title: '🗺 عندك خريطة!',      desc: 'اكتملت رحلتك الأولى'  },
];

function addXP(amount) {
  StateManager.set({ xp: state.xp + amount, totalPoints: state.totalPoints + amount });
  state = StateManager.get();
  updateLevel();
  updatePointsDisplay();
}

function updateLevel() {
  let newLevel = 1;
  LEVELS.forEach((lvl, i) => { if (state.xp >= lvl.min) newLevel = i + 1; });
  if (newLevel > state.level) {
    StateManager.set({ level: newLevel });
    state = StateManager.get();
    const lvl = LEVELS[newLevel - 1];
    const msg = state.lang === 'ar' ? `أصبحت ${getLevelName(lvl)}!` : `You are now ${getLevelName(lvl)}!`;
    showAchievementPopup(`${lvl.icon} ${state.lang === 'ar' ? 'مستوى جديد!' : 'New Level!'}`, msg);
  }
}

function updatePointsDisplay() {
  const el      = document.getElementById('sidebar-points-val');
  if (el) el.textContent = state.totalPoints;

  const levelEl = document.getElementById('sidebar-level');
  const lvl     = LEVELS[Math.min(state.level - 1, LEVELS.length - 1)];
  if (levelEl && lvl) levelEl.textContent = `${lvl.icon} ${getLevelName(lvl)}`;

  const nextLvl   = LEVELS[state.level] || LEVELS[LEVELS.length - 1];
  const curLvl    = LEVELS[state.level - 1];
  const xpInLevel = state.xp - curLvl.min;
  const xpNeeded  = nextLvl.min - curLvl.min;
  const pct       = Math.min(100, Math.round((xpInLevel / (xpNeeded || 1)) * 100));

  const xpFill  = document.getElementById('xp-fill');
  const xpLabel = document.getElementById('xp-label');
  if (xpFill)  xpFill.style.width  = pct + '%';
  if (xpLabel) xpLabel.textContent = `${state.xp} / ${nextLvl.min}`;
}

function checkBadges() {
  let newUnlock = false;
  BADGES_CONFIG.forEach(badge => {
    if (!state.unlockedBadges.includes(badge.id) && badge.condition()) {
      state.unlockedBadges.push(badge.id);
      const msg = state.lang === 'ar' ? 'شارة جديدة!' : 'New Badge!';
      showAchievementPopup(badge.icon + ' ' + msg, badge.desc[state.lang] || badge.desc.ar);
      addXP(25);
      newUnlock = true;
    }
  });
  if (newUnlock) renderBadges();
}

function checkAchievements(trigger) {
  ACHIEVEMENTS.forEach(ach => {
    if (ach.trigger === trigger && !state.achievementShown.includes(ach.id)) {
      state.achievementShown.push(ach.id);
      setTimeout(() => showAchievementPopup(ach.title, ach.desc), 800);
    }
  });
}

function showAchievementPopup(title, desc) {
  const popup = document.getElementById('achievement-popup');
  if (!popup) return;
  document.getElementById('achievement-title').textContent = title;
  document.getElementById('achievement-desc').textContent  = desc;
  popup.classList.add('show');
  setTimeout(() => popup.classList.remove('show'), 4000);
}

function renderBadges() {
  const container = document.getElementById('badges-grid');
  if (!container) return;
  // Use DocumentFragment for a single DOM write
  const frag = document.createDocumentFragment();
  BADGES_CONFIG.forEach(badge => {
    const isUnlocked = state.unlockedBadges.includes(badge.id);
    const el         = document.createElement('div');
    el.className     = `earned-badge ${isUnlocked ? 'unlocked' : 'locked'}`;
    el.title         = badge.desc[state.lang] || badge.desc.ar;
    el.innerHTML     = `<span class="earned-badge-icon">${badge.icon}</span><span class="earned-badge-name">${badge.name[state.lang] || badge.name.ar}</span>`;
    frag.appendChild(el);
  });
  container.innerHTML = '';
  container.appendChild(frag);
}

/* ============================================================
   INTERACTIVE OPTIONS
============================================================ */
function toggleOpt(el, group) {
  el.classList.toggle('selected');
  if (group) {
    const vals = [];
    document.querySelectorAll(`#${group}-triggers .radio-opt.selected`).forEach(opt => vals.push(opt.dataset.val));
    StateManager.set({ [group === 'time' ? 'timeTriggers' : 'placeTriggers']: vals });
    state = StateManager.get();
  }
  addXP(2);
  StateManager.flush();
}

function toggleDoor(card) {
  card.classList.toggle('expanded');
  if (card.classList.contains('expanded')) addXP(5);
}

/* ============================================================
   HABIT TRACKER
============================================================ */
const HABITS = {
  ar: [
    { name: '🤲 صلاة الفجر',     points: 5, color: 'gold'   },
    { name: '📖 ورد قرآني',       points: 5, color: 'teal'   },
    { name: '🏃 رياضة',           points: 4, color: 'blue'   },
    { name: '🧘 تأمل/ذكر',       points: 3, color: 'purple' },
    { name: '📵 بدون محفزات',    points: 6, color: 'orange' },
    { name: '😴 نوم مبكر',       points: 3, color: 'green'  },
    { name: '✍️ يوميات',         points: 2, color: 'red'    },
  ],
  en: [
    { name: '🤲 Fajr Prayer',     points: 5, color: 'gold'   },
    { name: '📖 Quran Reading',   points: 5, color: 'teal'   },
    { name: '🏃 Exercise',        points: 4, color: 'blue'   },
    { name: '🧘 Dhikr/Meditation',points: 3, color: 'purple' },
    { name: '📵 Trigger-free',   points: 6, color: 'orange' },
    { name: '😴 Early Sleep',    points: 3, color: 'green'  },
    { name: '✍️ Journal',        points: 2, color: 'red'    },
  ],
};

const DAYS = {
  ar: ['الأحد','الإثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'],
  en: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
};

function buildTracker() {
  const grid = document.getElementById('habit-tracker');
  if (!grid) return;

  const habits   = HABITS[state.lang] || HABITS.ar;
  const dayNames = DAYS[state.lang]   || DAYS.ar;

  // Update day labels
  document.querySelectorAll('.day-label').forEach((el, i) => {
    if (dayNames[i]) el.textContent = dayNames[i];
  });

  const frag = document.createDocumentFragment();
  habits.forEach((habit, hi) => {
    const nameCell       = document.createElement('div');
    nameCell.className   = 'tracker-habit-name';
    nameCell.textContent = habit.name;
    frag.appendChild(nameCell);

    for (let d = 0; d < 7; d++) {
      const key  = `${hi}-${d}`;
      const cell = document.createElement('div');
      cell.className = `tracker-cell ${habit.color}`;
      if (state.trackerData[key]) cell.classList.add('filled');
      cell.onclick = () => {
        const wasFilled = cell.classList.contains('filled');
        cell.classList.toggle('filled');
        state.trackerData[key] = !wasFilled;
        StateManager.touch();
        if (!wasFilled) {
          addXP(habit.points);
          showToast(`✓ ${habit.name} — +${habit.points}`);
        } else {
          showToast(state.lang === 'ar' ? '↩ تم الإلغاء' : '↩ Undone');
        }
        updateWeeklyScore();
        checkBadges();
        StateManager.flush();
      };
      frag.appendChild(cell);
    }
  });

  grid.innerHTML = '';
  grid.appendChild(frag);
}

function updateWeeklyScore() {
  const total = Object.values(state.trackerData).filter(Boolean).length;
  StateManager.set({ weeklyScore: total });
  state = StateManager.get();
  const el = document.getElementById('weekly-score');
  if (el) animateNumber(el, parseInt(el.textContent) || 0, total);
}

function animateNumber(el, from, to) {
  if (from === to) return;
  const diff  = to - from;
  const steps = 20;
  let step    = 0;
  const iv    = setInterval(() => {
    step++;
    el.textContent = Math.round(from + (diff * step / steps));
    if (step >= steps) { el.textContent = to; clearInterval(iv); }
  }, 20);
}

/* ============================================================
   30-DAY GRID
============================================================ */
function build30Grid() {
  const grid = document.getElementById('thirty-grid');
  if (!grid) return;
  const today = new Date().getDate();
  const frag  = document.createDocumentFragment();

  for (let i = 0; i < 30; i++) {
    const cell       = document.createElement('div');
    cell.className   = 'day-cell';
    cell.textContent = i + 1;
    if (state.thirtyDays[i]) cell.classList.add('filled');
    if (i + 1 === today)     cell.classList.add('today');

    cell.onclick = () => {
      const wasFilled = state.thirtyDays[i];
      state.thirtyDays[i] = !wasFilled;
      StateManager.touch();
      cell.classList.toggle('filled');
      if (!wasFilled) {
        addXP(20);
        showToast(state.lang === 'ar' ? `✓ يوم ${i+1} — +٢٠ نقطة` : `✓ Day ${i+1} — +20 pts`);
      }
      update30Stats();
      checkBadges();
      StateManager.flush();
    };
    frag.appendChild(cell);
  }

  grid.innerHTML = '';
  grid.appendChild(frag);
  update30Stats();
}

function markToday() {
  const today = new Date().getDate() - 1;
  if (today < 0 || today >= 30) return;
  const cells = document.querySelectorAll('.day-cell');
  const cell  = cells[today];
  if (cell && !state.thirtyDays[today]) {
    state.thirtyDays[today] = true;
    StateManager.touch();
    cell.classList.add('filled');
    addXP(20);
    showToast(state.lang === 'ar' ? '✓ يوم اليوم مكتمل — +٢٠ نقطة 🎉' : '✓ Today marked — +20 pts 🎉');
    update30Stats();
    checkBadges();
    StateManager.flush();
  } else {
    showToast(state.lang === 'ar' ? '✓ اليوم مظلّل بالفعل' : '✓ Already marked');
  }
}

function resetGrid() {
  if (!confirm(state.lang === 'ar' ? 'هل تريد إعادة تعيين الشبكة؟' : 'Reset the grid?')) return;
  StateManager.set({ thirtyDays: new Array(30).fill(false) });
  state = StateManager.get();
  build30Grid();
  StateManager.flush();
  showToast(state.lang === 'ar' ? '🔄 تم إعادة التعيين' : '🔄 Grid reset');
}

function update30Stats() {
  const done   = state.thirtyDays.filter(Boolean).length;
  const streak = getStreak();
  const pct    = Math.round((done / 30) * 100);

  setStatAnimated('days-done',  done);
  setStatAnimated('days-left',  30 - done);
  setStatAnimated('streak-count', streak);

  const pctEl = document.getElementById('completion-pct');
  if (pctEl) pctEl.textContent = pct + (state.lang === 'ar' ? '٪' : '%');

  const ringNum  = document.getElementById('ring-days');
  if (ringNum) ringNum.textContent = done;

  const ringFill = document.querySelector('#page-8 .score-ring-fill');
  if (ringFill) ringFill.style.strokeDashoffset = 377 - (377 * pct / 100);
}

function setStatAnimated(id, value) {
  const el = document.getElementById(id);
  if (el) animateNumber(el, parseInt(el.textContent) || 0, value);
}

function getStreak() {
  let streak = 0;
  const rev  = [...state.thirtyDays].reverse();
  for (const d of rev) {
    if (d) streak++;
    else break;
  }
  return streak;
}

/* ============================================================
   CHECKLISTS
============================================================ */
const CHECKLIST_ITEMS = {
  phone: {
    ar: ['حذف تطبيقات المحفزات من الشاشة الرئيسية','تفعيل وضع الرمادي (Grayscale) على الشاشة','ضبط حدود الاستخدام على التطبيقات الإشكالية','وضع الهاتف في غرفة أخرى بعد العشاء','تعطيل الإشعارات غير الضرورية','تفعيل وضع عدم الإزعاج ليلاً','استخدام ساعة منبه عادية بدل الهاتف'],
    en: ['Delete trigger apps from home screen','Enable Grayscale mode on screen','Set app usage limits for problematic apps','Leave phone in another room after dinner','Disable unnecessary notifications','Enable Do Not Disturb at night','Use a regular alarm clock instead of phone'],
  },
  space: {
    ar: ['تحديد "منطقة خالية من الشاشات" في المنزل','إبقاء باب الغرفة مفتوحاً وقت الخطر','وضع مذكّر بصري (آية أو هدف) في مكان واضح','ترتيب مكان الجلوس لأنشطة إيجابية فقط','إزالة مثيرات السلوك من محيطك المباشر'],
    en: ['Designate a "screen-free zone" at home','Keep room door open during danger times','Place a visual reminder (verse or goal) in a visible spot','Arrange seating for positive activities only','Remove behavior triggers from your direct environment'],
  },
};

function buildChecklist(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const frag = document.createDocumentFragment();
  items.forEach(item => {
    const div     = document.createElement('div');
    div.className = 'check-item';
    div.innerHTML = `<div class="check-box"></div><div class="check-text">${item}</div>`;
    div.onclick   = function() {
      const box       = this.querySelector('.check-box');
      const wasChecked = box.classList.contains('checked');
      box.classList.toggle('checked');
      this.classList.toggle('done');
      if (!wasChecked) {
        addXP(5);
        showToast(state.lang === 'ar' ? '✓ تم — +٥ نقاط' : '✓ Done — +5 pts');
      }
      checkBadges();
      StateManager.flush();
    };
    frag.appendChild(div);
  });
  container.innerHTML = '';
  container.appendChild(frag);
}

function rebuildChecklists() {
  const lang = state.lang || 'ar';
  buildChecklist('phone-checks', CHECKLIST_ITEMS.phone[lang] || CHECKLIST_ITEMS.phone.ar);
  buildChecklist('space-checks', CHECKLIST_ITEMS.space[lang] || CHECKLIST_ITEMS.space.ar);
}

/* ============================================================
   RESCUE STEPS
============================================================ */
const RESCUE_STEPS = {
  ar: [
    { num: '١', title: 'توقف',             desc: 'لا تستمر — القطيعة الآن أهم من أي شيء' },
    { num: '٢', title: 'استغفر',           desc: 'قل "رب اغفر لي" — الآن. لا تنتظر أن تشعر بالاستحقاق' },
    { num: '٣', title: 'لا تحاكم نفسك',   desc: 'لا "أنا فاشل" — بل "هذا اختبار وسأعود"' },
    { num: '٤', title: 'حلّل',             desc: 'ما الذي أوصلك هنا؟ ستسد الثغرة الآن' },
    { num: '٥', title: 'ابدأ اليوم',       desc: 'لا تنتظر يوم الاثنين — ابدأ من الصلاة القادمة' },
  ],
  en: [
    { num: '1', title: 'Stop',             desc: "Don't continue — breaking off now is more important than anything" },
    { num: '2', title: 'Seek Forgiveness', desc: "Say 'Lord forgive me' — right now. Don't wait to feel worthy" },
    { num: '3', title: "Don't Self-Judge", desc: "Not 'I'm a failure' — but 'This is a test and I will return'" },
    { num: '4', title: 'Analyze',          desc: 'What brought you here? You will close that gap now' },
    { num: '5', title: 'Start Today',      desc: "Don't wait for Monday — start from the next prayer" },
  ],
};

function buildRescueSteps() {
  const container = document.getElementById('rescue-steps');
  if (!container) return;
  const steps = RESCUE_STEPS[state.lang] || RESCUE_STEPS.ar;
  const frag  = document.createDocumentFragment();
  steps.forEach((s, i) => {
    const el             = document.createElement('div');
    el.className         = 'step-item';
    el.style.animationDelay = (i * 0.1) + 's';
    el.innerHTML         = `<div class="step-num">${s.num}</div><div class="step-content"><div class="step-title">${s.title}</div><div class="step-desc">${s.desc}</div></div>`;
    frag.appendChild(el);
  });
  container.innerHTML = '';
  container.appendChild(frag);
}

/* ============================================================
   DOPAMINE DIAGRAM
============================================================ */
const DOPAMINE_NODES = {
  ar: [{ icon: '⚡', label: 'المحفز' },{ icon: '🧠', label: 'الرغبة' },{ icon: '🏃', label: 'السلوك' },{ icon: '💊', label: 'الدوبامين' },{ icon: '🔄', label: 'التكرار' }],
  en: [{ icon: '⚡', label: 'Trigger' },{ icon: '🧠', label: 'Craving' },{ icon: '🏃', label: 'Behavior' },{ icon: '💊', label: 'Dopamine' },{ icon: '🔄', label: 'Repetition' }],
};

function buildDopamineDiagram() {
  const container = document.getElementById('dopamine-diagram');
  if (!container) return;
  const nodes = DOPAMINE_NODES[state.lang] || DOPAMINE_NODES.ar;
  container.innerHTML = `<div class="dopamine-flow">${nodes.map((n, i) =>
    `<div class="flow-node" style="animation-delay:${i*0.1}s"><span class="flow-node-icon">${n.icon}</span><span class="flow-node-label">${n.label}</span></div>${i < nodes.length - 1 ? '<div class="flow-arrow">←</div>' : ''}`
  ).join('')}</div>`;
}

/* ============================================================
   INTERACTIVE MAP (Canvas-based)
============================================================ */
const MapRenderer = (() => {
  let canvas = null;
  let ctx    = null;

  // Mutable map state (local to renderer, synced to StateManager)
  let zoom   = 1;
  let panX   = 0;
  let panY   = 0;
  let isDragging   = false;
  let dragStart    = { x: 0, y: 0 };
  let nodes        = [];
  let touchDist    = 0;

  // RAF deduplication
  let _rafPending  = false;
  function _scheduleRender() {
    if (_rafPending) return;
    _rafPending = true;
    requestAnimationFrame(() => {
      _rafPending = false;
      render();
    });
  }

  function init() {
    canvas = document.getElementById('interactive-map-canvas');
    if (!canvas) return;
    ctx    = canvas.getContext('2d');

    _resize();
    rebuildNodes();
    _scheduleRender();

    canvas.addEventListener('wheel',      _onWheel,      { passive: false });
    canvas.addEventListener('mousedown',  _onMouseDown);
    canvas.addEventListener('mousemove',  _onMouseMove);
    canvas.addEventListener('mouseup',    _onMouseUp);
    canvas.addEventListener('mouseleave', _onMouseUp);
    canvas.addEventListener('touchstart', _onTouchStart, { passive: false });
    canvas.addEventListener('touchmove',  _onTouchMove,  { passive: false });
    canvas.addEventListener('touchend',   _onTouchEnd);

    // Restore saved pan/zoom
    zoom = state.mapZoom || 1;
    panX = state.mapPanX || 0;
    panY = state.mapPanY || 0;
  }

  function _resize() {
    if (!canvas) return;
    const W    = canvas.parentElement?.clientWidth || 700;
    const H    = Math.max(420, W * 0.55);
    canvas.width  = W;
    canvas.height = H;
  }

  function rebuildNodes() {
    const s        = StateManager.get();
    const done30   = s.thirtyDays.filter(Boolean).length;
    const streak   = getStreak();
    const habits   = Object.values(s.trackerData).filter(Boolean).length;
    const score    = calculateOverallScore(done30, habits, new Set(s.completedPages).size);
    const timeTags = s.timeTriggers.slice(0, 3).join(', ')  || (s.lang === 'ar' ? 'غير محدد' : 'Not set');
    const placeTags= s.placeTriggers.slice(0, 2).join(', ') || (s.lang === 'ar' ? 'غير محدد' : 'Not set');
    const name     = s.userName || (s.lang === 'ar' ? 'أنت' : 'You');

    nodes = [
      { x: 0.5,  y: 0.12, icon: '🧭', label: s.lang === 'ar' ? 'مسار التحرر' : 'Liberation Path', sub: name,        type: 'title',  size: 1.4 },
      { x: 0.18, y: 0.32, icon: '⚡', label: s.lang === 'ar' ? 'أوقات الخطر' : 'Danger Times',    sub: timeTags,    type: 'danger'  },
      { x: 0.82, y: 0.32, icon: '📍', label: s.lang === 'ar' ? 'أماكن الخطر' : 'Danger Places',   sub: placeTags,   type: 'danger'  },
      { x: 0.18, y: 0.62, icon: '🎯', label: s.lang === 'ar' ? 'السبب الحقيقي' : 'Real Reason',   sub: (s.userReason || '—').substring(0, 30), type: 'goal' },
      { x: 0.82, y: 0.62, icon: '🔑', label: s.lang === 'ar' ? 'كلمتي السرية' : 'Secret Word',    sub: s.keyword || '—', type: 'goal' },
      { x: 0.5,  y: 0.47, icon: '⭐', label: s.lang === 'ar' ? `نتيجتي ${score}٪` : `Score ${score}%`, sub: `${done30} ${s.lang === 'ar' ? 'يوم' : 'days'} · ${streak} 🔥`, type: 'score', size: 1.2 },
      { x: 0.28, y: 0.82, icon: '📊', label: s.lang === 'ar' ? 'العادات'    : 'Habits',     sub: `${habits} ✓`,                     type: 'stat' },
      { x: 0.5,  y: 0.88, icon: '🛡', label: s.lang === 'ar' ? 'البروتوكول' : 'Protocol',   sub: s.lang === 'ar' ? 'جاهز' : 'Ready', type: 'stat' },
      { x: 0.72, y: 0.82, icon: '🔥', label: s.lang === 'ar' ? 'الاستمرارية': 'Streak',     sub: `${streak} ${s.lang === 'ar' ? 'يوم' : 'days'}`, type: 'stat' },
    ];
  }

  function render() {
    if (!ctx || !canvas) return;
    const W = canvas.width, H = canvas.height;

    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#07090d';
    ctx.fillRect(0, 0, W, H);

    ctx.save();
    ctx.translate(panX, panY);
    ctx.scale(zoom, zoom);

    _drawGrid(W / zoom, H / zoom);
    _drawConnections(W / zoom, H / zoom);
    _drawNodes(W / zoom, H / zoom);

    ctx.restore();

    ctx.fillStyle = 'rgba(201,168,76,0.5)';
    ctx.font      = '11px Cairo, sans-serif';
    ctx.fillText(`${Math.round(zoom * 100)}%`, 10, H - 10);
  }

  function _drawGrid(W, H) {
    const step = 40;
    ctx.strokeStyle = 'rgba(201,168,76,0.04)';
    ctx.lineWidth   = 0.5;
    for (let x = 0; x < W; x += step) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
    for (let y = 0; y < H; y += step) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }
    const cx   = W * 0.5, cy = H * 0.47;
    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, W * 0.35);
    grad.addColorStop(0, 'rgba(42,191,163,0.04)');
    grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);
  }

  // Stable connection offsets (no Math.random per frame)
  const _connOffsets = [1,2,3,4,6,7,8].map(() => ({
    mx: (Math.random() * 20 - 10),
    my: (Math.random() * 20 - 10),
  }));

  function _drawConnections(W, H) {
    const center = nodes[5];
    if (!center) return;
    const cx = center.x * W, cy = center.y * H;

    [1, 2, 3, 4, 6, 7, 8].forEach((idx, i) => {
      const node = nodes[idx];
      if (!node) return;
      const nx = node.x * W, ny = node.y * H;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.quadraticCurveTo(
        (cx + nx) / 2 + _connOffsets[i].mx,
        (cy + ny) / 2 + _connOffsets[i].my,
        nx, ny
      );
      ctx.strokeStyle = node.type === 'danger' ? 'rgba(232,92,92,0.25)' :
                        node.type === 'goal'   ? 'rgba(201,168,76,0.25)' :
                                                  'rgba(42,191,163,0.2)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.stroke();
      ctx.setLineDash([]);
    });
  }

  function _drawNodes(W, H) {
    nodes.forEach(node => {
      const x    = node.x * W;
      const y    = node.y * H;
      const size = (node.size || 1) * 36;
      const half = size / 2;

      const bgColor = node.type === 'danger' ? 'rgba(232,92,92,0.12)' :
                      node.type === 'goal'   ? 'rgba(201,168,76,0.12)' :
                      node.type === 'score'  ? 'rgba(201,168,76,0.18)' :
                      node.type === 'title'  ? 'rgba(42,191,163,0.1)'  :
                                               'rgba(42,191,163,0.08)';
      const borderColor = node.type === 'danger' ? 'rgba(232,92,92,0.5)' :
                          node.type === 'goal'   ? 'rgba(201,168,76,0.5)' :
                          node.type === 'score'  ? '#C9A84C' :
                                                    'rgba(42,191,163,0.4)';

      if (node.type === 'score') { ctx.shadowColor = 'rgba(201,168,76,0.4)'; ctx.shadowBlur = 20; }

      ctx.beginPath();
      ctx.arc(x, y, half, 0, Math.PI * 2);
      ctx.fillStyle = bgColor;
      ctx.fill();
      ctx.strokeStyle = borderColor;
      ctx.lineWidth   = node.type === 'score' ? 2 : 1;
      ctx.stroke();
      ctx.shadowBlur  = 0;

      ctx.font          = `${size * 0.42}px serif`;
      ctx.textAlign     = 'center';
      ctx.textBaseline  = 'middle';
      ctx.fillText(node.icon, x, y);

      ctx.font      = `bold ${Math.max(9, size * 0.26)}px Cairo, sans-serif`;
      ctx.fillStyle = node.type === 'danger' ? '#E85C5C' :
                      node.type === 'goal'   ? '#E8C87A' :
                      node.type === 'score'  ? '#C9A84C' : '#5ED9C2';
      ctx.fillText(node.label, x, y + half + 12);

      if (node.sub) {
        ctx.font      = `${Math.max(8, size * 0.22)}px Cairo, sans-serif`;
        ctx.fillStyle = 'rgba(157,146,133,0.8)';
        const sub     = node.sub.length > 18 ? node.sub.substring(0, 16) + '…' : node.sub;
        ctx.fillText(sub, x, y + half + 24);
      }
    });
  }

  // ── Event Handlers ────────────────────────────────────────
  function _onWheel(e) {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    zoom = Math.min(3, Math.max(0.4, zoom * delta));
    StateManager.set({ mapZoom: zoom });
    state = StateManager.get();
    _scheduleRender();
  }

  function _onMouseDown(e) {
    isDragging = true;
    dragStart  = { x: e.clientX - panX, y: e.clientY - panY };
    canvas.style.cursor = 'grabbing';
  }

  function _onMouseMove(e) {
    if (!isDragging) return;
    panX = e.clientX - dragStart.x;
    panY = e.clientY - dragStart.y;
    StateManager.set({ mapPanX: panX, mapPanY: panY });
    state = StateManager.get();
    _scheduleRender();
  }

  function _onMouseUp() {
    isDragging = false;
    canvas.style.cursor = 'crosshair';
  }

  function _onTouchStart(e) {
    e.preventDefault();
    if (e.touches.length === 2) {
      touchDist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
    } else if (e.touches.length === 1) {
      isDragging = true;
      dragStart  = { x: e.touches[0].clientX - panX, y: e.touches[0].clientY - panY };
    }
  }

  function _onTouchMove(e) {
    e.preventDefault();
    if (e.touches.length === 2) {
      const dist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
      zoom       = Math.min(3, Math.max(0.4, zoom * (dist / (touchDist || dist))));
      touchDist  = dist;
      _scheduleRender();
    } else if (e.touches.length === 1 && isDragging) {
      panX = e.touches[0].clientX - dragStart.x;
      panY = e.touches[0].clientY - dragStart.y;
      _scheduleRender();
    }
  }

  function _onTouchEnd() { isDragging = false; }

  // ── Public API ────────────────────────────────────────────
  function zoomIn()  { zoom = Math.min(3, zoom * 1.2); _scheduleRender(); }
  function zoomOut() { zoom = Math.max(0.4, zoom / 1.2); _scheduleRender(); }
  function reset()   { zoom = 1; panX = 0; panY = 0; rebuildNodes(); _scheduleRender(); }

  /**
   * downloadMap — renders a true 4K canvas (3840×2160) natively,
   * no upscaling of a small canvas.
   */
  function downloadMap() {
    rebuildNodes();

    const W4K = 3840, H4K = 2160;

    const offscreen  = document.createElement('canvas');
    offscreen.width  = W4K;
    offscreen.height = H4K;
    const offCtx     = offscreen.getContext('2d');

    // Temporarily redirect ctx & canvas to offscreen for drawing
    const origCtx    = ctx;
    const origCanvas = canvas;
    ctx    = offCtx;
    canvas = offscreen;

    // Store and clear transform for 4K render
    const origZoom = zoom, origPanX = panX, origPanY = panY;
    zoom = W4K / origCanvas.width;
    panX = 0;
    panY = 0;

    render();

    // Restore
    ctx    = origCtx;
    canvas = origCanvas;
    zoom   = origZoom;
    panX   = origPanX;
    panY   = origPanY;

    offscreen.toBlob(blob => {
      const url  = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = `masar-map-${StateManager.get().userName || 'user'}-4K.png`;
      link.href     = url;
      link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      showToast(state.lang === 'ar' ? '⬇️ تم تحميل الخريطة بجودة 4K!' : '⬇️ Map downloaded in 4K!');
    }, 'image/png');
  }

  function handleResize() {
    _resize();
    _scheduleRender();
  }

  return { init, rebuildNodes, render: _scheduleRender, zoomIn, zoomOut, reset, downloadMap, handleResize };
})();

// Global shims for inline HTML onclick handlers
function mapZoomIn()         { MapRenderer.zoomIn(); }
function mapZoomOut()        { MapRenderer.zoomOut(); }
function mapReset()          { MapRenderer.reset(); }
function downloadMap()       { MapRenderer.downloadMap(); }
function renderInteractiveMap() { MapRenderer.render(); }
function initInteractiveMap()   { MapRenderer.init(); }

/* ============================================================
   INSIGHT REPORT
============================================================ */
function generateInsightReport() {
  const container = document.getElementById('report-container');
  if (!container) return;

  const done30       = state.thirtyDays.filter(Boolean).length;
  const weeklyHabits = Object.values(state.trackerData).filter(Boolean).length;
  const streak       = getStreak();
  const pagesVisited = new Set(state.completedPages).size;
  const overallScore = calculateOverallScore(done30, weeklyHabits, pagesVisited);
  const profile      = getPersonalityProfile(weeklyHabits, done30);

  container.innerHTML = `<div class="ai-thinking"><div class="thinking-dots"><div class="thinking-dot"></div><div class="thinking-dot"></div><div class="thinking-dot"></div></div><p>${state.lang === 'ar' ? 'جارٍ تحليل بياناتك...' : 'Analyzing your data...'}</p></div>`;

  setTimeout(() => {
    container.innerHTML = `
      <div class="report-section">
        <div class="report-header">
          <div class="report-header-icon">📊</div>
          <div>
            <div class="report-title">${state.lang === 'ar' ? 'تقريرك الشخصي' : 'Your Personal Report'}</div>
            <div class="report-subtitle">${state.userName || (state.lang === 'ar' ? 'المسافر' : 'Traveler')} · ${new Date().toLocaleDateString(state.lang === 'ar' ? 'ar-SA' : 'en-US')}</div>
          </div>
        </div>
        <div style="display:flex;justify-content:center;margin:1.5rem 0;">
          <div class="score-ring">
            <svg width="140" height="140" viewBox="0 0 140 140">
              <defs><linearGradient id="repGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style="stop-color:var(--gold)"/><stop offset="100%" style="stop-color:var(--teal)"/></linearGradient></defs>
              <circle class="score-ring-bg" cx="70" cy="70" r="60"/>
              <circle class="score-ring-fill" cx="70" cy="70" r="60" style="stroke:url(#repGrad);stroke-dashoffset:${377 - (377 * overallScore / 100)};"/>
            </svg>
            <div class="score-ring-text"><span class="score-ring-num">${overallScore}</span><span class="score-ring-label">/ 100</span></div>
          </div>
        </div>
        <div class="quote-block" style="text-align:center;">${profile.title}<br><span style="font-size:0.82rem;font-family:'Cairo',sans-serif;">${profile.desc}</span></div>
      </div>
      <div class="report-section">
        <div class="report-header"><div class="report-header-icon">📈</div><div><div class="report-title">${state.lang === 'ar' ? 'أنماط سلوكك' : 'Behavior Patterns'}</div></div></div>
        ${renderPatternBars(weeklyHabits, done30, streak, pagesVisited)}
      </div>
      <div class="report-section">
        <div class="report-header"><div class="report-header-icon">🎯</div><div><div class="report-title">${state.lang === 'ar' ? 'توصياتك الشخصية' : 'Personal Recommendations'}</div></div></div>
        <div class="recs-grid">
          ${getRecommendations(weeklyHabits, done30, streak).map(r => `
            <div class="rec-card">
              <div class="rec-icon">${r.icon}</div>
              <div>
                <div class="rec-priority ${r.priority}">${r.priorityLabel}</div>
                <div class="rec-title">${r.title}</div>
                <div class="rec-desc">${r.desc}</div>
              </div>
            </div>`).join('')}
        </div>
      </div>
      <div class="export-bar">
        <button class="btn btn-gold" onclick="window.print()">🖨 ${state.lang === 'ar' ? 'طباعة / PDF' : 'Print / PDF'}</button>
        <button class="btn btn-outline" onclick="mapReset(); renderInteractiveMap();">🗺 ${state.lang === 'ar' ? 'تحديث الخريطة' : 'Update Map'}</button>
        <button class="btn btn-outline" onclick="StateManager.exportSession()">💾 ${state.lang === 'ar' ? 'تصدير الجلسة' : 'Export Session'}</button>
      </div>`;

    renderBadges();
    setTimeout(() => MapRenderer.init(), 300);
  }, 1500);
}

function calculateOverallScore(done30, weeklyHabits, pagesVisited) {
  return Math.min(100, Math.round((done30 / 30) * 40 + (weeklyHabits / 49) * 30 + (pagesVisited / 9) * 30));
}

function renderPatternBars(weeklyTotal, done30, streak, pagesVisited) {
  const isEN = state.lang === 'en';
  const bars = [
    { label: isEN ? 'Daily Commitment' : 'الالتزام اليومي', value: Math.min(100, (weeklyTotal / 49) * 100) },
    { label: isEN ? 'Consistency'      : 'الاستمرارية',     value: Math.min(100, (done30 / 30) * 100) },
    { label: isEN ? 'Discipline'       : 'الانضباط',        value: Math.min(100, (streak / 30) * 100) },
    { label: isEN ? 'Awareness'        : 'التعلم والوعي',   value: Math.min(100, (pagesVisited / 9) * 100) },
  ];
  return bars.map(bar => `
    <div class="pattern-bar-row">
      <div class="pattern-label">${bar.label}</div>
      <div class="pattern-bar-bg"><div class="pattern-bar-fill" style="width:${bar.value}%"></div></div>
      <div class="pattern-value">${Math.round(bar.value)}${state.lang === 'ar' ? '٪' : '%'}</div>
    </div>`).join('');
}

function getPersonalityProfile(weeklyHabits, done30) {
  const isEN  = state.lang === 'en';
  const total = weeklyHabits + done30;
  if (total >= 40) return { title: '🦅 ' + (isEN ? 'The Disciplined Warrior' : 'المحارب المنضبط'), desc: isEN ? 'You plan and commit. Your path to liberation is clear and steady.' : 'أنت من يضع خططاً ويلتزم بها. مسارك نحو التحرر واضح ومستمر.' };
  if (total >= 20) return { title: '🌱 ' + (isEN ? 'The Persevering Seeker' : 'الساعي المثابر'),   desc: isEN ? 'You make real effort despite challenges. Keep going.' : 'تبذل جهداً حقيقياً رغم التحديات. استمر.' };
  if (done30 > 0)  return { title: '🚶 ' + (isEN ? 'The Aware Beginner'    : 'المبتدئ الواعي'),    desc: isEN ? 'You are at the start — the hardest part.' : 'أنت في بداية الطريق.' };
  return                 { title: '🌅 ' + (isEN ? 'The Change Seeker'     : 'الباحث عن التغيير'), desc: isEN ? 'Your presence here shows real desire.' : 'وصولك هنا دليل على رغبتك الحقيقية.' };
}

function getRecommendations(weeklyHabits, done30, streak) {
  const isEN = state.lang === 'en';
  const recs = [];
  if (weeklyHabits < 15)             recs.push({ icon: '⚡', priority: 'high',   priorityLabel: '● ' + (isEN ? 'High'   : 'عالي'),  title: isEN ? 'Start with one habit only'  : 'ابدأ بعادة واحدة فقط',   desc: isEN ? 'Choose one habit and master it first.' : 'اختر عادة واحدة وأتقنها أولاً.' });
  if (streak === 0 && done30 === 0)  recs.push({ icon: '🎯', priority: 'high',   priorityLabel: '● ' + (isEN ? 'High'   : 'عالي'),  title: isEN ? 'Mark your first day now'    : 'ظلّل يومك الأول الآن',   desc: isEN ? 'Go to the 30-day grid.'               : 'انتقل لشبكة الـ٣٠ يوم.' });
  if (weeklyHabits >= 20 && done30 < 10) recs.push({ icon: '📅', priority: 'medium', priorityLabel: '● ' + (isEN ? 'Medium' : 'متوسط'), title: isEN ? 'Link habits to the day grid' : 'اربط العادات بشبكة الأيام', desc: isEN ? 'Your weekly performance is good.'    : 'أداؤك الأسبوعي جيد.' });
  if (streak >= 7)                   recs.push({ icon: '🔥', priority: 'low',    priorityLabel: '○ ' + (isEN ? 'Improve': 'تحسين'), title: isEN ? 'Protect your streak!'       : 'حافظ على سلسلتك!',       desc: `${streak} ${isEN ? 'consecutive days.' : 'أيام متتالية.'}` });
  recs.push(                                   { icon: '🤲', priority: 'low',    priorityLabel: '○ ' + (isEN ? 'Improve': 'تحسين'), title: isEN ? 'Strengthen your spiritual alternative' : 'قوّ بديلك الروحي', desc: isEN ? 'Dhikr and Istighfar are your strongest weapons.' : 'الذكر والاستغفار هما أقوى أسلحتك.' });
  return recs.slice(0, 4);
}

/* ============================================================
   TOAST
============================================================ */
function showToast(msg, duration = 2500) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast       = document.createElement('div');
  toast.className   = 'toast';
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity    = '0';
    toast.style.transition = 'opacity 0.3s';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

/* ============================================================
   PARTICLES (lightweight, 30 particles)
============================================================ */
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();

  const particles = Array.from({ length: 30 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.2 + 0.3,
    dx: (Math.random() - 0.5) * 0.25,
    dy: -Math.random() * 0.3 - 0.07,
    alpha: Math.random() * 0.3 + 0.05,
    color: Math.random() > 0.5 ? '#C9A84C' : '#2ABFA3',
  }));

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle   = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
      if (p.y < -5)                 { p.y = canvas.height + 5; p.x = Math.random() * canvas.width; }
      if (p.x < -5)                 p.x = canvas.width + 5;
      if (p.x > canvas.width + 5)  p.x = -5;
    });
    ctx.globalAlpha = 1;
  }
  animate();

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 250);
  });
}

/* ============================================================
   MOTIVATIONAL MESSAGES
============================================================ */
const MOTIVATIONAL_MSGS = {
  ar: ['كل خطوة صغيرة هي انتصار. 🌱', 'الاستمرار هو السر — لا الكمال. 💪', 'دماغك يتغير كل يوم — اجعله يتغير نحو الأفضل. 🧠', 'من جاهد، وجد. 🤲', 'أنت أقوى مما تعتقد. ⭐'],
  en: ['Every small step is a victory. 🌱', 'Consistency is the secret — not perfection. 💪', 'Your brain changes every day — make it change for the better. 🧠', 'Strive, and you shall find. 🤲', 'You are stronger than you think. ⭐'],
};

setInterval(() => {
  const msgs = MOTIVATIONAL_MSGS[state?.lang] || MOTIVATIONAL_MSGS.ar;
  showToast(msgs[Math.floor(Math.random() * msgs.length)], 3500);
}, 180_000);

/* ============================================================
   STORAGE UI  (Import / Export buttons)
============================================================ */
function handleExportSession() {
  StateManager.exportSession();
  showToast(state.lang === 'ar' ? '💾 تم تصدير الجلسة' : '💾 Session exported');
}

function handleImportSession() {
  StateManager.importSession(() => {
    state = StateManager.get();
    // Full reinitialisation after import
    initTheme();
    initLang();
    rebuildChecklists();
    buildRescueSteps();
    buildDopamineDiagram();
    buildTracker();
    build30Grid();
    restoreInputsFromState();
    updatePointsDisplay();
    updateWeeklyScore();
    updateProgress();
    showPage(state.currentPage || 1);
    showToast(state.lang === 'ar' ? '📂 تم استيراد البيانات بنجاح!' : '📂 Data imported successfully!');
  });
}

/* ============================================================
   INIT
============================================================ */
document.addEventListener('DOMContentLoaded', async () => {
  // 1. Initialise StateManager (async: reads IndexedDB)
  await StateManager.init();
  state = StateManager.get();

  // 2. Apply theme & lang before rendering anything
  initTheme();
  initLang();
  initNavGroups();
  initParticles();

  // 3. Build UI components
  buildTracker();
  build30Grid();
  rebuildChecklists();
  buildRescueSteps();
  buildDopamineDiagram();

  // 4. Restore form inputs
  restoreInputsFromState();
  updatePointsDisplay();
  updateWeeklyScore();
  updateProgress();

  // 5. Restore nav checks
  state.completedPages.forEach(p => markNavCheck(p));
  autoOpenNavGroup(state.currentPage || 1);

  // 6. Prevent door input clicks from toggling
  document.querySelectorAll('.door-input').forEach(el => {
    el.addEventListener('click', e => e.stopPropagation());
    el.addEventListener('mousedown', e => e.stopPropagation());
  });

  // 7. Restore trigger selections
  if (state.timeTriggers?.length) {
    document.querySelectorAll('#time-triggers .radio-opt').forEach(opt => {
      if (state.timeTriggers.includes(opt.dataset.val)) opt.classList.add('selected');
    });
  }
  if (state.placeTriggers?.length) {
    document.querySelectorAll('#place-triggers .radio-opt').forEach(opt => {
      if (state.placeTriggers.includes(opt.dataset.val)) opt.classList.add('selected');
    });
  }

  // 8. Debounced input sync
  document.addEventListener('input', () => syncInputsToState());

  // 9. Welcome toast (first visit only)
  if (state.completedPages.length === 0) {
    setTimeout(() => showToast(state.lang === 'ar' ? '🌙 مرحباً — مسارك بدأ الآن' : '🌙 Welcome — your journey starts now'), 1500);
  }

  // 10. Navigate to saved page
  const startPage = state.currentPage && state.currentPage > 1 ? state.currentPage : 1;
  showPage(startPage);
  if (startPage === 9) setTimeout(generateInsightReport, 800);

  // 11. Map canvas resize
  window.addEventListener('resize', () => MapRenderer.handleResize());

  console.info('مسار التحرر v5.0 — ZUHD Essence ✓ (IndexedDB + Thumbnail engine active)');
});
