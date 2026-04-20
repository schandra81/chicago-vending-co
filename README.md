# Chicago Vending Co. — Astro Website

A production-ready, fully SEO-optimized vending service website built with Astro. Localized for Chicago, IL with conversion-focused design, buying intent quiz, full blog system, and Vercel deployment config.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start local dev server
npm run dev
# → http://localhost:4321

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
chicago-vending/
├── public/
│   └── robots.txt              # SEO robots config
├── src/
│   ├── components/
│   │   ├── Nav.astro            # Sticky navigation
│   │   ├── Hero.astro           # Hero with Chicago skyline SVG
│   │   ├── Services.astro       # 4 service cards with images
│   │   ├── HowItWorks.astro     # 4-step process + locations grid
│   │   ├── Quiz.astro           # 5-step buying intent quiz
│   │   ├── Reviews.astro        # 6 Chicago customer reviews
│   │   ├── FAQ.astro            # Accordion FAQ + FAQ schema
│   │   ├── Footer.astro         # Full footer with SEO links
│   │   └── ConversionTools.astro # Exit intent + sticky mobile CTA
│   ├── content/
│   │   └── blog/
│   │       └── posts.ts         # All blog post metadata
│   ├── layouts/
│   │   ├── Base.astro           # HTML shell, SEO meta, schema
│   │   └── BlogPost.astro       # Blog post layout with sidebar
│   └── pages/
│       ├── index.astro          # Homepage
│       ├── about.astro          # About page
│       ├── contact.astro        # Contact + form
│       ├── 404.astro            # Custom 404
│       ├── sitemap.xml.astro    # Dynamic XML sitemap
│       └── blog/
│           ├── index.astro      # Blog listing + filter
│           └── [slug].astro     # Dynamic blog post routes
├── astro.config.mjs             # Astro config
├── vercel.json                  # Vercel deployment config
└── package.json
```

---

## 🌐 Deploying to Vercel

### Option A — Vercel CLI (recommended)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login
vercel login

# Deploy (first time — follow prompts)
vercel

# Deploy to production
vercel --prod
```

### Option B — Vercel Dashboard

1. Push this repo to GitHub / GitLab / Bitbucket
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repo
4. Framework: **Astro** (auto-detected)
5. Build command: `npm run build`
6. Output directory: `dist`
7. Click **Deploy**

### Option C — Vercel API (token-based, no CLI)

```bash
# Set your token
export VERCEL_TOKEN=your_token_here

# Deploy via API
curl -X POST "https://api.vercel.com/v13/deployments" \
  -H "Authorization: Bearer $VERCEL_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"name":"chicago-vending","gitSource":{"type":"github","repoId":"YOUR_REPO_ID","ref":"main"}}'
```

---

## ✏️ Customization Guide

### Change the city / localization

All Chicago-specific content is in these files:

| What to change | File |
|---|---|
| City name in hero, headings | `src/components/Hero.astro` |
| Neighborhood names | `src/components/HowItWorks.astro` |
| Quiz location options | `src/components/Quiz.astro` |
| Phone / address | `src/components/Nav.astro`, `src/components/Footer.astro` |
| SEO meta titles/descriptions | `src/layouts/Base.astro` |
| Schema.org LocalBusiness data | `src/layouts/Base.astro` |
| Reviews / testimonials | `src/components/Reviews.astro` |
| Service areas grid | `src/components/HowItWorks.astro` |

### Change phone number

Search and replace `(312) 555-0190` and `+13125550190` across all files.

### Add a new blog post

1. Add post metadata to `src/content/blog/posts.ts`:
```ts
{
  slug: "your-post-slug",
  title: "Your Post Title",
  description: "Meta description for SEO",
  category: "Guide",
  date: "April 1, 2025",
  readTime: "5 min read",
  image: "https://your-image-url.jpg",
  imageAlt: "Alt text",
  tags: ["Tag1", "Tag2"],
  excerpt: "Short excerpt for listing pages",
}
```

