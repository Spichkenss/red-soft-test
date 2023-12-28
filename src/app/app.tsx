import {AppRouter} from "./config/routing";
import {cn} from "@/shared/lib/cn";
import styles from './App.module.scss'
import {Navbar} from "@/widgets/navbar";

function App() {
  return (
    <div className={cn(styles.app)}>
      <Navbar/>
      <AppRouter/>
    </div>
  )
}

export default App
