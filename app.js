/* ============================================================
   مسار التحرر v4.0 — ZUHD Essence
   Refactored JS — app.js
   ============================================================ */
'use strict';

/* ========================
   TRANSLATIONS (i18n) — AR + EN only (FR removed)
======================== */
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
  }
};

/* ========================
   STATE & LOCAL STORAGE
======================== */
const STATE_KEY = 'masar-v4-state';

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
  userPhoto: null,
  mapZoom: 1,
  mapPanX: 0,
  mapPanY: 0,
};

let state = loadState();

function loadState() {
  try {
    const saved = localStorage.getItem(STATE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...DEFAULT_STATE, ...parsed };
    }
  } catch(e) { /* ignore */ }
  return { ...DEFAULT_STATE };
}

function saveState() {
  try {
    localStorage.setItem(STATE_KEY, JSON.stringify(state));
  } catch(e) {
    console.warn('State save failed:', e);
  }
}

// Auto-save every 30 seconds
setInterval(saveState, 30000);

// Save on any input change
document.addEventListener('input', () => { syncInputsToState(); saveState(); });

function syncInputsToState() {
  const fields = {
    'user-name': 'userName',
    'user-reason': 'userReason',
    'keyword': 'keyword',
    'warning-sign': 'warnSign',
  };
  Object.entries(fields).forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el) state[key] = el.value;
  });
  const slider = document.getElementById('intensity-slider');
  if (slider) state.intensity = parseInt(slider.value);
}

function restoreInputsFromState() {
  const fields = {
    'user-name': 'userName',
    'user-reason': 'userReason',
    'keyword': 'keyword',
    'warning-sign': 'warnSign',
  };
  Object.entries(fields).forEach(([id, key]) => {
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
  if (state.userPhoto) renderPhotoPreview(state.userPhoto);
}

/* ========================
   PHOTO UPLOAD
======================== */
function handlePhotoUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    state.userPhoto = e.target.result;
    renderPhotoPreview(e.target.result);
    saveState();
    showToast('📷 ' + (state.lang === 'ar' ? 'تم رفع الصورة بنجاح!' : 'Photo uploaded!'));
  };
  reader.readAsDataURL(file);
}

function renderPhotoPreview(dataUrl) {
  const preview = document.getElementById('photo-preview');
  if (!preview) return;
  const hint = state.lang === 'ar' ? 'انقر للتغيير' : 'Click to change';
  preview.innerHTML = `<img src="${dataUrl}" alt="photo" class="photo-uploaded"><div class="photo-hint" style="font-size:0.68rem;">${hint}</div>`;
}

/* ========================
   SLIDER
======================== */
function updateSlider(el) {
  const val = document.getElementById('slider-val');
  if (val) val.textContent = el.value;
  state.intensity = parseInt(el.value);
}

/* ========================
   MULTILINGUAL (i18n)
======================== */
function setLang(lang) {
  if (!TRANSLATIONS[lang]) lang = 'ar';
  state.lang = lang;
  const isRTL = lang === 'ar';

  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');

  // Update active lang buttons
  document.querySelectorAll('.ctrl-lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Apply translations
  const t = TRANSLATIONS[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Update nav group labels
  const navLabels = document.querySelectorAll('.nav-group-label[data-i18n]');
  navLabels.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });

  // Update controls labels
  const themeLabel = document.getElementById('ctrl-theme-label');
  const langLabel = document.getElementById('ctrl-lang-label');
  if (themeLabel) themeLabel.textContent = t.controls_theme || (isRTL ? 'الثيم' : 'Theme');
  if (langLabel) langLabel.textContent = t.controls_lang || (isRTL ? 'اللغة' : 'Lang');

  saveState();
}

function initLang() {
  setLang(state.lang || 'ar');
}

/* ========================
   NAVIGATION
======================== */
function initNavGroups() {
  const firstGroup = document.getElementById('navgroup-1');
  if (firstGroup) firstGroup.classList.add('open');
}

function toggleNavGroup(groupId) {
  const group = document.getElementById(groupId);
  if (!group) return;
  const isOpen = group.classList.contains('open');
  document.querySelectorAll('.nav-group').forEach(g => g.classList.remove('open'));
  if (!isOpen) group.classList.add('open');
}

function showPage(num) {
  document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
  const target = document.getElementById('page-' + num);
  if (target) target.classList.add('active');

  // Update nav active state
  document.querySelectorAll('.nav-link').forEach(link => {
    const onclick = link.getAttribute('onclick') || '';
    link.classList.toggle('active', onclick.includes(`showPage(${num})`));
  });

  autoOpenNavGroup(num);

  if (!state.completedPages.includes(num)) {
    state.completedPages.push(num);
    addXP(10);
  }

  markNavCheck(num);
  state.currentPage = num;
  updateProgress();
  checkAchievements(`page_${num}`);
  checkBadges();

  document.getElementById('sidebar')?.classList.remove('open');
  document.getElementById('overlay')?.classList.remove('visible');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  saveState();
}

function autoOpenNavGroup(pageNum) {
  const groupMap = { 1:'navgroup-1', 2:'navgroup-1', 3:'navgroup-1', 4:'navgroup-2', 5:'navgroup-2', 6:'navgroup-2', 7:'navgroup-3', 8:'navgroup-3', 9:'navgroup-3' };
  const groupId = groupMap[pageNum];
  if (groupId) {
    document.querySelectorAll('.nav-group').forEach(g => g.classList.remove('open'));
    document.getElementById(groupId)?.classList.add('open');
  }
}

function markNavCheck(pageNum) {
  const check = document.getElementById(`nc-${pageNum}`);
  if (check) check.classList.add('done');
}

function updateProgress() {
  const visited = new Set(state.completedPages).size;
  const pct = Math.round((visited / 9) * 100);
  const fill = document.getElementById('progress-fill');
  const pctEl = document.getElementById('progress-pct');
  if (fill) fill.style.width = pct + '%';
  if (pctEl) pctEl.textContent = pct + (state.lang === 'ar' ? '٪' : '%');
}

function toggleSidebar() {
  document.getElementById('sidebar')?.classList.toggle('open');
  document.getElementById('overlay')?.classList.toggle('visible');
}

