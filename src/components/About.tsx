import React from 'react';
import { Play, Clock, Trophy, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "48 Hours of Innovation",
      description: "Non-stop coding, learning, and building with developers from 50+ countries worldwide.",
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "$50,000+ in Prizes",
      description: "Compete for cash prizes, internships, and exclusive opportunities with top tech companies.",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Learn from the Best",
      description: "Workshops, mentorship, and guidance from industry experts and successful entrepreneurs.",
      gradient: "from-blue-400 to-cyan-500"
    }
  ];

  return (
    <section 
      id="about" 
      className="py-20 relative overflow-hidden"
      // Added inline style for the notebook background
      style={{
        backgroundColor: '#F8F8F8', // Light background for notebook paper
        backgroundImage: 
          'linear-gradient(to bottom, #d3e1f0 1px, transparent 1px), ' + // Blue lines for light mode
          'linear-gradient(to bottom, #2b3a4a 1px, transparent 1px)', // Darker lines for dark mode (will be controlled by media query or JS)
        backgroundSize: '100% 2em', // Adjust 2em for line spacing (e.g., typical notebook lines)
        backgroundPosition: 'left top',
        backgroundBlendMode: 'difference, normal', // Blends the gradients for dual-mode support
        minHeight: '100vh', // Ensure background covers full height
      }}
    >
      {/* Background gradient effects - Removed as they might interfere with the notebook lines.
          You can re-add them if you find a way to make them work subtley with the lines. */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div> */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
            What is United Hacks V6?
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light"> {/* Changed text color for readability on light background */}
            The premier global online hackathon bringing together the brightest minds from around the world. 
            Join us for 48 hours of innovation, collaboration, and world-changing solutions.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/50 backdrop-blur-md border border-white/30 rounded-2xl p-8 hover:bg-white/70 hover:border-white/50 transition-all duration-500 hover:scale-105 hover:-rotate-1 cursor-pointer" // Adjusted background and border for cards
              style={{
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)' // Adjusted shadow for lighter background
              }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div> {/* Adjusted opacity */}
              
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300"> {/* Changed text color for readability */}
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed group-hover:text-gray-600 transition-colors duration-300"> {/* Changed text color for readability */}
                {feature.description}
              </p>
              
              {/* Subtle glow effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Trailer Section */}
        <div className="text-center">
          <div className="relative inline-block">
            <div className="aspect-video w-full max-w-2xl mx-auto bg-white/50 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center group cursor-pointer hover:scale-105 transition-all duration-500" // Adjusted background and border for trailer
                 style={{
                   boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)' // Adjusted shadow
                 }}>
              
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div> {/* Adjusted opacity */}
              
              {/* Play button */}
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-300">
                  <Play className="w-10 h-10 text-white ml-1" fill="currentColor" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300"> {/* Changed text color for readability */}
                  Watch Official Trailer
                </h3>
                <p className="text-gray-600 group-hover:text-gray-500 transition-colors duration-300"> {/* Changed text color for readability */}
                  See what United Hacks is all about
                </p>
              </div>
              
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 -z-10"></div>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="mt-8">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold text-lg hover:from-cyan-400 hover:to-blue-400 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-3 mx-auto">
              <Play className="w-5 h-5" fill="currentColor" />
              Watch Trailer
              <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;