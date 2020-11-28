import React from 'react'
import {
    Button,
    Form,
    Modal,
} from "react-bootstrap";
import './modal.css'
import axios from 'axios';

export async function getSubject() {
    return axios.get('/api/users/subject',{
        headers: {
            "Content-Type": "application/json",
            "userIndex": 1,
        },
    })
        .then(response => response.data)
        .then(body => body.data);
}

export class CreateProject extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            subjects: [],
        };
    }

    componentDidMount() {
        getSubject()
            .then(data => {
                this.setState({
                    ...this.state,
                    subjects: data.subjects,
                });
            });
    }

    render() {
        return (
            <Modal
                show={true}
                onHide={() => window.history.back()}
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
                            <Form.Group controlId="subjectName">
                                <Form.Label>과목명</Form.Label>
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>Choose...</option>
                                    {
                                        this.state.subjects
                                            .map(subject => <option key={subject.subjectId}>{subject.subjectName}</option>)
                                    }
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="teamName">
                                <Form.Label>팀명</Form.Label>
                                <Form.Control type="text" placeholder="팀명을 입력하세요."/>
                            </Form.Group>

                            <Form.Group controlId="projectName">
                                <Form.Label>프로젝트 이름</Form.Label>
                                <Form.Control type="text" placeholder="프로젝트 이름을 입력하세요."/>
                            </Form.Group>

                            <Form.Group controlId="passwordCheck">
                                <Form.Label>팀원찾기</Form.Label>
                                <Form.Control type="text" placeholder="초대할 팀원 이름 검색"/>
                                <button>검색</button>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>검색 내역</Form.Label>
                                <Form.Control as="select" disabled>
                                    <option>검색 내역 입력</option>
                                </Form.Control>
                            </Form.Group>

                            <div className="modalButtonCenter">
                                <Button variant="primary" type="submit">
                                    확인
                                </Button>
                                <Button onClick={() => window.history.back()} variant="secondary">
                                    취소
                                </Button>
                            </div>
                        </Form>
                    </p>
                </Modal.Body>
            </Modal>
        );
    }
}

