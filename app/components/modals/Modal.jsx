'use client';

import { useCallback, useEffect, useState } from "react";

const Modal = ({isOpen, onClose, onSubmit, title, body, footer, actionLabel, disabled, secondaryAction, secondaryLabel}) => {

    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen]);

    const handleClose = useCallback(() => {
        if (disabled) {
          return;
        }
      
        setShowModal(false);
        setTimeout(() => {
          onClose();
        }, 300)
    }, [onClose, disabled]);
    
    
    const handleSubmit = useCallback(() => {
        if (disabled) {
          return;
        }
    
        onSubmit();
    }, [onSubmit, disabled]);

    return (
        <div></div>
    )
}


export default Modal;