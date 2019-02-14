import React from "react";
import ThumbnailOne from "./Thumbnail1.jsx";
import ThumbnailTwo from "./Thumbnail2.jsx";
import ThumbnailThree from "./Thumbnail3.jsx";

function ThumbnailContainer(props) {
  return (
    <div>
      <ThumbnailOne handleClick={props.handleClick} isactive={props.active} />
      <ThumbnailTwo handleClick={props.handleClick} isactive={props.active} />
      <ThumbnailThree handleClick={props.handleClick} isactive={props.active} />
    </div>
  );
}

export default ThumbnailContainer;
