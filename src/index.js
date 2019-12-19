import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import ImageGallary from "./component/Content/ImageGallary";
import axios from "axios";
import Layout from "./component/Layout/Layout";

class App extends Component {
  state = {
    images: []
  };
  componentDidMount() {
    this.getDataAxios();
  }
  async getDataAxios() {
    const response = await axios.get("https://picsum.photos/v2/list");
    this.setState({ images: response.data });
  }
  render() {
    const { images } = this.state;
    return (
      <div className="App">
        <Layout>
          <ImageGallary
            images={images.map(i => ({
              url: i.download_url,
              author: i.author
            }))}
          />
        </Layout>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
