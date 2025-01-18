
"use client"
import { SetStateAction, useState } from "react";
import { MainNav } from "@/components/Sidebar";
import { RightSidebar } from "@/components/Righbar";
import Navbar from "@/components/Navbar";
import Introduction from "@/components/SideComponents/Introduction";
import Installation from "@/components/SideComponents/Installation";
import HeroSections from "@/components/SideComponents/HeroSections";

export default function Page() {
  // State to manage the selected content
  const [selectedContent, setSelectedContent] = useState("Introduction");

  // Map sidebar items to their corresponding components
  const componentsMap = {
    Introduction: <Introduction />,
    Installation: <Installation />,
    Hero: <HeroSections />,
  };

  return (
    <div className="bg-black text-white">
      <Navbar />
      <div className="flex min-h-screen h-screen overflow-hidden p-4">
        <aside className="hidden w-64 border-r border-gray-800 bg-black lg:block h-screen overflow-y-auto">
          {/* Pass setSelectedContent to MainNav */}
          <MainNav onSelect={(componentName: SetStateAction<string>) => setSelectedContent(componentName)} />
        </aside>

        <main className="flex-1 px-8 py-8 overflow-x-auto  scrollbar-thin scrollbar-thumb-black scrollbar-track-black">
          {componentsMap[selectedContent] || <p>Select an item from the sidebar</p>}
        </main>

        <aside className="hidden w-64 border-l border-gray-800 bg-black px-8 py-8 lg:block h-screen overflow-y-auto">
          <RightSidebar />
        </aside>
      </div>
    </div>
  );
}
