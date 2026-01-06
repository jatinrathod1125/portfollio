import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Layers, Database, ShoppingCart, Code } from 'lucide-react'

const Projects = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    })

    const projects = [
        {
            title: "Blade CRUD System",
            description: "A complete CRUD (Create, Read, Update, Delete) system built with Laravel Blade templates. Features a clean, responsive UI styled completely with Tailwind CSS.",
            image: "/images/crud.png",
            tags: ["Laravel", "Blade", "Tailwind CSS", "MySQL"],
            icon: <Layers className="w-6 h-6" />,
            color: "from-purple-500 to-indigo-500",
            links: {
                demo: "https://github.com/jatinrathod1125/crud.git",
                github: "https://github.com/jatinrathod1125/crud.git"
            }
        },
        // {
        //     title: "API Driven CRUD",
        //     description: "Dynamic frontend application that interacts with a REST API using jQuery. Handles asynchronous data operations with real-time UI updates and Tailwind CSS styling.",
        //     image: "/images/api-crud.png",
        //     tags: ["REST API", "jQuery", "Tailwind CSS", "AJAX"],
        //     icon: <Database className="w-6 h-6" />,
        //     color: "from-blue-500 to-cyan-500",
        //     links: {
        //         demo: "#",
        //         github: "#"
        //     }
        // },
        {
            title: "Grocery E-commerce",
            description: "Full-featured grocery e-commerce platform. Includes a customer-facing storefront and a comprehensive Admin Panel for managing products, orders, and users.",
            image: "/images/home.png",
            tags: ["Laravel", "PHP", "E-commerce", "Admin Panel"],
            icon: <ShoppingCart className="w-6 h-6" />,
            color: "from-green-500 to-emerald-500",
            links: {
                demo: "https://github.com/jatinrathod1125/jmstore.git",
                github: "https://github.com/jatinrathod1125/jmstore.git"
            }
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
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }

    return (
        <section id="projects" className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300 w-full">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-full xl:max-w-[1400px] 2xl:max-w-[1600px]">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 transition-colors duration-300">Featured Projects</h2>
                        <div className="w-20 h-1 bg-purple-600 dark:bg-purple-400 mx-auto mb-6 transition-colors duration-300"></div>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-full xl:max-w-3xl 2xl:max-w-4xl mx-auto transition-colors duration-300">
                            A showcase of my technical projects and web development work
                        </p>
                    </motion.div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                            >
                                {/* Project Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20 group-hover:opacity-10 transition-opacity duration-300 z-10`}></div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 z-20 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md text-gray-700 dark:text-gray-300">
                                        {project.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 transition-colors duration-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4 h-20 line-clamp-3 transition-colors duration-300">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors duration-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-sm font-medium"
                                        >
                                            <Github size={16} />
                                            GitHub Repo
                                        </a>
                                        {/* <a 
                                            href={project.links.demo} 
                                            className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors ml-auto"
                                        >
                                            <ExternalLink size={16} />
                                            Live Demo
                                        </a> */}
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

export default Projects
