# The Printadactyl Chronicle

*A journal of hatching an idea, building a marketplace, and chasing a dream.*

---

## Chapter 0: The Blueprint (September 2026)

*Documented: 2026-09-28*  
*Last updated: 2026-10-01*

---

### 2026-09-28 — The Strategic Plan

This chapter captures the original vision, problem/solution, market analysis, and technical architecture. It serves as the foundation for everything we build.

---

#### What Printadactyl Is

Printadactyl is a **two-sided marketplace platform** connecting:

**Designers** — People with ideas who need things printed
- Have designs but no printing equipment
- Need custom prints: shirts, 3D objects, banners, stickers, vinyl
- Don't want to hunt down vendors or manage a print shop
- Want competitive pricing through competition

**Makers** — People with printing equipment who want work
- Have printers, sublimation machines, vinyl cutters, etc.
- Don't want to run marketing/sales themselves
- Want a steady stream of jobs without cold outreach
- Want to compete on price, speed, and quality

#### The Core Mechanic: Bidding

```
Designer posts job → Multiple makers see it → Makers submit bids → Designer picks winner → Maker prints → Platform takes commission
```

**Example Flow:**
1. Designer posts: "Print 30 Charmander shirts, size L, cotton, due in 2 weeks, budget $300"
2. Makers see the job in their feed
3. Maker A bids: "$280, 5 days turnaround, portfolio link"
4. Maker B bids: "$250, 10 days turnaround, 3 similar jobs done"
5. Maker C bids: "$290, 3 days turnaround, rush fee included"
6. Designer reviews bids → picks Maker B (best price/value)
7. Job begins → payment held in escrow → completion → release

#### Why "Printadactyl"?

- **-dactyl** = finger/toe (Greek) → pterodactyl, but for printing
- **Print** + **dactyl** = "prints for fingers" (like holding a printed thing)
- Fun, memorable, unique, dinosaur-themed
- Stands out from generic names like "PrintHub" or "PrintMarket"

---

#### The Problem We're Solving

**Designer Pain Points:**

| Pain Point | Description | Current Alternative |
|------------|-------------|-------------------|
| **No easy way to find printers** | Designers don't know where to find reliable print vendors | Google search, Reddit, ask in communities |
| **Fixed pricing** | Every POD platform has set prices — no negotiation | Etsy, Printful, Printify |
| **No competition** | Can't compare prices across multiple makers | Can't — platforms are single-vendor |
| **Minimum orders** | Most require bulk minimums | Printful typically 10+ units |
| **No custom specs** | Must use platform templates only | Limited customization |
| **Quality uncertainty** | No way to vet a printer's quality beforehand | Blind ordering, crossed fingers |

**Maker Pain Points:**

| Pain Point | Description | Current Alternative |
|------------|-------------|-------------------|
| **Marketing burden** | Must find customers themselves | Instagram, Etsy, word of mouth |
| **No steady work** | Feast or famine, periods with no orders | Build personal brand (time-consuming) |
| **Fixed fees** | POD platforms take large cuts, no negotiation | Printful/Printify take 10-30% |
| **Competition on price only** | Can't differentiate on turnaround or quality | Race to the bottom |
| **No portfolio showcase** | Hard to show past work to prospects | Basic Etsy shop, social media |
| **Payment risk** | Client may not pay after delivery | Pay upfront (loses customers) |

**The Gap in the Market:**

**No platform exists that combines:**
1. Print-on-demand fulfillment
2. Bidding/competition model
3. Two-sided marketplace
4. No inventory for either party

Existing solutions force one side to compromise:
- **Etsy:** Handmade marketplace (not POD-specific, no bidding)
- **Printful/Printify:** Fulfillment only (fixed prices, you set the margin)
- **Shapeways:** Was the 3D printing marketplace, pivoted to B2B
- **MakerWorld:** Bambu Lab ecosystem-locked, not general purpose
- **Fiverr:** General services (not print-focused, no structured bidding)

---

#### The Solution

Printadactyl creates a **bidding marketplace** where:

**For Designers:**
- Post a job in minutes: material, quantity, deadline, specs, budget
- Compare bids from multiple makers side-by-side
- Pick the winner based on price, turnaround, portfolio
- Pay securely through the platform (escrow)
- Communicate directly with the maker
- Leave reviews to build maker reputation

**For Makers:**
- Browse available jobs that match your capabilities
- Submit bids with your price, turnaround, and samples
- Build a profile with portfolio, specialties, ratings
- Get paid securely — no ghosting, platform guarantees payment
- Grow your reputation through reviews

**The Platform Value:**
- For designers: Better prices through competition, guaranteed quality
- For makers: Steady work stream, passive lead generation
- For us: Commission on every completed job (10-20%)

---

#### What We Had at Blueprint Creation (September 2026)

**1. Domain ✅**

| Property | Value |
|----------|-------|
| **Domain** | printadactyl.com |
| **Registrar** | Porkbun |
| **Cost** | $11.08/year |
| **Renewal** | September 2027 |
| **Features** | Free WHOIS privacy, included Link-in-Bio |

**DNS Configuration:**
- A record → Vercel deployment
- MX records → Zoho Mail

**2. Email System ✅**

| Property | Value |
|----------|-------|
| **Email** | amandatedeschi@printadactyl.com |
| **Provider** | Zoho Mail (Free tier) |
| **Status** | Working (as of late September 2026) |
| **Access** | https://mail.zoho.com |
| **Limitations** | 5 users, 5GB storage, free tier branding |

**Email Routing Strategy:**
- hello@printadactyl.com — General contact
- support@printadactyl.com — Support requests
- sarah@printadactyl.com — Marketing tracking (Sarah campaign)
- amanda@printadactyl.com — Marketing tracking (Amanda campaign)
- [catch-all] — Catches any other prefix, routes to main inbox

**3. Landing Page ✅**

| Property | Value |
|----------|-------|
| **URL** | https://printadactyl.vercel.app |
| **Tech** | Static HTML/CSS (later migrated to Next.js) |
| **Status** | Deployed, live |

**4. GitHub Repository ✅**

| Property | Value |
|----------|-------|
| **URL** | https://github.com/CuriousCornucopious/printadactyl |
| **Owner** | CuriousCornucopious |
| **Status** | Active, version controlled |

**5. Vercel Project ✅**

| Property | Value |
|----------|-------|
| **Project ID** | prj_S0naNwpnRnGPx9QJE0q34oEpaUXZ |
| **Deployment** | Automatic from GitHub |
| **Status** | Deployed |

---

#### What We DIDN'T Have (at Blueprint Creation)

**User System ❌**

| Missing | Impact |
|---------|--------|
| **No user accounts** | Can't sign up as designer or maker |
| **No authentication** | No login, signup, password reset, OAuth |
| **No profiles** | No maker portfolios, designer dashboards |
| **No user data** | Everything is anonymous, no personalization |

**Core Marketplace Features ❌**

| Missing | Impact |
|---------|--------|
| **No job posting** | Designers can't submit print requests |
| **No bid submission** | Makers can't bid on jobs |
| **No job listing** | No feed of available print jobs |
| **No messaging** | Can't communicate between parties |
| **No file upload** | Can't upload STL/OBJ/design files |
| **No notifications** | No email/push when bids come in |

**Transaction System ❌**

| Missing | Impact |
|---------|--------|
| **No payments** | No checkout, no Stripe integration |
| **No escrow** | No fund holding during job |
| **No commission calculation** | No revenue generation |
| **No order tracking** | Can't track shipping |
| **No invoicing** | No automatic invoices |

---

#### Technical Architecture (Blueprint)

**Recommended Stack (MVP):**

| Component | Choice | Reason |
|----------|--------|--------|
| **Framework** | Next.js 14 | Full-stack, API routes, SSR |
| **Database** | Supabase | PostgreSQL, built-in auth, storage |
| **Auth** | Supabase Auth | Integrated, or use Clerk |
| **Storage** | Supabase Storage | S3-compatible, integrated |
| **Payments** | Stripe Connect | Marketplace-specific |
| **Styling** | Tailwind CSS | Fast development |
| **Forms** | React Hook Form | Validation, easy |
| **Hosting** | Vercel | Already using it |

**Database Schema (Conceptual):**

