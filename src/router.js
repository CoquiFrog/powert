import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import store from './components/store/store';
import Quiz from './components/Quiz/Quiz';
import App from './App';
import Home from './components/Home/Home';
import Stats from './components/Stats/Stats';
import Statprinter from './components/Statprinter/Statprinter';
import German from './components/German/German';
import Foreignresults from './components/Foreignresults/Foreignresults';

export default (
    <Switch>
        <Route exact path='/' component={Home}/> 
        <Route path='/quiz' component={Quiz} />
        <Route path='/stats' component={Stats} />
        <Route path='/german' component={German} />
        <Route path='/foreignresults' component={Foreignresults} />

    </Switch>
)