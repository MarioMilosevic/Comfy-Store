const PageButton = ({ isActive,children }) => {
  const activeClass = isActive ? "bg-indigo-300" : "bg-indigo-200"
  const baseClass = `px-3 py-2 rounded-sm duration-200 hover:bg-indigo-300`

  return (
    <button className={`${baseClass} ${activeClass}`}>
      {children}
    </button>
  );
};

export default PageButton;
