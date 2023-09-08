import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  welcomeList = [
    '',
    'добро пожаловать', // Ruso
    '歓迎', // Japonés
    '歡迎', // Chino tradicional
    'willkommen', // Alemán
    'benvenuto', // Italiano
    'bienvenue', // Francés
    'welcome', // Inglés
    'bienvenido', // Español
  ];

  @ViewChild('welcome', { static: true }) welcome!: ElementRef<HTMLDivElement>;

  welcomeMessage = '';
  currentIndex = 0;

  ngOnInit(): void {
    const intervalId = setInterval(() => {
      if (this.currentIndex < this.welcomeList.length) {
        this.welcomeMessage = this.welcomeList[this.currentIndex];
        this.currentIndex += 1;
      } else {
        clearInterval(intervalId);

        this.welcome.nativeElement.classList.add('translate-up');
      }
    }, 200);
  }
}
