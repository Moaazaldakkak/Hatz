import { useState, useRef } from 'react';
import { timelineData, projects, skillGroups } from '../data';

export default function Home({ onContact }: { onContact: () => void }) {
  return (
    <div className="home pagescroll pt-page pt-page-1">
      <div className="relative">
        {/* Background lines */}
        <div className="background-lines-container">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className={`backline${i === 0 || i === 6 ? ' edge' : ''}`} />
          ))}
        </div>

        {/* Hero */}
        <HeroSection />

        {/* About */}
        <AboutSection />

        {/* Timeline */}
        <TimelineSection />

        {/* Projects */}
        <ProjectsSection />

        {/* Skills */}
        <SkillsSection />

        {/* Contact trigger at bottom */}
        <div style={{ textAlign: 'center', padding: '40px 30px', borderTop: '1px solid var(--border-line)' }}>
          <button className="btn-primary" onClick={onContact}>
            Get in Touch
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

/* Hero */
function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-bg-left" />
      <div className="hero-bg-right" />
      <div className="hero-content">
        <div className="hero-inner">
          <div className="hero-subtitle">PHD STUDENT / DEVELOPER</div>
          <h1 className="hero-name">Christopher doe</h1>
          <p className="hero-tagline">
            I am a developer and passionate <br />about digital solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

