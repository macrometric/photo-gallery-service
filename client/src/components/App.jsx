import React from "react";
import ImageContainer from "./ImageContainer.jsx";
import ThumbnailContainer from "./ThumbnailContainer.jsx";
import axios from "axios";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 4,
      images: [],
      currentImage: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios
      .get(`/products/${this.state.id}`)
      .then(response => {
        // console.log("get response", response);
        let images = response.data[0].images;
        let arr = [];
        images.map(image => {
          // console.log("this is the image URL": image.image_url);
          arr.push({ image_url: image.image_url, active: false });
        });
        // console.log("this is the array of image objects", arr);
        this.setState({
          images: arr,
          currentImage: arr.slice(0, 1)
        });
        // console.log("this is the new state", this.state.images);
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleClick(e, image) {
    e.preventDefault();
    // console.log("Target event", image);
    this.setState(state => ({
      currentImage: [image]
    }));
  }

  render() {
    return (
      <div className="wrapper" style={wrap}>
        <ThumbnailContainer
          style={left}
          handleClick={this.handleClick}
          images={this.state.images}
        />
        <ImageContainer style={right} images={this.state.currentImage} />
      </div>
    );
  }
}

// Styles

const wrap = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridGap: "30px",
  gridTemplateRows: "auto",
  width: "900px"
};

const left = {
  "grid-column": 1
};

const right = {
  "grid-column": 2
};

export default Gallery;
