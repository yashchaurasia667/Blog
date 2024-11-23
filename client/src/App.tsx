import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/Register";
import CreatePost from "./pages/CreatePost";
import Layout from "./layouts/layout";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./App.css";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="create" element={<CreatePost />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
