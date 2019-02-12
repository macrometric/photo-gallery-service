import React from "react";
import ImageContainer from "./ImageContainer.jsx";
import ThumbnailContainer from "./ThumbnailContainer.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>Hi, I'm an app!</p>
        <ImageContainer />
        <ThumbnailContainer />
      </div>
    );
  }
}

export default App;
