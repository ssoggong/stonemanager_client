import React from 'react'
import {
    Container,
    Row,
    Col,
    Badge,
    Button,
    Form,
    Modal,
    ToggleButton,
    ToggleButtonGroup,
} from "react-bootstrap";
import './modal.css'
import * as AiIcons from 'react-icons/ai';

export function TaskDetail() {
    return (
            <Modal
                show={true}
                onHide={() => window.history.back()}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                size={'xl'}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        First Task
                    </Modal.Title>
                </Modal.Header>
            
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col md={4}> 
                                <Row>
                                    <Col md={4}>
                                        Assignee
                                    </Col>
                                    <Col md={{ span:4, offset:1}}>
                                        최고운 최윤호
                                    </Col>
                                </Row> 
                                <Row>
                                    <Col md={4}>
                                        Due Date
                                    </Col>
                                    <Col md={{ span:4, offset:1 }}>
                                        2020.12.01
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={4}>
                                        Tag
                                    </Col>
                                    <Col md={{ span:4, offset:1 }}>
                                        <Badge style={{backgroundColor:"lightblue"}}> Front-end</Badge>
                                    </Col>
                                </Row>
    
                                <Row style={{marginTop:20}}>
                                    <Col md={4}>
                                        내용
                                    </Col>                                    
                                </Row>

                                <Row style={{marginTop:20}}>
                                    <Col md={4}>
                                        <AiIcons.AiOutlineCheckSquare style={{ marginBottom:2 }}/>{' '}
                                        Check List
                                    </Col>                                    
                                </Row>
                            </Col>
                        </Row>
                        
                    </Container>
                </Modal.Body>
            
            </Modal>
    );
}

