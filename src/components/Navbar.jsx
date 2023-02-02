import React from "react";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Container>
        <Nav>
          <Link to="/">
            <Nav.Item>Products</Nav.Item>
          </Link>
          <Link to="create">
            <Nav.Item>Create</Nav.Item>
          </Link>
          <Link to="cart">
            <Nav.Item>Cart</Nav.Item>
          </Link>
        </Nav>
      </Container>
    </div>
  );
};

export default Navbar;
