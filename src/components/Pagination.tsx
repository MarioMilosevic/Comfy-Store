import { useState } from "react";
import PageButton from "./PageButton";

const Pagination = ({ params, setParams }) => {

  const [currentPage, setCurrentPage] = useState(params.page);
  const buttons = [{ id: 1 }, { id: 2 }, { id: 3 }];

  const setPage = (id) => {
    setParams((prev) => {
      return { ...prev, page: id };
    });
    setCurrentPage(id);
  };

  const previousPage = () => {
    if (params.page > 1) {
      setCurrentPage((prev) => prev - 1)
      setParams((prev) => {
        return {...prev, page:currentPage - 1}
      })
    }
  };

  const nextPage = () => {
    if (currentPage < buttons.length){
      setCurrentPage((prev) => prev + 1);
      setParams((prev) => {
        return { ...prev, page: currentPage + 1 };
      });
    }
  };

  const activeButton = "bg-indigo-200";
  const inactiveButton = "bg-indigo-100"
  const baseClass = `px-3 py-2 rounded-sm duration-200 hover:bg-indigo-200`;
  return (
    <>
      <div className="flex justify-end my-10">
        <button className={`${inactiveButton} ${baseClass}`} onClick={previousPage}>Prev</button>
        {buttons.map((button) => {
          return (
            <button
              className={`${button.id === currentPage ? `${activeButton} ${baseClass}` : `${baseClass} ${inactiveButton}`
              }`}
              onClick={() => setPage(button.id)}
            >
              {button.id}
            </button>
          );
        })}
        <button className={`${inactiveButton} ${baseClass}`} onClick={nextPage}>Next</button>
      </div>
    </>
  );
};

export default Pagination;
