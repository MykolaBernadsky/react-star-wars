import React, {useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 111px;
  display: flex;
`;
const Menu = styled.div`
  display: flex;
  justify-content: center;
`;

const Links = styled.div`
  font-size: 20px;
  color: #fff;
  padding: 20px;
  border: 1px solid transparent;

  &:hover {
    border-bottom-color: #03a9f4;
    color: #03a9f4;
    transition: border-bottom-color 0.3s ease-in, color 0.3s ease-in;
  }
`;

export default function Navbar() {
  return (
    <Menu>
      <Container className='navbar'>
        <Link to="/">
          <Links className='nav-link'>Home</Links>
        </Link>
        <Link to="/people">
          <Links className='nav-link'>People</Links>{" "}
        </Link>
        <Link to="/films">
          <Links className='nav-link'>Films</Links>{" "}
        </Link>
        
      </Container>
    </Menu>
  );
}

