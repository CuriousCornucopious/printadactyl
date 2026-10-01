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
- Project URL: `https://znwjmtvkengxxfagowyv.supabase.co`
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

**https://supabase.com/dashboard/project/znwjmtvkengxxfagowyv/sql**

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
| Database | Supabase — znwjmtvkengxxfagowyv.supabase.co |
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
