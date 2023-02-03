import React from "react";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarProd = () => {
  return (
    <div>
      <Container>
        <Nav style={{ display: "flex", justifyContent: "space-around" }}>
          <Link to="/">
            <Nav.Item
              style={{
                textDecoration: "none",
                fontSize: "20px",
                color: "black",
              }}
            >
              Products
            </Nav.Item>
          </Link>
          <Link to="/create">
            <Nav.Item
              style={{
                textDecoration: "none",
                fontSize: "20px",
                color: "black",
              }}
            >
              Create
            </Nav.Item>
          </Link>
          <Link to="/cart">
            <Nav.Item
              style={{
                textDecoration: "none",
                fontSize: "20px",
                color: "black",
              }}
            >
              Cart
            </Nav.Item>
          </Link>
        </Nav>
      </Container>
    </div>
  );
};

export default NavbarProd;
