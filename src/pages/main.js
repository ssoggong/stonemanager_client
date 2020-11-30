import React, { useState, useRef, useEffect } from 'react';
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
import { getHome } from './requestMapping';

function Main() {
    const [inputs, setInputs] = useState({
        projectName: '',
        projectSubject: '',
        projectTeam: ''
    });
    const { projectName, projectSubject, projectTeam } = inputs;

    const onChange = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getHome()
            .then(data => {
                setProjects(data.projectInfo);
            })
    }, [])

    const nextId = useRef(5);
    const onCreate = () => {
        const project = {
            projectIndex: nextId.current,
            projectName,
            projectSubject,
            projectTeam
        };
        setProjects(projects.concat(project));

        setInputs({
            projectName: '',
            projectSubject: '',
            projectTeam: ''
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
                <Row style={{ marginLeft: 470, marginTop: 50 }}>
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
                        projectTeam={projectTeam}
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