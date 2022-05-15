import { memo, useContext } from "react";
import { ModalContext } from "../lib/ModalContext";
import { HelloModal } from "./HelloModal";
import { NameForm } from "./NameForm";

export const ModalDemoView = memo(() => {
  const modal = useContext(ModalContext);

  const submitHandler = (name: string) => {
    modal.push(<HelloModal name={name} />);
  };

  return (
    <section>
      <h2>Demo</h2>

      <NameForm onSubmit={submitHandler} />
    </section>
  );
});
