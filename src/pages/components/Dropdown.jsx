import React from 'react';

const DropdownMenu = ({ isOpen, onClose, options }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full right-0 mt-2 w-40 bg-gray-100 rounded-md shadow-lg z-50">
      {options.map((option, index) => (
        <button
          key={index}
          className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900 cursor-pointer"
          onClick={() => {
            option.onClick();
            onClose();
          }}
        >
          {option.icon && <span className="mr-2">{option.icon}</span>}
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default DropdownMenu;