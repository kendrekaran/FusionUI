import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FolderKanban, Smile, Users, Users2, LucideIcon } from 'lucide-react';
import { useCounter } from '@/utils/useCounter';

interface StatData {
  id: number;
  icon: LucideIcon;
  label: string;
  value: number;
  suffix?: string;
  isDecimal?: boolean;
}

const stats: StatData[] = [
  { id: 1, icon: FolderKanban, label: 'PROJECT', value: 300, suffix: '+' },
  { id: 2, icon: Smile, label: 'PLEASURE', value: 8.9, isDecimal: true },
  { id: 3, icon: Users, label: 'CUSTOMER', value: 3000, suffix: '+' },
  { id: 4, icon: Users2, label: 'TEAM MEMBERS', value: 23 },
];

interface StatItemProps {
  icon: LucideIcon;
  label: string;
  value: number;
  suffix?: string;
  isDecimal?: boolean;
  index: number;
}

const StatItem = ({ 
  icon: Icon, 
  label, 
  value, 
  suffix = '', 
  isDecimal = false, 
  index
}: StatItemProps) => {
  // Create ref of type HTMLElement to match useCounter expectations
  const itemRef = useRef<HTMLElement>(null);
  const count = useCounter(itemRef, value);

  return (
    <motion.div
      ref={itemRef as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="text-center"
    >
      <Icon className="w-8 h-8 text-purple-400 mx-auto mb-4" />
      <motion.p
        className="text-4xl font-bold text-purple-400 mb-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {isDecimal ? count / 10 : count}
        {suffix}
      </motion.p>
      <p className="text-white">{label}</p>
    </motion.div>
  );
};

const Stats01 = () => {
  return (
    <div className="bg-black py-8 border border-gray-600 rounded-3xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.id}
              icon={stat.icon}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              isDecimal={stat.isDecimal}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats01;