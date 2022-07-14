//Imports
import React from "react";
import Header from "./Components/Header";
import CardOne from "./Components/CardOne";

//Estilos
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

//Comandos
import { BrowserRouter as Router,
  Routes,
  Route,
  Link
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
const LinkOne = styled(Link)`
width:30vw:
height:10vh;
font-size:1.2vw;
text-align: center;
background-color:#238618;
border-radius:10px;
text-decoration: none;
border:solid black;

img{
  width:8vw;
}

&:hover{
  background-color:#74B238;
  transition:background-color 0.5s ;
}

`
const ContainLinks = styled.div`
border:solid red;
height:15vh;
width:90vw;
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
            <ContainLinks> 
              <LinkOne to="CardOne">Meio ambiente <img src="https://www.solosengineering.com.br/wp-content/uploads/2020/01/solo-eng-icone-solu%C3%A7%C3%B5es-meio-ambiente.png" alt="Logo hambiental"/> </LinkOne>
            </ContainLinks>
          </li>
        </ul>

        <Routes>
          <Route path="CardOne" element={<CardOne/>}/> 
        </Routes>
          
      </Router>
      </Contain>
      </>
    )
  }
}