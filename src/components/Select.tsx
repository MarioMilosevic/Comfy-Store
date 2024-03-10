const Select = ({children, value, selectHandler }) => {
    return (
      <select className="rounded-lg px-2 py-1 text-xs mt-2" value={value} onChange={selectHandler} >
       {children}
      </select>
    );
  };
  
  export default Select;
  
