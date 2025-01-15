import { useState } from "react";

type Player = "X" | "O";

const useTicTacToe = () => {
  const [board, setBoard] = useState<Array<Player | null>>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [winner, setWinner] = useState<Player | null>(null);
  const [draw, setDraw] = useState(false);

  const checkWinner = (board: Array<Player | null>) => {
    const winningCombination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combination of winningCombination) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  };

  const checkDraw = (board: Array<Player | null>) => {
    return board.every((cell) => cell !== null);
  };

  const handleCellClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = board.map((cell, i) =>
      i === index ? currentPlayer : cell
    );
    setBoard(newBoard);

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      return;
    }

    const isDraw = checkDraw(newBoard);
    if (isDraw) {
      setDraw(true);
      return;
    }

    setCurrentPlayer((prev) => (prev === "X" ? "O" : "X"));
  };

  const handleRestart = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
    setDraw(false);
  };

  return {
    board,
    currentPlayer,
    winner,
    draw,
    handleCellClick,
    handleRestart,
  };
};

export default useTicTacToe;
