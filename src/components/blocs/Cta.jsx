import Button from "../elements/Button";
import Footer from "../elements/Footer";

function Cta(){
    return (
        <section id="cta" className="
            w-full
            bg-[url('/images/cta-background.jpg')] 
            bg-cover bg-center bg-no-repeat
        ">
            <div 
            data-aos="fade-up" data-aos-delay="0"
            className="max-w-7xl lg:max-w-2xl mx-auto px-6 text-center text-light">
                <h2>Vamos criar juntos?</h2>
                <p className="text-xl mb-10">
                    Se você procura alguém para desenvolver conteúdo digital 
                    que gera resultados reais, vamos conversar!
                </p>
                <Button 
                    label={"💬 fale comigo"} 
                    link={"https://wa.me/5581997965267?text=Oi%20Thayn%C3%A1%2C%20tudo%20bem%3F%20%0AVim%20do%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20seu%20trabalho."}
                    variant={"secondary"}
                    target={"blank"}
                    title = {"Fale comigo e saiba mais sobre meu trabalho"}
                />
            </div>
            <Footer/>
        </section>
        
    )
}
export default Cta;