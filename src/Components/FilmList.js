import React , {useState, useCallback, useEffect} from 'react'
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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


export default function FilmList({ filmLinks }) {
  const [films, setFilms] = useState([]);
  
  console.log('filmlinks', filmLinks);

  useEffect(() => {
    Promise.all(
      filmLinks.map( async (link) => {
        const responce = await axios.get(link);
        return responce;
      })
    ).then(res => setFilms(res))
  }, [filmLinks])

  

  console.log('fucking films',films);

  return (
    <div> 
     Films: {films.map((film, index) => {
        return (
          <Link to={`/films/${index+1}`} key={index+1}><Item>{film.data.title}</Item></Link> )
      })}
    </div>
  )
}
