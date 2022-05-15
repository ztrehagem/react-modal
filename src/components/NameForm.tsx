import { ChangeEvent, FormEvent, memo, useState } from "react";

export interface Props {
  onSubmit?: (name: string) => void;
}

export const NameForm = memo<Props>((props) => {
  const [name, setName] = useState("");

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmit?.(name);
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        value={name}
        onChange={changeHandler}
        type="text"
        placeholder="your name"
      />

      <button type="submit">showModal</button>
    </form>
  );
});
