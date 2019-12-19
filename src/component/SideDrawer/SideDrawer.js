import React, { Fragment } from "react";
import "./SideDrawer.css";
import Backdrop from "../UI/Backdrop/Backdrop";

const SideDrawer = ({ show, close }) => {
  const activeClass = ["SideDrawer"];
  if (show) activeClass.push("open");
  else activeClass.push("close");

  return (
    <Fragment>
      <div className={activeClass.join(" ")}>SideDrawer</div>
      <Backdrop show={show} close={close} />
    </Fragment>
  );
};
export default SideDrawer;
