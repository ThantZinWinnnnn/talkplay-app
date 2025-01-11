import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import joinRoomImg from "@/assets/join-room.webp";
import { Input } from "../ui/input";

type JoinRoomModalProps = {
  open: boolean;
  onClose: () => void;
};

const JoinRoomModal: React.FC<JoinRoomModalProps> = ({ open, onClose }) => {
  const [roomId, setRoomId] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomId(e.target.value);
  };

  const handleJoinRoom = () => {
    console.log("Joining room with ID:", roomId);
    // Add join room logic here
  };
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
            <Input
              placeholder="Enter Room ID"
              value={roomId}
              onChange={handleInputChange}
            />
            <Button onClick={handleJoinRoom}>Join Room</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JoinRoomModal;
