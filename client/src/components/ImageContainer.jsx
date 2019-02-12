import React from "react";

// TODO: Render proper image based on product ID

function ImageContainer() {
  return (
    <div>
      <img
        style={size}
        src={"https://front-end-capstone-project.s3.amazonaws.com/101932.jpg"}
        alt="stuff"
      />
    </div>
  );
}

const size = {
  width: "600px",
  paddingTop: "40px"
};

export default ImageContainer;
