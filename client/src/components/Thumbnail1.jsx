import React from "react";

// TODO: Render proper image based on product ID

function ThumbnailOne(props) {
  return (
    <div>
      Thumbnail 1
      <img
        style={size}
        src={"https://front-end-capstone-project.s3.amazonaws.com/126237.jpg"}
        alt="stuff1"
        onClick={props.handleClick}
        isactive={props.active}
      />
    </div>
  );
}

const size = {
  width: "200px"
};

export default ThumbnailOne;
