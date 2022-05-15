import { createElement, memo, useContext } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { ModalContext } from "./ModalContext";

export const Renderer = memo(() => {
  const { stack } = useContext(ModalContext);
  const top = stack.at(-1);
  const el = top && createElement(top.component, top.getProps())

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        classNames="zrm-t"
        key={stack.length}
        addEndListener={(node, done) =>
          node.addEventListener("transitionend", done)
        }
      >
        {top ? el : <></>}
      </CSSTransition>
    </SwitchTransition>
  );
});
