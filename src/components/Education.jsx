import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react'

const Education = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const education = [
    {
      degree: "Commerce (Core Commerce Subjects)",
      institution: "P.G.Patel Commerce College",
      university: "Saurashtra University",
      duration: "June 2022 - March 2025",
      location: "Morbi, Gujarat",
      description: "Focused on core commerce subjects with additional interest in IT and web technologies. Simultaneously pursued web development through self-learning and internships.",
      highlights: [
        "Core Commerce Subjects",
        "IT and Web Technologies Interest",
        "Self-learning in Web Development",
        "Practical Experience through Internships"
      ],
      type: "Undergraduate"
    }
  ]

  const achievements = [
    {
      title: "Self-Taught Web Developer",
      description: "Learned web development technologies through online resources and practical projects",
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Internship Success",
      description: "Successfully completed 6-month internship while managing college studies",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Practical Learning",
      description: "Gained hands-on experience with real-world projects during studies",
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-600"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="education" className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-full xl:max-w-[1400px] 2xl:max-w-[1600px]">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 transition-colors duration-300">Education</h2>
            <div className="w-20 h-1 bg-purple-600 dark:bg-purple-400 mx-auto mb-6 transition-colors duration-300"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-full xl:max-w-3xl 2xl:max-w-4xl mx-auto transition-colors duration-300">
              My educational background and continuous learning journey in technology
            </p>
          </motion.div>

          {/* Education Cards */}
          <div className="max-w-full xl:max-w-5xl 2xl:max-w-6xl mx-auto mb-16">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8 transition-colors duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Education Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-purple-600 dark:bg-purple-500 rounded-full flex items-center justify-center transition-colors duration-300">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Education Details */}
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 transition-colors duration-300">
                          {edu.degree}
                        </h3>
                        <h4 className="text-xl text-purple-600 dark:text-purple-400 font-semibold mb-1 transition-colors duration-300">
                          {edu.institution}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 mb-3 transition-colors duration-300">{edu.university}</p>
                      </div>
                      
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full text-sm font-medium self-start lg:self-center transition-colors duration-300">
                        {edu.type}
                      </span>
                    </div>

                    {/* Meta Information */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-4 text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
                      {edu.description}
                    </p>

                    {/* Highlights */}
                    <div>
                      <h5 className="font-semibold text-gray-800 dark:text-white mb-3 transition-colors duration-300">Key Highlights:</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <div key={highlightIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full transition-colors duration-300"></div>
                            <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-12 transition-colors duration-300">
              Learning Achievements
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-full xl:max-w-5xl 2xl:max-w-6xl mx-auto">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`w-16 h-16 ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    {achievement.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 transition-colors duration-300">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors duration-300">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Learning Philosophy */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-8 rounded-lg max-w-full xl:max-w-4xl 2xl:max-w-5xl mx-auto transition-colors duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors duration-300">
                Learning Philosophy
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg transition-colors duration-300">
                "I believe in continuous learning and adapting to new technologies. 
                My journey from commerce to web development shows my passion for 
                technology and commitment to self-improvement. I combine theoretical 
                knowledge with practical experience to create meaningful solutions."
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education 