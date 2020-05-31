import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ViewProjectComponent } from './components/view-project/view-project.component';
// import { ListProjectsComponent } from './components/list-projects/list-projects.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  // {
  //   path: 'projects',
  //   component: ListProjectsComponent
  // },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'projects/:id',
    component: ViewProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
