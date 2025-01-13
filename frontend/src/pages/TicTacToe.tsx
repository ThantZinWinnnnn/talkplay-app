import React from "react";

import useTicTacToe from "@/hooks/use-tic-tac-toe";

const TicTacToe = () => {
  const { board, currentPlayer, winner, draw, handleCellClick, handleRestart } =
    useTicTacToe();

  return (
    <main className="pt-14 flex justify-center items-center flex-col">
      <h1 className="text-3xl font-bold text-center">Tic Tac Toe</h1>
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
      <button
        className="mt-4 py-2 px-4 bg-blue-500 text-white rounded"
        onClick={handleRestart}
      >
        Restart
      </button>
      {winner && (
        <p className="text-2xl font-semibold text-center">{winner} wins!</p>
      )}
      {draw && (
        <p className="text-2xl font-semibold text-center">It's a draw!</p>
      )}
      <p className="text-2xl font-semibold text-center">
        Current Player: {currentPlayer}
      </p>
    </main>
  );
};

export default TicTacToe;
