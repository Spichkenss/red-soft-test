import {List} from "@/shared/ui/list";
import {
  CurrentNodeChildrenListItem
} from "./current-node-children-list-item";
import {useData} from "../../model/data-context";

export const CurrentNodeChildrenList = () => {
  const {currentNode} = useData();

  return (
    <List
      data={currentNode?.children}
      renderItem={(node) => <CurrentNodeChildrenListItem key={node.key} node={node}/>}/>
  )
}
