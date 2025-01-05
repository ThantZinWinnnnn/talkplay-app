import { Brush, Keyboard, Grid2X2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import canvasDrawing from "@/components/lottie/canvas.json";
import typing from "@/components/lottie/typing.json";
import ticTacToe from "@/components/lottie/tic-tac-toe.json";

import Lottie from "react-lottie";

import { GameType } from "@/types";
import { useMemo, useState } from "react";
import Forms from "@/components/canvas-form/forms";
import TypeRaceForms from "@/components/type-race/type-race-forms";
import TicTacToeForm from "@/components/tic-tac-toe/tic-tac-toe-form";
const games = [
  {
    name: "Canvas",
    description: "Draw and guess game",
    Icon: Brush,
    type: "Canvas",
  },
  {
    name: "Typing Race",
    description: "Typing speed test game",
    Icon: Keyboard,
    type: "Typing",
  },
  {
    name: "Tic Tac Toe",
    description: "Classic game",
    Icon: Grid2X2,
    type: "TicTacToe",
  },
];

const GamesPage = () => {
  const [type, setType] = useState<GameType>("Canvas");

  const defaultOptions = useMemo(
    () => ({
      loop: true,
      autoplay: true,
      animationData:
        type === "Canvas"
          ? canvasDrawing
          : type === "Typing"
          ? typing
          : ticTacToe,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    }),
    [type]
  );

  const gameName = useMemo(
    () =>
      type === "Canvas"
        ? "Canvas Drawing"
        : type === "Typing"
        ? "Typing Race"
        : "Tic Tac Toe",
    [type]
  );
  return (
    <main className="p-3 flex flex-col gap-4 overflow-y-scroll h-full">
      <section className="flex justify-center gap-4 pt-4">
        {games.map(({ name, description, Icon, type: gameType }, index) => (
          <Button
            key={index}
            variant={type === gameType ? "default" : "secondary"}
            className="py-6"
            onClick={() => setType(gameType as GameType)}
          >
            <Icon aria-label={description} />
            <p>{name}</p>
          </Button>
        ))}
      </section>
      <div className="space-y-6 flex flex-col items-center">
        <Lottie options={defaultOptions} width={250} />
        <p className="text-center text-2xl font-semibold">{gameName}</p>
        <div>
          {type === "Canvas" ? (
            <Forms />
          ) : type === "Typing" ? (
            <TypeRaceForms />
          ) : type === "TicTacToe" ? (
            <TicTacToeForm />
          ) : null}
        </div>
      </div>
    </main>
  );
};

export default GamesPage;
