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
import TodoTemplate from './todoTemplate';
import ToDoHead from './todoHead';
import ToDoList from './todoList';
import TodoCreate from './todoCreate';
import { TodoProvider } from './todoContext';
import CommentCreate from './commentCreate';
import CommentList from './commentList';

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
                    UI/UX 제작
                    </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Container>
                    <Row>
                        <Col md={4}>
                            <Row>
                                <Col md={4}>
                                    <b>Assignee</b>
                                </Col>
                                <Col md={{ span: 4, offset: 1 }}>
                                    최고운 최윤호
                                    </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <b>Due Date</b>
                                </Col>
                                <Col md={{ span: 4, offset: 1 }}>
                                    2020.12.01
                                    </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <b>Tag</b>
                                </Col>
                                <Col md={{ span: 4, offset: 1 }}>
                                    <Badge style={{ backgroundColor: "lightblue" }}> Front-end</Badge>
                                </Col>
                            </Row>

                            <Row style={{ marginTop: 20 }}>
                                    <p>서비스 전체에 대해서 UI/UX 제작해야 합니다! 세부 기능까지 모두 포함해주세요!</p>
                                    <p> [공통 사항]</p>
                                    <span>- 툴: adobe Xd</span>
                                    <span>- UI/UX 메인 컬러: #24ab22</span>
                            </Row>

                            <Row style={{ marginTop: 20 }}>
                                <Col md={4}>
                                    <b>
                                        <AiIcons.AiOutlineCheckSquare style={{ marginBottom: 2 }} />{' '}
                                        Check List
                                    </b>
                                    <TodoProvider>
                                        <TodoTemplate>
                                            <ToDoHead />
                                            <ToDoList />
                                            <TodoCreate />
                                        </TodoTemplate>
                                    </TodoProvider>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={4}>
                                    <b>
                                        <AiIcons.AiOutlineComment style={{ marginBottom: 2 }} /> {''}
                                        Comment
                                    </b>
                                    <TodoProvider>
                                        <TodoTemplate>
                                            <CommentList />
                                            <CommentCreate />
                                        </TodoTemplate>
                                    </TodoProvider>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Container>
            </Modal.Body>

        </Modal>
    );
}

