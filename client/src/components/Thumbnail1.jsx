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
  width: "100%",
  paddingTop: "20px",
  alignContent: "center",
  maxHeight: "130px",
  objectFit: "cover"
};

export default Thumbnail;
