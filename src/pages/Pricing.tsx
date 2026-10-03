import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Server, Zap, Shield, HeadphonesIcon, Star } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small projects and testing',
    monthlyPrice: 9.99,
    yearlyPrice: 99.99,
    features: [
      { text: '2 vCPU Cores', included: true },
      { text: '4 GB RAM', included: true },
      { text: '80 GB SSD Storage', included: true },
      { text: '2 TB Bandwidth', included: true },
      { text: '1 Server', included: true },
      { text: 'Basic DDoS Protection', included: true },
      { text: 'Community Support', included: true },
      { text: 'Daily Backups', included: false },
      { text: 'Custom Domains', included: false },
      { text: 'Priority Support', included: false },
    ],
    popular: false,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Pro',
    description: 'For growing businesses and production apps',
    monthlyPrice: 29.99,
    yearlyPrice: 299.99,
    features: [
      { text: '8 vCPU Cores', included: true },
      { text: '16 GB RAM', included: true },
      { text: '320 GB NVMe Storage', included: true },
      { text: '10 TB Bandwidth', included: true },
      { text: '5 Servers', included: true },
      { text: 'Advanced DDoS Protection', included: true },
      { text: 'Priority Support', included: true },
      { text: 'Daily Backups', included: true },
      { text: 'Custom Domains', included: true },
      { text: 'Load Balancer', included: false },
    ],
    popular: true,
    color: 'from-primary-500 to-purple-500',
  },
  {
    name: 'Enterprise',
    description: 'Maximum performance and full control',
    monthlyPrice: 79.99,
    yearlyPrice: 799.99,
    features: [
      { text: '32 vCPU Cores', included: true },
      { text: '64 GB RAM', included: true },
      { text: '1 TB NVMe Storage', included: true },
      { text: 'Unlimited Bandwidth', included: true },
      { text: 'Unlimited Servers', included: true },
      { text: 'Enterprise DDoS Protection', included: true },
      { text: '24/7 Dedicated Support', included: true },
      { text: 'Hourly Backups', included: true },
      { text: 'Custom Domains', included: true },
      { text: 'Load Balancer + CDN', included: true },
    ],
    popular: false,
    color: 'from-amber-500 to-orange-500',
  },
];

const addOns = [
  { name: 'Extra vCPU', price: 5, unit: '/vCPU/mo' },
  { name: 'Extra RAM', price: 3, unit: '/GB/mo' },
  { name: 'Extra Storage', price: 0.1, unit: '/GB/mo' },
  { name: 'Managed Database', price: 15, unit: '/instance/mo' },
  { name: 'SSL Certificate', price: 0, unit: 'Free' },
  { name: 'CDN Add-on', price: 10, unit: '/mo' },
];

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-dark-100">Simple, Transparent Pricing</h1>
        <p className="text-dark-400 mt-2 max-w-xl mx-auto">
          Choose the perfect plan for your needs. Scale up or down anytime with no hidden fees.
        </p>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <span
            className={`text-sm ${
              billingPeriod === 'monthly' ? 'text-dark-100' : 'text-dark-400'
            }`}
          >
            Monthly
          </span>
          <button
            onClick={() =>
              setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')
            }
            className={`relative w-14 h-7 rounded-full transition-colors ${
              billingPeriod === 'yearly' ? 'bg-primary-600' : 'bg-dark-600'
            }`}
          >
            <span
              className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                billingPeriod === 'yearly' ? 'translate-x-7' : ''
              }`}
            ></span>
          </button>
          <span
            className={`text-sm ${
              billingPeriod === 'yearly' ? 'text-dark-100' : 'text-dark-400'
            }`}
          >
            Yearly
          </span>
          {billingPeriod === 'yearly' && (
            <span className="bg-emerald-500/10 text-emerald-400 text-xs px-2 py-0.5 rounded-full font-medium">
              Save 17%
            </span>
          )}
        </div>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative bg-dark-800 border rounded-2xl p-6 ${
              plan.popular
                ? 'border-primary-500/50 ring-1 ring-primary-500/20 scale-105'
                : 'border-dark-700'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-primary-500 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                  <Star size={12} />
                  Most Popular
                </span>
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-lg font-bold text-dark-100">{plan.name}</h3>
              <p className="text-sm text-dark-400 mt-1">{plan.description}</p>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-dark-100">
                  $
                  {billingPeriod === 'monthly'
                    ? plan.monthlyPrice
                    : (plan.yearlyPrice / 12).toFixed(2)}
                </span>
                <span className="text-dark-400 text-sm">/month</span>
              </div>
              {billingPeriod === 'yearly' && (
                <p className="text-xs text-dark-400 mt-1">
                  ${plan.yearlyPrice} billed annually
                </p>
              )}
            </div>

            <button
              className={`w-full py-2.5 rounded-lg text-sm font-semibold transition-all mb-6 ${
                plan.popular
                  ? 'bg-gradient-to-r from-primary-500 to-purple-500 text-white hover:opacity-90'
                  : 'bg-dark-700 text-dark-200 hover:bg-dark-600'
              }`}
            >
              Get Started
            </button>

            <div className="space-y-3">
              {plan.features.map((feature) => (
                <div key={feature.text} className="flex items-center gap-2">
                  {feature.included ? (
                    <Check size={16} className="text-emerald-400 flex-shrink-0" />
                  ) : (
                    <X size={16} className="text-dark-600 flex-shrink-0" />
                  )}
                  <span
                    className={`text-sm ${
                      feature.included ? 'text-dark-200' : 'text-dark-500'
                    }`}
                  >
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add-ons */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-dark-100 mb-4 text-center">Add-ons</h2>
        <p className="text-dark-400 text-sm text-center mb-6">
          Extend your plan with additional resources
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {addOns.map((addon) => (
            <div
              key={addon.name}
              className="bg-dark-800 border border-dark-700 rounded-xl p-4 text-center hover:border-dark-600 transition-colors cursor-pointer"
            >
              <p className="text-sm font-medium text-dark-200">{addon.name}</p>
              <p className="text-lg font-bold text-primary-400 mt-1">
                {addon.price === 0 ? 'Free' : `$${addon.price}`}
              </p>
              <p className="text-xs text-dark-400">{addon.unit}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
        {[
          {
            icon: Zap,
            title: 'Instant Deployment',
            description: 'Get your server running in under 60 seconds with our optimized infrastructure.',
          },
          {
            icon: Shield,
            title: 'Enterprise Security',
            description: 'DDoS protection, firewalls, and encrypted connections included in all plans.',
          },
          {
            icon: HeadphonesIcon,
            title: '24/7 Support',
            description: 'Our expert team is always available to help you with any issues.',
          },
        ].map((feature) => (
          <div key={feature.title} className="text-center">
            <div className="inline-flex p-3 rounded-xl bg-dark-800 border border-dark-700 mb-3">
              <feature.icon size={24} className="text-primary-400" />
            </div>
            <h3 className="text-sm font-semibold text-dark-100">{feature.title}</h3>
            <p className="text-xs text-dark-400 mt-1">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
