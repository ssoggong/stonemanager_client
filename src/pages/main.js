import React, { Component } from 'react';
import {Nav, Navbar, Form, Card, Button} from 'react-bootstrap'

class main extends Component {

  render() {
    return (
        <div className="main">
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home"><b>Stone Manager</b></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">내 정보</Nav.Link>
                </Nav>
                <Form inline>
                    <Button variant="outline-light">회원가입</Button>
                    &nbsp;&nbsp;
                    <Button variant="outline-light">로그인</Button>
                </Form>
            </Navbar>

            <div className="col-sm-1 col-md-1 col-lg-1 box">
                    <Card style={{ width: '18rem', display:'flex' }}>
                        <Card.Body>
                            <Card.Title>Project 1</Card.Title>
                            <Card.Text>
                            abc
                            </Card.Text>
                            <Button variant="primary">Go</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Project 2</Card.Title>
                            <Card.Text>
                            abc
                            </Card.Text>
                            <Button variant="primary">Go</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Project 3</Card.Title>
                            <Card.Text>
                            abc
                            </Card.Text>
                            <Button variant="primary">Go</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Button variant="primary">New Proejct</Button>
                        </Card.Body>
                    </Card>
            </div>
            
            

            
        </div>
    );
  }
}

export default main;