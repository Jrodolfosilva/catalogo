import React, { useState } from "react";
import {ContainerHeader,Toogle} from "./styled"

const Header = () =>{

    const [mobile,setMobile] = useState(false)
    return(
        <ContainerHeader OpenMobile={mobile}>
            <figure>
                <img src="" alt="LOGO" />
            </figure>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Empresa</li>
                    <li>Produtos</li>
                    <li>Blog</li>
                    <li>Localização</li>
                </ul>
            </nav>
            <Toogle 
            onClick={()=>setMobile(!mobile)}
            >
                <img src="" alt={mobile?"Fechar":"Abrir"} />

            </Toogle>
        </ContainerHeader>
    )
}

export default Header