```
users
├── id (uuid)
├── email (string)
├── password_hash (string)
├── role (enum: designer, maker)
├── created_at (timestamp)
└── profile_id (FK → profiles)

profiles
├── id (uuid)
├── user_id (FK → users)
├── display_name (string)
├── bio (text)
├── avatar_url (string)
├── portfolio_url (string)
├── specialties (array)
└── created_at (timestamp)

jobs
├── id (uuid)
├── designer_id (FK → users)
├── title (string)
├── description (text)
├── material_type (enum: 3d_print, shirt, banner, sticker, vinyl, other)
├── quantity (integer)
├── deadline (date)
├── budget_min (decimal)
├── budget_max (decimal)
├── design_file_url (string)
├── status (enum: open, bidding_closed, in_progress, completed, cancelled)
├── created_at (timestamp)
└── updated_at (timestamp)

bids
├── id (uuid)
├── job_id (FK → jobs)
├── maker_id (FK → users)
├── price (decimal)
├── turnaround_days (integer)
├── notes (text)
├── portfolio_link (string)
├── status (enum: pending, accepted, rejected, withdrawn)
├── created_at (timestamp)
└── updated_at (timestamp)

messages
├── id (uuid)
├── job_id (FK → jobs)
├── sender_id (FK → users)
├── content (text)
├── created_at (timestamp)
└── read_at (timestamp)

reviews
├── id (uuid)
├── job_id (FK → jobs)
├── reviewer_id (FK → users)
├── reviewee_id (FK → users)
├── rating (integer 1-5)
├── comment (text)
└── created_at (timestamp)

transactions
├── id (uuid)
├── job_id (FK → jobs)
├── amount (decimal)
├── commission_percentage (decimal)
├── status (enum: pending, held, released, refunded)
├── stripe_payment_id (string)
├── created_at (timestamp)
└── updated_at (timestamp)
```

---

#### Brand & Identity

**Brand Attributes:**

| Attribute | Value |
|-----------|-------|
| **Name** | Printadactyl |
| **Tagline** | "Your ideas, printed." |
| **Alternative Taglines** | "Print it. Done." / "From file to finished." |
| **Vibe** | Fun, playful, tech-forward, accessible, dinosaur-themed |
| **Audience** | Designers (creatives, entrepreneurs), Makers (print shop owners, hobbyists) |
| **Tone** | Welcoming, professional but not stuffy, slightly playful |

**Visual Identity:**

| Element | Current State |
|---------|---------------|
| **Logo** | Only exists as floating pterodactyl SVG animation on landing page |
| **Color Palette** | Dark theme with neon green/purple accents (needs formal spec) |
| **Typography** | Default system fonts (needs formal spec) |
| **Components** | None built yet — needs design system |
| **Favicon** | Likely default Vercel favicon |

---

#### Market Analysis

**Total Addressable Market (TAM):**
- Global print-on-demand market: **$4.9 billion** (2024)
- Expected growth: **25.4% CAGR** through 2030
- 3D printing market alone: **$26.5 billion** by 2030

**Serviceable Addressable Market (SAM):**
- Custom apparel printing: $1.2B
- 3D printing services: $800M
- Signage/banners: $600M
- Stickers/vinyl: $300M

**Competitive Landscape:**

| Platform | Model | Strengths | Weaknesses |
|----------|-------|-----------|-------------|
| **Etsy** | Fixed price + marketplace | Huge traffic, established trust | No POD focus, no bidding |
| **Printful** | POD fulfillment | Quality, reliability | Fixed prices, you set margin |
| **Printify** | POD marketplace | Many suppliers, dropshipping | Fixed prices, race to bottom |
| **Shapeways** | 3D printing | Was the leader | Pivoted away, enterprise focus |
| **MakerWorld** | 3D community | Bambu ecosystem | Locked to Bambu Lab hardware |
| **Fiverr** | Services marketplace | Bidding model exists | Not print-focused, generic |
| **Printadactyl** | Bidding POD marketplace | First of its kind | Need to build everything |

**Key Differentiator:**

**Printadactyl is the ONLY platform that combines:**
1. Print-on-demand specific
2. Bidding/competition model
3. Two-sided marketplace
4. No inventory for either party
5. Focus on custom one-off and bulk jobs

---

#### Revenue Model

**Primary: Commission**

| Tier | Rate | Conditions |
|------|------|------------|
| **Standard** | 15% | Default rate |
| **Volume** | 12% | $10,000+ in completed jobs |
| **Premium** | 10% | $50,000+ in completed jobs |

**Example:**
- Job total: $300
- Platform takes: $45 (15%)
- Maker receives: $255

**Secondary: Featured Listings**

| Feature | Price | Duration |
|---------|-------|----------|
| **Sticky job** | $5 | 7 days at top of feed |
| **Featured maker** | $15/month | Promoted in search results |
| **Highlight bid** | $3 | Stand out in bid list |

**Tertiary: Subscriptions (Future)**

| Plan | Price | Features |
|------|-------|----------|
| **Maker Basic** | Free | Standard bidding |
| **Maker Pro** | $19/month | 10 featured bids/month, analytics |
| **Maker Enterprise** | $49/month | Unlimited featured, priority matching, API access |

**Revenue Projections (Year 1):**

| Month | Active Jobs | Avg Job Value | GMV | Revenue (15%) |
|-------|-------------|---------------|-----|---------------|
| 1 | 5 | $200 | $1,000 | $150 |
| 3 | 20 | $250 | $5,000 | $750 |
| 6 | 50 | $300 | $15,000 | $2,250 |
| 12 | 150 | $350 | $52,500 | $7,875 |

**Year 1 Revenue:** ~$40,000 (optimistic scenario)  
**Break-even:** ~300 active jobs/month

---

#### Risks & Challenges

**Market Risks:**

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| **Chicken and egg** — No makers without jobs, no jobs without makers | High | High | Seed with fake jobs, offer maker incentives, manually recruit |
| **Low volume** — Not enough jobs to attract makers | High | High | Aggressive marketing, partnership with design communities |
| **Price sensitivity** — 15% commission too high | Medium | Medium | Offer tiered rates, grandfather early makers |

**Technical Risks:**

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| **Payment complexity** — Stripe Connect is complex | Medium | High | Use Stripe Connect expert, start with simple model |
| **File storage costs** — Large design files expensive | Low | Medium | Limit file sizes, use Supabase with bandwidth limits |
| **Database scaling** — Need to handle concurrent bids | Low | Low | Supabase handles this well |

**Operational Risks:**

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| **Disputes** — Designers/makers disagree | Medium | Medium | Clear guidelines, escrow until completion, mediation |
| **Quality issues** — Bad prints, unhappy customers | Medium | High | Review system, verification badges, clear refund policy |
| **Fraud** — Fake bids, payment fraud | Low | High | Identity verification for makers, hold funds longer |

---

#### Phased Roadmap

**Phase 0: Foundation (Completed)**
- [x] Domain
- [x] Email
- [x] Landing page (static, then Next.js)
- [x] GitHub repo
- [x] Next.js app built
- [x] Database schema ready
- [x] Supabase connected

**Phase 1: MVP (In Progress)**
- [ ] Supabase schema run
- [ ] User auth testing
- [ ] Job posting
- [ ] Job feed
- [ ] Bid submission
- [ ] Bid comparison
- [ ] Email notifications

**Phase 2: Core Marketplace**
- [ ] Messaging system
- [ ] Stripe Connect
- [ ] Maker profiles
- [ ] Search + filters
- [ ] Escrow payments

**Phase 3: Trust & Reputation**
- [ ] Review system
- [ ] Dispute resolution
- [ ] Portfolio gallery
- [ ] Verification badges

**Phase 4: Scale**
- [ ] Maker subscriptions
- [ ] Bulk order support
- [ ] Auto-matching
- [ ] Material categories

---

#### Open Questions (from Blueprint)

1. **Which auth provider?** — Supabase Auth chosen
2. **Which payments model to start with?** — Stripe Connect planned for Phase 2
3. **What material types to start with?** — All of them initially, lead with 3D prints
4. **How to seed initial jobs?** — Manually create fake jobs
5. **How to seed initial makers?** — Recruit from communities, offer reduced commission

---

## Chapter 1: The Egg (August 2026)

### August 2026 — The Idea Takes Shape

