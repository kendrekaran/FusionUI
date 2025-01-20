'use client'

import { LineChart, Line, ResponsiveContainer } from "recharts"
import { motion } from "framer-motion"
import { Target } from "lucide-react"
import { LucideIcon, BarChart2, Bell, Brain, Search } from 'lucide-react';


const data = [
  { value: 40000 },
  { value: 35000 },
  { value: 45000 },
  { value: 55000 },
  { value: 35000 },
  { value: 40000 },
  { value: 45000 },
  { value: 35000 },
  { value: 50000 },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
}

export default function Graph01() {
  return (
    <div id="dash" className="w-full bg-black min-h-screen border border-gray-600 rounded-3xl  p-8 ">
      <div className="max-w-6xl mx-auto space-y-8">
        <motion.div 
          className="text-center space-y-4"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-xl md:text-3xl font-bold text-white max-w-3xl mx-auto leading-tight">
            Dashboard
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div 
            className="rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 space-y-4"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInScale}
            transition={{ duration: 0.5 }}
          >
            <div className="w-24 h-16 relative">
            <div >
              <Target className="text-purple-500"/>
            </div>

            </div>
            <h2 className="text-xl font-bold text-white">SEO Goal Setting</h2>
            <p className="text-zinc-400">
              Helps you set and achieve SEO goals with guided assistance.
            </p>
          </motion.div>

          <motion.div 
            className="rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 space-y-4"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInScale}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-4">
              <div className="flex justify-between items-baseline">
                <span className="text-zinc-400">Visibility</span>
                <div>
                  <span className="text-xl font-bold text-white">10.15%</span>
                  <span className="text-green-500 ml-1">+5.6%</span>
                </div>
              </div>
              <div className="h-[100px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#8b5cf6"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <h2 className="text-xl font-bold text-white">User-friendly dashboard</h2>
            <p className="text-zinc-400 text-sm">
              Perform complex SEO audits and optimizations with a single click.
            </p>
          </motion.div>

          {/* Visual Reports Card */}
          <motion.div 
            className="rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 space-y-4 md:col-span-2"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInScale}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="space-y-4">
              <div className="flex justify-between items-baseline">
                <span className="text-zinc-400">Traffic</span>
                <div>
                  <span className="text-xl font-bold text-white">59.8K</span>
                  <span className="text-green-500 ml-1">+10.7%</span>
                </div>
              </div>
              <div className="h-[100px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#8b5cf6"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <h2 className="text-xl font-bold text-white">Visual reports</h2>
            <p className="text-zinc-400">
              Visual insights into your site&apos;s performance.
            </p>
          </motion.div>


        </div>
      </div>
    </div>
  )
}


interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export function FeatureCard({ title, description, icon: Icon, className = '' }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 ${className}`}
    >
      <Icon className="w-10 h-10 text-purple-400 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}




const features = [
  {
    title: 'User-Friendly Dashboard',
    description: 'Perform complex SEO audits and optimizations with a single click.',
    icon: BarChart2,
  },
  {
    title: 'Visual Reports',
    description: "Visual insights into your site's performance.",
    icon: LineChart,
  },
  {
    title: 'SEO Goal Setting',
    description: 'Helps you set and achieve SEO goals with guided assistance.',
    icon: Target,
  },
  {
    title: 'Content Evaluation',
    description: 'Simple corrections for immediate improvements.',
    icon: Search,
  },
  {
    title: 'Smart Keyword Generator',
    description: 'Automatic suggestions and the best keywords to target.',
    icon: Brain,
  },
  {
    title: 'Automated Alerts',
    description: 'Automatic notifications about your SEO health, including quick fixes.',
    icon: Bell,
  },
];

export function FeaturesGrid() {
  return (
    <div id='features' className="py-24 h-screen bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Elevate your SEO efforts.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
        >
          Harness the power of AI, making search engine optimization intuitive and effective for all skill levels.
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              //@ts-expect-error i have no idea man
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}