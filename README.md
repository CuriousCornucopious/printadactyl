# Printadactyl: Master Document

**Last Updated:** 2026-09-28

---

## 🏆 Wins (Accomplishments)

| Win | Date | Details |
|-----|------|---------|
| Domain purchased | Aug 2026 | printadactyl.com via Porkbun ($11.08/yr) |
| Email setup | Aug 2026 | amandatedeschi@printadactyl.com via Zoho |
| Static landing page | Aug 2026 | First HTML version deployed |
| Next.js migration | Sep 2026 | Full app rewrite from static HTML |
| All pages built | Sep 2026 | 7 pages: Landing, Jobs, Job Detail, Post Job, Dashboard, Login, Signup |
| Supabase client | Sep 2026 | Server + browser clients ready |
| Database schema | Sep 2026 | Full SQL with RLS policies |
| Auth middleware | Sep 2026 | Protects dashboard/post-job routes |
| Green brontosaurus mascot | Sep 2026 | Custom SVG pterodactyl → green brontosaurus |
| GitHub repo | Sep 2026 | CuriousCornucopious/printadactyl |
| Vercel connected | Sep 2026 | Auto-deploys from GitHub |
| Supabase account created | Sep 2026 | Project "CuriousCornucopious's Project" ready |

## 💀 Losses (Abandoned/Deprecated)

| Loss | Reason | Replaced By |
|------|--------|-------------|
| Static HTML landing | Limited functionality, no auth | Next.js app |
| Original pterodactyl mascot | Too generic | Green brontosaurus |
| Firebase considered | NoSQL, wanted real PostgreSQL | Supabase |

## 💡 Executed Ideas

- **Bidding marketplace model** — unique angle (no competitors do this)
- **3D prints as lead** — differentiated from generic print-on-demand
- **Supabase over raw Postgres** — all-in-one (DB + auth + storage) reduces ops
- **RLS-first security** — every table has policies from day 1
- **Role-based users** — designer vs maker split

## 🎯 New Goals

- [ ] Get full anon key from Supabase
- [ ] Connect Supabase to app (update .env.local)
- [ ] Run schema.sql in Supabase SQL Editor
- [ ] Test user signup/login flow
- [ ] Seed 5 fake jobs for marketplace look
- [ ] Deploy to Vercel with live DB
- [ ] Recruit first designers (5-10)
- [ ] Recruit first makers (5-10)
- [ ] Stripe Connect for payments (Week 3)
- [ ] First real job completed

---

## 🎯 Vision

**Printadactyl** is a print-on-demand marketplace built on a **bidding model** — designers post print jobs, multiple makers compete with bids, and the designer picks the winner.

**The differentiator:** Nobody does the "post a request → makers bid" model. That's our edge.

**What we print:**
- Lead with: 3D prints (our differentiator)
- Also: T-shirts, banners, stickers, vinyl, sublimation, anything printed

**Tagline:** "Your ideas, printed."

---

## 📍 Where We Are

### ✅ Completed

| Asset | Status | Details |
|-------|--------|---------|
| **Domain** | Active | printadactyl.com (Porkbun, $11.08/yr, renews Sep 2027) |
| **Email** | Active | amandatedeschi@printadactyl.com (Zoho Mail Free) |
| **Landing Page** | ✅ Built | https://printadactyl.vercel.app (Next.js) |
| **GitHub** | Active | github.com/CuriousCornucopious/printadactyl |
| **Vercel** | Connected | Auto-deploys from GitHub |
| **Next.js App** | Built | Full app structure complete |
| **Supabase Client** | Built | Server + browser clients |
| **All Pages** | Built | Landing, Login, Signup, Jobs, Job Detail, Post Job, Dashboard |
| **Database Schema** | Ready | `supabase/schema.sql` ready to run |
| **Auth Middleware** | Built | Protects dashboard/post-job routes |

### ⚠️ Current Limitations

