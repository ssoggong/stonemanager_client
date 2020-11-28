import React from 'react'
import {
    Button,
    Form,
    Modal
} from "react-bootstrap";

export function FindPW() {
    return (
            <Modal
                show={true}
                onHide={() => window.history.back()}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        비밀번호 찾기
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        <Form>
                            <Form.Group controlId="name">
                                <Form.Label>이름</Form.Label>
                                <Form.Control type="text" placeholder="이름을 입력하세요." />
                            </Form.Group>

                            <Form.Group controlId="studentNum">
                                <Form.Label>학번</Form.Label>
                                <Form.Control type="text" placeholder="학번을 입력하세요." />
                            </Form.Group>

                            <Form.Group controlId="email">
                                <Form.Label>이메일</Form.Label>
                                <Form.Control type="email" placeholder="이메일을 입력하세요." />
                                <Form.Text className="text-muted">
                                   * 임시 비밀번호 발송
                                </Form.Text>
                            </Form.Group>


                            <Button variant="primary">
                                확인
                            </Button>
                            <Button onClick={() => window.history.back()} variant="secondary">
                                취소
                            </Button>

                        </Form>
                    </p>
                </Modal.Body>
            </Modal>
        // </>
    );
}
