import React from "react";
import styled from "styled-components";

const ContainHeader = styled.div`
border:solid red;

h1{
    font-size:2vw;
}

h2{
    margin-top:1vw;
}
`

export default function Header(){
    return(
        < ContainHeader>
            <h1>Os objetivos de Desevolvimento Sustentável em Santa Teresa</h1>
            <h2>Com um conjunto de ações que tem como propósito melhorar a qualidade de vida da população como um todo, visando reduzir as desigualdades sociais e ampliar o acesso aos direitos e serviços básicos.</h2>
        </ ContainHeader>
    )
}