import React from "react";
import { NavLink } from "react-router-dom";
import logoRiotGames from "../assets/images/logo-riotgames.png";
import logoValorant from "../assets/images/logo-valorant.png";

const Navbar = () => {
  return (
    <nav className="relative w-full flex justify-between z-10 bg-transparent navbar">
      <div className="flex items-center space-x-6">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logoRiotGames} alt="Logo Riot Games" className="h-6" />
        </a>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logoValorant} alt="Logo Valorant" className="h-6" />
        </a>
      </div>
      <div className="flex items-center space-x-8 font-montserrat">
        <NavLink
          to="/omen"
          className={({ isActive }) =>
            isActive
              ? "text-white uppercase text-xs font-bold tracking-wider"
              : "text-gray-400 hover:text-gray-200 uppercase text-xs font-bold tracking-wider"
          }
        >
          Omen
        </NavLink>
        <NavLink
          to="/cypher"
          className={({ isActive }) =>
            isActive
              ? "text-white uppercase text-xs font-bold tracking-wider"
              : "text-gray-400 hover:text-gray-200 uppercase text-xs font-bold tracking-wider"
          }
        >
          Cypher
        </NavLink>
        <NavLink
          to="/iso"
          className={({ isActive }) =>
            isActive
              ? "text-white uppercase text-xs font-bold tracking-wider"
              : "text-gray-400 hover:text-gray-200 uppercase text-xs font-bold tracking-wider"
          }
        >
          Iso
        </NavLink>
        <NavLink
          to="/sova"
          className={({ isActive }) =>
            isActive
              ? "text-white uppercase text-xs font-bold tracking-wider"
              : "text-gray-400 hover:text-gray-200 uppercase text-xs font-bold tracking-wider"
          }
        >
          Sova
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
