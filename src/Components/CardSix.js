import React from "react";
import styled from "styled-components";

const Contain = styled.div`
margin-top:5vw;
width:88vw;
height:50vw;
`
const Intro = styled.div`
width:100%;
height:20vw;
display: flex;  
justify-content: space-around;
align-items: center;
background-color:#32A450;
color:white;

img{
    width:15vw;
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


export default function CardSix(){
    return(
        <>
        <Contain>
            <Intro>
                <div>
                  <h2>Bem-Estar</h2>  
                </div>
                <div>
                    <img src="https://static.wixstatic.com/media/459125_95abf1bd53f04d2fb6fc4e3eea2fcb27~mv2.png/v1/fill/w_560,h_586,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ICONE%20BRANCO%20%20PNG.png" alt="Icone de casa"/>
                </div>
            </Intro>
            <Objetivos>
                <p>1.1 Sera implementada nas praças de Santa Teresa alguns equipamentos de exercicíos bebedouros para maximizar o lazer de sus habitantes .</p>
                <p>1.2 Vão ser criadas pesquisas para saber o que pode ser feito para aumetar satisfação dos moradores.</p>
                <p>1.3 Teram aulas de yoga duas vezes ao mês feitas exclusivamente nas quadras de várias praças e como cuidar de suma alimentação.</p>
                <p>1.4 Tambem vão ser criadas aulas sobre controle de eletrônicos.</p>
                <p>1.5 Cronstruiremos mais clínicas para axiliar os moradores de forma mais rápida a cuidar de si e se necessário encaminhar a emergência. </p>

            </Objetivos>

        </Contain>
        </>
    )
}