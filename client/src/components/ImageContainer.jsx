import React from "react";

function ImageContainer(props) {
  // console.log("hello", props.images);
  const image = props.images[0];
  // console.log(image, ": image in container");
  return (
    <div>
      {image ? (
        <img className="imageContainer" src={image.image_url} alt="tool" />
      ) : (
        ""
      )}
    </div>
  );
}

export default ImageContainer;
