'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '../ui/button';
import { Check } from 'lucide-react';

const plans = [
  {
    title: 'Basic',
    price: 29,
    features: [
      'Keyword optimization',
      'Automated meta tags',
      'SEO monitoring',
      'Monthly reports'
    ]
  },
  {
    title: 'Pro',
    price: 79,
    features: [
      'Keyword optimization',
      'Automated meta tags',
      'SEO monitoring',
      'Monthly reports',
    ],
    isPopular: true
  },
  {
    title: 'Business',
    price: 149,
    features: [
      'Keyword optimization',
      'Automated meta tags',
      'SEO monitoring',
      'Monthly reports',
    ]
  }
];

export function PricingSection() {
  return (
    <section id="price" className="py-8 bg-black border border-gray-400 rounded-3xl">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Pricing</h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Choose the right plan to meet your SEO needs and start optimizing today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto ">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-6 rounded-xl backdrop-blur-sm border ${
                plan.isPopular
                  ? 'bg-purple-900/20 border-purple-500/50'
                  : 'bg-zinc-900 border-border/50'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-500 text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-lg font-bold mb-2">{plan.title}</h3>
              <div className="mb-6">
                <span className="text-2xl font-bold">$</span>
                <span className="text-2xl font-bold">
                  <PriceCounter value={plan.price} />
                </span>
                <span className="text-muted-foreground">/mo</span>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.isPopular
                    ? 'bg-purple-500 hover:bg-purple-600 text-white'
                    : 'bg-purple-400/50 hover:bg-background hover:text-purple-600'
                }`}
              >
                Join Waitlist
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface PriceCounterProps {
  value: number;
  duration?: number;
}

export function PriceCounter({ value, duration = 1 }: PriceCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = value / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16.67); // 60fps

      return () => clearInterval(timer);
    }
  }, [value, duration, isInView]);

  return <span ref={ref}>{count}</span>;
}
