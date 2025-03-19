import React from "react";
import myImage from '../images/6838886abe627023dbd894f478353a0d.jpeg';
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const LoginPage = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${myImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Container>
                <Row className="justify-content-center">
                    <Col md={6} className="p-4 bg-light rounded shadow">
                        <h2 className="text-center mb-4">Welcome Back</h2>
                        <p className="text-center text-muted">
                            Sign in to continue to your account
                        </p>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter your password" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Check type="checkbox" label="Remember Me" />
                            </Form.Group>

                            <Button variant="primary" className="w-100">
                                Sign In
                            </Button>
                        </Form>

                        <p className="text-center mt-3">
                            <a href="#">Lost your password?</a>
                        </p>

                        <div className="text-center mt-3">
                            <a href="#" className="me-3">
                                <i className="fab fa-facebook fa-2x"></i>
                            </a>
                            <a href="#" className="me-3">
                                <i className="fab fa-twitter fa-2x"></i>
                            </a>
                            <a href="#" className="me-3">
                                <i className="fab fa-instagram fa-2x"></i>
                            </a>
                            <a href="#">
                                <i className="fab fa-youtube fa-2x"></i>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LoginPage;
