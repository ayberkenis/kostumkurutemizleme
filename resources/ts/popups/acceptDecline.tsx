import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';


interface Props {
    isOpen: boolean;
    onClose: () => void;
    onAccept: () => void;
    onDecline: () => void;
}

const AcceptDeclinePopup: React.FC<Props> = ({ isOpen, onClose, onAccept, onDecline, children, acceptButtonText, declineButtonText }) => {
    return (
        <>
            {isOpen && (
                <Draggable>
                    <div className="absolute top-[30%] left-[25%] popup-container bg-zinc-100 rounded-md w-50 border-2 border-black border-opacity-25 p-16">
                        <div className="absolute right-0 top-0 mr-4 mt-4 border-opacity-25 hover:bg-zinc-700 hover:text-white hover:border-opacity-100 border-zinc-200 border-2 px-4 py-2 rounded-lg">
                            <FontAwesomeIcon icon={faX} size="sm" onClick={onClose} />
                        </div>
                        <div className="content">
                            <div className='text-center'>{children}</div>
                            <div className="flex flex-row gap-8 justify-center items-center mt-8">
                                <button onClick={onAccept} className="bg-green-500 hover:bg-green-600 px-4 py-2 text-white">{acceptButtonText}</button>
                                <button onClick={onDecline} className="bg-red-500 hover:bg-red-600 px-4 py-2 text-white">{declineButtonText}</button>
                            </div>
                        </div>
                    </div>
                </Draggable>
            )}
        </>
    );
};

export default AcceptDeclinePopup;
