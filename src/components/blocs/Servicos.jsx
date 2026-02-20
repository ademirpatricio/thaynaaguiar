function Servicos(){
    return(
        <section id="servicos" className="w-full bg-dark">

            { /* wrap ================================================================= */ }
            <div className="max-w-7xl mx-auto mb-20 px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                
                { /* coluna da esquerda */ }
                <div className="relative">
                    <img
                        src="/images/servico-img-1.jpg" 
                        alt="Foto da Thayná Aguiar em entrevista com Guto Galamba"
                        className="h-auto -mt-40 mb-4 -rotate-12 absolute z-50 shadow-lg"
                    />
                    <img
                        src="/images/servico-img-2.jpg" 
                        alt="Foto da Thayná Aguiar em entrevista com Guto Galamba"
                        className="h-auto mb-4 ml-40 -mt-14 rotate-6 absolute z-40 shadow-lg"
                    />
                </div>

                { /* coluna da direita */ }
                <div className="text-white">
                    <h2>Comunicadora digital com 7 anos de experiência em conteúdo, redes sociais e <span className="text-primary">marketing</span> estratégico.</h2>
                    <p>Recifense, apaixonada por futebol e pelo universo digital. Transformo marcas em histórias que conectam, engajam e vendem. </p>
                    <p>Sou Especialista em criar conteúdos que fazem a diferença nas redes sociais, sempre buscando a melhor forma de contar a história da sua marca.</p>
                </div>

            </div> { /* fim do wrap */ }

            { /* wrap ================================================================= */ }
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 sm:grid-cols-2 gap-10">
                
                { /* coluna */ }
                <div className="text-white">
                    <img
                        src="/images/servico-ic-1.svg" 
                        alt="Ícone"
                        className="w-12 h-12 mb-4"
                    />
                    <h5 className="text-primary">DO ROTEIRO À TELA</h5>
                    <h3>Produção Audiovisual</h3>
                    <p>Produzo vídeos que contam histórias e geram resultados. Seja para anúncios, conteúdo para redes sociais, projetos ou campanhas completas.</p>
                </div>

                { /* coluna */ }
                <div className="text-white">
                    <img
                        src="/images/servico-ic-4.svg" 
                        alt="Ícone"
                        className="w-12 h-12 mb-4"
                    />
                    <h5 className="text-primary">TEXTOS QUE CONECTAM</h5>
                    <h3>Copywriting e Conteúdo</h3>
                    <p>Desenvolvimento de copy estratégica que estabelece conexões verdadeiras com seu público e converte interesse em ação.</p>
                </div>

                { /* coluna */ }
                <div className="text-white">
                    <img
                        src="/images/servico-ic-2.svg" 
                        alt="Ícone"
                        className="w-12 h-12 mb-4"
                    />
                    <h5 className="text-primary">ESTRATÉGIA + CRIATIVIDADE</h5>
                    <h3>Gestão de Redes Sociais</h3>
                    <p>Gestão completa de redes sociais com foco em construir uma presença digital que gera engajamento real e resultados consistentes.</p>
                </div>

                { /* coluna */ }
                <div className="text-white">
                    <img
                        src="/images/servico-ic-3.svg" 
                        alt="Ícone"
                        className="w-12 h-12 mb-4"
                    />
                    <h5 className="text-primary">PLANEJAMENTO E RESULTADO</h5>
                    <h3>Marketing Digital</h3>
                    <p>Estratégias integradas de marketing digital que transformam objetivos em números reais. Foco em resultados mensuráveis e crescimento consistente.</p>
                </div>

            </div>{ /* fim do wrap */ }
            
        </section>
    )
}
export default Servicos;