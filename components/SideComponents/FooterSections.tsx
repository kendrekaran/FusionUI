'use client'

import React, { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { Footer01 } from '../SingleComponent.tsx/Footer01'

const FooterSection = () => {
  const [refreshKey, setRefreshKey] = useState(0)
  const [activeTab, setActiveTab] = useState('preview')
  const [copied, setCopied] = useState(false)

  const handleRefresh = () => {
    setRefreshKey(prevKey => prevKey + 1)
  }

  const FooterCode = `Code`

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(FooterCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className='p-4 bg-gray-950 min-h-screen text-white'>
      <h1 className='text-4xl font-bold'>Footer Sections</h1>
      <p className='text-sm text-gray-400 py-1'>These are some of the Footer Sections</p>
      
      <div className='flex items-center gap-4 mt-4'>
        <div className='flex bg-black border border-gray-600 rounded-lg'>
          <button
            onClick={() => setActiveTab('preview')}
            className={`px-4 py-2 rounded-md transition-all ${
              activeTab === 'preview'
                ? 'bg-[#2E2F2F] text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`px-4 py-2 rounded-md transition-all ${
              activeTab === 'code'
                ? 'bg-[#2E2F2F] text-white'
                : 'text-black400 hover:text-white'
            }`}
          >
            Code
          </button>
        </div>
        
        <button
          onClick={handleRefresh}
          className="bg-[#2E2F2F] p-2 rounded-lg hover:bg-gray-700 transition-colors"
        >
          <img src="refresh.svg" alt="refresh"   className="h-4 w-4 text-white " />
        </button>
      </div>

      <div className='mt-4 rounded-lg overflow-hidden border border-gray-800'>
        {activeTab === 'preview' ? (
          <div className=''>
            <Footer01 key={refreshKey}/>
          </div>
        ) : (
          <div className='relative'>
            <button
              onClick={copyToClipboard}
              className="absolute right-4 top-4 p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4 text-gray-400" />
              )}
            </button>
            <pre className='p-4 h-96 bg-gray-950 overflow-x-auto overflow-y-auto scrollbar'>
              <code className='text-gray-300 text-sm'>
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