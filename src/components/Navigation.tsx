const Navigation = () => {
  return (
    <nav className="bg-indigo-100 ">
        <div className="w-[57%] mx-auto flex items-center justify-between p-2">
            <button className="bg-indigo-400 px-4 py-2 text-indigo-50 rounded-lg text-xl">C</button>
            <ul className="flex text-sm">
                <li className="px-4 py-2 hover:bg-indigo-200 rounded-lg duration-200">Home</li>
                <li className="px-4 py-2 hover:bg-indigo-200 rounded-lg duration-200">About</li>
                <li className="px-4 py-2 text-indigo-50 bg-indigo-500 rounded-lg duration-200">Products</li>
                <li className="px-4 py-2 hover:bg-indigo-200 rounded-lg duration-200">Cart</li>
            </ul>
            <div></div>
        </div>
    </nav>
  )
}

export default Navigation
