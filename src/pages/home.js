import React from 'react';
import Navbar_ from './Navbar_';
import '../App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeContent from '../pages/homeContent';

function home() {
    return (
        <>
            <Router>
                <Navbar_ />
                <Switch>
                    <Route path='/home' component={ HomeContent } />
                </Switch>
            </Router>    
        </>        
    );
}

export default home;