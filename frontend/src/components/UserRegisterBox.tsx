import { useState } from "react";
import {
  Form,
  FloatingLabel,
  Container,
  Col,
  Row,
  Button,
} from "react-bootstrap";
import img from "../assets/mySpaceLogo.png";
import { signup } from "../services/auth.api";
import { Link, useNavigate } from "react-router-dom";

function UserPassBox() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const result = (await signup({ email, password })) as unknown as {
        userId: string;
      };
      console.log("Register successful:", result);
      navigate('/');
    } catch (error) {
      console.error("Register failed:", error);
    }
  };

  return (
    <div
      style={{ width: 475, height: "auto", margin: "auto", paddingTop: 200 }}
    >
      <Container>
        <Row>
          <Col>
            <img
              src={img}
              alt="logo"
              style={{ width: "150px", height: "auto" }}
            />
          </Col>
          <Col xs={6}>
            <Form onSubmit={handleSubmit}>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FloatingLabel>

              <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FloatingLabel>
              <Button variant="primary" style={{ width: "100%" }} type="submit">
                Register
              </Button>
              <Link
                to="/"
                style={{
                  display: "block",
                  marginTop: "10px",
                  textAlign: "center",
                }}
              >
                Login
              </Link>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserPassBox;
