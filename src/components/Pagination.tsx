import { useState } from "react";
import PageButton from "./PageButton";
const Pagination = () => {
  const [buttons, setButtons] = useState([
    { id: "PREV", name: "PREV", isActive: false },
    { id: "2", name: 1, isActive: true },
    { id: "3", name: 2, isActive: false },
    { id: "4", name: 3, isActive: false },
    { id: "NEXT", name: "NEXT", isActive: false },
  ]);

  const activeHandler = (e) => {
    const updatedButtons = buttons.map((button) =>
      button.id === e.target.id
        ? { ...button, isActive: true }
        : { ...button, isActive: false }
    );
    setButtons(updatedButtons);
  };

  return (
    <>
      <div className="flex justify-end my-10">
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
      </div>
    </>
  );
};

export default Pagination;
