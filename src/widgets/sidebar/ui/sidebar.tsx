import styles from './sidebar.module.scss'
import {DataTreeView} from "@/entities/data";


export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <DataTreeView/>
    </aside>
  )
}
