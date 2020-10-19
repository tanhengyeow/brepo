import React from "react";
import "./Backdrop.css";

const Backdrop = ({ visible, onClose }) => {
  return visible ? (
    <div className="backdrop" onClick={() => onClose()}></div>
  ) : null;
};

export default Backdrop;
