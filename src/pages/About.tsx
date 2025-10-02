import React from 'react';
import { Users, Award, Clock, Target, Heart, Globe } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users, value: '50K+', label: 'Daily Readers' },
    { icon: Award, value: '500+', label: 'Articles Published' },
    { icon: Clock, value: '24/7', label: 'Live Coverage' },
    { icon: Globe, value: '100+', label: 'Countries Reached' }
  ];

  const teamMembers = [
    {
      name: 'Michael Rodriguez',
      role: 'Editor-in-Chief',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: '15+ years of sports journalism experience, former ESPN correspondent.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Senior Sports Analyst',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Olympic athlete turned analyst, specializing in track and field sports.'
    },
    {
      name: 'David Chen',
      role: 'Basketball Correspondent',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Former college player with deep insights into professional basketball.'
    },
    {
      name: 'Emma Thompson',
      role: 'Football Reporter',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Covering NFL and college football with unmatched passion and expertise.'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Accuracy First',
      description: 'We prioritize factual reporting and thorough fact-checking in all our content.'
    },
    {
      icon: Heart,
      title: 'Passion-Driven',
      description: 'Our love for sports fuels everything we do, from breaking news to in-depth analysis.'
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'We build connections between fans and create engaging discussions about the games we love.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Kick it with Fab
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-inter">
            Your ultimate destination for comprehensive sports coverage, bringing you closer to the games, 
            athletes, and stories that matter most.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="prose prose-lg text-gray-600 font-inter">
                <p className="mb-6 leading-relaxed">
                  Founded in 2018 by a team of passionate sports enthusiasts, Kick it with Fab began as a simple blog 
                  dedicated to providing authentic, insightful sports coverage. What started as a weekend project 
                  has grown into a trusted source for sports news, reaching thousands of fans worldwide.
                </p>
                <p className="mb-6 leading-relaxed">
                  Our journey has been fueled by an unwavering commitment to quality journalism and a deep 
                  understanding of what sports fans truly want: accurate reporting, expert analysis, and stories 
                  that capture the human side of athletics.
                </p>
                <p className="leading-relaxed">
                  Today, Kick it with Fab continues to evolve, embracing new technologies and platforms while staying 
                  true to our core mission: connecting fans to the sports they love through exceptional storytelling.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/159740/library-la-trobe-study-students-159740.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Our newsroom"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute top-8 left-8 w-full h-full bg-blue-600 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
              These core principles guide everything we do and shape how we serve our community of sports fans.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed font-inter">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
              Our diverse team of experienced journalists, former athletes, and sports analysts brings unique 
              perspectives to every story we tell.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed font-inter">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto font-inter">
            Become part of a passionate community of sports fans. Get exclusive content, 
            participate in discussions, and never miss the latest sports news.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/30"
            />
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;