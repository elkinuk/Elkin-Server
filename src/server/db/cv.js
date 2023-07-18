export default {
  data: {
    experience: [
      {
        title: 'EPAM Systems',
        experienceId: 'EpamSystems',
        startDate: '05-2018',
        endDate: null,
        items: [
          {
            title: 'Software engineer',
            startDate: '05-2018',
            endDate: '09-2020',
            skills: [],
            projectsIds: [
              {
                name: 'Unnamed Telecommunication Company',
                id: 'UnnamedTelecommunicationCompany',
              },
              {
                name: 'Non-Project Activities',
                id: 'NonProjectActivities',
              },
            ],
          },
          {
            title: 'Senior Software engineer',
            startDate: '09-2020',
            endDate: '10-2022',
            skills: [],
            projectsIds: [
              {
                name: 'Unnamed Luxury Clothing Brand',
                id: 'UnnamedLuxuryClothingBrand',
              },
              {
                name: 'Non-Project Activities',
                id: 'NonProjectActivities',
              },
            ],
          },
          {
            title: 'Lead Software engineer',
            startDate: '10-2022',
            endDate: null,
            skills: [],
            projectsIds: [
              {
                name: 'Unnamed Luxury Clothing Brand',
                id: 'UnnamedLuxuryClothingBrand',
              },
              {
                name: 'Non-Project Activities',
                id: 'NonProjectActivities',
              },
            ],
          },
        ],
      },
    ],
    education: {
      uni: 'Belarusian State University of Informatics and Radioelectronics',
      degree: "Bachelor's degree",
      field: 'Information Systems and Technologies in Economics',
      startDate: '2014',
      endDate: '2018',
    },
    projects: [
      {
        projectId: 'UnnamedTelecommunicationCompany',
        experienceId: {
          name: 'EPAM Systems',
          id: 'EpamSystems',
        },
        title: 'Unnamed Telecommunication Company',
        startDate: '04-2018',
        endDate: '01-2021',
        skills: [],
        description: [
          'Key points:',
          '- Launched migration from jQuery to React.js',
          '- Worked as key FE developer',
          '- Gained experience in E-commerce domain on multiple steps of the journey: PLP/PDP, Checkout',
          '- Improved Cypress e2e test in repo with shared components',
          '- Made multiple POCs: emails templating tool, migration of app on Vue, Migration of app on React, etc.',
          'Detailed:',
          'On my first production project I quickly became a Key-Developer: I was the only one Frontend developer in my team, other developers were working with Java and Hybris. At the project I was working on various features, such as accessibility, validation of user input, "keep-alive" scripts and more. I\'ve levelled up my soft skills, understood software development process, became a team player. I also was involved in Style Guide implementation: developers and designers were following strict rules for UI/UX and were reusing CSS classes, styling patterns and whole components.',
          "At the end of my journey with this project I've put into motion migration of the tech stack from the old-fashioned to the much more modern one: jQuery wasn't enough to features all new features anymore. Main focus was on React + Redux + TS. To accommodate need of the new Frontend, modernisation started on the Backend too, which allowed us to start adoption of the GraphQL with the help of the Apollo.",
        ],
      },
      {
        projectId: 'NonProjectActivities',
        experienceId: {
          name: 'EPAM Systems',
          id: 'EpamSystems',
        },
        title: 'Non-project activities',
        startDate: '05-2018',
        endDate: null,
        skills: [],
        description: [
          'Key points:',
          '- Gave whole course of lectures in person on Core JS to a group of 50+ students',
          '- Gave whole course of lectures online on React JS to a group of 30+ students',
          '- Prepared materials for self-learning on Core JS and React JS',
          '- Mentoring more than 10 students on Core JS and React JS',
          '- Participated as main interviewer in interviews from the market',
        ],
      },
      {
        projectId: 'UnnamedLuxuryClothingBrand',
        experienceId: {
          name: 'EPAM Systems',
          id: 'EpamSystems',
        },
        title: 'Unnamed Luxury Clothing Brand',
        startDate: '01-2021',
        endDate: null,
        skills: [],
        description: [
          'Key points:',
          '- Expanded E-commerce experience with focus on Checkout flow',
          '- Introduced number of important integrations: payment methods, delivery providers, commerce tools',
          '- Worked on preparing scope for the team and did initial investigations and solution design',
          '- Prepared detailed documentation applying best practices like RACI matrix, creating UML diagrams, etc.',
          '- Added important quality of life features in the application, like: feature toggling, logs improvement, etc.',
          '- Constant communication with the client and neighbouring teams, leading certain meetings',
          '- Became Team Lead and in 6 month got official Lead title in the company',
          'Detailed:',
          "My second project had much more progressive tech-stack and proper JS focused development team: React + Redux, BFF with Express.js, Micro-Frontend Architecture. I got on the Checkout MFE, where I'm working at the moment as a Team Lead. Main focus of the MFE is migration from the legacy tech stack, integration with various systems: with payment methods through Adyen, with Commercetools, with identity MFE, etc. ",
          "My team lead position I got 6 month earlier than official title in the company. It gave me opportunity to cur rough edges and make sure I'm truly ready for a new title.",
          'As a team lead my main focus is my team: I create a clear path for them to make sure they have everything they need (from technical stand point) to work. I prepare solutions, UML diagrams, do small POSs and spikes to ensure that all parts that require seeing bigger picture or making a decision are covered. Although, I always look for a chance to delegate something to my team, as growth and skill development is another important role of Team Lead. Another part of my job is to manage project from technical point of view: I manage solutions, packages and technologies updates, ect.',
        ],
      },
    ],
  },
};
