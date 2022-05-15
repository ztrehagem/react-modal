import { memo } from "react";
import { ModalDemoView } from "./ModalDemoView";
import { PackageInformation } from "./PackageInformation";

export const MainView = memo(() => {
  return (
    <main>
      <PackageInformation />

      <ModalDemoView />
    </main>
  );
});
