import { ModalDemoView } from "./ModalDemoView";
import { PackageInformation } from "./PackageInformation";

export const MainView = (): JSX.Element => {
  return (
    <main>
      <PackageInformation />

      <ModalDemoView />
    </main>
  );
};
