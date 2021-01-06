import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import FemomSQIApp from './FemomSQIReactApp'
import MusicApp from './MusicApp';
import GridApp from './GridApp';
import TestSSH from './test/TestSSH';
import TestQuery from './test/TestDBQuery';
import TestUploadAWSS3View from "./test/TestUploadAWSS3";
import PromiseView from "./test/PromiseAwaitAsynch";
import SQISlider from "./test/TestSlider"

export default function AllApp() {
    return (
            <Router>
                <div>
                <Switch>
                    <Route path="/sqi" component={FemomSQIApp}></Route>
                    <Route path="/music" component={MusicApp}></Route>
                    <Route path="/grid" component={GridApp}></Route>
                    <Route path="/ssh" component={TestSSH}></Route>
                    <Route path="/db" component={TestQuery}></Route>
                    <Route path="/s3" component={TestUploadAWSS3View}></Route>
                    <Route path="/promise" component={PromiseView}></Route>
                    <Route path="/slider" component={SQISlider}></Route>
                </Switch>
                </div>
            </Router>
    )
}
