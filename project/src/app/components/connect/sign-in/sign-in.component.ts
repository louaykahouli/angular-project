import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  credentials = {
    email: '',
    password: ''
  };

  message = '';

  // Simuler une liste d'utilisateurs (à remplacer par les utilisateurs inscrits)
  users = [
    { email: 'admin@example.com', password: 'password123', fullname: 'Admin User' }
  ];

  constructor(private router: Router) { }

  onSubmit() {
    const user = this.users.find(u => u.email === this.credentials.email && u.password === this.credentials.password);
    if (user) {
      this.message = 'Connexion réussie!';
      // Rediriger vers une autre page (par exemple, une page d'accueil)
      this.router.navigate(['/accueil']);
    } else {
      this.message = 'Email ou mot de passe incorrect';
    }
  }
}