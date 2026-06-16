/* ── BUG SYSTEM ──────────────────────────────────────────────────── */

const canvas = document.getElementById('bug-canvas');
const ctx    = canvas.getContext('2d');
const stage  = document.getElementById('stage');

const BUG_DEFS = [
  { label: 'Work Experience', color: '#000000', sectionId: 'work'     },
  { label: 'Projects',        color: '#000000', sectionId: 'projects'  },
  { label: 'Academic Exp.',   color: '#000000', sectionId: 'academic'  },
  { label: 'Skills',          color: '#000000', sectionId: 'skills'    },
  { label: 'Contact',         color: '#000000', sectionId: 'contact'   },
];

function hexRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

class Bug {
  constructor(def, W, H) {
    this.label     = def.label;
    this.color     = def.color;
    this.sectionId = def.sectionId;
    this.size      = 22 + Math.random() * 8;

    this.x             = 60 + Math.random() * (W - 120);
    this.y             = 80 + Math.random() * (H - 160);
    this.angle         = Math.random() * Math.PI * 2;
    this.targetAngle   = this.angle;
    this.speed         = 0.32 + Math.random() * 0.22;
    this.changeTimer   = 0;
    this.changeInterval = 100 + Math.random() * 140;

    this.legPhase = Math.random() * Math.PI * 2;
    this.hovered  = false;
    this.wobbleT  = 0;
    this.dying    = false;
    this.dyingT   = 0;
  }

  update(W, H) {
    if (this.dying) {
      this.dyingT = Math.min(1, this.dyingT + 0.055);
      return;
    }
    if (this.hovered) {
      this.wobbleT += 0.05;
      return;
    }

    this.changeTimer++;
    if (this.changeTimer >= this.changeInterval) {
      this.changeTimer    = 0;
      this.changeInterval = 100 + Math.random() * 140;
      this.targetAngle    = Math.random() * Math.PI * 2;
    }

    const margin = 50;
    if (this.x < margin)          this.targetAngle = 0;
    else if (this.x > W - margin) this.targetAngle = Math.PI;
    if (this.y < margin)          this.targetAngle = Math.PI / 2;
    else if (this.y > H - margin) this.targetAngle = -Math.PI / 2;

    const TAU  = Math.PI * 2;
    const diff = ((this.targetAngle - this.angle + Math.PI) % TAU) - Math.PI;
    this.angle += diff * 0.028;

    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;
    this.x = Math.max(20, Math.min(W - 20, this.x));
    this.y = Math.max(20, Math.min(H - 20, this.y));

    this.legPhase += 0.15;
  }

  draw(ctx) {
    const s   = this.size;
    const hov = this.hovered && !this.dying;

    /* Dying animation: scale up + fade out, no label */
    if (this.dying) {
      const t = this.dyingT;
      ctx.save();
      ctx.globalAlpha = Math.max(0, 1 - t * 1.4);
      ctx.translate(this.x, this.y);
      ctx.scale(1 + t * 0.7, 1 + t * 0.7);
      ctx.translate(-this.x, -this.y);
    }

    /* Ground shadow */
    ctx.save();
    ctx.beginPath();
    ctx.ellipse(this.x + 2, this.y + 4, s * 0.42, s * 0.14, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0,0,0,0.07)';
    ctx.fill();
    ctx.restore();

    /* Bug body */
    ctx.save();
    ctx.translate(this.x, this.y);
    let drawAngle = this.angle + Math.PI / 2;
    if (hov) drawAngle += Math.sin(this.wobbleT * 3) * 0.10;
    ctx.rotate(drawAngle);

    /* Legs */
    const legYOffsets = [-0.28 * s, 0.02 * s, 0.30 * s];
    ctx.strokeStyle = hexRgba(this.color, 0.55);
    ctx.lineWidth   = 0.9;
    for (let i = 0; i < 3; i++) {
      const ly    = legYOffsets[i];
      const swing = Math.sin(this.legPhase + i) * 4;
      ctx.beginPath(); ctx.moveTo(0, ly); ctx.lineTo(-s * 0.6 - swing, ly + s * 0.22); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, ly); ctx.lineTo( s * 0.6 + swing, ly + s * 0.22); ctx.stroke();
    }

    /* Abdomen */
    ctx.beginPath();
    ctx.ellipse(0, s * 0.27, s * 0.27, s * 0.46, 0, 0, Math.PI * 2);
    ctx.fillStyle = this.color; ctx.fill();
    ctx.strokeStyle = '#dc2626'; ctx.lineWidth = 1.6; ctx.stroke();

    /* Head / thorax */
    ctx.beginPath();
    ctx.ellipse(0, -s * 0.32, s * 0.19, s * 0.28, 0, 0, Math.PI * 2);
    ctx.fillStyle = this.color; ctx.fill();
    ctx.strokeStyle = '#dc2626'; ctx.lineWidth = 1.6; ctx.stroke();

    /* Wing sheen */
    ctx.beginPath();
    ctx.ellipse(0, s * 0.15, s * 0.12, s * 0.22, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255,255,255,0.15)'; ctx.fill();

    /* Eyes */
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    ctx.beginPath(); ctx.arc(-s * 0.08, -s * 0.50, s * 0.055, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc( s * 0.08, -s * 0.50, s * 0.055, 0, Math.PI * 2); ctx.fill();

    /* Antennae */
    ctx.strokeStyle = this.color; ctx.lineWidth = 0.7;
    ctx.beginPath(); ctx.moveTo(-s * 0.08, -s * 0.55); ctx.quadraticCurveTo(-s * 0.30, -s * 0.88, -s * 0.44, -s * 1.02); ctx.stroke();
    ctx.beginPath(); ctx.moveTo( s * 0.08, -s * 0.55); ctx.quadraticCurveTo( s * 0.30, -s * 0.88,  s * 0.44, -s * 1.02); ctx.stroke();

    ctx.restore();

    if (this.dying) {
      ctx.restore(); // undo dying transform
      return;
    }

    this._drawLabel(ctx, s, hov);
  }

