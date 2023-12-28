import {FormEventHandler} from "react";
import AuthController from "../../../../fake-server/src/auth/auth.controller";
import {Input} from "@/shared/ui/input";
import {useForm} from "@/shared/lib/hooks";
import styles from './sign-in-form.module.scss'
import {Button} from "@/shared/ui/button";

interface SignInFormState {
  login: string;
  password: string;
}

const signInFormInitialState: SignInFormState = {
  login: '',
  password: ''
}

export const SignInForm = () => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    try {
      await AuthController.login({...form});
    } catch (e) {
      console.log(e);
    }
  }

  const {form, register} = useForm<SignInFormState>(signInFormInitialState);

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
