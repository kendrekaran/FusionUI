'use client';

import { motion } from 'framer-motion';
import { ApertureIcon, Code2, FileKey2, Sparkles,  Star,  Zap} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Cover } from '../ui/cover';

export function Hero1() {
  const floatingElements = [
    { id: 1, left: 10, top: 40, icon: <ApertureIcon className="w-8 h-8 text-purple-500 sm:inline-block hidden" />},
    { id: 2, left: 50, top: 20, icon: <FileKey2 className="w-8 h-8 text-purple-500 hidden sm:inline-block" /> },
    { id: 3, left: 85, top: 70, icon: <Code2 className="w-8 h-8 text-purple-500 hidden sm:inline-block" /> },
  ];
  

  return (
    <div className="h-[30rem]   w-full  bg-grid-white/[0.2] py-20 relative flex items-center justify-center">
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center border border-gray-400 rounded-3xl bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div id='hero' className="w-full relative">
        <div className="relative container sm:pt-44 sm:pb-32 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/70 text-primary-foreground mb-8 border border-primary/20 z-50">
              <Sparkles className="h-3 w-3 mr-2" />
              <span>Transforming Ideas into Reality</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-6 z-50"
          >
            Build amazing websites <br /> with <Cover><span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Zen Ops</span></Cover>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="z-50 text-lg md:text-sm text-center text-muted-foreground max-w-2xl px-16 md:px-16 mx-auto mb-8"
          >
            Create stunning, high-performance web applications with our modern development solutions. Experience the perfect blend of design and functionality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="z-50 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="sm" className="bg-gradient-to-r text-white from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              Get Started
            </Button>
            <Button size="sm" variant="outline" className='bg-black text-white'>
              Learn More
            </Button>
          </motion.div>


          <div className="absolute inset-0 pointer-events-none">
            {floatingElements.map((element) => (
              <motion.div
                key={element.id} 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 1, 
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className="absolute"
                  style={{
                    left: `${element.left}%`,
                    top: `${element.top}%`,
                  }}
                  animate={{
                    y: [0, -20, 0], 
                    opacity: [1, 0.8, 1], 
                  }}
                  transition={{
                    duration: 3, 
                    repeat: Infinity, 
                    delay: 1 + element.id * 0.8, 
                    ease: "easeInOut", 
                  }}
                >
                  <div className="text-blue-500 w-6 h-6">{element.icon}</div> 
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}