- ~~Everything is static HTML~~ → Next.js app built
- ~~No database~~ → ⚠️ Supabase account created, waiting on anon key to connect
- No user accounts → Supabase Auth (needs key + schema run)
- No job posting → Ready, needs Supabase
- No bidding → Ready, needs Supabase
- No payments → Coming Week 3 (Stripe Connect)

---

## 🧠 The Core Model

```
[Designer] posts request (what, how many, material, deadline)
    ↓
[Makers] see request, submit bids (price, turnaround, samples)
    ↓
[Designer] reviews bids, picks a maker
    ↓
[Maker] prints and ships
    ↓
[Platform] takes commission (10-20%)
```

---

## 🏗️ Technical Stack

### Selected: Supabase (All-in-one)

| Component | Solution |
|-----------|----------|
| **Database** | Supabase PostgreSQL |
| **Authentication** | Supabase Auth |
| **File Storage** | Supabase Storage |
| **Frontend** | Next.js + Tailwind CSS |
| **Hosting** | Vercel (already connected) |

### Why Supabase?

- All-in-one (DB + auth + storage) — less to manage
- Generous free tier to start
- PostgreSQL (real SQL, not NoSQL)
- Scales when we need it

---

## 📅 The Plan: 2-3 Week MVP

### Why This Timeline?

| Approach | Time to Functional | Problem |
|----------|-------------------|---------|
| Option A (Full MVP) | 8 weeks | Nothing to test until the end |
| Option B (Design First) | 4 weeks | Pretty but empty |
| **This Plan** | **2-3 weeks** | Get something real in users' hands fast |

### Week 1: Setup + Core

| Day | Task | Deliverable |
|-----|------|--------------|
| 1 | **Supabase setup** | ✅ Code ready, needs account |
| 2 | **Database schema** | ✅ schema.sql ready, needs to run |
| 3 | Auth | ✅ Login/signup pages ready |
| 4 | Job posting form | ✅ Page built, needs DB |
| 5 | Job feed | ✅ Page built, needs DB |
| 6 | Bid submission | ✅ Page built, needs DB |
| 7 | Pick winner | ✅ Built into job detail |

**Deploy: End of Week 1** — Basic flow works!

### Week 2: Polish + Connect

| Day | Task | Deliverable |
|-----|------|--------------|
| 8 | Tailwind setup | ✅ Already configured |
| 9 | Component styling | ✅ Brand colors set |
| 10 | File upload | Supabase Storage (optional) |
| 11 | Landing page connect | ✅ CTAs link to app |
| 12 | User dashboard | ✅ Fully built |
| 13-14 | Testing + bugs | Deploy to Vercel |

**Deploy: End of Week 2** — Functional, usable, basic

### Week 3: Optional Payments

| Day | Task | Deliverable |
|-----|------|--------------|
| 15-16 | Stripe Connect setup | Payment account ready |
| 17-18 | Escrow flow | Hold funds, release on completion |
| 19-20 | Payment testing | Test cards work |
| 21 | Polish | Final cleanup |

---

## 📋 Database Schema

### users (linked to Supabase Auth)

| Column | Type | Description |
|--------|------|-------------|
| id | uuid | PK, FK to auth.users |
| email | text | User's email |
| role | text | 'designer' OR 'maker' |
| display_name | text | Shown name |
| created_at | timestamp | When registered |

### jobs

| Column | Type | Description |
|--------|------|-------------|
| id | uuid | PK |
| designer_id | uuid | FK → users |
| title | text | Job title |
| description | text | Full details |
| material_type | text | 3d_print, shirt, banner, sticker, vinyl, other |
| quantity | int | How many needed |
| deadline | date | Due date |
| budget_min | decimal | Minimum budget |
| budget_max | decimal | Maximum budget |
| design_file_url | text | Link to uploaded file |
| status | text | open, bidding_closed, in_progress, completed, cancelled |
| created_at | timestamp | When posted |

### bids

