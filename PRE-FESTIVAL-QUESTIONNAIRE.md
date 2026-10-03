# PRINTADACTYL PRE-FESTIVAL QUESTIONNAIRE

*Last updated: 2026-10-03*
*Purpose: Comprehensive review before arts festival launch*

---

## SECTION A: CORE FUNCTIONALITY & DATA FLOW

**These questions verify the actual end-to-end functionality:**

| # | Question | Context/Details |
|---|----------|-----------------|
| **A1** | Does a user who signs up actually get persisted to the Supabase database? | Chronicle documents the schema and setup, but I haven't confirmed if signup → `auth.users` + `profiles` table works in production. |
| **A2** | When a designer posts a job, does it save to the `jobs` table and appear on the `/jobs` page? | We know jobs are showing, but is this seeded data or real user posts? |
| **A3** | Can a maker actually submit a bid on a job? Is the bid form functional? | The Chronicle shows bids are in the schema, but is the UI wired up? |
| **A4** | Does the "full" job type (design + printing) work, or is it just a form option with no special handling? | MEMORY.md notes `'full'` as a job type — is the distinction meaningful or cosmetic? |
| **A5** | Can users view individual job details at `/jobs/[id]`? | I couldn't verify this via web_fetch — does it load correctly for you? |
| **A6** | After logging in, does the dashboard show user-specific data (my jobs, my bids)? | MEMORY.md mentions dashboard exists — is it populated or empty? |
| **A7** | Does the Settings page (`/settings`) allow users to update their roles or profile info? | Chronicle notes it was added — is it functional? |

---

## SECTION B: MISSING FEATURES (Based on Documentation)

**These are explicitly documented as missing — need to clarify status:**

| # | Question | Context/Details |
|---|----------|-----------------|
| **B1** | Is there ANY way to upload design files (STL, OBJ, PNG, PDF) when posting a job? | Chronicle lists "No file upload" as missing — has this changed? |
| **B2** | Is there ANY messaging system for designer ↔ maker communication? | Chronicle explicitly defers this to V2 — is there any workaround? |
| **B3** | Are there email notifications for new bids, job status changes, or comments? | Chronicle says "No" — still true? |
| **B4** | Is there a payment or checkout flow? | Chronicle shows Stripe is Phase 2 — any interim solution? |
| **B5** | Can makers create profiles with bios, avatars, portfolio links? | Chronicle shows profile pages are deferred — any basic version? |

---

## SECTION C: BROKEN LINKS & NAVIGATION

**Confirmed issues I found vs. what you experience:**

| # | Question | Context/Details |
|---|----------|-----------------|
| **C1** | Is the Contact page truly a 404? | I confirmed via web_fetch that `/contact` returns "Page Not Found" — does this match what you see? |
| **C2** | Are there any other routes that 404 or break unexpectedly? | I couldn't test all routes — any you've hit that die? |
| **C3** | Does the navigation correctly show Login vs. Dashboard based on auth state? | Header shows both "Login" and "Dashboard" — is this a display bug or correct? |

---

## SECTION D: TRUST & SOCIAL PROOF

**Questions about signals that matter to new users:**

| # | Question | Context/Details |
|---|----------|-----------------|
| **D1** | What happens when someone asks "how many jobs/makers are on here?" | Landing page shows "500+ Jobs, 200+ Makers" — are these real or fake? Should we be honest? |
| **D2** | Is there ANY review, rating, or reputation system? | Chronicle shows this is Phase 3 — none yet? |
| **D3** | Can users see maker portfolios or past work? | Chronicle defers this — is there ANY showcase capability? |
| **D4** | What makes a maker "verified" or trustworthy? | No badges, no verification — how do designers vet makers? |

---

## SECTION E: LEGAL & PAYMENTS

**Your explicit concerns — need to clarify current state:**

