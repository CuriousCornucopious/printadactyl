# The Printadactyl Chronicle

*A journal of hatching an idea, building a marketplace, and chasing a dream.*

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
- Project URL: `https://znwjmtvkengxxfagowylv.supabase.co`
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

We're still on toggle buttons at this point in the story.

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

Fixed the build. Then changed from toggle buttons to **actual checkboxes** with "select all that apply" label.

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

**https://supabase.com/dashboard/project/znwjmtvkengxxfagowylv/sql**

She sees... tables already there? The `profiles` table with a `roles` column (array type). This suggests maybe a partial run happened earlier, or Supabase auto-created something.

The schema IS ready to go — just needs verification.

Supabase keys are already in Vercel. The connection should work.

**Next step:** Test signup for real.

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
| Database | Supabase — znwjmtvkengxxfagowylv.supabase.co |
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

*To be continued...*

*Last updated: 2026-10-01*
