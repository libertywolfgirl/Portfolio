import { Container, Title, Text, Group, Stack, Badge } from "@mantine/core";

const About = () => {
  return (
    <Container
      variant="teal"
      w="100%"
      size="md"
      py={{ base: 30, md: 60 }}
      px={{ base: 20, md: 40 }}
      bdrs={25}
    >
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
          <Badge>WordPress</Badge>
          <Badge>Sanity</Badge>
          <Badge>Jest</Badge>
        </Group>
      </Stack>
    </Container>
  );
};

export default About;
