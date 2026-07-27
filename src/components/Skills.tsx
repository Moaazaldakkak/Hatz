import { useState, useEffect, useRef } from 'react'

const skills = [
  { name: 'Machine Learning', level: 95 },
  { name: 'Deep Learning', level: 90 },
  { name: 'Python / TensorFlow', level: 95 },
  { name: 'Computer Vision', level: 85 },
  { name: 'Natural Language Processing', level: 80 },
  { name: 'Data Science', level: 90 },
  { name: 'Research Methodology', level: 95 },
  { name: 'Academic Writing', level: 85 },
]

export default function Skills() {
  const [animated, setAnimated] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="section-panel" ref={ref}>
      <div className="section-header">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Technical & research competencies</p>
      </div>

      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div key={i} className="skill-item">
            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-fill"
                style={{ width: animated ? `${skill.level}%` : '0%' }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
