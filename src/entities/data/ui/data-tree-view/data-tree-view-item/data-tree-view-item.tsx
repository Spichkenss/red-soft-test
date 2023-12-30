import {TreeView} from "@/shared/ui/tree-view";
import {TreeNode} from "@/entities/data/model/types";
import {useData} from "@/entities/data";
import {useMemo, useState} from "react";
import styles from './data-tree-view-item.module.scss'

interface DataTreeViewItem {
  item: TreeNode;
}

export const DataTreeViewItem = ({item}: DataTreeViewItem) => {
  const [areChildrenVisible, setAreChildrenVisible] = useState(false);
  const {setCurrentNode} = useData();

  const handleClick = () => {
    setCurrentNode(item);
  }

  const handleToggleChildrenVisibility = () => {
    setAreChildrenVisible(prev => !prev);
  }

  const filteredData = useMemo(() => (
    item.children?.filter(child => child.children)
  ), [item.children]);

  return (
    <li className={styles.treeItem}>
      <div className={styles.trigger}>
        <button
          onClick={handleToggleChildrenVisibility}
          className={styles.indicator}
          style={{transform: `rotate(${areChildrenVisible ? 0 : -90}deg)`}}
        >
          &#9660;
        </button>
        <button onClick={handleClick}>{item.name}</button>
      </div>
      {areChildrenVisible
        ? (
          <TreeView
            data={filteredData}
            renderItem={(item) => <DataTreeViewItem key={item.key} item={item}/>}
          />
        )
        : null}

    </li>
  )
}
