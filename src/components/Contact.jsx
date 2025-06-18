import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send, Linkedin, Github, Globe, Loader } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Always success since we're not making an actual API call
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! I will get back to you soon.'
      })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Contact form error:', error)
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "jmrathod1125@gmail.com",
      link: "mailto:jmrathod1125@gmail.com",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 9427315937",
      link: "tel:+919427315937",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Morbi, Gujarat, India",
      link: "#",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "linkedin.com/in/jatin-rathod-26543a342",
      link: "https://www.linkedin.com/in/jatin-rathod-26543a342",
      color: "bg-linkedin-100 text-blue-700"
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="contact" className="py-12 md:py-20 bg-white dark:bg-gray-900 transition-colors duration-300 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-full xl:max-w-[1400px] 2xl:max-w-[1600px]">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 transition-colors duration-300">Get In Touch</h2>
            <div className="w-20 h-1 bg-purple-600 dark:bg-purple-400 mx-auto mb-6 transition-colors duration-300"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-full xl:max-w-3xl 2xl:max-w-4xl mx-auto transition-colors duration-300">
              I'm always open to discussing new opportunities and exciting projects. 
              Let's connect and create something amazing together!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-full xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto">
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-8 transition-colors duration-300">
                Let's Connect
              </h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className={`w-12 h-12 ${info.color} rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white transition-colors duration-300">{info.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-8 transition-colors duration-300">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors duration-300">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://www.linkedin.com/in/jatin-rathod-26543a342"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin size={20} />
                  </motion.a>
                  <motion.a
                    href="mailto:jmrathod1125@gmail.com"
                    className="w-12 h-12 bg-red-600 dark:bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-700 dark:hover:bg-red-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Mail size={20} />
                  </motion.a>
                  <motion.a
                    href="tel:+919427315937"
                    className="w-12 h-12 bg-green-600 dark:bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-700 dark:hover:bg-green-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Phone size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-8 transition-colors duration-300">
                Send Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 focus:border-transparent transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                {/* Status Message */}
                {submitStatus && (
                  <div className={`p-4 rounded-lg mb-4 transition-colors duration-300 ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800' 
                      : 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 font-semibold ${
                    isSubmitting 
                      ? 'bg-gray-400 dark:bg-gray-600 text-gray-700 dark:text-gray-300 cursor-not-allowed' 
                      : 'bg-purple-600 dark:bg-purple-500 text-white hover:bg-purple-700 dark:hover:bg-purple-600'
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <Loader size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact