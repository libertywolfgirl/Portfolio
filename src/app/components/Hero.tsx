"use client";

import ColorSchemeToggle from "@/theme/ColorSchemeToggle";
import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Stack,
  Flex,
} from "@mantine/core";

const Hero = () => {
  return (
    <Container
      variant="blue"
      w="100%"
      size="md"
      py={{ base: 40, md: 80 }}
      px={{ base: 20, md: 40 }}
      bdrs={25}
    >
      <Stack gap="md">
        <Flex justify="center">
          <ColorSchemeToggle />
        </Flex>
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
};

export default Hero;
