import React from "react";
import loading from "../images/gif/loading.gif";
const Loading = () => {
  return (
    <div className="loading">
      <h4>Data is loading....</h4>
      <img src={loading} alt="" />
    </div>
  );
};

export default Loading;
