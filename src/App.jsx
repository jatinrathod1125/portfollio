import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Context
import { ThemeProvider } from './contexts/ThemeContext'

// Public components
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Portfolio page component
const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden">
      <Header />
      <main className="w-full">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

// App component
const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
