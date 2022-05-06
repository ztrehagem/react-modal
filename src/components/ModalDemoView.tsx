import { useModalManager, useStackValue } from "../lib/ModalManager";
import { NameForm } from "./NameForm";

export const ModalDemoView = (): JSX.Element => {
  const stack = useStackValue();
  const modal = useModalManager();

  const dismissHandler = () => {
    modal.pop();
  };

  const submitHandler = (name: string) => {
    modal.push(<div>{name}</div>);
  };

  return (
    <>
      <NameForm onSubmit={submitHandler} />

      <button type="button" onClick={dismissHandler}>
        pop
      </button>

      <hr />

      {stack.map((m) => (<div>{m}</div>))}
    </>
  );
};
