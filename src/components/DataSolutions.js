import React from "react";
import {
  BarChart3,
  Globe,
  Users,
  MapPin,
  Calendar,
  Zap,
  Shield,
  Database,
  Target,
  PieChart,
  Activity,
} from "lucide-react";

const DataSolutions = () => {
  const solutions = [
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description:
        "Monitor tourism trends, booking patterns, and market dynamics in real-time with our advanced analytics dashboard.",
      features: [
        "Live data feeds",
        "Custom dashboards",
        "Predictive modeling",
        "Performance metrics",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Globe,
      title: "Global Market Intelligence",
      description:
        "Access comprehensive data from 150+ countries to understand global tourism patterns and opportunities.",
      features: [
        "Multi-country data",
        "Market comparisons",
        "Trend analysis",
        "Regional insights",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      icon: Users,
      title: "Customer Behavior Analytics",
      description:
        "Understand your customers better with detailed behavioral analysis and preference tracking.",
      features: [
        "Demographic insights",
        "Booking patterns",
        "Preference tracking",
        "Segmentation",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: MapPin,
      title: "Destination Intelligence",
      description:
        "Get detailed insights about destinations, attractions, and travel patterns worldwide.",
      features: [
        "Destination trends",
        "Attraction data",
        "Travel routes",
        "Seasonal patterns",
      ],
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Calendar,
      title: "Seasonal Forecasting",
      description:
        "Predict demand patterns and optimize your operations with AI-powered seasonal forecasting.",
      features: [
        "Demand prediction",
        "Seasonal trends",
        "Capacity planning",
        "Revenue optimization",
      ],
      color: "from-red-500 to-red-600",
    },
    {
      icon: Zap,
      title: "API Integration",
      description:
        "Seamlessly integrate our data into your existing systems with our robust API platform.",
      features: [
        "RESTful APIs",
        "Webhook support",
        "SDK libraries",
        "Custom integrations",
      ],
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  const stats = [
    {
      icon: Database,
      label: "Data Sources",
      value: "500+",
      description: "Integrated sources",
    },
    {
      icon: Target,
      label: "Accuracy",
      value: "95%",
      description: "Data precision",
    },
    {
      icon: PieChart,
      label: "Coverage",
      value: "150+",
      description: "Countries",
    },
    {
      icon: Activity,
      label: "Updates",
      value: "24/7",
      description: "Real-time",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4">
            <BarChart3 className="w-4 h-4 mr-2" />
            Data Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Tourism
            <span className="block text-primary-600">Data Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your tourism business with our suite of data intelligence
            tools. From real-time analytics to predictive insights, we provide
            everything you need to make informed decisions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-700 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </div>
            );
          })}
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="card p-8 group hover:scale-105 transition-all duration-300"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                <ul className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="mt-6 text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-12 text-center text-white">
          <Shield className="w-16 h-16 mx-auto mb-6 text-white/80" />
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Tourism Business?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join 500+ tourism companies already using our data intelligence
            platform to drive growth and optimize operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-secondary">Start Free Trial</button>
            <button className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataSolutions;
