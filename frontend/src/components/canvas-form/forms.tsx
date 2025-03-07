import { useState } from "react";
import CreateRoom from "./create-room";
import JoinRoom from "./join-room";
import ToggleButton from "../utils/ToggleButton";

type RoomType = "create" | "join";

const Forms = () => {
  const [form, setForm] = useState<RoomType>("create");
  return (
    <div className="space-y-6">
      <ToggleButton form={form} setForm={setForm} />
      <div className="flex flex-col gap-3 border border-slate-400 rounded-md p-4">
        {form === "create" ? (
          <div>
            <h2 className="text-center text-lg font-semibold">Create Room</h2>
            <CreateRoom />
          </div>
        ) : (
          <div>
            <h2 className="text-center text-lg font-semibold">Join Room</h2>
            <JoinRoom />
          </div>
        )}
      </div>
    </div>
  );
};

export default Forms;
