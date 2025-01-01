import { createBrowserRouter } from "react-router-dom";
import AuthenticationPage from "./pages/Authentication";
import ChatsPage from "./pages/Chats";

export const route = createBrowserRouter([
  {
    path: "/chats",
    element: <ChatsPage />,
  },
  {
    path: "/",
    element: <AuthenticationPage />,
  },
]);
