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
border:solid blue;
padding:0 5vw;

ul{
  list-style: none;
  
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
            <Link to="/">Home</Link>
            <Link to="CardOne">Bla</Link>
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