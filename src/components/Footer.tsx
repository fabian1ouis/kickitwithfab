import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Quick Links': [
      { name: 'Home', href: '/' },
      { name: 'Categories', href: '/categories' },
      { name: 'Latest News', href: '/blog' },
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' }
    ],
    'Sports': [
      { name: 'Football', href: '/categories/football' },
      { name: 'Basketball', href: '/categories/basketball' },
      { name: 'Baseball', href: '/categories/baseball' },
      { name: 'Soccer', href: '/categories/soccer' },
      { name: 'Tennis', href: '/categories/tennis' }
    ],
    'Resources': [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Advertise', href: '/advertise' },
      { name: 'Careers', href: '/careers' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Stay Ahead of the Game</h3>
            <p className="text-blue-100 text-lg mb-8">
              Get the latest sports news, analysis, and exclusive content delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/30"
              />
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors">
                Subscribe Now
              </button>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              Join 50,000+ sports fans who trust SportsPulse for their daily sports fix.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-orange-400 to-green-400 bg-clip-text text-transparent">
                SportsPulse
              </h2>
              <p className="text-gray-400 mt-2">Your Ultimate Sports Destination</p>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              SportsPulse is your premier source for comprehensive sports coverage, delivering the latest news, 
              in-depth analysis, and exclusive interviews from the world of athletics. We're passionate about 
              bringing you closer to the games you love.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail size={18} className="text-blue-400" />
                <span>contact@sportspulse.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone size={18} className="text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin size={18} className="text-blue-400" />
                <span>New York City, NY</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: '#', color: 'hover:text-blue-400' },
                { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
                { icon: Instagram, href: '#', color: 'hover:text-pink-400' },
                { icon: Youtube, href: '#', color: 'hover:text-red-400' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 ${social.color} hover:bg-gray-700 transition-all duration-300 transform hover:scale-110`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-bold text-white mb-6 relative">
                {category}
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-blue-500"></span>
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 text-gray-400 text-sm mb-4 md:mb-0">
              <span>© {currentYear} SportsPulse. All rights reserved.</span>
              <div className="hidden md:flex items-center space-x-4">
                <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
                <span>•</span>
                <a href="/terms" className="hover:text-white transition-colors">Terms</a>
                <span>•</span>
                <a href="/cookies" className="hover:text-white transition-colors">Cookies</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-gray-400 text-sm">
              <span>Made with ❤️ for Sports Fans</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Live Updates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;