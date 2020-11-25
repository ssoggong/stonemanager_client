import React, { Component } from 'react';
import { Nav, Navbar, Form, Card, Button, Container, Row, Col } from 'react-bootstrap'

class main extends Component {

    render() {
        return (
            <div className="main">
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href=" "><b>Stone Manager</b></Navbar.Brand>
                    <Nav className="mr-auto">

                    </Nav>
                    <Form inline>
                        <Button variant="outline-light">회원가입</Button>
                    &nbsp;&nbsp;
                    <Button variant="outline-light">로그인</Button>
                    </Form>
                </Navbar>

                <Container>
                    <Row style={{ margin: 25 }} >
                        <Col sm>
                            <Card style={{ width: '18rem', display: 'flex' }}>
                                <Card.Body>
                                    <Card.Title>Project 1</Card.Title>
                                    <Card.Text>
                                        abc
                                </Card.Text>
                                    <a href="home">
                                        <Button variant="primary">Go</Button>
                                    </a>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Project 2</Card.Title>
                                    <Card.Text>
                                        abc
                                </Card.Text>
                                    <a href="home">
                                        <Button variant="primary">Go</Button>
                                    </a>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Project 3</Card.Title>
                                    <Card.Text>
                                        abc
                                </Card.Text>
                                    <a href="home">
                                        <Button variant="primary">Go</Button>
                                    </a>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row style={{ margin: 25 }} >
                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Button variant="primary">New Proejct</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>




            </div>
        );
    }
}

export default main;