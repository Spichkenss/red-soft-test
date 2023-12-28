import {SignInForm} from "@/features/sign-in";
import styles from './sign-in-page.module.scss'

const SignInPage = () => {
  return (
    <div>
      <h1 className={styles.title}>Sign in</h1>
      <SignInForm/>
    </div>
  )
}

export default SignInPage;
