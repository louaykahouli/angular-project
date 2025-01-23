import { HttpClient } from '@angular/common/http'; // Importez uniquement HttpClient
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css'] // Supprimez providers
})
export class ConnectComponent {
  isActive = false;
  message = '';

  credentials = { email: '', password: '' };
  user = { fullname: '', CIN: '', email: '', number: '', password: '' };

  constructor(private router: Router, private http: HttpClient) {}

  toggleForm(active: boolean) {
    this.isActive = active;
    this.message = '';
  }

  // Connexion
  onSignIn() {
    this.http.post('http://localhost:3000/api/auth/login', this.credentials)
      .subscribe(
        (response: any) => {
          this.message = 'Connexion réussie!';
          this.router.navigate(['/accueil']);
        },
        (error) => {
          this.message = 'Email ou mot de passe incorrect';
        }
      );
  }

  // Inscription
  onSignUp() {
    this.http.post('http://localhost:3000/api/auth/register', this.user)
      .subscribe(
        (response: any) => {
          this.message = 'Inscription réussie!';
          this.toggleForm(false); // Bascule vers le formulaire de connexion
        },
        (error) => {
          this.message = 'Email ou CIN déjà utilisé';
        }
      );
  }
}