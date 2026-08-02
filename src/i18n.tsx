import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type Lang = 'ar' | 'en';

export interface AboutItem {
  title: string;
  text: string;
  moving: string;
  multiline?: boolean;
}

export interface WhatWeDoItem {
  title: string;
  text: string;
}

export interface SkillTab {
  name: string;
  percent: number;
  level: string;
  experience: string;
  tags: string[];
  description: string;
}

export interface Article {
  id: number;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  imageUrl: string;
}

export interface Dict {
  nav: {
    home: string;
    about: string;
    whatWeDo: string;
    ourStory: string;
    news: string;
    careers: string;
    contact: string;
  };
  socialBar: { label: string; marquee: string };
  hero: { tagline: string };
  about: { title: string; description: string; items: AboutItem[] };
  whatWeDo: { title: string; items: WhatWeDoItem[] };
  story: {
    title: string;
    descPre: string;
    descBrand1: string;
    descMid: string;
    descBrand2: string;
    descPost: string;
    next: string;
    statusPre: string;
    statusBrand: string;
    statusPost: string;
  };
  skills: { title: string; subtitle: string; level: string; experience: string; tabs: SkillTab[] };
  blog: { title: string; readMore: string; articles: Article[] };
  jobs: {
    title: string;
    intro1: string;
    intro2: string;
    name: string;
    expertise: string;
    cv: string;
    email: string;
    message: string;
    submit: string;
    success: string;
    error: string;
  };
  contact: {
    title: string;
    header: string;
    email: string;
    phone: string;
    name: string;
    emailPlaceholder: string;
    subject: string;
    message: string;
    submit: string;
    success: string;
    error: string;
  };
  loader: { subtitle: string };
}

