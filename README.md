# Premium Navbar Component 🚀

A high-performance, responsive, and accessible Navbar component built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion principles** (using pure CSS transitions). designed for modern web applications.

## 🏗 Project Structure

This project follows a strict **Atomic Design** inspired feature-based architecture to ensure scalability and maintainability.

```bash
navbar_1/
├── app/
│   ├── layout.tsx       # Root layout with ThemeProviders and Font configurations
│   ├── page.tsx         # Landing page (Demo)
│   ├── globals.css      # Core refined design tokens and Tailwind setup
│   └── providers.tsx    # Client-side providers wrapper (Next-Themes)
├── components/
│   ├── features/        # Business logic components
│   │   └── SwitcherLogic.tsx  # Smart theme switching logic
│   ├── layout/          # Structural components
│   │   └── Navbar.tsx   # The main Navbar composition
│   └── ui/              # Dumb/Re-usable UI components
│       └── Switch.tsx   # Pure UI Toggle Switch
```

## ✨ Key Features

- **Floating Pill Design:** A modern, glassmorphism-based aesthetic that floats elegantly above content.
- **Smart Interactions:**
  - **Sliding Pill:** Interactive hover background that follows the cursor (Desktop).
  - **Scale Animations:** Micro-interactions on buttons and active states.
- **Fully Responsive:**
  - **Mobile-First Approach:** Optimized touch targets and layout for small screens.
  - **Smooth Dropdown:** A physics-based entry animation for the mobile menu without heavy libraries.
- **Theme Aware:** Seamless Day/Night mode switching with persistent state and hydration-mismatch protection.
- **Accessible:** Proper ARIA labels and semantic HTML structure.

## 🔧 Technical Details

- **Stack:** Next.js (App Router), React, Tailwind CSS.
- **Icons:** Lucide React.
- **Theming:** `next-themes` for robust dark mode handling.
- **Optimization:** usage of `.map()` for scalable navigation links and `useMemo`/`useState` for performance-critical animations.

By AdelinFDEV
