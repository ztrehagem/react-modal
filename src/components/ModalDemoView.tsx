import { NameForm } from "./NameForm";

export const ModalDemoView = (): JSX.Element => {
  const submitHandler = (name: string) => {
    console.log({ name });
  };

  return <NameForm onSubmit={submitHandler} />;
};
