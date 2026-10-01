# Printadactyl — Current State

**Last Updated:** 2026-10-01

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
| Signup UI | ✅ Working | Designer/Maker/Explorer checkboxes |
| Login UI | ✅ Built | Ready for auth connection |

---

## ⚠️ What's NOT Working Yet

- User signup (backend not tested)
- User login (backend not tested)
- Job posting (needs working auth)
- Job feed (needs jobs in DB)
- Bidding system (needs jobs first)

---

## 🔧 Tech Stack

| Layer | Tool | Status |
|-------|------|--------|
| Domain | Porkbun | ✅ |
| DNS | Porkbun → Vercel | ✅ |
| Hosting | Vercel | ✅ |
| Database | Supabase PostgreSQL | ✅ Connected |
| Auth | Supabase Auth | ⚠️ Ready |
| Frontend | Next.js 14 + Tailwind | ✅ |

**Supabase Project:** `znwjmtvkengxxfagowyv.supabase.co`

---

## 📄 Pages

| Page | Route | Status |
|------|-------|--------|
| Landing | `/` | ✅ |
| Jobs | `/jobs` | ✅ |
| Job Detail | `/jobs/[id]` | ✅ |
| Post Job | `/post-job` | ✅ |
| Dashboard | `/dashboard` | ✅ |
| Login | `/login` | ✅ |
| Signup | `/signup` | ✅ |

---

## 📋 Database Tables

- `profiles` — User profiles (id, email, roles[], display_name, created_at)
- `jobs` — Print jobs (title, description, material_type, quantity, deadline, budget, status)
- `bids` — Maker bids (price, turnaround_days, notes, portfolio_link, status)

**RLS Policies:** Applied on all tables

---

## 🔜 Next Action

**Test signup flow:**

1. Go to https://printadactyl.com/signup
2. Select Design/Make/Explore (checkboxes)
3. Fill in name, email, password
4. Submit
5. Verify user appears in Supabase `profiles` table

---

## 📁 Key Files

```
/
├── app/                    # Next.js pages
│   ├── page.tsx           # Landing
│   ├── signup/page.tsx    # Signup
│   ├── login/page.tsx     # Login
│   ├── jobs/              # Job listing + detail
│   ├── post-job/          # Job posting form
│   └── dashboard/         # User dashboard
├── lib/
│   └── supabase.ts        # Supabase clients
├── supabase/
│   └── schema.sql         # Database schema
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
|------|------|------------|
| Standard | 15% | Default |
| Volume | 12% | $10,000+ completed |
| Premium | 10% | $50,000+ completed |

---

## 🎯 Goals

- [ ] Test signup end-to-end
- [ ] Verify user appears in Supabase
- [ ] Test login flow
- [ ] Seed 5 fake jobs
- [ ] Get first real users
- [ ] Add Stripe Connect (Phase 2)

---

*This document reflects the current state. For history, decisions, and details, see CHRONICLE.md*
