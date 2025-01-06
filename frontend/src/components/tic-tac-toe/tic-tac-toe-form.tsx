import React, { useState } from "react";
import createRoomImg from "@/assets/create-room.webp";
import joinRoomImg from "@/assets/join-room.webp";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import { Input } from "../ui/input";
import CreateRoomModal from "./create-room-modal";
import JoinRoomModal from "./join-room-modal";

const TicTacToeForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [showCreateRoomModal, setShowCreateRoomModal] = useState(false);
  const [showJoinRoomModal, setShowJoinRoomModal] = useState(false);

  return (
    <div>
      {showForm ? (
        <div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setShowForm((prev) => !prev)}
            aria-label="Go back"
          >
            <ArrowLeft />
          </Button>
          <div className="flex justify-center gap-6 mt-6">
            <RoomButton
              imgSrc={createRoomImg}
              text="Create Room"
              onClick={() => setShowCreateRoomModal((p) => !p)}
            />
            <RoomButton
              imgSrc={joinRoomImg}
              text="Join Room"
              onClick={() => setShowJoinRoomModal((p) => !p)}
            />
          </div>
          <CreateRoomModal
            open={showCreateRoomModal}
            onClose={() => setShowCreateRoomModal(false)}
          />
          <JoinRoomModal
            open={showJoinRoomModal}
            onClose={() => setShowJoinRoomModal(false)}
          />
        </div>
      ) : (
        <div className="flex justify-center gap-6">
          <Input placeholder="Enter your name" aria-label="Enter your name" />
          <Button onClick={() => setShowForm((prev) => !prev)}>
            Start Game
          </Button>
        </div>
      )}
    </div>
  );
};

type RoomButtonProps = {
  imgSrc: string;
  text: string;
  onClick: () => void;
};

const RoomButton: React.FC<RoomButtonProps> = ({ imgSrc, text, onClick }) => (
  <Button
    variant="outline"
    className="w-[200px] h-[250px] flex flex-col gap-3"
    onClick={onClick}
  >
    <img src={imgSrc} alt={text} className="w-full h-full object-contain" />
    <p className="text-lg font-semibold">{text}</p>
  </Button>
);

export default TicTacToeForm;
