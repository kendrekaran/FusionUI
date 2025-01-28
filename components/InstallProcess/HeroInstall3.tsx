"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Clipboard, Terminal } from "lucide-react"
import { useState } from "react"

export default function HeroInstall3() {
  const [copied, setCopied] = useState<number | null>(null)
  const [activeStep, setActiveStep] = useState<number>(1)

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(index)
      setTimeout(() => setCopied(null), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-12">
          <Terminal className="w-5 h-5 text-neutral-400" />
          <h1 className="text-xl font-medium text-neutral-200">
            Installation
          </h1>
        </div>

        <div className="space-y-16 relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-12 bottom-12 w-[1px] bg-neutral-800 transform -translate-x-1/2" />

          {/* Step 1 */}
          <div 
            className="flex gap-6 relative group"
            onMouseEnter={() => setActiveStep(1)}
          >
            <div className={`flex-none w-12 h-12 rounded-full flex items-center justify-center text-sm z-10 relative border transition-colors duration-500
              ${activeStep === 1 
                ? 'bg-white text-black border-white' 
                : 'bg-black text-white border-neutral-800'}`}
            >
              01
            </div>
            <div className="flex-1 space-y-3 pt-2">
              <h2 className="text-base font-medium text-neutral-200">Install dependencies</h2>
              <Card className="bg-neutral-900 border-neutral-800 p-4">
                <div className="flex justify-between items-center gap-4">
                  <code className="font-mono text-sm text-neutral-400">
                    npm i framer-motion lucide-react
                  </code>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => copyToClipboard("npm i framer-motion lucide-react", 0)}
                    className="hover:bg-neutral-800"
                  >
                    {copied === 0 ? (
                      <Check className="w-4 h-4 text-neutral-400" />
                    ) : (
                      <Clipboard className="w-4 h-4 text-neutral-400" />
                    )}
                  </Button>
                </div>
              </Card>
            </div>
          </div>

          {/* Step 2 */}
          <div 
            className="flex gap-6 relative group"
            onMouseEnter={() => setActiveStep(2)}
          >
            <div className={`flex-none w-12 h-12 rounded-full flex items-center justify-center text-sm z-10 relative border transition-colors duration-500
              ${activeStep === 2 
                ? 'bg-white text-black border-white' 
                : 'bg-black text-white border-neutral-800'}`}
            >
              02
            </div>
            <div className="flex-1 space-y-3 pt-2">
              <h2 className="text-base font-medium text-neutral-200">Add utility functions</h2>
              <Card className="bg-neutral-900 border-neutral-800 p-4">
                <div className="flex justify-between items-center">
                  <pre className="font-mono text-sm text-neutral-400">
                    <code>{`import { cn } from "@/lib/utils"
import { twMerge } from "tailwind-merge"`}</code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => copyToClipboard(`import { cn } from "@/lib/utils"\nimport { twMerge } from "tailwind-merge"`, 1)}
                    className="hover:bg-neutral-800"
                  >
                    {copied === 1 ? (
                      <Check className="w-4 h-4 text-neutral-400" />
                    ) : (
                      <Clipboard className="w-4 h-4 text-neutral-400" />
                    )}
                  </Button>
                </div>
              </Card>
            </div>
          </div>

          {/* Step 3 */}
          <div 
            className="flex gap-6 relative group"
            onMouseEnter={() => setActiveStep(3)}
          >
            <div className={`flex-none w-12 h-12 rounded-full flex items-center justify-center text-sm z-10 relative border transition-colors duration-500
              ${activeStep === 3 
                ? 'bg-white text-black border-white' 
                : 'bg-black text-white border-neutral-800'}`}
            >
              03
            </div>
            <div className="flex-1 space-y-1 pt-2">
              <h2 className="text-base font-medium text-neutral-200">Create components</h2>
              <p className="text-sm text-neutral-500">
                Set up your components directory and add necessary files
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}