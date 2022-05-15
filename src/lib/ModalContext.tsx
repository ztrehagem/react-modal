import { createContext, memo, ReactElement, useState } from "react";

type ModalStack = ReactElement[];

interface ModalContextValue {
  readonly stack: ModalStack;
  push(el: ReactElement): void;
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
    push: (el) => setStack([...stack, el]),
    pop: () => setStack(stack.slice(0, -1)),
    flush: () => setStack([]),
  };

  return (
    <ModalContext.Provider value={value}>
      {props.children}
    </ModalContext.Provider>
  );
});
