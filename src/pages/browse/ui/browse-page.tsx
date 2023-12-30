import {useData} from "@/entities/data";
import {ChangeEventHandler, useCallback, useState} from "react";
import {List} from "@/shared/ui/list";
import {useFilter} from "@/shared/lib/hooks";
import {Input} from "@/shared/ui/input";
import styles from './browse-page.module.scss'

const BrowsePage = () => {
  const {currentNode} = useData();
  const [term, setTerm] = useState('');
  const filtered = useFilter(currentNode?.children || [], 'name', term);

  const handleChangeTerm: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    setTerm(e.target.value)
  }, []);

  return (
    <div>
      <Input type="text" onChange={handleChangeTerm} placeholder={'Filter by name'}/>
      <List
        data={filtered}
        renderItem={(item) => <li key={item.key}>{item.name}</li>}
        className={styles.list}
      />
    </div>
  )
}

export default BrowsePage
