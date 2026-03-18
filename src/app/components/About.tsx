import { Container, Title, Text, Group, Stack, Badge } from "@mantine/core";

const About = () => {
  return (
    <Container w="100%" size="md" py={60} px={40} bg="teal.0" bdrs={25}>
      <Stack>
        <Title order={2} c="gray.8">
          About
        </Title>
        <Text c="gray.8">
          I build responsive, accessible interfaces using React and Next.js. I
          focus on clean architecture and maintainable UI systems.
        </Text>
        <Group>
          <Badge>React</Badge>
          <Badge>TypeScript</Badge>
          <Badge>Next.js</Badge>
          <Badge>Mantine</Badge>
          <Badge>WordPress</Badge>
          <Badge>Sanity</Badge>
          <Badge>Jest</Badge>
        </Group>
      </Stack>
    </Container>
  );
};

export default About;
