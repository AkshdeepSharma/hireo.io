import light from '../themes/light';
import dark from '../themes/dark';

const BACKEND_PROD_URL = 'http://localhost:4000/';
const BACKEND_DEV_URL = 'http://localhost:4000/';

export const backendBaseUrl =
  process.env.NODE_ENV === 'production' ? BACKEND_PROD_URL : BACKEND_DEV_URL;

export const availableThemes = { light, dark };
export const hireMePageSkills = 'hire_me_page_skills';
export const hireMePageJobType = 'hire_me_page_jobtype';
export const checkBoxMessagesSkills = [
  'backendDev',
  'frontendDev',
  'fullstackDev',
  'appDev',
  'gameDev'
];
export const checkBoxMessagesJobType = [
  'fulltimeWork',
  'internWork',
  'contractWork'
];

export const testResumes = [
  {
    id: 'rYz3',
    skills: ['backendDev', 'frontendDev', 'fullstackDev'],
    positions: ['contractWork', 'fulltimeWork'],
    pdfUrl: 'https://akshdeep.me/resume.pdf',
    name: 'Akshdeep Sharma'
  },
  {
    id: 'wXz7',
    skills: ['appDev', 'frontendDev', 'gameDev'],
    positions: ['fulltimeWork', 'internWork'],
    pdfUrl: 'https://eliselivingston.design/images/Livingston_Resume.pdf',
    name: 'Elise Livingston'
  }
];
