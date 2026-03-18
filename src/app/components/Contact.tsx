import { Container, Title, Text, Stack } from "@mantine/core";

const Contact = () => {
  return (
    <Container
      w="100%"
      size="md"
      py={60}
      px={40}
      bg="teal.0"
      bdrs={25}
      id="contact"
    >
      <Stack>
        <Title order={2} c="gray.8">
          Contact
        </Title>
        <Text c="gray.8">Email: danimac@1791.com</Text>
        <Text c="gray.8">GitHub: github.com/libertywolfgirl</Text>
      </Stack>
    </Container>
  );
};

export default Contact;
