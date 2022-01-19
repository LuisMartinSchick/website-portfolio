import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Luis Martin Schick | Developer', // e.g: 'Name | Developer'
  lang: 'de, en, es, cat', // e.g: en, es, fr, jp
  description: 'Welcome to my website, where I tell you a bit about myself!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hey there! My name is',
  name: 'Luis Martin Schick',
  subtitle: "I'm a Java/JavaScript Developer, with a passion for my projects!",
  cta: 'Get to know me!',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "I am currently studying Business IT - Software Engineering in Germany (Baden-Württemberg Cooperative State University Karlsruhe, expected end October 2022), and I work for a chemical company as a Software Developer. I'm also part of a volunteer fire brigade, for which I also volunteer my time as SysAdmin.",
  paragraphTwo:
    'Born and raised in Barcelona, I attended the German School Barcelona and finished my Abitur (German A-Levels) in 2018. After finishing school, I moved to Germany to pursue a higher education.',
  paragraphThree:
    'I speak four languages, German (Native), Spanish (Native), English (Fluent) and Catalan (Fluent).',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'fire.png',
    title: 'Firefighter and SysAdmin for a Volunteer Fire Department',
    info: 'Upon arriving in Germany, I joined my towns local volunteer fire brigade, and recently took over systems administration, together with one colleague more.',
    info2:
      'Since then we have completely modernised the IT Infrastructure and increased its resiliency.',
    url: 'http://www.ff-weingarten-baden.de/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'climbing.png',
    title: 'Climbing',
    info: "Climbing (and bouldering) allows me to meet my friends and have fun with them, while keeping in shape! Most times I'm climbing it's in an indoor gym, however I love climbing outside - you get so close to nature. :)",
    info2:
      'One of the aspects I love about climbing is that it calls for creative problem solving, and that it is so much fun.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'diving.jpg',
    title: 'Diving',
    info: "A perfect way to decompress and disconnect from a busy life, diving. At the start of 2019 I did my CMAS * diver course, and since then I've been diving in Germany, Turkey and Spain.",
    info2:
      "Whenever I travel to a location with a nice, warm sea, I always look for possible diving spots. It's a very fun way to spend time!",
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "If you'd like to know more, send me a message!",
  btn: 'Get in touch with me!',
  email: 'luis.martin@outlook.de',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/luis-martin-schick-055571149/?locale=en_US',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/LuisMartinSchick',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
