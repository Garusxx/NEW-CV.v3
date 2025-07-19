import pOne from "../assets/image/cv-application.jpg";
import pTwo from "../assets/image/chat-app.png";
import pThree from "../assets/image/ml-app.png";
import pFour from "../assets/image/sass-web-app.jpg";
import pFive from "../assets/image/weather-app.jpg";
import pSix from "../assets/image/react-food-app.jpg";
import pSev from "../assets/image/cv-React.png";
import pEight from "../assets/image/Voice-Assistant.png";

const projects = {
  1: {
    title: "Voice-Assistant",
    image: pEight,
    description:
      "A full-stack voice assistant web application built with Flask (Python) as the backend and React as the frontend. ",
    github: "https://github.com/Garusxx/Voice-Assistant",
    demo: "https://voice-assistant-aj4b.onrender.com",
  },
  2: {
    title: "CV-React",
    image: pSev,
    description:
      "The React CV app is an interactive frontend that dynamically showcases a user's work experience, skills, and projects.",
    github: "https://github.com/Garusxx/CV-React",
    demo: "https://cv-react-meib.onrender.com",
  },
  3: {
    title: "CV-APPLICATION",
    image: pOne,
    description:
      "Dynamic web application using React, JavaScript, and Three.js, showcasing a seamless integration of immersive 3D graphics.",
    github: "https://github.com/Garusxx/cv-application-master",
    demo: "https://react-cv-app-31a43.web.app",
  },
  4: {
    title: "CHAT-APP",
    image: pTwo,
    description:
      "Chat app with MERN stack: fast, intuitive, modern. Real-time chatting, file sharing, seamless connectivity. Join the conversation now!",
    github: "https://github.com/Garusxx/chat-gpt-app/tree/master",
    demo: "",
  },
  5: {
    title: "ML-APP",
    image: pThree,
    description:
      "This machine learning app predicts house prices based on their distance from the city center using TensorFlow. It's an ideal tool for understanding real estate market trends through data-driven insights.",
    github: "https://github.com/Garusxx/ML--housing-problem",
    demo: "",
  },
  6: {
    title: "SASS-WEB-APP",
    image: pFour,
    description: "Simple web page utilizing Sass for styling.",
    github: "https://github.com/Garusxx/sass-web-app",
    demo: "",
  },
  7: {
    title: "WEATHER-APP",
    image: pFive,
    description:
      "Simple weather application using an API to display current weather conditions and forecasts for various locations.",
    github: "https://github.com/Garusxx/weather-app",
    demo: "",
  },
  8: {
    title: "REACT-FOOD-APP",
    image: pSix,
    description:
      "Simple food application using an API to display current food offers and menus for various restaurants.",
    github: "https://github.com/Garusxx/react-food-app",
    demo: "",
  },
};

export default projects;
