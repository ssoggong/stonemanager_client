import React, { useState, useEffect } from 'react';
import { ProgressBar, Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../App.css';
import CanvasJSReact from '../canvasjs.react';
import { getProjectHome } from './requestMapping';

function HomeContent() {
    const [contents, setContents] = useState([]);

    useEffect(() => {
        getProjectHome()
            .then(data => {
                setContents(data);
                // console.log(data);
            })
    }, [])

    var CanvasJSChart = CanvasJSReact.CanvasJSChart;

    // const listItem = contents.projectParticipateInfo.map((part) =>
    //     <li>{part}</li>
    // );

    console.log(contents.projectParticipateInfo);

    // {contents.projectParticipateInfo.map (part => (
    //     <React.Fragment key={part.memberIndex}>
    //         console.log({part.memberName})
    //     </React.Fragment>        
    // ))}


    const options = {
        animationEnabled: true,
        subtitles: [{
            text: contents.projectName,
            verticalAlign: "center",
            fontSize: 24,
            dockInsidePlotArea: true
        }],
        data: [{
            type: "doughnut",
            showInLegend: true,
            indexLabel: "{name}: {y}",
            yValueFormatString: "#,###'%'",
            dataPoints: [
                { name: "최윤호", y: 40 },
                { name: "박종근", y: 20 },
                { name: "김영훈", y: 22 },
                { name: "최고운", y: 18 },
            ]

        }]
    }

    
    // console.log(contents);
    return (
        <div className='homeContent'>
            <Container>
                <Row style={{ marginTop: 600, marginLeft: 100 }}>
                    <Col sm>
                        <h1>진행률</h1>
                    </Col>
                    <Col sm>
                        <ProgressBar
                            style={{ width: 700, marginTop: 15, marginRight: 50 }}
                            now={contents.projectProgress}
                            label={`${contents.projectProgress}%`} />
                        {/* contents.projectProgress */}
                    </Col>
                </Row>
                <Row style={{ marginTop: 150, marginLeft: 100 }}>
                    <Col sm> <h1> 참여율 </h1></Col>{' '}
                    <Col sm> <h1> D-Day </h1> </Col>
                </Row>
                <Row style={{ marginTop: 25, marginLeft: 100 }}>
                    <Col sm={6}>
                        <div>
                            <CanvasJSChart options={options} />
                        </div>
                    </Col>
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

export default HomeContent;