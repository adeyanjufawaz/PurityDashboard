"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

type ProviderContextType = {
  isDark: boolean;
  isOpen: boolean;
  isNotficationOpen:boolean;
  toggleTheme: () => void;
  toggleIsOpen: () => void;
  toggleIsNotficationOpen:()=>void
};
const ProviderContext = createContext<ProviderContextType | undefined>(
  undefined
);

export function NavOpenAndThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const getSavedTheme = localStorage.getItem("theme");
    if (getSavedTheme == "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isNotficationOpen, setIsNotficationOpen] = useState(false);
  const toggleIsOpen = () => setIsOpen((prev) => !prev);
  const toggleIsNotficationOpen = () => setIsNotficationOpen((prev) => !prev);

  const toggleTheme = () => {
    setIsDark(!isDark);
    const getSavedTheme = localStorage.getItem("theme");
    if (getSavedTheme == "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };


  return (
    <ProviderContext.Provider
      value={{ isDark, toggleTheme, isOpen, isNotficationOpen, toggleIsOpen, toggleIsNotficationOpen }}
    >
      {children}
    </ProviderContext.Provider>
  );
}

export function useProvider() {
  const context = useContext(ProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
