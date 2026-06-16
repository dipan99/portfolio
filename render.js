/* ── DATA RENDERER ───────────────────────────────────────────────── */

async function loadAll() {
  const [work, academic, projects, skills] = await Promise.all([
    fetch('data/work.json').then(r => r.json()),
    fetch('data/academic.json').then(r => r.json()),
    fetch('data/projects.json').then(r => r.json()),
    fetch('data/skills.json').then(r => r.json()),
  ]);

  renderTimeline('work-cards', work);
  renderTimeline('academic-cards', academic);
  renderProjects(projects);
  renderSkills(skills);
}

function renderTimeline(containerId, items) {
  const el = document.getElementById(containerId);
  el.innerHTML = items.map(item => `
    <div class="pcard">
      <div class="pcard-header">
        <div>
          <div class="pcard-role">${item.role}</div>
          <span class="pcard-company">${item.company}</span>
        </div>
        <div class="pcard-meta-right">
          <span class="pcard-label">${item.period}</span>
          <span class="pcard-location">${item.location}</span>
        </div>
      </div>
      <ul class="pcard-list">
        ${item.bullets.map(b => `<li>${b}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

function renderProjects(items) {
  const el = document.getElementById('projects-cards');
  el.innerHTML = items.map(item => `
    <div class="pcard">
      <div class="pcard-badge">${item.badge}</div>
      <div class="pcard-title">${item.title}</div>
      <div class="pcard-sub">
        ${item.description}<br><br>
        <strong>Stack:</strong> ${item.stack}
      </div>
    </div>
  `).join('');
}

function renderSkills(items) {
  const el = document.getElementById('skills-grid');
  el.innerHTML = items.map(item => `
    <div class="skill-category">
      <span class="skill-cat-label">${item.category}</span>
      <div class="skill-pills">
        ${item.skills.map(s => `<span class="skill-pill">${s}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

loadAll();
