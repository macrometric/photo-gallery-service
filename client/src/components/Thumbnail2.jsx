import React from "react";

function ThumbnailTwo() {
  return (
    <div>
      Thumbnail 2
      <img
        style={size}
        src={"https://front-end-capstone-project.s3.amazonaws.com/057.jpg"}
        alt="stuff2"
      />
    </div>
  );
}

const size = {
  width: "200px"
};

export default ThumbnailTwo;
