# Iron Portfolio – Manas S.

A minimal, GOT portfolio site built with static HTML, CSS and a touch of JavaScript. The primary color is a soft forest green, with subtle pastel accents to keep the interface calm and focused.

## Pages

- `index.html` – Landing page with full‑bleed fantasy hero image and short introduction.
- `projects/index.html` – Project feed using a modular, Medium‑style card layout.
- `blog/index.html` – Blog feed sharing the same structure and styling as the projects page.
- `posts/` – Individual blog post pages linked from the blog feed.
- `contact/index.html` – Simple contact form and contact details.

## Development

No build step is required. You can open the HTML files directly in a browser or serve the folder with any static file server, for example:

```bash
cd portfolio2026
python -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## Hero Image

Place your fantasy hero artwork inside the `images` folder and name it `landing-hero.jpg`, or update the `src` of the `<img>` in `index.html` to match your actual file name.

## Logo image Credit
<a href="https://www.flaticon.com/free-icons/medieval" title="medieval icons">Medieval icons created by Icongeek26 - Flaticon</a>