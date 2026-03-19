import { ContainerVariant } from "@mantine/core";

type ExtendedContainerVariant = ContainerVariant | "blue" | "teal";

declare module "@mantine/core" {
  export interface ContainerProps {
    variant?: ExtendedContainerVariant;
  }
}
