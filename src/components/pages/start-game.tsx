import '../../index.css';

import React, { FormEvent, useMemo, useState } from 'react';

interface StartProps {
  handleStart(players: string[]): void;
}

enum Setting {
  player1 = 'Player 1',
  player2 = 'Player 2',
  start = 'Start',
  title = 'Tic Tac Toe Game',
}

export const Start: React.FC<StartProps> = ({ handleStart }) => {
  const [players, setPlayers] = useState<string[]>([]);

  function handleInput(event: FormEvent<HTMLInputElement>, index: number) {
    const newPlayers = [...players];
    newPlayers.splice(index, 1, event.currentTarget.value);
    setPlayers(newPlayers);
  }

  const canStart = useMemo(
    () => players.every((player) => player && player.length > 0),
    [players],
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canStart) return;
    handleStart(players);
  }

  return (
    <div className="page">
      <h1>{Setting.title}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="player1">{Setting.player1}</label>
          <input
            type="text"
            value={players[0]}
            onInput={(e: any) => handleInput(e, 0)}
          />
        </div>
        <div>
          <label htmlFor="player2">{Setting.player2}</label>
          <input
            type="text"
            value={players[1]}
            onInput={(e: any) => handleInput(e, 1)}
          />
        </div>
        <div>
          <button className="buttons-page" type="submit" disabled={!canStart}>
            {Setting.start}
          </button>
        </div>
      </form>
    </div>
  );
};
