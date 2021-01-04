import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import FemomSQIApp from './FemomSQIReactApp'
import MusicApp from './MusicApp';
import GridApp from './GridApp';

export default function AllApp() {
    return (
            <Router>
                <div>
                <Switch>
                    <Route path="/sqi" component={FemomSQIApp}></Route>
                    <Route path="/music" component={MusicApp}></Route>
                    <Route path="/grid" component={GridApp}></Route>
                </Switch>
                </div>
            </Router>
    )
}
