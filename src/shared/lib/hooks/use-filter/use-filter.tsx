import {useEffect, useState} from "react";

export const useFilter = <T,>(list: T[], key: keyof T, term: string) => {
  const [filtered, setFiltered] = useState<T[]>([]);

  useEffect(() => {
    const lowerTerm = term.toLowerCase();
    const filteredList = list.filter(item => term === "" ? item : String(item[key]).includes(lowerTerm));
    setFiltered(filteredList)
  }, [key, list, term]);

  return filtered;
}
