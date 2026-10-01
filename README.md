# Printadactyl — Current State

**Last Updated:** 2026-10-01 08:20 UTC

> 📖 **For the full story:** See [CHRONICLE.md](./CHRONICLE.md) — the complete journal of our journey.

---

## 🌐 Live Site

**URL:** https://printadactyl.com

---

## ✅ What's Built

| Asset | Status | Details |
|-------|--------|---------|
| Domain | ✅ Active | printadactyl.com (Porkbun, $11.08/yr, renews Sep 2027) |
| Email | ✅ Active | Zoho Mail — MX records active, catch-all enabled |
| Landing Page | ✅ Live | https://printadactyl.com |
| GitHub | ✅ Active | github.com/CuriousCornucopious/printadactyl |
| Vercel | ✅ Connected | Auto-deploys from GitHub |
| Next.js App | ✅ Built | 7 pages complete |
| Supabase | ✅ Connected | Database schema ready, keys in Vercel |
| Signup | ✅ Working | End-to-end signup confirmed 2026-10-01 |
| Login | ✅ Working | Confirmed during testing |
| Job posting | ✅ Working | First job posted by Amanda |
| Job browsing | ⚠️ Partial | Lists jobs but detail page hangs on "Loading job..." |
| Dashboard | ✅ Working | Profile, logout, tabs (My Jobs / My Bids) |

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
| Landing | `/` | ✅ |
| Jobs | `/jobs` | ✅ Lists jobs |
| Job Detail | `/jobs/[id]` | ⚠️ Hangs on load |
| Post Job | `/post-job` | ✅ Form works |
| Dashboard | `/dashboard` | ✅ |
| Login | `/login` | ✅ |
| Signup | `/signup` | ✅ |

---

## 📋 Database Tables

- `profiles` — User profiles (id, email, roles[], display_name, created_at)
- `jobs` — Print jobs (title, description, material_type, quantity, deadline, budget, status)
- `bids` — Maker bids (price, turnaround_days, notes, portfolio_link, status)

**RLS Policies:**
- `profiles` — SELECT, UPDATE, INSERT ✅
- `jobs`, `bids` — Standard CRUD policies

---

## 💡 Product Ideas (From Amanda's Testing Feedback — 2026-10-01)

### Job posting form fields
Currently has: title, description, material_type, quantity, budget, deadline

**Amanda's thoughts:** Could use more options for richer filtering:
- **Event type** — Birthday, Christmas, wedding, etc. (could drive maker interest)
- **More material options** — currently: 3D print, t-shirt, banner, sticker, vinyl, other

### Bidding vs Comments vs Messaging
**Amanda's question:** Can people comment on a job post like a thread, send messages to the user, or only bid?

**Current state:** Bidding only. No comments, no direct messaging yet.

### "Post a Design" idea
**Amanda's proposal:** For people who don't know how to design and don't have printers — could there be a "Post a Design" option for designers without printers, plus the existing "Post a Job" (looking for someone to do the whole thing) and "Browse/Bid Jobs" (makers)?

This would split the flow into:
- **Designers** with finished designs → Post a Job (looking for printers)
- **Designers** without finished designs → Post a Design Request (looking for designer + printer)
- **Makers** → Browse/Bid Jobs

---

## 🔜 Next Action

**Fix the 4 known bugs:**

1. `app/jobs/[id]/page.tsx` — Add `setLoading(false)` after fetchJob query
2. `app/layout.tsx` — Add auth check, show "Logout" instead of "Login" when signed in
3. `app/dashboard/page.tsx` — Change logout button color (e.g., `text-gray-300` or `text-white`)
4. `app/post-job/page.tsx` — Convert deadline dates to user's timezone

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
- [ ] Fix 4 known bugs
- [ ] Seed 5 fake jobs
- [ ] Get first real users
- [ ] Decide on job form field additions (event type, more materials)
- [ ] Decide on bidding vs comments vs messaging architecture
- [ ] Add "Post a Design" flow?
- [ ] Add Stripe Connect (Phase 2)

---

*This document reflects the current state. For history, decisions, and details, see CHRONICLE.md*
