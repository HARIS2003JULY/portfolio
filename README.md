# Developer Portfolio & Project Showcase

A fast, responsive, zero-dependency developer portfolio built with **HTML5, CSS3 and vanilla JavaScript (ES6+)**.

**Live site:** https://your-username.github.io/portfolio/  <!-- replace after deploying -->

## Features

- Semantic HTML5 structure: Header, Hero, About, Skills Grid, Featured Projects, Contact, Footer
- Mobile-first responsive layout using Flexbox and CSS Grid
- Dark / light theme toggle (remembers choice, respects system preference)
- Smooth scrolling navigation with active-section highlighting
- Mobile hamburger menu
- Project cards with category filters and accessible modal popups
- Animated skill bars, typing effect, scroll-reveal animations
- Contact form with validation
- Accessible: skip link, ARIA labels, keyboard support, reduced-motion support

## Project structure

```
portfolio/
├── index.html    # page markup
├── style.css     # styles, themes, responsive rules
├── script.js     # interactivity + your skills/projects data
└── README.md
```

## Run locally

Option 1 - just open `index.html` in your browser.

Option 2 - local server (recommended):

```bash
# Python
python -m http.server 5500
# then visit http://localhost:5500

# or VS Code: install the "Live Server" extension -> right-click index.html -> Open with Live Server
```

## Customize

1. `index.html`: replace "Your Name", email, GitHub and LinkedIn links, education/experience.
2. `script.js`: edit the `skills` and `projects` arrays and `YOUR_EMAIL`.
3. Add your resume as `resume.pdf` in the same folder.
4. `style.css`: change colors in the `:root` and `[data-theme="dark"]` blocks.

## Deploy

### GitHub Pages
1. Push this repo to GitHub.
2. Repo **Settings → Pages → Source: Deploy from a branch → `main` / `(root)` → Save**.
3. Site goes live at `https://<username>.github.io/<repo>/`.

### Vercel
1. Go to vercel.com → **Add New → Project** → import the GitHub repo.
2. Framework preset: **Other**. Click **Deploy**.

### Netlify
Drag and drop the project folder onto app.netlify.com/drop, or import the GitHub repo.

## License

MIT - free to use and modify.
