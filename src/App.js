import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import {  Dimmer, Loader } from "semantic-ui-react";
import styled from 'styled-components';
import './App.css';

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import People from "./Components/People";
import Person from './Components/Person';


const Container = styled.div` 
  margin: 111px;
  display: flex;
  justify-content: center; 
`;

export default function App() {
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState();
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  let {personId} = useParams();

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch("https://swapi.dev/api/people");
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    }

    async function fetchFilms() {
      let res = await fetch("https://swapi.dev/api/films");
      let data = await res.json();
      setFilms(data.results);
      setLoading(false);
    }

   

   
    
    console.log("people:", people);
    console.log("films", films);

    fetchPeople();
    fetchFilms();
    
  }, []);

  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Container>
          {loading ? (
            <Dimmer active inverted>
              <Loader inverted>Loading....</Loader>
            </Dimmer>
          ) : (
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/people">
                <People data={people} />
              </Route>

              <Route exact path='/:personId'>
                <Person data={person}/>
              </Route>
              
            </Switch>
          )}
        </Container>
      </Router>
    </React.Fragment>
  );
}
