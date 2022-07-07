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
  text-decoration: none;
}
`
const Contain = styled.div`
padding:0 5vw;

ul{
  list-style: none;
  
}
`
const ContainLink = styled.div`
width:10vw;
margin-top:2vw;
font-size:1.2vw;
text-align: center;
background-color:#74B238;
border-radius:10px;

img{
  width:8vw;
}
a{
  color:white;
} 

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
            <Link to="/">Voltar</Link>
            <ContainLink> <Link to="CardOne">1. Meio ambiente <img src="https://www.solosengineering.com.br/wp-content/uploads/2020/01/solo-eng-icone-solu%C3%A7%C3%B5es-meio-ambiente.png" alt=""/> </Link></ContainLink>
             
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