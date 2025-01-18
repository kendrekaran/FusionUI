"use client"
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

//@ts-ignore
export function MainNav({ onSelect }) {
  return (
    <div className="flex flex-col space-y-4 h-[90vh] text-white">
      <div className="px-3 py-2 h-full overflow-y-auto hide-scrollbar scrollbar">
        
        <h2 className="mb-2 px-4 text-lg font-semibold">Getting Started</h2>
        <div className="space-y-1">
          <li onClick={() => onSelect("Introduction")}
            className="block rounded-md bg-black px-4 cursor-pointer py-2 text-sm font-medium"
          >
            Introduction
          </li>
          <li onClick={() => onSelect("Installation")}
            className="block rounded-md px-4 py-2 text-sm font-medium text-white hover:text-gray-400"
          >
            Installation
            <Badge  className="ml-2">
              New
            </Badge>
          </li>
        </div>
        <h2 className="my-2 px-4 text-lg font-semibold">Components</h2>
        <div className="space-y-1">
          <li onClick={() => onSelect("Hero")}
            className="block rounded-md bg-black px-4 cursor-pointer py-2 text-sm font-medium"
          >
            Hero Sections
          </li>
          <li onClick={() => onSelect("Testimonials")}
            className="block rounded-md px-4 py-2 text-sm cursor-pointer font-medium text-white hover:text-gray-400"
          >
            Testimonials 
            <Badge  className="ml-2">
              New
            </Badge>
          </li>
          <li onClick={() => onSelect("pricing")}
            className="block rounded-md bg-black px-4 cursor-pointer py-2 text-sm font-medium"
          >
            Pricing Sections
          </li>
          <li onClick={() => onSelect("Navbar")}
            className="block rounded-md px-4 py-2 text-sm font-medium text-white hover:text-gray-400"
          >
            Navbars
            <Badge  className="ml-2">
              New
            </Badge>
          </li>
        </div>
      </div>
    </div>
  );
}

