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
    postgresql,
    git,
    figma,
    docker,
    python,


    salaonamao,
    kenziemovie,
    schoolapi,
    threejs,
    udemy,
    logo,
    kenzielogo,
    wordpress,
    
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
      name: "Tailwind CSS",
      icon: tailwind,
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
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },

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
      name: "postgreSQL",
      icon: postgresql,
    },

    // {
    //   name: "docker",
    //   icon: docker,
    // },
    {
      name: "wordpress",
      icon: wordpress,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    {
      name: "python",
      icon: python,
    },
  ];
  
  const experiences = [
    {
      title: "Desenvolvedor Autodidata",
      company_name: "Udemy",
      icon: udemy,
      // iconBg: "#383E56",
      iconBg: "#E6DEDD",
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
      icon: kenzielogo,
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
      icon: logo,
      iconBg: "#E6DEDD",
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
        "Muito satisfeita com o resultado do trabalho. Fez exatamente o que eu estava esperando e precisando. Profissionalismo e criatividade foram incríveis! Meu agradecimento e com certeza trabalharei com ele novamente em uma nova oportunidade!.",
      name: "Cátia Coelho",
      designation: "Marketing",
      company: "Just Cold Air",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Nunca conheci um desenvolvedor web que realmente se preocupasse com o sucesso de seus clientes como Rodrigo.",
      name: "Cristian",
      designation: "Fotógrafo",
      company: "Autônomo",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Sem dúvida um profissional que se destaca. Sempre se empenhando a entregar o melhor aos clientes.",
      name: "Diego Rocha",
      designation: "Desenvolvedor",
      company: "Autônomo",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Salão na Mão",
      description:
        "Projeto Full Stack Web e Mobile. Sistema de gerenciamento de agendamento para barbearias com o pagamento adiantado através da API Pagar.me. Na versão mobile é para o cliente realizar o agendamento com o corte, horário e funcionário de preferência.",
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
          color: "blue-text-gradient",
        },
        {
          name: "nextJs",
          color: "green-text-gradient",
        },
      ],
      image: salaonamao,
      source_code_link: "https://github.com/RodrigoSRC/Barber-pro",
    },
    {
      name: "Kenzie Movie",
      description:
        "Projeto Front End em equipe realizado no bootcamp da Kenzie Academy. É um site de análise de filmes onde é feito o cadastro, login, notas e comentários sobre o filme. Fui responsável pela página principal, a moviePage. Nela que eram feitas as análises.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "styledComponents",
          color: "pink-text-gradient",
        },
      ],
      image: kenziemovie,
      source_code_link: "https://github.com/RodrigoSRC/Kenzie-Movie",
    },
    {
      name: "School API",
      description:
        "Projeto Back End em Python realizado. É uma API Rest para o gerenciamento de cursos e aulas de uma escola de modalidade EAD. Obs: Comandos dos testes no README.md.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "django",
          color: "green-text-gradient",
        },
        {
          name: "postgresql",
          color: "pink-text-gradient",
        },
      ],
      image: schoolapi,
      source_code_link: "https://github.com/RodrigoSRC/School-API",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };