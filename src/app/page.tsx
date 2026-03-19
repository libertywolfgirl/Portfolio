import { Stack } from "@mantine/core";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

const Page = () => {
  return (
    <main>
      <Stack gap="xl" my="lg" px="md">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Stack>
    </main>
  );
};

export default Page;
