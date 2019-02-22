import React from "react";

function Thumbnail(props) {
  if (!props.image) {
    return "";
  }

  return (
    <div>
      <img
        className="thumbnail"
        src={props.image.image_url}
        alt="power tools"
        onMouseOver={e => {
          props.handleClick(e, props.image);
        }}
      />
    </div>
  );
}

export default Thumbnail;
