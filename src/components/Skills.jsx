import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "HTML5", level: 90, color: "bg-orange-500" },
        { name: "CSS3", level: 85, color: "bg-blue-500" },
        { name: "JavaScript", level: 80, color: "bg-yellow-500" },
      
      ]
    },
    {
      title: "Backend Technologies",
      skills: [
        { name: "PHP", level: 85, color: "bg-purple-500" },
        { name: "Laravel", level: 80, color: "bg-red-500" },
        { name: "MySQL", level: 75, color: "bg-blue-600" },
        { name: "API Development", level: 70, color: "bg-green-500" }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 75, color: "bg-gray-600" },
        { name: "Responsive Design", level: 85, color: "bg-pink-500" },
        { name: "Debugging", level: 80, color: "bg-indigo-500" }
      ]
    }
  ]

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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: { duration: 1.5, ease: "easeOut" }
    })
  }

  return (
    <section id="skills" className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-full xl:max-w-[1400px] 2xl:max-w-[1600px]">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 transition-colors duration-300">Technical Skills</h2>
            <div className="w-20 h-1 bg-purple-600 dark:bg-purple-400 mx-auto mb-6 transition-colors duration-300"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-full xl:max-w-3xl 2xl:max-w-4xl mx-auto transition-colors duration-300">
              Here are the technologies and tools I work with to create amazing web applications
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 text-center transition-colors duration-300">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium transition-colors duration-300">{skill.name}</span>
                        <span className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 transition-colors duration-300">
                        <motion.div
                          className={`h-3 rounded-full ${skill.color}`}
                          variants={progressVariants}
                          custom={skill.level}
                          initial="hidden"
                          animate={inView ? "visible" : "hidden"}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Tags */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors duration-300">Other Skills & Interests</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-full xl:max-w-5xl 2xl:max-w-6xl mx-auto">
              {[
                "RESTful APIs", "MVC Architecture", "Database Design", "Version Control",
                "Project Management", "Team Collaboration", "Code Review", "Testing",
                "Performance Optimization", "Security Best Practices", "Agile Development"
              ].map((skill, index) => (
                <motion.span
                  key={index}
                  className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full text-sm hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 