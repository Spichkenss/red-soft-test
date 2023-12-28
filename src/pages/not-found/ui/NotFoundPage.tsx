import {useNavigate} from "react-router-dom";
import styles from './NotFoundPage.module.scss'

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  }

  return (
    <div className={styles.container}>
      <h1>Page not found =(</h1>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  )
}
