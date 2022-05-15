import { memo, ReactElement } from "react";

export interface Props {
  children?: ReactElement;
}

export const Modal = memo<Props>((props) => {
  return <div className="zrm-modal">{props.children}</div>;
});
