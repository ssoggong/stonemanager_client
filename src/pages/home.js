import React from 'react';
import Navbar_ from './Navbar_';
import '../App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeContent from './homeContent';
import Schedule from './schedule';
import TaskBoard from './taskBoard';
import { TaskDetail } from './taskDetail';
import Schedulle from './schedulle';
import Schedullle from './schedullle';

function Home() {
    return (
        <>
            <Router>
                <Navbar_ />
                <Switch>                    
                    <Route path='/home' component={ HomeContent } />
                    <Route path='/schedule' component={ Schedule } />
                    <Route path='/schedulle' component={ Schedulle } />
                    <Route path='/schedullle' component={ Schedullle } />
                    <Route path='/taskBoard' component={ TaskBoard } />
                    <Route path="/taskDetail" component={ TaskBoard } />
                </Switch>
            </Router>    
        </>        
    );
}

export default Home;