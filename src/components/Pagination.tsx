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
      setParams((prev) => {
        return {...prev, page:currentPage}
      })
    }
    setCurrentPage((prev) => prev - 1)
  };

  const nextPage = () => {
    if (currentPage < buttons.length){
      setCurrentPage((prev) => prev + 1);
      setParams((prev) => {
        return { ...prev, page: currentPage };
      });
    }
  };

  const activeButton = "bg-red-400";
  const baseClass = "";
  return (
    <>
      <div className="flex justify-end my-10">
        <button onClick={previousPage}>Prev</button>
        {buttons.map((button) => {
          return (
            <button
              className={`${
                button.id === currentPage ? activeButton : baseClass
              }`}
              onClick={() => setPage(button.id)}
            >
              {button.id}
            </button>
          );
        })}

        <button onClick={nextPage}>Next</button>

        {/* <PageButton id={"Prev"} activeHandler={previousPage}>
          PREV
        </PageButton>
        {buttons.map((button) => {
          return (
            <PageButton
              key={button.id}
              id={button.id}
              isActive={button.isActive}
              activeHandler={activeHandler}
            >
              {button.name}
            </PageButton>
          );
        })}
        <PageButton id={"Next"} activeHandler={nextPage}>
          NEXT
        </PageButton> */}
      </div>
    </>
  );
};

export default Pagination;
