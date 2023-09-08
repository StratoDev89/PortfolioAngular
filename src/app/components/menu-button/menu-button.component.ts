import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.css'],
})
export class MenuButtonComponent implements AfterViewInit {
  isMenuActive = false;
  tlBars = gsap.timeline({ reversed: true });
  tlOverlay = gsap.timeline({ reversed: true });

  options = ['home', 'about', 'projects', 'contact'];
  @ViewChild('overlay', { static: true }) overlay!: ElementRef<HTMLDivElement>;
  @ViewChild('menuIcon', { static: true })
  menuIcon!: ElementRef<HTMLDivElement>;
  @ViewChild('topBar', { static: true }) topBar!: ElementRef;
  @ViewChild('bottomBar', { static: true }) bottomBar!: ElementRef;
  @ViewChild('menuOptions', { static: true }) menuOptions!: ElementRef<HTMLDivElement>;


  ngAfterViewInit(): void {
    gsap.set(this.menuIcon.nativeElement, {
      top: 20,
      left: 16,
    });

    // Bars to X effect tl2
    this.tlBars
      .to(
        this.topBar.nativeElement,
        {
          y: 6,
          duration: 0.5,
        },
        '0'
      )
      .to(
        this.bottomBar.nativeElement,
        {
          y: -6,
          duration: 0.5,
        },
        '0'
      )
      .to(
        this.topBar.nativeElement,
        {
          rotation: 45,
          transformOrigin: 'center center',
          duration: 0.5,
        },
        '0.3'
      )
      .to(
        this.bottomBar.nativeElement,
        {
          rotation: -45,
          transformOrigin: 'center center',
          duration: 0.5,
        },
        '0.3'
      );

    // Animation Overlay Grow
    this.tlOverlay
      .to([this.overlay.nativeElement], {
        width: 230,
        height: 280,
        duration: 0.3,
        ease: 'power1.inOut',
      })
      .to(
        this.menuIcon.nativeElement,
        {
          top: 30,
          left: 24,
          duration: 0.3,
          ease: 'power1.inOut',
        },
        '0'
      ).from(this.menuOptions.nativeElement, {
        x:'-30px',
        display:'none',
        opacity:0,
        duration:0.3,

        ease: 'power1.inOut',
      })
  }

  toggleMenu() {
    if (this.isMenuActive) {
      this.tlBars.reverse();
      this.tlOverlay.reverse();
    } else {
      this.tlBars.play();
      this.tlOverlay.play();
    }

    this.isMenuActive = !this.isMenuActive;
  }
}
