import { FC, ReactElement } from "react";

export interface Props {
  children?: ReactElement;
}

export const Modal: FC<Props> = (props) => {
  return <div className="zrm-modal">{props.children}</div>;
};
