import {TreeNode} from "../../model/types";

interface CurrentNodeChildrenListItemProps {
  node: TreeNode;
}

export const CurrentNodeChildrenListItem = ({node}: CurrentNodeChildrenListItemProps) => {
  return (
    <li key={node.key}>
      {node.name}
    </li>
  )
}
