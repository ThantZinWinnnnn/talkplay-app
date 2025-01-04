import { Bell, MessageCircleMore, Gamepad2, Video } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md">
      <div className=" flex justify-between items-center py-6 px-6">
        <nav>
          <ul className="flex gap-4">
            <li>
              <Button variant="outline">
                <MessageCircleMore />
              </Button>
            </li>
            <li>
              <Button variant="outline">
                <Gamepad2 />
                <span className="ml-2">Games</span>
              </Button>
            </li>
            <li>
              <Button variant="outline">
                <Video />
                <span className="ml-2">Video</span>
              </Button>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" size={"icon"} className="relative">
            <Bell />
            <Badge className="absolute -top-4 -right-4 rounded-full bg-black text-white px-2 py-1">
              99
            </Badge>
          </Button>

          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;
