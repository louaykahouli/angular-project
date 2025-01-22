import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  user = {
    fullname: '',
    email: '',
    number: '',
    CIN: '',
    password: ''
  };

  message = '';
  users: any[] = []; // Tableau pour stocker les utilisateurs inscrits

  constructor(private router: Router) { }

  onSubmit() {
    // Vérifier si l'email ou le CIN existe déjà
    const existingUser = this.users.find(u => u.email === this.user.email || u.CIN === this.user.CIN);
    if (existingUser) {
      this.message = 'Email or CIN already exists';
    } else {
      // Ajouter l'utilisateur au tableau
      this.users.push({ ...this.user });
      this.message = 'Inscription réussie!';
      // Rediriger vers la page de connexion
      this.router.navigate(['/sign-in']);
    }
  }
}