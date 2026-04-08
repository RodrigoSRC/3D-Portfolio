import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  postgresql,
  // git,
  docker,
  nestjs,
  // nextjs,
  redis,
  jest,
  // supertest,
  websocket,
  rabbitmq,
  // apexcharts,
  salaonamao,
  kenziemovie,
  schoolapi,
  jca,
  testtecvix,
  testebetalent,
  udemy,
  logo,
  kenzielogo,
  lqlogo,
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
    title: "Desenvolvedor Full Stack",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React",
    icon: reactjs,
  },
  // {
  //   name: "Next.js",
  //   icon: nextjs,
  // },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "NestJS",
    icon: nestjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "Docker",
    icon: docker,
  },
  // {
  //   name: "Git",
  //   icon: git,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Jest",
    icon: jest,
  },
  // {
  //   name: "Supertest",
  //   icon: supertest,
  // },
  {
    name: "WebSocket",
    icon: websocket,
  },
  {
    name: "RabbitMQ",
    icon: rabbitmq,
  },
  // {
  //   name: "ApexCharts",
  //   icon: apexcharts,
  // },
];

const experiences = [
  {
    title: "Desenvolvedor Autodidata",
    company_name: "Udemy",
    icon: udemy,
    iconBg: "#E6DEDD",
    date: "Junho 2022 - Dezembro 2022",
    points: [
      "Primeiros passos na programação através de cursos online e vídeos, explorando os fundamentos do desenvolvimento web.",
      "Contato inicial com HTML, CSS e JavaScript, construindo projetos simples para fixação dos conceitos.",
      "Busca por uma formação mais imersiva com aulas ao vivo, comunidade ativa e suporte de profissionais qualificados.",
    ],
  },

  {
    title: "Desenvolvedor Full Stack em Formação",
    company_name: "Kenzie Academy Brasil",
    icon: kenzielogo,
    iconBg: "#E6DEDD",
    date: "Novembro 2022 - Janeiro 2024",
    points: [
      "Formação intensiva em Desenvolvimento Web Full Stack com projetos práticos entregues a cada sprint, incluindo projetos Front-End, Back-End e Full Stack.",
      "Experiência em tecnologias como JavaScript, TypeScript, React, NextJS, Node.js, Python, Express, Django, MySQL e ferramentas modernas de desenvolvimento.",
      "Desenvolvimento de Soft Skills: Gestão do Tempo (30h), Inteligência Emocional (30h) e Trabalho em Equipe (30h).",
      "Primeiro projeto em equipe, praticando code reviews, colaboração e versionamento de código com Git.",
    ],
  },

  {
    title: "Desenvolvedor Full Stack Júnior",
    company_name: "LQ Desenvolvimento de Sistemas",
    icon: lqlogo,
    iconBg: "#383E56",
    date: "Março 2025 - Março 2026",
    points: [
      "Desenvolvimento de aplicações web e mobile utilizando JavaScript e TypeScript com NestJS, Next.js, React e React Native (Expo).",
      "Criação e manutenção de sistemas completos, incluindo blogs, painéis administrativos (backoffice) e aplicativos mobile.",
      "Desenvolvimento de dashboards e gráficos interativos com Material UI (MUI) e ApexChartsJS, além de comunicação em tempo real com WebSockets (Socket.IO).",
      "Integração e modelagem de dados com PostgreSQL e MongoDB, participação em code reviews, dailies, pair programming e retrospectivas.",
    ],
  },

  {
    title: "Desenvolvedor Full Stack",
    company_name: "Freelancer",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "Junho 2024 - Atualmente",
    points: [
      "Gestão autônoma de projetos personalizados, desde o levantamento de requisitos até a entrega final ao cliente.",
      "Comunicação direta com clientes para apresentação de progresso, alinhamento de expectativas e soluções técnicas.",
      "Desenvolvimento de soluções web com foco em performance, responsividade e melhores práticas de segurança.",
      "Autogestão de tempo e metas, garantindo a entrega de serviço excepcional para cada cliente.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "Está sendo ótimo tê-lo conosco, Rodrigo! 🫡",
    name: "Lucas Quadrini",
    designation: "CEO",
    company: "LQ Desenvolvimento de Sistemas",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "Muito satisfeita com o resultado do trabalho. Fez exatamente o que eu estava esperando e precisando. Profissionalismo e criatividade foram incríveis! Meu agradecimento e com certeza trabalharei com ele novamente em uma nova oportunidade!",
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
    name: "TestTecVix",
    description:
      "Teste técnico Full Stack para a Vituax com autenticação JWT, controle de permissões por roles e gerenciamento de máquinas virtuais. Back-end em Node.js com Express e Prisma, front-end em React com TypeScript. OBS: Para avaliar, acesse a branch release.",
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
        name: "node.js",
        color: "pink-text-gradient",
      },
      {
        name: "prisma",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "green-text-gradient",
      },
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
    ],
    image: testtecvix,
    source_code_link: "https://github.com/RodrigoSRC/TestTecVix",
  },
  {
    name: "Just Cold Air",
    description:
      "Site institucional para empresa de ar-condicionado na Flórida (EUA). Desenvolvido com WordPress e Elementor PRO, com foco em entrega rápida, design responsivo e satisfação do cliente.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "elementor",
        color: "green-text-gradient",
      },
      {
        name: "responsivo",
        color: "pink-text-gradient",
      },
    ],
    image: jca,
    source_code_link: "https://justcoldair.com",
  },
  {
    name: "Barber Pro",
    description:
      "Sistema Full Stack Web e Mobile para agendamento em barbearias, com integração de pagamento via Pagar.me. O app mobile permite ao cliente escolher corte, horário e profissional, enquanto o painel web oferece controle total ao administrador.",
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
      "Projeto Front-End em equipe no bootcamp da Kenzie Academy. Site de análise de filmes com cadastro, login, sistema de notas e comentários. Fui responsável pelo desenvolvimento da página principal (moviePage) com React, TypeScript e Styled Components.",
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
      "API REST em Python/Django para gerenciamento de cursos e aulas de uma escola EAD. Inclui testes automatizados, autenticação e operações CRUD completas. Foco em boas práticas, Clean Code e cobertura de testes.",
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
  {
    name: "TesteBeTalent",
    description:
      "API RESTful de processamento de pagamentos multi-gateway construída com AdonisJS 6. Sistema inteligente que realiza tentativas de cobrança em cascata, com fallback automático entre gateways por prioridade e suporte a reembolso. Inclui autenticação JWT, validação robusta com VineJS e testes com Japa.",
    tags: [
      {
        name: "adonisjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "vinejs",
        color: "blue-text-gradient",
      },
      {
        name: "japa",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
    ],
    image: testebetalent,
    source_code_link: "https://github.com/RodrigoSRC/TesteBeTalent",
  },
];

export { services, technologies, experiences, testimonials, projects };
