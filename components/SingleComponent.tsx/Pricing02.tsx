"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { GlareCard } from '../ui/glare-card';

interface PricingPlanProps {
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  className?: string;
}

interface PricingData {
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

const PricingPlan: React.FC<PricingPlanProps> = ({ 
  title, 
  subtitle, 
  price, 
  features, 
  isPopular, 
  className 
}) => (
  <GlareCard 
    className={`flex flex-col items-center justify-center  mx-auto w-60  ${
      isPopular ? 'bg-slate-950 ' : ''
    } ${className ?? ''}`}
  >
    <div className="w-full p-6 space-y-4 ">
      <div className=''>
        <h3 className="text-sm font-bold text-gray-400">{subtitle}</h3>
        <h2 className="text-2xl font-bold mt-2">{title}</h2>
        <p className="text-xl font-semibold text-purple-500 mt-1">
          {price} {price !== 'Custom' && <span className="text-lg">/project</span>}
        </p>
      </div>
      <ul className="space-y-2 text-sm text-gray-400">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  </GlareCard>
);

const pricingData: PricingData[] = [
  {
    title: "Basic Plan",
    subtitle: "For Basic Use",
    price: "$10",
    features: [
      "React + Tailwind Landing Page",
      "Basic Responsive Design",
      "Lightweight Animations",
      "Only 1 Pages",
      "2 Days Delivery"
    ]
  },
  {
    title: "Standard Plan",
    subtitle: "Most Popular",
    price: "$50",
    features: [
      "Frontend + Backend Web Application",
      "React + Tailwind + Framer Motion",
      "Advanced Animations",
      "upto 5 Page",
      "6 Days Delivery"
    ],
    isPopular: true
  },
  {
    title: "Premium Plan",
    subtitle: "For Professionals",
    price: "Custom",
    features: [
      "Advanced Projects (including Deployment)",
      "Web3 Projects",
      "Bug Solving",
      "Dedicated Zoom Meet",
      "Unlimited Revision"
    ]
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const Pricing02: React.FC = () => {
  return (
    <section className=" w-full py-8 px-4px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl mb-12 lg:text-4xl font-bold text-center bg-gradient-to-r from-[#f1f5f966] via-[#f1f5f9] via-51% to-[#f1f5f966] text-transparent bg-clip-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Pricing <span className="text-purple-500">Plans</span>
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  "
        >
          {pricingData.map((plan) => (
            <motion.div
              key={plan.title}
              variants={itemVariants}
              className="h-full"
            >
              <PricingPlan {...plan} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing02;