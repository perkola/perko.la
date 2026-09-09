import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Self-hosted Fraunces (variable). Roman carries all axes (opsz, wght, SOFT,
// WONK) for its characterful look; italic is the lighter opsz+wght cut.
import "@fontsource-variable/fraunces/full.css";
import "@fontsource-variable/fraunces/opsz-italic.css";

import "./styles/reset.css";
import "./styles/tokens.css";
import "./styles/app.css";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
