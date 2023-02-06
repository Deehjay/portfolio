export const projects = [
  {
    projectName: "Know It All",
    slug: "know-it-all",
    summary: "An addictive daily quiz game with leaderboards",
    longDescription:
      "Know It All was a project created during the final group project phase of the Northcoders bootcamp. Our group was tasked with pitching three ideas for an app, spike our chosen technology for them, and also create MVPs. For this project, we decided to challenge ourself by learning and utilising new technologies not covered on the course, all in the mere 2-week timeframe we had to complete the project. Know It All is a web app that allows users to partake in a daily quiz comprising of five questions. Users are given a score based on their time taken and how many questions they answer correctly. Users also have access to stats such as their daily streak, and if they sign up, will be granted their own account where they can unlock achievements, and also join leaderboards which reset daily.",
    cardImage: "/Know-It-All/know-it-all-card.png",
    images: [
      "/Know-It-All/know-it-all-1.png",
      "/Know-It-All/know-it-all-2.png",
      "/Know-It-All/know-it-all-3.png",
      "/Know-It-All/know-it-all-4.png",
      "/Know-It-All/know-it-all-5.png",
      "/Know-It-All/know-it-all-6.png",
    ],
    tech: {
      fe: ["Svelte", "TypeScript", "DaisyUI", "TailwindCSS"],
      be: ["MongoDB", "Express.js", "FireBase", "Node.js", "Jest"],
    },
    github: "https://github.com/alexcupit/tbc-FE/",
    prod: "https://knowitallquiz.netlify.app/",
  },
  {
    projectName: "portfolio",
    slug: "portfolio",
    summary: "This site!",
    longDescription:
      "This site was created after my software development bootcamp with Northcoders concluded. I wanted to try out another piece of new tech, and this site was built using the popular Vue.js framework. This site serves to demonstrate the projects I've worked on so far in my journey, and will be continually updated to reflect the new challenges I take on.",
    cardImage: "src/assets/me-cropped.png",
    tech: {
      fe: ["Vue.js", "TailwindCSS"],
      be: [],
    },
    github: "https://github.com/alexcupit/tbc-FE/",
    prod: "https://knowitallquiz.netlify.app/",
  },
];
