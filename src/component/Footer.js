import React from "react";
import github from "../media/github.png";

function Footer() {
  return (
    <div className="flex md:flex-row flex-col justify-around items-center p-3 space-y-2">
      <div>Developed By - Subhadip Pal</div>
      <div>subhadippal66@gmail.com</div>
      <a
        href="https://github.com/subhadippal66/login-ui"
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex flex-row items-center space-x-4 transform hover:scale-105 duration-150 font-mono text-blue-900">
          <div>View Source Code</div>
          <img src={github} alt="" className="h-8" />
        </div>
      </a>
    </div>
  );
}

export default Footer;
