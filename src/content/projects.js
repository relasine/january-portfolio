import pitchBattlesImage from "../images/pitch-battles.png";
import swapiImage from "../images/swapibox.png";
import mymImage from "../images/mym.png";
export const projects = [
  {
    title: "Make Your Mark",
    imagePath: mymImage,
    deployed: "mym.tcsengine.com",
    details:
      "This microsite for Trimble’s Geospatial division was our team’s POC for transitioning from a fully-Drupal-based web stack to using React as the UI with Drupal as a headless CMS.",
    stack: "React, React Router, SCSS, headless Drupal, Node, Express"
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
  },
  {
    title: "Jedi Access Archives",
    imagePath: swapiImage,
    repo: "https://github.com/relasine/SWAPIBox",
    deployed: "https://relasine.github.io/SWAPIBox/",
    details:
      "Jedi Access Archives is an interactive, narrative application experience built to allow users to explore information related to the Star Wars universe utilizing the Star Wars API.",
    stack: "React, React Router, CSS3, JavaScript ES7, Jest/Enzyme"
  }
];
