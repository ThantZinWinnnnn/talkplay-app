import React from "react";
import useTicTacToe from "@/hooks/use-tic-tac-toe";

type Player = "X" | "O";

interface BoardProps {
  board: (Player | null)[];
  handleCellClick: (index: number) => void;
}

interface RestartButtonProps {
  handleRestart: () => void;
}

interface GameStatusProps {
  winner: Player | null;
  draw: boolean;
  currentPlayer: Player;
}

const TicTacToe: React.FC = () => {
  const { board, currentPlayer, winner, draw, handleCellClick, handleRestart } =
    useTicTacToe();

  return (
    <main className="pt-14 flex justify-center items-center flex-col">
      <h1 className="text-3xl font-bold text-center">Tic Tac Toe</h1>
      <Board board={board} handleCellClick={handleCellClick} />
      <RestartButton handleRestart={handleRestart} />
      <GameStatus winner={winner} draw={draw} currentPlayer={currentPlayer} />
    </main>
  );
};

const Board: React.FC<BoardProps> = ({ board, handleCellClick }) => (
  <div className="grid grid-cols-3 gap-2 mt-4 w-fit mx-auto">
    {board.map((cell, index) => (
      <button
        key={index}
        className="h-20 w-20 border border-gray-300"
        onClick={() => handleCellClick(index)}
      >
        {cell}
      </button>
    ))}
  </div>
);

const RestartButton: React.FC<RestartButtonProps> = ({ handleRestart }) => (
  <button
    className="mt-4 py-2 px-4 bg-blue-500 text-white rounded"
    onClick={handleRestart}
  >
    Restart
  </button>
);

const GameStatus: React.FC<GameStatusProps> = ({
  winner,
  draw,
  currentPlayer,
}) => (
  <>
    {winner && (
      <p className="text-2xl font-semibold text-center">{winner} wins!</p>
    )}
    {draw && <p className="text-2xl font-semibold text-center">It's a draw!</p>}
    <p className="text-2xl font-semibold text-center">
      Current Player: {currentPlayer}
    </p>
  </>
);

export default TicTacToe;
