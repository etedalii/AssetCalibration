import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import auth from "../auth/auth";
import Card from "../UI/Card/Card";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MainHeader from "../MainHeader/MainHeader";
import { toast ,ToastContainer } from "react-toastify";

export default function Login(props) {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }

    const user = await auth.onAuthentication({ email, password });
    if (user) {
      auth.saveToken(user);
      navigate("/dashboard");
    }
    else{
      toast.error('The Username or Password is wrong!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
  };

  return (
    <React.Fragment>
      <MainHeader />
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="2"></Col>
          <Col md="auto">
            <div className="col-12" style={{ marginTop: "100px" }}>
              <Card>
                <Form onSubmit={handleSubmit}>
                  <Form.Group
                    size="lg"
                    controlId="email"
                    className="form-group"
                  >
                    <Form.Label className="form-lbl">Email</Form.Label>
                    <Form.Control
                      autoFocus
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group
                    size="lg"
                    controlId="password"
                    className="form-group"
                  >
                    <Form.Label className="form-lbl">Password</Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Button
                    block
                    className="btn-custom mt-2"
                    type="submit"
                    disabled={!validateForm()}
                  >
                    Login
                  </Button>
                  <br />
                  <Button className="btn btn-custom1 mt-2" type="button">
                    Recover
                    <br />
                    Password
                  </Button>
                </Form>
              </Card>
            </div>
          </Col>
          <Col xs lg="2"></Col>
        </Row>
      </Container>
      <ToastContainer />
    </React.Fragment>
  );
}
