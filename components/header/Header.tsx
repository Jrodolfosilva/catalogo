import React from "react";
import {ContainerHeader} from "./styled"

const Header = () =>{
    return(
        <ContainerHeader>
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
        </ContainerHeader>
    )
}

export default Header