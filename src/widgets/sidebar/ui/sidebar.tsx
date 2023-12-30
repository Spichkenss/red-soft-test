import styles from './sidebar.module.scss'
import {getData} from "@/entities/data";
import {TreeView} from "@/shared/ui/tree-view";
import {TreeViewItem} from "@/shared/ui/tree-view/ui/tree-view-item";
import {useFetch} from "@/shared/lib/hooks";

export const Sidebar = () => {
  const {response, isLoading} = useFetch(getData);

  return (
    <aside className={styles.sidebar}>
      {isLoading
        ? <span>loading</span>
        :  <TreeView
          data={response}
          renderItem={(item) => <TreeViewItem item={item} key={item.key}/>}
        />}

    </aside>
  )
}
