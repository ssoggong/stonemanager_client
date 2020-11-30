import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route } from 'react-router-dom';

import { Main, MyPage, Home} from './pages'
import InviteOk from './pages/inviteOk';

class App extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render() {
        return (
            <div className='App'>
                <BrowserRouter>
                    <Route path="/createProject" component={Main}/>
                    <Route path="/register" component={Main} />
                    <Route path="/login" component={Main} />
                    <Route path="/" component={Main} exact />
                    <Route path="/myPage" component={MyPage} />
                    <Route path="/home" component={Home} />
                    <Route path="/schedule" component={Home} />
                    <Route path="/taskBoard" component={Home} />
                    <Route path="/taskDetail" component={Home} />
                    <Route path="/inviteOk" component={InviteOk} />
                    {
                        /**
                         * Path 매칭 실패 시 디폴트 Path로 리다이렉트하는 구문
                         * <Redirect to="/" />
                         */
                    }
                </BrowserRouter>
            </div>
        );
    }
}

export default App;