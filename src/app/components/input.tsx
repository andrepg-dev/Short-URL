'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShortLinkGenerator } from "@/lib/short-link-generator";
import confetti from "canvas-confetti";
import { FormEvent, useContext, useRef, useState } from "react";
import { ShortenedLink } from "../context/shortened-link";
import { LoaderIcon } from 'lucide-react'
import { toast } from "sonner";

export default function InputURL() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isLoading, setLoading] = useState(false)

  const { setShortenedLink } = useContext(ShortenedLink)

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const value = inputRef.current?.value
    if (value === '' || !value) return

    setLoading(true)

    const generateLink = ShortLinkGenerator(value)

    toast.promise(() => generateLink, { // Pass the value parameter to ShortLinkGenerator
      loading: "Generando enlace...",
      success: "Tu enlace está listo",
      dismissible: true,
      error: "Error al generar el enlace",
      style: { background: "#18181b", color: "#FFF" }
    })

    const { redirect } = await generateLink;
    // After the promise is resolved, we can stop the loading state
    setLoading(false)

    confetti({
      particleCount: 40,
      spread: 335,
      origin: { y: 0.6 },
    })

    // navigator.clipboard.writeText(redirect || "") // Copy the shortened link to the clipboard
    setShortenedLink(redirect) // Save the shortened link in the context
  }

  return <form className="flex gap-2 mt-3 md:flex-row flex-col" onSubmit={(e) => handleOnSubmit(e)}>
    <Input placeholder='Pega tu enlace aquí' autoFocus type='url' ref={inputRef} />

    {isLoading ? <Button type="submit" disabled>
      <LoaderIcon className="mr-2 h-4 w-4 animate-spin" /> Generando enlace
    </Button> : (
      <Button type="submit">Acortar URL</Button>
    )}
  </form>
}