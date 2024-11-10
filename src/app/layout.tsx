import "@/styles/globals.css"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import type { Metadata, Viewport } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://sujjeee.com"),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "suraj gupta",
    "suraj gupta portfolio",
    "suraj sujjeee",
    "suraj github",
    "sujjeee",
    "sujjeeee",
    "sujjeee github",
    "sujjeee portfolio",
    "software developer",
    "Full stack developer",
  ],
  authors: [
    {
      name: "Suraj Gupta",
      url: "https://sujjeee.com",
    },
  ],
  creator: "sujjeee",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@sujjeeee",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="mx-auto w-full mb-16 max-w-screen-sm overflow-x-hidden py-8">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
