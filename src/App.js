import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import styled from "styled-components";

import People from "./Components/People";
import Person from "./Components/Person";
import Films from "./Components/Films";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

const Container = styled.div`
  margin: 111px;
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Container>
          <Route path="/" exact component={Home} />
          <Route path="/people" exact component={People} />
          <Route path="/people/:personId" exact component={Person} />
          <Route path="/films" component={Films} />
        </Container>
      </Router>
    </React.Fragment>
  );
}

export default App;
