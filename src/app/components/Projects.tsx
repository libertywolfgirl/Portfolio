import { Container, Title, Stack } from "@mantine/core";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "GlobalLink Marketing",
    description: "Marketing website for a translation software company.",
    role: "FrontEnd Developer",
    tech: ["React", "TypeScript", "Mantine", "WordPress", "Jest"],
    impact:
      "Helped created the website from the ground up and worked to boost performance from a Lighthouse score of 32 to 92, helping drive customers to the product.",
    url: "https://globallink.transperfect.com/",
  },
  {
    title: "Liberty's Wolf Den",
    description: "Personal fanfiction website.",
    role: "Fullstack Developer",
    tech: ["React", "TypeScript", "Mantine", "Sanity"],
    impact:
      "Developed the website independently to share stories with the world.",
    url: "https://libertys-wolf-den.vercel.app/",
  },
];

const Projects = () => {
  return (
    <Container
      variant="blue"
      w="100%"
      size="md"
      py={{ base: 30, md: 60 }}
      id="projects"
      px={{ base: 20, md: 40 }}
      bdrs={25}
    >
      <Stack>
        <Title order={2}>Projects</Title>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            role={project.role}
            tech={project.tech}
            impact={project.impact}
            url={project.url}
          />
        ))}
      </Stack>
    </Container>
  );
};

export default Projects;
