import React, { useState } from "react";
import "./styles/App.css";
import Button from "./Button";
import { useHistory } from "react-router-dom";

import { Row, Co, Form, Container, Col } from "react-bootstrap";

import Signup from "./Signup";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorState, setErrorState] = useState(null);

  let history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/login_the_user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          onLogin(user);
          setErrorState(null);
          history.push("/");
        });
      } else {
        r.json().then((errors) => {
          setErrorState(errors);
        });
      }
    });
  }

  return (
    <Container class="justify-content-center mt-4">
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <Form.Group className="mb-3">
              <Form.Control
                type="username"
                id="login-username"
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Your name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                id="current-password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </Form.Group>
            <Button className="mb-3" variant="dark" type="submit">
              Login
            </Button>
          </Form>
        </Col>
        <Col class="col-2">
          <h2 class="text-center">OR</h2>
        </Col>
        <Col>
          <Row className="mb-3">
            <Signup onLogin={onLogin} />
          </Row>
        </Col>
      </Row>

      {errorState ? <p className="error">{errorState.error}</p> : null}
    </Container>
  );
}

export default Login;
