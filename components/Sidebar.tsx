'use client'

import { useState } from 'react'
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronRight } from 'lucide-react'

interface NavigationItem {
  name: string
  label?: string
  isNew: boolean
}

interface NavigationSection {
  title: string
  items: NavigationItem[]
}

interface MainNavProps {
  onSelect: (name: string) => void
}

interface ExpandedSections {
  [key: string]: boolean
}

export function MainNav({ onSelect }: MainNavProps) {
  const [activeSection, setActiveSection] = useState<string>('Introduction')
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({})

  const navigationSections: NavigationSection[] = [
    {
      title: 'Getting Started',
      items: [
        { name: 'Introduction', isNew: false },
        { name: 'Installation', isNew: true }
      ]
    },
    {
      title: 'Hero Section',
      items: [
        { name: 'Hero1', label: 'Hero 01', isNew: false },
        { name: 'Hero2', label: 'Hero 02', isNew: false }
      ]
    },
    {
      title: 'Testimonials Section',
      items: [
        { name: 'Testimonials', label: 'Testimonials 01', isNew: true }
      ]
    },
    {
      title: 'Pricing Sections',
      items: [
        { name: 'pricing', label: 'Pricing 01', isNew: false }
      ]
    },
    {
      title: 'Footer Sections',
      items: [
        { name: 'footer', label: 'Footer 02', isNew: true }
      ]
    },
    {
      title: 'Graphs Sections',
      items: [
        { name: 'graph', label: 'Graphs 01', isNew: false }
      ]
    },
    {
      title: 'Cards Sections',
      items: [
        { name: 'cards', label: 'Cards 01', isNew: false }
      ]
    },
    {
      title: 'Team Sections',
      items: [
        { name: 'team', label: 'Team 01', isNew: false },
        { name: 'team2', label: 'Team 02', isNew: false }
      ]
    },
    {
      title: 'Count Sections',
      items: [
        { name: 'count', label: 'Count 01', isNew: false }
      ]
    },
    {
      title: 'Projects Sections',
      items: [
        { name: 'projects', label: 'Projects 01', isNew: false }
      ]
    },
    {
      title: 'FAQ Sections',
      items: [
        { name: 'faq', label: 'FAQ 01', isNew: false }
      ]
    }
  ]

  const toggleSection = (title: string): void => {
    setExpandedSections(prev => ({
      ...prev,
      [title]: !prev[title]
    }))
  }

  const handleSelect = (name: string): void => {
    setActiveSection(name)
    onSelect(name)
  }

  return (
    <div className="flex flex-col h-[90vh] ">
      <div className="px-3 py-2 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
        <nav className="space-y-4">
          {navigationSections.map((section) => (
            <div key={section.title} className="space-y-2">
              <button
                onClick={() => toggleSection(section.title)}
                className="flex items-center justify-between w-full px-4 py-2 text-sm font-semibold text-gray-200 hover:text-white transition-colors"
                type="button"
              >
                {section.title}
                {expandedSections[section.title] ? 
                  <ChevronDown className="h-4 w-4" /> : 
                  <ChevronRight className="h-4 w-4" />
                }
              </button>
              
              <div className={`space-y-1 transition-all duration-200 ease-in-out ${
                expandedSections[section.title] ? 'block' : 'hidden'
              }`}>
                {section.items.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleSelect(item.name)}
                    className={`flex items-center w-full rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      activeSection === item.name
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-gray-900'
                    }`}
                    type="button"
                  >
                    <span>{item.label || item.name}</span>
                    {item.isNew && (
                      <Badge variant="default" className="ml-2 bg-green-500/10 text-green-500 hover:bg-green-500/20">
                        New
                      </Badge>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default MainNav