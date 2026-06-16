# Portfolio Website — Coding Agent Prompt

You will be given three documents:
- A resume (PDF or DOCX)
- A detailed work experiences document
- An MSCS experiences document

---

## Phase 1 — Extract & Create Reference Files

Before writing any website code, parse the three provided documents and produce three markdown files. These files are read-only references for Phase 2 — do not modify them after creation.

### RESUME.md
Extract:
- Full name
- Current title / tagline (e.g. "SDET · QA Engineer · CS Graduate")
- One-paragraph bio / summary (rephrase naturally if needed, keep it concise — 2–3 sentences max)
- Contact details: email, LinkedIn URL, GitHub URL
- Skills grouped by category (Testing & QA, Languages & Tools, Data Science, etc.)
- Education: degree, institution, graduation year, GPA if listed
- Any certifications or notable awards

### DETAILED_WORK_EXP.md
Extract all **corporate / industry roles** only (full-time jobs, internships at companies):
- Company name, job title, dates (month + year)
- Location (city or remote)
- 3–5 bullet points per role describing responsibilities and achievements
- Tech stack / tools used per role
- Any quantifiable impact (e.g. "reduced regression time by 60%")

Label this category **"Work Experience"** — this is the term used everywhere in the site.

### MSCS_EXP.md
Extract all **academic roles** (Graduate Research Assistant, Teaching Assistant, lab projects, thesis work, course projects):
- Role title, institution/lab/course, dates
- 3–5 bullet points per role
- Tools, methods, datasets used
- Any publications, presentations, or outcomes

Label this category **"Academic Experience"** — this is the term used everywhere in the site.

---

## Phase 2 — Build the Website

### Tech Stack
- Pure **HTML + CSS + JavaScript** — no frameworks, no build tools, no npm
- Single `index.html` file (CSS and JS embedded or in separate `style.css` / `script.js` files)
- Must work by simply opening `index.html` in a browser or deploying to **GitHub Pages** with zero configuration
- Google Fonts via CDN link tag (no self-hosting needed)
- No other external dependencies except Google Fonts

### Fonts — load all three via a single Google Fonts link
```
Space Grotesk (weights 400, 500, 600, 700) — primary UI font
DM Serif Display (regular + italic) — display/name font
JetBrains Mono (weights 400, 500) — code labels, eyebrows, monospace accents
```

---

### Color Palette — use exactly these values, no substitutions

```
--bg:           #f0f2f7   (page background, cool white)
--bg-glow:      radial-gradient(ellipse at 16% 38%, #dce6f5 0%, #f0f2f7 50%, #eaecf5 100%)
--navy:         #0f172a   (primary text, heavy UI elements)
--navy-mid:     #1e3a5f   (hover state for navy elements)
--blue:         #0369a1   (accent color — links, pills, labels, highlights)
--blue-mid:     #0284c7   (hover state for blue elements)
--blue-dim:     rgba(3,105,161,0.09)   (tinted backgrounds — pills, tags, cards)
--blue-card:    #e0f2fe   (photo card background tint)
--text-dark:    #0f172a   (headings, card titles)
--text-mid:     #334e68   (body text, descriptions)
--text-muted:   #5a7a96   (secondary text, eyebrows, placeholders)
```

Bugs use two colors:
```
--bug-navy:  #0f2a4a   (primary bug color)
--bug-blue:  #075985   (secondary bug color)
```

---

### Layout & Structure

The entire page is one viewport-height section — a single living canvas. There are no scroll sections. Everything the visitor needs to know is accessed by clicking bugs (which open a slide-up panel). This is intentional — the whole page is a "ground" that bugs inhabit.

```
┌─────────────────────────────────────────────────────┐
│  NAV (fixed, frosted glass)                         │
├─────────────────────────────────────────────────────┤
│                                                     │
│   HERO LEFT              HERO RIGHT                 │
│   ─────────              ──────────                 │
│   eyebrow label          photo card                 │
│   Name (display serif)   (floating, shadowed)       │
│   // title (mono)                                   │
│   bio paragraph                                     │
│   [CTA buttons]                                     │
│   [social icons]                                    │
│                                                     │
│   ~ bugs crawling everywhere across the page ~      │
│                                                     │
└─────────────────────────────────────────────────────┘
│  SLIDE-UP PANEL (fixed bottom, hidden by default)   │
└─────────────────────────────────────────────────────┘
```

---

### Navigation

Fixed to top. Frosted glass effect:
```css
background: rgba(240,242,247,0.88);
backdrop-filter: blur(14px);
border-bottom: 1px solid rgba(3,105,161,0.08);
```

