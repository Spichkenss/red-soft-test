import {ChangeEventHandler, FormEventHandler, useCallback, useState} from "react";
import styles from './sign-in-form.module.scss'
import {Button} from "@/shared/ui/button";
import {login} from "@/features/sign-in/model/service/sign-in";
import {SignInCredentials} from "../model/types/sign-in.types";
import {useAuth} from "@/app/config/auth/model/auth-context";
import Input from "@/shared/ui/input/ui/input";


const signInFormInitialState: SignInCredentials = {
  login: '',
  password: ''
}

export const SignInForm = () => {
  const { setToken } = useAuth();
  const [form, setForm] = useState<SignInCredentials>(signInFormInitialState);

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(async (event) => {
    event.preventDefault();
    const res = await login(form);
    if (res) {
      setToken(res.token)
    }
  }, [form, setToken])

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor={'login'}>Login</label>
      <Input type="text" name={'login'} onChange={handleChange}/>
      <label htmlFor={'password'}>Password</label>
      <Input type="text" name={'password'} onChange={handleChange} />
      <Button type={'submit'} >Submit</Button>
    </form>
  )
}
