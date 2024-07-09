import React, { useState, useEffect } from "react"
import { Sun, MoonStar, Twitter, Linkedin, Mail, ExternalLink, Github } from "lucide-react"

const projects = [
  { id: 1, title: "Project 1", description: "A brief description of Project 1", link: "#" },
  { id: 2, title: "Project 2", description: "A brief description of Project 2", link: "#" },
  { id: 3, title: "Project 3", description: "A brief description of Project 3", link: "#" }
]

const skills = [
  "Python",
  "Django",
  "Flask",
  "HTML",
  "CSS",
  "Express",
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Tailwind",
  "Node.js",
  "Express",
  "MongoDB",
  "Git/Github"
]

const PortfolioSite = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <div
      className={`min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300`}
    >
      <header className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-10">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold">
            John Doe
          </a>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#about" className="hover:text-blue-500 transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-blue-500 transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-500 transition-colors">
              Contact
            </a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {darkMode ? <Sun size={20} /> : <MoonStar size={20} />}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 animate-fade-in">John Doe</h1>
            <p className="text-2xl mb-8 animate-fade-in-delay">Web Developer & Designer</p>
            <a
              href="#contact"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition-colors animate-fade-in-delay-2"
            >
              Get in touch
            </a>
          </div>
        </section>

        <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <div className="max-w-3xl mx-auto">
              <p className="mb-6">
                I'm a passionate web developer with a keen eye for design and a love for creating intuitive, dynamic
                user experiences. With expertise in modern web technologies, I bring ideas to life through clean,
                efficient code.
              </p>
              <h3 className="text-3xl font-semibold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2 content-evenly">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map(project => (
                <div
                  key={project.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <a href={project.link} className="text-blue-500 hover:text-blue-600 inline-flex items-center">
                      View Project <ExternalLink size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
            <div className="max-w-md mx-auto">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-200 dark:bg-gray-800 py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 John Doe. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default PortfolioSite
