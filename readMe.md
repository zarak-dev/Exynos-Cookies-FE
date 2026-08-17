# 🍪 Exynos Cooky

A full-featured cookie e-commerce web app built with React 19, TypeScript, Vite, Ant Design, Redux Toolkit, and Redux-Saga.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build Tool | Vite 8 |
| UI Library | Ant Design 6 |
| State Management | Redux Toolkit |
| Async Effects | Redux-Saga |
| Styling | Styled Components |
| Routing | React Router DOM v7 |

---

## Project Structure

```
src/
├── assets/             # Images, icons, SVGs
├── components/         # Reusable UI components
│   ├── StyledCard/
│   ├── StyledButton/
│   ├── StyledInput/
│   ├── StyledTitle/
│   ├── Wrapper/
│   ├── PageHeader/
│   ├── common/
│   │   ├── Auth/           # Login & Signup modals
│   │   ├── CartDrawer/     # Slide-out cart
│   │   ├── InfoBar/
│   │   └── PageTransitionLoader/
│   └── layout/
│       ├── AppLayout/      # Header, Footer, Main
│       └── AdminLayout/    # Admin workspace shell
├── constants/          # Pricing and config constants
├── pages/
│   ├── customer/       # Home, BuyCooky, Cart, Checkout, Profile, TrackOrder, Careers, AboutUs
│   └── admin/          # Overview, Inventory, Orders, UserHistory
├── routes/
│   ├── AppRoute.tsx    # All route definitions
│   └── ProtectedRoute.tsx
├── store/
│   ├── slices/         # auth, cart, inventory, orders, reviews, userHistory
│   └── sagas/          # reviewSaga, userHistorySaga
└── utils/              # mockData, cartActions, cartUtils, storage, scrollToTop
```

---

## Features

**Storefront**
- Home page with Best Products carousel, Trending section, and Customer Reviews
- Full cookie menu with search, filter, and add-to-cart
- Slide-out cart drawer with box size management
- Checkout flow with order summary and confirmation
- Order tracking page
- Careers and About Us pages
- Customer profile page

**Admin Panel** (`/admin` — protected route)
- Overview dashboard with stats
- Inventory management (add, edit, stock control)
- Order management with status updates
- User history viewer

**Auth**
- Register / Login modal
- Role-based access: `customer` vs `admin`
- Admin email: `admin@exynoscooky.com`
- Auth state persisted via `localStorage`

---

## Local Development

**Requirements:** Node.js 18+

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
```

App runs at `http://localhost:5173`

```bash
# Type check + production build
npm run build

# Preview production build locally
npm run preview
```

---

## Deploying to Vercel

### Step 1 — Push to GitHub

Make sure your project is in a GitHub repository. If not:

```bash
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/YOUR_USERNAME/exynos-cooky.git
git push -u origin main
```

### Step 2 — Import to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Select your GitHub repository
4. Vercel will auto-detect it as a **Vite** project

### Step 3 — Configure Build Settings

Vercel should auto-fill these, but verify:

| Setting | Value |
|---|---|
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

### Step 4 — Fix Client-Side Routing (Important)

Because the app uses React Router with `BrowserRouter`, Vercel needs to redirect all routes to `index.html`. 

Create a file called `vercel.json` in the **root of your project** with this content:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

Without this, any direct URL visit (e.g. `/about`, `/admin`) will return a 404.

### Step 5 — Deploy

Click **Deploy**. Vercel will build and publish your app. You'll get a live URL like `https://exynos-cooky.vercel.app`.

---

## Environment Variables

This project currently uses no `.env` variables — all data is mock/local. If you add a backend later, create a `.env` file:

```env
VITE_API_URL=https://your-api.com
```

And access it in code as `import.meta.env.VITE_API_URL`.

> All Vite env variables must be prefixed with `VITE_` to be exposed to the client.

---

## Default Credentials

| Role | Email | Password |
|---|---|---|
| Admin | `admin@exynoscooky.com` | any password |
| Customer | any email | any password |

> This app uses a mock auth system stored in `localStorage`. There is no real backend or database.

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
