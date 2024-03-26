import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ShortenedLinkProvider from "./context/shortened-link";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ChortURL - Acortador de enlaces",
  description: "Aplicación creada por @andreponce, simplifica compartir tus enlaces en la web. Genera enlaces cortos con un clic, haciendo la gestión de enlaces más rápida y eficiente.",
  icons: [
    {
      rel: "icon",
      type: "image/ico",
      href: "/favicon.ico",
      url: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/favicon.ico",
      url: "/favicon.ico",
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Analytics />

        <Toaster richColors position="top-center" expand duration={2500} />
        <ShortenedLinkProvider>
          {children}
        </ShortenedLinkProvider>
      </body>
    </html>
  );
}
