import { createBrowserRouter } from "react-router-dom";
import AuthenticationPage from "./pages/Authentication";
import ChatsPage from "./pages/Chats";
import Layout from "./components/layout";
import GamesPage from "./pages/Games";
import CanvasPage from "./pages/CanvasPage";
import TicTacToeForm from "./components/tic-tac-toe/tic-tac-toe-form";

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
      {
        path: "canvas",
        element: <CanvasPage />,
      },
      {
        path: "tic-tac-toe",
        element: <TicTacToeForm />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthenticationPage />,
  },
];

export const route = createBrowserRouter(routes);
