import "@mantine/core/styles.css";
import {
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from "@mantine/core";

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
      </head>
      <body>
        <MantineProvider theme={{ primaryColor: "cyan" }}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
