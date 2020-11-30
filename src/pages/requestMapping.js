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

export async function getHome() {
    return axios.get('/api/home', {
        headers: {
            "Content-Type": "application/json",
            "userIndex": 1,
        },
    })
        .then(response => response.data)
        .then(body => body.data);
}

export async function getProjectHome() {
    return axios.get('/api/project/{projectIndex}', {
        headers: {
            "Content-Type": "application/json",
            "userIndex": 1,
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
    ).catch( error =>{
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
    return axios.post('/api/users/login', {
        headers: {
            "Content-Type": "application/json",
            "token": 1
        },
        "subjectId": id,
        "projectTeam": team,
        "projectName": name,
        "team": teammate
    }).catch( error =>{
        console.log('failed',error)
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


//DELETE : 프로젝트 탈퇴 / 일정삭제 /할일삭제 /체크삭제 /첨부삭제/코멘트 삭제
//비밀번호 변경/프사 변경/일정변경/태그변경/태그삭제/할일변경/체크변경/코멘트변경 : PUT
//할일조회 : GET인데,,, 뭔지모르겠따
//Post : 할일추가 이거뭐지
