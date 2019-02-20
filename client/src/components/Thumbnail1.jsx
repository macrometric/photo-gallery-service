import React from "react";

function Thumbnail(props) {
  if (!props.image) {
    return "";
  }

  return (
    <div>
      <img
        style={size}
        src={props.image.image_url}
        alt="power tools"
        onMouseOver={e => {
          props.handleClick(e, props.image);
        }}
      />
    </div>
  );
}

const size = {
  width: "150px",
  paddingTop: "20px"
};

export default Thumbnail;
