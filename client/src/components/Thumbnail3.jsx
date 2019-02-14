import React from "react";

// TODO: Render proper image based on product ID

function ThumbnailThree(props) {
  return (
    <div>
      Thumbnail 3
      <img
        style={size}
        src={"https://front-end-capstone-project.s3.amazonaws.com/112378.jpg"}
        alt="stuff3"
        onClick={props.handleClick}
        isactive={props.active}
      />
    </div>
  );
}

const size = {
  width: "200px"
};

export default ThumbnailThree;
