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
      currentImage: "",
      product_name: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios
      // .get(`/products/${this.props.id}`)
      .get(`/products/${this.state.id}`)
      .then(response => {
        // console.log("get response", response);
        let images = response.data[0].images;
        let product_name = response.data[0].product_name;
        let arr = [];
        images.map(image => {
          // console.log("this is the image URL": image.image_url);
          arr.push({ image_url: image.image_url, active: false });
        });
        // console.log("this is the array of image objects", arr);
        this.setState({
          images: arr,
          currentImage: arr.slice(0, 1),
          product_name: product_name
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
      <div className="wrap">
        <ThumbnailContainer
          className="left"
          handleClick={this.handleClick}
          images={this.state.images}
        />
        <ImageContainer className="right" images={this.state.currentImage} />
        <p id="productDetailText">Images for {this.state.product_name}</p>
      </div>
    );
  }
}

export default Gallery;
