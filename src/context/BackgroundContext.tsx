"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type BackgroundContextType = {
  bgClass: string;
  setBgClass: (className: string) => void;
};

// Crée un contexte avec une valeur par défaut
const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined);

// Hook personnalisé pour utiliser le contexte
export const useBackground = () => {
  const context = useContext(BackgroundContext);
  if (!context) {
    throw new Error("useBackground doit être utilisé dans un BackgroundProvider");
  }
  return context;
};

// Provider pour encapsuler l'application
export function BackgroundProvider({ children }: { children: ReactNode }) {
  const [bgClass, setBgClass] = useState("bg-white");

  // Appliquer la classe au <body> lorsqu'elle change
  useEffect(() => {
    document.body.className = bgClass;
  }, [bgClass]);

  return (
    <BackgroundContext.Provider value={{ bgClass, setBgClass }}>
      {children}
    </BackgroundContext.Provider>
  );
}