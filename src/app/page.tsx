"use client";

import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Stack,
  Card,
  Badge,
} from "@mantine/core";

function Hero() {
  return (
    <Container size="md" py={80}>
      <Stack gap="md">
        <Title order={1}>Hi, I&apos;m Dani</Title>
        <Text size="lg">
          Frontend Developer specializing in React, TypeScript, and scalable UI
          systems.
        </Text>
        <Group>
          <Button component="a" href="#projects">
            View Projects
          </Button>
          <Button variant="outline" component="a" href="#contact">
            Contact Me
          </Button>
        </Group>
      </Stack>
    </Container>
  );
}

function About() {
  return (
    <Container size="md" py={60}>
      <Stack>
        <Title order={2}>About</Title>
        <Text>
          I build responsive, accessible interfaces using React and Next.js. I
          focus on clean architecture and maintainable UI systems.
        </Text>
        <Group>
          <Badge>React</Badge>
          <Badge>TypeScript</Badge>
          <Badge>Next.js</Badge>
          <Badge>Mantine</Badge>
        </Group>
      </Stack>
    </Container>
  );
}

function ProjectCard({ title, description, role, tech, impact }: any) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Stack>
        <Title order={3}>{title}</Title>
        <Text>{description}</Text>
        <Text size="sm">
          <b>Role:</b> {role}
        </Text>
        <Text size="sm">
          <b>Tech:</b> {tech.join(", ")}
        </Text>
        <Text size="sm">
          <b>Impact:</b> {impact}
        </Text>
      </Stack>
    </Card>
  );
}

function Projects() {
  return (
    <Container size="md" py={60} id="projects">
      <Stack>
        <Title order={2}>Projects</Title>

        <ProjectCard
          title="Localization Management Interface"
          description="A web app for managing translation workflows."
          role="Frontend Developer"
          tech={["React", "TypeScript", "Mantine"]}
          impact="Improved usability and reduced configuration time."
        />

        <ProjectCard
          title="Portfolio CMS"
          description="Portfolio powered by headless CMS."
          role="Fullstack Developer"
          tech={["Next.js", "WordPress", "ACF"]}
          impact="Enables dynamic content updates without code changes."
        />
      </Stack>
    </Container>
  );
}

function Contact() {
  return (
    <Container size="md" py={60} id="contact">
      <Stack>
        <Title order={2}>Contact</Title>
        <Text>Email: dani@email.com</Text>
        <Text>GitHub: github.com/username</Text>
      </Stack>
    </Container>
  );
}

export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
