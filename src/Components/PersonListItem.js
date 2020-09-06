import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

export default function PersonListItem({ name, id }) {
  return (
    <Link to={`/people/${id}`} key={id}>
      <Item>{name}</Item>
    </Link>
  );
}
