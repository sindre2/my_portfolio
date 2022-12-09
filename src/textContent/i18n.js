import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { NORTEXT, ENGTEXT } from "./content";

export const lngs = {
    no: { nativeName: 'Norsk'},
    en: { nativeName: 'English'},
  };

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'no',
        resources: {
            no: {
                translation: {
                    NAVBAR_TEXT: {
                        HOME: "Hovedside",
                        ABOUT_ME: "Om meg",
                        CREATIONS: "Prosjekter",
                        CONTACT_ME: "Kontaktinfo",
                      },
                    
                      NAVBAR_TEXT_NAVIGATION: {
                        HOME: "Hjem",
                        ABOUT_ME: "om-meg",
                        CREATIONS: "kreasjoner",
                        CONTACT_ME: "kontaktinfo",
                      },
                    
                      HOME_TEXT: {
                        TITLE: "Sindre V. Storesund Front End Developer",
                        DESCRIPTION:
                          "Sindre, aspirerende nettutvikler og kode entusiast. Grunnleggende kunnskap innen frontend med stortåa nedi backend",
                        BUTTON_ABOUT_ME: "Om meg",
                        BUTTON_CREATIONS: "Prosjekter",
                      },
                    
                      ABOUT_ME_TEXT: {
                        TITLE: "Om Meg",
                        PITCH: `
                            30 år gammel mann som går på Kodehode for å lære hemmelighetene bak alle disse kattepus videoene. Dvs den hellige digitale treenigheten: HTML, CSS og Javascript. Jeg har også tuklet rundt nok med React, SQL, Git og kan lage nettsider i Figma.
                            Er en kløpper på RTS, slåssespill og kan svette i spillstolen med selv de beste. Det er alltid en fryd når en spiller med meg ettersom du før høre det om du vinner eller taper.
                            Ellers har jeg drevet med kampsport som Tae Kwon Do og Kickboxing og har derfor blitt veldig god til blokkere med fjeset.
                            `,
                        IMAGE: "Bildet av Sindre V. Storesund"
                      },
                    
                      CONTACT_ME_TEXT: {
                        TITLE: "Kontaktinformasjon",
                        EMAIL: "sindre2.kodehode@gmail.com",
                        CV: "CV blir sent på etterspørsel.",
                      },
                    
                      CREATIONS: {
                        BUTTON_GITHUB: "Github",
                        BUTTON_SITE: "Prøv siden",
                      },
                      INFO: {
                        EMAIL: "sindre2.kodehode@gmail.com",
                        GITHUB: "https://github.com/sindre2",
                        GITHUB_LOGO_ALT: "Github logo",
                        LINKEDIN: "https://www.linkedin.com/in/sindre-vatne-storesund-41a077255/",
                        LINKEDIN_LOGO_ALT: "Linkedin logo",
                      },
                    }
                },
            en: {
                translation: {
                    NAVBAR_TEXT: {
                        HOME: "Main page",
                        ABOUT_ME: "About me",
                        CREATIONS: "Creations",
                        CONTACT_ME: "Contact Info",
                      },
                    
                      NAVBAR_TEXT_NAVIGATION: {
                        HOME: "Home",
                        ABOUT_ME: "about-me",
                        CREATIONS: "creations",
                        CONTACT_ME: "contact-info",
                      },
                    
                      HOME_TEXT: {
                        TITLE: "Sindre V. Storesund Front End Developer",
                        DESCRIPTION:
                          "Sindre, aspiring web developer and code enthusiast. Fundamental knowledge about frontend with a lot of interest for backend",
                        BUTTON_ABOUT_ME: "About me",
                        BUTTON_CREATIONS: "Projects",
                      },
                    
                      ABOUT_ME_TEXT: {
                        TITLE: "About Me",
                        PITCH: `
                            30 year old man currently attending a course to learn the secrets behind all these cat videos. That means the holy digital trinity: HTML, CSS and Javascript. I've also fumbled around with React, SQL, Git and can make web pages in Figma.
                            I am well versed in RTS, fighting games and can sweat in the gaming chair with the best of them. It's always a joy to play with me considering you will hear it wether you win or lose. Otherwise I've done combat sports such as Tae Kwon Do and Kickboxing and therefore have become quite proficient to block with my face.
                            `,
                        IMAGE: "Picture of Sindre V. Storesund"
                      },
                    
                      CONTACT_ME_TEXT: {
                        TITLE: "Contact info",
                        EMAIL: "sindre2.kodehode@gmail.com",
                        CV: "Resumè will be sent on request",
                      },
                    
                      CREATIONS: {
                        BUTTON_GITHUB: "Github",
                        BUTTON_SITE: "Try page",
                      },
                      INFO: {
                        EMAIL: "sindre2.kodehode@gmail.com",
                        GITHUB: "https://github.com/sindre2",
                        GITHUB_LOGO_ALT: "Github logo",
                        LINKEDIN: "https://www.linkedin.com/in/sindre-vatne-storesund-41a077255/",
                        LINKEDIN_LOGO_ALT: "Linkedin logo",
                      },
                    },
                }
    }});