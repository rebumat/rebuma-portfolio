# Rebuma Tamiru Roro — Portfolio

Portfolio of Rebuma Tamiru Roro — Web Developer and Graphic
Designer. Built with React + Vite. This is the clean, editable source
for the site live at https://gentle-pithivier-2aa57c.netlify.app/

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
```

The static site is output to `dist/`. Preview it with `npm run preview`.

## Change the text, projects or experience

Edit **`src/data.js`** — everything is in that one file: name, phone,
email, GitHub/LinkedIn links, hero text, stats, about, skills,
experience, projects and certifications. No need to touch the
components in `src/components/`.

To change the profile photo, replace `public/profile.jpg` with a new
photo (same file name, portrait works best). The photo is shown in
the hero and in the About section.

## Deploy to Netlify

- **From GitHub:** push this repo, then in Netlify choose "Add new
  site → Import an existing project", pick the repo. Build command
  `npm run build`, publish directory `dist` (already set in
  `netlify.toml`).
- **From the command line:** `npx netlify deploy --build --prod`
  (after `netlify link` / login), or drag the `dist/` folder onto
  https://app.netlify.com/drop

## Project structure

```
index.html            Page title, description, theme colour
vite.config.js        Vite + React config
netlify.toml          Netlify build settings (npm run build → dist)
src/main.jsx          React entry point
src/App.jsx           Page layout (all sections in order)
src/data.js           ALL editable content — edit text here
src/index.css         All styling (light theme, navy/blue)
src/components/       One file per section:
  Navbar, Hero, About, Skills, Experience, Projects,
  Certifications, Contact, Footer, SectionHeading
public/profile.jpg    Profile photo (his own photo)
```

## Notes

- The live site had no photos; the profile photo was added from a
  photo the user supplied. The original is kept outside this repo
  as `profile-original.jpg` in the delivery folder.
- The live site's GitHub/LinkedIn fields were empty, so no links were
  shown there. This source fills them in from the user's details
  (`github.com/rebumat`, `linkedin.com/in/rebuma-tamiru-roro`) —
  remove them in `src/data.js` if not wanted.
- The live site does not list his GitHub projects (ODAA Bus,
  EthioRun, etc.). A commented example in `src/data.js` shows how to
  add one.
