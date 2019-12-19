import React from "react";
import "./Humberger.css";

const Humberger = ({ showSideDrawer }) => (
  <div className="Humberger" onClick={showSideDrawer}>
    <div className="child" />
    <div className="child" />
    <div className="child" />
  </div>
);

export default Humberger;
