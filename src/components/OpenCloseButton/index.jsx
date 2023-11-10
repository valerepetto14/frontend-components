import "./style.css";
import { useState } from "react";

const OpenCloseButton = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={`menu ${open ? "active" : ""}`} onClick={handleClick}>
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </div>
  );
};

export default OpenCloseButton;
