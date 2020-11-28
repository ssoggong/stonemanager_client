import React, { useState, useRef } from 'react';
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
    const [inputs, setInputs] = useState({
        projectName: '',
        projectSubject: '',
        projectProgress: ''
    });
    const { projectName, projectSubject, projectProgress } = inputs;
    const onChange = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };
    const [projects, setProjects] = useState([
        { projectIndex: 1, projectName: "쏘꽁", projectSubject: "소프트웨어공학개론", projectProgress: 90 },
        { projectIndex: 2, projectName: "일쩜오", projectSubject: "개별연구", projectProgress: 99 },
        { projectIndex: 3, projectName: "응답하라2016", projectSubject: "기업사회맞춤형프로젝트1", projectProgress: 50 },
        { projectIndex: 4, projectName: "살려주세요", projectSubject: "임베디드소프트웨어", projectProgress: 78 }
    ]);

    const nextId = useRef(5);
    const onCreate = () => {
        const project = {
            projectIndex: nextId.current,
            projectName,
            projectSubject,
            projectProgress
        };
        setProjects(projects.concat(project));

        setInputs({
            projectName: '',
            projectSubject: '',
            projectProgress: ''
        });
        nextId.current += 1;
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                <ProjectList projects={projects} />
                <Row style={{ marginLeft: 470, marginTop: 50}}>
                    <Col sm>
                        <Link to="/createProject">
                            <Button onClick={handleShow} variant="primary">New Proejct</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>

            <BrowserRouter>
                <Route
                    path="/createProject"
                    render={(props) => <CreateProject projectName={projectName}
                        projectSubject={projectSubject}
                        projectProgress={projectProgress}
                        onChange={onChange}
                        onCreate={onCreate}
                        show={show}
                        handleClose={handleClose}
                        {...props} />}
                />
                {/* <Route path="/createProject" component={CreateProject} /> */}
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/findPassword" component={FindPW} />
            </BrowserRouter>

        </div>
    );

}

export default Main;