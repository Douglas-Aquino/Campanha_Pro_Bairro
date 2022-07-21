import React from "react";
import styled from "styled-components";

const ContainHeader = styled.div`
width:80vw;
margin-top:1vw;
h1{
    font-size:2vw;
    text-align:center;
}
h2{
    margin-top:1vw;
}
@media(max-width: 768px){
    width:90vw;
    height:40vh;
    h1{
        font-size:4vw;
    }
    h2{
        font-size:2.5vw;  
    }
}
@media(max-width: 375px){
height:33vh;
    h1{
        font-size:5vw;
    }
    h2{
        margin-top:5vw;
        font-size:4vw;
    }
}
`

export default function Header(){
    return(
        < ContainHeader>
            <h1>Os objetivos de Desevolvimento Sustentável em Santa Teresa</h1>
            <h2>Com um conjunto de ações que tem como propósito melhorar a qualidade de vida dos hambitantes desse bairro como um todo, visando reduzir as desigualdades sociais e ampliar o acesso aos direitos e serviços básicos.</h2>
        </ ContainHeader>
    )
}