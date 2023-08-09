import { useEffect, useState } from "react";

export function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(defaultValue)

  useEffect(() => {
    try {
      const storageValue = localStorage.getItem(key);
      let parsedValue = null; 
      if (storageValue) {
        parsedValue = JSON.parse(storageValue)
      } else {
        localStorage.setItem(key, JSON.stringify(defaultValue))
        parsedValue = defaultValue
      }

      setValue(parsedValue)

    } catch (error) {
      throw new Error(error)
    }
  }, [])

  const setLocalStorage = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue))
    setValue(newValue)
  }
  return [value, setLocalStorage]
}
