import Button from "../elements/Button";
import Videos from "../elements/Videos";

function Sobre(){
    return(

        <section id="sobre" className="w-full lg:pb-0
        bg-[url('/images/sobre-background.jpg')] 
        bg-cover bg-center bg-no-repeat">

            { /* wrap */ }
            <div className="flex flex-col md:flex-row 
            max-w-7xl mx-auto px-6 gap-12 justify-center">

                { /* coluna da esquerda com imagens */ }
                <div className="flex-1" data-aos="fade-up" data-aos-delay="0">
                    {/* Ícone carta */}
                    <img
                    src="/images/sobre-ic-1.svg" alt="" 
                    className="absolute animate-flutuando z-50
                    h-24 top-64 w-20
                    lg:h-24 lg:top-80 lg:w-32"
                    />
                    {/* Ícone fala */}
                    <img
                    src="/images/sobre-ic-2.svg" alt="" 
                    className="absolute animate-flutuando z-50
                    w-20 top-36 right-0
                    lg:w-28 lg:top-48 lg:right-10"
                    />
                    {/* Ícone carrinho */}
                    <img
                    src="/images/sobre-ic-3.svg" alt="" 
                    className="absolute animate-flutuando z-50
                    h-20 top-0 left-4
                    lg:h-24 lg:top-0 lg:left-12"
                    />
                    {/* Foto de Thayná de background */}
                    <img 
                    src="/images/sobre-image-02.png" 
                    alt="Foto da Thayná Aguiar"
                    className="w-full h-auto mx-auto"
                    />
                    {/* Imagem de Thayná */}
                    <img
                    src="/images/sobre-image-01.png" 
                    alt="Foto da Thayná Aguiar"
                    className="w-4/5 lg:w-4/6 h-auto -mt-80 mx-auto 
                    lg:-translate-y-[230px]"
                    />
                </div>

                { /* coluna da direita com informações */ }
                <div className="flex-1" data-aos="fade-up" data-aos-delay="200">
                    <h3 className="text-3xl md:text-3xl lg:text-3xl">Quem sou, o que já fiz e o que posso fazer pela sua <span className="text-primary font-bold">empresa ou projeto.</span></h3>
                    <h4 className="mb-8">Com 7 anos de experiência no mercado digital, já passei por vários projetos e sei exatamente como comunicar o seu projeto ou produto.</h4>
                    <ul className="list-none space-y-2 mb-8">
                        <li className="flex flex-row gap-4">
                            <img src="/images/icone-brilho.png" alt="" className="w-8 h-8 mt-1" />
                            Fui por 3 anos a cara do VAI CAIR NO ENEM, um dos maiores perfis voltados para a educação;
                        </li>
                        <li className="flex flex-row gap-4">
                            <img src="/images/icone-brilho.png" alt="" className="w-8 h-8 mt-1" />
                            Fui repórter do caderno de esportes do LeiaJá, portal de notícias do Recife;
                        </li>
                        <li className="flex flex-row gap-4">
                            <img src="/images/icone-brilho.png" alt="" className="w-8 h-8 mt-1" />
                            Trabalhei produzindo conteúdo para grandes nomes do mercado digital, como Guto Galamba, Rodrigo Barros, Gilberto Augusto, Janguiê Diniz, Ana Tomazelli e muitos outros; 
                        </li>
                        <li className="flex flex-row gap-4">
                            <img src="/images/icone-brilho.png" alt="" className="w-8 h-8 mt-1" />
                            Sou a cara, produtora de conteúdo e copywriter do GoExplosion GDF, um dos maiores eventos de marketing digital e empreendedorismo da América Latina.
                        </li>
                    </ul>

                    <Button 
                    label={"📄 meu currículo"} 
                    link={"https://drive.google.com/file/d/1EAUhUGQRyyW5qc5HbVxpdUMrFMwecar5/view"}
                    target={"_blank"}
                    title={"Veja meu currículo e conheça minha trajetória"}
                    />

                </div>
            </div>

            <Videos/>

        </section>
    )
}
export default Sobre;