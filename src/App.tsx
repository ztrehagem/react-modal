import React from "react";
import { MainView } from "./components/MainView";
import { Backdrop } from "./lib/Backdrop";
import { ModalContextProvider } from "./lib/ModalContext";
import { Renderer } from "./lib/Renderer";

export const App = (): JSX.Element => {
  return (
    <div>
      {/* <React.StrictMode> */}
      <ModalContextProvider>
        <MainView />
        <Backdrop />
        <Renderer />
      </ModalContextProvider>
      {/* </React.StrictMode> */}
    </div>
  );
};
