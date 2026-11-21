/* =========================================================
   Developer Portfolio - script.js (ES6+)
   EDIT the `skills` and `projects` arrays below with your own data.
   ========================================================= */

const skills = [
  { name: "HTML5", icon: "🌐", level: 95 },
  { name: "CSS3 / Tailwind", icon: "🎨", level: 90 },
  { name: "JavaScript (ES6+)", icon: "⚡", level: 85 },
  { name: "React", icon: "⚛️", level: 70 },
  { name: "Node.js", icon: "🟢", level: 65 },
  { name: "Git & GitHub", icon: "🔀", level: 85 },
  { name: "Python", icon: "🐍", level: 75 },
  { name: "SQL / MongoDB", icon: "🗄️", level: 65 },
];

const projects = [
  {
    title: "Task Manager App",
    category: "JavaScript",
    icon: "✅",
    gradient: "linear-gradient(135deg,#2563eb,#38bdf8)",
    short: "A to-do app with drag & drop, filters and local storage persistence.",
    description:
      "A productivity app that lets users create, categorize and prioritize tasks. Data is saved in the browser so nothing is lost on refresh.",
    features: ["Add / edit / delete tasks", "Drag & drop reordering", "Filter by status", "Persistent LocalStorage"],
    tags: ["HTML", "CSS", "JavaScript"],
    live: "https://example.com",
    code: "https://github.com/your-username/task-manager",
  },
  {
    title: "Weather Dashboard",
    category: "API",
    icon: "⛅",
    gradient: "linear-gradient(135deg,#f59e0b,#ef4444)",
    short: "Real-time weather and 5-day forecast using a public weather API.",
    description:
      "Search any city and get current conditions plus a forecast. Built with async/await and the Fetch API with proper error handling.",
    features: ["City search", "5-day forecast", "°C / °F toggle", "Graceful error states"],
    tags: ["JavaScript", "REST API", "CSS Grid"],
    live: "https://example.com",
    code: "https://github.com/your-username/weather-app",
  },
  {
    title: "E-Commerce Store UI",
    category: "Frontend",
    icon: "🛒",
    gradient: "linear-gradient(135deg,#10b981,#06b6d4)",
    short: "Responsive storefront with product grid, cart and checkout flow.",
    description:
      "A mobile-first shop interface featuring product filtering, a cart drawer and a clean checkout form.",
    features: ["Product filtering", "Cart with quantity controls", "Responsive layout", "Accessible forms"],
    tags: ["Tailwind", "JavaScript", "Responsive"],
    live: "https://example.com",
    code: "https://github.com/your-username/store-ui",
  },
  {
    title: "Blog Platform",
    category: "Full Stack",
    icon: "📝",
    gradient: "linear-gradient(135deg,#8b5cf6,#ec4899)",
    short: "Full-stack blog with authentication, markdown posts and comments.",
    description:
      "Users can register, write markdown posts and comment. Backend built with Node and Express, data stored in MongoDB.",
    features: ["JWT authentication", "Markdown editor", "Comments system", "REST API"],
    tags: ["Node.js", "Express", "MongoDB"],
    live: "https://example.com",
    code: "https://github.com/your-username/blog-platform",
  },
  {
    title: "Expense Tracker",
    category: "JavaScript",
    icon: "💰",
    gradient: "linear-gradient(135deg,#0ea5e9,#6366f1)",
    short: "Track income and expenses with live charts and monthly summaries.",
    description:
      "Add transactions, categorize spending and visualize it with charts so you always know where your money goes.",
    features: ["Income / expense tracking", "Category charts", "Monthly summary", "Export to CSV"],
    tags: ["JavaScript", "Chart.js", "CSS"],
    live: "https://example.com",
    code: "https://github.com/your-username/expense-tracker",
  },
  {
    title: "Portfolio Website",
    category: "Frontend",
    icon: "💼",
    gradient: "linear-gradient(135deg,#14b8a6,#3b82f6)",
    short: "This very site: responsive, themeable and deployed on the web.",
    description:
      "A mobile-first portfolio with dark/light mode, smooth scrolling, modal project previews and zero dependencies.",
    features: ["Dark / light theme", "Mobile hamburger menu", "Project modals", "Smooth scrolling"],
    tags: ["HTML5", "CSS3", "JavaScript"],
    live: "https://your-username.github.io",
    code: "https://github.com/your-username/portfolio",
  },
];

/* ---------- Helpers ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

/* ---------- Theme toggle ---------- */
const themeBtn = $("#theme-toggle");
themeBtn.addEventListener("click", () => {
  const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  try { localStorage.setItem("theme", next); } catch (e) {}
});

/* ---------- Mobile hamburger menu ---------- */
const hamburger = $("#hamburger");
const navLinks = $("#nav-links");

function setMenu(open) {
  navLinks.classList.toggle("open", open);
  hamburger.setAttribute("aria-expanded", String(open));
  hamburger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}
hamburger.addEventListener("click", () => setMenu(!navLinks.classList.contains("open")));
$$(".nav-link").forEach((a) => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) setMenu(false);
});

