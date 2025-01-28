'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronRight } from 'lucide-react';

interface NavigationItem {
  name: string;
  label?: string;
  isNew: boolean;
  path: string;
}

interface NavigationSection {
  title: string;
  items: NavigationItem[];
}

interface ExpandedSections {
  [key: string]: boolean;
}

const MainNav = () => {
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({});
  const pathname = usePathname();

  const navigationSections: NavigationSection[] = [
    {
      title: 'Getting Started',
      items: [
        { name: 'Introduction', isNew: false, path: '/introduction' },
        { name: 'Installation', isNew: true, path: '/installation' }
      ]
    },
    {
      title: 'Hero Section',
      items: [
        { name: 'Hero1', label: 'Hero 01', isNew: false, path: '/hero/1' },
        { name: 'Hero2', label: 'Hero 02', isNew: false, path: '/hero/2' },
        { name: 'Hero3', label: 'Hero 03', isNew: false, path: '/hero/3' }
      ]
    },
    {
      title: 'Testimonials Section',
      items: [
        { name: 'Testimonials1', label: 'Testimonials 01', isNew: true, path: '/testimonials/1' },
        { name: 'Testimonials2', label: 'Testimonials 02', isNew: true, path: '/testimonials/2' }
      ]
    },
    {
      title: 'Pricing Sections',
      items: [
        { name: 'pricing1', label: 'Pricing 01', isNew: false, path: '/pricing/1' },
        { name: 'pricing2', label: 'Pricing 02', isNew: false, path: '/pricing/2' }
      ]
    },
    {
      title: 'Footer Sections',
      items: [
        { name: 'footer1', label: 'Footer 01', isNew: true, path: '/footer/1' },
        { name: 'footer2', label: 'Footer 02', isNew: true, path: '/footer/2' }
      ]
    },
    {
      title: 'Graphs Sections',
      items: [
        { name: 'graph1', label: 'Graphs 01', isNew: false, path: '/graphs/1' },
        { name: 'graph2', label: 'Graphs 02', isNew: false, path: '/graphs/2' }
      ]
    },
    {
      title: 'Cards Sections',
      items: [
        { name: 'cards1', label: 'Cards 01', isNew: false, path: '/cards/1' },
        { name: 'cards2', label: 'Cards 02', isNew: false, path: '/cards/2' }
      ]
    },
    {
      title: 'Team Sections',
      items: [
        { name: 'team', label: 'Team 01', isNew: false, path: '/team/1' }
      ]
    },
    {
      title: 'Count Sections',
      items: [
        { name: 'count', label: 'Count 01', isNew: false, path: '/count/1' }
      ]
    },
    {
      title: 'Projects Sections',
      items: [
        { name: 'projects', label: 'Projects 01', isNew: false, path: '/projects/1' }
      ]
    },
    {
      title: 'FAQ Sections',
      items: [
        { name: 'faq', label: 'FAQ 01', isNew: false, path: '/faq/1' }
      ]
    }
  ];

  const toggleSection = (title: string): void => {
    setExpandedSections(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <div className="flex flex-col h-[90vh]">
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
              
              <div 
                className={`space-y-1 transition-all duration-200 ease-in-out ${
                  expandedSections[section.title] ? 'block' : 'hidden'
                }`}
              >
                {section.items.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`flex items-center w-full rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      pathname === item.path
                        ? 'text-white bg-gray-900'
                        : 'text-gray-400 hover:text-white hover:bg-gray-900'
                    }`}
                  >
                    <span>{item.label || item.name}</span>
                    {item.isNew && (
                      <Badge 
                        variant="default" 
                        className="ml-2 bg-green-500/10 text-green-500 hover:bg-green-500/20"
                      >
                        New
                      </Badge>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MainNav;