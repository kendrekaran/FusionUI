'use client'

import React, { useCallback, useMemo, useState } from 'react'
import { Copy, Check, RefreshCw } from 'lucide-react'
import Cards from '../SingleComponent.tsx/Cards'
import Cards02 from '../SingleComponent.tsx/Cards02'
import { usePathname } from 'next/navigation'
import CardInstall1 from '../InstallProcess/CardsInstall1'
import CardInstall2 from '../InstallProcess/CardsInstall2'

type CardsType = 'Cards1' | 'Cards2'
type TabType = 'preview' | 'code'

interface CardsSectionsProps {
  value?: CardsType
}

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

const Cards_CODE_MAP: Record<CardsType, string> = {
  Cards1: `import React from 'react'
// Cards 1 component code here...
`,
  Cards2: `import React from 'react'
// Cards 2 component code here...
`
}

const CardsSection = () => {
  const pathname = usePathname()
  const [state, setState] = useState<ComponentState>({
    refreshKey: 0,
    activeTab: 'preview',
    copied: false
  })

  const { refreshKey, activeTab, copied } = state

    const cardsType = useMemo<CardsType | null>(() => {
      if (pathname === '/cards/1') return 'Cards1'
      if (pathname === '/cards/2') return 'Cards2'
      return null
    }, [pathname])
  

  const CardsCode = useMemo(() => {
    return cardsType ? Cards_CODE_MAP[cardsType] : ''
  }, [cardsType])

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
      await navigator.clipboard.writeText(CardsCode)
      setState(prev => ({ ...prev, copied: true }))
      setTimeout(() => {
        setState(prev => ({ ...prev, copied: false }))
      }, COPY_TIMEOUT)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }, [CardsCode])

  const renderCardsComponent = () => {
    if (cardsType === 'Cards1') {
      return(
        <div>
            <Cards key={refreshKey} />
            <CardInstall1 />
        </div>
      ) 
    }
      
      
    if (cardsType === 'Cards2') {
      return(
        <div>
            <Cards02 key={refreshKey} />
            <CardInstall2 />
        </div>
      ) 
    }
    return null
  }

  return (
    <div className='p-4 min-h-screen text-white'>
      <h1 className='text-4xl font-bold'>Cards Sections</h1>
      <p className='text-sm text-gray-400 py-1'>These are some of the Cards Sections</p>
      
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

      <div className='mt-4 rounded-lg overflow-hidden'>
        {activeTab === 'preview' ? (
          <div className='relative w-full'>
            {renderCardsComponent()}
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
                {CardsCode}
              </code>
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}

export default CardsSection