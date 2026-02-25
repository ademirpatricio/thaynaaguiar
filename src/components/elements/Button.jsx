function Button({ label, link, target, title, className = " ", variant = "primary" }){

    const base = "w-full md:w-auto text-center inline-block px-12 py-6 font-bold tracking-[.15em] border-2 rounded-lg transition"

    const variantes = {

        primary: "text-primary border-primary hover:bg-primary hover:text-light",
        secondary: "text-light border-primary bg-primary hover:bg-darkprimary hover:border-darkprimary hover:text-light",
        terciary: "text-light border-light hover:bg-primary hover:text-light hover:border-primary",

    }

    return(
        <a 
            href={link} 
            target={target}
            title={title}
            className={`${base} ${variantes[variant]} ${className}`}
        >{label}
        </a>
    )
}
export default Button;