/* ========================
   THEME SYSTEM
======================== */
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  state.theme = theme;
  document.querySelectorAll('.ctrl-theme-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.theme === theme);
  });
  saveState();
}

function initTheme() {
  setTheme(state.theme || 'dark');
}

/* ========================
   GAMIFICATION — LEVELS
======================== */
const LEVELS = [
  { min: 0, name: state.lang === 'ar' ? 'مبتدئ' : 'Beginner', icon: '🌱' },
  { min: 50, name: state.lang === 'ar' ? 'مدرك' : 'Aware', icon: '👁' },
  { min: 150, name: state.lang === 'ar' ? 'مجاهد' : 'Striver', icon: '⚔️' },
  { min: 300, name: state.lang === 'ar' ? 'ثابت' : 'Steadfast', icon: '🏔' },
  { min: 500, name: state.lang === 'ar' ? 'محرر' : 'Liberated', icon: '🦅' },
  { min: 800, name: state.lang === 'ar' ? 'قائد' : 'Leader', icon: '🌟' },
];

const BADGES_CONFIG = [
  { id: 'first_step', icon: '🚀', name: state.lang === 'ar' ? 'الخطوة الأولى' : 'First Step', desc: state.lang === 'ar' ? 'بدأت رحلتك' : 'Started your journey', condition: () => state.completedPages.length >= 1 },
  { id: 'explorer', icon: '🗺', name: state.lang === 'ar' ? 'المستكشف' : 'Explorer', desc: state.lang === 'ar' ? 'زرت ٥ صفحات' : 'Visited 5 pages', condition: () => new Set(state.completedPages).size >= 5 },
  { id: 'week_warrior', icon: '🔥', name: state.lang === 'ar' ? 'محارب الأسبوع' : 'Week Warrior', desc: state.lang === 'ar' ? '٧ أيام متتالية' : '7 days streak', condition: () => getStreak() >= 7 },
  { id: 'half_way', icon: '⭐', name: state.lang === 'ar' ? 'منتصف الطريق' : 'Halfway', desc: state.lang === 'ar' ? '١٥ يوم مكتمل' : '15 days done', condition: () => state.thirtyDays.filter(Boolean).length >= 15 },
  { id: 'champion', icon: '🏆', name: state.lang === 'ar' ? 'البطل' : 'Champion', desc: state.lang === 'ar' ? '٣٠ يوم مكتمل!' : '30 days done!', condition: () => state.thirtyDays.filter(Boolean).length >= 30 },
  { id: 'habit_master', icon: '💎', name: state.lang === 'ar' ? 'سيد العادة' : 'Habit Master', desc: state.lang === 'ar' ? '٤٠+ نقطة أسبوعية' : '40+ weekly points', condition: () => Object.values(state.trackerData).filter(Boolean).length >= 40 },
];

const ACHIEVEMENTS = [
  { id: 'welcome', trigger: 'page_1', title: '🌙 أهلاً بك!', desc: 'رحلتك بدأت الآن' },
  { id: 'diagnosis', trigger: 'page_2', title: '🔍 الشجاعة الأولى', desc: 'واجهت نفسك بصدق' },
  { id: 'science', trigger: 'page_3', title: '🧠 العقل العارف', desc: 'فهمت الآلية' },
  { id: 'plan', trigger: 'page_4', title: '🗝 عندك مفتاح', desc: 'وضعت خطة الاستبدال' },
  { id: 'tracker', trigger: 'page_5', title: '📊 المتتبع', desc: 'بدأت القياس' },
  { id: 'fortress', trigger: 'page_6', title: '🛡 المحصّن', desc: 'حصّنت بيئتك' },
  { id: 'rescue', trigger: 'page_7', title: '⚓ المنقذ', desc: 'عندك بروتوكول إنقاذ' },
  { id: 'grid', trigger: 'page_8', title: '🗓 حارس الأيام', desc: 'بدأت شبكة الـ٣٠ يوم' },
  { id: 'map', trigger: 'page_9', title: '🗺 عندك خريطة!', desc: 'اكتملت رحلتك الأولى' },
];

function addXP(amount) {
  state.xp += amount;
  state.totalPoints += amount;
  updateLevel();
  updatePointsDisplay();
}

function updateLevel() {
  let newLevel = 1;
  LEVELS.forEach((lvl, i) => { if (state.xp >= lvl.min) newLevel = i + 1; });
  if (newLevel > state.level) {
    state.level = newLevel;
    const lvl = LEVELS[newLevel - 1];
    const msg = state.lang === 'ar' ? `أصبحت ${lvl.name}!` : `You are now ${lvl.name}!`;
    showAchievementPopup(`${lvl.icon} ${state.lang === 'ar' ? 'مستوى جديد!' : 'New Level!'}`, msg);
  }
}

function updatePointsDisplay() {
  const el = document.getElementById('sidebar-points-val');
  if (el) el.textContent = state.totalPoints;
  const levelEl = document.getElementById('sidebar-level');
  const lvl = LEVELS[Math.min(state.level - 1, LEVELS.length - 1)];
  if (levelEl && lvl) levelEl.textContent = `${lvl.icon} ${lvl.name}`;
  const nextLvl = LEVELS[state.level] || LEVELS[LEVELS.length - 1];
  const curLvl = LEVELS[state.level - 1];
  const xpInLevel = state.xp - curLvl.min;
  const xpNeeded = nextLvl.min - curLvl.min;
  const pct = Math.min(100, Math.round((xpInLevel / (xpNeeded || 1)) * 100));
  const xpFill = document.getElementById('xp-fill');
  const xpLabel = document.getElementById('xp-label');
  if (xpFill) xpFill.style.width = pct + '%';
  if (xpLabel) xpLabel.textContent = `${state.xp} / ${nextLvl.min}`;
}

function checkBadges() {
  BADGES_CONFIG.forEach(badge => {
    if (!state.unlockedBadges.includes(badge.id) && badge.condition()) {
      state.unlockedBadges.push(badge.id);
      const msg = state.lang === 'ar' ? 'شارة جديدة!' : 'New Badge!';
      showAchievementPopup(badge.icon + ' ' + msg, badge.desc);
      addXP(25);
      renderBadges();
    }
  });
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
  document.getElementById('achievement-desc').textContent = desc;
  popup.classList.add('show');
  setTimeout(() => popup.classList.remove('show'), 4000);
}

