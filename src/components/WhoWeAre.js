import React from 'react';
import { 
  Building2, 
  Target, 
  Users, 
  Award, 
  Globe, 
  Shield,
  Heart,
  Zap,
  Lightbulb,
  Star,
  CheckCircle
} from 'lucide-react';

const WhoWeAre = () => {
  const values = [
    {
      icon: Target,
      title: "Data-Driven Excellence",
      description: "We believe in the power of data to transform industries and drive innovation in tourism.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Customer Success",
      description: "Your success is our success. We're committed to helping you achieve your business goals.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Your data security is our top priority. We maintain the highest standards of data protection.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "We understand the global nature of tourism and provide insights that transcend borders.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Founder",
      bio: "Former Google data scientist with 15+ years in tourism analytics. PhD in Data Science from Stanford.",
      image: "👩‍💼",
      expertise: ["Data Science", "Tourism Analytics", "Leadership"]
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      bio: "Tech veteran with experience at Airbnb and Booking.com. Expert in scalable data infrastructure.",
      image: "👨‍💻",
      expertise: ["Engineering", "Data Infrastructure", "AI/ML"]
    },
    {
      name: "Emma Thompson",
      role: "Head of Product",
      bio: "Product leader with deep understanding of tourism industry needs and user experience design.",
      image: "👩‍🎨",
      expertise: ["Product Strategy", "UX Design", "Market Research"]
    },
    {
      name: "David Kim",
      role: "Head of Data Science",
      bio: "Leading our AI and machine learning initiatives to deliver predictive insights for tourism businesses.",
      image: "👨‍🔬",
      expertise: ["Machine Learning", "Predictive Analytics", "Research"]
    }
  ];

  const achievements = [
    { number: "500+", label: "Happy Clients", icon: Heart },
    { number: "50M+", label: "Data Points", icon: Zap },
    { number: "150+", label: "Countries", icon: Globe },
    { number: "95%", label: "Client Retention", icon: Star }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4">
            <Building2 className="w-4 h-4 mr-2" />
            Who We Are
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pioneering Tourism
            <span className="block text-primary-600">Data Intelligence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a team of data scientists, tourism experts, and technology innovators 
            dedicated to transforming the tourism industry through intelligent data solutions.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-12 text-white mb-16">
          <div className="text-center">
            <Lightbulb className="w-16 h-16 mx-auto mb-6 text-white/80" />
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              To democratize access to tourism intelligence by providing comprehensive, 
              real-time data solutions that empower businesses to make informed decisions, 
              optimize operations, and deliver exceptional customer experiences in the global tourism ecosystem.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${value.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Leadership Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4">{member.image}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-primary-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-2xl p-12 shadow-lg mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Achievements</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                  <div className="text-gray-600">{achievement.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-6">Why Choose TourismData?</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver 
              the most comprehensive tourism intelligence platform in the market.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-white mb-2">Industry Expertise</h4>
                <p className="text-gray-300 text-sm">15+ years of combined experience in tourism and data science</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-white mb-2">Real-time Data</h4>
                <p className="text-gray-300 text-sm">Live updates from 500+ data sources across 150+ countries</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-white mb-2">AI-Powered Insights</h4>
                <p className="text-gray-300 text-sm">Advanced machine learning algorithms for predictive analytics</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-white mb-2">24/7 Support</h4>
                <p className="text-gray-300 text-sm">Round-the-clock customer support and technical assistance</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-white mb-2">Custom Solutions</h4>
                <p className="text-gray-300 text-sm">Tailored data solutions for your specific business needs</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-white mb-2">Proven Results</h4>
                <p className="text-gray-300 text-sm">95% client satisfaction rate with measurable business impact</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
