# Printadactyl: Complete Project Blueprint

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [What Printadactyl Is](#what-printadactyl-is)
3. [The Problem We're Solving](#the-problem-were-solving)
4. [The Solution](#the-solution)
5. [What We Have Today](#what-we-have-today)
6. [What We DON'T Have](#what-we-dont-have)
7. [What We Need to Build](#what-we-need-to-build)
8. [Technical Architecture](#technical-architecture)
9. [Brand & Identity](#brand--identity)
10. [Market Analysis](#market-analysis)
11. [Revenue Model](#revenue-model)
12. [Risks & Challenges](#risks--challenges)
13. [3 Detailed Next Steps](#3-detailed-next-steps)
14. [Phased Roadmap](#phased-roadmap)
15. [Open Questions](#open-questions)

---

## Executive Summary

**Printadactyl** is a print-on-demand marketplace built around a **bidding model** — the first platform of its kind where designers post print jobs and multiple makers compete with bids, giving designers better prices through competition.

- **Current State:** Domain + Email + Static landing page (no backend)
- **Tech Stack:** Static HTML/CSS on Vercel (no database, no auth)
- **Goal:** Build the MVP bidding marketplace
- **Differentiator:** No other platform does print-on-demand bidding

---

## What Printadactyl Is

Printadactyl is a **two-sided marketplace platform** connecting:

### The Two Sides

1. **Designers** — People with ideas who need things printed
   - Have designs but no printing equipment
   - Need custom prints: shirts, 3D objects, banners, stickers, vinyl
   - Don't want to hunt down vendors or manage a print shop
   - Want competitive pricing through competition

2. **Makers** — People with printing equipment who want work
   - Have printers, sublimation machines, vinyl cutters, etc.
   - Don't want to run marketing/sales themselves
   - Want a steady stream of jobs without cold outreach
   - Want to compete on price, speed, and quality

### The Core Mechanic: Bidding

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

### Why "Printadactyl"?

- **-dactyl** = finger/toe (Greek) → pterodactyl, but for printing
- **Print** + **dactyl** = "prints for fingers" (like holding a printed thing)
- Fun, memorable, unique, dinosaur-themed
- Stands out from generic names like "PrintHub" or "PrintMarket"

---

## The Problem We're Solving

### Designer Pain Points

| Pain Point | Description | Current Alternative |
|------------|-------------|-------------------|
| **No easy way to find printers** | Designers don't know where to find reliable print vendors | Google search, Reddit, ask in communities |
| **Fixed pricing** | Every POD platform has set prices — no negotiation | Etsy, Printful, Printify |
| **No competition** | Can't compare prices across multiple makers | Can't — platforms are single-vendor |
| **Minimum orders** | Most require bulk minimums | Printful typically 10+ units |
| **No custom specs** | Must use platform templates only | Limited customization |
| **Quality uncertainty** | No way to vet a printer's quality beforehand | Blind ordering, crossed fingers |

### Maker Pain Points

| Pain Point | Description | Current Alternative |
|------------|-------------|-------------------|
| **Marketing burden** | Must find customers themselves | Instagram, Etsy, word of mouth |
| **No steady work** | Feast or famine, periods with no orders | Build personal brand (time-consuming) |
| **Fixed fees** | POD platforms take large cuts, no negotiation | Printful/Printify take 10-30% |
| **Competition on price only** | Can't differentiate on turnaround or quality | Race to the bottom |
| **No portfolio showcase** | Hard to show past work to prospects | Basic Etsy shop, social media |
| **Payment risk** | Client may not pay after delivery | Pay upfront (loses customers) |

### The Gap in the Market

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

## The Solution

Printadactyl creates a **bidding marketplace** where:

### For Designers

- **Post a job** in minutes: material, quantity, deadline, specs, budget
- **Compare bids** from multiple makers side-by-side
- **Pick the winner** based on price, turnaround, portfolio
- **Pay securely** through the platform (escrow)
- **Communicate** directly with the maker
- **Leave reviews** to build maker reputation

### For Makers

- **Browse available jobs** that match your capabilities
- **Submit bids** with your price, turnaround, and samples
- **Build a profile** with portfolio, specialties, ratings
- **Get paid securely** — no ghosting, platform guarantees payment
- **Grow your reputation** through reviews

### The Platform Value

- **For designers:** Better prices through competition, guaranteed quality
- **For makers:** Steady work stream, passive lead generation
- **For us:** Commission on every completed job (10-20%)

---

## What We Have Today

### 1. Domain ✅

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

### 2. Email System ✅

| Property | Value |
|----------|-------|
| **Email** | amandatedeschi@printadactyl.com |
| **Provider** | Zoho Mail (Free tier) |
| **Status** | Verified, working |
| **Access** | https://mail.zoho.com |
| **Limitations** | 5 users, 5GB storage, free tier branding |

**Test Results:** Confirmation emails sent successfully. Deliverability confirmed.

### 3. Landing Page ✅

| Property | Value |
|----------|-------|
| **URL** | https://printadactyl.vercel.app |
| **Tech** | Static HTML/CSS |
| **Backend** | None yet |
| **Status** | Deployed, live |

**Features Implemented:**
- Animated dark theme with dinosaur theme
- 3-step "How it works" flow (Post → Bid → Pick)
- Designer/Maker split with CTA buttons
- Floating pterodactyl SVG animation
- Responsive design

**Limitations:**
- Buttons lead nowhere (`href="#"`)
- No actual functionality
- No forms, no data collection
- No database connection

### 4. GitHub Repository ✅

| Property | Value |
|----------|-------|
| **URL** | https://github.com/CuriousCornucopious/printadactyl |
| **Owner** | CuriousCornucopious |
| **Status** | Active, version controlled |
| **Files** | index.html, README.md, ROADMAP.md, .env.local |

**Repository Contents:**
- `/index.html` — Main landing page
- `/README.md` — Basic readme
- `/ROADMAP.md` — High-level roadmap
- `/.env.local` — Environment variables (local only)

### 5. Vercel Project ✅

| Property | Value |
|----------|-------|
| **Project ID** | prj_S0naNwpnRnGPx9QJE0q34oEpaUXZ |
| **Deployment** | Automatic from GitHub |
| **Status** | Deployed |
| **Build** | Static HTML |

---

## What We DON'T Have

### User System ❌

| Missing | Impact |
|---------|--------|
| **No user accounts** | Can't sign up as designer or maker |
| **No authentication** | No login, signup, password reset, OAuth |
| **No profiles** | No maker portfolios, designer dashboards |
| **No user data** | Everything is anonymous, no personalization |

### Core Marketplace Features ❌

| Missing | Impact |
|---------|--------|
| **No job posting** | Designers can't submit print requests |
| **No bid submission** | Makers can't bid on jobs |
| **No job listing** | No feed of available print jobs |
| **No messaging** | Can't communicate between parties |
| **No file upload** | Can't upload STL/OBJ/design files |
| **No notifications** | No email/push when bids come in |

### Transaction System ❌

| Missing | Impact |
|---------|--------|
| **No payments** | No checkout, no Stripe integration |
| **No escrow** | No fund holding during job |
| **No commission calculation** | No revenue generation |
| **No order tracking** | Can't track shipping |
| **No invoicing** | No automatic invoices |

### Rating/Review System ❌

| Missing | Impact |
|---------|--------|
| **No reviews** | No trust mechanism |
| **No ratings** | No reputation system |
| **No dispute resolution** | No mediation when things go wrong |

### Search & Discovery ❌

| Missing | Impact |
|---------|--------|
| **No search** | Can't find jobs by material/price/deadline |
| **No filters** | Can't filter by 3D prints vs apparel |
| **No categories** | No material type browsing |
| **No maker profiles** | Can't browse maker portfolios |

### Admin Panel ❌

| Missing | Impact |
|---------|--------|
| **No dashboard** | No stats, no overview |
| **No moderation** | Can't review flagged content |
| **No analytics** | No view counts, bid activity |

---

## What We Need to Build

### Phase 1: The MVP (Must Have)

| Feature | Priority | Description |
|---------|----------|-------------|
| **User Auth** | P0 | Sign up, login, password reset (designers + makers) |
| **Designer Dashboard** | P0 | Post jobs, view my jobs, manage bids |
| **Maker Dashboard** | P0 | Browse jobs, submit bids, manage my bids |
| **Job Posting Form** | P0 | Title, description, material, quantity, deadline, budget, file upload |
| **Job Feed** | P0 | List of open jobs for makers to browse |
| **Bid Submission** | P0 | Price, turnaround time, portfolio link, notes |
| **Bid Review** | P0 | Designer sees all bids, compares, picks winner |
| **Database** | P0 | Store users, jobs, bids |
| **File Storage** | P0 | Upload design files (S3 or Supabase Storage) |

### Phase 2: Core Marketplace (Should Have)

| Feature | Priority | Description |
|---------|----------|-------------|
| **Messaging** | P1 | In-app chat between designer and maker |
| **Escrow Payments** | P1 | Hold funds, release on completion |
| **Stripe Integration** | P1 | Connect for payouts to makers |
| **Maker Profiles** | P1 | Public profile with portfolio, specialties, ratings |
| **Basic Search** | P1 | Search jobs by keyword |
| **Filters** | P1 | Filter by material, price range, deadline |
| **Email Notifications** | P1 | Alerts for new bids, messages, job updates |

### Phase 3: Trust & Reputation (Nice to Have)

| Feature | Priority | Description |
|---------|----------|-------------|
| **Reviews** | P2 | Post-completion ratings and reviews |
| **Dispute Resolution** | P2 | Mediate when designer/maker disagree |
| **Portfolio Gallery** | P2 | Makers showcase past work |
| **Verification Badges** | P2 | Verified maker badges |

### Phase 4: Scale (Future)

| Feature | Priority | Description |
|---------|----------|-------------|
| **Maker Subscriptions** | P3 | Featured listings, priority bids |
| **Bulk Orders** | P3 | Support for large quantity jobs |
| **Auto-Matching** | P3 | Route jobs to best-fit makers automatically |
| **Material Specializations** | P3 | Dedicated sections for 3D, apparel, vinyl, etc. |

---

## Technical Architecture

### Current vs. Needed

| Layer | Current | Needed |
|-------|---------|--------|
| **Frontend** | Static HTML | React / Next.js |
| **Backend** | None | API Routes (Next.js API) |
| **Database** | None | PostgreSQL (Supabase) |
| **Auth** | None | Clerk or Supabase Auth |
| **File Storage** | None | Supabase Storage or AWS S3 |
| **Payments** | None | Stripe Connect (marketplace) |
| **Email (Transactional)** | Zoho (incoming) | Resend or SendGrid |
| **Email (Incoming)** | Zoho Mail | Already set up |

### Recommended Stack (MVP)

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

### Database Schema (Conceptual)

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

## Brand & Identity

### Brand Attributes

| Attribute | Value |
|-----------|-------|
| **Name** | Printadactyl |
| **Tagline** | "Your ideas, printed." |
| **Vibe** | Fun, playful, tech-forward, accessible, dinosaur-themed |
| **Audience** | Designers (creatives, entrepreneurs), Makers (print shop owners, hobbyists) |
| **Tone** | Welcoming, professional but not stuffy, slightly playful |

### Visual Identity

| Element | Current State |
|---------|---------------|
| **Logo** | Only exists as floating pterodactyl SVG animation on landing page |
| **Color Palette** | Dark theme with neon green/purple accents (needs formal spec) |
| **Typography** | Default system fonts (needs formal spec) |
| **Components** | None built yet — needs design system |
| **Favicon** | Likely default Vercel favicon |

### Email Identity

| Element | Value |
|---------|-------|
| **Domain** | @printadactyl.com |
| **From Name** | Printadactyl |
| **Reply-To** | amandatedeschi@printadactyl.com |
| **Verification** | SPF/DKIM set up via Zoho |

---

## Market Analysis

### Total Addressable Market (TAM)

- Global print-on-demand market: **$4.9 billion** (2024)
- Expected growth: **25.4% CAGR** through 2030
- 3D printing market alone: **$26.5 billion** by 2030

### Serviceable Addressable Market (SAM)

- Custom apparel printing: $1.2B
- 3D printing services: $800M
- Signage/banners: $600M
- Stickers/vinyl: $300M

### Serviceable Obtainable Market (SOM)

- Conservative: 0.1% in year 1 = $2.9M potential GMV
- Realistic: 0.5% by year 3 = ~$15M GMV
- At 15% commission = $2.25M revenue

### Competitive Landscape

| Platform | Model | Strengths | Weaknesses |
|----------|-------|-----------|-------------|
| **Etsy** | Fixed price + marketplace | Huge traffic, established trust | No POD focus, no bidding |
| **Printful** | POD fulfillment | Quality, reliability | Fixed prices, you set margin |
| **Printify** | POD marketplace | Many suppliers, dropshipping | Fixed prices, race to bottom |
| **Shapeways** | 3D printing | Was the leader | Pivoted away, enterprise focus |
| **MakerWorld** | 3D community | Bambu ecosystem | Locked to Bambu Lab hardware |
| **Fiverr** | Services marketplace | Bidding model exists | Not print-focused, generic |
| **Printadactyl** | Bidding POD marketplace | First of its kind | Need to build everything |

### Key Differentiator

**Printadactyl is the ONLY platform that combines:**

1. Print-on-demand specific
2. Bidding/competition model
3. Two-sided marketplace
4. No inventory for either party
5. Focus on custom one-off and bulk jobs

---

## Revenue Model

### Primary: Commission

| Tier | Rate | Conditions |
|------|------|------------|
| **Standard** | 15% | Default rate |
| **Volume** | 12% | $10,000+ in completed jobs |
| **Premium** | 10% | $50,000+ in completed jobs |

**Example:**
- Job total: $300
- Platform takes: $45 (15%)
- Maker receives: $255

### Secondary: Featured Listings

| Feature | Price | Duration |
|---------|-------|----------|
| **Sticky job** | $5 | 7 days at top of feed |
| **Featured maker** | $15/month | Promoted in search results |
| **Highlight bid** | $3 | Stand out in bid list |

### Tertiary: Subscriptions (Future)

| Plan | Price | Features |
|------|-------|----------|
| **Maker Basic** | Free | Standard bidding |
| **Maker Pro** | $19/month | 10 featured bids/month, analytics |
| **Maker Enterprise** | $49/month | Unlimited featured, priority matching, API access |

### Revenue Projections (Year 1)

| Month | Active Jobs | Avg Job Value | GMV | Revenue (15%) |
|-------|-------------|---------------|-----|---------------|
| 1 | 5 | $200 | $1,000 | $150 |
| 3 | 20 | $250 | $5,000 | $750 |
| 6 | 50 | $300 | $15,000 | $2,250 |
| 12 | 150 | $350 | $52,500 | $7,875 |

**Year 1 Revenue:** ~$40,000 (optimistic scenario)
**Break-even:** ~300 active jobs/month

---

## Risks & Challenges

### Market Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| **Chicken and egg** — No makers without jobs, no jobs without makers | High | High | Seed with fake jobs, offer maker incentives, manually recruit |
| **Low volume** — Not enough jobs to attract makers | High | High | Aggressive marketing, partnership with design communities |
| **Price sensitivity** — 15% commission too high | Medium | Medium | Offer tiered rates, grandfather early makers |

### Technical Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| **Payment complexity** — Stripe Connect is complex | Medium | High | Use Stripe Connect expert, start with simple model |
| **File storage costs** — Large design files expensive | Low | Medium | Limit file sizes, use Supabase with bandwidth limits |
| **Database scaling** — Need to handle concurrent bids | Low | Low | Supabase handles this well |

### Operational Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| **Disputes** — Designers/makers disagree | Medium | Medium | Clear guidelines, escrow until completion, mediation |
| **Quality issues** — Bad prints, unhappy customers | Medium | High | Review system, verification badges, clear refund policy |
| **Fraud** — Fake bids, payment fraud | Low | High | Identity verification for makers, hold funds longer |

### Competitive Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| **Clone** — Big player adds bidding model | Low | High | First-mover advantage, community, brand loyalty |
| **Etsy/Printful adds bidding** | Low | High | Faster iteration, niche focus |

---

## 3 Detailed Next Steps

### Option A: Build the MVP — Designer Flow (Job Posting)

**What it entails:**

Build the complete core marketplace functionality, focusing on the designer experience first:

1. **Set up Supabase project**
   - Create new Supabase project
   - Set up database tables (users, profiles, jobs, bids)
   - Configure Row Level Security (RLS) policies
   - Set up storage bucket for design files

2. **Build authentication**
   - Sign up flow (designer/maker selection)
   - Login flow with email/password
   - Password reset flow
   - Profile creation (display name, bio for makers)

3. **Build designer "Post a Job" form**
   - Title input
   - Description textarea (rich text? markdown?)
   - Material type dropdown (3D print, shirt, banner, sticker, vinyl, other)
   - Quantity input
   - Deadline date picker
   - Budget range (min/max sliders or inputs)
   - File upload (drag & drop, support STL, OBJ, PNG, SVG, PDF)
   - Preview and submit

4. **Build job listing feed for makers**
   - Grid/list view toggle
   - Pagination (20 per page)
   - Quick stats (bids count, time remaining)
   - Click to expand for full details

5. **Build bid submission for makers**
   - Price input
   - Turnaround time dropdown (days)
   - Notes textarea
   - Portfolio link input
   - Submit bid

6. **Build "Pick a Bid" interface for designers**
   - Side-by-side bid comparison
   - Sort by price (low/high), turnaround, newest
   - View maker profile (past jobs, rating if exists)
   - Accept bid button → changes job status

7. **Set up basic email notifications**
   - Welcome email on sign up
   - Notification email when bids received
   - Notification email when bid accepted

**Estimated Timeline:**

| Week | Tasks |
|------|-------|
| **Week 1** | Supabase setup, database schema, auth |
| **Week 2** | Designer dashboard, post job form |
| **Week 3** | File upload handling, storage |
| **Week 4** | Maker dashboard, job feed |
| **Week 5** | Bid submission flow |
| **Week 6** | Bid comparison, pick winner UI |
| **Week 7** | Email notifications |
| **Week 8** | Testing, bug fixes, polish |

**Total: 2 months (8 weeks)**

**Why lead with this:**

- This is the CORE value proposition — the bidding model is what makes Printadactyl unique
- Without job posting, there's nothing for makers to bid on
- Proves the concept: can designers and makers actually connect?
- Sets foundation for everything else (payments, ratings, messaging, admin)
- Easiest to demonstrate value to early users with a working prototype

**Why NOT lead with this:**

- Requires backend (database, auth) — adds significant complexity
- If the UI is too basic, won't attract makers to check back
- Need to seed with some initial jobs to look alive (chicken and egg)
- Risk: building something nobody uses if no one posts first
- Longest development time of the three options

**Benefits:**

- Directly tests the core hypothesis
- Enables first actual marketplace transactions
- Creates a complete end-to-end flow we can demo
- Build once, iterate forever — foundational

**Risks:**

- Longest time to anything usable (8 weeks)
- Most complex — can get bogged down in edge cases
- Seed jobs problem — need to bootstrap the marketplace

**Key Dependencies:**

- Supabase setup and configuration
- File storage handling
- Email delivery (Resend or SendGrid)
- Stripe (for later, not MVP)

---

### Option B: Design System + Landing Page Polish

**What it entails:**

Build a professional brand foundation before adding functionality:

1. **Create complete logo**
   - Design actual logo (not just floating animation)
   - Full color + monochrome variants
   - Icon only for favicon/app icon
   - SVG + PNG export for all sizes

2. **Establish brand guidelines**
   - Color palette (primary, secondary, accent, background, text)
   - Typography (headings, body, UI elements)
   - Spacing system (4px base grid)
   - Component library (buttons, inputs, cards, modals)
   - Error/success/warning states

3. **Build reusable UI component library**
   - Button variants (primary, secondary, outline, ghost)
   - Input fields (text, textarea, select, date picker)
   - Form layouts (horizontal, vertical, inline)
   - Cards (job card, bid card, profile card)
   - Navigation (header, sidebar, tabs)
   - Modals (confirmation, form, alert)
   - Loading states (skeleton, spinner)
   - Empty states (no jobs, no bids)

4. **Polish landing page to production quality**
   - Real Call-to-Action buttons (link to sign up)
   - About section
   - How it works detailed
   - Features breakdown
   - Testimonials section (placeholder or mock)
   - FAQ section
   - Footer with links
   - SEO optimization (meta tags, OG images)

5. **Create secondary pages**
   - Pricing page
   - About page
   - Contact page
   - (No actual forms yet, just static)

6. **Set up design system tooling**
   - Install Tailwind CSS
   - Configure custom theme in tailwind.config.js
   - Create component stories (optional: Storybook)
   - Document all components in README

**Estimated Timeline:**

| Week | Tasks |
|------|-------|
| **Week 1** | Logo design, brand guide (colors, typography) |
| **Week 2** | Component library (buttons, inputs, cards) |
| **Week 3** | Landing page polish (full CTA, sections) |
| **Week 4** | Secondary pages, SEO, final polish |

**Total: 1 month (4 weeks)**

**Why lead with this:**

- Creates professional first impression
- Makes future development faster (reuse components)
- Reduces technical debt from the start
- Important for user trust — a marketplace needs to look legitimate
- Lower risk — static HTML, can't break much

**Why NOT lead with this:**

- No actual functionality — still just a brochure
- Delayed testing of core hypothesis (bidding model)
- Could spend months perfecting design and never launch
- Risk: analysis paralysis, endless polish loops

**Benefits:**

- Professional brand from day one
- Faster future development (components ready)
- Attracts early users with credibility
- Lower technical risk
- Can launch quickly if needed

**Risks:**

- No revenue, no users, no validation
- "Pretty but empty" syndrome
- Spending time on polish before product-market fit
- Design can become a time sink

**Key Dependencies:**

- Figma or design tool
- Tailwind CSS setup
- Time for iteration on design

---

### Option C: Hybrid — Quick MVP + Design Polish

**What it entails:**

Build a minimal working prototype quickly, then polish:

1. **Week 1-2: Rapid MVP**
   - Supabase auth only (minimal fields)
   - Single job posting form (no file upload yet)
   - Simple job feed (no filters)
   - Basic bid form
   - In-app messaging (simple, no real-time)
   - Deploy early, test with real users

2. **Week 3: Design System (parallel)**
   - Tailwind setup
   - Core component library (buttons, inputs, cards)
   - Brand colors defined

3. **Week 4: Polish MVP**
   - Apply design system to MVP
   - Landing page polish
   - Add basic file upload

4. **Week 5-6: Payments & Features**
   - Stripe Connect (simplified)
   - Escrow flow
   - Email notifications
   - Search + filters

5. **Week 7-8: Testing & Launch**
   - Bug fixes
   - Seed data
   - User testing
   - Public launch

**Total: 2 months (8 weeks)**

**Why lead with this:**

- Fastest path to something users can try
- Combines benefits of A and B
- Iterate based on real feedback, not假设
- Design gets integrated naturally, not as a phase

**Why NOT lead with this:**

- Slightly more complex planning
- Might ship two "half-done" things instead of one polished thing
- Risk of scope creep

**Benefits:**

- Faster time to user feedback
- Design integrates naturally, not as afterthought
- Can pivot based on learnings
- More flexible

**Risks:**

- More complex coordination
- Might have some rough edges
- Two unfinished things vs one finished

---

## Phased Roadmap

### Phase 0: Foundation (Current)

- [x] Domain
- [x] Email
- [x] Landing page (static)
- [x] GitHub repo

### Phase 1: MVP (Option A)

- [ ] Supabase setup
- [ ] User auth
- [ ] Job posting
- [ ] Job feed
- [ ] Bid submission
- [ ] Bid comparison
- [ ] Email notifications

### Phase 2: Core Marketplace

- [ ] Messaging system
- [ ] Stripe Connect
- [ ] Maker profiles
- [ ] Search + filters
- [ ] Escrow payments

### Phase 3: Trust & Reputation

- [ ] Review system
- [ ] Dispute resolution
- [ ] Portfolio gallery
- [ ] Verification badges

### Phase 4: Scale

- [ ] Maker subscriptions
- [ ] Bulk order support
- [ ] Auto-matching
- [ ] Material categories

---

## Open Questions

### Critical Decisions

1. **Which auth provider?**
   - Supabase Auth (integrated, free)
   - Clerk (easier developer experience, free tier)
   - Custom (more control, more work)

2. **Which payments model to start with?**
   - Full Stripe Connect (complex, proper marketplace)
   - Simple invoice (generate invoice, manual payment)
   - Direct Stripe (less marketplace, more like freelance)

3. **What material types to start with?**
   - All of them (most flexible)
   - Just one (3D printing or apparel)
   - Three to start (3D, shirts, stickers)

4. **How to seed initial jobs?**
   - Manually create fake jobs
   - Recruit designers to post real jobs
   - Partner with design communities

5. **How to seed initial makers?**
   - Recruit from Reddit, Discord, local makers
   - Offer incentive (reduced commission first 10 jobs)
   - Partner with print shops

### Questions for Amanda

1. What's your budget for this project?
2. What's your timeline expectation?
3. Do you know any designers or makers to recruit as early users?
4. Do you want to handle marketing yourself, or should we plan for that too?
5. Is there a specific material type (3D, apparel, etc.) you want to focus on first?

---

## Summary

| Section | Key Takeaway |
|---------|--------------|
| **What it is** | First bidding-based POD marketplace |
| **What we have** | Domain, email, static landing page |
| **What we need** | Auth, database, job posting, bidding, payments |
| **MVP approach** | Option A = full build, Option B = polish first, Option C = hybrid |
| **Revenue** | 10-20% commission on jobs |
| **Key risk** | Chicken and egg (jobs vs makers) |
| **Differentiation** | No other platform does bidding + POD |

---

*Document created: 2026-09-28*
*Last updated: 2026-09-28*
*Owner: Amanda + OpenClaw*
