import { useState } from "react";
const Select = ({children, defaultValue }) => {
  const [value, setValue] = useState('')

    return (
      <select className="rounded-lg px-2 py-1 text-xs mt-2" defaultValue={defaultValue} onChange={(e) => setValue(e.target.value)} >
       {children}
      </select>
    );
  };
  
  export default Select;
  
