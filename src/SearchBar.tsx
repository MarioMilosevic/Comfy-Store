import Select from "./components/Select";

const SearchBar = ({data}) => {
    console.log(data)
  return (
    <section className="w-[57%] mx-auto my-20 bg-indigo-100 p-4 rounded-lg">
      <div className="flex gap-4 justify-between rounded-lg ">
        {/* {data.map(el) => {
            return <select name={else.} id=""></select>
        }} */}
        {/* <div className="flex flex-col">
          <label className="text-xs" htmlFor="product">
            Search Product
          </label>
          <input id="product" className="rounded-lg  mt-2" type="text" />
        </div>
        <div className="flex flex-col">
          <label className="text-xs" htmlFor="category">
            Select Category
          </label>
          <Select name={"category"} id={"category"} options={["All", "Tables", "Chairs", "Kids", "Sofas", "Beds"]}/> */}
          {/* <select
            name="category"
            id="category"
            className="rounded-lg mt-2 w-[196px] p-1 text-xs cursor-pointer"
          >
            <option className="text-xs text-bold" value="All">
              All
            </option>
            <option className="text-xs" value="Tables">
              Tables
            </option>
            <option className="text-xs" value="Chairs">
              Chairs
            </option>
            <option className="text-xs" value="Kids">
              Kids
            </option>
            <option className="text-xs" value="Sofas">
              Sofas
            </option>
            <option className="text-xs" value="Beds">
              Beds
            </option>
          </select> */}
        {/* </div>
        <div className="flex flex-col">
          <label className="text-xs" htmlFor="company">
            Select Company
          </label>
          <select
            name="category"
            id="company"
            className="rounded-lg mt-2 w-[196px] p-1 text-xs cursor-pointer"
          >
            all
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-xs" htmlFor="sort">
            Sort By
          </label>
          <select
            name="category"
            id="sort"
            className="rounded-lg mt-2 w-[196px] p-1 text-xs cursor-pointer"
          >
            a-z
          </select>
        </div> */}
      </div>

    </section>
  );
};

export default SearchBar;
