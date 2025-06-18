import React, { useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isDarkMode, toggleTheme } = useTheme()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white dark:bg-gray-800 shadow-lg fixed w-full top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            JATIN RATHOD
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Contact
            </button>
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              className="text-gray-700 dark:text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 py-2 text-left transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 py-2 text-left transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 py-2 text-left transition-colors"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 py-2 text-left transition-colors"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('education')}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 py-2 text-left transition-colors"
              >
                Education
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 py-2 text-left transition-colors"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header 