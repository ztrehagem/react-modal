import React from "react";
import { RecoilRoot } from "recoil";
import { MainView } from "./components/MainView";

export const App = (): JSX.Element => {
  return (
    <React.StrictMode>
      <RecoilRoot>
        <MainView />
      </RecoilRoot>
    </React.StrictMode>
  );
};
