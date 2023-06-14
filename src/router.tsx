import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Routes/Home";
import Movies from "./Routes/Movies";
import Search from "./Routes/Search";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "moives",
        element: <Movies />,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
]);
