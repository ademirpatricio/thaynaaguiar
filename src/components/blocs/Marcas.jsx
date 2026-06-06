function Marcas(){
    return(
        <section id="marcas" className="w-full bg-primary pt-14 px-6">

            { /* wrap ================================================================= */ }
            <div className="max-w-7xl mx-auto">

                <div className="
                    w-full flex flex-col mb-10
                    md:flex-row 
                    justify-center 
                    text-center ">

                    <img src="/images/marcas-ic.svg" alt="Ícone de clientes e marcas" className="w-10 h-auto mx-auto md:mx-0 md:mr-4"/> 
                    <h3 className="text-white mt-8 text-3xl lg:text-4xl">Quem já acreditou no meu trabalho:</h3>
                </div>
                
                <div className="
                    px-6 gap-10 grid items-center justify-items-center
                    grid-cols-2
                    md:grid-cols-3
                    lg:grid-cols-6 
                    ">
                    <img src="/images/marcas/marca-1.png" alt="Logo da primeira marca" loading="lazy" className="w-full md:w-[85%] h-auto mx-auto lg:opacity-70 lg:transition-all lg:duration-300 lg:hover:opacity-100 lg:hover:scale-105"/>
                    <img src="/images/marcas/marca-2.png" alt="Logo da segunda marca" loading="lazy" className="w-full md:w-3/4 h-auto mx-auto lg:opacity-70 lg:transition-all lg:duration-300 lg:hover:opacity-100 lg:hover:scale-105"/>
                    <img src="/images/marcas/marca-3.png" alt="Logo da terceira marca" loading="lazy" className="w-full md:w-[85%] h-auto mx-auto lg:opacity-70 lg:transition-all lg:duration-300 lg:hover:opacity-100 lg:hover:scale-105"/>
                    <img src="/images/marcas/marca-4.png" alt="Logo da quarta marca" loading="lazy" className="w-full md:w-4/5 h-auto mx-auto lg:opacity-70 lg:transition-all lg:duration-300 lg:hover:opacity-100 lg:hover:scale-105"/>
                    <img src="/images/marcas/marca-5.svg" alt="Logo da quinta marca" loading="lazy" className="w-full md:w-3/4 h-auto mx-auto lg:opacity-70 lg:transition-all lg:duration-300 lg:hover:opacity-100 lg:hover:scale-105"/>
                    <img src="/images/marcas/marca-6.png" alt="Logo da sexta marca" loading="lazy" className="w-full md:w-3/4 h-auto mx-auto lg:opacity-70 lg:transition-all lg:duration-300 lg:hover:opacity-100 lg:hover:scale-105"/>
                </div>
                
            </div>

        </section>
    )
}
export default Marcas;
