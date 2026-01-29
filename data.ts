import { Employee, ServiceItem, Testimonial, LeadershipProfile } from './types';

export const SERVICES: ServiceItem[] = [
  { id: '1', title: 'Web Development', description: 'Cutting-edge responsive websites using modern frameworks like React and Next.js. We ensure SEO optimization and high performance.', icon: 'globe' },
  { id: '2', title: 'Mobile Apps', description: 'Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.', icon: 'smartphone' },
  { id: '3', title: 'Cloud Solutions', description: 'Scalable cloud infrastructure setup, migration, and management on AWS, Azure, and Google Cloud Platform.', icon: 'cloud' },
  { id: '4', title: 'AI & ML', description: 'Intelligent solutions integrated into business processes, including predictive analytics, chatbots, and automation.', icon: 'cpu' },
  { id: '5', title: 'Cybersecurity', description: 'Robust security audits, penetration testing, and protection strategies for your digital assets.', icon: 'shield' },
  { id: '6', title: 'IT Consulting', description: 'Strategic technology planning, digital transformation guidance, and IT infrastructure optimization.', icon: 'briefcase' },
];

export const getDriveUrl = (id: string) => `https://drive.google.com/thumbnail?id=${id}&sz=w1200`;

export const LEADERSHIP: LeadershipProfile[] = [
  {
    id: 'lead-1',
    name: 'Kashif Akhtar',
    role: 'CEO & Founder',
    bio: 'A visionary leader with 5 years in software engineering. Driven by a passion to bridge the digital dvide.',
    imageUrl: getDriveUrl('1-RDIBow1aTLAU3r7Y7e2Y5qMYRad1Lnv'),
    socials: { linkedin: '#', twitter: '#' }
  },
  {
    id: 'lead-2',
    name: 'Tehseen Ullah',
    role: 'Co-Founder & CTO',
    bio: 'Former Tech Lead at AM tech giants. Ensures our technical curriculum and solutions are world-class.',
    imageUrl: getDriveUrl('1X-4GeCxeuolsHOeWqsNB2fojV5CzW7m_'),
    socials: { linkedin: '#', twitter: '#' }
  },
  {
    id: 'lead-3',
    name: 'Ghuffran Ahmed',
    role: 'Consultant',
    bio: 'Expert in strategic planning and business development with a focus on emerging markets.',
    imageUrl: getDriveUrl('1DE3b68AT60a4bA6OgLv8Ki-o70wyWS7i'),
    socials: { linkedin: '#', twitter: '#' }
  },
  {
    id: 'lead-4',
    name: 'Ahmad Saleem',
    role: 'Web Developer',
    bio: 'Full-stack specialist dedicated to building performant and accessible web experiences.',
    imageUrl: getDriveUrl('1B_4rpecbApEE_-_RWtjWUt39lGefZgnY'),
    socials: { linkedin: '#', twitter: '#' }
  }
];

export const ABOUT_CONTENT = {
  whoWeAre: "AM Tech Hub Pvt. Ltd. is a modern learning center and digital solutions company dedicated to providing high-quality IT education, software services, and professional skill development.",
  history: "Founded on the principles of innovation and excellence, AM Tech Hub aims to equip students with both technical and practical skills that match global industry requirements. We bridge the gap between academic theory and industry reality.",
  values: [
    { title: "Innovation", desc: "Constantly pushing boundaries and exploring new technologies." },
    { title: "Integrity", desc: "Upholding the highest standards of ethics in everything we do." },
    { title: "Excellence", desc: "Delivering superior quality in education and development services." }
  ]
};

