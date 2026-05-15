import type { Metadata } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { GeistPixelSquare } from "geist/font/pixel";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "@/components/logo";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ui",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Recoupable Research | Music Industry Insights & Analysis",
  description:
    "Deep dives into music technology, artist tools, and the future of the music industry",
  openGraph: {
    title: "Recoupable Research",
    description:
      "Deep dives into music technology, artist tools, and the future of the music industry",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${instrumentSerif.variable} ${plusJakartaSans.variable} ${GeistSans.variable} ${GeistMono.variable} ${GeistPixelSquare.variable}`}
    >
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background-blur shadow-border-bottom">
              <div className="container mx-auto flex h-14 max-w-screen-2xl items-center px-6 md:px-8">
                <a
                  className="mr-6 flex items-center"
                  href="/"
                  aria-label="Recoupable Research home"
                >
                  <Logo />
                </a>
                <nav className="flex flex-1 items-center justify-end gap-2">
                  <ThemeToggle />
                </nav>
              </div>
            </header>

            <main className="flex-1">{children}</main>

            <footer className="shadow-border-top py-8 md:py-0">
              <div className="container mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-4 px-6 md:h-24 md:flex-row md:px-8">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                  Built by{" "}
                  <a
                    href="https://recoupable.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-medium text-foreground underline decoration-muted-foreground/40 underline-offset-4 transition-colors hover:decoration-foreground"
                  >
                    Recoup
                  </a>
                </p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