| # | Question | Context/Details |
|---|----------|-----------------|
| **E1** | If someone pays "outside" the platform (Venmo, PayPal manually), is that allowed? What does the Terms say? | You mentioned not wanting outside payment — is it explicitly prohibited, allowed, or silent? |
| **E2** | Is there any Terms of Service or Privacy Policy page? Do they contain meaningful legal language? | Chronicle notes generic pages exist — are they empty or substantive? |
| **E3** | Is there any escrow or fund holding mechanism? | Chronicle shows Stripe Connect is future — is there any payment handling at all? |
| **E4** | How does the platform enforce the 15% commission? | Without payment integration, how is commission collected? |

---

## SECTION F: USER ONBOARDING

**Questions about the first-time user experience:**

| # | Question | Context/Details |
|---|----------|-----------------|
| **F1** | When a new user signs up, what do they see/do next? Is there a guided onboarding? | No documented onboarding flow — what actually happens? |
| **F2** | Can a user browse jobs without signing up? | Does `/jobs` require login or show publicly? |
| **F3** | What happens if someone visits `/post-job` while logged out? | Does it redirect, show a prompt, or allow browsing? |
| **F4** | Is there a "guest" or "public" profile view for makers? | Can I see who a maker is without being logged in? |
| **F5** | What's the difference between the three role options (Design/Make/Ideate) in practice? | Chronicle documents them — does the app treat them differently? |

---

## SECTION G: COMPETITIVE / MARKETING

**Questions relevant to pitching at festival:**

| # | Question | Context/Details |
|---|----------|-----------------|
| **G1** | What is the single best reason to use Printadactyl instead of Etsy/Printful/Fiverr? | Chronicle has differentiation notes — what's the pitch? |
| **G2** | What happens if someone asks "can you print X?" and we don't have a maker for that category? | No maker matching yet — what's the answer? |
| **G3** | Are there any categories or materials NOT supported? | Job form has material types — are they all functional? |
| **G4** | What's the turnaround expectation? Is there any SLA? | No documented timing guarantees — what's the promise? |

---

## SECTION H: FESTIVAL LOGISTICS

**Practical questions for demo/signup at event:**

| # | Question | Context/Details |
|---|----------|-----------------|
| **H1** | If the site goes down at the festival, what's the backup? | Google Form? Paper signup? What's the plan? |
| **H2** | Can users sign up on mobile easily? | Any responsive or mobile-specific issues? |
| **H3** | Is there a QR code or easy link to share? | No documented QR code — should we make one? |
| **H4** | If someone signs up at the festival, do they get any welcome email or message? | No email notifications — would they just see a blank dashboard? |
| **H5** | Do we have analytics on who's visiting? | No tracking mentioned — how do we know if it's working? |

---

## SECTION I: TECHNICAL & INFRASTRUCTURE

**Backend/state questions:**

| # | Question | Context/Details |
|---|----------|-----------------|
| **I1** | Is the Supabase database schema fully applied? Are all tables (`profiles`, `jobs`, `bids`, `comments`) present? | Chronicle prepared it but noted uncertainty — can you confirm? |
| **I2** | Are there any error logs we should check? | Vercel function logs, browser console — any red flags? |
| **I3** | Is the Supabase API key exposed or restricted? | Keys in Vercel env vars — any security concerns? |
| **I4** | Is there any rate limiting or quota concerns? | Supabase free tier limits — are we close? |

---

## SECTION J: DEFERRED FEATURES (V2/V3)

**Features we intentionally skipped — need to know if they're blockers:**

| # | Question | Context/Details |
|---|----------|-----------------|
| **J1** | The "Share My Idea" feature on maker profiles — is that anywhere? | Chronicle describes it as future — is any version live? |
| **J2** | Is there any "Shop" vs "Showcase" distinction? | Deferred to later — is it visible at all? |
| **J3** | Is there any AI sketch-to-design capability? | Explicitly deferred — is there anything even basic? |

---

## SECTION K: ADDITIONAL QUESTIONS

