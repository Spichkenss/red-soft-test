import {useEffect, useState} from "react";

type TKey = string;
type TDefaultValue = unknown;

function getLocalStorageValue(key: TKey, defaultValue: TDefaultValue) {
  const saved = localStorage.getItem(key);
  return saved ? JSON.parse(saved as string) : defaultValue;
}

export const useLocalStorage = (key: TKey, defaultValue: TDefaultValue) => {
  const [value, setValue] = useState(() => getLocalStorageValue(key, defaultValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue]
}
