"use client";

import AboutMe from "@/containers/AboutMe";
import Hero from "@/containers/Hero";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={`relative mb-32 flex min-h-screen min-w-full flex-col px-6 font-sans ${
        resolvedTheme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      <Hero />
      <AboutMe />
    </div>
  );
}
