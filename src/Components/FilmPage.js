import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";


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

  const Plot = styled.p`
    line-heigth: 10px;
  `

export default function Film() {
  const [film, setFilm] = useState();
  let { filmId } = useParams();

  useEffect(() => {
    axios.get(`https://swapi.dev/api/films/${filmId}/`).then((res) => {
    
      setFilm(res.data);
    });
  }, [filmId, setFilm]);

  if (!film) {
    return <div>Loading.....</div>;
  }


  return (
    <Wrapper >
      <Link to="/films">
        <Linked>Back</Linked>
      </Link>
      <Item> <h1>{film.title}</h1></Item>
      <Item>Episode: {film.episode_id}</Item>
      <Item><Plot>{film.opening_crawl}</Plot></Item>
    </Wrapper>
  );
}
