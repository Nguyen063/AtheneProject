import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FortutorComponent } from './fortutor/fortutor.component';
import { BlogComponent } from './blog/blog.component';
import { IntropageComponent } from './intropage/intropage.component';
import { TutorProfileComponent } from './tutor-profile/tutor-profile.component';
import { HttpClientModule } from '@angular/common/http';

import { HomepageComponent } from './homepage/homepage.component';
import { ToastrModule } from 'ngx-toastr';
import { ContentBlogComponent } from './content-blog/content-blog.component';
import { ShowProfileComponent } from './show-profile/show-profile.component';
import { ForlearnerComponent } from './forlearner/forlearner.component';
import { ContentAtheneComponent } from './content-athene/content-athene.component';
import { FormTutorComponent } from './form-tutor/form-tutor.component';
import { FormLearnerComponent } from './form-learner/form-learner.component';
import { FormFindLearnerComponent } from './form-find-learner/form-find-learner.component';
import { FormFindTutorComponent } from './form-find-tutor/form-find-tutor.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ForlearnerComponent,
    FortutorComponent,
    BlogComponent,
    IntropageComponent,
    TutorProfileComponent,
    HomepageComponent,
    ContentBlogComponent,
    ShowProfileComponent,
    ForlearnerComponent,
    ContentAtheneComponent,
    FormTutorComponent,
    FormLearnerComponent,
    FormFindLearnerComponent,
    FormFindTutorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      progressBar: true,
      progressAnimation:"increasing",
      preventDuplicates: true

    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
