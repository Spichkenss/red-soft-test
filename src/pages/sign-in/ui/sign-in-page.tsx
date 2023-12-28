import {SignInForm} from "@/features/sign-in";
import {withoutAuth} from "@/shared/lib/hocs";

const SignInPage = () => {
  return (
    <div>
      <SignInForm/>
    </div>
  )
}

export default withoutAuth(SignInPage);
