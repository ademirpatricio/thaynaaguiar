import Button from "../elements/Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full overflow-hidden bg-cover bg-top bg-no-repeat bg-[url('/images/hero-background.jpg')] py-0 md:pt-16"
    >

      { /* wrap */ }
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-8 px-6 pt-12 md:min-h-[720px] md:flex-row md:gap-4 md:pt-10 lg:min-h-[780px] lg:gap-12">

        <div className="relative z-10 w-full text-center md:w-1/2 lg:max-w-xl">
          <h1
            data-aos="fade-up" data-aos-delay="0"
            className="mt-8 font-display text-5xl font-bold text-dark sm:text-6xl md:text-6xl lg:text-8xl">
            Thayná <span className="text-primary">Aguiar</span>
          </h1>
          <p
            data-aos="fade-up" data-aos-delay="200"
            className="mx-auto mb-8 max-w-lg px-2 text-center text-lg text-dark md:text-xl lg:text-2xl">
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
            aria-hidden="true"
            loading="lazy"
            className="absolute right-6 top-32 hidden w-32 rotate-6 md:block lg:right-10 lg:top-48 lg:w-44"
          />
        </div>

        <div className="relative w-full max-w-[420px] pt-6 md:w-1/2 md:max-w-none md:pt-0 lg:max-w-lg">
          {/* Texto animado */}
          <img
            src="/images/texto-animado.png" alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute left-0 top-8 z-30 hidden h-24 animate-rotacao md:block lg:left-2 lg:top-28 lg:h-32"
          />
          <img
            src="/images/hero-image-02.png"
            alt="Foto da Thayná Aguiar"
            loading="lazy"
            className="relative z-10 w-full md:translate-y-10 lg:translate-x-10 lg:translate-y-24"
          />
          <img
            data-aos="fade-up" data-aos-delay="300"
            src="/images/hero-image-01.png"
            alt="Imagem da Thayná Aguiar"
            loading="lazy"
            className="relative z-20 -mt-80 w-full md:-mt-80 lg:-mt-96"
          />
        </div>

      </div>
    </section>
  )
}
