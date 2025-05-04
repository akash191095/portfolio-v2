"use server";

import Hero from "./containers/Hero";
import AboutMe from "./containers/AboutMe";
import Exprience from "./containers/Exprience";
import OpenSource from "./containers/OpenSource";
import Skills from "./containers/Skills";
import ContactMe from "./containers/ContactMe";

export default async function Home() {
  return (
    <div
      className={`relative mb-32 flex min-h-screen min-w-full flex-col px-6 font-sans`}
    >
      <Hero />
      <AboutMe />
      <Exprience />
      <OpenSource />
      <Skills />
      <ContactMe />
    </div>
  );
}
