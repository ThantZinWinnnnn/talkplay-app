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
        <DialogFooter>
          <Button>Join</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default JoinRoomModal;
