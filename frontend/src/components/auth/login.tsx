import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const Login = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="space-y-2">
        <Label>Email</Label>
        <Input
          type="email"
          placeholder="Enter your Email"
          className="h-[50px]"
        />
      </div>
      <div className="space-y-2">
        <Label>Password</Label>
        <Input
          type="password"
          placeholder="Enter your Password"
          className="h-[50px]"
        />
      </div>
      <Button className="py-5">Login</Button>
    </div>
  );
};

export default Login;
