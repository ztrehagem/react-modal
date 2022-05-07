import { ReactElement } from "react";
import { atom, useRecoilState, useRecoilValue } from "recoil";

type ModalStack = ReactElement[];

interface ModalManager {
  push(el: ReactElement): void;
  pop(): void;
  flush(): void;
}

const stackState = atom<ModalStack>({
  key: "ModalManager::stack",
  default: [],
});

export const useStackValue = (): ModalStack => {
  return useRecoilValue(stackState);
};

export const useModalManager = (): ModalManager => {
  const [stack, setStack] = useRecoilState(stackState);

  return {
    push: (el) => setStack([...stack, el]),
    pop: () => setStack(stack.slice(0, -1)),
    flush: () => setStack([]),
  };
};
