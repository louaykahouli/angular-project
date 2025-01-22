import { Component } from '@angular/core';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent {
  isActive = false; // Contrôle l'état de bascule
  message = ''; // Message à afficher

  // Données du formulaire de connexion
  credentials = {
    email: '',
    password: ''
  };

  // Données du formulaire d'inscription
  user = {
    fullname: '',
    CIN: '',
    email: '',
    number: '',
    password: ''
  };

  // Bascule entre les formulaires
  toggleForm(active: boolean) {
    this.isActive = active;
  }

  // Soumission du formulaire de connexion
  onSignIn() {
    // Simule une connexion réussie
    if (this.credentials.email === 'admin@example.com' && this.credentials.password === 'password123') {
      this.message = 'Connexion réussie!';
      // Rediriger vers une autre page
    } else {
      this.message = 'Email ou mot de passe incorrect';
    }
  }

  // Soumission du formulaire d'inscription
  onSignUp() {
    // Simule une inscription réussie
    this.message = 'Inscription réussie!';
    this.toggleForm(false); // Bascule vers le formulaire de connexion
  }
}
