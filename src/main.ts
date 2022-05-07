import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./styles/global.css";
import "./lib/style.css";

const container = document.getElementById("root");
const root = container && createRoot(container);
root?.render(App());