| Column | Type | Description |
|--------|------|-------------|
| id | uuid | PK |
| job_id | uuid | FK → jobs |
| maker_id | uuid | FK → users |
| price | decimal | Bid amount |
| turnaround_days | int | Days to complete |
| notes | text | Additional notes |
| portfolio_link | text | Link to portfolio |
| status | text | pending, accepted, rejected |
| created_at | timestamp | When submitted |

---

## 📦 Pages to Build

| Page | Route | Status |
|------|-------|--------|
| Landing | `/` | ✅ Built |
| Jobs | `/jobs` | ✅ Built |
| Job Detail | `/jobs/[id]` | ✅ Built |
| Post Job | `/post-job` | ✅ Built |
| Dashboard | `/dashboard` | ✅ Built |
| Login | `/login` | ✅ Built |
| Signup | `/signup` | ✅ Built |

---

## 💰 Revenue Model

### Primary: Commission

| Tier | Rate | Conditions |
|------|------|------------|
| Standard | 15% | Default |
| Volume | 12% | $10,000+ completed jobs |
| Premium | 10% | $50,000+ completed jobs |

**Example:** Job total $300 → Platform takes $45, Maker receives $255

### Secondary: Featured Listings

| Feature | Price |
|---------|-------|
| Sticky job | $5/7 days |
| Featured maker | $15/month |
| Highlight bid | $3 |

---

## 🦕 Brand

- **Name:** Printadactyl
- **Tagline:** "Your ideas, printed."
- **Vibe:** Fun, playful, tech-forward, accessible, dinosaur-themed

### Visual (To Do)

- [ ] Actual logo (currently only floating animation)
- [ ] Color palette (dark theme, neon accents)
- [ ] Typography
- [ ] Component library

---

## 🐔 The Chicken & Egg Problem

**Challenge:** No makers without jobs, no jobs without makers.

**Solution:**
1. Seed with fake jobs initially (make marketplace look alive)
2. Recruit 5-10 designers to post real jobs
3. Recruit 5-10 makers to bid
4. Offer incentive: reduced commission first 10 jobs

---

## 📦 Where It Lives

| Asset | Location |
|-------|----------|
| **Domain** | Porkbun — printadactyl.com |
| **Email** | Zoho Mail — amandatedeschi@printadactyl.com |
| **Hosting** | Vercel — printadactyl.vercel.app |
| **Code** | GitHub — CuriousCornucopious/printadactyl |
| **Working Dir** | ~/.openclaw/workspace/printadactyl/ |

---

## 🔜 Next Action

**IN PROGRESS: Supabase Setup** (Account created, getting anon key)

1. ~~Create Supabase account~~ → ✅ Done
2. ~~Create new project "printadactyl"~~ → ✅ Done
3. Get API keys: Settings → API → Project URL + anon key → ⚠️ In progress
4. Update `.env.local` with credentials → ⚠️ Waiting on full anon key
5. Run `supabase/schema.sql` in SQL Editor → ⏳
6. Push to GitHub → Vercel deploys → ⏳

**What's Ready:**
- ✅ Next.js 14 + Tailwind CSS
- ✅ Supabase client (server + browser)
- ✅ All 7 pages built
- ✅ TypeScript types
- ✅ Auth middleware
- ✅ Database schema SQL
- ✅ Dark theme with brand colors

**Add-ons Built:**
- [x] UI Components (`components/ui.tsx`)
- [x] Loading Skeletons (`components/loading.tsx`)
- [x] Error Boundaries (`app/error.tsx`, `app/not-found.tsx`)
- [x] Enhanced Landing (`app/page.tsx`)
- [x] SEO/Meta (`lib/seo.ts`)
- [x] Validation Utils (`lib/validation.ts`)

---

## ❓ Open Questions

1. Do you want to focus on ONE material type first (e.g., just 3D prints)?
2. Who can we recruit as early designers/makers?
3. What's your budget for any paid tools/services?
4. Do you want to handle marketing, or should we plan for that too?

---

*Document Status: ACTIVE — Updated 2026-09-28 (Code structure built, waiting for Supabase)*
