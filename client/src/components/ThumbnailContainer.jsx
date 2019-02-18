import React from "react";
import Thumbnail from "./Thumbnail1.jsx";

function ThumbnailContainer(props) {
  const imageList = props.images.map(image => {
    return (
      <Thumbnail
        image={image}
        key={image.image_url}
        handleClick={props.handleClick}
      />
    );
  });

  return <div>{imageList}</div>;
}

export default ThumbnailContainer;
