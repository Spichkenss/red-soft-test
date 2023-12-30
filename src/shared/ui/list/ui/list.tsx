import {ReactElement} from "react";

interface ListProps<T> {
  data: T[];
  renderItem: (item: T) => ReactElement;
}

export const List = <T,>({data, renderItem}: ListProps<T>) => {
  return (
    <ul>
      {data.length
        ? data.map(item => renderItem(item))
        : <span>List is empty</span>}
    </ul>
  )
}
