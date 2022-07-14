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
`

export default function Header(){
    return(
        < ContainHeader>
            <h1>Os objetivos de Desevolvimento Sustentável em Santa Teresa</h1>
            <h2>Com um conjunto de ações que tem como propósito melhorar a qualidade de vida dos hambitantes desse bairro como um todo, visando reduzir as desigualdades sociais e ampliar o acesso aos direitos e serviços básicos.</h2>
        </ ContainHeader>
    )
}