//Imports
import React from "react";
import Header from "./Components/Header";
import CardOne from "./Components/CardOne";
import Cardtwo from "./Components/Cardtwo";
import CardThree from "./Components/CardThree";
import CardFour from "./Components/CardFour";
import CardFive from "./Components/CardFive";
import CardSix from "./Components/CardSix";

//Estilos
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

//Comandos
import { BrowserRouter as Router,
  Routes,
  Route,
  Link as Link
} from "react-router-dom";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
`
const Contain = styled.div`
margin:0 5vw;

ul{
  list-style: none;
  a{
    color:white;
  }

  p{
    width:5vw;
    height:1.5vw;
    font-size:1vw;
    text-align:center;
    position: fixed;
    bottom:3vw;
    right:0.5vw;
    background-color:#5D6674;
    scroll-behavior: auto;
    border-radius:10px;
    &:hover{
      text-decoration:underline white;
    }
  }
}
`

const ContainLink = styled.div`
width:10vw;
height:10vw;
background-color:green;
border-radius:20px;

text-align:center;
a{
  font-size:1.3vw;
  text-decoration:none;
}

img{
  width:8vw;
}

&:hover{
  background-color:#74B238;
  transition:background-color 0.5s ;
}
`
const ContainLinkTow =styled.div`
width:10vw;
height:10vw;
background-color:#BC0547;
border-radius:20px;
text-align:center;

a{
  font-size:1.3vw;
  text-decoration:none;
}

img{
  margin-top:0.5vw;
  width:9vw;
}

&:hover{
  background-color:#DC5865;
  transition:background-color 0.5s ;
}
`
const ContainLinkthree =styled.div`
width:10vw;
height:10vw;
background-color:#0047AB;
border-radius:20px;
text-align:center;

a{
  font-size:1.3vw;
  text-decoration:none;
}

img{
  margin-top:0.5vw;
  width:6.5vw;
}

&:hover{
  background-color:#2BA7F1;
  transition:background-color 0.5s ;
}
`
const ContainLinkFour =styled.div`
width:10vw;
height:10vw;
background-color:#4A0481;
border-radius:20px;
text-align:center;

a{
  font-size:1.3vw;
  text-decoration:none;
}

img{
  width:10vw;
}

&:hover{
  background-color:#894FC0;
  transition:background-color 0.5s ;
}
`
const ContainLinkFive =styled.div`
width:10vw;
height:10vw;
background-color:#E29310;
border-radius:20px;
text-align:center;

a{
  font-size:1.3vw;
  text-decoration:none;
}
img{
  width:8vw;
}
&:hover{
  background-color:#EDD664;
  transition:background-color 0.5s ;
}
`
const ContainLinkSix =styled.div`
width:10vw;
height:10vw;
background-color:#32A450;
border-radius:20px;
text-align:center;

a{
  font-size:1.3vw;
  text-decoration:none;
}
img{
  width:7vw;
}
&:hover{
  background-color:#AED3B5;
  transition:background-color 0.5s ;
}
`

const QuardContainLink = styled.div`
border:solid blue;
width:85vw;
height:15vw;
display:flex;
align-items:center;
justify-content:space-around;
`

export default class Home extends React.Component{
  render(){
    return(
      <>
      <Contain>
      <GlobalStyle/>
      <Header/>
      <Router>
        <ul>
          <li>
            <Link to="/"><p>Voltar</p></Link>
            <QuardContainLink>
              <ContainLink> 
              <Link to="CardOne"> Meio Ambiente <img src="https://www.solosengineering.com.br/wp-content/uploads/2020/01/solo-eng-icone-solu%C3%A7%C3%B5es-meio-ambiente.png" alt="Logo hambiental"/> </Link>
              </ContainLink>

              <ContainLinkTow> 
              <Link to="Cardtwo"> Transporte <img src="https://autoescolasantamonica.com.br/wp-content/uploads/2013/05/icone-carro-branco-300x208.png" alt="Logo"/> </Link>
              </ContainLinkTow>

              <ContainLinkthree> 
              <Link to="CardThree">Segurança <img src="https://primealarms.com.br/img/icones/sirene.png" alt="Icone de seguraça"/> </Link>
              </ContainLinkthree>

              <ContainLinkFour> 
              <Link to="CardFour">Moradia<img src="https://cdn-ccncp.nitrocdn.com/nISmpRTGzsHDbbtTrlOlkGGGOUgColnA/assets/static/optimized/rev-8cda03f/wp-content/uploads/2021/02/Aplicacoes_03.png" alt="Icone de casa"/> </Link>
              </ContainLinkFour>

              <ContainLinkFive> 
              <Link to="CardFive">Progetos Sociais<img src="https://ingresso.unifesp.br/images/institutional/pattern/icons/icone_refugiados_branco.png" alt="Icone de boneco coberto por uma par de maões"/> </Link>
              </ContainLinkFive>

              <ContainLinkSix> 
              <Link to="CardSix">Bem-Estar<img src="https://static.wixstatic.com/media/459125_95abf1bd53f04d2fb6fc4e3eea2fcb27~mv2.png/v1/fill/w_560,h_586,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ICONE%20BRANCO%20%20PNG.png" alt="Icone de saúde"/> </Link>
              </ContainLinkSix>
            </QuardContainLink>
           
          </li>
        </ul>

        <Routes>
          <Route path="CardOne" element={<CardOne/>}/> 
          <Route path="Cardtwo" element={<Cardtwo/>}/> 
          <Route path="CardThree" element={<CardThree/>}/>
          <Route path="CardFour" element={<CardFour/>}/>
          <Route path="CardFive" element={<CardFive/>}/>
          <Route path="CardSix" element={<CardSix/>}/>
        </Routes>
          
      </Router>
      </Contain>
      </>
    )
  }
}