import { Title, Text, Stack, Card, Button } from "@mantine/core";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  role: string;
  tech: string[];
  impact: string;
  url: string;
};

const ProjectCard = ({
  title,
  description,
  role,
  tech,
  impact,
  url,
}: Props) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Stack>
        <Title order={3} c="gray.8">
          {title}
        </Title>
        <Text c="gray.8">{description}</Text>
        <Text size="sm" c="gray.8">
          <b>Role:</b> {role}
        </Text>
        <Text size="sm" c="gray.8">
          <b>Tech:</b> {tech.join(", ")}
        </Text>
        <Text size="sm" c="gray.8">
          <b>Impact:</b> {impact}
        </Text>
        <Link href={url} target="_blank">
          <Button>View Project</Button>
        </Link>
      </Stack>
    </Card>
  );
};

export default ProjectCard;
