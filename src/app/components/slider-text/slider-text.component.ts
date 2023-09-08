import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-slider-text',
  templateUrl: './slider-text.component.html',
  styleUrls: ['./slider-text.component.css'],
})
export class SliderTextComponent implements OnInit {
  @ViewChild('text1', { static: true }) text1!: ElementRef<HTMLDivElement>;
  @ViewChild('text2', { static: true }) text2!: ElementRef<HTMLDivElement>;
  @ViewChild('sliderTrack', { static: true })
  sliderTrack!: ElementRef<HTMLDivElement>;
  Xpercent = 0;
  direction = -1;

  animation = () => {
    if (this.Xpercent <= -100) {
      this.Xpercent = 0;
    }
    if (this.Xpercent > 0) {
      this.Xpercent = -100;
    }
    gsap.set(this.text1.nativeElement, { xPercent: this.Xpercent });
    gsap.set(this.text2.nativeElement, { xPercent: this.Xpercent });
    this.Xpercent += 0.1 * this.direction;
    requestAnimationFrame(this.animation);
  };

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(this.sliderTrack.nativeElement, {
      x: '-=300px',
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top',
        end: window.innerHeight,
        scrub: true,
        onUpdate: (e) => {
          let newDirection = e.direction
          this.direction = newDirection *= -1;
        },
      },
    });

    requestAnimationFrame(this.animation);
  }
}
