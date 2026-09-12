"use client";

import "./landing_navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import Image from "next/image";

import Logo from "../public/logo.png";

export default function Landing_Navbar() {
  return (
    <Navbar
      expand="lg"
      bg="light"
      data-bs-theme="light"
    >
      <Container className="nav_container">

        {/* Logo */}
        <Navbar.Brand href="#home">
          <Image
            className="nav-logo"
            src={Logo}
            alt="logo"
          />
        </Navbar.Brand>

        {/* Mobile hamburger */}
        <Navbar.Toggle aria-controls="landing-navbar-offcanvas" />

        {/* Offcanvas menu */}
        <Navbar.Offcanvas
          id="landing-navbar-offcanvas"
          aria-labelledby="landing-navbar-offcanvas-label"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="landing-navbar-offcanvas-label">
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>

            {/* Main navigation */}
            <Nav className="justify-content-center flex-grow-1 text-xl!">
              <Nav.Link href="#home" className="pl-8!">
                How it works
              </Nav.Link>

              <Nav.Link href="#features" className="pl-8!">
                Find a buddy
              </Nav.Link>

              <Nav.Link href="#pricing" className="pl-8!">
                Teach
              </Nav.Link>
            </Nav>

            {/* Authentication buttons */}
            <Nav>
              <Nav.Link
                href="#login"
                className="mr-6 text-xl! font-semibold"
              >
                Login
              </Nav.Link>

              <Button
                variant="success"
                className="bg-primary-color text-primary-color text-lg! pl-8! pr-8! rounded-4xl! border-none! font-semibold!"
              >
                Get started
              </Button>
            </Nav>

          </Offcanvas.Body>
        </Navbar.Offcanvas>

      </Container>
    </Navbar>
  );
}