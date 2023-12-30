import {useDataTreeView} from "@/entities/data";


export const CurrentNodeChildrenList = () => {
  const {currentNode} = useDataTreeView();

  if (!currentNode?.children?.length) return <span>List is empty</span>

  return (
    <ul>
      {
        currentNode?.children?.map(child => (
          <li key={child.key}>
            {child.name}
          </li>
        ))
      }
    </ul>
  )
}
