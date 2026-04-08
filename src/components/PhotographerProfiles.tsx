import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Star, Zap, CheckCircle, Clock } from 'lucide-react';
import { useState } from 'react';

const photographers = [
  {
    name: 'Sarah Chen',
    rating: 4.9,
    reviews: 127,
    onTimeScore: 98,
    avgDelivery: '36 hours',
    badges: ['Express', 'Verified'],
    specialty: 'Wedding & Events',
    price: '$1,200',
  },
  {
    name: 'Marcus Rodriguez',
    rating: 5.0,
    reviews: 89,
    onTimeScore: 100,
    avgDelivery: '24 hours',
    badges: ['Express', 'Verified'],
    specialty: 'Corporate Events',
    price: '$1,500',
  },
  {
    name: 'Emily Watson',
    rating: 4.8,
    reviews: 156,
    onTimeScore: 96,
    avgDelivery: '40 hours',
    badges: ['Verified'],
    specialty: 'Social Events',
    price: '$950',
  },
];

const PhotographerCard = ({ photographer, index }: { photographer: typeof photographers[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        rotateX,
        rotateY,
      }}
      className="relative"
    >
      <motion.div
        className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-colors overflow-hidden"
        animate={{
          boxShadow: isHovered
            ? '0 20px 60px rgba(34, 211, 238, 0.3)'
            : '0 10px 30px rgba(0, 0, 0, 0.5)',
        }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl" />

        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 mb-6 flex items-center justify-center text-3xl font-bold text-white">
            {photographer.name.split(' ').map(n => n[0]).join('')}
          </div>

          <div className="flex gap-2 mb-4">
            {photographer.badges.includes('Express') && (
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 text-xs font-semibold flex items-center gap-1">
                <Zap className="w-3 h-3" /> Express
              </span>
            )}
            {photographer.badges.includes('Verified') && (
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-400 text-xs font-semibold flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> Verified
              </span>
            )}
          </div>

          <h3 className="text-2xl font-bold text-white mb-2">{photographer.name}</h3>
          <p className="text-gray-400 mb-6">{photographer.specialty}</p>

          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="text-white font-semibold">{photographer.rating}</span>
                <span className="text-gray-500 text-sm">({photographer.reviews} reviews)</span>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">On-Time Score</span>
                  <span className="text-cyan-400 font-bold">{photographer.onTimeScore}%</span>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${photographer.onTimeScore}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5, duration: 1 }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300">Avg Delivery:</span>
                <span className="text-cyan-400 font-semibold">{photographer.avgDelivery}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-gray-700">
            <div>
              <div className="text-sm text-gray-400">Starting at</div>
              <div className="text-2xl font-bold text-white">{photographer.price}</div>
            </div>

            <motion.button
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold shadow-lg shadow-cyan-500/30"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const PhotographerProfiles = () => {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Photographers
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Work with verified professionals who deliver on time, every time
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {photographers.map((photographer, index) => (
            <PhotographerCard key={index} photographer={photographer} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            className="px-10 py-4 bg-white/5 backdrop-blur-xl rounded-full text-white font-semibold text-lg border border-white/10 hover:border-cyan-500/50 transition-colors"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Photographers
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PhotographerProfiles;
