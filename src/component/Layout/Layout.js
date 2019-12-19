import React, { Component, Fragment } from "react";
import Header from "../Header/Header";
import SideDrawer from "../SideDrawer/SideDrawer";
import Footer from "../Footer/Footer";

class Layout extends Component {
  state = {
    showSideDrawer: false
  };
  toggleSideDrawerHandler = () => {
    this.setState(prevState => ({ showSideDrawer: !prevState.showSideDrawer }));
  };
  closeSideDrawerHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  showSideDrawerHandler = () => {
    this.setState({ showSideDrawer: true });
  };
  render() {
    const { children } = this.props;
    const { showSideDrawer } = this.state;
    return (
      <Fragment>
        <Header
          showSideDrawer={this.showSideDrawerHandler}
          toggleSideDrawer={this.toggleSideDrawerHandler}
        />
        <SideDrawer show={showSideDrawer} close={this.closeSideDrawerHandler} />
        {children}
        <Footer />
      </Fragment>
    );
  }
}
export default Layout;
