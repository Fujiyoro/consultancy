export interface CountryData {
  slug: string;
  name: string;
  flag: string;
  tagline: string;
  heroDescription: string;
  whyStudy: { title: string; description: string; icon: string }[];
  costs: {
    tuitionRange: string;
    livingRange: string;
    note: string;
  };
  requirements: string[];
  visaSteps: { step: number; title: string; description: string }[];
  intakes: { name: string; months: string; popularity: string }[];
  workOpportunities: {
    partTime: string;
    postStudy: string;
    details: string[];
  };
}

export const countries: CountryData[] = [
  {
    slug: "australia",
    name: "Australia",
    flag: "🇦🇺",
    tagline: "World-class education meets adventure",
    heroDescription: "Home to 7 of the world's top 100 universities, Australia offers a vibrant multicultural experience with excellent post-study work opportunities.",
    whyStudy: [
      { title: "Top-Ranked Universities", description: "7 universities in global top 100 including University of Melbourne, ANU, and University of Sydney.", icon: "GraduationCap" },
      { title: "Post-Study Work Visa", description: "2–4 years post-study work visa depending on your qualification level.", icon: "Briefcase" },
      { title: "Multicultural Environment", description: "One of the most diverse countries with students from 190+ nationalities.", icon: "Globe" },
      { title: "Scholarship Opportunities", description: "Australia Awards, Destination Australia, and university-specific scholarships available.", icon: "Award" },
    ],
    costs: {
      tuitionRange: "NPR 20,00,000 – NPR 50,00,000/year",
      livingRange: "NPR 15,00,000 – NPR 25,00,000/year",
      note: "Costs vary by city — Melbourne & Sydney are more expensive than Adelaide or Brisbane.",
    },
    requirements: [
      "Academic transcripts and certificates (SLC/SEE, +2, Bachelor's)",
      "IELTS 6.0–6.5 overall (or PTE 50–58)",
      "Statement of Purpose (SOP)",
      "Letters of Recommendation (LOR)",
      "Financial proof (GTE requirement)",
      "Valid passport",
    ],
    visaSteps: [
      { step: 1, title: "Choose Course & University", description: "Research and apply to CRICOS-registered institutions." },
      { step: 2, title: "Receive CoE", description: "Get your Confirmation of Enrolment after accepting the offer." },
      { step: 3, title: "Arrange OSHC", description: "Purchase Overseas Student Health Cover for the duration of your visa." },
      { step: 4, title: "Lodge Visa Application", description: "Apply for Student Visa (Subclass 500) online via ImmiAccount." },
      { step: 5, title: "Biometrics & Interview", description: "Attend biometrics appointment and possible interview at VFS." },
      { step: 6, title: "Visa Decision", description: "Processing takes 4–8 weeks. You'll receive the decision via email." },
    ],
    intakes: [
      { name: "February (Semester 1)", months: "Feb – Jun", popularity: "Major" },
      { name: "July (Semester 2)", months: "Jul – Nov", popularity: "Major" },
      { name: "November (Trimester)", months: "Nov – Feb", popularity: "Minor" },
    ],
    workOpportunities: {
      partTime: "48 hours per fortnight during semester",
      postStudy: "2–4 years post-study work visa (PSWV)",
      details: [
        "Unlimited work hours during semester breaks",
        "Bachelor's graduates get 2-year work visa",
        "Master's graduates get 3-year work visa",
        "PhD graduates get 4-year work visa",
        "Pathway to Permanent Residency through skilled migration",
      ],
    },
  },
  {
    slug: "japan",
    name: "Japan",
    flag: "🇯🇵",
    tagline: "Innovation meets tradition",
    heroDescription: "Japan offers cutting-edge technology education, rich cultural experiences, and surprisingly affordable tuition with generous scholarship programs.",
    whyStudy: [
      { title: "Affordable Education", description: "National universities charge significantly lower tuition than Western countries.", icon: "GraduationCap" },
      { title: "MEXT Scholarships", description: "Japanese government fully-funded scholarships covering tuition, living, and airfare.", icon: "Award" },
      { title: "Technology Hub", description: "Home to global tech giants — Sony, Toyota, Honda, Nintendo, and more.", icon: "Globe" },
      { title: "Safe & Clean", description: "One of the safest countries with excellent public transport and healthcare.", icon: "Briefcase" },
    ],
    costs: {
      tuitionRange: "NPR 5,00,000 – NPR 15,00,000/year",
      livingRange: "NPR 8,00,000 – NPR 15,00,000/year",
      note: "Tokyo is more expensive. Cities like Osaka, Fukuoka, and Sendai are more affordable.",
    },
    requirements: [
      "Academic transcripts and certificates",
      "JLPT N2–N5 (for Japanese-taught programs) or IELTS/TOEFL (English programs)",
      "EJU score (for some universities)",
      "Statement of Purpose",
      "Letters of Recommendation",
      "Valid passport",
    ],
    visaSteps: [
      { step: 1, title: "Apply to University", description: "Apply directly or through a language school pathway." },
      { step: 2, title: "Receive CoE", description: "University applies for Certificate of Eligibility on your behalf." },
      { step: 3, title: "Visa Application", description: "Submit visa application at Japanese Embassy with CoE." },
      { step: 4, title: "Visa Issuance", description: "Processing takes 5–10 business days." },
      { step: 5, title: "Pre-Departure", description: "Arrange accommodation and attend orientation briefing." },
    ],
    intakes: [
      { name: "April (Main Intake)", months: "Apr – Sep", popularity: "Major" },
      { name: "October", months: "Oct – Mar", popularity: "Major" },
      { name: "January (Language Schools)", months: "Jan – Mar", popularity: "Minor" },
    ],
    workOpportunities: {
      partTime: "28 hours per week during semester",
      postStudy: "1-year job-seeking visa after graduation",
      details: [
        "Up to 28 hours/week part-time work permitted",
        "Full-time work allowed during holidays",
        "1-year designated activities visa for job hunting",
        "High demand for bilingual professionals",
        "Many companies offer sponsored work visas",
      ],
    },
  },
  {
    slug: "usa",
    name: "United States",
    flag: "🇺🇸",
    tagline: "The land of limitless possibilities",
    heroDescription: "The USA hosts the most top-ranked universities globally, offering unmatched research facilities, diverse campus life, and vast career opportunities.",
    whyStudy: [
      { title: "Global #1 Universities", description: "MIT, Harvard, Stanford — the USA dominates global university rankings.", icon: "GraduationCap" },
      { title: "OPT Work Program", description: "12–36 months of Optional Practical Training after graduation.", icon: "Briefcase" },
      { title: "Research Opportunities", description: "Largest R&D spending globally with cutting-edge labs and facilities.", icon: "Globe" },
      { title: "Financial Aid", description: "Generous assistantships, fellowships, and need-based aid available.", icon: "Award" },
    ],
    costs: {
      tuitionRange: "NPR 25,00,000 – NPR 70,00,000/year",
      livingRange: "NPR 12,00,000 – NPR 25,00,000/year",
      note: "Community colleges offer affordable pathways at NPR 8–15 lakhs/year.",
    },
    requirements: [
      "Academic transcripts (SLC/SEE, +2, Bachelor's)",
      "TOEFL iBT 80+ or IELTS 6.5+",
      "SAT/GRE/GMAT (program dependent)",
      "Statement of Purpose & Essays",
      "Letters of Recommendation (2–3)",
      "Financial documents (I-20 requirement)",
      "Valid passport",
    ],
    visaSteps: [
      { step: 1, title: "Get Accepted", description: "Receive I-20 form from a SEVP-certified institution." },
      { step: 2, title: "Pay SEVIS Fee", description: "Pay the I-901 SEVIS fee online." },
      { step: 3, title: "Schedule Interview", description: "Book F-1 visa interview at US Embassy." },
      { step: 4, title: "Prepare Documents", description: "Gather financial proof, I-20, transcripts, and test scores." },
      { step: 5, title: "Attend Interview", description: "Visit the US Embassy for your visa interview." },
      { step: 6, title: "Receive Visa", description: "If approved, receive your passport with F-1 visa stamp." },
    ],
    intakes: [
      { name: "Fall (Main Intake)", months: "Aug – Dec", popularity: "Major" },
      { name: "Spring", months: "Jan – May", popularity: "Major" },
      { name: "Summer", months: "May – Aug", popularity: "Minor" },
    ],
    workOpportunities: {
      partTime: "20 hours per week on-campus during semester",
      postStudy: "12 months OPT (36 months for STEM)",
      details: [
        "On-campus employment up to 20 hrs/week",
        "CPT for internships during study",
        "12-month OPT after graduation",
        "STEM graduates get 36-month OPT extension",
        "H-1B work visa sponsorship opportunities",
      ],
    },
  },
  {
    slug: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    tagline: "Centuries of academic excellence",
    heroDescription: "The UK offers world-renowned education with shorter course durations, saving you time and money while earning a globally respected degree.",
    whyStudy: [
      { title: "Shorter Courses", description: "Bachelor's in 3 years, Master's in 1 year — saving time and money.", icon: "GraduationCap" },
      { title: "Graduate Route Visa", description: "2-year post-study work visa for Bachelor's & Master's graduates.", icon: "Briefcase" },
      { title: "Prestigious Institutions", description: "Oxford, Cambridge, Imperial — centuries of academic tradition.", icon: "Globe" },
      { title: "Chevening Scholarships", description: "UK government's global scholarship programme for future leaders.", icon: "Award" },
    ],
    costs: {
      tuitionRange: "NPR 20,00,000 – NPR 55,00,000/year",
      livingRange: "NPR 15,00,000 – NPR 22,00,000/year",
      note: "London costs ~30% more than other UK cities like Manchester or Birmingham.",
    },
    requirements: [
      "Academic transcripts and certificates",
      "IELTS 6.0–7.0 overall (or PTE equivalent)",
      "Statement of Purpose",
      "Letters of Recommendation",
      "Portfolio (for art/design courses)",
      "Valid passport",
    ],
    visaSteps: [
      { step: 1, title: "Apply via UCAS/Direct", description: "Undergraduate via UCAS; postgraduate directly to universities." },
      { step: 2, title: "Receive CAS", description: "Get Confirmation of Acceptance for Studies from your university." },
      { step: 3, title: "Prepare Finances", description: "Show tuition + 9 months living costs in your bank account." },
      { step: 4, title: "Apply for Student Visa", description: "Submit Tier 4 (Student) visa application online." },
      { step: 5, title: "Biometrics", description: "Attend biometrics appointment at VFS Global centre." },
      { step: 6, title: "Visa Decision", description: "Standard processing takes 3–4 weeks." },
    ],
    intakes: [
      { name: "September (Main Intake)", months: "Sep – Jun", popularity: "Major" },
      { name: "January", months: "Jan – Sep", popularity: "Major" },
      { name: "May (Limited)", months: "May – Dec", popularity: "Minor" },
    ],
    workOpportunities: {
      partTime: "20 hours per week during term time",
      postStudy: "2-year Graduate Route visa",
      details: [
        "20 hours/week part-time during term",
        "Full-time work during holidays",
        "2-year Graduate Route visa after graduation",
        "PhD graduates get 3-year Graduate Route",
        "Skilled Worker visa sponsorship pathway",
      ],
    },
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    tagline: "Your pathway to permanent residency",
    heroDescription: "Canada combines excellent education with the most immigrant-friendly policies, offering clear pathways from student visa to permanent residency.",
    whyStudy: [
      { title: "PR Pathway", description: "One of the easiest countries to get permanent residency after studies.", icon: "Globe" },
      { title: "Affordable Tuition", description: "Lower tuition than USA/UK with high quality of education.", icon: "GraduationCap" },
      { title: "PGWP Program", description: "Post-Graduation Work Permit for up to 3 years after graduation.", icon: "Briefcase" },
      { title: "Safe & Welcoming", description: "Consistently ranked among the safest and most welcoming countries.", icon: "Award" },
    ],
    costs: {
      tuitionRange: "NPR 15,00,000 – NPR 40,00,000/year",
      livingRange: "NPR 10,00,000 – NPR 18,00,000/year",
      note: "Provinces like Manitoba, Saskatchewan offer lower living costs than Toronto/Vancouver.",
    },
    requirements: [
      "Academic transcripts and certificates",
      "IELTS 6.0–6.5 overall (or PTE/TOEFL equivalent)",
      "Statement of Purpose",
      "Letters of Recommendation",
      "GIC (Guaranteed Investment Certificate) — CAD $20,635",
      "Valid passport",
    ],
    visaSteps: [
      { step: 1, title: "Get Admission", description: "Apply and receive Letter of Acceptance from a DLI." },
      { step: 2, title: "Arrange GIC", description: "Purchase a Guaranteed Investment Certificate from a Canadian bank." },
      { step: 3, title: "Medical Exam", description: "Complete medical examination from panel physician." },
      { step: 4, title: "Apply for Study Permit", description: "Submit application online through IRCC portal." },
      { step: 5, title: "Biometrics", description: "Provide biometrics at VFS Global centre." },
      { step: 6, title: "Visa Decision", description: "Processing takes 8–16 weeks from Nepal." },
    ],
    intakes: [
      { name: "September (Fall)", months: "Sep – Dec", popularity: "Major" },
      { name: "January (Winter)", months: "Jan – Apr", popularity: "Major" },
      { name: "May (Summer)", months: "May – Aug", popularity: "Minor" },
    ],
    workOpportunities: {
      partTime: "20 hours per week during semester",
      postStudy: "Up to 3-year PGWP",
      details: [
        "20 hours/week off-campus work during studies",
        "Full-time work during scheduled breaks",
        "PGWP duration matches program length (up to 3 years)",
        "Canadian Experience Class (CEC) PR pathway",
        "Provincial Nominee Program (PNP) options",
      ],
    },
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    flag: "🇳🇿",
    tagline: "Quality education in paradise",
    heroDescription: "New Zealand offers a relaxed lifestyle, globally recognized qualifications, and excellent post-study work rights in one of the most beautiful countries on Earth.",
    whyStudy: [
      { title: "All 8 Universities Ranked", description: "Every New Zealand university is in the global top 3% — QS ranked.", icon: "GraduationCap" },
      { title: "3-Year Work Visa", description: "Post-study work visa for up to 3 years after graduation.", icon: "Briefcase" },
      { title: "Safe & Beautiful", description: "Ranked #2 most peaceful country with stunning natural landscapes.", icon: "Globe" },
      { title: "NZ Excellence Awards", description: "Government and university scholarships for international students.", icon: "Award" },
    ],
    costs: {
      tuitionRange: "NPR 15,00,000 – NPR 35,00,000/year",
      livingRange: "NPR 12,00,000 – NPR 20,00,000/year",
      note: "Wellington and Christchurch are more affordable than Auckland.",
    },
    requirements: [
      "Academic transcripts and certificates",
      "IELTS 6.0–6.5 overall (or PTE/TOEFL)",
      "Statement of Purpose",
      "Letters of Recommendation",
      "Financial proof (NZD $20,000/year living costs)",
      "Valid passport",
    ],
    visaSteps: [
      { step: 1, title: "Choose Course", description: "Apply to NZQA-approved institution." },
      { step: 2, title: "Receive Offer", description: "Get offer of place and pay tuition deposit." },
      { step: 3, title: "Medical & Insurance", description: "Complete medical exam and arrange health insurance." },
      { step: 4, title: "Apply for Visa", description: "Submit student visa application online." },
      { step: 5, title: "Visa Decision", description: "Processing takes 4–8 weeks." },
    ],
    intakes: [
      { name: "February (Semester 1)", months: "Feb – Jun", popularity: "Major" },
      { name: "July (Semester 2)", months: "Jul – Nov", popularity: "Major" },
    ],
    workOpportunities: {
      partTime: "20 hours per week during semester",
      postStudy: "Up to 3-year post-study work visa",
      details: [
        "20 hours/week during term time",
        "Full-time during holidays",
        "1–3 year post-study work visa based on qualification",
        "Pathway to residency through Skilled Migrant Category",
        "Partner work visa available for Level 7+ students",
      ],
    },
  },
];

export function getCountryData(slug: string): CountryData | undefined {
  return countries.find((country) => country.slug === slug);
}

export function getAllCountries(): CountryData[] {
  return countries;
}
