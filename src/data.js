// ============================================================
// ALL EDITABLE CONTENT FOR THE PORTFOLIO LIVES IN THIS FILE.
// Change the text here and rebuild — no need to touch the
// components in src/components/.
// ============================================================

export const profile = {
  name: 'Rebuma Tamiru Roro',
  firstName: 'Rebuma',
  role: 'Web Developer & Graphic Designer',
  shortRole: 'IT Support professional',
  location: 'Addis Ababa, Ethiopia',
  phone: '+251 969 120 139',
  email: 'rebumatamiru12@gmail.com',
  // The live site had empty GitHub / LinkedIn fields, so no links
  // were shown there. These are filled in from the user's own
  // details — remove a line if you do not want that link shown.
  github: 'https://github.com/rebumat',
  linkedin: 'https://linkedin.com/in/rebuma-tamiru-roro',
  // Profile photo: public/profile.jpg (his own photo, white hoodie).
  // Replace that file to change the photo — keep the same file name.
  photo: '/profile.jpg',
  photoAlt: 'Rebuma Tamiru Roro',
}

export const hero = {
  kicker: "HELLO, I'M",
  titleLine1: 'Keeping technology',
  titleLine2: 'working smoothly.',
  description:
    'I’m an IT Support professional with a BSc in Information Science and hands-on experience in IT support, network maintenance, and software tools.',
  metaTags: 'IT Support · Networking · Web Development',
}

export const stats = [
  { value: '3.62', label: 'University GPA' },
  { value: '81%', label: 'Exit Exam Result' },
  { value: 'Cisco', label: 'Networking Training' },
  { value: '3+', label: 'Information Science' },
]

export const about = {
  eyebrow: 'ABOUT ME',
  title: 'Reliable support for people and technology.',
  lead: 'I bring together IT support, computer networking, web development, and graphic design, with a focus on problem-solving, communication, and teamwork.',
  paragraphs: [
    'I hold a BSc in Information Science from Wollega University. My experience includes an IT Support internship at Commercial Bank of Ethiopia and a paid internship as an IT Support and BPO Assistant at DHL Ethiopian Airlines Logistics Service S.C.',
    'I have also contributed to the development of a Transport Management System, where I supported business requirements gathering, analysis, documentation, and front-end design and implementation.',
  ],
  education: {
    degree: 'BSc in Information Science',
    school: 'Wollega University',
    dates: 'July 2021 – June 2024',
    gpa: 'GPA 3.62',
  },
  focus: {
    title: 'IT Support',
    text: 'IT support, hardware and software troubleshooting, and network maintenance.',
  },
}

export const skills = [
  {
    icon: 'headphones',
    title: 'IT Support',
    text: 'Helping users and maintaining reliable daily IT services.',
    tags: ['IT user support', 'Hardware support', 'Software troubleshooting', 'User assistance'],
  },
  {
    icon: 'network',
    title: 'Networking',
    text: 'Network fundamentals, connectivity support, and maintenance.',
    tags: ['Troubleshooting', 'Switching', 'Routing', 'Wireless', 'Cisco Packet Tracer'],
  },
  {
    icon: 'monitor',
    title: 'IT Operations',
    text: 'Supporting IT products and services and keeping operational information accurate.',
    tags: ['IT products & services', 'Station information', 'Data quality checks', 'Data consistency'],
  },
  {
    icon: 'database',
    title: 'Systems & Data',
    text: 'Maintaining accurate information and supporting business systems.',
    tags: ['Data quality checks', 'Data consistency', 'Documentation', 'System workflows'],
  },
]