Left side: logo mark in JetBrains Mono — `// firstname` or `// initials.dev` (your call based on name)

Center: nav links — About · Work Experience · Academic Experience · Projects · Contact
- Font: Space Grotesk 13px, color `--text-mid`, hover → `--navy`
- Clicking a nav link opens the corresponding bug panel (see panel section below) — the nav links and bugs are wired to the same panel system

Right side: "Resume" button
```css
background: var(--navy);
color: #f0f2f7;
border-radius: 20px;
padding: 0.42rem 1.2rem;
font-size: 13px; font-weight: 600;
```
Hover: background → `--navy-mid`. This button opens/downloads the resume PDF.

---

### Hero Section

Takes up full viewport height (`min-height: 100vh`). Two-column flex layout.

**Left column** (max-width 530px):

1. Eyebrow label
   - Font: JetBrains Mono, 10px, `letter-spacing: 0.22em`, `text-transform: uppercase`
   - Color: `--text-muted`
   - Text: "Portfolio"
   - Margin bottom: 1.4rem

2. Name — use `<h1>` with `font-family: 'DM Serif Display', serif`
   - First name: color `--text-dark`, font-weight normal (DM Serif is already heavy)
   - Last name: color `--blue`, font-style italic (DM Serif has a beautiful italic)
   - Font size: `clamp(3.8rem, 7vw, 5.8rem)`, line-height 1.0
   - Example: `Firstname` on line one, `Lastname` in italic blue on line two

3. Title line
   - Font: JetBrains Mono, 13px, color `--text-muted`
   - Format: `// SDET · QA Engineer · CS Graduate` (pull exact title from RESUME.md)

4. Bio paragraph
   - Font: Space Grotesk, 15px, line-height 1.75, color `--text-mid`
   - Max-width 400px
   - Pull from RESUME.md summary — keep to 2–3 sentences

5. CTA buttons (three, left to right):
   - "View Resume" → filled navy button (opens resume PDF)
   - "Explore Projects" → outlined button (opens Projects panel)
   - "Contact Me" → text-only button (opens Contact panel)

   Filled button CSS:
   ```css
   background: var(--navy); color: #f0f2f7;
   border: none; border-radius: 22px;
   padding: 0.62rem 1.45rem;
   font-size: 13px; font-weight: 600;
   ```

   Outlined button CSS:
   ```css
   background: transparent; color: var(--text-mid);
   border: 1.5px solid rgba(51,78,104,0.25);
   border-radius: 22px; padding: 0.58rem 1.3rem;
   font-size: 13px; font-weight: 500;
   ```
   Hover: border-color → `--blue`, color → `--blue`

   Text button CSS:
   ```css
   background: transparent; border: none;
   color: var(--text-muted); font-size: 13px; font-weight: 500;
   ```
   Hover: color → `--navy`

6. Social icon row — three icons (email, LinkedIn, GitHub)
   - 34×34px circle, border `1.5px solid rgba(51,78,104,0.18)`, color `--text-muted`
   - Hover: border-color → `--blue`, color → `--blue`
   - Use inline SVG for each icon (no icon libraries needed)
   - Pull URLs from RESUME.md

**Right column** — Photo Card

```css
width: 270px; height: 330px;
border-radius: 22px;
background: rgba(224,242,254,0.5);
border: 1px solid rgba(3,105,161,0.12);
box-shadow:
  0 1px 3px rgba(15,23,42,0.04),
  0 10px 28px rgba(3,105,161,0.10),
  0 28px 56px rgba(15,23,42,0.08);
overflow: hidden;
```

The box-shadow is layered (3 layers) to give the card physical depth — this is important, do not simplify it to a single shadow. The blue-tinted mid shadow ties the card to the page's color palette.

Place the user's photo inside as `object-fit: cover; width: 100%; height: 100%`. If no photo is provided, show a centered placeholder with a person SVG icon and muted text "your photo" in JetBrains Mono.

---

### Bug Animation System

This is the signature element of the site. Implement using the **HTML5 Canvas API**. The canvas is `position: absolute; inset: 0; width: 100%; height: 100%; z-index: 2` inside the stage div. The hero HTML content sits at `z-index: 3` above the canvas. Canvas `pointer-events: all` so bugs are clickable.

**There are 5 bugs**, one per content section:
```
Bug 0 — "Work Experience"   — color: --bug-navy
Bug 1 — "Projects"          — color: --bug-blue
Bug 2 — "Academic Exp."     — color: --bug-navy
Bug 3 — "Skills"            — color: --bug-blue
Bug 4 — "Contact"           — color: --bug-navy
```

