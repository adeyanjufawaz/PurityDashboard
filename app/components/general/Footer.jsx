import React from "react";

function Footer() {
  return (
    <div className="flex flex-col text-center lg:text-left lg:flex-row min-h-14 justify-between pr-8 py-9 items-center ">
      <div>
        <h2>
          © 2025, Made with ❤️ by Creative Tim & Simmmple for a better web
        </h2>
      </div>
      <div className="flex gap-3 ">
        <h2>Creative Tim</h2>
        <h2>Simmmple</h2>
        <h2>Blog</h2>
        <h2>License</h2>
      </div>
    </div>
  );
}

export default Footer;
