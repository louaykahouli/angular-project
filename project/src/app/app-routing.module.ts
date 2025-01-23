import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FeaturesComponent } from './components/features/features.component';
import { ClassesComponent } from './components/classes/classes.component' 
import { ContactComponent } from './components/contact/contact.component' 
import { ConnectComponent } from './components/connect/connect.component';

// Define the routes properly within the Routes array
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect base path to Home
  { path: 'home', component: HomeComponent },         // Home Route
  { path: 'about', component: AboutComponent },       // About Route
  { path: 'features', component: FeaturesComponent }, // Features Route
  { path: 'classes', component:ClassesComponent},
  { path: 'contact', component:ContactComponent},
  { path: 'connect', component:ConnectComponent},

  { path: '**', redirectTo: 'home' }                  // Wildcard Route (redirect to Home)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configure the router at the application's root level
  exports: [RouterModule]                  // Export RouterModule to make it available throughout the app
})
export class AppRoutingModule { }