/* ---------- Header shadow + active link (scroll spy) ---------- */
const header = $(".site-header");
window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 10), { passive: true });

const sections = $$("main section[id]");
const spy = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        $$(".nav-link").forEach((l) => l.classList.toggle("active", l.getAttribute("href") === `#${entry.target.id}`));
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
sections.forEach((s) => spy.observe(s));

/* ---------- Typing effect ---------- */
const phrases = ["responsive websites.", "clean user interfaces.", "fast web apps.", "things that matter."];
const typedEl = $("#typed");
let pi = 0, ci = 0, deleting = false;

function type() {
  const word = phrases[pi];
  typedEl.textContent = word.slice(0, ci);
  if (!deleting && ci < word.length) { ci++; setTimeout(type, 70); }
  else if (!deleting) { deleting = true; setTimeout(type, 1400); }
  else if (ci > 0) { ci--; setTimeout(type, 35); }
  else { deleting = false; pi = (pi + 1) % phrases.length; setTimeout(type, 300); }
}
type();

/* ---------- Render skills ---------- */
const skillsGrid = $("#skills-grid");
skillsGrid.innerHTML = skills
  .map(
    (s) => `
  <article class="skill-card reveal">
    <div class="skill-icon" aria-hidden="true">${s.icon}</div>
    <h3>${s.name}</h3>
    <div class="bar" role="progressbar" aria-valuenow="${s.level}" aria-valuemin="0" aria-valuemax="100" aria-label="${s.name} proficiency">
      <i data-level="${s.level}"></i>
    </div>
    <small>${s.level}%</small>
  </article>`
  )
  .join("");

/* ---------- Render projects + filters ---------- */
const projectsGrid = $("#projects-grid");
const filtersEl = $("#filters");
const categories = ["All", ...new Set(projects.map((p) => p.category))];

filtersEl.innerHTML = categories
  .map((c, i) => `<button class="filter-btn ${i === 0 ? "active" : ""}" data-filter="${c}">${c}</button>`)
  .join("");

function renderProjects(filter = "All") {
  const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  projectsGrid.innerHTML = list
    .map((p) => {
      const idx = projects.indexOf(p);
      return `
      <article class="project-card reveal visible">
        <div class="project-thumb" style="background:${p.gradient}" aria-hidden="true">${p.icon}</div>
        <div class="project-info">
          <h3>${p.title}</h3>
          <p>${p.short}</p>
          <div class="tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
          <button class="btn btn-outline" data-project="${idx}">View Details</button>
        </div>
      </article>`;
    })
    .join("");
}
renderProjects();

filtersEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  $$(".filter-btn").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  renderProjects(btn.dataset.filter);
});

/* ---------- Project modal ---------- */
const modal = $("#modal");
let lastFocus = null;

function openModal(index) {
  const p = projects[index];
  lastFocus = document.activeElement;
  $("#modal-banner").style.background = p.gradient;
  $("#modal-banner").textContent = p.icon;
  $("#modal-title").textContent = p.title;
  $("#modal-desc").textContent = p.description;
  $("#modal-features").innerHTML = p.features.map((f) => `<li>${f}</li>`).join("");
  $("#modal-tags").innerHTML = p.tags.map((t) => `<span class="tag">${t}</span>`).join("");
  $("#modal-live").href = p.live;
  $("#modal-code").href = p.code;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  $(".modal-close").focus();
}
function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
  if (lastFocus) lastFocus.focus();
}
projectsGrid.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-project]");
  if (btn) openModal(Number(btn.dataset.project));
});
modal.addEventListener("click", (e) => { if (e.target.hasAttribute("data-close")) closeModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && modal.classList.contains("open")) closeModal(); });

/* ---------- Scroll reveal + skill bars ---------- */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      const bar = $(".bar > i", entry.target);
      if (bar) bar.style.width = bar.dataset.level + "%";
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.15 }
);
$$(".reveal").forEach((el) => revealObserver.observe(el));

/* ---------- Contact form ---------- */
/* Option A (default): opens the visitor's email app with the message pre-filled.
   Option B: replace with Formspree/Netlify Forms - see README. */
const YOUR_EMAIL = "you@example.com";
const form = $("#contact-form");
const statusEl = $("#form-status");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get("name").trim();
  const email = data.get("email").trim();
  const message = data.get("message").trim();

  $$("input, textarea", form).forEach((f) => f.classList.remove("invalid"));
  statusEl.className = "form-status";

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!name || !emailOk || !message) {
    if (!name) form.name.classList.add("invalid");
    if (!emailOk) form.email.classList.add("invalid");
    if (!message) form.message.classList.add("invalid");
    statusEl.textContent = "Please fill in all fields with a valid email.";
    statusEl.classList.add("error");
    return;
  }

  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
  window.location.href = `mailto:${YOUR_EMAIL}?subject=${subject}&body=${body}`;
  statusEl.textContent = "Thanks! Your email app should open now.";
  statusEl.classList.add("ok");
  form.reset();
});

/* ---------- Footer year ---------- */
$("#year").textContent = new Date().getFullYear();
