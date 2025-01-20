import React from 'react';
import {  ChevronRight } from 'lucide-react';
import CodeBlock from '../CodeBlock';

function Installation() {

  return (
    <div className="min-h-screen  text-white ">
      <div className="">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Fusion UI
            </h1>
            <p className="text-xl text-zinc-400">
              Install and configure Next.js
            </p>
          </div>

          {/* Info Box */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
            <p className="text-zinc-300">
              If you&apos;re using Next.js 15, see the{' '}
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Next.js 15 + React 19 guide
              </a>
              .
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-800 text-sm font-medium">
                  1
                </span>
                <h2 className="text-2xl font-semibold">Create project</h2>
              </div>
              <p className="text-zinc-400 pl-11">
                Run the <code className="bg-zinc-800 px-2 py-1 rounded">init</code>{' '}
                command to create a new Next.js project or to setup an existing one:
              </p>
              <div className="pl-11">
                <CodeBlock
                  command="npx create-next-app@latest"
                  id="create-project"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-800 text-sm font-medium">
                  2
                </span>
                <h2 className="text-2xl font-semibold">Install Shadcn UI</h2>
              </div>
              <div className="pl-11 space-y-4">
                <CodeBlock
                  command="npx shadcn@latest init"
                  id="install-shadcn"
                />
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
                  <p className="text-zinc-300">
                    You can use the <code className="bg-zinc-800 px-2 py-1 rounded">-d</code> flag 
                    for defaults i.e. <code className="bg-zinc-800 px-2 py-1 rounded">new-york</code>,{' '}
                    <code className="bg-zinc-800 px-2 py-1 rounded">zinc</code> and{' '}
                    <code className="bg-zinc-800 px-2 py-1 rounded">yes</code> for the css variables.
                  </p>
                </div>
                <CodeBlock
                  command="npx shadcn@latest init -d"
                  id="install-shadcn-defaults"
                />
              </div>
            </div>

            {/* Step 3 */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-800 text-sm font-medium">
                  3
                </span>
                <h2 className="text-2xl font-semibold">Configure components.json</h2>
              </div>
              <p className="text-zinc-400 pl-11">
                You will be asked a few questions to configure <code className="bg-zinc-800 px-2 py-1 rounded">components.json</code>:
              </p>
              <div className="pl-11">
                <div className="bg-zinc-900 rounded-lg p-4 font-mono text-sm">
                  <div className="space-y-2 text-zinc-300">
                    <p><span className="text-zinc-500">1</span> Which style would you like to use? &gt; New York</p>
                    <p><span className="text-zinc-500">2</span> Which color would you like to use as base color? &gt; Zinc</p>
                    <p><span className="text-zinc-500">3</span> Do you want to use CSS variables for colors? &gt; no / yes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-800 text-sm font-medium">
                  4
                </span>
                <h2 className="text-2xl font-semibold">That&apos;s it</h2>
              </div>
              <p className="text-zinc-400 pl-11">
                You can now start adding components to your project.
              </p>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mt-12 pt-8 border-t border-zinc-800">
            <a
              href="#"
              className="group inline-flex items-center space-x-2 text-zinc-400 hover:text-white transition-colors"
            >
              <span>Next: Components</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Installation;