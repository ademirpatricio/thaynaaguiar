import { useState } from "react"

const fotos = [
  { src: "/images/galeria/image-01.jpg", alt: "Thayná em foto editorial" },
  { src: "/images/galeria/image-02.jpg", alt: "Thayná em pose criativa" },
  { src: "/images/galeria/image-03.jpg", alt: "Thayná trabalhando em projeto digital" },
  { src: "/images/galeria/image-04.jpg", alt: "Thayná em produção de conteúdo" },
  { src: "/images/galeria/image-05.jpg", alt: "Capa do mídia kit de Thayná" },
  { src: "/images/galeria/image-06.jpg", alt: "Retrato profissional de Thayná" },
  { src: "/images/galeria/image-07.jpg", alt: "Thayná em ambiente de trabalho" },
  { src: "/images/galeria/image-08.jpg", alt: "Ambiente criativo com estética de conteúdo digital" },
  { src: "/images/galeria/image-09.jpg", alt: "Ambiente criativo com estética de conteúdo digital" },
  { src: "/images/galeria/image-10.jpg", alt: "Ambiente criativo com estética de conteúdo digital" },
  { src: "/images/galeria/image-11.jpg", alt: "Ambiente criativo com estética de conteúdo digital" },
]

export default function Galeria() {
  const [start, setStart] = useState(0)
  const itemsPerPage = 3
  const end = Math.min(start + itemsPerPage, fotos.length)
  const currentFotos = fotos.slice(start, end)
  const canPrev = start > 0
  const canNext = end < fotos.length

  return (
    <section id="galeria" className="w-full bg-terciary py-10 hidden md:block">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between mb-8">
          <button
            type="button"
            onClick={() => setStart(Math.max(0, start - itemsPerPage))}
            disabled={!canPrev}
            aria-label="Voltar imagens"
            className="rounded border-2 border-primary bg-light text-primary disabled:opacity-40 disabled:cursor-not-allowed px-4 py-3 text-2xl transition hover:bg-primary hover:text-light"
          >
            ‹
          </button>

          <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
            {currentFotos.map((foto, index) => (
              <div
                key={start + index}
                data-aos="fade-left"
                data-aos-delay={(start + index) * 80}
                className="overflow-hidden rounded-lg bg-light aspect-[4/5]"
              >
                <img
                  src={foto.src}
                  alt={foto.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setStart(start + itemsPerPage)}
            disabled={!canNext}
            aria-label="Avançar imagens"
            className="rounded border-2 border-primary bg-light text-primary disabled:opacity-40 disabled:cursor-not-allowed px-4 py-3 text-2xl transition hover:bg-primary hover:text-light"
          >
            ›
          </button>
        </div>

      </div>
    </section>
  )
}
