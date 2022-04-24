import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ForstudentComponent } from './forstudent/forstudent.component';
import { FortutorComponent } from './fortutor/fortutor.component';
import { BlogComponent } from './blog/blog.component';
import { IntropageComponent } from './intropage/intropage.component';
import { TutorProfileComponent } from './tutor_profile/tutor-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ForstudentComponent,
    FortutorComponent,
    BlogComponent,
    IntropageComponent,
    TutorProfileComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
