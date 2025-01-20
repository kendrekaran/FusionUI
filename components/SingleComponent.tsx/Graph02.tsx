"use client"

import { useState } from "react"
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { Button } from "@/components/ui/button"
import { Sun, Moon, User, LockIcon } from "lucide-react"

const chartData1 = [
  { name: "1", value: 40000000 },
  { name: "2", value: 35000000 },
  { name: "3", value: 45000000 },
  { name: "4", value: 30000000 },
  { name: "5", value: 35000000 },
  { name: "6", value: 42000000 },
  { name: "7", value: 41780160 },
]

const chartData2 = [
  { name: "1", value: 2800000 },
  { name: "2", value: 3100000 },
  { name: "3", value: 2900000 },
  { name: "4", value: 3300000 },
  { name: "5", value: 2950000 },
  { name: "6", value: 3000000 },
  { name: "7", value: 3150950 },
]

export default function Graph02() {
  const [isDark, setIsDark] = useState(true)

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? "dark bg-black" : "bg-gray-50"}`}>
   
      <div className="flex">
       
        <div className="flex-1 p-6">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-4">                 
            <span className={`text-2xl font-bold ${isDark ? "dark text-white" : "text-black"}`}>
                Dashboard</span>
              
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsDark(!isDark)} className="text-gray-400">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
          </div>

          <div className="mb-8 flex gap-4">
            <div className="flex-1 rounded-xl bg-[#1f1f1f] p-4">
              <div className="mb-2 text-sm text-gray-400">Total Users</div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full flex items-center justify-center bg-blue-500/20" >
                 <div className="font-bold text-xl"><User/> </div>
                </div>
                <span className="text-2xl font-bold text-white">850 400</span>
              </div>
            </div>
            <div className="flex-1 rounded-xl bg-[#1f1f1f] p-4">
              <div className="mb-2 text-sm text-gray-400">Total Locked</div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full flex items-center justify-center bg-blue-500/20" >
                 <div className="font-bold text-xl"><LockIcon/> </div>
                </div>
                <span className="text-2xl font-bold text-white">$850.9 m</span>
              </div>
            </div>
          </div>

          <div className="mb-8 grid gap-4 lg:grid-cols-2">
            <div className="rounded-xl bg-[#1f1f1f] p-4">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-2xl font-bold text-white">$41 780 160</span>
                <span className="text-sm text-green-400">+6.66</span>
              </div>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData1}>
                    <defs>
                      <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.2} />
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="#4B5563" />
                    <YAxis stroke="#4B5563" />
                    <Area type="monotone" dataKey="value" stroke="#3B82F6" fill="url(#gradient1)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="rounded-xl bg-[#1f1f1f] p-4">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-2xl font-bold text-white">$3 150 950</span>
                <span className="text-sm text-red-400">-5.28</span>
              </div>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData2}>
                    <defs>
                      <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#60A5FA" stopOpacity={0.2} />
                        <stop offset="100%" stopColor="#60A5FA" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="#4B5563" />
                    <YAxis stroke="#4B5563" />
                    <Area type="monotone" dataKey="value" stroke="#60A5FA" fill="url(#gradient2)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-xl bg-[#1f1f1f] p-4">
              <div className="mb-4 text-lg font-semibold text-white">IGOs Participated</div>
              <div className="flex items-center gap-8">
                <div className="relative h-32 w-32">
                  <svg className="h-full w-full" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#2563EB"
                      strokeWidth="2"
                      strokeDasharray="13.3, 100"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white">
                    2/10
                  </div>
                </div>
                <div className="text-lg text-blue-400">13.3%</div>
              </div>
            </div>

            <div className="rounded-xl bg-[#1f1f1f] p-4">
              <div className="mb-4 text-lg font-semibold text-white">Current Staking Pool</div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">45</div>
                  <div className="text-sm text-gray-400">Days</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">32%</div>
                  <div className="text-sm text-gray-400">APY</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">20</div>
                  <div className="text-sm text-gray-400">Left</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

