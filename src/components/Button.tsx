const Button = ({ color, children, clickHandler }) => {
  const baseClass =
    "w-full text-center p-2 uppercase tracking-wider text-indigo-50 rounded-lg";
  const colorClass = `${color}`;
  return (
    <div className="flex flex-col justify-center items-center gap-3 text-xs mt-2">
      <button className={`${baseClass} ${colorClass}`} onClick={clickHandler}>
        {children}
      </button>
    </div>
  );
};

export default Button;
