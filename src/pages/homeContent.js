import React from 'react';
import { ProgressBar, Container, Row, Col } from 'react-bootstrap';
import '../App.css';

function homeContent() {
    const now = 90;
    const progressInstance = <ProgressBar now={now} label={`${now}%`} />;
    return (
        <div className='homeContent'>
            <Container>
                <Row style={{marginTop:200, marginLeft:100}}>
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
            </Container>
            
            
        </div>
    )
}

export default homeContent;