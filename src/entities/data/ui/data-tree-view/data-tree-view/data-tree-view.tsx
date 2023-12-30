import {useEffect} from "react";
import {TreeView} from "@/shared/ui/tree-view";
import {useFetch} from "@/shared/lib/hooks";
import {getData, useData} from "@/entities/data";
import {DataTreeViewItem} from "../data-tree-view-item/data-tree-view-item";
import styles from './data-tree-view.module.scss'

export const DataTreeView = () => {
  const {response, isLoading} = useFetch(getData);
  const {setCurrentNode} = useData()

  useEffect(() => {
    if (response) {
      setCurrentNode(response[0])
    }
  }, [response, setCurrentNode]);

  if (isLoading) return <span>Loading...</span>

  return (
    <TreeView
      data={response}
      renderItem={(item) => <DataTreeViewItem key={item.key} item={item}/>}
      className={styles.treeView}
    />
  )
}

