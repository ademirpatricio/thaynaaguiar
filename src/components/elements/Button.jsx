function Button({ label, link, target, title, className = " ", variant = "primary" }){

    const base = "box-border inline-block w-full max-w-full whitespace-normal break-words rounded-lg border-2 px-6 py-5 text-center text-sm font-bold leading-tight tracking-[.08em] transition sm:px-8 sm:text-base md:w-auto md:px-12 md:py-6 md:tracking-[.15em]"

    const variantes = {

        primary: "text-primary border-primary hover:bg-primary hover:text-light",
        secondary: "text-light border-primary bg-primary hover:bg-darkprimary hover:border-darkprimary hover:text-light",
        terciary: "text-light border-light hover:bg-primary hover:text-light hover:border-primary",

    }

    return(
        <a 
            href={link} 
            target={target || undefined}
            rel={target === '_blank' ? 'noopener noreferrer' : undefined}
            title={title}
            className={`${base} ${variantes[variant]} ${className}`}
        >{label}
        </a>
    )
}
export default Button;
