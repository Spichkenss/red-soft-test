import {AppRouter} from "./config/routing";
import {cn} from "@/shared/lib/cn";
import styles from './App.module.scss'

function App() {
  return (
    <div className={cn(styles.app)}>
      <AppRouter/>
    </div>
  )
}

export default App
