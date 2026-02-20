import Hero from "./components/blocs/Hero"
import Servicos from "./components/blocs/Servicos"
import Marcas from "./components/blocs/Marcas"
import Sobre from "./components/blocs/Sobre"
import Videos from "./components/blocs/Videos"
import Midiakit from "./components/blocs/Midiakit"
import Cta from "./components/blocs/Cta"

export default function App() {
  return (
    <div className="wrap">
      <Hero/>
      <Servicos/>
      <Marcas/>
      <Sobre/>
      <Videos/>
      <Midiakit/>
      <Cta/>
    </div> 
  )
}
