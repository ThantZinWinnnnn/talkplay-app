import { createBrowserRouter, RouteObject } from "react-router-dom";
import AuthenticationPage from "./pages/Authentication";
import ChatsPage from "./pages/Chats";
import Layout from "./components/layout";
import GamesPage from "./pages/Games";
import CanvasPage from "./pages/CanvasPage";
import TicTacToe from "./pages/TicTacToe";

const routes: RouteObject[] = [
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
      {
        path: "canvas",
        element: <CanvasPage />,
      },
      {
        path: "tic-tac-toe",
        element: <TicTacToe />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthenticationPage />,
  },
];

export const route = createBrowserRouter(routes);
