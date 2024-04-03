import { useState } from "react";
import Navbar from "./nav-bar";
import Sidebar from "./side-bar";
import Index from "../../Vendors/index";

function Layout() {
  const [option, setOptions] = useState("Home");
  const changeOption = (newOption) => {
    setOptions(newOption);
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-300">
      {/* Navbar */}
      <Navbar changeOption={changeOption} />

      {/* Main content */}
      <div className="flex flex-col lg:flex-row flex-1">
        {/* Sidebar */}
        <Sidebar changeOption={changeOption} />

        {/* Content */}
        <Index option={option} />
      </div>
    </div>
  );
}

export default Layout;
