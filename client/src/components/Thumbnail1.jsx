import React from "react";

// TODO: Render proper image based on product ID

class ThumbnailOne extends React.Component {
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
        Thumbnail 1
        <img
          style={size}
          src={"https://front-end-capstone-project.s3.amazonaws.com/126237.jpg"}
          alt="stuff1"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

const size = {
  width: "200px"
};

export default ThumbnailOne;
