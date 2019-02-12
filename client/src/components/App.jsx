import React from "react";
import ImageContainer from "./ImageContainer.jsx";
import ThumbnailContainer from "./ThumbnailContainer.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
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
  "grid-template-columns": "repeat(2, 1fr)",
  "grid-gap": "20px",
  "grid-template-rows": "auto",
  width: "900px"
};

const left = {
  "grid-column": 1
};

const right = {
  "grid-column": 2
};

export default App;
