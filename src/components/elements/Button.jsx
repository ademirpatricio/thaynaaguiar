function Button({ label, link, target, title, variant = "primary" }){

    const base = "inline-block px-12 py-6 font-bold tracking-[.15em] border-2 rounded-lg transition"

    const variantes = {

        primary: "text-primary border-primary hover:bg-primary hover:text-light",
        secondary: "text-light border-primary bg-primary hover:bg-darkprimary hover:border-darkprimary hover:text-light",

    }

    return(
        <a 
            href={link} 
            target={target}
            title={title}
            className={`${base} ${variantes[variant]}`}
        >{label}
        </a>
    )
}
export default Button;
