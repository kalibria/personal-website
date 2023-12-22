export interface IMainInfo {
  mainInfo: {
    aboutMaria: AboutMaria,
    skills: Skills,
    whyMe: WhyMe,
    currentProject: string,
    futurePlans: string,
    eagerToWork:string,
    contribution: string,
    highlightedWords: HighlightedWords
  }

}

interface AboutMaria {
  name: string,
  role: string,
  introduction: string,
  studyYears: string,
  proudProject1: string,
  proudProject2: string
  petProjects1: string,
  petProjects2: string,
}

interface Skills {
  languages: string,
  reactEcosystem: string,
  styling: string,
  other: string
}

interface WhyMe {
  modularCode: string,
  componentDesign: string,
  mappers: string,
  structure: string,
  workflow: string,
  learnTech: string
}

interface HighlightedWords {
  mySkills: string,
  languages: string,
  reactEcosystem: string,
  styling: string,
  other: string
  whyMe: string,
}
