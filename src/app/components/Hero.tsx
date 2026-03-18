import { Container, Title, Text, Button, Group, Stack } from "@mantine/core";

const Hero = () => {
  return (
    <Container w="100%" size="md" py={80} px={40} bg="blue.0" bdrs={25}>
      <Stack gap="md">
        <Title order={1} c="gray.8">
          Hi, I&apos;m Dani
        </Title>
        <Text size="lg" c="gray.8">
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
