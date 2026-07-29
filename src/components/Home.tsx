import { useState, useRef, useEffect } from 'react';
import { projects, blogPosts } from '../data';

export default function Home({ onContact, onOpenBlog }: { onContact: () => void; onOpenBlog: (post: any) => void }) {
  return (
    <div className="home">
      <div className="relative">
        {/* الرئيسية */}
        <div id="section-home"><HeroSection /></div>

        {/* من نحن */}
        <div id="section-about"><AboutSection /></div>

        {/* ماذا نفعل */}
        <div id="section-whatwedo"><TimelineSection /></div>

        {/* قصتنا */}
        <div id="section-story"><ProjectsSection /></div>

        {/* الأخبار */}
        <div id="section-blog"><BlogSection onOpen={onOpenBlog} /></div>

        {/* الوظائف */}
        <div id="section-jobs"><JobsSection /></div>

        {/* Skills (hidden) */}
        <div style={{ display: 'none' }}><SkillsSection /></div>
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
          <h1 className="hero-name">HATZ</h1>
          <div className="hero-subtitle">Bringing Global Retail Home</div>
          <p className="hero-tagline">نقود مستقبل قطاع التجزئة في سورية من خالل استقطاب العالمات التجارية العالمية، وتطوير تجارب تسوق بمعايير دولية، وبناء بيئة
عمل تستقطب الكفاءات وتصنع المهارات وتخلق قيمة حقيقية للمستهلك والسوق السوري</p>
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
    { title: 'رؤيتنا', text: 'أن تصبح HATZ الشركة الرائدة والأكثر تأثيراً في قطاع التجزئة (Retail) في سورية.', moving: 'رؤيتنا' },
    { title: 'مهمتنا', text: 'نربط بين الخبرة العالمية واحتياجات السوق السوري، لنقدم تجارب تجزئة حديثة، ترفع مستوى الخدمة، وتوفر فرصاً للنمو والتطوير للأفراد والشركاء والمجتمع.', moving: 'مهمتنا' },
    { title: 'قيمنا', text: '● المسؤولية\n● الإنسان محور النجاح\n● الاحترافية\n● الشراكة طويلة الأمد\n● الابتكار المستمر', moving: 'قيمنا' },
  ];

  useEffect(() => {
    const onScroll = () => {
      const wrap = wrapRef.current;
      if (!wrap) return;
      const wrapTop = wrap.getBoundingClientRect().top + window.scrollY;
      let found = -1;
      h2Refs.current.forEach((el, i) => {
        if (!el) return;
        if (el.getBoundingClientRect().top < window.innerHeight * 0.2) found = i;
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
        <div className="hidden lg:block" style={{ height: '64px', marginBottom: '16px', background: 'white',}}>
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
            <span className="titletext" style={{ fontSize: 'clamp(24px,4vw,40px)', fontWeight: 700, whiteSpace: 'nowrap' }}>عن هاتز</span>
            <img src="/pattern-line.svg" alt="" style={{ height: 'clamp(20px,2.5vw,30px)', minWidth: '60px', objectFit: 'cover', objectPosition: 'center right' }} />
          </div>
          <div className="about-desc-col">
            <div className="why-description">
              وصلنا إلى HATZ بعد سنوات من الخبرة وقصص النجاح في الخليج، وتركيا، وشمال أفريقيا، والولايات المتحدة الأمريكية. واليوم نبدأ مرحلة جديدة، ننقل فيها هذه الخبرات إلى سورية، من خلال تطوير قطاع التجزئة واستقطاب علامات تجارية عالمية تضيف قيمة حقيقية للمستهلك السوري
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
                <div key={i}>
                  <div className="about-item-divider" />
                  <div data-movingtext={item.moving} className="why-item" style={{ marginBottom: '36px' }}>
                    <h2 ref={el => { h2Refs.current[i] = el; }} style={{ visibility: 'hidden', height: 0, margin: 0 }}>{item.title}</h2>
                    <p style={item.moving === 'قيمنا' ? { whiteSpace: 'pre-line' } : {}}>{item.text}</p>
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

/* Timeline */
function TimelineSection() {
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    const isRtl = document.dir === 'rtl';
    if (scrollRef.current) scrollRef.current.scrollBy({ left: (isRtl ? -dir : dir) * 250, behavior: 'smooth' });
  };

  const whatWeDo = [
    { title: 'استقطاب العلامات التجارية', text: 'إدخال علامات عالمية تتناسب مع السوق السوري بهدف إرضاء احتياج الزبون والسوق إلخ.' },
    { title: 'إدارة وتشغيل قطاع التجزئة', text: 'إدارة وتشغيل المتاجر وفق أفضل الممارسات والمعايير العالمية.' },
    { title: 'تطوير تجربة العميل', text: 'بناء تجربة شراء متكاملة داخل المتاجر.' },
    { title: 'تطوير الموارد البشرية', text: 'رفع مستوى بيئة العمل، وتطوير الكفاءات، وبناء فرق عمل احترافية.' },
    { title: 'تطوير السوق', text: 'المساهمة في رفع معايير قطاع التجزئة في سورية.' },
  ];

  return (
    <section>
      <div className="timeline-section" style={{ maxWidth: '1140px', margin: '0 auto' }}>
        <div className="timeline-wrapper">
          <div className="timeline-header">
            <div className="why-title">
              <span className="titlebloc-white">
                <span>ماذا نفعل</span>
              </span>
              <div className="titlebloc-cc-pattern" />
            </div>
          </div>

          <div className="timeline-slider-row">
            <button className="timeline-btn" onClick={() => scroll(-1)} style={{ marginLeft: '16px' }}>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.25 15L25 14.9998" stroke="#FEFEFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.2499 8.75L5.88379 14.1161C5.46711 14.5328 5.25879 14.7411 5.25879 15C5.25879 15.2589 5.46711 15.4672 5.88379 15.8839L11.2499 21.25" stroke="#FEFEFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div ref={scrollRef} style={{ display: 'flex', overflow: 'hidden', flex: 1, gap: '12px' }}>
              {whatWeDo.map((item, i) => (
                <div
                  key={i}
                  className="timeline-item"
                  onClick={() => setActive(i)}
                  style={{ opacity: i === active ? 1 : 0.6, minWidth: '200px' }}
                >
                  <div className="label" style={{ fontSize: '16px', textTransform: 'none', color: 'white' }}>{item.title}</div>
                </div>
              ))}
            </div>
            <button className="timeline-btn" onClick={() => scroll(1)} style={{ marginRight: '16px' }}>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.75 15H5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.75 8.75L24.1161 14.1161C24.5328 14.5328 24.7411 14.7411 24.7411 15C24.7411 15.2589 24.5328 15.4672 24.1161 15.8839L18.75 21.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="timeline-desc-row" style={{ paddingTop: '32px', paddingBottom: '32px' }}>
          <h3 className="hidden lg:inline-block" style={{ fontSize: '20px', textTransform: 'none' }}>{whatWeDo[active].title}</h3>
          <p>{whatWeDo[active].text}</p>
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
                  <span className="titlebloc-cc" style={{ fontWeight: 100 }}>
                    <span className="titletext">قصتنا</span>
                  </span>
              </div>
              <div className="project-desc hidden">
                ربط العلامات التجارية الدولية بالأسواق الناشئة من خلال التعاون الاستراتيجي والخبرات المحلية.
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
                    <div className="project-description">{p.description}</div>
                  </div>
                </div>

                {/* Thumbnail preview + next button */}
                <div className="project-thumb-container">
                  <div className="project-thumb-slide" style={{ backgroundImage: `url(${next.image})` }}>
                    <div className="project-thumb-overlay">
                      <div className="project-thumb-next">التالي</div>
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
                    <span className="project-status-text">ربط <strong>الأسواق</strong> عالمياً</span>
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
      name: 'LC Waikiki',
      percent: 80,
      level: 'متقدم',
      experience: '٣ سنوات',
      tags: ['تحالف', 'توسع', 'دخول سوق'],
      description: 'نبني شراكات استراتيجية قوية تربط العلامات التجارية الدولية بالأسواق الناشئة، مع التركيز على نماذج التعاون المتينة والتكامل المحلي.',
    },
    {
      name: 'توسع السوق',
      percent: 70,
      level: 'متوسط',
      experience: '٤ سنوات',
      tags: ['تحليل سوق', 'توسع إقليمي'],
      description: 'نحدد ونتابع فرص التوسع في الأسواق الناشئة من خلال تحليل شامل لمشهد التجزئة، وتطوير استراتيجيات دخول مخصصة لكل سوق.',
    },
    {
      name: 'تطوير الأعمال',
      percent: 95,
      level: 'متقدم',
      experience: '٥ سنوات',
      tags: ['علاقات شركاء', 'تفاوض'],
      description: 'نطور علاقات شراكة دائمة مع الموزعين المحليين وأصحاب الامتياز، مما يخلق منظومات تجارية مستدامة تدفع النمو المتبادل للجميع.',
    },
  ];

  const tab = skillTabs[activeTab];

  return (
    <section style={{ background: 'var(--pulse-primary)', padding: '80px 0' }}>
      <div className="section-inner" style={{ padding: '0 30px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }} className="lg:flex-row">
          {/* Left column */}
          <div style={{ width: '100%', paddingLeft: 0 }} className="lg:w-1/3 lg:pl-10 min-[1200px]:pl-20">
            <div className="boxtoanimatetotop lg:mb-14" style={{
              fontSize: 'clamp(28px,4vw,48px)', lineHeight: 1.25,
              marginBottom: '32px', marginTop: 0
            }}>
              <div style={{ display: 'flex', color: 'white', fontWeight: 100 }}>
                <span>خبرات</span>
              </div>
              <div style={{ display: 'flex', color: 'white', fontWeight: 700 }}>
                <span>ومهارات</span>
              </div>
            </div>
            <div style={{
              fontSize: 'clamp(18px,2vw,24px)', fontWeight: 300,
              marginBottom: 0, color: 'white'
            }} className="lg:mb-6">
              نمتلك خبرة عميقة في الشراكات الاستراتيجية، وحل المشكلات بكفاءة، مثالية لتحديات التوسع المعقدة.
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
                        display: 'block', width: '100%', textAlign: 'right',
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
                  <div style={{ marginRight: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: 'white', fontSize: '10px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <span style={{ background: 'var(--pulse-d1)', zIndex: 10, paddingRight: '8px' }}>المستوى</span>
                          <span style={{ background: 'var(--pulse-d1)', zIndex: 10, paddingLeft: '8px' }}>{tab.level}</span>
                        </span>
                        <span style={{ color: 'white', fontSize: '10px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <span style={{ background: 'var(--pulse-d1)', zIndex: 10, paddingRight: '8px' }}>الخبرة</span>
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
                            <span style={{ background: 'var(--pulse-d1)', zIndex: 10, paddingRight: '8px' }}>المستوى</span>
                            <span style={{ background: 'var(--pulse-d1)', zIndex: 10, paddingLeft: '8px' }}>{t.level}</span>
                          </span>
                          <span style={{ color: 'white', fontSize: '10px', display: 'flex', alignItems: 'center', gap: '12px', width: '100%' }} className="md:w-auto">
                            <span style={{ background: 'var(--pulse-d1)', zIndex: 10, paddingRight: '8px' }}>الخبرة</span>
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

/* Blog */
function BlogSection({ onOpen }: { onOpen: (post: any) => void }) {
  return (
    <section style={{ padding: '80px 0'}}>
      <div className="section-inner" style={{ maxWidth: '1140px', margin: '0 auto' }}>
        <div className="why-title" style={{ marginBottom: '32px' }}>
          <span className="titlebloc-cc" style={{ color: 'var(--pulse-secondary)' }}>
            <span className="titletext">الأخبار</span>
          </span>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card" style={{ cursor: 'pointer' }} onClick={() => onOpen(post)}>
              <div className="meta">{post.date} — {post.category}</div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(0,0,0,0.05)', height: '45px', padding: '0 12px' }}>
                <span style={{ fontSize: 12, fontWeight: 500 }}>اقرأ المزيد</span>
                <div style={{ width: 45, height: 45, background: 'var(--pulse-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" width="18" height="18">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Jobs */
function JobsSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section style={{ padding: '80px 0', background: 'var(--pulse-b2)' }}>
      <div className="section-inner" style={{ padding: '0 30px', maxWidth: '1140px', margin: '0 auto' }}>
        <div className="why-title" style={{ marginBottom: '32px' }}>
          <span className="titlebloc-cc" style={{ color: 'var(--pulse-secondary)' }}>
            <span className="titletext">الوظائف</span>
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }} className="lg:flex-row">
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: 700, color: 'var(--pulse-primary)', marginBottom: '16px' }}>اعمل معنا</h3>
            <p style={{ fontSize: 'clamp(16px,2vw,20px)', fontWeight: 300, color: '#555', lineHeight: 1.8 }}>
              ألنك في HATZ لا تعمل في شركة محلية فقط...<br />
              بل تعمل وفق معايير عالمية، في بيئة تؤمن بالتطوير المستمر، وتمكنك من بناء مستقبل مهني حقيقي
            </p>
          </div>
          <div style={{ flex: 1 }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input type="text" placeholder="الاسم" value={name} onChange={(e) => setName(e.target.value)}
                style={{ padding: '12px 16px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px', fontFamily: 'inherit' }} />
              <input type="email" placeholder="البريد الإلكتروني" value={email} onChange={(e) => setEmail(e.target.value)}
                style={{ padding: '12px 16px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px', fontFamily: 'inherit' }} />
              <textarea placeholder="رسالتك" value={message} onChange={(e) => setMessage(e.target.value)} rows={4}
                style={{ padding: '12px 16px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px', fontFamily: 'inherit', resize: 'vertical' }} />
              <button type="submit"
                style={{ padding: '12px 32px', background: 'var(--pulse-primary)', color: 'white', border: 'none', borderRadius: '4px', fontSize: '16px', cursor: 'pointer', fontFamily: 'inherit', alignSelf: 'flex-start' }}>
                إرسال
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
