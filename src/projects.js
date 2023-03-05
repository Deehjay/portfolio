export const projects = [
  {
    projectName: "Know It All",
    slug: "know-it-all",
    cardHeading: "NC Final Group Project",
    summary: "An addictive daily quiz game with leaderboards",
    longDescriptionP1:
      "Know It All was a project created during the final group project phase of the Northcoders bootcamp. Our group was tasked with pitching three ideas for an app, spiking our chosen technology for them, and also creating MVPs for the ideas. For this project, we decided to challenge ourself by learning and utilising new technologies not covered on the course, all in the mere 2-week timeframe we had to complete the project.",
    longDescriptionP2:
      "Know It All is a web app that allows users to partake in a daily quiz comprising of five questions. Users are given a score based on their time taken and how many questions they answer correctly. Users also have access to stats such as their daily streak, and if they sign up, will be granted their own account where they can unlock achievements, and also join leaderboards which reset daily.",
    cardImage: "/Know-It-All/know-it-all-card.webp",
    images: [
      "/Know-It-All/know-it-all-1.webp",
      "/Know-It-All/know-it-all-2.webp",
      "/Know-It-All/know-it-all-3.webp",
      "/Know-It-All/know-it-all-4.webp",
      "/Know-It-All/know-it-all-5.webp",
      "/Know-It-All/know-it-all-6.webp",
    ],
    tech: [
      "svelte",
      "typescript",
      "tailwindcss",
      "mongodb",
      "express",
      "firebase",
      "nodejs",
      "jest",
    ],
    github: "https://github.com/alexcupit/tbc-FE/",
    prod: "https://knowitallquiz.netlify.app/",
  },
  {
    projectName: "Dan James Portfolio",
    slug: "portfolio",
    cardHeading: "This site!",
    summary: "This awesomely amazing site you've landed yourself on!",
    longDescriptionP1:
      "This site was created after my software development bootcamp with Northcoders concluded. I wanted to challenge myself by trying out another piece of new tech, and so built this site using the popular Vue.js framework, in combination with TailwindCSS.",
    longDescriptionP2:
      "This site serves to demonstrate the projects I've worked on so far in my journey, let you know a bit about myself, and even give you the opportunity to hire me (lucky you!). This site will be continually updated to reflect the new challenges and projects I take on through my journey in software development.",
    cardImage: "/Portfolio/portfolio-card.webp",
    tech: ["vuejs", "tailwindcss"],
    images: [
      "/Portfolio/portfolio-1.png",
      "/Portfolio/portfolio-2.png",
      "/Portfolio/portfolio-3.png",
      "/Portfolio/portfolio-4.png",
    ],
    github: "https://github.com/Deehjay/portfolio",
    prod: "https://djames.io",
  },
  {
    projectName: "House Of Games API",
    slug: "house-of-games-api",
    cardHeading: "NC Back-End Project",
    summary:
      "A RESTful api built for integration with the House of Games frontend!",
    longDescriptionP1:
      "This RESTful api was built as part of the backend project during my time with Northcoders. It's been designed to plug directly into the frontend for the House of Games, a board game review website, and has a bunch of endpoints available to use with a variety of different request methods.",
    longDescriptionP2:
      "This project was built using Express.js, Node.js, and PostgreSQL, and was built from the ground up using TDD via Jest and Supertest. Users are able to send GET, POST, PATCH, and DELETE requests to an assortment of different endpoints, examples of which can be seen on the live, deployed version",
    cardImage: "/House-Of-Games-Api/house-of-games-api-card.webp",
    images: [
      "/House-Of-Games-Api/house-of-games-api-1.webp",
      "/House-Of-Games-Api/house-of-games-api-2.webp",
      "/House-Of-Games-Api/house-of-games-api-3.webp",
      "/House-Of-Games-Api/house-of-games-api-4.webp",
      "/House-Of-Games-Api/house-of-games-api-5.webp",
    ],
    tech: ["javascript", "express", "nodejs", "jest", "postgresql"],
    github: "https://github.com/Deehjay/be-nc-games",
    prod: "https://tuxedo-frog.cyclic.app/api",
  },
  {
    projectName: "House of Games",
    slug: "house-of-games",
    cardHeading: "NC Front-End project",
    summary:
      "A board game review website - because who doesn't love board games?!",
    longDescriptionP1:
      "The House of Games is a board game review website built during the frontend project phase of my time with Northcoders. This site operates in tandem with the RESTful api I created during the backend project, and was built using React.js.",
    longDescriptionP2:
      "Users are able to browse the website as a guest and view a list of all reviews, and are able to filter or sort them using queries. Users can also log in using one of the pre-existing accounts, which will give them access to additional features, such as the ability to post new reviews, comment and like on existing reviews, and delete their own comments and reviews they've posted. The site includes industry-standard practices including error handling and optimistic rendering, and it's also responsive and was designed with a mobile-first approach.",
    cardImage: "/House-Of-Games/house-of-games-card3.webp",
    images: [
      "/House-Of-Games/house-of-games-1.webp",
      "/House-Of-Games/house-of-games-2.webp",
      "/House-Of-Games/house-of-games-3.webp",
      "/House-Of-Games/house-of-games-4.webp",
      "/House-Of-Games/house-of-games-5.webp",
      "/House-Of-Games/house-of-games-6.webp",
    ],
    tech: ["react"],
    github: "https://github.com/Deehjay/fe-nc-games",
    prod: "https://the-house-of-games.netlify.app//",
  },
];