2. Add content HTML to the `content` object in `src/pages/blog/[slug].astro`:
```ts
"your-post-slug": `
  <p>Your content here...</p>
  <h2>Section heading</h2>
  <p>More content...</p>
`
```

That's it — the post automatically appears on the blog index, gets its own SEO-optimized page, shows up in the sitemap, and gets related posts.

### Change brand colors

All colors are CSS variables in `src/layouts/Base.astro`:

```css
:root {
  --c-orange: #FF4E00;        /* Primary brand color */
  --c-orange-dark: #CC3E00;   /* Hover states */
  --c-orange-light: #FF7A40;  /* Light accents */
  --c-black: #0A0A0A;         /* Page background */
  --c-near-black: #111111;    /* Section backgrounds */
  --c-dark: #1A1A1A;          /* Card backgrounds */
}
```

### Update business info (schema)

The LocalBusiness JSON-LD schema in `src/layouts/Base.astro` controls what Google shows in Knowledge Panel results. Update:
- `name` — your business name
- `telephone` — your phone number
- `address` — your physical address
- `areaServed` — neighborhoods you serve
- `aggregateRating` — your actual rating (update as reviews come in)

---

## 📊 Pages & Routes

| Route | Page | Purpose |
|---|---|---|
| `/` | Homepage | Main conversion page |
| `/about` | About | Company story, team, timeline |
| `/contact` | Contact | Contact form + office info |
| `/blog` | Blog Index | All articles + category filter |
| `/blog/free-vending-machines-chicago` | Blog Post | SEO article |
| `/blog/healthy-vending-chicago` | Blog Post | SEO article |
| `/blog/office-coffee-service-chicago` | Blog Post | SEO article |
| `/blog/micro-market-vs-vending-chicago` | Blog Post | SEO article |
| `/blog/vending-employee-retention-chicago` | Blog Post | SEO article |
| `/sitemap.xml` | Sitemap | Auto-generated XML sitemap |
| `/404` | Not Found | Custom 404 page |

---

## 🔍 SEO Checklist

- [x] `<title>` and `<meta name="description">` on every page
- [x] Canonical URLs on all pages
- [x] Open Graph + Twitter Card meta tags
- [x] `LocalBusiness` JSON-LD schema on homepage
- [x] `Article` JSON-LD schema on all blog posts
- [x] `FAQPage` JSON-LD schema on FAQ section
- [x] `Blog` JSON-LD schema on blog index
- [x] Dynamic XML sitemap at `/sitemap.xml`
- [x] `robots.txt` with sitemap reference
- [x] Semantic HTML (proper heading hierarchy)
- [x] Alt text on all images
- [x] `loading="lazy"` on below-fold images
- [x] `loading="eager"` on hero images
- [x] Breadcrumb navigation on all blog posts
- [x] Internal linking between blog posts
- [x] Security headers in `vercel.json`
- [x] CSS/HTML minification in production build

---

## 🔧 Conversion Features

- **5-step buying intent quiz** — qualifies leads and generates personalized recommendations
- **Exit intent popup** — mouse-leave triggered, session-gated (shows once)
- **Sticky mobile CTA bar** — appears after 400px scroll on mobile
- **Animated stat counters** — IntersectionObserver-triggered on scroll
- **Scroll-reveal animations** — staggered fade-up on cards and features
- **Newsletter signup** — on blog index and blog footer
- **Contact form** — full validation, success state, no external dependencies
- **Comparison table** — Us vs. competitors with color-coded scores

---

## 📦 Dependencies

| Package | Version | Purpose |
|---|---|---|
| astro | ^4.5.0 | Framework |

Zero runtime JavaScript dependencies. All interactivity is vanilla JS.

---

## 🛠 Environment

Node.js 18+ required.

```bash
node --version  # Should be 18.x or higher
npm --version   # 9.x or higher recommended
```

---

Built by Chicago Vending Co. with Astro — fast by default, SEO-ready out of the box.
