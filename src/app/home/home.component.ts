import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('flyIn', [
      transition('void => *', [
        style({ transform: 'translateY(-100%)' }),
        animate('1s')
      ]),
      transition('* => void', [
        animate('2s', style({ transform: 'translateY(100%)' }))
      ])
    ]),
  ]
  
})
export class HomeComponent implements OnInit {

  title = {
    header: "City Guide",
    text: "Turkey has a lot of great destinations to offer. Exceptional landmarks, wonderful natural sceneries, historical legacies and a rich culture. Turkey is renowned for its hospitality and is always eager to please. The perfect Turkish experience is just around the corner."
  }

  imgUrl = [
    "https://www.dreamofholiday.com/userFiles/bolgeler/950205793_1588435982.jpg",
    "https://www.gucluanadolugazetesi.com/wp-content/uploads/Ankara-Turkey-2.jpg",
    "https://blog.e-bursum.com/wp-content/uploads/2019/03/660-660-10.jpg",
    "https://www.antalya.bel.tr/images/antalya-merkez.jpg"
  ];

  flyIn: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.flyIn = this.flyIn ? false : true;

  }

}
