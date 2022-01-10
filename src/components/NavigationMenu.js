import React from "react";
import { Link } from "react-router-dom";

function NavigationMenu() {
  const hideMenu = () => {
    const menu = document.getElementById("menu");
    const hideNav = document.querySelector(".nav-menu");

    menu.onclick = hideNav.classList.toggle("active");
    menu.onclick = menu.classList.toggle("open");
  };

  return (
    <div>
      <button onClick={hideMenu} className="nav-toggler" id="menu">
        <span></span>
      </button>
      <nav className="container nav-menu hide">
        <ul>
          <li className="list-items">
            <Link className="nav-links" to="/">
              home
            </Link>
          </li>
          <li className="list-items">
            <Link className="nav-links" to="/about">
              about
            </Link>
          </li>
          <li className="list-items">
            <Link className="nav-links" to="/project">
              projects
            </Link>
          </li>
          <li className="list-items">
            <Link className="nav-links" to="/contact">
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavigationMenu;
