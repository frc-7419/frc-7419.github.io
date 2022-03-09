import React, { useState } from "react";
import Modal from "../utils/Modal";
import WindowDimensions from '../utils/WindowDimensions.js';

const Photo = ({ link, caption, capOn, modOn, onLoading }) => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const { width, height } = WindowDimensions();
  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg"
      onClick={() => {
        setVideoModalOpen(true);
      }}
    >
      <img
        src={link}
        style={{ height: 400 }}
        alt={caption}
        className="w-full object-cover"
      />
      {capOn && (
        <div className="text-center px-6 py-4 font-bold  text-xl mb-2">
          {caption}
        </div>
      )}

      { modOn && width>800 && <Modal
        id="modal"
        ariaLabel="modal-headline"
        show={videoModalOpen}
        handleClose={() => setVideoModalOpen(false)}
        className=""
      >
        <div className="relative max-w-sm mx-auto">
          <img
            src={link}
            alt={caption}
            className="relative rounded w-full object-cover"
            onLoad={onLoading}
          />
        </div>
      </Modal>}
    </div>
  );
};

export default Photo;
