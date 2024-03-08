const Select = ({ name, id, options }) => {
    return (
      <select
        name={name}
        id={id}
        className={"rounded-lg mt-2 w-[196px] p-1 text-xs cursor-pointer"}
      >
        {options.map((option, index) => (
          <option key={index} className="text-xs" value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  };
  
  export default Select;
  
