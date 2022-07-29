import React from "react";
import styled from "styled-components";

const Contain = styled.div`
margin-top:5vw;
width:88vw;
height:50vw;
@media(max-width: 375px){
    height:60vw;
   
   }
`
const Intro = styled.div`
width:100%;
height:20vw;
display: flex;  
justify-content: space-around;
align-items: center;
background-color:#E29310;
color:white;

img{
    width:20vw;
}

h2{
    font-size:4vw;
}
`
const Objetivos = styled.div`
margin:0 3vw;
font-size:1.5vw;

li{
    list-style:circle;
    padding:1vw 0;
}
`


export default function CardFive(){
    return(
        <>
        <Contain>
            <Intro>
                <div>
                  <h2>Progetos Sociais</h2>  
                </div>
                <div>
                    <img src="https://ingresso.unifesp.br/images/institutional/pattern/icons/icone_refugiados_branco.png" alt="Icone de casa"/>
                </div>
            </Intro>
            <Objetivos>
                <h2>Progetos que vão ser implementados:</h2>
                <ul>
                    <li>Reflorestamento: Restaurar uma áera desflorestada por meio de plantio de sementes da flora local.</li>
                    <li>Curso de finacias e controle de gastos.</li>
                    <li>Gastronomia.</li>
                    <li>Como se portar no mercado de trabalho.</li>
                    <li>Atividade cultural.</li>
                </ul>
            </Objetivos>

        </Contain>
        </>
    )
}