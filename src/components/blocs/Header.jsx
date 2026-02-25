import { useState, useEffect } from "react"
import Social from "../elements/Social"

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "text-light bg-transparent md:bg-primary md:backdrop-blur-md md:shadow-lg"
            : "text-primary bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto flex items-center 
        justify-end md:justify-center
        gap-20 px-6 py-8">

            {/* Desktop */}
            <ul className="hidden md:flex gap-8 text-lg">
                <li><a href="#">Início</a></li>
                <li><a href="#servicos">Serviços</a></li>
                <li><a href="#sobre">Sobre mim</a></li>
                <li><a href="#midiakit">Audiência</a></li>
                <li><a href="https://wa.me/5581997965267?text=Oi%20Thayn%C3%A1%2C%20tudo%20bem%3F%20%0AVim%20do%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20seu%20trabalho." target="_blank">Contato</a></li>
            </ul>

            {/* Logo */}
            <Social 
                tiktok={"https://www.tiktok.com/@thaayag?_t=8qjZsXDxg2A&_r=1"}
                linkedin={"https://www.linkedin.com/in/thayn%C3%A1-aguiar-1a92992ab/"} 
                instagram={"https://www.instagram.com/thaayag/"}
                className={`hidden lg:flex ${
                    scrolled ? "filter brightness-0 invert" : ""
                  }`}
            />

            {/* Botão Mobile */}
            <button 
                className="md:hidden text-4xl text-primary bg-light
                           pt-2 px-4 pb-4 rounded-lg shadow-lg"
                onClick={() => setOpen(true)}
                >
                ☰
            </button>
        </nav>
      </header>

      {/* OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity z-50 duration-300 md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* MENU LATERAL */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-dark text-white p-8 transform transition-transform duration-300 md:hidden z-50 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button 
          className="mb-8 text-xl"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        <ul className="flex flex-col gap-6 text-lg">
            <li><a onClick={() => setOpen(false)} href="#">Início</a></li>
            <li><a onClick={() => setOpen(false)} href="#servicos">Serviços</a></li>
            <li><a onClick={() => setOpen(false)} href="#sobre">Sobre mim</a></li>
            <li><a onClick={() => setOpen(false)} href="#midiakit">Audiência</a></li>
            <li><a onClick={() => setOpen(false)} href="https://wa.me/5581997965267?text=Oi%20Thayn%C3%A1%2C%20tudo%20bem%3F%20%0AVim%20do%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20seu%20trabalho." target="_blank">Contato</a></li>
        </ul>
      </aside>
    </>
  )
}











