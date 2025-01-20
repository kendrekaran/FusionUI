import React from 'react'
import { PageHeader } from '../Header'

const Introduction = () => {
  return (
    <div className="mx-auto max-w-5xl space-y-12">
        <div className="flex items-center space-x-1 text-muted-foreground">
            <span>Docs</span>
            <span>/</span>
            <span>Introduction</span>
        </div>

        <PageHeader
            title="Introduction"
            description="Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source."
        />

        <div className="space-y-6">
            <p className="leading-7">
            This is <span className="font-semibold">NOT</span> a component library. It&apos;s a collection of re-usable components that you can copy and paste into your apps.
            </p>

            <div className="space-y-4">
            <h3 className="text-xl font-semibold">What do you mean by not a component library?</h3>
            <p className="leading-7">
                I mean you do not install it as a dependency. It is not available or distributed via npm.
            </p>
            </div>

            <p className="leading-7">
            Pick the components you need. Copy and paste the code into your project and customize to your needs. The code is yours.
            </p>

        
        </div>
    </div>
  )
}

export default Introduction
