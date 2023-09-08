import { AfterViewInit, Component, OnInit } from '@angular/core';
import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Strato Dev';

  ngOnInit(): void {

    new LocomotiveScroll({
      lenisOptions: { smoothTouch: true },
    });
  }
}
