import { useState } from "react";
import ToggleButton from "../utils/ToggleButton";
import TypeRaceCreateForm from "./type-race-create-form";
import TypeRaceJoinForm from "./type-race-join-form";

type RoomType = "create" | "join";
const TypeRaceForm = () => {
  const [form, setForm] = useState<RoomType>("create");
  return (
    <div className="space-y-6">
      <ToggleButton form={form} setForm={setForm} />
      <div className="flex flex-col gap-3 border border-slate-400 rounded-md p-4">
        {form === "create" ? (
          <div>
            <h2 className="text-lg font-semibold text-center">Create Game</h2>
            <TypeRaceCreateForm />
          </div>
        ) : (
          <div>
            <h2 className="text-lg font-semibold text-center">Join Game</h2>
            <TypeRaceJoinForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default TypeRaceForm;
