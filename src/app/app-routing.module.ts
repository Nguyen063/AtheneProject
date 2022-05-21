import { ForlearnerComponent } from './forlearner/forlearner.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ContentBlogComponent } from './content-blog/content-blog.component';
import { FortutorComponent } from './fortutor/fortutor.component';
import { HomepageComponent } from './homepage/homepage.component';
import { IntropageComponent } from './intropage/intropage.component';
import { ShowProfileComponent } from './show-profile/show-profile.component';
import { TutorProfileComponent } from './tutor-profile/tutor-profile.component';
import { ContentAtheneComponent } from './content-athene/content-athene.component';


const routes: Routes = [
  { path: '',redirectTo:'/homepage',pathMatch:'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'blog', component: BlogComponent },
  {path: 'blog/:id', component: ContentBlogComponent},
  { path: 'forlearner', component: ForlearnerComponent },
  { path: 'fortutor', component: FortutorComponent },
  { path: 'intropage', component: IntropageComponent },
  { path: 'tutorprofile', component: TutorProfileComponent },
  { path: 'showprofile', component: ShowProfileComponent },
  { path: 'homepage/:id', component: ContentAtheneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
