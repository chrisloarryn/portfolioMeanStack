import { Project } from './../../models/project';
import { Component, OnInit } from '@angular/core';
import { ProjectsServiceService } from './../../services/projects-service.service'

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.scss']
})
export class ListProjectsComponent implements OnInit {

  arrProjects: Project[];

  constructor(private projectsService: ProjectsServiceService) {
    this.arrProjects = this.projectsService.getProjects();
    console.log(this.arrProjects);
  }

  ngOnInit(): void {
  }

}
