import './App.css'

function App() {
  const myProjects = [
    { id: 1, title: "MARKET Cloud POS", desc: "نظام مبيعات سحابي متكامل يعتمد على الـ Real-time data.", tech: "Firebase & Tailwind" },
    { id: 2, title: "Kareem Academy", desc: "منصة تعليمية متطورة (LMS) مع نظام إدارة محتوى كامل.", tech: "React & CSS" },
    { id: 3, title: "Cybersecurity Tool", desc: "أداة ذكية لفحص ثغرات الشبكات اللاسلكية والتدقيق الأمني.", tech: "Python & Linux" }
  ];

  const skills = ["React.js", "JavaScript", "Tailwind CSS", "Firebase", "Web Automation", "Cybersecurity"];

  return (
    <div className="app-wrapper">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="dragon-avatar animate-float">🐉</div>
        <h1 className="main-title">KAREEM AGWA</h1>
        <p className="subtitle">AI PROGRAMMER & WEB DEVELOPER</p>
        <div className="social-pills">
          <span className="pill">GitHub</span>
          <span className="pill">LinkedIn</span>
        </div>
      </header>

      {/* Skills Section */}
      <section className="skills-section animate-on-scroll">
        <div className="skills-container">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="work-section">
        <h2 className="section-label">Selected Projects</h2>
        <div className="projects-grid">
          {myProjects.map((project) => (
            <div key={project.id} className="project-card animate-on-scroll">
              <span className="proj-tech">{project.tech}</span>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <button className="view-btn">Discover More</button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section animate-on-scroll">
        <h2 className="section-label">Get In Touch</h2>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
          </div>
          <textarea placeholder="How can I help you?" rows="5" required></textarea>
          <button type="submit" className="send-btn">Send Message 🚀</button>
        </form>
      </section>

      <footer className="contact-footer">
        <p>© 2026 Programming Dragon | Built with ❤️ by Kareem</p>
      </footer>
    </div>
  )
}

export default App