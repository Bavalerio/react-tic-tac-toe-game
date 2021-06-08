import { useEffect, useState } from 'react';

interface ReturnValueProps {
	board: string[];
	status: string;
	winner: string | null;
	handleClick: (index: number) => void;
	handleRestart: () => void;
	handleStart: (players: string[]) => void;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (): ReturnValueProps => {
	const [board, setBoard] = useState(Array(9).fill(''));
	const [turn, setTurn] = useState('X');
	const [winner, setWinner] = useState<string | null>(null);
	const [status, setStatus] = useState('created');
	const [players, setPlayers] = useState(['', '']);

	useEffect(() => {
		if (status !== 'started') return;
		const winningPositions = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		let winingPositionIndex = 0;
		let winner: string | null = null;
		while (winingPositionIndex < winningPositions.length && !winner) {
			const boardPositionsToCheck = winningPositions[winingPositionIndex];
			const boardValuesToCheck = boardPositionsToCheck.map(
				(index: number) => board[index]
			);
			const checkingValue = boardValuesToCheck[0];
			const isFinished = boardValuesToCheck.every(
				(value) => value === checkingValue && checkingValue
			);
			winner = !isFinished ? null : checkingValue;
			winingPositionIndex++;
		}
		if (winner) {
			setWinner(winner === 'X' ? players[0] : players[1]);
			setStatus('finished');
			return;
		}
		setStatus(board.filter((value) => !value).length ? 'started' : 'finished');
	}, [board, players, status]);

	function handleClick(index: number): void {
		if (index < 0 || index > 9 || winner) return;
		const newBoard = [...board];
		newBoard.splice(index, 1, turn);
		setBoard(newBoard);
		const newTurn = turn === 'X' ? 'O' : 'X';
		setTurn(newTurn);
	}

	function handleStart(players: string[]) {
		setPlayers(players);
		setTurn('X');
		setStatus('started');
	}

	function handleRestart() {
		setBoard(Array(9).fill(''));
		setWinner('');
		setStatus('created');
	}

	return { board, status, winner, handleClick, handleRestart, handleStart };
};