function renderBadges() {
  const container = document.getElementById('badges-grid');
  if (!container) return;
  container.innerHTML = '';
  BADGES_CONFIG.forEach(badge => {
    const isUnlocked = state.unlockedBadges.includes(badge.id);
    const el = document.createElement('div');
    el.className = `earned-badge ${isUnlocked ? 'unlocked' : 'locked'}`;
    el.title = badge.desc;
    el.innerHTML = `<span class="earned-badge-icon">${badge.icon}</span><span class="earned-badge-name">${badge.name}</span>`;
    container.appendChild(el);
  });
}

/* ========================
   INTERACTIVE OPTS
======================== */
function toggleOpt(el, group) {
  el.classList.toggle('selected');
  if (group) {
    const vals = [];
    document.querySelectorAll(`#${group}-triggers .radio-opt.selected`).forEach(opt => vals.push(opt.dataset.val));
    state[group === 'time' ? 'timeTriggers' : 'placeTriggers'] = vals;
  }
  addXP(2);
  saveState();
}

function toggleDoor(card) {
  card.classList.toggle('expanded');
  if (card.classList.contains('expanded')) addXP(5);
}

/* ========================
   HABIT TRACKER
======================== */
const HABITS = [
  { name: '🤲 صلاة الفجر', points: 5, color: 'gold' },
  { name: '📖 ورد قرآني', points: 5, color: 'teal' },
  { name: '🏃 رياضة', points: 4, color: 'blue' },
  { name: '🧘 تأمل/ذكر', points: 3, color: 'purple' },
  { name: '📵 بدون محفزات', points: 6, color: 'orange' },
  { name: '😴 نوم مبكر', points: 3, color: 'green' },
  { name: '✍️ يوميات', points: 2, color: 'red' },
];

const HABITS_EN = [
  { name: '🤲 Fajr Prayer', points: 5, color: 'gold' },
  { name: '📖 Quran Reading', points: 5, color: 'teal' },
  { name: '🏃 Exercise', points: 4, color: 'blue' },
  { name: '🧘 Dhikr/Meditation', points: 3, color: 'purple' },
  { name: '📵 Trigger-free', points: 6, color: 'orange' },
  { name: '😴 Early Sleep', points: 3, color: 'green' },
  { name: '✍️ Journal', points: 2, color: 'red' },
];

function buildTracker() {
  const grid = document.getElementById('habit-tracker');
  if (!grid) return;
  grid.innerHTML = '';
  const habits = state.lang === 'en' ? HABITS_EN : HABITS;
  const days = state.lang === 'en'
    ? ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    : ['الأحد','الإثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'];

  // Update day labels
  const dayLabels = document.querySelectorAll('.day-label');
  dayLabels.forEach((el, i) => { if (days[i]) el.textContent = days[i]; });

  habits.forEach((habit, hi) => {
    const nameCell = document.createElement('div');
    nameCell.className = 'tracker-habit-name';
    nameCell.textContent = habit.name;
    grid.appendChild(nameCell);

    for (let d = 0; d < 7; d++) {
      const cell = document.createElement('div');
      const key = `${hi}-${d}`;
      cell.className = `tracker-cell ${habit.color}`;
      if (state.trackerData[key]) cell.classList.add('filled');
      cell.onclick = () => {
        const wasFilled = cell.classList.contains('filled');
        cell.classList.toggle('filled');
        state.trackerData[key] = !wasFilled;
        if (!wasFilled) {
          addXP(habit.points);
          showToast(`✓ ${habit.name} — +${habit.points}`);
        } else {
          showToast(state.lang === 'ar' ? '↩ تم الإلغاء' : '↩ Undone');
        }
        updateWeeklyScore();
        checkBadges();
        saveState();
      };
      grid.appendChild(cell);
    }
  });
}

function updateWeeklyScore() {
  const total = Object.values(state.trackerData).filter(Boolean).length;
  state.weeklyScore = total;
  const el = document.getElementById('weekly-score');
  if (el) animateNumber(el, parseInt(el.textContent) || 0, total);
}

function animateNumber(el, from, to) {
  const diff = to - from;
  if (diff === 0) return;
  const steps = 20;
  let step = 0;
  const interval = setInterval(() => {
    step++;
    el.textContent = Math.round(from + (diff * step / steps));
    if (step >= steps) { el.textContent = to; clearInterval(interval); }
  }, 20);
}

