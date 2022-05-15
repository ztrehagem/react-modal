import { memo, MouseEvent, useContext } from "react";
import { Modal } from "../lib/Modal";
import { ModalContext } from "../lib/ModalContext";
import { content, root } from "./HelloModal.css";
import { NameForm } from "./NameForm";

export interface Props {
  name: string;
}

export const HelloModal = memo<Props>((props) => {
  const modal = useContext(ModalContext);

  const closeModalHandler = (e: MouseEvent): void => {
    e.preventDefault();
    modal.pop();
  };

  const submitHandler = (name: string) => {
    modal.push(<HelloModal name={name} />);
  };

  return (
    <Modal>
      <div className={root} onClick={(e) => e.stopPropagation()}>
        <div className={content}>
          <p>Hello, {props.name}!</p>

          <button type="button" onClick={closeModalHandler}>
            closeModal
          </button>

          <p>Push the same modal recursively.</p>

          <NameForm onSubmit={submitHandler} />
        </div>
      </div>
    </Modal>
  );
});
