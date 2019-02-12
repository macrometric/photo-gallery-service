import React from "react";

// TODO: Render proper image based on product ID

class ThumbnailTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      active: !state.active
    }));
  }

  render() {
    return (
      <div>
        Thumbnail 2
        <img
          style={size}
          src={"https://front-end-capstone-project.s3.amazonaws.com/102820.jpg"}
          alt="stuff2"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

const size = {
  width: "200px"
};

export default ThumbnailTwo;
