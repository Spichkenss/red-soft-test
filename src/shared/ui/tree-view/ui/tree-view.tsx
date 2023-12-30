import {ReactElement} from "react";

interface TreeViewProps<T> {
  data?: T[];
  renderItem: (item: T) => ReactElement;
}

export const TreeView = <T,>({data, renderItem}: TreeViewProps<T>) => {
  return (
    <ul>
      {data?.map((item) => renderItem(item))}
    </ul>
  )
}

