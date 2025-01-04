import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type State = {
  roomName: string;
  roomId: string;
};

type Action =
  | { type: "SET_ROOM_NAME"; payload: string }
  | { type: "SET_ROOM_ID"; payload: string };

const initialState: State = {
  roomName: "",
  roomId: "",
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_ROOM_NAME":
      return { ...state, roomName: action.payload };
    case "SET_ROOM_ID":
      return { ...state, roomId: action.payload };
    default:
      return state;
  }
};

const JoinRoom = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <form className="flex flex-col gap-5 p-4 w-[400px]">
      <div className="space-y-3">
        <Label htmlFor="roomName">Room Name</Label>
        <Input
          placeholder="Room Name"
          id="roomName"
          value={state.roomName}
          onChange={(e) => {
            dispatch({ type: "SET_ROOM_NAME", payload: e.target.value });
          }}
        />
      </div>
      <div className="space-y-3">
        <Label htmlFor="roomId">Room ID</Label>
        <Input
          value={state.roomId}
          id="roomId"
          placeholder="Enter Room ID"
          onChange={(e) => {
            dispatch({ type: "SET_ROOM_ID", payload: e.target.value });
          }}
        />
      </div>
      <Button type="submit" className="w-full">
        Join Room
      </Button>
    </form>
  );
};

export default JoinRoom;
