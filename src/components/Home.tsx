import { useState, useRef, useEffect } from 'react';
import { timelineData, projects } from '../data';

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
          <div className="hero-subtitle">STRATEGIC PARTNERSHIPS / MARKET EXPANSION</div>
          <h1 className="hero-name">HATZ</h1>
          <p className="hero-tagline">
            Bridging global innovations to flourish <br />within promising local environments.
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
    { title: 'CONNECTIVITY', text: 'We construct the bridges through which global innovations cross to flourish within promising local environments. Our network spans continents, connecting international brands with emerging markets through robust strategic partnerships.', moving: 'BRIDGE' },
    { title: 'INTEGRITY', text: 'Clean, perpendicular geometry defines our approach — built on stability, trust, and precision. Every partnership is forged with architectural integrity, ensuring seamless knowledge and commercial exchange between franchisor and franchisee.', moving: 'TRUST' },
    { title: 'EXPANSION', text: 'Guided by an ambitious vision, we position the Syrian market as a pivotal hub for future growth and regional expansion. We do more than transfer brands; we create lasting commercial ecosystems that drive mutual success.', moving: 'GROWTH' },
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
              <span className="titletext">ABOUT </span>
            </span>
            <span className="titlebloc-cc" style={{ fontWeight: 700 }}>
              <span className="titletext">HATZ</span>
            </span>
          </div>
          </div>
          <div className="about-desc-col">
            <div className="why-description">
              HATZ is dedicated to redefining the retail landscape in emerging markets by forging robust strategic partnerships. We bridge international brands with local expertise, positioning the Syrian market as a pivotal hub for future growth and regional expansion.
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
                <span>MILESTONES </span>
              </span>
              <span className="titlebloc-white" style={{ color: 'white' }}>
                <span>& GROWTH</span>
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
                  <span className="titletext">STRATEGIC</span>
                </span>
                <span className="titlebloc-cc" style={{ fontWeight: 700, marginLeft: '-3px' }}>
                  <span className="titletext">PARTNERSHIPS</span>
                </span>
              </div>
              <div className="project-desc">
                Connecting international brands with emerging markets through strategic collaboration and local expertise.
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
                    <span className="project-status-text">CONNECTING <strong>MARKETS</strong> WORLDWIDE</span>
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
  const [activeTab, setActiveTab] = useState(0);

  const skillTabs = [
    {
      name: 'WEB DEVELOPMENT',
      percent: 80,
      level: 'INTERMEDIATE',
      experience: '3 YEARS',
      tags: ['PHP', 'ASP', 'ROR'],
      description: 'In web development, my skills shine through with proficiency in front-end technologies like HTML, CSS, and JavaScript. I also excel in back-end frameworks such as Node.js and databases. My expertise allows me to create seamless, responsive web applications with a strong user-focused approach.',
    },
    {
      name: 'MOBILE DEVELOPMENT',
      percent: 70,
      level: 'INTERMEDIATE',
      experience: '4 YEARS',
      tags: ['ANDROID', 'IOS', 'QT SDK'],
      description: 'In mobile development, I demonstrate prowess in crafting robust, user-friendly apps for both iOS and Android platforms. With proficiency in programming languages such as Swift and Kotlin, I deliver seamless mobile solutions, ensuring an optimal user experience.',
    },
    {
      name: 'UI/UX DESIGN',
      percent: 95,
      level: 'ADVANCED',
      experience: '5 YEARS',
      tags: ['FIGMA', 'SKETCH'],
      description: 'In UI/UX design, my creativity and user-centered approach result in captivating and intuitive interfaces. With a strong foundation in user research and wireframing, I transform ideas into visually appealing and highly functional digital experiences that engage and delight users.',
    },
  ];

  const tab = skillTabs[activeTab];

  return (
    <section style={{ background: 'var(--pulse-primary)', padding: '80px 0' }}>
      <div className="section-inner" style={{ padding: '0 30px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }} className="lg:flex-row">
          {/* Left column */}
          <div style={{ width: '100%', paddingRight: 0 }} className="lg:w-1/3 lg:pr-10 min-[1200px]:pr-20">
            <div className="boxtoanimatetotop lg:mb-14" style={{
              fontSize: 'clamp(28px,4vw,48px)', lineHeight: 1.25,
              marginBottom: '32px', marginTop: 0
            }}>
              <div style={{ display: 'flex', color: 'white', fontWeight: 100 }}>
                <span>EXPERTISE</span>
              </div>
              <div style={{ display: 'flex', color: 'white', fontWeight: 700 }}>
                <span>& SKILLS</span>
              </div>
            </div>
            <div style={{
              fontSize: 'clamp(18px,2vw,24px)', fontWeight: 300,
              marginBottom: 0, color: 'white'
            }} className="lg:mb-6">
              I possess coding mastery, adept problem-solving, ideal for complex development challenges.
            </div>
          </div>

          {/* Right column */}
          <div style={{ width: '100%', display: 'flex', alignItems: 'flex-start' }} className="lg:w-2/3">
            {/* Desktop tabs */}
            <div className="hidden min-[1130px]:flex" style={{ width: '100%' }}>
              {/* Tab navigation */}
              <ul style={{
                width: '300px', background: 'var(--pulse-d3)', flexShrink: 0,
                listStyle: 'none', margin: 0, padding: 0
              }}>
                {skillTabs.map((t, i) => (
                  <li key={i} style={{ float: 'none', width: 'auto' }}>
                    <button
                      onClick={() => setActiveTab(i)}
                      style={{
                        display: 'block', width: '100%', textAlign: 'left',
                        fontSize: '13px', fontWeight: 400,
                        background: i === activeTab ? 'var(--pulse-primary)' : 'var(--pulse-d3)',
                        color: 'white', padding: '20px 24px',
                        border: 'none', borderBottom: '1px solid var(--pulse-d1)',
                        cursor: 'pointer', transition: 'background .15s',
                        fontFamily: 'inherit', letterSpacing: '1px'
                      }}
                    >
                      {t.name}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Tab content */}
              <div style={{ flex: 1, background: 'var(--pulse-d2)', padding: '32px' }}>
                {/* Percent + Level + Experience row */}
                <div style={{ display: 'flex', background: 'var(--pulse-d1)', padding: '12px', marginBottom: '24px' }}>
                  <div style={{
                    width: '56px', height: '56px', display: 'flex', flexShrink: 0,
                    alignItems: 'center', justifyContent: 'center',
                    fontSize: '19px', fontWeight: 400, color: 'white',
                    background: 'var(--pulse-d3)'
                  }}>
                    {tab.percent} %
                  </div>
                  <div style={{ marginLeft: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'white', fontSize: '10px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ background: 'var(--pulse-d1)', zIndex: 10, paddingRight: '8px' }}>LEVEL</span>
                        <span style={{ background: 'var(--pulse-d1)', zIndex: 10, paddingLeft: '8px' }}>{tab.level}</span>
                      </span>
                      <span style={{ color: 'white', fontSize: '10px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ background: 'var(--pulse-d1)', zIndex: 10, paddingRight: '8px' }}>EXPERIENCE</span>
                        <span style={{ background: 'var(--pulse-d1)', zIndex: 10, paddingLeft: '8px' }}>{tab.experience}</span>
                      </span>
                    </div>
                    {/* Progress bar */}
                    <div style={{ background: 'var(--pulse-d3)', height: '4px', width: '100%' }}>
                      <div style={{ height: '100%', background: 'white', width: `${tab.percent}%` }} />
                    </div>
                    {/* Tags */}
                    <div style={{ display: 'flex', marginTop: '4px' }}>
                      {tab.tags.map((tag) => (
                        <span key={tag} style={{
                          background: 'var(--pulse-d3)', fontSize: '9px',
                          padding: '1px 8px', marginRight: '8px', color: 'white'
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Description */}
                <p style={{
                  color: 'white', lineHeight: 1.8, fontWeight: 300,
                  fontSize: 'clamp(15px,1.5vw,17px)'
                }}>
                  {tab.description}
                </p>
              </div>
            </div>

            {/* Mobile accordion */}
            <div className="w-full block min-[1130px]:hidden">
              {skillTabs.map((t, i) => (
                <div key={i} style={{ marginBottom: '4px' }}>
                  <input
                    type="radio" name="skills-mobile"
                    id={`skills-mob-${i}`}
                    className="skills-toggle" hidden
                    checked={activeTab === i}
                    onChange={() => setActiveTab(i)}
                  />
                  <label
                    htmlFor={`skills-mob-${i}`}
                    className="skills-title"
                    style={{
                      background: activeTab === i ? 'var(--pulse-d1)' : 'var(--pulse-d3)',
                      color: activeTab === i ? 'white' : 'rgba(255,255,255,.7)',
                    }}
                  >
                    {t.name}
                  </label>
                  <div className="skills-content" style={{
                    maxHeight: activeTab === i ? '600px' : '0',
                    padding: activeTab === i ? '32px' : '0',
                    background: 'var(--pulse-d2)',
                  }}>
                    <div style={{
                      display: 'flex', background: 'var(--pulse-d1)', padding: '12px',
                      flexDirection: 'column'
                    }} className="min-[700px]:flex-row">
                      <div style={{
                        width: '100%', height: '56px', display: 'flex', flexShrink: 0,
                        alignItems: 'center', justifyContent: 'center',
                        fontSize: '19px', fontWeight: 400, color: 'white',
                        background: 'var(--pulse-d3)'
                      }} className="min-[700px]:w-14">
                        {t.percent} %
                      </div>
                      <div style={{
                        marginLeft: 0, display: 'flex', flexDirection: 'column',
                        justifyContent: 'space-between', width: '100%', paddingTop: '12px'
                      }} className="min-[700px]:ml-3 min-[700px]:pt-0">
                        <div style={{
                          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                          gap: '10px'
                        }} className="min-[530px]:flex-row min-[530px]:gap-0">
                          <span style={{ color: 'white', fontSize: '10px', display: 'flex', alignItems: 'center', gap: '12px', width: '100%' }} className="md:w-auto">
                            <span style={{ background: 'var(--pulse-d1)', zIndex: 10, paddingRight: '8px' }}>LEVEL</span>
                            <span style={{ background: 'var(--pulse-d1)', zIndex: 10, paddingLeft: '8px' }}>{t.level}</span>
                          </span>
                          <span style={{ color: 'white', fontSize: '10px', display: 'flex', alignItems: 'center', gap: '12px', width: '100%' }} className="md:w-auto">
                            <span style={{ background: 'var(--pulse-d1)', zIndex: 10, paddingRight: '8px' }}>EXPERIENCE</span>
                            <span style={{ background: 'var(--pulse-d1)', zIndex: 10, paddingLeft: '8px' }}>{t.experience}</span>
                          </span>
                        </div>
                        <div className="hidden min-[400px]:block min-[700px]:my-0" style={{ background: 'var(--pulse-d3)', height: '4px', width: '100%', marginTop: '12px' }}>
                          <div style={{ height: '100%', background: 'white', width: `${t.percent}%` }} />
                        </div>
                        <div className="hidden min-[400px]:flex" style={{ marginTop: '12px' }}>
                          {t.tags.map((tag) => (
                            <span key={tag} style={{
                              background: 'var(--pulse-d3)', fontSize: '9px',
                              padding: '1px 8px', marginRight: '8px', color: 'white'
                            }}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p style={{
                      color: 'white', lineHeight: 1.8, fontWeight: 300, marginTop: '24px',
                      fontSize: 'clamp(15px,1.5vw,17px)'
                    }}>
                      {t.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
