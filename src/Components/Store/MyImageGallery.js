import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import MyReactImageMagnify from "./MyReactImageMagnify";

class MyImageGallery extends Component {
  myRenderItem() {
    return <MyReactImageMagnify {...this.props} />;
  }

  render() {
    const properties = {
      thumbnailPosition: "left",
      useBrowserFullscreen: false,
      showPlayButton: false,
      renderItem: this.myRenderItem.bind(this),
      items: [
        {
          original: "../src/images/products/img1.jpg",
          thumbnail: "../src/images/products/img1.jpg"
        },
        {
          original: "../src/images/products/img2.jpg",
          thumbnail: "../src/images/products/img2.jpg"
        },
        {
          original: "../src/images/products/img3.jpg",
          thumbnail: "../src/images/products/img3.jpg"
        }
      ]
    };

    return <ImageGallery {...properties} />;
  }
}

export default MyImageGallery;
