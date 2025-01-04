import { createBrowserRouter } from "react-router-dom";
import AuthenticationPage from "./pages/Authentication";
import ChatsPage from "./pages/Chats";
import Layout from "./components/layout";
import GamesPage from "./pages/Games";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "chats",
        element: <ChatsPage />,
      },
      {
        path: "games",
        element: <GamesPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthenticationPage />,
  },
];

export const route = createBrowserRouter(routes);
