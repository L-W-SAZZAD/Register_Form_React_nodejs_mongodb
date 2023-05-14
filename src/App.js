import { RouterProvider } from "react-router-dom";
import { router } from "./Routers/router";
import UserContext from "./UserContext/UserContext";

function App() {
  return (
    <UserContext>
      <RouterProvider router={router}></RouterProvider>
    </UserContext>
  );
}

export default App;
