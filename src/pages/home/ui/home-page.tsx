import {withAuth} from "@/shared/lib/hocs";
import {LogoutButton} from "@/features/logout";

const HomePage = () => {
  return (
    <div>
      <span>home</span>
      <LogoutButton/>
    </div>
  )
}

export default withAuth(HomePage);