The idea started with a simple observation: everywhere you look, print-on-demand is done the same way. A designer uploads a file, sets a price, and waits. There's no competition, no negotiation, no back-and-forth.

**What if it worked like freelancing?** What if designers could post what they needed, and multiple makers could bid on it? The designer picks the best offer — price, turnaround, portfolio — and everyone wins.

That's the insight. That's the differentiator.

We didn't want another cookie-cutter marketplace. We wanted a **bidding marketplace** — where the work itself becomes competitive.

---

### August 15, 2026 — Domain Day

The first step was obvious: we needed a name.

"Printadactyl" came from the mascot — a play on pterodactyl, but grounded in printing. Not a flying dinosaur anymore, but a green brontosaurus (later adjusted to a friendly green dino-thing). The vibe: playful, tech-forward, accessible.

Domain purchased: **printadactyl.com**  
Cost: $11.08/year via Porkbun  
Renewal: September 2027

The .com was ours.

---

### August 20, 2026 — Email Confusion

We needed email. Customer support, contact forms, all that.

First thought: Google Workspace. Too expensive.

Second thought: Forwarding through ForwardEmail. Too flaky.

Landed on: **Zoho Mail** — free tier, works with our domain.

But here's where it got complicated: setting up Zoho with our domain at Porkbun required DNS configuration. MX records, CNAMEs, the whole DNS rigamarole.

We added:
- mx.zoho.com (priority 10)
- mx2.zoho.com (priority 20)  
- mx3.zoho.com (priority 50)

And then... we got stuck. The DNS never quite propagated right, or we misconfigured something. The email setup went dormant for a few weeks.

**Hope deferred:** The email would sit unconfigured until late September.

---

### August 28, 2026 — First Static Landing

We started building. First version: static HTML.

No database. No auth. Just a landing page that said "Your ideas, printed."

It was ugly but it existed. Deployed to Vercel, pointed the domain, and... it worked. Sort of. HTTP only — HTTPS took time to propagate.

**First win:** A website that actually loads when you type the URL.

---

## Chapter 2: The Rewrite (September 2026)

### September 2026-09-20 — The Next.js Migration

Static HTML was fine for a demo, but we needed real functionality. User accounts. Job posting. Bidding. Payments eventually.

We rewrote the entire thing in **Next.js 14** with **Tailwind CSS**. Seven pages:
- Landing (`/`)
- Jobs (`/jobs`)
- Job Detail (`/jobs/[id]`)
- Post Job (`/post-job`)
- Dashboard (`/dashboard`)
- Login (`/login`)
- Signup (`/signup`)

The code was clean. The structure was solid. But it was all disconnected — no database, no auth, just UI.

**Accomplishment:** Full Next.js app structure in place.

---

### September 2026-09-24 — Supabase Day

We needed a database. PostgreSQL specifically.

Options:
- **Supabase** — All-in-one (DB + Auth + Storage), generous free tier
- **Neon** — Pure PostgreSQL, more control
- **Railway/Render** — General-purpose

We chose **Supabase** — the all-in-one approach meant less to manage. We could get auth, database, and (later) file storage in one place.

Created project: "CuriousCornucopious's Project"  
Region: Hopefully near us (Oregon) — we selected what made sense

Got the keys:
- Project URL: `https://znjwmtvkengxxfagowyv.supabase.co`
- Anon key: `eyJ...` (saved to .env.keys, not committed to git)

**But here's the catch:** The server I'm running on has network restrictions. It can't connect to Supabase's HTTPS endpoints directly. The SSL handshake fails — blocked by some firewall or network policy.

This meant: I could write the code, but I couldn't test it from here. Amanda would need to run things manually in the Supabase dashboard.

---

### September 2026-09-25 — Schema Designed

I wrote the database schema (`supabase/schema.sql`):

**Tables:**
- `profiles` — User data (id, email, roles, display_name)
- `jobs` — Print jobs (title, description, material_type, quantity, deadline, budget, status)
- `bids` — Maker bids (price, turnaround_days, notes, portfolio_link, status)

**Security:** Row Level Security (RLS) policies on every table. Only job designers can update their jobs. Only makers can create bids. Public can view open jobs.

**Trigger:** Auto-create a profile when someone signs up via Supabase Auth.

The schema was ready to run. Just needed to execute it in the SQL Editor.

---

### September 2026-09-26 — GitHub Connected

Pushed the code to GitHub:  
`github.com/CuriousCornucopious/printadactyl`

Connected to Vercel for auto-deploys. Every push → new deployment.

**Problem:** First deploy didn't trigger automatically. Something about the Vercel-GitHub connection was stuck in a weird state.

**Fix:** Ran `vercel --prod` from CLI to force-deploy. That seemed to "wake up" the system — subsequent pushes auto-deployed fine.

---

### September 2026-09-27 — Login/Signup Pages

Built the auth pages:
- `/signup` — Role selection (Design? Make? Explore?)
- `/login` — Email + password

The role selection was tricky. First pass: single choice (Designer OR Maker).  
Second pass: toggle buttons (clickable cards).  
Third pass: actual checkboxes with "select all that apply."

---

### September 2026-09-28 — The Big Day

**What happened:**
- Supabase account created and configured
- Database password set (strong one, generated by Amanda)
- API keys retrieved and saved securely
- README updated with Wins/Losses/New Goals sections
- Full Next.js app pushed to GitHub
- Domain DNS pointed to Vercel
- Porkbun API set up (for future domain management)

But the Vercel deploy wasn't working. The site wasn't updating on git push.

I ran `vercel --prod` manually again. The site refreshed.

**At the end of this day:**
- ✅ Supabase project ready
- ✅ Database schema ready (to run)
- ✅ Code compiles and deploys
- ✅ Domain pointing correctly
- ⏳ Signup/login not working (no DB yet)

---

### September 2026-09-29 — Email Finally Works

The Zoho Mail setup finally got resolved. Added the MX records properly:
- mx.zoho.com (10)
- mx2.zoho.com (20)
- mx3.zoho.com (50)

DNS propagated. Email started working.

**Discovery:** There's a catch-all enabled in Zoho Control Panel. This means we can use any prefix — sarah@printadactyl.com, amanda@printadactyl.com, anything@printadactyl.com — and they all route to the main inbox.

**Marketing insight:** Different prefixes for different campaigns. Track where inquiries come from without extra tooling.

Email was finally **done**.

---

### September 2026-09-29 — Multi-Role Signup

The signup page needed an overhaul. We wanted three options:
- 🎨 **Design** — Post jobs
- 🖨️ **Make** — Submit bids
- 🔍 **Explore** — Just browsing

The code was already there, but it wasn't deploying correctly. Build errors. Missing pieces.

Fixed the build. Then changed from toggle buttons to **actual checkboxes** with "select all that apply."

Deployed via `vercel --prod`. Site updated.

**Final state of this day:**
- Site live at printadactyl.com
- Signup has 3 checkboxes
- Email working
- Catch-all enabled
- Database schema NOT RUN YET (waiting for manual execution)

---

## Chapter 3: The Present (October 2026)

### October 1, 2026 — The Check-In

Amanda checks the site. The "select all that apply" is visible and working!

But we realize: we never actually ran the database schema. The tables don't exist yet.

I pull up the SQL, prepare it. Amanda navigates to the Supabase SQL Editor:

**https://supabase.com/dashboard/project/znjwmtvkengxxfagowyv/sql**

She sees... tables already there? The `profiles` table with a `roles` column (array type). This suggests maybe a partial run happened earlier, or Supabase auto-created something.

The schema IS ready to go — just needs verification.

Supabase keys are already in Vercel. The connection should work.

**Next step:** Test signup for real.

### October 1, 2026 — Document Restructure

Amanda asks a crucial question: "We have BLUEPRINT, README, and CHRONICLE. What's the difference?"

After discussion, we decide:
- **README.md** = Clean snapshot, overwrites completely each time
- **CHRONICLE.md** = The master journal, forever growing, absorbs everything

The Blueprint content gets absorbed into Chronicle as "Chapter 0: The Blueprint" — dated, narrative, with all the strategic content intact.

This is the birth of our documentation structure:
1. README = "what exists RIGHT NOW" (rebuilt clean each time)
2. CHRONICLE = "the complete story" (forever adding entries)

