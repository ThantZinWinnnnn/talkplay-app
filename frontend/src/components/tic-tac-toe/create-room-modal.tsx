import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

type CreateRoomModalProps = {
  open: boolean;
  onClose: () => void;
};

const CreateRoomModal: React.FC<CreateRoomModalProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogTitle>
          <DialogHeader>Create Room</DialogHeader>
        </DialogTitle>
        <DialogFooter>
          <Button onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateRoomModal;
