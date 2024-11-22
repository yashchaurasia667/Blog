import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/Register";
import Layout from "./layouts/layout";
import { UserContextProvider } from "./contexts/userContext/UserContextProvider";

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
      <UserContextProvider>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </UserContextProvider>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
