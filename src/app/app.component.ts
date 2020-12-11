import { Component, OnInit } from '@angular/core';
import {
  SwiperComponent,
  SwiperDirective,
  SwiperConfigInterface,
  SwiperScrollbarInterface,
  SwiperPaginationInterface
} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public index: number;
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
    slidesPerView: 3,
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



  ngOnInit(): void {
    this.index = 0;

  }

}
