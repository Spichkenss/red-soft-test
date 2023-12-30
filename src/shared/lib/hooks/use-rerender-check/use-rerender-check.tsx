import {useEffect} from "react";

const logStyle = "color:white; background-color:red; padding:2px; font-weight:bold; font-size:14px";

export const useRerenderCheck = (componentName: string) => {
  useEffect(() => {
    console.log(`%cRe-render ${componentName}`, logStyle);
  });
}
