
import { motion } from 'framer-motion';
import { Award, Heart, Target, Users } from 'lucide-react';

const team = [
  {
    name: 'Alex Thompson',
    role: 'Creative Director',
    image: 'https://i.pinimg.com/474x/01/35/4d/01354d6791d6dbe3fa30a282aed251ca.jpg',
    bio: 'Leading creative vision with 10+ years of experience.'
  },
  {
    name: 'Sarah Chen',
    role: 'Lead Designer',
    image: 'https://i.pinimg.com/474x/92/8e/5e/928e5e0e02042f5f707299d7cbdd55eb.jpg',
    bio: 'Expert in UI/UX with a passion for beautiful design.'
  },
  {
    name: 'Marcus Rodri',
    role: 'Technical Lead',
    image: 'https://i.pinimg.com/474x/e6/cc/0c/e6cc0c25b112b08b9cb4abb3709d29cf.jpg',
    bio: 'Bridging design and technology with solutions.'
  }
];

const Team01 = () => {
  return (
    <div className="bg-black p-8 border border-gray-600 rounded-3xl " id="about-us">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Meet Our <span className="text-purple-400">Team</span>
          </h3>
          <p className="text-gray-400 max-w-2xl px-16 text-sm">
            We are a team of passionate designers and developers dedicated to creating
            exceptional digital experiences that inspire and engage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-black/50 rounded-xl overflow-hidden group"
            >
              <div className="aspect-square overflow-hidden">
              <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full filter grayscale object-cover transform group-hover:scale-110 transition-transform duration-500"
                />

              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-white mb-1">{member.name}</h4>
                <p className="text-purple-400 mb-3 text-base">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio} </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team01;