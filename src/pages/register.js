import React from 'react'
import {
    Button,
    Form,
    Modal,
    ToggleButton,
    ToggleButtonGroup,
} from "react-bootstrap";
import './modal.css'

export function Register() {
    return (
        <Modal
            show={true}
            onHide={() => window.history.back()}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    회원가입
                    <ToggleButtonGroup className="modalradio" type="radio" name="options" defaultValue={1}>
                        <ToggleButton value={1}>학생</ToggleButton>
                        <ToggleButton value={2}>교수</ToggleButton>
                    </ToggleButtonGroup>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    <Form>
                        <Form.Group controlId="registerName">
                            <Form.Label>이름</Form.Label>
                            <Form.Control type="text" placeholder="이름을 입력하세요."/>


                        </Form.Group>

                        <Form.Group controlId="studentNum">
                            <Form.Label>학번</Form.Label>
                            <Form.Control type="text" placeholder="학번을 입력하세요."/>
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label>비밀번호</Form.Label>
                            <Form.Control type="password" placeholder="비밀번호 입력"/>
                        </Form.Group>

                        <Form.Group controlId="passwordCheck">
                            <Form.Label>비밀번호 확인</Form.Label>
                            <Form.Control type="password" placeholder="비밀번호 재입력"/>
                        </Form.Group>

                        <Form.Group controlId="email">
                            <Form.Label>이메일 입력</Form.Label>
                            <Form.Control type="email" placeholder="이메일 입력"/>
                        </Form.Group>

                        <Button variant="primary">인증</Button>{''}

                        <Form.Group controlId="emailCheck">
                            <Form.Label>인증번호 입력</Form.Label>
                            <Form.Control type="password" placeholder="인증번호 입력"/>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            회원가입
                        </Button>
                        <Button onClick={() => window.history.back()} variant="secondary">
                            취소
                        </Button>
                    </Form>
                </p>
            </Modal.Body>
        </Modal>
    );
}

