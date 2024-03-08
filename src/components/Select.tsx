const Select = ({children, defaultValue, selectHandler }) => {
    return (
      <select className="rounded-lg px-2 py-1 text-xs mt-2" defaultValue={defaultValue} onChange={selectHandler} >
       {children}
      </select>
    );
  };
  
  export default Select;
  
