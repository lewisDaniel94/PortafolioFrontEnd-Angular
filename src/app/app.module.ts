import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { LogosHeaderComponent } from './component/logos-header/logos-header.component';
import { BannerComponent } from './component/banner/banner.component';
import { ExperienciaComponent } from './component/experiencia/experiencia.component';
import { AcercaDeComponent } from './component/acerca-de/acerca-de.component';
import { FormacionComponent } from './component/formacion/formacion.component';
import { ProyectosComponent } from './component/proyectos/proyectos.component';
import { SkillComponent } from './component/skill/skill.component';
import { FooterComponent } from './component/footer/footer.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogosHeaderComponent,
    BannerComponent,
    ExperienciaComponent,
    AcercaDeComponent,
    FormacionComponent,
    ProyectosComponent,
    SkillComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({ }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
