import Button from "../elements/Button";

function Midiakit(){
    return(
        <section id="midiakit" className="w-full pt-8 pb-12 md:py-12 bg-terciary">

            { /* wrap ================================================================= */ }
            <div className="
                flex flex-col md:flex-row
                max-w-7xl mx-auto px-6 gap-10
                items-center text-center md:text-left
            ">
                <div className="flex-1">
                    <img
                        src="/images/midiakit-img-1.jpg" 
                        alt="Foto do MidiaKit de Thayná Aguiar"
                        className="h-auto w-full"
                    />
                </div>
                <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl">
                        Baixe meu <span className="text-primary">mídia kit </span> 
                        e conheça os números da minha audiência
                    </h3>
                    <Button 
                        label={"↪ baixar mídia kit"} 
                        target={"_blank"}
                        title={"Baixe agora meu midia kit e conheça os números da minha audiencia"}
                        link={"https://malabares.com.br/arquivos/midia-kit-thayna-aguiar.pdf"}
                    />
                </div>
            </div>

        </section>
    )
}
export default Midiakit;