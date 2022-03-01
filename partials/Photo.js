import React from "react";

const Photo = ({link, caption}) => {
  return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          src={link}
          style={{ height: 400 }}
          alt="L"
          className="w-full object-cover"
        />
        <div className="text-center px-6 py-4 font-bold  text-xl mb-2">
          {caption}
        </div>
      </div>
  );
};

export default Photo;
