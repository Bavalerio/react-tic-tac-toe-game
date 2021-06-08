import '../../index.css';

import React from 'react';

interface SquareProps {
	index: number;
	value: string;
	handleClick: (index: number) => void;
}

export const Square: React.FC<SquareProps> = ({
	index,
	value,
	handleClick,
}) => {
	return (
		<button className='btn' onClick={() => handleClick(index)}>
			{value}
		</button>
	);
};
