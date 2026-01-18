import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Basic',
    price: '9',
    features: [
      'Free Shipping',
      'Email Support',
      'Monthly Newsletter'
    ],
    isPopular: false
  },
  {
    name: 'Pro',
    price: '19',
    features: [
      'All Basic Features',
      'Priority Support',
      'Exclusive Deals',
      'Early Access to New Products'
    ],
    isPopular: true
  },
  {
    name: 'Enterprise',
    price: '49',
    features: [
      'All Pro Features',
      '24/7 Phone Support',
      'Dedicated Account Manager',
      'Custom Solutions'
    ],
    isPopular: false
  }
]

export default function Pricing() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          Membership Plans
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`
                relative rounded-2xl p-8 shadow-lg transition-all duration-300
                ${plan.isPopular 
                  ? 'bg-blue-600 text-white scale-105 shadow-2xl z-10 border-2 border-blue-700' 
                  : 'bg-white border border-gray-200 hover:shadow-xl'}
              `}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-6 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-4 text-center">
                {plan.name}
              </h3>

              <div className="text-center mb-8">
                <span className="text-5xl font-bold">
                  ${plan.price}
                </span>
                <span className="text-lg opacity-80">/mo</span>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 ${plan.isPopular ? 'text-white' : 'text-green-500'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`
                  w-full py-4 rounded-xl font-semibold transition-all duration-300
                  ${plan.isPopular 
                    ? 'bg-white text-blue-700 hover:bg-gray-100 shadow-md' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'}
                `}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}