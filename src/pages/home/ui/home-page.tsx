import {withAuth} from "@/shared/lib/hocs";

const HomePage = () => {
  return (
    <div>
      <span>home</span>
    </div>
  )
}

export default withAuth(HomePage);
