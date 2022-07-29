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
background-color:#238618;
color:white;

img{
    width:19.5vw;
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


export default function CardOne(){
    return(
        <>
        <Contain>
            <Intro>
                <div>
                  <h2>Meio Ambiente</h2>  
                </div>
                <div>
                    <img src="https://www.solosengineering.com.br/wp-content/uploads/2020/01/solo-eng-icone-solu%C3%A7%C3%B5es-meio-ambiente.png" alt=""/>
                </div>
            </Intro>
            <Objetivos>
                <p>1.1 Descutir maneiras com os habitantes do bairro de Santa Teresa,para incentiver boas praticas e cuidado com seu habiente. </p>
                <p>1.2 Será construido um movimento social para ensinar crianças e adultos á tratar seu lixo e novas lixeiras de descarte seram alocadas no Bairro de Santa Teresa. </p>
                <p>1.3 Será feito uma análise no bairro para detectar boeirros e valas com algum tipo de defeito.</p>
                <p>1.4 Haverá uma análise para detectar casas em situção de emergência e os cidadões que lá habitam seram realocados.</p>
                <p>1.5 Será construido uma ciclovia em toda região para amenizar o uso de carro.</p>
            </Objetivos>

        </Contain>
        </>
    )
}