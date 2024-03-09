import { useState } from "react";
import PageButton from "./PageButton";
const Pagination = () => {
  const [active, setActive] = useState();
  const buttons = [
    { name: "PREV", isActive: false },
    { name: 1, isActive: true },
    { name: 2, isActive: false },
    { name: 3, isActive: false },
    { name: "NEXT", isActive: false }
  ];
  return (
    <>
      <div className="flex justify-end my-10">
       {buttons.map((button, index) => {
        return <PageButton key={index} isActive={button.isActive}>{button.name}</PageButton>
       })}
      </div>
    </>
  );
};

export default Pagination;
