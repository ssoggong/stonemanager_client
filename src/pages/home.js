import React, { Component } from 'react';
import {Nav, Navbar, Form, Card, Button} from 'react-bootstrap'

class home extends Component {

  render() {
    return (
        <div className="home">         
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="/"><b>Stone Manager</b></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href=" ">Home</Nav.Link>
                </Nav>
                <Form inline>
                    <Button variant="outline-light">마이페이지</Button>
                    &nbsp;&nbsp;
                    <Button variant="outline-light">로그아웃</Button>
                </Form>
            </Navbar>  
            
                  
        </div>
    );
  }
}

export default home;