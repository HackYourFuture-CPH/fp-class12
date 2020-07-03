import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Home } from './containers/Home/Home';
import { ErrorPage } from './containers/404Page/404Page.component';
import { CreateTeamPageContainer } from './containers/CreateTeamPage/CreateTeamPage.container';
import { GamePage } from './containers/GamePage/GamePage.component';
import { JoinGamePage } from './containers/JoinGamePage/JoinGamePage.component';
import { LeaderboardPage } from './containers/LeaderboardPage/LeaderboardPage.component';
import { PickAvatarPage } from './containers/PickAvatarPage/PickAvatarPage.component';
import { PickGamePage } from './containers/PickGamePage/PickGamePage.component';
import { ShareGamePage } from './containers/ShareGamePage/ShareGamePage.component';
import { StartPage } from './containers/StartPage/StartPage.component';
import { AppContext } from './AppContext';

function App() {
  const [appState, setAppState] = useState({ gameCode: '20', teamName: '' });

  return (
    <AppContext.Provider value={{ appState, setAppState }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/join-game-page">
            <JoinGamePage />
          </Route>
          <Route exact path="/create-team-page">
            <CreateTeamPageContainer />
          </Route>
          <Route exact path="/game-page">
            <GamePage />
          </Route>
          <Route exact path="/leaderboard-page">
            <LeaderboardPage />
          </Route>
          <Route exact path="/pick-avatar-page">
            <PickAvatarPage />
          </Route>
          <Route exact path="/pick-game-page">
            <PickGamePage />
          </Route>
          <Route exact path="/share-game-page">
            <ShareGamePage />
          </Route>
          <Route exact path="/start-page">
            <StartPage />
          </Route>
          <Route exact path="/404-page">
            <ErrorPage />
          </Route>
          <Redirect to="/404-page" />
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}
export default App;
