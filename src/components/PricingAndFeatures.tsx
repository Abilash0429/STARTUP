import { motion } from 'framer-motion';
import { Check, TrendingUp, Bell, Users, Lock, Award, DollarSign, Target } from 'lucide-react';

const PricingAndFeatures = () => {
  return (
    <>
      <section className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Pay only when you're satisfied with the delivery
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl p-12 border border-cyan-500/30 shadow-2xl shadow-cyan-500/20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-baseline gap-3 mb-6">
                    <span className="text-6xl font-bold text-white">10%</span>
                    <span className="text-xl text-gray-400">platform fee</span>
                  </div>

                  <p className="text-gray-400 mb-8 leading-relaxed">
                    We charge a simple 10% fee on top of the photographer's rate. No hidden costs, no surprises.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Escrow Protection</h4>
                        <p className="text-gray-400 text-sm">Payment held securely until delivery</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Automated Tracking</h4>
                        <p className="text-gray-400 text-sm">Real-time updates on delivery progress</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Penalty Guarantee</h4>
                        <p className="text-gray-400 text-sm">Automatic compensation for late delivery</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">24/7 Support</h4>
                        <p className="text-gray-400 text-sm">Direct chat with photographers</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-black/40 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Pricing Breakdown</h3>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-between pb-4 border-b border-gray-700">
                      <span className="text-gray-400">Photographer Rate</span>
                      <span className="text-white font-semibold">$1,200</span>
                    </div>

                    <div className="flex items-center justify-between pb-4 border-b border-gray-700">
                      <span className="text-gray-400">Platform Fee (10%)</span>
                      <span className="text-white font-semibold">$120</span>
                    </div>

                    <div className="flex items-center justify-between pb-4 border-b border-gray-700">
                      <span className="text-gray-400">Express Delivery</span>
                      <span className="text-white font-semibold">$200</span>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <span className="text-xl font-bold text-white">Total</span>
                      <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        $1,520
                      </span>
                    </div>
                  </div>

                  <motion.button
                    className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold text-lg shadow-2xl shadow-cyan-500/50"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-32 bg-black overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need for fast, reliable photo delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: TrendingUp,
                title: 'On-Time Score System',
                description: 'Track photographer reliability with detailed performance metrics',
                color: 'from-cyan-500 to-blue-500',
              },
              {
                icon: Bell,
                title: 'Smart Reminders',
                description: 'Automated notifications keep everyone on schedule',
                color: 'from-blue-500 to-purple-500',
              },
              {
                icon: Users,
                title: 'Editing Marketplace',
                description: 'Optional outsourcing to speed up delivery times',
                color: 'from-purple-500 to-pink-500',
              },
              {
                icon: Lock,
                title: 'Secure Escrow',
                description: 'Payment protection for clients and photographers',
                color: 'from-pink-500 to-red-500',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/30 transition-colors"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 flex items-center justify-center`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              For Photographers
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Build your reputation and get paid faster
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Target,
                title: 'Get More Clients',
                description: 'Join a platform where clients actively seek fast, reliable photographers',
                stats: '+40% more bookings',
              },
              {
                icon: DollarSign,
                title: 'Faster Payouts',
                description: 'Receive payment immediately upon delivery completion via escrow',
                stats: 'Same-day payment',
              },
              {
                icon: Award,
                title: 'Performance Bonuses',
                description: 'Earn extra for consistently meeting or beating deadlines',
                stats: 'Up to 15% bonus',
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-cyan-500/30 transition-colors"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 mb-6 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-cyan-400" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-4">{benefit.description}</p>

                <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
                  <span className="text-cyan-400 font-semibold text-sm">{benefit.stats}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.button
              className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold text-lg shadow-2xl shadow-cyan-500/30"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Join as Photographer
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PricingAndFeatures;
