import React, { useState } from 'react';
import { ChevronDown, Search, LogOut, User } from 'lucide-react';
import linkIcon from '../../assets/link.png';
import DropdownMenu from './Dropdown';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-[100] shadow-md px-4 h-[4rem]">
      <div className="w-full py-3 flex items-center justify-between">
        {/* Left: Logo and Text  */}
        <div className="flex items-center">
          <img src={linkIcon} alt="DevLinks" className="h-6 w-6 mr-2" />
          <span className="font-bold text-lg text-gray-800 hover:text-gray-600 cursor-pointer">DevLinks</span>
        </div>

        {/* Middle: Search Bar */}
        <div className="flex-grow mx-4 relative max-w-[500px]">
         <input
            type="text"
            placeholder="Search..."   
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-coral-500 focus:border-transparent"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-500" />
          </div>
        </div>

        {/* Right: Profile Icon and Dropdown  */}
        <div className="flex items-center relative">
          <span className="mr-2 text-gray-700 hover:text-gray-500 cursor-pointer ">Profile </span>
          <User className="h-6 w-6 text-gray-700 hover:text-gray-500 cursor-pointer " />
          <button onClick={toggleDropdown} className="ml-1 focus:outline-none hover:text-gray-500 cursor-pointer">
            <ChevronDown className="h-5 w-5 text-gray-700" />
          </button>

          {isDropdownOpen && (
           <DropdownMenu isOpen={isDropdownOpen} onClose={toggleDropdown} options={[
            { label: 'Sign Out', icon: <LogOut className="h-4 w-4 mr-2" />, onClick: () => {} },
          ]}/>
           
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;