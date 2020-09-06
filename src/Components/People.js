import React, {  useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import PersonListItem from './PersonListItem';

const Container = styled.div`
  margin-top: 10px;
`;

const Wrapper = styled.div`
  display: flex,
  justify-content: center;
  flex-direction: column;
`;

const Input = styled.input`
    width: 250px;
    padding: 7px;
    background: transparent;
    border: 2px solid #fff;
    border-radius: 25px;
    color: #fff;
    font-size: 20px;
    outline: none;

`;


export default function People() {
  const [people, setPeople] = useState([]);
  const [search, setSearch] = useState('');
  

  useEffect(() => {
    axios.get("https://swapi.dev/api/people/")
      .then(res => {
        console.log(res.data.results);
        setPeople(res.data.results);
      });
  }, [setPeople]);

  const persons = people.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
  console.log(people, 'people')

  const toPerson = useCallback((person, index) => <PersonListItem name={person.name} id={index + 1} />);
  


  return (
    <Wrapper>
      <Input type="text" onChange={e => setSearch(e.target.value)} />
      <Container>{persons.map(toPerson)}</Container>
    </Wrapper>
    
  )
}
