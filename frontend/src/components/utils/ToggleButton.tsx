import { Plus, UserPlus } from "lucide-react";
import { Button } from "../ui/button";

type RoomType = "create" | "join";

interface ToggleButtonProps {
  form: RoomType;
  setForm: (form: RoomType) => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ form, setForm }) => {
  const buttonClasses = (type: RoomType) =>
    form === type ? "bg-black text-white hover:bg-black hover:text-white" : "";

  return (
    <div className="flex gap-4 justify-center">
      <Button
        className={`${buttonClasses(
          "create"
        )} px-8 py-5 transition-all duration-75 ease-in-out`}
        variant="outline"
        onClick={() => setForm("create")}
      >
        Create <Plus />
      </Button>
      <Button
        className={`${buttonClasses(
          "join"
        )} px-8 py-5 transition-all duration-75 ease-in-out`}
        variant="outline"
        onClick={() => setForm("join")}
      >
        Join <UserPlus />
      </Button>
    </div>
  );
};

export default ToggleButton;
