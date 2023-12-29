import {TreeView} from "@/shared/ui/tree-view";
import {useEffect, useState} from "react";
import {TreeNode} from "@/entities/data/model/types";
import {getData} from "@/entities/data";
import {TreeViewItem} from "@/shared/ui/tree-view/ui/tree-view-item";

function filterNodesWithChildren(node: TreeNode) {
  if (node.children && node.children.length > 0) {
    // Если у узла есть дочерние элементы, фильтруем их тоже
    node.children = node.children.filter(filterNodesWithChildren);
    return true; // Сохраняем узел, так как у него есть дочерние элементы
  } else {
    return false; // Фильтруем узлы без дочерних элементов
  }
}

const DataTreeView = () => {
  const [data, setData] = useState<TreeNode[]>([]);

  useEffect(() => {
    getData().then(res => {
      const resExceptLastLevel = res.filter(filterNodesWithChildren);
      setData(resExceptLastLevel);
    });
  }, []);

  return (
    <TreeView
      data={data}
      renderItem={(item) => <TreeViewItem key={item.key} item={item}/>}
    />
  )
}

export default DataTreeView
