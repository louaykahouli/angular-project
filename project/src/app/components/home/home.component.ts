import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  weight: number | null = null; // Poids en kg
  height: number | null = null; // Taille en cm
  age: number | null = null; // Âge (optionnel)
  gender: string = ''; // Genre (optionnel)
  bmiResult: number | null = null; // Résultat de l'IMC
  bmiCategory: string = ''; // Catégorie de l'IMC

  calculateBMI() {
    if (this.weight && this.height && this.weight > 0 && this.height > 0) {
      // Convertir la taille en mètres
      const heightInMeters = this.height / 100;

      // Calculer l'IMC
      this.bmiResult = this.weight / (heightInMeters * heightInMeters);

      // Déterminer la catégorie de l'IMC
      this.bmiCategory = this.getBMICategory(this.bmiResult);
    } else {
      this.bmiResult = null;
      this.bmiCategory = 'Veuillez entrer un poids et une taille valides.';
    }
  }

  getBMICategory(bmi: number): string {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  }
}