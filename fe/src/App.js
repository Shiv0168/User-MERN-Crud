import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import View from "./components/View";
import Add from "./components/Add";
import Edit from "./components/Edit";
import Nav from "./components/NavigationBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Nav>
          <View />,
        </Nav>
      </>
    ),
  },
  {
    path: "/add",
    element: (
      <>
        <Nav>
          <Add />,
        </Nav>
      </>
    ),
  },
  {
    path: "/edit/:_id",
    element: (
      <>
        <Nav>
          <Edit />,
        </Nav>
      </>
    ),
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
