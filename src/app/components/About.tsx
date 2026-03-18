import { Container, Title, Text, Group, Stack, Badge } from "@mantine/core";

const About = () => {
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
};

export default About;
