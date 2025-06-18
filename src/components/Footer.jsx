import React from 'react'
import { Heart, Mail, Phone, Linkedin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jatin-rathod-26543a342',
      icon: <Linkedin size={20} />,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      href: 'mailto:jmrathod1125@gmail.com',
      icon: <Mail size={20} />,
      color: 'hover:text-red-600'
    },
    {
      name: 'Phone',
      href: 'tel:+919427315937',
      icon: <Phone size={20} />,
      color: 'hover:text-green-600'
    }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-300 w-full">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 md:py-12 max-w-full xl:max-w-[1400px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold text-purple-400 dark:text-purple-300 mb-4 transition-colors duration-300">
              JATIN RATHOD
            </h3>
            <p className="text-gray-300 dark:text-gray-400 mb-6 leading-relaxed transition-colors duration-300">
              Full Stack Developer passionate about creating innovative web solutions 
              using modern technologies like Laravel, PHP, React, and JavaScript.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className={`text-gray-400 ${social.color} transition-colors`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-300 hover:text-purple-400 transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-purple-400" />
                <a 
                  href="mailto:jmrathod1125@gmail.com"
                  className="hover:text-purple-400 transition-colors"
                >
                  jmrathod1125@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-purple-400" />
                <a 
                  href="tel:+919427315937"
                  className="hover:text-purple-400 transition-colors"
                >
                  +91 9427315937
                </a>
              </div>
              <div className="flex items-start gap-3">
                <svg 
                  className="w-4 h-4 text-purple-400 mt-0.5" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Morbi, Gujarat, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 dark:border-gray-700 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-4 md:py-6 max-w-full xl:max-w-[1400px] 2xl:max-w-[1600px]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-300 dark:text-gray-400 text-sm transition-colors duration-300">
              <span>© {currentYear} Jatin Rathod. Made with</span>
              <Heart size={16} className="text-red-500 dark:text-red-400" />
              <span>using React & Laravel</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-300 dark:text-gray-400 transition-colors duration-300">
              <span>Available for freelance work</span>
              <button
                onClick={scrollToTop}
                className="text-purple-400 dark:text-purple-300 hover:text-purple-300 dark:hover:text-purple-200 transition-colors"
              >
                Back to top ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 