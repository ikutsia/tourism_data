import React from 'react';
import { 
  Lightbulb, 
  TrendingUp, 
  TrendingDown, 
  Globe, 
  Calendar,
  BarChart3,
  PieChart,
  MapPin,
  Users,
  DollarSign,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

const DataInsights = () => {
  const insights = [
    {
      title: "Global Tourism Recovery",
      value: "+23.5%",
      change: "+5.2%",
      trend: "up",
      description: "International tourism arrivals increased by 23.5% compared to last year",
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Hotel Occupancy Rates",
      value: "78.3%",
      change: "+12.1%",
      trend: "up",
      description: "Average hotel occupancy across major destinations",
      icon: BarChart3,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Average Daily Rate",
      value: "$245",
      change: "+8.7%",
      trend: "up",
      description: "Global average daily hotel room rate",
      icon: DollarSign,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      title: "Booking Lead Time",
      value: "45 days",
      change: "-15.2%",
      trend: "down",
      description: "Average advance booking period for travelers",
      icon: Calendar,
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    }
  ];

  const topDestinations = [
    { name: "Paris, France", visitors: "2.1M", growth: "+18.5%", trend: "up" },
    { name: "Tokyo, Japan", visitors: "1.8M", growth: "+22.1%", trend: "up" },
    { name: "New York, USA", visitors: "1.6M", growth: "+15.3%", trend: "up" },
    { name: "London, UK", visitors: "1.4M", growth: "+12.7%", trend: "up" },
    { name: "Barcelona, Spain", visitors: "1.2M", growth: "+25.8%", trend: "up" }
  ];

  const trends = [
    {
      title: "Sustainable Tourism",
      description: "Eco-friendly travel options are growing 40% faster than traditional tourism",
      percentage: "40%",
      icon: TrendingUp,
      color: "from-green-400 to-green-600"
    },
    {
      title: "Digital Nomad Destinations",
      description: "Cities with remote work infrastructure seeing 35% increase in long-term stays",
      percentage: "35%",
      icon: Users,
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Local Experiences",
      description: "Demand for authentic local experiences up 28% compared to packaged tours",
      percentage: "28%",
      icon: MapPin,
      color: "from-purple-400 to-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4">
            <Lightbulb className="w-4 h-4 mr-2" />
            Data Insights
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real-time Tourism
            <span className="block text-primary-600">Intelligence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead of the competition with actionable insights from our comprehensive tourism data platform. 
            Make informed decisions based on real-time market intelligence.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <div key={index} className="card p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${insight.bgColor}`}>
                    <Icon className={`w-6 h-6 ${insight.color}`} />
                  </div>
                  <div className="flex items-center space-x-1">
                    {insight.trend === "up" ? (
                      <ArrowUp className="w-4 h-4 text-green-500" />
                    ) : (
                      <ArrowDown className="w-4 h-4 text-red-500" />
                    )}
                    <span className={`text-sm font-medium ${insight.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                      {insight.change}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{insight.value}</h3>
                <p className="text-sm text-gray-600 mb-2">{insight.title}</p>
                <p className="text-xs text-gray-500">{insight.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Top Destinations */}
          <div className="card p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Top Destinations</h3>
              <Globe className="w-6 h-6 text-primary-600" />
            </div>
            
            <div className="space-y-4">
              {topDestinations.map((destination, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-primary-600">{index + 1}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{destination.name}</div>
                      <div className="text-sm text-gray-500">{destination.visitors} visitors</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {destination.trend === "up" ? (
                      <ArrowUp className="w-4 h-4 text-green-500" />
                    ) : (
                      <ArrowDown className="w-4 h-4 text-red-500" />
                    )}
                    <span className="text-sm font-medium text-green-600">{destination.growth}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Emerging Trends */}
          <div className="card p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Emerging Trends</h3>
              <TrendingUp className="w-6 h-6 text-primary-600" />
            </div>
            
            <div className="space-y-6">
              {trends.map((trend, index) => {
                const Icon = trend.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${trend.color}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{trend.title}</h4>
                        <span className="text-lg font-bold text-primary-600">{trend.percentage}</span>
                      </div>
                      <p className="text-sm text-gray-600">{trend.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Interactive Dashboard Preview */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Interactive Dashboard Preview</h3>
            <p className="text-gray-300">Experience the power of real-time tourism data</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <BarChart3 className="w-6 h-6 text-blue-400" />
                <span className="text-sm text-gray-300">Revenue Analytics</span>
              </div>
              <div className="h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                <span className="text-white/50 text-sm">📊 Live Charts</span>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <PieChart className="w-6 h-6 text-green-400" />
                <span className="text-sm text-gray-300">Market Share</span>
              </div>
              <div className="h-32 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                <span className="text-white/50 text-sm">📈 Market Data</span>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <MapPin className="w-6 h-6 text-orange-400" />
                <span className="text-sm text-gray-300">Geographic Data</span>
              </div>
              <div className="h-32 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center">
                <span className="text-white/50 text-sm">🗺️ Global Map</span>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button className="btn-primary">
              Access Full Dashboard
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataInsights;
