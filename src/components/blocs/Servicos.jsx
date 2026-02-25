import Button from "../elements/Button";

function Servicos(){
    return(

        <section id="servicos" className="w-full bg-dark">

            { /* wrap ================================================================= */ }
            <div className=" max-w-7xl mx-auto mb-20 px-6 
            items-center flex flex-col md:flex-row gap-12">
                
                { /* coluna da esquerda com fotos */ }
                <div data-aos="fade-up" data-aos-delay="0" className="flex-1 items-center px-6">
                    <img
                    src="/images/servico-img-1.jpg" 
                    alt="Foto da Thayná Aguiar em entrevista com Guto Galamba"
                    className="h-auto w-full -rotate-12 shadow-lg lg:w-4/5 img-rotate "
                    />
                    <img
                    src="/images/servico-img-2.jpg" 
                    alt="Foto da Thayná Aguiar em entrevista com Guto Galamba"
                    className="h-auto w-full -mt-10 ml-4 rotate-6 shadow-lg
                    lg:w-4/5 lg:-mt-40 lg:ml-28"
                    />
                </div>

                { /* coluna da direita com informações */ }
                <div className="flex-1 text-white">
                    <h2 className="text-2xl lg:text-4xl">Comunicadora digital com 7 anos de experiência em conteúdo, redes sociais e <span className="text-primary">marketing</span> estratégico.</h2>
                    <p>Recifense, apaixonada por futebol e pelo universo digital. Transformo marcas em histórias que conectam, engajam e vendem. </p>
                    <p>Sou Especialista em criar conteúdos que fazem a diferença nas redes sociais, sempre buscando a melhor forma de contar a história da sua marca.</p>
                    <Button 
                        label={"↪ minha experiência"} 
                        link={"#sobre"}
                        target={""}
                        title={"Conheça minha trajetória"}
                        variant="terciary"
                    />
                </div>

            </div>

            { /* wrap ================================================================= */ }
            <div className="max-w-7xl mx-auto px-6 gap-10 md:gap-12 lg:gap-16
            grid md:grid-cols-2 lg:grid-cols-4">
                
                { /* coluna 1 */ }
                <div className="text-white" data-aos="fade-up" data-aos-delay="0">
                    <img
                    src="/images/servico-ic-1.svg" 
                    alt="Ícone"
                    className="w-12 h-12 mb-4"
                    />
                    <h5 className="text-primary">DO ROTEIRO À TELA</h5>
                    <h3 className="text-2xl lg:text-4xl">Produção Audiovisual</h3>
                    <p>Produzo vídeos que contam histórias e geram resultados. Seja para anúncios, conteúdo para redes sociais, projetos ou campanhas completas.</p>
                </div>

                { /* coluna 2 */ }
                <div className="text-white" data-aos="fade-up" data-aos-delay="150">
                    <img
                    src="/images/servico-ic-4.svg" 
                    alt="Ícone"
                    className="w-12 h-12 mb-4"
                    />
                    <h5 className="text-primary">TEXTOS QUE CONECTAM</h5>
                    <h3 className="text-2xl lg:text-4xl">Copywriting e Conteúdo</h3>
                    <p>Desenvolvimento de copy estratégica que estabelece conexões verdadeiras com seu público e converte interesse em ação.</p>
                </div>

                { /* coluna 3 */ }
                <div className="text-white" data-aos="fade-up" data-aos-delay="300">
                    <img
                    src="/images/servico-ic-2.svg" 
                    alt="Ícone"
                    className="w-12 h-12 mb-4"
                    />
                    <h5 className="text-primary">ESTRATÉGIA + CRIATIVIDADE</h5>
                    <h3 className="text-2xl lg:text-4xl">Gestão de Redes Sociais</h3>
                    <p>Gestão completa de redes sociais com foco em construir uma presença digital que gera engajamento real e resultados consistentes.</p>
                </div>

                { /* coluna 4 */ }
                <div className="text-white" data-aos="fade-up" data-aos-delay="450">
                    <img
                    src="/images/servico-ic-3.svg" 
                    alt="Ícone"
                    className="w-12 h-12 mb-4"
                    />
                    <h5 className="text-primary">PLANEJAMENTO E RESULTADO</h5>
                    <h3 className="text-2xl lg:text-4xl">Marketing Digital</h3>
                    <p>Estratégias integradas de marketing digital que transformam objetivos em números reais. Foco em resultados mensuráveis e crescimento consistente.</p>
                </div>

            </div>{ /* fim do wrap */ }
            
        </section>
    )
}
export default Servicos;