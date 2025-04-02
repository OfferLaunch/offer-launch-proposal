'use client';

import { motion } from 'framer-motion';
import { RocketLaunchIcon, UserGroupIcon, ChartBarIcon, CurrencyDollarIcon, CheckCircleIcon, ShieldCheckIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Home() {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Current Revenue (50-75k/month)',
        data: [65000, 65000, 65000, 65000, 65000, 65000, 65000, 65000, 65000, 65000, 65000, 65000],
        borderColor: 'rgb(156, 163, 175)',
        backgroundColor: 'rgba(156, 163, 175, 0.5)',
        fill: true,
      },
      {
        label: 'Total Revenue with Partnership',
        data: [65000, 100000, 150000, 250000, 400000, 600000, 800000, 900000, 950000, 1000000, 1000000, 1000000],
        borderColor: 'rgb(234, 179, 8)',
        backgroundColor: 'rgba(234, 179, 8, 0.5)',
        fill: true,
      },
      {
        label: 'Your Take-Home (After 30% Acquisition & 45% Split)',
        data: [65000, 100000, 150000, 250000, 400000, 600000, 800000, 900000, 950000, 1000000, 1000000, 1000000].map(revenue => {
          const afterAcquisition = revenue * 0.7; // 30% acquisition cost
          return afterAcquisition * 0.45; // 45% of remaining revenue
        }),
        borderColor: 'rgb(34, 197, 94)',
        backgroundColor: 'rgba(34, 197, 94, 0.5)',
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Revenue Projection Breakdown',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(this: any, tickValue: number | string) {
            return '$' + Number(tickValue).toLocaleString();
          },
        },
      },
    },
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-yellow-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-black mb-8 leading-tight"
          >
            Strategic Partnership Proposal for WrightBNB Academy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-3xl text-gray-800 max-w-3xl mx-auto leading-relaxed"
          >
            Scale your Airbnb coaching business with our proven expertise and comprehensive solutions
          </motion.p>
        </div>
      </section>

      {/* Partnership Overview */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-black mb-8">What We Offer</h2>
              <ul className="space-y-8">
                <li className="flex items-start">
                  <RocketLaunchIcon className="h-6 w-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-lg text-gray-800 font-semibold block">Student Acquisition & Growth</span>
                    <span className="text-gray-600">Proven strategies to scale your student base, optimize your course offerings, and increase enrollment rates.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <UserGroupIcon className="h-6 w-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-lg text-gray-800 font-semibold block">Course Development Support</span>
                    <span className="text-gray-600">Expert assistance in creating and optimizing your Airbnb coaching curriculum and materials.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChartBarIcon className="h-6 w-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-lg text-gray-800 font-semibold block">Performance Analytics</span>
                    <span className="text-gray-600">Advanced tracking of student progress, course completion rates, and revenue metrics.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <ShieldCheckIcon className="h-6 w-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-lg text-gray-800 font-semibold block">Platform Optimization</span>
                    <span className="text-gray-600">Enhance your learning management system and student experience with our technical expertise.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <ShieldCheckIcon className="h-6 w-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-lg text-gray-800 font-semibold block">FTC Compliance & Legal</span>
                    <span className="text-gray-600">Stringent FTC compliance monitoring, legal review of all content, and transparent disclosure practices.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <SparklesIcon className="h-6 w-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-lg text-gray-800 font-semibold block">Content Creation & Management</span>
                    <span className="text-gray-600">Full-service content creation, including course materials, marketing copy, and social media content.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <UserGroupIcon className="h-6 w-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-lg text-gray-800 font-semibold block">Dedicated Team Members</span>
                    <span className="text-gray-600">Your own dedicated account manager, content strategist, and technical support team.</span>
                  </div>
                </li>
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-black mb-8">Our Commitment</h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                We're committed to helping you scale WrightBNB Academy and reach more aspiring Airbnb hosts with your proven coaching methods.
              </p>
              <ul className="space-y-8">
                <li className="flex items-start">
                  <CurrencyDollarIcon className="h-6 w-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-lg text-gray-800 font-semibold block">Revenue Growth Focus</span>
                    <span className="text-gray-600">Strategies to increase course enrollment, optimize pricing, and expand your market reach.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChartBarIcon className="h-6 w-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-lg text-gray-800 font-semibold block">Student Success Metrics</span>
                    <span className="text-gray-600">Track student progress, completion rates, and success stories to showcase your program's effectiveness.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <UserGroupIcon className="h-6 w-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-lg text-gray-800 font-semibold block">Community Building</span>
                    <span className="text-gray-600">Help you build and nurture a thriving community of successful Airbnb hosts.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <SparklesIcon className="h-6 w-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-lg text-gray-800 font-semibold block">Course Innovation</span>
                    <span className="text-gray-600">Stay ahead of industry trends and continuously improve your course content and delivery methods.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <ShieldCheckIcon className="h-6 w-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-lg text-gray-800 font-semibold block">Compliance Monitoring</span>
                    <span className="text-gray-600">Regular compliance audits, disclosure statement management, and FTC guideline adherence.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <UserGroupIcon className="h-6 w-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-lg text-gray-800 font-semibold block">Team Support</span>
                    <span className="text-gray-600">Direct access to your dedicated team for strategy, content, and technical support.</span>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Revenue Comparison Chart */}
      <section className="py-32 bg-yellow-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-black mb-16">Revenue Growth Projection</h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-lg shadow-lg border border-yellow-100"
          >
            <div className="h-[500px] mb-12">
              <Line options={chartOptions} data={chartData} />
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold text-black mb-4">Current Revenue</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <span>Stable at $50-75k/month</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <span>Manual student acquisition</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <span>Limited course offerings</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-4">With Partnership</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-yellow-500 mr-2" />
                    <span>Total Revenue: $1M/month</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-yellow-500 mr-2" />
                    <span>Acquisition Cost (30%): $300k</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-yellow-500 mr-2" />
                    <span>Remaining Profit: $700k</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Colin's Take-Home (45%): $315k</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Options */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-black mb-16">Partnership Options</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-yellow-50 p-12 rounded-lg shadow-lg border border-yellow-100"
            >
              <h3 className="text-2xl font-bold text-black mb-4">Option 1: Growth Partnership</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-700">Initial Setup Fee</span>
                  <span className="text-2xl font-bold text-yellow-500">$20,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-700">Revenue Split (After 30% Acquisition)</span>
                  <span className="text-2xl font-bold text-yellow-500">45/55</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-700">Ad Cost Structure</span>
                  <span className="text-lg text-gray-700">We Front & Recoup</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-700">Support Level</span>
                  <span className="text-lg text-gray-700">Full Support</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-700">Strategy Sessions</span>
                  <span className="text-lg text-gray-700">Weekly</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-700">Course Development</span>
                  <span className="text-lg text-gray-700">Full Support</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-700">Analytics Dashboard</span>
                  <span className="text-lg text-gray-700">Advanced</span>
                </div>
              </div>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircleIcon className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>24/7 Technical Support</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircleIcon className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Custom Growth Strategy</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircleIcon className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Priority Feature Requests</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircleIcon className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>We Front All Ad Costs</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircleIcon className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Recoup Ad Costs from Profits</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircleIcon className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>We Absorb Losses if Ads Underperform</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-yellow-100 rounded-lg">
                <h4 className="text-lg font-semibold text-black mb-2">Ad Cost Example:</h4>
                <p className="text-gray-700">If we spend $100k on ads and generate $150k in revenue:</p>
                <ul className="mt-2 space-y-1 text-gray-700">
                  <li>• We recoup our $100k ad spend</li>
                  <li>• Split the remaining $50k profit 45/55</li>
                </ul>
                <p className="mt-2 text-gray-700">If we spend $100k on ads and generate $90k in revenue:</p>
                <ul className="mt-2 space-y-1 text-gray-700">
                  <li>• We absorb the $10k loss</li>
                  <li>• No profit split on unprofitable campaigns</li>
                </ul>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-yellow-50 p-12 rounded-lg shadow-lg border border-yellow-100"
            >
              <h3 className="text-2xl font-bold text-black mb-4">Option 2: Premium Partnership</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-700">Initial Setup Fee</span>
                  <span className="text-2xl font-bold text-yellow-500">$30,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-700">Revenue Split (After 30% Acquisition)</span>
                  <span className="text-2xl font-bold text-yellow-500">70/30</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-700">Ad Cost Structure</span>
                  <span className="text-lg text-gray-700">You Manage & Fund</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-700">Support Level</span>
                  <span className="text-lg text-gray-700">Priority Support</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-700">Strategy Sessions</span>
                  <span className="text-lg text-gray-700">Bi-Weekly</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-700">Course Development</span>
                  <span className="text-lg text-gray-700">Premium Support</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-700">Analytics Dashboard</span>
                  <span className="text-lg text-gray-700">Enterprise</span>
                </div>
              </div>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircleIcon className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Dedicated Account Manager</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircleIcon className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Custom Integration Support</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircleIcon className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Exclusive Beta Features</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircleIcon className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>You Fund All Ad Campaigns</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircleIcon className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>You Bear Campaign Risk</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircleIcon className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Higher Revenue Share (70%)</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-yellow-100 rounded-lg">
                <h4 className="text-lg font-semibold text-black mb-2">Ad Cost Example:</h4>
                <p className="text-gray-700">If you spend $100k on ads and generate $150k in revenue:</p>
                <ul className="mt-2 space-y-1 text-gray-700">
                  <li>• You cover the $100k ad spend</li>
                  <li>• Split the remaining $50k profit 70/30</li>
                  <li>• Your take-home: $35k</li>
                </ul>
                <p className="mt-2 text-gray-700">If you spend $100k on ads and generate $90k in revenue:</p>
                <ul className="mt-2 space-y-1 text-gray-700">
                  <li>• You absorb the $10k loss</li>
                  <li>• No profit split on unprofitable campaigns</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
