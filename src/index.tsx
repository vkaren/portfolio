import React from "react";
import ReactDOM from "react-dom/client";
import App from "@containers/App";
import "./styles/tailwind.css";
import "./i18n";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const render = (Component: React.ComponentType) => {
  root.render(
    <React.StrictMode>
      <Component />
    </React.StrictMode>
  );
};

render(App);
