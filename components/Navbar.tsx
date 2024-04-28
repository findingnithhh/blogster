"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { CgClose, CgMenuRight } from "react-icons/cg";
import { ModeToggle } from "./DarkMode";
import { GoDotFill } from "react-icons/go";
import { Badge } from "@/components/ui/badge";


const Navbar = () => {
  const [isMenuShow, setIsMenuShow] = useState(false);
  const menuItems = [
    { text: "Home", link: "/" },
    { text: "Explore", link: "https://www.youtube.com/" },
    { text: "Create Post", link: "#" },
    { text: "Notifications", link: "#" },
    { text: "Login", link: "#" },
    { text: "Sign Up", link: "#" },
  ];

  const toggleMenu = () => {
    closeMenu(); // Reset menu before opening
    setIsMenuShow(!isMenuShow);
  };

  const closeMenu = () => {
    setIsMenuShow(false);
  };

  return (
    <>
      <nav className="container flex justify-between items-center pt-3">
        <div className="flex items-center gap-10">
          <h1 className="text-xl lg:text-2xl italic font-black flex items-end">
            Blogster
            <span className="text-blue-700">
              <GoDotFill />
            </span>
          </h1>
          <div className="flex items-center mr-4">
            <ul className="hidden lg:flex text-sm justify-center items-center gap-5">
              <li>
                <Link href="/" className=" hover:text-blue-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className=" hover:text-blue-500">
                  Explore
                </Link>
              </li>
              <li>
                <Link href="#" className=" hover:text-blue-500">
                  Create Post
                </Link>
              </li>
              <li>
                <Link href="#" className=" hover:text-blue-500">
                  Notifications
                </Link>
              </li>
              <Badge variant="destructive" className="mb-2.5 -ml-5">
                1
              </Badge>
            </ul>
          </div>
        </div>
        <div className="flex items-center">
          <ModeToggle />
          <div className="hidden lg:flex items-center gap-2">
            <Button variant="outline" className=" outline-none">
              Login
            </Button>
            <Button className=" outline-none">Sign Up</Button>
          </div>
          <div
            className="lg:hidden flex items-center cursor-pointer"
            onClick={toggleMenu}
          >
            {isMenuShow ? (
              <CgClose className="h-6 w-6" />
            ) : (
              <CgMenuRight className="h-6 w-6" />
            )}
          </div>
        </div>
      </nav>
      {/* Small screen menu */}
      {isMenuShow && (
        <div>
          <div
            className="fixed top-0 z-40 w-full h-full"
            onClick={toggleMenu}
          ></div>
          <div
            className={`absolute top-0 z-50 w-[70%] h-screen block lg:hidden transition-transform transform duration-300 ease-in-out`}
            style={{
              transform: isMenuShow ? "translateX(0%)" : "translateX(-100%)",
              transition: "transform 0.3s ease",
            }}
          >
            <div className="w-full flex items-center justify-center ">
              <div className="block w-full overflow-hidden lg:hidden pt-4 pl-10 backdrop-blur-xl">
                <h1 className="text-xl lg:text-2xl italic font-black flex items-end">
                  Blogster
                  <span className="text-blue-700">
                    <GoDotFill />
                  </span>
                </h1>
                <ul className="text-sm mt-4">
                  {menuItems.map((item, index) => (
                    <li
                      key={index}
                      className="block lg:hidden hover:text-blue-500 py-3"
                    >
                      <Link href={item.link} onClick={closeMenu}>
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
