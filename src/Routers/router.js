import RootLayOut from "../Layout/RootLayOut";

const {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} = require("react-router-dom");
const { default: Register } = require("../Pages/Register/Register");
const { default: Login } = require("../Pages/Login/Login");

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<RootLayOut />}>
        <Route path="/" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Route>
  )
);
