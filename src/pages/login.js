import React from 'react'
import {
    Button,
    Form,
    Modal,
} from "react-bootstrap";
import {
    Link,
    BrowserRouter,
} from "react-router-dom";

export function Login() {
    return (
        <div>
            <Modal
                show={true}
                onHide={() => window.history.back()}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        STONE MANAGER
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        <Form>
                            <Form.Group controlId="id">
                                <Form.Control type="text" placeholder="학번 입력"/>
                            </Form.Group>

                            <Form.Group controlId="password">
                                <Form.Control type="password" placeholder="비밀번호 입력"/>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                로그인
                            </Button>
                        </Form>
                    </p>

                    <Link to="/findPassword"><Button variant="link">비밀번호 찾기</Button></Link>{' | '}
                    <Link to="/register"><Button variant="link">회원가입</Button></Link>


                </Modal.Body>
            </Modal>
        </div>
    );
}
