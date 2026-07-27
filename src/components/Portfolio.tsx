import { useState } from 'react'

const categories = ['All', 'Research', 'Teaching', 'Projects', 'Awards']

const portfolioItems = [
  { title: 'AI in Healthcare', category: 'Research', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop' },
  { title: 'Deep Learning Workshop', category: 'Teaching', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop' },
  { title: 'Neural Network Visualizer', category: 'Projects', img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop' },
  { title: 'Best Paper Award 2023', category: 'Awards', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop' },
  { title: 'NLP Research Lab', category: 'Research', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop' },
  { title: 'CS 229 Course Design', category: 'Teaching', img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop' },
  { title: 'Open Source ML Library', category: 'Projects', img: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=300&fit=crop' },
  { title: 'Excellence in Research', category: 'Awards', img: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=400&h=300&fit=crop' },
  { title: 'Computer Vision Research', category: 'Research', img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop' },
]

export default function Portfolio() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filter)

  return (
    <section id="portfolio" className="section-panel">
      <div className="section-header">
        <h2 className="section-title">Portfolio</h2>
        <p className="section-subtitle">Selected works and achievements</p>
      </div>

      <div className="portfolio-filters">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filtered.map((item, i) => (
          <div key={i} className="portfolio-item">
            <img src={item.img} alt={item.title} loading="lazy" />
            <div className="portfolio-overlay">
              <h4>{item.title}</h4>
              <span>{item.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