**Files affected:**
- CHRONICLE.md — Expanded to include Blueprint + all session summaries
- README.md — Rebuilt as clean current-state snapshot
- BLUEPRINT.md — Will be deleted (content absorbed into Chronicle)

---

## Hopes for the Future

### The Dream

Printadactyl should become the **Airbnb of printing** — a marketplace where:
- Designers post what they need
- Makers compete with bids
- Quality rises, prices stay fair
- 3D prints lead the way (our differentiator)

### The Path

1. **Now:** Get the database running, test signup/login
2. **Week 1:** Seed 5 fake jobs so the marketplace isn't empty
3. **Week 2:** Get 5-10 real designers to post jobs
4. **Week 2-3:** Get 5-10 real makers to bid
5. **Week 3:** Stripe Connect for payments
6. **Month 2:** First real job completed

### The Hurdles

- **Chicken and egg:** No makers without jobs, no jobs without makers
- **Trust:** New platform, no reviews, no track record
- **Liquidity:** Need enough volume for selection to matter

### The Moonshot

What if Printadactyl becomes THE place for custom printing? Not just 3D prints, but everything — shirts, banners, stickers, vinyl, sublimation. A vertical marketplace for "things that get printed."

And what if, eventually, we could do:
- AI-generated designs fed into the system
- Maker verification Badges
- Integrated shipping
- Subscription for designers (always-on access)

One step at a time. First: make signup work.

---

## Technical Reference

### Where It Lives

| Asset | Location |
|-------|----------|
| Domain | Porkbun — printadactyl.com |
| Email | Zoho Mail |
| Hosting | Vercel — printadactyl-5jgjubztc-eva-68f8.vercel.app |
| Database | Supabase — znjwmtvkengxxfagowyv.supabase.co |
| Code | GitHub — CuriousCornucopious/printadactyl |

### The Stack

- **Frontend:** Next.js 14, React, Tailwind CSS
- **Database:** PostgreSQL (via Supabase)
- **Auth:** Supabase Auth
- **Hosting:** Vercel
- **Domain:** Porkbun
- **Email:** Zoho Mail

### Database Schema (Summary)

```
profiles: id, email, roles[], display_name, created_at
jobs: id, designer_id, title, description, material_type, quantity, deadline, budget_min, budget_max, status, created_at
bids: id, job_id, maker_id, price, turnaround_days, notes, portfolio_link, status, created_at
```

### Key Files

- `/app/page.tsx` — Landing
- `/app/jobs/page.tsx` — Job feed
- `/app/jobs/[id]/page.tsx` — Job detail
- `/app/post-job/page.tsx` — Post a job
- `/app/dashboard/page.tsx` — User dashboard
- `/app/signup/page.tsx` — Signup
- `/app/login/page.tsx` — Login
- `/lib/supabase.ts` — Supabase clients
- `/supabase/schema.sql` — Database schema
- `/.env.keys` — Saved API keys (NOT in git)

---

## Wins & Losses Log

### Wins (Accomplishments)

| Win | Date | Details |
|-----|------|--------|
| Domain purchased | Aug 2026 | printadactyl.com via Porkbun ($11.08/yr) |
| Email setup | Aug 2026 | amandatedeschi@printadactyl.com via Zoho |
| DNS setup | Sep 2026 | CNAME pointing to Vercel (cname.vercel-dns.com) |
| HTTPS working | Sep 2026 | Site loads via https:// |
| Static landing page | Aug 2026 | First HTML version deployed |
| Next.js migration | Sep 2026 | Full app rewrite from static HTML |
| All pages built | Sep 2026 | 7 pages: Landing, Jobs, Job Detail, Post Job, Dashboard, Login, Signup |
| Supabase client | Sep 2026 | Server + browser clients ready |
| Database schema | Sep 2026 | Full SQL with RLS policies |
| Auth middleware | Sep 2026 | Protects dashboard/post-job routes |
| Green brontosaurus mascot | Sep 2026 | Custom SVG pterodactyl → green brontosaurus |
| GitHub repo | Sep 2026 | CuriousCornucopious/printadactyl |
| Vercel connected | Sep 2026 | Auto-deploys from GitHub |
| Supabase account created | Sep 2026 | Project ready |
| Zoho Mail configured | Sep 2026 | MX records added, catch-all enabled, marketing tracking ready |
| Multi-role signup | Sep 2026 | Designer/Maker/Explorer checkboxes |
| Email working | Sep 2026 | Zoho Mail fully functional |

### Losses (Abandoned/Deprecated)

| Loss | Date | Reason | Replaced By |
|------|------|--------|-------------|
| Static HTML landing | Aug 2026 | Limited functionality, no auth | Next.js app |
| Original pterodactyl mascot | Sep 2026 | Too generic | Green brontosaurus |
| Firebase considered | Sep 2026 | NoSQL, wanted real PostgreSQL | Supabase |

---

## Open Questions

These questions remain unanswered. Future sessions should address them:

1. **Material focus:** Should we start with just 3D prints, or all types?
2. **Early users:** Who can we recruit as first designers/makers?
3. **Marketing:** Does Amanda handle it, or plan for tools?
4. **Payment timing:** When exactly to add Stripe Connect?
5. **Seed jobs:** How to populate initial marketplace (fake vs real)?

---

## Session Log

### 2026-09-28

| Event | Details |
|-------|---------|
| Supabase account created | Organization: Printadactyl, Project: CuriousCornucopious's Project |
| Database password set | Strong password generated by Amanda |
| API keys retrieved | URL + anon key obtained from Supabase dashboard |
| Keys saved securely | Stored in `.env.keys` (NOT committed to git) |
| README updated | Added Wins/Losses/Executed Ideas/New Goals sections |
| Code pushed | Full Next.js app pushed to GitHub |
| Domain pointed to Vercel | DNS records updated via Porkbun API |
| Porkbun API set up | Created keys via PKCE flow, working |

### 2026-09-29

| Event | Details |
|-------|---------|
| Zoho Mail MX records added | Added mx.zoho.com (10), mx2.zoho.com (20), mx3.zoho.com (50) |
| DNS propagated | MX records verified working via Zoho dashboard |
| Catch-all discovered | Enabled in Zoho Control Panel |
| Email routing understood | Specific prefixes go to specific inboxes, others go to catch-all |
| Marketing tracking realized | Can use different prefixes (sarah@, amanda@, etc.) to track inquiries |
| Porkbun API keys updated | New working keys saved in TOOLS.md |
| Multi-role signup added | Designer, Maker, Explorer (select all that apply) |
| Vercel deploy issue fixed | Site wasn't auto-deploying; used Vercel CLI to force deploy |

**Bug Fix: Multi-Role Signup**
- Changed from single-choice to multi-select checkboxes
- Database: `role TEXT` → `roles TEXT[]` (array)
- Frontend: Checkboxes with "select all that apply"

### 2026-10-01

| Event | Details |
|-------|---------|
| Check-in | Verified live site at printadactyl.com |
| Signup UI confirmed | "select all that apply" text visible |
| Database status verified | Tables exist in Supabase, roles column confirmed |
| Supabase keys confirmed | Already in Vercel env vars |
| Chronicle created | New CHRONICLE.md tells the full story |
| Blueprint absorbed | Chapter 0 added to Chronicle |
| Documentation restructured | README = snapshot, CHRONICLE = forever journal |

---

*To be continued...*

*Last updated: 2026-10-01*

---

## Chapter 3: The Debugging Slog (October 2026)

*Documented: 2026-10-01*  
*Last updated: 2026-10-01*

---

### 2026-10-01 — The Signup Bug Marathon

This session became an unintended deep-dive into Supabase quirks. This chapter documents exactly what went wrong, why, and how to avoid it in the future.

---

#### The symptoms

1. **"Failed to fetch"** — User sees this error when submitting the signup form
2. **"Database error saving new user"** — After fixing #1, this error appeared
3. **Email confirmation needed** — Supabase default behavior blocked immediate login

---

#### Root Cause Analysis

##### Bug #1: Wrong Supabase Project URL

