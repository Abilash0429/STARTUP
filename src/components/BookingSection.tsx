import { motion } from 'framer-motion';
import { Zap, Clock, Calendar, Shield } from 'lucide-react';
import { useState } from 'react';

const deliveryOptions = [
  {
    name: '48 Hours',
    hours: 48,
    price: '+$200',
    tag: 'Premium',
    color: 'from-cyan-500 to-blue-500',
    popular: true,
  },
  {
    name: '72 Hours',
    hours: 72,
    price: 'Included',
    tag: 'Standard',
    color: 'from-blue-500 to-purple-500',
    popular: false,
  },
  {
    name: '5 Days',
    hours: 120,
    price: '-$50',
    tag: 'Budget',
    color: 'from-purple-500 to-pink-500',
    popular: false,
  },
];

const BookingSection = () => {
  const [selectedOption, setSelectedOption] = useState(0);
  const [expressDelivery, setExpressDelivery] = useState(true);

  return (
    <section className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Choose Your Delivery Speed
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Select the timeline that works for you, backed by our guarantee
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {deliveryOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedOption(index)}
                className="cursor-pointer"
              >
                <motion.div
                  className={`relative p-8 rounded-3xl border-2 transition-all ${
                    selectedOption === index
                      ? 'border-cyan-500 bg-gradient-to-br from-cyan-500/10 to-purple-500/10'
                      : 'border-gray-700 bg-gray-900/50'
                  }`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  animate={{
                    boxShadow:
                      selectedOption === index
                        ? '0 20px 60px rgba(34, 211, 238, 0.3)'
                        : '0 10px 30px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  {option.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white text-xs font-bold shadow-lg">
                        MOST POPULAR
                      </span>
                    </div>
                  )}

                  <div className="text-center">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${option.color} mx-auto mb-4 flex items-center justify-center`}
                    >
                      <Clock className="w-8 h-8 text-white" />
                    </div>

                    <span className="text-sm text-gray-400 font-semibold">{option.tag}</span>
                    <h3 className="text-3xl font-bold text-white mt-2 mb-4">{option.name}</h3>

                    <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      {option.price}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Express Delivery Guarantee</h4>
                <p className="text-gray-400">Get automatic compensation if delivery is late</p>
              </div>

              <motion.button
                onClick={() => setExpressDelivery(!expressDelivery)}
                className={`w-16 h-8 rounded-full relative ${
                  expressDelivery ? 'bg-gradient-to-r from-cyan-500 to-blue-500' : 'bg-gray-700'
                }`}
                animate={{
                  boxShadow: expressDelivery
                    ? '0 0 20px rgba(34, 211, 238, 0.5)'
                    : '0 0 0px rgba(0, 0, 0, 0)',
                }}
              >
                <motion.div
                  className="w-6 h-6 bg-white rounded-full absolute top-1"
                  animate={{ left: expressDelivery ? '36px' : '4px' }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              </motion.button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h5 className="text-white font-semibold mb-1">Instant Booking</h5>
                  <p className="text-gray-400 text-sm">Reserve your photographer in seconds</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h5 className="text-white font-semibold mb-1">Escrow Protection</h5>
                  <p className="text-gray-400 text-sm">Payment released only on delivery</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h5 className="text-white font-semibold mb-1">Penalty Clause</h5>
                  <p className="text-gray-400 text-sm">Auto-compensation for delays</p>
                </div>
              </div>
            </div>

            <motion.button
              className="w-full mt-8 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold text-lg shadow-2xl shadow-cyan-500/50"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Proceed to Checkout
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
