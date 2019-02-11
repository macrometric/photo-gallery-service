import React from "react";
import ImageContainer from "./ImageContainer.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>Hi, I'm an app!</p>
        <ImageContainer />
      </div>
    );
  }
}

export default App;
