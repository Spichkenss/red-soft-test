import {createContext, PropsWithChildren, useContext, useMemo, useState} from "react";
import {TreeNode} from "@/entities/data/model/types";

interface DataContextValue {
  currentNode: TreeNode | null;
  setCurrentNode: (node: TreeNode) => void;
}

const DataContext = createContext<DataContextValue | null>(null);

const initialNode: TreeNode = {name: '', key: '', children: []};

interface DataContextProviderProps extends PropsWithChildren {}

export const DataContextProvider = ({children}: DataContextProviderProps) => {
  const [currentNode, setCurrentNode] = useState<TreeNode>(initialNode);

  const memoizedContextValue = useMemo(() => (
    {currentNode, setCurrentNode}
  ), [currentNode])

  return (
    <DataContext.Provider value={memoizedContextValue}>
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error("DataContext error!")
  return ctx;
}
