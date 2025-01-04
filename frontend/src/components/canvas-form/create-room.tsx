import React, { useReducer } from "react";
import { Input } from "../ui/input";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

type State = {
  roomName: string;
  roomId: string;
  copied: boolean;
};

type Action =
  | { type: "SET_ROOM_NAME"; payload: string }
  | { type: "SET_ROOM_ID"; payload: string }
  | { type: "SET_COPIED"; payload: boolean };

const initialState: State = {
  roomName: "",
  roomId: uuidv4(),
  copied: false,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_ROOM_NAME":
      return { ...state, roomName: action.payload };
    case "SET_ROOM_ID":
      return { ...state, roomId: action.payload };
    case "SET_COPIED":
      return { ...state, copied: action.payload };
    default:
      return state;
  }
};

const CreateRoom = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state.roomName, state.roomId);
  };
  return (
    <div>
      <form className="flex flex-col gap-5  p-4" onSubmit={formSubmitHandler}>
        <div className="space-y-3">
          <Label htmlFor="roomName">Room Name</Label>
          <Input
            placeholder="Room Name"
            value={state.roomName}
            onChange={(e) =>
              dispatch({ type: "SET_ROOM_NAME", payload: e.target.value })
            }
            id="roomName"
          />
        </div>
        <div className="space-y-3">
          <Label htmlFor="roomId">Room ID</Label>
          <div className="flex gap-3">
            <Input value={state.roomId} readOnly id="roomId" />
            <Button
              type="button"
              onClick={() =>
                dispatch({ type: "SET_ROOM_ID", payload: uuidv4() })
              }
            >
              Generate
            </Button>
            <Button
              type="button"
              variant={"outline"}
              onClick={() => {
                navigator.clipboard.writeText(state.roomId);
                dispatch({ type: "SET_COPIED", payload: true });
              }}
            >
              {state.copied ? "Copied" : "Copy"}
            </Button>
          </div>
        </div>

        <Button type="submit" className="py-6">
          Create Room
        </Button>
      </form>
    </div>
  );
};

export default CreateRoom;
