import { useState, useRef, useEffect } from 'react';
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
  const [movingText, setMovingText] = useState('GREAT');
  const [movingTop, setMovingTop] = useState(0);
  const h2Refs = useRef<(HTMLHeadingElement | null)[]>([]);
  const wrapRef = useRef<HTMLDivElement>(null);
  const items = [
    { title: 'EXPERIENCE', text: 'My extensive experience in the field is a testament to my expertise and dedication, consistently delivering outstanding results in the digital landscape. I\'m a seasoned professional who excels in the world of development.', moving: 'GREAT' },
    { title: 'AUTONOMY', text: 'I excel in my work with a strong sense of autonomy, making me a self-reliant and efficient developer. My ability to take initiative and drive projects forward independently has consistently proven to be a valuable asset in delivering successful digital solutions.', moving: 'STRONG' },
    { title: 'INVOLVMENT', text: 'I actively engage in every aspect of the development process, fostering collaboration and synergy within teams. My dedication to active involvement ensures that I contribute effectively to projects, creating seamless and innovative digital solutions.', moving: 'ACTIVE' },
  ];

  useEffect(() => {
    const onScroll = () => {
      const wrap = wrapRef.current;
      if (!wrap) return;
      const wrapTop = wrap.getBoundingClientRect().top + window.scrollY;
      let found = -1;
      h2Refs.current.forEach((el, i) => {
        if (!el) return;
        if (el.getBoundingClientRect().top < 60) found = i;
      });
      if (found >= 0) {
        const next = h2Refs.current[found + 1];
        if (next) {
          setMovingTop(next.getBoundingClientRect().top + window.scrollY - wrapTop);
          const nextItem = items[found + 1];
          if (nextItem) setMovingText(nextItem.moving);
        }
      } else {
        const first = h2Refs.current[0];
        if (first) {
          setMovingTop(first.getBoundingClientRect().top + window.scrollY - wrapTop);
          setMovingText(items[0].moving);
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Scroll to why button - desktop only */}
        <div className="hidden lg:block" style={{ height: '64px', marginBottom: '16px' }}>
          <div className="scrolltowhy" onClick={() => {
            const el = document.querySelector('.about-section');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 23.75V5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.75 18.75L14.1161 24.1161C14.5328 24.5328 14.7411 24.7411 15 24.7411C15.2589 24.7411 15.4672 24.5328 15.8839 24.1161L21.25 18.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Title + Description row */}
        <div className="about-row-title">
          <div className="about-title-col">
          <div className="why-title" style={{ marginTop: '24px', fontWeight: 100 }}>
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
            <div className="about-moving-text-wrap" ref={wrapRef}>
              <h1 className="about-moving-text" style={{ top: movingTop }}>{movingText}</h1>
            </div>
          </div>
          <div className="about-items-col">
            <div className="why-items">
              {items.map((item, i) => (
                <div key={i} data-movingtext={item.moving} className="why-item" style={{ marginBottom: '24px' }}>
                  <h2 ref={el => { h2Refs.current[i] = el; }}>{item.title}</h2>
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
      <div className="timeline-section" style={{ maxWidth: '1140px', margin: '0 auto' }}>
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
            <div ref={scrollRef} style={{ display: 'flex', overflowX: 'auto', flex: 1, gap: '12px' }}>
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
      </div>
    </section>
  );
}

/* Projects */
function ProjectsSection() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [hovering, setHovering] = useState(false);
  const total = projects.length;
  const nextIdx = (current + 1) % total;
  const p = projects[current];
  const next = projects[nextIdx];

  useEffect(() => {
    if (hovering) return;
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + 0.2;
        if (next >= 100) {
          setCurrent(c => (c + 1) % total);
          return 0;
        }
        return next;
      });
    }, 10);
    return () => clearInterval(interval);
  }, [hovering, total]);

  const goNext = () => {
    setCurrent(c => (c + 1) % total);
    setProgress(0);
  };

  return (
    <section className="project-section">
      <div className="project-container">
        <div className="project-inner">
          <div className="project-layout">
            <div className="project-left">
              <div className="project-title">
                <span className="titlebloc-cc" style={{ fontWeight: 100, marginLeft: '-4px' }}>
                  <span className="titletext">LATEST</span>
                </span>
                <span className="titlebloc-cc" style={{ fontWeight: 700, marginLeft: '-3px' }}>
                  <span className="titletext">PROJECTS</span>
                </span>
              </div>
              <div className="project-desc">
                These are my latest projects, where I've applied my expertise to deliver cutting-edge digital solutions.
              </div>
            </div>
            <div className="project-right">
              <div className="project-card-wrap"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}>
                <div className="project-card" style={{ backgroundImage: `url(${p.image})` }}>
                  <div className="project-card-gradient" />
                  <div className="project-card-content">
                    <div className="project-category">{p.category}</div>
                    <h3>{p.title}</h3>
                  </div>
                </div>

                {/* Thumbnail preview + next button */}
                <div className="project-thumb-container">
                  <div className="project-thumb-slide" style={{ backgroundImage: `url(${next.image})` }}>
                    <div className="project-thumb-overlay">
                      <div className="project-thumb-next">Next</div>
                      <div className="project-thumb-title">{next.title}</div>
                    </div>
                  </div>
                  <button className="project-btn" onClick={goNext}>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.75 15H5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M18.75 8.75L24.1161 14.1161C24.5328 14.5328 24.7411 14.7411 24.7411 15C24.7411 15.2589 24.5328 15.4672 24.1161 15.8839L18.75 21.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Bottom bar - behind the card */}
              <div className="project-bottom-bar">
                <div className="project-bottom-inner">
                  <span className="project-count-current">{current + 1}</span>
                  <div className="project-progress-track">
                    <div className="project-progress-fill" style={{ width: `${progress}%` }} />
                  </div>
                  <span className="project-count-total">{total}</span>
                  <div className="project-status">
                    <span className="project-pulsing-dot" />
                    <span className="project-status-text">NOW PROUDLY WORKING WITH <strong>GOOGLE</strong></span>
                  </div>
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
