import React from "react";
import CTGView from "./test/TestImage";
import FemomSQITableButton from "./components/FemomSQITableButton";
import { Route, Switch } from "react-router-dom";

const App = () => (
  <Switch>
    <Route exact path="/" render={() => <FemomSQITableButton />}  />
    <Route exact path="/:recordId" render={(props) => <CTGView {...props} />}
    />
  </Switch>
);

export default App;