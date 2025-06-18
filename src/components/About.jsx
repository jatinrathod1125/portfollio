import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Lightbulb, Users, Globe } from 'lucide-react'

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="about" className="py-12 md:py-20 bg-white dark:bg-gray-900 transition-colors duration-300 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-full xl:max-w-[1400px] 2xl:max-w-[1600px]">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 transition-colors duration-300">About Me</h2>
            <div className="w-20 h-1 bg-purple-600 dark:bg-purple-400 mx-auto mb-6 transition-colors duration-300"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-full xl:max-w-3xl 2xl:max-w-4xl mx-auto transition-colors duration-300">
              Passionate about learning new technologies and improving code quality. 
              Looking to contribute to a dynamic team where I can grow my technical skills 
              and deliver impactful software solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors duration-300">
                Who I Am
              </h3>
              
              <div className="space-y-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                <p className="leading-relaxed">
                  I'm a Full Stack Developer with 6 months of hands-on experience in building 
                  modern web applications. My journey in web development started with a passion 
                  for creating digital solutions that make a difference.
                </p>
                
                <p className="leading-relaxed">
                  Skilled in building responsive front-end interfaces and robust back-end systems, 
                  I enjoy working with technologies like Laravel, PHP, React, and JavaScript to 
                  create seamless user experiences.
                </p>
                
                <p className="leading-relaxed">
                  I believe in continuous learning and staying updated with the latest industry 
                  trends and best practices in software development.
                </p>
              </div>

              {/* Languages */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors duration-300">Languages</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full text-sm transition-colors duration-300">
                    English
                  </span>
                  <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full text-sm transition-colors duration-300">
                    Hindi
                  </span>
                  <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full text-sm transition-colors duration-300">
                    Gujarati
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Features */}
            <motion.div variants={itemVariants}>
              <div className="grid gap-6">
                
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-lg transition-colors duration-300">
                  <div className="flex items-center mb-3">
                    <Code className="text-purple-600 dark:text-purple-400 mr-3" size={24} />
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Clean Code</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Writing maintainable, scalable, and well-documented code following best practices.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg transition-colors duration-300">
                  <div className="flex items-center mb-3">
                    <Lightbulb className="text-blue-600 dark:text-blue-400 mr-3" size={24} />
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Problem Solving</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Analytical thinking and creative problem-solving to deliver efficient solutions.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-lg transition-colors duration-300">
                  <div className="flex items-center mb-3">
                    <Users className="text-indigo-600 dark:text-indigo-400 mr-3" size={24} />
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Team Player</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Collaborative approach working with designers and backend teams effectively.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-lg transition-colors duration-300">
                  <div className="flex items-center mb-3">
                    <Globe className="text-green-600 dark:text-green-400 mr-3" size={24} />
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Full Stack</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Experience in both front-end and back-end development with modern technologies.
                  </p>
                </div>

              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 