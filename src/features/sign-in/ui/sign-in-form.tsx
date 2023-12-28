import {FormEventHandler} from "react";
import {Input} from "@/shared/ui/input";
import {useForm} from "@/shared/lib/hooks";
import styles from './sign-in-form.module.scss'
import {Button} from "@/shared/ui/button";
import {login} from "@/features/sign-in/model/service/sign-in";
import {SignInCredentials} from "../model/types/sign-in.types";
import {useAuth} from "@/app/config/auth/model/auth-context";


const signInFormInitialState: SignInCredentials = {
  login: '',
  password: ''
}

export const SignInForm = () => {
  const { setToken } = useAuth();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const res = await login(form);
    if (res) {
      setToken(res.token)
    }
  }

  const {form, register} = useForm<SignInCredentials>(signInFormInitialState);

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor={'login'}>Login</label>
      <Input type="text" {...register('login')} />
      <label htmlFor={'password'}>Password</label>
      <Input type="password" {...register('password')} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