/* ========================
   30-DAY GRID
======================== */
function build30Grid() {
  const grid = document.getElementById('thirty-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const today = new Date().getDate();

  for (let i = 0; i < 30; i++) {
    const cell = document.createElement('div');
    cell.className = 'day-cell';
    cell.textContent = i + 1;
    if (state.thirtyDays[i]) cell.classList.add('filled');
    if (i + 1 === today) cell.classList.add('today');
    cell.onclick = () => {
      const wasFilled = state.thirtyDays[i];
      state.thirtyDays[i] = !wasFilled;
      cell.classList.toggle('filled');
      if (!wasFilled) {
        addXP(20);
        showToast(state.lang === 'ar' ? `✓ يوم ${i+1} — +٢٠ نقطة` : `✓ Day ${i+1} — +20 pts`);
      }
      update30Stats();
      checkBadges();
      saveState();
    };
    grid.appendChild(cell);
  }
  update30Stats();
}

function markToday() {
  const today = new Date().getDate() - 1;
  if (today >= 0 && today < 30) {
    const cells = document.querySelectorAll('.day-cell');
    const cell = cells[today];
    if (cell && !state.thirtyDays[today]) {
      state.thirtyDays[today] = true;
      cell.classList.add('filled');
      addXP(20);
      showToast(state.lang === 'ar' ? '✓ يوم اليوم مكتمل — +٢٠ نقطة 🎉' : '✓ Today marked — +20 pts 🎉');
      update30Stats();
      checkBadges();
      saveState();
    } else {
      showToast(state.lang === 'ar' ? '✓ اليوم مظلّل بالفعل' : '✓ Already marked');
    }
  }
}

function resetGrid() {
  if (!confirm(state.lang === 'ar' ? 'هل تريد إعادة تعيين الشبكة؟' : 'Reset the grid?')) return;
  state.thirtyDays = new Array(30).fill(false);
  build30Grid();
  saveState();
  showToast(state.lang === 'ar' ? '🔄 تم إعادة التعيين' : '🔄 Grid reset');
}

function update30Stats() {
  const done = state.thirtyDays.filter(Boolean).length;
  const streak = getStreak();
  const pct = Math.round((done / 30) * 100);

  setStatAnimated('days-done', done);
  setStatAnimated('days-left', 30 - done);
  setStatAnimated('streak-count', streak);

  const pctEl = document.getElementById('completion-pct');
  if (pctEl) pctEl.textContent = pct + (state.lang === 'ar' ? '٪' : '%');

  const ringNum = document.getElementById('ring-days');
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
  const rev = [...state.thirtyDays].reverse();
  for (const d of rev) {
    if (d) streak++;
    else break;
  }
  return streak;
}

/* ========================
   CHECKLISTS
======================== */
const PHONE_ITEMS_AR = [
  'حذف تطبيقات المحفزات من الشاشة الرئيسية',
  'تفعيل وضع الرمادي (Grayscale) على الشاشة',
  'ضبط حدود الاستخدام على التطبيقات الإشكالية',
  'وضع الهاتف في غرفة أخرى بعد العشاء',
  'تعطيل الإشعارات غير الضرورية',
  'تفعيل وضع عدم الإزعاج ليلاً',
  'استخدام ساعة منبه عادية بدل الهاتف',
];
const PHONE_ITEMS_EN = [
  'Delete trigger apps from home screen',
  'Enable Grayscale mode on screen',
  'Set app usage limits for problematic apps',
  'Leave phone in another room after dinner',
  'Disable unnecessary notifications',
  'Enable Do Not Disturb at night',
  'Use a regular alarm clock instead of phone',
];
const SPACE_ITEMS_AR = [
  'تحديد "منطقة خالية من الشاشات" في المنزل',
  'إبقاء باب الغرفة مفتوحاً وقت الخطر',
  'وضع مذكّر بصري (آية أو هدف) في مكان واضح',
  'ترتيب مكان الجلوس لأنشطة إيجابية فقط',
  'إزالة مثيرات السلوك من محيطك المباشر',
];
const SPACE_ITEMS_EN = [
  'Designate a "screen-free zone" at home',
  'Keep room door open during danger times',
  'Place a visual reminder (verse or goal) in a visible spot',
  'Arrange seating for positive activities only',
  'Remove behavior triggers from your direct environment',
];

function buildChecklist(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'check-item';
    div.onclick = function() {
      const box = this.querySelector('.check-box');
      const wasChecked = box.classList.contains('checked');
      box.classList.toggle('checked');
      this.classList.toggle('done');
      if (!wasChecked) {
        addXP(5);
        showToast(state.lang === 'ar' ? '✓ تم — +٥ نقاط' : '✓ Done — +5 pts');
      }
      checkBadges();
      saveState();
    };
    div.innerHTML = `<div class="check-box"></div><div class="check-text">${item}</div>`;
    container.appendChild(div);
  });
}

function rebuildChecklists() {
  const isEN = state.lang === 'en';
  buildChecklist('phone-checks', isEN ? PHONE_ITEMS_EN : PHONE_ITEMS_AR);
  buildChecklist('space-checks', isEN ? SPACE_ITEMS_EN : SPACE_ITEMS_AR);
}

/* ========================
   RESCUE STEPS
======================== */
function buildRescueSteps() {
  const stepsAR = [
    { num: '١', title: 'توقف', desc: 'لا تستمر — القطيعة الآن أهم من أي شيء' },
    { num: '٢', title: 'استغفر', desc: 'قل "رب اغفر لي" — الآن. لا تنتظر أن تشعر بالاستحقاق' },
    { num: '٣', title: 'لا تحاكم نفسك', desc: 'لا "أنا فاشل" — بل "هذا اختبار وسأعود"' },
    { num: '٤', title: 'حلّل', desc: 'ما الذي أوصلك هنا؟ ستسد الثغرة الآن' },
    { num: '٥', title: 'ابدأ اليوم', desc: 'لا تنتظر يوم الاثنين — ابدأ من الصلاة القادمة' },
  ];
  const stepsEN = [
    { num: '1', title: 'Stop', desc: "Don't continue — breaking off now is more important than anything" },
    { num: '2', title: 'Seek Forgiveness', desc: 'Say "Lord forgive me" — right now. Don\'t wait to feel worthy' },
    { num: '3', title: 'Don\'t Self-Judge', desc: 'Not "I\'m a failure" — but "This is a test and I will return"' },
    { num: '4', title: 'Analyze', desc: 'What brought you here? You will close that gap now' },
    { num: '5', title: 'Start Today', desc: 'Don\'t wait for Monday — start from the next prayer' },
  ];
  const steps = state.lang === 'en' ? stepsEN : stepsAR;
  const container = document.getElementById('rescue-steps');
  if (!container) return;
  container.innerHTML = '';
  steps.forEach((s, i) => {
    const el = document.createElement('div');
    el.className = 'step-item';
    el.style.animationDelay = (i * 0.1) + 's';
    el.innerHTML = `<div class="step-num">${s.num}</div><div class="step-content"><div class="step-title">${s.title}</div><div class="step-desc">${s.desc}</div></div>`;
    container.appendChild(el);
  });
}

