# Benon Papa - Portfolio

React + Vite portfolio with five pages: Home, About, Services, Portfolio, Contact.

## Run it
```bash
npm install
npm run dev
```
Build for production with `npm run build` (output in `dist/`).

## Customize
- All text, projects, skills and links are in `src/data.js`.
- Add your photo as `public/profile.jpg`.
- Accent color is set by the gear button (top right); default is in `src/index.css` (`--accent`).

## Deploy (Vercel / Netlify)
Build command `npm run build`, output directory `dist`. The site uses hash routing (`/#/about`), so no server rewrite rules are needed.
