import React from "react";
import trebexia_icon from "./trebexia_icon_50x50.png";

import { Navbar, Image, Row, Col, Container, Nav } from "react-bootstrap";

function Footer() {
  return (
    <Navbar fixed="bottom" className="sticky-bottom" activeKey="/home">
      <Container fluid>
        <Col>
          <Row>
            <Navbar.Brand href="/">
              <Image src={trebexia_icon}></Image>
            </Navbar.Brand>
          </Row>
          <Row>
            <p>
              <small>© 2022 Morganick Productions</small>
            </p>
          </Row>
        </Col>
      </Container>
    </Navbar>
  );
}

export default Footer;
