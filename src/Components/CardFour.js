import React from "react";
import styled from "styled-components";

const Contain = styled.div`
margin-top:5vw;
width:88vw;
height:50vw;
@media(max-width: 375px){
    height:70vw;
   
   }
`
const Intro = styled.div`
width:100%;
height:20vw;
display: flex;  
justify-content: space-around;
align-items: center;
background-color:#4A0481;
color:white;

img{
    width:25vw;
}

h2{
    font-size:4vw;
}
`
const Objetivos = styled.div`
margin:0 3vw;
font-size:1.5vw;

p{
    padding:1vw 0;
}
`


export default function CardFour(){
    return(
        <>
        <Contain>
            <Intro>
                <div>
                  <h2>Moradia</h2>  
                </div>
                <div>
                    <img src="https://cdn-ccncp.nitrocdn.com/nISmpRTGzsHDbbtTrlOlkGGGOUgColnA/assets/static/optimized/rev-8cda03f/wp-content/uploads/2021/02/Aplicacoes_03.png" alt="Icone de casa"/>
                </div>
            </Intro>
            <Objetivos>
                <p>1.1 Criara análizadas de moradias em situações precárias e seus moradoes seram realocados enquando vemos se é posível salvar o imóvel.</p>
                <p>1.2 Abriremos um canal de conversa para darmos um auxílio aluguel para pessoas que esperam sua análize de suas residências pode ser salva ou não.</p>
                <p>1.3 Haverá um auxílio financeiro para maradias que sofreram danos por desastres naturais.</p>
                <p>1.4 As principais ruas de Santa Teresa seram pintadas de 2 em 2 anos para preservar sua bleza rústica.</p>

            </Objetivos>

        </Contain>
        </>
    )
}