| # | Question | Context/Details |
|---|----------|-----------------|
| **K1** | Can users edit or delete their own jobs after posting? | Chronicle notes this as missing — still true? |
| **K2** | Can users edit or delete their own comments? | Comments system was added — can authors modify? |
| **K3** | Is there any job status workflow? (open → bidding → in_progress → completed) | Chronicle shows status field — is it actually used? |
| **K4** | Can jobs be filtered or searched? | No search mentioned in working features — is there any way to find specific jobs? |
| **K5** | Is there a "job type" distinction between "print only" vs "full design + print"? | MEMORY.md shows this was added — is it meaningful in the UI? |
| **K6** | Does the bid form show a "design fee" option for "full" jobs? | MEMORY.md notes this was added mid-build — is it visible? |
| **K7** | Are comments visible on job pages? | Chronicle shows comments were added — is the UI there? |
| **K8** | Is there any logout functionality? | Basic auth — can users actually sign out? |
| **K9** | Does the site have any favicon or proper branding (logo on tab)? | Chronicle notes generic favicon — has this been addressed? |
| **K10** | Are there any 404 pages for broken routes? | I hit one on /contact — is that the only one? |
| **K11** | Is there any error handling UI (loading states, error messages)? | Chronicle doesn't mention — any graceful failures? |
| **K12** | What's the actual job completion flow? | No order tracking, no shipping — what happens after a bid is accepted? |
| **K13** | Is there any concept of "winning" a bid? | Can a designer actually select a bid? Does the maker get notified? |
| **K14** | Do we have any automated emails (welcome, password reset)? | Zoho is configured — is it actually sending anything? |
| **K15** | Is the "About" page functional? | Links exist — content there? |

---

## SECTION L: CONTENT & COPY

| # | Question | Context/Details |
|---|----------|-----------------|
| **L1** | Is the landing page copy accurate? | "500+ Jobs, 200+ Makers" — real or placeholder? |
| **L2** | Are the "What we print" categories accurate? | 3D Prints, Apparel, Marketing — are these functional categories? |
| **L3** | Are the testimonial quotes real? | "Alex D." and "Jordan M." — placeholders or real? |
| **L4** | Is the "How it works" section accurate to the actual flow? | Steps 1-2-3 — does the app actually work this way? |
| **L5** | Is there any placeholder text in the UI that looks unfinished? | Any "Lorem ipsum" or "TODO" left in? |

---

## SECTION M: MOBILE & DEVICE SUPPORT

| # | Question | Context/Details |
|---|----------|-----------------|
| **M1** | Does the site work on mobile browsers? | Any responsive issues at small screens? |
| **M2** | Are touch targets (buttons, inputs) sized for mobile? | Any too-small clickable elements? |
| **M3** | Does the navigation work on mobile? | Hamburger menu or responsive header? |
| **M4** | Are forms usable on mobile (input types, keyboards)? | Date pickers, dropdowns — mobile-friendly? |
| **M5** | Is there a mobile app? | No — but is there a PWA manifest or anything? |

---

## SECTION N: NOTIFICATIONS & ALERTS

| # | Question | Context/Details |
|---|----------|-----------------|
| **N1** | Is there ANY in-app notification system? | Bell icon, toast messages, anything? |
| **N2** | Are there browser push notifications? | No — but is there a prompt to enable? |
| **N3** | Is there a "new bid" indicator on jobs? | If I post a job, can I see I have new bids? |
| **N4** | Is there any "unread message" badge? | Any indicator for new activity? |

---

## SECTION O: ONCHAIN & WEB3 (Probably N/A but confirming)

| # | Question | Context/Details |
|---|----------|-----------------|
| **O1** | Is there any crypto or blockchain integration? | Probably no — but confirming? |
| **O2** | Are there any NFT or token-gated features? | Unlikely — but checking off the list. |

---

## SECTION P: PERFORMANCE & RELIABILITY

