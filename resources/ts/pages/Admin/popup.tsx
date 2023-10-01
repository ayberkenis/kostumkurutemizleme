import React, { useState } from "react";

import Draggable from "react-draggable"; // Import react-draggable


function SavePopup({ children, title, onSave, onClose }) {

    const [editedChildren, setEditedChildren] = React.useState(children);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setEditedChildren({ ...editedChildren, [name]: value });
    };
  
    const handleSave = () => {
      onSave(editedChildren);
    };
    return (
    <Draggable>
      <div
        className="fixed z-10 inset-auto overflow-y-auto rounded-md border-2 border-zinc-700 border-opacity-50 shadow-2xl mx-auto my-auto backdrop-blur-lg"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        {/* Rest of your modal code */}
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                {title}
              </h3>
              <div className="mt-2  flex flex-col gap-4">
                {children}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            onClick={handleSave}
            type="button"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-zinc-900 text-base font-medium text-white hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Kaydet
          </button>
          <button
            onClick={onClose}
            type="button"
            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            İptal
          </button>
        </div>
      </div>
    </Draggable>
    )

};


export default SavePopup;

