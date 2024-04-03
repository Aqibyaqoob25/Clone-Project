import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUserFriends,
  faComment,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function Navbar({ changeOption }) {
  const [searchValue, setSearchValue] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchValue);
  };

  const handleLogout = () => {
    // Implement your logout functionality here
    console.log("Logout button clicked");
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="bg-white border-b border-gray-200 fixed w-full z-10">
      <div className="flex items-center justify-between mx-auto max-w-6xl h-16">
        <div className="flex items-center flex-1 md:flex-none">
          <div className="flex items-center ml-4">
            {/* Facebook Logo */}
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-3xl text-blue-600"
            />
            <div className="ml-2">
              <input
                type="text"
                placeholder="Search Facebook"
                className="px-2 py-1 text-sm text-gray-700 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                value={searchValue}
                onChange={handleSearchChange}
              />
              <button
                className="px-3 py-1 ml-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center justify-center flex-1 space-x-32">
          <FontAwesomeIcon
            icon={faHome}
            className="text-gray-600 cursor-pointer mr-4"
            onClick={() => {
              changeOption("Home");
            }}
          />
          <FontAwesomeIcon
            icon={faUserFriends}
            className="text-gray-600 cursor-pointer mr-4"
            onClick={() => {
              changeOption("Friends");
            }}
          />
          <FontAwesomeIcon
            icon={faComment}
            className="text-gray-600 cursor-pointer"
            onClick={() => {
              changeOption("Messages");
            }}
          />
        </div>

        {/* User Profile and Dropdown Section */}
        <div className="flex items-center mr-4 relative">
          <img
            src="https://via.placeholder.com/32"
            alt="User Profile"
            className="w-8 h-8 rounded-full cursor-pointer"
            onClick={toggleDropdown}
          />
          {dropdownOpen && (
            <div className="absolute top-10 right-0 bg-white border border-gray-200 rounded-md p-2">
              <button
                className="text-gray-600 hover:text-blue-600 focus:outline-none"
                onClick={handleLogout}
              >
                <FontAwesomeIcon icon={faSignOutAlt} />
                <span className="ml-2">Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
