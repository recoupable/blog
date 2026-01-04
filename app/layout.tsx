import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "@/components/logo";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Recoupable Research | Music Industry Insights & Analysis",
  description: "Deep dives into music technology, artist tools, and the future of the music industry",
  openGraph: {
    title: "Recoupable Research",
    description: "Deep dives into music technology, artist tools, and the future of the music industry",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(GeistSans.className, instrumentSerif.variable, "min-h-screen antialiased")} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 w-full">
            <div className="container flex h-14 max-w-screen-2xl items-center">
              <div className="mr-4 flex pl-8">
                <a className="mr-6 flex items-center space-x-2" href="/">
                  <Logo />
                </a>
              </div>
              <nav className="flex flex-1 items-center justify-end space-x-2 pr-8">
                <ThemeToggle />
              </nav>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
              <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                Built by{" "}
                <a
                  href="https://recoupable.com"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium underline underline-offset-4"
                >
                  Recoupable
                </a>
                . Empowering artists with data-driven insights.
              </p>
            </div>
          </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
