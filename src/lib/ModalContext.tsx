import { createContext, FC, memo, ReactElement, useState } from "react";

interface ModalInstance<Props = any> {
  component: FC<Props>
  getProps: () => Props
}

type ModalStack = ModalInstance[];

interface ModalContextValue {
  readonly stack: ModalStack;
  push<Props>(component: FC<Props>, getProps: () => Props): void;
  pop(): void;
  flush(): void;
}

export const ModalContext = createContext<ModalContextValue>({
  stack: [],
  push: () => void 0,
  pop: () => void 0,
  flush: () => void 0,
});

export interface ModalContextProps {
  children?: ReactElement | ReactElement[];
}

export const ModalContextProvider = memo<ModalContextProps>((props) => {
  const [stack, setStack] = useState<ModalStack>([]);

  const value: ModalContextValue = {
    stack,
    push: (component, getProps) => setStack([...stack, { component, getProps }]),
    pop: () => setStack(stack.slice(0, -1)),
    flush: () => setStack([]),
  };

  return (
    <ModalContext.Provider value={value}>
      {props.children}
    </ModalContext.Provider>
  );
});
