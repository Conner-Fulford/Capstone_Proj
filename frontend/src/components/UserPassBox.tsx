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
import { getUserIdFromToken, signin } from "../services/auth.api";
import { useNavigate, Link } from "react-router-dom";

function UserPassBox() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const result = (await signin({ email, password })) as unknown as {
        userId: string;
      };
      console.log("Login successful:", result);
      const userId = await getUserIdFromToken();
      navigate(`/profile/${userId}`);
    } catch (error) {
      console.error("Login failed:", error);
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
                Login
              </Button>
              <Link
                to="/register"
                style={{
                  display: "block",
                  marginTop: "10px",
                  textAlign: "center",
                }}
              >
                Register
              </Link>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserPassBox;
