
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  repository: string;
  images: string[];
  
}

export const projects: Project[] = [
  {
    title:'E-commerce/Frontend (Project of bootcamp)',
    description:'A basic e-commerce web application focused on fast-food orders. The project allows users to browse products, view dishes, and simulate an online ordering experience.',
    technologies:['Javascript', 'bootstrap', 'CSS', 'HTML'],
    repository:'https://github.com/draculesti/ecommerceProject',
    images:['',''],
  },
  {
    title:'E-commerce/backend (Project of bootcamp)',
    description: 'A RESTful web service supporting a fast-food ordering system. The project manages product catalog data, handles cart and order state transitions, and provides API endpoints to process simulated user purchases and menu retrieval',
    technologies:['Java', 'springboot','sql'],
    repository:'https://github.com/draculesti/ecommerceProject-Backend',
    images:['',''],
    
  },
  {
    title:'Expenses Manager',
    description: 'Expenses Manager is a React + TypeScript + Vite app for creating and managing user profiles and tracking expenses per profile.',
    technologies:['React', 'Typescript', 'Shadcn', 'Tailiwind'],
    repository:'https://github.com/draculesti/expensesManagerApp',
    images:['',''],
   
  },
  // {
  //   title:'',
  //   description: '',
  //   technologies:['', ''],
  //   repository:'',
  //   images:['',''],
  // },
]