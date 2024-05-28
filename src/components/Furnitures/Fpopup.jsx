import React from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";

const FPopup = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="relative bg-white dark:bg-slate-900 p-5 rounded-lg max-w-lg w-full" onClick={(e) => e.stopPropagation()}>
        <button className="absolute -top-6 -right-6 text-3xl opacity-50 hover:opacity-100 transition-opacity" onClick={onClose}>
          <IoIosCloseCircleOutline />
        </button>
        <div className="text-center">
          <img src={product.image} alt={product.name} className="mx-auto mb-4 h-[350px] w-full object-contain" />
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p className="text-gray-600 dark:text-gray-300">{product.size}</p>
          <p className="mt-4">{product.des}</p>
        </div>
      </div>
    </div>
  );
};

export default FPopup;
