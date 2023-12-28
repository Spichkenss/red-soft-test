import {cn} from "@/shared/lib/cn";
import styles from './App.module.scss'
import {AppRouter} from "@/app/config/routing";

function App() {
  return (
    <div className={cn(styles.app)}>
      <AppRouter />
    </div>
  )
}

export default App
