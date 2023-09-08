import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SliderTextComponent } from './components/slider-text/slider-text.component';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    AboutComponent,
    FooterComponent,
    ProjectsComponent,
    WelcomeComponent,
    SliderTextComponent,
    MenuButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
