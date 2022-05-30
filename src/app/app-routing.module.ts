import { ForlearnerComponent } from './forlearner/forlearner.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ContentBlogComponent } from './content-blog/content-blog.component';
import { FortutorComponent } from './fortutor/fortutor.component';
import { HomepageComponent } from './homepage/homepage.component';
import { IntropageComponent } from './intropage/intropage.component';
import { ShowProfileComponent } from './show-profile/show-profile.component';

import { ContentAtheneComponent } from './content-athene/content-athene.component';
import { FormFindLearnerComponent } from './form-find-learner/form-find-learner.component';
import { FormLearnerComponent } from './form-learner/form-learner.component';
import { FormFindTutorComponent } from './form-find-tutor/form-find-tutor.component';
import { TutorProfileComponent } from './tutor-profile/tutor-profile.component';
import { FormTutorComponent } from './form-tutor/form-tutor.component';




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
  { path: 'homapage/:id', component: ContentAtheneComponent },
  { path: 'form-find-learner', component: FormFindLearnerComponent },
  { path: 'form-find-tutor', component: FormFindTutorComponent },
  { path: 'form-learner', component: FormLearnerComponent },
  { path: 'form-tutor', component: FormTutorComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