| # | Question | Context/Details |
|---|----------|-----------------|
| **P1** | How fast does the site load? | Any slowness noticeable? |
| **P2** | Are there any known performance issues? | Large images, unoptimized assets? |
| **P3** | Is the site uptime being monitored? | Any downtime alerts? |
| **P4** | Is there a "maintenance mode" or "coming soon" toggle? | Could we disable it if needed? |
| **P5** | Are images optimized? | Any heavy assets slowing it down? |

---

## SECTION Q: QUALITY ASSURANCE & TESTING

| # | Question | Context/Details |
|---|----------|-----------------|
| **Q1** | Has anyone actually tested the full user flow end-to-end? | Signup → Post Job → See Job → Submit Bid → Accept Bid |
| **Q2** | Are there any automated tests? | Any test suite, CI/CD checks? |
| **Q3** | Have we tested on multiple browsers? | Chrome, Safari, Firefox — any issues? |
| **Q4** | Have we tested with different auth providers? | Only email/password or also Google/GitHub OAuth? |
| **Q5** | Is there a staging environment? | Can we test changes before pushing to prod? |

---

## SECTION R: REVIEWS & REPUTATION

| # | Question | Context/Details |
|---|----------|-----------------|
| **R1** | Can designers leave reviews for makers? | Chronicle says deferred — any version? |
| **R2** | Can makers leave reviews for designers? | Bidirectional review system — any version? |
| **R3** | Is there any star rating system? | 1-5 stars — anywhere? |
| **R4** | Can users see their review history? | Profile-based reviews — any UI? |
| **R5** | Is there any "verified maker" badge? | No — but is there any trust marker at all? |

---

## SECTION S: SECURITY

| # | Question | Context/Details |
|---|----------|-----------------|
| **S1** | Is the Supabase API key exposed in the client? | Any `NEXT_PUBLIC_SUPABASE_URL` in client-side code? |
| **S2** | Are there proper Row Level Security (RLS) policies? | Chronicle mentions them — actually applied? |
| **S3** | Is there any XSS or injection protection? | Input sanitization on forms? |
| **S4** | Is there a password reset flow? | Can users actually reset passwords? |
| **S5** | Is there rate limiting on auth endpoints? | Brute force protection? |
| **S6** | Is there any CSRF protection? | Tokens, headers, anything? |
| **S7** | Is the site HTTPS everywhere? | All routes force HTTPS? |

---

## SECTION T: THIRD-PARTY INTEGRATIONS

| # | Question | Context/Details |
|---|----------|-----------------|
| **T1** | Is Stripe connected? | No — but is there any payment option at all? |
| **T2** | Is Zoho Mail actually sending emails? | Configured — but tested? |
| **T3** | Is there Google Analytics or tracking? | Chronicle doesn't mention — any tracking? |
| **T4** | Is there any social login (Google, GitHub)? | Only email/password or more? |
| **T5** | Is there any CDN for assets? | Vercel handles this — any config needed? |
| **T6** | Are there any webhook integrations? | Any external services being called? |

---

## SECTION U: USER GENERATED CONTENT

| # | Question | Context/Details |
|---|----------|-----------------|
| **U1** | Can users upload avatars? | Profile pictures — anywhere? |
| **U2** | Can users upload portfolio images? | Showcase — any image handling? |
| **U3** | Is there any content moderation? | Bad actors, spam — any protection? |
| **U4** | Are there any file type restrictions? | What can/cannot be uploaded? |
| **U5** | Is there any image resizing or optimization? | Automatic or manual? |

---

## SECTION V: VISUAL DESIGN & UI/UX

| # | Question | Context/Details |
|---|----------|-----------------|
| **V1** | Is there a consistent color theme? | Green/purple/dark — documented anywhere? |
| **V2** | Is there a design system or component library? | Reusable components or ad-hoc? |
| **V3** | Are there any animations or micro-interactions? | Hover states, transitions — any polish? |
| **V4** | Is there a dark mode / light mode toggle? | Chronicle doesn't mention — any theme switching? |
| **V5** | Are icons consistent? | Mixed sources or unified set? |
| **V6** | Is typography defined? | Fonts, sizes — any system? |

