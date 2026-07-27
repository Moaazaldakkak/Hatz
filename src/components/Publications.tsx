import { useState } from 'react'
import { FiCalendar, FiBook } from 'react-icons/fi'

const categories = ['All', 'Machine Learning', 'Computer Vision', 'NLP', 'Healthcare']

const publications = [
  { title: 'Deep Reinforcement Learning for Autonomous Navigation in Complex Environments', authors: 'Wilson, J., Chen, L., Patel, R.', journal: 'Nature Machine Intelligence, 2024', category: 'Machine Learning', year: 2024 },
  { title: 'A Novel Approach to Few-Shot Learning Using Meta-Learning Architectures', authors: 'Wilson, J., Kumar, A.', journal: 'ICML 2023', category: 'Machine Learning', year: 2023 },
  { title: 'Real-Time Object Detection with Adaptive Attention Mechanisms', authors: 'Wilson, J., Zhang, Y., Park, S.', journal: 'CVPR 2023', category: 'Computer Vision', year: 2023 },
  { title: 'Transformer-Based Models for Biomedical Text Mining', authors: 'Wilson, J., Thompson, M., Garcia, E.', journal: 'ACL 2022', category: 'NLP', year: 2022 },
  { title: 'AI-Assisted Diagnosis of Retinal Diseases Using Deep Learning', authors: 'Wilson, J., Brown, K., Lee, H.', journal: 'The Lancet Digital Health, 2022', category: 'Healthcare', year: 2022 },
  { title: 'Efficient Training of Large-Scale Neural Networks with Distributed Computing', authors: 'Wilson, J., Nakamura, T.', journal: 'NeurIPS 2021', category: 'Machine Learning', year: 2021 },
  { title: 'Semantic Segmentation of Medical Images Using GAN-Based Augmentation', authors: 'Wilson, J., Ahmed, S., Rossi, M.', journal: 'MICCAI 2021', category: 'Healthcare', year: 2021 },
  { title: 'Multilingual Sentiment Analysis Using Cross-Lingual Embeddings', authors: 'Wilson, J., Li, W.', journal: 'EMNLP 2020', category: 'NLP', year: 2020 },
]

export default function Publications() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All'
    ? publications
    : publications.filter(pub => pub.category === filter)

  return (
    <section id="publications" className="section-panel">
      <div className="section-header">
        <h2 className="section-title">Publications</h2>
        <p className="section-subtitle">Peer-reviewed research and academic papers</p>
      </div>

      <div className="publication-filters">
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

      <div className="publication-list">
        {filtered.map((pub, i) => (
          <div key={i} className="publication-item">
            <div className="pub-meta">
              <span><FiCalendar /> {pub.year}</span>
              <span><FiBook /> {pub.category}</span>
            </div>
            <h3 className="pub-title">{pub.title}</h3>
            <p className="pub-authors">{pub.authors}</p>
            <p className="pub-journal">{pub.journal}</p>
            <div className="pub-tags">
              <span className="pub-tag">{pub.category}</span>
              <span className="pub-tag">Peer Reviewed</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
