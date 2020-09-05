import React, {useCallback} from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
 
const Container = styled.div`
  margin-top: 50px;
`;

const Item = styled.div`
  color: #ffb13a;
  font-size: 25px;
  padding: 25px;
  text-align: center;
  border: 2px solid transparent;

  &:hover {
    border-color: #ffb13a;
    border-radius: 25px;
    transition: border-color .35s ease-in-out;
  }
`;


export default function People({ data }) {

  function PersonListItem ({name, id}) {
    return (
      <Link to={`/${id}`} key={id}>
        <Item>{name}</Item>
      </Link>
    );
  }

  const toPerson = useCallback((person, index) =>  <PersonListItem name={person.name} index={index + 1}/>)


  return (
    <Container>
      {data.map(toPerson)}
    </Container>
  );
}
