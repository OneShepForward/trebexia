import React from "react";
import trebexia_icon from "./trebexia_icon_50x50.png";

import { Nav, Image, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Nav className="sticky-bottom" activeKey="/home">
      <Col>
        <Row>
          <Nav.Item>
            <Image href="/" src={trebexia_icon}></Image>
          </Nav.Item>
        </Row>
        <Row>
          <Nav.Item>
            <p>
              <small>© 2022 Morganick Productions</small>
            </p>
          </Nav.Item>
        </Row>
      </Col>
    </Nav>
  );
}

export default Footer;
