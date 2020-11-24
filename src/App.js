import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route } from 'react-router-dom';

import Main from './pages/main.js'
import MyPage from './pages/myPage.js'

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
                    <Route path="/" component={Main} exact />
                    <Route path="/myPage" component={MyPage} />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;