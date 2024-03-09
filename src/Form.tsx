import Select from "./components/Select";
import Button from "./components/Button";
import { useState } from "react";

const SearchBar = ({ categories, companies, urlHandler }) => {
  const [search, setSearch] = useState({
    product:'',
    range: "1000",
    isChecked: false, 
    category: "all",
    company: "all",
    sort: 'a-z'
  })
  const rangeHandler = (e) => {
      setSearch((prev) => {
        return {...prev, range:e.target.value}
      })
  };

  const isCheckedHandler = () => {
    setSearch((prev)=> {
      return {...prev, isChecked: !prev.isChecked}
    })
  }

    const productHandler = (e) => {
      setSearch((prev)=> {
        return {...prev, product:e.target.value}
      })
    }

    const categoryHandler = (e) => {
      setSearch((prev) => {
        return {...prev, category:e.target.value}
      })
    }

    const companyHandler = (e) => {
      setSearch((prev) => {
        return {...prev, company:e.target.value}
      })
    }

    const sortHandler = (e) => {
      setSearch((prev) => {
        return {...prev, sort:e.target.value}
      })
    }

  return (
    <section className="mt-20 mb-10  bg-indigo-100 p-6 rounded-lg">
      <div className="grid grid-cols-4 gap-4 rounded-lg ">
        <div className="flex flex-col">
          <label className="text-xs" htmlFor="product">
            Search Product
          </label>
          <input
            id="product"
            className="rounded-lg px-2 py-1 text-xs  mt-2"
            type="text"
            onChange={productHandler}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-xs" htmlFor="category">
            Select Category
          </label>
          <Select defaultValue={search.category} selectHandler={categoryHandler}>
            {categories.map((el, index) => {
              return (
                <option key={index} value={el}>
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
          <Select defaultValue={search.company} selectHandler={companyHandler}>
            {companies.map((el, index) => {
              return (
                <option key={index} value={el}>
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
          <Select defaultValue={search.sort} selectHandler={sortHandler}>
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
          <input
            type="range"
            min="0"
            max="1000"
            step="10"
            value={search.range}
            className="h-[20px]"
            onChange={rangeHandler}
          />
          <div className="flex justify-between">
            <span>0</span>
            <span className="font-semibold">Max: $1,000.00</span>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-3 text-xs mt-2">
          <p>Free Shipping</p>
          <input
            id="link-checkbox"
            type="checkbox"
            checked={search.isChecked}
            onChange={isCheckedHandler}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2"
          ></input>
        </div>
        <Button color={"bg-blue-600"}>Search</Button>
        <Button color={"bg-pink-600"}>Reset</Button>
      </div>
    </section>
  );
};

export default SearchBar;
