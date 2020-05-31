import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsServiceService {

  arrProjects: Project[];
  constructor() {
    this.arrProjects = [
      {
        name: '10minutosprogramando',
        description: 'el mejor canal de youtube de desarrollo',
        images: [],
        url: 'http://www.10minutosprogramando.com',
        year: 2018,
        client: 'yo mismo',
        urlClient: 'http://www.10minutosprogramando.com',
        category: 'web',
        technologies: 'de todo un poco'
      }
    ];
  } // Constructor closure

  getProjects(): Array<any> {
    return this.arrProjects;
  }

}
