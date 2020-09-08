import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import People from "./Components/People";
import Person from "./Components/Person";
import Films from "./Components/Films";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import FilmPage from "./Components/FilmPage";

const Container = styled.div`
  margin: 111px;
  display: flex;
  justify-content: center;
`;

const GlobalStyle = createGlobalStyle`

  .nav-link{
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#ffb13a")};
  }
  .crawl {
    color: ${(props) => (props.theme.mode === "dark" ? "#ffb13a" : "#fff")};
  }
`;

const Button = styled.button`

  position: fixed;
  left: 47%;
  top: 10%;
  padding: 15px;
  background: transparent;
  color: #fff;
  outline: none;
  border: 1px solid #fff;
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    border-color: #03a9f4;
    color: #03a9f4;
    transition: border-bottom-color 0.2s ease-in, color 0.2s ease-in; 
  }
  `;



function App() {
  const [theme,setTheme] = useState({mode : 'dark'})

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <Router>
          <Navbar />
          <Button onClick={e => setTheme(theme.mode === 'dark' ? { mode: 'ligth'} : {mode : 'dark'})} >Toggle theme</Button>
          <Container>
            <Route path="/" exact component={Home} />
            <Route path="/people" exact component={People} />
            <Route path="/people/:personId" exact component={Person} />
            <Route path="/films" exact component={Films} />
            <Route path="/films/:filmId" exact component={FilmPage} />
          </Container>
        </Router>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
