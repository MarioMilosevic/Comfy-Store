const Button = ({ color, children }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 text-xs mt-2">
      <button
        className={`bg-${color}-600 w-full text-center p-2 uppercase tracking-wider text-indigo-50 rounded-lg hover:bg-${color}-900`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
