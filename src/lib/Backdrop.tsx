import { FC } from "react";
import { CSSTransition } from "react-transition-group";
import { useStackValue } from "./ModalManager";

export const Backdrop: FC = () => {
  const showing = useStackValue().at(0) != null;

  return (
    <CSSTransition
      in={showing}
      classNames="zrm-t"
      addEndListener={(node, done) =>
        node.addEventListener("transitionend", done)
      }
    >
      <div className="zrm-backdrop"></div>
    </CSSTransition>
  );
};
