import React, { Component } from 'react';
import { ProgressBar, Nav, Navbar, Form, Card, Button, Container, Row, Col } from 'react-bootstrap'
import {
    Route,
    Link,
    BrowserRouter,
} from 'react-router-dom';
import { Login } from './login.js'
import {Register} from "./register";
import {FindPW} from "./findPassword";
import {CreateProject} from "./createProject";
const now1 = 90;
const now2 = 83;
const now3 = 70;

class main extends Component {
    
    render() {
        return (
            <div className="main">
                <Navbar bg="primary" variant="dark">
                    <Link to='#'>
                        <Navbar.Brand>
                            <b>Stone Manager</b>
                        </Navbar.Brand>
                    </Link>
                    <Nav className="mr-auto">

                    </Nav>
                    <Form inline>
                        <Link to="/register">
                            <Button variant="outline-light">회원가입</Button>
                        </Link>
                    &nbsp;&nbsp;
                        <Link to="/login">
                            <Button variant="outline-light">로그인</Button>
                        </Link>
                    </Form>
                </Navbar>

                <Container>
                    <Row style={{ margin: 25 }} >
                        <Col sm>
                            <Card style={{ width: '18rem', display: 'flex' }}>
                                <Card.Body>
                                    <Card.Title>쏘꽁</Card.Title>
                                    <Card.Text>
                                        소프트웨어공학개론
                                        <ProgressBar style={{width:250, marginTop:15, marginRight:50}} now={now1} label={`${now1}%`} /> 
                                    </Card.Text>
                                    <Link to='home'>
                                        <Button variant="primary">Go</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>일쩜오</Card.Title>
                                    <Card.Text>
                                        개별연구
                                        <ProgressBar style={{width:250, marginTop:15, marginRight:50}} now={now2} label={`${now2}%`} /> 
                                </Card.Text>
                                <Link to='home'>
                                        <Button variant="primary">Go</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>응답하라 2016</Card.Title>
                                    <Card.Text>
                                        기업사회맞춤형프로젝트1
                                        <ProgressBar style={{width:250, marginTop:15, marginRight:50}} now={now3} label={`${now3}%`} /> 
                                </Card.Text>
                                    <Link to='home'>
                                        <Button variant="primary">Go</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row style={{ margin: 25 }} >
                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Link to="/createProject">
                                    <Button variant="primary">New Proejct</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>



                <BrowserRouter>
                    <Route path="/createProject" component={CreateProject}/>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register}/>
                    <Route path="/findPassword" component={FindPW} />
                </BrowserRouter>

            </div>
        );
    }
}

export default main;