export const MOCK_EMPLOYEES: Employee[] = [
  {
    id: 'emp-001',
    name: 'Muhammad Hanif',
    email: 'mhanif@amtechhub.com',
    role: 'Senior Frontend Engineer',
    department: 'Engineering',
    skills: ['React', 'TypeScript', 'Tailwind', 'Three.js'],
    joinDate: '2021-03-15',
    hasLaptop: true,
    gender: 'Female',
    isTopTalent: true,
    projects: [
      { id: 'p1', name: 'E-Commerce Platform', role: 'Lead Dev', description: 'Built the core storefront.', status: 'Completed' },
      { id: 'p2', name: 'Dashboard UI', role: 'UX Designer', description: 'Revamped the admin analytics.', status: 'In Progress' }
    ],
    // avatarUrl: getDriveUrl('1IktUX0hRAIEoztx72vF1xW2ULYpHjHKR')
  },
  {
    id: 'emp-002',
    name: 'Hussain Ullah',
    email: 'hussain@amtechhub.com',
    role: 'Backend Architect',
    department: 'Engineering',
    skills: ['Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    joinDate: '2020-06-01',
    hasLaptop: true,
    gender: 'Male',
    isTopTalent: true,
    projects: [
      { id: 'p3', name: 'API Gateway', role: 'Architect', description: 'Designed microservices communication.', status: 'Completed' }
    ],
    // avatarUrl: getDriveUrl('1_k34V9ZbK08XyvEYzaops3Wm1WE-Ra92')
  },
  {
    id: 'emp-003',
    name: 'Ahman Ullah',
    email: 'ahman@amtechhub.com',
    role: 'Product Manager',
    department: 'Product',
    skills: ['Agile', 'Jira', 'Roadmapping', 'User Research'],
    joinDate: '2022-01-10',
    hasLaptop: true,
    gender: 'Female',
    isTopTalent: false,
    projects: [],
    // avatarUrl: getDriveUrl('1n50ZPSD6AeV6J5kVC_WxjatfLF-_yVeZ')
  },
  {
    id: 'emp-004',
    name: 'Kashif Mehmood',
    email: 'kashifm@amtechhub.com',
    role: 'DevOps Engineer',
    department: 'Operations',
    skills: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD'],
    joinDate: '2023-05-20',
    hasLaptop: false,
    gender: 'Male',
    isTopTalent: false,
    projects: [
      { id: 'p4', name: 'Migration to Cloud', role: 'Lead', description: 'Moved on-prem legacy to AWS.', status: 'Completed' }
    ],
    // avatarUrl: getDriveUrl('1HB5G5MXGAd2Nydyl49jTMu_moale9Vzw')
  },
  {
    id: 'emp-005',
    name: 'Muhammad Hasnain',
    email: 'mhasnain@amtechhub.com',
    role: 'UI/UX Designer',
    department: 'Design',
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'HTML/CSS'],
    joinDate: '2021-11-15',
    hasLaptop: true,
    gender: 'Female',
    isTopTalent: true,
    projects: [
      { id: 'p5', name: 'Mobile App Redesign', role: 'Lead Designer', description: 'Modern look for client app.', status: 'In Progress' }
    ],
    // avatarUrl: getDriveUrl('1IuuInAE5Tr3SH4FT8H60o6Y2wih_Ti_8')
  },
  {
    id: 'emp-006',
    name: 'Atif Shehzad',
    email: 'atifs@amtechhub.com',
    role: 'Systems Architect',
    department: 'Engineering',
    skills: ['Go', 'Rust', 'Kubernetes'],
    joinDate: '2019-04-12',
    hasLaptop: true,
    gender: 'Male',
    isTopTalent: true,
    projects: [],
    // avatarUrl: getDriveUrl('1Jri8eDhUoELZejAT5uUBegT4mmJNJVfc')
  },
  {
    id: 'emp-007',
    name: 'Aftab Hussain',
    email: 'aftabh@amtechhub.com',
    role: 'Security Specialist',
    department: 'Engineering',
    skills: ['Pentesting', 'Python', 'Networking'],
    joinDate: '2022-08-20',
    hasLaptop: true,
    gender: 'Female',
    isTopTalent: false,
    projects: [],
    // avatarUrl: getDriveUrl('1EaHehsgw5yQbfI30pexx1maXTmHJs0yX')
  },
  // {
  //   id: 'emp-008',
  //   name: 'Matt Smith',
  //   email: 'matts@amtechhub.com',
  //   role: 'QA Engineer',
  //   department: 'Engineering',
  //   skills: ['Jest', 'Cypress', 'Selenium', 'Python'],
  //   joinDate: '2020-06-01',
  //   hasLaptop: true,
  //   gender: 'Male',
  //   isTopTalent: true,
  //   projects: [
  //     { id: 'p3', name: 'System Integration Test', role: 'Tester', description: 'Full system test suite.', status: 'Completed' }
  //   ],
  //   avatarUrl: getDriveUrl('1GLmqL2B5HG28laVa_o66Qaooj2_c6c_H')
  // },
  //   {
  //   id: 'emp-009',
  //   name: 'Sarah Wright',
  //   email: 'sarah.w@amtechhub.com',
  //   role: 'Systems Architect',
  //   department: 'Engineering',
  //   skills: ['Go', 'Rust', 'Kubernetes'],
  //   joinDate: '2019-04-12',
  //   hasLaptop: true,
  //   gender: 'Male',
  //   isTopTalent: true,
  //   projects: [],
  //   avatarUrl: getDriveUrl('1v7hG5htDdqnbagX5x7VAHsRDqDiFtfL1')
  // },
  // {
  //   id: 'emp-010',
  //   name: 'Billie Eillish',
  //   email: 'billie.e@amtechhub.com',
  //   role: 'Security Specialist',
  //   department: 'Engineering',
  //   skills: ['Pentesting', 'Python', 'Networking'],
  //   joinDate: '2022-08-20',
  //   hasLaptop: true,
  //   gender: 'Female',
  //   isTopTalent: true,
  //   projects: [
  //     { id: 'p5', name: 'Mobile App Redesign', role: 'Lead Designer', description: 'Modern look for client app.', status: 'In Progress' }
  //   ],
  //   avatarUrl: getDriveUrl('1nd7vvDg0Vw1AklRHjqMyyu_c9vgw2YHW')
  // },
  // {
  //   id: 'emp-011',
  //   name: 'Larra Smith',
  //   email: 'larra.s@amtechhub.com',
  //   role: 'QA Engineer',
  //   department: 'Engineering',
  //   skills: ['Jest', 'Cypress', 'Selenium', 'Python'],
  //   joinDate: '2020-06-01',
  //   hasLaptop: true,
  //   gender: 'Male',
  //   isTopTalent: true,
  //   projects: [
  //     { id: 'p3', name: 'System Integration Test', role: 'Tester', description: 'Full system test suite.', status: 'Completed' }
  //   ],
  //   avatarUrl: getDriveUrl('1khmBLVlDJ1omrAWiLULl3qggKkDUB2wB')
  // },
   {
    id: 'emp-010',
    name: 'Izhar ahmad ',
    email: 'izharh@amtechhub.com',
    role: 'Security Specialist',
    department: 'Engineering',
    skills: ['Pentesting', 'Python', 'Networking'],
    joinDate: '2022-08-20',
    hasLaptop: true,
    gender: 'Female',
    isTopTalent: false,
    projects: [
      { id: 'p3', name: 'System Integration Test', role: 'Tester', description: 'Full system test suite.', status: 'Completed' }
    ],
    // avatarUrl: getDriveUrl('1khmBLVlDJ1omrAWiLULl3qggKkDUB2wB')
  },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 't1', 
    name: 'TechCorp Global', 
    role: 'CTO', 
    content: 'AM Tech Hub transformed our digital infrastructure.' 
  },
  { id: 't2', 
    name: 'InnovateOne', 
    role: 'Founder', 
    content: 'The skills and dedication of the team are unmatched.' 
  },
  { id: 't3', 
    name: 'EduSystems', 
    role: 'Director', 
    content: 'Bridging the gap between students and tech beautifully.' 
  },
];
