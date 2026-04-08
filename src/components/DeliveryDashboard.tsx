import { motion } from 'framer-motion';
import { CheckCircle, Clock, AlertCircle, MessageCircle, Download } from 'lucide-react';
import { useState, useEffect } from 'react';

const DeliveryDashboard = () => {
  const [progress, setProgress] = useState(65);
  const [time, setTime] = useState({ hours: 18, minutes: 45, seconds: 30 });

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

  const steps = [
    { label: 'Shoot Completed', status: 'completed', icon: CheckCircle, color: 'text-green-400' },
    { label: 'Editing in Progress', status: 'active', icon: Clock, color: 'text-yellow-400' },
    { label: 'Quality Check', status: 'pending', icon: AlertCircle, color: 'text-gray-500' },
    { label: 'Ready for Delivery', status: 'pending', icon: Download, color: 'text-gray-500' },
  ];

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
            Real-Time Tracking Dashboard
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Monitor your photo delivery progress every step of the way
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-700/50 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Wedding Photography</h3>
                  <p className="text-gray-400">Sarah Chen • March 15, 2024</p>
                </div>

                <div className="bg-black/40 rounded-2xl p-6 mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400 font-medium">Time Remaining</span>
                    <span className="text-sm text-cyan-400 font-semibold">ON TRACK</span>
                  </div>

                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-cyan-400">{String(time.hours).padStart(2, '0')}</div>
                      <div className="text-xs text-gray-500 mt-1">HOURS</div>
                    </div>
                    <div className="text-3xl text-gray-600">:</div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-400">{String(time.minutes).padStart(2, '0')}</div>
                      <div className="text-xs text-gray-500 mt-1">MINUTES</div>
                    </div>
                    <div className="text-3xl text-gray-600">:</div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-400">{String(time.seconds).padStart(2, '0')}</div>
                      <div className="text-xs text-gray-500 mt-1">SECONDS</div>
                    </div>
                  </div>

                  <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                    <motion.div
                      className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    />
                  </div>

                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-gray-500">Start</span>
                    <span className="text-xs text-cyan-400 font-semibold">{progress}% Complete</span>
                    <span className="text-xs text-gray-500">Delivery</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {steps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          step.status === 'completed'
                            ? 'bg-green-500/20'
                            : step.status === 'active'
                            ? 'bg-yellow-500/20'
                            : 'bg-gray-700/30'
                        }`}
                      >
                        <step.icon className={`w-6 h-6 ${step.color}`} />
                      </div>

                      <div className="flex-1">
                        <div className="text-white font-semibold">{step.label}</div>
                        <div className="text-sm text-gray-500">
                          {step.status === 'completed'
                            ? 'Completed'
                            : step.status === 'active'
                            ? 'In Progress'
                            : 'Pending'}
                        </div>
                      </div>

                      {step.status === 'completed' && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center"
                        >
                          <CheckCircle className="w-4 h-4 text-white" />
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <div className="bg-black/40 rounded-2xl p-6 mb-6">
                  <div className="flex items-center gap-3 mb-6">
                    <MessageCircle className="w-6 h-6 text-cyan-400" />
                    <h4 className="text-xl font-bold text-white">Live Chat</h4>
                  </div>

                  <div className="space-y-4 mb-6 max-h-80 overflow-y-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-3"
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="bg-gray-800 rounded-2xl rounded-tl-sm p-4">
                          <p className="text-white text-sm">
                            Hi! Just finished editing the ceremony photos. They look amazing!
                          </p>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Sarah Chen • 2:34 PM</div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="flex gap-3 flex-row-reverse"
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl rounded-tr-sm p-4 border border-cyan-500/30">
                          <p className="text-white text-sm">
                            That's great! Can't wait to see them. Thank you for the update!
                          </p>
                        </div>
                        <div className="text-xs text-gray-500 mt-1 text-right">You • 2:36 PM</div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="flex gap-3"
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="bg-gray-800 rounded-2xl rounded-tl-sm p-4">
                          <p className="text-white text-sm">
                            Working on the reception photos now. Should be done in about 6 hours!
                          </p>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Sarah Chen • 3:12 PM</div>
                      </div>
                    </motion.div>
                  </div>

                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white font-semibold"
                    >
                      Send
                    </motion.button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/40 rounded-2xl p-6 border border-gray-700/50">
                    <div className="text-3xl font-bold text-white mb-1">247</div>
                    <div className="text-sm text-gray-400">Total Photos</div>
                  </div>

                  <div className="bg-black/40 rounded-2xl p-6 border border-gray-700/50">
                    <div className="text-3xl font-bold text-cyan-400 mb-1">161</div>
                    <div className="text-sm text-gray-400">Edited</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryDashboard;
