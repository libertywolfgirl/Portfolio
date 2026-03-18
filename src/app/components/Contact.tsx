import { Container, Title, Text, Stack } from "@mantine/core";

const Contact = () => {
  return (
    <Container size="md" py={60} id="contact">
      <Stack>
        <Title order={2}>Contact</Title>
        <Text>Email: danimac@1791.com</Text>
        <Text>GitHub: github.com/libertywolfgirl</Text>
      </Stack>
    </Container>
  );
};

export default Contact;
