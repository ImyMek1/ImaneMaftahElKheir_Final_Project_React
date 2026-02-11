import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { EventsProvider } from "./context/EventsContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <EventsProvider>
    <App />
  </EventsProvider>
);
