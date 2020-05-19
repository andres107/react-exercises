import { useState } from "react";

export const useSelect = () => {
  let [selected, setSelect] = useState(0);

  const handleSelect = (e) => {
    console.warn(e);
    const newSelected = e.target.value;
    if (newSelected !== selected) {
      setSelect(newSelected);
    }
  };

  return { selected, handleSelect };
};

export default useSelect;