/* ========================
   DOPAMINE DIAGRAM
======================== */
function buildDopamineDiagram() {
  const container = document.getElementById('dopamine-diagram');
  if (!container) return;
  const nodesAR = [
    { icon: '⚡', label: 'المحفز' },
    { icon: '🧠', label: 'الرغبة' },
    { icon: '🏃', label: 'السلوك' },
    { icon: '💊', label: 'الدوبامين' },
    { icon: '🔄', label: 'التكرار' },
  ];
  const nodesEN = [
    { icon: '⚡', label: 'Trigger' },
    { icon: '🧠', label: 'Craving' },
    { icon: '🏃', label: 'Behavior' },
    { icon: '💊', label: 'Dopamine' },
    { icon: '🔄', label: 'Repetition' },
  ];
  const nodes = state.lang === 'en' ? nodesEN : nodesAR;
  container.innerHTML = `<div class="dopamine-flow">${nodes.map((n,i) =>
    `<div class="flow-node" style="animation-delay:${i*0.1}s"><span class="flow-node-icon">${n.icon}</span><span class="flow-node-label">${n.label}</span></div>${i < nodes.length-1 ? '<div class="flow-arrow">←</div>' : ''}`
  ).join('')}</div>`;
}

/* ========================
   INTERACTIVE MAP (Canvas-based, GTA-inspired dark map)
======================== */
let mapCanvas = null;
let mapCtx = null;
let mapZoom = 1;
let mapPanX = 0;
let mapPanY = 0;
let mapIsDragging = false;
let mapDragStart = { x: 0, y: 0 };
let mapNodes = [];

function initInteractiveMap() {
  const container = document.getElementById('interactive-map-canvas');
  if (!container) return;

  mapCanvas = container;
  mapCtx = mapCanvas.getContext('2d');

  const W = mapCanvas.parentElement.clientWidth || 700;
  const H = Math.max(420, W * 0.55);
  mapCanvas.width = W;
  mapCanvas.height = H;

  // Build nodes from user data
  rebuildMapNodes();
  renderInteractiveMap();

  // Mouse events
  mapCanvas.addEventListener('wheel', onMapWheel, { passive: false });
  mapCanvas.addEventListener('mousedown', onMapMouseDown);
  mapCanvas.addEventListener('mousemove', onMapMouseMove);
  mapCanvas.addEventListener('mouseup', onMapMouseUp);
  mapCanvas.addEventListener('mouseleave', onMapMouseUp);

  // Touch events
  mapCanvas.addEventListener('touchstart', onMapTouchStart, { passive: false });
  mapCanvas.addEventListener('touchmove', onMapTouchMove, { passive: false });
  mapCanvas.addEventListener('touchend', onMapTouchEnd);
}

function rebuildMapNodes() {
  const name = state.userName || (state.lang === 'ar' ? 'أنت' : 'You');
  const done30 = state.thirtyDays.filter(Boolean).length;
  const streak = getStreak();
  const habits = Object.values(state.trackerData).filter(Boolean).length;
  const score = calculateOverallScore(done30, habits, new Set(state.completedPages).size);
  const timeTags = state.timeTriggers.slice(0, 3).join(', ') || (state.lang === 'ar' ? 'غير محدد' : 'Not set');
  const placeTags = state.placeTriggers.slice(0, 2).join(', ') || (state.lang === 'ar' ? 'غير محدد' : 'Not set');

  mapNodes = [
    { x: 0.5, y: 0.12, icon: '🧭', label: state.lang === 'ar' ? 'مسار التحرر' : 'Liberation Path', sub: name, type: 'title', size: 1.4 },
    { x: 0.18, y: 0.32, icon: '⚡', label: state.lang === 'ar' ? 'أوقات الخطر' : 'Danger Times', sub: timeTags, type: 'danger' },
    { x: 0.82, y: 0.32, icon: '📍', label: state.lang === 'ar' ? 'أماكن الخطر' : 'Danger Places', sub: placeTags, type: 'danger' },
    { x: 0.18, y: 0.62, icon: '🎯', label: state.lang === 'ar' ? 'السبب الحقيقي' : 'Real Reason', sub: (state.userReason || '—').substring(0, 30), type: 'goal' },
    { x: 0.82, y: 0.62, icon: '🔑', label: state.lang === 'ar' ? 'كلمتي السرية' : 'Secret Word', sub: state.keyword || '—', type: 'goal' },
    { x: 0.5, y: 0.47, icon: '⭐', label: state.lang === 'ar' ? `نتيجتي ${score}٪` : `Score ${score}%`, sub: `${done30} ${state.lang === 'ar' ? 'يوم' : 'days'} · ${streak} 🔥`, type: 'score', size: 1.2 },
    { x: 0.28, y: 0.82, icon: '📊', label: state.lang === 'ar' ? 'العادات' : 'Habits', sub: `${habits} ✓`, type: 'stat' },
    { x: 0.5, y: 0.88, icon: '🛡', label: state.lang === 'ar' ? 'البروتوكول' : 'Protocol', sub: state.lang === 'ar' ? 'جاهز' : 'Ready', type: 'stat' },
    { x: 0.72, y: 0.82, icon: '🔥', label: state.lang === 'ar' ? 'الاستمرارية' : 'Streak', sub: `${streak} ${state.lang === 'ar' ? 'يوم' : 'days'}`, type: 'stat' },
  ];
}

function renderInteractiveMap() {
  if (!mapCtx || !mapCanvas) return;
  const W = mapCanvas.width;
  const H = mapCanvas.height;

  mapCtx.clearRect(0, 0, W, H);

  // Dark background
  mapCtx.fillStyle = '#07090d';
  mapCtx.fillRect(0, 0, W, H);

  // Grid lines (map style)
  mapCtx.save();
  mapCtx.translate(mapPanX, mapPanY);
  mapCtx.scale(mapZoom, mapZoom);

  drawMapGrid(W / mapZoom, H / mapZoom);
  drawMapConnections(W, H);
  drawMapNodes(W, H);

  mapCtx.restore();

  // Overlay: zoom info
  mapCtx.fillStyle = 'rgba(201,168,76,0.5)';
  mapCtx.font = '11px Cairo, sans-serif';
  mapCtx.fillText(`${Math.round(mapZoom * 100)}%`, 10, H - 10);
}

