"use client"
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export function MainNav() {
  return (
    <div className="flex flex-col space-y-4 h-full text-white">
      <div className="px-3 py-2 h-full overflow-y-auto hide-scrollbar">
        <style jsx>{`
          .hide-scrollbar {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none; /* Chrome, Safari, and Opera */
          }
        `}</style>
        <h2 className="mb-2 px-4 text-lg font-semibold">Getting Started</h2>
        <div className="space-y-1">
          <Link
            href="#"
            className="block rounded-md bg-black px-4 py-2 text-sm font-medium"
          >
            Introduction
          </Link>
          <Link
            href="#"
            className="block rounded-md px-4 py-2 text-sm font-medium text-white hover:text-gray-400"
          >
            Installation
          </Link>
          <Link
            href="#"
            className="block rounded-md px-4 py-2 text-sm font-medium text-white hover:text-gray-400"
          >
            components.json
          </Link>
          <Link
            href="#"
            className="block rounded-md px-4 py-2 text-sm font-medium text-white hover:text-gray-400"
          >
            Theming
          </Link>
          <Link
            href="#"
            className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-white hover:text-gray-400"
          >
            Monorepo
            <Badge  className="ml-2">
              New
            </Badge>
          </Link>
        </div>
      </div>
    </div>
  );
}

