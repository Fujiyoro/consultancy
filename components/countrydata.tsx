export interface CountryData {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  overview: string;
  highlights: string[];
  universityCount: number;
  color: string;

  visa: {
    title: string;
    types: Array<{
      name: string;
      duration: string;
      description: string;
      requirements: string[];
    }>;
  };

  process: {
    title: string;
    steps: Array<{
      number: number;
      title: string;
      description: string;
      duration: string;
    }>;
  };

  costs: {
    tuitionRange: string;
    livingCost: string;
    totalEstimate: string;
    scholarships: string;
  };

  universities: Array<{
    name: string;
    ranking: string;
    specialization: string;
  }>;

  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const countriesData: Record<string, CountryData> = {
  'united-states': {
    id: 'united-states',
    name: 'United States',
    slug: 'united-states',
    image: 'https://images.unsplash.com/photo-1508433957232-3107f5fd5995?q=80&w=886&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds',
    description: 'Home to world-renowned universities and cutting-edge research',
    overview: 'The United States is a global leader in higher education, offering diverse academic opportunities across all disciplines. With over 2,500 accredited universities, students can find programs tailored to their interests and career goals.',
    highlights: ['Harvard', 'MIT', 'Stanford', 'Yale', 'Princeton'],
    universityCount: 2500,
    color: 'from-blue-600 to-blue-400',

    visa: {
      title: 'Student Visa (F-1)',
      types: [
        {
          name: 'F-1 Visa',
          duration: '4-6 years',
          description: 'The most common visa for international students pursuing full-time academic studies',
          requirements: [
            'Valid passport',
            'I-20 form from the university',
            'Proof of financial support ($20,000-$35,000 per year)',
            'Evidence of ties to home country',
            'SEVIS registration fee payment',
          ],
        },
        {
          name: 'Optional Practical Training (OPT)',
          duration: '12-36 months',
          description: 'Work authorization after graduation in your field of study',
          requirements: [
            'Active F-1 status',
            'Job offer related to your major',
            'Application through USCIS',
          ],
        },
      ],
    },

    process: {
      title: 'Application Process',
      steps: [
        {
          number: 1,
          title: 'Prepare Documents',
          description: 'Gather academic transcripts, test scores (SAT/ACT), and English proficiency (TOEFL/IELTS)',
          duration: '2-3 months',
        },
        {
          number: 2,
          title: 'University Selection & Application',
          description: 'Research universities and submit applications through Common App or individual portals',
          duration: '3-4 months',
        },
        {
          number: 3,
          title: 'Admission & Financial Aid',
          description: 'Receive admission decisions and review financial aid packages',
          duration: '2-3 months',
        },
        {
          number: 4,
          title: 'Visa Application',
          description: 'Apply for F-1 visa at the US embassy with I-20 form and supporting documents',
          duration: '1-2 months',
        },
        {
          number: 5,
          title: 'Travel & Enrollment',
          description: 'Complete visa interview, arrange travel, and enroll in your program',
          duration: '2 weeks',
        },
      ],
    },

    costs: {
      tuitionRange: '$20,000 - $60,000 per year',
      livingCost: '$12,000 - $20,000 per year',
      totalEstimate: '$32,000 - $80,000 per year',
      scholarships: 'Merit and need-based scholarships available from universities',
    },

    universities: [
      {
        name: 'Harvard University',
        ranking: '#1 Worldwide',
        specialization: 'Medicine, Business, Law',
      },
      {
        name: 'MIT',
        ranking: '#2 Worldwide',
        specialization: 'Engineering, Technology, Science',
      },
      {
        name: 'Stanford University',
        ranking: '#3 Worldwide',
        specialization: 'Technology, Business, Engineering',
      },
      {
        name: 'Yale University',
        ranking: '#4 Worldwide',
        specialization: 'Law, Medicine, Humanities',
      },
      {
        name: 'Princeton University',
        ranking: '#5 Worldwide',
        specialization: 'Engineering, Science, Mathematics',
      },
    ],

    faqs: [
      {
        question: 'What is the minimum TOEFL score required?',
        answer: 'Most US universities require a minimum TOEFL score of 80-100 on the iBT. However, scores may vary by institution and program.',
      },
      {
        question: 'Can I work while studying in the US?',
        answer: 'Yes, F-1 students can work up to 20 hours per week during the school term on-campus. Off-campus work is available through CPT and OPT programs.',
      },
      {
        question: 'How much does a US education cost?',
        answer: 'Annual costs range from $32,000 to $80,000 including tuition, fees, accommodation, and living expenses. Many universities offer scholarships to international students.',
      },
      {
        question: 'What is the processing time for an F-1 visa?',
        answer: 'The visa processing time is typically 2-4 weeks from the application date at the US embassy.',
      },
      {
        question: 'Can I bring my family to the US?',
        answer: 'Yes, your spouse and unmarried children under 21 can apply for dependent visas (F-2), though they cannot work or study.',
      },
    ],
  },

  'australia': {
    id: 'australia',
    name: 'Australia',
    slug: 'australia',
    image: 'https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds',
    description: 'World-class education with exceptional quality of life',
    overview: 'Australia offers high-quality education in a vibrant, multicultural environment. With 43 universities including the prestigious Go8 group, Australia provides excellent opportunities across all academic disciplines.',
    highlights: ['Melbourne', 'Sydney', 'ANU', 'UNSW', 'Monash'],
    universityCount: 43,
    color: 'from-yellow-600 to-orange-500',

    visa: {
      title: 'Student Visa (Subclass 500)',
      types: [
        {
          name: 'Student Visa (Subclass 500)',
          duration: 'Duration of course + 6 months',
          description: 'Primary visa for international students studying full-time at Australian institutions',
          requirements: [
            'Enrolment confirmation from registered course',
            'Proof of financial support (AUD $20,290 per year)',
            'English language proficiency (IELTS 6.0 or equivalent)',
            'Health and character requirements',
            'GTE (Genuine Temporary Entrant) letter',
          ],
        },
        {
          name: 'Graduate Temporary Visa (Subclass 485)',
          duration: '18 months to 3 years',
          description: 'Work visa for graduates who want to gain Australian work experience',
          requirements: [
            'Recently completed Australian qualification',
            'English language requirements',
            'Character and health requirements',
            'Points test for some visa streams',
          ],
        },
      ],
    },

    process: {
      title: 'Application Process',
      steps: [
        {
          number: 1,
          title: 'Choose Your Course',
          description: 'Select an accredited course from a registered provider on the CRICOS list',
          duration: '2-4 weeks',
        },
        {
          number: 2,
          title: 'Submit University Application',
          description: 'Apply directly to the university with academic transcripts and English test scores',
          duration: '2-4 weeks',
        },
        {
          number: 3,
          title: 'Receive Offer Letter',
          description: 'University issues conditional or unconditional offer letter',
          duration: '1-2 weeks',
        },
        {
          number: 4,
          title: 'Visa Application',
          description: 'Apply online through ImmiAccount with CoE and supporting documents',
          duration: '1-3 months',
        },
        {
          number: 5,
          title: 'Visa Grant & Travel',
          description: 'Receive visa grant notification and arrange travel to Australia',
          duration: '2 weeks',
        },
      ],
    },

    costs: {
      tuitionRange: 'AUD $15,000 - $45,000 per year',
      livingCost: 'AUD $18,000 - $25,000 per year',
      totalEstimate: 'AUD $33,000 - $70,000 per year',
      scholarships: 'Australian government and university scholarships available',
    },

    universities: [
      {
        name: 'University of Melbourne',
        ranking: '#37 Worldwide',
        specialization: 'Medicine, Engineering, Business',
      },
      {
        name: 'Australian National University',
        ranking: '##54 Worldwide',
        specialization: 'Science, Engineering, Policy',
      },
      {
        name: 'University of Sydney',
        ranking: '#60 Worldwide',
        specialization: 'Medicine, Law, Engineering',
      },
      {
        name: 'UNSW Sydney',
        ranking: '#=84 Worldwide',
        specialization: 'Engineering, Business, Science',
      },
      {
        name: 'Monash University',
        ranking: '#=54 Worldwide',
        specialization: 'Engineering, Medicine, Law',
      },
    ],

    faqs: [
      {
        question: 'What is the IELTS requirement for Australian universities?',
        answer: 'Most universities require IELTS 6.0-7.0 overall. Medical and law programs may require higher scores of 7.0-7.5.',
      },
      {
        question: 'Can international students work in Australia?',
        answer: 'Yes, Student visa holders can work up to 20 hours per week during semester and full-time during semester breaks.',
      },
      {
        question: 'Is health insurance mandatory?',
        answer: 'Yes, international students must have Overseas Student Health Cover (OSHC) which is approximately AUD $600-$800 per year.',
      },
      {
        question: 'What is the cost of living in Australia?',
        answer: 'Average living costs are AUD $18,000-$25,000 per year, depending on the city and lifestyle. Sydney and Melbourne are more expensive.',
      },
      {
        question: 'Can I extend my stay after graduation?',
        answer: 'Yes, you can apply for the Graduate Temporary Visa (Subclass 485) which allows you to stay and work for 18 months to 3 years.',
      },
    ],
  },

  'japan': {
    id: 'japan',
    name: 'Japan',
    slug: 'japan',
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Blend of tradition and cutting-edge innovation',
    overview: 'Japan is an excellent destination for international students seeking a unique education experience. With over 100 universities offering high-quality education at affordable costs, Japan provides opportunities in engineering, technology, and humanities.',
    highlights: ['Todai', 'Kyoto', 'Osaka', 'Tokyo Tech', 'Waseda'],
    universityCount: 100,
    color: 'from-red-500 to-orange-400',

    visa: {
      title: 'Student Visa',
      types: [
        {
          name: 'College of Technology Student Visa',
          duration: '2-4 years',
          description: 'For students pursuing undergraduate studies in Japanese institutions',
          requirements: [
            'High school diploma or equivalent',
            'Japanese language proficiency (N4-N3 level)',
            'Proof of financial support (JPY 3-4 million annually)',
            'Letter of recommendation',
            'Health certificate',
          ],
        },
        {
          name: 'Graduate Student Visa',
          duration: '2-3 years',
          description: 'For students pursuing master&apos;s or doctoral degrees',
          requirements: [
            'Bachelor&apos;s degree or equivalent',
            'Research proposal',
            'Language proficiency',
            'Financial documents',
            'Academic transcripts',
          ],
        },
      ],
    },

    process: {
      title: 'Application Process',
      steps: [
        {
          number: 1,
          title: 'Language Preparation',
          description: 'Prepare Japanese language skills - at least N4 level (JLPT) is recommended',
          duration: '6-12 months',
        },
        {
          number: 2,
          title: 'University Selection & Application',
          description: 'Apply directly to universities or through their international student portal',
          duration: '2-3 months',
        },
        {
          number: 3,
          title: 'Receive Admission',
          description: 'University issues admission letter and documents for visa application',
          duration: '1-2 months',
        },
        {
          number: 4,
          title: 'Visa Application',
          description: 'Submit documents to Japanese embassy/consulate including Certificate of Eligibility',
          duration: '1-2 months',
        },
        {
          number: 5,
          title: 'Travel & Enrollment',
          description: 'Obtain visa and travel to Japan to begin your studies',
          duration: '2 weeks',
        },
      ],
    },

    costs: {
      tuitionRange: 'JPY 520,800 - 1,425,600 per year',
      livingCost: 'JPY 1,500,000 - 2,000,000 per year',
      totalEstimate: 'JPY 2,020,800 - 3,425,600 per year',
      scholarships: 'MEXT, ADB, and university scholarships available (often cover full tuition)',
    },

    universities: [
      {
        name: 'University of Tokyo (Todai)',
        ranking: '#=39 Worldwide',
        specialization: 'Engineering, Science, Medicine',
      },
      {
        name: 'Kyoto University',
        ranking: '#61 Worldwide',
        specialization: 'Science, Engineering, Humanities',
      },
      {
        name: 'Osaka University',
        ranking: '#=75 Worldwide',
        specialization: 'Engineering, Science, Medicine',
      },
      {
        name: 'Tokyo Institute of Technology',
        ranking: '#=139 Worldwide',
        specialization: 'Engineering, Science, Technology',
      },
      {
        name: 'Waseda University',
        ranking: '#=200 Worldwide',
        specialization: 'Business, Engineering, Arts',
      },
    ],

    faqs: [
      {
        question: 'Do I need to speak Japanese to study in Japan?',
        answer: 'While many programs are offered in English, studying Japanese is highly recommended for daily life. N4 level (JLPT) is typically required for university programs.',
      },
      {
        question: 'What are the costs of studying in Japan?',
        answer: 'Japan is relatively affordable. Total costs (tuition + living) range from JPY 2-3.4 million per year. Scholarships like MEXT often cover full tuition.',
      },
      {
        question: 'Can I work while studying in Japan?',
        answer: 'Yes, international students can work up to 20 hours per week during school terms and full-time during holidays. Work permit required.',
      },
      {
        question: 'What is the JLPT requirement?',
        answer: 'Most universities require N4 to N3 level for undergraduate studies and N2-N1 for graduate programs in Japanese-taught courses.',
      },
      {
        question: 'Are there scholarships for international students?',
        answer: 'Yes, MEXT scholarships cover full tuition and living stipend. Many universities also offer their own scholarships with partial or full coverage.',
      },
    ],
  },
};

export function getCountryData(slug: string): CountryData | null {
  return countriesData[slug] || null;
}

export function getAllCountries() {
  return Object.values(countriesData);
}
