import './index.css';

import { Finish, Games, Start } from './components';

import React from 'react';
import useTickTackToe from './components/hooks';

function App() {
  const game = useTickTackToe();
  return (
    <>
      {game.status === 'created' && <Start handleStart={game.handleStart} />}
      {game.status === 'finished' && (
        <Finish name={game.winner} restart={game.handleRestart} />
      )}
      {game.status === 'started' && (
        <div className="board-container">
          <Games board={game.board} handleClick={game.handleClick} />
        </div>
      )}
    </>
  );
}

export default App;
