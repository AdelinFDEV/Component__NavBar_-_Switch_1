// 1. "use client" marks this as a Client Component.
//    Required because 'next-themes' accesses window/localStorage.
"use client";

import { ThemeProvider } from "next-themes";
import { type ReactNode } from "react";

// Providers component that wraps the application
export function Providers({ children }: { children: ReactNode }) {
  // 'next-themes' handles hydration internally when using suppressHydrationWarning in layout.tsx.

  return (
    // 'attribute="class"': Toggles the theme by adding/removing the "dark" class on the <html> tag.
    // 'defaultTheme="system"': Defaults to the user's OS preference.
    // 'enableSystem': Allows automatic switching if the OS theme changes.
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
