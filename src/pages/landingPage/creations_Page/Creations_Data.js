import { creationsImages } from "./Creations_Images";

//To add more projects simply make another entry in the "creationsData" object. The page will automaticly render the project with a ".map" method in "Creations_Render.js". Remember to add a "key" otherwise React will give an error message.

/* Template:
  {
    key: "Assign a unique number here(can be variable).",
    title: "Just a simple title for the project.",
    image: "Url of the image, usually the screenshot.",
    alt: "Alternative description of the image for the sight impaired or the image fails to load.",
    github: "A link to the code on github or coding storage of your choice. Assigned to button number one.",
    github_Pages: "A link to a live hosting of the site. Assigned to button number two.",
    description: "A simple description of the website."
  }
*/

export const creationsData = [
  {
    key: 0,
    title: "Skeletor lydbrett",
    image: creationsImages.skelly,
    alt: "Skjermbildet av nettsiden Skeletor Soundboard",
    github: "https://github.com/sindre2/Skeletor",
    github_Pages: "https://sindre2.github.io/Skeletor/",
    description: "Morsomme lyder ifra tegnefilmfiguren Skeletor.",
  },
  {
    key: 1,
    title: "Planetarium",
    image: creationsImages.planetarium,
    alt: "Skjermbildet av nettsiden Planetarium",
    github: "https://github.com/sindre2/Planetarium",
    github_Pages: "https://aleksander-kodehode.github.io/planetarium/#/home",
    description:
      "Gruppeprosjekt for oppgave utgitt av kodehodet. Et planetarium som viser generell informasjon om Jordens solsystem.",
  },
  {
    key: 2,
    title: "Machoman gjøreliste",
    image: creationsImages.do,
    alt: "Skjermbildet av nettsiden Machoman Todo-List",
    github: "https://github.com/sindre2/toDoList",
    github_Pages: "https://sindre2.github.io/toDoList/",
    description: 'En trenings gjøreliste som er litt vel "macho".',
  },
  {
    key: 3,
    title: "Pokedex",
    image: creationsImages.pokemon,
    alt: "Skjermbildet av nettsiden Pokedex",
    github: "https://github.com/sindre2/paukedax",
    github_Pages: "https://sindre2.github.io/paukedax/",
    description: "Et bibliotek for Pokemon som henter data ifra en API.",
  },
  {
    key:4,
    title: "Questionare",
    image: creationsImages.questionare,
    alt: "Skjermbildet av nettsiden Questionare",
    github: "https://github.com/sindre2/questionare",
    github_Pages: "https://sindre2.github.io/questionare/",
    description: "Spørrespill hvor en kan velge mellom forskjellige tema hentet fra en API."
  },
  {
    key: 5,
    title: "Passordgenerator",
    image: creationsImages.password,
    alt: "Skjermbildet av nettsiden Passordgenerator",
    github: "https://github.com/sindre2/password_Generator",
    github_Pages: "https://sindre2.github.io/password_Generator/",
    description:
      "En passordgenerator som lager et sikkert passord for personlig bruk.",
  },
  {
    key: 6,
    title: "Fargegenerator",
    image: creationsImages.color,
    alt: "Skjermbildet av nettsiden Fargegenerator",
    github: "https://github.com/sindre2/Colorscheme_Generator",
    github_Pages: "https://sindre2.github.io/Colorscheme_Generator/",
    description:
      "En fargegenerator som lager en palett av farger etter utvalgt ønske.",
  },
  {
    key: 7,
    title: "Figmanettside",
    image: creationsImages.figmaOne,
    alt: "Skjermbildet av en nettside laget i Figma",
    github_Pages:
      "https://www.figma.com/file/Y2cm16nUzv5SivWihJGs4q/Nettside-i-figma?node-id=0%3A1",
    description: "Enkel nettside i Figma.",
  },
];
