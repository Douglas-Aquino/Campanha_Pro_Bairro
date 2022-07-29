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
background-color:#BC0547;
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


export default function Cardtwo(){
    return(
        <>
        <Contain>
            <Intro>
                <div>
                  <h2>Transporte</h2>  
                </div>
                <div>
                    <img src="https://autoescolasantamonica.com.br/wp-content/uploads/2013/05/icone-carro-branco-300x208.png" alt="Icone de carro"/>
                </div>
            </Intro>
            <Objetivos>
                <p>1.1 ouvimos diversas reclamações das linhas 006 e 007 que passam em Santa Teresa sobre sua quantidade atual de ónibus e será almentada para almentar a circulação dessas linhas.</p>
                <p>1.2 Será obrigatório os veículos circularem com o ar-condicionado ligado.</p>
                <p>1.3 Será feito um aplicativo de localização que dira com precisão onde e quanto tempo vai demorar para chegar em um determinado ponto.</p>
                <p>1.4 Sabemos das situações dos famosos bondinhos de Santa por isso a quantidade desses veículos tembém seram almentadas e teram 40% de vagas reservadas para seus moradores.</p>
            </Objetivos>

        </Contain>
        </>
    )
}