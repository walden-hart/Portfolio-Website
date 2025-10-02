export interface Link {
  title: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  details: string;
  links: Link[];
}

export const projects: Project[] = [
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'My personal portfolio site built with Vue & Vuetify.',
    details:
      'Vue + TypeScript + Vuetify portfolio project. Includes SPA routing, project showcase, and responsive layout.',
    links: [
      { title: 'Live Site', url: 'https://portfolio.hartwolf.com' },
      { title: 'Source Code', url: 'https://github.com/walden-hart/Portfolio-Website' }
    ]
  },
  {
    id: 'character-generator',
    title: 'Call of Cthulhu Random Character Generator',
    description: 'An app that will quickly generate a new Call of Cthulhu character sheet.',
    details:
      'Java app that will create a new form-fillable pdf for a Call of Cthulhu system. Runs as both a local app and as a web app using Java Enterprise Edition.',
    links: [
      { title: 'Live Site', url: 'https://coc.hartwolf.com' }
    ]
  },
  {
    id: 'nodepad-rs',
    title: 'Nodepad-rs',
    description: 'A graph-based note taking app for fantasy maps.',
    details:
      'Rust app that will use a graph-based system to allow the user to take notes and tie them to a location on a provided map.',
    links: [
      { title: 'Source Code', url: 'https://github.com/walden-hart/NodePad-rs' }
    ]
  },
  {
    id: 'form-sample',
    title: 'Form Sample',
    description: 'A sample Spring Boot form that takes basic information and displays a list of submitted information',
    details:
      'Spring Boot based Java webapp that uses a form to have the user submit some basic information, and stores that in a basic H2 database for persistance. The app will also display all previous submissions in the results page',
    links: [
      { title: 'Source Code', url: 'https://github.com/walden-hart/FormSample' }
    ]
  }
];