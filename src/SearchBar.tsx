import { useEffect } from "react";
import Select from "./components/Select";
const SearchBar = ({ categories, companies }) => {
  console.log(companies);
  console.log(categories);
  return (
    <section className="w-[57%] mx-auto my-20 bg-indigo-100 p-6 rounded-lg">
      <div className="grid grid-cols-4 gap-4 rounded-lg ">
        <div className="flex flex-col">
          <label className="text-xs" htmlFor="product">
            Search Product
          </label>
          <input
            id="product"
            className="rounded-lg px-2 py-1 text-xs  mt-2"
            type="text"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-xs" htmlFor="category">
            Select Category
          </label>
          <Select>
            {categories.map((el, index) => {
              return (
                <option key={index} value="el">
                  {el}
                </option>
              );
            })}
          </Select>
        </div>

        <div className="flex flex-col">
        <label className="text-xs" htmlFor="category">
            Select Company
          </label>
          <Select>
            {companies.map((el, index) => {
              return (
                <option key={index} value="el">
                  {el}
                </option>
              );
            })}
          </Select>
        </div>

        <div className="flex flex-col">
        <label className="text-xs" htmlFor="category">
            Sort By
          </label>
          <Select>
           <option value="a-z">a-z</option>
           <option value="z-a">z-a</option>
           <option value="high">high</option>
           <option value="low">low</option>
          </Select>
        </div>

        <div className="flex flex-col gap-2 text-xs mt-2">
          <div className="flex justify-between ">
          <label htmlFor="range">Select Price</label>
          <span>$ 1,000.00</span>
          </div>
          <input type="range" min="0" max="1000" step="10" value="1000" className="h-[20px]"/>
          <div className="flex justify-between">
            <span>0</span>
            <span>Max: $1,000.00</span>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-3 text-xs mt-2">
        <p>Free Shipping</p>
        <input id="link-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
