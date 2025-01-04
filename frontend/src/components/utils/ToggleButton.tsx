import { Plus, UserPlus } from "lucide-react";
import { Button } from "../ui/button";

type RoomType = "create" | "join";

interface ToggleButtonProps {
  form: RoomType;
  setForm: (form: RoomType) => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ form, setForm }) => {
  return (
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
  );
};

export default ToggleButton;