**Bug anatomy** (drawn with Canvas 2D API, all relative to `this.size` which is 12–17px random per bug):

1. Ground shadow — subtle ellipse under the bug body, `rgba(0,0,0,0.07)`, offset slightly right and down, gives physical grounding on the light surface

2. Legs — 3 pairs (6 legs total), drawn as stroked lines at y-offsets of roughly `-0.28s`, `+0.02s`, `+0.30s` from center. Each leg swings ±4px based on `Math.sin(legPhase + i)`. Stroke color is bug color at 55% opacity.

3. Abdomen — large ellipse: `ellipse(0, s*0.27, s*0.27, s*0.46)`

4. Head/thorax — smaller ellipse: `ellipse(0, -s*0.32, s*0.19, s*0.28)`

5. Wing sheen — tiny white ellipse on abdomen at 15% opacity for a subtle highlight

6. Eyes — two small white-ish circles at `±s*0.08, -s*0.5`

7. Antennae — two quadratic bezier curves curving outward from the head

Bug is drawn rotated to face its direction of travel (`ctx.rotate(angle + Math.PI/2)`). The `+ Math.PI/2` corrects for the fact that the bug body is drawn vertically (head up) but the angle is measured from the x-axis.

**Label pill** — drawn above each bug, not as DOM but as Canvas:
```
Font: 500 9px 'JetBrains Mono'
Background: rgba(240,242,247,0.93) — matches page bg
Border: bug color at 30% opacity, 0.9px stroke
Text: bug color
Border-radius: 7px pill shape (use roundRect helper)
Dashed connector line from pill bottom to bug head: bug color, 22% opacity, dash [2,3]
```

On hover: pill inverts — background becomes bug color, text becomes `#f0f2f7`

**Movement algorithm** per bug:
```javascript
// Each bug has: x, y, angle, targetAngle, speed (0.32–0.54), changeTimer, changeInterval (100–240 frames)

update(W, H) {
  // increment changeTimer; when it exceeds changeInterval, pick a new random targetAngle
  // smoothly rotate toward targetAngle: angle += wrappedDiff * 0.028
  // wrappedDiff = ((targetAngle - angle + PI) % TAU) - PI  (handles wraparound)
  // wall avoidance: if within 50px of any edge, set targetAngle to point away
  // move: x += cos(angle) * speed; y += sin(angle) * speed
  // clamp x,y to [20, W-20] and [20, H-20]
  // increment legPhase by 0.15 each frame
}
```

On hover: bug stops moving, `wobbleT` increments each frame, angle gets `+ Math.sin(wobbleT * 3) * 0.10` wobble. Cursor becomes `pointer`.

On click: open the corresponding content panel.

**Canvas resize**: on `window resize`, set `canvas.width = stage.clientWidth` and `canvas.height = stage.clientHeight`. Re-initialize bug positions if needed to keep them in bounds.

**Animation loop**: `requestAnimationFrame` — clear canvas with `ctx.clearRect`, then update + draw all bugs each frame.

---

### Slide-Up Content Panel

Fixed to bottom of viewport, slides up on bug click or nav link click.

```css
position: fixed; bottom: 0; left: 0; right: 0;
background: #ffffff;
border-radius: 20px 20px 0 0;
border-top: 1px solid rgba(3,105,161,0.10);
box-shadow: 0 -8px 48px rgba(15,23,42,0.10);
transform: translateY(100%);
transition: transform 0.42s cubic-bezier(0.32, 0.72, 0, 1);
max-height: 65vh;
overflow-y: auto;
z-index: 200;
```

Open state: `transform: translateY(0)`

**Panel anatomy:**
1. Drag handle at top — `width: 36px; height: 3px; border-radius: 2px; background: rgba(3,105,161,0.15)`. Clicking it closes the panel.
2. Close button (×) — top-right corner, 30×30px circle, `background: rgba(3,105,161,0.06)`, color `--blue`
3. Section tag — pill label in JetBrains Mono 9px, `letter-spacing: 0.16em`, uppercase, blue text on blue-dim background
4. Panel title — DM Serif Display, 1.9rem, color `--text-dark`
5. Content grid — `display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.9rem`

**Panel cards:**
```css
background: #f8fafd;
border: 1px solid rgba(3,105,161,0.10);
border-radius: 12px;
padding: 1rem 1.1rem;
transition: border-color 0.2s;
```
Hover: `border-color: rgba(3,105,161,0.25)`

