import { createBrowserRouter, RouterProvider } from "react-router-dom";
//pages
import RootLayout from "./Page/RootLayout";
import Home from "./Page/Home";
import PJToDo from "./Page/PJToDo";
import PJYomuLog from "./Page/PJYomuLog";
//import Test from "./Page/Test";

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
