# 🚀 Positivus - Digital Marketing Agency Landing Page

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Radix UI](https://img.shields.io/badge/Radix_UI-Primitives-161618?logo=radix-ui&logoColor=white)](https://www.radix-ui.com/)

A modern, responsive, and high-conversion landing page, featuring a sleek, contemporary design with tactile shadows, accents of lime green, engaging subtle interactions, and user-friendly interface elements.
---

## 📑 Table of Contents

- [✨ Key Features](#-key-features)
  - [1. Responsive Header & Navigation](#1-responsive-header--navigation)
  - [2. Hero Section & Partner Social Proof](#2-hero-section--partner-social-proof)
  - [3. Interactive Services Showcase](#3-interactive-services-showcase)
  - [4. Call-to-Action (CTA) Banner](#4-call-to-action-cta-banner)
  - [5. Proven Case Studies](#5-proven-case-studies)
  - [6. Step-by-Step Working Process (Accordion)](#6-step-by-step-working-process-accordion)
  - [7. Team Showcase](#7-team-showcase)
  - [8. Testimonials Carousel](#8-testimonials-carousel)
  - [9. Contact Form & Inquiry Selector](#9-contact-form--inquiry-selector)
  - [10. Comprehensive Footer & Newsletter](#10-comprehensive-footer--newsletter)
- [🎨 Design System & Palette](#-design-system--palette)
- [🛠️ Tech Stack & Dependencies](#️-tech-stack--dependencies)
- [📁 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Available Scripts](#available-scripts)
- [📄 License](#-license)

---

## ✨ Key Features

### 1. Responsive Header & Navigation
- **Desktop Navigation:** Quick navigation links (`About us`, `Services`, `Use Cases`, `Pricing`, `Blog`) with smooth hover state indicators.
- **Mobile Drawer (Sheet):** Slide-in navigation drawer for mobile and tablet devices powered by Radix UI primitive sheet component.
- **Direct CTA:** "Request a quote" button linking directly to the inquiry form.
- **Smooth Anchor Scrolling:** Native smooth scrolling configured via CSS (`scroll-behavior: smooth`).

### 2. Hero Section & Partner Social Proof
- **Engaging Value Proposition:** High-impact typography with bold heading *"Navigating the digital landscape for success"*.
- **Hero Artwork:** Custom vector digital marketing megaphone illustration.
- **Interactive Partner Marquee:** Logo showcase featuring top industry brands (**Amazon, Dribbble, HubSpot, Notion, Netflix, Zoom**) with grayscale-to-color hover transition effects.

### 3. Interactive Services Showcase
- **Dual-tone Badge Cards:** 6 core service offerings structured in a responsive 2-column grid:
  1. *Search Engine Optimization (SEO)*
  2. *Pay-Per-Click Advertising (PPC)*
  3. *Social Media Marketing*
  4. *Email Marketing*
  5. *Content Creation*
  6. *Analytics and Tracking*
- **Theme Variants:** Alternating visual themes (`grey`, `green`, `dark`) with complementary badge highlights.
- **Neo-Brutalist Micro-interactions:** Solid border outlines, drop shadow offsets (`shadow-[0px_5px_0px_#191A23]`), subtle upward hover translation, and rotating arrow buttons on hover.

### 4. Call-to-Action (CTA) Banner
- **High-Conversion Banner:** *"Let’s make things happen"* conversion block prompting users to get a free proposal.
- **Floating Illustration:** Layered vector artwork with responsive positioning for mobile, tablet, and desktop viewports.

### 5. Proven Case Studies
- **Dark Theme Showcase Container:** Distinctive dark-mode container with rounded edges (`rounded-[45px]`).
- **Real-World Metrics:** Real-life client success stories demonstrating quantifiable outcomes (+50% traffic, +200% organic growth, +25% follower increase).
- **Responsive Layout:** 3-column split view with divider borders on desktop, translating into stacked cards on mobile devices.

### 6. Step-by-Step Working Process (Accordion)
- **Interactive Process Accordion:** Built on Radix UI Accordion (`@radix-ui/react-accordion`) with single-open collapsible configuration.
- **Active State Highlights:** Active step dynamically switches background to **Positivus Green (`#B9FF66`)** while collapsed items remain neutral grey.
- **6-Stage Framework:**
  - `01` Consultation
  - `02` Research and Strategy Development
  - `03` Implementation
  - `04` Monitoring and Optimization
  - `05` Reporting and Communication
  - `06` Continual Improvement

### 7. Team Showcase
- **Team Roster Grid:** 6 experienced team members with illustrated avatars, designations, and detailed bios.
- **Direct Social Integration:** Individual clickable LinkedIn profile links with custom SVG social icons.
- **CTA Action:** "See all team" directory button.

### 8. Testimonials Carousel
- **Embla Carousel Integration:** Smooth touch, drag, and button-controlled carousel slider powered by `embla-carousel-react`.
- **Speech Bubble Card Design:** Bespoke quote bubble card featuring geometric CSS speech bubble pointer/arrow and dark styling.
- **Custom Pagination & Controls:** Previous / Next navigation buttons along with dynamic sparkle/star pagination icons synchronized with active snap points.

### 9. Contact Form & Inquiry Selector
- **Interactive Radio Group Switcher:** Toggle between `"Say Hi"` (general feedback) and `"Get a Quote"` (project inquiries) with custom styled radio dots.
- **Controlled React Form:** Real-time state management for `Name`, `Email`, and `Message` inputs.
- **Input Validation & Focus States:** Styled input fields with green accent focus rings and placeholder styling.

### 10. Comprehensive Footer & Newsletter
- **Inverted Brand Identity:** Dark aesthetic container featuring inverted white logo.
- **Social Media Hub:** Integrated social media links for LinkedIn, Facebook, and Twitter/X.
- **Quick Contact Details:** Direct email, phone, and office address cards with green category chips.
- **Newsletter Subscription:** Integrated subscription form for email capture.
- **Legal & Copyright:** Dynamic copyright year calculation (`new Date().getFullYear()`) and Privacy Policy anchor.

---

## 🎨 Design System & Palette

The user interface follows the signature **Positivus Neo-Brutalist** design language:

| Token | Hex Code | Visual Preview | Usage |
| :--- | :--- | :---: | :--- |
| **Positivus Green** | `#B9FF66` | ![#B9FF66](https://via.placeholder.com/15/B9FF66/000000?text=+) | Primary accent, highlighted tags, active accordion, CTA buttons |
| **Positivus Dark** | `#191A23` | ![#191A23](https://via.placeholder.com/15/191A23/000000?text=+) | Headings, primary text, dark cards, footer, neo-brutalist borders |
| **Positivus Grey** | `#F3F3F3` | ![#F3F3F3](https://via.placeholder.com/15/F3F3F3/000000?text=+) | Card backgrounds, section containers, neutral surfaces |
| **White** | `#FFFFFF` | ![#FFFFFF](https://via.placeholder.com/15/FFFFFF/000000?text=+) | Input fields, team cards, clean canvas elements |

- **Typography:** [`Space Grotesk`](https://fonts.google.com/specimen/Space+Grotesk) loaded from Google Fonts for modern geometric letterforms.
- **Card Shadows:** Distinctive solid box drop shadows (`box-shadow: 0px 5px 0px #191A23`).

---

## 🛠️ Tech Stack & Dependencies

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Core Framework** | [React 19](https://react.dev/) | Component-based UI library |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Type-safe JavaScript superset |
| **Build Tool** | [Vite](https://vitejs.dev/) | Lightning fast next-generation frontend tooling |
| **Styling** | [Tailwind CSS v3](https://tailwindcss.com/) | Utility-first CSS framework |
| **Primitives** | [Radix UI](https://www.radix-ui.com/) | Unstyled, accessible UI components (Accordion, Slot) |
| **Carousel** | [Embla Carousel](https://www.embla-carousel.com/) | Lightweight carousel library for React |
| **Icons** | [Lucide React](https://lucide.dev/) | Consistent & clean icon toolkit |
| **Utility** | [Class Variance Authority](https://cva.style/) | Type-safe component variant management |

---

## 📁 Project Structure

```text
positivus-homepage/
├── public/                     # Static assets and favicon
├── src/
│   ├── assets/                 # SVGs, illustrations, logos, and team pictures
│   │   ├── Logo/               # Positivus logo & partner logos (Amazon, Netflix, etc.)
│   │   ├── icons/              # General icons
│   │   └── images/
│   │       ├── illustrations/  # Hero, CTA, and Contact illustrations
│   │       ├── services/       # Service card illustrations
│   │       └── Team/           # Team member avatars
│   ├── components/
│   │   ├── common/             # Reusable composite components
│   │   │   ├── SectionHeading.tsx
│   │   │   ├── ServiceCard.tsx
│   │   │   ├── TeamCard.tsx
│   │   │   ├── TestimonialCard.tsx
│   │   │   └── scoial-component.tsx
│   │   ├── layout/             # Global layout blocks
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/           # Landing page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Cta.tsx
│   │   │   ├── CaseStudies.tsx
│   │   │   ├── Process.tsx
│   │   │   ├── Team.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/                 # Accessible base UI primitives (Radix / Shadcn)
│   │       ├── accordion.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── radio-group.tsx
│   │       └── sheet.tsx
│   ├── data/                   # Structured mock data
│   │   ├── caseStudies.ts
│   │   ├── navLinks.ts
│   │   ├── process.ts
│   │   ├── services.ts
│   │   ├── team.ts
│   │   └── testimonials.ts
│   ├── lib/                    # Helper utilities (cn / clsx)
│   ├── App.tsx                 # Main application composition root
│   ├── index.css               # Global Tailwind CSS and base layers
│   └── main.tsx                # React application entrypoint
├── index.html                  # HTML template with Space Grotesk font links
├── tailwind.config.js          # Tailwind styling tokens and theme extensions
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Vite configuration with path aliases (@ -> /src)
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine (v18.0.0 or higher recommended).

### Installation

1. Clone or navigate to the project directory:
   ```bash
   cd positivus-homepage
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

### Available Scripts

In the project directory, you can run:

- **Start the development server:**
  ```bash
  npm run dev
  ```
  Runs the app in development mode with Hot Module Replacement (HMR). Open your browser at the displayed local URL (typically `http://localhost:5173`).

- **Build for production:**
  ```bash
  npm run build
  ```
  Type-checks with TypeScript and compiles the production assets into the `dist/` directory.

- **Preview production build:**
  ```bash
  npm run preview
  ```
  Locally preview the output of the production build.

- **Run linter:**
  ```bash
  npm run lint
  ```
  Checks the codebase for stylistic and code quality issues using ESLint.

---

