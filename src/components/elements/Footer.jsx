import Social from "./Social"

export default function Footer(){
    return (
        <footer className="
            flex flex-col md:flex-row justify-center
            gap-8 md:gap-20 pt-20
            items-center text-light
        ">
            <p className="text-xs mb-0">
                ©2024 <strong>Thayná Aguiar</strong> • Feito com muito 
                <span className="text-primary"> ❤</span> em Recife - PE
            </p>
            <Social 
            tiktok={"https://www.tiktok.com/@thaayag?_t=8qjZsXDxg2A&_r=1"}
            linkedin={"https://www.linkedin.com/in/thayn%C3%A1-aguiar-1a92992ab/"} 
            instagram={"https://www.instagram.com/thaayag/"}
            className="filter brightness-0 invert"
            />
        </footer>
    )
}