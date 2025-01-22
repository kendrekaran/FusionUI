"use client";

import { cn } from "@/lib/utils";
import AnimatedShinyText from "./ui/animated-shiny-text";
import { FaArrowRight, FaGithub, FaStar } from "react-icons/fa";
import { Button } from "./ui/button";
import { Spotlight } from "./ui/spotlight";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const techStackVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="text-white bg-black relative flex h-[92vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl px-32 text-center gap-4"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        className={cn(
          "group rounded-full border text-base text-white transition-all ease-in hover:cursor-pointer border-white/5 bg-neutral-900 hover:bg-neutral-800 z-50 mb-10",
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:duration-300 hover:text-neutral-400">
          <span>✨ Introducing Fusion UI</span>
          <FaArrowRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className="text-6xl font-bold leading-tight"
      >
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gradient-to-b from-white via-gray-200 to-gray-600 bg-clip-text text-transparent"
        >
          Reusable{" "}
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          UI Components
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="bg-gradient-to-b from-white via-gray-200 to-gray-600 bg-clip-text text-transparent"
        >
          {" "}for
        </motion.span>
        <br />
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="bg-gradient-to-b from-white via-gray-200 to-gray-600 bg-clip-text text-transparent"
        >
          Effortless Development
        </motion.span>
      </motion.div>

      <motion.div
        variants={itemVariants}
      >
        <p className="text-lg text-gray-400">Streamline Your Workflow with Modular and Scalable Design</p>
      </motion.div>

      <motion.div 
        variants={techStackVariants}
        className="w-[50vw] overflow-hidden pt-16"
      >
        <div className="animate-[marquee_20s_linear_infinite] flex whitespace-nowrap hover:pause">
          <motion.div 
            className="flex justify-center items-center gap-8 px-4 h-32"
            whileHover={{ scale: 1.05 }}
          >
            {[
              { src: "Aceternity.svg", alt: "Aceternityui", size: "h-44 w-44" },
              { src: "Nextjs.svg", alt: "Nextjs", size: "h-24 w-24" },
              { src: "Shadcn.svg", alt: "Shadcn", size: "h-28 w-28" },
              { src: "tailwind.svg", alt: "Tailwind", size: "h-32 w-32" },
              { src: "Aceternity.svg", alt: "Aceternityui", size: "h-44 w-44" },
              { src: "Nextjs.svg", alt: "Nextjs", size: "h-24 w-24" },
              { src: "Shadcn.svg", alt: "Shadcn", size: "h-28 w-28" },
              { src: "tailwind.svg", alt: "Tailwind", size: "h-32 w-32" },
              { src: "Aceternity.svg", alt: "Aceternityui", size: "h-44 w-44" },
              { src: "Nextjs.svg", alt: "Nextjs", size: "h-24 w-24" },
              { src: "Shadcn.svg", alt: "Shadcn", size: "h-28 w-28" },
              { src: "tailwind.svg", alt: "Tailwind", size: "h-32 w-32" },
            ].map((icon, index) => (
              <motion.img
                key={index}
                src={icon.src}
                alt={icon.alt}
                className={icon.size}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            ))}
            {/* Repeat the images */}
            {/* ... (repeat the same image set twice more) */}
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className="z-50 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
      >
        <Link href="/components">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="relative group bg-white hover:bg-gray-50 text-black shadow-lg transition-all duration-300 ease-in-out w-full sm:w-auto px-4"
            >
              <span className="text-base font-medium pr-2">
                Browse Components
              </span>
              <FaArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </Link>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            className="relative group border bg-black hover:bg-gray-900 text-white shadow-lg transition-all duration-300 ease-in-out w-full sm:w-auto"
          >
            <FaGithub className="w-5 h-5 mr-2" />
            <span className="text-base font-semibold">
              Star us on Github
            </span>
            <FaStar className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:scale-110" />
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}