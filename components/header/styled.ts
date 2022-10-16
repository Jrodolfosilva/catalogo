import styled from "styled-components";

export const ContainerHeader =  styled.header`

display: flex;
justify-content: space-between;
align-items: center;
padding: 10px;
position: fixed;
width: 100%;
height: 14vh;
top: 0%;
z-index: 099;
background-color: #e5e5e5;

nav {
 display:none;
 ${({OpenMobile}:any)=>OpenMobile&&`
 display:block;
 `}
 
    ul {
    
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 14vh;
    right: 0%;
    gap:20px;
    width: 70vw;
    height: 100vh;
    padding:50px 4px;
    text-align: center;
    background-color: #e5e5e5;
    
    }
  }


@media (min-width: 1024px) {

 padding: 10px 40px;

 nav {
    display:block;

    ul{
 
    flex-direction: row;
    position: static;
    top: 0vh;
    right: 0%;
    gap: 20px;
    width: auto;
    height: auto;
    padding: 0px;


    li{
        cursor:pointer;
        padding:6px;
    }
    
 }

}
}
/*colocar a configuração do desktop para o tablet */

@media (min-width: 768px) {
   nav{
    display:flex;
   }
}

`

export const Toogle = styled.div`
display:none;

@media (max-width:768px) {
    display: block;
}



`