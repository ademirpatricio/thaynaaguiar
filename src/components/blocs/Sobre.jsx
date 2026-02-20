import Button from "../elements/Button";
import Videos from "../elements/Videos";

function Sobre(){
    return(
        <section id="sobre" className="w-full">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
                <div>aaa</div>
                <div>
                    <h3>Quem sou, o que já fiz e o que posso fazer pela sua empresa ou projeto.</h3>
                    <h4>Com 7 anos de experiência no mercado digital, já passei por vários projetos e sei exatamente como comunicar o seu projeto ou produto.</h4>
                    <ul>
                        <li>Fui por 3 anos a cara do <strong>VAI CAIR NO ENEM</strong>, um dos maiores perfis voltados para a educação;</li>
                        <li>Fui repórter do caderno de esportes do LeiaJá, portal de notícias do Recife;</li>
                        <li>Trabalhei produzindo conteúdo para grandes nomes do mercado digital, como Guto Galamba, Rodrigo Barros, Gilberto Augusto, Janguiê Diniz, Ana Tomazelli e muitos outros; </li>
                        <li>Sou a cara, produtora de conteúdo e copywriter do GoExplosion GDF, um dos maiores eventos de marketing digital e empreendedorismo da América Latina.</li>
                    </ul>
                    <Button 
                        label={"📄 veja meu currículo"} 
                        link={"#"}
                        target={""}
                    />
                </div>
            </div>


            <Videos/>

        </section>
    )
}
export default Sobre;