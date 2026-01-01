import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={cn(inter.className, "min-h-screen antialiased")}>
        <div className="relative flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center">
              <div className="mr-4 flex">
                <a className="mr-6 flex items-center space-x-2" href="/">
                  <span className="font-bold text-xl">Recoupable Research</span>
                </a>
              </div>
              <nav className="flex items-center space-x-6 text-sm font-medium">
                <a href="/blog" className="transition-colors hover:text-foreground/80">
                  Blog
                </a>
                <a href="https://recoupable.com" className="transition-colors hover:text-foreground/80">
                  About Recoupable
                </a>
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
      </body>
    </html>
  );
}
