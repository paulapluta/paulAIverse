// paulaiverse — App Logic

(function () {

  // ─── Theme toggle ───────────────────────────────────────────────────────
  const toggle = document.querySelector('[data-theme-toggle]');
  const root = document.documentElement;
  let theme = 'light';
  root.setAttribute('data-theme', theme);

  if (toggle) {
    toggle.addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', theme);
      toggle.setAttribute('aria-label', 'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' mode');
      // dark mode → show moon; light mode → show sun
      toggle.innerHTML = theme === 'dark'
        ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'
        : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
    });
  }

  // ─── "New" badge logic (items added within 30 days) ─────────────────────
  const NOW = new Date();
  const NEW_WINDOW_DAYS = 30;

  function isNew(dateStr) {
    if (!dateStr) return false;
    const added = new Date(dateStr);
    const diffDays = (NOW - added) / (1000 * 60 * 60 * 24);
    return diffDays <= NEW_WINDOW_DAYS;
  }

  // ─── Count stats ────────────────────────────────────────────────────────
  const countBoth = TOPICS.filter(t => t.category === 'both').length;
  const countPm   = TOPICS.filter(t => t.category === 'pm').length;
  const countHfr  = TOPICS.filter(t => t.category === 'hfr').length;

  document.getElementById('count-both').textContent = countBoth;
  document.getElementById('count-pm').textContent   = countPm;
  document.getElementById('count-hfr').textContent  = countHfr;

  // ─── Render changelog ────────────────────────────────────────────────────
  function renderChangelog() {
    const el = document.getElementById('changelog-list');
    if (!el || !CHANGELOG || !CHANGELOG.length) return;

    el.innerHTML = CHANGELOG.map(entry => `
      <li class="cl-entry">
        <span class="cl-date">${formatDate(entry.date)}</span>
        <span class="cl-desc">${entry.description}</span>
      </li>
    `).join('');
  }

  function formatDate(dateStr) {
    const d = new Date(dateStr + 'T12:00:00');
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  renderChangelog();

  // ─── Render cards ───────────────────────────────────────────────────────
  function badgeHtml(cat) {
    if (cat === 'both') return '<span class="badge badge-both">PM + HFR</span>';
    if (cat === 'pm')   return '<span class="badge badge-pm">PM</span>';
    if (cat === 'hfr')  return '<span class="badge badge-hfr">HFR</span>';
    return '';
  }

  function renderCards(filter) {
    const grid   = document.getElementById('topics-grid');
    const empty  = document.getElementById('empty-msg');
    const visible = filter === 'all' ? TOPICS : TOPICS.filter(t => t.category === filter);

    if (visible.length === 0) {
      grid.innerHTML = '';
      empty.style.display = 'block';
      return;
    }
    empty.style.display = 'none';

    grid.innerHTML = visible.map(topic => {
      const hasWhy = topic.whyItMatters;
      const whyPm  = hasWhy && hasWhy.pm  ? `<div class="why-item"><span class="why-label">For PM</span><p>${hasWhy.pm}</p></div>` : '';
      const whyHfr = hasWhy && hasWhy.hfr ? `<div class="why-item"><span class="why-label">For HFR</span><p>${hasWhy.hfr}</p></div>` : '';

      const terms = topic.keyTerms
        .map(t => `<span class="term">${t}</span>`)
        .join('');

      const researchQs = topic.researchQuestions && topic.researchQuestions.length
        ? `<div class="research-qs">
            <div class="rq-label">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              Research questions
            </div>
            <ul class="rq-list">
              ${topic.researchQuestions.map(q => `<li>${q}</li>`).join('')}
            </ul>
          </div>`
        : '';

      const newBadge = isNew(topic.addedDate) ? '<span class="badge-new">New</span>' : '';
      const updatedBadge = isNew(topic.updatedDate) && topic.updatedDate !== topic.addedDate
        ? '<span class="badge-updated">Updated</span>' : '';

      return `
      <article class="card card-${topic.category}" data-id="${topic.id}">
        <div class="card-header">
          <div class="card-header-row">
            ${badgeHtml(topic.category)}
            <div class="card-freshness">${newBadge}${updatedBadge}</div>
          </div>
          <h2 class="card-title">${topic.title}</h2>
          <p class="card-tagline">${topic.tagline}</p>
        </div>
        <div class="card-body">
          <p class="card-summary">${topic.summary}</p>
          ${(whyPm || whyHfr) ? `<div class="why-matters">${whyPm}${whyHfr}</div>` : ''}
          ${researchQs}
          <div class="key-terms">${terms}</div>
        </div>
        <div class="card-footer">
          <a href="${topic.learnMore}" target="_blank" rel="noopener noreferrer" class="learn-link">
            Learn more
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>
      </article>`;
    }).join('');
  }

  // ─── Filter pills ────────────────────────────────────────────────────────
  let activeFilter = 'all';
  renderCards(activeFilter);

  document.querySelectorAll('.pill').forEach(pill => {
    pill.addEventListener('click', () => {
      activeFilter = pill.dataset.filter;
      document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      renderCards(activeFilter);
    });
  });

  // ─── Changelog toggle ───────────────────────────────────────────────────
  const clToggle = document.getElementById('cl-toggle');
  const clContent = document.getElementById('cl-content');
  if (clToggle && clContent) {
    clToggle.addEventListener('click', () => {
      const open = clContent.classList.toggle('cl-open');
      clToggle.setAttribute('aria-expanded', open);
      clToggle.querySelector('.cl-arrow').style.transform = open ? 'rotate(180deg)' : 'rotate(0deg)';
    });
  }

})();
