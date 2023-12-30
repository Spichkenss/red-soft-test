import {memo, ReactElement} from "react";
import {cn} from "@/shared/lib/cn";

interface ListProps<T> {
  data?: T[];
  renderItem: (item: T) => ReactElement;
  className?: string;
}

const Listt = <T,>({data, renderItem, className = ''}: ListProps<T>) => {

  return (
    <ul className={cn(className)}>
      {data?.length
        ? data.map(item => renderItem(item))
        : <span>List is empty</span>}
    </ul>
  )
}

export const List = memo(Listt) as <T>(props: ListProps<T>) => ReactElement;
