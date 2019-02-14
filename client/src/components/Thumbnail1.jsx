import React from "react";

function Thumbnail(props) {
  if (!props.image) {
    return "";
  }

  return (
    <div>
      Thumbnail
      <img
        style={size}
        src={props.image.image_url}
        alt="example alt"
        onClick={props.handleClick}
      />
    </div>
  );
}

const size = {
  width: "200px"
};

export default Thumbnail;