**What happened:**
- Initial Supabase project was created as a **sandbox** (short-lived, auto-deleted)
- User then created a **real project** and provided the new URL + anon key
- The anon key's JWT payload contained a `ref` claim (project ID)
- I decoded the JWT and extracted the `ref`, assuming it was the real project
- **Problem:** The decoded `ref` was `znwjmtvkengxxfagowyv` (n-w-j order)
- The **real** project URL is `znjwmtvkengxxfagowyv` (w-j order) — a **transposition**, not a typo
- Both URLs returned the same generic "loading" page in the Supabase dashboard, so I couldn't tell them apart visually

**Why it was hard to catch:**
- `https://supabase.com/dashboard/project/<ref>` returns a generic page for ANY ref
- The dashboard URL doesn't validate that the project exists
- `web_fetch` on the actual `<ref>.supabase.co` with `ENOTFOUND` is the only reliable test
- But my sandbox environment couldn't resolve `*.supabase.co` via curl — only `web_fetch` worked

**How it was finally fixed:**
- User provided the correct Project URL and anon key directly from Supabase dashboard
- I used `web_fetch` to verify: `https://znjwmtvkengxxfagowyv.supabase.co/auth/v1/settings` returned `401 No API key found` (which means the project exists and is responding)
- Updated `.env.local`, `.env.keys`, Vercel env vars, README, and CHRONICLE to use the correct URL

**Lesson learned:**
- Never trust the JWT `ref` claim alone when a user provides keys
- Always verify the URL independently: `web_fetch https://<ref>.supabase.co/auth/v1/settings` should return JSON (or 401 about API key), NOT `ENOTFOUND`
- If the user provides keys, ask for the URL from dashboard Settings → API page

---

##### Bug #2: Email Confirmation Blocked Signup

**What happened:**
- Supabase Auth has email confirmation **enabled by default**
- With confirmation on, `signUp()` creates the user but returns **no session**
- Our code expected a session immediately and redirected to /dashboard
- Without a session, the user couldn't log in and saw no feedback

**Why it was hard to catch:**
- The "Failed to fetch" error was masking everything else
- Once #1 was fixed, we saw "Database error" instead

**How it was fixed:**
- User manually toggled off "Confirm email" in Supabase dashboard (Authentication → Providers → Email)
- I couldn't do this — needed dashboard access or service_role key
- Added code to show "Check your email to confirm" message when no session is returned

**Lesson learned:**
- Add this to the onboarding checklist: "Turn off email confirmation for development"
- Or configure custom SMTP (Zoho) so confirmations come from your domain

---

##### Bug #3: "Database error saving new user"

**What happened:**
- The signup form sends `roles` and `display_name` via Supabase Auth's `options.data`
- The database has a trigger (`handle_new_user`) that reads `raw_user_meta_data` and inserts into `profiles`
- The trigger code: `COALESCE(NEW.raw_user_meta_data->>'roles', '{"explorer"}')::text[]`
- We sent `roles` as a **Postgres array literal** (`'{designer,maker}'`) — wrong format
- Then tried JSON string (`'["designer","maker"]'`) — still wrong because it was a string, not a JSON-parseable value
- The trigger's `::text[]` cast failed silently, causing the insert to error

**Why it was hard to catch:**
- Supabase error messages don't always surface the root cause clearly
- The "Database error" is generic — doesn't say *which* field or *why*
- We couldn't see server-side logs from the browser

**How it was almost fixed:**
- Changed to send `roles` as a JSON string via `JSON.stringify(roles)`
- Still didn't work — the trigger parsing is fragile

**Lesson learned:**
- Database triggers are "elegant" but hard to debug when they fail
- Frontend code should explicitly handle profile creation with explicit error handling
- If something goes wrong, we want to see the *actual* database error in the UI

---

##### Bug #4: The Supabase Sandbox Trap

**What happened:**
- User initially gave me a **sandbox** anon key (short-lived, auto-deleted)
- Then gave me the **real** project key
- I assumed the first key was the real one and just fixed the URL
- The sandbox project was deleted, so the URL didn't exist
- I kept saying "try again" when it was actually my fault

**Why it was hard to catch:**
- The JWT decoded fine, but the project it pointed to was gone
- Supabase dashboard URL doesn't distinguish between "project doesn't exist" and "you don't have permission"

**Lesson learned:**
- When a user says "I gave you a sandbox key first, then a real one," treat all existing keys as SUSPECT
- Verify independently: try to fetch the project URL and see if it resolves

---

#### What We Tried (In Order)

| Attempt | Fix | Result |
|---------|-----|--------|
| 1 | Decode JWT ref, assume it's the project URL | Wrong — sandbox project was deleted |
| 2 | Fix URL typo (remove stray 'l') | Wrong — was actually w-j transposition |
| 3 | User turns off email confirmation manually | Worked — but signup still failing |
| 4 | Send roles as Postgres array literal (`{designer,maker}`) | Failed — trigger expects JSON |
| 5 | Send roles as JSON string (`["designer","maker"]`) | Failed — trigger parsing issue |
| 6 | Rewrite signup to use manual profile insertion | **Recommended next step** |

---

#### How to Avoid This in the Future

1. **Ask for the URL directly** — Don't decode JWTs to find the project URL. Ask the user to paste from Settings → API.

2. **Verify independently** — `web_fetch https://<ref>.supabase.co/auth/v1/settings` should return JSON or 401, not ENOTFOUND.

3. **Turn off email confirmation early** — Add to dev setup checklist.

4. **Prefer explicit code over database triggers** — Triggers are invisible to the frontend. If something fails, you can't show the user what went wrong.

5. **Test with fresh data** — Supabase remembers "email already registered" responses. Use unique emails for each test attempt.

6. **Use incognito windows** — Browser cache hides deployed code changes.

---

#### The Cost

- **Time:** ~2 hours of back-and-forth
- **Deploys:** 5+ redeploys to test each fix
- **User frustration:** Multiple "try again" messages
- **Lesson learned:** Elegant solutions (triggers) are only elegant when they work

---

#### Current Status (2026-10-01 07:14 UTC)

- [x] Supabase project URL corrected (`znjwmtvkengxxfagowyv`)
- [x] Email confirmation disabled
- [x] Signup page deployed with roles JSON fix
- [ ] Signup still failing with "Database error saving new user"
- [ ] **Decision:** Rewrite signup to use manual profile insertion instead of trigger

---

*To be continued...*

*Last updated: 2026-10-01*

---

### 2026-10-01 07:46 UTC — VICTORY: Signup Works

**Status:** ✅ User signup is now functional after a marathon debugging session.

---

#### What Was Wrong (Full Recap)

We encountered **four distinct bugs** stacked on top of each other:

1. **Wrong Supabase project URL** — Sandbox key's JWT `ref` claim pointed to a deleted project. Real project URL had a transposition (w-j order) that took multiple attempts to identify.

2. **Email confirmation was enabled** — Supabase default blocks immediate login, masking whether signup actually worked.

3. **Database trigger `handle_new_user` was failing silently** — The trigger tried to parse `roles` from `raw_user_meta_data` and cast it to `text[]`. Our JSON string format didn't work, but the error surfaced as a generic "Database error saving new user."

4. **Missing INSERT policy on `profiles` table** — Row Level Security had SELECT and UPDATE policies but no INSERT policy, blocking manual profile creation.

---

#### How It Got Fixed

| Fix | Action |
|-----|--------|
| URL typo | Updated `.env.local`, `.env.keys`, Vercel env vars, README, CHRONICLE |
| Email confirmation | User toggled off in Supabase dashboard (Authentication → Providers → Email) |
| Trigger failure | Dropped trigger (`DROP TRIGGER on_auth_user_created`) and rewrote signup to insert profile manually in code |
| RLS policy | Added INSERT policy: `CREATE POLICY ... FOR INSERT WITH CHECK (auth.uid() = id)` |

---

#### Final Code Change

The signup page was rewritten to:
1. Call `auth.signUp({ email, password })` with **no metadata**
2. Explicitly `INSERT` into `profiles` after auth succeeds
3. Show the **actual SQL error** if profile insert fails (not generic message)
4. Auto-cleanup: if profile insert fails, show error so user can retry with same email

Commit: `579a480`

---

#### Time Cost

- ~5 hours of back-and-forth
- 8+ deploys
- ~10 git commits
- Multiple "try again" messages

---

#### Lessons Learned (For Future Projects)

