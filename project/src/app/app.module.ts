import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { FeaturesComponent } from './components/features/features.component';
import { HomeComponent } from './components/home/home.component';
import { ClassesComponent } from './components/classes/classes.component';
import { ContactComponent } from './components/contact/contact.component';
import { ConnectComponent } from './components/connect/connect.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FeaturesComponent,
    HomeComponent,
    ClassesComponent,
    ContactComponent,
    ConnectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
