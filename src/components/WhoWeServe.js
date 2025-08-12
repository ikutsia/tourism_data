import React from 'react';
import { 
  Building2, 
  Plane, 
  Hotel, 
  MapPin, 
  Car, 
  Ship,
  Users,
  Star,
  CheckCircle
} from 'lucide-react';

const WhoWeServe = () => {
  const industries = [
    {
      icon: Hotel,
      title: "Hotels & Resorts",
      description: "Optimize occupancy rates, pricing strategies, and guest experiences with comprehensive tourism data.",
      benefits: ["Revenue optimization", "Guest behavior insights", "Competitive analysis", "Seasonal planning"],
      color: "from-blue-500 to-blue-600",
      stats: "2,000+ properties"
    },
    {
      icon: Plane,
      title: "Airlines & Aviation",
      description: "Enhance route planning, pricing, and customer satisfaction with real-time travel demand data.",
      benefits: ["Route optimization", "Demand forecasting", "Pricing strategies", "Customer insights"],
      color: "from-indigo-500 to-indigo-600",
      stats: "150+ airlines"
    },
    {
      icon: MapPin,
      title: "Tour Operators",
      description: "Design better tours and experiences based on destination popularity and traveler preferences.",
      benefits: ["Destination insights", "Tour optimization", "Customer targeting", "Seasonal trends"],
      color: "from-green-500 to-green-600",
      stats: "800+ operators"
    },
    {
      icon: Car,
      title: "Car Rental & Transport",
      description: "Optimize fleet management and pricing with location-based demand and travel pattern data.",
      benefits: ["Fleet optimization", "Location analysis", "Pricing strategies", "Demand forecasting"],
      color: "from-orange-500 to-orange-600",
      stats: "500+ companies"
    },
    {
      icon: Ship,
      title: "Cruise Lines",
      description: "Plan itineraries and optimize onboard experiences with comprehensive maritime tourism data.",
      benefits: ["Itinerary planning", "Port analysis", "Customer insights", "Revenue optimization"],
      color: "from-purple-500 to-purple-600",
      stats: "50+ cruise lines"
    },
    {
      icon: Building2,
      title: "Tourism Boards",
      description: "Drive destination marketing and development with comprehensive tourism intelligence.",
      benefits: ["Marketing insights", "Visitor analysis", "Economic impact", "Development planning"],
      color: "from-red-500 to-red-600",
      stats: "200+ destinations"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Revenue Manager",
      company: "Grand Hotel Chain",
      content: "TourismData has transformed how we approach pricing and occupancy. Our revenue has increased by 23% in just 6 months.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Operations Director",
      company: "Sky Airlines",
      content: "The real-time demand forecasting has been a game-changer for our route planning. We've optimized 15 routes based on the insights.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Marketing Director",
      company: "Adventure Tours Co.",
      content: "Understanding customer preferences and seasonal trends has helped us create more targeted marketing campaigns.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4">
            <Users className="w-4 h-4 mr-2" />
            Who We Serve
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Tourism
            <span className="block text-primary-600">Leaders Worldwide</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From global hotel chains to local tour operators, we serve the entire tourism ecosystem 
            with data intelligence solutions that drive growth and innovation.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div key={index} className="card p-8 group hover:scale-105 transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${industry.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{industry.title}</h3>
                <p className="text-sm text-primary-600 font-semibold mb-4">{industry.stats}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{industry.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {industry.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                
                <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="bg-white rounded-2xl p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h3>
            <p className="text-xl text-gray-600">Real results from real tourism businesses</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                  <div className="text-sm text-primary-600">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-white/80">Tourism Companies</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-white/80">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-white/80">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$2.5B</div>
              <div className="text-white/80">Revenue Generated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
