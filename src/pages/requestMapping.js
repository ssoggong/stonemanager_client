import axios from "axios";

export async function getSubject() {
    return axios.get('/api/users/subject', {
        headers: {
            "Content-Type": "application/json",
            "userIndex": 1,
        },
    })
        .then(response => response.data)
        .then(body => body.data);
}

export async function getProject() {
    return axios.get('/api/project', {
        headers: {
            "Content-Type": "application/json",
            "userId": 25,
        },
    })
        .then(response => response.data)
        .then(body => body.data);
}

export async function getUserInfo() {
    return axios.get('/api/users', {
        headers: {
            "Content-Type": "application/json",
            "userIndex": 25,
        },
    })
        .then(response => response.data)
        .then(body => body.data);
}


export async function getHome( {userIndex} ) {
    return axios.get('/api/home', {
        headers: {
            "Content-Type": "application/json",
            "userIndex": userIndex,
        },
    })
        .then(response => response.data)
        .then(body => body.data);
}

export async function getProjectHome() {
    return axios.get('/api/project/31', {
        headers: {
            "Content-Type": "application/json",
            "userIndex": 25,
        },
    })
        .then(response => response.data)
        .then(body => body.data);
}

export async function getProjectMembers() {
    return axios.get('/api/project/{projectIndex}/members', {
        headers: {
            "Content-Type": "application/json",
            "userIndex": 1,
        },
    })
        .then(response => response.data)
        .then(body => body.data);
}

export async function getStudents() {
    return axios.get('/api/project/students', {
        headers: {
            "Content-Type": "application/json",
            "userIndex": 1,
            "subjectIndex": 1
        },
    })
        .then(response => response.data)
        .then(body => body.data);
}

export async function getSchedule() {
    return axios.get('/api/schedule?year={year}&month={month}', {
        headers: {
            "Content-Type": "application/json",
            "userIndex": 1,
            "projectIndex": 1
        },
    })
        .then(response => response.data)
        .then(body => body.data);
}

export async function getScheduleDetail() {
    return axios.get('/api/schedule/{scheduleIndex}', {
        headers: {
            "Content-Type": "application/json",
            "userIndex": 1,
            "projectIndex": 1,
        },
    })
        .then(response => response.data)
        .then(body => body.data);
}

export async function getScheduleTag() {
    return axios.get('/api/schedule/{scheduleIndex}', {
        headers: {
            "Content-Type": "application/json",
            "userIndex": 1,
            "projectIndex": 1,
        },
    })
        .then(response => response.data)
        .then(body => body.data);
}

export async function getTaskTag() {
    return axios.get('/api/tasktag}', {
        headers: {
            "Content-Type": "application/json",
            "userIndex": 1,
            "projectIndex": 1,
        },
    })
        .then(response => response.data)
        .then(body => body.data);
}



// *********************************************************************************

export async function postLogin(id, pw) {
    return axios.post(
        '/api/users/login',
        {
        "userId": id,
        "password": pw
        },
        { headers : {"Content-Type": "application/json"} }
    )
        .then(response => response.data)
        .then(body => body.data)
        .catch( error =>{
        console.log('failed',error)
    })
}

export async function postRegister(name, id, pw, email) {
    return axios.post('/api/users/register', {
        headers: {
            "Content-Type": "application/json"
        },
        "userName": name,
        "userId": id,
        "password": pw,
        "email" : email
    }).catch( error =>{
        console.log('failed',error)
    })
}

export async function postEmail(email) {
    return axios.post('/api/users/auth/email', {
        headers: {
            "Content-Type": "application/json",
        },
        "email": email
    }).catch( error =>{
        console.log('failed',error)
    })
}

export async function postRegiterKey(email, code) {
    return axios.post('/api/users/auth', {
        headers: {
            "Content-Type": "application/json"
        },
        "email": email,
        "code": code
    }).catch( error =>{
        console.log('failed',error)
    })
}

export async function postFindPassword(name, id, email) {
    return axios.post('/api/users/password', {
        headers: {
            "Content-Type": "application/json",
            "token": 1
        },
        "userName": name,
        "userId": id,
        "userEmail": email
    }).catch( error =>{
        console.log('failed',error)
    })
}

//??????????????????????????????????



export async function postCreateProject(id, team, name, teammate) {
    return axios.post('/api/project', 
        {
        "subjectName": id,
        "projectTeam": team,
        "projectName": name,
        "team": teammate
        },
        { 
            headers: {
            "Content-Type": "application/json",
            "userIndex": 25
            }
        }).catch( error =>{
        console.log('failed',error)
        throw error;
    })
}

