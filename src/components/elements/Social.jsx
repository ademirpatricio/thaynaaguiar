export default function Social({tiktok, instagram, linkedin, className = " "}){
    return(
        <div className={`flex gap-2 ${className}`}>

            {/* Tiktok Ícone */}
            <a href={tiktok} target="_blank">
                <img src="images/icones/ic-tiktok.svg" alt=""
                className="w-8 h-auto hover:opacity-80 transition"/>
            </a>

            {/* Instagram Ícone */}
            <a href={instagram} target="_blank">
                <img src="images/icones/ic-instagram.svg" alt=""
                className="w-8 h-auto hover:opacity-80 transition"/>
            </a>

            {/* Linkedin Ícone */}
            <a href={linkedin} target="_blank">
                <img src="images/icones/ic-linkedin.svg" alt=""
                className="w-8 h-auto hover:opacity-80 transition"/>
            </a>

        </div>
    )
}