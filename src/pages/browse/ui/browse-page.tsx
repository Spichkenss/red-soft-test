import {useDataTreeView} from "@/entities/data";
import {ChangeEventHandler, useState} from "react";
import {List} from "@/shared/ui/list";
import {useFilter} from "@/shared/lib/hooks";


const FilteredDataList = () => {
  const {currentNode} = useDataTreeView();
  const [term, setTerm] = useState('');
  const filtered = useFilter(currentNode?.children || [], 'name', term);

  const handleChangeTerm: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTerm(e.target.value)
  }

  return (
    <div>
      <input type="text" onChange={handleChangeTerm}/>
      <List data={filtered} renderItem={(item) => <li key={item.key}>{item.name}</li>}/>
    </div>
  )
}


const BrowsePage = () => {
  return (

    <FilteredDataList/>

  )
}

export default BrowsePage
