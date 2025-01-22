import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { FeaturesComponent } from './components/features/features.component';
import { HomeComponent } from './components/home/home.component';
import { ClassesComponent } from './components/classes/classes.component';
import { ContactComponent } from './components/contact/contact.component';
import { ConnectComponent } from './components/connect/connect.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SignInComponent } from './components/connect/sign-in/sign-in.component';
import { SignUpComponent } from './components/connect/sign-up/sign-up.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FeaturesComponent,
    HomeComponent,
    ClassesComponent,
    ContactComponent,
    ConnectComponent,
    HeaderComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
