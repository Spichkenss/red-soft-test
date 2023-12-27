import {FormEventHandler} from "react";
import {useForm} from "../../../shared/lib/hooks";
import AuthController from "../../../../fake-server/src/auth/auth.controller";


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
    <form onSubmit={handleSubmit}>
      <label htmlFor={'login'}>login</label>
      <input type="text" {...register('login')} />
      <label htmlFor={'password'}>password</label>
      <input type="password" {...register('password')} />
      <button type={'submit'}>Submit</button>
    </form>
  )
}
