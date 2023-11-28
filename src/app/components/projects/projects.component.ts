import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projectsData = [
    {
      title: 'ECOMMERCE',
      tech: 'Angular Tailwind Gsap',
      image: 'imagen1',
      description:
        'Basicamente un modelo de Ecommerce con auth, consumiendo API externa, user:john@mail.com pass:changeme',
      address: 'https://mellifluous-creponne-a118c3.netlify.app/',
    },
    {
      title: 'API',
      tech: 'Node',
      image: 'imagen2',
      description: '',
      address:
        'https://api-node-js-git-main-stratodev89.vercel.app/?vercelToolbarCode=GkV_1m8IlXolfJs',
    },
    {
      title: 'Lidice Logistic',
      tech: 'Angular, Gsap, locomotiveScroll',
      image: 'imagen2',
      description: '',
      address: 'https://lidice.net/',
    },
    {
      title: 'App Music Team',
      tech: 'Angular, Gsap, Angular animations, Express, MongoDb',
      image: 'imagen2',
      description: '',
      address: 'https://app-equipo-musica-culto.vercel.app/',
    },
  ];
}
