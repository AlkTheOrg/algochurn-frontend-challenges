import { useEffect, useState } from "react";

const useLocalStorage = (key: string, val: unknown) => {
  const [value, setValue] = useState(window.localStorage.getItem(key) || '');
  useEffect(() => {
    const curStringifiedVal = JSON.stringify(val);
    const prevStringifiedVal = JSON.stringify(value);
    if (prevStringifiedVal !== curStringifiedVal) {
      setValue(curStringifiedVal);
      window.localStorage.setItem(key, curStringifiedVal);
    }
  }, [key, value, val])
  return JSON.parse(value);
};

export const App = () => {
  const parsedVal = useLocalStorage('alk', '{"age":99,"name":"alk"}');
  return <h1>{parsedVal}</h1>;
}
