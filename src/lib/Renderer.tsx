import { memo, useContext } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { ModalContext } from "./ModalContext";

export const Renderer = memo(() => {
  const { stack } = useContext(ModalContext);
  const top = stack.at(-1);

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        classNames="zrm-t"
        key={stack.length}
        addEndListener={(node, done) =>
          node.addEventListener("transitionend", done)
        }
      >
        {top ?? <></>}
      </CSSTransition>
    </SwitchTransition>
  );
});
