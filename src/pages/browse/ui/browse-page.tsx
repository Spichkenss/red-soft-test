import styles from './browse-page.module.scss'
import {Sidebar} from "@/widgets/sidebar";
import {CurrentNodeChildrenList, DataTreeViewContextProvider} from "@/entities/data";

const BrowsePage = () => {
  return (
    <DataTreeViewContextProvider>
      <div className={styles.page}>
        <Sidebar />
        <div className={styles.content}>
          <CurrentNodeChildrenList/>
        </div>
      </div>
    </DataTreeViewContextProvider>
  )
}

export default BrowsePage
