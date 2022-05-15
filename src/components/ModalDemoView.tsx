import { memo } from "react";
import { Backdrop } from "../lib/Backdrop";
import { useModalManager } from "../lib/ModalManager";
import { Renderer } from "../lib/Renderer";
import { HelloModal } from "./HelloModal";
import { NameForm } from "./NameForm";

export const ModalDemoView = memo(() => {
  const modal = useModalManager();

  const dismissHandler = () => {
    modal.pop();
  };

  const submitHandler = (name: string) => {
    modal.push(<HelloModal name={name} />);
  };

  return (
    <section>
      <h2>Demo</h2>

      <NameForm onSubmit={submitHandler} />

      <button type="button" onClick={dismissHandler}>
        pop
      </button>

      <hr />

      <Backdrop />

      <Renderer />
    </section>
  );
});
