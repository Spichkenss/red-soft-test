import {TreeNode} from "@/entities/data/model/types";
import {TreeView} from "@/shared/ui/tree-view";
import {useDataTreeView} from "@/entities/data";
import {useMemo} from "react";

interface TreeViewItemProps {
  item: TreeNode;
}

export const TreeViewItem = ({item}: TreeViewItemProps) => {
  const {setCurrentNode} = useDataTreeView();

  const handleClick = () => {
    setCurrentNode(item);
  }

  const filteredData = useMemo(() => (
    item.children?.filter(child => child.children)
  ), [item.children]);

  return (
    <li>
      <button onClick={handleClick}>{item.name}</button>
      <TreeView
        data={filteredData}
        renderItem={(item) => <TreeViewItem key={item.key} item={item}/>}
      />
    </li>
  )
}
