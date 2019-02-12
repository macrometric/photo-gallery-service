import React from "react";
import ImageContainer from "./ImageContainer.jsx";
import ThumbnailContainer from "./ThumbnailContainer.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="wrapper" style={wrap}>
        <ThumbnailContainer style={left} />
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
