import { FiBriefcase, FiBook } from 'react-icons/fi'

const experience = [
  {
    date: '2018 — Present',
    title: 'Associate Professor',
    institution: 'Stanford University',
    desc: 'Leading research in machine learning and AI. Teaching graduate-level courses in deep learning and natural language processing.',
  },
  {
    date: '2013 — 2018',
    title: 'Assistant Professor',
    institution: 'MIT Computer Science',
    desc: 'Conducted research in computer vision and pattern recognition. Published 25+ papers in top-tier conferences.',
  },
  {
    date: '2011 — 2013',
    title: 'Postdoctoral Researcher',
    institution: 'Berkeley AI Research Lab',
    desc: 'Worked on probabilistic graphical models and their applications in healthcare analytics and diagnosis systems.',
  },
]

const education = [
  {
    date: '2007 — 2011',
    title: 'Ph.D. in Computer Science',
    institution: 'University of Cambridge',
    desc: 'Thesis: "Advances in Deep Reinforcement Learning for Complex Decision Making." GPA: 4.0',
  },
  {
    date: '2005 — 2007',
    title: 'M.Sc. in Artificial Intelligence',
    institution: 'ETH Zurich',
    desc: 'Specialized in neural networks and computational intelligence. Thesis on transfer learning.',
  },
  {
    date: '2001 — 2005',
    title: 'B.Sc. in Computer Engineering',
    institution: 'University of Tokyo',
    desc: 'Graduated with honors. Dean\'s list all semesters. Focus on algorithms and data structures.',
  },
]

export default function Resume() {
  return (
    <section id="resume" className="section-panel">
      <div className="section-header">
        <h2 className="section-title">Resume</h2>
        <p className="section-subtitle">My academic journey and professional experience</p>
      </div>

      <div className="resume-grid">
        <div className="resume-column">
          <h3><FiBriefcase /> Experience</h3>
          <div className="timeline">
            {experience.map((item, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-title">{item.title}</div>
                <div className="timeline-institution">{item.institution}</div>
                <div className="timeline-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="resume-column">
          <h3><FiBook /> Education</h3>
          <div className="timeline">
            {education.map((item, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-title">{item.title}</div>
                <div className="timeline-institution">{item.institution}</div>
                <div className="timeline-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
