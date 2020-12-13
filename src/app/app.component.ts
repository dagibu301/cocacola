import { Component } from '@angular/core';
import {
  SwiperConfigInterface,
} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public toggle = false;

  public slides = [
    '../assets/images/cocacola1.png',
    '../assets/images/cocacola2.png',
    '../assets/images/cocacola3.png',
    '../assets/images/cocacola4.png',
    '../assets/images/cocacola5.png',
    '../assets/images/cocacola6.png',
  ];

  public config: SwiperConfigInterface = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: window.screen.width < 630 ? 2 : 3,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: false,
    },
    keyboard: true,
    mousewheel: true,
    loop: true
  };

  toggleMenu() {
    this.toggle = !this.toggle;
  }

  onResize(event) {
    if (event.target.screen.width < 630) {
      this.config.slidesPerView = 2;
    } else {
      this.config.slidesPerView = 3;
    }
  }
}
