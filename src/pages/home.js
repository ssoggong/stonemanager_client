import React from 'react';
import Navbar_ from './Navbar_';
import '../App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeContent from '../pages/homeContent';
import Schedule from '../pages/schedule';
import TaskBoard from '../pages/taskBoard';

function home() {
    return (
        <>
            <Router>
                <Navbar_ />
                <Switch>
                    <Route path='/home' component={ HomeContent } exact/>
                    <Route path='/schedule' component={ Schedule } />
                    <Route path='/taskBoard' component={ TaskBoard } />
                </Switch>
            </Router>    
        </>        
    );
}

export default home;