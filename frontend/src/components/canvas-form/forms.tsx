import { useState } from "react";
import { Button } from "../ui/button";
import { Plus, UserPlus } from "lucide-react";
import CreateRoom from "./create-room";
import JoinRoom from "./join-room";

type RoomType = "create" | "join";

const Forms = () => {
  const [form, setForm] = useState<RoomType>("create");
  return (
    <div className="space-y-6">
      <div className="flex gap-4 justify-center">
        <Button
          className={`${
            form === "create"
              ? "bg-black text-white hover:bg-black hover:text-white"
              : ""
          } px-8 py-5 transition-all duration-75 ease-in-out`}
          variant={"outline"}
          onClick={() => setForm("create")}
        >
          Create <Plus />
        </Button>
        <Button
          className={`${
            form === "join"
              ? "bg-black text-white hover:bg-black hover:text-white"
              : ""
          } px-8 py-5 transition-all duration-75 ease-in-out`}
          variant={"outline"}
          onClick={() => setForm("join")}
        >
          Join <UserPlus />
        </Button>
      </div>
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
