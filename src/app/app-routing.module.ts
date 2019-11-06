import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GittyComponent } from './gitty/gitty.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { GittyAboutComponent } from './gitty-about/gitty-about.component';


const routes: Routes = [
  { path: 'gitty', component: GittyComponent},
  {path: 'about' , component: GittyAboutComponent},
  { path:'', redirectTo:"/about", pathMatch:"full"},
  { path:'**', component:ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
