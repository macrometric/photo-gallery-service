import React from "react";

function ImageContainer() {
  return (
    <div>
      <img
        style={size}
        src={"https://front-end-capstone-project.s3.amazonaws.com/057.jpg"}
        alt="stuff"
      />
    </div>
  );
}

const size = {
  width: "600px"
};

export default ImageContainer;
