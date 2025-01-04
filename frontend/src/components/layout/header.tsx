import { Bell, MessageCircleMore, Gamepad2, Video } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const NavItem = ({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label?: string;
}) => (
  <li>
    <Button variant="outline">
      <Icon />
      {label && <span className="ml-2">{label}</span>}
    </Button>
  </li>
);

const NotificationButton = () => (
  <Button
    variant="outline"
    size="icon"
    className="relative"
    aria-label="Notifications"
  >
    <Bell />
    <Badge className="absolute -top-4 -right-4 rounded-full bg-black text-white px-2 py-1">
      99
    </Badge>
  </Button>
);

const UserAvatar = () => (
  <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>U</AvatarFallback>
  </Avatar>
);

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 backdrop-blur-md">
      <div className="flex justify-between items-center py-6 px-6">
        <nav>
          <ul className="flex gap-4">
            <NavItem icon={MessageCircleMore} />
            <NavItem icon={Gamepad2} label="Games" />
            <NavItem icon={Video} label="Video" />
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <NotificationButton />
          <UserAvatar />
        </div>
      </div>
    </header>
  );
};

export default Header;
