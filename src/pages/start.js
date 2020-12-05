import React, { useState, useRef, useEffect } from 'react';
import { Nav, Navbar, Form, Button, Container, Row, Col, Modal } from 'react-bootstrap'
import {
    Route,
    Link,
    BrowserRouter,
} from 'react-router-dom';
import { Register } from "./register";
import { FindPW } from "./findPassword";
import { CreateProject } from "./createProject";
import ProjectList from './ProjectList';
import { getHome, postLogin } from './requestMapping';

function Start() {
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

    const [userIndex, setUserIndex] = useState(0);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getHome( {userIndex} )
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
    const [ loginDialogVisible, setLoginDialogVisible ] = useState(false);
    const [ logined, setLogined ] = useState(false);

    const login = (event) => {
        event.preventDefault();
        const id = document.getElementById('id').value;
        const pw = document.getElementById('password').value;
        postLogin(id, pw)
            .then(data => {
                setLogined(true);
                setLoginDialogVisible(false);
                setUserIndex(data.userIndex)
            })
            .catch(() => {
                alert('로그인 실패.')
            })
    }
    console.log(userIndex);
    console.log(projects);

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
                    {
                        logined
                            ?
                            <React.Fragment>
                                <Button href='myPage' variant="outline-light">마이페이지</Button>&nbsp;&nbsp;
                                <Button onClick={() => setLogined(false)} variant="outline-light">로그아웃</Button>
                            </React.Fragment>
                            :
                            <React.Fragment>
                                <Link to="/register">
                                    <Button variant="outline-light">회원가입</Button>
                                </Link>
                                &nbsp;&nbsp;
                                <Button onClick={() => setLoginDialogVisible(true)} variant="outline-light">로그인</Button>
                            </React.Fragment>
                    }
                </Form>
            </Navbar>

            <Container>
                <ProjectList projects={projects} />
                <Row style={{ marginLeft: 470, marginTop: 50 }}>
                    <Col sm>
                        <Link to="/createProject">
                            <Button onClick={handleShow} variant="primary">New Project</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>

            {
                loginDialogVisible
                &&
                <div>
                    <Modal
                        show={true}
                        onHide={() => setLoginDialogVisible(false)}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-custom-modal-styling-title">
                                STONE MANAGER
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>
                                <Form onSubmit={login}>
                                    <Form.Group controlId="id">
                                        <Form.Control type="text" placeholder="학번 입력"/>
                                    </Form.Group>

                                    <Form.Group controlId="password">
                                        <Form.Control type="password" placeholder="비밀번호 입력"/>
                                    </Form.Group>
                                    
                                    <Link to='/main'>
                                    <Button variant="primary" type="submit">
                                        로그인
                                    </Button>
                                    </Link>
                                   
                                </Form>
                            </p>

                            <Link to="/findPassword"><Button variant="link">비밀번호 찾기</Button></Link>{' | '}
                            <Link to="/register"><Button variant="link">회원가입</Button></Link>


                        </Modal.Body>
                    </Modal>
                </div>
            }

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
                <Route path="/register" component={Register} />
                <Route path="/findPassword" component={FindPW} />
            </BrowserRouter>

        </div>
    );
}

export default Start;
