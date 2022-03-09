import React from "react";

const Video = ({ link, onLoad }) => {
  return (
    <div className="videoWrapper max-w-lg rounded shadow-lg ">
      <iframe
        src={link}
        height="100%"
        width="100%"
        allow="autoplay"
        allowFullScreen={true}
        onLoadedData={() => {
          onLoad();
        }}
      ></iframe>
    </div>
  );
};

export default Video;
