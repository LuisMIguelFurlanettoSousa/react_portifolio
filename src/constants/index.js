import API_NODEJS from "../assets/projects/API_NODEJS .png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Sou um desenvolvedor full stack apaixonado por desafios e sempre em busca de aprimoramento contínuo. Entre minhas experiências tenho Python, JavaScript, Node.js, TailwindCSS, SQL Server e MongoDB. Meu foco é criar soluções eficientes e escaláveis, sempre buscando melhorar minhas habilidades e me tornar um profissional mais eficaz.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2020 - Present",
    role: "Vendedor / Gerente",
    company: "Fazendão agropecuária",
    description: `Atuo principalmente como vendedor, aprimorando minhas habilidades de comunicação, persuasão e proatividade no atendimento ao cliente. Além disso, sou responsável pelo gerenciamento de estoque e processo de compras, garantindo a reposição eficiente de produtos e contribuindo para a organização e crescimento da empresa.`,
    technologies: ["Proatividade", "Comunicação", "Organização", "Trabalho em equipe"],
  },
];

export const PROJECTS = [
{
    title: "🛠️ API Segura com Autenticação JWT em Node.js",
    image: API_NODEJS,
    description:
      "Projeto onde implementei autenticação segura em uma aplicação Node.js! Inclui registro de usuários com criptografia de senha, autenticação via JWT e proteção de rotas privadas.",
    technologies: ["Node.js", "Express", "bcrypt", "JWT", "Dotenv", "MongoDB / PostgreSQL"],
},

  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  phoneNo: "+55 34997237900",
  email: "lfurlanettosousa@gmail.com",
};
