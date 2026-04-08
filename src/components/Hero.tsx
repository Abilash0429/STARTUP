import { motion } from 'framer-motion';
import { Camera, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [time, setTime] = useState({ hours: 47, minutes: 32, seconds: 18 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const progress = ((48 * 3600 - (time.hours * 3600 + time.minutes * 60 + time.seconds)) / (48 * 3600)) * 100;

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-black to-purple-950/20" />

      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2"
        animate={{
          rotateY: [0, 360],
          rotateX: [0, 15, 0, -15, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div className="relative w-64 h-64">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl backdrop-blur-xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/50"
               style={{ transform: 'translateZ(40px)' }}>
            <Camera className="w-32 h-32 text-cyan-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl backdrop-blur-xl border border-purple-500/20"
               style={{ transform: 'translateZ(-40px) rotateY(180deg)' }}>
            <Zap className="w-32 h-32 text-purple-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 text-center mt-64">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{ backgroundSize: '200% auto' }}
          >
            Get Your Event Photos<br />in 48 Hours. Guaranteed.
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Or get compensated automatically.
          </motion.p>

          <div className="flex justify-center mb-16">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
            >
              <svg className="w-64 h-64 -rotate-90">
                <circle
                  cx="128"
                  cy="128"
                  r="120"
                  fill="none"
                  stroke="rgba(59, 130, 246, 0.1)"
                  strokeWidth="8"
                />
                <motion.circle
                  cx="128"
                  cy="128"
                  r="120"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: progress / 100 }}
                  transition={{ duration: 1 }}
                  style={{
                    filter: 'drop-shadow(0 0 10px rgba(34, 211, 238, 0.8))',
                  }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-sm text-gray-400 mb-2 font-medium tracking-wide">DELIVERY DEADLINE</div>
                <div className="flex gap-2 text-5xl font-bold">
                  <span className="text-cyan-400">{String(time.hours).padStart(2, '0')}</span>
                  <span className="text-gray-500">:</span>
                  <span className="text-blue-400">{String(time.minutes).padStart(2, '0')}</span>
                  <span className="text-gray-500">:</span>
                  <span className="text-purple-400">{String(time.seconds).padStart(2, '0')}</span>
                </div>
                <div className="text-xs text-gray-500 mt-2 tracking-widest">ACTIVE</div>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold text-lg shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-shadow"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Photographer
            </motion.button>

            <motion.button
              className="px-8 py-4 bg-white/5 backdrop-blur-xl rounded-full text-white font-semibold text-lg border border-white/10 hover:border-cyan-500/50 transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore How It Works
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1 h-2 bg-cyan-400 rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
