import styled from "styled-components";

export const ContainerHeader =  styled.header`
display: flex;
justify-content: space-between;
align-items: center;
min-height: 80px;
padding: 5px 40px;
border-bottom: 1px solid red;
z-index: 9;
position: fixed;
width: 100%;
top:0;
background-color: #fff;

nav{
   ul{
      display: flex;
      gap:50px;

      li{
         display: block;
         padding: 5px 10px;
         cursor:pointer;
         color:#777777;
         &:hover{
            color:#ff4e00;
         }
      }
   }
}

`

export const Toogle = styled.div`
display: none;

@media (max-width:768px) {
   
}



`