import styles from './sign-in-page.module.scss'
import {SignInForm} from "@/features/auth/sign-in";

const SignInPage = () => {
  return (
    <div className={'center'}>
      <h1 className={styles.title}>Sign in</h1>
      <SignInForm/>
    </div>
  )
}

export default SignInPage;
