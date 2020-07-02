import React, { useContext } from 'react';
import HeaderTitle from '../../components/Title/Title';
import { GameContext } from '../../gameContext';

export const ShareGamePage = () => {
  const gameState = useContext(GameContext);
  // show state:
  console.log(gameState.gameState);
  // write to state:
  function setUser(username) {
    gameState.setGameState((prev) => {
      return {
        ...prev,
        user: username,
      };
    });
  }

  return (
    <div>
      <button type="button" onClick={() => setUser('me')}>
        Set user
      </button>
      <HeaderTitle title="This is the Share Game Page" />
    </div>
  );
};
