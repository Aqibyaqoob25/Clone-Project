import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUserFriends,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar({ changeOption }) {
  return (
    <div className="bg-white border-r border-gray-200 fixed h-full z-10 p-4 ">
      <div className="flex flex-col justify-between mx-auto max-w-xs h-screen">
        {/* Navigation Links */}
        <div className="flex flex-col items-center justify-center space-y-6 h-full">
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon icon={faHome} className="text-gray-600" />
            <p
              className="text-gray-600 hover:text-blue-600 cursor-pointer"
              onClick={() => {
                changeOption("Home");
              }}
            >
              Home
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon icon={faUserFriends} className="text-gray-600" />
            <p
              className="text-gray-600 hover:text-blue-600 cursor-pointer"
              onClick={() => {
                changeOption("Friends");
              }}
            >
              Friends
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon icon={faComment} className="text-gray-600" />
            <p
              className="text-gray-600 hover:text-blue-600 cursor-pointer"
              onClick={() => {
                changeOption("Messages");
              }}
            >
              Messages
            </p>
          </div>
        </div>

        {/* User Profile Image */}
        <div className="mb-4 flex items-center justify-center">
          <img
            src="https://via.placeholder.com/40"
            alt="User Profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