Card label: JetBrains Mono 10px, `--blue`, uppercase, 80% opacity
Card title: Space Grotesk 14px, weight 600, `--text-dark`
Card sub: Space Grotesk 12px, `--text-muted`, line-height 1.55

**Skill pills** (used in Skills panel):
```css
background: rgba(3,105,161,0.09);
color: var(--blue);
border: 1px solid rgba(3,105,161,0.15);
font-size: 11px; font-weight: 500;
padding: 2px 9px; border-radius: 14px;
font-family: 'JetBrains Mono', monospace;
margin: 3px 3px 0 0;
```

---

### Panel Content — Populate from Reference Files

**Work Experience panel** — pull from DETAILED_WORK_EXP.md
- Tag: "Work Experience"
- Title: "Where I've worked"
- One card per role, sorted newest first
- Card label = date range (e.g. "Jun 2022 – Present")
- Card title = Job Title @ Company Name
- Card sub = 2–3 key bullet points condensed to a short paragraph, plus tech stack

**Academic Experience panel** — pull from MSCS_EXP.md
- Tag: "Academic Experience"
- Title: "Research & academics"
- One card per role/project, sorted newest first
- Card label = date range
- Card title = Role @ Lab/Institution
- Card sub = 2–3 key points + tools/methods used

**Projects panel** — pull from both DETAILED_WORK_EXP.md and MSCS_EXP.md, extract any standalone projects
- Tag: "Projects"
- Title: "Things I've built"
- Card label = domain tag (e.g. "Automation", "ML · NLP", "Data Pipeline")
- Card title = Project name
- Card sub = one sentence description + key tech

**Skills panel** — pull from RESUME.md skills section
- Tag: "Skills"
- Title: "My toolkit"
- Layout: stacked cards (full width), one per skill category
- Inside each card: pill tags for each skill in that category

**Contact panel** — pull from RESUME.md
- Tag: "Contact"
- Title: "Let's connect"
- Cards for: Email, LinkedIn, GitHub (and any others listed)
- Card title in `--blue` color as a clickable link

---

### Background

Apply to `body`:
```css
background: radial-gradient(ellipse at 16% 38%, #dce6f5 0%, #f0f2f7 50%, #eaecf5 100%);
min-height: 100vh;
```

This creates a subtle cool blue-white glow in the upper-left quadrant where the hero content lives — giving the page "life" without any loud decoration. Do not add any other background texture, pattern, or image.

---

### Responsive Behavior

At viewport widths below 768px:
- Nav: hide center links, keep logo and Resume button. Add a hamburger if needed.
- Hero: switch to single column, photo card moves below text content, reduce photo card to 220×270px
- Bugs: reduce to 3 bugs, keep all behavior identical
- Panel: max-height increases to 80vh

At viewport widths below 480px:
- Hero name font-size clamps to `clamp(2.8rem, 10vw, 3.8rem)`
- Padding reduces to 1.5rem horizontal

---

### File Structure for GitHub Pages

```
/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── photo.jpg          (user's profile photo)
│   └── resume.pdf         (resume for download)
└── data/
    ├── RESUME.md
    ├── DETAILED_WORK_EXP.md
    └── MSCS_EXP.md
```

`index.html` links to `style.css` and `script.js` externally. The markdown files in `data/` are reference only — content is hardcoded into the HTML from them, not fetched at runtime (keeps it simple and GitHub Pages compatible with no Jekyll or server needed).

---

### Important Design Rules — Do Not Deviate

1. **No rainbow colors.** Two accent colors only: `--navy` and `--blue`. Everything else is white, off-white, or a tint of blue.
2. **No heavy shadows except on the photo card.** The three-layer photo card shadow is intentional and should be reproduced exactly.
3. **The radial background gradient is subtle.** If it looks obvious or garish, reduce opacity.
4. **DM Serif Display italic on the last name is non-negotiable** — it's the single most distinctive typographic choice on the page.
5. **Bugs must cast a small ground shadow** — the subtle ellipse under each bug is what makes them feel physically present on the light surface rather than floating.
6. **"Work Experience" and "Academic Experience" are separate panels** — never merge them. Corporate roles go in Work Experience, university/research roles go in Academic Experience.
7. **The panel uses white background** (`#ffffff`), not the page background — this contrast makes it feel like a sheet of paper lifting up from the ground.
8. **Nav Resume button and hero "View Resume" button both open/download `assets/resume.pdf`** — wire both to the same file.
