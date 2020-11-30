import React from 'react';
import { ProgressBar, Card, Button, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export function Project({ project }) {
    return (
        <span>
            <Card style={{ marginTop:50, marginLeft:50, height: '12rem', width: '18rem' }}>
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
        </span>
    )
}

function ProjectList( { projects } ) {
    return (
        <Row>
            {projects.map (project => (
                <Project project={project} key={project.projectIndex} />
            ))}
        </Row>
    );
}

export default ProjectList;