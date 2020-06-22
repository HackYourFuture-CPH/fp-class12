import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './containers/Home/Home';
import { PickGamePage } from './containers/PickGamePage/PickGamePage.component';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/PickGamePage">
          <PickGamePage />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
