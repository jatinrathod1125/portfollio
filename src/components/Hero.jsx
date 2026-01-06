import React from 'react'
import { motion } from 'framer-motion'
import { Download, Mail, Phone, MapPin, Linkedin } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 pt-16 md:pt-20 transition-colors duration-300 w-full flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">

          {/* Left Content */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left w-full"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4 transition-colors duration-300 leading-tight">
              JATIN <span className="text-purple-600 dark:text-purple-400">RATHOD</span>
            </h1>

            <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
              Full Stack Developer
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed transition-colors duration-300">
              Fresher, Laravel developer with hands-on internship experience in building CRUD modules,
              authentication, and database relationships.Entry-level Laravel developer with hands-on
              experience building admin panels, CRUD systems, and role-based authentication. Looking
              to contribute to real-world backend systems.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col lg:flex-row gap-4 mb-8 text-sm">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                <MapPin size={16} className="text-purple-600 dark:text-purple-400" />
                <span>Morbi, Gujarat</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                <Phone size={16} className="text-purple-600 dark:text-purple-400" />
                <span>+91 9427315937</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                <Mail size={16} className="text-purple-600 dark:text-purple-400" />
                <span>jmrathod1125@gmail.com</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="/resume.pdf" download>
                <button className="bg-purple-600 dark:bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors flex items-center gap-2 justify-center">
                  <Download size={20} />
                  Download CV
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/jatin-rathod-26543a342"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 px-6 py-3 rounded-lg hover:bg-purple-600 dark:hover:bg-purple-500 hover:text-white transition-colors flex items-center gap-2 justify-center"
              >
                <Linkedin size={20} />
                LinkedIn Profile
              </a>
            </div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-gradient-to-br from-purple-400 to-blue-500 dark:from-purple-600 dark:to-blue-700 rounded-full flex items-center justify-center transition-colors duration-300">
                <div className="w-56 h-60 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-white dark:bg-gray-800 rounded-full overflow-hidden transition-colors duration-300 ">
                  <img
                    src="/images/my.png"
                    alt="Jatin Rathod"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg dark:shadow-gray-900 transition-colors duration-300"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-purple-600 dark:text-purple-400 font-bold">React</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg dark:shadow-gray-900 transition-colors duration-300"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <div className="text-purple-600 dark:text-purple-400 font-bold">Laravel</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 