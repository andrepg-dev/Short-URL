import { Button } from "@/components/ui/button";
import { Cloud, DatabaseZap, Github, Lightbulb, Link, Linkedin, ShieldCheck, Star, Zap } from "lucide-react";
import LinkNext from "next/link";
import Background from "./components/background";
import CardInput from "./components/card-input";
import InputURL from "./components/input";
import URLIsReady from "./components/url-is-ready";

export default function Home() {

  return (
    <>
      <Background />
      <main className='flex min-h-screen p-5 md:p-10 w-full justify-center items-center animate-fade-in'>
        <LinkNext className="absolute top-6 left-4 md:top-8 md:left-24 items-center flex gap-2 hover:opacity-90 transition" href={""}>
          <Button size={'icon'} className="size-7" >
            <Link size={17} strokeWidth={1} />
          </Button>

          <span className='text-lg md:text-xl font-semibold '>ChortURL</span>
        </LinkNext>

        <nav className="absolute top-6 right-4 md:top-8 md:right-24 flex gap-4 items-center">
          <LinkNext href={'https://github.com/AndrePonce3322/'} target="_blank" title="Github profile">
            <Github size={29} strokeWidth={1} className='cursor-pointer' />
          </LinkNext>
          <LinkNext href={'https://www.linkedin.com/in/andreponceg'} target="_blank" title="Linkedin profile">
            <Linkedin size={29} strokeWidth={1} className='cursor-pointer' />
          </LinkNext>
        </nav>

        <section className="w-[585px] mt-20">
          <header className="text-center">
            <h1 className="text-4xl md:text-5xl mb-4 font-medium ">Short URL</h1>
            <p className="text-sm md:text-base mb-4 md:mb-0 ">Short URL es una herramienta de código abierto para generar enlaces cortos </p>
            <p className="text-sm md:text-base">Fácil de compartir, disponible para telefonos, escritorios y tablets </p>
          </header>

          <div className='w-full p-4 bg-white mt-14  border flex flex-col gap-3 rounded'>
            <h2 className='font-medium text-xl md:text-2xl text-center'>Pega la URL para ser acortada</h2>
            <InputURL />

            <URLIsReady />

            <div className="grid md:grid-cols-2 text-center mt-7 md:mt-9 mb-5 gap-12">
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


          <footer className="mt-5 md:mt-10 text-center pb-5 md:pb-0">
            <p className="text-sm md:text-base">Al compartir el enlace con tus amigos se te otorgarán 10 enlaces</p>

            <div className="text-sm md:text-base mt-3 md:mt-0">

              <div className="flex items-center gap-1 justify-center">
                <Zap className="fill-orange-600" size={18} strokeWidth={1} /> Desarrollado por
                <LinkNext href={'https://andrepg.me'} target="_blank" className="underline z-20">
                  andrepg.me
                </LinkNext>
              </div>

              <div className="md:absolute w-full mt-1 gap-1 md:-mt-6 left-0 flex flex-col items-center md:flex-row md:justify-between md:px-24 px-4 z-10">
                <LinkNext target="_blank" href={"https://github.com/AndrePonce3322/short-url/issues/new"} className="flex items-center gap-2 underline" title="Sugerir cambios">
                  <Lightbulb size={18} strokeWidth={1} className="fill-orange-600" />
                  <span>Sugerir cambios</span>
                </LinkNext>
                <LinkNext target="_blank" href={"https://github.com/AndrePonce3322/short-url"} className="flex items-center gap-2" title="Dar estrella en GitHub">
                  <Star size={18} strokeWidth={1} className="fill-orange-600" />
                  <span>Estrella en GitHub</span>
                </LinkNext>

              </div>
            </div>
          </footer>
        </section>
      </main >
    </>
  );
}
