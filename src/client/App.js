import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './containers/Home/Home';
import { ErrorPage } from './containers/404Page/404Page.component';
import { CreateTeamPage } from './containers/CreateTeamPage/CreateTeamPage.component';
import { GamePage } from './containers/GamePage/GamePage.component';
import { JoinGamePage } from './containers/JoinGamePage/JoinGamePage.component';
import { LeaderboardPage } from './containers/LeaderboardPage/LeaderboardPage.component';
import { PickAvatarPage } from './containers/PickAvatarPage/PickAvatarPage.component';
import { PickGamePage } from './containers/PickGamePage/PickGamePage.component';
import { ShareGamePage } from './containers/ShareGamePage/ShareGamePage.component';
import { StartPage } from './containers/StartPage/StartPage.component';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/join-game-page">
          <JoinGamePage />
        </Route>
        <Route exact path="/create-team-page">
          <CreateTeamPage />
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
      </Switch>
    </Router>
  );
}
export default App;
