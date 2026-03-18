import { Container, Title, Text, Button, Group, Stack } from "@mantine/core";

const Hero = () => {
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
};

export default Hero;