const ar: Dict = {
  nav: {
    home: 'الرئيسية',
    about: 'عن هاتز',
    whatWeDo: 'ماذا نفعل',
    ourStory: 'قصتنا',
    news: 'مقالات',
    careers: 'الوظائف',
    contact: 'تواصل معنا',
  },
  socialBar: {
    label: 'آخر أخبار هاتز',
    marquee: 'هاتز تعيد تعريف التجزئة في الأسواق الناشئة — من خلال شراكات استراتيجية تربط الابتكار العالمي بالفرص المحلية. اكتشف كيف نكتب فصلاً جديداً في قطاع التجزئة السوري.',
  },
  hero: {
    tagline: 'نقود مستقبل قطاع التجزئة في سورية من خالل استقطاب العالمات التجارية العالمية، وتطوير تجارب تسوق بمعايير دولية، وبناء بيئة عمل تستقطب الكفاءات وتصنع المهارات وتخلق قيمة حقيقية للمستهلك والسوق السوري',
  },
  about: {
    title: 'عن هاتز',
    description: 'وصلنا إلى HATZ بعد سنوات من الخبرة وقصص النجاح في الخليج، وتركيا، وشمال أفريقيا، والولايات المتحدة الأمريكية. واليوم نبدأ مرحلة جديدة، ننقل فيها هذه الخبرات إلى سورية، من خلال تطوير قطاع التجزئة واستقطاب علامات تجارية عالمية تضيف قيمة حقيقية للمستهلك السوري',
    items: [
      {
        title: 'رؤيتنا',
        text: 'أن تصبح HATZ الشركة الرائدة والأكثر تأثيراً في قطاع التجزئة (Retail) في سورية.',
        moving: 'رؤيتنا',
      },
      {
        title: 'مهمتنا',
        text: 'نربط بين الخبرة العالمية واحتياجات السوق السوري، لنقدم تجارب تجزئة حديثة، ترفع مستوى الخدمة، وتوفر فرصاً للنمو والتطوير للأفراد والشركاء والمجتمع.',
        moving: 'مهمتنا',
      },
      {
        title: 'قيمنا',
        text: '● المسؤولية\n● الإنسان محور النجاح\n● الاحترافية\n● الشراكة طويلة الأمد\n● الابتكار المستمر',
        moving: 'قيمنا',
        multiline: true,
      },
    ],
  },
  whatWeDo: {
    title: 'ماذا نفعل',
    items: [
      { title: 'استقطاب العلامات التجارية', text: 'إدخال علامات عالمية تتناسب مع السوق السوري بهدف إرضاء احتياج الزبون والسوق إلخ.' },
      { title: 'إدارة وتشغيل قطاع التجزئة', text: 'إدارة وتشغيل المتاجر وفق أفضل الممارسات والمعايير العالمية.' },
      { title: 'تطوير تجربة العميل', text: 'بناء تجربة شراء متكاملة داخل المتاجر.' },
      { title: 'تطوير الموارد البشرية', text: 'رفع مستوى بيئة العمل، وتطوير الكفاءات، وبناء فرق عمل احترافية.' },
      { title: 'تطوير السوق', text: 'المساهمة في رفع معايير قطاع التجزئة في سورية.' },
    ],
  },
  story: {
    title: 'قصتنا',
    descPre: 'افتتاح أول فرع رسمي لـ',
    descBrand1: 'LC Waikiki',
    descMid: ' في سورية شكّل البداية الفعلية لرحلة ',
    descBrand2: 'HATZ',
    descPost: '. نجاح هذه التجربة لم يكن مجرد اففتاح متجر، بل انطلاقة لرؤية طويلة الأمد تهدف إلى تطوير قطاع التجزئة في سورية وبناء شراكات مع علامات تجارية عالمية.',
    next: 'التالي',
    statusPre: 'افتتاح أول فرع رسمي لـ ',
    statusBrand: 'Waikiki LC',
    statusPost: ' في سورية',
  },
  skills: {
    title: 'خبرات ومهارات',
    subtitle: 'نمتلك خبرة عميقة في الشراكات الاستراتيجية، وحل المشكلات بكفاءة، مثالية لتحديات التوسع المعقدة.',
    level: 'المستوى',
    experience: 'الخبرة',
    tabs: [
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
    ],
  },
  blog: {
    title: 'مقالات',
    readMore: 'اقرأ المزيد',
    articles: [
      { id: 1, date: 'يوليو 2026', category: 'شراكات', title: 'توقيع اتفاق مع ال LCW في سورية', excerpt: 'تم اليوم توقيع اتفاقية شراكة استراتيجية بين HATZ وعلامة LC Waikiki العالمية، تمهيداً لافتتاح أول فرع رسمي في سورية. تأتي هذه الخطوة في إطار استراتيجية HATZ الهادفة إلى استقطاب أبرز العلامات التجارية الدولية وتوفير تجارب تسوق عالمية للمستهلك السوري.', imageUrl: 'https://picsum.photos/seed/lcw1/400/300' },
      { id: 2, date: 'يوليو 2026', category: 'افتتاح', title: 'افتتاح اول فرع رسمي ل LCW في سورية', excerpt: 'بعد أشهر من التحضير والتجهيز، تم افتتاح أول فرع رسمي لعلامة LC Waikiki في سورية بحضور رسمي وإعلامي واسع. يمثل هذا الافتتاح بداية مرحلة جديدة لقطاع التجزئة في سورية، ويعكس التزام HATZ بتقديم علامات تجارية عالمية بمعايير دولية.', imageUrl: 'https://picsum.photos/seed/lcw2/400/300' },
      { id: 3, date: 'يونيو 2026', category: 'محلي', title: 'شراكاتنا المحلية', excerpt: 'تؤمن HATZ بأهمية بناء شراكات محلية قوية تساهم في دعم الاقتصاد الوطني وتطوير بيئة الأعمال. نعمل مع شركائنا المحليين على خلق قيمة مضافة للمستهلك السوري، مع الحرص على تطبيق أعلى معايير الجودة والشفافية في جميع عملياتنا.', imageUrl: 'https://picsum.photos/seed/partners/400/300' },
      { id: 4, date: 'يونيو 2026', category: 'فريق', title: 'كيف نختار فريقنا', excerpt: 'فريق HATZ هو جوهر نجاحنا. نعتمد في اختيار كوادرنا على معايير دقيقة تجمع بين الكفاءة المهنية والقيم الشخصية. نبحث عن الموهبة والطموح، ونؤمن بالاستثمار في تدريب وتطوير مهارات فريقنا ليصبحوا قادة المستقبل في قطاع التجزئة.', imageUrl: 'https://picsum.photos/seed/team/400/300' },
      { id: 5, date: 'مايو 2026', category: 'رؤية', title: 'مستقبل قطاع التجزئة في سورية', excerpt: 'يشهد قطاع التجزئة في سورية تحولاً تدريجياً نحو مزيد من التنظيم والاحترافية. HATZ تقود هذا التغيير من خلال استقطاب علامات تجارية عالمية، وتطوير بنية تحتية متكاملة، وبناء كوادر محلية مؤهلة. المستقبل واعد، ونحن في بداية الطريق.', imageUrl: 'https://picsum.photos/seed/future/400/300' },
    ],
  },
  jobs: {
    title: 'اعمل معنا',
    intro1: 'لأنك في HATZ لا تعمل في شركة محلية فقط...',
    intro2: 'بل تعمل وفق معايير عالمية، في بيئة تؤمن بالتطوير المستمر، وتمكنك من بناء مستقبل مهني حقيقي',
    name: 'الاسم',
    expertise: 'مجال خبرتي',
    cv: 'رابط سيرتي الذاتية',
    email: 'البريد الإلكتروني',
    message: 'رسالتي لكم',
    submit: 'إرسال',
    success: 'تم إرسال طلبك بنجاح، سنتواصل معك قريباً',
    error: 'حدث خطأ أثناء الإرسال، يرجى المحاولة مرة أخرى',
  },
  contact: {
    title: 'اتصل بنا',
    header: 'مستعد لربط علامتك التجارية بالأسواق الناشئة؟ دعنا نناقش كيف يمكن لهاتز مساعدتك في التوسع إلى أسواق جديدة واعدة من خلال شراكات محلية استراتيجية.',
    email: 'البريد الإلكتروني:',
    phone: 'الهاتف:',
    name: 'الاسم',
    emailPlaceholder: 'example@domain.com',
    subject: 'استفسار عن شراكة',
    message: 'أخبرنا عن مشروعك...',
    submit: 'إرسال',
    success: 'تم إرسال رسالتك بنجاح، سنتواصل معك قريباً',
    error: 'حدث خطأ أثناء الإرسال، يرجى المحاولة مرة أخرى',
  },
  loader: {
    subtitle: 'نكتب فصلاً جديداً في قطاع التجزئة السوري',
  },
};

