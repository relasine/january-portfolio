import pitchBattlesImage from "../images/pitch-battles.png";
import luna from "../images/luna.png";
import construction from "../images/construction.png";
export const projects = [
  {
    title: "Trimble Construction",
    imagePath: construction,
    deployed: "https://construction.trimble.com",
    details:
      "One of many sites built using the Terra and Luna React Component Libraries. Utilizes ThreeJS and React Three Fiber for the animated globe",
    stack: "React, ThreeJS, React Router, SCSS, headless Drupal, Node, Express"
  }, 
  {
    title: "Luna Component Library",
    imagePath: luna,
    deployed: "https://luna-one.herokuapp.com",
    details:
      "React Component Library built in accordance with Atomic Design Principles. Utilized throughout for Trimble brochureware sites.",
    stack: "React, React Router, StorybookJS, SCSS, Node, Express, Jest, React Testing Library"
  },
  {
    title: "Pitch Battles",
    imagePath: pitchBattlesImage,
    repo: "https://github.com/relasine/pitch-battles-frontend",
    deployed: "https://pitchbattles.herokuapp.com",
    details:
      "Pitch Battles is a full stack application designed as a highly-gamified teaching tool for young musicians learning to read music and teachers to track their progress",
    stack:
      "Front End: React, React Native, CSS3, Photoshop, TravisCI, Heroku, JavaScript ES7, Jest/Enzyme"
  }

];
