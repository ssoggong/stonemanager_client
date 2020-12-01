import React, { Component } from 'react';
import {Alert, Container, Nav, Navbar, Form, Row, Col, Button, Modal} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {getProject, getUserInfo} from './requestMapping';
import imgA from './profileImg.jpeg';


class MyPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userEmail: '',
            userImage: '',
            userName: '',
            userStudentId: '',
            deleteDialogVisible: false,
            projects: [],
        };
    }

    componentDidMount() {
        getUserInfo()
            .then(data => {
                this.setState({
                    ...this.state,
                    ...data,
                });
            });
    }

    toggleDialog(toggle) {
        if (toggle) {
            getProject()
                .then(data => {
                    this.setState({
                        ...this.state,
                        projects: data.projects,
                    });
                })
                .catch(() => {
                    this.setState({
                        ...this.state,
                        projects: [
                            {
                                projectIndex: 1,
                                projectSubject: "소프트웨어공학개론",
                                projectTeam: "쏘꽁",
                                projectName: "StoneManager"
                            },
                            {
                                projectIndex: 2,
                                projectSubject: "공개SW프로젝트",
                                projectTeam: "오히려좋아",
                                projectName: "WEBRTC 화상회의"
                            }
                        ],
                    });
                })
        }

        this.setState({
            ...this.state,
            deleteDialogVisible: toggle,
        });
    }

    render() {
        return (
            <div className="myPage2">
                <Navbar bg="primary" variant="dark">
                    <Link to='/'>
                        <Navbar.Brand>
                            <b>Stone Manager</b>
                        </Navbar.Brand>
                    </Link>
                    <Nav className="mr-auto">
                        <Link to='home'>
                            <Nav.Link></Nav.Link>
                        </Link>
                    </Nav>
                    <Form inline>
                        <Link to='#'>
                            <Button variant="outline-light">마이페이지</Button>
                        </Link>
                    &nbsp;&nbsp;
                    <Button variant="outline-light">로그아웃</Button>
                    </Form>
                </Navbar>
                <Container style={{ marginTop: 40 }}>
                    내 프로필
                    <Col xs={2}></Col>
                    <Alert variant="primary">
                        <Container>
                            <Row>
                                {/*<Col xs={3}>*/}
                                {/*    <Row>*/}
                                {/*        <b>내 프로필</b>*/}
                                {/*    </Row>*/}
                                {/*</Col>*/}
                                <Col xs={3}>
                                    <Row>
                                        <b>사진</b>
                                    </Row>
                                    <Row>
                                        <img src={imgA} style={{width:150, height:150}}/>
                                    </Row>
                                </Col>
                                <Col xs={3}>
                                    <Row>이름</Row>
                                    <Row>학번</Row>
                                    <Row>이메일</Row>
                                </Col>
                                <Col xs={3}>
                                    <Row>{this.state.userName}</Row>
                                    <Row>{this.state.userStudentId}</Row>
                                    <Row>{this.state.userEmail}</Row>
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col>
                                    <Button onClick={() => this.toggleDialog(true)} variant="primary">프로젝트 탈퇴</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Alert>
                    <Col xs={2}></Col>
                </Container>
                <Modal
                    show={this.state.deleteDialogVisible}
                    onHide={() => this.toggleDialog(false)}
                >
                    <Modal.Header closeButton>
                        <Modal.Title className="modaltitle" id="example-custom-modal-styling-title">
                            프로젝트 탈퇴
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>진행중인 프로젝트 목록</Row>
                        <hr />
                        {
                            this.state.projects
                                .map(project => {
                                    return (
                                        <React.Fragment>
                                            <Row>
                                                <Col xs={9}>
                                                    <Row>{project.projectSubject}</Row>
                                                    <Row>
                                                        <Col xs={2}></Col>
                                                        <Col>{project.projectTeam}: {project.projectName}</Col>
                                                    </Row>
                                                </Col>
                                                <Col xs={3}>
                                                    <Button>나가기</Button>
                                                </Col>
                                            </Row>
                                            <hr />
                                        </React.Fragment>
                                    )
                                })
                        }
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default MyPage;