// "use client" is required for interactivity (useState, useEffect).
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/Switch";

export function ThemeSwitcher() {
  // A. THEME HOOK
  // resolvedTheme: The actual active theme ("light" or "dark").
  // setTheme: Function to toggle the theme.
  const { resolvedTheme, setTheme } = useTheme();

  // B. MOUNTING STATE (Hydration Mismatch Fix)
  // The server doesn't know the browser's local storage preference.
  // Rendering "dark" on server and "light" on client causes a mismatch error.
  // SOLUTION: We start unmounted and only render the real state after the first client-side effect.
  const [mounted, setMounted] = useState(false);

  // C. MOUNT EFFECT
  useEffect(() => {
    // We use a timeout to push the state update to the end of the event loop,
    // ensuring smooth hydration without synchronous update warnings.
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  // D. INITIAL RENDER (SSR / Pre-Mount)
  // During the initial milliseconds before hydration, render a neutral or default state
  // to avoid layout shifts or visual glitches.
  if (!mounted) {
    return (
      <Switch
        isOn={false} // Default visual state (Light)
        onToggle={() => {}} // No-op before hydration
        iconOn={<Moon size={14} />}
        iconOff={<Sun size={14} />}
      />
    );
  }

  // E. FINAL RENDER (Client)
  // Once mounted, we know the true theme and can render the interactive switch.
  const isDark = resolvedTheme === "dark";

  return (
    <Switch
      isOn={isDark}
      onToggle={() => setTheme(isDark ? "light" : "dark")}
      iconOn={<Moon size={14} />}
      iconOff={<Sun size={14} />}
    />
  );
}
