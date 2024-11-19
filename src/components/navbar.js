import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* Navbar brand */}
        <Navbar.Brand href="#home">MyBrand</Navbar.Brand>

        {/* Navbar toggle button for mobile view */}
        <Navbar.Toggle aria-controls="navbarNav" />

        {/* Navbar links */}
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>

          {/* Login button on the right side */}
          <Link to="/login">
            <Button variant="outline-primary">Login</Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
// cdcd8bca-ce9a-499f-ba25-ed89e71df433
