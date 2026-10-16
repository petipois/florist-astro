# Florist Astro Template

This is a modern, responsive florist website template built with Astro and Tailwind CSS. It features a product display, a blog, a gallery, testimonials, and a subscription section.

## 🚀 Features

*   **Product Display:** Showcase various plants and flowers.
*   **Blog:** Informative articles about plants and gardening.
*   **Gallery:** Beautiful image gallery.
*   **Testimonials:** Customer reviews.
*   **Subscription:** Email subscription form.
*   **Responsive Design:** Optimized for all devices.
*   **Tailwind CSS:** Utility-first CSS framework for rapid UI development.

## 🛠 Technologies Used

*   [Astro](https://astro.build/) - A modern static site builder.
*   [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.

## 📁 Project Structure

```text
/
├── public/
│   ├── favicon.svg
│   └── images/             # Various product, blog, and hero images
├── src/
│   ├── components/         # Reusable Astro components (e.g., Navbar, Footer, Cards)
│   ├── content/            # Markdown content for blog posts
│   │   └── blog/
│   │       ├── benefits.md
│   │       ├── greenery.md
│   │       └��─ hobbyist.md
│   ├── layouts/            # Astro layout components
│   │   └── Layout.astro
│   ├── pages/              # Astro pages, defining routes
│   │   ├── index.astro
│   │   └── blog/
│   │       └── [slug].astro # Dynamic blog post pages
│   └── styles/
│       └── global.css      # Global styles
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

`src/components/` is where all Astro components are located.

Markdown content for blog posts is located in `src/content/blog/`.

Any static assets, like images, are placed in the `public/` directory, specifically `public/images/` for most visual assets.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Builds your production site to `./dist/`         |
| `npm run preview`         | Preview your build locally                       |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |