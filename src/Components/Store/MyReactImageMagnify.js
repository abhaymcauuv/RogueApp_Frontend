import React, { Component } from "react";

import ReactImageMagnify from "react-image-magnify";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {}
});

class MyReactImageMagnify extends Component {
  render() {
    return (
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: "Seasonal Deer",
            isFluidWidth: true,
            src: "../src/images/products/img1.jpg"
          },
          largeImage: {
            src: "../src/images/products/img1.jpg",
            width: 640,
            height: 480
          },
          enlargedImagePortalId: "myPortal"
        }}
      />
    );
  }
}

export default withStyles(styles)(MyReactImageMagnify);