export const experience = [
  {
    date: 'DEC 2025 — PRESENT',
    badge: 'PAID INTERNSHIP',
    title: 'IT Support and BPO Assistant',
    company: 'DHL Ethiopian Airlines Logistics Service S.C',
    text: 'Support and maintain IT products and services. Ensure operational station information is accurate and consistently updated in the DGF Station Directory. Support data quality checks and maintain data consistency across systems.',
    tags: ['IT Products & Services', 'Station Information', 'Data Quality', 'Data Consistency'],
  },
  {
    date: 'NOV 2024 — NOV 2025',
    badge: 'PAID INTERNSHIP · SSTSI PROGRAM',
    title: 'Business Analyst & Front-End Developer',
    company: 'Ministry of Innovation and Technology · Target Business Consultants PLC',
    text: 'Contributed to the Transport Management System by supporting requirements gathering, analysis, and documentation, and participating in front-end design and implementation. Collaborated with business analysts and software developers to support usable system interfaces and functional requirements.',
    tags: ['System Support Context', 'Documentation', 'Figma', 'Front-End'],
  },
  {
    date: 'JUL 2023 — SEP 2023',
    badge: 'INTERNSHIP',
    title: 'IT Support Intern',
    company: 'Commercial Bank of Ethiopia',
    text: 'Provided IT support and troubleshooting to various departments. Helped employees resolve hardware and software issues, and carried out regular network checks, maintenance, and upgrades to support reliable operations and reduce downtime.',
    tags: ['Hardware & Software', 'Network Maintenance', 'Troubleshooting'],
  },
]

export const projects = [
  {
    number: '01',
    icon: 'wrench',
    type: 'IT SUPPORT · NETWORKING',
    title: 'IT Support & Networking',
    description:
      'Practical IT support experience assisting employees with hardware and software issues and carrying out routine network checks and maintenance.',
    points: [
      'Troubleshooting hardware and software issues',
      'Routine network checks, maintenance, and upgrades',
      'Supporting employees across organizational departments',
    ],
    link: null,
    linkLabel: null,
  },
  {
    number: '02',
    icon: 'monitor',
    type: 'BUSINESS SYSTEM · SYSTEM SUPPORT',
    title: 'Transport Management System',
    description:
      'Contributed to a government Transport Management System developed under the SSTSI project for the Ministry of Innovation and Technology.',
    points: [
      'Supported requirements gathering and documentation',
      'Contributed to user interface design and front-end implementation',
      'Worked with analysts and developers on functional requirements',
    ],
    link: 'https://tms.gdop.gov.et/',
    linkLabel: 'Visit TMS website',
  },
  {
    number: '03',
    icon: 'database',
    type: 'IT OPERATIONS · DATA MANAGEMENT',
    title: 'IT Operations & Data Quality',
    description:
      'Supporting IT products and services and maintaining accurate operational station information in the DGF Station Directory.',
    points: [
      'Support for IT products and services',
      'Updating operational station information in the DGF Station Directory',
      'Data quality checks and consistency across systems',
    ],
    link: null,
    linkLabel: null,
  },
  // To add one of his GitHub projects, uncomment and edit an entry
  // like this (the live site did not list them, so they are off by
  // default):
  // {
  //   number: '04',
  //   icon: 'bus',
  //   type: 'WEB APP · REACT',
  //   title: 'ODAA Bus Management',
  //   description: 'Bus booking platform — live at odaa-bus-et.netlify.app.',
  //   points: ['Online booking and payments', 'Route search and pricing'],
  //   link: 'https://odaa-bus-et.netlify.app/',
  //   linkLabel: 'Visit live site',
  // },
]

export const certifications = [
  {
    icon: 'network',
    title: 'CISCO Training Academy (CCNA)',
    date: 'July 2023 – September 2023',
    tags: [
      'Introduction to Networks',
      'Switching, Routing & Wireless Essentials',
      'Enterprise Networking, Security & Automation',
    ],
  },
  {
    icon: 'monitor',
    title: 'Web Design and Development',
    date: 'Satcom Institute of Technology · August – October 2024',
    tags: [],
  },
  {
    icon: 'award',
    title: 'Adobe Creative Applications',
    date: 'Boston Languages Computer Training Institute · January – March 2025',
    tags: ['Photoshop', 'Illustrator', 'InDesign'],
  },
]

export const contact = {
  eyebrow: 'GET IN TOUCH',
  title: 'Need dependable IT support?',
  text: 'I’m open to opportunities in IT support, technical support, network support, and IT operations. Let’s connect.',
  buttonLabel: 'Email me',
}
