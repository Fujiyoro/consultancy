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

  countryHighlights?: Array<{
    title: string;
    description: string;
    icon: string;
  }>;

  intakes?: Array<{
    name: string;
    period: string;
    months: string;
    type: string;
  }>;

  costBreakdown?: Array<{
    category: string;
    range: string;
    icon: string;
  }>;

  detailedCosts?: Array<{
    item: string;
    minAmount: string;
    maxAmount: string;
    average: string;
    notes?: string;
  }>;

  costCurrency?: string;
  costNote?: string;
  totalEstimate?: string;
  requirements?: string[];
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

    countryHighlights: [
      {
        title: 'Top-Ranked Universities',
        description: '7 universities in global top 100 including University of Melbourne, ANU, and University of Sydney.',
        icon: 'graduation',
      },
      {
        title: 'Post-Study Work Visa',
        description: '2-4 years post-study work visa depending on your qualification level to gain Australian work experience.',
        icon: 'work',
      },
      {
        title: 'Multicultural Environment',
        description: 'One of the most diverse countries with students from 190+ nationalities creating a vibrant community.',
        icon: 'globe',
      },
      {
        title: 'Scholarship Opportunities',
        description: 'Australia Awards, Destination Australia, and university-specific scholarships available for international students.',
        icon: 'award',
      },
    ],

    intakes: [
      {
        name: 'February (Semester 1)',
        period: 'Feb - Jun',
        months: 'February - June',
        type: 'Major intake',
      },
      {
        name: 'July (Semester 2)',
        period: 'Jul - Nov',
        months: 'July - November',
        type: 'Major intake',
      },
      {
        name: 'November (Trimester)',
        period: 'Nov - Feb',
        months: 'November - February',
        type: 'Minor intake',
      },
    ],

    costBreakdown: [
      {
        category: 'Tuition Fee',
        range: 'AUD 15,000 - AUD 45,000 per year',
        icon: 'tuition',
      },
      {
        category: 'Living Cost',
        range: 'AUD 18,000 - AUD 25,000 per year',
        icon: 'living',
      },
    ],

    costCurrency: 'AUD',
    costNote: 'Living costs vary significantly based on location - Sydney and Melbourne are the most expensive.',
    totalEstimate: 'AUD 33,000 - AUD 70,000 per year',

    detailedCosts: [
      {
        item: 'Bachelor Degree Tuition (Per Year)',
        minAmount: 'AUD 15,000',
        maxAmount: 'AUD 45,000',
        average: 'AUD 30,000',
        notes: 'STEM fields typically more expensive than humanities',
      },
      {
        item: 'Master Degree Tuition (Per Year)',
        minAmount: 'AUD 20,000',
        maxAmount: 'AUD 55,000',
        average: 'AUD 37,500',
        notes: 'Research programs may have different fee structures',
      },
      {
        item: 'Overseas Student Health Cover (Per Year)',
        minAmount: 'AUD 600',
        maxAmount: 'AUD 1,000',
        average: 'AUD 800',
        notes: 'Mandatory for all international students',
      },
      {
        item: 'Accommodation (Monthly)',
        minAmount: 'AUD 800',
        maxAmount: 'AUD 1,600',
        average: 'AUD 1,200',
        notes: 'Sydney and Melbourne are more expensive',
      },
      {
        item: 'Food & Groceries (Monthly)',
        minAmount: 'AUD 300',
        maxAmount: 'AUD 600',
        average: 'AUD 450',
        notes: 'Cooking at home saves significantly',
      },
      {
        item: 'Transportation (Monthly)',
        minAmount: 'AUD 50',
        maxAmount: 'AUD 150',
        average: 'AUD 100',
        notes: 'Student concession cards available in all states',
      },
      {
        item: 'Utilities & Internet (Monthly)',
        minAmount: 'AUD 100',
        maxAmount: 'AUD 200',
        average: 'AUD 150',
        notes: 'Depends on accommodation type',
      },
      {
        item: 'Books & Course Materials (Per Year)',
        minAmount: 'AUD 500',
        maxAmount: 'AUD 2,000',
        average: 'AUD 1,250',
        notes: 'E-textbooks and library resources can reduce costs',
      },
    ],

    requirements: [
      'Academic transcripts and certificates (SLC/SEE, +2 Bachelor&apos;s)',
      'IELTS 6.0-6.5 overall (or PTE 50-58)',
      'Statement of Purpose (SOP)',
      'Letters of Recommendation (LOR)',
      'Financial proof (GTE requirement)',
      'Valid passport',
    ],
  },

  'united-kingdom': {
    id: 'united-kingdom',
    name: 'United Kingdom',
    slug: 'united-kingdom',
    image: 'https://images.unsplash.com/photo-1535182519407-c6a3b6ba90b5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Home to prestigious universities and world-class education',
    overview: 'The United Kingdom is a global leader in higher education with prestigious universities like Oxford and Cambridge. UK universities offer rigorous academics, excellent research opportunities, and a vibrant student life.',
    highlights: ['Oxford', 'Cambridge', 'LSE', 'Imperial', 'UCL'],
    universityCount: 130,
    color: 'from-red-600 to-blue-500',

    visa: {
      title: 'Student Visa (Subclass 4)',
      types: [
        {
          name: 'Student Visa',
          duration: 'Duration of course',
          description: 'Primary visa for international students studying full-time at UK universities',
          requirements: [
            'Conditional or unconditional offer from a registered UK university',
            'Proof of financial support (GBP 15,000-25,000 per year)',
            'English language proficiency (IELTS 6.0-7.0 or equivalent)',
            'Health and character requirements',
            'Tuberculosis test (if required)',
          ],
        },
        {
          name: 'Graduate Route Visa',
          duration: '2-3 years',
          description: 'Work visa for graduates to gain UK work experience after studies',
          requirements: [
            'Recently completed UK degree',
            'Obtained from a registered UK provider',
            'Application within 3 months of graduation',
            'Financial requirements',
          ],
        },
      ],
    },

    process: {
      title: 'Step-by-Step Visa Guide',
      steps: [
        {
          number: 1,
          title: 'Choose Course & University',
          description: 'Research and apply to CRICOS-registered institutions.',
          duration: '2-3 months',
        },
        {
          number: 2,
          title: 'Receive CoE',
          description: 'Get your Confirmation of Enrolment after accepting the offer.',
          duration: '1-2 weeks',
        },
        {
          number: 3,
          title: 'Arrange OSHC',
          description: 'Purchase Overseas Student Health Cover for the duration of your visa.',
          duration: '1 week',
        },
        {
          number: 4,
          title: 'Lodge Visa Application',
          description: 'Apply for Student Visa (Subclass 500) online via ImmiAccount.',
          duration: '1-3 months',
        },
        {
          number: 5,
          title: 'Travel & Enrol',
          description: 'Receive visa grant notification and arrange travel to study.',
          duration: '2 weeks',
        },
      ],
    },

    costs: {
      tuitionRange: 'GBP 10,000 - 30,000 per year',
      livingCost: 'GBP 12,000 - 18,000 per year',
      totalEstimate: 'GBP 22,000 - 48,000 per year',
      scholarships: 'British government and university scholarships available',
    },

    universities: [
      {
        name: 'University of Oxford',
        ranking: '#3 Worldwide',
        specialization: 'Law, Medicine, Humanities',
      },
      {
        name: 'University of Cambridge',
        ranking: '#5 Worldwide',
        specialization: 'Engineering, Science, Medicine',
      },
      {
        name: 'London School of Economics',
        ranking: '#37 Worldwide',
        specialization: 'Business, Law, Economics',
      },
      {
        name: 'Imperial College London',
        ranking: '#=6 Worldwide',
        specialization: 'Engineering, Science, Medicine',
      },
      {
        name: 'University College London',
        ranking: '#8 Worldwide',
        specialization: 'Engineering, Medicine, Law',
      },
    ],

    faqs: [
      {
        question: 'What is the minimum IELTS score required for UK universities?',
        answer: 'Most UK universities require IELTS 6.0-7.0. Top universities like Oxford and Cambridge may require 7.0-7.5 or higher.',
      },
      {
        question: 'Can international students work in the UK?',
        answer: 'Yes, Student visa holders can work up to 20 hours per week during term time and full-time during holidays.',
      },
      {
        question: 'Is health insurance mandatory?',
        answer: 'No, international students are covered by the NHS. There is no separate health insurance requirement.',
      },
      {
        question: 'What is the cost of living in the UK?',
        answer: 'Average living costs are GBP 12,000-18,000 per year. London and other major cities are more expensive.',
      },
      {
        question: 'Can I stay and work after graduation?',
        answer: 'Yes, you can apply for the Graduate Route Visa which allows you to stay and work in the UK for 2-3 years.',
      },
    ],

    countryHighlights: [
      {
        title: 'Top-Ranked Universities',
        description: 'Home to Oxford and Cambridge, among the world&apos;s best universities with exceptional global rankings.',
        icon: 'graduation',
      },
      {
        title: 'Post-Study Work Visa',
        description: '2-3 year Graduate Route Visa allowing eligible graduates to work and gain UK professional experience.',
        icon: 'work',
      },
      {
        title: 'Cultural Diversity',
        description: 'Vibrant, multicultural environment with students from over 200 countries and rich social activities.',
        icon: 'globe',
      },
      {
        title: 'Quality Education & Research',
        description: 'World-leading research opportunities and courses ranked among the best globally across all disciplines.',
        icon: 'award',
      },
    ],

    intakes: [
      {
        name: 'September (Fall)',
        period: 'Sep - Dec',
        months: 'September - December',
        type: 'Main intake',
      },
      {
        name: 'January (Spring)',
        period: 'Jan - Apr',
        months: 'January - April',
        type: 'Limited intake',
      },
      {
        name: 'April/May (Summer)',
        period: 'Apr - Aug',
        months: 'April - August',
        type: 'Specialized programs',
      },
    ],

    costBreakdown: [
      {
        category: 'Tuition Fee',
        range: 'GBP 10,000 - GBP 30,000 per year',
        icon: 'tuition',
      },
      {
        category: 'Living Cost',
        range: 'GBP 12,000 - GBP 18,000 per year',
        icon: 'living',
      },
    ],

    costCurrency: 'GBP',
    costNote: 'Living costs vary significantly based on location - London is the most expensive city for accommodation and expenses.',
    totalEstimate: 'GBP 22,000 - GBP 48,000 per year',

    detailedCosts: [
      {
        item: 'Undergraduate Tuition (Per Year)',
        minAmount: 'GBP 10,000',
        maxAmount: 'GBP 25,000',
        average: 'GBP 17,500',
        notes: 'Subject to Home Office limits; some programs more expensive',
      },
      {
        item: 'Postgraduate Tuition (Per Year)',
        minAmount: 'GBP 12,000',
        maxAmount: 'GBP 30,000',
        average: 'GBP 21,000',
        notes: 'Master&apos;s and PhD programs vary significantly',
      },
      {
        item: 'Accommodation (Monthly)',
        minAmount: 'GBP 400',
        maxAmount: 'GBP 900',
        average: 'GBP 650',
        notes: 'London is significantly more expensive than other cities',
      },
      {
        item: 'Food & Groceries (Monthly)',
        minAmount: 'GBP 200',
        maxAmount: 'GBP 400',
        average: 'GBP 300',
        notes: 'Budget supermarkets available; meal planning saves money',
      },
      {
        item: 'Transportation (Monthly)',
        minAmount: 'GBP 30',
        maxAmount: 'GBP 150',
        average: 'GBP 90',
        notes: 'Student railcards and bus passes provide discounts',
      },
      {
        item: 'Utilities & Council Tax (Monthly)',
        minAmount: 'GBP 80',
        maxAmount: 'GBP 200',
        average: 'GBP 140',
        notes: 'May not apply if in university accommodation',
      },
      {
        item: 'Phone & Internet (Monthly)',
        minAmount: 'GBP 20',
        maxAmount: 'GBP 50',
        average: 'GBP 35',
        notes: 'Many providers offer student discounts',
      },
      {
        item: 'Books & Course Materials (Per Year)',
        minAmount: 'GBP 500',
        maxAmount: 'GBP 1,500',
        average: 'GBP 1,000',
        notes: 'University library and e-resources significantly reduce costs',
      },
    ],

    requirements: [
      'Academic transcripts and certificates (SLC/SEE, +2 Bachelor&apos;s)',
      'IELTS 6.0-6.5 overall (or PTE 50-58)',
      'Statement of Purpose (SOP)',
      'Letters of Recommendation (LOR)',
      'Financial proof (GTE requirement)',
      'Valid passport',
    ],
  },
};

export function getCountryData(slug: string): CountryData | null {
  return countriesData[slug] || null;
}

export function getAllCountries() {
  return Object.values(countriesData);
}
