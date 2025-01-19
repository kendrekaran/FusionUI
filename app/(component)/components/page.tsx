"use client"
import Navbar from '@/components/Navbar'
import { RightSidebar } from '@/components/Righbar'
import { MainNav } from '@/components/Sidebar'
import CardsSection from '@/components/SideComponents/CardsSections'
import Counter from '@/components/SideComponents/Counter'
import FaqSection from '@/components/SideComponents/FAQSections'
import FooterSections from '@/components/SideComponents/FooterSections'
import GraphsSection from '@/components/SideComponents/GraphsSection'
import HeroSections from '@/components/SideComponents/HeroSections'
import Installation from '@/components/SideComponents/Installation'
import Introduction from '@/components/SideComponents/Introduction'
import Pricing from '@/components/SideComponents/Pricising'
import ProjectsSection from '@/components/SideComponents/ProjectSections'
import TeamSection from '@/components/SideComponents/TeamSections'
import TestimonialsSection from '@/components/SideComponents/TestimonialsSection'
import React, { SetStateAction, useState } from 'react'

const page = () => {
  const [selectedContent, setSelectedContent] = useState("Introduction");

  // Map sidebar items to their corresponding components
  const componentsMap = {
    Introduction: <Introduction />,
    Installation: <Installation />,
    Hero1: <HeroSections  value={"Hero1"}/>,
    Hero2: <HeroSections  value={"Hero2"}/>,
    Testimonials : <TestimonialsSection value={"Testimonials1"}/>,
    pricing : <Pricing value={"Pricing1"}/>,
    footer : <FooterSections value={"Footer1"}/>,
    graph : <GraphsSection value={"Graph1"}/>,
    cards : <CardsSection value={"Cards1"}/>,
    team: <TeamSection value={"Team1"}/>,
    count : <Counter value={"Count1"}/>,
    projects : <ProjectsSection value={"Project1"}/>,
    faq : <FaqSection value={"FAQ1"}/>
  };

  return (
  <div className="bg-black text-white  ">
      <Navbar/>
      <div className="flex  overflow-hidden p-4 h-[92vh] overflow-y-hidden">
        <aside className="hidden w-64 border-r border-gray-800 bg-black lg:block h-screen overflow-y-auto">
          {/* Pass setSelectedContent to MainNav */}
          <MainNav onSelect={(componentName: SetStateAction<string>) => setSelectedContent(componentName)} />
        </aside>

        <main className="flex-1 px-8 py-8 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
          {componentsMap[selectedContent] || <p>Select an item from the sidebar</p>}
        </main>

        <aside className="hidden w-64 border-l border-gray-800 bg-black px-8 py-8 lg:block h-screen overflow-y-auto">
          <RightSidebar />
        </aside>
      </div>
    </div>
  )
}

export default page