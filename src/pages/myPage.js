import React, { Component } from 'react';
import {Nav, Navbar, Form, Card, Button} from 'react-bootstrap'
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
            <b> This is my page</b>
        </div>
    );
  }
}

export default myPage;