// 이 밑으로 형식 다름 위에께 맞는듯

export async function postCreateSchedule(scheduleName, Date, Descript, Assignee, TagId) {
    return axios.post('/api/schedule', {
        headers: {
            "Content-Type": "application/json",
            "userIndex": 1,
            "projectIndex": 1,
        },
        "scheduleName": scheduleName,
        "scheduleDate": Date,
        "scheduleDescription": Descript,
        "scheduleAssigneeIdList" : Assignee,
        "scheduleTagIdList" : TagId
    }).catch( error =>{
        console.log('failed',error)
    })
}

export async function postScheduleTag(name, color) {
    return axios.post('/api/scheduleTag', {
        headers: {
            "Content-Type": "application/json",
            "userIndex": 1,
            "projectIndex": 1
        },
        "tagName": name,
        "tagColor": color
    }).catch( error =>{
        console.log('failed',error)
    })
}

export async function postCreateChecklist(name, state) {
    return axios.post('/api/checklist', {
        headers: {
            "Content-Type": "application/json",
            "userIndex": 1,
            "projectIndex": 1,
            "taskIndex": 1,
        },
        "checklistName": name,
        "checklistState": state,
    }).catch( error =>{
        console.log('failed',error)
    })
}

export async function postFile(name, uri) {
    return axios.post('/api/file', {
        headers: {
            "Content-Type": "application/json",
            "userIndex": 1,
            "projectIndex": 1,
            "taskIndex": 1
        },
        "filename": name,
        "fileUri": uri
    }).catch( error =>{
        console.log('failed',error)
    })
}

export async function postComment(content) {
    return axios.post('/api/comment', {
        headers: {
            "Content-Type": "application/json",
            "userIndex": 1,
            "projectIndex": 1,
            "taskIndex": 1
        },
        "content": content
    }).catch( error =>{
        console.log('failed',error)
    })
}

export async function postTaskTag(name, color) {
    return axios.post('/api/tasktag', {
        headers: {
            "Content-Type": "application/json",
            "userIndex": 1,
            "projectIndex": 1,
            "taskIndex": 1
        },
        "tagName": name,
        "tagColor": color
    }).catch( error =>{
        console.log('failed',error)
    })
}

//**************************************************

export async function deleteProject() {
    return axios.delete('/api/project/{projectIndex}', {
        headers: {
            "Content-Type": "application/json",
            "userIndex": 25,
        },
    })
}

export async function deleteSchedule(projectIndex,scheduleIndex) {
    return axios.delete('/api/schedule', {
        headers: {
            "Content-Type": "application/json",
            "userIndex": 25,
            "projectIndex": projectIndex,
            "scheduleIndex": scheduleIndex,
        },
    })
}

export async function deleteTask(projectIndex,taskIndex) {
    return axios.delete('/api/task', {
        headers: {
            "Content-Type": "application/json",
            "userIndex": 25,
            "projectIndex": projectIndex,
            "taskIndex": taskIndex,
        },
    })
}
export async function deleteChecklist(projectIndex,taskIndex,checklistIndex) {
    return axios.delete('/api/checklist', {
        headers: {
            "Content-Type": "application/json",
            "userIndex": 25,
            "projectIndex": projectIndex,
            "taskIndex": taskIndex,
            "checklistIndex": checklistIndex,
        },
    })
}

export async function deleteTag(projectIndex,taskIndex) {
    return axios.delete('/api/tasktag/{tagIndex}', {
        headers: {
            "Content-Type": "application/json",
            "userIndex": 25,
            "projectIndex": projectIndex,
            "taskIndex": taskIndex,
        },
    })
}

export async function deleteFile(projectIndex,taskIndex) {
    return axios.delete('/api/file/{fileIndex}', {
        headers: {
            "Content-Type": "application/json",
            "userIndex": 25,
            "projectIndex": projectIndex,
            "taskIndex": taskIndex,
        },
    })
}


//DELETE : 프로젝트 탈퇴 / 일정삭제 /할일삭제 /체크삭제 /첨부삭제/코멘트 삭제
//비밀번호 변경/프사 변경/일정변경/태그변경/태그삭제/할일변경/체크변경/코멘트변경 : PUT
//할일조회 : GET인데,,, 뭔지모르겠따
//Post : 할일추가 이거뭐지
