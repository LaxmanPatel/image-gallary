import React from "react";
import "./Backdrop.css";

const Backdrop = ({ show, close }) =>
  show ? <div className="backdrop" onClick={close} /> : null;
export default Backdrop;
