"use client";
 
import { cn } from "@/lib/utils";
import AnimatedShinyText from "./ui/animated-shiny-text";
import { FaArrowRight, FaGithub, FaStar } from "react-icons/fa";
import { Button } from "./ui/button";
import { Spotlight } from "./ui/spotlight";
import Link from "next/link";


 
export function Hero() {
  return(
    <div className="text-white bg-black relative flex h-[92vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg  md:shadow-xl px-32 text-center gap-4">

        
        <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
        />
     
        <div
        className={cn(
        "group rounded-full border   text-base text-white transition-all ease-in hover:cursor-pointer  border-white/5 bg-neutral-900 hover:bg-neutral-800 z-50 mb-10 ",
        )}
        >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out  hover:duration-300 hover:text-neutral-400">
            <span>✨ Introducing Fusion UI</span>
            <FaArrowRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
        </div>

        <div className="text-6xl font-bold leading-tight ">
            <span className="bg-gradient-to-b from-white via-gray-200 to-gray-600 bg-clip-text text-transparent">Reusable </span>
            <span className=" bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            UI Components
            </span>
            <span className="bg-gradient-to-b from-white via-gray-200 to-gray-600 bg-clip-text text-transparent"> for</span>
            <br /> 
            <span className="bg-gradient-to-b from-white via-gray-200 to-gray-600 bg-clip-text text-transparent">Effortless Development</span>
        </div>

        <div>
            <p className="text-lg text-gray-400">Streamline Your Workflow with Modular and Scalable Design</p>
        </div>

        <div className="w-[50vw] overflow-hidden pt-16">
            <div className="animate-[marquee_20s_linear_infinite] flex whitespace-nowrap">
                {/* First set of icons */}
                <div className="flex justify-center items-center gap-8 px-4 h-32">
                <img src="Aceternity.svg" alt="Aceternityui" className="h-44 w-44" />
                <img src="Nextjs.svg" alt="Aceternityui" className="h-24 w-24" />
                <img src="Shadcn.svg" alt="Aceternityui" className="h-28 w-28" />
                <img src="tailwind.svg" alt="Aceternityui" className="h-32 w-32" />
               
                <img src="Aceternity.svg" alt="Aceternityui" className="h-44 w-44" />
                <img src="Nextjs.svg" alt="Aceternityui" className="h-24 w-24" />
                <img src="Shadcn.svg" alt="Aceternityui" className="h-28 w-28" />
                <img src="tailwind.svg" alt="Aceternityui" className="h-32 w-32" />
               
                <img src="Aceternity.svg" alt="Aceternityui" className="h-44 w-44" />
                <img src="Nextjs.svg" alt="Aceternityui" className="h-24 w-24" />
                <img src="Shadcn.svg" alt="Aceternityui" className="h-28 w-28" />
                <img src="tailwind.svg" alt="Aceternityui" className="h-32 w-32" />
                </div>
            </div>
        </div>

        <div className="z-50 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <Link href="/component">
                <Button 
                    className="relative group bg-white hover:bg-gray-50 text-black shadow-lg transition-all duration-300 ease-in-out w-full sm:w-auto px-4"
                >
                    <span className="text-base font-medium pr-2">
                    Browse Components
                    </span>
                    <FaArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
            </Link>

            <Button 
                className="relative group border bg-black hover:bg-gray-900 text-white shadow-lg transition-all duration-300 ease-in-out w-full sm:w-auto"
            >
                <FaGithub className="w-5 h-5 mr-2" />
                <span className="text-base font-semibold">
                Star us on Github
                </span>
                <FaStar className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:scale-110" />
            </Button>
        </div>

    </div>
  )
}