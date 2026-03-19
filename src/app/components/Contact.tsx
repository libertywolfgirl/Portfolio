import { Container, Title, Text, Stack } from "@mantine/core";

const Contact = () => {
  return (
    <Container
      variant="teal"
      w="100%"
      size="md"
      py={{ base: 30, md: 60 }}
      px={{ base: 20, md: 40 }}
      bdrs={25}
      id="contact"
    >
      <Stack>
        <Title order={2}>Contact</Title>
        <Text>Email: danimac@1791.com</Text>
        <Text>GitHub: github.com/libertywolfgirl</Text>
      </Stack>
    </Container>
  );
};

export default Contact;
