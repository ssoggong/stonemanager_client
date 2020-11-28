import React from 'react'
import {
    Button,
    Form,
    Modal,
} from "react-bootstrap";
import { Link } from 'react-router-dom';
import './modal.css';

export function CreateProject({ show, handleClose, projectName, projectSubject, projectProgress, onChange, onCreate }) {
    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
        >
            <Modal.Header closeButton>
                <Modal.Title className="modaltitle" id="example-custom-modal-styling-title">
                    프로젝트 개설
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    <Form>
                        <div>
                            <input
                                name="projectName"
                                onChange={onChange}
                                value={projectName}
                                placeholder="프로젝트명"
                            />
                            <input
                                name="projectSubject"
                                onChange={onChange}
                                value={projectSubject}
                                placeholder="과목명"
                            />
                            <input
                                name="projectProgress"
                                onChange={onChange}
                                value={projectProgress}
                                placeholder="진행률"
                            />
                        </div>
                        <Form.Group controlId="subjectName">
                            <Form.Label>과목명</Form.Label>
                            <Form.Control
                                as="select"
                                defaultValue="Choose..."
                            >
                                <option>Choose...</option>
                                <option>abc</option>
                                <option>def</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="teamName">
                            <Form.Label>팀명</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="팀명을 입력하세요."
                            />
                        </Form.Group>

                        <Form.Group controlId="projectName">
                            <Form.Label>프로젝트 이름</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="프로젝트 이름을 입력하세요."
                            />
                        </Form.Group>

                        <Form.Group controlId="passwordCheck">
                            <Form.Label>팀원찾기</Form.Label>
                            <Form.Control type="text" placeholder="초대할 팀원 이름 검색" />
                            <button>검색</button>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>검색 내역</Form.Label>
                            <Form.Control as="select" disabled>
                                <option>검색 내역 입력</option>
                            </Form.Control>
                        </Form.Group>

                        <div className="modalButtonCenter">
                            <Link to='/'>
                                <Button onClick={onCreate} variant="primary" type="submit">
                                    개설
                            </Button>
                            </Link>
                            <Button onClick={handleClose} variant="secondary">
                                취소
                            </Button>
                        </div>
                    </Form>
                </p>
            </Modal.Body>
        </Modal>
    );
}


export default CreateProject;