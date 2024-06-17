"use client"; // This directive indicates this component should be rendered on the client

import { useEffect, useState } from 'react';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const storedTheme = localStorage.getItem('Mode');
    if (storedTheme) {
      setTheme(storedTheme);
    }
    console.log("Loaded theme: " + storedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('Mode', theme);
    console.log("Changed theme: " + theme);
  }, [theme]);

  return (
    <html lang="en" className={theme}>
      <body>{children}</body>
    </html>
  );
}
