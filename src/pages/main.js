import React from 'react';
import { Nav, Navbar, Form, Button, Container, Row, Col } from 'react-bootstrap'
import {
    Route,
    Link,
    BrowserRouter,
} from 'react-router-dom';
import { Login } from './login.js'
import { Register } from "./register";
import { FindPW } from "./findPassword";
import { CreateProject } from "./createProject";
import ProjectList from './ProjectList';

function Main() {
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
                <ProjectList />
                <Row style={{ marginLeft: 470 }}>
                    <Col sm>
                        <Link to="/createProject">
                            <Button variant="primary">New Proejct</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>



            <BrowserRouter>
                <Route path="/createProject" component={CreateProject} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/findPassword" component={FindPW} />
            </BrowserRouter>

        </div>
    );

}

export default Main;