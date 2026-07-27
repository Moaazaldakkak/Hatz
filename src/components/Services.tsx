import { FiMonitor, FiEdit, FiBarChart2, FiBook, FiUsers, FiSearch } from 'react-icons/fi'

const services = [
  { icon: FiMonitor, title: 'Research Consulting', desc: 'Expert guidance on research methodology, experimental design, and statistical analysis for academic projects.' },
  { icon: FiEdit, title: 'Paper Review & Editing', desc: 'Comprehensive peer review and editing services for academic papers, theses, and grant proposals.' },
  { icon: FiBarChart2, title: 'Data Analytics', desc: 'Advanced data analysis, visualization, and interpretation using state-of-the-art statistical methods.' },
  { icon: FiBook, title: 'Academic Mentoring', desc: 'One-on-one mentoring for graduate students and early-career researchers in computer science.' },
  { icon: FiUsers, title: 'Workshops & Training', desc: 'Customized training sessions on AI, machine learning, and data science for academic institutions.' },
  { icon: FiSearch, title: 'Literature Reviews', desc: 'Systematic literature reviews and meta-analyses to support your research initiatives.' },
]

export default function Services() {
  return (
    <section id="services" className="section-panel">
      <div className="section-header">
        <h2 className="section-title">Services</h2>
        <p className="section-subtitle">What I offer to the academic community</p>
      </div>

      <div className="services-grid">
        {services.map((service, i) => (
          <div key={i} className="service-card">
            <div className="service-icon"><service.icon /></div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
