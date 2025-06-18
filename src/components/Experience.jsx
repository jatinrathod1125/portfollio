import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react'

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const experiences = [
    {
      company: "Perfect Webtech",
      position: "Full Stack Developer",
      duration: "Jan 2025 - Present",
      location: "Rajkot, Gujarat",
      type: "Full-time",
      description: "Working as a Full Stack Developer focusing on Laravel, PHP, and React Native for mobile app development.",
      responsibilities: [
        "Building dynamic web applications and mobile apps using REST APIs",
        "Collaborating with designers and backend teams to create responsive and scalable applications",
        "Performing debugging, API integrations, and handling database relationships using MySQL",
        "Working with Laravel framework for backend development"
      ],
      technologies: ["Laravel", "PHP", "React Native", "MySQL", "REST APIs"],
      current: true
    },
    {
      company: "Nityam Webtech",
      position: "Web Developer Intern",
      duration: "Aug 2024 - Jan 2025",
      location: "Rajkot, Gujarat", 
      type: "Internship",
      description: "Completed 6-month internship where I learned and worked on HTML, CSS, JavaScript, PHP, Laravel, and WordPress.",
      responsibilities: [
        "Built basic websites and admin dashboards with mobile-friendly design",
        "Gained understanding of MVC structure and backend development with Laravel",
        "Learned teamwork, project version control with Git, and debugging techniques",
        "Worked on WordPress projects and custom PHP applications"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "WordPress", "Git"],
      current: false
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
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <section id="experience" className="py-12 md:py-20 bg-white dark:bg-gray-900 transition-colors duration-300 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-full xl:max-w-[1400px] 2xl:max-w-[1600px]">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 transition-colors duration-300">Work Experience</h2>
            <div className="w-20 h-1 bg-purple-600 dark:bg-purple-400 mx-auto mb-6 transition-colors duration-300"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-full xl:max-w-3xl 2xl:max-w-4xl mx-auto transition-colors duration-300">
              My professional journey in software development and the experience I've gained
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="max-w-full xl:max-w-5xl 2xl:max-w-6xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative mb-12 last:mb-0"
              >
                {/* Timeline Line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-purple-200 dark:bg-purple-800 hidden md:block transition-colors duration-300"></div>
                )}
                
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Timeline Icon */}
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      exp.current ? 'bg-purple-600 dark:bg-purple-500' : 'bg-purple-100 dark:bg-purple-900'
                    }`}>
                      <Briefcase className={`w-6 h-6 ${
                        exp.current ? 'text-white' : 'text-purple-600 dark:text-purple-400'
                      }`} />
                    </div>
                  </div>

                  {/* Experience Card */}
                  <div className="flex-1 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-8 rounded-lg shadow-lg transition-colors duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1 transition-colors duration-300">
                          {exp.position}
                        </h3>
                        <h4 className="text-xl text-purple-600 dark:text-purple-400 font-semibold mb-2 transition-colors duration-300">
                          {exp.company}
                        </h4>
                      </div>
                      
                      {exp.current && (
                        <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium self-start lg:self-center transition-colors duration-300">
                          Current Position
                        </span>
                      )}
                    </div>

                    {/* Meta Information */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-4 text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase size={16} />
                        <span>{exp.type}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
                      {exp.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-800 dark:text-white mb-3 transition-colors duration-300">Key Responsibilities:</h5>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex} className="flex items-start gap-2 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                            <CheckCircle size={16} className="text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0 transition-colors duration-300" />
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h5 className="font-semibold text-gray-800 dark:text-white mb-3 transition-colors duration-300">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full text-sm border border-purple-200 dark:border-purple-800 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 