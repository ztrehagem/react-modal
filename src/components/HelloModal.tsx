import { memo, MouseEvent, useCallback } from "react";
import { Modal } from "../lib/Modal";
import { useModalManager } from "../lib/ModalManager";
import { content, root } from "./HelloModal.css";
import { NameForm } from "./NameForm";

export interface Props {
  name: string;
}

export const HelloModal = memo<Props>((props) => {
  const modal = useModalManager();

  const closeModalHandler = useCallback(
    (e: MouseEvent): void => {
      e.preventDefault();
      modal.pop();
    },
    [modal]
  );

  const submitHandler = useCallback(
    (name: string) => {
      modal.push(<HelloModal name={name} />);
    },
    [modal]
  );

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