function drawMapGrid(W, H) {
  const step = 40;
  mapCtx.strokeStyle = 'rgba(201,168,76,0.04)';
  mapCtx.lineWidth = 0.5;
  for (let x = 0; x < W; x += step) {
    mapCtx.beginPath(); mapCtx.moveTo(x, 0); mapCtx.lineTo(x, H); mapCtx.stroke();
  }
  for (let y = 0; y < H; y += step) {
    mapCtx.beginPath(); mapCtx.moveTo(0, y); mapCtx.lineTo(W, y); mapCtx.stroke();
  }
  // Radial glow center
  const cx = W * 0.5, cy = H * 0.47;
  const grad = mapCtx.createRadialGradient(cx, cy, 0, cx, cy, W * 0.35);
  grad.addColorStop(0, 'rgba(42,191,163,0.04)');
  grad.addColorStop(1, 'transparent');
  mapCtx.fillStyle = grad;
  mapCtx.fillRect(0, 0, W, H);
}

function drawMapConnections(W, H) {
  const center = mapNodes[5]; // score node
  if (!center) return;
  const cx = center.x * W, cy = center.y * H;

  [1, 2, 3, 4, 6, 7, 8].forEach(idx => {
    const node = mapNodes[idx];
    if (!node) return;
    const nx = node.x * W, ny = node.y * H;
    mapCtx.beginPath();
    mapCtx.moveTo(cx, cy);

    // Curved path
    const mx = (cx + nx) / 2 + (Math.random() * 20 - 10);
    const my = (cy + ny) / 2 + (Math.random() * 20 - 10);
    mapCtx.quadraticCurveTo(mx, my, nx, ny);

    const col = node.type === 'danger' ? 'rgba(232,92,92,0.25)' :
                node.type === 'goal'   ? 'rgba(201,168,76,0.25)' :
                                         'rgba(42,191,163,0.2)';
    mapCtx.strokeStyle = col;
    mapCtx.lineWidth = 1;
    mapCtx.setLineDash([4, 4]);
    mapCtx.stroke();
    mapCtx.setLineDash([]);
  });
}

function drawMapNodes(W, H) {
  mapNodes.forEach((node, i) => {
    const x = node.x * W;
    const y = node.y * H;
    const size = (node.size || 1) * 36;
    const half = size / 2;

    // Node background
    const bgColor = node.type === 'danger' ? 'rgba(232,92,92,0.12)' :
                    node.type === 'goal'   ? 'rgba(201,168,76,0.12)' :
                    node.type === 'score'  ? 'rgba(201,168,76,0.18)' :
                    node.type === 'title'  ? 'rgba(42,191,163,0.1)'  :
                                             'rgba(42,191,163,0.08)';
    const borderColor = node.type === 'danger' ? 'rgba(232,92,92,0.5)' :
                        node.type === 'goal'   ? 'rgba(201,168,76,0.5)' :
                        node.type === 'score'  ? '#C9A84C' :
                                                  'rgba(42,191,163,0.4)';

    // Glow effect for score node
    if (node.type === 'score') {
      mapCtx.shadowColor = 'rgba(201,168,76,0.4)';
      mapCtx.shadowBlur = 20;
    }

    // Draw circle
    mapCtx.beginPath();
    mapCtx.arc(x, y, half, 0, Math.PI * 2);
    mapCtx.fillStyle = bgColor;
    mapCtx.fill();
    mapCtx.strokeStyle = borderColor;
    mapCtx.lineWidth = node.type === 'score' ? 2 : 1;
    mapCtx.stroke();

    mapCtx.shadowBlur = 0;

    // Icon
    mapCtx.font = `${size * 0.42}px serif`;
    mapCtx.textAlign = 'center';
    mapCtx.textBaseline = 'middle';
    mapCtx.fillText(node.icon, x, y);

    // Label below
    mapCtx.font = `bold ${Math.max(9, size * 0.26)}px Cairo, sans-serif`;
    mapCtx.fillStyle = node.type === 'danger' ? '#E85C5C' :
                       node.type === 'goal'   ? '#E8C87A' :
                       node.type === 'score'  ? '#C9A84C' :
                                                 '#5ED9C2';
    mapCtx.fillText(node.label, x, y + half + 12);

    // Sub-label
    if (node.sub) {
      mapCtx.font = `${Math.max(8, size * 0.22)}px Cairo, sans-serif`;
      mapCtx.fillStyle = 'rgba(157,146,133,0.8)';
      const sub = node.sub.length > 18 ? node.sub.substring(0, 16) + '…' : node.sub;
      mapCtx.fillText(sub, x, y + half + 24);
    }
  });
}

function onMapWheel(e) {
  e.preventDefault();
  const delta = e.deltaY > 0 ? 0.9 : 1.1;
  mapZoom = Math.min(3, Math.max(0.4, mapZoom * delta));
  state.mapZoom = mapZoom;
  renderInteractiveMap();
}

function onMapMouseDown(e) {
  mapIsDragging = true;
  mapDragStart = { x: e.clientX - mapPanX, y: e.clientY - mapPanY };
  mapCanvas.style.cursor = 'grabbing';
}

function onMapMouseMove(e) {
  if (!mapIsDragging) return;
  mapPanX = e.clientX - mapDragStart.x;
  mapPanY = e.clientY - mapDragStart.y;
  state.mapPanX = mapPanX;
  state.mapPanY = mapPanY;
  renderInteractiveMap();
}

function onMapMouseUp() {
  mapIsDragging = false;
  mapCanvas.style.cursor = 'crosshair';
}

let touchDist = 0;
function onMapTouchStart(e) {
  e.preventDefault();
  if (e.touches.length === 2) {
    touchDist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
  } else if (e.touches.length === 1) {
    mapIsDragging = true;
    mapDragStart = { x: e.touches[0].clientX - mapPanX, y: e.touches[0].clientY - mapPanY };
  }
}

function onMapTouchMove(e) {
  e.preventDefault();
  if (e.touches.length === 2) {
    const dist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
    const ratio = dist / (touchDist || dist);
    mapZoom = Math.min(3, Math.max(0.4, mapZoom * ratio));
    touchDist = dist;
    renderInteractiveMap();
  } else if (e.touches.length === 1 && mapIsDragging) {
    mapPanX = e.touches[0].clientX - mapDragStart.x;
    mapPanY = e.touches[0].clientY - mapDragStart.y;
    renderInteractiveMap();
  }
}

