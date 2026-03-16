"use client";
import { createContext, useContext, useEffect, useState } from "react";
import NavigationBar from "@/app/components/NavigationBar";

interface ThemeProviderProps {
  children: React.ReactNode
}

interface ThemeContextValue {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  isDark: true,
  toggleTheme: () => {}
})

export function ThemeProvider(props: ThemeProviderProps) {
  const { children } = props;
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <NavigationBar />
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext);
}