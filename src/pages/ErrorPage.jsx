import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  const backToHome = () => {
    navigate("/");
  };

  return (
    <Container>
      <Row>
        <Col className="my-5">
          <div className="py-3 fs-3 fw-bold">*** Not Found ***</div>
          <Button onClick={backToHome}> Back to Homepage </Button>
        </Col>
      </Row>
    </Container>
  );
}
