import React from "react";
import ImageContainer from "./ImageContainer.jsx";
import ThumbnailContainer from "./ThumbnailContainer.jsx";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 5,
      active: false // image URL
    };
    // map over array: turn each URL into an object containing URL && active is true or false
    // thumbnails should be one component, thumbnails could be array??
    // conditional rendering: if false - in thumbnail && size ===, if true - in big image && size ===
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios
      .get(`/products/${this.state.id}`)
      .then(response => {
        let images = response.data[0].images;
        // console.log(images);
        images.map(image => {
          console.log(image.image_url);
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(state => ({
      active: !state.active
    }));
  }

  render() {
    return (
      <div className="wrapper" style={wrap}>
        <ThumbnailContainer
          style={left}
          handleClick={this.handleClick}
          isactive={this.state.active}
        />
        <ImageContainer style={right} />
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

export default App;
