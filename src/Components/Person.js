import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom';


export default function Person({person}) {
  // const [person, setPerson] = useState();
  // let { personId } = useParams();

  // useEffect(() => {
  //   async function fetchPerson() {
  //     let res = await fetch(`https://swapi.dev/api/people/${personId}`);
  //     let data = await res.json();
  //     setPerson(data)
  //     console.log('data',data);
  //   }



  // }, [setPerson]);

  

  return (
    <div>
      <Link to="/">Back</Link>
      <div>name: { person.name }</div>
      <div>gender: { person.gender }</div>
      <div>height: { person.height }</div>
      <div>hair: { person.hair_color }</div>
    </div>
  );
}
