import React from "react";
import { Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
export default function GymBox() {
  return (
    <Col md={3}>
      <Card>
        <Card.Title>Gym Info</Card.Title>
        <Card.Text>Weaknesses</Card.Text>
        <Card.Text>Strengths</Card.Text>
      </Card>
    </Col>
  );
}
