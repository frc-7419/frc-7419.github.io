import React, { useState } from "react";
import Modal from "../utils/Modal";

const Photo = ({ link, caption, capOn, modOn }) => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg" onClick={() => {setVideoModalOpen(true)}}>
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
      <Modal
        id="modal"
        ariaLabel="modal-headline"
        show={videoModalOpen}
        handleClose={() => setVideoModalOpen(false)}
      >
        
        <div className="relative max-w-sm mx-auto">
          <img
            src={link}
            alt={caption}
            className="relative rounded w-full object-cover"
          />
        </div>
      </Modal>
    </div>
  );
};

export default Photo;
