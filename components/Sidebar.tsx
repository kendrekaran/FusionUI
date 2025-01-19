"use client"
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

//@ts-ignore
export function MainNav({ onSelect }) {

  return (
    <div className="flex flex-col space-y-4 h-[90vh] ">
      <div className="px-3 py-2 h-full overflow-y-auto hide-scrollbar scrollbar">
        
        <h2 className="mb-2 px-4 text-base font-semibold">Getting Started</h2>
        <div className="space-y-1">
          <li onClick={() => onSelect("Introduction")}
            className="block rounded-md bg-black px-4 cursor-pointer py-2 text-sm font-medium"
          >
            Introduction
          </li>
          <li onClick={() => onSelect("Installation")}
            className="block rounded-md px-4 py-2 text-sm font-medium  text-gray-400 hover:text-white"
          >
            Installation
            <Badge  className="ml-2">
              New
            </Badge>
          </li>
        </div>
          <h2 className="my-2 px-4 text-base font-semibold">Hero Section</h2>
          <div className="space-y-1">
          <li onClick={() => onSelect("Hero1")}
            className="block rounded-md bg-black px-4 cursor-pointer  py-2 text-sm font-medium  text-gray-400 hover:text-white"
          >
            Hero 01
          </li>
          <li onClick={() => onSelect("Hero2")}
            className="block rounded-md bg-black px-4 cursor-pointer  py-2 text-sm font-medium  text-gray-400 hover:text-white"
          >
            Hero 02
          </li>
          </div>

          <h2 className="my-2 px-4 text-base font-semibold">Testimonials Section</h2>
          <div className="space-y-1">
          <li onClick={() => onSelect("Testimonials")}
            className="block rounded-md px-4 py-2 text-sm cursor-pointer font-medium  text-gray-400 hover:text-white"
          >
            Testimonials 01
            <Badge  className="ml-2">
              New
            </Badge>
          </li>
          </div>

          <h2 className="my-2 px-4 text-base font-semibold">Pricing Sections</h2>
          <div className="space-y-1">
          <li onClick={() => onSelect("pricing")}
            className="block rounded-md bg-black px-4 cursor-pointer py-2 text-sm font-medium text-gray-400 hover:text-white"
          >
            Pricing 01
          </li>
          </div>

          <h2 className="my-2 px-4 text-base font-semibold">Footer Sections</h2>
          <div className="space-y-1">
          <li onClick={() => onSelect("footer")}
            className="block rounded-md px-4 py-2 cursor-pointer text-sm font-medium  text-gray-400 hover:text-white"
          >
            Footer 02
            <Badge  className="ml-2">
              New
            </Badge>
          </li>
          </div>

          <h2 className="my-2 px-4 text-base font-semibold">Graphs Sections</h2>
          <div className="space-y-1">
          <li onClick={() => onSelect("graph")}
            className="block rounded-md bg-black px-4 cursor-pointer py-2 text-sm font-medium text-gray-400 hover:text-white"
          >
            Graphs 01
          </li>
          </div>

          <h2 className="my-2 px-4 text-base font-semibold">Cards Sections</h2>
          <div className="space-y-1">
          <li onClick={() => onSelect("cards")}
            className="block rounded-md bg-black px-4 cursor-pointer py-2 text-sm font-medium text-gray-400 hover:text-white"
          >
            Cards 01
          </li>
          </div>

          <h2 className="my-2 px-4 text-base font-semibold">Team Sections</h2>
          <div className="space-y-1">
          <li onClick={() => onSelect("team")}
            className="block rounded-md bg-black px-4 cursor-pointer py-2 text-sm font-medium text-gray-400 hover:text-white"
          >
           Team 01
          </li>
          <li onClick={() => onSelect("team")}
            className="block rounded-md bg-black px-4 cursor-pointer py-2 text-sm font-medium text-gray-400 hover:text-white"
          >
           Team 01
          </li>
          </div>

          <h2 className="my-2 px-4 text-base font-semibold">Count Sections</h2>
          <div className="space-y-1">
          <li onClick={() => onSelect("count")}
            className="block rounded-md bg-black px-4 cursor-pointer py-2 text-sm font-medium text-gray-400 hover:text-white"
          >
            Count 01
          </li>
          </div>

          <h2 className="my-2 px-4 text-base font-semibold">Projects Sections</h2>
          <div className="space-y-1">
          <li onClick={() => onSelect("projects")}
            className="block rounded-md bg-black px-4 cursor-pointer py-2 text-sm font-medium text-gray-400 hover:text-white"
          >
            Projects 01
          </li>
          </div>

          <h2 className="my-2 px-4 text-base font-semibold">FAQ Sections</h2>
          <div className="space-y-1">
          <li onClick={() => onSelect("faq")}
            className="block rounded-md bg-black px-4 cursor-pointer py-2 text-sm font-medium text-gray-400 hover:text-white"
          >
            FAQ 01
          </li>
          </div>

      </div>
    </div>
  );
}

