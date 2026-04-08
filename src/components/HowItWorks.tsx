import { motion } from 'framer-motion';
import { Calendar, Shield, Camera, Timer, AlertCircle } from 'lucide-react';

const steps = [
  {
    icon: Calendar,
    title: 'Book Photographer',
    description: 'Choose from verified photographers with proven track records',
  },
  {
    icon: Shield,
    title: 'Payment Held in Escrow',
    description: 'Your payment is secured until delivery is complete',
  },
  {
    icon: Camera,
    title: 'Shoot Completed',
    description: 'Professional coverage of your event',
  },
  {
    icon: Timer,
    title: '48-Hour Timer Starts',
    description: 'Countdown begins immediately after shoot completion',
  },
  {
    icon: AlertCircle,
    title: 'Delivery or Penalty',
    description: 'Get your photos on time or automatic compensation',
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-32 bg-gradient-to-b from-transparent via-cyan-500 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              y: [-50, 100],
            }}
            transition={{
              duration: Math.random() * 3 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A seamless process designed to protect both clients and photographers
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block" style={{ zIndex: 0 }}>
            <motion.path
              d={`M ${150} ${100} Q ${300} ${100}, ${300} ${200} T ${450} ${400} T ${600} ${600} T ${750} ${800}`}
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.5 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
          </svg>

          <div className="space-y-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <motion.div
                  className="flex-shrink-0 relative group"
                  whileHover={{ scale: 1.1, rotateY: 10 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-xl border border-cyan-500/30 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/10 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <step.icon className="w-12 h-12 text-cyan-400 relative z-10" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-cyan-500/50">
                    {index + 1}
                  </div>
                </motion.div>

                <motion.div
                  className="flex-1 bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-cyan-500/30 transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.button
            className="px-10 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full text-white font-semibold text-lg shadow-2xl shadow-cyan-500/30"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your First Booking
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
