import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ForstudentComponent } from './forstudent/forstudent.component';
import { FortutorComponent } from './fortutor/fortutor.component';
import { HomepageComponent } from './homepage/homepage.component';
import { IntropageComponent } from './intropage/intropage.component';


const routes: Routes = [
  { path: '',redirectTo:'/homepage',pathMatch:'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'forstudent', component: ForstudentComponent },
  { path: 'fortutor', component: FortutorComponent },
  { path: 'intropage', component: IntropageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
