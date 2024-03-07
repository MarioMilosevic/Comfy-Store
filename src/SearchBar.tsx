const SearchBar = () => {
  return (
    <section className="w-[57%] mx-auto my-20 bg-indigo-100 p-4 flex gap-4 justify-between rounded-lg">
      <div className="flex flex-col">
        <label className="text-xs" htmlFor="">
          Search Product
        </label>
        <input className="rounded-lg  mt-2" type="text" />
      </div>
      <div className="flex flex-col">
        <label className="text-xs" htmlFor="">
          Select Category
        </label>
        <select name="category" id="category" className="rounded-lg mt-2 w-[196px]">
          all
        </select>
      </div>
      <div className="flex flex-col">
        <label className="text-xs" htmlFor="">
          Select Company
        </label>
        <select name="category" id="category" className="rounded-lg mt-2 w-[196px]">
          all
        </select>
      </div>
      <div className="flex flex-col">
        <label className="text-xs" htmlFor="">
          Sort By
        </label>
        <select name="category" id="category" className="rounded-lg mt-2 w-[196px]">
          a-z
        </select>
      </div>
    </section>
  );
};

export default SearchBar;
