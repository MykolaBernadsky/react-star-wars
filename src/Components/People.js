import React, {  useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import PersonListItem from './PersonListItem';

const Container = styled.div`
  margin-top: 10px;
`;




export default function People() {
  const [people, setPeople] = useState([]);
  

  useEffect(() => {
    axios.get("https://swapi.dev/api/people/")
      .then(res => {
        console.log(res.data.results);
        setPeople(res.data.results);
      });
  }, [setPeople]);

  const toPerson = useCallback((person, index) => <PersonListItem name={person.name} id={index + 1} />);
  


  return <Container>{people.map(toPerson)}</Container>
}