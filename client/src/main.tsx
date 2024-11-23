import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { UserContextProvider } from "./contexts/userContext/UserContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <UserContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </UserContextProvider>
);
