import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import FilmList from "./FilmList";


const Wrapper = styled.div` text-align:center `;

const Item = styled.div`
  color: #ffb13a;
  font-size: 25px;
  padding: 10px;
  text-align: center;
  border: 2px solid transparent;
`;

const Linked = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  color: #fff;
  border: 2px solid transparent;
  font-size: 20px;

  &:hover {
    color: #03a9f4;
    border-bottom-color: #03a9f4;
    transition: border-bottom-color .35s ease-in-out, color .35s ease-in-out;
  }
  `;

export default function Person() {
  const [person, setPerson] = useState();
  let { personId } = useParams();

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${personId}/`).then((res) => {

      setPerson(res.data);
    });
  }, [personId, setPerson]);

  if (!person) {
    return <div>Loading.....</div>;
  }



  return (
    <Wrapper >
      <Link to="/people">
        <Linked>Back</Linked>
      </Link>
      <Item>name: {person.name}</Item>
      <Item>gender: {person.gender}</Item>
      <Item>height: {person.height}</Item>
      <Item>hair: {person.hair_color}</Item>
      <FilmList filmLinks={person.films} /> 
    </Wrapper>
  );
}
