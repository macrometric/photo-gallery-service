import React from "react";

// TODO: Render proper image based on product ID

function ThumbnailTwo(props) {
  return (
    <div>
      Thumbnail 2
      <img
        style={size}
        src={"https://front-end-capstone-project.s3.amazonaws.com/102820.jpg"}
        alt="stuff2"
        onClick={props.handleClick}
        isactive={props.active}
      />
    </div>
  );
}

const size = {
  width: "200px"
};

export default ThumbnailTwo;
