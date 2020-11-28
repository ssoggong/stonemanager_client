import React from 'react';
import { ProgressBar, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Project({ project }) {
    return (
        <span>
            <Card style={{ height: '12rem', width: '18rem' }}>
                <Card.Body>
                    <Card.Title><b>{project.projectName}</b></Card.Title>
                    <Card.Text>
                        {project.projectSubject}
                        <ProgressBar style={{ width: 250, marginTop: 15, marginRight: 50 }} now={project.projectProgress} label={`${project.projectProgress}%`} />
                    </Card.Text>
                    <Link to='home'>
                        <Button variant="primary">Go</Button>
                    </Link>
                </Card.Body>
            </Card>
        </span >
    )
}

function ProjectList() {

    const itemsFromBackend = [
        { projectIndex: 1, projectName: "쏘꽁", projectSubject: "소프트웨어공학개론", projectProgress: 90 },
        { projectIndex: 2, projectName: "일쩜오", projectSubject: "개별연구", projectProgress: 30 },
        { projectIndex: 3, projectName: "응답하라2016", projectSubject: "기업사회맞춤형프로젝트1", projectProgress: 78 },
    ];

    return (
        <div>
            {itemsFromBackend.map (project => (
                <Project project={project} key={project.projectIndex} />
            ))}
        </div>
    );
}

export default ProjectList;