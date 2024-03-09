import { useState, useEffect } from "react";
import PageButton from "./PageButton";

const Pagination = ({ urlPageHandler }) => {
  const [buttons, setButtons] = useState([
    { id: "1", name: 1, isActive: true },
    { id: "2", name: 2, isActive: false },
    { id: "3", name: 3, isActive: false },
  ]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    urlPageHandler(currentPage);
  }, [currentPage, urlPageHandler]);

  const activeHandler = (e) => {
    updateButtons(e.target.id);
    setCurrentPage(+e.target.id);
  };

  const previousPage = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      updateButtons(newPage.toString());
      setCurrentPage(newPage);
    }
  };

  const nextPage = () => {
    if (currentPage < buttons.length) {
      const newPage = currentPage + 1;
      updateButtons(newPage.toString());
      setCurrentPage(newPage);
    }
  };


  const updateButtons = (element) => {
    setButtons((prevButtons) => {
      return prevButtons.map((button) => ({
        ...button,
        isActive: button.id === element,
      }));
    });
  };

  return (
    <>
      <div className="flex justify-end my-10">
        <PageButton activeHandler={previousPage}>PREV</PageButton>
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
        <PageButton activeHandler={nextPage}>NEXT</PageButton>
      </div>
    </>
  );
};

export default Pagination;
