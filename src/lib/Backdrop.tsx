import { memo, useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { ModalContext } from "./ModalContext";

export const Backdrop = memo(() => {
  const { stack } = useContext(ModalContext);
  const showing = stack.at(0) != null;

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
});
