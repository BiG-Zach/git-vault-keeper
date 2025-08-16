import React from "react";
import { createRoot } from "react-dom/client";
import { AppRouter } from "./utils/routes";
import "./index.css";

const el = document.getElementById("root");
if (!el) throw new Error("#root not found");
createRoot(el).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
