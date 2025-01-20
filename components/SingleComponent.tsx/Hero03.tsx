"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero03() {
  const [isDark, setIsDark] = useState(true)

  return (
    <div className={`h-[60vh] transition-colors duration-300 ${isDark ? "dark bg-zinc-950" : "bg-zinc-50"}`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between p-4">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-3xl font-bold text-purple-600">K</span>
          </motion.div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => setIsDark(!isDark)} className="text-foreground">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground">
              <Menu size={20} />
            </Button>
          </div>
        </nav>
        <div className="grid pt-16 grid-cols-1 px-8 items-center lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="space-y-2">
              <p className={`text-5xl font-bold ${isDark ? "text-zinc-600" : "text-zinc-400"}`}>Hi i&apos;m </p>
              <h1 className="text-6xl font-bold text-foreground">Karan</h1>
            </div>
            <p className="text-sm font-bold text-muted-foreground">A Front End Developer from India.</p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }}>
            <Button className={`gap-2 bg-black-600 border border-gray-400 hover:bg-zinc-800 ${isDark ? "text-white" : "text-black hover:text-white"}`}>
                Hire me
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative w-full"
          >
            {isDark ? 
            <img
              src="https://i.pinimg.com/736x/d2/f2/08/d2f2086efdf6950a384bbf40c152992f.jpg"
              alt="portrait"
              className="h-[40vh] w-[20vw] rounded-2xl object-cover"
            /> : 
            <img
              src="https://i.pinimg.com/736x/d2/f2/08/d2f2086efdf6950a384bbf40c152992f.jpg"
              alt="portrait"
              className="h-[40vh] w-[20vw] rounded-2xl object-cover shadow-xl shadow-black"
            />
            }
            
          </motion.div>
        </div>
      </div>
    </div>
  )
}

