import { creationsImages } from "./Creations_Images";

//To add more projects simply make another entry in the "creationsData" object. The page will automaticly render the project with a ".map" method in "Creations_Render.js". Remember to add a "key" otherwise React will give an error message.

/* Template:
  {
    key: "Assign a unique number here(can be variable).",
    title: "The keyword for i18next. Check the 'textContent/i18n.js' file under 'CREATIONS'. Put titles for new projects there.",
    image: "Url of the image, usually the screenshot.",
    alt: "Alternative description of the image for the sight impaired or the image fails to load. Put in 'i18n.js'",
    github: "A link to the code on github or coding storage of your choice. Assigned to button number one.",
    github_Pages: "A link to a live hosting of the site. Assigned to button number two.",
    description: "A simple description of the website. Also put in 'i18n.js'"
  }

  Side-note: Remember to add translations into the i18n.js file for translation functionality. The relevant section is under "CREATIONS".
*/

export const creationsData = [
 
  {
    key: 0,
    title: "CREATIONS.CREATIONS_DATA.HMS.TITLE",
    image: creationsImages.hms,
    alt: "Skjermbildet av nettsiden HMS sjekk",
    github_Pages: "https://hmscheck.no/en/",
    description: "CREATIONS.CREATIONS_DATA.HMS.DESCRIPTION",
  },
  {
    key: 1,
    title: "CREATIONS.CREATIONS_DATA.SKELETOR.TITLE",
    image: creationsImages.skelly,
    alt: "Skjermbildet av nettsiden Skeletor lydbrett",
    github: "https://github.com/sindre2/Skeletor",
    github_Pages: "https://sindre2.github.io/Skeletor/",
    description: "CREATIONS.CREATIONS_DATA.SKELETOR.DESCRIPTION",
  },
  {
    key: 2,
    title: "CREATIONS.CREATIONS_DATA.PLANETARIUM.TITLE",
    image: creationsImages.planetarium,
    alt: "Skjermbildet av nettsiden Planetarium",
    github: "https://github.com/sindre2/Planetarium",
    github_Pages: "https://aleksander-kodehode.github.io/planetarium/#/home",
    description:
      "CREATIONS.CREATIONS_DATA.PLANETARIUM.DESCRIPTION",
  },
  {
    key: 3,
    title: "CREATIONS.CREATIONS_DATA.MACHO.TITLE",
    image: creationsImages.do,
    alt: "Skjermbildet av nettsiden Machoman Todo-List",
    github: "https://github.com/sindre2/toDoList",
    github_Pages: "https://sindre2.github.io/toDoList/",
    description: 'CREATIONS.CREATIONS_DATA.MACHO.DESCRIPTION',
  },
  {
    key: 4,
    title: "CREATIONS.CREATIONS_DATA.POKEDEX.TITLE",
    image: creationsImages.pokemon,
    alt: "Skjermbildet av nettsiden Pokedex",
    github: "https://github.com/sindre2/paukedax",
    github_Pages: "https://sindre2.github.io/paukedax/",
    description: "CREATIONS.CREATIONS_DATA.POKEDEX.DESCRIPTION",
  },
  {
    key: 5,
    title: "CREATIONS.CREATIONS_DATA.QUESTIONARE.TITLE",
    image: creationsImages.questionare,
    alt: "Skjermbildet av nettsiden Questionare",
    github: "https://github.com/sindre2/questionare",
    github_Pages: "https://sindre2.github.io/questionare/",
    description: "CREATIONS.CREATIONS_DATA.QUESTIONARE.DESCRIPTION"
  },
  {
    key: 6,
    title: "CREATIONS.CREATIONS_DATA.PASSGEN.TITLE",
    image: creationsImages.password,
    alt: "Skjermbildet av nettsiden Passordgenerator",
    github: "https://github.com/sindre2/password_Generator",
    github_Pages: "https://sindre2.github.io/password_Generator/",
    description: "CREATIONS.CREATIONS_DATA.PASSGEN.DESCRIPTION",
  },
  {
    key: 7,
    title: "CREATIONS.CREATIONS_DATA.COLORGEN.TITLE",
    image: creationsImages.color,
    alt: "Skjermbildet av nettsiden Fargegenerator",
    github: "https://github.com/sindre2/Colorscheme_Generator",
    github_Pages: "https://sindre2.github.io/Colorscheme_Generator/",
    description: "CREATIONS.CREATIONS_DATA.COLORGEN.DESCRIPTION",
  },
  {
    key: 8,
    title: "CREATIONS.CREATIONS_DATA.FIGMA.TITLE",
    image: creationsImages.figmaOne,
    alt: "Skjermbildet av en nettside laget i Figma",
    github_Pages:
      "https://www.figma.com/file/Y2cm16nUzv5SivWihJGs4q/Nettside-i-figma?node-id=0%3A1",
    description: "CREATIONS.CREATIONS_DATA.FIGMA.DESCRIPTION",
  },
];
