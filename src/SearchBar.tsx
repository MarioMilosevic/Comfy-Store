import { useEffect } from "react";
import Select from "./components/Select";
const SearchBar = ({ categories, companies }) => {
  console.log(companies);
  console.log(categories);
  return (
    <section className="w-[57%] mx-auto my-20 bg-indigo-100 p-4 rounded-lg">
      <div className="flex gap-4 justify-between rounded-lg ">
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
      </div>
    </section>
  );
};

export default SearchBar;
