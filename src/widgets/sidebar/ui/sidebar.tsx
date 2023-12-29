import styles from './sidebar.module.scss'
import {Suspense, useEffect, useState} from "react";
import {getData} from "@/entities/data";
import {TreeNode} from "@/entities/data/model/types";
import {TreeView} from "@/shared/ui/tree-view";
import {TreeViewItem} from "@/shared/ui/tree-view/ui/tree-view-item";



export const Sidebar = () => {
  const [data, setData] = useState<TreeNode[]>([]);

  useEffect(() => {
    getData().then(res => {
      setData(res);
    });
  }, []);

  return (
    <aside className={styles.sidebar}>
      <Suspense fallback={'fetching...'}>
        <TreeView
          data={data}
          renderItem={(item) => <TreeViewItem item={item} key={item.key}/>}
        />
      </Suspense>
    </aside>
  )
}
