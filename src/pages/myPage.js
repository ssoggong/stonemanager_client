import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './myPage.css'
import userSolid from './user-solid.svg';

class myPage extends Component {
  render() {
    return (
      <div className="myPage">
        <div className="blueNav">
          <div className="projectName">
            <li><b>Stone Manager</b></li>
            <li><b>내 정보</b></li>
          </div>

          <div className="info">
            <li><img src = {userSolid} className="userImg" /></li>
            <li><b>마이 페이지</b></li>
            <li><b>로그아웃</b></li>
          </div>
        </div>
        <div>
          ddd
        </div>
      </div>
      
    );
  }
}

export default myPage;