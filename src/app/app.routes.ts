import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ExperienceComponent } from './experience/experience';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects/projects';
import { ContactComponent } from './contact/contact';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'experience', component: ExperienceComponent},
    { path: 'projects', component: ProjectsComponent},
    { path: 'contact', component: ContactComponent},
    { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }