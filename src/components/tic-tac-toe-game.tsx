import '../index.css';

import React from 'react';
import { Square } from './index';

interface GameProps {
  board: string[];
  handleClick(index: number): void;
}

export const Games: React.FC<GameProps> = ({ board, handleClick }) => {
  return (
    <div className="container">
      {board.map((value, index) => (
        <Square
          key={index}
          value={value}
          index={index}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};
