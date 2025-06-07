import React, { useState, useEffect } from 'react';
import {
  ChevronDown,
  Mail,
  Phone,
  Github,
  Linkedin,
  ExternalLink,
  Code2,
  Database,
  Globe,
  Wrench,
  User,
  Briefcase,
  MessageCircle
} from 'lucide-react';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));

          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const techSkills = {
    languages: ['JavaScript', 'HTML5', 'CSS3', 'Python', 'PHP'],
    frameworks: ['React', 'Firebase', 'Node.js'],
    tools: ['Git', 'XAMPP', 'MySQL', 'VS Code'],
  };

  const projects = [
    {
      title: 'E-commerce Platform',
      description:
        'Built a full-featured e-commerce platform using React, Node.js, and MongoDB featuring product browsing, user authentication, and payment integration.',
      features: ['Product Listings', 'Cart System', 'User Login', 'Payment Integration'],
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      link: '#',
    },
    {
      title: 'Task Management App',
      description:
        'Created a task management tool with drag-and-drop support, allowing users to track daily progress and team collaboration.',
      features: ['Task Categories', 'Drag-and-Drop', 'Realtime Updates'],
      tech: ['React', 'Firebase', 'Material UI'],
      link: '#',
    },
    {
      title: 'KED Online Portal',
      description:
        'Developed a web portal for college departments using the XAMPP stack. The system manages internal documentation and notices.',
      features: ['Admin Panel', 'CRUD Operations', 'Document Uploads'],
      tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'XAMPP'],
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen gradient-bg">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 nav-glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gradient">Sohan H G</div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:text-blue-400 ${
                    activeSection === item
                      ? 'text-blue-400 border-b-2 border-blue-400 pb-1'
                      : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse-delay"></div>
        </div>

        <div className="text-center z-10 px-4">
          <div className="mb-8 animate-fadeIn">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 text-gradient">Sohan H G</h1>
            <div className="text-xl md:text-2xl text-gray-300 mb-6 space-y-2">
              <p className="flex items-center justify-center gap-2">
                <Code2 className="w-6 h-6 text-blue-400" />
                Web Developer
              </p>
              <p className="flex items-center justify-center gap-2">
                <Globe className="w-6 h-6 text-purple-400" />
                Designer
              </p>
              <p className="flex items-center justify-center gap-2">
                <Database className="w-6 h-6 text-pink-400" />
                Creative Thinker
              </p>
            </div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              I'm a Computer Science student passionate about designing and developing modern web applications. 
              Always exploring new tools, and turning ideas into interactive experiences.
            </p>
          </div>

          <button onClick={() => scrollToSection('about')} className="mt-12 animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-blue-400" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
              <User className="w-10 h-10 text-blue-400" />
              About Me
            </h2>
            <div className="glass-effect rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-blue-400">Education</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold">Computer Science Engineering</h4>
                        <p className="text-gray-400">Malnad College of Engineering</p>
                        <p className="text-sm text-gray-500">2023 - 2026</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-purple-400">Passion</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Driven by curiosity and creativity, I love building digital experiences that matter. 
                    From crafting elegant user interfaces to architecting robust backend systems, 
                    I'm always eager to learn and implement cutting-edge technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
              <Wrench className="w-10 h-10 text-blue-400" />
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(techSkills).map(([category, skills], index) => (
                <div key={category} className="glass-effect rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-4 capitalize text-center">
                    {category === 'frameworks'
                      ? 'Frameworks & Libraries'
                      : category === 'tools'
                      ? 'Tools & Platforms'
                      : 'Languages'}
                  </h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                          index === 0
                            ? 'bg-blue-500/20 text-blue-400 border border-blue-400/30'
                            : index === 1
                            ? 'bg-purple-500/20 text-purple-400 border border-purple-400/30'
                            : 'bg-pink-500/20 text-pink-400 border border-pink-400/30'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
              <Briefcase className="w-10 h-10 text-blue-400" />
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="glass-effect rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">{project.title}</h3>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-green-400">Key Features:</h4>
                    <ul className="text-xs text-gray-400 space-y-1">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-gray-700/50 text-gray-300 rounded border border-gray-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
              <MessageCircle className="w-10 h-10 text-blue-400" />
              Get In Touch
            </h2>
            <div className="text-center mb-12">
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                I'm always excited to work on new projects and collaborate with creative minds. 
                Let's build something amazing together!
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <a href="mailto:sohanhg12@gmail.com" className="glass-effect rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 group text-center">
                <Mail className="w-8 h-8 mx-auto mb-3 text-blue-400 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-gray-400">sohanhg12@gmail.com</p>
              </a>
              <a href="tel:+6360897382" className="glass-effect rounded-xl p-6 hover:border-green-400/50 transition-all duration-300 hover:scale-105 group text-center">
                <Phone className="w-8 h-8 mx-auto mb-3 text-green-400 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-sm text-gray-400">+91 6360897382</p>
              </a>
              <a href="https://linkedin.com/in/sohan-hg" target="_blank" rel="noopener noreferrer" className="glass-effect rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 group text-center">
                <Linkedin className="w-8 h-8 mx-auto mb-3 text-purple-400 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <p className="text-sm text-gray-400">sohan-hg</p>
              </a>
              <a href="https://github.com/sohan-hg" target="_blank" rel="noopener noreferrer" className="glass-effect rounded-xl p-6 hover:border-pink-400/50 transition-all duration-300 hover:scale-105 group text-center">
                <Github className="w-8 h-8 mx-auto mb-3 text-pink-400 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">GitHub</h3>
                <p className="text-sm text-gray-400">sohanhg</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/10">
        <p className="text-gray-400">© 2025 Sohan H G. Built with React</p>
      </footer>
    </div>
  );
};

export default App;
