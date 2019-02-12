import React from "react";

class ThumbnailTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }
  render() {
    return (
      <div>
        Thumbnail 2
        <img
          style={size}
          src={"https://front-end-capstone-project.s3.amazonaws.com/057.jpg"}
          alt="stuff2"
        />
      </div>
    );
  }
}

const size = {
  width: "200px"
};

export default ThumbnailTwo;
