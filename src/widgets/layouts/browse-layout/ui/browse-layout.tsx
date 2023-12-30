import {Sidebar} from "@/widgets/sidebar";
import {DataContextProvider} from "@/entities/data";
import {Outlet} from "react-router-dom";
import styles from './browse-layout.module.scss'

export const BrowseLayout = () => {

  return (
    <DataContextProvider>
      <div className={styles.page}>
        <Sidebar />
        <div className={styles.content}>
          <Outlet/>
        </div>
      </div>
    </DataContextProvider>
  )
}
