import "@mantine/core/styles.css";
import {
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from "@mantine/core";
import { theme } from "@/theme/theme";

export const metadata = {
  title: "Dani's Portfolio",
  description: "A front end web developer professional portfolio ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Dani&apos;s Portfolio</title>

        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.png" />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