1. **Ask for URLs directly, don't decode JWTs** — User-provided URLs are ground truth.
2. **Verify project exists independently** — `web_fetch https://<ref>.supabase.co/auth/v1/settings` should return JSON/401, not ENOTFOUND.
3. **Turn off email confirmation early in dev** — Add to onboarding checklist.
4. **Prefer explicit code over database triggers** — Triggers are invisible to frontend debugging.
5. **RLS policies need INSERT, not just SELECT/UPDATE** — Easy to forget when copying policy templates.
6. **Surface real errors to the UI** — Generic "Database error" is debugging hell.
7. **Test with fresh emails** — Supabase remembers "already registered" responses.
8. **Use incognito windows for testing deploys** — Browser cache hides new code.

---

#### Final State (2026-10-01 07:46 UTC)

| Component | Status |
|-----------|--------|
| Supabase URL | ✅ Correct (`znjwmtvkengxxfagowyv`) |
| Email confirmation | ✅ Disabled |
| Auth signup | ✅ Working |
| Profile creation | ✅ Working (manual insert in code) |
| DB trigger | ✅ Dropped |
| RLS policies | ✅ SELECT, UPDATE, INSERT all in place |
| Deploy | ✅ Live at printadactyl.com |
| User signed up successfully | ✅ |

---

*Next: Test login flow, then move to job posting.*

*Last updated: 2026-10-01 07:46 UTC*

---

### 2026-10-01 07:46–08:20 UTC — Smoke Testing + Bug Discovery

After the signup fix, Amanda ran through the full flow. Several bugs surfaced.

---

#### What Amanda Tested

1. **Logged out and back in** ✅ Works
2. **Posted her first job** ✅ Form worked
3. **Browsed jobs from "My Bids" tab** ⚠️ Click into a job → "Loading job..." hangs forever
4. **Looked at the dashboard layout** — Logout button is dark gray, hard to read
5. **Logged in view** — "Login" button still shows in top nav even when signed in
6. **Date discrepancy** — Set deadline 12/20/26, displayed as 12/19 in dashboard (timezone bug)

---

#### Bugs Found During Testing

| # | Bug | Root Cause | Where |
|---|-----|-----------|--------|
| 1 | Job detail page hangs on "Loading job..." | `fetchJob()` doesn't call `setLoading(false)` after the query returns | `app/jobs/[id]/page.tsx` |
| 2 | "Login" button shows even when signed in | `app/layout.tsx` hardcodes the link with no auth check | `app/layout.tsx` |
| 3 | Logout button hard to read | `text-gray-400` on dark background | `app/dashboard/page.tsx` |
| 4 | Deadline date off by one day | UTC storage vs PDT display | `app/post-job/page.tsx` |

---

#### Amanda's Product Ideas (Captured For Future)

**1. Job form field expansion**
> "I need more options... materials, event (birthday, xmas, wedding etc) this could change a makers interest or overall interest in bidding a job."

Current fields: title, description, material_type, quantity, budget, deadline

Could add:
- **Event type** — Birthday, Christmas, wedding, baby shower, corporate, etc.
- **More material types** — Currently: 3D print, t-shirt, banner, sticker, vinyl, other
- **Size/dimensions** for banners/stickers
- **Color count** for shirts/designs

**2. Bidding vs Comments vs Messaging**
> "Will people only be able to bid? Can they comment, like a thread. Have the ability to comment on the job posting or send a message to the user."

Current state: Bidding only (no comments, no direct messaging)

Open questions:
- Should makers be able to ask clarifying questions on a job post?
- Should designers and bidders have a message thread?
- Or keep it simple: bid is the only interaction until accepted?

**3. "Post a Design" idea (New user type?)**
> "Should we have a 'Post a Job' 'Browse/Bid Jobs' and 'Post a Design' — for the people that don't know how to officially design and do not have printers."

Current flow:
- Designers with designs → Post a Job
- Makers → Browse/Bid Jobs

Proposed expansion:
- Designers WITH designs, no printers → Post a Job (current)
- Designers WITHOUT designs, no printers → Post a Design Request
- Designers WITH designs AND printers → Make? (browse their own bids?)
- Makers → Browse/Bid Jobs (current)

This would make the platform more inclusive for non-technical users.

---

#### What's Next (Per Amanda's Request)

**Phase 1: Bug fixes (immediate)**
1. Fix "Loading job..." hang
2. Fix "Login" button showing when signed in
3. Make logout button readable
4. Fix date timezone bug

**Phase 2: Product decision points**
- Decide on job form field additions (vote: event type yes/no, more materials yes/no)
- Decide on bidding vs comments vs messaging architecture
- Decide on "Post a Design" expansion

**Phase 3: Cleanup**
- Drop the dropped-trigger reference from schema.sql
- Remove empty test env files
- Clean up debugging commits

---

#### Final State (2026-10-01 08:20 UTC)

