import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import joinRoomImg from "@/assets/join-room.webp";
import { Input } from "../ui/input";

type JoinRoomModalProps = {
  open: boolean;
  onClose: () => void;
};

const JoinRoomModal: React.FC<JoinRoomModalProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogTitle>
          <DialogHeader>Join Room</DialogHeader>
        </DialogTitle>
        <div className="flex flex-col gap-4">
          <div className="w-32 h-32 mx-auto">
            <img
              src={joinRoomImg}
              alt="Join Room"
              className="w-full object-contain aspect-square"
            />
          </div>
          <div className="flex gap-4  mt-4">
            <Input placeholder="Enter Room ID" />
            <Button>Join Room</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JoinRoomModal;
