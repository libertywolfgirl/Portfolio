"use client";

import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

const Page = () => {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default Page;
