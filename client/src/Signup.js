import React, { useState } from "react";
import "./styles/App.css";
import Button from "./Button";
import { useHistory } from "react-router-dom";

import { Row, Co, Form, Container, Col } from "react-bootstrap";

function Signup({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errorState, setErrorState] = useState(null);

  let history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    // users/create route
    fetch(`/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
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
    <Container class="row justify-content-center mt-4">
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <h2>Signup</h2>
            <Form.Group className="mb-3">
              <Form.Control
                type="username"
                id="username"
                autoComplete="username"
                placeholder="Create a username..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                id="current-password"
                autoComplete="current-password"
                placeholder="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                id="password_confirmation"
                autoComplete="new-password"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                placeholder="Confirm password"
              />
            </Form.Group>

            {errorState
              ? errorState.error.map((e) => (
                  <p className="error" key={Math.random()}>
                    {e}
                  </p>
                ))
              : null}
            <Button className="mb-0" type="submit">Signup</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
