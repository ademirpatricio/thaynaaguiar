import Social from "../elements/Social"

function Header(){
    return(
        <header className="flex w-full py-8 justify-center align-center">

            <nav className="flex gap-10 text-primary text-xl align-center">
                <a className="" href="#servicos">serviços</a>
                <a href="#sobre">sobre mim</a>
                <a href="#projetos">projetos</a>
                <a href="#contato">fale comigo</a>
            </nav>

            <Social 
            tiktok={"https://www.tiktok.com/@thaayag?_t=8qjZsXDxg2A&_r=1"}
            linkedin={"https://www.linkedin.com/in/thayn%C3%A1-aguiar-1a92992ab/"} 
            instagram={"https://www.instagram.com/thaayag/"}
            className=""
            />

        </header>
    )
}
export default Header;