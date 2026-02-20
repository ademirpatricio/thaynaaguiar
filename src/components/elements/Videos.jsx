export default function Videos(){
    return (
        <div id="videos" className="w-full pt-16">
            <h3 className="text-center text-2xl md:text-3xl lg:text-4xl">
                Confira um pouquinho do <span className="text-primary"> meu trabalho</span>
            </h3>
            <div className="
            max-w-7xl mx-auto px-6 lg:px-0 
            flex flex-col md:flex-row gap-8
        ">

                {/* Vídeo */}    
                <div className="flex-1">
                    <div className="w-full aspect-video">
                        <iframe 
                            className="w-full h-full rounded" title="YouTube video player" frameborder="0" 
                            src="https://www.youtube.com/embed/StJgFR5CAYc?si=W35MILw95p64lxSQ" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                        </iframe>
                        <p className="px-4 mt-4">
                            Desenvolvimento de campanhas completas para produtos 
                            digitais, com foco em resultados e conversão.
                        </p>
                    </div>
                </div>

                {/* Vídeo */}
                <div className="flex-1">
                    <div className="w-full aspect-video">
                        <iframe 
                            className="w-full h-full rounded" title="YouTube video player" frameborder="0" 
                            src="https://www.youtube.com/embed/AC-GmVd7tD4?si=i_cwIR41KffKbkB7" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                        </iframe>
                        <p className="px-4 mt-4">
                            Roteiro, gravação e todo o conteúdo que fez o evento, 
                            produto ou serviço bombar nas redes sociais.
                        </p>
                    </div>
                </div>

                {/* Vídeo */}
                <div className="flex-1">
                    <div className="w-full aspect-video">
                        <iframe 
                            className="w-full h-full rounded" title="YouTube video player" frameborder="0" 
                            src="https://www.youtube.com/embed/g-jNnmZGMEU?si=CDiHAuhCFEwNlCyG" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                        </iframe>
                        <p className="px-4 mt-4">
                            Sabe o maior evento de marketing digital da 
                            América Latina? Passeio da estratégia até a execução.
                        </p>
                    </div>
                </div>

            </div>
            
        </div>
    )
}