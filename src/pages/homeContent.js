import React from 'react';
import { ProgressBar, Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../App.css';

function homeContent() {
    const now = 90;
    const progressInstance = <ProgressBar now={now} label={`${now}%`} />;
    return (
        <div className='homeContent'>
            <Container>
                <Row style={{marginTop:300, marginLeft:100}}>
                    <Col sm> 
                        <h1>진행률</h1> 
                    </Col>
                    <Col sm> 
                        <ProgressBar style={{width:700, marginTop:15, marginRight:50}} now={now} label={`${now}%`} /> 
                    </Col>
                </Row>
                <Row style={{marginTop:150, marginLeft:100}}>
                    <Col sm> <h1> 참여율 </h1> </Col>
                    <Col sm> <h1> 디데이 </h1> </Col>
                </Row>
                <Row style={{marginTop:25, marginLeft:100}}>
                    <Col sm={6}> <h1> Graph </h1> </Col>
                    <Col sm={3}>
                        <Card style={{ width: '15rem', display: 'flex' }}>
                            <Card.Body>
                                <Card.Title>코딩 완료</Card.Title>                               
                                <Button variant="danger">D-1</Button>                                  
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card style={{ width: '15rem', display: 'flex' }}>
                            <Card.Body>
                                <Card.Title>정기 미팅</Card.Title>                               
                                <Button variant="warning">D-2</Button>                                  
                            </Card.Body>
                        </Card>
                    </Col>                    
                </Row>
            </Container>
            
            
        </div>
    )
}

export default homeContent;