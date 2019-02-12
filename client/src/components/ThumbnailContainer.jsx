import React from "react";
import ThumbnailOne from "./Thumbnail1.jsx";
import ThumbnailTwo from "./Thumbnail2.jsx";
import ThumbnailThree from "./Thumbnail3.jsx";

function ThumbnailContainer() {
  return (
    <div>
      <p>Thumbnail Container Here</p>
      <ThumbnailOne />
      <ThumbnailTwo />
      <ThumbnailThree />
    </div>
  );
}

export default ThumbnailContainer;
