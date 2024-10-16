export interface IMainInfo {
  mainInfo: {
    aboutMaria: AboutMaria,
    skills: Skills,
    whyMe: WhyMeType,
    currentProject: string,
    futurePlans: string,
    eagerToWork:string,
    contribution: string,
    highlightedWords: HighlightedWords
  }

}

export interface AboutMaria {
  name: string,
  role: string,
  introduction: string,
  studyYears: string,
  aboutProjects1: string,
  aboutProjects2: string,
  finalWordsInIntroduction: string
}

export interface Skills {
  languages: string,
  reactEcosystem: string,
  styling: string,
  other: string
}

export interface WhyMeType {
  modularCode: string,
  componentDesign: string,
  mappers: string,
  structure: string,
  workflow: string,
  learnTech: string
}

export interface HighlightedWords {
  mySkills: string,
  languages: string,
  reactEcosystem: string,
  styling: string,
  other: string
  whyMe: string,
}

export interface IAsideBar {
  asideBar: {
    name: string,
    role: string,
    country: string,
    highlightedWords: HighlightedWordsAsideBar,
    skills: AsideBarSkills,
    languages: AsideBarLang,
    education: AsideBarEducation
  }

}

interface HighlightedWordsAsideBar {
  skills:  string,
  languages:  string,
  education: string
}

interface AsideBarSkills {
  javascript: string,
  typescript: string,
  react: string,
  redux: string,
  html5Css3: string,
  jest: string,
  git: string
}

interface AsideBarLang {
  russian: string,
  english: string
}

export interface AsideBarEducation {
  petProjectPeriod: string,
  petProjects: string,
  petProjectPeriod1: string,
  petProjects1: string,
  universityPeriod: string,
  university: string
}
