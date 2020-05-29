import React from 'react';
import Mymap from './components/Map/Map';
import Modal from './components/Modal/Modal';
import HeaderTitle from './components/Title/Title';
import './App.css';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/Home">Maps</Link> || <Link to="/Modal">Modal</Link>
        <Switch>
          <Route path="/Home" exact>
            <HeaderTitle title="Scan QR-code" />
            <Mymap />
          </Route>
          <Route path="/Modal">
            <HeaderTitle title="Modal page" />
            <Modal title="Test title" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
