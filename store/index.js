import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  projectsHeading: "Projects Portfolio",
  projectsDescription: "Some of the projects I have successfully completed",
  projects: [
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdb",
      title: "Blocomposer Website Builder",
      category: "Web Application",
      img: "/images/intro.png",
      publishDate: "Jul 17, 2021",
      tag: "Fullstack / Nextjs",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails:
        "User friendly website builder for rapid website creation and deployment.",
      techTitle: "Tools & Technologies",
      detailsTitle: "Challenge",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Blocomposer Website Builder",
          img: "/images/intro.png",
        },
        {
          id: uuidv4(),
          title: "Blocomposer Website Builder",
          img: "/images/bm.png",
        },
        {
          id: uuidv4(),
          title: "Blocomposer Website Builder",
          img: "/images/export.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Blocomposer",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://blocomposer.app",
        },
        {
          id: uuidv4(),
          title: "Email",
          details: "hello@blocomposer.app",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "TypeScript",
        "Nextjs",
        "Cypress",
        "Prisma",
        "MySQL"
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "The project features a website editor built the 'grapesjs'(https://github.com/artf/grapesjs) framework customized to have a paneless layout, featuring bootstrap and tailwind blocks and easy deployment to netlify.",
        },
        {
          id: uuidv4(),
          details:
            "The dashboard is built using the nextjs framework and takes advantage of API routes to build a serverless REST API which uses PRISMA and a MySQL database provided by planetscale",
        },
        {
          id: uuidv4(),
          details:
            "Github actions is used for CI/CD with tests written using 'cypress'",
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/",
        },
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com/",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com/",
        },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/",
        },
        {
          id: uuidv4(),
          name: "Youtube",
          icon: "youtube",
          url: "https://www.youtube.com/",
        },
      ],
    },
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdc",
      title: "GFonts",
      category: "Web Application",
      img: "/images/dark.png",
      publishDate: "Feb 16, 2021",
      tag: "UI / Frontend",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails:
        "Google fonts search tool meant for easy intergration with other react and nextjs apps",
      techTitle: "Tools & Technologies",
      detailsTitle: "Challenge",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "GFonts",
          img: "/images/dark.png",
        },
        {
          id: uuidv4(),
          title: "GFonts",
          img: "/images/light.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Blocomposer",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://fonts.blocomposer.app",
        },
        {
          id: uuidv4(),
          title: "Email",
          details: "hello@blocomposer.app",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Google Fonts"
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Reactjs application based in fontCDN by Thomas Park(https://github,com/thomaspark/fontcdn), a search tool for Google Fonts, modified to add dark mode, and be more mobile responsive.",
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/",
        },
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com/",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com/",
        },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/",
        },
        {
          id: uuidv4(),
          name: "Youtube",
          icon: "youtube",
          url: "https://www.youtube.com/",
        },
      ],
    },
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdy",
      title: "App Listing",
      category: "Web application",
      img: "/images/app-listing.png",
      publishDate: "Mar 21, 2021",
      tag: "Fullstack / Nextjs",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails:
        "Simple application for keeping a directory of other applications, ratings and user guides.",
      techTitle: "Tools & Technologies",
      detailsTitle: "Challenge",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "App Listing",
          img: "/images/app-listing.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Rally DAO",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "Blockchain",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://app-listing.netlify.app",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Nextjs",
        "Python",
        "FastAPI",
        "PostgreSQL"
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Uses 'shufflejs' to easily search and categorise listings and '@toast-ui/react-editor' as the markdown editor.",
        },
        {
          id: uuidv4(),
          details:
            "The backened is a REST API built in python using the fastAPI library which automatically generates API documentation based on the API schema, and data is stored in postgreSQL database.",
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/",
        },
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com/",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com/",
        },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/",
        },
        {
          id: uuidv4(),
          name: "Youtube",
          icon: "youtube",
          url: "https://www.youtube.com/",
        },
      ],
    },
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8ccc99",
      title: "Vector Editor",
      category: "Web Application",
      img: "/images/vector-editor.png",
      publishDate: "Oct 23, 2021",
      tag: "Web / Frontend",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails:
        "Vector/SVG editor build on fabricjs and material design lite UI.",
      techTitle: "Tools & Technologies",
      detailsTitle: "Challenge",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Vector Editor",
          img: "/images/vector-editor.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Services",
          details: "SVG design & Editing",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://Ju99ernaut.github.io/vector-editor",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Fabricjs",
        "Material Design"
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Simple SVG/Vector editor built using 'fabricjs' and material design lite UI based on a project by Micheal Schwartz(https://github.com/michealsboost).",
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/",
        },
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com/",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com/",
        },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/",
        },
        {
          id: uuidv4(),
          name: "Youtube",
          icon: "youtube",
          url: "https://www.youtube.com/",
        },
      ],
    },
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdm",
      title: "Mailer",
      category: "Web Application",
      img: "/images/mailer.png",
      publishDate: "May 15, 2021",
      tag: "Fullstack / FastAPI",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails:
        "Email template builder and email campaign manager with widgets for email list subscription",
      techTitle: "Tools & Technologies",
      detailsTitle: "Challenge",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Mailer",
          img: "/images/mailer.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Services",
          details: "Email Design & Campaign Management",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://mailer.blocomposer.app",
        },
        {
          id: uuidv4(),
          title: "Email",
          details: "hello@blocomposer.app",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Python",
        "FastAPI",
        "Pytest",
        "PostgreSQL"
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Email editor built using the 'grapesjs' library with support for 'grapesjs-preset-newsletter'(https://github.com/artf/grapesjs-preset-newsletter) and 'grapesjs-mjml'(https://github.com/artf/grapesjs-mjml) plugins.",
        },
        {
          id: uuidv4(),
          details:
            "FastAPI as used to implement the REST API for the application backend and the frontend is served using its static file system. The default database is postgreSQL which can be switched for MySQL.",
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/",
        },
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com/",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com/",
        },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/",
        },
        {
          id: uuidv4(),
          name: "Youtube",
          icon: "youtube",
          url: "https://www.youtube.com/",
        },
      ],
    },
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccbb",
      title: "Rally Discordbot Dashboard",
      category: "Web Application",
      img: "/images/rally-discord.png",
      publishDate: "Nov 30, 2020",
      tag: "UI / Frontend",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails:
        "Dashboard for managing rally discord bot.",
      techTitle: "Tools & Technologies",
      detailsTitle: "Challenge",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Rally Discordbot Dashboard",
          img: "/images/rally-discord.png",
        },
        {
          id: uuidv4(),
          title: "Rally Discordbot Dashboard",
          img: "/images/rally-discord2.png",
        },
        {
          id: uuidv4(),
          title: "Rally Discordbot Dashboard",
          img: "/images/rally-discord3.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Website",
          details: "https://github.com/Ju99ernaut/rally-discordbot-dashboard",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Vuejs",
        "TailwindCSS",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "UI for managing the rally role bot, for easy creation of token gated channels, managing user roles, command prefixes, managing commands, etc.",
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/",
        },
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com/",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com/",
        },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/",
        },
      ],
    },
    {
      id: "a89fab77-61f3-4e36-b401-a565d01a11bd",
      title: "Cubic Bezier",
      category: "Node Library",
      img: "/images/web-project-1.jpg",
      publishDate: "Aug 03, 2020",
      tag: "UI / Frontend",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails:
        "Cubic bezier curve editor for CSS timing functions.",
      techTitle: "Tools & Technologies",
      detailsTitle: "Challenge",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Cubic Bezier",
          img: "/images/cubic-bezier.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Website",
          details: "https://github.com/Ju99ernaut/cubic-bezier",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Vuejs",
        "Node",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "CSS cubic-bezier curve editor based on https://cubic-bezier.com, bundled using 'parcel-bundler' for easier intergration into other web apps for example 'blocomposer'(https://https://blocomposer.app).",
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/",
        },
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com/",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com/",
        },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/",
        },
      ],
    },
    {
      id: "0e178ea1-cef5-4e30-bd03-436773f2d010",
      title: "Storefront",
      category: "Web Application",
      img: "/images/storefront.png",
      publishDate: "May 03, 2021",
      tag: "UI / Frontend",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails:
        "Ecommerce storefront blueprint.",
      techTitle: "Tools & Technologies",
      detailsTitle: "Challenge",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Storefront",
          img: "/images/storefront.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Website",
          details: "https://storefront-liard.vercel.app",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Nextjs",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Uses 'shufflejs' to filter and categorise store items, 'swiper' to allow swiping through product images and mobile support and 'next-pwa' to convert it to a progressive web app",
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/",
        },
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com/",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com/",
        },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/",
        },
      ],
    },
    {
      id: "7a3643b3-4c73-40aa-8b5f-dce9eb1175ea",
      title: "Blocomposer Sites",
      category: "Web Application",
      img: "/images/site.png",
      publishDate: "Apr, 2022",
      tag: "UI / Frontend",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails:
        "Collection of website templates built using blocomposer",
      techTitle: "Tools & Technologies",
      detailsTitle: "Challenge",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Blocomposer Sites",
          img: "/images/site.png",
        },
        {
          id: uuidv4(),
          title: "Blocomposer Sites",
          img: "/images/site2.png",
        },
        {
          id: uuidv4(),
          title: "Blocomposer Sites",
          img: "/images/site3.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Blocomposer",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://blocomposer.app",
        },
        {
          id: uuidv4(),
          title: "Demo 1",
          details: "https://moonlit-arithmetic-ede101.netlify.app",
        },
        {
          id: uuidv4(),
          title: "Demo 2",
          details: "https://happy-albattani-44518e.netlify.app",
        },
        {
          id: uuidv4(),
          title: "Demo 3",
          details: "https://inspiring-meitner-8952f7.netlify.app",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Blocomposer",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Wesites built completely using 'blocomposer'(https://blocomposer.app) as apart of its ever growing template collection.",
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/",
        },
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com/",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com/",
        },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/",
        },
      ],
    },
    {
      id: "d4896594-454e-4b3e-a773-46bc498bd350",
      title: "Grapesjs Plugins",
      category: "GrapesJS",
      img: "/images/uppy.png",
      publishDate: "Jul 16, 2020",
      tag: "Grapesjs / Plugins",
      clientTitle: "About Client",
      objectivesTitle: "Objective",
      objectivesDetails:
        "Open source plugins for the grapesjs website builder framework",
      techTitle: "Tools & Technologies",
      detailsTitle: "Challenge",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Grapesjs Plugins",
          img: "/images/uppy.png",
        },
        {
          id: uuidv4(),
          title: "Grapesjs Plugins",
          img: "/images/netlify.png",
        },
        {
          id: uuidv4(),
          title: "Grapesjs Plugins",
          img: "/images/svg.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Website",
          details: "https://github.com/Ju99ernaut?tab=repositories&q=grapesjs&type=&language=&sort=",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Webpack",
        "Grapesjs"
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Plugins for extending 'grapesjs' functionality e.g. publishing sites to netlify, custom blocks and components, template management, etc.",
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/",
        },
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com/",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com/",
        },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/",
        },
      ],
    },
  ],
  clientsHeading: "Some of the brands I worked with",
  clients: [
    //{
    //  id: uuidv4(),
    //  title: "Amazon",
    //  img: "../brands/amazon_gray.png",
    //},
    //{
    //  id: uuidv4(),
    //  title: "Sony",
    //  img: "../brands/sony_gray.png",
    //},
    //{
    //  id: uuidv4(),
    //  title: "Adidas",
    //  img: "../brands/adidas_gray.png",
    //},
    //{
    //  id: uuidv4(),
    //  title: "FILA",
    //  img: "../brands/fila_gray.png",
    //},
    //{
    //  id: uuidv4(),
    //  title: "NB",
    //  img: "../brands/nb_gray.png",
    //},
    //{
    //  id: uuidv4(),
    //  title: "SAMSUNG",
    //  img: "../brands/samsung_gray.png",
    //},
    //{
    //  id: uuidv4(),
    //  title: "CANON",
    //  img: "../brands/canon_gray.png",
    //},
    //{
    //  id: uuidv4(),
    //  title: "PUMA",
    //  img: "../brands/puma_gray.png",
    //},
  ],
  aboutMe: [
    {
      id: uuidv4(),
      bio: "Passionate about learning and sharing knowledge, finance, mathematics, statistics and computer science, problem solver and team worker.",
    },
  ],
  copyrightDate: new Date().getFullYear(),
  socialProfiles: [
    {
      id: uuidv4(),
      name: "GitHub",
      icon: "github",
      url: "https://github.com/Ju99ernauat",
    },
    {
      id: uuidv4(),
      name: "Twitter",
      icon: "twitter",
      url: "https://twitter.com/ju99ern4ut",
    },
    {
      id: uuidv4(),
      name: "Linkedin",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/brendon-ngirazi-9201291a7",
    },
  ],
  categories: [
    {
      id: uuidv4(),
      value: "web",
      name: "Web Application",
    },
    {
      id: uuidv4(),
      value: "mobile",
      name: "Mobile Applicaiton",
    },
    {
      id: uuidv4(),
      value: "ui-ux",
      name: "UI/UX Design",
    },
    {
      id: uuidv4(),
      value: "node",
      name: "Node Library",
    },
    {
      id: uuidv4(),
      value: "grapes",
      name: "GrapesJS",
    },
    {
      id: uuidv4(),
      value: "other",
      name: "Other",
    },
  ],
});

export const getters = {
  getProjectById: (state) => (id) => {
    return state.projects.find((project) => project.id == id);
  },
};

export const mutations = {
  // @todo
};

export const actions = {
  // @todo
};
