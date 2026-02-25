import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from "./components/blocs/Header"
import Hero from "./components/blocs/Hero"
import Servicos from "./components/blocs/Servicos"
import Marcas from "./components/blocs/Marcas"
import Sobre from "./components/blocs/Sobre"
import Midiakit from "./components/blocs/Midiakit"
import Cta from "./components/blocs/Cta"

import Whatsapp from "./components/elements/Whatsapp.jsx"

export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, // anima só uma vez
    })
  }, [])

  return (
    
    <div className="wrap">
      <Header/>
      <Hero/>
      <Servicos/>
      <Marcas/>
      <Sobre/>
      <Midiakit/>
      <Cta/>
      <Whatsapp />
    </div> 

  )
}
