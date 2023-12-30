import {Button} from "@/shared/ui/button";
import {RoutePaths} from "@/app/config/routing";
import {useNavigate} from "react-router-dom";

export const GoToSignInPageButton = () => {
  const navigate = useNavigate();

  const goToSignInPage = () => {
    navigate(RoutePaths.browse)
  }

  return (
    <Button onClick={goToSignInPage}>
      Sign in
    </Button>
  )
}
