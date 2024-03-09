const PageButton = ({ isActive, id, children, activeHandler }) => {
  const activeClass = isActive ? "bg-indigo-200" : "bg-indigo-100";
  const baseClass = `px-3 py-2 rounded-sm duration-200 hover:bg-indigo-200`;

  return (
    <button
      className={`${baseClass} ${activeClass}`}
      id={id}
      onClick={activeHandler}
    >
      {children}
    </button>
  );
};

export default PageButton;
