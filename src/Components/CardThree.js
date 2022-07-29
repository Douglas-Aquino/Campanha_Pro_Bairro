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
background-color:#0047AB;
color:white;

img{
    width:16vw;
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


export default function CardThree(){
    return(
        <>
        <Contain>
            <Intro>
                <div>
                  <h2>Segurança</h2>  
                </div>
                <div>
                    <img src="https://primealarms.com.br/img/icones/sirene.png" alt="Icone de segurança"/>
                </div>
            </Intro>
            <Objetivos>
                <p>1.1 Será implementada uma política de ronda de viaturas no mais tardar da noite para perpetuar a segurança dos cidadões de Santa Tereza. </p>
                <p>1.2 Seram contruidos sinas nas ruas de Santa Teresa para garantir a ordem do ir e vir de veículos.</p>
                <p>1.3 Vamos substituir placas de sinalizasão danificadas por novas e pintaremos ruas para orientar e informar contudores e pedestres sobre condições das ruas.</p>
                <p>1.4 Contruiremos torres com câmeras vigilância para vigiar e promover a prevenção de atos ilegais por parte de sua morandores.</p>

            </Objetivos>

        </Contain>
        </>
    )
}