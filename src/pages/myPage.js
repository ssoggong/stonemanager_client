import React, { Component } from 'react';
import {Nav, Navbar, Form, Card, Button} from 'react-bootstrap'

class myPage extends Component {

  render() {
    return (
        <div className="myPage2">         
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="/"><b>Stone Manager</b></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="home">Home</Nav.Link>
                </Nav>
                <Form inline>
                    
                    <Button href=" " variant="outline-light">마이페이지</Button>
                    &nbsp;&nbsp;
                    <Button variant="outline-light">로그아웃</Button>
                </Form>
            </Navbar>  
            <b> This is my page</b>
        </div>
    );
  }
}

export default myPage;