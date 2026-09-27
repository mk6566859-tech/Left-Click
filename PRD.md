# Product Requirements Document (PRD)
## Left Click — Cinematic Landing Page & App Orchestrator (`src/App.jsx`)

- **Document Version:** 1.0.0
- **Status:** Approved / Production Implemented
- **Owner:** Senior Creative Technologist & Lead Frontend Engineer
- **Target Repository:** `e:\website builder demo`
- **Primary Orchestrator File:** [`src/App.jsx`](file:///e:/website%20builder%20demo/src/App.jsx)

---

## 1. Executive Summary & Brand Purpose

### 1.1 Brand Identity
- **Brand Name:** Left Click
- **One-Line Purpose:** Helping high-growth B2B companies scale pipeline and revenue using sovereign cold email infrastructure, real-time waterfall intent signals, and conversion-engineered copy.
- **Aesthetic Direction:** Preset C — *"Brutalist Signal"* (Raw Precision). An authoritative digital instrument that prioritizes information density, industrial precision, and stark typographic contrast over generic AI/SaaS design tropes.
- **Primary Conversion Goal (North Star Metric):** Bookings for the **"Growth Mapping Call (30-min consultation)"**.

### 1.2 Role of `App.jsx`
`src/App.jsx` serves as the central root orchestrator for the entire application. It is responsible for:
1. **Global Shell & Texture:** Injecting the global SVG `<feTurbulence>` noise texture to eliminate flat digital gradients.
2. **State Orchestration:** Centralizing modal visibility state (`isBookingOpen`) and propagating trigger callbacks (`onOpenBooking`) to all navigational and call-to-action touchpoints.
3. **Section Pipeline Sequencing:** Assembling the cinematic narrative arc in an intentional order: Navbar &rarr; Hero &rarr; Artifacts &rarr; Philosophy &rarr; Protocol &rarr; Engagements &rarr; Footer &rarr; Booking Modal.
4. **Token & Utility Propagation:** Providing consistent background colors (`bg-offwhite`), typography classes, and custom text selection colors (`selection:bg-signal selection:text-white`).

---

## 2. Design System & Tokens (Preset C — "Brutalist Signal")

| Token Name | Hex / Value | Semantic Role |
| :--- | :--- | :--- |
| **Paper (Primary)** | `#E8E4DD` | Primary brand accent for badges, high-contrast surfaces, and card backgrounds |
| **Signal Red (Accent)** | `#E63B2E` | Action color for primary CTAs, indicators, live status pings, and borders |
| **Off-White (Background)** | `#F5F3EE` | Global application canvas background |
| **Charcoal (Dark/Text)** | `#111111` | Primary text color, deep dark manifesto section, and footer container |
| **Border Radius Scale** | `rounded-[2rem]` to `rounded-[3rem]` | Container curvature; no sharp 90-degree corners anywhere |
| **Heading Typography** | `"Space Grotesk", sans-serif` | Clean, tight-tracking geometric sans for titles and numbers |
| **Drama Typography** | `"DM Serif Display", serif (Italic)` | Massive, expressive serif for power words and emotional contrast |
| **Data Typography** | `"Space Mono", monospace` | High-density telemetry feeds, timestamps, and system status logs |

---

## 3. Core Component Architecture Managed by `App.jsx`

```
┌──────────────────────────────────────────────────────────┐
│                         App.jsx                          │
│  - Noise Overlay (.noise-overlay via feTurbulence)       │
│  - Global State: isBookingOpen [true/false]              │
├──────────────────────────────────────────────────────────┤
│ 1. Navbar.jsx (Floating island pill with morphing logic) │
├──────────────────────────────────────────────────────────┤
│ 2. Hero.jsx (100dvh entrance shot + GSAP timeline)       │
├──────────────────────────────────────────────────────────┤
│ 3. Features.jsx (Interactive Functional Micro-UIs)       │
│    ├── Diagnostic Shuffler (3s vertical cycle)           │
│    ├── Telemetry Typewriter (Live character stream)      │
│    └── Cursor Protocol Scheduler (Simulated click path)  │
├──────────────────────────────────────────────────────────┤
│ 4. Philosophy.jsx (The Manifesto & Paradigm Comparison)  │
├──────────────────────────────────────────────────────────┤
│ 5. Protocol.jsx (Sticky Stacking Archive & 3 Animations) │
│    ├── Step 01: Rotating Concentric Radar Reticle        │
│    ├── Step 02: Scanning Laser Dot Matrix                │
│    └── Step 03: Pulsing EKG Waveform Path                │
├──────────────────────────────────────────────────────────┤
│ 6. Pricing.jsx (3 Engagement Tiers + Guarantee Banner)   │
├──────────────────────────────────────────────────────────┤
│ 7. Footer.jsx (Terminal layout + Operational Indicator) │
├──────────────────────────────────────────────────────────┤
│ 8. GrowthModal.jsx (30-min Booking Consultation Drawer)  │
└──────────────────────────────────────────────────────────┘
```

---

## 4. Detailed Component Specifications

### 4.1 Global Noise Overlay
- **File:** Defined in [`src/index.css`](file:///e:/website%20builder%20demo/src/index.css), referenced in [`src/App.jsx`](file:///e:/website%20builder%20demo/src/App.jsx) (Line 20).
- **Implementation:** An inline SVG `<feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" />` positioned fixed across the entire viewport at `0.05` opacity with `pointer-events-none` and `z-index: 99999`.
- **Purpose:** Adds subtle organic grit and eliminates generic flat CSS gradients.

### 4.2 Floating Island Navbar ([`src/components/Navbar.jsx`](file:///e:/website%20builder%20demo/src/components/Navbar.jsx))
- **Positioning:** Fixed pill container centered at `top-5 left-1/2 -translate-x-1/2 z-50`.
- **Morphing Scroll Trigger:**
  - *At Hero top (`scrollY <= 80px`):* Semi-transparent dark frosted glass (`bg-charcoal/30 backdrop-blur-md`) with light text.
  - *Scrolled past Hero (`scrollY > 80px`):* Transforms to `bg-[#F5F3EE]/85 backdrop-blur-xl border border-charcoal/10` with dark charcoal text.
- **Interactive Elements:**
  - Left Click brand logo with pulsing Signal Red indicator.
  - Anchor links to `#artifacts`, `#philosophy`, `#protocol`, and `#engagements`.
  - Magnetic CTA button with sliding background transition that fires `onOpenBooking`.
  - Responsive mobile drawer menu with toggle animations.

### 4.3 Opening Shot Hero ([`src/components/Hero.jsx`](file:///e:/website%20builder%20demo/src/components/Hero.jsx))
- **Layout & Viewport:** `min-h-screen pt-28 sm:pt-36 md:pt-40 pb-16 px-6` ensuring vertical headroom below the floating navbar on any display resolution.
- **Imagery:** Full-bleed brutalist architectural image with a multi-stop dark gradient overlay (`bg-gradient-to-t from-charcoal via-charcoal/85 to-charcoal/50`).
- **Typography Pattern:**
  - Part 1: `"Engineer the"` (Space Grotesk, Bold Sans, uppercase).
  - Part 2: `"Outbound Pipeline."` (DM Serif Display, Massive Serif Italic, 3-5x scale contrast).
- **GSAP Animation Lifecycle:** Staggered entrance using `gsap.fromTo()` with `clearProps: 'all'` wrapped in `gsap.context()` for clean React 19 lifecycle management.
- **Telemetry Bar:** 4 live metric blocks (99.4% Primary Inbox, 14,200+ Enriched ICPs/Wk, $48.5M Attributed Pipeline, Zero Main Domain Risk).

### 4.4 Interactive Functional Artifacts ([`src/components/Features.jsx`](file:///e:/website%20builder%20demo/src/components/Features.jsx))
Instead of static cards, this section presents 3 functional software micro-UIs:
1. **Diagnostic Shuffler:**
   - 3 overlapping cards representing deliverability clusters (`Matrix 01 Cryptographic Shield`, `Matrix 02 P2P AI Warmup Network`, `Matrix 03 Circuit-Breaker Sentinel`).
   - Cycles vertically every 3,000ms using `array.unshift(array.pop())` with spring bounce transition (`cubic-bezier(0.34, 1.56, 0.64, 1)`).
   - Pauses on mouse hover; supports manual shuffle trigger.
2. **Telemetry Typewriter:**
   - Monospace terminal log window with simulated real-time buying signals (funding alerts, Apollo/Crustdata waterfalls, mailbox verification).
   - Character-by-character typing with blinking Signal Red cursor (`32ms` typing cadence).
3. **Cursor Protocol Scheduler:**
   - 7-day outbound cadence grid (S M T W T F S).
   - Animated SVG cursor choreography: moves to target days, triggers a click press (`scale(0.9)`), highlights the cell in Signal Red, moves to the "Deploy Outbound Sprint" button, and verifies execution with a success badge.
   - Interactive override: users can manually click any day to toggle scheduling.

### 4.5 The Manifesto ([`src/components/Philosophy.jsx`](file:///e:/website%20builder%20demo/src/components/Philosophy.jsx))
- **Visuals:** Full-width deep charcoal canvas with a parallaxing industrial texture at low opacity.
- **Axiom Contrast:**
  - *The Common Industry Trap:* "Most outbound agencies focus on: scraping recycled lead databases, blasting robotic AI templates from unshielded company domains..."
  - *The Left Click Sovereign Axiom:* "We focus on: sovereign infrastructure, multi-signal buying triggers, and relentless conversion engineering..."
- **Paradigm Matrix:** Side-by-side comparison grid detailing "Status Quo (Generic Spray & Pray)" vs "Left Click (Sovereign Engine)" with metric benchmarks (<1.2% vs 8.4%-14.8% reply rates).

### 4.6 Sticky Stacking Archive ([`src/components/Protocol.jsx`](file:///e:/website%20builder%20demo/src/components/Protocol.jsx))
- **Stacking Scroll Interaction:** Cards pinned with GSAP ScrollTrigger. As card `N+1` scrolls over card `N`, card `N` smoothly scales to `0.9`, blurs to `18px`, and fades to `0.5`.
- **Unique Visual Engines:**
  - *Card 01 (Sovereign Architecture):* Concentric rotating radar reticle with animated orbit rings and DNS alignment badges (SPF, DKIM, DMARC).
  - *Card 02 (Intent Enrichment):* Scanning horizontal laser bar moving across an active 48-node prospect matrix.
  - *Card 03 (Conversion Execution):* Pulsing SVG EKG waveform with animated `stroke-dashoffset` representing live conversation velocity.

### 4.7 Engagements & Pricing ([`src/components/Pricing.jsx`](file:///e:/website%20builder%20demo/src/components/Pricing.jsx))
- **Tier 1 — Sprint Engine ($4,500/mo):** 10 inboxes, 5 domains, 3,500 verified contacts, rapid ICP validation.
- **Tier 2 — Scale Matrix ($7,800/mo - POPPING CARD):** 30 inboxes, 15 domains, 10,000+ enriched contacts, 4-layer waterfall, dedicated Slack channel, and performance guarantee. Styled with `ring-2 ring-signal` and Signal Red CTA.
- **Tier 3 — Sovereign Enterprise ($14,500/mo):** 75+ inboxes, 30+ domains, 25,000+ contacts, omnichannel LinkedIn + Email orchestration, dedicated copy director.
- **Performance Guarantee Banner:** Formal 60-day threshold guarantee ("Guaranteed meeting volume or we work 100% free").

### 4.8 Growth Consultation Modal ([`src/components/GrowthModal.jsx`](file:///e:/website%20builder%20demo/src/components/GrowthModal.jsx))
- **State Trigger:** Controlled directly by `App.jsx` (`isBookingOpen`).
- **Interaction Flow:**
  1. *Step 1:* Slot selection (Dates: Tomorrow through 4 days out; Times: 10:00 AM - 4:30 PM EST).
  2. *Step 2:* Prospect qualification form (Full Name, Work Email, Company URL, Monthly Revenue Bracket).
  3. *Step 3:* Telemetry confirmation screen displaying calendar dispatch confirmation and host assignment.
- **Accessibility:** Closes on `Escape` key, backdrop click, or close button; locks document body scroll while active.

### 4.9 Control Terminal Footer ([`src/components/Footer.jsx`](file:///e:/website%20builder%20demo/src/components/Footer.jsx))
- **Visuals:** Charcoal background with generous `rounded-t-[3.5rem] sm:rounded-t-[4rem]` top curvature.
- **Navigation:** 3 categorized links columns (Artifacts, Architecture, Engagements).
- **Mandatory Live Indicator:** Monospace telemetry badge:
  `● SYSTEM OPERATIONAL // PROTOCOL V2.8 // REPUTATION: 99.8% // ACTIVE NODES: 1,480`.

---

## 5. Technical Requirements & Dependencies

| Dependency | Version | Purpose |
| :--- | :--- | :--- |
| **React** | `^19.0.0` | UI framework and component lifecycle |
| **React DOM** | `^19.0.0` | DOM rendering |
| **Tailwind CSS** | `3.4.17` | Utility-first styling, color tokens, and custom animation curves |
| **GSAP** | `^3.12.5` | Timeline animations, ScrollTrigger pinning, and staggered entrances |
| **Lucide React** | `^1.16.0` | High-fidelity vector iconography |
| **Vite** | `^6.1.0` | Fast HMR dev server and production bundler |

---

## 6. Non-Functional & Performance Requirements

1. **Hardware Accelerated Animations:** All motion properties utilize CSS `transform`, `opacity`, and `filter` to preserve 60fps scrolling without triggering layout thrashing.
2. **React 19 & StrictMode Safety:** All GSAP timelines utilize `gsap.context()` with `ctx.revert()` in unmount handlers and `gsap.fromTo()` with `clearProps: 'all'` to prevent stuck opacity bugs during double-mounting.
3. **Responsive Breakpoints:** Fully responsive from 320px mobile screens to 2560px ultra-wide displays with mobile-specific drawer navigation and fluid typography.
4. **Zero-Placeholder Guarantee:** Production-grade copy, real Unsplash architectural imagery, and real micro-UI interactions throughout.
