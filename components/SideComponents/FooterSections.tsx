'use client'

import React, { useCallback, useMemo, useState } from 'react'
import { Copy, Check, RefreshCw } from 'lucide-react'
import { Footer01 } from '../SingleComponent.tsx/Footer01'
import Footer02 from '../SingleComponent.tsx/Footer02'
import { usePathname } from 'next/navigation'
import FooterInstall1 from '../InstallProcess/FooterInstall1'
import FooterInstall2 from '../InstallProcess/FooterInstall2'

type FooterType = 'Footer1' | 'Footer2'
type TabType = 'preview' | 'code'

interface FooterSectionsProps {
  value?: FooterType
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

const Footer_CODE_MAP: Record<FooterType, string> = {
  Footer1: `import React from 'react'
// Footer 1 component code here...
`,
  Footer2: `import React from 'react'
// Footer 2 component code here...
`
}

const FooterSection = () => {
  const pathname = usePathname()

  const [state, setState] = useState<ComponentState>({
    refreshKey: 0,
    activeTab: 'preview',
    copied: false
  })

  const { refreshKey, activeTab, copied } = state 

    const footerType = useMemo<FooterType | null>(() => {
      if (pathname === '/footer/1') return 'Footer1'
      if (pathname === '/footer/2') return 'Footer2'
      return null
    }, [pathname])

  const FooterCode = useMemo(() => {
    return footerType ? Footer_CODE_MAP[footerType] : ''
  }, [footerType])

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
      await navigator.clipboard.writeText(FooterCode)
      setState(prev => ({ ...prev, copied: true }))
      setTimeout(() => {
        setState(prev => ({ ...prev, copied: false }))
      }, COPY_TIMEOUT)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }, [FooterCode])

  const renderFooterComponent = () => {
    if (footerType === 'Footer1') {
         return(
           <div>
               <Footer01 key={refreshKey} />
               <FooterInstall1 />
           </div>
         ) 
       }
       if (footerType === 'Footer2') {
        return(
          <div>
              <Footer02 key={refreshKey} />
              <FooterInstall2 />
          </div>
        ) 
      }
   return null
  }

  return (
    <div className='p-4 min-h-screen text-white'>
      <h1 className='text-4xl font-bold'>Footer Sections</h1>
      <p className='text-sm text-gray-400 py-1'>These are some of the Footer Sections</p>
      
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

      <div className='mt-4 rounded-lg overflow-hidden '>
        {activeTab === 'preview' ? (
          <div className='relative w-full'>
            {renderFooterComponent()}
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
                {FooterCode}
              </code>
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}

export default FooterSection