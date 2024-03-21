'use client'
import { createContext, useState } from "react";

interface ShortenedLink {
  shortenedLink: string;
  setShortenedLink: (value: string) => void;
}

export const ShortenedLink = createContext<ShortenedLink>({
  shortenedLink: '',
  setShortenedLink: () => { },
});

export default function ShortenedLinkProvider({ children }: { children: React.ReactNode }) {
  const [shortenedLink, setShortenedLink] = useState<string>('');

  return (
    <ShortenedLink.Provider value={{ shortenedLink, setShortenedLink }}>
      {children}
    </ShortenedLink.Provider>
  );
}
