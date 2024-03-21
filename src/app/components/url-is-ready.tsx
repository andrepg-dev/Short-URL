'use client'
import { useContext, useEffect, useState } from "react";
import { ShortenedLink } from "../context/shortened-link";
import { toast } from "sonner";

export default function URLIsReady() {
  const { shortenedLink } = useContext(ShortenedLink);
  const [link, setLink] = useState<string>('')

  useEffect(() => {
    setLink(shortenedLink)
  }, [shortenedLink])

  const handleOnClick = () => {
    toast.success("Enlace copiado al portapapeles", { style: { background: "#18181b", color: "#FFf" } })
    navigator.clipboard.writeText(link)
  }

  return link !== "" && <div className="mt-5 border w-full bg-primary text-white py-5 animate-fade-in">
    <h4 className="text-sm md:text-base text-center font-light select-none text-pretty">Tu link está listo, toca el enlace para copiarlo</h4>
    <div className="text-center text-sm md:text-base">
      <span className="text-center !text-orange-500 underline hover:bg-orange-900 hover:!text-white p-1 px-3 rounded transition cursor-pointer" onClick={handleOnClick}>{link}</span>
    </div>
  </div>
}