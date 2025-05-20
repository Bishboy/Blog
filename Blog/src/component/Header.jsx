import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaDribbble,
  FaXTwitter,
  FaBars,
  FaXmark,
} from "react-icons/fa6";
import Modal from "./Modal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { id: 1, path: "/", link: "Home" },
    { id: 2, path: "/blog", link: "Blog" },
    // { id: 3, path: "/about", link: "About" },
    // { id: 4, path: "/services", link: "Services" },
    // { id: 5, path: "/contact", link: "Contact" },
  ];

   const openModal = () => {
     setIsModalOpen(true);
   }; 

   const closeModal = () => {
     setIsModalOpen(false);
   };

  return (
    <header className="bg-black text-white fixed top-0 left-0 right-0">
      <nav className="px-4  py-4 flex justify-between items-center b max-w-7xl mx-auto  ">
        <a href="/" className="text-xl text-white font-bold px-6">
          {" "}
          Whistle<span className="text-orange-500">BH</span>
        </a>
        {/*navitems*/}
        <ul className="lg:flex gap-12 text-lg hidden">
          {navItems.map(({ path, id, link }) => (
            <li key={id}>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to={path}
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className=" text-white lg:flex hidden gap-[3rem] items-center">
          <a href="/" className="hover:text-orange-500 ">
            <FaFacebook className="" size={20} />
          </a>
          <a href="/" className="hover:text-orange-500">
            <FaDribbble className="" size={20} />
          </a>
          <a href="/" className="hover:text-orange-500">
            <FaXTwitter className="" size={20} />
          </a>
          <button
            onClick={openModal}
            className="bg-orange-500 hover:text-orange-500 px-6 py-2 font-medium rounded hover:bg-white dfdfj-all duration-200 ease-in"
          >
            Log in
          </button>
        </div>
        <Modal isModalOpen={isModalOpen} closeModal={closeModal} />

        {/* mobile nav */}
        <div className="lg:hidden ">
          <button onClick={toggle} className="cursor-pointer">
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5 lg:hidden block" />
            ) : (
              <FaBars className="w-5 h-5 lg:hidden block" />
            )}
          </button>
        </div>
      </nav>
      {/* {menu items} */}

      <div>
        <ul
          className={` gap-12 text-lg  lg:hidden space-y-4 px-4 py-6 mt-14 bg-white ${
            isMenuOpen
              ? "fixed top-0 left-0 w-full transition-all ease-out duration-500"
              : "hidden"
          }`}
        >
          {navItems.map(({ path, id, link }) => (
            <li key={id}>
              <NavLink
                onClick={toggle}
                to={path}
                className="text-black hover:text-orange-500  "
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
