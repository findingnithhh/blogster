'use client'
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { CgClose, CgMenuRight } from "react-icons/cg";
import { ModeToggle } from "./DarkMode";
import { GoDotFill } from "react-icons/go";
import { Badge } from "@/components/ui/badge";

const Navbar = () => {
  const [isMenuShow, setIsMenuShow] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const menuItems = [
    { text: "Home", link: "/" },
    { text: "Explore", link: "https://www.youtube.com/" },
    { text: "Create Post", link: "#" },
    { text: "Notifications", link: "#" },
    { text: "Login", link: "#" },
    { text: "Sign Up", link: "#" },
  ];

  const toggleMenu = () => {
    setIsMenuShow(!isMenuShow);
  };

  const closeMenu = () => {
    setIsMenuShow(false);
  };

  useEffect(() => {
    function handleResize() {
      setIsLargeScreen(window.innerWidth > 768);
      if (window.innerWidth > 1024) {
        closeMenu();
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize(); // Call once to set initial value
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
            className={`lg:hidden flex items-center cursor-pointer ${
              isMenuShow ? "bg-gray-200 p-1.5 rounded-full" : "p-1.5"
            }`}
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
        <>
          <div
            className="fixed top-0 left-0 z-50 w-full h-full bg-black opacity-50"
            onClick={toggleMenu}
          ></div>
          <div
            className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ease-in-out ${
              isMenuShow ? "h-screen" : "h-0"
            }`}
          >
            <div className="h-full bg-gray-900 text-white p-4 shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl lg:text-2xl italic font-black flex items-end">
                  Blogster
                  <span className="text-blue-700">
                    <GoDotFill />
                  </span>
                </h1>
                <button onClick={toggleMenu}>
                  <CgClose className="h-6 w-6" />
                </button>
              </div>
              <ul className="text-2xl">
                {menuItems.map((item, index) => (
                  <li key={index} className="hover:text-blue-500 py-2">
                    <Link href={item.link} onClick={closeMenu}>
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