---

## SECTION W: WORKFLOWS & AUTOMATION

| # | Question | Context/Details |
|---|----------|-----------------|
| **W1** | Is there any job auto-matching to makers? | No — but is anything even basic? |
| **W2** | Is there any email drip sequence? | Welcome series — any automation? |
| **W3** | Is there any job expiration or auto-close? | Old jobs — do they stay open forever? |
| **W4** | Is there any bid auto-rejection after timeout? | What happens to old bids? |
| **W5** | Is there any reminder system (deadlines, follow-ups)? | Any nudges to users? |

---

## SECTION X: X-FACTORS & SURPRISES

| # | Question | Context/Details |
|---|----------|-----------------|
| **X1** | Is there any "secret" admin panel? | /admin route, special access? |
| **X2** | Are there any Easter eggs? | Hidden features, fun stuff? |
| **X3** | Is there any beta testing flag? | Feature flags for rolling out changes? |
| **X4** | Is there any API for developers? | `/api` routes exposed for external use? |
| **X5** | Are there any "power user" features? | Shortcuts, keyboard commands? |

---

## SECTION Y: YIELD & REVENUE

| # | Question | Context/Details |
|---|----------|-----------------|
| **Y1** | How is the 15% commission collected? | Without Stripe — is it manual? Honor system? |
| **Y2** | Are there any featured listing fees? | Chronicle mentions $5 stickies — implemented? |
| **Y3** | Is there any subscription billing? | Pro makers — any payment flow? |
| **Y4** | Are there any invoicing features? | Can users download invoices? |
| **Y5** | Is there any tax handling? | 1099s, sales tax — anything? |

---

## SECTION Z: ZERO-STATE & EMPTY STATES

| # | Question | Context/Details |
|---|----------|-----------------|
| **Z1** | What does a new user see on their dashboard? | Empty state — helpful or confusing? |
| **Z2** | What does a job with no bids look like? | Any "be the first to bid" prompt? |
| **Z3** | What does a maker with no profile see? | Any nudges to complete profile? |
| **Z4** | What does a job list with no results look like? | Empty search — any message? |
| **Z5** | Is there any onboarding checklist? | "Complete your profile" — anywhere? |

---

## ADDITIONAL QUESTIONS (BEYOND Z)

| # | Question | Context/Details |
|---|----------|-----------------|
| **AA1** | Can users share jobs on social media? | Share buttons, open graph tags? |
| **AA2** | Is there any SEO optimization? | Meta tags, descriptions, sitemaps? |
| **AA3** | Is there a sitemap? | For search engines? |
| **AA4** | Are there any meta tags for social sharing? | OG images, Twitter cards? |
| **AA5** | Is the site indexed by Google? | Has anyone checked? |
| **AA6** | Is there any robots.txt? | Crawler directives? |
| **AA7** | Are there any URL slugs or clean URLs? | `/jobs/123` vs `/jobs?id=123`? |
| **AA8** | Is there any canonical URL handling? | HTTPS/HTTP redirect? |
| **AA9** | What happens if I share a job link on Discord/Twitter? | Preview card — anything? |
| **AA10** | Is there any 301/302 redirect handling? | Old URLs — any forwarding? |

---

## FESTIVAL-SPECIFIC QUESTIONS

| # | Question | Context/Details |
|---|----------|-----------------|
| **F1** | If 50 people sign up at the festival simultaneously, will it handle it? | Rate limits, concurrency? |
| **F2** | If someone creates an account, do they get instant access or email verification first? | Confirms email before using? |
| **F3** | Can we print QR codes that link directly to signup? | Campaign tracking — any UTM params? |
| **F4** | Is there any way to "import" contacts from the festival? | CSV upload, bulk invite? |
| **F5** | If the internet goes down, is there an offline mode? | PWA service worker — anything cached? |

---

*Total: 100+ questions across A-Z, AA, and Festival-specific categories*
