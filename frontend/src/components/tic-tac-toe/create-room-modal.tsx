import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import createRoomImg from "@/assets/create-room.webp";
import { nanoid } from "nanoid";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Copy, CheckCheck } from "lucide-react";
import { useState } from "react";

type CreateRoomModalProps = {
  open: boolean;
  onClose: () => void;
};

const roomId = nanoid(7);

const CreateRoomModal: React.FC<CreateRoomModalProps> = ({ open, onClose }) => {
  const [copied, setCopied] = useState(false);
  const copyHandler = () => {
    navigator.clipboard.writeText(roomId);
    setCopied((p) => !p);

    setTimeout(() => {
      setCopied((p) => !p);
    }, 1000);
  };
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="">
        <DialogTitle>
          <DialogHeader>Create Room</DialogHeader>
        </DialogTitle>
        <div className="py-3">
          <div className="w-32 h-32 mx-auto">
            <img
              src={createRoomImg}
              alt="Create Room"
              className="w-full object-contain aspect-square"
            />
          </div>
          <div>
            <Label htmlFor="room-id">Room ID</Label>
            <div className="flex gap-4">
              <Input id="room-id" value={roomId} readOnly />
              <Button variant={"outline"} size={"icon"} onClick={copyHandler}>
                {copied ? <CheckCheck /> : <Copy />}
              </Button>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={onClose}>Close</Button>
          <Button variant={"outline"}>Create Room</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateRoomModal;
