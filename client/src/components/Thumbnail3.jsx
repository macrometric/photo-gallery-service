import React from "react";

function ThumbnailThree() {
  return (
    <div>
      Thumbnail 3
      <img
        style={size}
        src={"https://front-end-capstone-project.s3.amazonaws.com/057.jpg"}
        alt="stuff3"
      />
    </div>
  );
}

const size = {
  width: "200px"
};

export default ThumbnailThree;
