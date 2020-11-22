import logo from './logo.svg';
import './App.css';
import {Card} from "./Card";
import {Component} from "react";
import {Button, Col, Container, Dropdown, Modal, Row} from "react-bootstrap";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            visible: false,
        }

        this.onClick = this.onClick.bind(this)
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this)
    }

    onClick() {
        this.setState({
            ...this.state,
            visible: !this.state.visible
        })
    }
     handleClose() {
        this.setState({
            ...this.state,
            visible: false,
        })
     }
     handleShow () {
         this.setState({
             ...this.state,
             visible: true
         })
     }
    render() {
        const cards = [
            0,
            1,
            2,
            3,
            4,
        ]

        return (
            <div>
            <div className = {"e1"}> allonsy </div>
            <Container>

                <Row>
                    <Col sm={8}><div className={"ee"}> Stone Manager</div></Col>
                    <Col sm={4}>sm=4</Col>
                </Row>
                <Row>
                    <Col sm>sm=true</Col>
                    <Col sm>sm=true</Col>
                    <Col sm>sm=true</Col>
                </Row>
            </Container>
            </div>

            // <div className="App">
            //     <Button variant="primary" onClick={this.handleShow}>
            //         Launch demo modal
            //     </Button>
            //
            //     <Modal show={this.state.visible} onHide={this.handleClose}>
            //         <Modal.Header closeButton>
            //             <Modal.Title>Modal heading</Modal.Title>
            //         </Modal.Header>
            //         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            //         <Modal.Footer>
            //             <Button variant="secondary" onClick={this.handleClose}>
            //                 Close
            //             </Button>
            //             <Button variant="primary" onClick={this.handleClose}>
            //                 Save Changes
            //             </Button>
            //         </Modal.Footer>
            //     </Modal>
            // </div>
        );
    }
}

export default App;
