'use client'

import { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ01() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section id="faq" className="w-full py-16 border border-gray-600 rounded-3xl ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg "></div>
            <h2 className="relative text-xl font-bold tracking-tight sm:text-3xl">
              Frequently Asked Questions
            </h2>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-full mt-8">
          <Accordion 
            type="single" 
            collapsible 
            className="w-full max-w-3xl px-4 sm:px-6 space-y-4"
          >
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`
                  relative rounded-xl bg-gray-800/50 backdrop-blur-sm
                  border border-gray-700/50
                  transition-all duration-300 ease-in-out
                  ${hoveredIndex === i ? 'scale-[1.02] ': ''}
                `}
              >
                <AccordionTrigger 
                  className="px-6 py-4 text-base font-semibold text-gray-100 hover:text-purple-400 transition-colors duration-200"
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  {faq.answer}
                </AccordionContent>
                {hoveredIndex === i && (
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 rounded-xl blur-xl transition-opacity duration-500" />
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

const faqs = [
  {
    question: "What is Quantum Computing?",
    answer: "Quantum computing is a type of computation that takes advantage of quantum mechanics, allowing for solving complex problems that classical computers cannot handle efficiently."
  },
  {
    question: "How does blockchain work?",
    answer: "Blockchain is a distributed ledger technology where data is stored in blocks that are linked together in a chain, making it secure and transparent."
  },
  {
    question: "What are the benefits of remote work?",
    answer: "Remote work offers flexibility, better work-life balance, cost savings, and access to a global talent pool."
  },
  {
    question: "What is 5G technology?",
    answer: "5G is the fifth generation of mobile network technology, offering faster speeds, lower latency, and more reliable connections compared to previous generations."
  },
  {
    question: "How does machine learning impact industries?",
    answer: "Machine learning is revolutionizing industries by enabling automation, improving decision-making, and creating personalized experiences for customers."
  },
  {
    question: "What is the Internet of Things (IoT)?",
    answer: "IoT refers to the network of physical devices embedded with sensors and software that allow them to connect and exchange data over the internet."
  },
  {
    question: "What are the key features of smart cities?",
    answer: "Smart cities use technology to enhance urban living, including smart transportation systems, efficient energy use, improved public services, and better connectivity."
  },
  {
    question: "Why is cybersecurity important?",
    answer: "Cybersecurity is essential to protect sensitive data, prevent cyberattacks, and maintain the privacy and integrity of digital systems."
  },
  {
    question: "What are augmented and virtual reality?",
    answer: "Augmented reality (AR) overlays digital content on the real world, while virtual reality (VR) immerses users in a fully digital environment."
  },
  {
    question: "What are the challenges of artificial intelligence?",
    answer: "AI faces challenges such as ethical concerns, data privacy issues, and the need for transparency in decision-making processes."
  }
];

export default FAQ01;