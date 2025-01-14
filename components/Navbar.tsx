"use client"
import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white border-b border-gray-800">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold">
        <Link href="/" className="flex items-center space-x-2 text-white">
            <svg
                fill="white"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
            >
                <path d="M4 3H5C6.05382 3 6.91812 3.8164 6.99451 4.85081L7 5V19C7 20.0538 6.1836 20.9181 5.14919 20.9945L5 21H4C2.94618 21 2.08188 20.1836 2.00549 19.1492L2 19V5C2 3.94618 2.8164 3.08188 3.85081 3.00549L4 3H5H4ZM10 3H11C12.0538 3 12.9181 3.8164 12.9945 4.85081L13 5V19C13 20.0538 12.1836 20.9181 11.1492 20.9945L11 21H10C8.94618 21 8.08188 20.1836 8.00549 19.1492L8 19V5C8 3.94618 8.8164 3.08188 9.85081 3.00549L10 3H11H10ZM16.9743 5.0005C17.8138 5.0005 18.5825 5.5311 18.8643 6.34636L18.9113 6.5025L21.9263 18.2485C22.1888 19.2689 21.613 20.3094 20.6295 20.6402L20.4863 20.6825L19.5173 20.9315C19.3513 20.9735 19.1833 20.9945 19.0193 20.9945C18.1807 20.9945 17.4112 20.463 17.1302 19.6476L17.0833 19.4915L14.0673 7.7465C13.8058 6.72514 14.3807 5.68555 15.3649 5.35484L15.5083 5.3125L16.4763 5.0635C16.6423 5.0205 16.8103 5.0005 16.9743 5.0005ZM5 4.5H4C3.75467 4.5 3.55042 4.67778 3.50806 4.91043L3.5 5V19C3.5 19.2444 3.67699 19.4494 3.91016 19.4919L4 19.5H5C5.24533 19.5 5.44958 19.3222 5.49194 19.0896L5.5 19V5C5.5 4.75556 5.32301 4.55062 5.08984 4.50809L5 4.5ZM11 4.5H10C9.75467 4.5 9.55042 4.67778 9.50806 4.91043L9.5 5V19C9.5 19.2444 9.67699 19.4494 9.91016 19.4919L10 19.5H11C11.2453 19.5 11.4496 19.3222 11.4919 19.0896L11.5 19V5C11.5 4.75556 11.323 4.55062 11.0898 4.50809L11 4.5ZM16.9753 6.5005L16.9119 6.50437L16.8493 6.5165L15.8813 6.7645C15.7063 6.8095 15.6143 6.9275 15.5743 6.9955C15.5431 7.0483 15.4985 7.14718 15.5049 7.27422L15.5203 7.3745L18.5363 19.1185C18.6023 19.3765 18.8333 19.4945 19.0193 19.4945L19.0818 19.4906L19.1443 19.4785L20.1133 19.2295C20.3515 19.1691 20.5052 18.9458 20.4879 18.7102L20.4733 18.6215L17.4583 6.8755C17.3913 6.6185 17.1613 6.5005 16.9753 6.5005Z" fill="white" />
            </svg>
            <h3 className="text-xl font-semibold">FusionUI</h3>
        </Link>

        </div>


        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-black">
            Home
          </a>
          <a href="#about" className="hover:text-black">
            About
          </a>
          <a href="#services" className="hover:text-black">
            Services
          </a>
          <a href="#contact" className="hover:text-black">
            Contact
          </a>
        </div>


        <div className="md:hidden">
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black hover:text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </Button>
        </div>
      </div>


      {isOpen && (
        <div className="md:hidden bg-black">
          <a
            href="#home"
            className="block px-4 py-2 hover:bg-black"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-4 py-2 hover:bg-black"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#services"
            className="block px-4 py-2 hover:bg-black"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 hover:bg-black"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
