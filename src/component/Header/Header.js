import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Humberger from "../UI/Humberger/Humberger";

import "./Header.css";
import Logo from "../UI/Logo/Logo";
class Header extends Component {
  render() {
    const { toggleSidebar, showSideDrawer } = this.props;
    return (
      <div className="Header" onClick={toggleSidebar}>
        <Humberger showSideDrawer={showSideDrawer} />
        <Logo />
        <Navbar />
      </div>
    );
  }
}
export default Header;
