import Header from "./Header"
import Button from "../elements/Button";

export default function Hero() {
  return (

    <section id="hero" className="w-full py-0 
      bg-[url('/images/hero-background.jpg')] 
      bg-cover bg-center 
      bg-no-repeat">

      <Header/>

      { /* wrap */ }
      <div className="max-w-7xl mx-auto flex justify-center items-center">

        { /* coluna esquerda */ }
        <div className="w-1/2">
          <h1 className="font-display text-dark text-4xl md:text-6xl font-bold ">
          Thayná Aguiar</h1>
          <p className="text-lg md:text-xl text-dark mb-4 inline-block">
            Copywriter e criadora de conteúdo digital que 
            transforma ideias em conexões reais ✨
          </p>
          <Button 
            label={"↪ conheça meu trabalho"} 
            link={"#sobre"}
            target={""}
          />
        </div>

        { /* coluna direita */ }
        <div className="w-1/2">
          <img
            src="/images/hero-image-01.png" 
            alt="Foto da Thayná Aguiar"
            className="w-30 mx-auto"
          />
        </div>

      </div>
    </section>
  )
}
