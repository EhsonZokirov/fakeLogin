import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div className="flex justify-center mt-[10%]">
          <CircularProgress sx={{ alignSelf: "center" }} disableShrink />
          loading...
        </div>
      }
    ></Suspense>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