function onMapTouchEnd() { mapIsDragging = false; }

function mapZoomIn() { mapZoom = Math.min(3, mapZoom * 1.2); renderInteractiveMap(); }
function mapZoomOut() { mapZoom = Math.max(0.4, mapZoom / 1.2); renderInteractiveMap(); }
function mapReset() { mapZoom = 1; mapPanX = 0; mapPanY = 0; rebuildMapNodes(); renderInteractiveMap(); }

function downloadMap() {
  rebuildMapNodes();
  renderInteractiveMap();

  // Render 4K version
  const origW = mapCanvas.width, origH = mapCanvas.height;
  const scale4K = Math.max(1, 3840 / origW);
  const tempCanvas = document.createElement('canvas');
  tempCanvas.width = origW * scale4K;
  tempCanvas.height = origH * scale4K;
  const tempCtx = tempCanvas.getContext('2d');
  tempCtx.scale(scale4K, scale4K);
  tempCtx.drawImage(mapCanvas, 0, 0);

  const link = document.createElement('a');
  link.download = `masar-map-${state.userName || 'user'}.png`;
  link.href = tempCanvas.toDataURL('image/png');
  link.click();
  showToast(state.lang === 'ar' ? '⬇️ تم تحميل الخريطة بجودة عالية!' : '⬇️ Map downloaded in high quality!');
}

