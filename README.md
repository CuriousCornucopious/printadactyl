# Printadactyl — Current State

**Last Updated:** 2026-10-03 16:30 UTC

> 📖 **For the full story:** See [CHRONICLE.md](./CHRONICLE.md) — the complete journal of our journey.

---

## 🌐 Live Site

**URL:** https://printadactyl.com

---

## ✅ What's Built

| Asset | Status | Details |
|-------|--------|---------|
| Domain | ✅ Active | printadactyl.com (Porkbun, $11.08/yr, renews Sep 2027) |
| Email | ✅ Active | Zoho Mail — hello@printadactyl.com |
| Landing Page | ✅ Live | https://printadactyl.com with dynamic stats |
| GitHub | ✅ Active | github.com/CuriousCornucopious/printadactyl |
| Vercel | ✅ Connected | Auto-deploys from GitHub |
| Next.js App | ✅ Built | 13+ pages |
| Supabase | ✅ Connected | Database, Auth working |
| Signup/Login | ✅ Working | With password reset flow |
| Job posting | ✅ Working | Designers can post jobs |
| Job browsing | ✅ Working | Jobs list loads |
| Dashboard | ✅ Working | Profile, logout |
| Contact Page | ✅ NEW | Replaced 404 |
| Forgot Password | ✅ NEW | Email-based reset |

---

## 🐛 Known Bugs (Found 2026-10-01 During Testing)

| Bug | Location | Status |
|-----|----------|--------|
| "Loading job..." hangs forever | `app/jobs/[id]/page.tsx` — `fetchJob()` never calls `setLoading(false)` | Open |
| "Login" button shows even when logged in | `app/layout.tsx` — hardcoded link, no auth check | Open |
| Logout button hard to read (dark gray on dark bg) | `app/dashboard/page.tsx` — `text-gray-400` | Open |
| Date off by one day (timezone issue) | `app/post-job/page.tsx` — UTC vs PDT | Open |

---

## 🔧 Tech Stack

| Layer | Tool | Status |
|-------|------|--------|
| Domain | Porkbun | ✅ |
| DNS | Porkbun → Vercel | ✅ |
| Hosting | Vercel | ✅ |
| Database | Supabase PostgreSQL | ✅ Connected |
| Auth | Supabase Auth | ✅ Working |
| Frontend | Next.js 14 + Tailwind | ✅ |

**Supabase Project:** `znjwmtvkengxxfagowyv.supabase.co`

---

## 📄 Pages

| Page | Route | Status |
|------|-------|--------|
| Landing | `/` | ✅ Dynamic stats |
| Jobs | `/jobs` | ✅ Lists jobs |
| Job Detail | `/jobs/[id]` | ⚠️ Hangs on load |
| Post Job | `/post-job` | ✅ Form works |
| Dashboard | `/dashboard` | ✅ |
| Login | `/login` | ✅ + Forgot password link |
| Signup | `/signup` | ✅ |
| Forgot Password | `/forgot-password` | ✅ NEW |
| Reset Password | `/reset-password` | ✅ NEW |
| Contact | `/contact` | ✅ NEW (was 404) |
| Settings | `/settings` | ✅ |
| Privacy | `/privacy` | ✅ |
| Terms | `/terms` | ✅ |

---

## 📋 Database Tables

- `profiles` — User profiles (id, email, roles[], display_name, created_at)
- `jobs` — Print jobs (title, description, material_type, quantity, deadline, budget, status)
- `bids` — Maker bids (price, turnaround_days, notes, portfolio_link, status)
- `comments` — Job comments (id, job_id, user_id, body, created_at) — NEW 2026-10-03

**RLS Policies:**
- `profiles` — SELECT, UPDATE, INSERT ✅
- `jobs`, `bids` — Standard CRUD policies
- `comments` — Public SELECT, author-only UPDATE/DELETE ✅

---

## 🚧 Known Bugs (Found 2026-10-01 During Testing)

| Bug | Location | Status |
|-----|----------|--------|
| "Loading job..." hangs forever | `app/jobs/[id]/page.tsx` — `setLoading(false)` in finally block ✅ (code fixed, deploy pending) | Fixed locally |
| "Login" button shows even when logged in | `app/layout.tsx` — hardcoded link, no auth check | Open |
| Logout button hard to read (dark gray on dark bg) | `app/dashboard/page.tsx` — `text-gray-400` | Open |
| Date off by one day (timezone issue) | `app/post-job/page.tsx` — UTC vs PDT | Open |

---

## 🔜 Planned Features (Pre-Festival Priority)

| # | Feature | Priority | Status |
|---|---------|----------|--------|
| B1 | File upload (STL, OBJ, PNG, PDF) | 🔴 High | Not started — Supabase Storage bucket needed |
| B4 | Stripe Connect account | 🔴 High | Not started — Amanda creating account |
| B2 | Direct messaging | 🟡 Medium | Brainstormed — one thread per job, real-time + email |
| B3 | Email notifications (welcome + events) | 🟡 Medium | Brainstormed — Zoho SMTP for welcome |
| B5 | Maker profiles (bio, avatar, portfolio) | 🟡 Medium | Brainstormed — fields decided |

**Section Z (Onboarding) — also planned but lower priority:**
- Profile completion banners, CTA cards on empty bids, welcome modal, share button with referral tracking.

---

## 📁 Key Files

```
/
├── app/                    # Next.js pages
│   ├── page.tsx           # Landing
│   ├── signup/page.tsx    # Signup (manual profile insert)
│   ├── login/page.tsx     # Login
│   ├── jobs/              # Job listing + detail
│   ├── post-job/          # Job posting form
│   └── dashboard/         # User dashboard
├── lib/
│   └── supabase.ts        # Supabase clients
├── supabase/
│   └── schema.sql         # Database schema (trigger dropped 2026-10-01)
└── CHRONICLE.md           # Full journey journal
```

---

## 📧 Email Accounts

| Address | Purpose |
|---------|---------|
| hello@ | General contact |
| support@ | Support requests |
| sarah@ | Marketing tracking |
| amanda@ | Marketing tracking |
| [catch-all] | Routes to main inbox |

---

## 💰 Revenue Model

| Tier | Rate | Conditions |
|------|------|--------|
| Standard | 15% | Default |
| Volume | 12% | $10,000+ completed |
| Premium | 10% | $50,000+ completed |

---

## 🎯 Goals

- [x] Test signup end-to-end
- [x] Verify user appears in Supabase
- [x] Test login flow
- [x] Comments table with secure RLS
- [x] Forgot password flow
- [x] Dynamic stats on landing
- [x] Section A review (A1-A7)
- [x] Section B brainstorm (all 5 features)
- [x] Section Z brainstorm (onboarding plan)
- [ ] Deploy A5 job detail fix to Vercel
- [ ] Fix A6 header login/logout inconsistency
- [ ] A7 live test settings save
- [ ] B1: Supabase Storage bucket + upload UI
- [ ] B2: Messages table + thread UI + real-time
- [ ] B3: Welcome email via Zoho SMTP
- [ ] B4: Stripe account setup
- [ ] B5: Add bio/avatar/portfolio to profiles
- [ ] Section Z implementation (post-B)

---

*This document reflects the current state. For history, decisions, and details, see CHRONICLE.md*
