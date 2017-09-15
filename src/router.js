import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import store from './components/store/store';
import Quiz from './components/Quiz/Quiz';
import App from './App';
import Home from './components/Home/Home';
import Stats from './components/Stats/Stats';

export default (
    <Switch>
        <Route exact path='/' component={Home}/> 
        <Route path='/quiz' component={Quiz} />
        <Route path='/stats' component={Stats} />


    </Switch>
)