/* ========================
   INSIGHT REPORT
======================== */
function generateInsightReport() {
  const container = document.getElementById('report-container');
  if (!container) return;

  const done30 = state.thirtyDays.filter(Boolean).length;
  const weeklyHabits = Object.values(state.trackerData).filter(Boolean).length;
  const streak = getStreak();
  const pagesVisited = new Set(state.completedPages).size;
  const overallScore = calculateOverallScore(done30, weeklyHabits, pagesVisited);
  const profile = getPersonalityProfile(weeklyHabits, done30);

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
        <div style="display:flex; justify-content:center; margin:1.5rem 0;">
          <div class="score-ring">
            <svg width="140" height="140" viewBox="0 0 140 140">
              <defs><linearGradient id="repGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style="stop-color:var(--gold)"/><stop offset="100%" style="stop-color:var(--teal)"/></linearGradient></defs>
              <circle class="score-ring-bg" cx="70" cy="70" r="60"/>
              <circle class="score-ring-fill" cx="70" cy="70" r="60" style="stroke:url(#repGrad); stroke-dashoffset:${377 - (377 * overallScore / 100)};"/>
            </svg>
            <div class="score-ring-text"><span class="score-ring-num">${overallScore}</span><span class="score-ring-label">/ 100</span></div>
          </div>
        </div>
        <div class="quote-block" style="text-align:center;">${profile.title}<br><span style="font-size:0.82rem; font-family:'Cairo',sans-serif;">${profile.desc}</span></div>
      </div>
      <div class="report-section">
        <div class="report-header"><div class="report-header-icon">📈</div><div><div class="report-title">${state.lang === 'ar' ? 'أنماط سلوكك' : 'Behavior Patterns'}</div></div></div>
        ${renderPatternBars(weeklyHabits, done30, streak, pagesVisited)}
      </div>
      <div class="report-section">
        <div class="report-header"><div class="report-header-icon">🎯</div><div><div class="report-title">${state.lang === 'ar' ? 'توصياتك الشخصية' : 'Personal Recommendations'}</div></div></div>
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
      <div class="export-bar">
        <button class="btn btn-gold" onclick="window.print()">🖨 ${state.lang === 'ar' ? 'طباعة / PDF' : 'Print / PDF'}</button>
        <button class="btn btn-outline" onclick="mapReset(); renderInteractiveMap();">🗺 ${state.lang === 'ar' ? 'تحديث الخريطة' : 'Update Map'}</button>
      </div>`;

    renderBadges();
    // Initialize interactive map after report
    setTimeout(() => {
      initInteractiveMap();
    }, 300);
  }, 1500);
}

function calculateOverallScore(done30, weeklyHabits, pagesVisited) {
  return Math.min(100, Math.round((done30 / 30) * 40 + (weeklyHabits / 49) * 30 + (pagesVisited / 9) * 30));
}

function renderPatternBars(weeklyTotal, done30, streak, pagesVisited) {
  const isEN = state.lang === 'en';
  const bars = [
    { label: isEN ? 'Daily Commitment' : 'الالتزام اليومي', value: Math.min(100, (weeklyTotal/49)*100) },
    { label: isEN ? 'Consistency' : 'الاستمرارية', value: Math.min(100, (done30/30)*100) },
    { label: isEN ? 'Discipline' : 'الانضباط', value: Math.min(100, (streak/30)*100) },
    { label: isEN ? 'Awareness' : 'التعلم والوعي', value: Math.min(100, (pagesVisited/9)*100) },
  ];
  return bars.map(bar => `
    <div class="pattern-bar-row">
      <div class="pattern-label">${bar.label}</div>
      <div class="pattern-bar-bg"><div class="pattern-bar-fill" style="width:${bar.value}%"></div></div>
      <div class="pattern-value">${Math.round(bar.value)}${state.lang === 'ar' ? '٪' : '%'}</div>
    </div>`).join('');
}

function getPersonalityProfile(weeklyHabits, done30) {
  const isEN = state.lang === 'en';
  const total = weeklyHabits + done30;
  if (total >= 40) return { title: '🦅 ' + (isEN ? 'The Disciplined Warrior' : 'المحارب المنضبط'), desc: isEN ? 'You plan and commit. Your path to liberation is clear and steady.' : 'أنت من يضع خططاً ويلتزم بها. مسارك نحو التحرر واضح ومستمر.' };
  if (total >= 20) return { title: '🌱 ' + (isEN ? 'The Persevering Seeker' : 'الساعي المثابر'), desc: isEN ? 'You make real effort despite challenges. Keep going — small steps make the difference.' : 'تبذل جهداً حقيقياً رغم التحديات. استمر — الخطوات الصغيرة تصنع الفرق.' };
  if (done30 > 0) return { title: '🚶 ' + (isEN ? 'The Aware Beginner' : 'المبتدئ الواعي'), desc: isEN ? 'You are at the start — the hardest part. Awareness is half the solution.' : 'أنت في بداية الطريق وهذا أصعب جزء. الوعي بمشكلتك هو نصف الحل.' };
  return { title: '🌅 ' + (isEN ? 'The Change Seeker' : 'الباحث عن التغيير'), desc: isEN ? 'Your presence here shows real desire. Start with one small step today.' : 'وصولك هنا دليل على رغبتك الحقيقية. ابدأ بخطوة واحدة صغيرة اليوم.' };
}

function getRecommendations(weeklyHabits, done30, streak) {
  const isEN = state.lang === 'en';
  const recs = [];
  if (weeklyHabits < 15) recs.push({ icon: '⚡', priority: 'high', priorityLabel: '● ' + (isEN ? 'High' : 'عالي'), title: isEN ? 'Start with one habit only' : 'ابدأ بعادة واحدة فقط', desc: isEN ? 'Choose one habit and master it first.' : 'اختر عادة واحدة وأتقنها أولاً.' });
  if (streak === 0 && done30 === 0) recs.push({ icon: '🎯', priority: 'high', priorityLabel: '● ' + (isEN ? 'High' : 'عالي'), title: isEN ? 'Mark your first day now' : 'ظلّل يومك الأول الآن', desc: isEN ? 'Go to the 30-day grid and mark the first square.' : 'انتقل لشبكة الـ٣٠ يوم وظلّل المربع الأول.' });
  if (weeklyHabits >= 20 && done30 < 10) recs.push({ icon: '📅', priority: 'medium', priorityLabel: '● ' + (isEN ? 'Medium' : 'متوسط'), title: isEN ? 'Link habits to the day grid' : 'اربط العادات بشبكة الأيام', desc: isEN ? 'Your weekly performance is good — make it a regular journey.' : 'أداؤك الأسبوعي جيد — حوّله لرحلة منتظمة.' });
  if (streak >= 7) recs.push({ icon: '🔥', priority: 'low', priorityLabel: '○ ' + (isEN ? 'Improve' : 'تحسين'), title: isEN ? 'Protect your streak!' : 'حافظ على سلسلتك!', desc: `${streak} ${isEN ? 'consecutive days — you are in the zone of real change.' : 'أيام متتالية — أنت في منطقة التغيير الحقيقي.'}` });
  recs.push({ icon: '🤲', priority: 'low', priorityLabel: '○ ' + (isEN ? 'Improve' : 'تحسين'), title: isEN ? 'Strengthen your spiritual alternative' : 'قوّ بديلك الروحي', desc: isEN ? 'Dhikr and Istighfar are your strongest weapons.' : 'الذكر والاستغفار هما أقوى أسلحتك.' });
  return recs.slice(0, 4);
}

/* ========================
   TOAST
======================== */
function showToast(msg, duration = 2500) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

/* ========================
   PARTICLES (lightweight: only 30 particles)
======================== */
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = Array.from({ length: 30 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.2 + 0.3,
    dx: (Math.random() - 0.5) * 0.25,
    dy: -Math.random() * 0.3 - 0.07,
    alpha: Math.random() * 0.3 + 0.05,
    color: Math.random() > 0.5 ? '#C9A84C' : '#2ABFA3',
  }));

  let frameId;
  function animate() {
    frameId = requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
      if (p.y < -5) { p.y = canvas.height + 5; p.x = Math.random() * canvas.width; }
      if (p.x < -5) p.x = canvas.width + 5;
      if (p.x > canvas.width + 5) p.x = -5;
    });
    ctx.globalAlpha = 1;
  }
  animate();

  // Throttled resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }, 250);
  });
}

/* ========================
   MOTIVATIONAL MESSAGES
======================== */
const MSGS_AR = ['كل خطوة صغيرة هي انتصار. 🌱', 'الاستمرار هو السر — لا الكمال. 💪', 'دماغك يتغير كل يوم — اجعله يتغير نحو الأفضل. 🧠', 'من جاهد، وجد. 🤲', 'أنت أقوى مما تعتقد. ⭐'];
const MSGS_EN = ['Every small step is a victory. 🌱', 'Consistency is the secret — not perfection. 💪', 'Your brain changes every day — make it change for the better. 🧠', 'Strive, and you shall find. 🤲', 'You are stronger than you think. ⭐'];

setInterval(() => {
  const msgs = state.lang === 'en' ? MSGS_EN : MSGS_AR;
  showToast(msgs[Math.floor(Math.random() * msgs.length)], 3500);
}, 180000);

/* ========================
   INIT
======================== */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLang();
  initNavGroups();
  initParticles();
  buildTracker();
  build30Grid();
  rebuildChecklists();
  buildRescueSteps();
  buildDopamineDiagram();
  restoreInputsFromState();
  updatePointsDisplay();
  updateWeeklyScore();
  updateProgress();

  state.completedPages.forEach(p => markNavCheck(p));
  autoOpenNavGroup(state.currentPage || 1);

  // Prevent door input clicks from toggling
  document.querySelectorAll('.door-input').forEach(el => {
    el.addEventListener('click', e => e.stopPropagation());
    el.addEventListener('mousedown', e => e.stopPropagation());
  });

  // Restore trigger selections
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

  if (state.completedPages.length === 0) {
    setTimeout(() => showToast(state.lang === 'ar' ? '🌙 مرحباً — مسارك بدأ الآن' : '🌙 Welcome — your journey starts now'), 1500);
  }

  // Restore current page
  if (state.currentPage && state.currentPage > 1) {
    showPage(state.currentPage);
    if (state.currentPage === 9) {
      setTimeout(generateInsightReport, 800);
    }
  } else {
    showPage(1);
  }

  // Resize map canvas on window resize
  window.addEventListener('resize', () => {
    if (mapCanvas) {
      const W = mapCanvas.parentElement?.clientWidth || 700;
      mapCanvas.width = W;
      mapCanvas.height = Math.max(420, W * 0.55);
      renderInteractiveMap();
    }
  });

  console.log('مسار التحرر v4.0 — ZUHD Essence ✓');
});
