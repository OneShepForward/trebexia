import React from "react";
import nav_logo from "./trebexia_footer400x50.png";

import { Navbar, Image, Nav, Container } from "react-bootstrap";

function NavBar({ user, onLogin, onLogout }) {
  function handleLogout(e) {
    fetch(`/logout`, {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <Navbar bg="light">
      {/* {renderHeader()} */}
      <Container>
        <Navbar.Brand>
          <Image
            href="/"
            src={nav_logo}
            alt="trebexia logo"
            className="nav-logo"
          ></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/high_scores">Scores</Nav.Link>
            <Nav.Link href="/login" onClick={handleLogout}>
              {user ? "Logout" : "Login"}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
