import {ReactElement} from "react";
import {cn} from "@/shared/lib/cn";
import styles from './tree-view.module.scss'

interface TreeViewProps<T> {
  data?: T[];
  renderItem: (item: T) => ReactElement;
  className?: string;
}

export const TreeView = <T,>({data, renderItem, className = ''}: TreeViewProps<T>) => {
  return (
    <ul className={cn(className, styles.treeView)}>
      {data?.map((item) => renderItem(item))}
    </ul>
  )
}

