import React from "react";

function ThumbnailOne() {
  return (
    <div>
      Thumbnail 1
      <img
        style={size}
        src={"https://front-end-capstone-project.s3.amazonaws.com/057.jpg"}
        alt="stuff1"
      />
    </div>
  );
}

const size = {
  width: "200px"
};

export default ThumbnailOne;
