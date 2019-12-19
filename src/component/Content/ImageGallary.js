import React, { Component } from "react";
import Img from "react-cool-img";
import "./ImageGallary.css";
// import Loader from "../../Loader/Loader";
import loadingImage from "../../assets/images/giphy.gif";
class ImageGallary extends Component {
  render() {
    return (
      <main>
        <div className="ImageGallary">
          {this.props.images.map(ele => (
            <Img
              className="Image"
              placeholder={loadingImage}
              key={ele.author + ele.url}
              src={ele.url}
              alt={ele.author}
            />
          ))}
        </div>
      </main>
    );
  }
}
export default ImageGallary;
