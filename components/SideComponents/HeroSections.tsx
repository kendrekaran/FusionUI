'use client'

import React, { useCallback, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Copy, Check, RefreshCw } from 'lucide-react'
import { Hero1 } from '../SingleComponent.tsx/Hero1'
import { Hero02 } from '../SingleComponent.tsx/Hero02'
import Hero03 from '../SingleComponent.tsx/Hero03'
import HeroInstall1 from '../InstallProcess/HeroInstall1'
import HeroInstall2 from '../InstallProcess/HeroInstall2'
import HeroInstall3 from '../InstallProcess/HeroInstall3'

type HeroType = 'Hero1' | 'Hero2' | 'Hero3'
type TabType = 'preview' | 'code'

interface TabOption {
  id: TabType
  label: string
}

interface ComponentState {
  refreshKey: number
  activeTab: TabType
  copied: boolean
}

const TABS: TabOption[] = [
  { id: 'preview', label: 'Preview' },
  { id: 'code', label: 'Code' }
]

const COPY_TIMEOUT = 2000

const HERO_CODE_MAP: Record<HeroType, string> = {
  Hero1: `import React from 'react'
// Hero 1 component code here...
`,
  Hero2: `import React from 'react'
// Hero 2 component code here...
`,
  Hero3: `import React from 'react'
// Hero 3 component code here...
`,
}

const HeroSection = () => {
  const pathname = usePathname()
  const [state, setState] = useState<ComponentState>({
    refreshKey: 0,
    activeTab: 'preview',
    copied: false
  })

  const { refreshKey, activeTab, copied } = state

  // Determine the hero type based on the URL path
  const heroType = useMemo<HeroType | null>(() => {
    if (pathname === '/hero/1') return 'Hero1'
    if (pathname === '/hero/2') return 'Hero2'
    if (pathname === '/hero/3') return 'Hero3'
    return null
  }, [pathname])

  const heroCode = useMemo(() => {
    return heroType ? HERO_CODE_MAP[heroType] : ''
  }, [heroType])

  const handleRefresh = useCallback(() => {
    setState(prev => ({
      ...prev,
      refreshKey: prev.refreshKey + 1
    }))
  }, [])

  const handleTabChange = useCallback((tab: TabType) => {
    setState(prev => ({
      ...prev,
      activeTab: tab
    }))
  }, [])

  const copyToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(heroCode)
      setState(prev => ({ ...prev, copied: true }))
      setTimeout(() => {
        setState(prev => ({ ...prev, copied: false }))
      }, COPY_TIMEOUT)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }, [heroCode])

  const renderHeroComponent = () => {
    if(heroType === 'Hero1') {
    return ( <div>
      <Hero1 key={refreshKey} />
      <HeroInstall1/> 
     </div> )
    }
    if(heroType === 'Hero2') {
      return ( <div>
        <Hero02 key={refreshKey} />
        <HeroInstall2/> 
       </div> )
      }
    if(heroType === 'Hero3') {
      return ( <div>
        <Hero03 key={refreshKey} />
        <HeroInstall3/> 
        </div> )
      }
    return null
  }

  return (
    <div className='p-4 min-h-screen text-white'>
      <h1 className='text-4xl font-bold'>Hero Sections</h1>
      <p className='text-sm text-gray-400 py-1'>These are some of the Hero Sections</p>
      
      <div className='flex items-center gap-4 mt-4'>
        <div className='flex bg-black border border-gray-600 rounded-lg'>
          {TABS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleTabChange(id)}
              className={`px-4 py-2 rounded-md transition-all ${
                activeTab === id
                  ? 'bg-[#2E2F2F] text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
              type="button"
            >
              {label}
            </button>
          ))}
        </div>
        
        <button
          onClick={handleRefresh}
          className="bg-[#2E2F2F] p-2 rounded-lg hover:bg-gray-700 transition-colors"
          type="button"
          aria-label="Refresh preview"
        >
         <RefreshCw className="h-4 w-4 text-gray-400" />
        </button>
      </div>

      <div className='mt-4 rounded-lg overflow-hidden  '>
        {activeTab === 'preview' ? (
          <div className='relative w-full'>
            {renderHeroComponent()}
          </div>
        ) : (
          <div className='relative'>
            <button
              onClick={copyToClipboard}
              className="absolute right-4 top-4 p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
              type="button"
              aria-label={copied ? 'Code copied' : 'Copy code'}
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4 text-gray-400" />
              )}
            </button>
            <pre className='p-4 h-96 bg-gray-950 overflow-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent'>
              <code className='text-gray-300 text-sm whitespace-pre-wrap'>
                {heroCode}
              </code>
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}

export default HeroSection