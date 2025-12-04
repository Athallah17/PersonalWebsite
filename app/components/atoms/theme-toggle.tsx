"use client";

import { useTheme } from "next-themes";
import { Button } from "@components/ui/button";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-5 w-5 rotate-0 dark:-rotate-90 transition-transform" />
      <Moon className="h-5 w-5 absolute rotate-90 dark:rotate-0 transition-transform" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
