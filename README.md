# SHOP 🛍️

A universal e-commerce pet project built to practice modern frontend architecture and tooling.

🌐 Live Demo: https://shop-tau-dun.vercel.app/login

---

## Tech Stack

- **TypeScript** — static typing
- **Vite** — fast dev server and bundler
- **React** — UI library
- **Zustand** — lightweight state management
- **Tailwind CSS v4** — utility-first styling
- **React Router** — client-side routing
- **Axios** — HTTP client
- **Framer Motion** — animations
- **Lucide React** — icons

---

## Architecture

The project follows **Feature-Sliced Design (FSD)**:

```
src/
  app/        — providers, router, styles, App.tsx
  pages/      — home, product, cart, login, profile, notFound
  widgets/    — header, hero, product-list
  features/   — filter-by-category, protected-route
  entities/   — product, cart, user
  shared/     — api, config, ui, lib, types
```

---

## Features

- Product listing with category filtering
- Product detail page
- Shopping cart (add, remove, increment, decrement, clear)
- Authentication via token (FakeStoreAPI)
- Protected routes — redirects to login if not authenticated
- Profile page with cart stats
- Animated Hero banner (changes per category)
- Lazy loading for all pages
- Animated loader (Framer Motion)
- Error state with retry button
- 404 page
- Dark theme (zinc palette)
- Responsive design (mobile-first)

---

## API

Uses [FakeStoreAPI](https://fakestoreapi.com) — 20 products, 4 categories.

> ⚠️ FakeStoreAPI is a free public API and may occasionally be unavailable (503/523 errors). If the app shows an error state, try clicking Retry or come back later.

**Test credentials:**
```
username: johnd
password: m38rmF$
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## Environment Variables

Create a `.env` file in the root:

```env
VITE_API_URL=https://fakestoreapi.com
```

> `.env` is listed in `.gitignore` — do not commit it.

---

## Contact

- 📧 [ponomar.kolya10@gmail.com](mailto:ponomar.kolya10@gmail.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/mykola-ponomar-81717a32b/)
