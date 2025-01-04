import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const TypeRaceJoinForm = () => {
  const [name, setName] = React.useState("");
  const [gameId, setGameId] = React.useState("");
  return (
    <form className="flex flex-col gap-5  p-4 w-[400px]">
      <div className="space-y-3">
        <Label htmlFor="name">Name</Label>
        <Input
          value={name}
          placeholder="Enter you name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="space-y-3">
        <Label htmlFor="gameId">Game ID</Label>
        <Input
          value={gameId}
          placeholder="Enter Game ID"
          onChange={(e) => setGameId(e.target.value)}
        />
      </div>
      <Button type="submit" className="py-6">
        Join Game
      </Button>
    </form>
  );
};

export default TypeRaceJoinForm;