  _drawLabel(ctx, s, hov) {
    ctx.save();
    ctx.font = "600 13px 'JetBrains Mono', monospace";

    const tw = ctx.measureText(this.label).width;
    const pw = tw + 22;
    const ph = 24;
    const r  = 8;
    const px = this.x - pw / 2;
    const py = this.y - s * 1.8 - ph - 4;

    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(px, py, pw, ph, r);
    } else {
      ctx.moveTo(px + r, py);
      ctx.lineTo(px + pw - r, py);
      ctx.arcTo(px + pw, py, px + pw, py + r, r);
      ctx.lineTo(px + pw, py + ph - r);
      ctx.arcTo(px + pw, py + ph, px + pw - r, py + ph, r);
      ctx.lineTo(px + r, py + ph);
      ctx.arcTo(px, py + ph, px, py + ph - r, r);
      ctx.lineTo(px, py + r);
      ctx.arcTo(px, py, px + r, py, r);
      ctx.closePath();
    }

    ctx.fillStyle   = hov ? '#dc2626' : 'rgba(15,23,42,0.88)';
    ctx.strokeStyle = hov ? '#dc2626' : 'rgba(15,23,42,0.20)';
    ctx.lineWidth   = 1.5;
    ctx.fill(); ctx.stroke();

    ctx.fillStyle    = '#ffffff';
    ctx.textAlign    = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.label, this.x, py + ph / 2);

    ctx.beginPath();
    ctx.setLineDash([2, 4]);
    ctx.strokeStyle = 'rgba(15,23,42,0.35)';
    ctx.lineWidth   = 1.2;
    ctx.moveTo(this.x, py + ph);
    ctx.lineTo(this.x, this.y - s * 0.9);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.restore();
  }

  contains(mx, my) {
    const r = this.size * 1.1;
    return Math.abs(mx - this.x) < r && Math.abs(my - this.y) < r;
  }
}

/* ── CANVAS SETUP ───────────────────────────────────────────────── */

let W = 0, H = 0, bugs = [], aliveCount = 0;
const isMobile = () => window.innerWidth < 768;

function updateCounter() {
  const el = document.getElementById('bug-counter');
  if (!el) return;
  if (aliveCount <= 0) {
    el.innerHTML = 'Good job! You killed all the bugs!';
    el.classList.add('all-dead');
  } else {
    el.innerHTML = `You have <strong>${aliveCount}</strong> bug${aliveCount !== 1 ? 's' : ''} on screen &mdash; click each to swat them!`;
    el.classList.remove('all-dead');
  }
}

function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  W = stage.clientWidth;
  H = stage.clientHeight;
  canvas.width  = W * dpr;
  canvas.height = H * dpr;
  canvas.style.width  = W + 'px';
  canvas.style.height = H + 'px';
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function initBugs() {
  const count = isMobile() ? 3 : BUG_DEFS.length;
  bugs = BUG_DEFS.slice(0, count).map(def => new Bug(def, W, H));
  aliveCount = bugs.length;
  updateCounter();
}

/* ── ANIMATION LOOP ─────────────────────────────────────────────── */

function loop() {
  ctx.clearRect(0, 0, W, H);
  bugs.forEach(b => { b.update(W, H); b.draw(ctx); });
  bugs = bugs.filter(b => b.dyingT < 1);
  requestAnimationFrame(loop);
}

/* ── MOUSE / TOUCH EVENTS ───────────────────────────────────────── */

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

/* Track mouse on document — canvas is pointer-events:none by default
   so it doesn't block clicks on nav/buttons. Flip to auto only when
   the cursor is actually over a bug so the click lands on the canvas. */
document.addEventListener('mousemove', e => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  let anyHovered = false;
  bugs.forEach(b => { b.hovered = b.contains(x, y); if (b.hovered) anyHovered = true; });
  canvas.style.pointerEvents = anyHovered ? 'auto' : 'none';
  document.body.style.cursor = anyHovered ? 'pointer' : '';
});

function swatBug(x, y) {
  bugs.forEach(b => {
    if (!b.dying && b.contains(x, y)) {
      b.dying = true;
      aliveCount = Math.max(0, aliveCount - 1);
      updateCounter();
      scrollToSection(b.sectionId);
    }
  });
}

canvas.addEventListener('click', e => {
  const rect = canvas.getBoundingClientRect();
  swatBug(e.clientX - rect.left, e.clientY - rect.top);
});

document.addEventListener('touchend', e => {
  if (!e.changedTouches.length) return;
  const t = e.changedTouches[0];
  const rect = canvas.getBoundingClientRect();
  swatBug(t.clientX - rect.left, t.clientY - rect.top);
});

/* ── RESIZE ─────────────────────────────────────────────────────── */

window.addEventListener('resize', () => {
  resizeCanvas();
  bugs.forEach(b => {
    b.x = Math.max(20, Math.min(W - 20, b.x));
    b.y = Math.max(20, Math.min(H - 20, b.y));
  });
  const needed = isMobile() ? 3 : BUG_DEFS.length;
  if (bugs.length !== needed) initBugs();
});

/* ── INIT ───────────────────────────────────────────────────────── */

resizeCanvas();
initBugs();
loop();
