import { useState } from "react";
import PageButton from "./PageButton";

const Pagination = ({ params, paramsHandler }) => {
  const [buttons, setButtons] = useState([
    { id: 1, name: 1, isActive: true },
    { id: 2, name: 2, isActive: false },
    { id: 3, name: 3, isActive: false },
  ]);

  const activeHandler = (e: React.DOMAttributes<HTMLButtonElement>) => {
    setButtons((previousButtons) =>
      previousButtons.map((button) => ({
        ...button,
        isActive: button.id === Number(e.target.id),
      }))
    );
    paramsHandler((previousPage) => {
      return { ...previousPage, page: Number(e.target.id) };
    });
  };

  const previousPage = () => {
    if (params.page > 1) {
      paramsHandler((previousPage) => {
        return { ...previousPage, page: previousPage.page - 1 };
      });
    }
  };

  const nextPage = () => {
    if (params.page < buttons.length) {
      paramsHandler((previousParams) => {
        return { ...previousParams, page: previousParams.page + 1 };
      });

      setButtons((previousButtons) => {
        return previousButtons.map((button, index) => {
          return {
            ...button,
            isActive: index === params.page - 1 ? true : false,
          };
        });
      });
    }
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