const en: Dict = {
  nav: {
    home: 'Home',
    about: 'About HATZ',
    whatWeDo: 'What We Do',
    ourStory: 'Our Story',
    news: 'News',
    careers: 'Careers',
    contact: 'Contact Us',
  },
  socialBar: {
    label: 'Latest HATZ News',
    marquee: 'HATZ is redefining retail in emerging markets — through strategic partnerships that connect global innovation with local opportunities. Discover how we are writing a new chapter in the Syrian retail sector.',
  },
  hero: {
    tagline: 'We lead the future of the retail sector in Syria by attracting prestigious global brands, developing world-class shopping experiences, and building an empowering work environment that attracts top talent, nurtures professional skills, and delivers genuine value to Syrian consumers and the local market.',
  },
  about: {
    title: 'Writing a New Chapter in the Syrian Retail Sector.',
    description: 'The foundation of HATZ is backed by decades of robust regional experience and a proven track record of success spanning the Gulf Cooperation Council (GCC), Turkey, North Africa, and the United States. Today, we embark on a transformative new phase, transferring this accumulated global expertise to Syria. Our objective is to elevate the local retail industry and introduce globally recognized brands that offer substantial, authentic value and affordable luxury to the Syrian consumer.',
    items: [
      { title: 'Our Vision', text: 'To become the pioneering, most trusted, and highly influential leader within the retail sector in Syria.', moving: 'Vision' },
      { title: 'Our Mission', text: 'We bridge world-class global expertise with the precise needs of the Syrian market to deliver modern, innovative retail experiences that elevate customer service and create meaningful growth and development opportunities for individuals, partners, and the community at large.', moving: 'Mission' },
      {
        title: 'Our Values',
        text: '● Responsibility & Accountability\n● Human-Centric Success\n● Professionalism\n● Long-Term Strategic Partnerships\n● Continuous Innovation',
        moving: 'Values',
        multiline: true,
      },
    ],
  },
  whatWeDo: {
    title: 'What We Do',
    items: [
      { title: 'Brand Acquisition', text: 'Introducing premium global brands tailored to the dynamics of the Syrian market, specifically focused on fulfilling consumer demands, bridging market gaps, and enriching market diversity.' },
      { title: 'Retail Operations & Management', text: 'Operating and managing storefronts and retail spaces in complete alignment with global best practices and standard operational frameworks.' },
      { title: 'Customer Experience Development', text: 'Crafting and nurturing an immersive, integrated, and seamless shopping journey for customers within all our retail locations.' },
      { title: 'Human Resource Development', text: 'Fostering an enriched workplace culture, upskilling local competencies, and building highly professional, collaborative, and elite organizational teams.' },
      { title: 'Market Elevation', text: 'Actively contributing to raising the operational standards, benchmarks, and performance metrics across the entire retail ecosystem in Syria.' },
    ],
  },
  story: {
    title: 'Our Story',
    descPre: 'The launch of the first official flagship branch of ',
    descBrand1: 'LC Waikiki',
    descMid: ' in Syria marked the actual operational beginning of the ',
    descBrand2: 'HATZ',
    descPost: ' journey. The profound success of this landmark venture was not merely a store opening, but rather the instantiation of a long-term vision aimed at entirely reforming the retail sector in Syria and establishing lasting alliances with globally celebrated brands.',
    next: 'Next',
    statusPre: 'Opening of the first official ',
    statusBrand: 'LC Waikiki',
    statusPost: ' branch in Syria',
  },
  skills: {
    title: 'Expertise & Skills',
    subtitle: 'We hold deep expertise in strategic partnerships and efficient problem-solving — ideal for complex expansion challenges.',
    level: 'Level',
    experience: 'Experience',
    tabs: [
      {
        name: 'LC Waikiki',
        percent: 80,
        level: 'Advanced',
        experience: '3 Years',
        tags: ['Alliance', 'Expansion', 'Market Entry'],
        description: 'We build strong strategic partnerships that connect international brands with emerging markets, focusing on resilient cooperation models and local integration.',
      },
      {
        name: 'Market Expansion',
        percent: 70,
        level: 'Intermediate',
        experience: '4 Years',
        tags: ['Market Analysis', 'Regional Expansion'],
        description: 'We identify and pursue expansion opportunities in emerging markets through comprehensive analysis of the retail landscape, developing tailored market-entry strategies for each market.',
      },
      {
        name: 'Business Development',
        percent: 95,
        level: 'Advanced',
        experience: '5 Years',
        tags: ['Partner Relations', 'Negotiation'],
        description: 'We develop lasting partnerships with local distributors and franchise owners, creating sustainable business ecosystems that drive mutual growth for everyone.',
      },
    ],
  },
  blog: {
    title: 'Latest News',
    readMore: 'Read More',
    articles: [
      { id: 1, date: 'July 2026', category: 'Partnership', title: 'Signing an agreement with LCW in Syria', excerpt: 'Today, HATZ and the global brand LC Waikiki signed a strategic partnership agreement, paving the way for the opening of the first official branch in Syria. This step is part of HATZ\u2019s strategy to attract leading international brands and deliver world-class shopping experiences to the Syrian consumer.', imageUrl: 'https://picsum.photos/seed/lcw1/400/300' },
      { id: 2, date: 'July 2026', category: 'Launch', title: 'Opening of the first official LCW branch in Syria', excerpt: 'After months of preparation, the first official LC Waikiki branch opened in Syria with wide official and media attendance. This opening marks the beginning of a new phase for the Syrian retail sector and reflects HATZ\u2019s commitment to bringing global brands with international standards.', imageUrl: 'https://picsum.photos/seed/lcw2/400/300' },
      { id: 3, date: 'June 2026', category: 'Local', title: 'Our local partnerships', excerpt: 'HATZ believes in the importance of building strong local partnerships that support the national economy and develop the business environment. We work with our local partners to create added value for the Syrian consumer, while applying the highest standards of quality and transparency across all our operations.', imageUrl: 'https://picsum.photos/seed/partners/400/300' },
      { id: 4, date: 'June 2026', category: 'Team', title: 'How we choose our team', excerpt: 'The HATZ team is the core of our success. We select our people based on precise criteria that combine professional competence with personal values. We look for talent and ambition, and we believe in investing in training and developing our team\u2019s skills so they become the future leaders of the retail sector.', imageUrl: 'https://picsum.photos/seed/team/400/300' },
      { id: 5, date: 'May 2026', category: 'Vision', title: 'The future of the retail sector in Syria', excerpt: 'The retail sector in Syria is gradually shifting towards greater organization and professionalism. HATZ is leading this change by attracting global brands, developing integrated infrastructure, and building qualified local talent. The future is promising, and we are only at the beginning.', imageUrl: 'https://picsum.photos/seed/future/400/300' },
    ],
  },
  jobs: {
    title: 'Work With Us',
    intro1: 'Because at HATZ, you are not merely joining a local business...',
    intro2: 'Instead, you operate according to elite international standards within a corporate culture that values continuous development, actively empowering you to cultivate a true, long-term professional career path.',
    name: 'Name',
    expertise: 'My Field of Expertise',
    cv: 'My CV Link',
    email: 'Email Address',
    message: 'My Message to You',
    submit: 'Send',
    success: 'Your application has been sent successfully. We will get back to you soon.',
    error: 'Something went wrong while sending. Please try again.',
  },
  contact: {
    title: 'Contact Us',
    header: 'Ready to connect your brand with emerging markets? Let\u2019s discuss how HATZ can help you expand into promising new markets through strategic local partnerships.',
    email: 'Email:',
    phone: 'Phone:',
    name: 'Name',
    emailPlaceholder: 'example@domain.com',
    subject: 'Partnership Inquiry',
    message: 'Tell us about your project...',
    submit: 'Send',
    success: 'Your message has been sent successfully. We will get back to you soon.',
    error: 'Something went wrong while sending. Please try again.',
  },
  loader: {
    subtitle: 'Writing a new chapter in the Syrian retail sector',
  },
};

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  dict: Dict;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'ar',
  setLang: () => {},
  dict: ar,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      return localStorage.getItem('hatz-lang') === 'en' ? 'en' : 'ar';
    } catch {
      return 'ar';
    }
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    try {
      localStorage.setItem('hatz-lang', lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const dict = useMemo(() => (lang === 'ar' ? ar : en), [lang]);
  const value = useMemo(() => ({ lang, setLang, dict }), [lang, dict]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
