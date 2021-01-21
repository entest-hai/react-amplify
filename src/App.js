import React from "react";
import CTGView from "./test/TestImage";
import FemomSQITableButton from "./components/FemomSQITableButton";
import ObserveDBTableView from "./test/TestObserveDBTable";
import ObserveHeartRateTableView from "./test/TestObserveHeartRateTable";
import FemomSQIReactApp from "./FemomSQIReactApp";
import { Route, Switch } from "react-router-dom";
import ExChart from "./test/TestChart";
import TestGraphQLView from "./test/TestGraphQL";
import MusicApp from "./MusicApp";
import MessageTableView from "./test/TestDataStore";
import TestUploadAWSS3View from "./test/TestUploadAWSS3";

const App = () => (
  <Switch>
    <Route exact path="/" render={() => <FemomSQITableButton />}/>
    <Route exact path="/ds" render={() => <MessageTableView />}  />
    <Route exact path="/s3" render={() => <TestUploadAWSS3View />}  />
    <Route exact path="/ql" render={() => <TestGraphQLView />}  />
    <Route exact path="/sqi" render={() => <FemomSQIReactApp />}  />
    <Route exact path="/fe" render={() => <ObserveDBTableView />}  />
    <Route exact path="/mom" render={() => <ObserveHeartRateTableView />}  />
    <Route exact path="/:recordId" render={(props) => <CTGView {...props} />}/>

  </Switch>
);

export default App;