import Login from "@/components/auth/login";
import authImage from "../assets/image.webp";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignUp from "@/components/auth/sign-up";

const AuthenticationPage = () => {
  return (
    <main className="flex w-screen h-screen">
      <div className="w-3/5 h-full flex flex-col justify-center items-center gap-20">
        <Header />
        <AuthTabs />
      </div>
      <AuthImage />
    </main>
  );
};

const Header = () => (
  <h1 className="text-left text-3xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
    Let's Chat And Play Games
  </h1>
);

const AuthTabs = () => (
  <div className="w-4/5 mx-auto flex justify-center">
    <Tabs defaultValue="login" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2 h-[50px]">
        <TabsTrigger value="login" className="h-full">
          Login
        </TabsTrigger>
        <TabsTrigger value="sign-up" className="h-full">
          Sign Up
        </TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Login />
      </TabsContent>
      <TabsContent value="sign-up">
        <SignUp />
      </TabsContent>
    </Tabs>
  </div>
);

const AuthImage = () => (
  <div className="w-2/5 h-full">
    <img
      src={authImage}
      alt="authImage"
      className="w-full h-full object-cover"
    />
  </div>
);

export default AuthenticationPage;
