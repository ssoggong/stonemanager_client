import React, { Component } from 'react';
import { Alert, Container, Nav, Navbar, Form, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

class myPage extends Component {

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
                <Alert variant="primary"  style={{marginTop:150, marginLeft:350, width:1000}}>
                    <Container>
                    <p>
                        <Row style={{ marginTop: 30, marginLeft: 100 }}>
                            <Col>  <b> 내 프로필</b> </Col>
                            <Col>  <b> 사진 </b> </Col>
                            <Col xs={6}>
                                <Row>
                                    이름
                            </Row>
                                <Row>
                                    학번
                            </Row>
                                <Row>
                                    이메일
                            </Row>
                            </Col>
                        </Row>
                    </p>
                    <hr />
                    <p className="mb-0">
                        <Row style={{ marginTop: 30, marginLeft: 100 }}>
                            <Col sm={4}>  <b> 프로젝트 관리</b> </Col>
                            <Col sm={8}>
                                <Link to='#'>
                                    <Button variant="primary">프로젝트 탈퇴</Button>
                                </Link>
                            </Col>
                        </Row>
                    </p>
                    </Container>
                </Alert>
            </div>
        );
    }
}

export default myPage;