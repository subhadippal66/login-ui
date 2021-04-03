import React from "react";
import LoginPNG from "../media/account.png";

function Header() {
  return (
    <div className=" bg-gray-50 md:space-x-5 space-x-2 text-center text-2xl font-light p-5 shadow-md flex flex-row w-full justify-center items-center ">
      <img className="w-10" src={LoginPNG} alt="LoginLogo" />
      <div className="tracking-widest uppercase">Login/Signup UI</div>
    </div>
  );
}

export default Header;
