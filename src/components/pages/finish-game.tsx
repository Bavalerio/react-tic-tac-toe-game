import '../../index.css';

import React from 'react';

interface FinishProps {
  name: string | null;
  restart(): void;
}

enum Name {
  restar = 'Restart',
}

export const Finish: React.FC<FinishProps> = ({ name, restart }) => {
  return (
    <div className="page">
      <h1>
        {name && `Player ${name} won the game`}
        {!name && `It's a tie`}
      </h1>
      <button className="buttons-page" onClick={restart}>
        {Name.restar}
      </button>
    </div>
  );
};
