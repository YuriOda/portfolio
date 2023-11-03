import { createBrowserRouter, RouterProvider } from "react-router-dom";
//pages
import Home from "./page/Home";
import RootLayout from "./RootLayout";
import PJToDo from "./page/PJToDo";
import PJYomuLog from "./page/PJYomuLog";

//style
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/project",
    children: [
      { path: "todo", element: <PJToDo /> },
      { path: "yomu-log", element: <PJYomuLog /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
