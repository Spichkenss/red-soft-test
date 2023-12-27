import {ChangeEvent, ChangeEventHandler, useState} from "react";

interface RegisterReturnType<T> {
  id: string;
  name: string;
  value: T[keyof T];
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

interface UseFormReturnType<T> {
  form: T;
  register: (key: keyof T) => RegisterReturnType<T>;
}

export const useForm = <T,>(initialState: T): UseFormReturnType<T> => {
  const [form, setForm] = useState<T>(initialState);

  const changeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setForm(curr => ({...curr, [event.target.name]: event.target.value}));
  }

  const register = (key: keyof T): RegisterReturnType<T> => {
    return {
      id: key.toString(),
      name: key.toString(),
      value: form[key],
      onChange: changeHandler,
    }
  }

  return { form, register };
}
