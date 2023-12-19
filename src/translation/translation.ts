import i18next from 'i18next';


i18next.init({
  lng: 'en', // if you're using a language detector, do not define the lng option
  debug: true,
  resources: {
    en: {
      skills: {
        javascript: "JavaScript",
        typescript: "TypeScript",
        react: "React",
        redux: "Redux",
        html5Css3: "HTML5/CSS3",
        jest: "Jest",
        git: "Git",
      },
      languages: {
        russian: "Russian - native",
        english: "English - intermediate",
      },
      education: {
        petProjects: "2020 - present: Pet projects, documentation and theory studies, IT-centric English practice, work with mentor",
        university: "2009 - 2014: Belarusian State University of Economics",
      },
      aboutMaria: {
        name: "Maria Kushlianskaya",
        role: "Front-End Developer",
        introduction: "I am Maria, an ambitious and highly motivated developer willing to jumpstart my career in an exciting world of web technologies.",
        studyYears: "During the 2 years of my studies, I dedicated myself to learning JavaScript and React, and also battle-tested these skills by doing personal projects.",
        proudProject: "I am particularly proud of Family Car Booking App, where I successfully implemented quite complex functionalities using Typescript, React, and Redux, CSS.",
        petProjects: "After doing multiple pet projects (you can see them all [here](https://github.com/kalibria)) over a couple of years, I am pretty sure I am ready to start developing web apps professionally.",
        skills: {
          languages: "Languages: Javascript, Typescript",
          reactEcosystem: "React ecosystem: React, Redux, Redux Toolkit, RTK Query, Formik, and other React libs",
          styling: "Styling: CSS3, SCSS, Material UI, Bootstrap, a bit of Ant Design. Use CSS Flexbox and some CSS Grid to design web pages. Practice responsive design",
          other: "Other: Know how to use Postman for backend requests, utilize Jest and React Testing Library in pet projects. Use Git CLI and know how to work with Github",
        },
        whyMe: {
          modularCode: "Write modular code with low coupling",
          componentDesign: "Understand the principles of component design",
          mappers: "Use mappers to decouple frontend data from backend specifics",
          structure: "Always think about application structure and how my changes will affect it",
          workflow: "Work on my pet projects using Jira, decomposing tasks and creating PRs to be reviewed by the mentor",
          learnTech: "Learn technologies by reading documentation in English as it is the best source of information",
        },
        currentProject: "For now, I am working on my personal website. It will be responsive, and I am planning to use TypeScript, React, Redux, and Next.js.",
        futurePlans: "There’s still a lot to learn, of course! As for technologies, my plans include new CSS stuff like container queries and layers, as well as Storybook, Redux Saga, Styled Components, GraphQL, PWAs, and more. I will continue working to increase my English language level. Long term, I am also interested in people and resource management.",
        eagerToWork: "I am eager to work alongside experienced developers who can mentor and guide me towards becoming a proficient frontend developer.",
        contribution: "In my opinion, modern web technologies, together with AI, are what push successful businesses forward, and I want to help companies drive this effort.",
      },
      ru: {
        skills: {
          javascript: "JavaScript",
          typescript: "TypeScript",
          react: "React",
          redux: "Redux",
          html5Css3: "HTML5/CSS3",
          jest: "Jest",
          git: "Git",
        },
        languages: {
          russian: "Русский - родной",
          english: "Английский - средний уровень",
        },
        education: {
          petProjects: "2020 - настоящее время: Личные проекты, изучение теории и документации, английская практика в IT, работа с наставником",
          university: "2009 - 2014: Белорусский государственный университет экономики",
        },
        aboutMaria: {
          name: "Мария Кушлянская",
          role: "Фронтенд-разработчик",
          introduction: "Я Мария, амбициозный и высокомотивированный разработчик, готовый начать свою карьеру в захватывающем мире веб-технологий.",
          studyYears: "В течение 2 лет я изучаю JavaScript и React, а также отточила свои навыки, выполняя персональные проекты.",
          proudProject: "Особенно горжусь приложением Family Car Booking, где я успешно реализовала довольно сложные функциональности, используя TypeScript, React и Redux, CSS.",
          petProjects: "После выполнения нескольких персональных проектов (вы можете увидеть их все [здесь](https://github.com/kalibria)) за несколько лет, я уверена, что готова начать профессиональное развитие в веб-разработке.",
          skills: {
            languages: "Языки: Javascript, Typescript",
            reactEcosystem: "Экосистема React: React, Redux, Redux Toolkit, RTK Query, Formik и другие библиотеки React",
            styling: "Оформление: CSS3, SCSS, Material UI, Bootstrap, немного Ant Design. Использую CSS Flexbox и некоторые элементы CSS Grid для проектирования веб-страниц. Практикую отзывчивый дизайн",
            other: "Другие навыки: Знаю, как использовать Postman для запросов к бэкэнду, использую Jest и React Testing Library в своих проектах. Использую Git CLI и знаю, как работать с Github",
          },
        },

        whyMe: {
          modularCode: "Пишу модульный код с низкой связанностью",
          componentDesign: "Понимаю принципы проектирования компонентов",
          mappers: "Использую мапперы для разделения данных фронтенда от специфики бэкенда",
          structure: "Всегда думаю о структуре приложения и о том, как мои изменения повлияют на нее",
          workflow: "Работаю над своими проектами с использованием Jira, разбиваю задачи и создаю Pull Requests для рецензии наставника",
          learnTech: "Изучаю технологии, читая документацию на английском, так как это лучший источник информации",
        },
        currentProject: "На данный момент я работаю над своим персональным веб-сайтом. Он будет адаптивным, и я планирую использовать TypeScript, React, Redux и Next.js.",
        futurePlans: "Конечно, еще многое предстоит узнать! Что касается технологий, в моих планах изучение новых возможностей CSS, таких как container queries и layers, а также Storybook, Redux Saga, Styled Components, GraphQL, PWAs и многое другое. Я буду продолжать работу над улучшением своего уровня английского языка. В долгосрочной перспективе меня также интересует управление людьми и ресурсами.",
        eagerToWork: "С нетерпением готова работать рядом с опытными разработчиками, которые смогут наставлять и направлять меня на пути к профессиональному фронтенд-разработчику.",
        contribution: "На мой взгляд, современные веб-технологии, вместе с искусственным интеллектом, толкают успешные бизнесы вперед, и я хочу помочь компаниям развиваться в этом направлении.",
      }
    }
  }
});
