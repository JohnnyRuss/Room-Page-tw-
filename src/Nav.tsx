import React from "react";

interface NavType {}

const Nav: React.FC<NavType> = (props) => {
  return (
    <nav className="fixed top-0 w-full flex items-center py-10 px-8 gap-8 text-app-white">
      <figure>
        <img src="./assets/logo.svg" alt="logo" />
      </figure>
      <ul className="flex items-center gap-2 uppercase">
        {["home", "shop", "about", "contact"].map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
