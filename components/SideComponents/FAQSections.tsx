'use client'

import React, { useCallback, useMemo, useState } from 'react'
import { Copy, Check } from 'lucide-react'
import FAQ01 from '../SingleComponent.tsx/FAQ01'

type FAQType = 'FAQ1' | 'FAQ2'
type TabType = 'preview' | 'code'

interface FAQSectionsProps {
  value?: FAQType
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

const FAQ_CODE_MAP: Record<FAQType, string> = {
  FAQ1: `import React from 'react'
// FAQ 1 component code here...
`,
  FAQ2: `import React from 'react'
// FAQ 2 component code here...
`
}

const FAQSection = ({ value }: FAQSectionsProps) => {
  const [state, setState] = useState<ComponentState>({
    refreshKey: 0,
    activeTab: 'preview',
    copied: false
  })

  const { refreshKey, activeTab, copied } = state

  const FAQCode = useMemo(() => {
    return value ? FAQ_CODE_MAP[value] : ''
  }, [value])

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
      await navigator.clipboard.writeText(FAQCode)
      setState(prev => ({ ...prev, copied: true }))
      setTimeout(() => {
        setState(prev => ({ ...prev, copied: false }))
      }, COPY_TIMEOUT)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }, [FAQCode])

  const renderFAQComponent = () => {
    if (!value) return null
    if (value === 'FAQ1') return <FAQ01 key={refreshKey} />
    return null
  }

  return (
    <div className='p-4 min-h-screen text-white '>
      <h1 className='text-4xl font-bold'>FAQ Sections</h1>
      <p className='text-sm text-gray-400 py-1'>These are some of the FAQ Sections</p>
      
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
          <img 
            src="refresh.svg" 
            alt="refresh" 
            className="h-4 w-4 text-white"
            width={16}
            height={16}
          />
        </button>
      </div>

      <div className='mt-4 rounded-lg overflow-hidden border border-gray-800'>
        {activeTab === 'preview' ? (
          <div className='relative w-full'>
            {renderFAQComponent()}
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
                {FAQCode}
              </code>
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}

export default FAQSection