import React from "react";

function ImageContainer(props) {
  // console.log("hello", props.images);
  const image = props.images[0];
  // console.log(image, ": image in container");
  return (
    <div>
      {image ? <img style={size} src={image.image_url} alt="tool" /> : ""}
    </div>
  );
}

const size = {
  width: "100%",
  maxHeight: "500px",
  paddingTop: "20px"
};

export default ImageContainer;
