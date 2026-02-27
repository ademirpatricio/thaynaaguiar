import Button from "../elements/Button";

export default function Hero() {
  return (

    <section id="hero" 
    className="w-full py-0 md:pt-16
    bg-cover bg-top bg-no-repeat bg-[url('/images/hero-background.jpg')]">

      { /* wrap */ }
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-6">

        <div className="lg:max-w-xl md:w-3/5 md:text-center relative">
          <h1 
            data-aos="fade-up" data-aos-delay="0" 
            className="font-display text-dark mt-8 text-5xl md:text-6xl lg:text-8xl font-bold">
            Thayná <span className="text-primary">Aguiar</span>
          </h1>
          <p 
            data-aos="fade-up" data-aos-delay="200"
            className="lg:w-3/5 md:w-4/5 text-lg md:text-xl text-center text-dark mb-8 inline-block">
            Copywriter e criadora de conteúdo digital que 
            transforma ideias em <strong className="font-bold">conexões reais ✨</strong>
          </p>
          <Button 
            label={"↪ veja meu trabalho"} 
            link={"#servicos"}
            target={""}
            title={"Conheça meu trabalho"}
          />
          <img
            src="/images/tag.png" 
            alt=""
            className="absolute rotate-6
            translate-x-[70px] -translate-y-[248px] w-2/5
            md:translate-x-[180px] md:-translate-y-[280px] md:w-1/3
            lg:translate-x-[230px] lg:-translate-y-[290px]"
          />
        </div>

        <div className="lg:max-w-lg md:w-3/5 pt-20 lg:py-0">
          {/* Texto animado */}
          <img
            src="/images/texto-animado.png" alt="" 
            className="absolute h-32 animate-rotacao z-30 top-96 md:top-32 lg:top-64"
          />
          <img
            src="/images/hero-image-02.png" 
            alt="Foto da Thayná Aguiar"
            className="max-w-full lg:translate-y-[96px] lg:translate-x-[40px]"
          />
          <img
            data-aos="fade-up" data-aos-delay="300"
            src="/images/hero-image-01.png" 
            alt="Imagem da Thayná Aguiar"
            className="max-w-full -mt-96 lg:translate-y-[0]"
          />
        </div>

      </div>
    </section>
  )
}
