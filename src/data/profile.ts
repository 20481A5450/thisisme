/* Profile: identity, links, channels.
   Part of the portfolio's data layer. Edit here; every view (web, terminal,
   explorer, world) reads from these files. */

export const site = {
  url: 'https://github.com/20481A5450',
  name: 'Zohaib Shaik',
  shortName: 'Zohaib',
  role: 'AI & Data Science Engineer',
  focus: 'Artificial Intelligence · Data Science · Automotive Engineering',
  location: 'Bangalore, Karnataka, India',
  title: 'Zohaib Shaik · AI & Data Science Engineer',
  description:
    'AI and Data Science graduate with 1.2 years of experience at Marelli, a leading automotive company. Based in Bangalore, originally from Vijayawada, and focused on solving real-world data and intelligent system problems.',
  email: 'shaikzohaibgec@gmail.com',
  links: {
    github: 'https://github.com/20481A5450',
    linkedin: 'https://www.linkedin.com/in/zohaib-shaik-1a8877216/',
    trailblazer: '',
    lexora: '',
    ownvoicz: '',
  },
  /** Put a PDF of your CV at public/Zohaib_Shaik_CV.pdf and set this to its path. */
  cvPath: null as string | null,
};

/** What `whoami` prints and the world's info panel shows. Only stated facts. */
export const identity = {
  name: 'Zohaib Shaik',
  role: 'AI & Data Science Engineer',
  focusLine: 'Artificial Intelligence / Data Science',
  location: 'Bangalore, Karnataka, India',
  currently: ['B.Tech in Artificial Intelligence and Data Science', 'Seshadri Rao Gudlavallu Engineering College'],
  background: '1.2 years of experience at Marelli, a leading automotive company',
  focus: ['AI', 'Data Science', 'Machine learning', 'Automotive innovation', 'Problem solving'],
};

/* ── Teaching ──────────────────────────────────────────────── */
export const channels = [
  { handle: '@zohaibshaik', name: 'Learning Journey', topic: 'AI, data science and engineering learning updates.', url: 'https://www.linkedin.com/in/zohaib-shaik-1a8877216/', mode: 'Learn' },
  { handle: '@zohaibshaik', name: 'Professional Profile', topic: 'Career updates and project work.', url: 'https://www.linkedin.com/in/zohaib-shaik-1a8877216/', mode: 'Build' },
  { handle: '@zohaibshaik', name: 'Portfolio', topic: 'Work, projects and technical exploration.', url: 'https://github.com/20481A5450', mode: 'Explore' },
];

