import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Sobre",
    },
    {
      id: "work",
      title: "Trabalhos",
    },
    {
      id: "contact",
      title: "Contato",
    },
  ];
  
  const services = [
    {
      title: "Desenvolvedor Front-End",
      icon: web,
    },
    {
      title: "Desenvolvedor Back-End",
      icon: mobile,
    },
    {
      title: "Desenvolvedor Mobile",
      icon: backend,
    },
    {
      title: "Especialista em automações",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Desenvolvedor Autodidata",
      company_name: "Udemy",
      icon: shopify,
      iconBg: "#383E56",
      date: "Junho 2022 - Dezembro 2022",
      points: [
        "Neste momento estava conhecendo a programação e descobrindo mais sobre como funciona e o mercado.",
        "Meus primeiros passos foram com cursos da udemy e videos no youtube.",
        "Primeiros contatos com HTML, CSS e JS.",
        "Percebi que apenas um curso gravado e desatualizado não me daria uma imersão no conteúdo tão grande quanto queria. Portanto, comecei a buscar um curso que tinha aulas ao vivo com uma comunidade ativa e suporte de profissionais qualificados.",
      ],
    },

    {
      title: "Desenvolvedor em Formação",
      company_name: "Kenzie Academy",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Dezembro 2022 - Janeiro 2024",
      points: [
        "Acabei decidindo começar com um curso que tinha um suporte de Desenvolvedores profissionais e projetos práticos.",
        "Entregava a cada sprint um projeto prático de tudo o que tinha aprendido na semana, sendo projetos Front, Back e FullStack. Inclusive meu primeiro projeto em equipe.",
        "Desenvolvimento de Soft Skills como: Gestão do Tempo, Inteligência Emocional e Trabalho em Equipe.",
        "Experiência em linguagens e tecnologias como: HTML5, CSS3, CSS in JS, Tailwind, Javascript, TypeScript, React, NextJS, Nuxt, Node, Python, Express, TypeORM, MySQL e Django.",
      ],
    },
    {
      title: "Desenvolvedor Full Stack",
      company_name: "Freelancer",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Junho 2024 - Atualmente",
      points: [
        "Após ter conhecido mais tecnologias como Wordpress, MongoDB, React Native, ThreeJS, decidi focar em trabalhar como freelancer e aprender mais na prática.",
        "Entrega de serviço excepcional para cada cliente, ouvindo exigências e às atendendo.",
        "Responsável por apresentar o andamento do projeto em reuniões e esclarecendo possíveis dúvidas do cliente.",
        "Autogestão de tempo e metas.",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "Muito satisfeita com o resultado do trabalho. Fez exatamente o que eu estava esperando e precisando. Profissionalismo e criatividade foram incríveis! Meu agradecimento e com certeza, trabalharei com ele novamente em uma nova oportunidade!.",
      name: "Cátia Coelho",
      designation: "Marketing",
      company: "Just Cold Air",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Salão na mão",
      description:
        "Projeto FullStack MERN .",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "reactNative",
          color: "green-text-gradient",
        },
        {
          name: "mongoDB",
          color: "pink-text-gradient",
        },
        {
          name: "express",
          color: "red-text-gradient",
        },
        {
          name: "next",
          color: "violet-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://justcoldair.com",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };