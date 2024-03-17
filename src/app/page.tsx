import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Cloud, DatabaseZap, Github, Link, Linkedin, ShieldCheck, Zap } from "lucide-react";
import Background from "./components/background";
import CardInput from "./components/card-input";
import LinkNext from "next/link";

export default function Home() {
  return (
    <>
      <Background />
      <main className='flex min-h-screen p-5 md:p-10 w-full justify-center items-center animate-fade-in'>
        <LinkNext className="absolute top-6 left-4 md:top-8 md:left-24 items-center flex gap-2 hover:opacity-90 transition" href={""}>
          <Button size={'icon'} className="size-7" >
            <Link size={17} strokeWidth={1} />
          </Button>

          <span className='text-lg md:text-xl font-semibold'>ChortURL</span>
        </LinkNext>

        <nav className="absolute top-6 right-4 md:top-8 md:right-24 flex gap-4 items-center">
          <Github size={29} strokeWidth={1} className='cursor-pointer' />
          <Linkedin size={29} strokeWidth={1} className='cursor-pointer' />
        </nav>

        <section className="w-[585px] mt-20">
          <header className="text-center">
            <h1 className="text-4xl md:text-5xl mb-4 font-medium">Short URL</h1>
            <p className="text-sm md:text-base mb-4 md:mb-0">Short URL es una herramienta de código abierto para generar enlaces cortos </p>
            <p className="text-sm md:text-base">Fácil de compartir, disponible para telefonos, escritorios y tablets </p>
          </header>

          <div className='w-full p-4 bg-white mt-14  border flex flex-col gap-3 rounded'>
            <h2 className='font-medium text-xl md:text-2xl text-center'>Pega la URL para ser acortada</h2>
            <div className="flex gap-2 mt-3 md:flex-row flex-col">
              <Input placeholder='Pega tu enlace aquí' autoFocus type='url' />
              <Button>Acortar URL</Button>
            </div>

            <div className="grid md:grid-cols-2 text-center mt-10 mb-5 gap-12">
              <CardInput Icon={ShieldCheck} text='Seguro y confiable' />
              <CardInput Icon={Cloud} text='Datos en la nube' />
              <CardInput Icon={Zap} text='Redirección veloz' />
              <CardInput Icon={DatabaseZap} text='Servidores rápidos' />
            </div>
          </div>

          <div className='w-full p-4 bg-white border-b border-l border-r flex flex-col gap-3'>
            Quieres extender tu cuota de enlaces?
            <LinkNext href='/login' className='underline text-orange-600'>Inicia sesión</LinkNext>
          </div>


          <footer className="mt-10 text-center">
            <p className="text-sm md:text-base">Al compartir el enlace con tus amigos se te otorgarán 10 puntos extras</p>
            <p className="text-sm md:text-base mt-3 md:mt-0">Desarrollado por <LinkNext href={'https://andrepg.me'} target="_blank" className="underline">andrepg.me</LinkNext></p>
          </footer>
        </section>
      </main >
    </>
  );
}
