import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home';
import { ContactComponent } from './components/contact';
import { ViewProjectComponent } from './components/view-project';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  }
  // ,
  // {
  //   path: 'contact',
  //   component: ContactComponent
  // },
  // {
  //   path: 'projects/:id',
  //   component: ViewProjectComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