/* About */
function AboutSection() {
  const items = [
    { title: 'EXPERIENCE', text: 'My extensive experience in the field is a testament to my expertise and dedication, consistently delivering outstanding results in the digital landscape. I\'m a seasoned professional who excels in the world of development.' },
    { title: 'AUTONOMY', text: 'I excel in my work with a strong sense of autonomy, making me a self-reliant and efficient developer. My ability to take initiative and drive projects forward independently has consistently proven to be a valuable asset in delivering successful digital solutions.' },
    { title: 'INVOLVMENT', text: 'I actively engage in every aspect of the development process, fostering collaboration and synergy within teams. My dedication to active involvement ensures that I contribute effectively to projects, creating seamless and innovative digital solutions.' },
  ];
  return (
    <section className="bg-b3">
      <div className="why-container">
        {/* Scroll to why button - desktop only */}
        <div className="hidden lg:block" style={{ height: '64px', marginBottom: '16px' }}>
          <div className="scrolltowhy">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 23.75V5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.75 18.75L14.1161 24.1161C14.5328 24.5328 14.7411 24.7411 15 24.7411C15.2589 24.7411 15.4672 24.5328 15.8839 24.1161L21.25 18.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Title + Description row */}
        <div className="about-row-title">
          <div className="about-title-col">
            <div className="why-title" style={{ marginTop: '24px' }}>
              <span className="titlebloc-cc" style={{ fontWeight: 100 }}>
                <span className="titletext">ABOUT MY </span>
              </span>
              <span className="titlebloc-cc" style={{ fontWeight: 700 }}>
                <span className="titletext">CAREER</span>
              </span>
            </div>
          </div>
          <div className="about-desc-col">
            <div className="why-description">
              I'm a passionate developer driven by a relentless pursuit of digital solutions. With a love for coding and innovation, I thrive on transforming ideas into impactful software. My dedication to crafting cutting-edge technology fuels my ongoing journey in the world of development.
            </div>
          </div>
        </div>

        {/* Image + Items row */}
        <div className="about-row-content">
          <div className="about-image-col">
            <div className="about-image-wrap">
              <img
                className="img-offset"
                src="https://seashell-seal-546316.hostingersite.com/wp-content/uploads/2022/11/workspace.jpg"
                alt=""
              />
            </div>
            <div className="about-moving-text-wrap">
              <h1 className="about-moving-text">GREAT</h1>
            </div>
          </div>
          <div className="about-items-col">
            <div className="why-items">
              {items.map((item, i) => (
                <div key={i} className="why-item" style={{ marginBottom: '24px' }}>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Timeline */
function TimelineSection() {
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: dir * 250, behavior: 'smooth' });
  };

  return (
    <section>
      <div className="timeline-wrapper">
        <div className="timeline-header">
          <div className="why-title" style={{ marginBottom: '50px' }}>
            <span className="titlebloc-white" style={{ color: 'white' }}>
              <span>EXPERIENCE </span>
            </span>
            <span className="titlebloc-white" style={{ color: 'white' }}>
              <span>& STUDIES</span>
            </span>
          </div>
        </div>

        <div className="timeline-slider-row">
          <button className="timeline-btn" onClick={() => scroll(-1)} style={{ marginRight: '16px' }}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.25 15L25 14.9998" stroke="#FEFEFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11.2499 8.75L5.88379 14.1161C5.46711 14.5328 5.25879 14.7411 5.25879 15C5.25879 15.2589 5.46711 15.4672 5.88379 15.8839L11.2499 21.25" stroke="#FEFEFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div ref={scrollRef} style={{ display: 'flex', overflow: 'hidden', flex: 1, gap: '12px' }}>
            {timelineData.map((item, i) => (
              <div
                key={i}
                className="timeline-item"
                onClick={() => setActive(i)}
                style={{ opacity: i === active ? 1 : 0.6, minWidth: '200px' }}
              >
                <div className="date">{item.date}</div>
                <div className="label">{item.label}</div>
                <div className="type">{item.type}</div>
              </div>
            ))}
          </div>
          <button className="timeline-btn" onClick={() => scroll(1)} style={{ marginLeft: '16px' }}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.75 15H5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18.75 8.75L24.1161 14.1161C24.5328 14.5328 24.7411 14.7411 24.7411 15C24.7411 15.2589 24.5328 15.4672 24.1161 15.8839L18.75 21.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="timeline-desc-row" style={{ paddingTop: '32px', paddingBottom: '32px' }}>
        <h3 className="hidden lg:inline-block">{timelineData[active].title}</h3>
        <p>{timelineData[active].description}</p>
      </div>
    </section>
  );
}

/* Projects */
function ProjectsSection() {
  const [current, setCurrent] = useState(0);
  const p = projects[current];

  return (
    <section>
      <div style={{ padding: '40px 30px' }}>
        <div className="section-inner">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="w-full lg:w-1/3">
              <div className="project-title" style={{ marginBottom: '24px' }}>
                <span className="titlebloc-cc" style={{ color: 'var(--pulse-secondary)' }}>
                  <span className="titletext">LATEST</span>
                </span>
                <span className="titlebloc-cc" style={{ color: 'var(--pulse-secondary)' }}>
                  <span className="titletext">PROJECTS</span>
                </span>
              </div>
              <div className="project-desc" style={{ marginBottom: '24px' }}>
                These are my latest projects, where I've applied my expertise to deliver cutting-edge digital solutions.
              </div>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                <button className="timeline-btn" style={{ background: 'var(--pulse-primary)' }} onClick={() => setCurrent(Math.max(0, current - 1))}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button className="timeline-btn" style={{ background: 'var(--pulse-primary)' }} onClick={() => setCurrent(Math.min(projects.length - 1, current + 1))}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {projects.map((proj, i) => (
                  <div key={proj.id} style={{
                    width: 50, height: 50, cursor: 'pointer', flexShrink: 0,
                    backgroundImage: `url(${proj.image})`,
                    backgroundSize: 'cover', backgroundPosition: 'center',
                    border: i === current ? '2px solid var(--pulse-primary)' : '2px solid transparent',
                  }} onClick={() => setCurrent(i)} />
                ))}
              </div>
            </div>
            <div className="w-full lg:w-2/3">
              <div className="project-card" style={{ backgroundImage: `url(${p.image})` }}>
                <div className="project-card-overlay" />
                <div className="project-card-content">
                  <div className="category">{p.category}</div>
                  <h3>{p.title}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Skills */
function SkillsSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-b3" style={{ padding: '40px 30px' }}>
      <div className="section-inner">
        <div className="why-title" style={{ marginBottom: '24px' }}>
          <span className="titlebloc-cc" style={{ color: 'var(--pulse-secondary)' }}>
            <span className="titletext">EXPERTISE </span>
          </span>
          <span className="titlebloc-cc" style={{ color: 'var(--pulse-secondary)' }}>
            <span className="titletext">& SKILLS</span>
          </span>
        </div>

        {skillGroups.map((group, i) => (
          <div key={group.name}>
            <input type="checkbox" id={`skill-${i}`} className="skills-toggle"
              checked={open === i} onChange={() => setOpen(open === i ? null : i)} />
            <label htmlFor={`skill-${i}`} className="skills-title">{group.name}</label>
            <div className="skills-content">
              {group.skills.map((s) => (
                <div key={s.name} className="skill-bar">
                  <div className="skill-bar-label">
                    <span>{s.name}</span>
                    <span>{s.level}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <div className="skill-bar-fill" style={{ width: `${s.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
