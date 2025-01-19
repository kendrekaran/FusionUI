"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Hero02() {
  return (
    <div className="relative border border-gray-600 rounded-3xl">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-background/0 dark:from-background dark:to-background/0" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-background to-background dark:from-blue-500/10" />
      <div className="container flex min-h-screen flex-col items-center justify-center gap-4 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-2 inline-block rounded-lg bg-blue-800/50 px-3 py-1 text-sm dark:bg-muted/50">
            New service available. Download now!
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl font-bold tracking-tight sm:text-5xl"
        >
          Elevate Your Business{" "}<br/>
          <span className="text-blue-500">with CloudPeak</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-[30rem] leading-normal text-gray-400 sm:text-sm"
        >
          Empowering Your Success with Cutting-Edge SaaS Solutions Built for
          Scalability, Efficiency, and Growth
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button size="lg" className="h-8 p-4 bg-blue-600 hover:bg-blue-900">
            Get Started now
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative mt-8 w-full max-w-5xl px-16"
        >
          <div className="relative rounded-xl border bg-black p-4 shadow-2xl">
            <img
              src="https://i.pinimg.com/736x/7b/67/1d/7b671d45a74cc4bcb07a6ec0839f9b78.jpg"
              alt="CloudPeak Dashboard"
              className="w-full rounded-lg"
            />
          </div>
          <div className="absolute -inset-x-20 -bottom-20 -z-10 h-64 bg-gradient-radial from-blue-500/20 to-transparent blur-2xl dark:from-blue-500/10" />
        </motion.div>
      </div>
    </div>
  )
}
