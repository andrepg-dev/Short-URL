import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ShortenedLinkProvider from "./context/shortened-link";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ChortURL - Acortador de enlaces",
  description: "acortador de enlaces de código abierto creado por @andre para simplificar el compartir en la web. Genera enlaces cortos con un clic, haciendo la gestión de enlaces más rápida y eficiente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Toaster richColors position="top-center" expand duration={2500}/>
        <ShortenedLinkProvider>
          {children}
        </ShortenedLinkProvider>
      </body>
    </html>
  );
}