| Component | Status |
|-----------|--------|
| Signup | ✅ Working |
| Login | ✅ Working |
| Job posting | ✅ Working |
| Job listing | ✅ Working |
| Job detail | ❌ Hangs on load (bug #1) |
| Dashboard | ⚠️ Partially working (logout button hard to read, login button doesn't hide) |
| Date display | ⚠️ Off by one day (timezone bug) |
| Comments/messaging | ❌ Not built yet |
| Event type field | ❌ Not in form |

---

## Strategic Brainstorming (2026-10-02)

*Documented: 2026-10-02*

---

### Quality Uncertainty — Two-Way Street

The initial Blueprint identified "quality uncertainty" as a designer pain point (designer doesn't know if the maker is reliable). However, the reverse is equally true and underappreciated:

- A maker may **not want to accept an order for 100 custom toys** if they're unsure if the design will "turn out right"
- They're learning. They may feel more comfortable accepting a job with a smaller ask.
- This directly impacts how bids are presented and how makers gain experience.

**Strategic Implications:**
- Review system becomes critical for trust on **both** sides
- Could implement "test order" or "beginner-friendly job" markers
- Reputation system needs to value maker feedback equally to designer feedback

---

### Direct Sales: Selling "Made Items" on PDAC

Idea: Printadactyl isn't just a bidding marketplace — **it can also sell directly-made items**.


**Example from Amanda:**
> "I should make some coloring page downloads and list my own signs for sale, duh! But make them dinosaur signs."

**Strategic Implications:**
- **Immediate inventory:** Seeds the marketplace with content, fights the chicken-and-egg problem
- **Brand showcase:** Dinosaur-themed items make it on-brand and fun
- **Early revenue:** Direct sales can bootstrap the platform before commission revenue kicks in
- **Execution:** Could be a "Shop" or "Inventory" tab, separate from the job bidding marketplace. Could even be "PDAC Originals"

---

### Future Reach — Inspirational Verticals

Beyond typical consumer goods (shirts, stickers, 3D prints), potential expansion areas:


| Vertical | Description | Considerations |
|----------|-------------|----------------|
| **Aging Automobile Parts** | Custom fabrication for classic/rare cars | Niche but passionate community |
| **Accessible Mods** | Wheelchair modifications, prosthetics | Socially impactful, requires precision/quality |
| **Open Source Materials** | Community-driven design sharing | Fosters trust and differentiation |

These positions Printadactyl as a **platform for custom fabrication and problem-solving**, not just consumer goods.


---

### Education, Workshops & Grants

Ecosystem-building ideas:

| Concept | Description | Execution |
|---------|-------------|----------|
| **Online Workshops** | Teaching users how to design, use printers, run a print business | Scalable, can be paid or free |
| **Local Workshops** | If user base grows organically in regions, foster in-person communities | Depends on organic regional growth |
| **Courses** | More structured teaching jobs — "design for beginners", "sublimation 101" | Integrates with workshops |
| **Sponsorships/Scholarships/Grants** | Support new designers or makers, lower barriers to entry | Partnership opportunities, grant funding |

**Strategic Implications:**
- Transforms PDAC from **transactional marketplace** to **community hub**
- Long-term differentiator — competitors are just transaction platforms
- Could generate revenue through course fees, sponsorships, or simply increased platform engagement


---

### Takeaways from This Session

1. **Quality uncertainty is bidirectional** — platform design must account for maker risk tolerance
2. **Direct sales** are the most immediately actionable idea — seeds marketplace + brand building
3. **Community/Education** is the biggest long-term differentiator — think beyond transactions
4. **Specialized verticals** (auto, accessibility) are aspirational but differentiation opportunities

---

*To be continued...*


*Last updated: 2026-10-02*


---

## Second Brainstorming Session — Profiles, Shops & AI Sketch (2026-10-02)

*Documented: 2026-10-02*

---

### Amanda's Role in PDAC

Amanda's vision for her own role:
- **Ideal position:** Owner, marketer, operator — but definitely also a user
- **Maker philosophy:** Wants to make *what she wants*, not what the platform dictates
- **Implication:** Platform should support the "passionate hobbyist maker" persona, not just the "compete-on-price-and-speed" commercial print shop persona

---

### Ideator Role Clarified

The `ideator` role (added in commit `4706f59`, replacing `explorer`) is now better defined:
- An ideator knows they need an object because they have a problem, but doesn't know how to design it
- Can articulate a need, maybe draw a rough sketch, but lacks technical design skills
- The `job_type='full'` field is a partial solution — needs more support
- **Implication:** This role is underserved and could be a real wedge into the market if supported better

---

### AI Sketch-to-Design Feature (V2/V3)

**Concept:** Ideator sketches rough idea → AI generates refined concepts → ideator picks favorite → uses as basis for job post

**V1 status:** Deferred. Amanda said "do not be hasty" — correctly identified that this is too detailed for first launch.

**Why deferred:**
- **Technical complexity:** Requires AI API integration, custom UX for sketching, image generation handling, integration into job posting flow
- **User experience:** The UX for sketching, getting AI interpretations, and refining them into a job spec would be complex to get right
- **Cost:** AI API calls often incur costs per generation
- **Development time:** Would consume significant resources needed for core marketplace functionality

**V2/V3 vision — "Ideator Tools" section:**
- Ideator draws rough sketch on canvas
- Writes description (e.g., "a cute dinosaur holding a sign that says 'Rawr!'")
- Selects materials/style preferences
- AI generates several concept images
- Ideator selects favorites, refines, uses as basis for job post
- Job clearly indicates it started from an AI concept; generated images attached

**Recommendation:** V1 focuses on core marketplace mechanics. AI sketch feature is a powerful differentiator for V2/V3.

---

### Shop vs. Showcase — The Etsy Pain Point

**The friction Amanda identified:**
- Etsy limits images outside of listings
- No real portfolio/showcase capability for makers
- This is a real differentiator opportunity for PDAC

**Two modes concept:**

| Mode | Purpose | Engagement |
|------|---------|------------|
| **Shop** | Active commerce — items with prices, buy buttons | High (generates sales) |
| **Showcase** | Portfolio only — examples, past work, inspiration | Low (passive retention) |

**Why both modes matter:**
- Without showcase: makers lose a reason to stay beyond active commerce
- Showcase becomes the **differentiation that gets makers to stay**
- Balances active engagement with passive retention

---

### Showcase Mode Details (Final Design)

**Filtering:**
- Search/profile browse should have a "Showcase only" toggle/switch
- When filtered, becomes an **inspiration-only board**

**Display rules in showcase mode:**
- Images only
- Maker name (clickable, for credit)
- No pricing, no shop codes, no shop names

**Maker Profile Page (clickable name lands here):**
- Bio
- Full showcase gallery
- Contact info
- **Required buttons:**
  - **Share My Idea** — primary action for ideators/designers visiting the profile
  - **View full shop** — escapable option (viewer's choice, not forced)
  - **View similar** — tag-based grouping (e.g., "show me other dinosaur signs")

**Profile flow:**
1. Viewer browses showcase-only mode (inspiration board)
2. Sees item they like, clicks maker name
3. Lands on full maker profile with bio, gallery, contact
4. Two paths: **Share My Idea** (creates inquiry/job draft) or **View full shop** (sees commerce items)

---

### "Share My Idea" Feature

**Concept:** Non-bid inquiry mechanism on maker profiles

**Flow:**
1. Ideator/designer browses showcases
2. Finds maker they like, clicks name → lands on profile
3. Clicks **Share My Idea**
4. Sends rough concept/idea directly to that maker (not a formal job post)
5. Maker receives notification, views idea
6. Maker can: **bid on it** (turns into formal job) OR **decline/not respond**

**Why this matters:**
- Creates personal connection before commerce
- Lower friction than posting a public job
- Builds maker engagement (they're being sought out, not just receiving bids)
- Supports the ideator who has a problem but no formal spec yet

---

### Monetization Strategy (V1)

**Commission-based only for V1:**
- **Standard rate: 15%** on completed jobs
- Free basic profiles for all makers
- Free "Showcase" section (passive retention, brand building)
- Direct "Shop" sales: commission-based like jobs (simplest model)
- **No upfront fees, no subscriptions in V1** — let makers experience value first

**Why commission-first:**
- Lowest barrier to entry for makers
- Aligns platform success with maker success
- Doesn't require complex subscription/payment infrastructure upfront
- Easier to explain to new users

---

### Accessibility Mods — Values-Driven

- Amanda didn't come from market research — it's values-driven ("I'd love to help people")
- This means when accessibility features arrive, they'll be authentic, not strategic
- **Architectural consideration:** Could add structured spec fields to jobs now (dimensions, weight capacity, materials) that work fine for shirts but also serve accessibility mods later
- **When:** Later phase, but with forethought

---

### Engagement vs. Retention Balance

Amanda's concern: "Don't want profiles/showcases that aren't generating engagement."

**Resolution:** Showcase mode *is* the engagement — it's inspiration browsing for ideators. As long as showcases are actively browsable and "Share My Idea" creates connections, they're generating engagement, not just sitting dormant.

**Key:** Showcase must be discoverable and filterable, not buried.

---

### Active vs. Deferred Features

**V1 (Current focus):**
- ✅ Core marketplace mechanics (jobs, bids, profiles)
- ⏳ Shop + Showcase dual mode (basic version)
- ⏳ "Share My Idea" button on profiles
- ⏳ Maker profile pages with bio + showcase
- ⏳ Commission-based monetization only

**V2/V3 (Deferred):**
- AI sketch-to-design for ideators
- Workshops/courses
- Grants/sponsorships
- Accessibility vertical features
- Specialized search by tags

---

## Summary of Strategic Direction (as of 2026-10-02)

Printadactyl is positioned to be:
1. **A two-sided bidding marketplace** for custom printing (core)
2. **With a maker retention layer** via Shop + Showcase dual mode
3. **And a low-friction ideator entry path** via "Share My Idea" + future AI sketch tools
4. **Differentiated from Etsy** by maker portfolios/showcases that don't limit imagery
5. **Monetized via commission**, not upfront fees
6. **Values-driven**, with accessibility as authentic long-term aspiration

The "Airbnb of printing" vision holds — adding a maker retention layer and ideator-friendly features makes it more than just a transaction platform.

### October 3, 2026 — Mossy Hill WiFi Bridge Complete ✅

The PowerBeam M2 wireless bridge between Blue House and Mossy Hill is fully operational.

**What was done:**
- Two PowerBeam M2 units configured (AP mode at Blue House, Station mode at Mossy Hill)
- TP-Link BE3600 WiFi 7 router added at Mossy Hill (configured in AP mode)
- Network SSID "BHAP" broadcasting from Blue House
- Full internet connectivity now available at Mossy Hill

**Files updated:**
- `memory/powerbeam-m2-bridge.md` — Cleaned up with dates + config summary

---

*Last updated: 2026-10-03*

### October 3, 2026 — Pre-Festival Updates

**Arts festival launch prep — multiple fixes deployed:**

**1. Forgot Password Flow**
- Added "Forgot password?" link to login page
- Created `/forgot-password` page with Supabase email reset
- Created `/reset-password` page for password update
- Fixed Site URL in Supabase (was localhost:3000 → printadactyl.com)

**2. Contact Page**
- Created `/contact` page (was 404)
- Added email: hello@printadactyl.com
- Added "Coming soon" notes for Discord and other platforms
- Removed GitHub link (not for public display)

**3. Dynamic Stats**
- Replaced hardcoded fake numbers with real-time DB queries
- Stats now show: Jobs Posted, Active Designers, Active Makers
- Queries `jobs` table count, `profiles` table with role filtering
- Removed "Printed Value" (showed $0, too负面)

**4. Header/Footer Cleanup**
- Removed duplicate navigation links from layout.tsx
- Header component now handles all nav (Browse Jobs, Post a Job, Dashboard, Login/Logout)
- Clean, non-redundant header

**Files changed:**
- `app/login/page.tsx` — Added forgot password link
- `app/forgot-password/page.tsx` — NEW
- `app/reset-password/page.tsx` — NEW
- `app/contact/page.tsx` — NEW
- `components/Stats.tsx` — NEW
- `app/page.tsx` — Replaced static stats with dynamic component
- `app/layout.tsx` — Removed duplicate nav links

**Technical notes:**
- Supabase Site URL must be set to `https://printadactyl.com` for password reset emails to work
- Use `npx vercel --prod --force` for deployments (auto-deploy on git push not catching changes reliably)

---

### October 3, 2026 — Comments Table + Pre-Festival Review

**Comments system added + RLS security audit**

**Comments table:**
- Created `public.comments` table (id, job_id, user_id, body, created_at)
- Any authenticated user can post on any job
- Users can edit/delete their own comments
- Public SELECT (all comments visible on job detail page)

**RLS security audit finding:**
- UPDATE was wide-open (no RLS policy → any user could edit any comment)
- DELETE policy existed (author-only) — already correct
- **Fix applied:** Added `CREATE POLICY "Users can update their own comments"` (auth.uid() = user_id)
- Schema synced to `supabase/schema.sql` for reproducibility

**Section A — Core Functionality Review (A1-A7):**

| # | Question | Status |
|---|----------|--------|
| A1 | Signup persists | ✅ Verified (1 profile in DB) |
| A2 | Job posting saves | ✅ Verified (1 job in DB) |
| A3 | Bid submission | ✅ Code + RLS secure |
| A4 | "full" job type | ⚠️ Field exists, behavior unverified |
| A5 | Job detail page | ⚠️ Code fixed locally, deployed may be outdated |
| A6 | Header Login/Logout | ⚠️ Visual inconsistency (logout text hard to read) |
| A7 | Settings update | ⚠️ Code exists, needs live test |

**Section Z — Onboarding & Empty States (brainstormed, not built):**

- **Z1** — Dashboard empty states with profile completion banner
- **Z2** — Jobs with no bids → CTA card + login prompt
- **Z3** — Maker profile nudges with completion status bar
- **Z4** — Empty jobs list with sleeping dino SVG
- **Z5** — Optional role selection + welcome modal + onboarding checklist
- **Z6** — Share job button with `?ref=user_id` referral tracking

**Section B — Missing Features (brainstormed, not built):**

- **B1 — File upload** — Build ASAP. Supabase Storage bucket, file types (STL, OBJ, PNG, PDF), any signed-up user can upload. Size limits ~25-50MB.
- **B2 — Direct messaging** — Build. One conversation thread per job. Initial message from bid notes. Real-time + email notifications. ~5 hours effort.
- **B3 — Email notifications** — Build. Welcome email via Zoho SMTP. Bid/message/comment notifications tied to B2.
- **B4 — Stripe Connect** — Account setup needed (slow verification process). Don't wait — start now for festival readiness.
- **B5 — Maker profiles** — Build. Add bio, avatar (upload to Storage), portfolio_url to profiles table. Custom portfolio_link per bid remains.

**Priority for festival launch:**
1. 🔴 B1 File upload
2. 🔴 B4 Stripe account creation
3. 🟡 B2 Messaging
4. 🟡 B3 Email notifications
5. 🟡 B5 Maker profiles

---

*Last updated: 2026-10-03 16:30 UTC*

## Pre-Festival Brainstorm Sections C, D, F (2026-10-03/04)

### Section C: Broken Links & Navigation
- **C1:** Contact page 404 confirmed by user. Awaiting external test confirmation from my side.
- **C2:** Other broken routes noted as requiring official test later.
- **C3:** Login/Logout UI — mutually exclusive display confirmed. Buttons top-right, adjacent to Dashboard when logged in. Logout button styled green/dark to match Login (not gray-on-dark).

### Section D: Trust & Social Proof

**D2 — Reviews:**
- Dual auto-flag triggers: 2/5 negative reviews OR 2 consecutive negative reviews.
- Bidirectional reviews displayed on job pages and user profiles.
- Edit window: 30 days, 2 edits max, "edited" badge visible, original hidden.
- Character limit: 500 characters.
- Reply/Report features included; Amanda moderates reports.
- No option to hide reviews; all reviews public.
- Security: Input sanitization, RLS, profanity filter, no URLs in initial pass.
- Reviewers: Designer↔Maker, Ideator↔Maker (all transactional parties).

**D3 — Portfolios:**
- Photo uploads concurrent with other upload features (B1).
- Profile sections: Designs, Makes, Requests (collapsible, role-relevant).
- 6 photos total for free users (1 reserved for avatar).
- 3 photos visible to logged-out guests (of the 6).
- Individual listings/jobs can include additional photos beyond the 6.
- Showcase mode = public-facing mode (logged-out); same mode, different audience.

**D4 — Trust Markers (Prioritized):**
1. Stripe Connect KYC — High
2. Average rating + count — High
3. Account age — High
4. Maker portfolio with photo uploads — High
5. Completed jobs count — Medium
6. Email verified — Medium
7. Profile completion % — Low
- Watch-out flag: REMOVED per user direction.

**Stripe Integration Timing:**
- Recommended to implement AFTER core features (reviews, navigation, uploads) are stable.
- Stripe verification (SSN/business info) is the slow part — start account setup ASAP.

### Section F: User Onboarding

**F1 — Signup Flow:**
- New users land on Dashboard with Welcome tour/modal.
- Not built yet, only planned.
- Welcome tour = welcome banner = welcome modal = video tour (all the same thing).

**F2 — Public Job Browsing:**
- `/jobs` accessible logged-out.
- Limited public view: no names, no costs/bids, no comments.
- Goal: drive signups via curiosity/engagement.
- "Tease" model — show enough to entice, hide enough to require signup.

**F3 — Logged-Out `/post-job`:**
- Redirect to login/signup.
- Modal or banner: "Sign up to view jobs and bid" / "Sign up to view maker portfolio".
- Spam prevention: unverified emails already a risk; logged-out posting blocked.

**F4 — Public Maker Profiles:**
- Showcase mode = public-facing mode for logged-out users.
- Limited: 3 photos max for guests (of 6 total).
- Logged-in users see toggleable views: Showcase / Shop / Made (w/ reviews) / All.
- Same portfolio layout, viewer controls visibility depth.
- Always prompted to sign up to see more, bid, view portfolios.

**F5 — Roles:**
- Currently: metadata only, not acted on by UI.
- Future: profiles sort/categorize by role (makes, designs, purchases, reviews).
- All options available to all users — no capability restriction.
- Lead-cater on signup: guide, don't restrict (toast notifications for soft nudges).
- All settings changeable later.

### Cross-Section Decisions
- Welcome tour/modal confirmed as single feature (Z5 + F1 alignment).
- Showcase mode = public-facing AND retention mode — same name, viewer controls depth.
- All section decisions to be cross-checked at Z for consistency.

### Next Steps
- Sections A, B, C, D, F captured.
- Section E pending.
- Sections G–Z remaining.
- Final comparison pass at Z completion.

### Pre-Festival Brainstorm Sections G, I, J (2026-10-04 — partial, in progress)

**Section J — Deferred Features (partial):**
- J2: Shop vs Showcase — CONFIRMED unified "Showcase mode" (same name for public-facing and maker retention; viewer state controls depth).
- J3: AI sketch-to-design — V2/V3 deferred, still correct, not V1 scope.
- J1: "Share My Idea" — open, awaiting clarification (V1 priority or push to V2?).

**Section G — Competitive/Marketing:**
- G1: Differentiation pillars documented (two-sided marketplace, maker retention, ideator-friendly, Etsy differentiation, 15% commission, accessibility aspiration). Need #1 pitch + 30-second elevator version — open.
- G2: No-maker-available response strategy — open.
- G3: Material categories live vs. placeholder — open.
- G4: Platform-wide turnaround vs. per-bid timing — open.

**Section I — Technical/Infrastructure:**
- I1–I4: All open — can verify via read-only queries if authorized, otherwise note as "requires verification".
