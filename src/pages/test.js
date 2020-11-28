import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Test() {
    const [projects, setProjects] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setError(null);
                setProjects(null);
                setLoading(true);

                const config = {
                    headers: { "Content-Type": "application/json", "userIndex": 1},
                }

                const response = await axios.get(
                    'http://ec2-13-125-249-225.ap-northeast-2.compute.amazonaws.com:8080/home',
                    {headers: {
                        "Content-Type": "application/json",
                        "userIndex": 1
                    }}
                    );
                setProjects(response.data);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };

        fetchProjects();
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!projects) return null;
    return (
        <ul>
            {projects.map(project => (
                <li key={project.projectIndex}>
                    {project.projectName} ({project.projectSubject})
                </li>
            ))}
        </ul>
    );
}

export default Test;