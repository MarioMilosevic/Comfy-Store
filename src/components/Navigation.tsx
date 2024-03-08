const Navigation = () => {
  return (
    <nav className="bg-indigo-100 ">
      <div className="w-[57%] mx-auto flex items-center justify-between p-2">
        <button className="bg-indigo-400 px-4 py-2 text-indigo-50 rounded-lg text-xl">
          C
        </button>
        <ul className="flex text-xs">
          <li className="px-4 py-2 hover:bg-indigo-200 rounded-lg duration-200">
            <a href="#">Home</a>
          </li>
          <li className="px-4 py-2 hover:bg-indigo-200 rounded-lg duration-200">
            <a href="#">About</a>
          </li>
          <li className="px-4 py-2 text-indigo-50 bg-indigo-900 rounded-lg duration-200">
            <a href="#">Products</a>
          </li>
          <li className="px-4 py-2 hover:bg-indigo-200 rounded-lg duration-200">
            <a href="#">Cart</a>
          </li>
        </ul>
        <div className="flex gap-4">
          <div className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="indigo"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          </div>
          <div className="p-2 relative rounded-full  duration-300 hover:bg-indigo-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <span className="absolute top-0 left-5 bg-indigo-500 text-indigo-50  px-2 rounded-full text-xs">
              0
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
