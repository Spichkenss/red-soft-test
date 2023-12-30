import {createContext, PropsWithChildren, useContext, useEffect, useMemo, useState} from "react";
import {TreeNode} from "@/entities/data/model/types";
import {getData} from "@/entities/data";

interface DataTreeViewContextValue {
  currentNode: TreeNode | null;
  setCurrentNode: (node: TreeNode) => void;
}

const DataTreeViewContext = createContext<DataTreeViewContextValue | null>(null);

const initialNode: TreeNode = {name: '', key: '', children: []};

interface DataTreeViewContextProviderProps extends PropsWithChildren {}

export const DataTreeViewContextProvider = ({children}: DataTreeViewContextProviderProps) => {
  const [currentNode, setCurrentNode] = useState<TreeNode>(initialNode);

  useEffect(() => {
    getData().then(res => {
      setCurrentNode(res[0])
    })
  }, []);

  const memoizedContextValue = useMemo(() => (
    {currentNode, setCurrentNode}
  ), [currentNode])

  return (
    <DataTreeViewContext.Provider value={memoizedContextValue}>
      {children}
    </DataTreeViewContext.Provider>
  )
}

export const useDataTreeView = () => {
  const ctx = useContext(DataTreeViewContext);
  if (!ctx) throw new Error("DataTreeViewContext error!")
  return ctx;
}
