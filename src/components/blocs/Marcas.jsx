function Marcas(){
    return(
        <section id="marcas" className="w-full bg-primary py-14">

            { /* wrap ================================================================= */ }
            <div className="max-w-7xl mx-auto">

                <div className="w-full text-center flex justify-center mb-10">
                    <img src="/images/marcas-ic.svg" alt="" className="w-10 h-auto mr-4"/> 
                    <h3 className="text-white mt-8">Quem já acreditou no meu trabalho:</h3>
                </div>
                
                <div className="px-6 grid md:grid-cols-6 items-center gap-10">
                    <img src="/images/marcas/marca-1.png" alt="" className="w-100 h-auto"/>
                    <img src="/images/marcas/marca-2.png" alt="" className="w-100 h-auto"/>
                    <img src="/images/marcas/marca-3.png" alt="" className="w-100 h-auto"/>
                    <img src="/images/marcas/marca-4.png" alt="" className="w-100 h-auto"/>
                    <img src="/images/marcas/marca-5.svg" alt="" className="w-100 h-auto"/>
                    <img src="/images/marcas/marca-6.png" alt="" className="w-100 h-auto"/>
                </div>
                
            </div>

        </section>
    )
}
export default Marcas;