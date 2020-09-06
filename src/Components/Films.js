import React, {  useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import styled from 'styled-components';

const Item = styled.div`
  color: #ffb13a;
  font-size: 25px;
  padding: 25px;
  text-align: center;
  border: 2px solid transparent;

  &:hover {
    color: #03a9f4;
    border-color: #03a9f4;
    border-radius: 25px;
    transition: border-color .35s ease-in-out, color .35s ease-in-out;
  }
`;

const Loading = styled.div`font-size: 25px; color: #fff; `

export default function Films() {
  const [film, setFilms] = useState([]);
  

  useEffect(() => {
    axios.get("https://swapi.dev/api/films/")
      .then(res => {
        console.log(res.data.results);
        setFilms(res.data.results);
      });
  }, [setFilms]);



  const toFilm = useCallback((film, index) => {
    return (
      <Link to={`/films/${index+1}`} key={index + 1}>
        <Item>{film.title}</Item>
    </Link>
    )
  });

 
  return <div >{film.map(toFilm)}</div>
}